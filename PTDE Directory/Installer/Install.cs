using InstallerGUI;
using System;
using System.Diagnostics;
using System.IO;
using System.Text;
using System.Text.RegularExpressions;
using System.Windows.Forms;

namespace PTDE_Installer.Installer
{
    public class Install
    {
        string ptdeInstall;
        string currentDirectory = Environment.CurrentDirectory;
        public delegate void ProgressUpdate(int step, string update);
        public event ProgressUpdate OnProgressUpdate;
        public int progress;

        public void InstallMod()
        {
            ptdeInstall = InstallerForm.passInstallPath.Replace(@"\DATA\DARKSOULS.exe", ""); // remove .Replace(@"\DATA\DARKSOULS.exe", ""); -  if using folder browser instead of file browser
            bool fileExists = File.Exists(ptdeInstall + @"\DATA\DARKSOULS.exe");

            if (fileExists)
            {
                progress = 0;
                OnProgressUpdate(progress, "Initial Check");
                CheckForLog();
                if (CheckForInstaller()) //Check user hasn't put installer in the wrong folder
                {
                    MessageBox.Show(@"You have unpacked mod files to your Dark Souls install directory
Please remove installer and mod files from PTDE install folder, 
unpack mod files and installer to unique folder and run installer from there", "WARNING", MessageBoxButtons.OK, MessageBoxIcon.Warning);
                    OnProgressUpdate(progress, "Error: Installer unpacked to Dark Souls directory");

                }
                else if (CheckForNoMod()) //Make sure user isn't trying to run EXE on dry folder.
                {
                    MessageBox.Show(@"There are no mod files in the location of this EXE", "WARNING", MessageBoxButtons.OK, MessageBoxIcon.Warning);
                    OnProgressUpdate(progress, "No mod files found in EXE location");
                }
                else if (CheckForUDSFM()) //Check that UDSFM is in the directory with the exe
                {
                    MessageBox.Show(@"UnpackDarkSoulsForModding.exe must start in the same directory as this EXE", "WARNING", MessageBoxButtons.OK, MessageBoxIcon.Warning);
                    OnProgressUpdate(progress, "UnpackDarkSoulsForModding Missing from mod files");
                }
                else if (PTDEUnpacked()) //Update folder with new files
                {
                    progress++;
                    OnProgressUpdate(progress, "Updating");
                    ModUpdate();
                    OnProgressUpdate(4, "Updating complete");
                    MessageBox.Show("Mod Update Complete", "Success!");

                }
                else //Run Unpacker and install
                {
                    UnpackDarkSouls();
                    InitialInstall();
                }
            }
            else
            {
                OnProgressUpdate(progress, "Incorrect Folder Selected");
                MessageBox.Show("Please Select Dark Souls: Prepare To Die Edition Install Folder (Not the DATA folder!)", "ERROR", MessageBoxButtons.OK, MessageBoxIcon.Error);
            }

        }

        private void CheckForLog()
        {
            string udsfmLog = ptdeInstall + @"\DATA\unpackDS-latestlog.txt";
            // Check if file already exists, if not, make a temp one with placeholder so it can be read; 
            OnProgressUpdate(progress, "Checking for log file");
            if (!File.Exists(udsfmLog))
            {
                using (FileStream fs = File.Create(udsfmLog))
                {
                    // Add some text to file    
                    Byte[] title = new UTF8Encoding(true).GetBytes("Placeholder");
                    fs.Write(title, 0, title.Length);
                }
            }
        }

        public bool CheckForInstaller()
        {
            var process = Process.GetCurrentProcess();
            string exeName = process.MainModule.ModuleName;
            string modInstallerDATA = ptdeInstall + @"\DATA\" + exeName;
            string modInstallerRoot = ptdeInstall + @"\" + exeName;
            // Check if the installer is in PTDE install directory or DATA folder

            OnProgressUpdate(progress, "Checking Installer Location");
            if (File.Exists(modInstallerDATA))
            {
                return true;
            }
            else if (File.Exists(modInstallerRoot))
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        public bool CheckForNoMod()
        {
            string exePath = AppDomain.CurrentDomain.BaseDirectory;
            string modDATA = exePath + @"\DATA\";

            OnProgressUpdate(progress, "Checking for mod files");
            if (Directory.Exists(modDATA))
            {
                return false;
            }
            else
            {
                return true;
            }
        }

        public bool CheckForUDSFM()
        {
            string exePath = AppDomain.CurrentDomain.BaseDirectory;
            string udsfmSource = exePath + @"UnpackDarkSoulsForModding.exe";

            OnProgressUpdate(progress, "Checking for mod files");
            if (File.Exists(udsfmSource))
            {
                return false;
            }
            else
            {
                return true;
            }
        }

        public bool PTDEUnpacked()
        {
            string pattern = "exit code 0";
            string unpackLog = System.IO.File.ReadAllText(ptdeInstall + @"\DATA\unpackDS-latestlog.txt");


            OnProgressUpdate(progress, "Checking Log");
            Match match = Regex.Match(unpackLog, pattern);
            if (match.Success)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        public void UnpackDarkSouls()
        {

            string sourceUDSFM = currentDirectory + @"\UnpackDarkSoulsForModding.exe";
            string destinationUDSFM = ptdeInstall + @"\DATA\UnpackDarkSoulsForModding.exe";
            bool udsfmExists = File.Exists(destinationUDSFM);

            if (!udsfmExists)
            {

                OnProgressUpdate(progress, "Copying UDSFM");
                File.Copy(sourceUDSFM, destinationUDSFM);
            }

            Process process = new Process()
            {
                StartInfo = new ProcessStartInfo(ptdeInstall + @"\DATA\UnpackDarkSoulsForModding.exe")
                {
                    WindowStyle = ProcessWindowStyle.Normal,
                    WorkingDirectory = Path.GetDirectoryName(ptdeInstall + @"\DATA\UnpackDarkSoulsForModding.exe"),
                }
            };

            process.Start();
            progress++;
            OnProgressUpdate(progress, "Unpacking Dark Souls");
            process.WaitForExit();
        }

        private void InitialInstall()
        {

            if (PTDEUnpacked()) //Check again if PTDE unpacked successfully
            {
                ModUpdate();
                InstallDSCM();
                OnProgressUpdate(4, "Install complete!");
                MessageBox.Show("Mod Installation Complete", "Success!");

            }
            else
            {
                OnProgressUpdate(progress, "Unpacking Failed");
                MessageBox.Show("Error: Dark Souls not unpacked. Re-run installer", "ERROR", MessageBoxButtons.OK, MessageBoxIcon.Error);
            }
        }

        private void ModUpdate()
        {
            var sourceDirectoryInfo = new DirectoryInfo(Path.Combine(currentDirectory, "DATA"));
            var targetDirectoryInfo = new DirectoryInfo(Path.Combine(ptdeInstall + @"\DATA"));

            BackupSettings();
            CopyFiles(sourceDirectoryInfo, targetDirectoryInfo);
            RestoreSettings();
        }

        private void CopyFiles(DirectoryInfo source, DirectoryInfo target)
        {
            Directory.CreateDirectory(target.FullName);

            foreach (var file in source.GetFiles())
            {
                file.CopyTo(Path.Combine(target.FullName, file.Name), true);
                OnProgressUpdate(progress, @"Copying:" + file.Name);
            }

            foreach (var sourceSubdirectory in source.GetDirectories())
            {
                var targetSubdirectory = target.CreateSubdirectory(sourceSubdirectory.Name);
                CopyFiles(sourceSubdirectory, targetSubdirectory);
                OnProgressUpdate(progress, @"Copying:" + sourceSubdirectory.Name);
            }
        }

        private void BackupSettings()
        {
            string iniDSFix = ptdeInstall + @"\DATA\DSfix.ini";
            string iniDSFixKeys = ptdeInstall + @"\DATA\DSfixKeys.ini";
            string inid3d9_Mod = ptdeInstall + @"\DATA\d3d9_Mod.ini";

            progress++;
            OnProgressUpdate(progress, "Backing Up INIs");

            if (File.Exists(iniDSFix))
            {
                OnProgressUpdate(progress, @"Backing up DSFix.ini");
                if(!File.Exists(iniDSFix + @".bak"))
                    File.Move(iniDSFix, Path.ChangeExtension(iniDSFix, "ini.bak"));

            }

            if (File.Exists(iniDSFixKeys))
            {
                OnProgressUpdate(progress, @"Backing up DSFixKeys.ini");
                if (!File.Exists(iniDSFixKeys + @".bak"))
                    File.Move(iniDSFixKeys, Path.ChangeExtension(iniDSFixKeys, "ini.bak"));
            }

            if (File.Exists(inid3d9_Mod))
            {
                OnProgressUpdate(progress, @"Backing up inid3d9_Mod.ini");
                if (!File.Exists(inid3d9_Mod + @".bak"))
                    File.Move(inid3d9_Mod, Path.ChangeExtension(inid3d9_Mod, "ini.bak"));
            }
        }

        private void RestoreSettings()
        {
            string iniDSFix = ptdeInstall + @"\DATA\DSfix.ini";
            string iniDSFixKeys = ptdeInstall + @"\DATA\DSfixKeys.ini";
            string inid3d9_Mod = ptdeInstall + @"\DATA\d3d9_Mod.ini";

            progress++;
            OnProgressUpdate(progress, "Restoring INIs");


            if (File.Exists(iniDSFix + @".bak"))
            {
                OnProgressUpdate(progress, @"Restoring DSFix.ini");
                File.Delete(iniDSFix);
                File.Move(iniDSFix + @".bak", Path.ChangeExtension(iniDSFix, "ini"));
            }

            if (File.Exists(iniDSFixKeys + @".bak"))
            {
                OnProgressUpdate(progress, @"Restoring DSFixKeys.ini");
                File.Delete(iniDSFixKeys);
                File.Move(iniDSFixKeys + @".bak", Path.ChangeExtension(iniDSFixKeys, "ini"));
            }

            if (File.Exists(inid3d9_Mod + @".bak"))
            {
                OnProgressUpdate(progress, @"Restoring inid3d9_Mod.ini");
                File.Delete(inid3d9_Mod);
                File.Move(inid3d9_Mod + @".bak", Path.ChangeExtension(inid3d9_Mod, "ini"));
            }
        }

        private void InstallDSCM()
        {
            string dscmSource = currentDirectory + @"\DSCM.exe";
            string dscmDest = ptdeInstall + @"\DSCM.exe";
            bool dscmInstalled = File.Exists(dscmDest);
            bool dscmIncluded = File.Exists(dscmSource);

            if (dscmIncluded)
            {
                if (!dscmInstalled)
                {

                    OnProgressUpdate(progress, "Installing DSCM");
                    File.Copy(dscmSource, dscmDest, true);
                }
            }


        }

        public string passBrowsePath;
        public void BrowseFiles()
        {
            //Replace above code with this for folder browser
            //FolderBrowserDialog fbd = new FolderBrowserDialog { };
            //if (fbd.ShowDialog() == System.Windows.Forms.DialogResult.OK)
            //    passBrowsePath = fbd.SelectedPath;
            // You will also need to remove replace functionality up for the ptdeInstall string at the top of InstallMod() method

            OpenFileDialog fbd = new OpenFileDialog { };
            if (fbd.ShowDialog() == System.Windows.Forms.DialogResult.OK)
                passBrowsePath = fbd.FileName;
        }

    }
}
