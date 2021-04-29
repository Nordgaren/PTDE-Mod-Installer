using PTDE_Installer.Installer;
using System;
using System.ComponentModel;
using System.Windows.Forms;

namespace InstallerGUI
{
    public partial class InstallerForm : Form
    {

        Install runInstall = new Install();

        public InstallerForm()
        {
            InitializeComponent();
            runInstall.OnProgressUpdate += runInstall_OnProgressUpdate;
        }

        private void browse_Click(object sender, EventArgs e)
        {
            runInstall.BrowseFiles();
            installPathBox.Text = runInstall.passBrowsePath; //Get's browse path from Install class. 
        }

        public static string passInstallPath;
        private void install_Click(object sender, EventArgs e)
        {
            passInstallPath = installPathBox.Text; //passes installPathBox to Install class. Needed for copy paste functionality.
            if (!backgroundWorker.IsBusy)
            {
                backgroundWorker.RunWorkerAsync();
            }
        }

        private void installer_Load(object sender, EventArgs e)
        {
            this.Text = "Install PTDE Mod"; //Form title top left

        }

        private void backgroundWorker_DoWork(object sender, DoWorkEventArgs e)
        {
            runInstall.InstallMod();
        }

        private void backgroundWorker_ProgressChanged(object sender, ProgressChangedEventArgs e)
        {
            progressBar.Value = e.ProgressPercentage;
            progressUpdate.Text = (string)e.UserState;
        }
        private void runInstall_OnProgressUpdate(int step , string value)
        {
            backgroundWorker.ReportProgress(step , value);
        }

        private void backgroundWorker_RunWorkerCompleted(object sender, RunWorkerCompletedEventArgs e)
        {
            progressBar.Value = 0;
        }

        private void InstallerForm_FormClosing_1(object sender, FormClosingEventArgs e)
        {
            if (backgroundWorker.IsBusy) // Keep people from exiting while the backgroundWorker is running
            {
                DialogResult dialogResult = MessageBox.Show("Are you sure you wish to exit? Mod installer is still installing", "WARNING", MessageBoxButtons.YesNo, MessageBoxIcon.Warning ,MessageBoxDefaultButton.Button2);
                if (dialogResult == DialogResult.Yes)
                {
                    e.Cancel = false;
                }
                else if (dialogResult == DialogResult.No)
                {
                    e.Cancel = true;
                }
            }
        }

        private void instructions_Click(object sender, EventArgs e)
        {

        }
    }

}
