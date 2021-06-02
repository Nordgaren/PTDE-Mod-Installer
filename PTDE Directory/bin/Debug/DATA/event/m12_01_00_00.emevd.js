// ==EMEVD==
// @docs    ds1-common.emedf.json
// @compress    None
// @game    DarkSouls1
// @string    
// @linked    []
// ==/EMEVD==

//  Constructor
Event(0, Default, function() {
    InitializeEvent(0, 11219915, 0); // Add fog wall if player has not killed Artorious. For early BOS
    InitializeEvent(0, 11219916, 0); // Added warp point to return to firelink from BOS
    InitializeEvent(0, 11210700, 0);
    SkipIfMultiplayerState(10, MultiplayerState.Client);
    DeactivateObject(1211988, Disabled);
    DeleteMapSFX(1211989, false);
    DeactivateObject(1211994, Disabled);
    DeleteMapSFX(1211995, false);
    DeactivateObject(1211996, Disabled);
    DeleteMapSFX(1211997, false);
    DeactivateObject(1211998, Disabled);
    DeleteMapSFX(1211999, false);
    DeactivateObject(1211986, Disabled);
    DeleteMapSFX(1211987, false);
    ActivateHit(1213061, Disabled);
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 11210539);
    ActivateHit(1213061, Enabled);
    ActivateHit(1213060, Disabled);
    InitializeEvent(0, 11215090, 0);
    InitializeEvent(0, 11215091, 0);
    InitializeEvent(0, 11215092, 0);
    SetMapSoundState(1213800, Disabled);
    SkipIfEventFlag(6, OFF, TargetEventFlagType.EventFlag, 11210000);
    InitializeEvent(0, 11210000, 0);
    DeactivateObject(1211790, Disabled);
    DeleteMapSFX(1211791, false);
    DeactivateObject(1211792, Disabled);
    DeleteMapSFX(1211793, false);
    SkipUnconditionally(8);
    InitializeEvent(0, 11215000, 0);
    InitializeEvent(0, 11215001, 0);
    InitializeEvent(0, 11215002, 0);
    InitializeEvent(0, 11215003, 0);
    InitializeEvent(0, 11215004, 0);
    InitializeEvent(0, 11215005, 0);
    InitializeEvent(0, 11210000, 0);
    InitializeEvent(0, 11215006, 1210810, 1210800, 34720000);
    InitializeEvent(1, 11215006, 1210811, 1210801, 34720010);
    InitializeEvent(2, 11215006, 1210812, 1210802, 34720020);
    InitializeEvent(0, 11215007, 0);
    InitializeEvent(0, 11215008, 0);
    InitializeEvent(0, 11215009, 0);
    SetMapSoundState(1213801, Disabled);
    SkipIfEventFlag(7, OFF, TargetEventFlagType.EventFlag, 11210001);
    InitializeEvent(0, 11210001, 0);
    DeactivateObject(1211890, Disabled);
    DeleteMapSFX(1211891, false);
    DeactivateObject(1211892, Disabled);
    DeleteMapSFX(1211893, false);
    ActivateHit(1213001, Disabled);
    SkipUnconditionally(7);
    InitializeEvent(0, 11215010, 0);
    InitializeEvent(0, 11215011, 0);
    InitializeEvent(0, 11215012, 0);
    InitializeEvent(0, 11215013, 0);
    InitializeEvent(0, 11215014, 0);
    InitializeEvent(0, 11215015, 0);
    InitializeEvent(0, 11210001, 0);
    SetMapSoundState(1213802, Disabled);
    SkipIfEventFlag(4, OFF, TargetEventFlagType.EventFlag, 11210002);
    InitializeEvent(0, 11210002, 0);
    DeactivateObject(1211990, Disabled);
    DeleteMapSFX(1211991, false);
    SkipUnconditionally(8);
    InitializeEvent(0, 11215020, 0);
    InitializeEvent(0, 11215021, 0);
    InitializeEvent(0, 11215022, 0);
    InitializeEvent(0, 11215027, 0);
    InitializeEvent(0, 11215023, 0);
    InitializeEvent(0, 11215024, 0);
    InitializeEvent(0, 11215025, 0);
    InitializeEvent(0, 11210002, 0);
    InitializeEvent(0, 11215026, 0);
    SetMapSoundState(1213803, Disabled);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11210592);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 11210004);
    SkipIfConditionGroupStateUncompiled(3, PASS, AND_01);
    DeactivateObject(1211690, Disabled);
    DeleteMapSFX(1211691, false);
    ActivateHit(1213001, Disabled);
    SkipIfEventFlag(8, ON, TargetEventFlagType.EventFlag, 11210004);
    InitializeEvent(0, 11215060, 0);
    InitializeEvent(0, 11215061, 0);
    InitializeEvent(0, 11215062, 0);
    InitializeEvent(0, 11215063, 0);
    InitializeEvent(0, 11215064, 0);
    InitializeEvent(0, 11215066, 0);
    InitializeEvent(0, 11215065, 0);
    InitializeEvent(0, 11210005, 0);
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 11210002);
    RegisterBonfire(11210992, 1211950, 2, 180, 0);
    RegisterBonfire(11210984, 1211963, 2, 180, 0);
    RegisterBonfire(11210976, 1211961, 2, 180, 0);
    RegisterBonfire(11210968, 1211962, 2, 180, 0);
    RegisterBonfire(11210960, 1211964, 2, 180, 0);
    RegisterLadder(11210210, 11210211, 1211110);
    RegisterLadder(11210212, 11210213, 1211111);
    RegisterLadder(11210214, 11210215, 1211112);
    InitializeEvent(0, 11215100, 0);
    InitializeEvent(0, 11215110, 1210101, 1212502, 0, 1212502);
    InitializeEvent(1, 11215110, 1210102, 1212502, 0, 1212502);
    InitializeEvent(2, 11215110, 1210103, 1212502, 1092616192, 1212506);
    InitializeEvent(3, 11215110, 1210104, 1212502, 1092616192, 1212506);
    InitializeEvent(0, 11215115, 1210101, 1212502, 1212501);
    InitializeEvent(1, 11215115, 1210102, 1212502, 1212501);
    InitializeEvent(0, 11215120, 1210105, 1210106, 1210107, 51210030);
    InitializeEvent(0, 11215140, 1210150, 1212503, 1212504, 1212505, 11215151, 11215152, 11215153);
    InitializeEvent(1, 11215140, 1210151, 1212523, 1212524, 1212525, 11215154, 11215155, 11215156);
    InitializeEvent(0, 11210050, 0);
    InitializeEvent(0, 11210051, 0);
    InitializeEvent(0, 11210052, 0);
    InitializeEvent(0, 11210053, 0);
    InitializeEvent(0, 11210054, 0);
    InitializeEvent(0, 11210055, 0);
    InitializeEvent(0, 11210056, 0);
    InitializeEvent(0, 11210057, 0);
    InitializeEvent(0, 11210040, 0);
    InitializeEvent(0, 11210041, 0);
    InitializeEvent(0, 11210042, 0);
    InitializeEvent(0, 11210043, 0);
    InitializeEvent(0, 11210004, 0);
    InitializeEvent(0, 11215050, 0);
    InitializeEvent(0, 11215051, 0);
    InitializeEvent(0, 11215052, 0);
    InitializeEvent(0, 11210025, 0);
    InitializeEvent(0, 11210021, 0);
    InitializeEvent(0, 11215040, 0);
    InitializeEvent(0, 11215041, 0);
    InitializeEvent(0, 11210020, 0);
    InitializeEvent(0, 11215043, 0);
    InitializeEvent(0, 11215044, 0);
    InitializeEvent(0, 11210330, 11210310, 11210315, 11210330);
    InitializeEvent(0, 11210310, 1210300, 11210310);
    InitializeEvent(1, 11210310, 1210301, 11210311);
    InitializeEvent(2, 11210310, 1210302, 11210312);
    InitializeEvent(3, 11210310, 1210303, 11210313);
    InitializeEvent(4, 11210310, 1210304, 11210314);
    InitializeEvent(5, 11210310, 1210305, 11210315);
    InitializeEvent(0, 11210600, 1211600, 11210600);
    InitializeEvent(1, 11210600, 1211601, 11210601);
    InitializeEvent(2, 11210600, 1211602, 11210602);
    InitializeEvent(4, 11210600, 1211604, 11210604);
    InitializeEvent(5, 11210600, 1211605, 11210605);
    InitializeEvent(0, 11210230, 1211210, 1211650, 125, 126);
    InitializeEvent(0, 11210350, 1210200, 33007200);
    InitializeEvent(1, 11210350, 1210201, 33007000);
    InitializeEvent(2, 11210350, 1210202, 33007100);
    InitializeEvent(3, 11210350, 1210203, 33007300);
    InitializeEvent(4, 11210350, 1210204, 33007100);
    InitializeEvent(5, 11210350, 1210260, 41601000);
    InitializeEvent(0, 11210100, 0);
    InitializeEvent(0, 11210103, 0);
    InitializeEvent(0, 11210110, 0);
    InitializeEvent(0, 11210120, 0);
    InitializeEvent(0, 11210123, 0);
    InitializeEvent(0, 11210130, 0);
    InitializeEvent(0, 11210133, 0);
    InitializeEvent(0, 11210140, 0);
    InitializeEvent(0, 11210150, 0);
    InitializeEvent(0, 11210170, 11215220, 1213050, 1212105);
    InitializeEvent(1, 11210170, 11215221, 1213051, 1212115);
    InitializeEvent(2, 11210170, 11215222, 1213052, 1212125);
    InitializeEvent(3, 11210170, 11215223, 1213053, 1212135);
    InitializeEvent(4, 11210170, 11215224, 1213054, 1212145);
    SetMapSoundState(1213810, Disabled);
    SetMapSoundState(1213811, Disabled);
    InitializeEvent(0, 11210200, 1211200, 1212200);
    InitializeEvent(1, 11210200, 1211201, 1212201);
    InitializeEvent(0, 11210205, 1211200, 1212200, 11210200);
    InitializeEvent(1, 11210205, 1211201, 1212201, 11210201);
    InitializeEvent(0, 11210300, 0);
    InitializeEvent(0, 11215250, 1211300, 1213160);
    InitializeEvent(1, 11215250, 1211301, 1213161);
    InitializeEvent(2, 11215250, 1211302, 1213162);
    InitializeEvent(3, 11215250, 1211303, 1213163);
    InitializeEvent(4, 11215250, 1211304, 1213164);
    InitializeEvent(5, 11215250, 1211305, 1213165);
    InitializeEvent(6, 11215250, 1211306, 1213166);
    InitializeEvent(7, 11215250, 1211307, 1213167);
    InitializeEvent(8, 11215250, 1211308, 1213168);
    InitializeEvent(9, 11215250, 1211309, 1213169);
    InitializeEvent(10, 11215250, 1211310, 1213170);
    InitializeEvent(11, 11215250, 1211311, 1213171);
    InitializeEvent(12, 11215250, 1211312, 1213172);
    InitializeEvent(13, 11215250, 1211313, 1213173);
    InitializeEvent(14, 11215250, 1211314, 1213174);
    InitializeEvent(15, 11215250, 1211315, 1213175);
    InitializeEvent(16, 11215250, 1211316, 1213176);
    InitializeEvent(17, 11215250, 1211317, 1213177);
    InitializeEvent(18, 11215250, 1211318, 1213178);
    InitializeEvent(19, 11215250, 1211319, 1213179);
    InitializeEvent(20, 11215250, 1211320, 1213180);
    InitializeEvent(21, 11215250, 1211321, 1213181);
    InitializeEvent(22, 11215250, 1211322, 1213182);
    InitializeEvent(23, 11215250, 1211323, 1213183);
    InitializeEvent(0, 11215160, 1210600);
    InitializeEvent(0, 11215165, 1210600);
    InitializeEvent(0, 11215170, 1210600);
    InitializeEvent(0, 11215175, 1210600);
    InitializeEvent(0, 11215180, 1210600, 1212180);
    InitializeEvent(0, 11210680, 1210600);
    InitializeEvent(0, 11215185, 1210600);
    SetNetworkUpdateRate(1210601, true, CharacterUpdateFrequency.AlwaysUpdate);
    InitializeEvent(1, 11215160, 1210601);
    InitializeEvent(1, 11215165, 1210601);
    InitializeEvent(1, 11215170, 1210601);
    InitializeEvent(1, 11215175, 1210601);
    InitializeEvent(1, 11215180, 1210601, 1212181);
    InitializeEvent(1, 11210680, 1210601);
    InitializeEvent(1, 11215185, 1210601);
});

//  Pre-constructor
Event(50, Default, function() {
    ChangeCharacterEnableState(6731, Disabled);
    InitializeEvent(1, 11215030, 6732, 11215036, 11215035, 11210901, 1212082, 1212083, 11215032, 11210900);
    InitializeEvent(0, 11210900, 6731);
    InitializeEvent(1, 11210900, 6732);
    InitializeEvent(0, 11210905, 6731, 11215035, 1212080, 1213030, 11210900, 11215032);
    InitializeEvent(1, 11210905, 6732, 11215036, 1212082, 1213031, 11210901, 11215033);
    InitializeEvent(0, 11210510, 6720, 1822);
    InitializeEvent(0, 11210520, 6720, 1820, 1839, 1823);
    InitializeEvent(0, 11210530, 6720, 1820, 1839, 1821);
    InitializeEvent(0, 11210535, 0);
    InitializeEvent(0, 11210910, 0);
    InitializeEvent(0, 11210912, 0);
    InitializeEvent(0, 11210915, 0);
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 1842);
    DeactivateObject(1211130, Disabled);
    DeleteMapSFX(1213150, false);
    InitializeEvent(1, 11210510, 6730, 1841);
    InitializeEvent(1, 11210520, 6730, 1840, 1859, 1842);
    InitializeEvent(0, 11210544, 0);
    InitializeEvent(0, 11210538, 0);
    InitializeEvent(2, 11210520, 6750, 1870, 1889, 1872);
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 11210001);
    DeactivateObject(1211220, Disabled);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 1861);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 1862);
    SkipIfConditionGroupStateUncompiled(1, PASS, OR_01);
    ChangeCharacterEnableState(6740, Disabled);
    InitializeEvent(3, 11210510, 6740, 1863);
    InitializeEvent(3, 11210520, 6740, 1860, 1869, 1864);
    InitializeEvent(0, 11210531, 6740, 1860, 1869, 1861);
    InitializeEvent(0, 11210532, 6740, 1860, 1869, 1862);
    InitializeEvent(0, 11210533, 6740, 1860, 1869, 1865);
    InitializeEvent(0, 11210534, 6740, 1860, 1869, 1865);
    InitializeEvent(0, 11210543, 0);
    ChangeCharacterEnableState(6700, Disabled);
    SkipIfMultiplayerState(3, MultiplayerState.Client);
    InitializeEvent(0, 11210540, 0);
    InitializeEvent(0, 11210541, 0);
    InitializeEvent(0, 11210542, 0);
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 11210345);
    BatchSetEventFlags(11210340, 11210345, OFF);
    SetCharacterGravity(6760, Disabled);
    SetCharacterImmortality(6760, Enabled);
    SetCharacterHPBarDisplay(6760, Disabled);
    SetSpeffect(6760, 5300);
    SetObjectInvulnerability(1211250, Enabled);
    InitializeEvent(0, 11210340, 0);
    InitializeEvent(0, 11210341, 0);
    InitializeEvent(0, 11210345, 0);
    InitializeEvent(0, 11210346, 0);
    InitializeEvent(0, 11210347, 0);
    ReproduceObjectAnimation(1211606, 0);
    ReproduceObjectAnimation(1211607, 0);
    InitializeEvent(0, 11217000, 0);
    InitializeEvent(0, 11210015, 0);
});

//  Past forest checkpoint passed XX
Event(11210090, Default, function(X0_4, X4_4, X8_4, X12_4) {
    SkipIfEventFlag(3, OFF, TargetEventFlagType.EventIDAndSlotNumber, 0);
    DeactivateObject(X0_4, Disabled);
    DeleteMapSFX(X4_4, false);
    EndUnconditionally(EventEndType.End);
    IfActionButtonLineSegment(AND_01, TargetEntityType.Area, X8_4, 0, 0, 0, 10010403, ReactionType.HollowHuman, 0, X0_4);
    IfActionButtonLineSegment(AND_02, TargetEntityType.Area, X12_4, 0, 0, 0, 10010407, ReactionType.HollowHuman, 0, X0_4);
    IfConditionGroup(OR_01, PASS, AND_01);
    IfConditionGroup(OR_01, PASS, AND_02);
    IfConditionGroup(MAIN, PASS, OR_01);
    SkipIfConditionGroupStateCompiled(2, PASS, AND_02);
    IssueShortWarpRequest(10000, TargetEntityType.Area, X8_4, -1);
    SkipUnconditionally(1);
    IssueShortWarpRequest(10000, TargetEntityType.Area, X12_4, -1);
    ForceAnimationPlayback(10000, 7410, false, false, false);
    DeactivateObject(X0_4, Disabled);
    DeleteMapSFX(X4_4, true);
});

//  Past Forest Black Enemy Appears
Event(11215090, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventID, 0);
    ChangeCharacterEnableState(1210900, Disabled);
    ChangeCharacterEnableState(1210901, Disabled);
    ChangeCharacterEnableState(1210902, Disabled);
    ChangeCharacterEnableState(1210903, Disabled);
    ChangeCharacterEnableState(1210904, Disabled);
    ChangeCharacterEnableState(1210905, Disabled);
    ChangeCharacterEnableState(1210906, Disabled);
    ChangeCharacterEnableState(1210907, Disabled);
    ChangeCharacterEnableState(1210908, Disabled);
    ChangeCharacterEnableState(1210909, Disabled);
    ChangeCharacterEnableState(1210910, Disabled);
    ChangeCharacterEnableState(1210911, Disabled);
    ChangeCharacterEnableState(1210912, Disabled);
    ChangeCharacterEnableState(1210913, Disabled);
    ChangeCharacterEnableState(1210914, Disabled);
    ChangeCharacterEnableState(1210915, Disabled);
    ChangeCharacterEnableState(1210916, Disabled);
    ChangeCharacterEnableState(1210917, Disabled);
    ChangeCharacterEnableState(1210918, Disabled);
    ChangeCharacterEnableState(1210919, Disabled);
    ChangeCharacterEnableState(1210920, Disabled);
    ChangeCharacterEnableState(1210921, Disabled);
    ChangeCharacterEnableState(1210922, Disabled);
    ChangeCharacterEnableState(1210923, Disabled);
    ChangeCharacterEnableState(1210924, Disabled);
    ChangeCharacterEnableState(1210925, Disabled);
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 11210080);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 735);
    SetEventFlag(5000, ON);
    ChangeCharacterEnableState(1210900, Enabled);
    ChangeCharacterEnableState(1210901, Enabled);
    ChangeCharacterEnableState(1210902, Enabled);
    ChangeCharacterEnableState(1210903, Enabled);
    ChangeCharacterEnableState(1210904, Enabled);
    ChangeCharacterEnableState(1210905, Enabled);
    ChangeCharacterEnableState(1210906, Enabled);
    ChangeCharacterEnableState(1210907, Enabled);
    ChangeCharacterEnableState(1210908, Enabled);
    ChangeCharacterEnableState(1210909, Enabled);
    ChangeCharacterEnableState(1210910, Enabled);
    ChangeCharacterEnableState(1210911, Enabled);
    ChangeCharacterEnableState(1210912, Enabled);
    ChangeCharacterEnableState(1210913, Enabled);
    ChangeCharacterEnableState(1210914, Enabled);
    ChangeCharacterEnableState(1210915, Enabled);
    ChangeCharacterEnableState(1210916, Enabled);
    ChangeCharacterEnableState(1210917, Enabled);
    ChangeCharacterEnableState(1210918, Enabled);
    ChangeCharacterEnableState(1210919, Enabled);
    ChangeCharacterEnableState(1210920, Enabled);
    ChangeCharacterEnableState(1210921, Enabled);
    ChangeCharacterEnableState(1210922, Enabled);
    ChangeCharacterEnableState(1210923, Enabled);
    ChangeCharacterEnableState(1210924, Enabled);
    ChangeCharacterEnableState(1210925, Enabled);
});

//  Past forest black enemy disappears
Event(11215091, Restart, function() {
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 11215095);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 735);
    IfConditionGroup(MAIN, PASS, OR_01);
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 735);
    SetEventFlag(735, OFF);
    SetEventFlag(11210080, OFF);
    SetEventFlag(11215095, OFF);
    SetEventFlag(5001, ON);
    ForceCharacterDeath(1210900, false);
    ForceCharacterDeath(1210901, false);
    ForceCharacterDeath(1210902, false);
    ForceCharacterDeath(1210903, false);
    ForceCharacterDeath(1210904, false);
    ForceCharacterDeath(1210905, false);
    ForceCharacterDeath(1210906, false);
    ForceCharacterDeath(1210907, false);
    ForceCharacterDeath(1210908, false);
    ForceCharacterDeath(1210909, false);
    ForceCharacterDeath(1210910, false);
    ForceCharacterDeath(1210911, false);
    ForceCharacterDeath(1210912, false);
    ForceCharacterDeath(1210913, false);
    ForceCharacterDeath(1210914, false);
    ForceCharacterDeath(1210915, false);
    ForceCharacterDeath(1210916, false);
    ForceCharacterDeath(1210917, false);
    ForceCharacterDeath(1210918, false);
    ForceCharacterDeath(1210919, false);
    ForceCharacterDeath(1210920, false);
    ForceCharacterDeath(1210921, false);
    ForceCharacterDeath(1210922, false);
    ForceCharacterDeath(1210923, false);
    ForceCharacterDeath(1210924, false);
    ForceCharacterDeath(1210925, false);
});

//  Past Forest Black Enemy Timer
Event(11215092, Restart, function() {
    EndIfMultiplayerState(EventEndType.End, MultiplayerState.Client);
    IfWorldTendency(AND_01, TendencyType.BlackTendency, ComparisonType.Greater, 50);
    IfPlayerInoutMap(AND_01, true, 12, 1);
    IfConditionGroup(OR_01, PASS, AND_01);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 11210080);
    IfConditionGroup(MAIN, PASS, OR_01);
    WaitFixedTimeFrames(1);
    IfWorldTendency(AND_02, TendencyType.BlackTendency, ComparisonType.Greater, 50);
    IfPlayerInoutMap(AND_02, true, 12, 1);
    IfConditionGroup(OR_02, PASS, AND_02);
    IfEventFlag(OR_02, ON, TargetEventFlagType.EventFlag, 11210080);
    EndIfConditionGroupStateUncompiled(EventEndType.Restart, FAIL, OR_02);
    WaitFixedTimeFrames(1);
    IfWorldTendency(AND_03, TendencyType.BlackTendency, ComparisonType.Greater, 50);
    IfPlayerInoutMap(AND_03, true, 12, 1);
    IfConditionGroup(OR_03, PASS, AND_03);
    IfEventFlag(OR_03, ON, TargetEventFlagType.EventFlag, 11210080);
    EndIfConditionGroupStateUncompiled(EventEndType.Restart, FAIL, OR_03);
    WaitFixedTimeFrames(1);
    IfWorldTendency(AND_04, TendencyType.BlackTendency, ComparisonType.Greater, 50);
    IfPlayerInoutMap(AND_04, true, 12, 1);
    IfConditionGroup(OR_04, PASS, AND_04);
    IfEventFlag(OR_04, ON, TargetEventFlagType.EventFlag, 11210080);
    EndIfConditionGroupStateUncompiled(EventEndType.Restart, FAIL, OR_04);
    WaitFixedTimeFrames(1);
    IfWorldTendency(AND_05, TendencyType.BlackTendency, ComparisonType.Greater, 50);
    IfPlayerInoutMap(AND_05, true, 12, 1);
    IfConditionGroup(OR_05, PASS, AND_05);
    IfEventFlag(OR_05, ON, TargetEventFlagType.EventFlag, 11210080);
    EndIfConditionGroupStateUncompiled(EventEndType.Restart, FAIL, OR_05);
    WaitFixedTimeFrames(1);
    IfWorldTendency(AND_06, TendencyType.BlackTendency, ComparisonType.Greater, 50);
    IfPlayerInoutMap(AND_06, true, 12, 1);
    IfConditionGroup(OR_06, PASS, AND_06);
    IfEventFlag(OR_06, ON, TargetEventFlagType.EventFlag, 11210080);
    EndIfConditionGroupStateUncompiled(EventEndType.Restart, FAIL, OR_06);
    SetEventFlag(11210080, ON);
    WaitFixedTimeSeconds(600);
    IfWorldTendency(AND_07, TendencyType.BlackTendency, ComparisonType.LessOrEqual, 50);
    IfPlayerInoutMap(AND_07, true, 12, 1);
    EndIfConditionGroupStateUncompiled(EventEndType.Restart, FAIL, AND_07);
    SetEventFlag(11210080, OFF);
    SetEventFlag(11215095, ON);
});

//  Host enters Gold Chimera Room
Event(11215000, Restart, function() {
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 11210000);
    IfActionButtonLineSegmentBossRoom(AND_01, TargetEntityType.Area, 1212888, 0, -1, 0, 10010403, ReactionType.HollowHuman, 0, 1211790);
    IfConditionGroup(MAIN, PASS, AND_01);
    RotateCharacter(10000, 1212887);
    ForceAnimationPlayback(10000, 7410, false, true, false);
    EndUnconditionally(EventEndType.Restart);
});

//  Client enters Kim Chimera Room
Event(11215001, Default, function() {
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 11210000);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11215003);
    IfCharacterType(AND_01, 10000, TargetType.WhitePhantom);
    IfActionButtonLineSegment(AND_01, TargetEntityType.Area, 1212888, 0, -1, 0, 10010403, ReactionType.All, 0, 1211790);
    IfConditionGroup(MAIN, PASS, AND_01);
    RotateCharacter(10000, 1212887);
    ForceAnimationPlayback(10000, 7410, false, false, false);
    EndUnconditionally(EventEndType.Restart);
});

//  Host completes admission to Kim Chimera Room
Event(11215002, Default, function() {
    SkipIfEventFlag(3, ON, TargetEventFlagType.EventID, 0);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 11210000);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 1212886);
    IfConditionGroup(MAIN, PASS, AND_01);
    SkipIfMultiplayerState(2, MultiplayerState.Client);
    IssueBossRoomEntryNotification(0);
    SetNetworkUpdateAuthority(1210800, AuthorityLevel.Forced);
    ActivateMultiplayerdependantBuffs(1210800);
});

//  Gold chimera starts to move
Event(11215003, Restart, function() {
    SkipIfEventFlag(5, ON, TargetEventFlagType.EventID, 0);
    SetCharacterAIState(1210800, Disabled);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11215002);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 1212886);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetCharacterAIState(1210800, Enabled);
    DisplayBossHealthBar(Enabled, 1210800, 0, 3471);
    ForceAnimationPlayback(1210800, 3017, false, true, false);
});

//  Gold Chimera BGM ON
Event(11215004, Default, function() {
    SetNetworkSyncState(Disabled);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 11210000);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11215003);
    SkipIfMultiplayerState(1, MultiplayerState.Host);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11215001);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 1212886);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetMapSoundState(1213800, Enabled);
});

//  Gold Chimera BGM OFF
Event(11215005, Default, function() {
    SetNetworkSyncState(Disabled);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11215004);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11210000);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetMapSoundState(1213800, Disabled);
});

//  Defeat Gold Chimera
Event(11210000, Restart, function() {
    SkipIfEventFlag(5, OFF, TargetEventFlagType.EventID, 0);
    ChangeCharacterEnableState(1210800, Disabled);
    ForceCharacterDeath(1210800, false);
    ChangeCharacterEnableState(1210810, Disabled);
    ForceCharacterDeath(1210810, false);
    EndUnconditionally(EventEndType.End);
    IfHPRatio(MAIN, 1210800, ComparisonType.LessOrEqual, 0);
    WaitFixedTimeSeconds(1);
    PlaySE(1210800, SoundType.sSFX, 777777777);
    IfCharacterDeadalive(MAIN, 1210800, DeathState.Dead);
    SetEventFlag(11210000, ON);
    HandleBossDefeat(1210800);
    DeactivateObject(1211790, Disabled);
    DeleteMapSFX(1211791, true);
    DeactivateObject(1211792, Disabled);
    DeleteMapSFX(1211793, true);
});

//  Gold Chimera Tail Amputation XX
Event(11215006, Restart, function(X0_4, X4_4, X8_4) {
    ChangeCharacterEnableState(X0_4, Disabled);
    SkipIfEventFlag(4, OFF, TargetEventFlagType.EventIDAndSlotNumber, 0);
    ChangeCharacterDispmask(X4_4, 0, OFF);
    ChangeCharacterHitmask(X4_4, 1, ON);
    RequestCharacterAICommand(X4_4, 20, 0);
    EndUnconditionally(EventEndType.End);
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 11210000);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11215002);
    IfCharacterBackreadStatus(AND_01, X4_4, true);
    IfConditionGroup(MAIN, PASS, AND_01);
    CreateNPCPart(X4_4, 3471, NPCPartType.Part1, 200, 1, 1, false, false);
    IfNPCPartHP(AND_02, X4_4, 3471, 0, ComparisonType.LessOrEqual);
    IfHPRatio(AND_03, X4_4, ComparisonType.LessOrEqual, 0);
    IfConditionGroup(OR_01, PASS, AND_02);
    IfConditionGroup(OR_01, PASS, AND_03);
    IfConditionGroup(MAIN, PASS, OR_01);
    EndIfConditionGroupStateCompiled(EventEndType.End, PASS, AND_03);
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Character, X4_4, 150, X4_4);
    ChangeCharacterEnableState(X0_4, Enabled);
    RequestCharacterAnimationReset(X4_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X4_4, 8000, false, false, false);
    ForceAnimationPlayback(X0_4, 8100, false, false, false);
    ChangeCharacterDispmask(X4_4, 0, OFF);
    ChangeCharacterHitmask(X4_4, 1, ON);
    RequestCharacterAICommand(X4_4, 20, 0);
    RequestCharacterAIReplan(X4_4);
    IfCharacterType(OR_07, 10000, TargetType.Alive);
    IfCharacterType(OR_07, 10000, TargetType.Hollow);
    EndIfConditionGroupStateUncompiled(EventEndType.End, FAIL, OR_07);
    AwardItemsIncludingClients(X8_4);
});

//  Gold chimera (Zako) passage PC measures
Event(11215008, Restart, function() {
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 11215007);
    IfPlayerStandingOnHit(OR_01, 1213020);
    IfPlayerStandingOnHit(OR_02, 1213021);
    IfInoutsideArea(OR_02, InsideOutsideState.Inside, 10000, 1212003);
    IfConditionGroup(OR_03, PASS, OR_01);
    IfConditionGroup(OR_03, PASS, OR_02);
    IfConditionGroup(MAIN, PASS, OR_03);
    SkipIfConditionGroupStateCompiled(3, PASS, OR_01);
    SetCharacterHome(1210801, 1212010);
    SetCharacterHome(1210802, 1212011);
    SkipUnconditionally(2);
    SetCharacterHome(1210801, 1212007);
    SetCharacterHome(1210802, 1212008);
    RequestCharacterAICommand(1210801, 10, 1);
    RequestCharacterAICommand(1210802, 10, 1);
    IfPlayerStandingOnHit(OR_02, 1213020);
    IfPlayerStandingOnHit(OR_02, 1213021);
    IfInoutsideArea(OR_02, InsideOutsideState.Inside, 10000, 1212003);
    IfConditionGroup(MAIN, FAIL, OR_02);
    RequestCharacterAICommand(1210801, -1, 1);
    RequestCharacterAICommand(1210802, -1, 1);
    EndUnconditionally(EventEndType.Restart);
});

//  Gold chimera (Zako) starts to move
Event(11215007, Restart, function() {
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 11210001);
    SetCharacterAIState(1210801, Disabled);
    SetCharacterAIState(1210802, Disabled);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 1212004);
    IfInoutsideArea(AND_01, InsideOutsideState.Outside, 10000, 1212001);
    IfInoutsideArea(AND_01, InsideOutsideState.Outside, 10000, 1212002);
    IfConditionGroup(OR_01, PASS, AND_01);
    IfCharacterDamagedBy(OR_01, 1210801, 10000);
    IfCharacterDamagedBy(OR_01, 1210802, 10000);
    IfConditionGroup(MAIN, PASS, OR_01);
    SetCharacterAIState(1210801, Enabled);
    ForceAnimationPlayback(1210801, 3017, false, false, false);
    WaitFixedTimeFrames(15);
    SetCharacterAIState(1210802, Enabled);
    ForceAnimationPlayback(1210802, 3017, false, false, false);
    WaitFixedTimeFrames(15);
    RequestCharacterAIReplan(1210801);
    RequestCharacterAIReplan(1210802);
});

//  Switch the nest of gold chimera (Zako)
Event(11215009, Restart, function() {
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 11210001);
    IfInoutsideArea(MAIN, InsideOutsideState.Inside, 10000, 1212006);
    WarpCharacterAndCopyFloor(1210801, TargetEntityType.Area, 1212007, -1, 1210800);
    WarpCharacterAndCopyFloor(1210802, TargetEntityType.Area, 1212008, -1, 1210800);
    SetCharacterHome(1210801, 1212007);
    SetCharacterHome(1210802, 1212008);
    IfInoutsideArea(MAIN, InsideOutsideState.Inside, 10000, 1212009);
    WarpCharacterAndCopyFloor(1210801, TargetEntityType.Area, 1212010, -1, 1210800);
    WarpCharacterAndCopyFloor(1210802, TargetEntityType.Area, 1212011, -1, 1210800);
    SetCharacterHome(1210801, 1212010);
    SetCharacterHome(1210802, 1212011);
    EndUnconditionally(EventEndType.Restart);
});

//  Switch the nest of gold chimera (Zako) ・ Immediately after loading
Event(11217000, Default, function() {
    IfInoutsideArea(AND_03, InsideOutsideState.Inside, 10000, 1212005);
    IfInoutsideArea(AND_04, InsideOutsideState.Outside, 10000, 1212005);
    EndIfConditionGroupStateUncompiled(EventEndType.End, PASS, AND_04);
    IfCharacterDeadalive(AND_01, 1210801, DeathState.Dead);
    IfCharacterDeadalive(AND_02, 1210802, DeathState.Dead);
    SkipIfConditionGroupStateCompiled(2, PASS, AND_01);
    WarpCharacterAndCopyFloor(1210801, TargetEntityType.Area, 1212007, -1, 1210800);
    SetCharacterHome(1210801, 1212007);
    SkipIfConditionGroupStateCompiled(2, PASS, AND_02);
    WarpCharacterAndCopyFloor(1210802, TargetEntityType.Area, 1212008, -1, 1210800);
    SetCharacterHome(1210802, 1212008);
});

//  Host enters Altorius room
Event(11215010, Restart, function() {
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 11210001);
    IfActionButtonLineSegmentBossRoom(AND_01, TargetEntityType.Area, 1212898, 0, -1, 0, 10010403, ReactionType.HollowHuman, 0, 1211890);
    IfConditionGroup(MAIN, PASS, AND_01);
    RotateCharacter(10000, 1212897);
    ForceAnimationPlayback(10000, 7410, false, true, false);
    EndUnconditionally(EventEndType.Restart);
});

//  Client enters Altorius room
Event(11215011, Default, function() {
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 11210001);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11215013);
    IfCharacterType(AND_01, 10000, TargetType.WhitePhantom);
    IfActionButtonLineSegment(AND_01, TargetEntityType.Area, 1212898, 0, -1, 0, 10010403, ReactionType.All, 0, 1211890);
    IfConditionGroup(MAIN, PASS, AND_01);
    RotateCharacter(10000, 1212897);
    ForceAnimationPlayback(10000, 7410, false, false, false);
    EndUnconditionally(EventEndType.Restart);
});

//  Host completes entry to Altorius room
Event(11215012, Default, function() {
    SkipIfEventFlag(3, ON, TargetEventFlagType.EventID, 0);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 11210001);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 1212896);
    IfConditionGroup(MAIN, PASS, AND_01);
    SkipIfMultiplayerState(2, MultiplayerState.Client);
    IssueBossRoomEntryNotification(0);
    SetNetworkUpdateAuthority(1210820, AuthorityLevel.Forced);
    ActivateMultiplayerdependantBuffs(1210820);
    SetEventFlag(11210537, ON);
});

//  Altorius begins to move
Event(11215013, Restart, function() {
    SkipIfEventFlag(3, OFF, TargetEventFlagType.EventFlag, 11210001);
    ChangeCharacterEnableState(1210820, Disabled);
    ForceCharacterDeath(1210820, false);
    EndUnconditionally(EventEndType.End);
    SkipIfEventFlag(3, ON, TargetEventFlagType.EventFlag, 11210030);
    ChangeCharacterEnableState(1210820, Disabled);
    DeactivateObject(1211100, Disabled);
    DeactivateObject(1211101, Disabled);
    SetCharacterAIState(1210820, Disabled);
    SkipIfEventFlag(11, ON, TargetEventFlagType.EventID, 0);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11215012);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 1212896);
    IfConditionGroup(MAIN, PASS, AND_01);
    SkipIfEventFlag(9, ON, TargetEventFlagType.EventFlag, 11210030);
    SkipIfMultiplayerState(2, MultiplayerState.Multiplayer);
    PlayCutsceneToPlayer(120110, CutscenePlayMode.Skippable, 10000);
    SkipUnconditionally(1);
    PlayCutsceneToPlayer(120110, CutscenePlayMode.Unskippable, 10000);
    WaitFixedTimeFrames(1);
    DeactivateObject(1211100, Enabled);
    DeactivateObject(1211101, Enabled);
    ChangeCharacterEnableState(1210820, Enabled);
    SetEventFlag(11210030, ON);
    SetCharacterAIState(1210820, Enabled);
    DisplayBossHealthBar(Enabled, 1210820, 0, 4100);
    ActivateHit(1213001, Enabled);
});

//  Altorius BGM ON
Event(11215014, Default, function() {
    SetNetworkSyncState(Disabled);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 11210001);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11215013);
    SkipIfMultiplayerState(1, MultiplayerState.Host);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11215011);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 1212896);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetMapSoundState(1213801, Enabled);
});

//  Altorius BGM OFF
Event(11215015, Default, function() {
    SetNetworkSyncState(Disabled);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11215014);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11210001);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetMapSoundState(1213801, Disabled);
});

//  Defeat Altorius
Event(11210001, Restart, function() {
    SkipIfEventFlag(6, OFF, TargetEventFlagType.EventID, 0);
    ChangeCharacterEnableState(1210820, Disabled);
    ForceCharacterDeath(1210820, false);
    SetCharacterBackreadState(1210820, true);
    ChangeCharacterEnableState(1210801, Enabled);
    ChangeCharacterEnableState(1210802, Enabled);
    EndUnconditionally(EventEndType.End);
    SetCharacterBackreadState(6720, true);
    ChangeCharacterEnableState(1210801, Disabled);
    ChangeCharacterEnableState(1210802, Disabled);
    IfHPRatio(MAIN, 1210820, ComparisonType.LessOrEqual, 0);
    WaitFixedTimeSeconds(1);
    PlaySE(1210820, SoundType.sSFX, 777777777);
    IfCharacterDeadalive(MAIN, 1210820, DeathState.Dead);
    SetEventFlag(11210001, ON);
    SetEventFlag(121, ON);
    HandleBossDefeat(1210820);
    SetEventFlag(11217060, OFF);
    SetEventFlag(11217070, OFF);
    SetEventFlag(11217080, OFF);
    SetEventFlag(11217090, OFF);
    DeactivateObject(1211890, Disabled);
    DeleteMapSFX(1211891, true);
    DeactivateObject(1211892, Disabled);
    DeleteMapSFX(1211893, true);
    ActivateHit(1213001, Disabled);
    WaitFixedTimeSeconds(17);
    SetCharacterBackreadState(1210820, true);
    SetCharacterBackreadState(6720, false);
    ChangeCharacterEnableState(1210801, Enabled);
    ChangeCharacterEnableState(1210802, Enabled);
});

//  Goback lead operation
Event(11210015, Default, function() {
    SetNetworkSyncState(Disabled);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11210001);
    IfEntityInoutsideRadiusOfEntity(AND_01, InsideOutsideState.Outside, 10000, 6720, 80);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetCharacterBackreadState(6720, true);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 11210001);
    IfEntityInoutsideRadiusOfEntity(AND_02, InsideOutsideState.Inside, 10000, 6720, 80);
    IfConditionGroup(MAIN, PASS, AND_02);
    SetCharacterBackreadState(6720, false);
    EndUnconditionally(EventEndType.Restart);
});

//  Host enters the main room of the abyss
Event(11215020, Restart, function() {
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 11210002);
    IfActionButtonLineSegmentBossRoom(AND_01, TargetEntityType.Area, 1212998, 0, -1, 0, 10010403, ReactionType.HollowHuman, 0, 1211990);
    IfConditionGroup(MAIN, PASS, AND_01);
    RotateCharacter(10000, 1212997);
    ForceAnimationPlayback(10000, 7410, false, true, false);
    EndUnconditionally(EventEndType.Restart);
});

//  Client enters the main room of the abyss
Event(11215021, Default, function() {
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 11210002);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11215023);
    IfCharacterType(AND_01, 10000, TargetType.WhitePhantom);
    IfActionButtonLineSegment(AND_01, TargetEntityType.Area, 1212998, 0, -1, 0, 10010403, ReactionType.All, 0, 1211990);
    IfConditionGroup(MAIN, PASS, AND_01);
    RotateCharacter(10000, 1212997);
    ForceAnimationPlayback(10000, 7410, false, false, false);
    EndUnconditionally(EventEndType.Restart);
});

//  Host completes admission to the main room in the abyss
Event(11215022, Default, function() {
    SkipIfEventFlag(3, ON, TargetEventFlagType.EventID, 0);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 11210002);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 1212996);
    IfConditionGroup(MAIN, PASS, AND_01);
    SkipIfMultiplayerState(2, MultiplayerState.Client);
    IssueBossRoomEntryNotification(0);
    SetNetworkUpdateAuthority(1210840, AuthorityLevel.Forced);
    IfCharacterType(AND_02, 10000, TargetType.BlackPhantom);
    SkipIfConditionGroupStateUncompiled(1, FAIL, AND_02);
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 703);
    ActivateMultiplayerdependantBuffs(1210840);
});

//  The Lord of the Abyss Appears
Event(11215027, Default, function() {
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11215020);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 1212996);
    IfMultiplayerState(AND_01, MultiplayerState.Host);
    IfConditionGroup(MAIN, PASS, AND_01);
    SkipIfMultiplayerState(2, MultiplayerState.Multiplayer);
    PlayCutsceneAndWarpPlayer(120140, CutscenePlayMode.Skippable, 1212022, 12, 1, 10000);
    SkipUnconditionally(4);
    SkipIfMultiplayerState(2, MultiplayerState.Client);
    PlayCutsceneAndWarpPlayer(120140, CutscenePlayMode.Unskippable, 1212022, 12, 1, 10000);
    SkipUnconditionally(1);
    PlayCutsceneToPlayer(120140, CutscenePlayMode.Unskippable, 10000);
    WaitFixedTimeFrames(1);
    SetEventFlag(11210031, ON);
});

//  Abyss Main Room Invincible Landing_PC
Event(11215026, Restart, function() {
    SetNetworkSyncState(Disabled);
    IfInoutsideArea(MAIN, InsideOutsideState.Inside, 10000, 1212021);
    SetCharacterInvincibility(10000, Enabled);
    WaitFixedTimeSeconds(2);
    SetCharacterInvincibility(10000, Disabled);
});

//  The Lord of the Abyss begins to move
Event(11215023, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 17);
    SkipIfEventFlag(3, ON, TargetEventFlagType.EventID, 0);
    SetCharacterAIState(1210840, Disabled);
    IfInoutsideArea(MAIN, InsideOutsideState.Inside, 10000, 1212021);
    SetCharacterAIState(1210840, Enabled);
    DisplayBossHealthBar(Enabled, 1210840, 0, 4500);
});

//  Lord of the Abyss BGM ON
Event(11215024, Default, function() {
    SetNetworkSyncState(Disabled);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 11210002);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11215023);
    SkipIfMultiplayerState(3, MultiplayerState.Host);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11215021);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 1212996);
    SkipUnconditionally(1);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 1212990);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetMapSoundState(1213802, Enabled);
});

//  Abyss Lord BGM OFF
Event(11215025, Default, function() {
    SetNetworkSyncState(Disabled);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11215024);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11210002);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetMapSoundState(1213802, Disabled);
});

//  Defeat the Abyss Lord
Event(11210002, Default, function() {
    DeactivateObject(1211950, Disabled);
    DeactivateObject(1211950, Disabled);
    SkipIfEventFlag(4, OFF, TargetEventFlagType.EventID, 0);
    ChangeCharacterEnableState(1210840, Disabled);
    ForceCharacterDeath(1210840, false);
    DeactivateObject(1211950, Enabled);
    EndUnconditionally(EventEndType.End);
    IfHPRatio(MAIN, 1210840, ComparisonType.LessOrEqual, 0);
    WaitFixedTimeSeconds(1);
    PlaySE(1210840, SoundType.sSFX, 777777777);
    IfCharacterDeadalive(MAIN, 1210840, DeathState.Dead);
    SetEventFlag(11210002, ON);
    SetEventFlag(17, ON);
    HandleBossDefeat(1210840);
    DeactivateObject(1211990, Disabled);
    DeleteMapSFX(1211991, true);
    DeleteMapSFX(1213100, true);
    SpawnOneshotSFX(TargetEntityType.Object, 1211950, -1, 90014);
    WaitFixedTimeSeconds(2);
    DeactivateObject(1211950, Enabled);
    RegisterBonfire(11210992, 1211950, 2, 180, 0);
});

//  Abyss Lord Boss Room OBJ_XX
Event(11215250, Default, function(X0_4, X4_4) {
    DeleteMapSFX(X4_4, false);
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 11210002);
    DeactivateObject(X0_4, Disabled);
    EndUnconditionally(EventEndType.End);
    IfObjectDestroyed(OR_01, DestructionState.Destroyed, X0_4);
    IfCharacterDeadalive(OR_01, 1210840, DeathState.Dead);
    IfConditionGroup(MAIN, PASS, OR_01);
    RequestObjectDestruction(X0_4, 1);
    ForceAnimationPlayback(X0_4, 0, false, true, false);
    DeactivateObject(X0_4, Disabled);
});

//  Host enters the boss black dragon room
Event(11215060, Restart, function() {
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11210592);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 11210004);
    IfActionButtonLineSegmentBossRoom(AND_01, TargetEntityType.Area, 1212908, 0, -1, 0, 10010403, ReactionType.HollowHuman, 0, 1211690);
    IfConditionGroup(MAIN, PASS, AND_01);
    RotateCharacter(10000, 1212907);
    ForceAnimationPlayback(10000, 7410, false, true, false);
    EndUnconditionally(EventEndType.Restart);
});

//  Client enters the boss black dragon room
Event(11215061, Default, function() {
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11210592);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 11210004);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11215062);
    IfCharacterType(AND_01, 10000, TargetType.WhitePhantom);
    IfActionButtonLineSegment(AND_01, TargetEntityType.Area, 1212908, 0, -1, 0, 10010403, ReactionType.All, 0, 1211690);
    IfConditionGroup(MAIN, PASS, AND_01);
    RotateCharacter(10000, 1212907);
    ForceAnimationPlayback(10000, 7410, false, false, false);
    EndUnconditionally(EventEndType.Restart);
});

//  Host completes admission to Boss Black Dragon Room
Event(11215062, Default, function() {
    SkipIfEventFlag(4, ON, TargetEventFlagType.EventID, 0);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11210592);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 11210004);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 1212909);
    IfConditionGroup(MAIN, PASS, AND_01);
    SkipIfMultiplayerState(2, MultiplayerState.Client);
    IssueBossRoomEntryNotification(0);
    SetNetworkUpdateAuthority(1210401, AuthorityLevel.Forced);
    ActivateMultiplayerdependantBuffs(1210401);
});

//  Boss Black Dragon begins to move
Event(11215063, Restart, function() {
    SetCharacterInvincibility(1210401, Enabled);
    SkipIfEventFlag(9, ON, TargetEventFlagType.EventID, 0);
    SetCharacterAIState(1210401, Disabled);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11215062);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 1212906);
    IfPlayerStandingOnHit(OR_01, 1213003);
    IfPlayerStandingOnHit(OR_01, 1213004);
    IfPlayerStandingOnHit(OR_01, 1213009);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetCharacterAIState(1210401, Enabled);
    SetCharacterInvincibility(1210401, Disabled);
    DisplayBossHealthBar(Enabled, 1210401, 0, 4510);
    ActivateHit(1213001, Enabled);
});

//  Boss Black Dragon BGM ON
Event(11215064, Default, function() {
    SetNetworkSyncState(Disabled);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 11210004);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11215063);
    SkipIfMultiplayerState(2, MultiplayerState.Host);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11215061);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11215067);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 1212900);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetMapSoundState(1213803, Enabled);
});

//  Boss Black Dragon BGM OFF
Event(11215065, Default, function() {
    SetNetworkSyncState(Disabled);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11215064);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11210004);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetMapSoundState(1213803, Disabled);
});

//  Boss Black Dragon BGM ON Auxiliary
Event(11215066, Default, function() {
    SetNetworkSyncState(Disabled);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11210592);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 11210004);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11215062);
    IfCharacterType(AND_01, 10000, TargetType.WhitePhantom);
    IfActionButtonLineSegment(AND_01, TargetEntityType.Area, 1212908, 0, -1, 0, 10010403, ReactionType.All, 0, 1211690);
    IfConditionGroup(MAIN, PASS, AND_01);
    WaitFixedTimeFrames(75);
    SetEventFlag(11215067, ON);
});

//  Defeat the Boss Black Dragon
Event(11210005, Default, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventID, 0);
    IfHPRatio(MAIN, 1210401, ComparisonType.LessOrEqual, 0);
    WaitFixedTimeSeconds(1);
    PlaySE(1210401, SoundType.sSFX, 777777777);
    IfCharacterDeadalive(MAIN, 1210401, DeathState.Dead);
    SetEventFlag(11210004, ON);
    SetEventFlag(11210005, ON);
    SetEventFlag(121, ON);
    HandleBossDefeat(1210401);
    DeactivateObject(1211690, Disabled);
    DeleteMapSFX(1211691, true);
    ActivateHit(1213001, Disabled);
});

//  White Cat Guidance_Start
Event(11210340, Default, function() {
    SkipIfEventFlag(3, OFF, TargetEventFlagType.EventID, 0);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 11210341);
    WarpCharacterAndCopyFloor(6760, TargetEntityType.Area, 1212331, -1, 6760);
    EndUnconditionally(EventEndType.End);
    IfMultiplayerState(AND_01, MultiplayerState.Host);
    IfEntityInoutsideRadiusOfEntity(OR_01, InsideOutsideState.Inside, 6760, 10000, 7);
    IfCharacterDamagedBy(OR_01, 6760, 10000);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfConditionGroup(MAIN, PASS, AND_01);
    ForceAnimationPlayback(6760, 7003, false, true, false);
    ChangeCharacterEnableState(6760, Disabled);
    WarpCharacterAndCopyFloor(6760, TargetEntityType.Area, 1212331, -1, 6760);
    ChangeCharacterEnableState(6760, Enabled);
});

//  White Cat Guidance_XX
Event(11210341, Default, function() {
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventIDAndSlotNumber, 0);
    WarpCharacterAndCopyFloor(6760, TargetEntityType.Area, 1212332, -1, 6760);
    EndUnconditionally(EventEndType.End);
    IfMultiplayerState(AND_01, MultiplayerState.Host);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11210340);
    IfEntityInoutsideRadiusOfEntity(OR_01, InsideOutsideState.Inside, 6760, 10000, 12);
    IfCharacterDamagedBy(OR_01, 6760, 10000);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfConditionGroup(MAIN, PASS, AND_01);
    ForceAnimationPlayback(6760, 7003, false, true, false);
    ChangeCharacterEnableState(6760, Disabled);
    WarpCharacterAndCopyFloor(6760, TargetEntityType.Area, 1212332, -1, 6760);
    ChangeCharacterEnableState(6760, Enabled);
});

//  White Cat Guidance_End
Event(11210345, Default, function() {
    SkipIfEventFlag(3, OFF, TargetEventFlagType.EventID, 0);
    ChangeCharacterEnableState(6760, Disabled);
    DeleteMapSFX(1213125, false);
    EndUnconditionally(EventEndType.End);
    IfMultiplayerState(AND_01, MultiplayerState.Host);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11210341);
    IfEntityInoutsideRadiusOfEntity(OR_01, InsideOutsideState.Inside, 6760, 10000, 12);
    IfCharacterDamagedBy(OR_01, 6760, 10000);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfConditionGroup(MAIN, PASS, AND_01);
    ForceAnimationPlayback(6760, 7003, false, true, false);
    ChangeCharacterEnableState(6760, Disabled);
    DeleteMapSFX(1213125, true);
});

//  White cat momentary fall control
Event(11210346, Default, function() {
    SetNetworkSyncState(Disabled);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 11210345);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 1212335);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 11210345);
    IfConditionGroup(OR_01, PASS, AND_01);
    IfConditionGroup(OR_01, PASS, AND_02);
    IfConditionGroup(MAIN, PASS, OR_01);
    EndIfConditionGroupStateCompiled(EventEndType.End, PASS, AND_02);
    SetSpeffect(10000, 4161);
    EndUnconditionally(EventEndType.Restart);
});

//  White cat disappearing floor
Event(11210347, Default, function() {
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 11215045);
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 11210345);
    DeactivateObject(1211250, Disabled);
    EndUnconditionally(EventEndType.End);
    IfMultiplayerState(AND_01, MultiplayerState.Host);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 1212336);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetEventFlag(11215045, ON);
    EndIfObjectDestroyed(EventEndType.End, DestructionState.Destroyed, 1211250);
    SetObjectInvulnerability(1211250, Disabled);
    RequestObjectDestruction(1211250, 1);
    ForceAnimationPlayback(1211250, 0, false, false, false);
    PlaySE(1211250, SoundType.oObject, 262000000);
});

//  Magic wall in the shift room
Event(11210025, Default, function() {
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventID, 0);
    DeactivateObject(1211240, Disabled);
    EndUnconditionally(EventEndType.End);
    IfObjectDestroyed(MAIN, DestructionState.Destroyed, 1211240);
    EndUnconditionally(EventEndType.End);
});

//  Humanity Death Judgment Surrounding Schiff_XX
Event(11210310, Restart, function(X0_4, X4_4) {
    SkipIfEventFlag(3, OFF, TargetEventFlagType.EventIDAndSlotNumber, 0);
    ChangeCharacterEnableState(X0_4, Disabled);
    ForceCharacterDeath(X0_4, false);
    EndUnconditionally(EventEndType.End);
    IfCharacterDeadalive(MAIN, X0_4, DeathState.Dead);
    SetEventFlag(X4_4, ON);
});

//  All humanity surrounding Schiff dies
Event(11210330, Default, function(X0_4, X4_4, X8_4) {
    IfBatchEventFlags(MAIN, LogicalOperationType.AllON, TargetEventFlagType.EventFlag, X0_4, X4_4);
    SetEventFlag(X8_4, ON);
});

//  Shift rescue
Event(11210021, Default, function() {
    SetCharacterAIState(1210502, Disabled);
    SetCharacterInvincibility(1210502, Enabled);
    SkipIfEventFlag(5, OFF, TargetEventFlagType.EventFlag, 11210330);
    ChangeCharacterEnableState(1210502, Disabled);
    ForceCharacterTreasure(1210502);
    DeleteMapSFX(1213110, false);
    DeactivateObject(1211230, Disabled);
    EndUnconditionally(EventEndType.End);
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 11210330);
    WaitFixedTimeSeconds(6);
    ForceAnimationPlayback(1210502, 7010, false, true, false);
    ChangeCharacterEnableState(1210502, Disabled);
    ForceCharacterTreasure(1210502);
    DeleteMapSFX(1213110, true);
    DeactivateObject(1211230, Disabled);
});

//  Summon Shifu
Event(11215040, Restart, function() {
    SetCharacterAIState(1210500, Disabled);
    ChangeCharacterEnableState(1210500, Disabled);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 17);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11210021);
    IfCharacterType(AND_01, 10000, TargetType.Alive);
    IfActionButton(AND_01, TargetEntityType.Area, 1212300, 0, 0, 0, 50000000, ReactionType.HollowHuman, 0);
    IfConditionGroup(MAIN, PASS, AND_01);
    DisplayMessage(140010, 0);
    SkipIfMultiplayerState(1, MultiplayerState.Client);
    ForceAnimationPlayback(1210501, 7008, false, false, false);
    WaitFixedTimeFrames(30);
    ChangeCharacterEnableState(1210501, Disabled);
    SetEventFlag(11215042, ON);
    DeleteMapSFX(1213100, true);
    WaitFixedTimeSeconds(10);
    ChangeCharacterEnableState(1210500, Enabled);
    SetCharacterAIState(1210500, Enabled);
    SetCharacterTeamType(1210500, TeamType.WhitePhantom);
    ForceAnimationPlayback(1210500, 7004, false, false, false);
    SkipIfMultiplayerState(2, MultiplayerState.Client);
    DisplayMessage(20001110, 0);
    SkipUnconditionally(1);
    DisplayMessage(20001111, 0);
    WaitFixedTimeFrames(140);
});

//  The shift is faintly visible
Event(11215041, Restart, function() {
    ChangeCharacterEnableState(1210501, Disabled);
    SetCharacterAIState(1210501, Disabled);
    SetCharacterAnimationState(1210501, Disabled);
    EndIfMultiplayerState(EventEndType.End, MultiplayerState.Client);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11210021);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 17);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 1212300);
    IfCharacterType(AND_01, 10000, TargetType.Alive);
    IfConditionGroup(MAIN, PASS, AND_01);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 11215042);
    ChangeCharacterEnableState(1210501, Enabled);
    ForceAnimationPlayback(1210501, 7006, false, true, false);
    ForceAnimationPlayback(1210501, 7007, true, false, false);
    IfInoutsideArea(AND_02, InsideOutsideState.Outside, 10000, 1212300);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 11215020);
    IfConditionGroup(MAIN, PASS, AND_02);
    ForceAnimationPlayback(1210501, 7008, false, true, false);
    ChangeCharacterEnableState(1210501, Disabled);
    EndUnconditionally(EventEndType.Restart);
});

//  Schiff writes a sign
Event(11215044, Restart, function() {
    DeleteMapSFX(1213100, true);
    EndIfMultiplayerState(EventEndType.End, MultiplayerState.Client);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 17);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11210021);
    IfCharacterType(AND_01, 10000, TargetType.Alive);
    IfConditionGroup(MAIN, PASS, AND_01);
    SpawnMapSFX(1213100);
    IfEventFlag(AND_02, OFF, TargetEventFlagType.EventFlag, 17);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 11210021);
    IfCharacterType(AND_02, 10000, TargetType.Alive);
    IfConditionGroup(MAIN, FAIL, AND_02);
    EndUnconditionally(EventEndType.Restart);
});

//  Shifu returns to his own world
Event(11210020, Default, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 17);
    IfCharacterDeadalive(AND_01, 1210840, DeathState.Dead);
    IfCharacterDeadalive(AND_01, 1210500, DeathState.Alive);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11215040);
    IfCharacterDeadalive(AND_02, 1210500, DeathState.Dead);
    IfConditionGroup(OR_01, PASS, AND_01);
    IfConditionGroup(OR_01, PASS, AND_02);
    IfConditionGroup(MAIN, PASS, OR_01);
    SkipIfConditionGroupStateCompiled(5, PASS, AND_02);
    SetCharacterAIState(1210500, Disabled);
    WaitFixedTimeFrames(120);
    ForceAnimationPlayback(1210500, 7005, false, true, false);
    ChangeCharacterEnableState(1210500, Disabled);
    EndUnconditionally(EventEndType.End);
    DisplayMessage(20001115, 0);
});

//  Shifu is weakened
Event(11215043, Restart, function() {
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventID, 0);
    IfHPRatio(MAIN, 1210500, ComparisonType.LessOrEqual, 0.3);
    SetSpeffect(1210500, 5401);
});

//  Old tree man runs away
Event(11215100, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventID, 0);
    SetCharacterAIState(1210100, Disabled);
    IfCharacterType(AND_07, 10000, TargetType.BlackPhantom);
    IfConditionGroup(AND_03, FAIL, AND_07);
    IfInoutsideArea(AND_03, InsideOutsideState.Inside, 10000, 1212502);
    IfConditionGroup(OR_03, PASS, AND_03);
    IfCharacterDamagedBy(OR_03, 1210100, 10000);
    IfConditionGroup(AND_01, PASS, OR_03);
    IfConditionGroup(AND_02, FAIL, AND_07);
    IfInoutsideArea(AND_02, InsideOutsideState.Inside, 10000, 1212500);
    IfConditionGroup(OR_01, PASS, AND_01);
    IfConditionGroup(OR_01, PASS, AND_02);
    IfConditionGroup(MAIN, PASS, OR_01);
    SetSpecialAnimations(1210100, -1, -1, 9060, -1, -1);
    SetCharacterAIState(1210100, Enabled);
    EndIfConditionGroupStateCompiled(EventEndType.End, PASS, AND_01);
    SetCharacterHome(1210100, 1212501);
    RequestCharacterAICommand(1210100, 10, 0);
    RequestCharacterAIReplan(1210100);
    WaitFixedTimeSeconds(6);
    IfInoutsideArea(OR_02, InsideOutsideState.Inside, 10000, 1212502);
    IfCharacterDamagedBy(OR_02, 1210100, 10000);
    IfConditionGroup(MAIN, PASS, OR_02);
    RequestCharacterAICommand(1210100, -1, 0);
    RequestCharacterAIReplan(1210100);
});

//  Old tree person cancels special standby_XX
Event(11215110, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventIDAndSlotNumber, 0);
    SetSpecialAnimations(X0_4, -1, -1, -1, -1, -1);
    EndUnconditionally(EventEndType.End);
    SetCharacterAIState(X0_4, Disabled);
    IfCharacterDamagedBy(OR_01, X0_4, 10000);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, X4_4);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, X12_4);
    IfEntityInoutsideRadiusOfEntity(OR_01, InsideOutsideState.Inside, 10000, X0_4, X8_4);
    IfCharacterType(AND_07, 10000, TargetType.BlackPhantom);
    IfConditionGroup(AND_01, FAIL, AND_07);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetCharacterAIState(X0_4, Enabled);
    SetSpecialAnimations(X0_4, -1, -1, 9060, -1, -1);
});

//  Old Tree Nest Under the Hill
Event(11215115, Restart, function(X0_4, X4_4, X8_4) {
    IfInoutsideArea(MAIN, InsideOutsideState.Inside, X0_4, X4_4);
    SetCharacterHome(X0_4, X8_4);
});

//  Old tree person cancels special standby_flag judgment_XX
Event(11215120, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    SkipIfEventFlag(4, OFF, TargetEventFlagType.EventID, 0);
    SetSpecialAnimations(X0_4, -1, -1, -1, -1, -1);
    SetSpecialAnimations(X4_4, -1, -1, -1, -1, -1);
    SetSpecialAnimations(X8_4, -1, -1, -1, -1, -1);
    EndUnconditionally(EventEndType.End);
    SetCharacterAIState(X0_4, Disabled);
    SetCharacterAIState(X4_4, Disabled);
    SetCharacterAIState(X8_4, Disabled);
    IfMultiplayerState(AND_01, MultiplayerState.Host);
    IfCharacterDamagedBy(OR_01, X0_4, 10000);
    IfCharacterDamagedBy(OR_01, X4_4, 10000);
    IfCharacterDamagedBy(OR_01, X8_4, 10000);
    SkipIfMultiplayerState(2, MultiplayerState.Client);
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, X12_4);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, X12_4);
    IfConditionGroup(OR_02, PASS, OR_01);
    IfConditionGroup(OR_02, PASS, AND_01);
    IfConditionGroup(MAIN, PASS, OR_02);
    SetCharacterAIState(X0_4, Enabled);
    SetCharacterAIState(X4_4, Enabled);
    SetCharacterAIState(X8_4, Enabled);
    SetSpecialAnimations(X0_4, -1, -1, 9060, -1, -1);
    SetSpecialAnimations(X4_4, -1, -1, 9060, -1, -1);
    SetSpecialAnimations(X8_4, -1, -1, 9060, -1, -1);
});

//  Old tree person cancels special standby_judgment by distance_XX
Event(11215130, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventIDAndSlotNumber, 0);
    SetSpecialAnimations(X0_4, -1, -1, -1, -1, -1);
    EndUnconditionally(EventEndType.End);
    IfEntityInoutsideRadiusOfEntity(OR_01, InsideOutsideState.Inside, 10000, X4_4, X8_4);
    IfCharacterDamagedBy(OR_01, 1210108, 10000);
    IfCharacterDamagedBy(OR_01, 1210109, 10000);
    IfCharacterDamagedBy(OR_01, 1210110, 10000);
    IfCharacterType(AND_07, 10000, TargetType.BlackPhantom);
    IfConditionGroup(AND_01, FAIL, AND_07);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfConditionGroup(MAIN, PASS, AND_01);
    WaitFixedTimeSeconds(X12_4);
    SetSpecialAnimations(X0_4, -1, -1, 9060, -1, -1);
});

//  Old clay figurine knight sees the scenery _XX
Event(11215140, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4) {
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, X0_4, X4_4);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, X16_4);
    IfCharacterAIState(AND_01, X0_4, AIStateType.Normal);
    IfInoutsideArea(AND_02, InsideOutsideState.Inside, X0_4, X8_4);
    IfEventFlag(AND_02, OFF, TargetEventFlagType.EventFlag, X20_4);
    IfCharacterAIState(AND_02, X0_4, AIStateType.Normal);
    IfInoutsideArea(AND_03, InsideOutsideState.Inside, X0_4, X12_4);
    IfEventFlag(AND_03, OFF, TargetEventFlagType.EventFlag, X24_4);
    IfCharacterAIState(AND_03, X0_4, AIStateType.Normal);
    IfConditionGroup(OR_01, PASS, AND_01);
    IfConditionGroup(OR_01, PASS, AND_02);
    IfConditionGroup(OR_01, PASS, AND_03);
    IfConditionGroup(MAIN, PASS, OR_01);
    SkipIfConditionGroupStateCompiled(3, FAIL, AND_01);
    SetEventFlag(X16_4, ON);
    SetEventFlag(X20_4, OFF);
    SetEventFlag(X24_4, OFF);
    SkipIfConditionGroupStateCompiled(3, FAIL, AND_02);
    SetEventFlag(X16_4, OFF);
    SetEventFlag(X20_4, ON);
    SetEventFlag(X24_4, OFF);
    SkipIfConditionGroupStateCompiled(3, FAIL, AND_03);
    SetEventFlag(X16_4, OFF);
    SetEventFlag(X20_4, OFF);
    SetEventFlag(X24_4, ON);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 7000, false, false, true);
    WaitFixedTimeFrames(25);
    ForceAnimationPlayback(X0_4, 9000, false, false, true);
    WaitFixedTimeFrames(190);
    ForceAnimationPlayback(X0_4, 9060, false, false, false);
    WaitFixedTimeFrames(35);
    EndUnconditionally(EventEndType.Restart);
});

//  Past Forest_Treasure Chest XX
Event(11210600, Default, function(X0_4, X4_4) {
    SkipIfEventFlag(4, OFF, TargetEventFlagType.EventIDAndSlotNumber, 0);
    ReproduceObjectAnimation(X0_4, 0);
    SetObjactState(X0_4, -1, Disabled);
    SetObjectTreasureState(X0_4, Enabled);
    EndUnconditionally(EventEndType.End);
    SetObjectTreasureState(X0_4, Disabled);
    IfObjactEventFlag(MAIN, X4_4);
    WaitFixedTimeFrames(10);
    SetObjectTreasureState(X0_4, Enabled);
});

//  Past Forest Strong enemy appearance control XX
Event(11210350, Restart, function(X0_4, X4_4) {
    SkipIfEventFlag(3, OFF, TargetEventFlagType.EventIDAndSlotNumber, 0);
    ChangeCharacterEnableState(X0_4, Disabled);
    ForceCharacterDeath(X0_4, false);
    EndUnconditionally(EventEndType.End);
    IfCharacterDeadalive(MAIN, X0_4, DeathState.Dead);
    EndIfComparison(EventEndType.End, ComparisonType.Equal, X4_4, 0);
    IfCharacterType(OR_07, 10000, TargetType.Alive);
    IfCharacterType(OR_07, 10000, TargetType.Hollow);
    EndIfConditionGroupStateUncompiled(EventEndType.End, FAIL, OR_07);
    AwardItemsIncludingClients(X4_4);
});

//  Elevator 4_Church_Chainball Warp
Event(11210150, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 11210160);
    WarpCharacterAndSetFloor(1210350, TargetEntityType.Area, 1212143, -1, 1213040);
    WarpCharacterAndSetFloor(1210350, TargetEntityType.Area, 1212150, -1, 1213040);
    SetCharacterHome(1210350, 1212150);
});

//  Elevator 0_ Village
Event(11210100, Default, function() {
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 11210101);
    ReproduceObjectAnimation(1211000, 0);
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 11210101);
    ReproduceObjectAnimation(1211000, 10);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 11210101);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 1212101);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11210103);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 11215220);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 11210102);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 11210101);
    IfInoutsideArea(AND_02, InsideOutsideState.Inside, 10000, 1212100);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 11210103);
    IfEventFlag(AND_02, OFF, TargetEventFlagType.EventFlag, 11215220);
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 11210102);
    IfEventFlag(AND_03, OFF, TargetEventFlagType.EventFlag, 11210101);
    IfInoutsideArea(AND_03, InsideOutsideState.Inside, 10000, 1212102);
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 11210103);
    IfEventFlag(AND_03, OFF, TargetEventFlagType.EventFlag, 11215220);
    IfEventFlag(AND_04, ON, TargetEventFlagType.EventFlag, 11210101);
    IfInoutsideArea(AND_04, InsideOutsideState.Inside, 10000, 1212103);
    IfEventFlag(AND_04, ON, TargetEventFlagType.EventFlag, 11210103);
    IfEventFlag(AND_04, OFF, TargetEventFlagType.EventFlag, 11215220);
    IfConditionGroup(OR_01, PASS, AND_01);
    IfConditionGroup(OR_01, PASS, AND_02);
    IfConditionGroup(OR_01, PASS, AND_03);
    IfConditionGroup(OR_01, PASS, AND_04);
    IfConditionGroup(MAIN, PASS, OR_01);
    WaitForNetworkApproval(3);
    WaitFixedTimeFrames(0);
    SetEventFlag(11215220, ON);
    SkipIfConditionGroupStateCompiled(25, PASS, AND_02);
    SkipIfConditionGroupStateCompiled(24, PASS, AND_04);
    SpawnOneshotSFX(TargetEntityType.Object, 1211001, 101, 120030);
    SetEventFlag(11210101, ON);
    SetEventFlag(11210102, ON);
    CreateObjectfollowingSFX(1211000, 191, 120029);
    ForceAnimationPlayback(1211000, 0, false, false, false);
    WaitFixedTimeFrames(180);
    DeleteObjectfollowingSFX(1211000, false);
    SkipIfConditionGroupStateCompiled(8, PASS, AND_01);
    IfAllPlayersInoutsideArea(OR_02, InsideOutsideState.Outside, 1212102);
    IfInoutsideArea(AND_05, InsideOutsideState.Inside, 10000, 1212103);
    IfMultiplayerState(AND_05, MultiplayerState.Host);
    IfElapsedSeconds(AND_05, 1);
    IfConditionGroup(OR_02, PASS, AND_05);
    IfConditionGroup(MAIN, PASS, OR_02);
    SetEventFlag(11215220, OFF);
    EndUnconditionally(EventEndType.Restart);
    IfAllPlayersInoutsideArea(OR_02, InsideOutsideState.Outside, 1212100);
    IfInoutsideArea(AND_05, InsideOutsideState.Inside, 10000, 1212103);
    IfMultiplayerState(AND_05, MultiplayerState.Host);
    IfElapsedSeconds(AND_05, 1);
    IfConditionGroup(OR_02, PASS, AND_05);
    IfConditionGroup(MAIN, PASS, OR_02);
    SetEventFlag(11215220, OFF);
    EndUnconditionally(EventEndType.Restart);
    SpawnOneshotSFX(TargetEntityType.Object, 1211002, 101, 120030);
    SetEventFlag(11210101, OFF);
    CreateObjectfollowingSFX(1211000, 191, 120029);
    ForceAnimationPlayback(1211000, 10, false, false, false);
    WaitFixedTimeFrames(180);
    DeleteObjectfollowingSFX(1211000, false);
    SkipIfConditionGroupStateCompiled(8, PASS, AND_02);
    IfAllPlayersInoutsideArea(OR_03, InsideOutsideState.Outside, 1212103);
    IfInoutsideArea(AND_06, InsideOutsideState.Inside, 10000, 1212102);
    IfMultiplayerState(AND_06, MultiplayerState.Host);
    IfElapsedSeconds(AND_06, 1);
    IfConditionGroup(OR_03, PASS, AND_06);
    IfConditionGroup(MAIN, PASS, OR_03);
    SetEventFlag(11215220, OFF);
    EndUnconditionally(EventEndType.Restart);
    IfAllPlayersInoutsideArea(OR_03, InsideOutsideState.Outside, 1212101);
    IfInoutsideArea(AND_06, InsideOutsideState.Inside, 10000, 1212102);
    IfMultiplayerState(AND_06, MultiplayerState.Host);
    IfElapsedSeconds(AND_06, 1);
    IfConditionGroup(OR_03, PASS, AND_06);
    IfConditionGroup(MAIN, PASS, OR_03);
    SetEventFlag(11215220, OFF);
    EndUnconditionally(EventEndType.Restart);
});

//  Elevator 0_village_starting condition
Event(11210103, Default, function() {
    IfCharacterType(AND_07, 10000, TargetType.BlackPhantom);
    IfConditionGroup(AND_01, FAIL, AND_07);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 1212104);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetEventFlag(11210103, ON);
});

//  Elevator 1_ White Cat
Event(11210110, Default, function() {
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 11210111);
    ReproduceObjectAnimation(1211010, 11);
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 11210111);
    ReproduceObjectAnimation(1211010, 1);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11210111);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 1212111);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 11215221);
    IfEventFlag(AND_02, OFF, TargetEventFlagType.EventFlag, 11210111);
    IfInoutsideArea(AND_02, InsideOutsideState.Inside, 10000, 1212110);
    IfEventFlag(AND_02, OFF, TargetEventFlagType.EventFlag, 11215221);
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 11210111);
    IfInoutsideArea(AND_03, InsideOutsideState.Inside, 10000, 1212112);
    IfEventFlag(AND_03, OFF, TargetEventFlagType.EventFlag, 11215221);
    IfEventFlag(AND_04, OFF, TargetEventFlagType.EventFlag, 11210111);
    IfInoutsideArea(AND_04, InsideOutsideState.Inside, 10000, 1212113);
    IfEventFlag(AND_04, OFF, TargetEventFlagType.EventFlag, 11215221);
    IfConditionGroup(OR_01, PASS, AND_01);
    IfConditionGroup(OR_01, PASS, AND_02);
    IfConditionGroup(OR_01, PASS, AND_03);
    IfConditionGroup(OR_01, PASS, AND_04);
    IfConditionGroup(MAIN, PASS, OR_01);
    WaitForNetworkApproval(3);
    WaitFixedTimeFrames(0);
    SetEventFlag(11215221, ON);
    SkipIfConditionGroupStateCompiled(24, PASS, AND_02);
    SkipIfConditionGroupStateCompiled(23, PASS, AND_04);
    SpawnOneshotSFX(TargetEntityType.Object, 1211011, 101, 120030);
    SetEventFlag(11210111, OFF);
    CreateObjectfollowingSFX(1211010, 191, 120029);
    ForceAnimationPlayback(1211010, 1, false, false, false);
    WaitFixedTimeFrames(140);
    DeleteObjectfollowingSFX(1211010, false);
    SkipIfConditionGroupStateCompiled(8, PASS, AND_01);
    IfAllPlayersInoutsideArea(OR_02, InsideOutsideState.Outside, 1212112);
    IfInoutsideArea(AND_05, InsideOutsideState.Inside, 10000, 1212113);
    IfMultiplayerState(AND_05, MultiplayerState.Host);
    IfElapsedSeconds(AND_05, 1);
    IfConditionGroup(OR_02, PASS, AND_05);
    IfConditionGroup(MAIN, PASS, OR_02);
    SetEventFlag(11215221, OFF);
    EndUnconditionally(EventEndType.Restart);
    IfAllPlayersInoutsideArea(OR_02, InsideOutsideState.Outside, 1212110);
    IfInoutsideArea(AND_05, InsideOutsideState.Inside, 10000, 1212113);
    IfMultiplayerState(AND_05, MultiplayerState.Host);
    IfElapsedSeconds(AND_05, 1);
    IfConditionGroup(OR_02, PASS, AND_05);
    IfConditionGroup(MAIN, PASS, OR_02);
    SetEventFlag(11215221, OFF);
    EndUnconditionally(EventEndType.Restart);
    SpawnOneshotSFX(TargetEntityType.Object, 1211012, 101, 120030);
    SetEventFlag(11210111, ON);
    CreateObjectfollowingSFX(1211010, 191, 120029);
    ForceAnimationPlayback(1211010, 11, false, false, false);
    WaitFixedTimeFrames(140);
    DeleteObjectfollowingSFX(1211010, false);
    SkipIfConditionGroupStateCompiled(8, PASS, AND_02);
    IfAllPlayersInoutsideArea(OR_03, InsideOutsideState.Outside, 1212113);
    IfInoutsideArea(AND_06, InsideOutsideState.Inside, 10000, 1212112);
    IfMultiplayerState(AND_06, MultiplayerState.Host);
    IfElapsedSeconds(AND_06, 1);
    IfConditionGroup(OR_03, PASS, AND_06);
    IfConditionGroup(MAIN, PASS, OR_03);
    SetEventFlag(11215221, OFF);
    EndUnconditionally(EventEndType.Restart);
    IfAllPlayersInoutsideArea(OR_03, InsideOutsideState.Outside, 1212111);
    IfInoutsideArea(AND_06, InsideOutsideState.Inside, 10000, 1212112);
    IfMultiplayerState(AND_06, MultiplayerState.Host);
    IfElapsedSeconds(AND_06, 1);
    IfConditionGroup(OR_03, PASS, AND_06);
    IfConditionGroup(MAIN, PASS, OR_03);
    SetEventFlag(11215221, OFF);
    EndUnconditionally(EventEndType.Restart);
});

//  Elevator 2_ Cat back
Event(11210120, Default, function() {
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 11210121);
    ReproduceObjectAnimation(1211020, 2);
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 11210121);
    ReproduceObjectAnimation(1211020, 12);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 11210121);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 1212121);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11210123);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 11215222);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 11210122);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 11210121);
    IfInoutsideArea(AND_02, InsideOutsideState.Inside, 10000, 1212120);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 11210123);
    IfEventFlag(AND_02, OFF, TargetEventFlagType.EventFlag, 11215222);
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 11210122);
    IfEventFlag(AND_03, OFF, TargetEventFlagType.EventFlag, 11210121);
    IfInoutsideArea(AND_03, InsideOutsideState.Inside, 10000, 1212122);
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 11210123);
    IfEventFlag(AND_03, OFF, TargetEventFlagType.EventFlag, 11215222);
    IfEventFlag(AND_04, ON, TargetEventFlagType.EventFlag, 11210121);
    IfInoutsideArea(AND_04, InsideOutsideState.Inside, 10000, 1212123);
    IfEventFlag(AND_04, ON, TargetEventFlagType.EventFlag, 11210123);
    IfEventFlag(AND_04, OFF, TargetEventFlagType.EventFlag, 11215222);
    IfConditionGroup(OR_01, PASS, AND_01);
    IfConditionGroup(OR_01, PASS, AND_02);
    IfConditionGroup(OR_01, PASS, AND_03);
    IfConditionGroup(OR_01, PASS, AND_04);
    IfConditionGroup(MAIN, PASS, OR_01);
    WaitForNetworkApproval(3);
    WaitFixedTimeFrames(0);
    SetEventFlag(11215222, ON);
    SkipIfConditionGroupStateCompiled(25, PASS, AND_02);
    SkipIfConditionGroupStateCompiled(24, PASS, AND_04);
    SpawnOneshotSFX(TargetEntityType.Object, 1211021, 101, 120030);
    SetEventFlag(11210121, ON);
    SetEventFlag(11210122, ON);
    CreateObjectfollowingSFX(1211020, 191, 120029);
    ForceAnimationPlayback(1211020, 2, false, false, false);
    WaitFixedTimeFrames(140);
    DeleteObjectfollowingSFX(1211020, false);
    SkipIfConditionGroupStateCompiled(8, PASS, AND_01);
    IfAllPlayersInoutsideArea(OR_02, InsideOutsideState.Outside, 1212122);
    IfInoutsideArea(AND_05, InsideOutsideState.Inside, 10000, 1212123);
    IfMultiplayerState(AND_05, MultiplayerState.Host);
    IfElapsedSeconds(AND_05, 1);
    IfConditionGroup(OR_02, PASS, AND_05);
    IfConditionGroup(MAIN, PASS, OR_02);
    SetEventFlag(11215222, OFF);
    EndUnconditionally(EventEndType.Restart);
    IfAllPlayersInoutsideArea(OR_02, InsideOutsideState.Outside, 1212120);
    IfInoutsideArea(AND_05, InsideOutsideState.Inside, 10000, 1212123);
    IfMultiplayerState(AND_05, MultiplayerState.Host);
    IfElapsedSeconds(AND_05, 1);
    IfConditionGroup(OR_02, PASS, AND_05);
    IfConditionGroup(MAIN, PASS, OR_02);
    SetEventFlag(11215222, OFF);
    EndUnconditionally(EventEndType.Restart);
    SpawnOneshotSFX(TargetEntityType.Object, 1211022, 101, 120030);
    SetEventFlag(11210121, OFF);
    CreateObjectfollowingSFX(1211020, 191, 120029);
    ForceAnimationPlayback(1211020, 12, false, false, false);
    WaitFixedTimeFrames(140);
    DeleteObjectfollowingSFX(1211020, false);
    SkipIfConditionGroupStateCompiled(8, PASS, AND_02);
    IfAllPlayersInoutsideArea(OR_03, InsideOutsideState.Outside, 1212123);
    IfInoutsideArea(AND_06, InsideOutsideState.Inside, 10000, 1212122);
    IfMultiplayerState(AND_06, MultiplayerState.Host);
    IfElapsedSeconds(AND_06, 1);
    IfConditionGroup(OR_03, PASS, AND_06);
    IfConditionGroup(MAIN, PASS, OR_03);
    SetEventFlag(11215222, OFF);
    EndUnconditionally(EventEndType.Restart);
    IfAllPlayersInoutsideArea(OR_03, InsideOutsideState.Outside, 1212121);
    IfInoutsideArea(AND_06, InsideOutsideState.Inside, 10000, 1212122);
    IfMultiplayerState(AND_06, MultiplayerState.Host);
    IfElapsedSeconds(AND_06, 1);
    IfConditionGroup(OR_03, PASS, AND_06);
    IfConditionGroup(MAIN, PASS, OR_03);
    SetEventFlag(11215222, OFF);
    EndUnconditionally(EventEndType.Restart);
});

//  Elevator 2_cat back_starting condition
Event(11210123, Default, function() {
    IfCharacterType(AND_07, 10000, TargetType.BlackPhantom);
    IfConditionGroup(AND_01, FAIL, AND_07);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 1212124);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetEventFlag(11210123, ON);
});

//  Elevator 3_ Cavity
Event(11210130, Default, function() {
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 11210131);
    ReproduceObjectAnimation(1211030, 3);
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 11210131);
    ReproduceObjectAnimation(1211030, 13);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 11210131);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 1212131);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11210133);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 11215223);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 11210132);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 11210131);
    IfInoutsideArea(AND_02, InsideOutsideState.Inside, 10000, 1212130);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 11210133);
    IfEventFlag(AND_02, OFF, TargetEventFlagType.EventFlag, 11215223);
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 11210132);
    IfEventFlag(AND_03, OFF, TargetEventFlagType.EventFlag, 11210131);
    IfInoutsideArea(AND_03, InsideOutsideState.Inside, 10000, 1212132);
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 11210133);
    IfEventFlag(AND_03, OFF, TargetEventFlagType.EventFlag, 11215223);
    IfEventFlag(AND_04, ON, TargetEventFlagType.EventFlag, 11210131);
    IfInoutsideArea(AND_04, InsideOutsideState.Inside, 10000, 1212133);
    IfEventFlag(AND_04, ON, TargetEventFlagType.EventFlag, 11210133);
    IfEventFlag(AND_04, OFF, TargetEventFlagType.EventFlag, 11215223);
    IfConditionGroup(OR_01, PASS, AND_01);
    IfConditionGroup(OR_01, PASS, AND_02);
    IfConditionGroup(OR_01, PASS, AND_03);
    IfConditionGroup(OR_01, PASS, AND_04);
    IfConditionGroup(MAIN, PASS, OR_01);
    WaitForNetworkApproval(3);
    WaitFixedTimeFrames(0);
    SetEventFlag(11215223, ON);
    SkipIfConditionGroupStateCompiled(25, PASS, AND_02);
    SkipIfConditionGroupStateCompiled(24, PASS, AND_04);
    SpawnOneshotSFX(TargetEntityType.Object, 1211031, 101, 120030);
    SetEventFlag(11210131, ON);
    SetEventFlag(11210132, ON);
    CreateObjectfollowingSFX(1211030, 191, 120029);
    ForceAnimationPlayback(1211030, 3, false, false, false);
    WaitFixedTimeFrames(240);
    DeleteObjectfollowingSFX(1211030, false);
    SkipIfConditionGroupStateCompiled(8, PASS, AND_01);
    IfAllPlayersInoutsideArea(OR_02, InsideOutsideState.Outside, 1212132);
    IfInoutsideArea(AND_05, InsideOutsideState.Inside, 10000, 1212133);
    IfMultiplayerState(AND_05, MultiplayerState.Host);
    IfElapsedSeconds(AND_05, 1);
    IfConditionGroup(OR_02, PASS, AND_05);
    IfConditionGroup(MAIN, PASS, OR_02);
    SetEventFlag(11215223, OFF);
    EndUnconditionally(EventEndType.Restart);
    IfAllPlayersInoutsideArea(OR_02, InsideOutsideState.Outside, 1212130);
    IfInoutsideArea(AND_05, InsideOutsideState.Inside, 10000, 1212133);
    IfMultiplayerState(AND_05, MultiplayerState.Host);
    IfElapsedSeconds(AND_05, 1);
    IfConditionGroup(OR_02, PASS, AND_05);
    IfConditionGroup(MAIN, PASS, OR_02);
    SetEventFlag(11215223, OFF);
    EndUnconditionally(EventEndType.Restart);
    SpawnOneshotSFX(TargetEntityType.Object, 1211032, 101, 120030);
    SetEventFlag(11210131, OFF);
    CreateObjectfollowingSFX(1211030, 191, 120029);
    ForceAnimationPlayback(1211030, 13, false, false, false);
    WaitFixedTimeFrames(240);
    DeleteObjectfollowingSFX(1211030, false);
    SkipIfConditionGroupStateCompiled(8, PASS, AND_02);
    IfAllPlayersInoutsideArea(OR_03, InsideOutsideState.Outside, 1212133);
    IfInoutsideArea(AND_06, InsideOutsideState.Inside, 10000, 1212132);
    IfMultiplayerState(AND_06, MultiplayerState.Host);
    IfElapsedSeconds(AND_06, 1);
    IfConditionGroup(OR_03, PASS, AND_06);
    IfConditionGroup(MAIN, PASS, OR_03);
    SetEventFlag(11215223, OFF);
    EndUnconditionally(EventEndType.Restart);
    IfAllPlayersInoutsideArea(OR_03, InsideOutsideState.Outside, 1212131);
    IfInoutsideArea(AND_06, InsideOutsideState.Inside, 10000, 1212132);
    IfMultiplayerState(AND_06, MultiplayerState.Host);
    IfElapsedSeconds(AND_06, 1);
    IfConditionGroup(OR_03, PASS, AND_06);
    IfConditionGroup(MAIN, PASS, OR_03);
    SetEventFlag(11215223, OFF);
    EndUnconditionally(EventEndType.Restart);
});

//  Elevator 3_Cavity_Startup condition
Event(11210133, Default, function() {
    IfInoutsideArea(MAIN, InsideOutsideState.Inside, 10000, 1212134);
    SetEventFlag(11210133, ON);
});

//  Elevator 4_ Church
Event(11210140, Default, function() {
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 11210141);
    ReproduceObjectAnimation(1211040, 4);
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 11210141);
    ReproduceObjectAnimation(1211040, 14);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 11210141);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 1212141);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 11215224);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 11210141);
    IfInoutsideArea(AND_02, InsideOutsideState.Inside, 10000, 1212140);
    IfEventFlag(AND_02, OFF, TargetEventFlagType.EventFlag, 11215224);
    IfEventFlag(AND_03, OFF, TargetEventFlagType.EventFlag, 11210141);
    IfInoutsideArea(AND_03, InsideOutsideState.Inside, 10000, 1212142);
    IfEventFlag(AND_03, OFF, TargetEventFlagType.EventFlag, 11215224);
    IfEventFlag(AND_04, ON, TargetEventFlagType.EventFlag, 11210141);
    IfInoutsideArea(AND_04, InsideOutsideState.Inside, 10000, 1212143);
    IfEventFlag(AND_04, OFF, TargetEventFlagType.EventFlag, 11215224);
    IfConditionGroup(OR_01, PASS, AND_01);
    IfConditionGroup(OR_01, PASS, AND_02);
    IfConditionGroup(OR_01, PASS, AND_03);
    IfConditionGroup(OR_01, PASS, AND_04);
    IfConditionGroup(MAIN, PASS, OR_01);
    WaitForNetworkApproval(3);
    WaitFixedTimeFrames(0);
    SetEventFlag(11215224, ON);
    SetEventFlag(11210160, ON);
    SkipIfConditionGroupStateCompiled(24, PASS, AND_02);
    SkipIfConditionGroupStateCompiled(23, PASS, AND_04);
    SpawnOneshotSFX(TargetEntityType.Object, 1211041, 101, 120030);
    SetEventFlag(11210141, ON);
    CreateObjectfollowingSFX(1211040, 191, 120029);
    ForceAnimationPlayback(1211040, 4, false, false, false);
    WaitFixedTimeFrames(180);
    DeleteObjectfollowingSFX(1211040, false);
    SkipIfConditionGroupStateCompiled(8, PASS, AND_01);
    IfAllPlayersInoutsideArea(OR_02, InsideOutsideState.Outside, 1212142);
    IfInoutsideArea(AND_05, InsideOutsideState.Inside, 10000, 1212143);
    IfMultiplayerState(AND_05, MultiplayerState.Host);
    IfElapsedSeconds(AND_05, 1);
    IfConditionGroup(OR_02, PASS, AND_05);
    IfConditionGroup(MAIN, PASS, OR_02);
    SetEventFlag(11215224, OFF);
    EndUnconditionally(EventEndType.Restart);
    IfAllPlayersInoutsideArea(OR_02, InsideOutsideState.Outside, 1212140);
    IfInoutsideArea(AND_05, InsideOutsideState.Inside, 10000, 1212143);
    IfMultiplayerState(AND_05, MultiplayerState.Host);
    IfElapsedSeconds(AND_05, 1);
    IfConditionGroup(OR_02, PASS, AND_05);
    IfConditionGroup(MAIN, PASS, OR_02);
    SetEventFlag(11215224, OFF);
    EndUnconditionally(EventEndType.Restart);
    SpawnOneshotSFX(TargetEntityType.Object, 1211042, 101, 120030);
    SetEventFlag(11210141, OFF);
    CreateObjectfollowingSFX(1211040, 191, 120029);
    ForceAnimationPlayback(1211040, 14, false, false, false);
    WaitFixedTimeFrames(180);
    DeleteObjectfollowingSFX(1211040, false);
    SkipIfConditionGroupStateCompiled(8, PASS, AND_02);
    IfAllPlayersInoutsideArea(OR_03, InsideOutsideState.Outside, 1212143);
    IfInoutsideArea(AND_06, InsideOutsideState.Inside, 10000, 1212142);
    IfMultiplayerState(AND_06, MultiplayerState.Host);
    IfElapsedSeconds(AND_06, 1);
    IfConditionGroup(OR_03, PASS, AND_06);
    IfConditionGroup(MAIN, PASS, OR_03);
    SetEventFlag(11215224, OFF);
    EndUnconditionally(EventEndType.Restart);
    IfAllPlayersInoutsideArea(OR_03, InsideOutsideState.Outside, 1212141);
    IfInoutsideArea(AND_06, InsideOutsideState.Inside, 10000, 1212142);
    IfMultiplayerState(AND_06, MultiplayerState.Host);
    IfElapsedSeconds(AND_06, 1);
    IfConditionGroup(OR_03, PASS, AND_06);
    IfConditionGroup(MAIN, PASS, OR_03);
    SetEventFlag(11215224, OFF);
    EndUnconditionally(EventEndType.Restart);
});

//  Elevator Enemy wall switching _XX
Event(11210170, Default, function(X0_4, X4_4, X8_4) {
    ActivateHit(X4_4, Disabled);
    SkipIfComparison(1, ComparisonType.NotEqual, X0_4, 11215220);
    IfAllPlayersInoutsideArea(AND_01, InsideOutsideState.Outside, 1212100);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, X8_4);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, X0_4);
    IfConditionGroup(MAIN, PASS, AND_01);
    ActivateHit(X4_4, Enabled);
    SkipIfComparison(3, ComparisonType.NotEqual, X0_4, 11215220);
    IfInoutsideArea(AND_07, InsideOutsideState.Inside, 10000, 1212100);
    IfElapsedSeconds(AND_07, 2);
    IfConditionGroup(OR_01, PASS, AND_07);
    IfAllPlayersInoutsideArea(OR_01, InsideOutsideState.Outside, X8_4);
    IfEventFlag(OR_01, OFF, TargetEventFlagType.EventFlag, X0_4);
    IfConditionGroup(MAIN, PASS, OR_01);
    WaitFixedTimeSeconds(5);
    EndUnconditionally(EventEndType.Restart);
});

//  Unlock the Go door
Event(11210300, Default, function() {
    EndIfMultiplayerState(EventEndType.End, MultiplayerState.Client);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventID, 0);
    IfObjactEventFlag(MAIN, 11210650);
    SetEventFlag(11210650, ON);
    DisplayGenericDialog(10010884, PromptType.YESNO, NumberofOptions.NoButtons, 1211120, 3);
});

//  Black dragon crosses the bridge
Event(11210050, Restart, function() {
    SetCharacterGravity(1210400, Disabled);
    SetCharacterInvincibility(1210400, Enabled);
    SetCharacterMapHits(1210400, true);
    ChangeCharacterEnableState(1210400, Disabled);
    SkipIfMultiplayerState(1, MultiplayerState.Client);
    SetNetworkUpdateAuthority(1210400, AuthorityLevel.Forced);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventID, 0);
    IfInoutsideArea(MAIN, InsideOutsideState.Inside, 10000, 1212050);
    SetEventFlag(11210050, ON);
    SetNetworkUpdateRate(1210400, true, CharacterUpdateFrequency.AlwaysUpdate);
    ChangeCharacterEnableState(1210400, Enabled);
    WarpCharacterAndSetFloor(1210400, TargetEntityType.Area, 1212051, -1, 1213000);
    ForceAnimationPlayback(1210400, 7000, false, false, false);
    WaitFixedTimeFrames(420);
    ChangeCharacterEnableState(1210400, Disabled);
});

//  Black Dragon Appears in the Forest
Event(11210051, Restart, function() {
    SetCharacterAIState(1210402, Disabled);
    SetCharacterImmortality(1210402, Enabled);
    SetCharacterGravity(1210402, Disabled);
    SetCharacterMapHits(1210402, true);
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventID, 0);
    ChangeCharacterEnableState(1210402, Disabled);
    SkipIfMultiplayerState(1, MultiplayerState.Client);
    SetNetworkUpdateAuthority(1210402, AuthorityLevel.Forced);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventID, 0);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 1212052);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 11210535);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetNetworkUpdateRate(1210402, true, CharacterUpdateFrequency.AlwaysUpdate);
    ChangeCharacterEnableState(1210402, Enabled);
    ForceAnimationPlayback(1210402, 7006, false, false, true);
    WaitFixedTimeFrames(240);
    ForceAnimationPlayback(1210402, 7008, false, false, true);
    WaitFixedTimeFrames(194);
    SetEventFlag(11210062, ON);
    SetEventFlag(11210069, ON);
    EndUnconditionally(EventEndType.End);
});

//  Black dragon fights in the forest
Event(11210052, Restart, function() {
    SkipIfEventFlag(3, OFF, TargetEventFlagType.EventFlag, 11210535);
    BatchSetEventFlags(11210063, 11210067, OFF);
    ChangeCharacterEnableState(1210402, Disabled);
    EndUnconditionally(EventEndType.End);
    BatchSetEventFlags(11210070, 11210073, OFF);
    SkipIfMultiplayerState(1, MultiplayerState.Client);
    RandomlySetEventFlagInRange(11210070, 11210073, ON);
    SetEventFlag(11210068, ON);
    IfHPRatio(AND_01, 1210402, ComparisonType.LessOrEqual, 0.01);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11210062);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 11210535);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 11210067);
    IfEventFlag(OR_02, ON, TargetEventFlagType.EventFlag, 11215056);
    IfEventFlag(OR_02, ON, TargetEventFlagType.EventFlag, 11215058);
    IfConditionGroup(AND_02, PASS, OR_02);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 11210062);
    IfEventFlag(AND_02, OFF, TargetEventFlagType.EventFlag, 11210535);
    IfEventFlag(AND_02, OFF, TargetEventFlagType.EventFlag, 11210067);
    IfEventFlag(OR_03, ON, TargetEventFlagType.EventFlag, 11215055);
    IfEventFlag(OR_03, ON, TargetEventFlagType.EventFlag, 11215057);
    IfConditionGroup(AND_03, PASS, OR_03);
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 11210062);
    IfEventFlag(AND_03, OFF, TargetEventFlagType.EventFlag, 11210535);
    IfEventFlag(AND_03, OFF, TargetEventFlagType.EventFlag, 11210067);
    IfConditionGroup(AND_04, FAIL, AND_01);
    IfConditionGroup(AND_04, FAIL, AND_02);
    IfConditionGroup(AND_04, FAIL, AND_03);
    IfEventFlag(AND_04, ON, TargetEventFlagType.EventFlag, 11210062);
    IfEventFlag(AND_04, OFF, TargetEventFlagType.EventFlag, 11210535);
    IfEventFlag(AND_04, OFF, TargetEventFlagType.EventFlag, 11210067);
    IfConditionGroup(OR_05, PASS, AND_01);
    IfConditionGroup(OR_05, PASS, AND_02);
    IfConditionGroup(OR_05, PASS, AND_03);
    IfConditionGroup(OR_05, PASS, AND_04);
    IfConditionGroup(MAIN, PASS, OR_05);
    SkipIfConditionGroupStateCompiled(3, PASS, AND_01);
    SkipIfConditionGroupStateCompiled(4, PASS, AND_02);
    SkipIfConditionGroupStateCompiled(5, PASS, AND_03);
    SkipIfConditionGroupStateCompiled(6, PASS, AND_04);
    SetEventFlag(11210063, ON);
    SkipUnconditionally(5);
    SetEventFlag(11210065, ON);
    SkipUnconditionally(3);
    SetEventFlag(11210064, ON);
    SkipUnconditionally(1);
    SetEventFlag(11210066, ON);
    SetEventFlag(11210067, ON);
    EndUnconditionally(EventEndType.Restart);
});

//  Black dragon dies in the forest
Event(11210053, Restart, function() {
    SkipIfEventFlag(3, OFF, TargetEventFlagType.EventID, 0);
    ChangeCharacterEnableState(1210401, Disabled);
    ChangeCharacterEnableState(1210402, Disabled);
    EndUnconditionally(EventEndType.End);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11210063);
    IfMultiplayerState(AND_01, MultiplayerState.Host);
    IfConditionGroup(MAIN, PASS, AND_01);
    ForceAnimationPlayback(1210402, 7004, false, false, true);
    WaitFixedTimeFrames(176);
    ChangeCharacterEnableState(1210402, Disabled);
    ForceCharacterDeath(1210402, true);
});

//  Black dragon breathes in the forest between
Event(11210054, Restart, function() {
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 11210065);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11210064);
    IfMultiplayerState(AND_01, MultiplayerState.Host);
    IfConditionGroup(MAIN, PASS, AND_01);
    SkipIfEventFlag(3, OFF, TargetEventFlagType.EventFlag, 11210069);
    ForceAnimationPlayback(1210402, 7010, false, false, true);
    WaitFixedTimeFrames(561);
    SkipUnconditionally(2);
    ForceAnimationPlayback(1210402, 7002, false, false, true);
    WaitFixedTimeFrames(461);
    IfHPRatio(AND_02, 1210402, ComparisonType.LessOrEqual, 0.01);
    SkipIfConditionGroupStateUncompiled(26, PASS, AND_02);
    SkipIfEventFlag(3, ON, TargetEventFlagType.EventFlag, 11210070);
    SkipIfEventFlag(7, ON, TargetEventFlagType.EventFlag, 11210071);
    SkipIfEventFlag(12, ON, TargetEventFlagType.EventFlag, 11210072);
    SkipIfEventFlag(17, ON, TargetEventFlagType.EventFlag, 11210073);
    WaitFixedTimeFrames(6);
    ForceAnimationPlayback(1210402, 7001, false, false, true);
    WaitFixedTimeFrames(269);
    SetEventFlag(11210069, OFF);
    SkipUnconditionally(17);
    WaitFixedTimeFrames(6);
    ForceAnimationPlayback(1210402, 7008, false, false, true);
    WaitFixedTimeFrames(194);
    WaitFixedTimeFrames(60);
    SetEventFlag(11210069, ON);
    SkipUnconditionally(11);
    WaitFixedTimeFrames(6);
    ForceAnimationPlayback(1210402, 7008, false, false, true);
    WaitFixedTimeFrames(194);
    WaitFixedTimeFrames(120);
    SetEventFlag(11210069, ON);
    SkipUnconditionally(5);
    WaitFixedTimeFrames(6);
    ForceAnimationPlayback(1210402, 7008, false, false, true);
    WaitFixedTimeFrames(194);
    WaitFixedTimeFrames(180);
    SetEventFlag(11210069, ON);
    SetEventFlag(11210067, OFF);
    SetEventFlag(11210064, OFF);
    EndUnconditionally(EventEndType.Restart);
});

//  Black dragon breathes in the forest between the two (near)
Event(11210055, Restart, function() {
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11210065);
    IfMultiplayerState(AND_01, MultiplayerState.Host);
    IfConditionGroup(MAIN, PASS, AND_01);
    SkipIfEventFlag(3, OFF, TargetEventFlagType.EventFlag, 11210069);
    ForceAnimationPlayback(1210402, 7011, false, false, true);
    WaitFixedTimeFrames(514);
    SkipUnconditionally(2);
    ForceAnimationPlayback(1210402, 7003, false, false, true);
    WaitFixedTimeFrames(414);
    IfHPRatio(AND_02, 1210402, ComparisonType.LessOrEqual, 0.01);
    SkipIfConditionGroupStateUncompiled(26, PASS, AND_02);
    SkipIfEventFlag(3, ON, TargetEventFlagType.EventFlag, 11210070);
    SkipIfEventFlag(7, ON, TargetEventFlagType.EventFlag, 11210071);
    SkipIfEventFlag(12, ON, TargetEventFlagType.EventFlag, 11210072);
    SkipIfEventFlag(17, ON, TargetEventFlagType.EventFlag, 11210073);
    WaitFixedTimeFrames(6);
    ForceAnimationPlayback(1210402, 7001, false, false, true);
    WaitFixedTimeFrames(269);
    SetEventFlag(11210069, OFF);
    SkipUnconditionally(17);
    WaitFixedTimeFrames(6);
    ForceAnimationPlayback(1210402, 7008, false, false, true);
    WaitFixedTimeFrames(194);
    WaitFixedTimeFrames(60);
    SetEventFlag(11210069, ON);
    SkipUnconditionally(11);
    WaitFixedTimeFrames(6);
    ForceAnimationPlayback(1210402, 7008, false, false, true);
    WaitFixedTimeFrames(194);
    WaitFixedTimeFrames(120);
    SetEventFlag(11210069, ON);
    SkipUnconditionally(5);
    WaitFixedTimeFrames(6);
    ForceAnimationPlayback(1210402, 7008, false, false, true);
    WaitFixedTimeFrames(194);
    WaitFixedTimeFrames(180);
    SetEventFlag(11210069, ON);
    SetEventFlag(11210067, OFF);
    SetEventFlag(11210065, OFF);
    EndUnconditionally(EventEndType.Restart);
});

//  Black dragon patrols in the air in the forest
Event(11210056, Restart, function() {
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 11210064);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 11210065);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11210066);
    IfMultiplayerState(AND_01, MultiplayerState.Host);
    IfConditionGroup(MAIN, PASS, AND_01);
    SkipIfEventFlag(11, OFF, TargetEventFlagType.EventFlag, 11210069);
    ForceAnimationPlayback(1210402, 7009, false, false, true);
    WaitFixedTimeFrames(30);
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 11210070);
    WaitFixedTimeFrames(15);
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 11210071);
    WaitFixedTimeFrames(30);
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 11210072);
    WaitFixedTimeFrames(45);
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 11210073);
    WaitFixedTimeFrames(60);
    SkipUnconditionally(11);
    ForceAnimationPlayback(1210402, 7008, false, false, true);
    WaitFixedTimeFrames(200);
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 11210070);
    WaitFixedTimeFrames(15);
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 11210071);
    WaitFixedTimeFrames(30);
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 11210072);
    WaitFixedTimeFrames(45);
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 11210073);
    WaitFixedTimeFrames(60);
    SetEventFlag(11210069, ON);
    SetEventFlag(11210067, OFF);
    SetEventFlag(11210066, OFF);
    EndUnconditionally(EventEndType.Restart);
});

//  Black Dragon Random Flag in the Forest
Event(11210057, Restart, function() {
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11210070);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11210068);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 11210071);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 11210068);
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 11210072);
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 11210068);
    IfEventFlag(AND_04, ON, TargetEventFlagType.EventFlag, 11210073);
    IfEventFlag(AND_04, ON, TargetEventFlagType.EventFlag, 11210068);
    IfConditionGroup(OR_01, PASS, AND_01);
    IfConditionGroup(OR_01, PASS, AND_02);
    IfConditionGroup(OR_01, PASS, AND_03);
    IfConditionGroup(OR_01, PASS, AND_04);
    IfConditionGroup(MAIN, PASS, OR_01);
    SkipIfConditionGroupStateCompiled(3, PASS, AND_01);
    SkipIfConditionGroupStateCompiled(8, PASS, AND_02);
    SkipIfConditionGroupStateCompiled(13, PASS, AND_03);
    SkipIfConditionGroupStateCompiled(18, PASS, AND_04);
    SetEventFlag(11210070, ON);
    SetEventFlag(11210071, OFF);
    SetEventFlag(11210072, OFF);
    SetEventFlag(11210073, OFF);
    SetEventFlag(11210068, OFF);
    EndUnconditionally(EventEndType.Restart);
    SetEventFlag(11210070, OFF);
    SetEventFlag(11210071, ON);
    SetEventFlag(11210072, OFF);
    SetEventFlag(11210073, OFF);
    SetEventFlag(11210068, OFF);
    EndUnconditionally(EventEndType.Restart);
    SetEventFlag(11210070, OFF);
    SetEventFlag(11210071, OFF);
    SetEventFlag(11210072, ON);
    SetEventFlag(11210073, OFF);
    SetEventFlag(11210068, OFF);
    EndUnconditionally(EventEndType.Restart);
    SetEventFlag(11210070, OFF);
    SetEventFlag(11210071, OFF);
    SetEventFlag(11210072, OFF);
    SetEventFlag(11210073, ON);
    SetEventFlag(11210068, OFF);
    EndUnconditionally(EventEndType.Restart);
});

//  Black dragon monitors the area in the forest between the two (far) _ host
Event(11210040, Restart, function() {
    IfMultiplayerState(AND_01, MultiplayerState.Host);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1212054);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1212062);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetEventFlag(11215055, ON);
    IfMultiplayerState(AND_02, MultiplayerState.Host);
    IfInoutsideArea(AND_02, InsideOutsideState.Outside, 10000, 1212054);
    IfInoutsideArea(AND_02, InsideOutsideState.Outside, 10000, 1212062);
    IfConditionGroup(MAIN, PASS, AND_02);
    SetEventFlag(11215055, OFF);
    EndUnconditionally(EventEndType.Restart);
});

//  Black dragon monitors the area in the forest between them (near) _host
Event(11210041, Restart, function() {
    IfMultiplayerState(AND_01, MultiplayerState.Host);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 1212055);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetEventFlag(11215056, ON);
    IfMultiplayerState(AND_02, MultiplayerState.Host);
    IfInoutsideArea(AND_02, InsideOutsideState.Outside, 10000, 1212055);
    IfConditionGroup(MAIN, PASS, AND_02);
    SetEventFlag(11215056, OFF);
    EndUnconditionally(EventEndType.Restart);
});

//  Black dragon monitors the area in the forest (far) _client
Event(11210042, Restart, function() {
    IfMultiplayerState(AND_01, MultiplayerState.Client);
    IfCharacterType(AND_01, 10000, TargetType.WhitePhantom);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1212054);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1212062);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfElapsedFrames(AND_01, 30);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetEventFlag(11215057, ON);
    WaitFixedTimeFrames(90);
    SetEventFlag(11215057, OFF);
    EndUnconditionally(EventEndType.Restart);
});

//  Black dragon monitors the area in the forest (near) _client
Event(11210043, Restart, function() {
    IfMultiplayerState(AND_01, MultiplayerState.Client);
    IfCharacterType(AND_01, 10000, TargetType.WhitePhantom);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 1212055);
    IfElapsedFrames(AND_01, 30);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetEventFlag(11215058, ON);
    WaitFixedTimeFrames(90);
    SetEventFlag(11215058, OFF);
    EndUnconditionally(EventEndType.Restart);
});

//  Defeat the Black Dragon
Event(11210004, Default, function() {
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventID, 0);
    ChangeCharacterEnableState(1210401, Disabled);
    EndUnconditionally(EventEndType.End);
    IfCharacterDeadalive(OR_01, 1210401, DeathState.Dead);
    IfCharacterDeadalive(OR_01, 1210402, DeathState.Dead);
    IfConditionGroup(MAIN, PASS, OR_01);
    SetEventFlag(11210004, ON);
});

//  Black Dragon Wall Control
Event(11215050, Restart, function() {
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 1212057);
    IfInoutsideArea(AND_02, InsideOutsideState.Inside, 10000, 1212059);
    IfAllPlayersInoutsideArea(AND_02, InsideOutsideState.Outside, 1212057);
    IfInoutsideArea(AND_03, InsideOutsideState.Inside, 10000, 1212058);
    IfAllPlayersInoutsideArea(AND_03, InsideOutsideState.Outside, 1212057);
    IfAllPlayersInoutsideArea(AND_03, InsideOutsideState.Outside, 1212059);
    IfConditionGroup(OR_01, PASS, AND_01);
    IfConditionGroup(OR_01, PASS, AND_02);
    IfConditionGroup(OR_01, PASS, AND_03);
    IfConditionGroup(AND_04, PASS, OR_01);
    IfEventFlag(AND_04, ON, TargetEventFlagType.EventFlag, 11215063);
    IfConditionGroup(MAIN, PASS, AND_04);
    SkipIfConditionGroupStateCompiled(2, PASS, AND_01);
    SkipIfConditionGroupStateCompiled(3, PASS, AND_02);
    SkipIfConditionGroupStateCompiled(4, PASS, AND_03);
    SetEventPoint(1210401, 1212060, 2);
    SkipUnconditionally(3);
    SetEventPoint(1210401, 1212060, 2);
    SkipUnconditionally(1);
    SetEventPoint(1210401, 1212061, 2);
    WaitFixedTimeSeconds(1);
    EndUnconditionally(EventEndType.Restart);
});

//  Black dragon tail amputation
Event(11215051, Restart, function() {
    ChangeCharacterEnableState(1210410, Disabled);
    SkipIfEventFlag(7, ON, TargetEventFlagType.EventFlag, 11215054);
    SkipIfEventFlag(4, OFF, TargetEventFlagType.EventIDAndSlotNumber, 0);
    ChangeCharacterDispmask(1210401, 0, OFF);
    ChangeCharacterHitmask(1210401, 1, ON);
    RequestCharacterAICommand(1210401, 20, 0);
    EndUnconditionally(EventEndType.End);
    IfCharacterBackreadStatus(MAIN, 1210401, true);
    CreateNPCPart(1210401, 4510, NPCPartType.Part1, 200, 1, 1, false, false);
    SetEventFlag(11215054, OFF);
    IfNPCPartHP(AND_01, 1210401, 4510, 0, ComparisonType.LessOrEqual);
    IfHPRatio(AND_02, 1210401, ComparisonType.LessOrEqual, 0);
    IfConditionGroup(OR_01, PASS, AND_01);
    IfConditionGroup(OR_01, PASS, AND_02);
    IfConditionGroup(MAIN, PASS, OR_01);
    EndIfConditionGroupStateCompiled(EventEndType.End, PASS, AND_02);
    SkipIfEventFlag(3, OFF, TargetEventFlagType.EventFlag, 11215053);
    SetNPCPartHP(1210401, 4510, 10, false);
    SetEventFlag(11215054, ON);
    EndUnconditionally(EventEndType.Restart);
    WarpCharacterAndCopyFloor(1210410, TargetEntityType.Character, 1210401, 150, 1210401);
    ChangeCharacterEnableState(1210410, Enabled);
    RequestCharacterAnimationReset(1210401, Interpolation.Interpolated);
    ForceAnimationPlayback(1210401, 8000, false, false, false);
    ForceAnimationPlayback(1210410, 8100, false, false, false);
    ChangeCharacterDispmask(1210401, 0, OFF);
    ChangeCharacterHitmask(1210401, 1, ON);
    SetSpeffect(1210401, 5434);
    RequestCharacterAICommand(1210401, 20, 0);
    RequestCharacterAIReplan(1210401);
    IfCharacterType(OR_07, 10000, TargetType.Alive);
    IfCharacterType(OR_07, 10000, TargetType.Hollow);
    EndIfConditionGroupStateUncompiled(EventEndType.End, FAIL, OR_07);
    AwardItemsIncludingClients(45110000);
});

//  Black dragon tail cutting possibility switching
Event(11215052, Restart, function() {
    IfCharacterHasEventMessage(MAIN, 1210401, 10, true);
    SetEventFlag(11215053, ON);
    IfCharacterHasEventMessage(MAIN, 1210401, 20, true);
    SetEventFlag(11215053, OFF);
    EndUnconditionally(EventEndType.Restart);
});

//  Past forest mimic surprises _XX
Event(11215160, Restart, function(X0_4) {
    IfHPRatio(AND_01, X0_4, ComparisonType.Greater, 0);
    IfCharacterBackreadStatus(AND_01, X0_4, true);
    IfCharacterHasSpeffect(AND_01, X0_4, 5421, true);
    IfCharacterType(AND_02, 10000, TargetType.BlackPhantom);
    IfConditionGroup(AND_01, FAIL, AND_02);
    IfActionButton(AND_01, TargetEntityType.Character, X0_4, 45, 7, 1.2, 10010400, ReactionType.All, 0);
    IfConditionGroup(MAIN, PASS, AND_01);
    WarpCharacterAndCopyFloor(10000, TargetEntityType.Character, X0_4, 100, X0_4);
    ForceAnimationPlayback(10000, 7521, false, false, false);
    RequestCharacterAICommand(X0_4, 10, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(0.1);
    RequestCharacterAICommand(X0_4, -1, 0);
    EndUnconditionally(EventEndType.Restart);
});

//  Past Forest Mimic Stands Up _XX
Event(11215165, Restart, function(X0_4) {
    IfCharacterHasSpeffect(AND_01, X0_4, 5420, false);
    IfCharacterDamagedBy(AND_01, X0_4, 10000);
    IfConditionGroup(MAIN, PASS, AND_01);
    ClearSpeffect(X0_4, 3150);
    ClearSpeffect(X0_4, 3151);
    IfCharacterBackreadStatus(AND_07, X0_4, false);
    EndIfConditionGroupStateUncompiled(EventEndType.Restart, PASS, AND_07);
    IfCharacterHasSpeffect(AND_02, X0_4, 5421, true);
    SkipIfConditionGroupStateUncompiled(1, FAIL, AND_02);
    ForceAnimationPlayback(X0_4, 3001, false, true, false);
    IfCharacterHasSpeffect(AND_03, X0_4, 5422, true);
    SkipIfConditionGroupStateUncompiled(1, FAIL, AND_03);
    ForceAnimationPlayback(X0_4, 3001, false, true, false);
    IfCharacterHasSpeffect(AND_04, X0_4, 5423, true);
    SkipIfConditionGroupStateUncompiled(1, FAIL, AND_04);
    ForceAnimationPlayback(X0_4, 3001, false, true, false);
    IfCharacterHasSpeffect(AND_05, X0_4, 5424, true);
    SkipIfConditionGroupStateUncompiled(1, FAIL, AND_05);
    ForceAnimationPlayback(X0_4, 3006, false, true, false);
    RequestCharacterAIReplan(X0_4);
    ClearSpeffect(X0_4, 3150);
    ClearSpeffect(X0_4, 3151);
    EndUnconditionally(EventEndType.Restart);
});

//  Past Forest Mimic Dozes _XX
Event(11215170, Restart, function(X0_4) {
    IfCharacterHasSpeffect(AND_01, X0_4, 5421, true);
    IfCharacterHasSpeffect(AND_01, X0_4, 3150, true);
    IfCharacterHasSpeffect(AND_02, X0_4, 5420, true);
    IfCharacterHasSpeffect(AND_02, X0_4, 3150, true);
    IfConditionGroup(OR_01, PASS, AND_01);
    IfConditionGroup(OR_01, PASS, AND_02);
    IfConditionGroup(MAIN, PASS, OR_01);
    SkipIfConditionGroupStateCompiled(5, PASS, AND_02);
    RequestCharacterAICommand(X0_4, 200, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(0.1);
    RequestCharacterAICommand(X0_4, -1, 0);
    SkipUnconditionally(4);
    RequestCharacterAICommand(X0_4, 210, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(0.1);
    RequestCharacterAICommand(X0_4, -1, 0);
    IfCharacterHasSpeffect(OR_02, X0_4, 5420, true);
    IfCharacterHasSpeffect(OR_02, X0_4, 5421, true);
    IfConditionGroup(MAIN, PASS, OR_02);
    EndUnconditionally(EventEndType.Restart);
});

//  Past Forest Mimic Awakens _XX
Event(11215175, Restart, function(X0_4) {
    IfCharacterHasSpeffect(AND_01, X0_4, 5422, true);
    IfCharacterHasSpeffect(AND_01, X0_4, 3150, false);
    IfCharacterHasSpeffect(AND_02, X0_4, 5423, true);
    IfCharacterHasSpeffect(AND_02, X0_4, 3150, false);
    IfConditionGroup(OR_01, PASS, AND_01);
    IfConditionGroup(OR_01, PASS, AND_02);
    IfConditionGroup(MAIN, PASS, OR_01);
    ClearSpeffect(X0_4, 3150);
    ClearSpeffect(X0_4, 3151);
    SkipIfConditionGroupStateCompiled(5, PASS, AND_02);
    RequestCharacterAICommand(X0_4, 201, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(0.1);
    RequestCharacterAICommand(X0_4, -1, 0);
    SkipUnconditionally(4);
    RequestCharacterAICommand(X0_4, 211, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(0.1);
    RequestCharacterAICommand(X0_4, -1, 0);
    IfCharacterHasSpeffect(OR_02, X0_4, 5420, true);
    IfCharacterHasSpeffect(OR_02, X0_4, 5421, true);
    IfConditionGroup(MAIN, PASS, OR_02);
    EndUnconditionally(EventEndType.Restart);
});

//  Past forest mimic re-mimicry _XX
Event(11215180, Restart, function(X0_4, X4_4) {
    IfMultiplayerState(AND_01, MultiplayerState.Singleplayer);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, X0_4, X4_4);
    IfCharacterBackreadStatus(AND_01, X0_4, false);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetSpeffect(X0_4, 5421);
    ClearCharactersAITarget(X0_4);
    RequestCharacterAIReplan(X0_4);
    IssueShortWarpRequest(X0_4, TargetEntityType.Area, X4_4, -1);
    IfCharacterBackreadStatus(MAIN, X0_4, true);
    EndUnconditionally(EventEndType.Restart);
});

//  Past Mori Mimic has died _XX
Event(11210680, Restart, function(X0_4) {
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventIDAndSlotNumber, 0);
    ForceCharacterTreasure(X0_4);
    EndUnconditionally(EventEndType.End);
    IfCharacterDeadalive(MAIN, X0_4, DeathState.Dead);
    EndUnconditionally(EventEndType.End);
});

//  Past Forest Mimic Anime Sync_XX
Event(11215185, Restart, function(X0_4) {
    EndIfMultiplayerState(EventEndType.End, MultiplayerState.Host);
    IfCharacterBackreadStatus(AND_01, X0_4, false);
    EndIfConditionGroupStateUncompiled(EventEndType.End, PASS, AND_01);
    RequestCharacterAnimationReset(X0_4, Interpolation.Uninterpolated);
    ForceAnimationPlayback(X0_4, 0, false, false, false);
    RequestCharacterAIReplan(X0_4);
});

//  Light-responsive wall_XX
Event(11210200, Default, function(X0_4, X4_4) {
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventIDAndSlotNumber, 0);
    DeactivateObject(X0_4, Disabled);
    EndUnconditionally(EventEndType.End);
    IfCharacterHasSpeffect(OR_01, 10000, 620, true);
    IfCharacterHasSpeffect(OR_01, 10000, 6950, true);
    IfPlayerUsingSkullLantern(OR_01, true);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, X4_4);
    IfConditionGroup(MAIN, PASS, AND_01);
    PlaySE(X0_4, SoundType.oObject, 262000000);
    ForceAnimationPlayback(X0_4, 1, false, true, false);
    DeactivateObject(X0_4, Disabled);
});

//  Light-responsive wall_sound_XX
Event(11210205, Default, function(X0_4, X4_4, X8_4) {
    SetNetworkSyncState(Disabled);
    IfInoutsideArea(MAIN, InsideOutsideState.Inside, 10000, X4_4);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, X8_4);
    PlaySE(X0_4, SoundType.oObject, 120199999);
    WaitFixedTimeSeconds(2);
    EndUnconditionally(EventEndType.Restart);
});

//  Past Forest Suspended Treasure Corpse_XX
Event(11210230, Default, function(X0_4, X4_4, X8_4, X12_4) {
    SkipIfEventFlag(4, OFF, TargetEventFlagType.EventIDAndSlotNumber, 0);
    ReproduceObjectAnimation(X4_4, X12_4);
    ReproduceObjectDestruction(X0_4, 1);
    SetObjectTreasureState(X4_4, Enabled);
    EndUnconditionally(EventEndType.End);
    SetObjectTreasureState(X4_4, Disabled);
    SkipIfMultiplayerState(1, MultiplayerState.Client);
    CreateObjectfollowingSFX(X4_4, 90, 99005);
    ForceAnimationPlayback(X4_4, X8_4, true, false, false);
    IfObjectDestroyed(MAIN, DestructionState.Destroyed, X0_4);
    ForceAnimationPlayback(X4_4, X12_4, false, true, false);
    SkipIfMultiplayerState(1, MultiplayerState.Client);
    DeleteObjectfollowingSFX(X4_4, true);
    SetObjectTreasureState(X4_4, Enabled);
});

//  NPC hostility (past forest)
Event(11210510, Default, function(X0_4, X4_4) {
    IfHPRatio(AND_01, X0_4, ComparisonType.LessOrEqual, 0.9);
    IfHPRatio(AND_01, X0_4, ComparisonType.Greater, 0);
    IfCharacterDamagedBy(AND_01, X0_4, 10000);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, X4_4);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventIDAndSlotNumber, 0);
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, X4_4);
    IfEventFlag(AND_03, OFF, TargetEventFlagType.EventIDAndSlotNumber, 0);
    IfConditionGroup(OR_01, PASS, AND_01);
    IfConditionGroup(OR_01, PASS, AND_02);
    IfConditionGroup(OR_01, PASS, AND_03);
    IfConditionGroup(MAIN, PASS, OR_01);
    SkipIfConditionGroupStateCompiled(2, FAIL, AND_03);
    ChangeCharacterEnableState(X0_4, Disabled);
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 703);
    SetEventFlag(X4_4, ON);
    ChangeCharacterTeamTypeAndForceExitSpecialAnimations(X0_4, TeamType.HostileAlly);
    SaveRequest(0);
});

//  NPC hostility (go assistance)
Event(11210910, Default, function() {
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventID, 0);
    SetCharacterAIId(6720, 411001);
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 11210911);
    SetCharacterAIId(6720, 411000);
});

//  NPC hostile (go-assisted) battle area inside / outside judgment
Event(11210912, Default, function() {
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 1822);
    IfInoutsideArea(MAIN, InsideOutsideState.Outside, 10000, 1212040);
    SetCharacterAIId(6720, 411001);
    SetCharacterHome(6720, 1212041);
    RequestCharacterAICommand(6720, 10, 0);
    RequestCharacterAIReplan(6720);
    IfInoutsideArea(MAIN, InsideOutsideState.Inside, 10000, 1212040);
    WaitFixedTimeFrames(30);
    SetCharacterAIId(6720, 411000);
    RequestCharacterAICommand(6720, -1, 0);
    RequestCharacterAIReplan(6720);
    EndUnconditionally(EventEndType.Restart);
});

//  NPC Hostile (Go Stand Up)
Event(11210915, Default, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 1822);
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 1822);
    ForceAnimationPlayback(6720, 9060, false, false, false);
});

//  NPC death (past forest)
Event(11210520, Default, function(X0_4, X4_4, X8_4, X12_4) {
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventIDAndSlotNumber, 0);
    ForceCharacterTreasure(X0_4);
    EndUnconditionally(EventEndType.End);
    IfHPRatio(MAIN, X0_4, ComparisonType.LessOrEqual, 0);
    BatchSetEventFlags(X4_4, X8_4, OFF);
    SetEventFlag(X12_4, ON);
});

//  Hawk Eye Go Thanks
Event(11210530, Default, function(X0_4, X4_4, X8_4, X12_4) {
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 1822);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1820);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11210300);
    IfCharacterDeadalive(AND_01, X0_4, DeathState.Alive);
    IfConditionGroup(MAIN, PASS, AND_01);
    BatchSetEventFlags(X4_4, X8_4, OFF);
    SetEventFlag(X12_4, ON);
});

//  Go the hawk's eyes Shoot down the black dragon
Event(11210535, Default, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventID, 0);
    ChangeCharacterEnableState(1210401, Disabled);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1821);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11210592);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetEventFlag(121, OFF);
    SkipIfMultiplayerState(1, MultiplayerState.Multiplayer);
    PlayCutsceneToPlayer(120100, CutscenePlayMode.Skippable, 10000);
    SkipUnconditionally(1);
    PlayCutsceneToPlayer(120100, CutscenePlayMode.Unskippable, 10000);
    WaitFixedTimeFrames(1);
    SetEventFlag(11210539, ON);
    ChangeCharacterEnableState(1210401, Enabled);
    ChangeCharacterEnableState(1210402, Disabled);
    DeactivateObject(1211690, Enabled);
    SpawnMapSFX(1211691);
    ActivateHit(1213061, Enabled);
    ActivateHit(1213060, Disabled);
});

//  Sniper A Luggage Light Source Control
Event(11210544, Default, function() {
    IfObjectDestroyed(MAIN, DestructionState.Destroyed, 1211130);
    DeleteMapSFX(1213150, true);
});

//  Kiaran I want to offer
Event(11210531, Default, function(X0_4, X4_4, X8_4, X12_4) {
    IfMultiplayerState(AND_01, MultiplayerState.Host);
    IfPlayerHasdoesntHaveItem(AND_01, ItemType.Goods, 710, OwnershipState.Owns);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1860);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11210001);
    IfConditionGroup(MAIN, PASS, AND_01);
    EndIfEventFlag(EventEndType.End, OFF, TargetEventFlagType.EventID, 0);
    ChangeCharacterEnableState(X0_4, Enabled);
    DeactivateObject(1211220, Enabled);
    BatchSetEventFlags(X4_4, X8_4, OFF);
    SetEventFlag(X12_4, ON);
});

//  Thanks to Kiaran
Event(11210532, Default, function(X0_4, X4_4, X8_4, X12_4) {
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 1863);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1861);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11210590);
    IfCharacterDeadalive(AND_01, X0_4, DeathState.Alive);
    IfConditionGroup(MAIN, PASS, AND_01);
    BatchSetEventFlags(X4_4, X8_4, OFF);
    SetEventFlag(X12_4, ON);
    ChangeCharacterEnableState(X0_4, Enabled);
});

//  Kiaran Nowhere 1
Event(11210533, Default, function(X0_4, X4_4, X8_4, X12_4) {
    IfMultiplayerState(AND_01, MultiplayerState.Host);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 1863);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 1865);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1862);
    IfCharacterBackreadStatus(AND_01, X0_4, false);
    IfConditionGroup(MAIN, PASS, AND_01);
    ChangeCharacterEnableState(X0_4, Disabled);
    BatchSetEventFlags(X4_4, X8_4, OFF);
    SetEventFlag(X12_4, ON);
});

//  Kiaran Nowhere 2
Event(11210534, Default, function(X0_4, X4_4, X8_4, X12_4) {
    IfMultiplayerState(AND_01, MultiplayerState.Host);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 1863);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 1864);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 1865);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11210591);
    IfCharacterBackreadStatus(AND_01, X0_4, false);
    IfConditionGroup(MAIN, PASS, AND_01);
    ChangeCharacterEnableState(X0_4, Disabled);
    BatchSetEventFlags(X4_4, X8_4, OFF);
    SetEventFlag(X12_4, ON);
});

//  Kiaran Nest Change
Event(11210543, Default, function() {
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 11215210);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 6740, 1212351);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 11215210);
    IfInoutsideArea(AND_02, InsideOutsideState.Inside, 6740, 1212350);
    IfConditionGroup(OR_01, PASS, AND_01);
    IfConditionGroup(OR_01, PASS, AND_02);
    IfConditionGroup(MAIN, PASS, OR_01);
    SkipIfConditionGroupStateCompiled(3, PASS, AND_02);
    SetEventFlag(11215210, ON);
    SetCharacterHome(6740, 1212353);
    EndUnconditionally(EventEndType.Restart);
    SetEventFlag(11215210, OFF);
    SetCharacterHome(6740, 1212352);
    EndUnconditionally(EventEndType.Restart);
});

//  Thanks to the exiled princess (past forest)
Event(11210540, Default, function() {
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1127);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11210002);
    IfConditionGroup(MAIN, PASS, AND_01);
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 1126);
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 1125);
    BatchSetEventFlags(1120, 1139, OFF);
    SetEventFlag(1127, OFF);
    SetEventFlag(1128, ON);
    WarpCharacterAndCopyFloor(6700, TargetEntityType.Character, 1210840, 30, 1210840);
    RequestAnimationPlayback(6700, 7915, true, false);
    ChangeCharacterEnableState(6700, Enabled);
});

//  Death of the exiled princess
Event(11210541, Default, function() {
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventID, 0);
    ForceCharacterTreasure(6700);
    EndUnconditionally(EventEndType.End);
    SetCharacterImmortality(6700, Enabled);
    IfHPRatio(MAIN, 6700, ComparisonType.LessOrEqual, 0.01);
    ForceAnimationPlayback(6700, 7917, false, true, false);
    ChangeCharacterEnableState(6700, Disabled);
    SetCharacterImmortality(6700, Disabled);
    ForceCharacterDeath(6700, true);
    ForceCharacterDeath(6750, false);
    BatchSetEventFlags(1120, 1139, OFF);
    SetEventFlag(1125, ON);
});

//  Exiled Princess Damage
Event(11210542, Default, function() {
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 11210541);
    EndUnconditionally(EventEndType.End);
    IfCharacterDamagedBy(MAIN, 6700, 10000);
    ForceAnimationPlayback(6700, 7916, false, true, false);
    EndUnconditionally(EventEndType.Restart);
});

//  Old mushroom dies if darkness dies
Event(11210538, Default, function() {
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventID, 0);
    ForceCharacterTreasure(6750);
    EndUnconditionally(EventEndType.End);
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 1125);
    ForceCharacterTreasure(6750);
    BatchSetEventFlags(1870, 1889, OFF);
    SetEventFlag(1872, ON);
});

//  NPC Hostile Invasion (Past Forest)
Event(11215030, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, X4_4);
    ChangeCharacterEnableState(X0_4, Disabled);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 17);
    IfMultiplayerState(AND_01, MultiplayerState.Host);
    IfCharacterType(AND_01, 10000, TargetType.Alive);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, X12_4);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 1842);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, X20_4);
    IfEventFlag(OR_01, OFF, TargetEventFlagType.EventFlag, X8_4);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, X8_4);
    IfEventFlag(OR_02, ON, TargetEventFlagType.EventFlag, X24_4);
    IfEventFlag(OR_02, ON, TargetEventFlagType.EventFlag, X28_4);
    IfConditionGroup(AND_02, PASS, OR_02);
    IfConditionGroup(OR_01, PASS, AND_02);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfConditionGroup(MAIN, PASS, AND_01);
    ChangeCharacterEnableState(6730, Disabled);
    ChangeCharacterEnableState(X0_4, Enabled);
    DisplayMessage(20001100, 0);
    SkipIfEventFlag(3, ON, TargetEventFlagType.EventIDAndSlotNumber, 0);
    SpawnOneshotSFX(TargetEntityType.Area, X16_4, -1, 130);
    ForceAnimationPlayback(X0_4, 7000, false, false, false);
    RequestCharacterAIReplan(X0_4);
    SetEventFlag(X4_4, ON);
    SetEventFlag(11210536, ON);
});

//  Repel invading NPCs (past forest)
Event(11210900, Default, function(X0_4) {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventIDAndSlotNumber, 0);
    IfCharacterDeadalive(MAIN, X0_4, DeathState.Dead);
    DisplayMessage(20001105, 0);
    ChangeCharacterEnableState(6730, Enabled);
});

//  Invasion NPC Return (Past Forest)
Event(11210905, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, X20_4);
    ChangeCharacterEnableState(X0_4, Disabled);
    EndUnconditionally(EventEndType.End);
    IfMultiplayerState(AND_01, MultiplayerState.Host);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, X4_4);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, X16_4);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1212084);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1212085);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetEventFlag(X20_4, ON);
    ForceAnimationPlayback(X0_4, 7001, false, false, false);
    WaitFixedTimeFrames(80);
    ChangeCharacterEnableState(X0_4, Disabled);
    WarpCharacterAndSetFloor(X0_4, TargetEntityType.Area, X8_4, -1, X12_4);
    DisplayMessage(20001101, 0);
    ChangeCharacterEnableState(6730, Enabled);
});

//  Arena Summary
Event(11210700, Default, function() {
    SetEventFlag(11219990, OFF); // Flagged on when arena match starts
    RemoveItemFromPlayer(ItemType.Weapon, 2107000, 999); // Remove special arrows on load
    RemoveItemFromPlayer(ItemType.Weapon, 2203000, 999);
    RemoveItemFromPlayer(ItemType.Weapon, 2204000, 999);
    
    //Wizard 1v1
    RegisterLadder(11219290, 11219291, 1219010); // Wiz Ladder A
    RegisterLadder(11219292, 11219293, 1219011); // Wiz Ladder B
    RegisterLadder(11219294, 11219295, 1219012); // Wiz Ladder C
    RegisterLadder(11219296, 11219297, 1219013); // Wiz Ladder D
    InitializeEvent(2, 11219910, 1219030, 1219034); // Wiz Teleporter A Interact
    InitializeEvent(3, 11219910, 1219031, 1219035); // Wiz Teleporter B Interact
    InitializeEvent(4, 11219910, 1219032, 1219036); // Wiz Teleporter C Interact
    InitializeEvent(5, 11219910, 1219033, 1219037); // Wiz Teleporter D Interact
    InitializeEvent(2, 11219911, 1219042, 1219038); // Wiz Teleporter A Fade
    InitializeEvent(3, 11219911, 1219043, 1219039); // Wiz Teleporter B Fade
    InitializeEvent(4, 11219911, 1219044, 1219040); // Wiz Teleporter C Fade
    InitializeEvent(5, 11219911, 1219045, 1219041); // Wiz Teleporter D Fade
    InitializeEvent(20, 11219900, 1219050, 1219051, 10030161, 9021, 0, 900); // Wiz Powerup 00
    InitializeEvent(21, 11219900, 1219052, 1219053, 10030161, 9021, 0, 900); // Wiz Powerup 01
    InitializeEvent(22, 11219900, 1219054, 1219055, 10030162, 9022, 0, 1800); // Wiz Powerup 02
    InitializeEvent(23, 11219900, 1219056, 1219057, 10030162, 9022, 0, 1800); // Wiz Powerup 03
    InitializeEvent(24, 11219900, 1219058, 1219059, 10030163, 9023, 0, 1800); // Wiz Powerup 04
    InitializeEvent(25, 11219900, 1219060, 1219061, 10030168, 9028, 0, 3600); // Wiz Powerup 05
    InitializeEvent(26, 11219900, 1219062, 1219063, 10030164, 9024, 0, 2700); // Wiz Powerup 06
    InitializeEvent(27, 11219900, 1219064, 1219065, 10030170, 9030, 0, 3600); // Wiz Powerup 07
    InitializeEvent(28, 11219900, 1219066, 1219067, 10030171, 9031, 900, 2700); // Wiz Powerup 08
    InitializeEvent(29, 11219900, 1219068, 1219069, 10030167, 9027, 1800, 1800); // Wiz Powerup 09
    InitializeEvent(30, 11219900, 1219070, 1219071, 10030172, 9032, 900, 2700); // Wiz Powerup 10
    InitializeEvent(31, 11219900, 1219072, 1219073, 10030173, 9033, 1800, 1800); // Wiz Powerup 11
    InitializeEvent(32, 11219900, 1219074, 1219075, 10030165, 9025, 900, 3600); // Wiz Powerup 12
    InitializeEvent(33, 11219900, 1219076, 1219077, 10030166, 9026, 2700, 1800); // Wiz Powerup 13
    
    //Chillout 1v1
    InitializeEvent(13, 11219910, 1219130, 1219133); // Chill 1v1 Teleporter A Interact
    InitializeEvent(14, 11219910, 1219131, 1219134); // Chill 1v1 Teleporter B Interact
    InitializeEvent(15, 11219910, 1219132, 1219135); // Chill 1v1 Teleporter C Interact
    InitializeEvent(13, 11219911, 1219139, 1219136); // Chill 1v1 Teleporter A Fade
    InitializeEvent(14, 11219911, 1219140, 1219137); // Chill 1v1 Teleporter B Fade
    InitializeEvent(15, 11219911, 1219141, 1219138); // Chill 1v1 Teleporter C Fade
    InitializeEvent(40, 11219900, 1219150, 1219151, 10030166, 9026, 900, 3600); // Chill 1v1 Powerup 00
    InitializeEvent(41, 11219900, 1219152, 1219153, 10030171, 9031, 0, 3600); // Chill 1v1 Powerup 01
    InitializeEvent(42, 11219900, 1219154, 1219155, 10030161, 9021, 0, 900); // Chill 1v1 Powerup 02
    InitializeEvent(43, 11219900, 1219156, 1219157, 10030161, 9021, 0, 900); // Chill 1v1 Powerup 03
    InitializeEvent(44, 11219900, 1219158, 1219159, 10030175, 9035, 1800, 4500); // Chill 1v1 Powerup 04
    InitializeEvent(45, 11219900, 1219160, 1219161, 10030163, 9023, 0, 1800); // Chill 1v1 Powerup 05
    InitializeEvent(46, 11219900, 1219162, 1219163, 10030170, 9030, 0, 3600); // Chill 1v1 Powerup 06
    InitializeEvent(47, 11219900, 1219164, 1219165, 10030167, 9027, 900, 3600); // Chill 1v1 Powerup 07
    InitializeEvent(48, 11219900, 1219166, 1219167, 10030164, 9024, 0, 2700); // Chill 1v1 Powerup 08
    InitializeEvent(49, 11219900, 1219168, 1219169, 10030173, 9033, 0, 5400); // Chill 1v1 Powerup 09
    InitializeEvent(50, 11219900, 1219170, 1219171, 10030165, 9025, 900, 3600); // Chill 1v1 Powerup 10
    InitializeEvent(51, 11219900, 1219172, 1219173, 10030162, 9022, 0, 1800); // Chill 1v1 Powerup 11
    
    //Wizard TDM
    RegisterLadder(11219290, 11219291, 1219210); // Wiz TDM Ladder A
    RegisterLadder(11219292, 11219293, 1219211); // Wiz TDM Ladder B
    RegisterLadder(11219294, 11219295, 1219212); // Wiz TDM Ladder C
    RegisterLadder(11219296, 11219297, 1219213); // Wiz TDM Ladder D
    InitializeEvent(16, 11219910, 1219230, 1219234); // Wiz TDM Teleporter A Interact
    InitializeEvent(17, 11219910, 1219231, 1219235); // Wiz TDM Teleporter B Interact
    InitializeEvent(18, 11219910, 1219232, 1219236); // Wiz TDM Teleporter C Interact
    InitializeEvent(19, 11219910, 1219233, 1219237); // Wiz TDM Teleporter D Interact
    InitializeEvent(16, 11219911, 1219242, 1219238); // Wiz TDM Teleporter A Fade
    InitializeEvent(17, 11219911, 1219243, 1219239); // Wiz TDM Teleporter B Fade
    InitializeEvent(18, 11219911, 1219244, 1219240); // Wiz TDM Teleporter C Fade
    InitializeEvent(19, 11219911, 1219245, 1219241); // Wiz TDM Teleporter D Fade
    InitializeEvent(63, 11219900, 1219250, 1219251, 10030161, 9021, 0, 900); // Wiz TDM Powerup 00
    InitializeEvent(64, 11219900, 1219252, 1219253, 10030161, 9021, 0, 900); // Wiz TDM Powerup 01
    InitializeEvent(65, 11219900, 1219254, 1219255, 10030162, 9022, 0, 1800); // Wiz TDM Powerup 02
    InitializeEvent(66, 11219900, 1219256, 1219257, 10030162, 9022, 0, 1800); // Wiz TDM Powerup 03
    InitializeEvent(67, 11219900, 1219258, 1219259, 10030160, 9010, 0, 3600); // Wiz TDM Powerup 04
    InitializeEvent(68, 11219900, 1219260, 1219261, 10030168, 9028, 0, 3600); // Wiz TDM Powerup 05
    InitializeEvent(69, 11219900, 1219262, 1219263, 10030164, 9024, 0, 2700); // Wiz TDM Powerup 06
    InitializeEvent(70, 11219900, 1219264, 1219265, 10030170, 9030, 0, 3600); // Wiz TDM Powerup 07
    InitializeEvent(71, 11219900, 1219266, 1219267, 10030171, 9031, 900, 2700); // Wiz TDM Powerup 08
    InitializeEvent(72, 11219900, 1219268, 1219269, 10030167, 9027, 1800, 1800); // Wiz TDM Powerup 09
    InitializeEvent(73, 11219900, 1219270, 1219271, 10030172, 9032, 900, 2700); // Wiz TDM Powerup 10
    InitializeEvent(74, 11219900, 1219272, 1219273, 10030173, 9033, 1800, 1800); // Wiz TDM Powerup 11
    InitializeEvent(75, 11219900, 1219274, 1219275, 10030165, 9025, 900, 7000); // Wiz TDM Powerup 12
    InitializeEvent(76, 11219900, 1219276, 1219277, 10030166, 9026, 2700, 7000); // Wiz TDM Powerup 13
    InitializeEvent(77, 11219900, 1219278, 1219279, 10030163, 9023, 0, 1200); // Wiz Powerup 14
    InitializeEvent(78, 11219900, 1219280, 1219281, 10030162, 9022, 0, 1200); // Wiz Powerup 15
    InitializeEvent(79, 11219900, 1219282, 1219283, 10030163, 9023, 0, 1200); // Wiz Powerup 16
    InitializeEvent(80, 11219900, 1219284, 1219285, 10030161, 9021, 0, 1200); // Wiz Powerup 17
    InitializeEvent(81, 11219900, 1219286, 1219287, 10030174, 9034, 4500, 7000); // Wiz Powerup 18
    InitializeEvent(82, 11219900, 1219288, 1219289, 10030175, 9035, 6300, 7000); // Wiz Powerup 19
    
    //Hangemhigh TDM
    InitializeEvent(101, 11219900, 1219340, 1219341, 10030175, 9035, 0, 4000); // Hang Powerup 00
    InitializeEvent(102, 11219900, 1219342, 1219343, 10030163, 9023, 0, 1800); // Hang Powerup 01
    InitializeEvent(103, 11219900, 1219344, 1219345, 10030170, 9030, 900, 3600); // Hang Powerup 02
    InitializeEvent(104, 11219900, 1219346, 1219347, 10030165, 9025, 900, 3600); // Hang Powerup 03
    InitializeEvent(105, 11219900, 1219348, 1219349, 10030174, 9034, 900, 3600); // Hang Powerup 04
    InitializeEvent(106, 11219900, 1219350, 1219351, 10030160, 9010, 1800, 3600); // Hang Powerup 05
    InitializeEvent(107, 11219900, 1219352, 1219353, 10030160, 9010, 1800, 3600); // Hang Powerup 06
    InitializeEvent(108, 11219900, 1219354, 1219355, 10030167, 9027, 900, 3600); // Hang Powerup 07
    InitializeEvent(109, 11219900, 1219356, 1219357, 10030166, 9026, 900, 3600); // Hang Powerup 08
    InitializeEvent(110, 11219900, 1219358, 1219359, 10030163, 9023, 0, 1800); // Hang Powerup 09
    InitializeEvent(111, 11219900, 1219360, 1219361, 10030161, 9021, 0, 900); // Hang Powerup 10
    InitializeEvent(112, 11219900, 1219362, 1219363, 10030163, 9023, 0, 1800); // Hang Powerup 11
    InitializeEvent(113, 11219900, 1219364, 1219365, 10030161, 9021, 0, 900); // Hang Powerup 12
    InitializeEvent(114, 11219900, 1219366, 1219367, 10030162, 9022, 0, 1800); // Hang Powerup 13
    InitializeEvent(115, 11219900, 1219368, 1219369, 10030164, 9024, 0, 3600); // Hang Powerup 14
    InitializeEvent(116, 11219900, 1219370, 1219371, 10030164, 9024, 0, 3600); // Hang Powerup 15
    InitializeEvent(117, 11219900, 1219372, 1219373, 10030161, 9021, 0, 900); // Hang Powerup 16
    InitializeEvent(118, 11219900, 1219374, 1219375, 10030161, 9021, 0, 900); // Hang Powerup 17
    InitializeEvent(119, 11219900, 1219376, 1219377, 10030162, 9022, 0, 1800); // Hang Powerup 18
    InitializeEvent(120, 11219900, 1219378, 1219379, 10030172, 9032, 900, 1800); // Hang Powerup 19
    InitializeEvent(121, 11219900, 1219380, 1219381, 10030169, 9029, 900, 3600); // Hang Powerup 20
    InitializeEvent(122, 11219900, 1219382, 1219383, 10030171, 9031, 900, 1800); // Hang Powerup 21
    InitializeEvent(123, 11219900, 1219384, 1219385, 10030168, 9028, 900, 2700); // Hang Powerup 22
    InitializeEvent(124, 11219900, 1219386, 1219387, 10030173, 9033, 0, 4000); // Hang Powerup 23
    
    //Chillout FFA
    InitializeEvent(10, 11219910, 1219430, 1219433); // Chill Teleporter A Interact
    InitializeEvent(11, 11219910, 1219431, 1219434); // Chill Teleporter B Interact
    InitializeEvent(12, 11219910, 1219432, 1219435); // Chill Teleporter C Interact
    InitializeEvent(10, 11219911, 1219439, 1219436); // Chill Teleporter A Fade
    InitializeEvent(11, 11219911, 1219440, 1219437); // Chill Teleporter B Fade
    InitializeEvent(12, 11219911, 1219441, 1219438); // Chill Teleporter C Fade
    InitializeEvent(85, 11219900, 1219450, 1219451, 10030175, 9035, 1800, 4000); // Chill Powerup 00
    InitializeEvent(86, 11219900, 1219452, 1219453, 10030160, 9010, 900, 3600); // Chill Powerup 01
    InitializeEvent(87, 11219900, 1219454, 1219455, 10030163, 9023, 0, 1800); // Chill Powerup 02
    InitializeEvent(88, 11219900, 1219456, 1219457, 10030166, 9026, 900, 3600); // Chill Powerup 03
    InitializeEvent(89, 11219900, 1219458, 1219459, 10030164, 9024, 0, 2700); // Chill Powerup 04
    InitializeEvent(90, 11219900, 1219460, 1219461, 10030161, 9021, 0, 900); // Chill Powerup 05
    InitializeEvent(91, 11219900, 1219462, 1219463, 10030173, 9033, 0, 4000); // Chill Powerup 06
    InitializeEvent(92, 11219900, 1219464, 1219465, 10030162, 9022, 0, 1800); // Chill Powerup 07
    InitializeEvent(93, 11219900, 1219466, 1219467, 10030168, 9028, 0, 4000); // Chill Powerup 08
    InitializeEvent(94, 11219900, 1219468, 1219469, 10030171, 9031, 900, 2700); // Chill Powerup 09
    InitializeEvent(95, 11219900, 1219470, 1219471, 10030161, 9021, 0, 900); // Chill Powerup 10
    InitializeEvent(96, 11219900, 1219472, 1219473, 10030174, 9034, 1800, 4000); // Chill Powerup 11
    InitializeEvent(97, 11219900, 1219474, 1219475, 10030167, 9027, 900, 3600); // Chill Powerup 12
    InitializeEvent(98, 11219900, 1219476, 1219477, 10030162, 9022, 0, 1800); // Chill Powerup 13
    
    //Damnation FFA
    RegisterLadder(11219590, 11219591, 1219520); // Damn Ladder A
    RegisterLadder(11219592, 11219593, 1219521); // Damn Ladder B
    InitializeEvent(0, 11219510, 0); // Damn Killbox
    InitializeEvent(0, 11219910, 1219530, 1219532); // Damn Teleporter A Interact
    InitializeEvent(1, 11219910, 1219531, 1219533); // Damn Teleporter B Interact
    InitializeEvent(0, 11219911, 1219538, 1219536); // Damn Teleporter A Fade
    InitializeEvent(1, 11219911, 1219539, 1219537); // Damn Teleporter B Fade
    InitializeEvent(0, 11219900, 1219550, 1219551, 10030166, 9026, 900, 3600); // Damn Powerup 00
    InitializeEvent(1, 11219900, 1219552, 1219553, 10030163, 9023, 0, 1800); // Damn Powerup 01
    InitializeEvent(2, 11219900, 1219554, 1219555, 10030162, 9022, 0, 1800); // Damn Powerup 02
    InitializeEvent(3, 11219900, 1219556, 1219557, 10030164, 9024, 0, 2700); // Damn Powerup 03
    InitializeEvent(4, 11219900, 1219558, 1219559, 10030161, 9021, 0, 900); // Damn Powerup 04
    InitializeEvent(5, 11219900, 1219560, 1219561, 10030162, 9022, 0, 1800); // Damn Powerup 05
    InitializeEvent(6, 11219900, 1219562, 1219563, 10030175, 9035, 1800, 4500); // Damn Powerup 06
    InitializeEvent(7, 11219900, 1219564, 1219565, 10030170, 9030, 0, 3600); // Damn Powerup 07
    InitializeEvent(8, 11219900, 1219566, 1219567, 10030161, 9021, 0, 900); // Damn Powerup 08
    InitializeEvent(9, 11219900, 1219568, 1219569, 10030163, 9023, 0, 1800); // Damn Powerup 09
    InitializeEvent(10, 11219900, 1219570, 1219571, 10030165, 9025, 900, 3600); // Damn Powerup 10
    InitializeEvent(11, 11219900, 1219572, 1219573, 10030160, 9010, 900, 3600); // Damn Powerup 11
    InitializeEvent(12, 11219900, 1219574, 1219575, 10030173, 9033, 0, 4500); // Damn Powerup 12
    InitializeEvent(13, 11219900, 1219576, 1219577, 10030174, 9034, 1800, 3600); // Damn Powerup 13
    InitializeEvent(14, 11219900, 1219578, 1219579, 10030167, 9027, 900, 3600); // Damn Powerup 14
    InitializeEvent(15, 11219900, 1219580, 1219581, 10030161, 9021, 0, 900); // Damn Powerup 15
    InitializeEvent(16, 11219900, 1219582, 1219583, 10030168, 9028, 0, 3600); // Damn Powerup 16
    InitializeEvent(17, 11219900, 1219584, 1219585, 10030172, 9032, 900, 2700); // Damn Powerup 17
    InitializeEvent(18, 11219900, 1219586, 1219587, 10030161, 9021, 0, 900); // Damn Powerup 18
    InitializeEvent(19, 11219900, 1219588, 1219589, 10030171, 9031, 900, 2700); // Damn Powerup 19
    
    // Generic
    InitializeEvent(0, 11219901, 9010, 9500); // Give SP Ammo
    InitializeEvent(0, 11219903, 0); // Last arrow remover bugfix (blame from)
    InitializeEvent(0, 11219902, 0); // KamikazePowerup Effect Script
    
    InitializeEvent(0, 7999, 0);
    InitializeEvent(0, 7998, 0);
    SkipIfMultiplayerState(1, MultiplayerState.Client);
    BatchSetEventFlags(11215350, 11215360, OFF);
    SetEventFlag(11215398, OFF);
    BatchSetEventFlags(11215342, 11215345, OFF);
    DeleteMapSFX(1213403, false);
    DeleteMapSFX(1213404, false);
    DeleteMapSFX(1213405, false);
    DeleteMapSFX(1213406, false);
    DeleteMapSFX(1213407, false);
    DeleteMapSFX(1213408, false);
    DeleteMapSFX(1213409, false);
    DeleteMapSFX(1213410, false);
    DeleteMapSFX(1213411, false);
    DeleteMapSFX(1213412, false);
    DeleteMapSFX(1213416, false);
    DeleteMapSFX(1213417, false);
    DeleteMapSFX(1213418, false);
    DeleteMapSFX(1213419, false);
    DeleteMapSFX(1213420, false);
    DeleteMapSFX(1213421, false);
    DeleteMapSFX(1213422, false);
    DeleteMapSFX(1213423, false);
    DeleteMapSFX(1213424, false);
    DeleteMapSFX(1213425, false);
    InitializeEvent(0, 11210708, 0);
    InitializeEvent(0, 11210838, 0);
    InitializeEvent(0, 11210839, 0);
    InitializeEvent(0, 11210875, 0);
    InitializeEvent(0, 11210876, 0);
    InitializeEvent(0, 11210830, 0);
    InitializeEvent(0, 11210835, 9000, 1800, 16200, 3600);
    InitializeEvent(0, 11210836, 0);
    InitializeEvent(0, 11210877, 0);
    InitializeEvent(0, 11210878, 0);
    InitializeEvent(0, 11215398, 0);
    InitializeEvent(0, 11210705, 0);
    InitializeEvent(0, 11210706, 0);
    InitializeEvent(0, 11210707, 0);
    InitializeEvent(0, 11210845, 0);
    InitializeEvent(0, 11210846, 0);
    InitializeEvent(0, 11210847, 0);
    InitializeEvent(0, 11210848, 0);
    InitializeEvent(0, 11210849, 0);
    InitializeEvent(0, 11210837, 0);
    InitializeEvent(0, 11210401, 0);
    InitializeEvent(0, 11210402, 0);
    InitializeEvent(0, 11210403, 0);
    InitializeEvent(0, 11210404, 7200);
    InitializeEvent(1, 11210404, 7450);
    InitializeEvent(2, 11210404, 7700);
    InitializeEvent(0, 11210407, 0);
    InitializeEvent(0, 11210439, 0);
    InitializeEvent(0, 11210710, 1211500, 1218215, 10010132, 1);
    InitializeEvent(1, 11210710, 1211501, 1218213, 10010134, 1);
    InitializeEvent(2, 11210710, 1211502, 1218211, 10010136, 1);
    InitializeEvent(3, 11210710, 1211503, 1218214, 10010131, 1);
    InitializeEvent(4, 11210710, 1211504, 1218212, 10010133, 1);
    InitializeEvent(5, 11210710, 1211505, 1218210, 10010135, 1);
    InitializeEvent(6, 11210710, 1211510, 1218200, 10010137, 0);
    InitializeEvent(7, 11210710, 1211511, 1218200, 10010137, 0);
    InitializeEvent(8, 11210710, 1211512, 1218200, 10010137, 0);
    InitializeEvent(9, 11210710, 1211513, 1218200, 10010137, 0);
    InitializeEvent(10, 11210710, 1211514, 1218200, 10010137, 0);
    InitializeEvent(11, 11210710, 1211515, 1218200, 10010137, 0);
    InitializeEvent(0, 11210730, 1212700, 4510);
    InitializeEvent(1, 11210730, 1212701, 4511);
    InitializeEvent(2, 11210730, 1212702, 4512);
    InitializeEvent(3, 11210730, 1212703, 4513);
    InitializeEvent(4, 11210730, 1212704, 4514);
    InitializeEvent(5, 11210730, 1212705, 4515);
    InitializeEvent(6, 11210730, 1212706, 4516);
    InitializeEvent(7, 11210730, 1212707, 4517);
    InitializeEvent(8, 11210730, 1212708, 4518);
    InitializeEvent(9, 11210730, 1212709, 4519);
    InitializeEvent(10, 11210730, 1212710, 4520);
    InitializeEvent(11, 11210730, 1212711, 4521);
    InitializeEvent(12, 11210730, 1212712, 4522);
    InitializeEvent(13, 11210730, 1212713, 4525);
    InitializeEvent(14, 11210730, 1212714, 4524);
    InitializeEvent(15, 11210730, 1212715, 4525);
    InitializeEvent(16, 11210730, 1212716, 4526);
    InitializeEvent(17, 11210730, 1212717, 4527);
    InitializeEvent(18, 11210730, 1212718, 4528);
    InitializeEvent(19, 11210730, 1212719, 4529);
    InitializeEvent(20, 11210730, 1212720, 4530);
    InitializeEvent(21, 11210730, 1212721, 4531);
    InitializeEvent(22, 11210730, 1212722, 4532);
    InitializeEvent(23, 11210730, 1212723, 4533);
    InitializeEvent(24, 11210730, 1212724, 4534);
    InitializeEvent(25, 11210730, 1212725, 4535);
    InitializeEvent(0, 11210410, 1212722, 11215350, 1213422, 11215355, 11215360);
    InitializeEvent(1, 11210410, 1212723, 11215351, 1213423, 11215356, 11215361);
    InitializeEvent(2, 11210410, 1212724, 11215352, 1213424, 11215357, 11215362);
    InitializeEvent(3, 11210410, 1212725, 11215353, 1213425, 11215358, 11215363);
    InitializeEvent(4, 11210410, 1212718, 11215350, 1213418, 11215355, 11215360);
    InitializeEvent(5, 11210410, 1212719, 11215351, 1213419, 11215356, 11215361);
    InitializeEvent(6, 11210410, 1212720, 11215352, 1213420, 11215357, 11215362);
    InitializeEvent(7, 11210410, 1212721, 11215353, 1213421, 11215358, 11215363);
    InitializeEvent(8, 11210410, 1212716, 11215350, 1213416, 11215355, 11215360);
    InitializeEvent(9, 11210410, 1212717, 11215352, 1213417, 11215357, 11215362);
    InitializeEvent(10, 11210410, 1212709, 11215350, 1213409, 11215355, 11215360);
    InitializeEvent(11, 11210410, 1212710, 11215351, 1213410, 11215356, 11215361);
    InitializeEvent(12, 11210410, 1212711, 11215352, 1213411, 11215357, 11215362);
    InitializeEvent(13, 11210410, 1212712, 11215353, 1213412, 11215358, 11215363);
    InitializeEvent(14, 11210410, 1212705, 11215350, 1213405, 11215355, 11215360);
    InitializeEvent(15, 11210410, 1212706, 11215351, 1213406, 11215356, 11215361);
    InitializeEvent(16, 11210410, 1212707, 11215352, 1213407, 11215357, 11215362);
    InitializeEvent(17, 11210410, 1212708, 11215353, 1213408, 11215358, 11215363);
    InitializeEvent(18, 11210410, 1212703, 11215350, 1213403, 11215355, 11215360);
    InitializeEvent(19, 11210410, 1212704, 11215352, 1213404, 11215357, 11215362);
    InitializeEvent(0, 11210800, 1212722, 11215350);
    InitializeEvent(1, 11210800, 1212723, 11215351);
    InitializeEvent(2, 11210800, 1212724, 11215352);
    InitializeEvent(3, 11210800, 1212725, 11215353);
    InitializeEvent(4, 11210800, 1212718, 11215350);
    InitializeEvent(5, 11210800, 1212719, 11215351);
    InitializeEvent(6, 11210800, 1212720, 11215352);
    InitializeEvent(7, 11210800, 1212721, 11215353);
    InitializeEvent(8, 11210800, 1212716, 11215350);
    InitializeEvent(9, 11210800, 1212717, 11215352);
    InitializeEvent(10, 11210800, 1212709, 11215350);
    InitializeEvent(11, 11210800, 1212710, 11215351);
    InitializeEvent(12, 11210800, 1212711, 11215352);
    InitializeEvent(13, 11210800, 1212712, 11215353);
    InitializeEvent(14, 11210800, 1212705, 11215350);
    InitializeEvent(15, 11210800, 1212706, 11215351);
    InitializeEvent(16, 11210800, 1212707, 11215352);
    InitializeEvent(17, 11210800, 1212708, 11215353);
    InitializeEvent(18, 11210800, 1212703, 11215350);
    InitializeEvent(19, 11210800, 1212704, 11215352);
    InitializeEvent(0, 11210820, 11215350, 11215360, 11210825, 0);
    InitializeEvent(1, 11210820, 11215351, 11215361, 11210825, 1);
    InitializeEvent(2, 11210820, 11215352, 11215362, 11210825, 2);
    InitializeEvent(3, 11210820, 11215353, 11215363, 11210825, 3);
    InitializeEvent(0, 11210825, 11215360, 11215370);
    InitializeEvent(1, 11210825, 11215361, 11215371);
    InitializeEvent(2, 11210825, 11215362, 11215372);
    InitializeEvent(3, 11210825, 11215363, 11215373);
    InitializeEvent(0, 11210701, 11215350, 11215300, 11215312, 11215318, 11215306);
    InitializeEvent(1, 11210701, 11215351, 11215306, 11215312, 11215318, 11215300);
    InitializeEvent(2, 11210701, 11215352, 11215312, 11215300, 11215306, 11215318);
    InitializeEvent(3, 11210701, 11215353, 11215318, 11215300, 11215306, 11215312);
    InitializeEvent(0, 11210434, 0);
    InitializeEvent(0, 11210430, 11215350, 11215300, 11215312);
    InitializeEvent(1, 11210430, 11215351, 11215306, 11215312);
    InitializeEvent(2, 11210430, 11215352, 11215312, 11215300);
    InitializeEvent(3, 11210430, 11215353, 11215318, 11215300);
    InitializeEvent(0, 11210435, 11215350, 11215300, 11215312, 11215318, 11215306);
    InitializeEvent(1, 11210435, 11215351, 11215306, 11215312, 11215318, 11215300);
    InitializeEvent(2, 11210435, 11215352, 11215312, 11215300, 11215306, 11215318);
    InitializeEvent(3, 11210435, 11215353, 11215318, 11215300, 11215306, 11215312);
    InitializeEvent(0, 11210870, 11215350, 11215300, 11215312, 11215318, 11215306);
    InitializeEvent(1, 11210870, 11215351, 11215306, 11215312, 11215318, 11215300);
    InitializeEvent(2, 11210870, 11215352, 11215312, 11215300, 11215306, 11215318);
    InitializeEvent(3, 11210870, 11215353, 11215318, 11215300, 11215306, 11215312);
    InitializeEvent(0, 11210831, 11215360, 11215300, 11215305);
    InitializeEvent(1, 11210831, 11215361, 11215306, 11215311);
    InitializeEvent(2, 11210831, 11215362, 11215312, 11215317);
    InitializeEvent(3, 11210831, 11215363, 11215318, 11215323);
    InitializeEvent(0, 11210760, 1212711, 1211520, 1213202, 11215372, 1219400);
    InitializeEvent(1, 11210760, 1212712, 1211521, 1213203, 11215373, 1219401);
    InitializeEvent(2, 11210760, 1212709, 1211522, 1213200, 11215370, 1219402);
    InitializeEvent(3, 11210760, 1212710, 1211523, 1213201, 11215371, 1219403);
    InitializeEvent(4, 11210760, 1212707, 1211530, 1213212, 11215372, 1219200);
    InitializeEvent(5, 11210760, 1212708, 1211531, 1213213, 11215373, 1219201);
    InitializeEvent(6, 11210760, 1212705, 1211532, 1213210, 11215370, 1219202);
    InitializeEvent(7, 11210760, 1212706, 1211533, 1213211, 11215371, 1219203);
    InitializeEvent(8, 11210760, 1212704, 1211540, 1213222, 11215372, 1219000);
    InitializeEvent(9, 11210760, 1212703, 1211542, 1213220, 11215370, 1219001);
    InitializeEvent(10, 11210760, 1212724, 1211550, 1213232, 11215372, 1219500);
    InitializeEvent(11, 11210760, 1212725, 1211551, 1213233, 11215373, 1219501);
    InitializeEvent(12, 11210760, 1212722, 1211552, 1213230, 11215370, 1219502);
    InitializeEvent(13, 11210760, 1212723, 1211553, 1213231, 11215371, 1219503);
    InitializeEvent(14, 11210760, 1212720, 1211560, 1213242, 11215372, 1219300);
    InitializeEvent(15, 11210760, 1212721, 1211561, 1213243, 11215373, 1219301);
    InitializeEvent(16, 11210760, 1212718, 1211562, 1213240, 11215370, 1219302);
    InitializeEvent(17, 11210760, 1212719, 1211563, 1213241, 11215371, 1219303);
    InitializeEvent(18, 11210760, 1212717, 1211570, 1213252, 11215372, 1219100);
    InitializeEvent(19, 11210760, 1212716, 1211572, 1213250, 11215370, 1219101);
    InitializeEvent(0, 11210780, 1212711, 1211420, 1213302, 11215362);
    InitializeEvent(1, 11210780, 1212712, 1211421, 1213303, 11215363);
    InitializeEvent(2, 11210780, 1212709, 1211422, 1213300, 11215360);
    InitializeEvent(3, 11210780, 1212710, 1211423, 1213301, 11215361);
    InitializeEvent(4, 11210780, 1212707, 1211430, 1213302, 11215362);
    InitializeEvent(5, 11210780, 1212708, 1211431, 1213303, 11215363);
    InitializeEvent(6, 11210780, 1212705, 1211432, 1213300, 11215360);
    InitializeEvent(7, 11210780, 1212706, 1211433, 1213301, 11215361);
    InitializeEvent(8, 11210780, 1212704, 1211440, 1213302, 11215362);
    InitializeEvent(9, 11210780, 1212703, 1211442, 1213300, 11215360);
    InitializeEvent(10, 11210780, 1212724, 1211450, 1213302, 11215362);
    InitializeEvent(11, 11210780, 1212725, 1211451, 1213303, 11215363);
    InitializeEvent(12, 11210780, 1212722, 1211452, 1213300, 11215360);
    InitializeEvent(13, 11210780, 1212723, 1211453, 1213301, 11215361);
    InitializeEvent(14, 11210780, 1212720, 1211460, 1213302, 11215362);
    InitializeEvent(15, 11210780, 1212721, 1211461, 1213303, 11215363);
    InitializeEvent(16, 11210780, 1212718, 1211462, 1213300, 11215360);
    InitializeEvent(17, 11210780, 1212719, 1211463, 1213301, 11215361);
    InitializeEvent(18, 11210780, 1212717, 1211470, 1213302, 11215362);
    InitializeEvent(19, 11210780, 1212716, 1211472, 1213300, 11215360);
    InitializeEvent(0, 11210840, 11215350, 11215370, 11215375, 11215300, 11215306, 150070);
    InitializeEvent(1, 11210840, 11215351, 11215371, 11215376, 11215306, 11215300, 150071);
    InitializeEvent(2, 11210840, 11215352, 11215372, 11215377, 11215312, 11215318, 150072);
    InitializeEvent(3, 11210840, 11215353, 11215373, 11215378, 11215318, 11215312, 150073);
    InitializeEvent(0, 11210850, 11215350, 11215375, 1212700, 1219000);
    InitializeEvent(1, 11210850, 11215352, 11215377, 1212700, 1219001);
    InitializeEvent(2, 11210850, 11215350, 11215375, 1212701, 1219200);
    InitializeEvent(3, 11210850, 11215351, 11215376, 1212701, 1219201);
    InitializeEvent(4, 11210850, 11215352, 11215377, 1212701, 1219202);
    InitializeEvent(5, 11210850, 11215353, 11215378, 1212701, 1219203);
    InitializeEvent(6, 11210850, 11215350, 11215375, 1212702, 1219400);
    InitializeEvent(7, 11210850, 11215351, 11215376, 1212702, 1219401);
    InitializeEvent(8, 11210850, 11215352, 11215377, 1212702, 1219402);
    InitializeEvent(9, 11210850, 11215353, 11215378, 1212702, 1219403);
    InitializeEvent(10, 11210850, 11215350, 11215375, 1212713, 1219100);
    InitializeEvent(11, 11210850, 11215352, 11215377, 1212713, 1219101);
    InitializeEvent(12, 11210850, 11215350, 11215375, 1212714, 1219300);
    InitializeEvent(13, 11210850, 11215351, 11215376, 1212714, 1219301);
    InitializeEvent(14, 11210850, 11215352, 11215377, 1212714, 1219302);
    InitializeEvent(15, 11210850, 11215353, 11215378, 1212714, 1219303);
    InitializeEvent(16, 11210850, 11215350, 11215375, 1212715, 1219500);
    InitializeEvent(17, 11210850, 11215351, 11215376, 1212715, 1219501);
    InitializeEvent(18, 11210850, 11215352, 11215377, 1212715, 1219502);
    InitializeEvent(19, 11210850, 11215353, 11215378, 1212715, 1219503);
    InitializeEvent(0, 11210886, 11215350, 11215375);
    InitializeEvent(1, 11210886, 11215351, 11215376);
    InitializeEvent(2, 11210886, 11215352, 11215377);
    InitializeEvent(3, 11210886, 11215353, 11215378);
    InitializeEvent(0, 11210880, 1212700, 1212703);
    InitializeEvent(1, 11210880, 1212701, 1212705);
    InitializeEvent(2, 11210880, 1212702, 1212709);
    InitializeEvent(3, 11210880, 1212713, 1212716);
    InitializeEvent(4, 11210880, 1212714, 1212718);
    InitializeEvent(5, 11210880, 1212715, 1212722);
    InitializeEvent(0, 11210890, 1212730, 1218215);
    InitializeEvent(1, 11210890, 1212731, 1218213);
    InitializeEvent(2, 11210890, 1212732, 1218211);
    InitializeEvent(3, 11210890, 1212733, 1218214);
    InitializeEvent(4, 11210890, 1212734, 1218212);
    InitializeEvent(5, 11210890, 1212735, 1218210);
});

//  Obtain the Arena Dissolution Stone
Event(11210708, Default, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventID, 0);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1212700);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1212701);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1212702);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1212713);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1212714);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1212715);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfConditionGroup(MAIN, PASS, AND_01);
    IfPlayerHasdoesntHaveItem(AND_02, ItemType.Goods, 118, OwnershipState.Owns);
    EndIfConditionGroupStateUncompiled(EventEndType.End, PASS, AND_02);
    AwardItemLot(2200);
});

//  Waiting room entrance / exit_XX
Event(11210710, Default, function(X0_4, X4_4, X8_4, X12_4) {
    IfActionButton(MAIN, TargetEntityType.Object, X0_4, 180, 100, 2, X8_4, ReactionType.HollowHuman, 0);
    SetEventFlag(11215341, ON);
    SetEventFlag(11210709, ON);
    RotateCharacter(10000, X0_4);
    ForceAnimationPlayback(10000, 7114, false, false, false);
    WaitFixedTimeSeconds(0.7);
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 17, 90021);
    WaitFixedTimeSeconds(1.5);
    IfHPRatio(AND_01, 10000, ComparisonType.Equal, 0);
    EndIfConditionGroupStateUncompiled(EventEndType.End, PASS, AND_01);
    SkipIfComparison(1, ComparisonType.Equal, 0, X12_4);
    BatchSetEventFlags(7000, 7799, OFF);
    SkipIfComparison(1, ComparisonType.Equal, 1, X12_4);
    BattleOfStoicismExitRequest();
    BatchSetEventFlags(8140, 8146, OFF);
    WarpPlayer(12, 1, X4_4);
});

//  Waiting room special effect _XX
Event(11210730, Default, function(X0_4, X4_4) {
    SetNetworkSyncState(Disabled);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 11215390);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 765);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, X0_4);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetSpeffect(10000, X4_4);
    WaitFixedTimeFrames(10);
    EndUnconditionally(EventEndType.Restart);
});

//  Special effects for the arena
Event(11210878, Default, function() {
    SetNetworkSyncState(Disabled);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1212700);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1212701);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1212702);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1212713);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1212714);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1212715);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetSpeffect(10000, 4610);
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 11215398);
    SetSpeffect(10000, 4613);
    WaitFixedTimeSeconds(1);
    EndUnconditionally(EventEndType.Restart);
});

//  Amphitheater No Dead removed
Event(11215398, Default, function() {
    SetNetworkSyncState(Disabled);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1212740);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1212741);
    IfConditionGroup(MAIN, PASS, OR_01);
    ClearSpeffect(10000, 4613);
    EndUnconditionally(EventEndType.Restart);
});

//  Spawn point invincible
Event(11210875, Default, function() {
    SetNetworkSyncState(Disabled);
    IfMultiplayerState(AND_01, MultiplayerState.Multiplayer);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1212703);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1212704);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1212705);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1212706);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1212707);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1212708);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1212709);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1212710);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1212711);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1212712);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1212716);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1212717);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1212718);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1212719);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1212720);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1212721);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1212722);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1212723);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1212724);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1212725);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetEventFlag(11215394, ON);
    SetCharacterInvincibility(10000, Enabled);
    SetSpeffect(10000, 90000);
    WaitFixedTimeSeconds(4);
    SetEventState(11210876, 0, EventEndType.Restart);
    EndUnconditionally(EventEndType.Restart);
});

//  Unbeatable spawn point
Event(11210876, Default, function() {
    SetNetworkSyncState(Disabled);
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 11215394);
    WaitFixedTimeSeconds(5);
    SetEventFlag(11215394, OFF);
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 11215391);
    SetCharacterInvincibility(10000, Disabled);
    ClearSpeffect(10000, 90000);
    EndUnconditionally(EventEndType.Restart);
});

//  Enclosure control_XX
Event(11210780, Default, function(X0_4, X4_4, X8_4, X12_4) {
    SkipIfMultiplayerState(1, MultiplayerState.Host);
    SkipIfEventFlag(9, ON, TargetEventFlagType.EventFlag, X12_4);
    ReproduceObjectAnimation(X4_4, 1);
    ActivateHit(X8_4, Disabled);
    IfMultiplayerState(AND_01, MultiplayerState.Multiplayer);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, X0_4);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, X12_4);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfConditionGroup(MAIN, PASS, AND_01);
    ActivateHit(X8_4, Enabled);
    ForceAnimationPlayback(X4_4, 0, false, true, false);
    IfEventFlag(AND_02, OFF, TargetEventFlagType.EventFlag, 11215340);
    IfMultiplayerState(OR_02, MultiplayerState.Singleplayer);
    IfEventFlag(AND_03, OFF, TargetEventFlagType.EventFlag, X12_4);
    IfAllPlayersInoutsideArea(AND_03, InsideOutsideState.Outside, X0_4);
    IfConditionGroup(OR_02, PASS, AND_03);
    IfConditionGroup(AND_02, PASS, OR_02);
    IfConditionGroup(MAIN, PASS, AND_02);
    ForceAnimationPlayback(X4_4, 1, false, true, false);
    EndUnconditionally(EventEndType.Restart);
});

//  Participant recruitment guide_XX
Event(11210410, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    SkipIfEventFlag(10, ON, TargetEventFlagType.EventFlag, X12_4);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 765);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 11215390);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, X4_4);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, X0_4);
    IfEventFlag(AND_05, ON, TargetEventFlagType.EventFlag, X16_4);
    IfEventFlag(AND_05, OFF, TargetEventFlagType.EventFlag, 11215390);
    IfElapsedSeconds(AND_05, 15);
    IfConditionGroup(OR_02, PASS, AND_01);
    IfConditionGroup(OR_02, PASS, AND_05);
    IfConditionGroup(MAIN, PASS, OR_02);
    SetEventFlag(X12_4, ON);
    SkipIfMultiplayerState(1, MultiplayerState.Multiplayer);
    DisplayMessage(150000, 1);
    SpawnMapSFX(X8_4);
    SkipIfEventFlag(11, OFF, TargetEventFlagType.EventFlag, X12_4);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, X4_4);
    IfInoutsideArea(AND_02, InsideOutsideState.Outside, 10000, X0_4);
    IfMultiplayerState(AND_03, MultiplayerState.Multiplayer);
    IfEventFlag(AND_03, OFF, TargetEventFlagType.EventFlag, X16_4);
    IfElapsedSeconds(AND_03, 5);
    IfMultiplayerState(AND_04, MultiplayerState.Singleplayer);
    IfEventFlag(AND_04, OFF, TargetEventFlagType.EventFlag, X4_4);
    IfConditionGroup(OR_01, PASS, AND_02);
    IfConditionGroup(OR_01, PASS, AND_03);
    IfConditionGroup(OR_01, PASS, AND_04);
    IfConditionGroup(MAIN, PASS, OR_01);
    SetEventFlag(X12_4, OFF);
    DeleteMapSFX(X8_4, true);
    EndUnconditionally(EventEndType.Restart);
});

//  Participant ticket acquisition_XX
Event(11210800, Default, function(X0_4, X4_4) {
    SetNetworkSyncState(Disabled);
    IfInoutsideArea(MAIN, InsideOutsideState.Inside, 10000, X0_4);
    BatchSetEventFlags(11215350, 11215353, OFF);
    SetEventFlag(X4_4, ON);
    IfEventFlag(MAIN, OFF, TargetEventFlagType.EventFlag, X4_4);
    EndUnconditionally(EventEndType.Restart);
});

//  Participant ticket delivery_XX
Event(11210820, Default, function(X0_4, X4_4, X8_4, X12_4) {
    IfMultiplayerState(AND_01, MultiplayerState.Multiplayer);
    SkipIfComparison(1, ComparisonType.Equal, X0_4, 11215350);
    IfMultiplayerState(AND_01, MultiplayerState.Client);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, X0_4);
    IfElapsedSeconds(AND_01, 3);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetEventFlag(X4_4, ON);
    SetEventState(X8_4, X12_4, EventEndType.Restart);
    EndUnconditionally(EventEndType.Restart);
});

//  Ticket Discard_XX
Event(11210825, Default, function(X0_4, X4_4) {
    SetNetworkSyncState(Disabled);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, X0_4);
    IfElapsedSeconds(AND_01, 10);
    IfConditionGroup(MAIN, PASS, AND_01);
    EndIfEventFlag(EventEndType.Restart, ON, TargetEventFlagType.EventFlag, X4_4);
    SetEventFlag(X0_4, OFF);
    EndUnconditionally(EventEndType.Restart);
});

//  Match start
Event(11210830, Default, function() {
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 1212715);
    IfBatchEventFlags(AND_01, LogicalOperationType.AllON, TargetEventFlagType.EventFlag, 11215360, 11215363);
    IfInoutsideArea(AND_02, InsideOutsideState.Inside, 10000, 1212702);
    IfBatchEventFlags(AND_02, LogicalOperationType.AllON, TargetEventFlagType.EventFlag, 11215360, 11215363);
    IfInoutsideArea(AND_03, InsideOutsideState.Inside, 10000, 1212714);
    IfBatchEventFlags(AND_03, LogicalOperationType.AllON, TargetEventFlagType.EventFlag, 11215360, 11215363);
    IfInoutsideArea(AND_04, InsideOutsideState.Inside, 10000, 1212701);
    IfBatchEventFlags(AND_04, LogicalOperationType.AllON, TargetEventFlagType.EventFlag, 11215360, 11215363);
    IfInoutsideArea(AND_05, InsideOutsideState.Inside, 10000, 1212713);
    IfEventFlag(AND_05, ON, TargetEventFlagType.EventFlag, 11215360);
    IfEventFlag(AND_05, ON, TargetEventFlagType.EventFlag, 11215362);
    IfInoutsideArea(AND_06, InsideOutsideState.Inside, 10000, 1212700);
    IfEventFlag(AND_06, ON, TargetEventFlagType.EventFlag, 11215360);
    IfEventFlag(AND_06, ON, TargetEventFlagType.EventFlag, 11215362);
    IfConditionGroup(OR_01, PASS, AND_01);
    IfConditionGroup(OR_01, PASS, AND_02);
    IfConditionGroup(OR_01, PASS, AND_03);
    IfConditionGroup(OR_01, PASS, AND_04);
    IfConditionGroup(OR_01, PASS, AND_05);
    IfConditionGroup(OR_01, PASS, AND_06);
    IfConditionGroup(MAIN, PASS, OR_01);
    SetEventFlag(11215340, ON);
    SkipIfConditionGroupStateCompiled(2, PASS, AND_03);
    SkipIfConditionGroupStateCompiled(1, PASS, AND_04);
    SkipUnconditionally(1);
    SetEventFlag(11215392, ON);
    SkipIfConditionGroupStateCompiled(2, PASS, AND_01);
    SkipIfConditionGroupStateCompiled(1, PASS, AND_02);
    SkipUnconditionally(1);
    SetEventFlag(11215395, ON);
    WaitFixedTimeSeconds(8);
    SkipIfEventFlag(3, ON, TargetEventFlagType.EventFlag, 11215395);
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 11215392);
    DisplayMessage(150215, 1);
    SkipUnconditionally(1);
    DisplayMessage(150205, 1);
    WaitFixedTimeSeconds(2);
    SetEventFlag(11215390, ON);
    SetEventFlag(11219990, ON); // Battle start, spawn powerups
    IfEventFlag(MAIN, OFF, TargetEventFlagType.EventFlag, 11215390);
    EndUnconditionally(EventEndType.Restart);
});

//  Defeat on the way and leave _XX
Event(11210831, Default, function(X0_4, X4_4, X8_4) {
    IfMultiplayerState(AND_01, MultiplayerState.Host);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11215390);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, X0_4);
    IfBatchEventFlags(AND_01, LogicalOperationType.NotAllON, TargetEventFlagType.EventFlag, X4_4, X8_4);
    IfConditionGroup(MAIN, PASS, AND_01);
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 11215392);
    BatchSetEventFlags(X4_4, X8_4, ON);
});

//  Match time count
Event(11210835, Default, function(X0_4, X4_4, X8_4, X12_4) {
    SetNetworkSyncState(Disabled);
    IfMultiplayerState(AND_01, MultiplayerState.Host);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 11215391);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11215390);
    IfConditionGroup(MAIN, PASS, AND_01);
    SkipIfEventFlag(3, ON, TargetEventFlagType.EventFlag, 11215395);
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 11215392);
    WaitFixedTimeFrames(X0_4);
    SkipUnconditionally(1);
    WaitFixedTimeFrames(X8_4);
    SetEventFlag(11215396, ON);
    SkipIfEventFlag(3, ON, TargetEventFlagType.EventFlag, 11215395);
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 11215392);
    WaitFixedTimeFrames(X4_4);
    SkipUnconditionally(1);
    WaitFixedTimeFrames(X12_4);
    IfEventFlag(MAIN, OFF, TargetEventFlagType.EventFlag, 904);
    SetEventFlag(11215391, ON);
    EndUnconditionally(EventEndType.Restart);
});

//  Match time count notification
Event(11210836, Default, function() {
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 11215396);
    SetEventFlag(11215396, ON);
    SkipIfEventFlag(3, ON, TargetEventFlagType.EventFlag, 11215395);
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 11215392);
    DisplayMessage(150115, 0);
    SkipUnconditionally(1);
    DisplayMessage(150105, 0);
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 11215391);
    SetEventFlag(11215391, ON);
    DisplayMessage(150300, 0);
    IfEventFlag(MAIN, OFF, TargetEventFlagType.EventFlag, 11215391);
    EndUnconditionally(EventEndType.Restart);
});

//  Pitfall Open_XX
Event(11210760, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    SetNetworkSyncState(Disabled);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11215390);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, X12_4);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, X0_4);
    IfConditionGroup(MAIN, PASS, AND_01);
    WaitFixedTimeSeconds(1);
    //ActivateHit(X8_4, Disabled);
    //ForceAnimationPlayback(X4_4, 1, false, true, false);
    //ActivateHit(X8_4, Enabled);
    PlayCutsceneAndWarpAllPlayers(120130, CutscenePlayMode.Unskippable, X16_4, 12, 1); //X16_4 param assigns volume for respawn
    SetCharacterInvincibility(10000, Disabled);
    ClearSpeffect(10000, 90000);
    //ForceAnimationPlayback(10000, 6950, false, true, false);
    //ForceAnimationPlayback(10000, 6806, false, true, false);
    EndUnconditionally(EventEndType.Restart);
});

//  PC Death Processing_XX
Event(11210840, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, X0_4);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11215390);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 11215391);
    IfCharacterHPValue(AND_01, 10000, ComparisonType.Greater, 5);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetCharacterInvincibility(10000, Enabled); // Removed this because it causes some odd bugs
    ClearSpeffect(10000, 9021);  // Remove all arena powerup buffs (except kamikaze)
    ClearSpeffect(10000, 9022);
    ClearSpeffect(10000, 9023);
    ClearSpeffect(10000, 9024);
    ClearSpeffect(10000, 9025);
    ClearSpeffect(10000, 9026);
    ClearSpeffect(10000, 9028);
    ClearSpeffect(10000, 9027);
    ClearSpeffect(10000, 9030);
    ClearSpeffect(10000, 9031);
    ClearSpeffect(10000, 9032);
    ClearSpeffect(10000, 9033);
    ClearSpeffect(10000, 9034);
    ClearSpeffect(10000, 9035);
    ClearSpeffect(10000, 9041);
    RemoveItemFromPlayer(ItemType.Weapon, 2107000, 999); // Remove special arrows on death
    RemoveItemFromPlayer(ItemType.Weapon, 2203000, 999);
    RemoveItemFromPlayer(ItemType.Weapon, 2204000, 999);
    SetSpeffect(10000, 101);
    SetSpeffect(10000, 102);
    SetSpeffect(10000, 103);
    SetSpeffect(10000, 104);
    SetSpeffect(10000, 4611);
    SetSpeffect(10000, 9100); // NuArena dead state speff, triggers fall down
    //SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, X0_4);  // Commented these lines out to remove the constant spam of death messages
    //DisplayMessage(X20_4, 1);
    //SkipUnconditionally(1);
    //DisplayMessage(150023, 1);
    IncrementEventValue(X12_4, 6, 63);
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 11215392);
    IncrementEventValue(X16_4, 6, 63);
    WaitFixedTimeSeconds(5);
    SetEventFlag(X4_4, ON);
    SetEventFlag(X8_4, ON);
    IfEventFlag(MAIN, OFF, TargetEventFlagType.EventFlag, X8_4);
    SetEventFlag(X8_4, OFF);
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, X0_4);
    SetCharacterInvincibility(10000, Disabled);
    ClearSpeffect(10000, 4611);
    ClearSpeffect(10000, 9100); // Removes NuArena dead state
    RequestCharacterAnimationReset(10000, Interpolation.Uninterpolated);
    RequestAnimationPlayback(10000, 6950, false, true, false);
    SetSpeffect(10000, 1330); // Repair all equipment
    SetEventFlag(X4_4, OFF);
    EndUnconditionally(EventEndType.Restart);
});

//  PC Death Poly Drama_XX
Event(11210850, Default, function(X0_4, X4_4, X8_4, X12_4) {
    SetNetworkSyncState(Disabled);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, X0_4);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, X4_4);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, X8_4);
    IfConditionGroup(MAIN, PASS, AND_01);
    WaitFixedTimeFrames(1);
    BonfirelikeRecovery();
    SetEventFlag(X4_4, OFF);
    SetCharacterInvincibility(10000, Disabled);
    ClearSpeffect(10000, 90000);
    PlayCutsceneAndWarpAllPlayers(120130, CutscenePlayMode.Unskippable, X12_4, 12, 1); //X12_4 param assigns volume for respawn
    EndUnconditionally(EventEndType.Restart);
});

//  Character invalidation when PC dies _XX
Event(11210886, Default, function(X0_4, X4_4) {
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, X0_4);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, X4_4);
    IfConditionGroup(MAIN, PASS, AND_01);
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, X0_4);
    ChangeCharacterEnableState(10000, Disabled);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, X0_4);
    IfEventFlag(AND_02, OFF, TargetEventFlagType.EventFlag, X4_4);
    IfElapsedSeconds(AND_02, 2);
    IfConditionGroup(MAIN, PASS, AND_02);
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, X0_4);
    ChangeCharacterEnableState(10000, Enabled);
    EndUnconditionally(EventEndType.Restart);
});

//  End of match_XX
Event(11210870, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    SetNetworkSyncState(Disabled);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, X0_4);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11215390);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11215391);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetCharacterInvincibility(10000, Enabled);
    SetSpeffect(10000, 90000);
    WaitFixedTimeSeconds(6);
    SetEventFlag(11215397, ON);
    IfCompareEventValues(AND_02, X4_4, 6, ComparisonType.Less, X8_4, 6);
    IfCompareEventValues(AND_02, X4_4, 6, ComparisonType.Less, X12_4, 6);
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 11215392);
    IfCompareEventValues(AND_02, X4_4, 6, ComparisonType.Less, X16_4, 6);
    IfCompareEventValues(OR_01, X4_4, 6, ComparisonType.Greater, X8_4, 6);
    IfCompareEventValues(OR_01, X4_4, 6, ComparisonType.Greater, X12_4, 6);
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 11215392);
    IfCompareEventValues(OR_01, X4_4, 6, ComparisonType.Greater, X16_4, 6);
    IfCompareEventValues(AND_03, X4_4, 6, ComparisonType.Equal, X8_4, 6);
    SkipIfEventFlag(8, ON, TargetEventFlagType.EventFlag, 11215392);
    IfCompareEventValues(AND_03, X4_4, 6, ComparisonType.Less, X12_4, 6);
    IfCompareEventValues(AND_03, X4_4, 6, ComparisonType.Less, X16_4, 6);
    IfCompareEventValues(AND_04, X4_4, 6, ComparisonType.Less, X8_4, 6);
    IfCompareEventValues(AND_04, X4_4, 6, ComparisonType.Equal, X12_4, 6);
    IfCompareEventValues(AND_04, X4_4, 6, ComparisonType.Less, X16_4, 6);
    IfCompareEventValues(AND_05, X4_4, 6, ComparisonType.Less, X8_4, 6);
    IfCompareEventValues(AND_05, X4_4, 6, ComparisonType.Less, X12_4, 6);
    IfCompareEventValues(AND_05, X4_4, 6, ComparisonType.Equal, X16_4, 6);
    IfConditionGroup(OR_02, PASS, AND_03);
    IfConditionGroup(OR_02, PASS, AND_04);
    IfConditionGroup(OR_02, PASS, AND_05);
    SkipIfConditionGroupStateUncompiled(3, PASS, AND_02);
    SkipIfConditionGroupStateUncompiled(12, PASS, OR_01);
    SkipIfConditionGroupStateUncompiled(7, PASS, OR_02);
    SkipUnconditionally(6);
    SetEventFlag(11215393, ON);
    DisplayBanner(TextBannerType.YouWin);
    AwardItemsIncludingClients(5005);
    WaitFixedTimeSeconds(2);
    DisplayMessage(150050, 1);
    SkipUnconditionally(29);
    DisplayBanner(TextBannerType.Draw);
    WaitFixedTimeSeconds(2);
    DisplayMessage(150055, 1);
    SkipUnconditionally(18);
    ClearEventValue(7000, 10);
    ClearEventValue(7050, 10);
    ClearEventValue(7100, 10);
    ClearEventValue(7150, 10);
    ClearEventValue(7200, 10);
    ClearEventValue(7250, 10);
    ClearEventValue(7300, 10);
    ClearEventValue(7350, 10);
    ClearEventValue(7400, 10);
    ClearEventValue(7450, 10);
    ClearEventValue(7500, 10);
    ClearEventValue(7550, 10);
    ClearEventValue(7600, 10);
    ClearEventValue(7650, 10);
    ClearEventValue(7700, 10);
    DisplayBanner(TextBannerType.YouLose);
    WaitFixedTimeSeconds(2);
    DisplayMessage(150060, 1);
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 11215392);
    BattleOfStoicism2v2RankingRequest();
    SkipUnconditionally(4);
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 11215395);
    BattleOfStoicismFfaRankingRequest();
    SkipUnconditionally(1);
    BattleOfStoicism1v1RankingRequest();
    AwardItemsIncludingClients(5005);
    AwardItemsIncludingClients(5005);
    WaitFixedTimeSeconds(8);
    SetCharacterInvincibility(10000, Disabled);
    ClearSpeffect(10000, 90000);
    BattleOfStoicismExitRequest();
});

//  Consecutive win record update 1vs1
Event(11210705, Default, function() {
    SetNetworkSyncState(Disabled);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 11215392);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 11215395);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11215393);
    IfConditionGroup(MAIN, PASS, AND_01);
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 11215380);
    IncrementEventValue(7000, 10, 1000);
    IfCompareEventValues(AND_02, 7000, 10, ComparisonType.Greater, 6000, 10);
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 11215381);
    IncrementEventValue(7050, 10, 1000);
    IfCompareEventValues(AND_02, 7050, 10, ComparisonType.Greater, 6050, 10);
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 11215382);
    IncrementEventValue(7100, 10, 1000);
    IfCompareEventValues(AND_02, 7100, 10, ComparisonType.Greater, 6100, 10);
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 11215383);
    IncrementEventValue(7150, 10, 1000);
    IfCompareEventValues(AND_02, 7150, 10, ComparisonType.Greater, 6150, 10);
    IncrementEventValue(7200, 10, 1000);
    SkipIfConditionGroupStateUncompiled(3, PASS, AND_02);
    BattleOfStoicism1v1RankingRequest();
    SetEventFlag(11215393, OFF);
    EndUnconditionally(EventEndType.Restart);
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 11215380);
    IncrementEventValue(6000, 10, 1000);
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 11215381);
    IncrementEventValue(6050, 10, 1000);
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 11215382);
    IncrementEventValue(6100, 10, 1000);
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 11215383);
    IncrementEventValue(6150, 10, 1000);
    IfCompareEventValues(AND_03, 7200, 10, ComparisonType.Greater, 6200, 10);
    SkipIfConditionGroupStateUncompiled(1, FAIL, AND_03);
    IncrementEventValue(6200, 10, 1000);
    BattleOfStoicism1v1RankingRequest();
    SetEventFlag(11215393, OFF);
    EndUnconditionally(EventEndType.Restart);
});

//  Record-breaking consecutive wins 2vs2
Event(11210706, Default, function() {
    SetNetworkSyncState(Disabled);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11215392);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 11215395);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11215393);
    IfConditionGroup(MAIN, PASS, AND_01);
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 11215380);
    IncrementEventValue(7250, 10, 1000);
    IfCompareEventValues(AND_02, 7250, 10, ComparisonType.Greater, 6250, 10);
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 11215381);
    IncrementEventValue(7300, 10, 1000);
    IfCompareEventValues(AND_02, 7300, 10, ComparisonType.Greater, 6300, 10);
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 11215382);
    IncrementEventValue(7350, 10, 1000);
    IfCompareEventValues(AND_02, 7350, 10, ComparisonType.Greater, 6350, 10);
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 11215383);
    IncrementEventValue(7400, 10, 1000);
    IfCompareEventValues(AND_02, 7400, 10, ComparisonType.Greater, 6400, 10);
    IncrementEventValue(7450, 10, 1000);
    SkipIfConditionGroupStateUncompiled(3, PASS, AND_02);
    BattleOfStoicism2v2RankingRequest();
    SetEventFlag(11215393, OFF);
    EndUnconditionally(EventEndType.Restart);
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 11215380);
    IncrementEventValue(6250, 10, 1000);
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 11215381);
    IncrementEventValue(6300, 10, 1000);
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 11215382);
    IncrementEventValue(6350, 10, 1000);
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 11215383);
    IncrementEventValue(6400, 10, 1000);
    IfCompareEventValues(AND_03, 7450, 10, ComparisonType.Greater, 6450, 10);
    SkipIfConditionGroupStateUncompiled(1, FAIL, AND_03);
    IncrementEventValue(6450, 10, 1000);
    BattleOfStoicism2v2RankingRequest();
    SetEventFlag(11215393, OFF);
    EndUnconditionally(EventEndType.Restart);
});

//  Consecutive win record update BR
Event(11210707, Default, function() {
    SetNetworkSyncState(Disabled);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 11215392);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11215395);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11215393);
    IfConditionGroup(MAIN, PASS, AND_01);
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 11215380);
    IncrementEventValue(7500, 10, 1000);
    IfCompareEventValues(AND_02, 7500, 10, ComparisonType.Greater, 6500, 10);
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 11215381);
    IncrementEventValue(7550, 10, 1000);
    IfCompareEventValues(AND_02, 7550, 10, ComparisonType.Greater, 6550, 10);
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 11215382);
    IncrementEventValue(7600, 10, 1000);
    IfCompareEventValues(AND_02, 7600, 10, ComparisonType.Greater, 6600, 10);
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 11215383);
    IncrementEventValue(7650, 10, 1000);
    IfCompareEventValues(AND_02, 7650, 10, ComparisonType.Greater, 6650, 10);
    IncrementEventValue(7700, 10, 1000);
    SkipIfConditionGroupStateUncompiled(3, PASS, AND_02);
    BattleOfStoicismFfaRankingRequest();
    SetEventFlag(11215393, OFF);
    EndUnconditionally(EventEndType.Restart);
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 11215380);
    IncrementEventValue(6500, 10, 1000);
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 11215381);
    IncrementEventValue(6550, 10, 1000);
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 11215382);
    IncrementEventValue(6600, 10, 1000);
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 11215383);
    IncrementEventValue(6650, 10, 1000);
    IfCompareEventValues(AND_03, 7700, 10, ComparisonType.Greater, 6700, 10);
    SkipIfConditionGroupStateUncompiled(1, FAIL, AND_03);
    IncrementEventValue(6700, 10, 1000);
    BattleOfStoicismFfaRankingRequest();
    SetEventFlag(11215393, OFF);
    EndUnconditionally(EventEndType.Restart);
});

//  Arena initial recovery
Event(11210838, Default, function() {
    SetNetworkSyncState(Disabled);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1212700);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1212701);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1212702);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1212713);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1212714);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1212715);
    IfConditionGroup(MAIN, PASS, OR_01);
    BonfirelikeRecovery();
});

//  Flag setting in the arena multi
Event(11210839, Default, function() {
    SetNetworkSyncState(Disabled);
    BatchSetEventFlags(8140, 8145, OFF);
    IfMultiplayerState(AND_01, MultiplayerState.Multiplayer);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 1212700);
    IfMultiplayerState(AND_02, MultiplayerState.Multiplayer);
    IfInoutsideArea(AND_02, InsideOutsideState.Inside, 10000, 1212701);
    IfMultiplayerState(AND_03, MultiplayerState.Multiplayer);
    IfInoutsideArea(AND_03, InsideOutsideState.Inside, 10000, 1212702);
    IfMultiplayerState(AND_04, MultiplayerState.Multiplayer);
    IfInoutsideArea(AND_04, InsideOutsideState.Inside, 10000, 1212713);
    IfMultiplayerState(AND_05, MultiplayerState.Multiplayer);
    IfInoutsideArea(AND_05, InsideOutsideState.Inside, 10000, 1212714);
    IfMultiplayerState(AND_06, MultiplayerState.Multiplayer);
    IfInoutsideArea(AND_06, InsideOutsideState.Inside, 10000, 1212715);
    IfConditionGroup(OR_01, PASS, AND_01);
    IfConditionGroup(OR_01, PASS, AND_02);
    IfConditionGroup(OR_01, PASS, AND_03);
    IfConditionGroup(OR_01, PASS, AND_04);
    IfConditionGroup(OR_01, PASS, AND_05);
    IfConditionGroup(OR_01, PASS, AND_06);
    IfConditionGroup(MAIN, PASS, OR_01);
    SkipIfConditionGroupStateCompiled(1, FAIL, AND_01);
    SetEventFlag(8145, ON);
    SkipIfConditionGroupStateCompiled(1, FAIL, AND_02);
    SetEventFlag(8143, ON);
    SkipIfConditionGroupStateCompiled(1, FAIL, AND_03);
    SetEventFlag(8141, ON);
    SkipIfConditionGroupStateCompiled(1, FAIL, AND_04);
    SetEventFlag(8144, ON);
    SkipIfConditionGroupStateCompiled(1, FAIL, AND_05);
    SetEventFlag(8142, ON);
    SkipIfConditionGroupStateCompiled(1, FAIL, AND_06);
    SetEventFlag(8140, ON);
});

//  Self-soul level band survey
Event(11210877, Default, function() {
    SetNetworkSyncState(Disabled);
    IfEventFlag(AND_07, ON, TargetEventFlagType.EventFlag, 11215390);
    IfBatchEventFlags(AND_07, LogicalOperationType.AllOFF, TargetEventFlagType.EventFlag, 11215380, 11215383);
    IfConditionGroup(MAIN, PASS, AND_07);
    IfPlayersSoulLevel(AND_01, ComparisonType.LessOrEqual, 50);
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_01);
    SetEventFlag(11215380, ON);
    EndUnconditionally(EventEndType.Restart);
    IfPlayersSoulLevel(AND_02, ComparisonType.Greater, 50);
    IfPlayersSoulLevel(AND_02, ComparisonType.LessOrEqual, 100);
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_02);
    SetEventFlag(11215381, ON);
    EndUnconditionally(EventEndType.Restart);
    IfPlayersSoulLevel(AND_03, ComparisonType.Greater, 100);
    IfPlayersSoulLevel(AND_03, ComparisonType.LessOrEqual, 200);
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_03);
    SetEventFlag(11215382, ON);
    EndUnconditionally(EventEndType.Restart);
    SetEventFlag(11215383, ON);
    EndUnconditionally(EventEndType.Restart);
});

//  Host Forced Room A Warp_XX
Event(11210880, Default, function(X0_4, X4_4) {
    SetNetworkSyncState(Disabled);
    EndIfMultiplayerState(EventEndType.End, MultiplayerState.Client);
    IfMultiplayerState(AND_01, MultiplayerState.Host);
    IfMultiplayerState(AND_01, MultiplayerState.Multiplayer);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 11215341);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 11215390);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, X0_4);
    IfInoutsideArea(AND_01, InsideOutsideState.Outside, 10000, X4_4);
    IfConditionGroup(MAIN, PASS, AND_01);
    PlayCutsceneAndWarpAllPlayers(120130, CutscenePlayMode.Unskippable, X4_4, 12, 1);
    WaitFixedTimeFrames(1);
    EndUnconditionally(EventEndType.Restart);
});

//  Battle room → Waiting room_XX
Event(11210890, Default, function(X0_4, X4_4) {
    SetNetworkSyncState(Disabled);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11215390);
    IfMultiplayerState(AND_01, MultiplayerState.Singleplayer);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, X0_4);
    IfConditionGroup(MAIN, PASS, AND_01);
    WaitFixedTimeSeconds(3);
    WarpPlayer(12, 1, X4_4);
    WaitFixedTimeSeconds(3);
    EndUnconditionally(EventEndType.Restart);
});

//  Icon display in provisional 1st place_XX
Event(11210701, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    IfEventFlag(OR_01, OFF, TargetEventFlagType.EventFlag, 11215396);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 11215397);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11215390);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, X0_4);
    IfEventFlag(AND_02, OFF, TargetEventFlagType.EventFlag, 11215395);
    IfCompareEventValues(AND_02, X4_4, 6, ComparisonType.Less, X8_4, 6);
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 11215395);
    IfCompareEventValues(AND_03, X4_4, 6, ComparisonType.Less, X8_4, 6);
    IfCompareEventValues(AND_03, X4_4, 6, ComparisonType.Less, X12_4, 6);
    IfCompareEventValues(AND_03, X4_4, 6, ComparisonType.Less, X16_4, 6);
    IfConditionGroup(OR_02, PASS, AND_02);
    IfConditionGroup(OR_02, PASS, AND_03);
    IfConditionGroup(AND_01, PASS, OR_02);
    IfEventFlag(AND_04, ON, TargetEventFlagType.EventFlag, 11215342);
    IfEventFlag(AND_05, ON, TargetEventFlagType.EventFlag, 11215343);
    IfEventFlag(AND_06, ON, TargetEventFlagType.EventFlag, 11215344);
    IfEventFlag(AND_07, ON, TargetEventFlagType.EventFlag, 11215345);
    IfConditionGroup(MAIN, PASS, AND_01);
    SkipIfConditionGroupStateCompiled(1, FAIL, AND_04);
    SetSpeffect(10000, 4615);
    SkipIfConditionGroupStateCompiled(1, FAIL, AND_05);
    SetSpeffect(10000, 4616);
    SkipIfConditionGroupStateCompiled(1, FAIL, AND_06);
    SetSpeffect(10000, 4617);
    SkipIfConditionGroupStateCompiled(1, FAIL, AND_07);
    SetSpeffect(10000, 4618);
    SkipIfConditionGroupStateCompiled(4, PASS, AND_04);
    SkipIfConditionGroupStateCompiled(3, PASS, AND_05);
    SkipIfConditionGroupStateCompiled(2, PASS, AND_06);
    SkipIfConditionGroupStateCompiled(1, PASS, AND_07);
    SetSpeffect(10000, 4612);
    WaitFixedTimeSeconds(5);
    EndUnconditionally(EventEndType.Restart);
});

//  Icon display at the same rate 1st place_1vs1_2vs2_XX
Event(11210430, Default, function(X0_4, X4_4, X8_4) {
    IfEventFlag(OR_01, OFF, TargetEventFlagType.EventFlag, 11215396);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 11215397);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11215390);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, X0_4);
    IfEventFlag(AND_02, OFF, TargetEventFlagType.EventFlag, 11215395);
    IfCompareEventValues(AND_02, X4_4, 6, ComparisonType.Equal, X8_4, 6);
    IfConditionGroup(AND_01, PASS, AND_02);
    IfEventFlag(OR_03, ON, TargetEventFlagType.EventFlag, 11215399);
    IfEventFlag(OR_03, ON, TargetEventFlagType.EventFlag, 11215397);
    IfConditionGroup(AND_01, PASS, OR_03);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetSpeffect(10000, 4614);
    WaitFixedTimeSeconds(5);
    EndUnconditionally(EventEndType.Restart);
});

//  Icon display at the same rate _BR_XX
Event(11210435, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11215390);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 11215390);
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 11215390);
    IfEventFlag(AND_04, ON, TargetEventFlagType.EventFlag, 11215390);
    IfEventFlag(AND_05, ON, TargetEventFlagType.EventFlag, 11215390);
    IfEventFlag(AND_06, ON, TargetEventFlagType.EventFlag, 11215390);
    IfEventFlag(AND_07, ON, TargetEventFlagType.EventFlag, 11215390);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, X0_4);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, X0_4);
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, X0_4);
    IfEventFlag(AND_04, ON, TargetEventFlagType.EventFlag, X0_4);
    IfEventFlag(AND_05, ON, TargetEventFlagType.EventFlag, X0_4);
    IfEventFlag(AND_06, ON, TargetEventFlagType.EventFlag, X0_4);
    IfEventFlag(AND_07, ON, TargetEventFlagType.EventFlag, X0_4);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11215395);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 11215395);
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 11215395);
    IfEventFlag(AND_04, ON, TargetEventFlagType.EventFlag, 11215395);
    IfEventFlag(AND_05, ON, TargetEventFlagType.EventFlag, 11215395);
    IfEventFlag(AND_06, ON, TargetEventFlagType.EventFlag, 11215395);
    IfEventFlag(AND_07, ON, TargetEventFlagType.EventFlag, 11215395);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 11215399);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 11215397);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfConditionGroup(AND_02, PASS, OR_01);
    IfConditionGroup(AND_03, PASS, OR_01);
    IfConditionGroup(AND_04, PASS, OR_01);
    IfConditionGroup(AND_05, PASS, OR_01);
    IfConditionGroup(AND_06, PASS, OR_01);
    IfConditionGroup(AND_07, PASS, OR_01);
    IfEventFlag(OR_02, OFF, TargetEventFlagType.EventFlag, 11215396);
    IfEventFlag(OR_02, ON, TargetEventFlagType.EventFlag, 11215397);
    IfConditionGroup(AND_01, PASS, OR_02);
    IfConditionGroup(AND_02, PASS, OR_02);
    IfConditionGroup(AND_03, PASS, OR_02);
    IfConditionGroup(AND_04, PASS, OR_02);
    IfConditionGroup(AND_05, PASS, OR_02);
    IfConditionGroup(AND_06, PASS, OR_02);
    IfConditionGroup(AND_07, PASS, OR_02);
    IfCompareEventValues(AND_01, X4_4, 6, ComparisonType.Equal, X8_4, 6);
    IfCompareEventValues(AND_01, X4_4, 6, ComparisonType.Equal, X12_4, 6);
    IfCompareEventValues(AND_01, X4_4, 6, ComparisonType.Equal, X16_4, 6);
    IfCompareEventValues(AND_02, X4_4, 6, ComparisonType.Equal, X8_4, 6);
    IfCompareEventValues(AND_02, X4_4, 6, ComparisonType.Less, X12_4, 6);
    IfCompareEventValues(AND_02, X4_4, 6, ComparisonType.Less, X16_4, 6);
    IfCompareEventValues(AND_03, X4_4, 6, ComparisonType.Less, X8_4, 6);
    IfCompareEventValues(AND_03, X4_4, 6, ComparisonType.Equal, X12_4, 6);
    IfCompareEventValues(AND_03, X4_4, 6, ComparisonType.Less, X16_4, 6);
    IfCompareEventValues(AND_04, X4_4, 6, ComparisonType.Less, X8_4, 6);
    IfCompareEventValues(AND_04, X4_4, 6, ComparisonType.Less, X12_4, 6);
    IfCompareEventValues(AND_04, X4_4, 6, ComparisonType.Equal, X16_4, 6);
    IfCompareEventValues(AND_05, X4_4, 6, ComparisonType.Equal, X8_4, 6);
    IfCompareEventValues(AND_05, X4_4, 6, ComparisonType.Equal, X12_4, 6);
    IfCompareEventValues(AND_05, X4_4, 6, ComparisonType.Less, X16_4, 6);
    IfCompareEventValues(AND_06, X4_4, 6, ComparisonType.Less, X8_4, 6);
    IfCompareEventValues(AND_06, X4_4, 6, ComparisonType.Equal, X12_4, 6);
    IfCompareEventValues(AND_06, X4_4, 6, ComparisonType.Equal, X16_4, 6);
    IfCompareEventValues(AND_07, X4_4, 6, ComparisonType.Equal, X8_4, 6);
    IfCompareEventValues(AND_07, X4_4, 6, ComparisonType.Less, X12_4, 6);
    IfCompareEventValues(AND_07, X4_4, 6, ComparisonType.Equal, X16_4, 6);
    IfConditionGroup(OR_07, PASS, AND_01);
    IfConditionGroup(OR_07, PASS, AND_02);
    IfConditionGroup(OR_07, PASS, AND_03);
    IfConditionGroup(OR_07, PASS, AND_04);
    IfConditionGroup(OR_07, PASS, AND_04);
    IfConditionGroup(OR_07, PASS, AND_05);
    IfConditionGroup(OR_07, PASS, AND_06);
    IfConditionGroup(OR_07, PASS, AND_07);
    IfConditionGroup(MAIN, PASS, OR_07);
    SetSpeffect(10000, 4614);
    WaitFixedTimeSeconds(5);
    EndUnconditionally(EventEndType.Restart);
});

//  Same rate 1st place icon display Unintentional discharge prevention
Event(11210434, Default, function() {
    SetEventFlag(11215399, ON);
    EndUnconditionally(EventEndType.End);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11215390);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 11215392);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 11215395);
    IfBatchEventFlags(OR_02, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 11215300, 11215305);
    IfBatchEventFlags(OR_02, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 11215312, 11215317);
    IfConditionGroup(AND_01, PASS, OR_02);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 11215390);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 11215392);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 11215395);
    IfConditionGroup(AND_02, PASS, OR_01);
    IfBatchEventFlags(OR_03, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 11215300, 11215305);
    IfBatchEventFlags(OR_03, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 11215306, 11215311);
    IfBatchEventFlags(OR_03, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 11215312, 11215317);
    IfBatchEventFlags(OR_03, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 11215318, 11215323);
    IfConditionGroup(AND_02, PASS, OR_03);
    IfConditionGroup(OR_07, PASS, AND_01);
    IfConditionGroup(OR_07, PASS, AND_02);
    IfConditionGroup(MAIN, PASS, OR_07);
    SetEventFlag(11215399, ON);
});

//  Participant name registration_A
Event(11210845, Default, function() {
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11215350);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11215390);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetBattleOfStocismNametagA(10000);
});

//  Participant name registration_B
Event(11210846, Default, function() {
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11215351);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11215390);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetBattleOfStocismNametagB(10000);
});

//  Participant name registration_C
Event(11210847, Default, function() {
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11215352);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11215390);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetBattleOfStocismNametagC(10000);
});

//  Participant name registration_D
Event(11210848, Default, function() {
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11215353);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11215390);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetBattleOfStocismNametagD(10000);
});

//  Use the amphitheater dissolution stone
Event(11210849, Default, function() {
    SetNetworkSyncState(Disabled);
    IfCharacterHasSpeffect(MAIN, 10000, 17, true);
    SetEventFlag(8146, ON);
    SkipIfMultiplayerState(2, MultiplayerState.Client);
    DisplayBattleOfStocismDissolutionMessage(150030);
    SkipUnconditionally(1);
    DisplayBattleOfStocismDissolutionMessage(150031);
    WaitFixedTimeSeconds(1);
    SkipIfEventFlag(4, ON, TargetEventFlagType.EventFlag, 11215390);
    BattleOfStoicismExitRequest();
    WaitFixedTimeSeconds(3);
    WarpPlayer(12, 1, 1218146);
    EndUnconditionally(EventEndType.Restart);
    BattleOfStoicismExitRequest();
    WaitFixedTimeSeconds(3);
    EndUnconditionally(EventEndType.Restart);
});

//  Notice of dissolution of the arena
Event(11210837, Default, function() {
    IfMultiplayerState(AND_01, MultiplayerState.Host);
    IfMultiplayerState(AND_01, MultiplayerState.Multiplayer);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 8146);
    IfMultiplayerState(AND_02, MultiplayerState.Client);
    IfMultiplayerState(AND_02, MultiplayerState.Multiplayer);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 8146);
    IfConditionGroup(OR_01, PASS, AND_01);
    IfConditionGroup(OR_01, PASS, AND_02);
    IfConditionGroup(MAIN, PASS, OR_01);
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 8146);
    IfEventFlag(MAIN, OFF, TargetEventFlagType.EventFlag, 8146);
    SkipIfConditionGroupStateCompiled(2, PASS, AND_02);
    DisplayBattleOfStocismDissolutionMessage(150040);
    EndUnconditionally(EventEndType.Restart);
    DisplayBattleOfStocismDissolutionMessage(20000437);
    EndUnconditionally(EventEndType.Restart);
});

//  Amphitheater capacity waiting guide
Event(11210401, Default, function() {
    SetNetworkSyncState(Disabled);
    IfMultiplayerState(AND_01, MultiplayerState.Multiplayer);
    IfCountEventFlags(AND_01, TargetEventFlagType.EventFlag, 11215360, 11215363, ComparisonType.GreaterOrEqual, 2);
    IfCharacterHasSpeffect(AND_01, 10000, 4613, true);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 11215340);
    IfConditionGroup(MAIN, PASS, AND_01);
    WaitFixedTimeSeconds(15);
    EndIfEventFlag(EventEndType.Restart, ON, TargetEventFlagType.EventFlag, 11215340);
    EndIfMultiplayerState(EventEndType.Restart, MultiplayerState.Singleplayer);
    DisplayMessage(150001, 1);
    EndUnconditionally(EventEndType.Restart);
});

//  Amphitheater-only old man multi-ban
Event(11210402, Default, function() {
    SetNetworkSyncState(Disabled);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1212700);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1212701);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1212702);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1212713);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1212714);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1212715);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfCharacterHasSpeffect(OR_02, 10000, 2320, true);
    IfCharacterHasSpeffect(OR_02, 10000, 2330, true);
    IfConditionGroup(AND_01, PASS, OR_02);
    IfConditionGroup(MAIN, PASS, AND_01);
    ClearSpeffect(10000, 2320);
    ClearSpeffect(10000, 2330);
    EndUnconditionally(EventEndType.Restart);
});

//  We will not recruit the arena
Event(11210403, Default, function() {
    SetNetworkSyncState(Disabled);
    IfMultiplayerState(AND_01, MultiplayerState.Singleplayer);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 765);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1212703);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1212704);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1212705);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1212706);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1212707);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1212708);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1212709);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1212710);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1212711);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1212712);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1212716);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1212717);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1212718);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1212719);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1212720);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1212721);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1212722);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1212723);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1212724);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1212725);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfConditionGroup(MAIN, PASS, AND_01);
    DisplayGenericDialog(150400, PromptType.OKCANCEL, NumberofOptions.OneButton, -1, 5);
    WaitFixedTimeSeconds(10);
    EndUnconditionally(EventEndType.Restart);
});

//  Temporary 1st place at the arena consecutive wins SFX change _XX
Event(11210404, Default, function(X0_4) {
    SetNetworkSyncState(Disabled);
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 11215340);
    IfEventValue(AND_01, X0_4, 10, ComparisonType.Less, 10);
    IfEventValue(AND_02, X0_4, 10, ComparisonType.GreaterOrEqual, 10);
    IfEventValue(AND_02, X0_4, 10, ComparisonType.Less, 30);
    IfEventValue(AND_03, X0_4, 10, ComparisonType.GreaterOrEqual, 30);
    IfEventValue(AND_03, X0_4, 10, ComparisonType.Less, 50);
    IfEventValue(AND_04, X0_4, 10, ComparisonType.GreaterOrEqual, 50);
    IfEventValue(AND_04, X0_4, 10, ComparisonType.Less, 100);
    IfEventValue(AND_05, X0_4, 10, ComparisonType.GreaterOrEqual, 100);
    SkipIfConditionGroupStateUncompiled(1, FAIL, AND_02);
    SetEventFlag(11215342, ON);
    SkipIfConditionGroupStateUncompiled(1, FAIL, AND_03);
    SetEventFlag(11215343, ON);
    SkipIfConditionGroupStateUncompiled(1, FAIL, AND_04);
    SetEventFlag(11215344, ON);
    SkipIfConditionGroupStateUncompiled(1, FAIL, AND_05);
    SetEventFlag(11215345, ON);
});

//  Arena Current number of consecutive wins Parent event
Event(11210407, Default, function() {
    SetNetworkSyncState(Disabled);
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 11210709);
    SetEventFlag(11210709, OFF);
    EndUnconditionally(EventEndType.End);
    EndIfMultiplayerState(EventEndType.End, MultiplayerState.Multiplayer);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1212700);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1212713);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1212701);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1212714);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1212702);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1212715);
    EndIfConditionGroupStateUncompiled(EventEndType.End, FAIL, OR_01);
    WaitFixedTimeSeconds(2);
    InitializeEvent(0, 11216300, 0);
    InitializeEvent(0, 11216301, 0);
    InitializeEvent(0, 11216200, 1, 60000001);
    InitializeEvent(1, 11216200, 2, 60000002);
    InitializeEvent(2, 11216200, 3, 60000003);
    InitializeEvent(3, 11216200, 4, 60000004);
    InitializeEvent(4, 11216200, 5, 60000005);
    InitializeEvent(5, 11216200, 6, 60000006);
    InitializeEvent(6, 11216200, 7, 60000007);
    InitializeEvent(7, 11216200, 8, 60000008);
    InitializeEvent(8, 11216200, 9, 60000009);
    InitializeEvent(9, 11216200, 10, 60000010);
    InitializeEvent(10, 11216200, 11, 60000011);
    InitializeEvent(11, 11216200, 12, 60000012);
    InitializeEvent(12, 11216200, 13, 60000013);
    InitializeEvent(13, 11216200, 14, 60000014);
    InitializeEvent(14, 11216200, 15, 60000015);
    InitializeEvent(15, 11216200, 16, 60000016);
    InitializeEvent(16, 11216200, 17, 60000017);
    InitializeEvent(17, 11216200, 18, 60000018);
    InitializeEvent(18, 11216200, 19, 60000019);
    InitializeEvent(19, 11216200, 20, 60000020);
    InitializeEvent(20, 11216200, 21, 60000021);
    InitializeEvent(21, 11216200, 22, 60000022);
    InitializeEvent(22, 11216200, 23, 60000023);
    InitializeEvent(23, 11216200, 24, 60000024);
    InitializeEvent(24, 11216200, 25, 60000025);
    InitializeEvent(25, 11216200, 26, 60000026);
    InitializeEvent(26, 11216200, 27, 60000027);
    InitializeEvent(27, 11216200, 28, 60000028);
    InitializeEvent(28, 11216200, 29, 60000029);
    InitializeEvent(29, 11216200, 30, 60000030);
    InitializeEvent(30, 11216200, 31, 60000031);
    InitializeEvent(31, 11216200, 32, 60000032);
    InitializeEvent(32, 11216200, 33, 60000033);
    InitializeEvent(33, 11216200, 34, 60000034);
    InitializeEvent(34, 11216200, 35, 60000035);
    InitializeEvent(35, 11216200, 36, 60000036);
    InitializeEvent(36, 11216200, 37, 60000037);
    InitializeEvent(37, 11216200, 38, 60000038);
    InitializeEvent(38, 11216200, 39, 60000039);
    InitializeEvent(39, 11216200, 40, 60000040);
    InitializeEvent(40, 11216200, 41, 60000041);
    InitializeEvent(41, 11216200, 42, 60000042);
    InitializeEvent(42, 11216200, 43, 60000043);
    InitializeEvent(43, 11216200, 44, 60000044);
    InitializeEvent(44, 11216200, 45, 60000045);
    InitializeEvent(45, 11216200, 46, 60000046);
    InitializeEvent(46, 11216200, 47, 60000047);
    InitializeEvent(47, 11216200, 48, 60000048);
    InitializeEvent(48, 11216200, 49, 60000049);
    InitializeEvent(49, 11216200, 50, 60000050);
    InitializeEvent(50, 11216200, 51, 60000051);
    InitializeEvent(51, 11216200, 52, 60000052);
    InitializeEvent(52, 11216200, 53, 60000053);
    InitializeEvent(53, 11216200, 54, 60000054);
    InitializeEvent(54, 11216200, 55, 60000055);
    InitializeEvent(55, 11216200, 56, 60000056);
    InitializeEvent(56, 11216200, 57, 60000057);
    InitializeEvent(57, 11216200, 58, 60000058);
    InitializeEvent(58, 11216200, 59, 60000059);
    InitializeEvent(59, 11216200, 60, 60000060);
    InitializeEvent(60, 11216200, 61, 60000061);
    InitializeEvent(61, 11216200, 62, 60000062);
    InitializeEvent(62, 11216200, 63, 60000063);
    InitializeEvent(63, 11216200, 64, 60000064);
    InitializeEvent(64, 11216200, 65, 60000065);
    InitializeEvent(65, 11216200, 66, 60000066);
    InitializeEvent(66, 11216200, 67, 60000067);
    InitializeEvent(67, 11216200, 68, 60000068);
    InitializeEvent(68, 11216200, 69, 60000069);
    InitializeEvent(69, 11216200, 70, 60000070);
    InitializeEvent(70, 11216200, 71, 60000071);
    InitializeEvent(71, 11216200, 72, 60000072);
    InitializeEvent(72, 11216200, 73, 60000073);
    InitializeEvent(73, 11216200, 74, 60000074);
    InitializeEvent(74, 11216200, 75, 60000075);
    InitializeEvent(75, 11216200, 76, 60000076);
    InitializeEvent(76, 11216200, 77, 60000077);
    InitializeEvent(77, 11216200, 78, 60000078);
    InitializeEvent(78, 11216200, 79, 60000079);
    InitializeEvent(79, 11216200, 80, 60000080);
    InitializeEvent(80, 11216200, 81, 60000081);
    InitializeEvent(81, 11216200, 82, 60000082);
    InitializeEvent(82, 11216200, 83, 60000083);
    InitializeEvent(83, 11216200, 84, 60000084);
    InitializeEvent(84, 11216200, 85, 60000085);
    InitializeEvent(85, 11216200, 86, 60000086);
    InitializeEvent(86, 11216200, 87, 60000087);
    InitializeEvent(87, 11216200, 88, 60000088);
    InitializeEvent(88, 11216200, 89, 60000089);
    InitializeEvent(89, 11216200, 90, 60000090);
    InitializeEvent(90, 11216200, 91, 60000091);
    InitializeEvent(91, 11216200, 92, 60000092);
    InitializeEvent(92, 11216200, 93, 60000093);
    InitializeEvent(93, 11216200, 94, 60000094);
    InitializeEvent(94, 11216200, 95, 60000095);
    InitializeEvent(95, 11216200, 96, 60000096);
    InitializeEvent(96, 11216200, 97, 60000097);
    InitializeEvent(97, 11216200, 98, 60000098);
    InitializeEvent(98, 11216200, 99, 60000099);
    InitializeEvent(99, 11216200, 100, 60000100);
});

//  Arena Current number of consecutive wins _XX
Event(11216200, Default, function(X0_4, X4_4) {
    SetNetworkSyncState(Disabled);
    IfEventValue(OR_01, 7200, 10, ComparisonType.Equal, X0_4);
    IfEventValue(OR_01, 7450, 10, ComparisonType.Equal, X0_4);
    IfEventValue(OR_01, 7700, 10, ComparisonType.Equal, X0_4);
    EndIfConditionGroupStateUncompiled(EventEndType.End, FAIL, OR_01);
    DisplayStatusMessage(X4_4, Enabled);
});

//  Arena Current number of consecutive wins_0 wins_XX
Event(11216300, Default, function() {
    SetNetworkSyncState(Disabled);
    IfEventValue(AND_01, 7200, 10, ComparisonType.Equal, 0);
    IfEventValue(AND_01, 7450, 10, ComparisonType.Equal, 0);
    IfEventValue(AND_01, 7700, 10, ComparisonType.Equal, 0);
    EndIfConditionGroupStateUncompiled(EventEndType.End, FAIL, AND_01);
    DisplayStatusMessage(60000000, Enabled);
});

//  Arena Current number of consecutive wins_100 wins or more_XX
Event(11216301, Default, function() {
    SetNetworkSyncState(Disabled);
    IfEventValue(OR_01, 7200, 10, ComparisonType.Greater, 100);
    IfEventValue(OR_01, 7450, 10, ComparisonType.Greater, 100);
    IfEventValue(OR_01, 7700, 10, ComparisonType.Greater, 100);
    EndIfConditionGroupStateUncompiled(EventEndType.End, FAIL, OR_01);
    DisplayStatusMessage(59999999, Enabled);
});

//  Arena host team type switching
Event(11210439, Default, function() {
    EndIfMultiplayerState(EventEndType.End, MultiplayerState.Client);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1212700);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1212701);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1212702);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1212713);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1212714);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1212715);
    EndIfConditionGroupStateUncompiled(EventEndType.End, FAIL, OR_01);
    SetCharacterTeamType(10000, TeamType.Human);
});

// Template Arena Powerup
// X0_4 - Pickup Interact Region
// X4_4 - Pickup SFX
// X8_4 - Pickup Text Prompt
// X12_4 - Pickup Speffect
// x16_4 - Initial Spawn Delay (frames)
// x20_4 - Respawn Delay (frames)
Event(11219900, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11219990); //Wait until arena match starts
    IfConditionGroup(MAIN, PASS, AND_01);
    DeleteMapSFX(X4_4, true);
    WaitFixedTimeFrames(X16_4);
    SpawnMapSFX(X4_4);
    IfActionButton(AND_01, TargetEntityType.Area, X0_4, 0, -1, 0, X8_4, ReactionType.All, 0);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, X0_4);
    IfConditionGroup(MAIN, PASS, AND_01);
    RotateCharacter(10000, X0_4);
    ForceAnimationPlayback(10000, 8130, false, true, false);
    SetSpeffect(10000, X12_4);
    SetSpeffect(10000, 9015);   // Secondary healing effect
    DeleteMapSFX(X4_4, true);
    WaitFixedTimeFrames(X20_4);
    EndUnconditionally(EventEndType.Restart);
});

// Template Arena GiveAmmo
// X0_4 - Trigger Speffect
// X4_4 - Itemlot To Give
Event(11219901, Default, function(X0_4, X4_4) {
    SetNetworkSyncState(Disabled);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11219990); //Wait until arena match starts
    IfConditionGroup(MAIN, PASS, AND_01);
    IfCharacterHasSpeffect(MAIN, 10000, X0_4, true);
    AwardItemsIncludingClients(X4_4);
    ClearSpeffect(10000, X0_4);
    EndUnconditionally(EventEndType.Restart);
});

// Arena 'remove last special arrow' bugfix.
// When firing a special great arrow, you get a speff, when you have this speff, delete the extras from your inven. This is to prevent the arrow from being invis.
Event(11219903, Default, function() {
    SetNetworkSyncState(Disabled);
    IfCharacterHasSpeffect(MAIN, 10000, 9109, true);
    WaitFixedTimeFrames(10); // Wait a moment
    RemoveItemFromPlayer(ItemType.Weapon, 2107000, 999);
    ClearSpeffect(10000, 9109);
    EndUnconditionally(EventEndType.Restart);
});

// Template Arena KamikazeTrigger
// X0_4 - Trigger Speffect
// X4_4 - Itemlot To Give
Event(11219902, Default, function() {
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11219990);  //Wait until arena match starts
    IfCharacterHasSpeffect(AND_01, 10000, 9029, true);
    IfCharacterHPValue(AND_01, 10000, ComparisonType.Greater, 155);
    IfConditionGroup(MAIN, PASS, AND_01);
    ClearSpeffect(10000, 9029);
    ForceAnimationPlayback(10000, 6450, false, false, false);
    EndUnconditionally(EventEndType.Restart);
});

// Damnation Killbox
Event(11219510, Default, function() {
    IfInoutsideArea(MAIN, InsideOutsideState.Inside, 10000, 1219510);
    SetSpeffect(10000, 9000);
    EndUnconditionally(EventEndType.Restart);
});

// Template Arena TeleportInteract
// X0_4 - Interact Region
// X4_4 - Target Region
Event(11219910, Default, function(X0_4, X4_4) {
    IfActionButton(AND_01, TargetEntityType.Area, X0_4, 0, -1, 0, 15000150, ReactionType.All, 0);
    IfConditionGroup(MAIN, PASS, AND_01);
    RotateCharacter(10000, X4_4);
    ForceAnimationPlayback(10000, 7415, false, false, false);
    EndUnconditionally(EventEndType.Restart);
});

// Template Arena TeleportTrigger
// X0_4 - Trigger Region
// X4_4 - Exit Region
Event(11219911, Default, function(X0_4, X4_4) {
    SetNetworkSyncState(Disabled);
    IfInoutsideArea(MAIN, InsideOutsideState.Inside, 10000, X0_4);
    SetSpeffect(10000, 9001);
    PlayCutsceneAndWarpPlayer(120130, CutscenePlayMode.Unskippable, X4_4, 12, 1, 10000);
    WaitFixedTimeFrames(1);
    ClearSpeffect(10000, 9001);
    EndUnconditionally(EventEndType.Restart);
});

// Early BOS entry (from firelink) extra fog wall
Event(11219915, Default, function() {
    WaitFixedTimeSeconds(1.0);
    SpawnMapSFX(1211999);
    DeactivateObject(1211998, Enabled);
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 11210001);
    DeleteMapSFX(1211999, false);
    DeactivateObject(1211998, Disabled);
});

/* Warp back to Firelink */
//   Script - 11219916
//   Bonfire - 1219917
Event(11219916, Default, function() {
    IfActionButton(MAIN, TargetEntityType.Object, 1219917, 180, 100, 2, 10010238, ReactionType.HollowHuman, 0);
    RotateCharacter(10000, 1219917);
    ForceAnimationPlayback(10000, 7114, false, false, false);
    WaitFixedTimeSeconds(0.7);
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 17, 90021);
    WaitFixedTimeSeconds(1.5);
    WarpPlayer(10, 2, 1020997);
});

//  [Debug] Arena death SFX occurred
Event(7999, Default, function() {
    SetNetworkSyncState(Disabled);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 905);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 906);
    IfConditionGroup(OR_01, PASS, AND_01);
    IfConditionGroup(OR_01, PASS, AND_02);
    IfConditionGroup(MAIN, PASS, OR_01);
    SkipIfEventFlag(3, ON, TargetEventFlagType.EventFlag, 906);
    SetEventFlag(905, OFF);
    SetSpeffect(10000, 4611);
    EndUnconditionally(EventEndType.Restart);
    SetEventFlag(906, OFF);
    SetSpeffect(10000, 4612);
    EndUnconditionally(EventEndType.Restart);
});

//  [Debug] Addition of consecutive wins at all levels
Event(7998, Default, function() {
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 5100);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 5101);
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 5102);
    IfConditionGroup(OR_01, PASS, AND_01);
    IfConditionGroup(OR_01, PASS, AND_02);
    IfConditionGroup(OR_01, PASS, AND_03);
    IfConditionGroup(MAIN, PASS, OR_01);
    BatchSetEventFlags(5100, 5102, OFF);
    SkipIfConditionGroupStateCompiled(1, FAIL, AND_01);
    IncrementEventValue(7200, 10, 1000);
    SkipIfConditionGroupStateCompiled(1, FAIL, AND_02);
    IncrementEventValue(7450, 10, 1000);
    SkipIfConditionGroupStateCompiled(1, FAIL, AND_03);
    IncrementEventValue(7700, 10, 1000);
    EndUnconditionally(EventEndType.Restart);
});
