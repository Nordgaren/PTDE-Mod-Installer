// ==EMEVD==
// @docs    ds1-common.emedf.json
// @compress    None
// @game    DarkSouls1
// @string    
// @linked    []
// ==/EMEVD==

// コンストラクタ
Event(0, Default, function() {
    InitializeEvent(0, 11020950, 0);  // Early warp to Battle of Stoicism
    InitializeEvent(0, 11020951, 0);  // Warp to Bloodgulch PvP Staging Area
    InitializeEvent(0, 11020952, 0);  // Warp to HangEmHigh PvP Staging Area
    InitializeEvent(0, 11020953, 0);  // Warp to Damnation PvP Staging Area
    InitializeEvent(0, 11020954, 0);  // Warp to Lockout PvP Staging Area
    InitializeEvent(0, 11020955, 0);  // Warp to Sanctuary PvP Staging Area
    InitializeEvent(0, 11020956, 0);  // Warp to Wizard PvP Staging Area
    InitializeEvent(0, 11020957, 0);  // Warp to HangEmHigh(TDM) PvP Staging Area
    InitializeEvent(0, 11020958, 0);  // Warp to Sanctuary(CTF) PvP Staging Area
    
    RemoveItemFromPlayer(ItemType.Goods, 265, 1); // Always remove teamchange and lobby items on game load.
    RemoveItemFromPlayer(ItemType.Goods, 266, 1);
    RemoveItemFromPlayer(ItemType.Goods, 267, 1);
    RemoveItemFromPlayer(ItemType.Goods, 268, 1);
    RemoveItemFromPlayer(ItemType.Goods, 269, 1);
    RemoveItemFromPlayer(ItemType.Weapon, 2107000, 999); // Remove special arrows on area load
    RemoveItemFromPlayer(ItemType.Weapon, 2203000, 999);
    RemoveItemFromPlayer(ItemType.Weapon, 2204000, 999);
    InitializeEvent(0, 11029000, 0);  // Bloodgulch Arena Init Script
    InitializeEvent(0, 11029100, 0);  // Hangemhigh Arena Init Script
    InitializeEvent(0, 11029200, 0);  // Damnation Arena Init Script
    InitializeEvent(0, 11028000, 0);  // Lockout Arena Init Script
    InitializeEvent(0, 11028100, 0);  // Sanctuary Arena Init Script
    InitializeEvent(0, 11028200, 0);  // Wizard Arena Init Script
    InitializeEvent(0, 11028300, 0);  // HangEmHigh(TDM) Arena Init Script
    InitializeEvent(0, 11028400, 0);  // Sanctuary(CTF) Arena Init Script
    
    RegisterBonfire(11020992, 1021960, 1, 180, 10);
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 11020108);
    RegisterBonfire(11020992, 1021960, 1, 180, 30);
    SkipIfEventFlag(4, OFF, TargetEventFlagType.EventFlag, 11020300);
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 11020302);
    ReproduceObjectAnimation(1021000, 11);
    SkipUnconditionally(1);
    ReproduceObjectAnimation(1021000, 12);
    InitializeEvent(0, 11020300, 0);
    InitializeEvent(0, 11025050, 0);
    InitializeEvent(0, 11020001, 0);
    InitializeEvent(0, 11020020, 0);
    InitializeEvent(0, 11020021, 0);
    InitializeEvent(0, 11020105, 0);
    InitializeEvent(0, 11020106, 0);
    InitializeEvent(0, 11020108, 0);
    InitializeEvent(0, 11020120, 11020120, 10010874, 1021465, 10010883, 2015);
    InitializeEvent(0, 11020350, 0);
    InitializeEvent(0, 11020351, 0);
    InitializeEvent(0, 11020352, 0);
    InitializeEvent(0, 11025150, 0);
    InitializeEvent(0, 11020700, 1021650, 11020700);
    InitializeEvent(1, 11020700, 1021651, 11020701);
    InitializeEvent(2, 11020700, 1021652, 11020702);
    InitializeEvent(3, 11020700, 1021653, 11020703);
    InitializeEvent(0, 11025200, 1020203, 1020203, 1082130432, 0);
    InitializeEvent(1, 11025200, 1020203, 1020204, 1082130432, 1063675494);
    InitializeEvent(2, 11025200, 1020205, 1020205, 1077936128, 0);
    InitializeEvent(3, 11025200, 1020205, 1020206, 1077936128, 1060320051);
    InitializeEvent(6, 11025200, 1020200, 1020200, 1093664768, 0);
    InitializeEvent(7, 11025200, 1020200, 1020201, 1093664768, 1069547520);
    InitializeEvent(8, 11025200, 1020202, 1020202, 1088421888, 0);
    InitializeEvent(9, 11025200, 1020202, 1020214, 1088421888, 1066192077);
    InitializeEvent(10, 11025200, 1020209, 1020209, 1093664768, 0);
    InitializeEvent(11, 11025200, 1020209, 1020210, 1093664768, 1061997773);
    InitializeEvent(12, 11025200, 1020209, 1020211, 1093664768, 1069547520);
    InitializeEvent(13, 11025200, 1020209, 1020212, 1093664768, 1074580685);
    InitializeEvent(14, 11025200, 1020213, 1020213, 1077936128, 0);
});

// ゲーム進行救済宝箱
Event(11020899, Default, function(X0_4, X4_4) {
    EndIfMultiplayerState(EventEndType.End, MultiplayerState.Client);
    SkipIfEventFlag(4, ON, TargetEventFlagType.EventFlag, 11020898);
    SetEventFlag(11020898, ON);
    ReproduceObjectAnimation(1021690, 0);
    SetObjactState(1021690, -1, Disabled);
    EndUnconditionally(EventEndType.End);
    WaitFixedTimeFrames(1);
    SkipIfEventFlag(20, OFF, TargetEventFlagType.EventFlag, 11025300);
    IfObjactEventFlag(MAIN, 11020704);
    WaitFixedTimeFrames(10);
    SetObjectTreasureState(1021700, Enabled);
    SetObjectTreasureState(1021701, Enabled);
    SetObjectTreasureState(1021702, Enabled);
    SetObjectTreasureState(1021703, Enabled);
    SetObjectTreasureState(1021704, Enabled);
    SetObjectTreasureState(1021705, Enabled);
    SetObjectTreasureState(1021706, Enabled);
    SetObjectTreasureState(1021707, Enabled);
    RerollObjectTreasure(1021700);
    RerollObjectTreasure(1021701);
    RerollObjectTreasure(1021702);
    RerollObjectTreasure(1021703);
    RerollObjectTreasure(1021704);
    RerollObjectTreasure(1021705);
    RerollObjectTreasure(1021706);
    RerollObjectTreasure(1021707);
    BatchSetEventFlags(X0_4, X4_4, ON);
    EndUnconditionally(EventEndType.End);
    ReproduceObjectAnimation(1021690, 0);
    SetObjactState(1021690, -1, Disabled);
});

// ゲーム進行救済宝箱 状態チェック_XX
Event(11020800, Default, function(X0_4, X4_4, X8_1, X12_4, X16_4) {
    EndIfMultiplayerState(EventEndType.End, MultiplayerState.Client);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, X0_4);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, X4_4);
    IfPlayerHasdoesntHaveItemIncludingBbox(AND_01, X8_1, X12_4, OwnershipState.DoesntOwn);
    SkipIfComparison(1, ComparisonType.NotEqual, 50000082, X0_4);
    IfPlayerHasdoesntHaveItemIncludingBbox(AND_01, ItemType.Goods, 201, OwnershipState.DoesntOwn);
    SkipIfComparison(1, ComparisonType.NotEqual, 8131, X0_4);
    IfPlayerHasdoesntHaveItemIncludingBbox(AND_01, ItemType.Goods, 203, OwnershipState.DoesntOwn);
    SkipIfComparison(1, ComparisonType.NotEqual, 8132, X0_4);
    IfPlayerHasdoesntHaveItemIncludingBbox(AND_01, ItemType.Goods, 205, OwnershipState.DoesntOwn);
    SkipIfComparison(1, ComparisonType.NotEqual, 8133, X0_4);
    IfPlayerHasdoesntHaveItemIncludingBbox(AND_01, ItemType.Goods, 207, OwnershipState.DoesntOwn);
    SkipIfComparison(1, ComparisonType.NotEqual, 8134, X0_4);
    IfPlayerHasdoesntHaveItemIncludingBbox(AND_01, ItemType.Goods, 209, OwnershipState.DoesntOwn);
    SkipIfComparison(1, ComparisonType.NotEqual, 8135, X0_4);
    IfPlayerHasdoesntHaveItemIncludingBbox(AND_01, ItemType.Goods, 211, OwnershipState.DoesntOwn);
    SkipIfComparison(1, ComparisonType.NotEqual, 8136, X0_4);
    IfPlayerHasdoesntHaveItemIncludingBbox(AND_01, ItemType.Goods, 213, OwnershipState.DoesntOwn);
    SkipIfComparison(1, ComparisonType.NotEqual, 8137, X0_4);
    IfPlayerHasdoesntHaveItemIncludingBbox(AND_01, ItemType.Goods, 215, OwnershipState.DoesntOwn);
    EndIfConditionGroupStateUncompiled(EventEndType.End, FAIL, AND_01);
    SetEventFlag(11025300, ON);
    IfObjactEventFlag(MAIN, 11020704);
    SetEventFlag(X16_4, OFF);
});

// プリコンストラクタ
Event(50, Default, function() {
    BatchSetEventFlags(50004000, 50004069, ON);
    InitializeEvent(0, 11020800, 51010140, 703, 3, 2001, 50004000);
    InitializeEvent(1, 11020800, 11017140, 703, 3, 2002, 50004001);
    InitializeEvent(2, 11020800, 51500150, 703, 3, 2003, 50004002);
    InitializeEvent(3, 11020800, 51700990, 703, 3, 2004, 50004003);
    InitializeEvent(4, 11020800, 51700630, 703, 3, 2005, 50004004);
    InitializeEvent(5, 11020800, 51700590, 703, 3, 2006, 50004005);
    InitializeEvent(6, 11020800, 50001500, 703, 3, 2007, 50004006);
    InitializeEvent(7, 11020800, 51400500, 703, 3, 2008, 50004007);
    InitializeEvent(8, 11020800, 51100140, 703, 3, 2009, 50004008);
    InitializeEvent(9, 11020800, 51810000, 703, 3, 2010, 50004009);
    InitializeEvent(10, 11020800, 50001660, 703, 3, 2011, 50004010);
    InitializeEvent(11, 11020800, 50000080, 703, 3, 2012, 50004011);
    InitializeEvent(12, 11020800, 50000100, 703, 3, 2013, 50004012);
    InitializeEvent(13, 11020800, 50001510, 703, 3, 2014, 50004013);
    InitializeEvent(14, 11020800, 11027030, 11027030, 3, 2015, 50004014);
    InitializeEvent(15, 11020800, 51020210, 703, 3, 2016, 50004015);
    InitializeEvent(16, 11020800, 51010000, 703, 3, 2017, 50004016);
    InitializeEvent(17, 11020800, 51000240, 703, 3, 2018, 50004017);
    InitializeEvent(18, 11020800, 51200140, 703, 3, 2019, 50004018);
    InitializeEvent(19, 11020800, 51700210, 703, 3, 2020, 50004019);
    InitializeEvent(20, 11020800, 11017030, 703, 3, 2021, 50004020);
    InitializeEvent(21, 11020800, 50001560, 11800201, 3, 2500, 50004021);
    InitializeEvent(22, 11020800, 50001580, 11800202, 3, 2501, 50004022);
    InitializeEvent(23, 11020800, 50001630, 11800203, 3, 2502, 50004023);
    InitializeEvent(24, 11020800, 50001640, 11800204, 3, 2503, 50004024);
    InitializeEvent(25, 11020800, 50000090, 11800100, 3, 2510, 50004025);
    InitializeEvent(26, 11020800, 50001540, 703, 2, 138, 50004026);
    InitializeEvent(27, 11020800, 50001670, 703, 2, 139, 50004027);
    InitializeEvent(28, 11020800, 50000000, 703, 3, 100, 50004028);
    InitializeEvent(29, 11020800, 51100330, 703, 3, 101, 50004029);
    InitializeEvent(30, 11020800, 50000390, 703, 3, 102, 50004030);
    InitializeEvent(31, 11020800, 200, 703, 3, 103, 50004031);
    InitializeEvent(32, 11020800, 11017020, 703, 3, 106, 50004032);
    InitializeEvent(33, 11020800, 11607020, 703, 3, 108, 50004033);
    InitializeEvent(34, 11020800, 11407080, 703, 3, 112, 50004034);
    InitializeEvent(35, 11020800, 50000360, 703, 3, 113, 50004035);
    InitializeEvent(36, 11020800, 50000260, 703, 3, 114, 50004036);
    InitializeEvent(37, 11020800, 200, 703, 3, 117, 50004037);
    InitializeEvent(38, 11020800, 50000082, 8131, 3, 200, 50004038);
    InitializeEvent(39, 11020800, 8131, 8132, 3, 202, 50004039);
    InitializeEvent(40, 11020800, 8132, 8133, 3, 204, 50004040);
    InitializeEvent(41, 11020800, 8133, 8134, 3, 206, 50004041);
    InitializeEvent(42, 11020800, 8134, 8135, 3, 208, 50004042);
    InitializeEvent(43, 11020800, 8135, 8136, 3, 210, 50004043);
    InitializeEvent(44, 11020800, 8136, 8137, 3, 212, 50004044);
    InitializeEvent(45, 11020800, 8137, 703, 3, 214, 50004045);
    InitializeEvent(46, 11020800, 51810080, 703, 3, 384, 50004046);
    InitializeEvent(47, 11020800, 11017150, 703, 3, 2600, 50004047);
    InitializeEvent(48, 11020800, 11017160, 703, 3, 2601, 50004048);
    InitializeEvent(49, 11020800, 11017170, 703, 3, 2602, 50004049);
    InitializeEvent(50, 11020800, 50001550, 703, 3, 2607, 50004050);
    InitializeEvent(51, 11020800, 11007010, 703, 3, 2608, 50004051);
    InitializeEvent(52, 11020800, 50000360, 703, 2, 102, 50004052);
    InitializeEvent(53, 11020800, 50000160, 703, 2, 103, 50004053);
    InitializeEvent(54, 11020800, 50000260, 703, 3, 377, 50004054);
    InitializeEvent(55, 11020800, 50000270, 703, 3, 378, 50004055);
    InitializeEvent(56, 11020800, 51000500, 350, 3, 800, 50004056);
    InitializeEvent(57, 11020800, 51600500, 351, 3, 801, 50004057);
    InitializeEvent(58, 11020800, 51700600, 352, 3, 802, 50004058);
    InitializeEvent(59, 11020800, 51700530, 356, 3, 806, 50004059);
    InitializeEvent(60, 11020800, 51200500, 357, 3, 807, 50004060);
    InitializeEvent(61, 11020800, 51200141, 358, 3, 808, 50004061);
    InitializeEvent(62, 11020800, 51310500, 359, 3, 809, 50004062);
    InitializeEvent(63, 11020800, 51100370, 360, 3, 810, 50004063);
    InitializeEvent(64, 11020800, 51410100, 362, 3, 812, 50004064);
    InitializeEvent(65, 11020800, 51410530, 363, 3, 813, 50004065);
    InitializeEvent(66, 11020800, 11007020, 703, 3, 2100, 50004066);
    InitializeEvent(67, 11020800, 51210981, 703, 3, 2022, 50004067);
    InitializeEvent(68, 11020800, 51700930, 703, 3, 2520, 50004068);
    InitializeEvent(69, 11020800, 50001200, 703, 3, 118, 50004069);
    InitializeEvent(0, 11020899, 50004000, 50004069);
    SetEventFlag(11020120, ON);
    SetEventFlag(61020120, ON);
    RegisterNPCHumanityEventValue(6031, 8334);
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 1092);
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 1096);
    ChangeCharacterEnableState(6031, Disabled);
    InitializeEvent(0, 11020510, 6031, 1096);
    InitializeEvent(0, 11020530, 6031, 1090, 1109, 1097);
    InitializeEvent(0, 11020550, 6031, 1090, 1109, 1092);
    InitializeEvent(0, 11020551, 6031, 1090, 1109, 1093);
    RegisterNPCHumanityEventValue(6041, 8342);
    SkipIfBatchEventFlags(1, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1112, 1114);
    ChangeCharacterEnableState(6041, Disabled);
    InitializeEvent(1, 11020510, 6041, 1114);
    InitializeEvent(1, 11020530, 6041, 1110, 1119, 1115);
    InitializeEvent(0, 11020552, 6041, 1110, 1119, 1112);
    InitializeEvent(0, 11020553, 6041, 1110, 1119, 1113);
    InitializeEvent(0, 11020554, 6041, 1110, 1119, 1117);
    InitializeEvent(0, 11020110, 0);
    InitializeEvent(0, 11020555, 6060, 1140, 1169, 1141);
    InitializeEvent(0, 11020556, 6060, 1140, 1169, 1146);
    InitializeEvent(0, 11020557, 6060, 1140, 1169, 1142);
    InitializeEvent(0, 11020558, 6060, 1140, 1169, 1145);
    RegisterNPCHumanityEventValue(6070, 8358);
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 1171);
    ChangeCharacterEnableState(6070, Disabled);
    InitializeEvent(0, 11020501, 0);
    InitializeEvent(0, 11020559, 0);
    InitializeEvent(0, 11020560, 0);
    InitializeEvent(2, 11020530, 6070, 1170, 1180, 1177);
    RegisterNPCHumanityEventValue(6080, 8366);
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 1192);
    SkipUnconditionally(1);
    ChangeCharacterEnableState(6080, Disabled);
    InitializeEvent(0, 11020564, 6080, 1190, 1209, 1193);
    InitializeEvent(0, 11020565, 6080, 1190, 1209, 1194);
    InitializeEvent(0, 11020502, 6080, 1197);
    InitializeEvent(0, 11020503, 6080, 1195);
    InitializeEvent(0, 11020569, 6080, 1190, 1209, 1198);
    InitializeEvent(0, 11020567, 6080, 1190, 1209, 1196);
    RegisterNPCHumanityEventValue(6090, 8374);
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 1211);
    ChangeCharacterEnableState(6090, Disabled);
    InitializeEvent(4, 11020530, 6090, 1210, 1219, 1214);
    RegisterNPCHumanityEventValue(6100, 8382);
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 1221);
    ChangeCharacterEnableState(6100, Disabled);
    InitializeEvent(5, 11020530, 6100, 1220, 1229, 1224);
    RegisterNPCHumanityEventValue(6131, 8390);
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 1252);
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 1253);
    ChangeCharacterEnableState(6131, Disabled);
    InitializeEvent(6, 11020510, 6131, 1253);
    InitializeEvent(6, 11020530, 6131, 1250, 1259, 1254);
    InitializeEvent(0, 11020574, 6131, 1250, 1259, 1252);
    InitializeEvent(0, 11020575, 6131, 1250, 1259, 1256);
    RegisterNPCHumanityEventValue(6181, 8406);
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 1314);
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 1313);
    ChangeCharacterEnableState(6181, Disabled);
    InitializeEvent(7, 11020510, 6181, 1314);
    InitializeEvent(7, 11020530, 6181, 1310, 1319, 1315);
    InitializeEvent(0, 11020576, 6181, 1310, 1319, 1313);
    InitializeEvent(8, 11020504, 6240, 1411);
    InitializeEvent(8, 11020530, 6240, 1410, 1413, 1412);
    RegisterNPCHumanityEventValue(6261, 8430);
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 1434);
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 1431);
    ChangeCharacterEnableState(6261, Disabled);
    InitializeEvent(9, 11020510, 6261, 1434);
    InitializeEvent(0, 11020413, 6261, 1435);
    InitializeEvent(0, 11020412, 6261, 1430, 1459, 1431);
    RegisterNPCHumanityEventValue(6270, 8438);
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 1464);
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 1462);
    SkipUnconditionally(1);
    ChangeCharacterEnableState(6270, Disabled);
    InitializeEvent(10, 11020510, 6270, 1461);
    InitializeEvent(10, 11020530, 6270, 1460, 1464, 1462);
    InitializeEvent(0, 11020577, 6270, 1460, 1464, 1464);
    RegisterNPCHumanityEventValue(6287, 8446);
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 1512);
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 1497);
    ChangeCharacterEnableState(6287, Disabled);
    InitializeEvent(11, 11020510, 6287, 1512);
    InitializeEvent(11, 11020530, 6287, 1490, 1514, 1513);
    InitializeEvent(0, 11020579, 6287, 1490, 1514, 1497);
    RegisterNPCHumanityEventValue(6292, 8454);
    SkipIfEventFlag(3, ON, TargetEventFlagType.EventFlag, 1547);
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 1545);
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 1543);
    ChangeCharacterEnableState(6292, Disabled);
    InitializeEvent(12, 11020510, 6292, 1547);
    InitializeEvent(12, 11020530, 6292, 1540, 1569, 1548);
    InitializeEvent(0, 11020583, 6292, 1540, 1569, 1543);
    InitializeEvent(0, 11020584, 6292, 1540, 1569, 1544);
    InitializeEvent(0, 11020585, 6292, 1540, 1569, 1545);
    InitializeEvent(0, 11020586, 6292);
    RegisterNPCHumanityEventValue(6301, 8462);
    SkipIfEventFlag(3, ON, TargetEventFlagType.EventFlag, 1572);
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 1574);
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 1577);
    ChangeCharacterEnableState(6301, Disabled);
    InitializeEvent(13, 11020510, 6301, 1574);
    InitializeEvent(13, 11020530, 6301, 1570, 1599, 1575);
    InitializeEvent(0, 11020587, 6301, 1570, 1599, 1572);
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 11020690);
    InitializeEvent(0, 11020588, 6301, 1570, 1599, 1573, 1572, 1577);
    InitializeEvent(0, 11020589, 6301, 1570, 1599, 1577);
    InitializeEvent(0, 11020410, 6301, 1570, 1599, 1578);
    RegisterNPCHumanityEventValue(6322, 8478);
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 1627);
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 1626);
    ChangeCharacterEnableState(6322, Disabled);
    InitializeEvent(14, 11020510, 6322, 1627);
    InitializeEvent(14, 11020530, 6322, 1620, 1629, 1628);
    InitializeEvent(0, 11020411, 6322, 1620, 1629, 1626);
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 15);
    ChangeCharacterEnableState(6330, Disabled);
    SkipIfEventFlag(14, ON, TargetEventFlagType.EventFlag, 15);
    SetCharacterImmortality(6330, Enabled);
    SetCharacterGravity(6330, Disabled);
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 1647);
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 1640);
    SkipUnconditionally(1);
    ChangeCharacterEnableState(6330, Disabled);
    InitializeEvent(0, 11020420, 6330, 1640, 1649, 1641);
    InitializeEvent(0, 11020421, 6330, 1640, 1649, 1642);
    InitializeEvent(0, 11020422, 6330, 1640, 1649, 1643);
    InitializeEvent(0, 11020423, 6330, 1640, 1649, 1644);
    InitializeEvent(0, 11020424, 6330, 1640, 1649, 1647);
    InitializeEvent(0, 11020425, 6330, 1640, 1649, 1647);
    InitializeEvent(0, 11026200, 0);
    InitializeEvent(0, 11026210, 0);
});

// 拠点エレベーター_初回起動
Event(11020300, Default, function() {
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventID, 0);
    InitializeEvent(0, 11020301, 0);
    EndUnconditionally(EventEndType.End);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventID, 0);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 1022003);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetEventFlag(11020300, ON);
    SetEventFlag(11020302, ON);
    ForceAnimationPlayback(1021000, 0, false, true, false);
    IfInoutsideArea(AND_02, InsideOutsideState.Outside, 10000, 1022001);
    IfInoutsideArea(AND_02, InsideOutsideState.Outside, 10000, 1022002);
    IfConditionGroup(MAIN, PASS, AND_02);
    ForceAnimationPlayback(1021000, 22, false, true, false);
    EndUnconditionally(EventEndType.Restart);
});

// 拠点エレベーター
Event(11020301, Default, function() {
    IfMultiplayerState(AND_01, MultiplayerState.Singleplayer);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 11020302);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 1022000);
    IfMultiplayerState(AND_02, MultiplayerState.Singleplayer);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 11020302);
    IfInoutsideArea(AND_02, InsideOutsideState.Inside, 10000, 1022001);
    IfMultiplayerState(AND_03, MultiplayerState.Singleplayer);
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 11020302);
    IfInoutsideArea(AND_03, InsideOutsideState.Inside, 10000, 1022002);
    IfMultiplayerState(AND_04, MultiplayerState.Singleplayer);
    IfEventFlag(AND_04, OFF, TargetEventFlagType.EventFlag, 11020302);
    IfInoutsideArea(AND_04, InsideOutsideState.Inside, 10000, 1022003);
    IfConditionGroup(OR_01, PASS, AND_01);
    IfConditionGroup(OR_01, PASS, AND_02);
    IfConditionGroup(OR_01, PASS, AND_03);
    IfConditionGroup(OR_01, PASS, AND_04);
    IfConditionGroup(MAIN, PASS, OR_01);
    WaitForNetworkApproval(3);
    SkipIfConditionGroupStateCompiled(8, PASS, AND_02);
    SkipIfConditionGroupStateCompiled(7, PASS, AND_03);
    SetEventFlag(11020302, ON);
    ForceAnimationPlayback(1021000, 2, false, true, false);
    IfInoutsideArea(AND_05, InsideOutsideState.Outside, 10000, 1022001);
    IfInoutsideArea(AND_05, InsideOutsideState.Outside, 10000, 1022002);
    IfConditionGroup(MAIN, PASS, AND_05);
    ForceAnimationPlayback(1021000, 22, false, true, false);
    EndUnconditionally(EventEndType.Restart);
    SetEventFlag(11020302, OFF);
    ForceAnimationPlayback(1021000, 1, false, true, false);
    IfInoutsideArea(AND_06, InsideOutsideState.Outside, 10000, 1022000);
    IfInoutsideArea(AND_06, InsideOutsideState.Outside, 10000, 1022003);
    IfConditionGroup(MAIN, PASS, AND_06);
    ForceAnimationPlayback(1021000, 21, false, true, false);
    EndUnconditionally(EventEndType.Restart);
});

// 大鴉が瀕死で飛び立つ
Event(11025050, Restart, function() {
    SetCharacterImmortality(1020100, Enabled);
    IfHPRatio(MAIN, 1020100, ComparisonType.LessOrEqual, 0.3);
    ForceAnimationPlayback(1020100, 7000, false, true, false);
    ChangeCharacterEnableState(1020100, Disabled);
});

// BGM 拠点
Event(11020001, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventID, 0);
    SkipIfPlayerInoutMap(2, true, 18, 1);
    IfPlayerInoutMap(MAIN, true, 10, 2);
    SetEventFlag(11810000, ON);
    SetCharacterBackreadState(6031, true);
    SetCharacterBackreadState(6041, true);
    SetCharacterBackreadState(6060, true);
    SetCharacterBackreadState(6070, true);
    SetCharacterBackreadState(6090, true);
    SetCharacterBackreadState(6100, true);
    SetCharacterBackreadState(6131, true);
    SetCharacterBackreadState(6181, true);
    SetCharacterBackreadState(6240, true);
    SetCharacterBackreadState(6261, true);
    SetCharacterBackreadState(6287, true);
    SetCharacterBackreadState(6292, true);
    SetCharacterBackreadState(6301, true);
    SetCharacterBackreadState(6322, true);
    SetCharacterBackreadState(6330, true);
    SetMapSoundState(1023800, Disabled);
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 11810000);
    SetMapSoundState(1023800, Enabled);
    SetEventFlag(11020001, ON);
    WaitFixedTimeSeconds(3);
    SetCharacterBackreadState(6031, false);
    SetCharacterBackreadState(6041, false);
    SetCharacterBackreadState(6060, false);
    SetCharacterBackreadState(6070, false);
    SetCharacterBackreadState(6090, false);
    SetCharacterBackreadState(6100, false);
    SetCharacterBackreadState(6131, false);
    SetCharacterBackreadState(6181, false);
    SetCharacterBackreadState(6240, false);
    SetCharacterBackreadState(6261, false);
    SetCharacterBackreadState(6287, false);
    SetCharacterBackreadState(6292, false);
    SetCharacterBackreadState(6301, false);
    SetCharacterBackreadState(6322, false);
    SetCharacterBackreadState(6330, false);
    SetEventFlag(200, ON);
});

// 起き上がるスケルトン_XX
Event(11025200, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventIDAndSlotNumber, 0);
    SetSpecialAnimations(X4_4, -1, -1, -1, -1, -1);
    EndUnconditionally(EventEndType.End);
    IfEntityInoutsideRadiusOfEntity(MAIN, InsideOutsideState.Inside, 10000, X0_4, X8_4);
    SetNetworkSyncState(Disabled);
    WaitFixedTimeSeconds(X12_4);
    SetSpecialAnimations(X4_4, -1, -1, 9061, -1, -1);
});

// カラスの巣でまるくなる
Event(11020020, Default, function() {
    IfActionButton(MAIN, TargetEntityType.Area, 1022120, 0, -1, 0, 10010506, ReactionType.HollowHuman, 0);
    SetSpecialAnimations(10000, 7816, -1, -1, -1, -1);
    ForceAnimationPlayback(10000, 7815, false, true, false);
    SetEventFlag(11025060, ON);
    WaitFixedTimeFrames(3);
    IfActionButton(AND_01, TargetEntityType.Area, 1022120, 0, -1, 0, 10010507, ReactionType.HollowHuman, 0);
    IfInoutsideArea(AND_02, InsideOutsideState.Outside, 10000, 1022120);
    IfConditionGroup(OR_01, PASS, AND_01);
    IfConditionGroup(OR_01, PASS, AND_02);
    IfConditionGroup(MAIN, PASS, OR_01);
    SetEventFlag(11025060, OFF);
    SetEventState(11020021, 0, EventEndType.Restart);
    SetSpecialAnimations(10000, -1, -1, -1, -1, -1);
    SkipIfConditionGroupStateCompiled(1, PASS, AND_02);
    ForceAnimationPlayback(10000, 7817, false, true, false);
    EndUnconditionally(EventEndType.Restart);
});

// カラスの巣でまるくなる 移動監視
Event(11020021, Default, function() {
    SetNetworkSyncState(Disabled);
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 11025060);
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 11020000);
    WaitFixedTimeSeconds(20);
    PlayCutsceneAndWarpPlayer(100230, CutscenePlayMode.Skippable, 1812110, 18, 1, 10000);
    PlayCutsceneToPlayer(180130, CutscenePlayMode.Skippable, 10000);
    WaitFixedTimeFrames(1);
    SetEventFlag(11020000, ON);
    SetEventFlag(11025060, OFF);
    SetSpecialAnimations(10000, -1, -1, -1, -1, -1);
    EndUnconditionally(EventEndType.Restart);
});

// 拠点の篝火差し替え
Event(11020105, Default, function() {
    SetObjectTreasureState(1021300, Disabled);
    DeactivateObject(1021961, Disabled);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 11020108);
    SkipIfEventFlag(5, ON, TargetEventFlagType.EventFlag, 11020101);
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 11020100);
    SetEventFlag(102, ON);
    SetObjectTreasureState(1021300, Enabled);
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 11020101);
    SetEventFlag(102, OFF);
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 11020108);
    RegisterBonfire(11020992, 1021960, 1, 180, 30);
});

// 拠点の篝火が使えない
Event(11020106, Default, function() {
    SetNetworkSyncState(Disabled);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11020100);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 11020101);
    IfActionButton(AND_01, TargetEntityType.Object, 1021960, 180, -1, 3.4, 10010182, ReactionType.HollowHuman, 0);
    IfConditionGroup(MAIN, PASS, AND_01);
    DisplayGenericDialog(10010184, PromptType.YESNO, NumberofOptions.NoButtons, 1021960, 3.4);
    EndUnconditionally(EventEndType.Restart);
});

// 拠点の篝火 火防女の祈り
Event(11020108, Default, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventID, 0);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 71020022);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 71020023);
    IfConditionGroup(MAIN, PASS, OR_01);
    EndUnconditionally(EventEndType.End);
});

// 拠点 扉開錠メッセージ_万能鍵ありXX
Event(11020120, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    SkipIfEventFlag(5, OFF, TargetEventFlagType.EventIDAndSlotNumber, 0);
    DeactivateObjactAssignIndex(X8_4, -1, 0, Disabled);
    DeactivateObjactAssignIndex(X8_4, -1, 1, Disabled);
    DeactivateObjactAssignIndex(X8_4, -1, 2, Disabled);
    DeactivateObjactAssignIndex(X8_4, -1, 3, Disabled);
    EndUnconditionally(EventEndType.End);
    IfMultiplayerState(AND_01, MultiplayerState.Host);
    IfObjactEventFlag(AND_01, X0_4);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetEventFlag(X0_4, ON);
    SkipIfMultiplayerState(5, MultiplayerState.Client);
    IfPlayerHasdoesntHaveItem(AND_01, ItemType.Goods, X16_4, OwnershipState.Owns);
    SkipIfConditionGroupStateUncompiled(2, PASS, AND_01);
    DisplayGenericDialog(X12_4, PromptType.YESNO, NumberofOptions.NoButtons, X8_4, 3);
    SkipUnconditionally(1);
    DisplayGenericDialog(X4_4, PromptType.YESNO, NumberofOptions.NoButtons, X8_4, 3);
    SetNetworkSyncState(Disabled);
    WaitFixedTimeSeconds(2);
    DeactivateObjactAssignIndex(X8_4, -1, 0, Disabled);
    DeactivateObjactAssignIndex(X8_4, -1, 1, Disabled);
    DeactivateObjactAssignIndex(X8_4, -1, 2, Disabled);
    DeactivateObjactAssignIndex(X8_4, -1, 3, Disabled);
});

// 大墓へ続く扉
Event(11020350, Default, function() {
    SkipIfEventFlag(7, ON, TargetEventFlagType.EventID, 0);
    DeactivateObject(1021481, Disabled);
    ActivateHit(1023510, Disabled);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11010700);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11400200);
    IfConditionGroup(MAIN, PASS, AND_01);
    DeactivateObject(1021481, Enabled);
    ActivateHit(1023510, Enabled);
    DeactivateObject(1021480, Disabled);
    ActivateHit(1023500, Disabled);
    ActivateMapPart(1023501, Disabled);
    ActivateHit(1023502, Disabled);
});

// 大墓へ続く穴
Event(11020351, Default, function() {
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 0);
    ActivateHit(0, Disabled);
    ActivateHit(0, Disabled);
    IfInoutsideArea(MAIN, InsideOutsideState.Inside, 10000, 1022111);
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 710);
    ForceCharacterDeath(10000, false);
    EndUnconditionally(EventEndType.End);
    PlayCutsceneAndWarpPlayer(180060, CutscenePlayMode.Skippable, 1802110, 18, 0, 10000);
    WaitFixedTimeFrames(1);
    EndUnconditionally(EventEndType.Restart);
});

// 大墓へ続く穴 ヒット切替
Event(11020352, Default, function() {
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 710);
    ActivateHit(1023600, Disabled);
    ActivateHit(1023601, Disabled);
});

// 拠点 宝箱XX
Event(11020700, Default, function(X0_4, X4_4) {
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

// 敵が行けない場所AIリクエスト
Event(11025150, Restart, function() {
    IfInoutsideArea(MAIN, InsideOutsideState.Inside, 10000, 1022710);
    RequestCharacterAICommand(1020190, 1, 3);
    RequestCharacterAICommand(1020160, 1, 3);
    RequestCharacterAICommand(1020161, 1, 3);
    RequestCharacterAICommand(1020163, 1, 3);
    RequestCharacterAICommand(1020165, 1, 3);
    RequestCharacterAICommand(1020166, 1, 3);
    RequestCharacterAIReplan(1020190);
    RequestCharacterAIReplan(1020160);
    RequestCharacterAIReplan(1020161);
    RequestCharacterAIReplan(1020163);
    RequestCharacterAIReplan(1020165);
    RequestCharacterAIReplan(1020166);
    IfInoutsideArea(MAIN, InsideOutsideState.Outside, 10000, 1022710);
    RequestCharacterAICommand(1020190, -1, 3);
    RequestCharacterAICommand(1020160, -1, 3);
    RequestCharacterAICommand(1020161, -1, 3);
    RequestCharacterAICommand(1020163, -1, 3);
    RequestCharacterAICommand(1020165, -1, 3);
    RequestCharacterAICommand(1020166, -1, 3);
    RequestCharacterAIReplan(1020190);
    RequestCharacterAIReplan(1020160);
    RequestCharacterAIReplan(1020161);
    RequestCharacterAIReplan(1020163);
    RequestCharacterAIReplan(1020165);
    RequestCharacterAIReplan(1020166);
    EndUnconditionally(EventEndType.Restart);
});

// NPC敵対（拠点）
Event(11020510, Default, function(X0_4, X4_4) {
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
    SetCharacterTeamType(X0_4, TeamType.HostileAlly);
    SaveRequest(0);
});

// NPC死亡（拠点）
Event(11020530, Default, function(X0_4, X4_4, X8_4, X12_4) {
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventIDAndSlotNumber, 0);
    ForceCharacterTreasure(X0_4);
    EndUnconditionally(EventEndType.End);
    IfHPRatio(AND_01, X0_4, ComparisonType.LessOrEqual, 0);
    IfInoutsideArea(AND_02, InsideOutsideState.Inside, X0_4, 1022300);
    IfConditionGroup(OR_01, PASS, AND_01);
    IfConditionGroup(OR_01, PASS, AND_02);
    IfConditionGroup(MAIN, PASS, OR_01);
    SkipIfConditionGroupStateCompiled(2, PASS, AND_01);
    ForceCharacterDeath(X0_4, true);
    SetCharacterGravity(X0_4, Disabled);
    BatchSetEventFlags(X4_4, X8_4, OFF);
    SetEventFlag(X12_4, ON);
});

// 白の御一行 敵対
Event(11020501, Default, function() {
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11010902);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 11020693);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 1176);
    IfBatchEventFlags(AND_01, LogicalOperationType.AllOFF, TargetEventFlagType.EventFlag, 1193, 1196);
    IfHPRatio(AND_02, 6070, ComparisonType.LessOrEqual, 0.9);
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 1177);
    IfCharacterDamagedBy(AND_02, 6070, 10000);
    IfHPRatio(AND_03, 6080, ComparisonType.LessOrEqual, 0.9);
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 1198);
    IfCharacterDamagedBy(AND_03, 6080, 10000);
    IfHPRatio(AND_04, 6090, ComparisonType.LessOrEqual, 0.9);
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 1214);
    IfCharacterDamagedBy(AND_04, 6090, 10000);
    IfHPRatio(AND_05, 6100, ComparisonType.LessOrEqual, 0.9);
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 1224);
    IfCharacterDamagedBy(AND_05, 6100, 10000);
    IfEventFlag(AND_06, ON, TargetEventFlagType.EventFlag, 1197);
    IfConditionGroup(OR_01, PASS, AND_02);
    IfConditionGroup(OR_01, PASS, AND_03);
    IfConditionGroup(OR_01, PASS, AND_04);
    IfConditionGroup(OR_01, PASS, AND_05);
    IfConditionGroup(OR_01, PASS, AND_06);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfEventFlag(AND_07, ON, TargetEventFlagType.EventID, 0);
    IfConditionGroup(OR_02, PASS, AND_01);
    IfConditionGroup(OR_02, PASS, AND_07);
    IfConditionGroup(MAIN, PASS, OR_02);
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 1177);
    SetEventFlag(1176, ON);
    ChangeCharacterEnableState(6070, Enabled);
    SetCharacterTeamType(6070, TeamType.HostileAlly);
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 1198);
    SetEventFlag(1197, ON);
    ChangeCharacterEnableState(6080, Enabled);
    SetCharacterTeamType(6080, TeamType.HostileAlly);
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 1214);
    SetEventFlag(1213, ON);
    ChangeCharacterEnableState(6090, Enabled);
    SetCharacterTeamType(6090, TeamType.HostileAlly);
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 1224);
    SetEventFlag(1223, ON);
    ChangeCharacterEnableState(6100, Enabled);
    SetCharacterTeamType(6100, TeamType.HostileAlly);
    SaveRequest(0);
});

// 聖女の騎士A 敵対
Event(11020502, Default, function(X0_4, X4_4) {
    IfEventFlag(AND_07, OFF, TargetEventFlagType.EventFlag, 11010902);
    IfEventFlag(AND_07, OFF, TargetEventFlagType.EventFlag, 1195);
    IfEventFlag(AND_07, OFF, TargetEventFlagType.EventFlag, 1197);
    IfEventFlag(AND_07, ON, TargetEventFlagType.EventFlag, 1202);
    IfEventFlag(AND_06, ON, TargetEventFlagType.EventFlag, 11010902);
    IfEventFlag(AND_06, OFF, TargetEventFlagType.EventFlag, 1195);
    IfEventFlag(AND_06, OFF, TargetEventFlagType.EventFlag, 1197);
    IfEventFlag(AND_06, ON, TargetEventFlagType.EventFlag, 1193);
    IfConditionGroup(OR_02, PASS, AND_07);
    IfConditionGroup(OR_02, PASS, AND_06);
    IfConditionGroup(AND_01, PASS, OR_02);
    IfHPRatio(AND_01, X0_4, ComparisonType.LessOrEqual, 0.9);
    IfHPRatio(AND_01, X0_4, ComparisonType.Greater, 0);
    IfCharacterDamagedBy(AND_01, X0_4, 10000);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventID, 0);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, X4_4);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventID, 0);
    IfConditionGroup(OR_01, PASS, AND_01);
    IfConditionGroup(OR_01, PASS, AND_02);
    IfConditionGroup(MAIN, PASS, OR_01);
    SetEventFlag(X4_4, ON);
    SetCharacterTeamType(X0_4, TeamType.HostileAlly);
    SaveRequest(0);
});

// 聖女の騎士A 敵対（本性だし）
Event(11020503, Default, function(X0_4, X4_4) {
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 1197);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1194);
    IfHPRatio(AND_01, X0_4, ComparisonType.LessOrEqual, 0.9);
    IfHPRatio(AND_01, X0_4, ComparisonType.Greater, 0);
    IfCharacterDamagedBy(AND_01, X0_4, 10000);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, X4_4);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventID, 0);
    IfConditionGroup(OR_01, PASS, AND_01);
    IfConditionGroup(OR_01, PASS, AND_02);
    IfConditionGroup(MAIN, PASS, OR_01);
    SetEventFlag(X4_4, ON);
    SetCharacterTeamType(X0_4, TeamType.HostileAlly);
    SaveRequest(0);
});

// 苔商人 専用敵対（拠点）
Event(11020504, Default, function(X0_4, X4_4) {
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 1411);
    IfHPRatio(AND_01, X0_4, ComparisonType.LessOrEqual, 0.9);
    IfHPRatio(AND_01, X0_4, ComparisonType.Greater, 0);
    IfCharacterDamagedBy(AND_01, X0_4, 10000);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, X4_4);
    IfConditionGroup(OR_01, PASS, AND_01);
    IfConditionGroup(OR_01, PASS, AND_02);
    IfConditionGroup(MAIN, PASS, OR_01);
    SkipIfConditionGroupStateCompiled(3, PASS, AND_01);
    IssueShortWarpRequest(X0_4, TargetEntityType.Area, 1022700, -1);
    SetCharacterHome(X0_4, 1022700);
    EndUnconditionally(EventEndType.End);
    SetCharacterTeamType(X0_4, TeamType.Enemy);
    SetCharacterHome(X0_4, 1022700);
    RequestCharacterAICommand(X0_4, 1, 0);
    RequestCharacterAIReplan(X0_4);
    IfInoutsideArea(MAIN, InsideOutsideState.Inside, X0_4, 1022700);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    SetEventFlag(X4_4, ON);
});

// ロガーン 魔法を教えたい（拠点）
Event(11020550, Default, function(X0_4, X4_4, X8_4, X12_4) {
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 1096);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 1099);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1091);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11500594);
    IfConditionGroup(MAIN, PASS, AND_01);
    BatchSetEventFlags(X4_4, X8_4, OFF);
    SetEventFlag(X12_4, ON);
    ChangeCharacterEnableState(X0_4, Enabled);
});

// ロガーン 脱出したい（結晶塔）
Event(11020551, Default, function(X0_4, X4_4, X8_4, X12_4) {
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 1096);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 1099);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1092);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11020603);
    IfPlayerInoutMap(AND_01, false, 10, 2);
    IfConditionGroup(MAIN, PASS, AND_01);
    BatchSetEventFlags(X4_4, X8_4, OFF);
    SetEventFlag(X12_4, ON);
    SetEventFlag(11020694, ON);
    ChangeCharacterEnableState(X0_4, Disabled);
});

// ロガーン弟子 魔法を教えたい（下位）
Event(11020552, Default, function(X0_4, X4_4, X8_4, X12_4) {
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 1114);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 1117);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1111);
    IfPlayerInoutMap(AND_01, true, 10, 2);
    IfConditionGroup(MAIN, PASS, AND_01);
    BatchSetEventFlags(X4_4, X8_4, OFF);
    SetEventFlag(X12_4, ON);
    ChangeCharacterEnableState(X0_4, Enabled);
});

// ロガーン弟子 魔法を教えたい（上位）
Event(11020553, Default, function(X0_4, X4_4, X8_4, X12_4) {
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 1114);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 1117);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1112);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11020694);
    IfConditionGroup(MAIN, PASS, AND_01);
    BatchSetEventFlags(X4_4, X8_4, OFF);
    SetEventFlag(X12_4, ON);
    ChangeCharacterEnableState(X0_4, Enabled);
});

// ロガーン弟子 敵対（亡者）
Event(11020554, Default, function(X0_4, X4_4, X8_4, X12_4) {
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 1114);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 1117);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1113);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 723);
    IfPlayerInoutMap(AND_01, true, 15, 0);
    EndIfConditionGroupStateUncompiled(EventEndType.End, FAIL, AND_01);
    BatchSetEventFlags(X4_4, X8_4, OFF);
    SetEventFlag(X12_4, ON);
    ChangeCharacterEnableState(X0_4, Disabled);
});

// 灰色の聖女 人間性喪失
Event(11020555, Default, function(X0_4, X4_4, X8_4, X12_4) {
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1140);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 1574);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 1575);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 812);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 813);
    IfConditionGroup(OR_01, PASS, AND_02);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 11500200);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfCharacterDeadalive(AND_01, X0_4, DeathState.Alive);
    IfConditionGroup(MAIN, PASS, AND_01);
    BatchSetEventFlags(X4_4, X8_4, OFF);
    SetEventFlag(X12_4, ON);
});

// 灰色の聖女 待っている
Event(11020556, Default, function(X0_4, X4_4, X8_4, X12_4) {
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1141);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 810);
    IfCharacterDeadalive(AND_01, X0_4, DeathState.Alive);
    IfConditionGroup(MAIN, PASS, AND_01);
    BatchSetEventFlags(X4_4, X8_4, OFF);
    SetEventFlag(X12_4, ON);
});

// 灰色の聖女 話したい
Event(11020557, Default, function(X0_4, X4_4, X8_4, X12_4) {
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1146);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11020609);
    IfCharacterDeadalive(AND_01, X0_4, DeathState.Alive);
    IfConditionGroup(MAIN, PASS, AND_01);
    BatchSetEventFlags(X4_4, X8_4, OFF);
    SetEventFlag(X12_4, ON);
});

// 灰色の聖女 頑張って
Event(11020558, Default, function(X0_4, X4_4, X8_4, X12_4) {
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1142);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11800200);
    IfCharacterDeadalive(AND_01, X0_4, DeathState.Alive);
    IfConditionGroup(MAIN, PASS, AND_01);
    BatchSetEventFlags(X4_4, X8_4, OFF);
    SetEventFlag(X12_4, ON);
});

// 白の御一行 到着
Event(11020559, Default, function() {
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1170);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11010902);
    IfConditionGroup(MAIN, PASS, AND_01);
    BatchSetEventFlags(1170, 1189, OFF);
    SetEventFlag(1171, ON);
    ChangeCharacterEnableState(6070, Enabled);
    BatchSetEventFlags(1210, 1219, OFF);
    SetEventFlag(1211, ON);
    ChangeCharacterEnableState(6090, Enabled);
    BatchSetEventFlags(1220, 1229, OFF);
    SetEventFlag(1221, ON);
    ChangeCharacterEnableState(6100, Enabled);
});

// 白の御一行 旅立つ
Event(11020560, Default, function() {
    IfBatchEventFlags(AND_07, LogicalOperationType.AllOFF, TargetEventFlagType.EventFlag, 1176, 1181);
    IfEventFlag(AND_07, ON, TargetEventFlagType.EventFlag, 1171);
    IfBatchEventFlags(AND_07, LogicalOperationType.AllOFF, TargetEventFlagType.EventFlag, 1195, 1198);
    IfEventFlag(AND_07, ON, TargetEventFlagType.EventFlag, 1202);
    IfBatchEventFlags(AND_07, LogicalOperationType.AllOFF, TargetEventFlagType.EventFlag, 1213, 1215);
    IfEventFlag(AND_07, ON, TargetEventFlagType.EventFlag, 1211);
    IfBatchEventFlags(AND_07, LogicalOperationType.AllOFF, TargetEventFlagType.EventFlag, 1223, 1225);
    IfEventFlag(AND_07, ON, TargetEventFlagType.EventFlag, 1221);
    IfConditionGroup(AND_01, PASS, AND_07);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11020600);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventID, 0);
    IfConditionGroup(AND_02, PASS, AND_07);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 11300005);
    IfConditionGroup(AND_03, PASS, AND_07);
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventID, 0);
    IfConditionGroup(OR_01, PASS, AND_01);
    IfConditionGroup(OR_01, PASS, AND_02);
    IfConditionGroup(OR_01, PASS, AND_03);
    IfConditionGroup(MAIN, PASS, OR_01);
    EndIfConditionGroupStateCompiled(EventEndType.End, PASS, AND_01);
    ClearEventValue(600, 4);
    SetEventFlag(11020693, ON);
    BatchSetEventFlags(1170, 1189, OFF);
    SetEventFlag(1173, ON);
    ChangeCharacterEnableState(6070, Disabled);
    BatchSetEventFlags(1190, 1209, OFF);
    SetEventFlag(1192, ON);
    ChangeCharacterEnableState(6080, Disabled);
    BatchSetEventFlags(1210, 1219, OFF);
    SetEventFlag(1216, ON);
    ChangeCharacterEnableState(6090, Disabled);
    BatchSetEventFlags(1220, 1229, OFF);
    SetEventFlag(1226, ON);
    ChangeCharacterEnableState(6100, Disabled);
});

// 聖女の騎士A 逃げてきた
Event(11020564, Default, function(X0_4, X4_4, X8_4, X12_4) {
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 1195);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 1197);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1192);
    EndIfConditionGroupStateUncompiled(EventEndType.End, FAIL, AND_01);
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 11020692);
    SetEventFlag(11020692, ON);
    EndUnconditionally(EventEndType.End);
    BatchSetEventFlags(X4_4, X8_4, OFF);
    SetEventFlag(X12_4, ON);
    ChangeCharacterEnableState(X0_4, Enabled);
});

// 聖女の騎士A 本性だした
Event(11020565, Default, function(X0_4, X4_4, X8_4, X12_4) {
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 1195);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 1197);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1193);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11020608);
    IfConditionGroup(MAIN, PASS, AND_01);
    BatchSetEventFlags(X4_4, X8_4, OFF);
    SetEventFlag(X12_4, ON);
    ChangeCharacterEnableState(X0_4, Enabled);
});

// 聖女の騎士A 死亡（本性だし）
Event(11020567, Default, function(X0_4, X4_4, X8_4, X12_4) {
    IfEventFlag(OR_02, ON, TargetEventFlagType.EventFlag, 1194);
    IfEventFlag(OR_02, ON, TargetEventFlagType.EventFlag, 1195);
    IfConditionGroup(AND_01, PASS, OR_02);
    IfHPRatio(AND_01, X0_4, ComparisonType.LessOrEqual, 0);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 1196);
    IfConditionGroup(OR_01, PASS, AND_01);
    IfConditionGroup(OR_01, PASS, AND_02);
    IfConditionGroup(MAIN, PASS, OR_01);
    BatchSetEventFlags(X4_4, X8_4, OFF);
    SetEventFlag(X12_4, ON);
    EndIfConditionGroupStateCompiled(EventEndType.End, PASS, AND_01);
    ForceCharacterTreasure(X0_4);
});

// 聖女の騎士A 死亡
Event(11020569, Default, function(X0_4, X4_4, X8_4, X12_4) {
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 1194);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 1195);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 1196);
    IfHPRatio(AND_01, X0_4, ComparisonType.LessOrEqual, 0);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 1198);
    IfConditionGroup(OR_01, PASS, AND_01);
    IfConditionGroup(OR_01, PASS, AND_02);
    IfConditionGroup(MAIN, PASS, OR_01);
    BatchSetEventFlags(X4_4, X8_4, OFF);
    SetEventFlag(X12_4, ON);
    EndIfConditionGroupStateCompiled(EventEndType.End, PASS, AND_01);
    ForceCharacterTreasure(X0_4);
});

// 壷の呪術師 呪術を教えたい
Event(11020574, Default, function(X0_4, X4_4, X8_4, X12_4) {
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 1253);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1251);
    IfPlayerInoutMap(AND_01, true, 10, 2);
    IfConditionGroup(MAIN, PASS, AND_01);
    BatchSetEventFlags(X4_4, X8_4, OFF);
    SetEventFlag(X12_4, ON);
    ChangeCharacterEnableState(X0_4, Enabled);
});

// 壷の呪術師 クラグを見つける
Event(11020575, Default, function(X0_4, X4_4, X8_4, X12_4) {
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 1253);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1252);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11020102);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11020103);
    IfCharacterDeadalive(AND_01, X0_4, DeathState.Alive);
    IfConditionGroup(MAIN, PASS, AND_01);
    BatchSetEventFlags(X4_4, X8_4, OFF);
    SetEventFlag(X12_4, ON);
});

// 癒し手 癒したい（拠点）
Event(11020576, Default, function(X0_4, X4_4, X8_4, X12_4) {
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 1314);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1312);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11600593);
    IfPlayerInoutMap(AND_01, true, 10, 2);
    IfConditionGroup(MAIN, PASS, AND_01);
    BatchSetEventFlags(X4_4, X8_4, OFF);
    SetEventFlag(X12_4, ON);
    ChangeCharacterEnableState(X0_4, Enabled);
});

// 心折れた戦士　亡者になる
Event(11020577, Default, function(X0_4, X4_4, X8_4, X12_4) {
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 1461);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 1464);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1460);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11020597);
    IfPlayerInoutMap(AND_01, false, 10, 2);
    IfConditionGroup(MAIN, PASS, AND_01);
    BatchSetEventFlags(X4_4, X8_4, OFF);
    SetEventFlag(X12_4, ON);
    ChangeCharacterEnableState(X0_4, Disabled);
});

// たまねぎ騎士 王城ルートクリア
Event(11020579, Default, function(X0_4, X4_4, X8_4, X12_4) {
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 1512);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1494);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11510590);
    IfConditionGroup(MAIN, PASS, AND_01);
    BatchSetEventFlags(X4_4, X8_4, OFF);
    SetEventFlag(X12_4, ON);
    ChangeCharacterEnableState(X0_4, Enabled);
});

// たまねぎ騎士の娘 父に会えない
Event(11020583, Default, function(X0_4, X4_4, X8_4, X12_4) {
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 1547);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1542);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11700593);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 1512);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 1513);
    IfConditionGroup(MAIN, PASS, AND_01);
    BatchSetEventFlags(X4_4, X8_4, OFF);
    SetEventFlag(X12_4, ON);
    ChangeCharacterEnableState(X0_4, Enabled);
});

// たまねぎ騎士の娘 父を捜索中
Event(11020584, Default, function(X0_4, X4_4, X8_4, X12_4) {
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 1547);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1543);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11020605);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventID, 0);
    IfEventFlag(AND_02, OFF, TargetEventFlagType.EventFlag, 1547);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 1543);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventID, 0);
    IfConditionGroup(OR_01, PASS, AND_01);
    IfConditionGroup(OR_01, PASS, AND_02);
    IfConditionGroup(MAIN, PASS, OR_01);
    EndIfConditionGroupStateCompiled(EventEndType.End, PASS, AND_01);
    BatchSetEventFlags(X4_4, X8_4, OFF);
    SetEventFlag(X12_4, ON);
    ChangeCharacterEnableState(X0_4, Disabled);
});

// たまねぎ騎士の娘 父に会えた
Event(11020585, Default, function(X0_4, X4_4, X8_4, X12_4) {
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 1547);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1544);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11410593);
    IfConditionGroup(MAIN, PASS, AND_01);
    BatchSetEventFlags(X4_4, X8_4, OFF);
    SetEventFlag(X12_4, ON);
    ChangeCharacterEnableState(X0_4, Enabled);
});

// たまねぎ騎士の娘 父を殺した（拠点離れ）
Event(11020586, Default, function(X0_4) {
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 1547);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1545);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11020606);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventID, 0);
    IfEventFlag(AND_02, OFF, TargetEventFlagType.EventFlag, 1547);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 1545);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventID, 0);
    IfConditionGroup(OR_01, PASS, AND_01);
    IfConditionGroup(OR_01, PASS, AND_02);
    IfConditionGroup(MAIN, PASS, OR_01);
    EndIfConditionGroupStateCompiled(EventEndType.End, PASS, AND_01);
    ChangeCharacterEnableState(X0_4, Disabled);
});

// 抱かれ騎士ロートレク ターゲットを探している
Event(11020587, Default, function(X0_4, X4_4, X8_4, X12_4) {
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 1574);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 1578);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1571);
    IfPlayerInoutMap(AND_01, true, 10, 2);
    IfConditionGroup(MAIN, PASS, AND_01);
    BatchSetEventFlags(X4_4, X8_4, OFF);
    SetEventFlag(X12_4, ON);
    ChangeCharacterEnableState(X0_4, Enabled);
    SetEventFlag(11020690, ON);
    SetEventFlag(11020691, ON);
});

// 抱かれ騎士ロートレク おでかけ
Event(11020588, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 1574);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 1578);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1572);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 1574);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 1578);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 1577);
    IfEventFlag(AND_03, OFF, TargetEventFlagType.EventFlag, 1574);
    IfEventFlag(AND_03, OFF, TargetEventFlagType.EventFlag, 1578);
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 1573);
    IfConditionGroup(OR_01, PASS, AND_01);
    IfConditionGroup(OR_01, PASS, AND_02);
    IfConditionGroup(OR_01, PASS, AND_03);
    IfConditionGroup(MAIN, PASS, OR_01);
    SkipIfConditionGroupStateCompiled(6, PASS, AND_03);
    RandomlySetEventFlagInRange(11025120, 11025122, ON);
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 11025120);
    BatchSetEventFlags(X4_4, X8_4, OFF);
    SetEventFlag(X12_4, ON);
    ChangeCharacterEnableState(X0_4, Disabled);
    EndUnconditionally(EventEndType.End);
    SkipIfEventFlag(4, OFF, TargetEventFlagType.EventFlag, 11020691);
    BatchSetEventFlags(X4_4, X8_4, OFF);
    SetEventFlag(X16_4, ON);
    ChangeCharacterEnableState(X0_4, Enabled);
    EndUnconditionally(EventEndType.End);
    BatchSetEventFlags(X4_4, X8_4, OFF);
    SetEventFlag(X20_4, ON);
    ChangeCharacterEnableState(X0_4, Enabled);
});

// 抱かれ騎士ロートレク 助けなかった
Event(11020589, Default, function(X0_4, X4_4, X8_4, X12_4) {
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 1574);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 1578);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 1570);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 1577);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 3);
    IfPlayerInoutMap(AND_01, true, 10, 2);
    IfConditionGroup(MAIN, PASS, AND_01);
    BatchSetEventFlags(X4_4, X8_4, OFF);
    SetEventFlag(X12_4, ON);
    ChangeCharacterEnableState(X0_4, Enabled);
    SetEventFlag(11020690, ON);
});

// 抱かれ騎士ロートレク 敵対（拠点離れ）
Event(11020410, Default, function(X0_4, X4_4, X8_4, X12_4) {
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 1574);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 1578);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 1572);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 1573);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 1577);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 812);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 813);
    IfConditionGroup(OR_02, PASS, AND_02);
    IfEventFlag(OR_02, ON, TargetEventFlagType.EventFlag, 11500200);
    IfConditionGroup(AND_01, PASS, OR_02);
    IfConditionGroup(MAIN, PASS, AND_01);
    BatchSetEventFlags(X4_4, X8_4, OFF);
    SetEventFlag(X12_4, ON);
    ChangeCharacterEnableState(X0_4, Disabled);
});

// パッチ 売りたい（拠点）
Event(11020411, Default, function(X0_4, X4_4, X8_4, X12_4) {
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 1622);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 1625);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 1627);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 1628);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1624);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 7);
    IfPlayerInoutMap(AND_01, true, 10, 2);
    IfConditionGroup(MAIN, PASS, AND_01);
    BatchSetEventFlags(X4_4, X8_4, OFF);
    SetEventFlag(X12_4, ON);
    ChangeCharacterEnableState(X0_4, Enabled);
});

// トリックスター 売りたい（拠点）
Event(11020412, Default, function(X0_4, X4_4, X8_4, X12_4) {
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 1434);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 1435);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1430);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11010700);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11400200);
    IfConditionGroup(MAIN, PASS, AND_01);
    BatchSetEventFlags(X4_4, X8_4, OFF);
    SetEventFlag(X12_4, ON);
    ChangeCharacterEnableState(X0_4, Enabled);
});

// トリックスター 死亡（拠点）
Event(11020413, Default, function(X0_4, X4_4) {
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventID, 0);
    ForceCharacterTreasure(X0_4);
    EndUnconditionally(EventEndType.End);
    IfHPRatio(MAIN, X0_4, ComparisonType.LessOrEqual, 0);
    SetEventFlag(1434, OFF);
    SetEventFlag(X4_4, ON);
});

// 王の探索者 起きそう
Event(11020420, Default, function(X0_4, X4_4, X8_4, X12_4) {
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1640);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11010700);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 1640);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 11400200);
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 1641);
    IfConditionGroup(OR_01, PASS, AND_01);
    IfConditionGroup(OR_01, PASS, AND_02);
    IfConditionGroup(OR_01, PASS, AND_03);
    IfConditionGroup(MAIN, PASS, OR_01);
    BatchSetEventFlags(X4_4, X8_4, OFF);
    SetEventFlag(X12_4, ON);
    ChangeCharacterEnableState(X0_4, Enabled);
    SetSpecialAnimations(X0_4, 9000, -1, -1, -1, -1);
});

// 王の探索者 使命を与えたい1
Event(11020421, Default, function(X0_4, X4_4, X8_4, X12_4) {
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1641);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11010700);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11400200);
    IfConditionGroup(MAIN, PASS, AND_01);
    BatchSetEventFlags(X4_4, X8_4, OFF);
    SetEventFlag(X12_4, ON);
    ChangeCharacterEnableState(X0_4, Enabled);
    SetSpecialAnimations(X0_4, 7003, -1, -1, -1, -1);
});

// 王の探索者 王の器を置きたい
Event(11020422, Default, function(X0_4, X4_4, X8_4, X12_4) {
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1642);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 710);
    IfCharacterDeadalive(AND_01, X0_4, DeathState.Alive);
    IfConditionGroup(MAIN, PASS, AND_01);
    BatchSetEventFlags(X4_4, X8_4, OFF);
    SetEventFlag(X12_4, ON);
});

// 王の探索者 使命を与えたい2（拠点）
Event(11020423, Default, function(X0_4, X4_4, X8_4, X12_4) {
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1643);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 820);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11800100);
    IfCharacterDeadalive(AND_01, X0_4, DeathState.Alive);
    IfConditionGroup(MAIN, PASS, AND_01);
    BatchSetEventFlags(X4_4, X8_4, OFF);
    SetEventFlag(X12_4, ON);
});

// 王の探索者 嘆かわしくていなくなる（拠点）
Event(11020424, Default, function(X0_4, X4_4, X8_4, X12_4) {
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1649);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11020598);
    IfConditionGroup(MAIN, PASS, AND_01);
    BatchSetEventFlags(X4_4, X8_4, OFF);
    SetEventFlag(X12_4, ON);
    ForceAnimationPlayback(X0_4, 7005, false, true, false);
    ChangeCharacterEnableState(X0_4, Disabled);
});

// 王の探索者 敵対でいなくなる（拠点）
Event(11020425, Default, function(X0_4, X4_4, X8_4, X12_4) {
    IfPlayerInoutMap(AND_01, true, 10, 2);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 11020598);
    IfHPRatio(AND_02, X0_4, ComparisonType.LessOrEqual, 0.9);
    IfHPRatio(AND_02, X0_4, ComparisonType.Greater, 0);
    IfCharacterDamagedBy(AND_02, X0_4, 10000);
    IfEntityInoutsideRadiusOfEntity(AND_02, InsideOutsideState.Outside, X0_4, 10000, 15);
    IfConditionGroup(OR_01, PASS, AND_02);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfConditionGroup(MAIN, PASS, AND_01);
    BatchSetEventFlags(X4_4, X8_4, OFF);
    SetEventFlag(X12_4, ON);
    ForceAnimationPlayback(X0_4, 7005, false, true, false);
    ChangeCharacterEnableState(X0_4, Disabled);
});

// 王の探索者 大墓へ運ぶ
Event(11026200, Default, function() {
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 1643);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 1644);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 1645);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfPlayerInoutMap(AND_01, true, 10, 2);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 820);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetEventFlag(820, OFF);
    SetEventFlag(830, ON);
    ChangeCharacterEnableState(6331, Enabled);
    PlayCutsceneAndWarpPlayer(100240, CutscenePlayMode.Skippable, 1802110, 18, 0, 10000);
    PlayCutsceneToPlayer(180040, CutscenePlayMode.Skippable, 10000);
    WaitFixedTimeFrames(1);
    SetEventFlag(822, ON);
    EndUnconditionally(EventEndType.Restart);
});

// フラムトたまに寝る
Event(11026210, Default, function() {
    SetEventFlag(1650, OFF);
    IfPlayerInoutMap(AND_01, true, 10, 2);
    IfEntityInoutsideRadiusOfEntity(AND_01, InsideOutsideState.Outside, 6330, 10000, 30);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 830);
    IfConditionGroup(MAIN, PASS, AND_01);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 1643);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 1644);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 1645);
    EndIfConditionGroupStateUncompiled(EventEndType.End, FAIL, OR_01);
    BatchSetEventFlags(11026211, 11026213, OFF);
    RandomlySetEventFlagInRange(11026211, 11026213, ON);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 11026211);
    SetEventFlag(1650, ON);
    SetSpecialAnimations(6330, 9001, -1, -1, -1, -1);
    IfCharacterDamagedBy(MAIN, 6330, 10000);
    SetSpeffect(6330, 5450);
    SetSpecialAnimations(6330, 7003, -1, -1, -1, -1);
    ForceAnimationPlayback(6330, 9061, false, true, false);
    SetEventFlag(1650, OFF);
});

// 灰色の聖女 EzState制御
Event(11020110, Default, function() {
    SetCharacterImmortality(6060, Enabled);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 11020101);
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 11020100);
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 1141);
    EzstateInstructionRequest(6060, 1702, 0);
    SetEventFlag(11020100, ON);
    SkipIfEventFlag(4, ON, TargetEventFlagType.EventFlag, 11020111);
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 11020609);
    EzstateInstructionRequest(6060, 1701, 0);
    SetEventFlag(11020111, ON);
    IfCharacterHasEventMessage(MAIN, 6060, 1701, true);
    SetEventFlag(11020101, ON);
});

/* Warp to Battle of Stoicism */
//   Script - 11020950
//   Bonfire - 1020950
Event(11020950, Default, function() {
    IfActionButton(MAIN, TargetEntityType.Object, 1020950, 180, 100, 2, 10010239, ReactionType.HollowHuman, 0);
    RotateCharacter(10000, 1020950);
    ForceAnimationPlayback(10000, 7114, false, false, false);
    WaitFixedTimeSeconds(0.7);
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 17, 90021);
    WaitFixedTimeSeconds(1.5);
    WarpPlayer(12, 1, 1218200);
});

/* Warp to Bloodgulch Staging Area */
//   Script - 11020951
//   Bonfire - 1020951
//   Player - 1020952 (warp point)
Event(11020951, Default, function() {
    IfActionButton(MAIN, TargetEntityType.Object, 1020951, 180, 100, 1, 10010602, ReactionType.HollowHuman, 0);
    RotateCharacter(10000, 1020951);
    ForceAnimationPlayback(10000, 7114, false, false, false);
    WaitFixedTimeSeconds(0.7);
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 17, 90021);
    WaitFixedTimeSeconds(1.5);
    WarpPlayer(10, 2, 1020952);
});

/* Warp to HangEmHigh Staging Area */
//   Script - 11020952
//   Bonfire - 1020954
//   Player - 1020953 (warp point)
Event(11020952, Default, function() {
    IfActionButton(MAIN, TargetEntityType.Object, 1020954, 180, 100, 1, 10010606, ReactionType.HollowHuman, 0);
    RotateCharacter(10000, 1020954);
    ForceAnimationPlayback(10000, 7114, false, false, false);
    WaitFixedTimeSeconds(0.7);
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 17, 90021);
    WaitFixedTimeSeconds(1.5);
    WarpPlayer(10, 2, 1020953);
});

/* Warp to Damnation Staging Area */
//   Script - 11020953
//   Bonfire - 1020956
//   Player - 1020955 (warp point)
Event(11020953, Default, function() {
    IfActionButton(MAIN, TargetEntityType.Object, 1020956, 180, 100, 1, 10010611, ReactionType.HollowHuman, 0);
    RotateCharacter(10000, 1020956);
    ForceAnimationPlayback(10000, 7114, false, false, false);
    WaitFixedTimeSeconds(0.7);
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 17, 90021);
    WaitFixedTimeSeconds(1.5);
    WarpPlayer(10, 2, 1020955);
});

/* Warp to Lockout Staging Area */
//   Script - 11020954
//   Bonfire - 1020958
//   Player - 1020957 (warp point)
Event(11020954, Default, function() {
    IfActionButton(MAIN, TargetEntityType.Object, 1020958, 180, 100, 1, 10010634, ReactionType.HollowHuman, 0);
    RotateCharacter(10000, 1020958);
    ForceAnimationPlayback(10000, 7114, false, false, false);
    WaitFixedTimeSeconds(0.7);
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 17, 90021);
    WaitFixedTimeSeconds(1.5);
    WarpPlayer(10, 2, 1020957);
});


/* Warp to Sanctuary Staging Area */
//   Script - 11020955
//   Bonfire - 1020965
//   Player - 1020959 (warp point)
Event(11020955, Default, function() {
    IfActionButton(MAIN, TargetEntityType.Object, 1020965, 180, 100, 1, 10010636, ReactionType.HollowHuman, 0);
    RotateCharacter(10000, 1020965);
    ForceAnimationPlayback(10000, 7114, false, false, false);
    WaitFixedTimeSeconds(0.7);
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 17, 90021);
    WaitFixedTimeSeconds(1.5);
    WarpPlayer(10, 2, 1020959);
});

/* Warp to Wizard Staging Area */
//   Script - 11020956
//   Bonfire - 1020962
//   Player - 1020961 (warp point)
Event(11020956, Default, function() {
    IfActionButton(MAIN, TargetEntityType.Object, 1020962, 180, 100, 1, 10010638, ReactionType.HollowHuman, 0);
    RotateCharacter(10000, 1020962);
    ForceAnimationPlayback(10000, 7114, false, false, false);
    WaitFixedTimeSeconds(0.7);
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 17, 90021);
    WaitFixedTimeSeconds(1.5);
    WarpPlayer(10, 2, 1020961);
});

/* Warp to HangEmHigh(TDM) Staging Area */
//   Script - 11020957
//   Bonfire - 1020964
//   Player - 1020963 (warp point)
Event(11020957, Default, function() {
    IfActionButton(MAIN, TargetEntityType.Object, 1020964, 180, 100, 1, 10010641, ReactionType.HollowHuman, 0);
    RotateCharacter(10000, 1020964);
    ForceAnimationPlayback(10000, 7114, false, false, false);
    WaitFixedTimeSeconds(0.7);
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 17, 90021);
    WaitFixedTimeSeconds(1.5);
    WarpPlayer(10, 2, 1020963);
});

/* Warp to Sanctuary(CTF) Staging Area */
//   Script - 11020958
//   Bonfire - 1020967
//   Player - 1020968 (warp point)
Event(11020958, Default, function() {
    IfActionButton(MAIN, TargetEntityType.Object, 1020967, 180, 100, 1, 10010643, ReactionType.HollowHuman, 0);
    RotateCharacter(10000, 1020967);
    ForceAnimationPlayback(10000, 7114, false, false, false);
    WaitFixedTimeSeconds(0.7);
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 17, 90021);
    WaitFixedTimeSeconds(1.5);
    WarpPlayer(10, 2, 1020968);
});

/* AFTER THIS POINT ====================================================== */
/* Begin using ID's that start at 11029000 and 1029000 respectively! */

// Template Arena Powerup
// X0_4 - Pickup Interact Region
// X4_4 - Pickup SFX
// X8_4 - Pickup Text Prompt
// X12_4 - Pickup Speffect
// x16_4 - Respawn Delay (frames)
Event(11029900, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    DeleteMapSFX(X4_4, true);
    SpawnMapSFX(X4_4);
    IfActionButton(AND_01, TargetEntityType.Area, X0_4, 0, -1, 0, X8_4, ReactionType.All, 0);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, X0_4);
    IfConditionGroup(MAIN, PASS, AND_01);
    RotateCharacter(10000, X0_4);
    ForceAnimationPlayback(10000, 8130, false, true, false);
    SetSpeffect(10000, X12_4);
    SetSpeffect(10000, 9015);   // Secondary healing effect
    DeleteMapSFX(X4_4, true);
    WaitFixedTimeFrames(X16_4);
    EndUnconditionally(EventEndType.Restart);
});

// Template Arena GiveAmmo
// X0_4 - Trigger Speffect
// X4_4 - Itemlot To Give
Event(11029901, Default, function(X0_4, X4_4) {
    SetNetworkSyncState(Disabled);
    IfCharacterHasSpeffect(MAIN, 10000, X0_4, true);
    AwardItemsIncludingClients(X4_4);
    ClearSpeffect(10000, X0_4);
    EndUnconditionally(EventEndType.Restart);
});

// Arena 'remove last special arrow' bugfix.
// When firing a special great arrow, you get a speff, when you have this speff, delete the extras from your inven. This is to prevent the arrow from being invis.
Event(11029902, Default, function() {
    SetNetworkSyncState(Disabled);
    IfCharacterHasSpeffect(MAIN, 10000, 9109, true);
    WaitFixedTimeFrames(10); // Wait a moment
    RemoveItemFromPlayer(ItemType.Weapon, 2107000, 999);
    ClearSpeffect(10000, 9109);
    EndUnconditionally(EventEndType.Restart);
});

// Template Arena TeleportInteract
// X0_4 - Interact Region
// X4_4 - Target Region
Event(11029905, Default, function(X0_4, X4_4) {
    IfActionButton(AND_01, TargetEntityType.Area, X0_4, 0, -1, 0, 15000150, ReactionType.All, 0);
    IfConditionGroup(MAIN, PASS, AND_01);
    RotateCharacter(10000, X4_4);
    ForceAnimationPlayback(10000, 7415, false, false, false);
    EndUnconditionally(EventEndType.Restart);
});

// Template Arena TeleportTrigger
// X0_4 - Trigger Region
// X4_4 - Exit Region
Event(11029906, Default, function(X0_4, X4_4) {
    SetNetworkSyncState(Disabled);
    IfInoutsideArea(MAIN, InsideOutsideState.Inside, 10000, X0_4);
    SetSpeffect(10000, 9001);
    PlayCutsceneAndWarpPlayer(120130, CutscenePlayMode.Unskippable, X4_4, 12, 1, 10000);
    WaitFixedTimeFrames(1);
    ClearSpeffect(10000, 9001);
    EndUnconditionally(EventEndType.Restart);
});

/* == Special IDs == */
// 11029700 -> 11029707 - Red Flag Reset Timer - 8 Bits
// 11029710 -> 11029717 - Red Flag Fumble Timer - 8 Bits
// 11029720 -> 11029724 - Randomize Respawn Flags - 5 Bits
// 11029730 -> 11029737 - Blue Flag Reset Timer - 8 Bits
// 11029740 -> 11029747 - Blue Flag Fumble Timer - 8 Bits

/* === ID Dictionary === */
// 11029000 - Bloodgulch Init Script
// 1029000 - Bloodgulch Staging Area Region
// 1029001 - Bloodgulch Region
// 11029001 - Bloodgulch Give Team Change Items
// 11029002 - Bloodgulch Remove Team Change Items
// 11029003 - Bloodgulch Staging Area Auto-Invade
// 1029002 - Bloodgulch Staging Area Auto-Invade Region
// 11029004 - Bloodgulch Return To Firelink Script
// 1029003 - Bloodgulch Return To Firelink Bonfire
// 11029005 - Bloodgulch Join game Script
// 1029004 - Bloodgulch Join Game Bonfire
// 1029005 - Bloodgulch Join Game Red Warp
// 1029006 - Bloodgulch Join Game Blue Warp
// 11029006 - Bloodgulch Arena No Dead Apply
// 11029007 - Bloodgulch Staging Area Invincibility
// 11029008 - Bloodgulch Offline Kick Out
// 1029007 - Bloodgulch Map Collision
// 11029009 - Bloodgulch give lobby summon sign and fingers
// 11029010 - Bloodgulch enforce red team id
// 1029008 - Bloodgulch Red Return To Lobby Bonfire
// 1029009 - Bloodgulch Blue Return To Lobby Bonfire
// 1029010 - Bloodgulch Return To Lobby Target Region
// 11029011 - Bloodgulch Return to Lobby: Red
// 11029012 - Bloodgulch Return to Lobby: Blue
// 11029013 - Bloodgulch 'On Death' Handler
// 11029014 - Bloodgulch 'On Respawn' Handler
// 1029020 -> 1029024 - Red Team Respawn Points
// 1029025 -> 1029029 - Blue Team Respawn Points
// 1029011 - Bloodgulch Red Flag Character
// 1029012 - Bloodgulch Red Flag Capture Region
// 1029013 - Bloodgulch Game Over Return Target Region
// 1029014 - Bloodgulch Red Flag Stand Target Region
// 11029015 - Bloodgulch Red Flag Pickup Script
// 11029016 - Bloodgulch Red Flag Update Script
// 11029017 - Bloodgulch Red Flag 'Is Picked Up' Flag
// 11029018 - Bloodgulch Red Flag Return Script
// 11029019 - Bloodgulch Red Flag Captured Script
// 11029020 - Bloodgulch Red Lose Flag
// 11029021 - Bloodgulch Red Lose Script
// 1029035 - Bloodgulch Blue Flag Capture Region
// 11029022 - Bloodgulch Red Flag Drop Script
// 11029023 - Bloodgulch Red Flag Reset Script
// 11029024 - Bloodgulch Red Flag Fumble Timer Script
// 11029025 - Bloodgulch Red Flag Fumble Trigger A Script
// 11029026 - Bloodgulch Red Flag Fumble Trigger B Script
// 11029027 - Bloodgulch Red Flag Fumble Animation Script
// 11029028 - Bloodgulch Red Flag Fumble Drop Script
// 11029029 - Bloodgulch Red Flag Fumbling Flag
// 11029030 - Bloodgulch Red Flag Fumbled Flag
// 1029031 - Bloodgulch Blue Flag Character
// 1029034 - Bloodgulch Blue Flag Stand Target Region
// 11029031 - Bloodgulch Blue Flag Pickup Script
// 11029032 - Bloodgulch Blue Flag Update Script
// 11029033 - Bloodgulch Blue Flag 'Is Picked Up' Flag
// 11029043 - Bloodgulch Blue Flag Return Script
// 11029044 - Bloodgulch Blue Flag Captured Script
// 11029045 - Bloodgulch Blue Lose Flag
// 11029046 - Bloodgulch Blue Lose Script
// 11029034 - Bloodgulch Blue Flag Drop Script
// 11029035 - Bloodgulch Blue Flag Reset Script
// 11029036 - Bloodgulch Blue Flag Fumble Timer Script
// 11029037 - Bloodgulch Blue Flag Fumble Trigger A Script
// 11029038 - Bloodgulch Blue Flag Fumble Trigger B Script
// 11029039 - Bloodgulch Blue Flag Fumble Animation Script
// 11029040 - Bloodgulch Blue Flag Fumble Drop Script
// 11029041 - Bloodgulch Blue Flag Fumbling Flag
// 11029042 - Bloodgulch Blue Flag Fumbled Flag
// 11029048 - Bloodgulch Give Hollowing Item
// 11029049 - Bloodgulch Remove Hollowing Item
// 11029050 - Bloodgulch Remove Arena Speff Auto-Invade Fix
// 11029051 - Bloodgulch Red Flag Out Of Bounds Reset
// 11029052 - Bloodgulch Blue Flag Out Of Bounds Reset
// 1029040 - Bloodgulch Red Teleporter Interact Region
// 1029041 - Bloodgulch Red Teleporter Target Region
// 1029042 - Bloodgulch Red Teleporter Trigger Region
// 1029043 - Bloodgulch Red Teleporter Exit Region
// 11029053 - Bloodgulch Flag Desync Speff Remover
// 11029054 - Bloodgulch Respawn Sync'd Speff Remover
// 11029055 - Bloodgulch Red Lizard Notifier
// 11029056 - Bloodgulch Blue Lizard Notifier


/* Bloodgulch Init General */
Event(11029000, Default, function() {
    
    /* Initialize some variables, only the host does this. */
    SkipIfMultiplayerState(13, MultiplayerState.Client);
    ClearEventValue(11029720, 5); // Clear randomize respawn flags
    SetEventFlag(11029017, OFF);  // Reset red flag pickup flag
    SetEventFlag(11029020, OFF);  // Reset red lose flag
    SetEventFlag(11029029, OFF);  // Reset red fumbling flag
    SetEventFlag(11029029, OFF);  // Reset red fumbled flag
    ClearEventValue(11029700, 8); // Clear red flag reset timer
    ClearEventValue(11029710, 8); // Clear red flag fumble timer
    SetEventFlag(11029033, OFF);  // Reset blue flag pickup flag
    SetEventFlag(11029045, OFF);  // Reset blue lose flag
    SetEventFlag(11029041, OFF);  // Reset blue fumbling flag
    SetEventFlag(11029042, OFF);  // Reset blue fumbled flag
    ClearEventValue(11029730, 8); // Clear blue flag reset timer
    ClearEventValue(11029740, 8); // Clear blue flag fumble timer
    
    
    /* Start arena scripts, but only once we enter the lobby. */
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1029000); // Don't init BG arena unless we are in the staging area (or map)
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1029001);
    IfConditionGroup(MAIN, PASS, OR_01);
    InitializeEvent(0, 11029001, 0); // Give team change items while in staging area
    InitializeEvent(0, 11029002, 0); // Remove team change items if outside staging area
    InitializeEvent(0, 11029003, 0); // Auto-Invade area
    InitializeEvent(0, 11029004, 0); // Return to Firelink
    InitializeEvent(0, 11029005, 0); // Join game
    InitializeEvent(0, 11029006, 0); // Arena No Dead
    InitializeEvent(0, 11029007, 0); // Staging Area Invincibility
    InitializeEvent(0, 11029008, 0); // Offline Kick Out                              // DEBUG!!!
    InitializeEvent(0, 11029009, 0); // Give lobby summon sign and dried fingers
    InitializeEvent(0, 11029010, 0); // Enforce red team id
    InitializeEvent(0, 11029011, 0); // Return to lobby: Red
    InitializeEvent(0, 11029012, 0); // Return to lobby: Blue
    InitializeEvent(0, 11029013, 0); // 'On Death' Handler
    InitializeEvent(0, 11029014, 0); // 'On Respawn' Handler
    InitializeEvent(0, 11029048, 0); // Give Hollowing Item
    InitializeEvent(0, 11029049, 0); // Remove Hollowing Item
    InitializeEvent(0, 11029050, 0); // Remove Arena Speff Auto-Invade Fix
    InitializeEvent(0, 11029053, 0); // Flag Desync Speff Remover
    InitializeEvent(0, 11029054, 0); // Synced Respawn Speff Remover
    
    
    InitializeEvent(0, 11029015, 0); // Red Flag Pickup
    InitializeEvent(0, 11029016, 0); // Red Flag Update
    InitializeEvent(0, 11029022, 0); // Red Flag Drop
    InitializeEvent(0, 11029018, 0); // Red Flag Return
    InitializeEvent(0, 11029019, 0); // Red Flag Captured
    InitializeEvent(0, 11029023, 0); // Red Flag Reset
    InitializeEvent(0, 11029024, 0); // Red Flag Fumble Timer
    InitializeEvent(0, 11029025, 0); // Red Flag Fumble Trigger A
    InitializeEvent(0, 11029026, 0); // Red Flag Fumble Trigger B
    InitializeEvent(0, 11029027, 0); // Red Flag Fumble Animation
    InitializeEvent(0, 11029028, 0); // Red Flag Fumble Drop
    InitializeEvent(0, 11029021, 0); // Red Lose
    InitializeEvent(0, 11029051, 0); // Red Flag Out Of Bounds Reset
    InitializeEvent(0, 11029055, 0); // Red Lizard Notifier
    
    InitializeEvent(0, 11029031, 0); // Blue Flag Pickup
    InitializeEvent(0, 11029032, 0); // Blue Flag Update
    InitializeEvent(0, 11029034, 0); // Blue Flag Drop
    InitializeEvent(0, 11029043, 0); // Blue Flag Return
    InitializeEvent(0, 11029044, 0); // Blue Flag Captured
    InitializeEvent(0, 11029035, 0); // Blue Flag Reset
    InitializeEvent(0, 11029036, 0); // Blue Flag Fumble Timer
    InitializeEvent(0, 11029037, 0); // Blue Flag Fumble Trigger A
    InitializeEvent(0, 11029038, 0); // Blue Flag Fumble Trigger B
    InitializeEvent(0, 11029039, 0); // Blue Flag Fumble Animation
    InitializeEvent(0, 11029040, 0); // Blue Flag Fumble Drop
    InitializeEvent(0, 11029046, 0); // Blue Lose
    InitializeEvent(0, 11029052, 0); // Blue Flag Out Of Bounds Reset
    InitializeEvent(0, 11029056, 0); // Blue Lizard Notifier
    
    /* Teleporters */
    InitializeEvent(0, 11029905, 1029040, 1029041); // Red Teleporter Interact
    InitializeEvent(0, 11029906, 1029042, 1029043); // Red Teleporter Trigger
    InitializeEvent(1, 11029905, 1029044, 1029045); // Blue Teleporter Interact
    InitializeEvent(1, 11029906, 1029046, 1029047); // Blue Teleporter Trigger
    
    /* Powerups */
    InitializeEvent(0, 11029901, 9010, 9500); // Give SP Ammo Handler
    InitializeEvent(0, 11029902, 0);          // Remove last speical arrow bugfix
    InitializeEvent(0, 11029900, 1029050, 1029051, 10030160, 9010, 4500); // Powerup 01
    InitializeEvent(1, 11029900, 1029052, 1029053, 10030161, 9021, 600); // Powerup 02
    InitializeEvent(2, 11029900, 1029054, 1029055, 10030161, 9021, 600); // Powerup 03
    InitializeEvent(3, 11029900, 1029056, 1029057, 10030162, 9022, 1350); // Powerup 04
    InitializeEvent(4, 11029900, 1029058, 1029059, 10030162, 9022, 1350); // Powerup 05
    InitializeEvent(5, 11029900, 1029060, 1029061, 10030163, 9023, 1800); // Powerup 06
    InitializeEvent(6, 11029900, 1029062, 1029063, 10030163, 9023, 1800); // Powerup 07
    InitializeEvent(7, 11029900, 1029064, 1029065, 10030173, 9033, 3600); // Powerup 08
    InitializeEvent(8, 11029900, 1029066, 1029067, 10030173, 9033, 3600); // Powerup 09
    InitializeEvent(9, 11029900, 1029068, 1029069, 10030168, 9028, 3600); // Powerup 10
    InitializeEvent(10, 11029900, 1029070, 1029071, 10030168, 9028, 3600); // Powerup 11
    InitializeEvent(11, 11029900, 1029072, 1029073, 10030165, 9025, 5400); // Powerup 12
    InitializeEvent(12, 11029900, 1029074, 1029075, 10030170, 9030, 5400); // Powerup 13
    InitializeEvent(13, 11029900, 1029076, 1029077, 10030166, 9026, 5400); // Powerup 14
    InitializeEvent(14, 11029900, 1029078, 1029079, 10030167, 9027, 5400); // Powerup 15
    InitializeEvent(15, 11029900, 1029080, 1029081, 10030161, 9021, 900); // Powerup 16
    InitializeEvent(16, 11029900, 1029082, 1029083, 10030174, 9034, 5400); // Powerup 17
    InitializeEvent(17, 11029900, 1029084, 1029085, 10030164, 9024, 2700); // Powerup 18
    InitializeEvent(18, 11029900, 1029086, 1029087, 10030164, 9024, 2700); // Powerup 19
    InitializeEvent(19, 11029900, 1029088, 1029089, 10030171, 9031, 3600); // Powerup 20
    InitializeEvent(20, 11029900, 1029090, 1029091, 10030172, 9032, 3600); // Powerup 21
    
    /* Set some properties */
    SetCharacterInvincibility(1029011, Enabled);  // Make red flag invincible
    ActivateHit(1029011, Disabled);               // Make red flag no-collide players and avoid all attacks
    SetCharacterInvincibility(1029031, Enabled);  // Make blue flag invincible
    ActivateHit(1029031, Disabled);               // Make blue flag no-collide players and avoid all attacks
    
    /* Welcome! */
    WaitFixedTimeSeconds(3.25);
    DisplayStatusMessage(10010604, Enabled);  // Lobby entrance message
});

/* Bloodgulch Red Lizard Notifier */
// Dislpay message if lizard stolen
Event(11029055, Default, function() {
    SetNetworkSyncState(Disabled);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 1029011, 1029035);
    IfConditionGroup(MAIN, PASS, AND_01);
    IfInoutsideArea(AND_01, InsideOutsideState.Outside, 1029011, 1029035);
    IfConditionGroup(MAIN, PASS, AND_01);
    DisplayMessage(10010632, 0);
    WaitFixedTimeSeconds(15);
    EndUnconditionally(EventEndType.Restart);
});

/* Bloodgulch Blue Lizard Notifier */
// Dislpay message if lizard stolen
Event(11029056, Default, function() {
    SetNetworkSyncState(Disabled);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 1029031, 1029012);
    IfConditionGroup(MAIN, PASS, AND_01);
    IfInoutsideArea(AND_01, InsideOutsideState.Outside, 1029031, 1029012);
    IfConditionGroup(MAIN, PASS, AND_01);
    DisplayMessage(10010633, 0);
    WaitFixedTimeSeconds(15);
    EndUnconditionally(EventEndType.Restart);
});

/* Bloodgulch Give Team Change Items */
// If we are in the staging area, and we are NOT the host, give the team changing items.
Event(11029001, Default, function() {
    SetNetworkSyncState(Disabled);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 1029000);
    IfMultiplayerState(AND_01, MultiplayerState.Client);
    IfPlayerHasdoesntHaveItem(AND_01, ItemType.Goods, 265, OwnershipState.DoesntOwn);
    IfPlayerHasdoesntHaveItem(AND_01, ItemType.Goods, 266, OwnershipState.DoesntOwn);
    IfCharacterType(OR_01, 10000, TargetType.WhitePhantom);
    IfCharacterType(OR_01, 10000, TargetType.BlackPhantom);
    IfCharacterType(OR_01, 10000, TargetType.Invader);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfConditionGroup(MAIN, PASS, AND_01);
    AwardItemsIncludingClients(5050);
    WaitFixedTimeSeconds(1);
    EndUnconditionally(EventEndType.Restart);
});

/* Bloodgulch Remove Team Change Items */
// If we are outside the staging area, remove team change items.
Event(11029002, Default, function() {
    SetNetworkSyncState(Disabled);
    IfInoutsideArea(AND_01, InsideOutsideState.Outside, 10000, 1029000);
    IfPlayerHasdoesntHaveItem(AND_01, ItemType.Goods, 265, OwnershipState.Owns);
    IfPlayerHasdoesntHaveItem(AND_01, ItemType.Goods, 266, OwnershipState.Owns);
    IfConditionGroup(MAIN, PASS, AND_01);
    RemoveItemFromPlayer(ItemType.Goods, 265, 1);
    RemoveItemFromPlayer(ItemType.Goods, 266, 1);
    WaitFixedTimeSeconds(1);
    EndUnconditionally(EventEndType.Restart);
});

/* Bloodgulch Give Hollowing Item */
// If we are in the invasion area, and we are singleplayer, and we are team 1 (alive), give hollow orb
Event(11029048, Default, function() {
    SetNetworkSyncState(Disabled);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 1029002);
    IfMultiplayerState(AND_01, MultiplayerState.Singleplayer);
    IfPlayerHasdoesntHaveItem(AND_01, ItemType.Goods, 269, OwnershipState.DoesntOwn);
    IfCharacterType(AND_01, 10000, TargetType.Alive);
    IfCharacterHasSpeffect(AND_01, 10000, 4610, false);
    IfCharacterHasSpeffect(AND_01, 10000, 4613, false);
    IfConditionGroup(MAIN, PASS, AND_01);
    AwardItemLot(5058);
    WaitFixedTimeSeconds(1);
    EndUnconditionally(EventEndType.Restart);
});

/* Bloodgulch Remove Hollowing Item */
// If we are ouside the invasion area, are in multiplayer, are hollow, or have arena speffs, we remove the hollow orb
Event(11029049, Default, function() {
    SetNetworkSyncState(Disabled);
    IfInoutsideArea(OR_01, InsideOutsideState.Outside, 10000, 1029002);
    IfMultiplayerState(OR_01, MultiplayerState.Multiplayer);
    IfCharacterType(OR_01, 10000, TargetType.Hollow);
    IfPlayerHasdoesntHaveItem(AND_01, ItemType.Goods, 269, OwnershipState.Owns);
    IfCharacterHasSpeffect(OR_01, 10000, 4610, true);
    IfCharacterHasSpeffect(OR_01, 10000, 4613, true);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfConditionGroup(MAIN, PASS, AND_01);
    RemoveItemFromPlayer(ItemType.Goods, 269, 1);
    WaitFixedTimeSeconds(1);
    EndUnconditionally(EventEndType.Restart);
});

/* Bloodgulch Clear Arena Speff 3 Frame Delay Fix */
// There is a delay betweeen clearing 4610 and returning to proper human/hollow, so I clear the effects to sort out a minor issue. Not critical.
Event(11029050, Default, function() {
    SetNetworkSyncState(Disabled);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 1029002);
    IfMultiplayerState(AND_01, MultiplayerState.Singleplayer);
    IfConditionGroup(MAIN, PASS, AND_01);
    ClearSpeffect(10000, 4610);
    WaitFixedTimeSeconds(0.05);
    ClearSpeffect(10000, 4613);
    
    EndUnconditionally(EventEndType.Restart);
});
    

/* Bloodgulch Staging Area Auto-Invade Script */
// Small area that players can stand in and it will constantly search for players to invade. Also clears arena speff so you can invade while hollow
Event(11029003, Default, function() {
    SetNetworkSyncState(Disabled);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 1029002);
    IfMultiplayerState(AND_01, MultiplayerState.Singleplayer);
    IfConditionGroup(MAIN, PASS, AND_01);
    WaitFixedTimeSeconds(1.5);
    
    IfInoutsideArea(AND_02, InsideOutsideState.Inside, 10000, 1029002);
    IfMultiplayerState(AND_02, MultiplayerState.Singleplayer);
    IfConditionGroup(MAIN, PASS, AND_02);
    SetSpeffect(10000, 11);
    WaitFixedTimeSeconds(20);
    
    EndUnconditionally(EventEndType.Restart);
});


/* Bloodgulch Return to Firelink */
/* Ends multiplayer session. For hosts it returns you to firelink and for phantoms it black crystals you out */
Event(11029004, Default, function() {
    SetNetworkSyncState(Disabled); // Don't sync this becasue it invovles time delayed moving of players
    IfActionButton(MAIN, TargetEntityType.Object, 1029003, 180, 100, 2, 10010608, ReactionType.All, 0);
    RotateCharacter(10000, 1029003);
    ForceAnimationPlayback(10000, 7114, false, false, false);
    WaitFixedTimeSeconds(0.7);
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 17, 90021);
    WaitFixedTimeSeconds(1.5);
    SkipIfMultiplayerState(2, MultiplayerState.Client); // Skip to ::1
    WarpPlayer(10, 2, 1020966);
    EndUnconditionally(EventEndType.Restart);
    // ::1
    SetSpeffect(10000, 7);
    EndUnconditionally(EventEndType.Restart);
});

/* Bloodgulch Join Game */
/* Bonfire that warps you into the actual map play area. */
Event(11029005, Default, function() {
    SetNetworkSyncState(Disabled); // Don't sync this becasue it invovles time delayed moving of players
    IfActionButton(MAIN, TargetEntityType.Object, 1029004, 180, 100, 2, 10010601, ReactionType.All, 0);
    RotateCharacter(10000, 1029004);
    ForceAnimationPlayback(10000, 7114, false, false, false);
    WaitFixedTimeSeconds(0.7);
    
    SkipIfMultiplayerState(2, MultiplayerState.Multiplayer); // Skip to ::1
    DisplayGenericDialog(10010609, PromptType.OKCANCEL, NumberofOptions.NoButtons, 10000, 1);
    EndUnconditionally(EventEndType.Restart);
    // ::1
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 17, 90021);
    WaitFixedTimeSeconds(1.5);
    IfCharacterType(OR_01, 10000, TargetType.Alive);
    IfCharacterType(OR_01, 10000, TargetType.WhitePhantom);
    SkipIfConditionGroupStateUncompiled(2, PASS, OR_01); // Skip to ::2
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1029006, 10, 2);
    EndUnconditionally(EventEndType.Restart);
    // ::2
    IfCharacterType(OR_02, 10000, TargetType.BlackPhantom);
    IfCharacterType(OR_02, 10000, TargetType.Invader);
    SkipIfConditionGroupStateUncompiled(2, PASS, OR_02); // Skip to ::3
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1029005, 10, 2);
    EndUnconditionally(EventEndType.Restart);
    // ::3
    EndUnconditionally(EventEndType.Restart);
});


/* Bloodgulch Arena No Dead */
/* Applies the Arena No Dead effect to you while you are in the arena. Respawns are handled by scripts so we don't want people dieing. */
Event(11029006, Default, function() {
    SetNetworkSyncState(Disabled);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1029000);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1029001);
    IfInoutsideArea(AND_01, InsideOutsideState.Outside, 10000, 1029002);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetSpeffect(10000, 4613);
    SetSpeffect(10000, 4610);
    ClearSpeffect(10000, 33);
    ClearSpeffect(10000, 34);
    
    WaitFixedTimeSeconds(1);
    EndUnconditionally(EventEndType.Restart);
});

/* Bloodgulch Staging Area Invincibility */
/* Grants full invincibility while in the staging area. Also removes it when you exit. Additionally, invincibility is granted if the player is currently in a 'dead' state in the arena play area. */
Event(11029007, Default, function() {
    SetNetworkSyncState(Disabled);
    WaitFixedTimeSeconds(1);
    IfInoutsideArea(AND_02, InsideOutsideState.Inside, 10000, 1029001);
    IfCharacterHasSpeffect(AND_02, 10000, 9100, true);
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_02); // Skip to ::2
    SetCharacterInvincibility(10000, Enabled);
    EndUnconditionally(EventEndType.Restart);
    // ::2
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 1029000);
    SkipIfConditionGroupStateUncompiled(2, PASS, AND_01); // Skip to ::1
    SetCharacterInvincibility(10000, Disabled);
    EndUnconditionally(EventEndType.Restart);
    // ::1
    SetCharacterInvincibility(10000, Enabled);
    BonfirelikeRecovery();
    SetSpeffect(10000, 9112);
    EndUnconditionally(EventEndType.Restart);
});

/* Bloodgulch Play Area Offline Kickout */
/* If you are in the Bloodgulch play area (the actual bloodgulch map) and you are in singleplayer, kick the player to the staging area. */
Event(11029008, Default, function() {
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 1029001);
    IfMultiplayerState(AND_01, MultiplayerState.Singleplayer);
    IfConditionGroup(MAIN, PASS, AND_01);
    WaitFixedTimeSeconds(3);
    WarpPlayer(10, 2, 1020997);
});

/* Bloodgulch Give Lobby Items */
// If we are in the staging area, and we are the host, give lobby summon sign and lobby fingers
Event(11029009, Default, function() {
    SetNetworkSyncState(Disabled);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 1029000);
    IfCharacterType(AND_01, 10000, TargetType.Alive);
    IfPlayerHasdoesntHaveItem(AND_01, ItemType.Goods, 267, OwnershipState.DoesntOwn);
    IfPlayerHasdoesntHaveItem(AND_01, ItemType.Goods, 268, OwnershipState.DoesntOwn);
    IfConditionGroup(MAIN, PASS, AND_01);
    AwardItemLot(5055);
    WaitFixedTimeSeconds(1);
    EndUnconditionally(EventEndType.Restart);
});

/* Bloodgulch Enforce Red Team ID */
// Both invaders and red summons should have their team immideately changed to 6. Prevents friendly fire.
Event(11029010, Default, function() {
    SetNetworkSyncState(Disabled);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1029000);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1029001);
    IfCharacterType(OR_02, 10000, TargetType.BlackPhantom);
    IfCharacterType(OR_02, 10000, TargetType.Invader);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfConditionGroup(AND_01, PASS, OR_02);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetCharacterTeamType(10000, TeamType.Enemy);
    EndUnconditionally(EventEndType.Restart);
});

/* Bloodgulch Red Return To Lobby */
/* Bonfire that warps you from the play area back to the lobby. Red base edition. */
Event(11029011, Default, function() {
    SetNetworkSyncState(Disabled); // Don't sync this becasue it invovles time delayed moving of players
    IfCharacterHasSpeffect(AND_01, 10000, 9105, false);  // Can't take either flag into the lobby
    IfCharacterHasSpeffect(AND_01, 10000, 9106, false);
    IfActionButton(AND_01, TargetEntityType.Object, 1029008, 180, 100, 2, 10010603, ReactionType.All, 0);
    IfConditionGroup(MAIN, PASS, AND_01);
    RotateCharacter(10000, 1029008);
    ForceAnimationPlayback(10000, 7114, false, false, false);
    WaitFixedTimeSeconds(0.7);
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 17, 90021);
    WaitFixedTimeSeconds(1.5);
    RequestCharacterAnimationReset(10000, Interpolation.Uninterpolated);
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1029010, 10, 2);
    EndUnconditionally(EventEndType.Restart);
});

/* Bloodgulch Blue Return To Lobby */
/* Bonfire that warps you from the play area back to the lobby. Blue base edition. */
Event(11029012, Default, function() {
    SetNetworkSyncState(Disabled); // Don't sync this becasue it invovles time delayed moving of players
    IfCharacterHasSpeffect(AND_01, 10000, 9105, false);  // Can't take either flag into the lobby
    IfCharacterHasSpeffect(AND_01, 10000, 9106, false);
    IfActionButton(AND_01, TargetEntityType.Object, 1029009, 180, 100, 2, 10010603, ReactionType.All, 0);
    IfConditionGroup(MAIN, PASS, AND_01);
    RotateCharacter(10000, 1029009);
    ForceAnimationPlayback(10000, 7114, false, false, false);
    WaitFixedTimeSeconds(0.7);
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 17, 90021);
    WaitFixedTimeSeconds(1.5);
    RequestCharacterAnimationReset(10000, Interpolation.Uninterpolated);
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1029010, 10, 2);
    EndUnconditionally(EventEndType.Restart);
});

/* Bloodgulch 'On Death' Handler */
/* When a player reaches 5 hp, and does not yet have the arena dead speff or arena respawn speff, we put them into 'arena dead' state for 10 seconds. Then when the 10 seconds is up we flag them for respawn via speff. */
Event(11029013, Default, function() {
    SetNetworkSyncState(Disabled); //Don't sync this because it displays a message. The part that needs sync (status changes) is handled by the script below.
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 1029001);
    IfCharacterHPValue(AND_01, 10000, ComparisonType.Greater, 5);
    IfCharacterHasSpeffect(AND_01, 10000, 9100, false);
    IfCharacterHasSpeffect(AND_01, 10000, 9101, false);
    IfCharacterHasSpeffect(AND_01, 10000, 9102, false);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    SetSpeffect(10000, 9100);    // Set "Dead" Speff
    
    RemoveItemFromPlayer(ItemType.Weapon, 2107000, 999); // Remove special arrows on death
    RemoveItemFromPlayer(ItemType.Weapon, 2203000, 999);
    RemoveItemFromPlayer(ItemType.Weapon, 2204000, 999);
    
    DisplayGenericDialog(10010617, PromptType.OKCANCEL, NumberofOptions.NoButtons, 10000, 1);

    //RequestCharacterAnimationReset(10000, Interpolation.Uninterpolated);
    //SetSpecialAnimations(10000, 0, -1, -1, -1, -1);   // Force animation reset
    //SetSpecialAnimations(10000, -1, -1, -1, -1, -1);  // Hopefully this isn't needed anymore. (??) It should help with syncing to not have it I hope.
    EndUnconditionally(EventEndType.Restart);
});

/* Bloodgulch Sync'd Respawn Speff Remvoer */
/* When a player dies, we remove any speffs for powerups or status effects. This is synced so as to prevent phantom visual effects for other players. */
Event(11029054, Default, function() {
    IfCharacterHasSpeffect(AND_01, 10000, 9100, true);
    IfConditionGroup(MAIN, PASS, AND_01);
    
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
    
    ClearSpeffect(10000, 510);  // Clear various magic buffs (mostly spells)
    ClearSpeffect(10000, 530);
    ClearSpeffect(10000, 540);
    ClearSpeffect(10000, 541);
    ClearSpeffect(10000, 550);
    ClearSpeffect(10000, 555);
    ClearSpeffect(10000, 570);
    ClearSpeffect(10000, 571);
    ClearSpeffect(10000, 572);
    ClearSpeffect(10000, 573);
    ClearSpeffect(10000, 574);
    ClearSpeffect(10000, 610);
    ClearSpeffect(10000, 611);
    ClearSpeffect(10000, 612);
    ClearSpeffect(10000, 620);
    ClearSpeffect(10000, 640);
    ClearSpeffect(10000, 645);
    ClearSpeffect(10000, 1000);
    ClearSpeffect(10000, 1010);
    ClearSpeffect(10000, 1020);
    ClearSpeffect(10000, 1024);
    ClearSpeffect(10000, 1025);
    ClearSpeffect(10000, 1040);
    ClearSpeffect(10000, 1050);
    ClearSpeffect(10000, 1060);
    ClearSpeffect(10000, 1070);
    ClearSpeffect(10000, 1080);
    ClearSpeffect(10000, 1081);
    ClearSpeffect(10000, 1082);
    ClearSpeffect(10000, 1083);
    ClearSpeffect(10000, 1120);
    ClearSpeffect(10000, 1130);
    ClearSpeffect(10000, 1140);
    ClearSpeffect(10000, 1150);
    ClearSpeffect(10000, 1160);
    ClearSpeffect(10000, 1170);
    ClearSpeffect(10000, 1090);
    ClearSpeffect(10000, 1360);
    ClearSpeffect(10000, 1061);
    ClearSpeffect(10000, 1435);
    ClearSpeffect(10000, 1436);
    ClearSpeffect(10000, 1800);
    
    SetSpeffect(10000, 1303); // Cure all status effects 
    
    EndUnconditionally(EventEndType.Restart);
});

/* Bloodgulch 'On Respawn' Handler */
/* If a player has the 'arena respawn' speff we do a respawn. Also add the 'post respawn' speff to prevent a double respawn due to emevd nonsense. */
Event(11029014, Default, function() {
    SetNetworkSyncState(Disabled); // Do not sync this since we are applying bonfire recovery and doing a cutscene warp
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 1029001);
    IfCharacterHasSpeffect(AND_01, 10000, 9101, true);
    IfCharacterHasSpeffect(AND_01, 10000, 9102, false);
    SkipIfConditionGroupStateUncompiled(1, PASS, AND_01); // I don't know why I wrote it this way. ???
    EndUnconditionally(EventEndType.Restart);
    
    SetSpeffect(10000, 9102);   // Add 'post respawn' speff
    ClearSpeffect(10000, 9100); // Clear 'dead' speff
    ClearSpeffect(10000, 9101); // Clear 'respawn' spefff
    
    BonfirelikeRecovery();      // Recovery
    SetSpeffect(10000, 1330);   // Repair all equipment
    SetSpeffect(10000, 9108);   // Respawn hide effect. Makes you invis for 1 second.
    
    WaitFixedTimeFrames(1);     // Wait 1 frame for the chr.esd state to update
    
    // Pick a respawn point randomly
    ClearEventValue(11029720, 5);
    RandomlySetEventFlagInRange(11029720, 11029724, ON);
    
    IfCharacterType(OR_01, 10000, TargetType.Alive);
    IfCharacterType(OR_01, 10000, TargetType.WhitePhantom);
    SkipIfConditionGroupStateUncompiled(10, PASS, OR_01);      // Skip to ::1
    // Respawns for Red Team
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 11029720);    
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1029020, 10, 2); // Warp to respawn point
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 11029721);    
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1029021, 10, 2); // Warp to respawn point
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 11029722);    
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1029022, 10, 2); // Warp to respawn point
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 11029723);    
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1029023, 10, 2); // Warp to respawn point
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 11029724);    
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1029024, 10, 2); // Warp to respawn point
    // ::1
    IfCharacterType(OR_02, 10000, TargetType.BlackPhantom);
    IfCharacterType(OR_02, 10000, TargetType.Invader);
    SkipIfConditionGroupStateUncompiled(10, PASS, OR_02);      // Skip to ::2
    // Respawns for Blue Team
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 11029720);    
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1029025, 10, 2); // Warp to respawn point
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 11029721);    
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1029026, 10, 2); // Warp to respawn point
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 11029722);    
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1029027, 10, 2); // Warp to respawn point
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 11029723);   
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1029028, 10, 2); // Warp to respawn point
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 11029724);    
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1029029, 10, 2); // Warp to respawn point
    // ::2
    RequestCharacterAnimationReset(10000, Interpolation.Uninterpolated);
    RequestAnimationPlayback(10000, 6950, false, false, false);        // 'Stand up' animation after respawn
    EndUnconditionally(EventEndType.Restart);
});

/* Flag Desync Speff Remover */
/* If the flag is dropped (the 'is dropped' flag is off) then remove the flag carrying speffs. */
Event(11029053, Default, function() {
    SetNetworkSyncState(Disabled); // Don't sync this, doing uncompiled shit
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 11029017);
    IfCharacterHasSpeffect(AND_01, 10000, 9105, true);
    SkipIfConditionGroupStateUncompiled(1, PASS, AND_01);
    SkipUnconditionally(1);
    ClearSpeffect(10000, 9105); // For red flag
    
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 11029033);
    IfCharacterHasSpeffect(AND_01, 10000, 9106, true);
    SkipIfConditionGroupStateUncompiled(1, PASS, AND_01);
    SkipUnconditionally(1);
    ClearSpeffect(10000, 9106); // For blue flag
    
    EndUnconditionally(EventEndType.Restart);
});
    

/* ====================================================== */
/* ====== Bloogulch ctf red team specific scripts. ====== */
/* ====================================================== */

/* Bloodgulch Red Flag Pickup */
/* Script to let a blue team player pickup the red flag. */
Event(11029015, Default, function() {
    IfCharacterType(OR_01, 10000, TargetType.Alive);
    IfCharacterType(OR_01, 10000, TargetType.WhitePhantom);
    IfConditionGroup(AND_01, PASS, OR_01);                       // If on blue team
    
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 11029017);
    IfActionButton(AND_01, TargetEntityType.Character, 1029011, 180, -1, 2.5, 10010613, ReactionType.All, 0);
    IfConditionGroup(MAIN, PASS, AND_01);                      // If flag is not already picked up
    
    RotateCharacter(10000, 1029011);
    ForceAnimationPlayback(10000, 7522, false, false, false);
    SetSpeffect(10000, 9105);                                  // Pickup red flag
    SetEventFlag(11029017, ON);
    SetSpecialAnimations(1029011, -1, -1, -1, -1, -1);
    EndUnconditionally(EventEndType.Restart);
});

/* Bloodgulch Red Flag Update */
/* Keep flag attached to player holding it. If they die, drop the flag on the ground. */
Event(11029016, Default, function() {
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11029017);   // Flag picked up
    IfCharacterHasSpeffect(AND_01, 10000, 9105, true);                  // Has flag
    IfCharacterHasSpeffect(AND_01, 10000, 9100, false);                 // Not dead
    IfConditionGroup(MAIN, PASS, AND_01);
    
    WarpCharacterAndSetFloor(1029011, TargetEntityType.Character, 10000, 91, 1029007);  // Attach flag to player

    SetCharacterGravity(1029011, Disabled);
    EndUnconditionally(EventEndType.Restart);
});

/* Bloodgulch Red Flag Drop */
/* Keep flag attached to player holding it. If they die, drop the flag on the ground. */
Event(11029022, Default, function() {
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11029017);   // Flag picked up
    IfCharacterHasSpeffect(AND_01, 10000, 9105, true);                  // Has flag
    IfCharacterHasSpeffect(AND_01, 10000, 9100, true);                  // Is dead
    IfConditionGroup(OR_01, PASS, AND_01);
    
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 11029017);   // Flag picked up
    IfCharacterHasSpeffect(AND_02, 10000, 9105, true);                  // Has flag
    IfCharacterHasSpeffect(AND_02, 10000, 9100, false);                 // Is dead
    IfActionButton(AND_02, TargetEntityType.Character, 1029011, 180, -1, 2.5, 10010615, ReactionType.All, 0);
    IfConditionGroup(OR_01, PASS, AND_02);
    
    IfConditionGroup(MAIN, PASS, OR_01);
    
    ClearSpeffect(10000, 9105);
    SetCharacterGravity(1029011, Enabled);
    SetEventFlag(11029017, OFF);
    SetSpecialAnimations(1029011, -1, -1, -1, -1, -1)
    EndUnconditionally(EventEndType.Restart);
});

/* Bloodgulch Red Flag Reset */
/* If the flag is on the ground for 30s, reset it. */
Event(11029023, Default, function() {
    SetNetworkSyncState(Disabled);                                          // Don't sync. The player that is nearest will have the update authority to move it back.
    WaitFixedTimeSeconds(1);                                                // Run once a second
    
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 11029017);      // Flag not picked up
    IfInoutsideArea(AND_01, InsideOutsideState.Outside, 1029011, 1029035);  // Flag not at the flag stand
    SkipIfConditionGroupStateUncompiled(2, PASS, AND_01);
    ClearEventValue(11029700, 8);                                           // Clear timer and restart if conditions not met
    EndUnconditionally(EventEndType.Restart);
    
    IncrementEventValue(11029700, 8, 30);                                   // Increment counter 1
    
    IfEventValue(AND_02, 11029700, 8, ComparisonType.Less, 30);
    SkipIfConditionGroupStateUncompiled(2, PASS, AND_02);                   // If the counter reaches 30, return red flag to the stand, and clear counter
    WarpCharacterAndSetFloor(1029011, TargetEntityType.Area, 1029014, -1, 1029007);
    ClearEventValue(11029700, 8);
    EndUnconditionally(EventEndType.Restart);
});

/* Bloodgulch Red Flag Fumble Timer */
/* Counts up to 70 while lizard is held by a player. */
Event(11029024, Default, function() {
    WaitFixedTimeSeconds(1);                                                // Run once a second
    
    EndIfMultiplayerState(EventEndType.End, MultiplayerState.Client);       // Only the host needs to do this
    
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11029017);       // Flag picked up
    SkipIfConditionGroupStateUncompiled(2, PASS, AND_01);
    ClearEventValue(11029710, 8);                                           // Clear timer and restart if conditions not met
    EndUnconditionally(EventEndType.Restart);
    
    IncrementEventValue(11029710, 8, 70);                                   // Increment counter 1
    
    EndUnconditionally(EventEndType.Restart);
});

/* Bloodgulch Red Flag Fumble Trigger A */
/* If fumble timer is over 60 we flag an event to start playing the 'about to fumble' animation on the flag. */
Event(11029025, Default, function() {
    IfEventValue(AND_01, 11029710, 8, ComparisonType.GreaterOrEqual, 60);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    SetEventFlag(11029029, ON);
    
    IfEventValue(AND_01, 11029710, 8, ComparisonType.Less, 60);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    SetEventFlag(11029029, OFF);
    EndUnconditionally(EventEndType.Restart);
});

/* Bloodgulch Red Flag Fumble Trigger B */
/* If fumble timer is over 70 we flag an event to tell everyone the flag is dropped now. */
Event(11029026, Default, function() {
    IfEventValue(AND_01, 11029710, 8, ComparisonType.GreaterOrEqual, 70);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    SetEventFlag(11029030, ON);
    
    IfEventValue(AND_01, 11029710, 8, ComparisonType.Less, 70);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    SetEventFlag(11029030, OFF);
    EndUnconditionally(EventEndType.Restart);
});


/* Bloodgulch Red Flag Fumble Animation */
/* If the fumbling flag is on we play an animation on the flag. */
Event(11029027, Default, function() {
    WaitFixedTimeSeconds(2.5);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11029029);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    SetSpecialAnimations(1029011, 7500, -1, -1, -1, -1);
    EndUnconditionally(EventEndType.Restart);
});

/* Bloodgulch Red Flag Fumble Drop */
/* If the fumble flag is on we drop the flag. */
Event(11029028, Default, function() {
    WaitFixedTimeSeconds(2.5);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11029030);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    SetSpecialAnimations(1029011, -1, -1, -1, -1, -1);
    SetCharacterGravity(1029011, Enabled);
    SetEventFlag(11029017, OFF);
    
    IfCharacterHasSpeffect(AND_02, 10000, 9105, false);
    SkipIfConditionGroupStateUncompiled(1, PASS, AND_02); //* might cause bugs. test. */
    DisplayGenericDialog(10010616, PromptType.OKCANCEL, NumberofOptions.NoButtons, 10000, 1);
    
    ClearSpeffect(10000, 9105);
    
    EndUnconditionally(EventEndType.Restart);
});

/* Bloodgulch Red Flag Return */
/* Script to let a red team player return red flag to base */
Event(11029018, Default, function() {
    IfCharacterType(OR_01, 10000, TargetType.Invader);
    IfCharacterType(OR_01, 10000, TargetType.BlackPhantom);
    IfConditionGroup(AND_01, PASS, OR_01);                       // If on red team
    
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 11029017);                                        
    IfInoutsideArea(AND_01, InsideOutsideState.Outside, 1029011, 1029035);
    IfActionButton(AND_01, TargetEntityType.Character, 1029011, 180, -1, 2.5, 10010614, ReactionType.All, 0);
    IfConditionGroup(MAIN, PASS, AND_01);                       // If flag is not already picked up, and it's not on the stand
    
    RotateCharacter(10000, 1029011);
    ForceAnimationPlayback(10000, 7522, false, false, false);         
    WarpCharacterAndSetFloor(1029011, TargetEntityType.Area, 1029014, -1, 1029007); // Return flag to it's stand
    SetSpecialAnimations(1029011, -1, -1, -1, -1, -1);
    EndUnconditionally(EventEndType.Restart);
});


/* Bloodgulch Red Flag Captured */
/* Script to let a red team player return red flag to base */
Event(11029019, Default, function() {
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 1029011, 1029012);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 1029031, 1029012);
    IfConditionGroup(MAIN, PASS, AND_01);                    // Both red flag and blue flag are in the blue capture zone
    ClearSpeffect(10000, 9105);
    SetEventFlag(11029017, OFF);
    WarpCharacterAndSetFloor(1029011, TargetEntityType.Area, 1029014, -1, 1029007); // Return flag to it's stand
    SetCharacterGravity(1029011, Enabled);
    SetEventFlag(11029020, ON);                              // End game in victory for blue
    EndUnconditionally(EventEndType.Restart);
});

/* Bloodgulch Red Team Lose */
/* Display victory/loss, give rewards, reset game and returns players to lobby. */
Event(11029021, Default, function() {
    SetNetworkSyncState(Disabled); // Should be fine.
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11029020);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    IfCharacterType(OR_01, 10000, TargetType.Alive);
    IfCharacterType(OR_01, 10000, TargetType.WhitePhantom);
    SkipIfConditionGroupStateUncompiled(2, PASS, OR_01);
    DisplayBanner(TextBannerType.YouLose);
    SkipUnconditionally(1);
    DisplayBanner(TextBannerType.YouWin);
    
    WaitFixedTimeSeconds(5.0);

    BonfirelikeRecovery();
    ClearSpeffect(10000, 9100);  // Clear all game state effects
    ClearSpeffect(10000, 9101);
    ClearSpeffect(10000, 9102);
    ClearSpeffect(10000, 9105);
    ClearSpeffect(10000, 9106);
    
    ClearSpeffect(10000, 9021);  // Remove all arena powerup buffs
    ClearSpeffect(10000, 9022);
    ClearSpeffect(10000, 9023);
    ClearSpeffect(10000, 9024);
    ClearSpeffect(10000, 9029);
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
    
    /* Force flag drop and reset */
    SetSpecialAnimations(1029011, -1, -1, -1, -1, -1)
    SetCharacterGravity(1029011, Enabled);
    SetEventFlag(11029017, OFF);
    WarpCharacterAndSetFloor(1029011, TargetEntityType.Area, 1029014, -1, 1029007); // Return red flag to it's stand
    SetSpecialAnimations(1029031, -1, -1, -1, -1, -1)
    SetCharacterGravity(1029031, Enabled);
    SetEventFlag(11029033, OFF);
    WarpCharacterAndSetFloor(1029031, TargetEntityType.Area, 1029034, -1, 1029007); // Return blue flag to it's stand
    
    /* Return to lobby and ready for next match */
    RequestCharacterAnimationReset(10000, Interpolation.Uninterpolated);
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1029013, 10, 2);
    SetEventFlag(11029020, OFF);
    
    /* Award loot */
    WaitFixedTimeSeconds(3.0);
    AwardItemsIncludingClients(5005);
    AwardItemsIncludingClients(5005);
    IfCharacterType(OR_02, 10000, TargetType.Alive);
    IfCharacterType(OR_02, 10000, TargetType.WhitePhantom);
    SkipIfConditionGroupStateUncompiled(1, PASS, OR_02);
    SkipUnconditionally(1);
    AwardItemsIncludingClients(5005);
    EndUnconditionally(EventEndType.Restart);
});

/* Bloodgulch Red Flag Out Of Bounds Reset */
/* If the flag falls out of the map area, reset it fully. */
Event(11029051, Default, function() {
    IfInoutsideArea(AND_01, InsideOutsideState.Outside, 1029011, 1029001);         // If red flag is outside of the map play area
    IfConditionGroup(MAIN, PASS, AND_01);
    
    SetSpecialAnimations(1029011, -1, -1, -1, -1, -1)
    SetCharacterGravity(1029011, Enabled);
    SetEventFlag(11029017, OFF);
    WarpCharacterAndSetFloor(1029011, TargetEntityType.Area, 1029014, -1, 1029007); // Return red flag to it's stand
    ClearSpeffect(10000, 9105);
    EndUnconditionally(EventEndType.Restart);
});


/* ======================================================= */
/* ====== Bloogulch ctf blue team specific scripts. ====== */
/* ======================================================= */


/* Bloodgulch Blue Flag Pickup */
/* Script to let a Red team player pickup the Blue flag. */
Event(11029031, Default, function() {
    IfCharacterType(OR_01, 10000, TargetType.Invader);
    IfCharacterType(OR_01, 10000, TargetType.BlackPhantom);
    IfConditionGroup(AND_01, PASS, OR_01);                       // If on Red team
    
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 11029033);
    IfActionButton(AND_01, TargetEntityType.Character, 1029031, 180, -1, 2.5, 10010613, ReactionType.All, 0);
    IfConditionGroup(MAIN, PASS, AND_01);                      // If flag is not already picked up
    
    RotateCharacter(10000, 1029031);
    ForceAnimationPlayback(10000, 7522, false, false, false);
    SetSpeffect(10000, 9106);                                  // Pickup Blue flag
    SetEventFlag(11029033, ON);
    SetSpecialAnimations(1029031, -1, -1, -1, -1, -1);
    EndUnconditionally(EventEndType.Restart);
});

/* Bloodgulch Blue Flag Update */
/* Keep flag attached to player holding it. If they die, drop the flag on the ground. */
Event(11029032, Default, function() {
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11029033);   // Flag picked up
    IfCharacterHasSpeffect(AND_01, 10000, 9106, true);                  // Has flag
    IfCharacterHasSpeffect(AND_01, 10000, 9100, false);                 // Not dead
    IfConditionGroup(MAIN, PASS, AND_01);
    
    WarpCharacterAndSetFloor(1029031, TargetEntityType.Character, 10000, 91, 1029007);  // Attach flag to player

    SetCharacterGravity(1029031, Disabled);
    EndUnconditionally(EventEndType.Restart);
});

/* Bloodgulch Blue Flag Drop */
/* Keep flag attached to player holding it. If they die, drop the flag on the ground. */
Event(11029034, Default, function() {
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11029033);   // Flag picked up
    IfCharacterHasSpeffect(AND_01, 10000, 9106, true);                  // Has flag
    IfCharacterHasSpeffect(AND_01, 10000, 9100, true);                  // Is dead
    IfConditionGroup(OR_01, PASS, AND_01);
    
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 11029033);   // Flag picked up
    IfCharacterHasSpeffect(AND_02, 10000, 9106, true);                  // Has flag
    IfCharacterHasSpeffect(AND_02, 10000, 9100, false);                 // Is dead
    IfActionButton(AND_02, TargetEntityType.Character, 1029031, 180, -1, 2.5, 10010615, ReactionType.All, 0);
    IfConditionGroup(OR_01, PASS, AND_02);
    
    IfConditionGroup(MAIN, PASS, OR_01);
    
    ClearSpeffect(10000, 9106);
    SetCharacterGravity(1029031, Enabled);
    SetEventFlag(11029033, OFF);
    SetSpecialAnimations(1029031, -1, -1, -1, -1, -1)
    EndUnconditionally(EventEndType.Restart);
});

/* Bloodgulch Blue Flag Reset */
/* If the flag is on the ground for 30s, reset it. */
Event(11029035, Default, function() {
    SetNetworkSyncState(Disabled);                                          // Don't sync. The player that is nearest will have the update authority to move it back.
    WaitFixedTimeSeconds(1);                                                // Run once a second
    
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 11029033);      // Flag not picked up
    IfInoutsideArea(AND_01, InsideOutsideState.Outside, 1029031, 1029012);  // Flag not at the flag stand
    SkipIfConditionGroupStateUncompiled(2, PASS, AND_01);
    ClearEventValue(11029730, 8);                                           // Clear timer and restart if conditions not met
    EndUnconditionally(EventEndType.Restart);
    
    IncrementEventValue(11029730, 8, 30);                                   // Increment counter 1
    
    IfEventValue(AND_02, 11029730, 8, ComparisonType.Less, 30);
    SkipIfConditionGroupStateUncompiled(2, PASS, AND_02);                   // If the counter reaches 30, return Blue flag to the stand, and clear counter
    WarpCharacterAndSetFloor(1029031, TargetEntityType.Area, 1029034, -1, 1029007);
    ClearEventValue(11029730, 8);
    EndUnconditionally(EventEndType.Restart);
});

/* Bloodgulch Blue Flag Fumble Timer */
/* Counts up to 70 while lizard is held by a player. */
Event(11029036, Default, function() {
    WaitFixedTimeSeconds(1);                                                // Run once a second
    
    EndIfMultiplayerState(EventEndType.End, MultiplayerState.Client);       // Only the host needs to do this
    
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11029033);       // Flag picked up
    SkipIfConditionGroupStateUncompiled(2, PASS, AND_01);
    ClearEventValue(11029740, 8);                                           // Clear timer and restart if conditions not met
    EndUnconditionally(EventEndType.Restart);
    
    IncrementEventValue(11029740, 8, 70);                                   // Increment counter 1
    
    EndUnconditionally(EventEndType.Restart);
});

/* Bloodgulch Blue Flag Fumble Trigger A */
/* If fumble timer is over 60 we flag an event to start playing the 'about to fumble' animation on the flag. */
Event(11029037, Default, function() {
    IfEventValue(AND_01, 11029740, 8, ComparisonType.GreaterOrEqual, 60);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    SetEventFlag(11029041, ON);
    
    IfEventValue(AND_01, 11029740, 8, ComparisonType.Less, 60);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    SetEventFlag(11029041, OFF);
    EndUnconditionally(EventEndType.Restart);
});

/* Bloodgulch Blue Flag Fumble Trigger B */
/* If fumble timer is over 70 we flag an event to tell everyone the flag is dropped now. */
Event(11029038, Default, function() {
    IfEventValue(AND_01, 11029740, 8, ComparisonType.GreaterOrEqual, 70);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    SetEventFlag(11029042, ON);
    
    IfEventValue(AND_01, 11029740, 8, ComparisonType.Less, 70);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    SetEventFlag(11029042, OFF);
    EndUnconditionally(EventEndType.Restart);
});


/* Bloodgulch Blue Flag Fumble Animation */
/* If the fumbling flag is on we play an animation on the flag. */
Event(11029039, Default, function() {
    WaitFixedTimeSeconds(2.5);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11029041);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    SetSpecialAnimations(1029031, 7500, -1, -1, -1, -1);
    EndUnconditionally(EventEndType.Restart);
});

/* Bloodgulch Blue Flag Fumble Drop */
/* If the fumble flag is on we drop the flag. */
Event(11029040, Default, function() {
    WaitFixedTimeSeconds(2.5);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11029042);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    SetSpecialAnimations(1029031, -1, -1, -1, -1, -1);
    SetCharacterGravity(1029031, Enabled);
    SetEventFlag(11029033, OFF);
    
    IfCharacterHasSpeffect(AND_02, 10000, 9106, false);
    SkipIfConditionGroupStateUncompiled(1, PASS, AND_02); //* might cause bugs. test. */
    DisplayGenericDialog(10010616, PromptType.OKCANCEL, NumberofOptions.NoButtons, 10000, 1);
    
    ClearSpeffect(10000, 9106);
    
    EndUnconditionally(EventEndType.Restart);
});

/* Bloodgulch Blue Flag Return */
/* Script to let a Blue team player return Blue flag to base */
Event(11029043, Default, function() {
    IfCharacterType(OR_01, 10000, TargetType.Alive);
    IfCharacterType(OR_01, 10000, TargetType.WhitePhantom);
    IfConditionGroup(AND_01, PASS, OR_01);                       // If on Blue team
    
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 11029033);                                        
    IfInoutsideArea(AND_01, InsideOutsideState.Outside, 1029031, 1029012);
    IfActionButton(AND_01, TargetEntityType.Character, 1029031, 180, -1, 2.5, 10010614, ReactionType.All, 0);
    IfConditionGroup(MAIN, PASS, AND_01);                       // If flag is not already picked up, and it's not on the stand
    
    RotateCharacter(10000, 1029031);
    ForceAnimationPlayback(10000, 7522, false, false, false);         
    WarpCharacterAndSetFloor(1029031, TargetEntityType.Area, 1029034, -1, 1029007); // Return flag to it's stand
    SetSpecialAnimations(1029031, -1, -1, -1, -1, -1);
    EndUnconditionally(EventEndType.Restart);
});

/* Bloodgulch Blue Flag Captured */
/* Script to let a Blue team player return Blue flag to base */
Event(11029044, Default, function() {
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 1029011, 1029035);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 1029031, 1029035);
    IfConditionGroup(MAIN, PASS, AND_01);                    // Both Blue flag and Red flag are in the Red capture zone
    ClearSpeffect(10000, 9106);
    SetEventFlag(11029033, OFF);
    WarpCharacterAndSetFloor(1029031, TargetEntityType.Area, 1029034, -1, 1029007); // Return flag to it's stand
    SetCharacterGravity(1029031, Enabled);
    SetEventFlag(11029045, ON);                              // End game in victory for Red
    EndUnconditionally(EventEndType.Restart);
});

/* Bloodgulch Blue Team Lose */
/* Display victory/loss, give rewards, reset game and returns players to lobby. */
Event(11029046, Default, function() {
    SetNetworkSyncState(Disabled); // Should be fine.
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11029045);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    IfCharacterType(OR_01, 10000, TargetType.Invader);
    IfCharacterType(OR_01, 10000, TargetType.BlackPhantom);
    SkipIfConditionGroupStateUncompiled(2, PASS, OR_01);
    DisplayBanner(TextBannerType.YouLose);
    SkipUnconditionally(1);
    DisplayBanner(TextBannerType.YouWin);
    
    WaitFixedTimeSeconds(5.0);

    BonfirelikeRecovery();
    ClearSpeffect(10000, 9100);  // Clear all game state effects
    ClearSpeffect(10000, 9101);
    ClearSpeffect(10000, 9102);
    ClearSpeffect(10000, 9105);
    ClearSpeffect(10000, 9106);
    
    ClearSpeffect(10000, 9021);  // Remove all arena powerup buffs
    ClearSpeffect(10000, 9022);
    ClearSpeffect(10000, 9023);
    ClearSpeffect(10000, 9024);
    ClearSpeffect(10000, 9025);
    ClearSpeffect(10000, 9026);
    ClearSpeffect(10000, 9028);
    ClearSpeffect(10000, 9027);
    ClearSpeffect(10000, 9029);
    ClearSpeffect(10000, 9030);
    ClearSpeffect(10000, 9031);
    ClearSpeffect(10000, 9032);
    ClearSpeffect(10000, 9033);
    ClearSpeffect(10000, 9034);
    ClearSpeffect(10000, 9035);
    ClearSpeffect(10000, 9041);
    
    /* Force flag drop and reset */
    SetSpecialAnimations(1029011, -1, -1, -1, -1, -1)
    SetCharacterGravity(1029011, Enabled);
    SetEventFlag(11029017, OFF);
    WarpCharacterAndSetFloor(1029011, TargetEntityType.Area, 1029014, -1, 1029007); // Return red flag to it's stand
    SetSpecialAnimations(1029031, -1, -1, -1, -1, -1)
    SetCharacterGravity(1029031, Enabled);
    SetEventFlag(11029033, OFF);
    WarpCharacterAndSetFloor(1029031, TargetEntityType.Area, 1029034, -1, 1029007); // Return blue flag to it's stand
    
    /* Return to lobby and ready for next match */
    RequestCharacterAnimationReset(10000, Interpolation.Uninterpolated);
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1029013, 10, 2);
    SetEventFlag(11029045, OFF);
    
    /* Award loot */
    WaitFixedTimeSeconds(3.0);
    AwardItemsIncludingClients(5005);
    AwardItemsIncludingClients(5005);
    IfCharacterType(OR_02, 10000, TargetType.Invader);
    IfCharacterType(OR_02, 10000, TargetType.BlackPhantom);
    SkipIfConditionGroupStateUncompiled(1, PASS, OR_02);
    SkipUnconditionally(1);
    AwardItemsIncludingClients(5005);
    EndUnconditionally(EventEndType.Restart);
});

/* Bloodgulch Blue Flag Out Of Bounds Reset */
/* If the flag falls out of the map area, reset it fully. */
Event(11029052, Default, function() {
    IfInoutsideArea(AND_01, InsideOutsideState.Outside, 1029031, 1029001);         // If blue flag is outside of the map play area
    IfConditionGroup(MAIN, PASS, AND_01);
    
    SetSpecialAnimations(1029031, -1, -1, -1, -1, -1)
    SetCharacterGravity(1029031, Enabled);
    SetEventFlag(11029033, OFF);
    WarpCharacterAndSetFloor(1029031, TargetEntityType.Area, 1029034, -1, 1029007); // Return blue flag to it's stand
    ClearSpeffect(10000, 9106);
    EndUnconditionally(EventEndType.Restart);
});



/* == Special IDs == */
// 11029700 -> 11029707 - Red Flag Reset Timer - 8 Bits
// 11029710 -> 11029717 - Red Flag Fumble Timer - 8 Bits
// 11029720 -> 11029724 - Randomize Respawn Flags - 5 Bits
// 11029730 -> 11029737 - Blue Flag Reset Timer - 8 Bits
// 11029740 -> 11029747 - Blue Flag Fumble Timer - 8 Bits

/* === ID Dictionary === */
// 11029100 - Hangemhigh Init Script
// 1029100 - Hangemhigh Staging Area Region
// 1029101 - Hangemhigh Region
// 11029101 - Hangemhigh Give Team Change Items
// 11029102 - Hangemhigh Remove Team Change Items
// 11029103 - Hangemhigh Staging Area Auto-Invade
// 1029102 - Hangemhigh Staging Area Auto-Invade Region
// 11029104 - Hangemhigh Return To Firelink Script
// 1029103 - Hangemhigh Return To Firelink Bonfire
// 11029105 - Hangemhigh Join game Script
// 1029104 - Hangemhigh Join Game Bonfire
// 1029105 - Hangemhigh Join Game Red Warp
// 1029106 - Hangemhigh Join Game Blue Warp
// 11029106 - Hangemhigh Arena No Dead Apply
// 11029107 - Hangemhigh Staging Area Invincibility
// 11029108 - Hangemhigh Offline Kick Out
// 1029107 - Hangemhigh Map Collision
// 11029109 - Hangemhigh give lobby summon sign and fingers
// 11029110 - Hangemhigh enforce red team id
// 1029108 - Hangemhigh Red Return To Lobby Bonfire
// 1029109 - Hangemhigh Blue Return To Lobby Bonfire
// 1029110 - Hangemhigh Return To Lobby Target Region
// 11029111 - Hangemhigh Return to Lobby: Red
// 11029112 - Hangemhigh Return to Lobby: Blue
// 11029113 - Hangemhigh 'On Death' Handler
// 11029114 - Hangemhigh 'On Respawn' Handler
// 1029120 -> 1029124 - Red Team Respawn Points
// 1029125 -> 1029129 - Blue Team Respawn Points
// 1029111 - Hangemhigh Red Flag Character
// 1029112 - Hangemhigh Red Flag Capture Region
// 1029113 - Hangemhigh Game Over Return Target Region
// 1029114 - Hangemhigh Red Flag Stand Target Region
// 11029115 - Hangemhigh Red Flag Pickup Script
// 11029116 - Hangemhigh Red Flag Update Script
// 11029117 - Hangemhigh Red Flag 'Is Picked Up' Flag
// 11029118 - Hangemhigh Red Flag Return Script
// 11029119 - Hangemhigh Red Flag Captured Script
// 11029120 - Hangemhigh Red Lose Flag
// 11029121 - Hangemhigh Red Lose Script
// 1029135 - Hangemhigh Blue Flag Capture Region
// 11029122 - Hangemhigh Red Flag Drop Script
// 11029123 - Hangemhigh Red Flag Reset Script
// 11029124 - Hangemhigh Red Flag Fumble Timer Script
// 11029125 - Hangemhigh Red Flag Fumble Trigger A Script
// 11029126 - Hangemhigh Red Flag Fumble Trigger B Script
// 11029127 - Hangemhigh Red Flag Fumble Animation Script
// 11029128 - Hangemhigh Red Flag Fumble Drop Script
// 11029129 - Hangemhigh Red Flag Fumbling Flag
// 11029130 - Hangemhigh Red Flag Fumbled Flag
// 1029131 - Hangemhigh Blue Flag Character
// 1029134 - Hangemhigh Blue Flag Stand Target Region
// 11029131 - Hangemhigh Blue Flag Pickup Script
// 11029132 - Hangemhigh Blue Flag Update Script
// 11029133 - Hangemhigh Blue Flag 'Is Picked Up' Flag
// 11029143 - Hangemhigh Blue Flag Return Script
// 11029144 - Hangemhigh Blue Flag Captured Script
// 11029145 - Hangemhigh Blue Lose Flag
// 11029146 - Hangemhigh Blue Lose Script
// 11029134 - Hangemhigh Blue Flag Drop Script
// 11029135 - Hangemhigh Blue Flag Reset Script
// 11029136 - Hangemhigh Blue Flag Fumble Timer Script
// 11029137 - Hangemhigh Blue Flag Fumble Trigger A Script
// 11029138 - Hangemhigh Blue Flag Fumble Trigger B Script
// 11029139 - Hangemhigh Blue Flag Fumble Animation Script
// 11029140 - Hangemhigh Blue Flag Fumble Drop Script
// 11029141 - Hangemhigh Blue Flag Fumbling Flag
// 11029142 - Hangemhigh Blue Flag Fumbled Flag
// 11029148 - Hangemhigh Give Hollowing Item
// 11029149 - Hangemhigh Remove Hollowing Item
// 11029150 - Hangemhigh Remove Arena Speff Auto-Invade Fix
// 11029151 - Hangemhigh Red Flag Out Of Bounds Reset
// 11029152 - Hangemhigh Blue Flag Out Of Bounds Reset
// 11029153 - Hangemhigh Flag Desync Speff Remover
// 11029154 - Hangemhigh Respawn Sync'd Speff Remover
// 11029155 - Hangemhigh Red Lizard Notifier
// 11029156 - Hangemhigh Blue Lizard Notifier


/* Hangemhigh Init General */
Event(11029100, Default, function() {
    
    /* Initialize some variables, only the host does this. */
    SkipIfMultiplayerState(13, MultiplayerState.Client);
    ClearEventValue(11029720, 5); // Clear randomize respawn flags
    SetEventFlag(11029117, OFF);  // Reset red flag pickup flag
    SetEventFlag(11029120, OFF);  // Reset red lose flag
    SetEventFlag(11029129, OFF);  // Reset red fumbling flag
    SetEventFlag(11029129, OFF);  // Reset red fumbled flag
    ClearEventValue(11029700, 8); // Clear red flag reset timer
    ClearEventValue(11029710, 8); // Clear red flag fumble timer
    SetEventFlag(11029133, OFF);  // Reset blue flag pickup flag
    SetEventFlag(11029145, OFF);  // Reset blue lose flag
    SetEventFlag(11029141, OFF);  // Reset blue fumbling flag
    SetEventFlag(11029142, OFF);  // Reset blue fumbled flag
    ClearEventValue(11029730, 8); // Clear blue flag reset timer
    ClearEventValue(11029740, 8); // Clear blue flag fumble timer
    
    
    /* Start arena scripts, but only once we enter the lobby. */
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1029100); // Don't init HH arena unless we are in the staging area (or map)
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1029101);
    IfConditionGroup(MAIN, PASS, OR_01);
    InitializeEvent(0, 11029101, 0); // Give team change items while in staging area
    InitializeEvent(0, 11029102, 0); // Remove team change items if outside staging area
    InitializeEvent(0, 11029103, 0); // Auto-Invade area
    InitializeEvent(0, 11029104, 0); // Return to Firelink
    InitializeEvent(0, 11029105, 0); // Join game
    InitializeEvent(0, 11029106, 0); // Arena No Dead
    InitializeEvent(0, 11029107, 0); // Staging Area Invincibility
    InitializeEvent(0, 11029108, 0); // Offline Kick Out                              // DEBUG!!!
    InitializeEvent(0, 11029109, 0); // Give lobby summon sign and dried fingers
    InitializeEvent(0, 11029110, 0); // Enforce red team id
    InitializeEvent(0, 11029111, 0); // Return to lobby: Red
    InitializeEvent(0, 11029112, 0); // Return to lobby: Blue
    InitializeEvent(0, 11029113, 0); // 'On Death' Handler
    InitializeEvent(0, 11029114, 0); // 'On Respawn' Handler
    InitializeEvent(0, 11029148, 0); // Give Hollowing Item
    InitializeEvent(0, 11029149, 0); // Remove Hollowing Item
    InitializeEvent(0, 11029150, 0); // Remove Arena Speff Auto-Invade Fix
    InitializeEvent(0, 11029153, 0); // Flag Desync Speff Remover
    InitializeEvent(0, 11029154, 0); // Synced Respawn Speff Remover
    
    
    InitializeEvent(0, 11029115, 0); // Red Flag Pickup
    InitializeEvent(0, 11029116, 0); // Red Flag Update
    InitializeEvent(0, 11029122, 0); // Red Flag Drop
    InitializeEvent(0, 11029118, 0); // Red Flag Return
    InitializeEvent(0, 11029119, 0); // Red Flag Captured
    InitializeEvent(0, 11029123, 0); // Red Flag Reset
    InitializeEvent(0, 11029124, 0); // Red Flag Fumble Timer
    InitializeEvent(0, 11029125, 0); // Red Flag Fumble Trigger A
    InitializeEvent(0, 11029126, 0); // Red Flag Fumble Trigger B
    InitializeEvent(0, 11029127, 0); // Red Flag Fumble Animation
    InitializeEvent(0, 11029128, 0); // Red Flag Fumble Drop
    InitializeEvent(0, 11029121, 0); // Red Lose
    InitializeEvent(0, 11029151, 0); // Red Flag Out Of Bounds Reset
    InitializeEvent(0, 11029155, 0); // Red Lizard Notifier
    
    InitializeEvent(0, 11029131, 0); // Blue Flag Pickup
    InitializeEvent(0, 11029132, 0); // Blue Flag Update
    InitializeEvent(0, 11029134, 0); // Blue Flag Drop
    InitializeEvent(0, 11029143, 0); // Blue Flag Return
    InitializeEvent(0, 11029144, 0); // Blue Flag Captured
    InitializeEvent(0, 11029135, 0); // Blue Flag Reset
    InitializeEvent(0, 11029136, 0); // Blue Flag Fumble Timer
    InitializeEvent(0, 11029137, 0); // Blue Flag Fumble Trigger A
    InitializeEvent(0, 11029138, 0); // Blue Flag Fumble Trigger B
    InitializeEvent(0, 11029139, 0); // Blue Flag Fumble Animation
    InitializeEvent(0, 11029140, 0); // Blue Flag Fumble Drop
    InitializeEvent(0, 11029146, 0); // Blue Lose
    InitializeEvent(0, 11029152, 0); // Blue Flag Out Of Bounds Reset
    InitializeEvent(0, 11029156, 0); // Blue Lizard Notifier
    
    /* Powerups */
    InitializeEvent(0, 11029901, 9010, 9500); // Give SP Ammo Handler
    InitializeEvent(0, 11029902, 0);          // Remove last speical arrow bugfix
    InitializeEvent(0, 11029900, 1029150, 1029151, 10030175, 9035, 4500); // Powerup 00
    InitializeEvent(1, 11029900, 1029152, 1029153, 10030166, 9026, 5400); // Powerup 01
    InitializeEvent(2, 11029900, 1029154, 1029155, 10030165, 9025, 5400); // Powerup 02
    InitializeEvent(3, 11029900, 1029156, 1029157, 10030174, 9034, 4500); // Powerup 03
    InitializeEvent(4, 11029900, 1029158, 1029159, 10030160, 9010, 4500); // Powerup 04
    InitializeEvent(5, 11029900, 1029160, 1029161, 10030167, 9027, 3600); // Powerup 05
    InitializeEvent(6, 11029900, 1029162, 1029163, 10030170, 9030, 3600); // Powerup 06
    InitializeEvent(7, 11029900, 1029164, 1029165, 10030163, 9023, 1350); // Powerup 07
    InitializeEvent(8, 11029900, 1029166, 1029167, 10030163, 9023, 1350); // Powerup 08
    InitializeEvent(9, 11029900, 1029168, 1029169, 10030163, 9023, 1350); // Powerup 09
    InitializeEvent(10, 11029900, 1029170, 1029171, 10030161, 9021, 600); // Powerup 10
    InitializeEvent(11, 11029900, 1029172, 1029173, 10030161, 9021, 600); // Powerup 11
    InitializeEvent(12, 11029900, 1029174, 1029175, 10030162, 9022, 1800); // Powerup 12
    InitializeEvent(13, 11029900, 1029176, 1029177, 10030162, 9022, 1800); // Powerup 13
    InitializeEvent(14, 11029900, 1029178, 1029179, 10030164, 9024, 2700); // Powerup 14
    InitializeEvent(15, 11029900, 1029180, 1029181, 10030171, 9031, 2700); // Powerup 15
    InitializeEvent(16, 11029900, 1029182, 1029183, 10030172, 9032, 2700); // Powerup 16
    InitializeEvent(17, 11029900, 1029184, 1029185, 10030168, 9028, 3600); // Powerup 17
    InitializeEvent(18, 11029900, 1029186, 1029187, 10030173, 9033, 3600); // Powerup 18
    InitializeEvent(19, 11029900, 1029188, 1029189, 10030161, 9021, 900); // Powerup 19
    
    /* Set some properties */
    SetCharacterInvincibility(1029111, Enabled);  // Make red flag invincible
    ActivateHit(1029111, Disabled);               // Make red flag no-collide players and avoid all attacks
    SetCharacterInvincibility(1029131, Enabled);  // Make blue flag invincible
    ActivateHit(1029131, Disabled);               // Make blue flag no-collide players and avoid all attacks
    
    /* Welcome! */
    WaitFixedTimeSeconds(3.25);
    DisplayStatusMessage(10010607, Enabled);  // Lobby entrance message
});

/* Hangemhigh Red Lizard Notifier */
// Dislpay message if lizard stolen
Event(11029155, Default, function() {
    SetNetworkSyncState(Disabled);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 1029111, 1029135);
    IfConditionGroup(MAIN, PASS, AND_01);
    IfInoutsideArea(AND_01, InsideOutsideState.Outside, 1029111, 1029135);
    IfConditionGroup(MAIN, PASS, AND_01);
    DisplayMessage(10010632, 0);
    WaitFixedTimeSeconds(15);
    EndUnconditionally(EventEndType.Restart);
});

/* Hangemhigh Blue Lizard Notifier */
// Dislpay message if lizard stolen
Event(11029156, Default, function() {
    SetNetworkSyncState(Disabled);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 1029031, 1029012);
    IfConditionGroup(MAIN, PASS, AND_01);
    IfInoutsideArea(AND_01, InsideOutsideState.Outside, 1029031, 1029012);
    IfConditionGroup(MAIN, PASS, AND_01);
    DisplayMessage(10010633, 0);
    WaitFixedTimeSeconds(15);
    EndUnconditionally(EventEndType.Restart);
});

/* Hangemhigh Give Team Change Items */
// If we are in the staging area, and we are NOT the host, give the team changing items.
Event(11029101, Default, function() {
    SetNetworkSyncState(Disabled);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 1029100);
    IfMultiplayerState(AND_01, MultiplayerState.Client);
    IfPlayerHasdoesntHaveItem(AND_01, ItemType.Goods, 265, OwnershipState.DoesntOwn);
    IfPlayerHasdoesntHaveItem(AND_01, ItemType.Goods, 266, OwnershipState.DoesntOwn);
    IfCharacterType(OR_01, 10000, TargetType.WhitePhantom);
    IfCharacterType(OR_01, 10000, TargetType.BlackPhantom);
    IfCharacterType(OR_01, 10000, TargetType.Invader);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfConditionGroup(MAIN, PASS, AND_01);
    AwardItemsIncludingClients(5050);
    WaitFixedTimeSeconds(1);
    EndUnconditionally(EventEndType.Restart);
});

/* Hangemhigh Remove Team Change Items */
// If we are outside the staging area, remove team change items.
Event(11029102, Default, function() {
    SetNetworkSyncState(Disabled);
    IfInoutsideArea(AND_01, InsideOutsideState.Outside, 10000, 1029100);
    IfPlayerHasdoesntHaveItem(AND_01, ItemType.Goods, 265, OwnershipState.Owns);
    IfPlayerHasdoesntHaveItem(AND_01, ItemType.Goods, 266, OwnershipState.Owns);
    IfConditionGroup(MAIN, PASS, AND_01);
    RemoveItemFromPlayer(ItemType.Goods, 265, 1);
    RemoveItemFromPlayer(ItemType.Goods, 266, 1);
    WaitFixedTimeSeconds(1);
    EndUnconditionally(EventEndType.Restart);
});

/* Hangemhigh Give Hollowing Item */
// If we are in the invasion area, and we are singleplayer, and we are team 1 (alive), give hollow orb
Event(11029148, Default, function() {
    SetNetworkSyncState(Disabled);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 1029102);
    IfMultiplayerState(AND_01, MultiplayerState.Singleplayer);
    IfPlayerHasdoesntHaveItem(AND_01, ItemType.Goods, 269, OwnershipState.DoesntOwn);
    IfCharacterType(AND_01, 10000, TargetType.Alive);
    IfCharacterHasSpeffect(AND_01, 10000, 4610, false);
    IfCharacterHasSpeffect(AND_01, 10000, 4613, false);
    IfConditionGroup(MAIN, PASS, AND_01);
    AwardItemLot(5058);
    WaitFixedTimeSeconds(1);
    EndUnconditionally(EventEndType.Restart);
});

/* Hangemhigh Remove Hollowing Item */
// If we are ouside the invasion area, are in multiplayer, are hollow, or have arena speffs, we remove the hollow orb
Event(11029149, Default, function() {
    SetNetworkSyncState(Disabled);
    IfInoutsideArea(OR_01, InsideOutsideState.Outside, 10000, 1029102);
    IfMultiplayerState(OR_01, MultiplayerState.Multiplayer);
    IfCharacterType(OR_01, 10000, TargetType.Hollow);
    IfPlayerHasdoesntHaveItem(AND_01, ItemType.Goods, 269, OwnershipState.Owns);
    IfCharacterHasSpeffect(OR_01, 10000, 4610, true);
    IfCharacterHasSpeffect(OR_01, 10000, 4613, true);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfConditionGroup(MAIN, PASS, AND_01);
    RemoveItemFromPlayer(ItemType.Goods, 269, 1);
    WaitFixedTimeSeconds(1);
    EndUnconditionally(EventEndType.Restart);
});

/* Hangemhigh Clear Arena Speff 3 Frame Delay Fix */
// There is a delay betweeen clearing 4610 and returning to proper human/hollow, so I clear the effects to sort out a minor issue. Not critical.
Event(11029150, Default, function() {
    SetNetworkSyncState(Disabled);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 1029102);
    IfMultiplayerState(AND_01, MultiplayerState.Singleplayer);
    IfConditionGroup(MAIN, PASS, AND_01);
    ClearSpeffect(10000, 4610);
    WaitFixedTimeSeconds(0.05);
    ClearSpeffect(10000, 4613);
    
    EndUnconditionally(EventEndType.Restart);
});
    

/* Hangemhigh Staging Area Auto-Invade Script */
// Small area that players can stand in and it will constantly search for players to invade. Also clears arena speff so you can invade while hollow
Event(11029103, Default, function() {
    SetNetworkSyncState(Disabled);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 1029102);
    IfMultiplayerState(AND_01, MultiplayerState.Singleplayer);
    IfConditionGroup(MAIN, PASS, AND_01);
    WaitFixedTimeSeconds(1.5);
    
    IfInoutsideArea(AND_02, InsideOutsideState.Inside, 10000, 1029102);
    IfMultiplayerState(AND_02, MultiplayerState.Singleplayer);
    IfConditionGroup(MAIN, PASS, AND_02);
    SetSpeffect(10000, 11);
    WaitFixedTimeSeconds(20);
    
    EndUnconditionally(EventEndType.Restart);
});


/* Hangemhigh Return to Firelink */
/* Ends multiplayer session. For hosts it returns you to firelink and for phantoms it black crystals you out */
Event(11029104, Default, function() {
    SetNetworkSyncState(Disabled); // Don't sync this becasue it invovles time delayed moving of players
    IfActionButton(MAIN, TargetEntityType.Object, 1029103, 180, 100, 2, 10010608, ReactionType.All, 0);
    RotateCharacter(10000, 1029103);
    ForceAnimationPlayback(10000, 7114, false, false, false);
    WaitFixedTimeSeconds(0.7);
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 17, 90021);
    WaitFixedTimeSeconds(1.5);
    SkipIfMultiplayerState(2, MultiplayerState.Client); // Skip to ::1
    WarpPlayer(10, 2, 1020966);
    EndUnconditionally(EventEndType.Restart);
    // ::1
    SetSpeffect(10000, 7);
    EndUnconditionally(EventEndType.Restart);
});

/* Hangemhigh Join Game */
/* Bonfire that warps you into the actual map play area. */
Event(11029105, Default, function() {
    SetNetworkSyncState(Disabled); // Don't sync this becasue it invovles time delayed moving of players
    IfActionButton(MAIN, TargetEntityType.Object, 1029104, 180, 100, 2, 10010601, ReactionType.All, 0);
    RotateCharacter(10000, 1029104);
    ForceAnimationPlayback(10000, 7114, false, false, false);
    WaitFixedTimeSeconds(0.7);
    
    //PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1029106, 10, 2); // DEBUG!!!
    //EndUnconditionally(EventEndType.Restart);                                       // DEBUG!!!
    
    SkipIfMultiplayerState(2, MultiplayerState.Multiplayer); // Skip to ::1
    DisplayGenericDialog(10010609, PromptType.OKCANCEL, NumberofOptions.NoButtons, 10000, 1);
    EndUnconditionally(EventEndType.Restart);
    // ::1
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 17, 90021);
    WaitFixedTimeSeconds(1.5);
    IfCharacterType(OR_01, 10000, TargetType.Alive);
    IfCharacterType(OR_01, 10000, TargetType.WhitePhantom);
    SkipIfConditionGroupStateUncompiled(2, PASS, OR_01); // Skip to ::2
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1029106, 10, 2);
    EndUnconditionally(EventEndType.Restart);
    // ::2
    IfCharacterType(OR_02, 10000, TargetType.BlackPhantom);
    IfCharacterType(OR_02, 10000, TargetType.Invader);
    SkipIfConditionGroupStateUncompiled(2, PASS, OR_02); // Skip to ::3
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1029105, 10, 2);
    EndUnconditionally(EventEndType.Restart);
    // ::3
    EndUnconditionally(EventEndType.Restart);
});


/* Hangemhigh Arena No Dead */
/* Applies the Arena No Dead effect to you while you are in the arena. Respawns are handled by scripts so we don't want people dieing. */
Event(11029106, Default, function() {
    SetNetworkSyncState(Disabled);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1029100);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1029101);
    IfInoutsideArea(AND_01, InsideOutsideState.Outside, 10000, 1029102);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetSpeffect(10000, 4613);
    SetSpeffect(10000, 4610);
    ClearSpeffect(10000, 33);
    ClearSpeffect(10000, 34);
    
    WaitFixedTimeSeconds(1);
    EndUnconditionally(EventEndType.Restart);
});

/* Hangemhigh Staging Area Invincibility */
/* Grants full invincibility while in the staging area. Also removes it when you exit. Additionally, invincibility is granted if the player is currently in a 'dead' state in the arena play area. */
Event(11029107, Default, function() {
    SetNetworkSyncState(Disabled);
    WaitFixedTimeSeconds(1);
    IfInoutsideArea(AND_02, InsideOutsideState.Inside, 10000, 1029101);
    IfCharacterHasSpeffect(AND_02, 10000, 9100, true);
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_02); // Skip to ::2
    SetCharacterInvincibility(10000, Enabled);
    EndUnconditionally(EventEndType.Restart);
    // ::2
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 1029100);
    SkipIfConditionGroupStateUncompiled(2, PASS, AND_01); // Skip to ::1
    SetCharacterInvincibility(10000, Disabled);
    EndUnconditionally(EventEndType.Restart);
    // ::1
    SetCharacterInvincibility(10000, Enabled);
    BonfirelikeRecovery();
    SetSpeffect(10000, 9112);
    EndUnconditionally(EventEndType.Restart);
});

/* Hangemhigh Play Area Offline Kickout */
/* If you are in the Hangemhigh play area (the actual Hangemhigh map) and you are in singleplayer, kick the player to the staging area. */
Event(11029108, Default, function() {
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 1029101);
    IfMultiplayerState(AND_01, MultiplayerState.Singleplayer);
    IfConditionGroup(MAIN, PASS, AND_01);
    WaitFixedTimeSeconds(3);
    WarpPlayer(10, 2, 1020997);
});

/* Hangemhigh Give Lobby Items */
// If we are in the staging area, and we are the host, give lobby summon sign and lobby fingers
Event(11029109, Default, function() {
    SetNetworkSyncState(Disabled);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 1029100);
    IfCharacterType(AND_01, 10000, TargetType.Alive);
    IfPlayerHasdoesntHaveItem(AND_01, ItemType.Goods, 267, OwnershipState.DoesntOwn);
    IfPlayerHasdoesntHaveItem(AND_01, ItemType.Goods, 268, OwnershipState.DoesntOwn);
    IfConditionGroup(MAIN, PASS, AND_01);
    AwardItemLot(5055);
    WaitFixedTimeSeconds(1);
    EndUnconditionally(EventEndType.Restart);
});

/* Hangemhigh Enforce Red Team ID */
// Both invaders and red summons should have their team immideately changed to 6. Prevents friendly fire.
Event(11029110, Default, function() {
    SetNetworkSyncState(Disabled);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1029100);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1029101);
    IfCharacterType(OR_02, 10000, TargetType.BlackPhantom);
    IfCharacterType(OR_02, 10000, TargetType.Invader);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfConditionGroup(AND_01, PASS, OR_02);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetCharacterTeamType(10000, TeamType.Enemy);
    EndUnconditionally(EventEndType.Restart);
});

/* Hangemhigh Red Return To Lobby */
/* Bonfire that warps you from the play area back to the lobby. Red base edition. */
Event(11029111, Default, function() {
    SetNetworkSyncState(Disabled); // Don't sync this becasue it invovles time delayed moving of players
    IfCharacterHasSpeffect(AND_01, 10000, 9105, false);  // Can't take either flag into the lobby
    IfCharacterHasSpeffect(AND_01, 10000, 9106, false);
    IfActionButton(AND_01, TargetEntityType.Object, 1029108, 180, 100, 2, 10010603, ReactionType.All, 0);
    IfConditionGroup(MAIN, PASS, AND_01);
    RotateCharacter(10000, 1029108);
    ForceAnimationPlayback(10000, 7114, false, false, false);
    WaitFixedTimeSeconds(0.7);
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 17, 90021);
    WaitFixedTimeSeconds(1.5);
    RequestCharacterAnimationReset(10000, Interpolation.Uninterpolated);
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1029110, 10, 2);
    EndUnconditionally(EventEndType.Restart);
});

/* Hangemhigh Blue Return To Lobby */
/* Bonfire that warps you from the play area back to the lobby. Blue base edition. */
Event(11029112, Default, function() {
    SetNetworkSyncState(Disabled); // Don't sync this becasue it invovles time delayed moving of players
    IfCharacterHasSpeffect(AND_01, 10000, 9105, false);  // Can't take either flag into the lobby
    IfCharacterHasSpeffect(AND_01, 10000, 9106, false);
    IfActionButton(AND_01, TargetEntityType.Object, 1029109, 180, 100, 2, 10010603, ReactionType.All, 0);
    IfConditionGroup(MAIN, PASS, AND_01);
    RotateCharacter(10000, 1029109);
    ForceAnimationPlayback(10000, 7114, false, false, false);
    WaitFixedTimeSeconds(0.7);
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 17, 90021);
    WaitFixedTimeSeconds(1.5);
    RequestCharacterAnimationReset(10000, Interpolation.Uninterpolated);
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1029110, 10, 2);
    EndUnconditionally(EventEndType.Restart);
});

/* Hangemhigh 'On Death' Handler */
/* When a player reaches 5 hp, and does not yet have the arena dead speff or arena respawn speff, we put them into 'arena dead' state for 10 seconds. Then when the 10 seconds is up we flag them for respawn via speff. */
Event(11029113, Default, function() {
    SetNetworkSyncState(Disabled); //Don't sync this because it displays a message. The part that needs sync (status changes) is handled by the script below.
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 1029101);
    IfCharacterHPValue(AND_01, 10000, ComparisonType.Greater, 5);
    IfCharacterHasSpeffect(AND_01, 10000, 9100, false);
    IfCharacterHasSpeffect(AND_01, 10000, 9101, false);
    IfCharacterHasSpeffect(AND_01, 10000, 9102, false);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    SetSpeffect(10000, 9100);    // Set "Dead" Speff
    
    RemoveItemFromPlayer(ItemType.Weapon, 2107000, 999); // Remove special arrows on death
    RemoveItemFromPlayer(ItemType.Weapon, 2203000, 999);
    RemoveItemFromPlayer(ItemType.Weapon, 2204000, 999);
    
    DisplayGenericDialog(10010617, PromptType.OKCANCEL, NumberofOptions.NoButtons, 10000, 1);

    //RequestCharacterAnimationReset(10000, Interpolation.Uninterpolated);
    //SetSpecialAnimations(10000, 0, -1, -1, -1, -1);   // Force animation reset
    //SetSpecialAnimations(10000, -1, -1, -1, -1, -1);  // Hopefully this isn't needed anymore. (??) It should help with syncing to not have it I hope.
    EndUnconditionally(EventEndType.Restart);
});

/* Hangemhigh Sync'd Respawn Speff Remvoer */
/* When a player dies, we remove any speffs for powerups or status effects. This is synced so as to prevent phantom visual effects for other players. */
Event(11029154, Default, function() {
    IfCharacterHasSpeffect(AND_01, 10000, 9100, true);
    IfConditionGroup(MAIN, PASS, AND_01);
    
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
    
    ClearSpeffect(10000, 510);  // Clear various magic buffs (mostly spells)
    ClearSpeffect(10000, 530);
    ClearSpeffect(10000, 540);
    ClearSpeffect(10000, 541);
    ClearSpeffect(10000, 550);
    ClearSpeffect(10000, 555);
    ClearSpeffect(10000, 570);
    ClearSpeffect(10000, 571);
    ClearSpeffect(10000, 572);
    ClearSpeffect(10000, 573);
    ClearSpeffect(10000, 574);
    ClearSpeffect(10000, 610);
    ClearSpeffect(10000, 611);
    ClearSpeffect(10000, 612);
    ClearSpeffect(10000, 620);
    ClearSpeffect(10000, 640);
    ClearSpeffect(10000, 645);
    ClearSpeffect(10000, 1000);
    ClearSpeffect(10000, 1010);
    ClearSpeffect(10000, 1020);
    ClearSpeffect(10000, 1024);
    ClearSpeffect(10000, 1025);
    ClearSpeffect(10000, 1040);
    ClearSpeffect(10000, 1050);
    ClearSpeffect(10000, 1060);
    ClearSpeffect(10000, 1070);
    ClearSpeffect(10000, 1080);
    ClearSpeffect(10000, 1081);
    ClearSpeffect(10000, 1082);
    ClearSpeffect(10000, 1083);
    ClearSpeffect(10000, 1120);
    ClearSpeffect(10000, 1130);
    ClearSpeffect(10000, 1140);
    ClearSpeffect(10000, 1150);
    ClearSpeffect(10000, 1155);
    ClearSpeffect(10000, 1156);
    ClearSpeffect(10000, 1160);
    ClearSpeffect(10000, 1170);
    ClearSpeffect(10000, 1090);
    ClearSpeffect(10000, 1360);
    ClearSpeffect(10000, 1061);
    ClearSpeffect(10000, 1435);
    ClearSpeffect(10000, 1436);
    ClearSpeffect(10000, 1800);
    
    SetSpeffect(10000, 1303); // Cure all status effects 
    
    EndUnconditionally(EventEndType.Restart);
});

/* Hangemhigh 'On Respawn' Handler */
/* If a player has the 'arena respawn' speff we do a respawn. Also add the 'post respawn' speff to prevent a double respawn due to emevd nonsense. */
Event(11029114, Default, function() {
    SetNetworkSyncState(Disabled); // Do not sync this since we are applying bonfire recovery and doing a cutscene warp
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 1029101);
    IfCharacterHasSpeffect(AND_01, 10000, 9101, true);
    IfCharacterHasSpeffect(AND_01, 10000, 9102, false);
    SkipIfConditionGroupStateUncompiled(1, PASS, AND_01); // I don't know why I wrote it this way. ???
    EndUnconditionally(EventEndType.Restart);
    
    SetSpeffect(10000, 9102);   // Add 'post respawn' speff
    ClearSpeffect(10000, 9100); // Clear 'dead' speff
    ClearSpeffect(10000, 9101); // Clear 'respawn' spefff
    
    BonfirelikeRecovery();      // Recovery
    SetSpeffect(10000, 1330);   // Repair all equipment
    SetSpeffect(10000, 9108);   // Respawn hide effect. Makes you invis for 1 second.
    
    WaitFixedTimeFrames(1);     // Wait 1 frame for the chr.esd state to update
    
    // Pick a respawn point randomly
    ClearEventValue(11029720, 5);
    RandomlySetEventFlagInRange(11029720, 11029724, ON);
    
    IfCharacterType(OR_01, 10000, TargetType.Alive);
    IfCharacterType(OR_01, 10000, TargetType.WhitePhantom);
    SkipIfConditionGroupStateUncompiled(10, PASS, OR_01);      // Skip to ::1
    // Respawns for Red Team
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 11029720);    
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1029120, 10, 2); // Warp to respawn point
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 11029721);    
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1029121, 10, 2); // Warp to respawn point
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 11029722);    
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1029122, 10, 2); // Warp to respawn point
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 11029723);    
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1029123, 10, 2); // Warp to respawn point
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 11029724);    
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1029124, 10, 2); // Warp to respawn point
    // ::1
    IfCharacterType(OR_02, 10000, TargetType.BlackPhantom);
    IfCharacterType(OR_02, 10000, TargetType.Invader);
    SkipIfConditionGroupStateUncompiled(10, PASS, OR_02);      // Skip to ::2
    // Respawns for Blue Team
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 11029720);    
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1029125, 10, 2); // Warp to respawn point
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 11029721);    
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1029126, 10, 2); // Warp to respawn point
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 11029722);    
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1029127, 10, 2); // Warp to respawn point
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 11029723);   
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1029128, 10, 2); // Warp to respawn point
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 11029724);    
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1029129, 10, 2); // Warp to respawn point
    // ::2
    RequestCharacterAnimationReset(10000, Interpolation.Uninterpolated);
    RequestAnimationPlayback(10000, 6950, false, false, false);        // 'Stand up' animation after respawn
    EndUnconditionally(EventEndType.Restart);
});

/* Flag Desync Speff Remover */
/* If the flag is dropped (the 'is dropped' flag is off) then remove the flag carrying speffs. */
Event(11029153, Default, function() {
    SetNetworkSyncState(Disabled); // Don't sync this, doing uncompiled shit
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 11029117);
    IfCharacterHasSpeffect(AND_01, 10000, 9105, true);
    SkipIfConditionGroupStateUncompiled(1, PASS, AND_01);
    SkipUnconditionally(1);
    ClearSpeffect(10000, 9105); // For red flag
    
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 11029133);
    IfCharacterHasSpeffect(AND_01, 10000, 9106, true);
    SkipIfConditionGroupStateUncompiled(1, PASS, AND_01);
    SkipUnconditionally(1);
    ClearSpeffect(10000, 9106); // For blue flag
    
    EndUnconditionally(EventEndType.Restart);
});
    

/* ====================================================== */
/* ====== Bloogulch ctf red team specific scripts. ====== */
/* ====================================================== */

/* Hangemhigh Red Flag Pickup */
/* Script to let a blue team player pickup the red flag. */
Event(11029115, Default, function() {
    IfCharacterType(OR_01, 10000, TargetType.Alive);
    IfCharacterType(OR_01, 10000, TargetType.WhitePhantom);
    IfConditionGroup(AND_01, PASS, OR_01);                       // If on blue team
    
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 11029117);
    IfActionButton(AND_01, TargetEntityType.Character, 1029111, 180, -1, 2.5, 10010613, ReactionType.All, 0);
    IfConditionGroup(MAIN, PASS, AND_01);                      // If flag is not already picked up
    
    RotateCharacter(10000, 1029111);
    ForceAnimationPlayback(10000, 7522, false, false, false);
    SetSpeffect(10000, 9105);                                  // Pickup red flag
    SetEventFlag(11029117, ON);
    SetSpecialAnimations(1029111, -1, -1, -1, -1, -1);
    EndUnconditionally(EventEndType.Restart);
});

/* Hangemhigh Red Flag Update */
/* Keep flag attached to player holding it. If they die, drop the flag on the ground. */
Event(11029116, Default, function() {
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11029117);   // Flag picked up
    IfCharacterHasSpeffect(AND_01, 10000, 9105, true);                  // Has flag
    IfCharacterHasSpeffect(AND_01, 10000, 9100, false);                 // Not dead
    IfConditionGroup(MAIN, PASS, AND_01);
    
    WarpCharacterAndSetFloor(1029111, TargetEntityType.Character, 10000, 91, 1029107);  // Attach flag to player

    SetCharacterGravity(1029111, Disabled);
    EndUnconditionally(EventEndType.Restart);
});

/* Hangemhigh Red Flag Drop */
/* Keep flag attached to player holding it. If they die, drop the flag on the ground. */
Event(11029122, Default, function() {
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11029117);   // Flag picked up
    IfCharacterHasSpeffect(AND_01, 10000, 9105, true);                  // Has flag
    IfCharacterHasSpeffect(AND_01, 10000, 9100, true);                  // Is dead
    IfConditionGroup(OR_01, PASS, AND_01);
    
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 11029117);   // Flag picked up
    IfCharacterHasSpeffect(AND_02, 10000, 9105, true);                  // Has flag
    IfCharacterHasSpeffect(AND_02, 10000, 9100, false);                 // Is dead
    IfActionButton(AND_02, TargetEntityType.Character, 1029111, 180, -1, 2.5, 10010615, ReactionType.All, 0);
    IfConditionGroup(OR_01, PASS, AND_02);
    
    IfConditionGroup(MAIN, PASS, OR_01);
    
    ClearSpeffect(10000, 9105);
    SetCharacterGravity(1029111, Enabled);
    SetEventFlag(11029117, OFF);
    SetSpecialAnimations(1029111, -1, -1, -1, -1, -1)
    EndUnconditionally(EventEndType.Restart);
});

/* Hangemhigh Red Flag Reset */
/* If the flag is on the ground for 30s, reset it. */
Event(11029123, Default, function() {
    SetNetworkSyncState(Disabled);                                          // Don't sync. The player that is nearest will have the update authority to move it back.
    WaitFixedTimeSeconds(1);                                                // Run once a second
    
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 11029117);      // Flag not picked up
    IfInoutsideArea(AND_01, InsideOutsideState.Outside, 1029111, 1029135);  // Flag not at the flag stand
    SkipIfConditionGroupStateUncompiled(2, PASS, AND_01);
    ClearEventValue(11029700, 8);                                           // Clear timer and restart if conditions not met
    EndUnconditionally(EventEndType.Restart);
    
    IncrementEventValue(11029700, 8, 30);                                   // Increment counter 1
    
    IfEventValue(AND_02, 11029700, 8, ComparisonType.Less, 30);
    SkipIfConditionGroupStateUncompiled(2, PASS, AND_02);                   // If the counter reaches 30, return red flag to the stand, and clear counter
    WarpCharacterAndSetFloor(1029111, TargetEntityType.Area, 1029114, -1, 1029107);
    ClearEventValue(11029700, 8);
    EndUnconditionally(EventEndType.Restart);
});

/* Hangemhigh Red Flag Fumble Timer */
/* Counts up to 70 while lizard is held by a player. */
Event(11029124, Default, function() {
    WaitFixedTimeSeconds(1);                                                // Run once a second
    
    EndIfMultiplayerState(EventEndType.End, MultiplayerState.Client);       // Only the host needs to do this
    
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11029117);       // Flag picked up
    SkipIfConditionGroupStateUncompiled(2, PASS, AND_01);
    ClearEventValue(11029710, 8);                                           // Clear timer and restart if conditions not met
    EndUnconditionally(EventEndType.Restart);
    
    IncrementEventValue(11029710, 8, 70);                                   // Increment counter 1
    
    EndUnconditionally(EventEndType.Restart);
});

/* Hangemhigh Red Flag Fumble Trigger A */
/* If fumble timer is over 60 we flag an event to start playing the 'about to fumble' animation on the flag. */
Event(11029125, Default, function() {
    IfEventValue(AND_01, 11029710, 8, ComparisonType.GreaterOrEqual, 60);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    SetEventFlag(11029129, ON);
    
    IfEventValue(AND_01, 11029710, 8, ComparisonType.Less, 60);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    SetEventFlag(11029129, OFF);
    EndUnconditionally(EventEndType.Restart);
});

/* Hangemhigh Red Flag Fumble Trigger B */
/* If fumble timer is over 70 we flag an event to tell everyone the flag is dropped now. */
Event(11029126, Default, function() {
    IfEventValue(AND_01, 11029710, 8, ComparisonType.GreaterOrEqual, 70);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    SetEventFlag(11029130, ON);
    
    IfEventValue(AND_01, 11029710, 8, ComparisonType.Less, 70);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    SetEventFlag(11029130, OFF);
    EndUnconditionally(EventEndType.Restart);
});


/* Hangemhigh Red Flag Fumble Animation */
/* If the fumbling flag is on we play an animation on the flag. */
Event(11029127, Default, function() {
    WaitFixedTimeSeconds(2.5);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11029129);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    SetSpecialAnimations(1029111, 7500, -1, -1, -1, -1);
    EndUnconditionally(EventEndType.Restart);
});

/* Hangemhigh Red Flag Fumble Drop */
/* If the fumble flag is on we drop the flag. */
Event(11029128, Default, function() {
    WaitFixedTimeSeconds(2.5);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11029130);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    SetSpecialAnimations(1029111, -1, -1, -1, -1, -1);
    SetCharacterGravity(1029111, Enabled);
    SetEventFlag(11029117, OFF);
    
    IfCharacterHasSpeffect(AND_02, 10000, 9105, false);
    SkipIfConditionGroupStateUncompiled(1, PASS, AND_02); //* might cause bugs. test. */
    DisplayGenericDialog(10010616, PromptType.OKCANCEL, NumberofOptions.NoButtons, 10000, 1);
    
    ClearSpeffect(10000, 9105);
    
    EndUnconditionally(EventEndType.Restart);
});

/* Hangemhigh Red Flag Return */
/* Script to let a red team player return red flag to base */
Event(11029118, Default, function() {
    IfCharacterType(OR_01, 10000, TargetType.Invader);
    IfCharacterType(OR_01, 10000, TargetType.BlackPhantom);
    IfConditionGroup(AND_01, PASS, OR_01);                       // If on red team
    
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 11029117);                                        
    IfInoutsideArea(AND_01, InsideOutsideState.Outside, 1029111, 1029135);
    IfActionButton(AND_01, TargetEntityType.Character, 1029111, 180, -1, 2.5, 10010614, ReactionType.All, 0);
    IfConditionGroup(MAIN, PASS, AND_01);                       // If flag is not already picked up, and it's not on the stand
    
    RotateCharacter(10000, 1029111);
    ForceAnimationPlayback(10000, 7522, false, false, false);         
    WarpCharacterAndSetFloor(1029111, TargetEntityType.Area, 1029114, -1, 1029107); // Return flag to it's stand
    SetSpecialAnimations(1029111, -1, -1, -1, -1, -1);
    EndUnconditionally(EventEndType.Restart);
});


/* Hangemhigh Red Flag Captured */
/* Script to let a red team player return red flag to base */
Event(11029119, Default, function() {
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 1029111, 1029112);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 1029131, 1029112);
    IfConditionGroup(MAIN, PASS, AND_01);                    // Both red flag and blue flag are in the blue capture zone
    ClearSpeffect(10000, 9105);
    SetEventFlag(11029117, OFF);
    WarpCharacterAndSetFloor(1029111, TargetEntityType.Area, 1029114, -1, 1029107); // Return flag to it's stand
    SetCharacterGravity(1029111, Enabled);
    SetEventFlag(11029120, ON);                              // End game in victory for blue
    EndUnconditionally(EventEndType.Restart);
});

/* Hangemhigh Red Team Lose */
/* Display victory/loss, give rewards, reset game and returns players to lobby. */
Event(11029121, Default, function() {
    SetNetworkSyncState(Disabled); // Should be fine.
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11029120);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    IfCharacterType(OR_01, 10000, TargetType.Alive);
    IfCharacterType(OR_01, 10000, TargetType.WhitePhantom);
    SkipIfConditionGroupStateUncompiled(2, PASS, OR_01);
    DisplayBanner(TextBannerType.YouLose);
    SkipUnconditionally(1);
    DisplayBanner(TextBannerType.YouWin);
    
    WaitFixedTimeSeconds(5.0);

    BonfirelikeRecovery();
    ClearSpeffect(10000, 9100);  // Clear all game state effects
    ClearSpeffect(10000, 9101);
    ClearSpeffect(10000, 9102);
    ClearSpeffect(10000, 9105);
    ClearSpeffect(10000, 9106);
    
    ClearSpeffect(10000, 9021);  // Remove all arena powerup buffs
    ClearSpeffect(10000, 9022);
    ClearSpeffect(10000, 9023);
    ClearSpeffect(10000, 9024);
    ClearSpeffect(10000, 9029);
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
    
    /* Force flag drop and reset */
    SetSpecialAnimations(1029111, -1, -1, -1, -1, -1)
    SetCharacterGravity(1029111, Enabled);
    SetEventFlag(11029117, OFF);
    WarpCharacterAndSetFloor(1029111, TargetEntityType.Area, 1029114, -1, 1029107); // Return red flag to it's stand
    SetSpecialAnimations(1029131, -1, -1, -1, -1, -1)
    SetCharacterGravity(1029131, Enabled);
    SetEventFlag(11029133, OFF);
    WarpCharacterAndSetFloor(1029131, TargetEntityType.Area, 1029134, -1, 1029107); // Return blue flag to it's stand
    
    /* Return to lobby and ready for next match */
    RequestCharacterAnimationReset(10000, Interpolation.Uninterpolated);
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1029113, 10, 2);
    SetEventFlag(11029120, OFF);
    
    /* Award loot */
    WaitFixedTimeSeconds(3.0);
    AwardItemsIncludingClients(5005);
    AwardItemsIncludingClients(5005);
    IfCharacterType(OR_02, 10000, TargetType.Alive);
    IfCharacterType(OR_02, 10000, TargetType.WhitePhantom);
    SkipIfConditionGroupStateUncompiled(1, PASS, OR_02);
    SkipUnconditionally(1);
    AwardItemsIncludingClients(5005);
    EndUnconditionally(EventEndType.Restart);
});

/* Hangemhigh Red Flag Out Of Bounds Reset */
/* If the flag falls out of the map area, reset it fully. */
Event(11029151, Default, function() {
    IfInoutsideArea(AND_01, InsideOutsideState.Outside, 1029111, 1029101);         // If red flag is outside of the map play area
    IfConditionGroup(MAIN, PASS, AND_01);
    
    SetSpecialAnimations(1029111, -1, -1, -1, -1, -1)
    SetCharacterGravity(1029111, Enabled);
    SetEventFlag(11029117, OFF);
    WarpCharacterAndSetFloor(1029111, TargetEntityType.Area, 1029114, -1, 1029107); // Return red flag to it's stand
    ClearSpeffect(10000, 9105);
    EndUnconditionally(EventEndType.Restart);
});


/* ======================================================= */
/* ====== Bloogulch ctf blue team specific scripts. ====== */
/* ======================================================= */


/* Hangemhigh Blue Flag Pickup */
/* Script to let a Red team player pickup the Blue flag. */
Event(11029131, Default, function() {
    IfCharacterType(OR_01, 10000, TargetType.Invader);
    IfCharacterType(OR_01, 10000, TargetType.BlackPhantom);
    IfConditionGroup(AND_01, PASS, OR_01);                       // If on Red team
    
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 11029133);
    IfActionButton(AND_01, TargetEntityType.Character, 1029131, 180, -1, 2.5, 10010613, ReactionType.All, 0);
    IfConditionGroup(MAIN, PASS, AND_01);                      // If flag is not already picked up
    
    RotateCharacter(10000, 1029131);
    ForceAnimationPlayback(10000, 7522, false, false, false);
    SetSpeffect(10000, 9106);                                  // Pickup Blue flag
    SetEventFlag(11029133, ON);
    SetSpecialAnimations(1029131, -1, -1, -1, -1, -1);
    EndUnconditionally(EventEndType.Restart);
});

/* Hangemhigh Blue Flag Update */
/* Keep flag attached to player holding it. If they die, drop the flag on the ground. */
Event(11029132, Default, function() {
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11029133);   // Flag picked up
    IfCharacterHasSpeffect(AND_01, 10000, 9106, true);                  // Has flag
    IfCharacterHasSpeffect(AND_01, 10000, 9100, false);                 // Not dead
    IfConditionGroup(MAIN, PASS, AND_01);
    
    WarpCharacterAndSetFloor(1029131, TargetEntityType.Character, 10000, 91, 1029107);  // Attach flag to player

    SetCharacterGravity(1029131, Disabled);
    EndUnconditionally(EventEndType.Restart);
});

/* Hangemhigh Blue Flag Drop */
/* Keep flag attached to player holding it. If they die, drop the flag on the ground. */
Event(11029134, Default, function() {
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11029133);   // Flag picked up
    IfCharacterHasSpeffect(AND_01, 10000, 9106, true);                  // Has flag
    IfCharacterHasSpeffect(AND_01, 10000, 9100, true);                  // Is dead
    IfConditionGroup(OR_01, PASS, AND_01);
    
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 11029133);   // Flag picked up
    IfCharacterHasSpeffect(AND_02, 10000, 9106, true);                  // Has flag
    IfCharacterHasSpeffect(AND_02, 10000, 9100, false);                 // Is dead
    IfActionButton(AND_02, TargetEntityType.Character, 1029131, 180, -1, 2.5, 10010615, ReactionType.All, 0);
    IfConditionGroup(OR_01, PASS, AND_02);
    
    IfConditionGroup(MAIN, PASS, OR_01);
    
    ClearSpeffect(10000, 9106);
    SetCharacterGravity(1029131, Enabled);
    SetEventFlag(11029133, OFF);
    SetSpecialAnimations(1029131, -1, -1, -1, -1, -1)
    EndUnconditionally(EventEndType.Restart);
});

/* Hangemhigh Blue Flag Reset */
/* If the flag is on the ground for 30s, reset it. */
Event(11029135, Default, function() {
    SetNetworkSyncState(Disabled);                                          // Don't sync. The player that is nearest will have the update authority to move it back.
    WaitFixedTimeSeconds(1);                                                // Run once a second
    
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 11029133);      // Flag not picked up
    IfInoutsideArea(AND_01, InsideOutsideState.Outside, 1029131, 1029112);  // Flag not at the flag stand
    SkipIfConditionGroupStateUncompiled(2, PASS, AND_01);
    ClearEventValue(11029730, 8);                                           // Clear timer and restart if conditions not met
    EndUnconditionally(EventEndType.Restart);
    
    IncrementEventValue(11029730, 8, 30);                                   // Increment counter 1
    
    IfEventValue(AND_02, 11029730, 8, ComparisonType.Less, 30);
    SkipIfConditionGroupStateUncompiled(2, PASS, AND_02);                   // If the counter reaches 30, return Blue flag to the stand, and clear counter
    WarpCharacterAndSetFloor(1029131, TargetEntityType.Area, 1029134, -1, 1029107);
    ClearEventValue(11029730, 8);
    EndUnconditionally(EventEndType.Restart);
});

/* Hangemhigh Blue Flag Fumble Timer */
/* Counts up to 70 while lizard is held by a player. */
Event(11029136, Default, function() {
    WaitFixedTimeSeconds(1);                                                // Run once a second
    
    EndIfMultiplayerState(EventEndType.End, MultiplayerState.Client);       // Only the host needs to do this
    
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11029133);       // Flag picked up
    SkipIfConditionGroupStateUncompiled(2, PASS, AND_01);
    ClearEventValue(11029740, 8);                                           // Clear timer and restart if conditions not met
    EndUnconditionally(EventEndType.Restart);
    
    IncrementEventValue(11029740, 8, 70);                                   // Increment counter 1
    
    EndUnconditionally(EventEndType.Restart);
});

/* Hangemhigh Blue Flag Fumble Trigger A */
/* If fumble timer is over 60 we flag an event to start playing the 'about to fumble' animation on the flag. */
Event(11029137, Default, function() {
    IfEventValue(AND_01, 11029740, 8, ComparisonType.GreaterOrEqual, 60);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    SetEventFlag(11029141, ON);
    
    IfEventValue(AND_01, 11029740, 8, ComparisonType.Less, 60);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    SetEventFlag(11029141, OFF);
    EndUnconditionally(EventEndType.Restart);
});

/* Hangemhigh Blue Flag Fumble Trigger B */
/* If fumble timer is over 70 we flag an event to tell everyone the flag is dropped now. */
Event(11029138, Default, function() {
    IfEventValue(AND_01, 11029740, 8, ComparisonType.GreaterOrEqual, 70);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    SetEventFlag(11029142, ON);
    
    IfEventValue(AND_01, 11029740, 8, ComparisonType.Less, 70);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    SetEventFlag(11029142, OFF);
    EndUnconditionally(EventEndType.Restart);
});


/* Hangemhigh Blue Flag Fumble Animation */
/* If the fumbling flag is on we play an animation on the flag. */
Event(11029139, Default, function() {
    WaitFixedTimeSeconds(2.5);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11029141);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    SetSpecialAnimations(1029131, 7500, -1, -1, -1, -1);
    EndUnconditionally(EventEndType.Restart);
});

/* Hangemhigh Blue Flag Fumble Drop */
/* If the fumble flag is on we drop the flag. */
Event(11029140, Default, function() {
    WaitFixedTimeSeconds(2.5);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11029142);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    SetSpecialAnimations(1029131, -1, -1, -1, -1, -1);
    SetCharacterGravity(1029131, Enabled);
    SetEventFlag(11029133, OFF);
    
    IfCharacterHasSpeffect(AND_02, 10000, 9106, false);
    SkipIfConditionGroupStateUncompiled(1, PASS, AND_02); //* might cause bugs. test. */
    DisplayGenericDialog(10010616, PromptType.OKCANCEL, NumberofOptions.NoButtons, 10000, 1);
    
    ClearSpeffect(10000, 9106);
    
    EndUnconditionally(EventEndType.Restart);
});

/* Hangemhigh Blue Flag Return */
/* Script to let a Blue team player return Blue flag to base */
Event(11029143, Default, function() {
    IfCharacterType(OR_01, 10000, TargetType.Alive);
    IfCharacterType(OR_01, 10000, TargetType.WhitePhantom);
    IfConditionGroup(AND_01, PASS, OR_01);                       // If on Blue team
    
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 11029133);                                        
    IfInoutsideArea(AND_01, InsideOutsideState.Outside, 1029131, 1029112);
    IfActionButton(AND_01, TargetEntityType.Character, 1029131, 180, -1, 2.5, 10010614, ReactionType.All, 0);
    IfConditionGroup(MAIN, PASS, AND_01);                       // If flag is not already picked up, and it's not on the stand
    
    RotateCharacter(10000, 1029131);
    ForceAnimationPlayback(10000, 7522, false, false, false);         
    WarpCharacterAndSetFloor(1029131, TargetEntityType.Area, 1029134, -1, 1029107); // Return flag to it's stand
    SetSpecialAnimations(1029131, -1, -1, -1, -1, -1);
    EndUnconditionally(EventEndType.Restart);
});

/* Hangemhigh Blue Flag Captured */
/* Script to let a Blue team player return Blue flag to base */
Event(11029144, Default, function() {
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 1029111, 1029135);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 1029131, 1029135);
    IfConditionGroup(MAIN, PASS, AND_01);                    // Both Blue flag and Red flag are in the Red capture zone
    ClearSpeffect(10000, 9106);
    SetEventFlag(11029133, OFF);
    WarpCharacterAndSetFloor(1029131, TargetEntityType.Area, 1029134, -1, 1029107); // Return flag to it's stand
    SetCharacterGravity(1029131, Enabled);
    SetEventFlag(11029145, ON);                              // End game in victory for Red
    EndUnconditionally(EventEndType.Restart);
});

/* Hangemhigh Blue Team Lose */
/* Display victory/loss, give rewards, reset game and returns players to lobby. */
Event(11029146, Default, function() {
    SetNetworkSyncState(Disabled); // Should be fine.
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11029145);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    IfCharacterType(OR_01, 10000, TargetType.Invader);
    IfCharacterType(OR_01, 10000, TargetType.BlackPhantom);
    SkipIfConditionGroupStateUncompiled(2, PASS, OR_01);
    DisplayBanner(TextBannerType.YouLose);
    SkipUnconditionally(1);
    DisplayBanner(TextBannerType.YouWin);
    
    WaitFixedTimeSeconds(5.0);

    BonfirelikeRecovery();
    ClearSpeffect(10000, 9100);  // Clear all game state effects
    ClearSpeffect(10000, 9101);
    ClearSpeffect(10000, 9102);
    ClearSpeffect(10000, 9105);
    ClearSpeffect(10000, 9106);
    
    ClearSpeffect(10000, 9021);  // Remove all arena powerup buffs
    ClearSpeffect(10000, 9022);
    ClearSpeffect(10000, 9023);
    ClearSpeffect(10000, 9024);
    ClearSpeffect(10000, 9025);
    ClearSpeffect(10000, 9026);
    ClearSpeffect(10000, 9028);
    ClearSpeffect(10000, 9027);
    ClearSpeffect(10000, 9029);
    ClearSpeffect(10000, 9030);
    ClearSpeffect(10000, 9031);
    ClearSpeffect(10000, 9032);
    ClearSpeffect(10000, 9033);
    ClearSpeffect(10000, 9034);
    ClearSpeffect(10000, 9035);
    ClearSpeffect(10000, 9041);
    
    /* Force flag drop and reset */
    SetSpecialAnimations(1029111, -1, -1, -1, -1, -1)
    SetCharacterGravity(1029111, Enabled);
    SetEventFlag(11029117, OFF);
    WarpCharacterAndSetFloor(1029111, TargetEntityType.Area, 1029114, -1, 1029107); // Return red flag to it's stand
    SetSpecialAnimations(1029131, -1, -1, -1, -1, -1)
    SetCharacterGravity(1029131, Enabled);
    SetEventFlag(11029133, OFF);
    WarpCharacterAndSetFloor(1029131, TargetEntityType.Area, 1029134, -1, 1029107); // Return blue flag to it's stand
    
    /* Return to lobby and ready for next match */
    RequestCharacterAnimationReset(10000, Interpolation.Uninterpolated);
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1029113, 10, 2);
    SetEventFlag(11029145, OFF);
    
    /* Award loot */
    WaitFixedTimeSeconds(3.0);
    AwardItemsIncludingClients(5005);
    AwardItemsIncludingClients(5005);
    IfCharacterType(OR_02, 10000, TargetType.Invader);
    IfCharacterType(OR_02, 10000, TargetType.BlackPhantom);
    SkipIfConditionGroupStateUncompiled(1, PASS, OR_02);
    SkipUnconditionally(1);
    AwardItemsIncludingClients(5005);
    EndUnconditionally(EventEndType.Restart);
});

/* Hangemhigh Blue Flag Out Of Bounds Reset */
/* If the flag falls out of the map area, reset it fully. */
Event(11029152, Default, function() {
    IfInoutsideArea(AND_01, InsideOutsideState.Outside, 1029131, 1029101);         // If blue flag is outside of the map play area
    IfConditionGroup(MAIN, PASS, AND_01);
    
    SetSpecialAnimations(1029131, -1, -1, -1, -1, -1)
    SetCharacterGravity(1029131, Enabled);
    SetEventFlag(11029133, OFF);
    WarpCharacterAndSetFloor(1029131, TargetEntityType.Area, 1029134, -1, 1029107); // Return blue flag to it's stand
    ClearSpeffect(10000, 9106);
    EndUnconditionally(EventEndType.Restart);
});

/* == Special IDs == */
// 11029720 -> 11029724 - Randomize Respawn Flags - 5 Bits
// 11029750 -> 11029757 - Red kill counter - 8 Bits
// 11029760 -> 11029767 - Blue kill counter - 8 Bits

/* === ID Dictionary === */
// 11029200 - Damnation Init Script
// 1029200 - Damnation Staging Area Region
// 1029201 - Damnation Region
// 11029201 - Damnation Give Team Change Items
// 11029202 - Damnation Remove Team Change Items
// 11029203 - Damnation Staging Area Auto-Invade
// 1029202 - Damnation Staging Area Auto-Invade Region
// 11029204 - Damnation Return To Firelink Script
// 1029203 - Damnation Return To Firelink Bonfire
// 11029205 - Damnation Join game Script
// 1029204 - Damnation Join Game Bonfire
// 1029205 - Damnation Join Game Red Warp
// 1029206 - Damnation Join Game Blue Warp
// 11029206 - Damnation Arena No Dead Apply
// 11029207 - Damnation Staging Area Invincibility
// 11029208 - Damnation Offline Kick Out
// 1029207 - Damnation Map Collision
// 11029209 - Damnation give lobby summon sign and fingers
// 11029210 - Damnation enforce red team id
// 1029208 - Damnation Red Return To Lobby Bonfire
// 1029209 - Damnation Blue Return To Lobby Bonfire
// 1029210 - Damnation Return To Lobby Target Region
// 11029211 - Damnation Return to Lobby: Red
// 11029212 - Damnation Return to Lobby: Blue
// 11029213 - Damnation 'On Death' Handler
// 11029214 - Damnation 'On Respawn' Handler
// 1029220 -> 1029224 - Red Team Respawn Points
// 1029225 -> 1029229 - Blue Team Respawn Points
// 1029213 - Damnation Game Over Return Target Region
// 11029220 - Damnation Red Lose Flag
// 11029221 - Damnation Red Lose Script
// 11029245 - Damnation Blue Lose Flag
// 11029246 - Damnation Blue Lose Script
// 11029248 - Damnation Give Hollowing Item
// 11029249 - Damnation Remove Hollowing Item
// 11029250 - Damnation Remove Arena Speff Auto-Invade Fix
// 11029254 - Damnation Respawn Sync'd Speff Remover
// 11029252 - Damnation Kill Counter
// 11029223 - Damnation Kill Threshold Messages
// 1029298 - Ladder 00
// 1029299 - Ladder 01
// 11029290 -> 11029293 - Ladder Flags
// 1029297 - Fall Killbox
// 11029294 - Killbox Script
// 11029260 - Damnation Red On Death Kill Count
// 11029261 - Damnation Blue On Death Kill Count


/* Damnation Init General */
Event(11029200, Default, function() {
    
    /* Initialize some variables, only the host does this. */
    SkipIfMultiplayerState(5, MultiplayerState.Client);
    ClearEventValue(11029720, 5); // Clear randomize respawn flags
    ClearEventValue(11029750, 8); // Clear red kill counter
    ClearEventValue(11029760, 8); // Clear red kill counter
    SetEventFlag(11029220, OFF);  // Reset red lose flag
    SetEventFlag(11029245, OFF);  // Reset blue lose flag
    
    /* Start arena scripts, but only once we enter the lobby. */
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1029200); // Don't init DM arena unless we are in the staging area (or map)
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1029201);
    IfConditionGroup(MAIN, PASS, OR_01);
    InitializeEvent(0, 11029201, 0); // Give team change items while in staging area
    InitializeEvent(0, 11029202, 0); // Remove team change items if outside staging area
    InitializeEvent(0, 11029203, 0); // Auto-Invade area
    InitializeEvent(0, 11029204, 0); // Return to Firelink
    InitializeEvent(0, 11029205, 0); // Join game
    InitializeEvent(0, 11029206, 0); // Arena No Dead
    InitializeEvent(0, 11029207, 0); // Staging Area Invincibility
    InitializeEvent(0, 11029208, 0); // Offline Kick Out                              // DEBUG!!!
    InitializeEvent(0, 11029209, 0); // Give lobby summon sign and dried fingers
    InitializeEvent(0, 11029210, 0); // Enforce red team id
    InitializeEvent(0, 11029211, 0); // Return to lobby: Red
    InitializeEvent(0, 11029212, 0); // Return to lobby: Blue
    InitializeEvent(0, 11029213, 0); // 'On Death' Handler
    InitializeEvent(0, 11029214, 0); // 'On Respawn' Handler
    InitializeEvent(0, 11029248, 0); // Give Hollowing Item
    InitializeEvent(0, 11029249, 0); // Remove Hollowing Item
    InitializeEvent(0, 11029250, 0); // Remove Arena Speff Auto-Invade Fix
    InitializeEvent(0, 11029254, 0); // Synced Respawn Speff Remover
    
    InitializeEvent(0, 11029222, 0); // Red Kill Counter
    InitializeEvent(0, 11029223, 0); // Red Kill Threshold Messages
    InitializeEvent(0, 11029221, 0); // Red Lose
    InitializeEvent(0, 11029260, 0); // Red On Death Kill Count
    
    InitializeEvent(0, 11029224, 0); // Blue Kill Counter
    InitializeEvent(0, 11029225, 0); // Blue Kill Threshold Messages
    InitializeEvent(0, 11029246, 0); // Blue Lose
    InitializeEvent(0, 11029261, 0); // Blue On Death Kill Count
    
    /* Ladders */
    RegisterLadder(11029290, 11029291, 1029298);
    RegisterLadder(11029292, 11029293, 1029299);
    
    /* Teleporters */
    InitializeEvent(0, 11029905, 1029240, 1029241); // Teleporter A Interact
    InitializeEvent(0, 11029906, 1029242, 1029243); // Teleporter A Trigger
    InitializeEvent(1, 11029905, 1029244, 1029245); // Teleporter B Interact
    InitializeEvent(1, 11029906, 1029246, 1029247); // Teleporter B Trigger
    
    /* Powerups */
    InitializeEvent(0, 11029901, 9010, 9500); // Give SP Ammo Handler
    InitializeEvent(0, 11029902, 0);          // Remove last speical arrow bugfix
    InitializeEvent(0, 11029900, 1029250, 1029251, 10030175, 9035, 4500); // Powerup 00
    InitializeEvent(1, 11029900, 1029252, 1029253, 10030162, 9022, 1800); // Powerup 01
    InitializeEvent(2, 11029900, 1029254, 1029255, 10030163, 9023, 1800); // Powerup 02
    InitializeEvent(3, 11029900, 1029256, 1029257, 10030164, 9024, 2700); // Powerup 03
    InitializeEvent(4, 11029900, 1029258, 1029259, 10030161, 9021, 600); // Powerup 04
    InitializeEvent(5, 11029900, 1029260, 1029261, 10030168, 9028, 3600); // Powerup 05
    InitializeEvent(6, 11029900, 1029262, 1029263, 10030173, 9033, 3600); // Powerup 06
    InitializeEvent(7, 11029900, 1029264, 1029265, 10030170, 9030, 3600); // Powerup 07
    InitializeEvent(8, 11029900, 1029266, 1029267, 10030162, 9022, 1800); // Powerup 08
    InitializeEvent(9, 11029900, 1029268, 1029269, 10030163, 9023, 1800); // Powerup 09
    InitializeEvent(10, 11029900, 1029270, 1029271, 10030161, 9021, 600); // Powerup 10
    InitializeEvent(11, 11029900, 1029272, 1029273, 10030160, 9010, 4500); // Powerup 11
    InitializeEvent(12, 11029900, 1029274, 1029275, 10030167, 9027, 3600); // Powerup 12
    InitializeEvent(13, 11029900, 1029276, 1029277, 10030166, 9026, 4500); // Powerup 13
    InitializeEvent(14, 11029900, 1029278, 1029279, 10030165, 9025, 5400); // Powerup 14
    InitializeEvent(15, 11029900, 1029280, 1029281, 10030174, 9034, 4500); // Powerup 15
    InitializeEvent(16, 11029900, 1029282, 1029283, 10030171, 9031, 3600); // Powerup 16
    InitializeEvent(17, 11029900, 1029284, 1029285, 10030161, 9021, 600); // Powerup 17
    InitializeEvent(18, 11029900, 1029286, 1029287, 10030162, 9022, 1800); // Powerup 18
    InitializeEvent(19, 11029900, 1029288, 1029289, 10030163, 9023, 1800); // Powerup 19
    InitializeEvent(20, 11029900, 1029290, 1029291, 10030172, 9032, 3600); // Powerup 20
    
    /* Killbox */
    InitializeEvent(0, 11029294, 0);          // Killbox if you fall
    
    /* Welcome! */
    WaitFixedTimeSeconds(3.25);
    DisplayStatusMessage(10010612, Enabled);  // Lobby entrance message
});



/* Damnation Give Team Change Items */
// If we are in the staging area, and we are NOT the host, give the team changing items.
Event(11029201, Default, function() {
    SetNetworkSyncState(Disabled);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 1029200);
    IfMultiplayerState(AND_01, MultiplayerState.Client);
    IfPlayerHasdoesntHaveItem(AND_01, ItemType.Goods, 265, OwnershipState.DoesntOwn);
    IfPlayerHasdoesntHaveItem(AND_01, ItemType.Goods, 266, OwnershipState.DoesntOwn);
    IfCharacterType(OR_01, 10000, TargetType.WhitePhantom);
    IfCharacterType(OR_01, 10000, TargetType.BlackPhantom);
    IfCharacterType(OR_01, 10000, TargetType.Invader);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfConditionGroup(MAIN, PASS, AND_01);
    AwardItemsIncludingClients(5050);
    WaitFixedTimeSeconds(1);
    EndUnconditionally(EventEndType.Restart);
});

/* Damnation Remove Team Change Items */
// If we are outside the staging area, remove team change items.
Event(11029202, Default, function() {
    SetNetworkSyncState(Disabled);
    IfInoutsideArea(AND_01, InsideOutsideState.Outside, 10000, 1029200);
    IfPlayerHasdoesntHaveItem(AND_01, ItemType.Goods, 265, OwnershipState.Owns);
    IfPlayerHasdoesntHaveItem(AND_01, ItemType.Goods, 266, OwnershipState.Owns);
    IfConditionGroup(MAIN, PASS, AND_01);
    RemoveItemFromPlayer(ItemType.Goods, 265, 1);
    RemoveItemFromPlayer(ItemType.Goods, 266, 1);
    WaitFixedTimeSeconds(1);
    EndUnconditionally(EventEndType.Restart);
});

/* Damnation Give Hollowing Item */
// If we are in the invasion area, and we are singleplayer, and we are team 1 (alive), give hollow orb
Event(11029248, Default, function() {
    SetNetworkSyncState(Disabled);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 1029202);
    IfMultiplayerState(AND_01, MultiplayerState.Singleplayer);
    IfPlayerHasdoesntHaveItem(AND_01, ItemType.Goods, 269, OwnershipState.DoesntOwn);
    IfCharacterType(AND_01, 10000, TargetType.Alive);
    IfCharacterHasSpeffect(AND_01, 10000, 4610, false);
    IfCharacterHasSpeffect(AND_01, 10000, 4613, false);
    IfConditionGroup(MAIN, PASS, AND_01);
    AwardItemLot(5058);
    WaitFixedTimeSeconds(1);
    EndUnconditionally(EventEndType.Restart);
});

/* Damnation Remove Hollowing Item */
// If we are ouside the invasion area, are in multiplayer, are hollow, or have arena speffs, we remove the hollow orb
Event(11029249, Default, function() {
    SetNetworkSyncState(Disabled);
    IfInoutsideArea(OR_01, InsideOutsideState.Outside, 10000, 1029202);
    IfMultiplayerState(OR_01, MultiplayerState.Multiplayer);
    IfCharacterType(OR_01, 10000, TargetType.Hollow);
    IfPlayerHasdoesntHaveItem(AND_01, ItemType.Goods, 269, OwnershipState.Owns);
    IfCharacterHasSpeffect(OR_01, 10000, 4610, true);
    IfCharacterHasSpeffect(OR_01, 10000, 4613, true);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfConditionGroup(MAIN, PASS, AND_01);
    RemoveItemFromPlayer(ItemType.Goods, 269, 1);
    WaitFixedTimeSeconds(1);
    EndUnconditionally(EventEndType.Restart);
});

/* Damnation Clear Arena Speff 3 Frame Delay Fix */
// There is a delay betweeen clearing 4610 and returning to proper human/hollow, so I clear the effects to sort out a minor issue. Not critical.
Event(11029250, Default, function() {
    SetNetworkSyncState(Disabled);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 1029202);
    IfMultiplayerState(AND_01, MultiplayerState.Singleplayer);
    IfConditionGroup(MAIN, PASS, AND_01);
    ClearSpeffect(10000, 4610);
    WaitFixedTimeSeconds(0.05);
    ClearSpeffect(10000, 4613);
    
    EndUnconditionally(EventEndType.Restart);
});
    

/* Damnation Staging Area Auto-Invade Script */
// Small area that players can stand in and it will constantly search for players to invade. Also clears arena speff so you can invade while hollow
Event(11029203, Default, function() {
    SetNetworkSyncState(Disabled);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 1029202);
    IfMultiplayerState(AND_01, MultiplayerState.Singleplayer);
    IfConditionGroup(MAIN, PASS, AND_01);
    WaitFixedTimeSeconds(1.5);
    
    IfInoutsideArea(AND_02, InsideOutsideState.Inside, 10000, 1029202);
    IfMultiplayerState(AND_02, MultiplayerState.Singleplayer);
    IfConditionGroup(MAIN, PASS, AND_02);
    SetSpeffect(10000, 11);
    WaitFixedTimeSeconds(20);
    
    EndUnconditionally(EventEndType.Restart);
});


/* Damnation Return to Firelink */
/* Ends multiplayer session. For hosts it returns you to firelink and for phantoms it black crystals you out */
Event(11029204, Default, function() {
    SetNetworkSyncState(Disabled); // Don't sync this becasue it invovles time delayed moving of players
    IfActionButton(MAIN, TargetEntityType.Object, 1029203, 180, 100, 2, 10010608, ReactionType.All, 0);
    RotateCharacter(10000, 1029203);
    ForceAnimationPlayback(10000, 7114, false, false, false);
    WaitFixedTimeSeconds(0.7);
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 17, 90021);
    WaitFixedTimeSeconds(1.5);
    SkipIfMultiplayerState(2, MultiplayerState.Client); // Skip to ::1
    WarpPlayer(10, 2, 1020966);
    EndUnconditionally(EventEndType.Restart);
    // ::1
    SetSpeffect(10000, 7);
    EndUnconditionally(EventEndType.Restart);
});

/* Damnation Join Game */
/* Bonfire that warps you into the actual map play area. */
Event(11029205, Default, function() {
    SetNetworkSyncState(Disabled); // Don't sync this becasue it invovles time delayed moving of players
    IfActionButton(MAIN, TargetEntityType.Object, 1029204, 180, 100, 2, 10010601, ReactionType.All, 0);
    RotateCharacter(10000, 1029204);
    ForceAnimationPlayback(10000, 7114, false, false, false);
    WaitFixedTimeSeconds(0.7);
    
    //PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1029206, 10, 2); // DEBUG!!!
    //EndUnconditionally(EventEndType.Restart);                                       // DEBUG!!!
    
    SkipIfMultiplayerState(2, MultiplayerState.Multiplayer); // Skip to ::1
    DisplayGenericDialog(10010609, PromptType.OKCANCEL, NumberofOptions.NoButtons, 10000, 1);
    EndUnconditionally(EventEndType.Restart);
    // ::1
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 17, 90021);
    WaitFixedTimeSeconds(1.5);
    IfCharacterType(OR_01, 10000, TargetType.Alive);
    IfCharacterType(OR_01, 10000, TargetType.WhitePhantom);
    SkipIfConditionGroupStateUncompiled(2, PASS, OR_01); // Skip to ::2
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1029206, 10, 2);
    EndUnconditionally(EventEndType.Restart);
    // ::2
    IfCharacterType(OR_02, 10000, TargetType.BlackPhantom);
    IfCharacterType(OR_02, 10000, TargetType.Invader);
    SkipIfConditionGroupStateUncompiled(2, PASS, OR_02); // Skip to ::3
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1029205, 10, 2);
    EndUnconditionally(EventEndType.Restart);
    // ::3
    EndUnconditionally(EventEndType.Restart);
});


/* Damnation Arena No Dead */
/* Applies the Arena No Dead effect to you while you are in the arena. Respawns are handled by scripts so we don't want people dieing. */
Event(11029206, Default, function() {
    SetNetworkSyncState(Disabled);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1029200);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1029201);
    IfInoutsideArea(AND_01, InsideOutsideState.Outside, 10000, 1029202);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetSpeffect(10000, 4613);
    SetSpeffect(10000, 4610);
    ClearSpeffect(10000, 33);
    ClearSpeffect(10000, 34);
    
    WaitFixedTimeSeconds(1);
    EndUnconditionally(EventEndType.Restart);
});

/* Damnation Staging Area Invincibility */
/* Grants full invincibility while in the staging area. Also removes it when you exit. Additionally, invincibility is granted if the player is currently in a 'dead' state in the arena play area. */
Event(11029207, Default, function() {
    SetNetworkSyncState(Disabled);
    WaitFixedTimeSeconds(1);
    IfInoutsideArea(AND_02, InsideOutsideState.Inside, 10000, 1029201);
    IfCharacterHasSpeffect(AND_02, 10000, 9100, true);
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_02); // Skip to ::2
    SetCharacterInvincibility(10000, Enabled);
    EndUnconditionally(EventEndType.Restart);
    // ::2
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 1029200);
    SkipIfConditionGroupStateUncompiled(2, PASS, AND_01); // Skip to ::1
    SetCharacterInvincibility(10000, Disabled);
    EndUnconditionally(EventEndType.Restart);
    // ::1
    SetCharacterInvincibility(10000, Enabled);
    BonfirelikeRecovery();
    SetSpeffect(10000, 9112);
    EndUnconditionally(EventEndType.Restart);
});

/* Damnation Play Area Offline Kickout */
/* If you are in the Damnation play area (the actual Damnation map) and you are in singleplayer, kick the player to the staging area. */
Event(11029208, Default, function() {
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 1029201);
    IfMultiplayerState(AND_01, MultiplayerState.Singleplayer);
    IfConditionGroup(MAIN, PASS, AND_01);
    WaitFixedTimeSeconds(3);
    WarpPlayer(10, 2, 1020997);
});

/* Damnation Give Lobby Items */
// If we are in the staging area, and we are the host, give lobby summon sign and lobby fingers
Event(11029209, Default, function() {
    SetNetworkSyncState(Disabled);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 1029200);
    IfCharacterType(AND_01, 10000, TargetType.Alive);
    IfPlayerHasdoesntHaveItem(AND_01, ItemType.Goods, 267, OwnershipState.DoesntOwn);
    IfPlayerHasdoesntHaveItem(AND_01, ItemType.Goods, 268, OwnershipState.DoesntOwn);
    IfConditionGroup(MAIN, PASS, AND_01);
    AwardItemLot(5055);
    WaitFixedTimeSeconds(1);
    EndUnconditionally(EventEndType.Restart);
});

/* Damnation Enforce Red Team ID */
// Both invaders and red summons should have their team immideately changed to 6. Prevents friendly fire.
Event(11029210, Default, function() {
    SetNetworkSyncState(Disabled);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1029200);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1029201);
    IfCharacterType(OR_02, 10000, TargetType.BlackPhantom);
    IfCharacterType(OR_02, 10000, TargetType.Invader);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfConditionGroup(AND_01, PASS, OR_02);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetCharacterTeamType(10000, TeamType.Enemy);
    EndUnconditionally(EventEndType.Restart);
});

/* Damnation Red Return To Lobby */
/* Bonfire that warps you from the play area back to the lobby. Red base edition. */
Event(11029211, Default, function() {
    SetNetworkSyncState(Disabled); // Don't sync this becasue it invovles time delayed moving of players
    IfCharacterHasSpeffect(AND_01, 10000, 9105, false);  // Can't take either flag into the lobby
    IfCharacterHasSpeffect(AND_01, 10000, 9106, false);
    IfActionButton(AND_01, TargetEntityType.Object, 1029208, 180, 100, 2, 10010603, ReactionType.All, 0);
    IfConditionGroup(MAIN, PASS, AND_01);
    RotateCharacter(10000, 1029208);
    ForceAnimationPlayback(10000, 7114, false, false, false);
    WaitFixedTimeSeconds(0.7);
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 17, 90021);
    WaitFixedTimeSeconds(1.5);
    RequestCharacterAnimationReset(10000, Interpolation.Uninterpolated);
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1029210, 10, 2);
    EndUnconditionally(EventEndType.Restart);
});

/* Damnation Blue Return To Lobby */
/* Bonfire that warps you from the play area back to the lobby. Blue base edition. */
Event(11029212, Default, function() {
    SetNetworkSyncState(Disabled); // Don't sync this becasue it invovles time delayed moving of players
    IfCharacterHasSpeffect(AND_01, 10000, 9105, false);  // Can't take either flag into the lobby
    IfCharacterHasSpeffect(AND_01, 10000, 9106, false);
    IfActionButton(AND_01, TargetEntityType.Object, 1029209, 180, 100, 2, 10010603, ReactionType.All, 0);
    IfConditionGroup(MAIN, PASS, AND_01);
    RotateCharacter(10000, 1029209);
    ForceAnimationPlayback(10000, 7114, false, false, false);
    WaitFixedTimeSeconds(0.7);
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 17, 90021);
    WaitFixedTimeSeconds(1.5);
    RequestCharacterAnimationReset(10000, Interpolation.Uninterpolated);
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1029210, 10, 2);
    EndUnconditionally(EventEndType.Restart);
});

/* Damnation 'On Death' Handler */
/* When a player reaches 5 hp, and does not yet have the arena dead speff or arena respawn speff, we put them into 'arena dead' state for 10 seconds. Then when the 10 seconds is up we flag them for respawn via speff. */
Event(11029213, Default, function() {
    SetNetworkSyncState(Disabled); //Don't sync this because it displays a message. The part that needs sync (status changes) is handled by the script below.
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 1029201);
    IfCharacterHPValue(AND_01, 10000, ComparisonType.Greater, 5);
    IfCharacterHasSpeffect(AND_01, 10000, 9100, false);
    IfCharacterHasSpeffect(AND_01, 10000, 9101, false);
    IfCharacterHasSpeffect(AND_01, 10000, 9102, false);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    SetSpeffect(10000, 9100);    // Set "Dead" Speff
    SetSpeffect(10000, 9111);
    
    RemoveItemFromPlayer(ItemType.Weapon, 2107000, 999); // Remove special arrows on death
    RemoveItemFromPlayer(ItemType.Weapon, 2203000, 999);
    RemoveItemFromPlayer(ItemType.Weapon, 2204000, 999);
    
    DisplayGenericDialog(10010617, PromptType.OKCANCEL, NumberofOptions.NoButtons, 10000, 1);

    //RequestCharacterAnimationReset(10000, Interpolation.Uninterpolated);
    //SetSpecialAnimations(10000, 0, -1, -1, -1, -1);   // Force animation reset
    //SetSpecialAnimations(10000, -1, -1, -1, -1, -1);  // Hopefully this isn't needed anymore. (??) It should help with syncing to not have it I hope.
    EndUnconditionally(EventEndType.Restart);
});

/* Damnation Red On Death Kill Counter */
/* Description */
Event(11029260, Default, function() {
    IfCharacterHasSpeffect(AND_01, 10000, 9111, true);
    IfCharacterHasSpeffect(AND_01, 10000, 9100, true);
    IfCharacterType(OR_01, 10000, TargetType.Alive);
    IfCharacterType(OR_01, 10000, TargetType.WhitePhantom);
    IfConditionGroup(AND_02, PASS, OR_01);
    IfConditionGroup(AND_02, PASS, AND_01);
    IfConditionGroup(MAIN, PASS, AND_02);  // If red team member dead and has 'kill count flag'
    IncrementEventValue(11029750, 8, 30);  // Increment blue score
    ClearSpeffect(10000, 9111);            // Remove kill count flag speff
    
    EndUnconditionally(EventEndType.Restart);
});

/* Damnation Blue On Death Kill Counter */
/* Description */
Event(11029261, Default, function() {
    IfCharacterHasSpeffect(AND_01, 10000, 9111, true);
    IfCharacterHasSpeffect(AND_01, 10000, 9100, true);
    IfCharacterType(OR_01, 10000, TargetType.BlackPhantom);
    IfCharacterType(OR_01, 10000, TargetType.Invader);
    IfConditionGroup(AND_02, PASS, OR_01);
    IfConditionGroup(AND_02, PASS, AND_01);
    IfConditionGroup(MAIN, PASS, AND_02);  // If blue team member dead and has 'kill count flag'
    IncrementEventValue(11029760, 8, 30);  // Increment red score
    ClearSpeffect(10000, 9111);            // Remove kill count flag speff
    
    EndUnconditionally(EventEndType.Restart);
});

/* Damnation Sync'd Respawn Speff Remvoer */
/* When a player dies, we remove any speffs for powerups or status effects. This is synced so as to prevent phantom visual effects for other players. */
Event(11029254, Default, function() {
    IfCharacterHasSpeffect(AND_01, 10000, 9100, true);
    IfConditionGroup(MAIN, PASS, AND_01);
    
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
    
    ClearSpeffect(10000, 510);  // Clear various magic buffs (mostly spells)
    ClearSpeffect(10000, 530);
    ClearSpeffect(10000, 540);
    ClearSpeffect(10000, 541);
    ClearSpeffect(10000, 550);
    ClearSpeffect(10000, 555);
    ClearSpeffect(10000, 570);
    ClearSpeffect(10000, 571);
    ClearSpeffect(10000, 572);
    ClearSpeffect(10000, 573);
    ClearSpeffect(10000, 574);
    ClearSpeffect(10000, 610);
    ClearSpeffect(10000, 611);
    ClearSpeffect(10000, 612);
    ClearSpeffect(10000, 620);
    ClearSpeffect(10000, 640);
    ClearSpeffect(10000, 645);
    ClearSpeffect(10000, 1000);
    ClearSpeffect(10000, 1010);
    ClearSpeffect(10000, 1020);
    ClearSpeffect(10000, 1024);
    ClearSpeffect(10000, 1025);
    ClearSpeffect(10000, 1040);
    ClearSpeffect(10000, 1050);
    ClearSpeffect(10000, 1060);
    ClearSpeffect(10000, 1070);
    ClearSpeffect(10000, 1080);
    ClearSpeffect(10000, 1081);
    ClearSpeffect(10000, 1082);
    ClearSpeffect(10000, 1083);
    ClearSpeffect(10000, 1120);
    ClearSpeffect(10000, 1130);
    ClearSpeffect(10000, 1140);
    ClearSpeffect(10000, 1150);
    ClearSpeffect(10000, 1155);
    ClearSpeffect(10000, 1156);
    ClearSpeffect(10000, 1160);
    ClearSpeffect(10000, 1170);
    ClearSpeffect(10000, 1090);
    ClearSpeffect(10000, 1360);
    ClearSpeffect(10000, 1061);
    ClearSpeffect(10000, 1435);
    ClearSpeffect(10000, 1436);
    ClearSpeffect(10000, 1800);
    
    SetSpeffect(10000, 1303); // Cure all status effects 
    
    EndUnconditionally(EventEndType.Restart);
});

/* Damnation 'On Respawn' Handler */
/* If a player has the 'arena respawn' speff we do a respawn. Also add the 'post respawn' speff to prevent a double respawn due to emevd nonsense. */
Event(11029214, Default, function() {
    SetNetworkSyncState(Disabled); // Do not sync this since we are applying bonfire recovery and doing a cutscene warp
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 1029201);
    IfCharacterHasSpeffect(AND_01, 10000, 9101, true);
    IfCharacterHasSpeffect(AND_01, 10000, 9102, false);
    SkipIfConditionGroupStateUncompiled(1, PASS, AND_01); // I don't know why I wrote it this way. ???
    EndUnconditionally(EventEndType.Restart);
    
    SetSpeffect(10000, 9102);   // Add 'post respawn' speff
    ClearSpeffect(10000, 9100); // Clear 'dead' speff
    ClearSpeffect(10000, 9101); // Clear 'respawn' spefff
    
    BonfirelikeRecovery();      // Recovery
    SetSpeffect(10000, 1330);   // Repair all equipment
    SetSpeffect(10000, 9108);   // Respawn hide effect. Makes you invis for 1 second.
    
    WaitFixedTimeFrames(1);     // Wait 1 frame for the chr.esd state to update
    
    // Pick a respawn point randomly
    ClearEventValue(11029720, 5);
    RandomlySetEventFlagInRange(11029720, 11029724, ON);
    
    IfCharacterType(OR_01, 10000, TargetType.Alive);
    IfCharacterType(OR_01, 10000, TargetType.WhitePhantom);
    SkipIfConditionGroupStateUncompiled(10, PASS, OR_01);      // Skip to ::1
    // Respawns for Red Team
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 11029720);    
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1029220, 10, 2); // Warp to respawn point
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 11029721);    
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1029221, 10, 2); // Warp to respawn point
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 11029722);    
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1029222, 10, 2); // Warp to respawn point
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 11029723);    
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1029223, 10, 2); // Warp to respawn point
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 11029724);    
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1029224, 10, 2); // Warp to respawn point
    // ::1
    IfCharacterType(OR_02, 10000, TargetType.BlackPhantom);
    IfCharacterType(OR_02, 10000, TargetType.Invader);
    SkipIfConditionGroupStateUncompiled(10, PASS, OR_02);      // Skip to ::2
    // Respawns for Blue Team
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 11029720);    
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1029225, 10, 2); // Warp to respawn point
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 11029721);    
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1029226, 10, 2); // Warp to respawn point
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 11029722);    
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1029227, 10, 2); // Warp to respawn point
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 11029723);   
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1029228, 10, 2); // Warp to respawn point
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 11029724);    
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1029229, 10, 2); // Warp to respawn point
    // ::2
    RequestCharacterAnimationReset(10000, Interpolation.Uninterpolated);
    RequestAnimationPlayback(10000, 6950, false, false, false);        // 'Stand up' animation after respawn
    EndUnconditionally(EventEndType.Restart);
});

/* Damnation Red Kill Counter */
/* Host counts kills for each team. First to limit is flagged to win. */
Event(11029222, Default, function() {
    //EndIfMultiplayerState(EventEndType.End, MultiplayerState.Client); // Only host checks kill counts
    
    IfEventValue(AND_01, 11029750, 8, ComparisonType.GreaterOrEqual, 30);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 11029245);
    IfConditionGroup(MAIN, PASS, AND_01); // If blue team is not already flagged for loss, and red teams kill count is over 30
    
    SetEventFlag(11029245, ON); // Flag blue team loss
    
    EndUnconditionally(EventEndType.Restart);
});

/* Damnation Red Kill Threshold Messages */
/* When the kill counts reach certain values we display a message letting everyone know whos in the lead. */
Event(11029223, Default, function() {
    SetNetworkSyncState(Disabled); // Just reading event flags and displaying messages.
    //EndIfMultiplayerState(EventEndType.End, MultiplayerState.Client); // Only host checks kill counts
    
    IfEventValue(MAIN, 11029750, 8, ComparisonType.GreaterOrEqual, 10);
    DisplayMessage(10010622, 0);
    IfEventValue(MAIN, 11029750, 8, ComparisonType.GreaterOrEqual, 20);
    DisplayMessage(10010623, 0);
    IfEventValue(MAIN, 11029750, 8, ComparisonType.GreaterOrEqual, 25);
    DisplayMessage(10010624, 0);
    
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 11029245); 
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 11029220);
    IfConditionGroup(MAIN, PASS, OR_01);  // Wait for game to end before starting again
    
    WaitFixedTimeSeconds(10); // Delay to allow next round to start
    
    EndUnconditionally(EventEndType.Restart);
});

/* Damnation Blue Kill Counter */
/* Host counts kills for each team. First to limit is flagged to win. */
Event(11029224, Default, function() {
    //EndIfMultiplayerState(EventEndType.End, MultiplayerState.Client); // Only host checks kill counts
    
    IfEventValue(AND_01, 11029760, 8, ComparisonType.GreaterOrEqual, 30);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 11029220);
    IfConditionGroup(MAIN, PASS, AND_01); // If blue team is not already flagged for loss, and red teams kill count is over 30
    
    SetEventFlag(11029220, ON); // Flag blue team loss
    
    EndUnconditionally(EventEndType.Restart);
});

/* Damnation Blue Kill Threshold Messages */
/* When the kill counts reach certain values we display a message letting everyone know whos in the lead. */
Event(11029225, Default, function() {
    SetNetworkSyncState(Disabled); // Just reading event flags and displaying messages.
    //EndIfMultiplayerState(EventEndType.End, MultiplayerState.Client); // Only host checks kill counts
    
    IfEventValue(MAIN, 11029760, 8, ComparisonType.GreaterOrEqual, 10);
    DisplayMessage(10010626, 0);
    IfEventValue(MAIN, 11029760, 8, ComparisonType.GreaterOrEqual, 20);
    DisplayMessage(10010627, 0);
    IfEventValue(MAIN, 11029760, 8, ComparisonType.GreaterOrEqual, 25);
    DisplayMessage(10010628, 0);
    
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 11029245); 
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 11029220);
    IfConditionGroup(MAIN, PASS, OR_01);  // Wait for game to end before starting again
    
    WaitFixedTimeSeconds(10); // Delay to allow next round to start
    
    EndUnconditionally(EventEndType.Restart);
});

/* Damnation Red Team Lose */
/* Display victory/loss, give rewards, reset game and returns players to lobby. */
Event(11029221, Default, function() {
    SetNetworkSyncState(Disabled); // Should be fine.
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11029220);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    IfCharacterType(OR_01, 10000, TargetType.Alive);
    IfCharacterType(OR_01, 10000, TargetType.WhitePhantom);
    SkipIfConditionGroupStateUncompiled(2, PASS, OR_01);
    DisplayBanner(TextBannerType.YouLose);
    SkipUnconditionally(1);
    DisplayBanner(TextBannerType.YouWin);
    
    WaitFixedTimeSeconds(5.0);

    BonfirelikeRecovery();
    ClearSpeffect(10000, 9100);  // Clear all game state effects
    ClearSpeffect(10000, 9101);
    ClearSpeffect(10000, 9102);
    ClearSpeffect(10000, 9105);
    ClearSpeffect(10000, 9106);
    
    ClearSpeffect(10000, 9021);  // Remove all arena powerup buffs
    ClearSpeffect(10000, 9022);
    ClearSpeffect(10000, 9023);
    ClearSpeffect(10000, 9024);
    ClearSpeffect(10000, 9029);
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
    
    /* Return to lobby and ready for next match */
    RequestCharacterAnimationReset(10000, Interpolation.Uninterpolated);
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1029213, 10, 2);
    ClearEventValue(11029750, 8); // Clear red kill counter
    ClearEventValue(11029760, 8); // Clear red kill counter
    SetEventFlag(11029220, OFF);  // Reset red lose flag
    SetEventFlag(11029245, OFF);  // Reset blue lose flag
    RequestCharacterAnimationReset(10000, Interpolation.Uninterpolated); // Prevent fall animation lol
    
    /* Award loot */
    WaitFixedTimeSeconds(3.0);
    AwardItemsIncludingClients(5005);
    AwardItemsIncludingClients(5005);
    IfCharacterType(OR_02, 10000, TargetType.Alive);
    IfCharacterType(OR_02, 10000, TargetType.WhitePhantom);
    SkipIfConditionGroupStateUncompiled(1, PASS, OR_02);
    SkipUnconditionally(1);
    AwardItemsIncludingClients(5005);
    EndUnconditionally(EventEndType.Restart);
});

/* Damnation Blue Team Lose */
/* Display victory/loss, give rewards, reset game and returns players to lobby. */
Event(11029246, Default, function() {
    SetNetworkSyncState(Disabled); // Should be fine.
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11029245);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    IfCharacterType(OR_01, 10000, TargetType.Invader);
    IfCharacterType(OR_01, 10000, TargetType.BlackPhantom);
    SkipIfConditionGroupStateUncompiled(2, PASS, OR_01);
    DisplayBanner(TextBannerType.YouLose);
    SkipUnconditionally(1);
    DisplayBanner(TextBannerType.YouWin);
    
    WaitFixedTimeSeconds(5.0);

    BonfirelikeRecovery();
    ClearSpeffect(10000, 9100);  // Clear all game state effects
    ClearSpeffect(10000, 9101);
    ClearSpeffect(10000, 9102);
    ClearSpeffect(10000, 9105);
    ClearSpeffect(10000, 9106);
    
    ClearSpeffect(10000, 9021);  // Remove all arena powerup buffs
    ClearSpeffect(10000, 9022);
    ClearSpeffect(10000, 9023);
    ClearSpeffect(10000, 9024);
    ClearSpeffect(10000, 9025);
    ClearSpeffect(10000, 9026);
    ClearSpeffect(10000, 9028);
    ClearSpeffect(10000, 9027);
    ClearSpeffect(10000, 9029);
    ClearSpeffect(10000, 9030);
    ClearSpeffect(10000, 9031);
    ClearSpeffect(10000, 9032);
    ClearSpeffect(10000, 9033);
    ClearSpeffect(10000, 9034);
    ClearSpeffect(10000, 9035);
    ClearSpeffect(10000, 9041);
    
    /* Return to lobby and ready for next match */
    RequestCharacterAnimationReset(10000, Interpolation.Uninterpolated);
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1029213, 10, 2);
    ClearEventValue(11029750, 8); // Clear red kill counter
    ClearEventValue(11029760, 8); // Clear red kill counter
    SetEventFlag(11029220, OFF);  // Reset red lose flag
    SetEventFlag(11029245, OFF);  // Reset blue lose flag
    RequestCharacterAnimationReset(10000, Interpolation.Uninterpolated); // Prevent fall animation lol
    
    /* Award loot */
    WaitFixedTimeSeconds(3.0);
    AwardItemsIncludingClients(5005);
    AwardItemsIncludingClients(5005);
    IfCharacterType(OR_02, 10000, TargetType.Invader);
    IfCharacterType(OR_02, 10000, TargetType.BlackPhantom);
    SkipIfConditionGroupStateUncompiled(1, PASS, OR_02);
    SkipUnconditionally(1);
    AwardItemsIncludingClients(5005);
    EndUnconditionally(EventEndType.Restart);
});

/* Damnation Killbox */
Event(11029294, Default, function() {
    SetNetworkSyncState(Disabled); // Don't sync this since we are doing some anims. Also no one will be able to see you fallnig really.
    IfInoutsideArea(MAIN, InsideOutsideState.Inside, 10000, 1029297);
    SetSpeffect(10000, 9000);
    ForceAnimationPlayback(10000, 1670, true, false, true);
    WaitFixedTimeSeconds(1);
    EndUnconditionally(EventEndType.Restart);
});

/* == Special IDs == */
// 11029720 -> 11029724 - Randomize Respawn Flags - 5 Bits
// 11029750 -> 11029757 - Red kill counter - 8 Bits
// 11029760 -> 11029767 - Blue kill counter - 8 Bits

/* === ID Dictionary === */
// 11028000 - Lockout Init Script
// 1028000 - Lockout Staging Area Region
// 1028001 - Lockout Region
// 11028001 - Lockout Give Team Change Items
// 11028002 - Lockout Remove Team Change Items
// 11028003 - Lockout Staging Area Auto-Invade
// 1028002 - Lockout Staging Area Auto-Invade Region
// 11028004 - Lockout Return To Firelink Script
// 1028003 - Lockout Return To Firelink Bonfire
// 11028005 - Lockout Join game Script
// 1028004 - Lockout Join Game Bonfire
// 1028005 - Lockout Join Game Red Warp
// 1028006 - Lockout Join Game Blue Warp
// 11028006 - Lockout Arena No Dead Apply
// 11028007 - Lockout Staging Area Invincibility
// 11028008 - Lockout Offline Kick Out
// 1028007 - Lockout Map Collision
// 11028009 - Lockout give lobby summon sign and fingers
// 11028010 - Lockout enforce red team id
// 1028008 - Lockout Red Return To Lobby Bonfire
// 1028009 - Lockout Blue Return To Lobby Bonfire
// 1028010 - Lockout Return To Lobby Target Region
// 11028011 - Lockout Return to Lobby: Red
// 11028012 - Lockout Return to Lobby: Blue
// 11028013 - Lockout 'On Death' Handler
// 11028014 - Lockout 'On Respawn' Handler
// 1028020 -> 1028024 - Red Team Respawn Points
// 1028025 -> 1028029 - Blue Team Respawn Points
// 1028013 - Lockout Game Over Return Target Region
// 11028020 - Lockout Red Lose Flag
// 11028021 - Lockout Red Lose Script
// 11028045 - Lockout Blue Lose Flag
// 11028046 - Lockout Blue Lose Script
// 11028048 - Lockout Give Hollowing Item
// 11028049 - Lockout Remove Hollowing Item
// 11028050 - Lockout Remove Arena Speff Auto-Invade Fix
// 11028054 - Lockout Respawn Sync'd Speff Remover
// 11028052 - Lockout Kill Counter
// 11028023 - Lockout Kill Threshold Messages
// 1028098 - Ladder 00
// 1028099 - Ladder 01
// 11028090 -> 11028093 - Ladder Flags
// 1028097 - Fall Killbox
// 11028094 - Killbox Script
// 11028060 - Lockout Red On Death Kill Count
// 11028061 - Lockout Blue On Death Kill Count


/* Lockout Init General */
Event(11028000, Default, function() {
    
    /* Initialize some variables, only the host does this. */
    SkipIfMultiplayerState(5, MultiplayerState.Client);
    ClearEventValue(11029720, 5); // Clear randomize respawn flags
    ClearEventValue(11029750, 8); // Clear red kill counter
    ClearEventValue(11029760, 8); // Clear red kill counter
    SetEventFlag(11028020, OFF);  // Reset red lose flag
    SetEventFlag(11028045, OFF);  // Reset blue lose flag
    
    /* Start arena scripts, but only once we enter the lobby. */
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1028000); // Don't init LK arena unless we are in the staging area (or map)
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1028001);
    IfConditionGroup(MAIN, PASS, OR_01);
    InitializeEvent(0, 11028001, 0); // Give team change items while in staging area
    InitializeEvent(0, 11028002, 0); // Remove team change items if outside staging area
    InitializeEvent(0, 11028003, 0); // Auto-Invade area
    InitializeEvent(0, 11028004, 0); // Return to Firelink
    InitializeEvent(0, 11028005, 0); // Join game
    InitializeEvent(0, 11028006, 0); // Arena No Dead
    InitializeEvent(0, 11028007, 0); // Staging Area Invincibility
    InitializeEvent(0, 11028008, 0); // Offline Kick Out                              // DEBUG!!!
    InitializeEvent(0, 11028009, 0); // Give lobby summon sign and dried fingers
    InitializeEvent(0, 11028010, 0); // Enforce red team id
    InitializeEvent(0, 11028011, 0); // Return to lobby: Red
    InitializeEvent(0, 11028012, 0); // Return to lobby: Blue
    InitializeEvent(0, 11028013, 0); // 'On Death' Handler
    InitializeEvent(0, 11028014, 0); // 'On Respawn' Handler
    InitializeEvent(0, 11028048, 0); // Give Hollowing Item
    InitializeEvent(0, 11028049, 0); // Remove Hollowing Item
    InitializeEvent(0, 11028050, 0); // Remove Arena Speff Auto-Invade Fix
    InitializeEvent(0, 11028054, 0); // Synced Respawn Speff Remover
    
    InitializeEvent(0, 11028022, 0); // Red Kill Counter
    InitializeEvent(0, 11028023, 0); // Red Kill Threshold Messages
    InitializeEvent(0, 11028021, 0); // Red Lose
    InitializeEvent(0, 11028060, 0); // Red On Death Kill Count
    
    InitializeEvent(0, 11028024, 0); // Blue Kill Counter
    InitializeEvent(0, 11028025, 0); // Blue Kill Threshold Messages
    InitializeEvent(0, 11028046, 0); // Blue Lose
    InitializeEvent(0, 11028061, 0); // Blue On Death Kill Count
    
    /* Teleporters */
    InitializeEvent(0, 11029905, 1028040, 1028041); // Teleporter A Interact
    InitializeEvent(0, 11029906, 1028042, 1028043); // Teleporter A Trigger
    
    /* Powerups */
    InitializeEvent(0, 11029901, 9010, 9500); // Give SP Ammo Handler
    InitializeEvent(0, 11029902, 0);          // Remove last speical arrow bugfix
    InitializeEvent(0, 11029900, 1028050, 1028051, 10030160, 9010, 4500); // Powerup 01
    InitializeEvent(1, 11029900, 1028052, 1028053, 10030167, 9027, 2700); // Powerup 02
    InitializeEvent(2, 11029900, 1028054, 1028055, 10030161, 9021, 900); // Powerup 03
    InitializeEvent(3, 11029900, 1028056, 1028057, 10030163, 9023, 1350); // Powerup 04
    InitializeEvent(4, 11029900, 1028058, 1028059, 10030168, 9028, 3600); // Powerup 05
    InitializeEvent(5, 11029900, 1028060, 1028061, 10030166, 9026, 4500); // Powerup 06
    InitializeEvent(6, 11029900, 1028062, 1028063, 10030173, 9033, 3600); // Powerup 07
    InitializeEvent(7, 11029900, 1028064, 1028065, 10030175, 9035, 4500); // Powerup 08
    InitializeEvent(8, 11029900, 1028066, 1028067, 10030162, 9022, 1350); // Powerup 09
    InitializeEvent(9, 11029900, 1028068, 1028069, 10030171, 9031, 3600); // Powerup 10
    InitializeEvent(10, 11029900, 1028070, 1028071, 10030161, 9021, 900); // Powerup 11
    InitializeEvent(11, 11029900, 1028072, 1028073, 10030163, 9023, 1350); // Powerup 12
    InitializeEvent(12, 11029900, 1028074, 1028075, 10030165, 9025, 4500); // Powerup 13
    InitializeEvent(13, 11029900, 1028076, 1028077, 10030164, 9024, 3600); // Powerup 14
    InitializeEvent(14, 11029900, 1028078, 1028079, 10030162, 9022, 1350); // Powerup 15
    
    /* Killbox */
    InitializeEvent(0, 11028094, 0);          // Killbox if you fall
    
    /* Welcome! */
    WaitFixedTimeSeconds(3.25);
    DisplayStatusMessage(10010635, Enabled);  // Lobby entrance message
});



/* Lockout Give Team Change Items */
// If we are in the staging area, and we are NOT the host, give the team changing items.
Event(11028001, Default, function() {
    SetNetworkSyncState(Disabled);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 1028000);
    IfMultiplayerState(AND_01, MultiplayerState.Client);
    IfPlayerHasdoesntHaveItem(AND_01, ItemType.Goods, 265, OwnershipState.DoesntOwn);
    IfPlayerHasdoesntHaveItem(AND_01, ItemType.Goods, 266, OwnershipState.DoesntOwn);
    IfCharacterType(OR_01, 10000, TargetType.WhitePhantom);
    IfCharacterType(OR_01, 10000, TargetType.BlackPhantom);
    IfCharacterType(OR_01, 10000, TargetType.Invader);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfConditionGroup(MAIN, PASS, AND_01);
    AwardItemsIncludingClients(5050);
    WaitFixedTimeSeconds(1);
    EndUnconditionally(EventEndType.Restart);
});

/* Lockout Remove Team Change Items */
// If we are outside the staging area, remove team change items.
Event(11028002, Default, function() {
    SetNetworkSyncState(Disabled);
    IfInoutsideArea(AND_01, InsideOutsideState.Outside, 10000, 1028000);
    IfPlayerHasdoesntHaveItem(AND_01, ItemType.Goods, 265, OwnershipState.Owns);
    IfPlayerHasdoesntHaveItem(AND_01, ItemType.Goods, 266, OwnershipState.Owns);
    IfConditionGroup(MAIN, PASS, AND_01);
    RemoveItemFromPlayer(ItemType.Goods, 265, 1);
    RemoveItemFromPlayer(ItemType.Goods, 266, 1);
    WaitFixedTimeSeconds(1);
    EndUnconditionally(EventEndType.Restart);
});

/* Lockout Give Hollowing Item */
// If we are in the invasion area, and we are singleplayer, and we are team 1 (alive), give hollow orb
Event(11028048, Default, function() {
    SetNetworkSyncState(Disabled);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 1028002);
    IfMultiplayerState(AND_01, MultiplayerState.Singleplayer);
    IfPlayerHasdoesntHaveItem(AND_01, ItemType.Goods, 269, OwnershipState.DoesntOwn);
    IfCharacterType(AND_01, 10000, TargetType.Alive);
    IfCharacterHasSpeffect(AND_01, 10000, 4610, false);
    IfCharacterHasSpeffect(AND_01, 10000, 4613, false);
    IfConditionGroup(MAIN, PASS, AND_01);
    AwardItemLot(5058);
    WaitFixedTimeSeconds(1);
    EndUnconditionally(EventEndType.Restart);
});

/* Lockout Remove Hollowing Item */
// If we are ouside the invasion area, are in multiplayer, are hollow, or have arena speffs, we remove the hollow orb
Event(11028049, Default, function() {
    SetNetworkSyncState(Disabled);
    IfInoutsideArea(OR_01, InsideOutsideState.Outside, 10000, 1028002);
    IfMultiplayerState(OR_01, MultiplayerState.Multiplayer);
    IfCharacterType(OR_01, 10000, TargetType.Hollow);
    IfPlayerHasdoesntHaveItem(AND_01, ItemType.Goods, 269, OwnershipState.Owns);
    IfCharacterHasSpeffect(OR_01, 10000, 4610, true);
    IfCharacterHasSpeffect(OR_01, 10000, 4613, true);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfConditionGroup(MAIN, PASS, AND_01);
    RemoveItemFromPlayer(ItemType.Goods, 269, 1);
    WaitFixedTimeSeconds(1);
    EndUnconditionally(EventEndType.Restart);
});

/* Lockout Clear Arena Speff 3 Frame Delay Fix */
// There is a delay betweeen clearing 4610 and returning to proper human/hollow, so I clear the effects to sort out a minor issue. Not critical.
Event(11028050, Default, function() {
    SetNetworkSyncState(Disabled);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 1028002);
    IfMultiplayerState(AND_01, MultiplayerState.Singleplayer);
    IfConditionGroup(MAIN, PASS, AND_01);
    ClearSpeffect(10000, 4610);
    WaitFixedTimeSeconds(0.05);
    ClearSpeffect(10000, 4613);
    
    EndUnconditionally(EventEndType.Restart);
});
    

/* Lockout Staging Area Auto-Invade Script */
// Small area that players can stand in and it will constantly search for players to invade. Also clears arena speff so you can invade while hollow
Event(11028003, Default, function() {
    SetNetworkSyncState(Disabled);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 1028002);
    IfMultiplayerState(AND_01, MultiplayerState.Singleplayer);
    IfConditionGroup(MAIN, PASS, AND_01);
    WaitFixedTimeSeconds(1.5);
    
    IfInoutsideArea(AND_02, InsideOutsideState.Inside, 10000, 1028002);
    IfMultiplayerState(AND_02, MultiplayerState.Singleplayer);
    IfConditionGroup(MAIN, PASS, AND_02);
    SetSpeffect(10000, 11);
    WaitFixedTimeSeconds(20);
    
    EndUnconditionally(EventEndType.Restart);
});


/* Lockout Return to Firelink */
/* Ends multiplayer session. For hosts it returns you to firelink and for phantoms it black crystals you out */
Event(11028004, Default, function() {
    SetNetworkSyncState(Disabled); // Don't sync this becasue it invovles time delayed moving of players
    IfActionButton(MAIN, TargetEntityType.Object, 1028003, 180, 100, 2, 10010608, ReactionType.All, 0);
    RotateCharacter(10000, 1028003);
    ForceAnimationPlayback(10000, 7114, false, false, false);
    WaitFixedTimeSeconds(0.7);
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 17, 90021);
    WaitFixedTimeSeconds(1.5);
    SkipIfMultiplayerState(2, MultiplayerState.Client); // Skip to ::1
    WarpPlayer(10, 2, 1020966);
    EndUnconditionally(EventEndType.Restart);
    // ::1
    SetSpeffect(10000, 7);
    EndUnconditionally(EventEndType.Restart);
});

/* Lockout Join Game */
/* Bonfire that warps you into the actual map play area. */
Event(11028005, Default, function() {
    SetNetworkSyncState(Disabled); // Don't sync this becasue it invovles time delayed moving of players
    IfActionButton(MAIN, TargetEntityType.Object, 1028004, 180, 100, 2, 10010601, ReactionType.All, 0);
    RotateCharacter(10000, 1028004);
    ForceAnimationPlayback(10000, 7114, false, false, false);
    WaitFixedTimeSeconds(0.7);
    
    //PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1028006, 10, 2); // DEBUG!!!
    //EndUnconditionally(EventEndType.Restart);                                       // DEBUG!!!
    
    SkipIfMultiplayerState(2, MultiplayerState.Multiplayer); // Skip to ::1
    DisplayGenericDialog(10010609, PromptType.OKCANCEL, NumberofOptions.NoButtons, 10000, 1);
    EndUnconditionally(EventEndType.Restart);
    // ::1
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 17, 90021);
    WaitFixedTimeSeconds(1.5);
    IfCharacterType(OR_01, 10000, TargetType.Alive);
    IfCharacterType(OR_01, 10000, TargetType.WhitePhantom);
    SkipIfConditionGroupStateUncompiled(2, PASS, OR_01); // Skip to ::2
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1028006, 10, 2);
    EndUnconditionally(EventEndType.Restart);
    // ::2
    IfCharacterType(OR_02, 10000, TargetType.BlackPhantom);
    IfCharacterType(OR_02, 10000, TargetType.Invader);
    SkipIfConditionGroupStateUncompiled(2, PASS, OR_02); // Skip to ::3
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1028005, 10, 2);
    EndUnconditionally(EventEndType.Restart);
    // ::3
    EndUnconditionally(EventEndType.Restart);
});


/* Lockout Arena No Dead */
/* Applies the Arena No Dead effect to you while you are in the arena. Respawns are handled by scripts so we don't want people dieing. */
Event(11028006, Default, function() {
    SetNetworkSyncState(Disabled);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1028000);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1028001);
    IfInoutsideArea(AND_01, InsideOutsideState.Outside, 10000, 1028002);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetSpeffect(10000, 4613);
    SetSpeffect(10000, 4610);
    ClearSpeffect(10000, 33);
    ClearSpeffect(10000, 34);
    
    WaitFixedTimeSeconds(1);
    EndUnconditionally(EventEndType.Restart);
});

/* Lockout Staging Area Invincibility */
/* Grants full invincibility while in the staging area. Also removes it when you exit. Additionally, invincibility is granted if the player is currently in a 'dead' state in the arena play area. */
Event(11028007, Default, function() {
    SetNetworkSyncState(Disabled);
    WaitFixedTimeSeconds(1);
    IfInoutsideArea(AND_02, InsideOutsideState.Inside, 10000, 1028001);
    IfCharacterHasSpeffect(AND_02, 10000, 9100, true);
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_02); // Skip to ::2
    SetCharacterInvincibility(10000, Enabled);
    EndUnconditionally(EventEndType.Restart);
    // ::2
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 1028000);
    SkipIfConditionGroupStateUncompiled(2, PASS, AND_01); // Skip to ::1
    SetCharacterInvincibility(10000, Disabled);
    EndUnconditionally(EventEndType.Restart);
    // ::1
    SetCharacterInvincibility(10000, Enabled);
    BonfirelikeRecovery();
    SetSpeffect(10000, 9112);
    EndUnconditionally(EventEndType.Restart);
});

/* Lockout Play Area Offline Kickout */
/* If you are in the Lockout play area (the actual Lockout map) and you are in singleplayer, kick the player to the staging area. */
Event(11028008, Default, function() {
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 1028001);
    IfMultiplayerState(AND_01, MultiplayerState.Singleplayer);
    IfConditionGroup(MAIN, PASS, AND_01);
    WaitFixedTimeSeconds(3);
    WarpPlayer(10, 2, 1020997);
});

/* Lockout Give Lobby Items */
// If we are in the staging area, and we are the host, give lobby summon sign and lobby fingers
Event(11028009, Default, function() {
    SetNetworkSyncState(Disabled);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 1028000);
    IfCharacterType(AND_01, 10000, TargetType.Alive);
    IfPlayerHasdoesntHaveItem(AND_01, ItemType.Goods, 267, OwnershipState.DoesntOwn);
    IfPlayerHasdoesntHaveItem(AND_01, ItemType.Goods, 268, OwnershipState.DoesntOwn);
    IfConditionGroup(MAIN, PASS, AND_01);
    AwardItemLot(5055);
    WaitFixedTimeSeconds(1);
    EndUnconditionally(EventEndType.Restart);
});

/* Lockout Enforce Red Team ID */
// Both invaders and red summons should have their team immideately changed to 6. Prevents friendly fire.
Event(11028010, Default, function() {
    SetNetworkSyncState(Disabled);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1028000);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1028001);
    IfCharacterType(OR_02, 10000, TargetType.BlackPhantom);
    IfCharacterType(OR_02, 10000, TargetType.Invader);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfConditionGroup(AND_01, PASS, OR_02);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetCharacterTeamType(10000, TeamType.Enemy);
    EndUnconditionally(EventEndType.Restart);
});

/* Lockout Red Return To Lobby */
/* Bonfire that warps you from the play area back to the lobby. Red base edition. */
Event(11028011, Default, function() {
    SetNetworkSyncState(Disabled); // Don't sync this becasue it invovles time delayed moving of players
    IfCharacterHasSpeffect(AND_01, 10000, 9105, false);  // Can't take either flag into the lobby
    IfCharacterHasSpeffect(AND_01, 10000, 9106, false);
    IfActionButton(AND_01, TargetEntityType.Object, 1028008, 180, 100, 2, 10010603, ReactionType.All, 0);
    IfConditionGroup(MAIN, PASS, AND_01);
    RotateCharacter(10000, 1028008);
    ForceAnimationPlayback(10000, 7114, false, false, false);
    WaitFixedTimeSeconds(0.7);
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 17, 90021);
    WaitFixedTimeSeconds(1.5);
    RequestCharacterAnimationReset(10000, Interpolation.Uninterpolated);
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1028010, 10, 2);
    EndUnconditionally(EventEndType.Restart);
});

/* Lockout Blue Return To Lobby */
/* Bonfire that warps you from the play area back to the lobby. Blue base edition. */
Event(11028012, Default, function() {
    SetNetworkSyncState(Disabled); // Don't sync this becasue it invovles time delayed moving of players
    IfCharacterHasSpeffect(AND_01, 10000, 9105, false);  // Can't take either flag into the lobby
    IfCharacterHasSpeffect(AND_01, 10000, 9106, false);
    IfActionButton(AND_01, TargetEntityType.Object, 1028009, 180, 100, 2, 10010603, ReactionType.All, 0);
    IfConditionGroup(MAIN, PASS, AND_01);
    RotateCharacter(10000, 1028009);
    ForceAnimationPlayback(10000, 7114, false, false, false);
    WaitFixedTimeSeconds(0.7);
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 17, 90021);
    WaitFixedTimeSeconds(1.5);
    RequestCharacterAnimationReset(10000, Interpolation.Uninterpolated);
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1028010, 10, 2);
    EndUnconditionally(EventEndType.Restart);
});

/* Lockout 'On Death' Handler */
/* When a player reaches 5 hp, and does not yet have the arena dead speff or arena respawn speff, we put them into 'arena dead' state for 10 seconds. Then when the 10 seconds is up we flag them for respawn via speff. */
Event(11028013, Default, function() {
    SetNetworkSyncState(Disabled); //Don't sync this because it displays a message. The part that needs sync (status changes) is handled by the script below.
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 1028001);
    IfCharacterHPValue(AND_01, 10000, ComparisonType.Greater, 5);
    IfCharacterHasSpeffect(AND_01, 10000, 9100, false);
    IfCharacterHasSpeffect(AND_01, 10000, 9101, false);
    IfCharacterHasSpeffect(AND_01, 10000, 9102, false);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    SetSpeffect(10000, 9100);    // Set "Dead" Speff
    SetSpeffect(10000, 9111);
    
    RemoveItemFromPlayer(ItemType.Weapon, 2107000, 999); // Remove special arrows on death
    RemoveItemFromPlayer(ItemType.Weapon, 2203000, 999);
    RemoveItemFromPlayer(ItemType.Weapon, 2204000, 999);
    
    DisplayGenericDialog(10010617, PromptType.OKCANCEL, NumberofOptions.NoButtons, 10000, 1);

    //RequestCharacterAnimationReset(10000, Interpolation.Uninterpolated);
    //SetSpecialAnimations(10000, 0, -1, -1, -1, -1);   // Force animation reset
    //SetSpecialAnimations(10000, -1, -1, -1, -1, -1);  // Hopefully this isn't needed anymore. (??) It should help with syncing to not have it I hope.
    EndUnconditionally(EventEndType.Restart);
});

/* Lockout Red On Death Kill Counter */
/* Description */
Event(11028060, Default, function() {
    IfCharacterHasSpeffect(AND_01, 10000, 9111, true);
    IfCharacterHasSpeffect(AND_01, 10000, 9100, true);
    IfCharacterType(OR_01, 10000, TargetType.Alive);
    IfCharacterType(OR_01, 10000, TargetType.WhitePhantom);
    IfConditionGroup(AND_02, PASS, OR_01);
    IfConditionGroup(AND_02, PASS, AND_01);
    IfConditionGroup(MAIN, PASS, AND_02);  // If red team member dead and has 'kill count flag'
    IncrementEventValue(11029750, 8, 30);  // Increment blue score
    ClearSpeffect(10000, 9111);            // Remove kill count flag speff
    
    EndUnconditionally(EventEndType.Restart);
});

/* Lockout Blue On Death Kill Counter */
/* Description */
Event(11028061, Default, function() {
    IfCharacterHasSpeffect(AND_01, 10000, 9111, true);
    IfCharacterHasSpeffect(AND_01, 10000, 9100, true);
    IfCharacterType(OR_01, 10000, TargetType.BlackPhantom);
    IfCharacterType(OR_01, 10000, TargetType.Invader);
    IfConditionGroup(AND_02, PASS, OR_01);
    IfConditionGroup(AND_02, PASS, AND_01);
    IfConditionGroup(MAIN, PASS, AND_02);  // If blue team member dead and has 'kill count flag'
    IncrementEventValue(11029760, 8, 30);  // Increment red score
    ClearSpeffect(10000, 9111);            // Remove kill count flag speff
    
    EndUnconditionally(EventEndType.Restart);
});

/* Lockout Sync'd Respawn Speff Remvoer */
/* When a player dies, we remove any speffs for powerups or status effects. This is synced so as to prevent phantom visual effects for other players. */
Event(11028054, Default, function() {
    IfCharacterHasSpeffect(AND_01, 10000, 9100, true);
    IfConditionGroup(MAIN, PASS, AND_01);
    
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
    
    ClearSpeffect(10000, 510);  // Clear various magic buffs (mostly spells)
    ClearSpeffect(10000, 530);
    ClearSpeffect(10000, 540);
    ClearSpeffect(10000, 541);
    ClearSpeffect(10000, 550);
    ClearSpeffect(10000, 555);
    ClearSpeffect(10000, 570);
    ClearSpeffect(10000, 571);
    ClearSpeffect(10000, 572);
    ClearSpeffect(10000, 573);
    ClearSpeffect(10000, 574);
    ClearSpeffect(10000, 610);
    ClearSpeffect(10000, 611);
    ClearSpeffect(10000, 612);
    ClearSpeffect(10000, 620);
    ClearSpeffect(10000, 640);
    ClearSpeffect(10000, 645);
    ClearSpeffect(10000, 1000);
    ClearSpeffect(10000, 1010);
    ClearSpeffect(10000, 1020);
    ClearSpeffect(10000, 1024);
    ClearSpeffect(10000, 1025);
    ClearSpeffect(10000, 1040);
    ClearSpeffect(10000, 1050);
    ClearSpeffect(10000, 1060);
    ClearSpeffect(10000, 1070);
    ClearSpeffect(10000, 1080);
    ClearSpeffect(10000, 1081);
    ClearSpeffect(10000, 1082);
    ClearSpeffect(10000, 1083);
    ClearSpeffect(10000, 1120);
    ClearSpeffect(10000, 1130);
    ClearSpeffect(10000, 1140);
    ClearSpeffect(10000, 1150);
    ClearSpeffect(10000, 1155);
    ClearSpeffect(10000, 1156);
    ClearSpeffect(10000, 1160);
    ClearSpeffect(10000, 1170);
    ClearSpeffect(10000, 1090);
    ClearSpeffect(10000, 1360);
    ClearSpeffect(10000, 1061);
    ClearSpeffect(10000, 1435);
    ClearSpeffect(10000, 1436);
    ClearSpeffect(10000, 1800);
    
    SetSpeffect(10000, 1303); // Cure all status effects 
    
    EndUnconditionally(EventEndType.Restart);
});

/* Lockout 'On Respawn' Handler */
/* If a player has the 'arena respawn' speff we do a respawn. Also add the 'post respawn' speff to prevent a double respawn due to emevd nonsense. */
Event(11028014, Default, function() {
    SetNetworkSyncState(Disabled); // Do not sync this since we are applying bonfire recovery and doing a cutscene warp
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 1028001);
    IfCharacterHasSpeffect(AND_01, 10000, 9101, true);
    IfCharacterHasSpeffect(AND_01, 10000, 9102, false);
    SkipIfConditionGroupStateUncompiled(1, PASS, AND_01); // I don't know why I wrote it this way. ???
    EndUnconditionally(EventEndType.Restart);
    
    SetSpeffect(10000, 9102);   // Add 'post respawn' speff
    ClearSpeffect(10000, 9100); // Clear 'dead' speff
    ClearSpeffect(10000, 9101); // Clear 'respawn' spefff
    
    BonfirelikeRecovery();      // Recovery
    SetSpeffect(10000, 1330);   // Repair all equipment
    SetSpeffect(10000, 9108);   // Respawn hide effect. Makes you invis for 1 second.
    
    WaitFixedTimeFrames(1);     // Wait 1 frame for the chr.esd state to update
    
    // Pick a respawn point randomly
    ClearEventValue(11029720, 5);
    RandomlySetEventFlagInRange(11029720, 11029724, ON);
    
    IfCharacterType(OR_01, 10000, TargetType.Alive);
    IfCharacterType(OR_01, 10000, TargetType.WhitePhantom);
    SkipIfConditionGroupStateUncompiled(10, PASS, OR_01);      // Skip to ::1
    // Respawns for Red Team
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 11029720);    
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1028020, 10, 2); // Warp to respawn point
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 11029721);    
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1028021, 10, 2); // Warp to respawn point
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 11029722);    
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1028022, 10, 2); // Warp to respawn point
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 11029723);    
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1028023, 10, 2); // Warp to respawn point
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 11029724);    
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1028024, 10, 2); // Warp to respawn point
    // ::1
    IfCharacterType(OR_02, 10000, TargetType.BlackPhantom);
    IfCharacterType(OR_02, 10000, TargetType.Invader);
    SkipIfConditionGroupStateUncompiled(10, PASS, OR_02);      // Skip to ::2
    // Respawns for Blue Team
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 11029720);    
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1028025, 10, 2); // Warp to respawn point
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 11029721);    
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1028026, 10, 2); // Warp to respawn point
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 11029722);    
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1028027, 10, 2); // Warp to respawn point
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 11029723);   
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1028028, 10, 2); // Warp to respawn point
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 11029724);    
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1028029, 10, 2); // Warp to respawn point
    // ::2
    RequestCharacterAnimationReset(10000, Interpolation.Uninterpolated);
    RequestAnimationPlayback(10000, 6950, false, false, false);        // 'Stand up' animation after respawn
    EndUnconditionally(EventEndType.Restart);
});

/* Lockout Red Kill Counter */
/* Host counts kills for each team. First to limit is flagged to win. */
Event(11028022, Default, function() {
    //EndIfMultiplayerState(EventEndType.End, MultiplayerState.Client); // Only host checks kill counts
    
    IfEventValue(AND_01, 11029750, 8, ComparisonType.GreaterOrEqual, 30);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 11028045);
    IfConditionGroup(MAIN, PASS, AND_01); // If blue team is not already flagged for loss, and red teams kill count is over 30
    
    SetEventFlag(11028045, ON); // Flag blue team loss
    
    EndUnconditionally(EventEndType.Restart);
});

/* Lockout Red Kill Threshold Messages */
/* When the kill counts reach certain values we display a message letting everyone know whos in the lead. */
Event(11028023, Default, function() {
    SetNetworkSyncState(Disabled); // Just reading event flags and displaying messages.
    //EndIfMultiplayerState(EventEndType.End, MultiplayerState.Client); // Only host checks kill counts
    
    IfEventValue(MAIN, 11029750, 8, ComparisonType.GreaterOrEqual, 10);
    DisplayMessage(10010622, 0);
    IfEventValue(MAIN, 11029750, 8, ComparisonType.GreaterOrEqual, 20);
    DisplayMessage(10010623, 0);
    IfEventValue(MAIN, 11029750, 8, ComparisonType.GreaterOrEqual, 25);
    DisplayMessage(10010624, 0);
    
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 11028045); 
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 11028020);
    IfConditionGroup(MAIN, PASS, OR_01);  // Wait for game to end before starting again
    
    WaitFixedTimeSeconds(10); // Delay to allow next round to start
    
    EndUnconditionally(EventEndType.Restart);
});

/* Lockout Blue Kill Counter */
/* Host counts kills for each team. First to limit is flagged to win. */
Event(11028024, Default, function() {
    //EndIfMultiplayerState(EventEndType.End, MultiplayerState.Client); // Only host checks kill counts
    
    IfEventValue(AND_01, 11029760, 8, ComparisonType.GreaterOrEqual, 30);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 11028020);
    IfConditionGroup(MAIN, PASS, AND_01); // If blue team is not already flagged for loss, and red teams kill count is over 30
    
    SetEventFlag(11028020, ON); // Flag blue team loss
    
    EndUnconditionally(EventEndType.Restart);
});

/* Lockout Blue Kill Threshold Messages */
/* When the kill counts reach certain values we display a message letting everyone know whos in the lead. */
Event(11028025, Default, function() {
    SetNetworkSyncState(Disabled); // Just reading event flags and displaying messages.
    //EndIfMultiplayerState(EventEndType.End, MultiplayerState.Client); // Only host checks kill counts
    
    IfEventValue(MAIN, 11029760, 8, ComparisonType.GreaterOrEqual, 10);
    DisplayMessage(10010626, 0);
    IfEventValue(MAIN, 11029760, 8, ComparisonType.GreaterOrEqual, 20);
    DisplayMessage(10010627, 0);
    IfEventValue(MAIN, 11029760, 8, ComparisonType.GreaterOrEqual, 25);
    DisplayMessage(10010628, 0);
    
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 11028045); 
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 11028020);
    IfConditionGroup(MAIN, PASS, OR_01);  // Wait for game to end before starting again
    
    WaitFixedTimeSeconds(10); // Delay to allow next round to start
    
    EndUnconditionally(EventEndType.Restart);
});

/* Lockout Red Team Lose */
/* Display victory/loss, give rewards, reset game and returns players to lobby. */
Event(11028021, Default, function() {
    SetNetworkSyncState(Disabled); // Should be fine.
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11028020);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    IfCharacterType(OR_01, 10000, TargetType.Alive);
    IfCharacterType(OR_01, 10000, TargetType.WhitePhantom);
    SkipIfConditionGroupStateUncompiled(2, PASS, OR_01);
    DisplayBanner(TextBannerType.YouLose);
    SkipUnconditionally(1);
    DisplayBanner(TextBannerType.YouWin);
    
    WaitFixedTimeSeconds(5.0);

    BonfirelikeRecovery();
    ClearSpeffect(10000, 9100);  // Clear all game state effects
    ClearSpeffect(10000, 9101);
    ClearSpeffect(10000, 9102);
    ClearSpeffect(10000, 9105);
    ClearSpeffect(10000, 9106);
    
    ClearSpeffect(10000, 9021);  // Remove all arena powerup buffs
    ClearSpeffect(10000, 9022);
    ClearSpeffect(10000, 9023);
    ClearSpeffect(10000, 9024);
    ClearSpeffect(10000, 9029);
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
    
    /* Return to lobby and ready for next match */
    RequestCharacterAnimationReset(10000, Interpolation.Uninterpolated);
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1028013, 10, 2);
    ClearEventValue(11029750, 8); // Clear red kill counter
    ClearEventValue(11029760, 8); // Clear red kill counter
    SetEventFlag(11028020, OFF);  // Reset red lose flag
    SetEventFlag(11028045, OFF);  // Reset blue lose flag
    RequestCharacterAnimationReset(10000, Interpolation.Uninterpolated); // Prevent fall animation lol
    
    /* Award loot */
    WaitFixedTimeSeconds(3.0);
    AwardItemsIncludingClients(5005);
    AwardItemsIncludingClients(5005);
    IfCharacterType(OR_02, 10000, TargetType.Alive);
    IfCharacterType(OR_02, 10000, TargetType.WhitePhantom);
    SkipIfConditionGroupStateUncompiled(1, PASS, OR_02);
    SkipUnconditionally(1);
    AwardItemsIncludingClients(5005);
    EndUnconditionally(EventEndType.Restart);
});

/* Lockout Blue Team Lose */
/* Display victory/loss, give rewards, reset game and returns players to lobby. */
Event(11028046, Default, function() {
    SetNetworkSyncState(Disabled); // Should be fine.
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11028045);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    IfCharacterType(OR_01, 10000, TargetType.Invader);
    IfCharacterType(OR_01, 10000, TargetType.BlackPhantom);
    SkipIfConditionGroupStateUncompiled(2, PASS, OR_01);
    DisplayBanner(TextBannerType.YouLose);
    SkipUnconditionally(1);
    DisplayBanner(TextBannerType.YouWin);
    
    WaitFixedTimeSeconds(5.0);

    BonfirelikeRecovery();
    ClearSpeffect(10000, 9100);  // Clear all game state effects
    ClearSpeffect(10000, 9101);
    ClearSpeffect(10000, 9102);
    ClearSpeffect(10000, 9105);
    ClearSpeffect(10000, 9106);
    
    ClearSpeffect(10000, 9021);  // Remove all arena powerup buffs
    ClearSpeffect(10000, 9022);
    ClearSpeffect(10000, 9023);
    ClearSpeffect(10000, 9024);
    ClearSpeffect(10000, 9025);
    ClearSpeffect(10000, 9026);
    ClearSpeffect(10000, 9028);
    ClearSpeffect(10000, 9027);
    ClearSpeffect(10000, 9029);
    ClearSpeffect(10000, 9030);
    ClearSpeffect(10000, 9031);
    ClearSpeffect(10000, 9032);
    ClearSpeffect(10000, 9033);
    ClearSpeffect(10000, 9034);
    ClearSpeffect(10000, 9035);
    ClearSpeffect(10000, 9041);
    
    /* Return to lobby and ready for next match */
    RequestCharacterAnimationReset(10000, Interpolation.Uninterpolated);
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1028013, 10, 2);
    ClearEventValue(11029750, 8); // Clear red kill counter
    ClearEventValue(11029760, 8); // Clear red kill counter
    SetEventFlag(11028020, OFF);  // Reset red lose flag
    SetEventFlag(11028045, OFF);  // Reset blue lose flag
    RequestCharacterAnimationReset(10000, Interpolation.Uninterpolated); // Prevent fall animation lol
    
    /* Award loot */
    WaitFixedTimeSeconds(3.0);
    AwardItemsIncludingClients(5005);
    AwardItemsIncludingClients(5005);
    IfCharacterType(OR_02, 10000, TargetType.Invader);
    IfCharacterType(OR_02, 10000, TargetType.BlackPhantom);
    SkipIfConditionGroupStateUncompiled(1, PASS, OR_02);
    SkipUnconditionally(1);
    AwardItemsIncludingClients(5005);
    EndUnconditionally(EventEndType.Restart);
});

/* Lockout Killbox */
Event(11028094, Default, function() {
    SetNetworkSyncState(Disabled); // Don't sync this since we are doing some anims. Also no one will be able to see you fallnig really.
    IfInoutsideArea(MAIN, InsideOutsideState.Inside, 10000, 1028097);
    SetSpeffect(10000, 9000);
    ForceAnimationPlayback(10000, 1670, true, false, true);
    WaitFixedTimeSeconds(1);
    EndUnconditionally(EventEndType.Restart);
});

/* == Special IDs == */
// 11029720 -> 11029724 - Randomize Respawn Flags - 5 Bits
// 11029750 -> 11029757 - Red kill counter - 8 Bits
// 11029760 -> 11029767 - Blue kill counter - 8 Bits

/* === ID Dictionary === */
// 11028100 - Sanctuary Init Script
// 1028100 - Sanctuary Staging Area Region
// 1028101 - Sanctuary Region
// 11028101 - Sanctuary Give Team Change Items
// 11028102 - Sanctuary Remove Team Change Items
// 11028103 - Sanctuary Staging Area Auto-Invade
// 1028102 - Sanctuary Staging Area Auto-Invade Region
// 11028104 - Sanctuary Return To Firelink Script
// 1028103 - Sanctuary Return To Firelink Bonfire
// 11028105 - Sanctuary Join game Script
// 1028104 - Sanctuary Join Game Bonfire
// 1028105 - Sanctuary Join Game Red Warp
// 1028106 - Sanctuary Join Game Blue Warp
// 11028106 - Sanctuary Arena No Dead Apply
// 11028107 - Sanctuary Staging Area Invincibility
// 11028108 - Sanctuary Offline Kick Out
// 1028107 - Sanctuary Map Collision
// 11028109 - Sanctuary give lobby summon sign and fingers
// 11028110 - Sanctuary enforce red team id
// 1028108 - Sanctuary Red Return To Lobby Bonfire
// 1028109 - Sanctuary Blue Return To Lobby Bonfire
// 1028110 - Sanctuary Return To Lobby Target Region
// 11028111 - Sanctuary Return to Lobby: Red
// 11028112 - Sanctuary Return to Lobby: Blue
// 11028113 - Sanctuary 'On Death' Handler
// 11028114 - Sanctuary 'On Respawn' Handler
// 1028120 -> 1028124 - Red Team Respawn Points
// 1028125 -> 1028129 - Blue Team Respawn Points
// 1028113 - Sanctuary Game Over Return Target Region
// 11028120 - Sanctuary Red Lose Flag
// 11028121 - Sanctuary Red Lose Script
// 11028145 - Sanctuary Blue Lose Flag
// 11028146 - Sanctuary Blue Lose Script
// 11028148 - Sanctuary Give Hollowing Item
// 11028149 - Sanctuary Remove Hollowing Item
// 11028150 - Sanctuary Remove Arena Speff Auto-Invade Fix
// 11028154 - Sanctuary Respawn Sync'd Speff Remover
// 11028152 - Sanctuary Kill Counter
// 11028123 - Sanctuary Kill Threshold Messages
// 1028198 - Ladder 00
// 1028199 - Ladder 01
// 11028190 -> 11028193 - Ladder Flags
// 1028197 - Fall Killbox
// 11028194 - Killbox Script
// 11028160 - Sanctuary Red On Death Kill Count
// 11028161 - Sanctuary Blue On Death Kill Count


/* Sanctuary Init General */
Event(11028100, Default, function() {
    
    /* Initialize some variables, only the host does this. */
    SkipIfMultiplayerState(5, MultiplayerState.Client);
    ClearEventValue(11029720, 5); // Clear randomize respawn flags
    ClearEventValue(11029750, 8); // Clear red kill counter
    ClearEventValue(11029760, 8); // Clear red kill counter
    SetEventFlag(11028120, OFF);  // Reset red lose flag
    SetEventFlag(11028145, OFF);  // Reset blue lose flag
    
    /* Start arena scripts, but only once we enter the lobby. */
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1028100); // Don't init SA arena unless we are in the staging area (or map)
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1028101);
    IfConditionGroup(MAIN, PASS, OR_01);
    InitializeEvent(0, 11028101, 0); // Give team change items while in staging area
    InitializeEvent(0, 11028102, 0); // Remove team change items if outside staging area
    InitializeEvent(0, 11028103, 0); // Auto-Invade area
    InitializeEvent(0, 11028104, 0); // Return to Firelink
    InitializeEvent(0, 11028105, 0); // Join game
    InitializeEvent(0, 11028106, 0); // Arena No Dead
    InitializeEvent(0, 11028107, 0); // Staging Area Invincibility
    InitializeEvent(0, 11028108, 0); // Offline Kick Out                              // DEBUG!!!
    InitializeEvent(0, 11028109, 0); // Give lobby summon sign and dried fingers
    InitializeEvent(0, 11028110, 0); // Enforce red team id
    InitializeEvent(0, 11028111, 0); // Return to lobby: Red
    InitializeEvent(0, 11028112, 0); // Return to lobby: Blue
    InitializeEvent(0, 11028113, 0); // 'On Death' Handler
    InitializeEvent(0, 11028114, 0); // 'On Respawn' Handler
    InitializeEvent(0, 11028148, 0); // Give Hollowing Item
    InitializeEvent(0, 11028149, 0); // Remove Hollowing Item
    InitializeEvent(0, 11028150, 0); // Remove Arena Speff Auto-Invade Fix
    InitializeEvent(0, 11028154, 0); // Synced Respawn Speff Remover
    
    InitializeEvent(0, 11028122, 0); // Red Kill Counter
    InitializeEvent(0, 11028123, 0); // Red Kill Threshold Messages
    InitializeEvent(0, 11028121, 0); // Red Lose
    InitializeEvent(0, 11028160, 0); // Red On Death Kill Count
    
    InitializeEvent(0, 11028124, 0); // Blue Kill Counter
    InitializeEvent(0, 11028125, 0); // Blue Kill Threshold Messages
    InitializeEvent(0, 11028146, 0); // Blue Lose
    InitializeEvent(0, 11028161, 0); // Blue On Death Kill Count
    
    /* Ladders */
    
    /* Teleporters */
    
    /* Powerups */
    InitializeEvent(0, 11029901, 9010, 9500); // Give SP Ammo Handler
    InitializeEvent(0, 11029902, 0);          // Remove last speical arrow bugfix
    InitializeEvent(0, 11029900, 1028150, 1028151, 10030175, 9035, 5400); // Powerup 01
    InitializeEvent(1, 11029900, 1028152, 1028153, 10030166, 9026, 3600); // Powerup 02
    InitializeEvent(2, 11029900, 1028154, 1028155, 10030165, 9025, 3600); // Powerup 03
    InitializeEvent(3, 11029900, 1028156, 1028157, 10030162, 9022, 1350); // Powerup 04
    InitializeEvent(4, 11029900, 1028158, 1028159, 10030162, 9022, 1350); // Powerup 05
    InitializeEvent(5, 11029900, 1028160, 1028161, 10030168, 9028, 3600); // Powerup 06
    InitializeEvent(6, 11029900, 1028162, 1028163, 10030168, 9028, 3600); // Powerup 07
    InitializeEvent(7, 11029900, 1028164, 1028165, 10030163, 9023, 1800); // Powerup 08
    InitializeEvent(8, 11029900, 1028166, 1028167, 10030163, 9023, 1800); // Powerup 09
    InitializeEvent(9, 11029900, 1028168, 1028169, 10030171, 9031, 3600); // Powerup 10
    InitializeEvent(10, 11029900, 1028170, 1028171, 10030172, 9032, 3600); // Powerup 11
    InitializeEvent(11, 11029900, 1028172, 1028173, 10030164, 9024, 3600); // Powerup 12
    InitializeEvent(12, 11029900, 1028174, 1028175, 10030164, 9024, 3600); // Powerup 13
    InitializeEvent(13, 11029900, 1028176, 1028177, 10030161, 9021, 900); // Powerup 14
    InitializeEvent(14, 11029900, 1028178, 1028179, 10030161, 9021, 900); // Powerup 15
    InitializeEvent(15, 11029900, 1028180, 1028181, 10030167, 9027, 4500); // Powerup 16
    InitializeEvent(16, 11029900, 1028182, 1028183, 10030160, 9010, 4500); // Powerup 17
    InitializeEvent(17, 11029900, 1028184, 1028185, 10030162, 9022, 1350); // Powerup 18
    InitializeEvent(18, 11029900, 1028186, 1028187, 10030162, 9022, 1350); // Powerup 19
    
    /* Killbox */
    
    /* Welcome! */
    WaitFixedTimeSeconds(3.25);
    DisplayStatusMessage(10010637, Enabled);  // Lobby entrance message
});



/* Sanctuary Give Team Change Items */
// If we are in the staging area, and we are NOT the host, give the team changing items.
Event(11028101, Default, function() {
    SetNetworkSyncState(Disabled);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 1028100);
    IfMultiplayerState(AND_01, MultiplayerState.Client);
    IfPlayerHasdoesntHaveItem(AND_01, ItemType.Goods, 265, OwnershipState.DoesntOwn);
    IfPlayerHasdoesntHaveItem(AND_01, ItemType.Goods, 266, OwnershipState.DoesntOwn);
    IfCharacterType(OR_01, 10000, TargetType.WhitePhantom);
    IfCharacterType(OR_01, 10000, TargetType.BlackPhantom);
    IfCharacterType(OR_01, 10000, TargetType.Invader);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfConditionGroup(MAIN, PASS, AND_01);
    AwardItemsIncludingClients(5050);
    WaitFixedTimeSeconds(1);
    EndUnconditionally(EventEndType.Restart);
});

/* Sanctuary Remove Team Change Items */
// If we are outside the staging area, remove team change items.
Event(11028102, Default, function() {
    SetNetworkSyncState(Disabled);
    IfInoutsideArea(AND_01, InsideOutsideState.Outside, 10000, 1028100);
    IfPlayerHasdoesntHaveItem(AND_01, ItemType.Goods, 265, OwnershipState.Owns);
    IfPlayerHasdoesntHaveItem(AND_01, ItemType.Goods, 266, OwnershipState.Owns);
    IfConditionGroup(MAIN, PASS, AND_01);
    RemoveItemFromPlayer(ItemType.Goods, 265, 1);
    RemoveItemFromPlayer(ItemType.Goods, 266, 1);
    WaitFixedTimeSeconds(1);
    EndUnconditionally(EventEndType.Restart);
});

/* Sanctuary Give Hollowing Item */
// If we are in the invasion area, and we are singleplayer, and we are team 1 (alive), give hollow orb
Event(11028148, Default, function() {
    SetNetworkSyncState(Disabled);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 1028102);
    IfMultiplayerState(AND_01, MultiplayerState.Singleplayer);
    IfPlayerHasdoesntHaveItem(AND_01, ItemType.Goods, 269, OwnershipState.DoesntOwn);
    IfCharacterType(AND_01, 10000, TargetType.Alive);
    IfCharacterHasSpeffect(AND_01, 10000, 4610, false);
    IfCharacterHasSpeffect(AND_01, 10000, 4613, false);
    IfConditionGroup(MAIN, PASS, AND_01);
    AwardItemLot(5058);
    WaitFixedTimeSeconds(1);
    EndUnconditionally(EventEndType.Restart);
});

/* Sanctuary Remove Hollowing Item */
// If we are ouside the invasion area, are in multiplayer, are hollow, or have arena speffs, we remove the hollow orb
Event(11028149, Default, function() {
    SetNetworkSyncState(Disabled);
    IfInoutsideArea(OR_01, InsideOutsideState.Outside, 10000, 1028102);
    IfMultiplayerState(OR_01, MultiplayerState.Multiplayer);
    IfCharacterType(OR_01, 10000, TargetType.Hollow);
    IfPlayerHasdoesntHaveItem(AND_01, ItemType.Goods, 269, OwnershipState.Owns);
    IfCharacterHasSpeffect(OR_01, 10000, 4610, true);
    IfCharacterHasSpeffect(OR_01, 10000, 4613, true);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfConditionGroup(MAIN, PASS, AND_01);
    RemoveItemFromPlayer(ItemType.Goods, 269, 1);
    WaitFixedTimeSeconds(1);
    EndUnconditionally(EventEndType.Restart);
});

/* Sanctuary Clear Arena Speff 3 Frame Delay Fix */
// There is a delay betweeen clearing 4610 and returning to proper human/hollow, so I clear the effects to sort out a minor issue. Not critical.
Event(11028150, Default, function() {
    SetNetworkSyncState(Disabled);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 1028102);
    IfMultiplayerState(AND_01, MultiplayerState.Singleplayer);
    IfConditionGroup(MAIN, PASS, AND_01);
    ClearSpeffect(10000, 4610);
    WaitFixedTimeSeconds(0.05);
    ClearSpeffect(10000, 4613);
    
    EndUnconditionally(EventEndType.Restart);
});
    

/* Sanctuary Staging Area Auto-Invade Script */
// Small area that players can stand in and it will constantly search for players to invade. Also clears arena speff so you can invade while hollow
Event(11028103, Default, function() {
    SetNetworkSyncState(Disabled);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 1028102);
    IfMultiplayerState(AND_01, MultiplayerState.Singleplayer);
    IfConditionGroup(MAIN, PASS, AND_01);
    WaitFixedTimeSeconds(1.5);
    
    IfInoutsideArea(AND_02, InsideOutsideState.Inside, 10000, 1028102);
    IfMultiplayerState(AND_02, MultiplayerState.Singleplayer);
    IfConditionGroup(MAIN, PASS, AND_02);
    SetSpeffect(10000, 11);
    WaitFixedTimeSeconds(20);
    
    EndUnconditionally(EventEndType.Restart);
});


/* Sanctuary Return to Firelink */
/* Ends multiplayer session. For hosts it returns you to firelink and for phantoms it black crystals you out */
Event(11028104, Default, function() {
    SetNetworkSyncState(Disabled); // Don't sync this becasue it invovles time delayed moving of players
    IfActionButton(MAIN, TargetEntityType.Object, 1028103, 180, 100, 2, 10010608, ReactionType.All, 0);
    RotateCharacter(10000, 1028103);
    ForceAnimationPlayback(10000, 7114, false, false, false);
    WaitFixedTimeSeconds(0.7);
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 17, 90021);
    WaitFixedTimeSeconds(1.5);
    SkipIfMultiplayerState(2, MultiplayerState.Client); // Skip to ::1
    WarpPlayer(10, 2, 1020966);
    EndUnconditionally(EventEndType.Restart);
    // ::1
    SetSpeffect(10000, 7);
    EndUnconditionally(EventEndType.Restart);
});

/* Sanctuary Join Game */
/* Bonfire that warps you into the actual map play area. */
Event(11028105, Default, function() {
    SetNetworkSyncState(Disabled); // Don't sync this becasue it invovles time delayed moving of players
    IfActionButton(MAIN, TargetEntityType.Object, 1028104, 180, 100, 2, 10010601, ReactionType.All, 0);
    RotateCharacter(10000, 1028104);
    ForceAnimationPlayback(10000, 7114, false, false, false);
    WaitFixedTimeSeconds(0.7);
    
    //PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1028106, 10, 2); // DEBUG!!!
    //EndUnconditionally(EventEndType.Restart);                                       // DEBUG!!!
    
    SkipIfMultiplayerState(2, MultiplayerState.Multiplayer); // Skip to ::1
    DisplayGenericDialog(10010609, PromptType.OKCANCEL, NumberofOptions.NoButtons, 10000, 1);
    EndUnconditionally(EventEndType.Restart);
    // ::1
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 17, 90021);
    WaitFixedTimeSeconds(1.5);
    IfCharacterType(OR_01, 10000, TargetType.Alive);
    IfCharacterType(OR_01, 10000, TargetType.WhitePhantom);
    SkipIfConditionGroupStateUncompiled(2, PASS, OR_01); // Skip to ::2
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1028106, 10, 2);
    EndUnconditionally(EventEndType.Restart);
    // ::2
    IfCharacterType(OR_02, 10000, TargetType.BlackPhantom);
    IfCharacterType(OR_02, 10000, TargetType.Invader);
    SkipIfConditionGroupStateUncompiled(2, PASS, OR_02); // Skip to ::3
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1028105, 10, 2);
    EndUnconditionally(EventEndType.Restart);
    // ::3
    EndUnconditionally(EventEndType.Restart);
});


/* Sanctuary Arena No Dead */
/* Applies the Arena No Dead effect to you while you are in the arena. Respawns are handled by scripts so we don't want people dieing. */
Event(11028106, Default, function() {
    SetNetworkSyncState(Disabled);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1028100);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1028101);
    IfInoutsideArea(AND_01, InsideOutsideState.Outside, 10000, 1028102);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetSpeffect(10000, 4613);
    SetSpeffect(10000, 4610);
    ClearSpeffect(10000, 33);
    ClearSpeffect(10000, 34);
    
    WaitFixedTimeSeconds(1);
    EndUnconditionally(EventEndType.Restart);
});

/* Sanctuary Staging Area Invincibility */
/* Grants full invincibility while in the staging area. Also removes it when you exit. Additionally, invincibility is granted if the player is currently in a 'dead' state in the arena play area. */
Event(11028107, Default, function() {
    SetNetworkSyncState(Disabled);
    WaitFixedTimeSeconds(1);
    IfInoutsideArea(AND_02, InsideOutsideState.Inside, 10000, 1028101);
    IfCharacterHasSpeffect(AND_02, 10000, 9100, true);
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_02); // Skip to ::2
    SetCharacterInvincibility(10000, Enabled);
    EndUnconditionally(EventEndType.Restart);
    // ::2
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 1028100);
    SkipIfConditionGroupStateUncompiled(2, PASS, AND_01); // Skip to ::1
    SetCharacterInvincibility(10000, Disabled);
    EndUnconditionally(EventEndType.Restart);
    // ::1
    SetCharacterInvincibility(10000, Enabled);
    BonfirelikeRecovery();
    SetSpeffect(10000, 9112);
    EndUnconditionally(EventEndType.Restart);
});

/* Sanctuary Play Area Offline Kickout */
/* If you are in the Sanctuary play area (the actual Sanctuary map) and you are in singleplayer, kick the player to the staging area. */
Event(11028108, Default, function() {
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 1028101);
    IfMultiplayerState(AND_01, MultiplayerState.Singleplayer);
    IfConditionGroup(MAIN, PASS, AND_01);
    WaitFixedTimeSeconds(3);
    WarpPlayer(10, 2, 1020997);
});

/* Sanctuary Give Lobby Items */
// If we are in the staging area, and we are the host, give lobby summon sign and lobby fingers
Event(11028109, Default, function() {
    SetNetworkSyncState(Disabled);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 1028100);
    IfCharacterType(AND_01, 10000, TargetType.Alive);
    IfPlayerHasdoesntHaveItem(AND_01, ItemType.Goods, 267, OwnershipState.DoesntOwn);
    IfPlayerHasdoesntHaveItem(AND_01, ItemType.Goods, 268, OwnershipState.DoesntOwn);
    IfConditionGroup(MAIN, PASS, AND_01);
    AwardItemLot(5055);
    WaitFixedTimeSeconds(1);
    EndUnconditionally(EventEndType.Restart);
});

/* Sanctuary Enforce Red Team ID */
// Both invaders and red summons should have their team immideately changed to 6. Prevents friendly fire.
Event(11028110, Default, function() {
    SetNetworkSyncState(Disabled);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1028100);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1028101);
    IfCharacterType(OR_02, 10000, TargetType.BlackPhantom);
    IfCharacterType(OR_02, 10000, TargetType.Invader);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfConditionGroup(AND_01, PASS, OR_02);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetCharacterTeamType(10000, TeamType.Enemy);
    EndUnconditionally(EventEndType.Restart);
});

/* Sanctuary Red Return To Lobby */
/* Bonfire that warps you from the play area back to the lobby. Red base edition. */
Event(11028111, Default, function() {
    SetNetworkSyncState(Disabled); // Don't sync this becasue it invovles time delayed moving of players
    IfCharacterHasSpeffect(AND_01, 10000, 9105, false);  // Can't take either flag into the lobby
    IfCharacterHasSpeffect(AND_01, 10000, 9106, false);
    IfActionButton(AND_01, TargetEntityType.Object, 1028108, 180, 100, 2, 10010603, ReactionType.All, 0);
    IfConditionGroup(MAIN, PASS, AND_01);
    RotateCharacter(10000, 1028108);
    ForceAnimationPlayback(10000, 7114, false, false, false);
    WaitFixedTimeSeconds(0.7);
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 17, 90021);
    WaitFixedTimeSeconds(1.5);
    RequestCharacterAnimationReset(10000, Interpolation.Uninterpolated);
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1028110, 10, 2);
    EndUnconditionally(EventEndType.Restart);
});

/* Sanctuary Blue Return To Lobby */
/* Bonfire that warps you from the play area back to the lobby. Blue base edition. */
Event(11028112, Default, function() {
    SetNetworkSyncState(Disabled); // Don't sync this becasue it invovles time delayed moving of players
    IfCharacterHasSpeffect(AND_01, 10000, 9105, false);  // Can't take either flag into the lobby
    IfCharacterHasSpeffect(AND_01, 10000, 9106, false);
    IfActionButton(AND_01, TargetEntityType.Object, 1028109, 180, 100, 2, 10010603, ReactionType.All, 0);
    IfConditionGroup(MAIN, PASS, AND_01);
    RotateCharacter(10000, 1028109);
    ForceAnimationPlayback(10000, 7114, false, false, false);
    WaitFixedTimeSeconds(0.7);
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 17, 90021);
    WaitFixedTimeSeconds(1.5);
    RequestCharacterAnimationReset(10000, Interpolation.Uninterpolated);
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1028110, 10, 2);
    EndUnconditionally(EventEndType.Restart);
});

/* Sanctuary 'On Death' Handler */
/* When a player reaches 5 hp, and does not yet have the arena dead speff or arena respawn speff, we put them into 'arena dead' state for 10 seconds. Then when the 10 seconds is up we flag them for respawn via speff. */
Event(11028113, Default, function() {
    SetNetworkSyncState(Disabled); //Don't sync this because it displays a message. The part that needs sync (status changes) is handled by the script below.
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 1028101);
    IfCharacterHPValue(AND_01, 10000, ComparisonType.Greater, 5);
    IfCharacterHasSpeffect(AND_01, 10000, 9100, false);
    IfCharacterHasSpeffect(AND_01, 10000, 9101, false);
    IfCharacterHasSpeffect(AND_01, 10000, 9102, false);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    SetSpeffect(10000, 9100);    // Set "Dead" Speff
    SetSpeffect(10000, 9111);
    
    RemoveItemFromPlayer(ItemType.Weapon, 2107000, 999); // Remove special arrows on death
    RemoveItemFromPlayer(ItemType.Weapon, 2203000, 999);
    RemoveItemFromPlayer(ItemType.Weapon, 2204000, 999);
    
    DisplayGenericDialog(10010617, PromptType.OKCANCEL, NumberofOptions.NoButtons, 10000, 1);

    //RequestCharacterAnimationReset(10000, Interpolation.Uninterpolated);
    //SetSpecialAnimations(10000, 0, -1, -1, -1, -1);   // Force animation reset
    //SetSpecialAnimations(10000, -1, -1, -1, -1, -1);  // Hopefully this isn't needed anymore. (??) It should help with syncing to not have it I hope.
    EndUnconditionally(EventEndType.Restart);
});

/* Sanctuary Red On Death Kill Counter */
/* Description */
Event(11028160, Default, function() {
    IfCharacterHasSpeffect(AND_01, 10000, 9111, true);
    IfCharacterHasSpeffect(AND_01, 10000, 9100, true);
    IfCharacterType(OR_01, 10000, TargetType.Alive);
    IfCharacterType(OR_01, 10000, TargetType.WhitePhantom);
    IfConditionGroup(AND_02, PASS, OR_01);
    IfConditionGroup(AND_02, PASS, AND_01);
    IfConditionGroup(MAIN, PASS, AND_02);  // If red team member dead and has 'kill count flag'
    IncrementEventValue(11029750, 8, 30);  // Increment blue score
    ClearSpeffect(10000, 9111);            // Remove kill count flag speff
    
    EndUnconditionally(EventEndType.Restart);
});

/* Sanctuary Blue On Death Kill Counter */
/* Description */
Event(11028161, Default, function() {
    IfCharacterHasSpeffect(AND_01, 10000, 9111, true);
    IfCharacterHasSpeffect(AND_01, 10000, 9100, true);
    IfCharacterType(OR_01, 10000, TargetType.BlackPhantom);
    IfCharacterType(OR_01, 10000, TargetType.Invader);
    IfConditionGroup(AND_02, PASS, OR_01);
    IfConditionGroup(AND_02, PASS, AND_01);
    IfConditionGroup(MAIN, PASS, AND_02);  // If blue team member dead and has 'kill count flag'
    IncrementEventValue(11029760, 8, 30);  // Increment red score
    ClearSpeffect(10000, 9111);            // Remove kill count flag speff
    
    EndUnconditionally(EventEndType.Restart);
});

/* Sanctuary Sync'd Respawn Speff Remvoer */
/* When a player dies, we remove any speffs for powerups or status effects. This is synced so as to prevent phantom visual effects for other players. */
Event(11028154, Default, function() {
    IfCharacterHasSpeffect(AND_01, 10000, 9100, true);
    IfConditionGroup(MAIN, PASS, AND_01);
    
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
    
    ClearSpeffect(10000, 510);  // Clear various magic buffs (mostly spells)
    ClearSpeffect(10000, 530);
    ClearSpeffect(10000, 540);
    ClearSpeffect(10000, 541);
    ClearSpeffect(10000, 550);
    ClearSpeffect(10000, 555);
    ClearSpeffect(10000, 570);
    ClearSpeffect(10000, 571);
    ClearSpeffect(10000, 572);
    ClearSpeffect(10000, 573);
    ClearSpeffect(10000, 574);
    ClearSpeffect(10000, 610);
    ClearSpeffect(10000, 611);
    ClearSpeffect(10000, 612);
    ClearSpeffect(10000, 620);
    ClearSpeffect(10000, 640);
    ClearSpeffect(10000, 645);
    ClearSpeffect(10000, 1000);
    ClearSpeffect(10000, 1010);
    ClearSpeffect(10000, 1020);
    ClearSpeffect(10000, 1024);
    ClearSpeffect(10000, 1025);
    ClearSpeffect(10000, 1040);
    ClearSpeffect(10000, 1050);
    ClearSpeffect(10000, 1060);
    ClearSpeffect(10000, 1070);
    ClearSpeffect(10000, 1080);
    ClearSpeffect(10000, 1081);
    ClearSpeffect(10000, 1082);
    ClearSpeffect(10000, 1083);
    ClearSpeffect(10000, 1120);
    ClearSpeffect(10000, 1130);
    ClearSpeffect(10000, 1140);
    ClearSpeffect(10000, 1150);
    ClearSpeffect(10000, 1155);
    ClearSpeffect(10000, 1156);
    ClearSpeffect(10000, 1160);
    ClearSpeffect(10000, 1170);
    ClearSpeffect(10000, 1090);
    ClearSpeffect(10000, 1360);
    ClearSpeffect(10000, 1061);
    ClearSpeffect(10000, 1435);
    ClearSpeffect(10000, 1436);
    ClearSpeffect(10000, 1800);
    
    SetSpeffect(10000, 1303); // Cure all status effects 
    
    EndUnconditionally(EventEndType.Restart);
});

/* Sanctuary 'On Respawn' Handler */
/* If a player has the 'arena respawn' speff we do a respawn. Also add the 'post respawn' speff to prevent a double respawn due to emevd nonsense. */
Event(11028114, Default, function() {
    SetNetworkSyncState(Disabled); // Do not sync this since we are applying bonfire recovery and doing a cutscene warp
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 1028101);
    IfCharacterHasSpeffect(AND_01, 10000, 9101, true);
    IfCharacterHasSpeffect(AND_01, 10000, 9102, false);
    SkipIfConditionGroupStateUncompiled(1, PASS, AND_01); // I don't know why I wrote it this way. ???
    EndUnconditionally(EventEndType.Restart);
    
    SetSpeffect(10000, 9102);   // Add 'post respawn' speff
    ClearSpeffect(10000, 9100); // Clear 'dead' speff
    ClearSpeffect(10000, 9101); // Clear 'respawn' spefff
    
    BonfirelikeRecovery();      // Recovery
    SetSpeffect(10000, 1330);   // Repair all equipment
    SetSpeffect(10000, 9108);   // Respawn hide effect. Makes you invis for 1 second.
    
    WaitFixedTimeFrames(1);     // Wait 1 frame for the chr.esd state to update
    
    // Pick a respawn point randomly
    ClearEventValue(11029720, 5);
    RandomlySetEventFlagInRange(11029720, 11029724, ON);
    
    IfCharacterType(OR_01, 10000, TargetType.Alive);
    IfCharacterType(OR_01, 10000, TargetType.WhitePhantom);
    SkipIfConditionGroupStateUncompiled(10, PASS, OR_01);      // Skip to ::1
    // Respawns for Red Team
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 11029720);    
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1028120, 10, 2); // Warp to respawn point
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 11029721);    
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1028121, 10, 2); // Warp to respawn point
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 11029722);    
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1028122, 10, 2); // Warp to respawn point
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 11029723);    
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1028123, 10, 2); // Warp to respawn point
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 11029724);    
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1028124, 10, 2); // Warp to respawn point
    // ::1
    IfCharacterType(OR_02, 10000, TargetType.BlackPhantom);
    IfCharacterType(OR_02, 10000, TargetType.Invader);
    SkipIfConditionGroupStateUncompiled(10, PASS, OR_02);      // Skip to ::2
    // Respawns for Blue Team
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 11029720);    
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1028125, 10, 2); // Warp to respawn point
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 11029721);    
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1028126, 10, 2); // Warp to respawn point
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 11029722);    
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1028127, 10, 2); // Warp to respawn point
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 11029723);   
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1028128, 10, 2); // Warp to respawn point
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 11029724);    
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1028129, 10, 2); // Warp to respawn point
    // ::2
    RequestCharacterAnimationReset(10000, Interpolation.Uninterpolated);
    RequestAnimationPlayback(10000, 6950, false, false, false);        // 'Stand up' animation after respawn
    EndUnconditionally(EventEndType.Restart);
});

/* Sanctuary Red Kill Counter */
/* Host counts kills for each team. First to limit is flagged to win. */
Event(11028122, Default, function() {
    //EndIfMultiplayerState(EventEndType.End, MultiplayerState.Client); // Only host checks kill counts
    
    IfEventValue(AND_01, 11029750, 8, ComparisonType.GreaterOrEqual, 30);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 11028145);
    IfConditionGroup(MAIN, PASS, AND_01); // If blue team is not already flagged for loss, and red teams kill count is over 30
    
    SetEventFlag(11028145, ON); // Flag blue team loss
    
    EndUnconditionally(EventEndType.Restart);
});

/* Sanctuary Red Kill Threshold Messages */
/* When the kill counts reach certain values we display a message letting everyone know whos in the lead. */
Event(11028123, Default, function() {
    SetNetworkSyncState(Disabled); // Just reading event flags and displaying messages.
    //EndIfMultiplayerState(EventEndType.End, MultiplayerState.Client); // Only host checks kill counts
    
    IfEventValue(MAIN, 11029750, 8, ComparisonType.GreaterOrEqual, 10);
    DisplayMessage(10010622, 0);
    IfEventValue(MAIN, 11029750, 8, ComparisonType.GreaterOrEqual, 20);
    DisplayMessage(10010623, 0);
    IfEventValue(MAIN, 11029750, 8, ComparisonType.GreaterOrEqual, 25);
    DisplayMessage(10010624, 0);
    
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 11028145); 
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 11028120);
    IfConditionGroup(MAIN, PASS, OR_01);  // Wait for game to end before starting again
    
    WaitFixedTimeSeconds(10); // Delay to allow next round to start
    
    EndUnconditionally(EventEndType.Restart);
});

/* Sanctuary Blue Kill Counter */
/* Host counts kills for each team. First to limit is flagged to win. */
Event(11028124, Default, function() {
    //EndIfMultiplayerState(EventEndType.End, MultiplayerState.Client); // Only host checks kill counts
    
    IfEventValue(AND_01, 11029760, 8, ComparisonType.GreaterOrEqual, 30);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 11028120);
    IfConditionGroup(MAIN, PASS, AND_01); // If blue team is not already flagged for loss, and red teams kill count is over 30
    
    SetEventFlag(11028120, ON); // Flag blue team loss
    
    EndUnconditionally(EventEndType.Restart);
});

/* Sanctuary Blue Kill Threshold Messages */
/* When the kill counts reach certain values we display a message letting everyone know whos in the lead. */
Event(11028125, Default, function() {
    SetNetworkSyncState(Disabled); // Just reading event flags and displaying messages.
    //EndIfMultiplayerState(EventEndType.End, MultiplayerState.Client); // Only host checks kill counts
    
    IfEventValue(MAIN, 11029760, 8, ComparisonType.GreaterOrEqual, 10);
    DisplayMessage(10010626, 0);
    IfEventValue(MAIN, 11029760, 8, ComparisonType.GreaterOrEqual, 20);
    DisplayMessage(10010627, 0);
    IfEventValue(MAIN, 11029760, 8, ComparisonType.GreaterOrEqual, 25);
    DisplayMessage(10010628, 0);
    
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 11028145); 
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 11028120);
    IfConditionGroup(MAIN, PASS, OR_01);  // Wait for game to end before starting again
    
    WaitFixedTimeSeconds(10); // Delay to allow next round to start
    
    EndUnconditionally(EventEndType.Restart);
});

/* Sanctuary Red Team Lose */
/* Display victory/loss, give rewards, reset game and returns players to lobby. */
Event(11028121, Default, function() {
    SetNetworkSyncState(Disabled); // Should be fine.
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11028120);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    IfCharacterType(OR_01, 10000, TargetType.Alive);
    IfCharacterType(OR_01, 10000, TargetType.WhitePhantom);
    SkipIfConditionGroupStateUncompiled(2, PASS, OR_01);
    DisplayBanner(TextBannerType.YouLose);
    SkipUnconditionally(1);
    DisplayBanner(TextBannerType.YouWin);
    
    WaitFixedTimeSeconds(5.0);

    BonfirelikeRecovery();
    ClearSpeffect(10000, 9100);  // Clear all game state effects
    ClearSpeffect(10000, 9101);
    ClearSpeffect(10000, 9102);
    ClearSpeffect(10000, 9105);
    ClearSpeffect(10000, 9106);
    
    ClearSpeffect(10000, 9021);  // Remove all arena powerup buffs
    ClearSpeffect(10000, 9022);
    ClearSpeffect(10000, 9023);
    ClearSpeffect(10000, 9024);
    ClearSpeffect(10000, 9029);
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
    
    /* Return to lobby and ready for next match */
    RequestCharacterAnimationReset(10000, Interpolation.Uninterpolated);
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1028113, 10, 2);
    ClearEventValue(11029750, 8); // Clear red kill counter
    ClearEventValue(11029760, 8); // Clear red kill counter
    SetEventFlag(11028120, OFF);  // Reset red lose flag
    SetEventFlag(11028145, OFF);  // Reset blue lose flag
    RequestCharacterAnimationReset(10000, Interpolation.Uninterpolated); // Prevent fall animation lol
    
    /* Award loot */
    WaitFixedTimeSeconds(3.0);
    AwardItemsIncludingClients(5005);
    AwardItemsIncludingClients(5005);
    IfCharacterType(OR_02, 10000, TargetType.Alive);
    IfCharacterType(OR_02, 10000, TargetType.WhitePhantom);
    SkipIfConditionGroupStateUncompiled(1, PASS, OR_02);
    SkipUnconditionally(1);
    AwardItemsIncludingClients(5005);
    EndUnconditionally(EventEndType.Restart);
});

/* Sanctuary Blue Team Lose */
/* Display victory/loss, give rewards, reset game and returns players to lobby. */
Event(11028146, Default, function() {
    SetNetworkSyncState(Disabled); // Should be fine.
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11028145);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    IfCharacterType(OR_01, 10000, TargetType.Invader);
    IfCharacterType(OR_01, 10000, TargetType.BlackPhantom);
    SkipIfConditionGroupStateUncompiled(2, PASS, OR_01);
    DisplayBanner(TextBannerType.YouLose);
    SkipUnconditionally(1);
    DisplayBanner(TextBannerType.YouWin);
    
    WaitFixedTimeSeconds(5.0);

    BonfirelikeRecovery();
    ClearSpeffect(10000, 9100);  // Clear all game state effects
    ClearSpeffect(10000, 9101);
    ClearSpeffect(10000, 9102);
    ClearSpeffect(10000, 9105);
    ClearSpeffect(10000, 9106);
    
    ClearSpeffect(10000, 9021);  // Remove all arena powerup buffs
    ClearSpeffect(10000, 9022);
    ClearSpeffect(10000, 9023);
    ClearSpeffect(10000, 9024);
    ClearSpeffect(10000, 9025);
    ClearSpeffect(10000, 9026);
    ClearSpeffect(10000, 9028);
    ClearSpeffect(10000, 9027);
    ClearSpeffect(10000, 9029);
    ClearSpeffect(10000, 9030);
    ClearSpeffect(10000, 9031);
    ClearSpeffect(10000, 9032);
    ClearSpeffect(10000, 9033);
    ClearSpeffect(10000, 9034);
    ClearSpeffect(10000, 9035);
    ClearSpeffect(10000, 9041);
    
    /* Return to lobby and ready for next match */
    RequestCharacterAnimationReset(10000, Interpolation.Uninterpolated);
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1028113, 10, 2);
    ClearEventValue(11029750, 8); // Clear red kill counter
    ClearEventValue(11029760, 8); // Clear red kill counter
    SetEventFlag(11028120, OFF);  // Reset red lose flag
    SetEventFlag(11028145, OFF);  // Reset blue lose flag
    RequestCharacterAnimationReset(10000, Interpolation.Uninterpolated); // Prevent fall animation lol
    
    /* Award loot */
    WaitFixedTimeSeconds(3.0);
    AwardItemsIncludingClients(5005);
    AwardItemsIncludingClients(5005);
    IfCharacterType(OR_02, 10000, TargetType.Invader);
    IfCharacterType(OR_02, 10000, TargetType.BlackPhantom);
    SkipIfConditionGroupStateUncompiled(1, PASS, OR_02);
    SkipUnconditionally(1);
    AwardItemsIncludingClients(5005);
    EndUnconditionally(EventEndType.Restart);
});

/* == Special IDs == */
// 11029720 -> 11029724 - Randomize Respawn Flags - 5 Bits
// 11029750 -> 11029757 - Red kill counter - 8 Bits
// 11029760 -> 11029767 - Blue kill counter - 8 Bits

/* === ID Dictionary === */
// 11028200 - Wizard Init Script
// 1028200 - Wizard Staging Area Region
// 1028201 - Wizard Region
// 11028201 - Wizard Give Team Change Items
// 11028202 - Wizard Remove Team Change Items
// 11028203 - Wizard Staging Area Auto-Invade
// 1028202 - Wizard Staging Area Auto-Invade Region
// 11028204 - Wizard Return To Firelink Script
// 1028203 - Wizard Return To Firelink Bonfire
// 11028205 - Wizard Join game Script
// 1028204 - Wizard Join Game Bonfire
// 1028205 - Wizard Join Game Red Warp
// 1028206 - Wizard Join Game Blue Warp
// 11028206 - Wizard Arena No Dead Apply
// 11028207 - Wizard Staging Area Invincibility
// 11028208 - Wizard Offline Kick Out
// 1028207 - Wizard Map Collision
// 11028209 - Wizard give lobby summon sign and fingers
// 11028210 - Wizard enforce red team id
// 1028208 - Wizard Red Return To Lobby Bonfire
// 1028209 - Wizard Blue Return To Lobby Bonfire
// 1028210 - Wizard Return To Lobby Target Region
// 11028211 - Wizard Return to Lobby: Red
// 11028212 - Wizard Return to Lobby: Blue
// 11028213 - Wizard 'On Death' Handler
// 11028214 - Wizard 'On Respawn' Handler
// 1028220 -> 1028224 - Red Team Respawn Points
// 1028225 -> 1028229 - Blue Team Respawn Points
// 1028213 - Wizard Game Over Return Target Region
// 11028220 - Wizard Red Lose Flag
// 11028221 - Wizard Red Lose Script
// 11028245 - Wizard Blue Lose Flag
// 11028246 - Wizard Blue Lose Script
// 11028248 - Wizard Give Hollowing Item
// 11028249 - Wizard Remove Hollowing Item
// 11028250 - Wizard Remove Arena Speff Auto-Invade Fix
// 11028254 - Wizard Respawn Sync'd Speff Remover
// 11028252 - Wizard Kill Counter
// 11028223 - Wizard Kill Threshold Messages
// 1028298 - Ladder 00
// 1028299 - Ladder 01
// 11028290 -> 11028297 - Ladder Flags
// 11028260 - Wizard Red On Death Kill Count
// 11028261 - Wizard Blue On Death Kill Count


/* Wizard Init General */
Event(11028200, Default, function() {
    
    /* Initialize some variables, only the host does this. */
    SkipIfMultiplayerState(5, MultiplayerState.Client);
    ClearEventValue(11029720, 5); // Clear randomize respawn flags
    ClearEventValue(11029750, 8); // Clear red kill counter
    ClearEventValue(11029760, 8); // Clear red kill counter
    SetEventFlag(11028220, OFF);  // Reset red lose flag
    SetEventFlag(11028245, OFF);  // Reset blue lose flag
    
    /* Start arena scripts, but only once we enter the lobby. */
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1028200); // Don't init WZ arena unless we are in the staging area (or map)
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1028201);
    IfConditionGroup(MAIN, PASS, OR_01);
    InitializeEvent(0, 11028201, 0); // Give team change items while in staging area
    InitializeEvent(0, 11028202, 0); // Remove team change items if outside staging area
    InitializeEvent(0, 11028203, 0); // Auto-Invade area
    InitializeEvent(0, 11028204, 0); // Return to Firelink
    InitializeEvent(0, 11028205, 0); // Join game
    InitializeEvent(0, 11028206, 0); // Arena No Dead
    InitializeEvent(0, 11028207, 0); // Staging Area Invincibility
    InitializeEvent(0, 11028208, 0); // Offline Kick Out                              // DEBUG!!!
    InitializeEvent(0, 11028209, 0); // Give lobby summon sign and dried fingers
    InitializeEvent(0, 11028210, 0); // Enforce red team id
    InitializeEvent(0, 11028211, 0); // Return to lobby: Red
    InitializeEvent(0, 11028212, 0); // Return to lobby: Blue
    InitializeEvent(0, 11028213, 0); // 'On Death' Handler
    InitializeEvent(0, 11028214, 0); // 'On Respawn' Handler
    InitializeEvent(0, 11028248, 0); // Give Hollowing Item
    InitializeEvent(0, 11028249, 0); // Remove Hollowing Item
    InitializeEvent(0, 11028250, 0); // Remove Arena Speff Auto-Invade Fix
    InitializeEvent(0, 11028254, 0); // Synced Respawn Speff Remover
    
    InitializeEvent(0, 11028222, 0); // Red Kill Counter
    InitializeEvent(0, 11028223, 0); // Red Kill Threshold Messages
    InitializeEvent(0, 11028221, 0); // Red Lose
    InitializeEvent(0, 11028260, 0); // Red On Death Kill Count
    
    InitializeEvent(0, 11028224, 0); // Blue Kill Counter
    InitializeEvent(0, 11028225, 0); // Blue Kill Threshold Messages
    InitializeEvent(0, 11028246, 0); // Blue Lose
    InitializeEvent(0, 11028261, 0); // Blue On Death Kill Count
    
    /* Ladders */
    RegisterLadder(11028290, 11028291, 1028296);
    RegisterLadder(11028292, 11028293, 1028297);
    RegisterLadder(11028294, 11028295, 1028298);
    RegisterLadder(11028296, 11028297, 1028299);
    
    /* Teleporters */
    InitializeEvent(0, 11029905, 1028240, 1028241); // Wiz Teleporter Interact 01
    InitializeEvent(0, 11029906, 1028242, 1028243); // Wiz Teleporter Trigger 01
    InitializeEvent(1, 11029905, 1028244, 1028245); // Wiz Teleporter Interact 02
    InitializeEvent(1, 11029906, 1028246, 1028247); // Wiz Teleporter Trigger 02
    InitializeEvent(2, 11029905, 1028248, 1028249); // Wiz Teleporter Interact 03
    InitializeEvent(2, 11029906, 1028250, 1028251); // Wiz Teleporter Trigger 03
    InitializeEvent(3, 11029905, 1028252, 1028253); // Wiz Teleporter Interact 04
    InitializeEvent(3, 11029906, 1028254, 1028255); // Wiz Teleporter Trigger 04
    
    /* Powerups */
    InitializeEvent(0, 11029901, 9010, 9500); // Give SP Ammo Handler
    InitializeEvent(0, 11029902, 0);          // Remove last speical arrow bugfix
    InitializeEvent(0, 11029900, 1028260, 1028261, 10030175, 9035, 5400); // Powerup 01
    InitializeEvent(1, 11029900, 1028262, 1028263, 10030174, 9034, 5400); // Powerup 02
    InitializeEvent(2, 11029900, 1028264, 1028265, 10030167, 9027, 4500); // Powerup 03
    InitializeEvent(3, 11029900, 1028266, 1028267, 10030166, 9026, 4500); // Powerup 04
    InitializeEvent(4, 11029900, 1028268, 1028269, 10030160, 9010, 4500); // Powerup 05
    InitializeEvent(5, 11029900, 1028270, 1028271, 10030165, 9025, 4500); // Powerup 06
    InitializeEvent(6, 11029900, 1028272, 1028273, 10030164, 9024, 3600); // Powerup 07
    InitializeEvent(7, 11029900, 1028274, 1028275, 10030171, 9031, 3600); // Powerup 08
    InitializeEvent(8, 11029900, 1028276, 1028277, 10030168, 9028, 3600); // Powerup 09
    InitializeEvent(9, 11029900, 1028278, 1028279, 10030172, 9032, 3600); // Powerup 10
    InitializeEvent(10, 11029900, 1028280, 1028281, 10030162, 9022, 1350); // Powerup 11
    InitializeEvent(11, 11029900, 1028282, 1028283, 10030162, 9022, 1350); // Powerup 12
    InitializeEvent(12, 11029900, 1028284, 1028285, 10030161, 9021, 900); // Powerup 13
    InitializeEvent(13, 11029900, 1028286, 1028287, 10030161, 9021, 900); // Powerup 14
    InitializeEvent(14, 11029900, 1028288, 1028289, 10030163, 9023, 2700); // Powerup 15
    InitializeEvent(15, 11029900, 1028290, 1028291, 10030163, 9023, 2700); // Powerup 16
    InitializeEvent(16, 11029900, 1028292, 1028293, 10030163, 9023, 2700); // Powerup 17
    InitializeEvent(17, 11029900, 1028294, 1028295, 10030163, 9023, 2700); // Powerup 18
    
    /* Killbox */
    
    /* Welcome! */
    WaitFixedTimeSeconds(3.25);
    DisplayStatusMessage(10010639, Enabled);  // Lobby entrance message
});



/* Wizard Give Team Change Items */
// If we are in the staging area, and we are NOT the host, give the team changing items.
Event(11028201, Default, function() {
    SetNetworkSyncState(Disabled);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 1028200);
    IfMultiplayerState(AND_01, MultiplayerState.Client);
    IfPlayerHasdoesntHaveItem(AND_01, ItemType.Goods, 265, OwnershipState.DoesntOwn);
    IfPlayerHasdoesntHaveItem(AND_01, ItemType.Goods, 266, OwnershipState.DoesntOwn);
    IfCharacterType(OR_01, 10000, TargetType.WhitePhantom);
    IfCharacterType(OR_01, 10000, TargetType.BlackPhantom);
    IfCharacterType(OR_01, 10000, TargetType.Invader);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfConditionGroup(MAIN, PASS, AND_01);
    AwardItemsIncludingClients(5050);
    WaitFixedTimeSeconds(1);
    EndUnconditionally(EventEndType.Restart);
});

/* Wizard Remove Team Change Items */
// If we are outside the staging area, remove team change items.
Event(11028202, Default, function() {
    SetNetworkSyncState(Disabled);
    IfInoutsideArea(AND_01, InsideOutsideState.Outside, 10000, 1028200);
    IfPlayerHasdoesntHaveItem(AND_01, ItemType.Goods, 265, OwnershipState.Owns);
    IfPlayerHasdoesntHaveItem(AND_01, ItemType.Goods, 266, OwnershipState.Owns);
    IfConditionGroup(MAIN, PASS, AND_01);
    RemoveItemFromPlayer(ItemType.Goods, 265, 1);
    RemoveItemFromPlayer(ItemType.Goods, 266, 1);
    WaitFixedTimeSeconds(1);
    EndUnconditionally(EventEndType.Restart);
});

/* Wizard Give Hollowing Item */
// If we are in the invasion area, and we are singleplayer, and we are team 1 (alive), give hollow orb
Event(11028248, Default, function() {
    SetNetworkSyncState(Disabled);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 1028202);
    IfMultiplayerState(AND_01, MultiplayerState.Singleplayer);
    IfPlayerHasdoesntHaveItem(AND_01, ItemType.Goods, 269, OwnershipState.DoesntOwn);
    IfCharacterType(AND_01, 10000, TargetType.Alive);
    IfCharacterHasSpeffect(AND_01, 10000, 4610, false);
    IfCharacterHasSpeffect(AND_01, 10000, 4613, false);
    IfConditionGroup(MAIN, PASS, AND_01);
    AwardItemLot(5058);
    WaitFixedTimeSeconds(1);
    EndUnconditionally(EventEndType.Restart);
});

/* Wizard Remove Hollowing Item */
// If we are ouside the invasion area, are in multiplayer, are hollow, or have arena speffs, we remove the hollow orb
Event(11028249, Default, function() {
    SetNetworkSyncState(Disabled);
    IfInoutsideArea(OR_01, InsideOutsideState.Outside, 10000, 1028202);
    IfMultiplayerState(OR_01, MultiplayerState.Multiplayer);
    IfCharacterType(OR_01, 10000, TargetType.Hollow);
    IfPlayerHasdoesntHaveItem(AND_01, ItemType.Goods, 269, OwnershipState.Owns);
    IfCharacterHasSpeffect(OR_01, 10000, 4610, true);
    IfCharacterHasSpeffect(OR_01, 10000, 4613, true);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfConditionGroup(MAIN, PASS, AND_01);
    RemoveItemFromPlayer(ItemType.Goods, 269, 1);
    WaitFixedTimeSeconds(1);
    EndUnconditionally(EventEndType.Restart);
});

/* Wizard Clear Arena Speff 3 Frame Delay Fix */
// There is a delay betweeen clearing 4610 and returning to proper human/hollow, so I clear the effects to sort out a minor issue. Not critical.
Event(11028250, Default, function() {
    SetNetworkSyncState(Disabled);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 1028202);
    IfMultiplayerState(AND_01, MultiplayerState.Singleplayer);
    IfConditionGroup(MAIN, PASS, AND_01);
    ClearSpeffect(10000, 4610);
    WaitFixedTimeSeconds(0.05);
    ClearSpeffect(10000, 4613);
    
    EndUnconditionally(EventEndType.Restart);
});
    

/* Wizard Staging Area Auto-Invade Script */
// Small area that players can stand in and it will constantly search for players to invade. Also clears arena speff so you can invade while hollow
Event(11028203, Default, function() {
    SetNetworkSyncState(Disabled);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 1028202);
    IfMultiplayerState(AND_01, MultiplayerState.Singleplayer);
    IfConditionGroup(MAIN, PASS, AND_01);
    WaitFixedTimeSeconds(1.5);
    
    IfInoutsideArea(AND_02, InsideOutsideState.Inside, 10000, 1028202);
    IfMultiplayerState(AND_02, MultiplayerState.Singleplayer);
    IfConditionGroup(MAIN, PASS, AND_02);
    SetSpeffect(10000, 11);
    WaitFixedTimeSeconds(20);
    
    EndUnconditionally(EventEndType.Restart);
});


/* Wizard Return to Firelink */
/* Ends multiplayer session. For hosts it returns you to firelink and for phantoms it black crystals you out */
Event(11028204, Default, function() {
    SetNetworkSyncState(Disabled); // Don't sync this becasue it invovles time delayed moving of players
    IfActionButton(MAIN, TargetEntityType.Object, 1028203, 180, 100, 2, 10010608, ReactionType.All, 0);
    RotateCharacter(10000, 1028203);
    ForceAnimationPlayback(10000, 7114, false, false, false);
    WaitFixedTimeSeconds(0.7);
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 17, 90021);
    WaitFixedTimeSeconds(1.5);
    SkipIfMultiplayerState(2, MultiplayerState.Client); // Skip to ::1
    WarpPlayer(10, 2, 1020966);
    EndUnconditionally(EventEndType.Restart);
    // ::1
    SetSpeffect(10000, 7);
    EndUnconditionally(EventEndType.Restart);
});

/* Wizard Join Game */
/* Bonfire that warps you into the actual map play area. */
Event(11028205, Default, function() {
    SetNetworkSyncState(Disabled); // Don't sync this becasue it invovles time delayed moving of players
    IfActionButton(MAIN, TargetEntityType.Object, 1028204, 180, 100, 2, 10010601, ReactionType.All, 0);
    RotateCharacter(10000, 1028204);
    ForceAnimationPlayback(10000, 7114, false, false, false);
    WaitFixedTimeSeconds(0.7);
    
    //PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1028206, 10, 2); // DEBUG!!!
    //EndUnconditionally(EventEndType.Restart);                                       // DEBUG!!!
    
    SkipIfMultiplayerState(2, MultiplayerState.Multiplayer); // Skip to ::1
    DisplayGenericDialog(10010609, PromptType.OKCANCEL, NumberofOptions.NoButtons, 10000, 1);
    EndUnconditionally(EventEndType.Restart);
    // ::1
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 17, 90021);
    WaitFixedTimeSeconds(1.5);
    IfCharacterType(OR_01, 10000, TargetType.Alive);
    IfCharacterType(OR_01, 10000, TargetType.WhitePhantom);
    SkipIfConditionGroupStateUncompiled(2, PASS, OR_01); // Skip to ::2
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1028206, 10, 2);
    EndUnconditionally(EventEndType.Restart);
    // ::2
    IfCharacterType(OR_02, 10000, TargetType.BlackPhantom);
    IfCharacterType(OR_02, 10000, TargetType.Invader);
    SkipIfConditionGroupStateUncompiled(2, PASS, OR_02); // Skip to ::3
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1028205, 10, 2);
    EndUnconditionally(EventEndType.Restart);
    // ::3
    EndUnconditionally(EventEndType.Restart);
});


/* Wizard Arena No Dead */
/* Applies the Arena No Dead effect to you while you are in the arena. Respawns are handled by scripts so we don't want people dieing. */
Event(11028206, Default, function() {
    SetNetworkSyncState(Disabled);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1028200);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1028201);
    IfInoutsideArea(AND_01, InsideOutsideState.Outside, 10000, 1028202);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetSpeffect(10000, 4613);
    SetSpeffect(10000, 4610);
    ClearSpeffect(10000, 33);
    ClearSpeffect(10000, 34);
    
    WaitFixedTimeSeconds(1);
    EndUnconditionally(EventEndType.Restart);
});

/* Wizard Staging Area Invincibility */
/* Grants full invincibility while in the staging area. Also removes it when you exit. Additionally, invincibility is granted if the player is currently in a 'dead' state in the arena play area. */
Event(11028207, Default, function() {
    SetNetworkSyncState(Disabled);
    WaitFixedTimeSeconds(1);
    IfInoutsideArea(AND_02, InsideOutsideState.Inside, 10000, 1028201);
    IfCharacterHasSpeffect(AND_02, 10000, 9100, true);
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_02); // Skip to ::2
    SetCharacterInvincibility(10000, Enabled);
    EndUnconditionally(EventEndType.Restart);
    // ::2
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 1028200);
    SkipIfConditionGroupStateUncompiled(2, PASS, AND_01); // Skip to ::1
    SetCharacterInvincibility(10000, Disabled);
    EndUnconditionally(EventEndType.Restart);
    // ::1
    SetCharacterInvincibility(10000, Enabled);
    BonfirelikeRecovery();
    SetSpeffect(10000, 9112);
    EndUnconditionally(EventEndType.Restart);
});

/* Wizard Play Area Offline Kickout */
/* If you are in the Wizard play area (the actual Wizard map) and you are in singleplayer, kick the player to the staging area. */
Event(11028208, Default, function() {
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 1028201);
    IfMultiplayerState(AND_01, MultiplayerState.Singleplayer);
    IfConditionGroup(MAIN, PASS, AND_01);
    WaitFixedTimeSeconds(3);
    WarpPlayer(10, 2, 1020997);
});

/* Wizard Give Lobby Items */
// If we are in the staging area, and we are the host, give lobby summon sign and lobby fingers
Event(11028209, Default, function() {
    SetNetworkSyncState(Disabled);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 1028200);
    IfCharacterType(AND_01, 10000, TargetType.Alive);
    IfPlayerHasdoesntHaveItem(AND_01, ItemType.Goods, 267, OwnershipState.DoesntOwn);
    IfPlayerHasdoesntHaveItem(AND_01, ItemType.Goods, 268, OwnershipState.DoesntOwn);
    IfConditionGroup(MAIN, PASS, AND_01);
    AwardItemLot(5055);
    WaitFixedTimeSeconds(1);
    EndUnconditionally(EventEndType.Restart);
});

/* Wizard Enforce Red Team ID */
// Both invaders and red summons should have their team immideately changed to 6. Prevents friendly fire.
Event(11028210, Default, function() {
    SetNetworkSyncState(Disabled);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1028200);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1028201);
    IfCharacterType(OR_02, 10000, TargetType.BlackPhantom);
    IfCharacterType(OR_02, 10000, TargetType.Invader);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfConditionGroup(AND_01, PASS, OR_02);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetCharacterTeamType(10000, TeamType.Enemy);
    EndUnconditionally(EventEndType.Restart);
});

/* Wizard Red Return To Lobby */
/* Bonfire that warps you from the play area back to the lobby. Red base edition. */
Event(11028211, Default, function() {
    SetNetworkSyncState(Disabled); // Don't sync this becasue it invovles time delayed moving of players
    IfCharacterHasSpeffect(AND_01, 10000, 9105, false);  // Can't take either flag into the lobby
    IfCharacterHasSpeffect(AND_01, 10000, 9106, false);
    IfActionButton(AND_01, TargetEntityType.Object, 1028208, 180, 100, 2, 10010603, ReactionType.All, 0);
    IfConditionGroup(MAIN, PASS, AND_01);
    RotateCharacter(10000, 1028208);
    ForceAnimationPlayback(10000, 7114, false, false, false);
    WaitFixedTimeSeconds(0.7);
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 17, 90021);
    WaitFixedTimeSeconds(1.5);
    RequestCharacterAnimationReset(10000, Interpolation.Uninterpolated);
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1028210, 10, 2);
    EndUnconditionally(EventEndType.Restart);
});

/* Wizard Blue Return To Lobby */
/* Bonfire that warps you from the play area back to the lobby. Blue base edition. */
Event(11028212, Default, function() {
    SetNetworkSyncState(Disabled); // Don't sync this becasue it invovles time delayed moving of players
    IfCharacterHasSpeffect(AND_01, 10000, 9105, false);  // Can't take either flag into the lobby
    IfCharacterHasSpeffect(AND_01, 10000, 9106, false);
    IfActionButton(AND_01, TargetEntityType.Object, 1028209, 180, 100, 2, 10010603, ReactionType.All, 0);
    IfConditionGroup(MAIN, PASS, AND_01);
    RotateCharacter(10000, 1028209);
    ForceAnimationPlayback(10000, 7114, false, false, false);
    WaitFixedTimeSeconds(0.7);
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 17, 90021);
    WaitFixedTimeSeconds(1.5);
    RequestCharacterAnimationReset(10000, Interpolation.Uninterpolated);
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1028210, 10, 2);
    EndUnconditionally(EventEndType.Restart);
});

/* Wizard 'On Death' Handler */
/* When a player reaches 5 hp, and does not yet have the arena dead speff or arena respawn speff, we put them into 'arena dead' state for 10 seconds. Then when the 10 seconds is up we flag them for respawn via speff. */
Event(11028213, Default, function() {
    SetNetworkSyncState(Disabled); //Don't sync this because it displays a message. The part that needs sync (status changes) is handled by the script below.
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 1028201);
    IfCharacterHPValue(AND_01, 10000, ComparisonType.Greater, 5);
    IfCharacterHasSpeffect(AND_01, 10000, 9100, false);
    IfCharacterHasSpeffect(AND_01, 10000, 9101, false);
    IfCharacterHasSpeffect(AND_01, 10000, 9102, false);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    SetSpeffect(10000, 9100);    // Set "Dead" Speff
    SetSpeffect(10000, 9111);
    
    RemoveItemFromPlayer(ItemType.Weapon, 2107000, 999); // Remove special arrows on death
    RemoveItemFromPlayer(ItemType.Weapon, 2203000, 999);
    RemoveItemFromPlayer(ItemType.Weapon, 2204000, 999);
    
    DisplayGenericDialog(10010617, PromptType.OKCANCEL, NumberofOptions.NoButtons, 10000, 1);

    //RequestCharacterAnimationReset(10000, Interpolation.Uninterpolated);
    //SetSpecialAnimations(10000, 0, -1, -1, -1, -1);   // Force animation reset
    //SetSpecialAnimations(10000, -1, -1, -1, -1, -1);  // Hopefully this isn't needed anymore. (??) It should help with syncing to not have it I hope.
    EndUnconditionally(EventEndType.Restart);
});

/* Wizard Red On Death Kill Counter */
/* Description */
Event(11028260, Default, function() {
    IfCharacterHasSpeffect(AND_01, 10000, 9111, true);
    IfCharacterHasSpeffect(AND_01, 10000, 9100, true);
    IfCharacterType(OR_01, 10000, TargetType.Alive);
    IfCharacterType(OR_01, 10000, TargetType.WhitePhantom);
    IfConditionGroup(AND_02, PASS, OR_01);
    IfConditionGroup(AND_02, PASS, AND_01);
    IfConditionGroup(MAIN, PASS, AND_02);  // If red team member dead and has 'kill count flag'
    IncrementEventValue(11029750, 8, 30);  // Increment blue score
    ClearSpeffect(10000, 9111);            // Remove kill count flag speff
    
    EndUnconditionally(EventEndType.Restart);
});

/* Wizard Blue On Death Kill Counter */
/* Description */
Event(11028261, Default, function() {
    IfCharacterHasSpeffect(AND_01, 10000, 9111, true);
    IfCharacterHasSpeffect(AND_01, 10000, 9100, true);
    IfCharacterType(OR_01, 10000, TargetType.BlackPhantom);
    IfCharacterType(OR_01, 10000, TargetType.Invader);
    IfConditionGroup(AND_02, PASS, OR_01);
    IfConditionGroup(AND_02, PASS, AND_01);
    IfConditionGroup(MAIN, PASS, AND_02);  // If blue team member dead and has 'kill count flag'
    IncrementEventValue(11029760, 8, 30);  // Increment red score
    ClearSpeffect(10000, 9111);            // Remove kill count flag speff
    
    EndUnconditionally(EventEndType.Restart);
});

/* Wizard Sync'd Respawn Speff Remvoer */
/* When a player dies, we remove any speffs for powerups or status effects. This is synced so as to prevent phantom visual effects for other players. */
Event(11028254, Default, function() {
    IfCharacterHasSpeffect(AND_01, 10000, 9100, true);
    IfConditionGroup(MAIN, PASS, AND_01);
    
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
    
    ClearSpeffect(10000, 510);  // Clear various magic buffs (mostly spells)
    ClearSpeffect(10000, 530);
    ClearSpeffect(10000, 540);
    ClearSpeffect(10000, 541);
    ClearSpeffect(10000, 550);
    ClearSpeffect(10000, 555);
    ClearSpeffect(10000, 570);
    ClearSpeffect(10000, 571);
    ClearSpeffect(10000, 572);
    ClearSpeffect(10000, 573);
    ClearSpeffect(10000, 574);
    ClearSpeffect(10000, 610);
    ClearSpeffect(10000, 611);
    ClearSpeffect(10000, 612);
    ClearSpeffect(10000, 620);
    ClearSpeffect(10000, 640);
    ClearSpeffect(10000, 645);
    ClearSpeffect(10000, 1000);
    ClearSpeffect(10000, 1010);
    ClearSpeffect(10000, 1020);
    ClearSpeffect(10000, 1024);
    ClearSpeffect(10000, 1025);
    ClearSpeffect(10000, 1040);
    ClearSpeffect(10000, 1050);
    ClearSpeffect(10000, 1060);
    ClearSpeffect(10000, 1070);
    ClearSpeffect(10000, 1080);
    ClearSpeffect(10000, 1081);
    ClearSpeffect(10000, 1082);
    ClearSpeffect(10000, 1083);
    ClearSpeffect(10000, 1120);
    ClearSpeffect(10000, 1130);
    ClearSpeffect(10000, 1140);
    ClearSpeffect(10000, 1150);
    ClearSpeffect(10000, 1155);
    ClearSpeffect(10000, 1156);
    ClearSpeffect(10000, 1160);
    ClearSpeffect(10000, 1170);
    ClearSpeffect(10000, 1090);
    ClearSpeffect(10000, 1360);
    ClearSpeffect(10000, 1061);
    ClearSpeffect(10000, 1435);
    ClearSpeffect(10000, 1436);
    ClearSpeffect(10000, 1800);
    
    SetSpeffect(10000, 1303); // Cure all status effects 
    
    EndUnconditionally(EventEndType.Restart);
});

/* Wizard 'On Respawn' Handler */
/* If a player has the 'arena respawn' speff we do a respawn. Also add the 'post respawn' speff to prevent a double respawn due to emevd nonsense. */
Event(11028214, Default, function() {
    SetNetworkSyncState(Disabled); // Do not sync this since we are applying bonfire recovery and doing a cutscene warp
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 1028201);
    IfCharacterHasSpeffect(AND_01, 10000, 9101, true);
    IfCharacterHasSpeffect(AND_01, 10000, 9102, false);
    SkipIfConditionGroupStateUncompiled(1, PASS, AND_01); // I don't know why I wrote it this way. ???
    EndUnconditionally(EventEndType.Restart);
    
    SetSpeffect(10000, 9102);   // Add 'post respawn' speff
    ClearSpeffect(10000, 9100); // Clear 'dead' speff
    ClearSpeffect(10000, 9101); // Clear 'respawn' spefff
    
    BonfirelikeRecovery();      // Recovery
    SetSpeffect(10000, 1330);   // Repair all equipment
    SetSpeffect(10000, 9108);   // Respawn hide effect. Makes you invis for 1 second.
    
    WaitFixedTimeFrames(1);     // Wait 1 frame for the chr.esd state to update
    
    // Pick a respawn point randomly
    ClearEventValue(11029720, 5);
    RandomlySetEventFlagInRange(11029720, 11029724, ON);
    
    IfCharacterType(OR_01, 10000, TargetType.Alive);
    IfCharacterType(OR_01, 10000, TargetType.WhitePhantom);
    SkipIfConditionGroupStateUncompiled(10, PASS, OR_01);      // Skip to ::1
    // Respawns for Red Team
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 11029720);    
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1028220, 10, 2); // Warp to respawn point
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 11029721);    
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1028221, 10, 2); // Warp to respawn point
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 11029722);    
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1028222, 10, 2); // Warp to respawn point
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 11029723);    
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1028223, 10, 2); // Warp to respawn point
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 11029724);    
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1028224, 10, 2); // Warp to respawn point
    // ::1
    IfCharacterType(OR_02, 10000, TargetType.BlackPhantom);
    IfCharacterType(OR_02, 10000, TargetType.Invader);
    SkipIfConditionGroupStateUncompiled(10, PASS, OR_02);      // Skip to ::2
    // Respawns for Blue Team
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 11029720);    
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1028225, 10, 2); // Warp to respawn point
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 11029721);    
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1028226, 10, 2); // Warp to respawn point
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 11029722);    
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1028227, 10, 2); // Warp to respawn point
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 11029723);   
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1028228, 10, 2); // Warp to respawn point
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 11029724);    
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1028229, 10, 2); // Warp to respawn point
    // ::2
    RequestCharacterAnimationReset(10000, Interpolation.Uninterpolated);
    RequestAnimationPlayback(10000, 6950, false, false, false);        // 'Stand up' animation after respawn
    EndUnconditionally(EventEndType.Restart);
});

/* Wizard Red Kill Counter */
/* Host counts kills for each team. First to limit is flagged to win. */
Event(11028222, Default, function() {
    //EndIfMultiplayerState(EventEndType.End, MultiplayerState.Client); // Only host checks kill counts
    
    IfEventValue(AND_01, 11029750, 8, ComparisonType.GreaterOrEqual, 30);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 11028245);
    IfConditionGroup(MAIN, PASS, AND_01); // If blue team is not already flagged for loss, and red teams kill count is over 30
    
    SetEventFlag(11028245, ON); // Flag blue team loss
    
    EndUnconditionally(EventEndType.Restart);
});

/* Wizard Red Kill Threshold Messages */
/* When the kill counts reach certain values we display a message letting everyone know whos in the lead. */
Event(11028223, Default, function() {
    SetNetworkSyncState(Disabled); // Just reading event flags and displaying messages.
    //EndIfMultiplayerState(EventEndType.End, MultiplayerState.Client); // Only host checks kill counts
    
    IfEventValue(MAIN, 11029750, 8, ComparisonType.GreaterOrEqual, 10);
    DisplayMessage(10010622, 0);
    IfEventValue(MAIN, 11029750, 8, ComparisonType.GreaterOrEqual, 20);
    DisplayMessage(10010623, 0);
    IfEventValue(MAIN, 11029750, 8, ComparisonType.GreaterOrEqual, 25);
    DisplayMessage(10010624, 0);
    
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 11028245); 
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 11028220);
    IfConditionGroup(MAIN, PASS, OR_01);  // Wait for game to end before starting again
    
    WaitFixedTimeSeconds(10); // Delay to allow next round to start
    
    EndUnconditionally(EventEndType.Restart);
});

/* Wizard Blue Kill Counter */
/* Host counts kills for each team. First to limit is flagged to win. */
Event(11028224, Default, function() {
    //EndIfMultiplayerState(EventEndType.End, MultiplayerState.Client); // Only host checks kill counts
    
    IfEventValue(AND_01, 11029760, 8, ComparisonType.GreaterOrEqual, 30);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 11028220);
    IfConditionGroup(MAIN, PASS, AND_01); // If blue team is not already flagged for loss, and red teams kill count is over 30
    
    SetEventFlag(11028220, ON); // Flag blue team loss
    
    EndUnconditionally(EventEndType.Restart);
});

/* Wizard Blue Kill Threshold Messages */
/* When the kill counts reach certain values we display a message letting everyone know whos in the lead. */
Event(11028225, Default, function() {
    SetNetworkSyncState(Disabled); // Just reading event flags and displaying messages.
    //EndIfMultiplayerState(EventEndType.End, MultiplayerState.Client); // Only host checks kill counts
    
    IfEventValue(MAIN, 11029760, 8, ComparisonType.GreaterOrEqual, 10);
    DisplayMessage(10010626, 0);
    IfEventValue(MAIN, 11029760, 8, ComparisonType.GreaterOrEqual, 20);
    DisplayMessage(10010627, 0);
    IfEventValue(MAIN, 11029760, 8, ComparisonType.GreaterOrEqual, 25);
    DisplayMessage(10010628, 0);
    
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 11028245); 
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 11028220);
    IfConditionGroup(MAIN, PASS, OR_01);  // Wait for game to end before starting again
    
    WaitFixedTimeSeconds(10); // Delay to allow next round to start
    
    EndUnconditionally(EventEndType.Restart);
});

/* Wizard Red Team Lose */
/* Display victory/loss, give rewards, reset game and returns players to lobby. */
Event(11028221, Default, function() {
    SetNetworkSyncState(Disabled); // Should be fine.
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11028220);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    IfCharacterType(OR_01, 10000, TargetType.Alive);
    IfCharacterType(OR_01, 10000, TargetType.WhitePhantom);
    SkipIfConditionGroupStateUncompiled(2, PASS, OR_01);
    DisplayBanner(TextBannerType.YouLose);
    SkipUnconditionally(1);
    DisplayBanner(TextBannerType.YouWin);
    
    WaitFixedTimeSeconds(5.0);

    BonfirelikeRecovery();
    ClearSpeffect(10000, 9100);  // Clear all game state effects
    ClearSpeffect(10000, 9101);
    ClearSpeffect(10000, 9102);
    ClearSpeffect(10000, 9105);
    ClearSpeffect(10000, 9106);
    
    ClearSpeffect(10000, 9021);  // Remove all arena powerup buffs
    ClearSpeffect(10000, 9022);
    ClearSpeffect(10000, 9023);
    ClearSpeffect(10000, 9024);
    ClearSpeffect(10000, 9029);
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
    
    /* Return to lobby and ready for next match */
    RequestCharacterAnimationReset(10000, Interpolation.Uninterpolated);
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1028213, 10, 2);
    ClearEventValue(11029750, 8); // Clear red kill counter
    ClearEventValue(11029760, 8); // Clear red kill counter
    SetEventFlag(11028220, OFF);  // Reset red lose flag
    SetEventFlag(11028245, OFF);  // Reset blue lose flag
    RequestCharacterAnimationReset(10000, Interpolation.Uninterpolated); // Prevent fall animation lol
    
    /* Award loot */
    WaitFixedTimeSeconds(3.0);
    AwardItemsIncludingClients(5005);
    AwardItemsIncludingClients(5005);
    IfCharacterType(OR_02, 10000, TargetType.Alive);
    IfCharacterType(OR_02, 10000, TargetType.WhitePhantom);
    SkipIfConditionGroupStateUncompiled(1, PASS, OR_02);
    SkipUnconditionally(1);
    AwardItemsIncludingClients(5005);
    EndUnconditionally(EventEndType.Restart);
});

/* Wizard Blue Team Lose */
/* Display victory/loss, give rewards, reset game and returns players to lobby. */
Event(11028246, Default, function() {
    SetNetworkSyncState(Disabled); // Should be fine.
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11028245);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    IfCharacterType(OR_01, 10000, TargetType.Invader);
    IfCharacterType(OR_01, 10000, TargetType.BlackPhantom);
    SkipIfConditionGroupStateUncompiled(2, PASS, OR_01);
    DisplayBanner(TextBannerType.YouLose);
    SkipUnconditionally(1);
    DisplayBanner(TextBannerType.YouWin);
    
    WaitFixedTimeSeconds(5.0);

    BonfirelikeRecovery();
    ClearSpeffect(10000, 9100);  // Clear all game state effects
    ClearSpeffect(10000, 9101);
    ClearSpeffect(10000, 9102);
    ClearSpeffect(10000, 9105);
    ClearSpeffect(10000, 9106);
    
    ClearSpeffect(10000, 9021);  // Remove all arena powerup buffs
    ClearSpeffect(10000, 9022);
    ClearSpeffect(10000, 9023);
    ClearSpeffect(10000, 9024);
    ClearSpeffect(10000, 9025);
    ClearSpeffect(10000, 9026);
    ClearSpeffect(10000, 9028);
    ClearSpeffect(10000, 9027);
    ClearSpeffect(10000, 9029);
    ClearSpeffect(10000, 9030);
    ClearSpeffect(10000, 9031);
    ClearSpeffect(10000, 9032);
    ClearSpeffect(10000, 9033);
    ClearSpeffect(10000, 9034);
    ClearSpeffect(10000, 9035);
    ClearSpeffect(10000, 9041);
    
    /* Return to lobby and ready for next match */
    RequestCharacterAnimationReset(10000, Interpolation.Uninterpolated);
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1028213, 10, 2);
    ClearEventValue(11029750, 8); // Clear red kill counter
    ClearEventValue(11029760, 8); // Clear red kill counter
    SetEventFlag(11028220, OFF);  // Reset red lose flag
    SetEventFlag(11028245, OFF);  // Reset blue lose flag
    RequestCharacterAnimationReset(10000, Interpolation.Uninterpolated); // Prevent fall animation lol
    
    /* Award loot */
    WaitFixedTimeSeconds(3.0);
    AwardItemsIncludingClients(5005);
    AwardItemsIncludingClients(5005);
    IfCharacterType(OR_02, 10000, TargetType.Invader);
    IfCharacterType(OR_02, 10000, TargetType.BlackPhantom);
    SkipIfConditionGroupStateUncompiled(1, PASS, OR_02);
    SkipUnconditionally(1);
    AwardItemsIncludingClients(5005);
    EndUnconditionally(EventEndType.Restart);
});

/* == Special IDs == */
// 11029720 -> 11029724 - Randomize Respawn Flags - 5 Bits
// 11029750 -> 11029757 - Red kill counter - 8 Bits
// 11029760 -> 11029767 - Blue kill counter - 8 Bits

/* === ID Dictionary === */
// 11028300 - HangEmHigh(TDM) Init Script
// 1028300 - HangEmHigh(TDM) Staging Area Region
// 1028301 - HangEmHigh(TDM) Region
// 11028301 - HangEmHigh(TDM) Give Team Change Items
// 11028302 - HangEmHigh(TDM) Remove Team Change Items
// 11028303 - HangEmHigh(TDM) Staging Area Auto-Invade
// 1028302 - HangEmHigh(TDM) Staging Area Auto-Invade Region
// 11028304 - HangEmHigh(TDM) Return To Firelink Script
// 1028303 - HangEmHigh(TDM) Return To Firelink Bonfire
// 11028305 - HangEmHigh(TDM) Join game Script
// 1028304 - HangEmHigh(TDM) Join Game Bonfire
// 1028305 - HangEmHigh(TDM) Join Game Red Warp
// 1028306 - HangEmHigh(TDM) Join Game Blue Warp
// 11028306 - HangEmHigh(TDM) Arena No Dead Apply
// 11028307 - HangEmHigh(TDM) Staging Area Invincibility
// 11028308 - HangEmHigh(TDM) Offline Kick Out
// 1028307 - HangEmHigh(TDM) Map Collision
// 11028309 - HangEmHigh(TDM) give lobby summon sign and fingers
// 11028310 - HangEmHigh(TDM) enforce red team id
// 1028308 - HangEmHigh(TDM) Red Return To Lobby Bonfire
// 1028309 - HangEmHigh(TDM) Blue Return To Lobby Bonfire
// 1028310 - HangEmHigh(TDM) Return To Lobby Target Region
// 11028311 - HangEmHigh(TDM) Return to Lobby: Red
// 11028312 - HangEmHigh(TDM) Return to Lobby: Blue
// 11028313 - HangEmHigh(TDM) 'On Death' Handler
// 11028314 - HangEmHigh(TDM) 'On Respawn' Handler
// 1028320 -> 1028324 - Red Team Respawn Points
// 1028325 -> 1028329 - Blue Team Respawn Points
// 1028313 - HangEmHigh(TDM) Game Over Return Target Region
// 11028320 - HangEmHigh(TDM) Red Lose Flag
// 11028321 - HangEmHigh(TDM) Red Lose Script
// 11028345 - HangEmHigh(TDM) Blue Lose Flag
// 11028346 - HangEmHigh(TDM) Blue Lose Script
// 11028348 - HangEmHigh(TDM) Give Hollowing Item
// 11028349 - HangEmHigh(TDM) Remove Hollowing Item
// 11028350 - HangEmHigh(TDM) Remove Arena Speff Auto-Invade Fix
// 11028354 - HangEmHigh(TDM) Respawn Sync'd Speff Remover
// 11028352 - HangEmHigh(TDM) Kill Counter
// 11028323 - HangEmHigh(TDM) Kill Threshold Messages
// 1028398 - Ladder 00
// 1028399 - Ladder 01
// 11028390 -> 11028393 - Ladder Flags
// 1028397 - Fall Killbox
// 11028394 - Killbox Script
// 11028360 - HangEmHigh(TDM) Red On Death Kill Count
// 11028361 - HangEmHigh(TDM) Blue On Death Kill Count


/* HangEmHigh(TDM) Init General */
Event(11028300, Default, function() {
    
    /* Initialize some variables, only the host does this. */
    SkipIfMultiplayerState(5, MultiplayerState.Client);
    ClearEventValue(11029720, 5); // Clear randomize respawn flags
    ClearEventValue(11029750, 8); // Clear red kill counter
    ClearEventValue(11029760, 8); // Clear red kill counter
    SetEventFlag(11028320, OFF);  // Reset red lose flag
    SetEventFlag(11028345, OFF);  // Reset blue lose flag
    
    /* Start arena scripts, but only once we enter the lobby. */
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1028300); // Don't init HE arena unless we are in the staging area (or map)
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1028301);
    IfConditionGroup(MAIN, PASS, OR_01);
    InitializeEvent(0, 11028301, 0); // Give team change items while in staging area
    InitializeEvent(0, 11028302, 0); // Remove team change items if outside staging area
    InitializeEvent(0, 11028303, 0); // Auto-Invade area
    InitializeEvent(0, 11028304, 0); // Return to Firelink
    InitializeEvent(0, 11028305, 0); // Join game
    InitializeEvent(0, 11028306, 0); // Arena No Dead
    InitializeEvent(0, 11028307, 0); // Staging Area Invincibility
    InitializeEvent(0, 11028308, 0); // Offline Kick Out                              // DEBUG!!!
    InitializeEvent(0, 11028309, 0); // Give lobby summon sign and dried fingers
    InitializeEvent(0, 11028310, 0); // Enforce red team id
    InitializeEvent(0, 11028311, 0); // Return to lobby: Red
    InitializeEvent(0, 11028312, 0); // Return to lobby: Blue
    InitializeEvent(0, 11028313, 0); // 'On Death' Handler
    InitializeEvent(0, 11028314, 0); // 'On Respawn' Handler
    InitializeEvent(0, 11028348, 0); // Give Hollowing Item
    InitializeEvent(0, 11028349, 0); // Remove Hollowing Item
    InitializeEvent(0, 11028350, 0); // Remove Arena Speff Auto-Invade Fix
    InitializeEvent(0, 11028354, 0); // Synced Respawn Speff Remover
    
    InitializeEvent(0, 11028322, 0); // Red Kill Counter
    InitializeEvent(0, 11028323, 0); // Red Kill Threshold Messages
    InitializeEvent(0, 11028321, 0); // Red Lose
    InitializeEvent(0, 11028360, 0); // Red On Death Kill Count
    
    InitializeEvent(0, 11028324, 0); // Blue Kill Counter
    InitializeEvent(0, 11028325, 0); // Blue Kill Threshold Messages
    InitializeEvent(0, 11028346, 0); // Blue Lose
    InitializeEvent(0, 11028361, 0); // Blue On Death Kill Count
    
    /* Ladders */
    
    /* Teleporters */
    
    /* Powerups */
    InitializeEvent(0, 11029901, 9010, 9500); // Give SP Ammo Handler
    InitializeEvent(0, 11029902, 0);          // Remove last speical arrow bugfix
    InitializeEvent(0, 11029900, 1028350, 1028351, 10030175, 9035, 4500); // Powerup 00
    InitializeEvent(1, 11029900, 1028352, 1028353, 10030166, 9026, 5400); // Powerup 01
    InitializeEvent(2, 11029900, 1028354, 1028355, 10030165, 9025, 5400); // Powerup 02
    InitializeEvent(3, 11029900, 1028356, 1028357, 10030174, 9034, 4500); // Powerup 03
    InitializeEvent(4, 11029900, 1028358, 1028359, 10030160, 9010, 4500); // Powerup 04
    InitializeEvent(5, 11029900, 1028360, 1028361, 10030167, 9027, 3600); // Powerup 05
    InitializeEvent(6, 11029900, 1028362, 1028363, 10030170, 9030, 3600); // Powerup 06
    InitializeEvent(7, 11029900, 1028364, 1028365, 10030163, 9023, 1350); // Powerup 07
    InitializeEvent(8, 11029900, 1028366, 1028367, 10030163, 9023, 1350); // Powerup 08
    InitializeEvent(9, 11029900, 1028368, 1028369, 10030163, 9023, 1350); // Powerup 09
    InitializeEvent(10, 11029900, 1028370, 1028371, 10030161, 9021, 600); // Powerup 10
    InitializeEvent(11, 11029900, 1028372, 1028373, 10030161, 9021, 600); // Powerup 11
    InitializeEvent(12, 11029900, 1028374, 1028375, 10030162, 9022, 1800); // Powerup 12
    InitializeEvent(13, 11029900, 1028376, 1028377, 10030162, 9022, 1800); // Powerup 13
    InitializeEvent(14, 11029900, 1028378, 1028379, 10030164, 9024, 2700); // Powerup 14
    InitializeEvent(15, 11029900, 1028380, 1028381, 10030171, 9031, 2700); // Powerup 15
    InitializeEvent(16, 11029900, 1028382, 1028383, 10030172, 9032, 2700); // Powerup 16
    InitializeEvent(17, 11029900, 1028384, 1028385, 10030168, 9028, 3600); // Powerup 17
    InitializeEvent(18, 11029900, 1028386, 1028387, 10030173, 9033, 3600); // Powerup 18
    InitializeEvent(19, 11029900, 1028388, 1028389, 10030161, 9021, 900); // Powerup 19
    
    /* Killbox */
    
    /* Welcome! */
    WaitFixedTimeSeconds(3.25);
    DisplayStatusMessage(10010642, Enabled);  // Lobby entrance message
});



/* HangEmHigh(TDM) Give Team Change Items */
// If we are in the staging area, and we are NOT the host, give the team changing items.
Event(11028301, Default, function() {
    SetNetworkSyncState(Disabled);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 1028300);
    IfMultiplayerState(AND_01, MultiplayerState.Client);
    IfPlayerHasdoesntHaveItem(AND_01, ItemType.Goods, 265, OwnershipState.DoesntOwn);
    IfPlayerHasdoesntHaveItem(AND_01, ItemType.Goods, 266, OwnershipState.DoesntOwn);
    IfCharacterType(OR_01, 10000, TargetType.WhitePhantom);
    IfCharacterType(OR_01, 10000, TargetType.BlackPhantom);
    IfCharacterType(OR_01, 10000, TargetType.Invader);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfConditionGroup(MAIN, PASS, AND_01);
    AwardItemsIncludingClients(5050);
    WaitFixedTimeSeconds(1);
    EndUnconditionally(EventEndType.Restart);
});

/* HangEmHigh(TDM) Remove Team Change Items */
// If we are outside the staging area, remove team change items.
Event(11028302, Default, function() {
    SetNetworkSyncState(Disabled);
    IfInoutsideArea(AND_01, InsideOutsideState.Outside, 10000, 1028300);
    IfPlayerHasdoesntHaveItem(AND_01, ItemType.Goods, 265, OwnershipState.Owns);
    IfPlayerHasdoesntHaveItem(AND_01, ItemType.Goods, 266, OwnershipState.Owns);
    IfConditionGroup(MAIN, PASS, AND_01);
    RemoveItemFromPlayer(ItemType.Goods, 265, 1);
    RemoveItemFromPlayer(ItemType.Goods, 266, 1);
    WaitFixedTimeSeconds(1);
    EndUnconditionally(EventEndType.Restart);
});

/* HangEmHigh(TDM) Give Hollowing Item */
// If we are in the invasion area, and we are singleplayer, and we are team 1 (alive), give hollow orb
Event(11028348, Default, function() {
    SetNetworkSyncState(Disabled);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 1028302);
    IfMultiplayerState(AND_01, MultiplayerState.Singleplayer);
    IfPlayerHasdoesntHaveItem(AND_01, ItemType.Goods, 269, OwnershipState.DoesntOwn);
    IfCharacterType(AND_01, 10000, TargetType.Alive);
    IfCharacterHasSpeffect(AND_01, 10000, 4610, false);
    IfCharacterHasSpeffect(AND_01, 10000, 4613, false);
    IfConditionGroup(MAIN, PASS, AND_01);
    AwardItemLot(5058);
    WaitFixedTimeSeconds(1);
    EndUnconditionally(EventEndType.Restart);
});

/* HangEmHigh(TDM) Remove Hollowing Item */
// If we are ouside the invasion area, are in multiplayer, are hollow, or have arena speffs, we remove the hollow orb
Event(11028349, Default, function() {
    SetNetworkSyncState(Disabled);
    IfInoutsideArea(OR_01, InsideOutsideState.Outside, 10000, 1028302);
    IfMultiplayerState(OR_01, MultiplayerState.Multiplayer);
    IfCharacterType(OR_01, 10000, TargetType.Hollow);
    IfPlayerHasdoesntHaveItem(AND_01, ItemType.Goods, 269, OwnershipState.Owns);
    IfCharacterHasSpeffect(OR_01, 10000, 4610, true);
    IfCharacterHasSpeffect(OR_01, 10000, 4613, true);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfConditionGroup(MAIN, PASS, AND_01);
    RemoveItemFromPlayer(ItemType.Goods, 269, 1);
    WaitFixedTimeSeconds(1);
    EndUnconditionally(EventEndType.Restart);
});

/* HangEmHigh(TDM) Clear Arena Speff 3 Frame Delay Fix */
// There is a delay betweeen clearing 4610 and returning to proper human/hollow, so I clear the effects to sort out a minor issue. Not critical.
Event(11028350, Default, function() {
    SetNetworkSyncState(Disabled);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 1028302);
    IfMultiplayerState(AND_01, MultiplayerState.Singleplayer);
    IfConditionGroup(MAIN, PASS, AND_01);
    ClearSpeffect(10000, 4610);
    WaitFixedTimeSeconds(0.05);
    ClearSpeffect(10000, 4613);
    
    EndUnconditionally(EventEndType.Restart);
});
    

/* HangEmHigh(TDM) Staging Area Auto-Invade Script */
// Small area that players can stand in and it will constantly search for players to invade. Also clears arena speff so you can invade while hollow
Event(11028303, Default, function() {
    SetNetworkSyncState(Disabled);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 1028302);
    IfMultiplayerState(AND_01, MultiplayerState.Singleplayer);
    IfConditionGroup(MAIN, PASS, AND_01);
    WaitFixedTimeSeconds(1.5);
    
    IfInoutsideArea(AND_02, InsideOutsideState.Inside, 10000, 1028302);
    IfMultiplayerState(AND_02, MultiplayerState.Singleplayer);
    IfConditionGroup(MAIN, PASS, AND_02);
    SetSpeffect(10000, 11);
    WaitFixedTimeSeconds(20);
    
    EndUnconditionally(EventEndType.Restart);
});


/* HangEmHigh(TDM) Return to Firelink */
/* Ends multiplayer session. For hosts it returns you to firelink and for phantoms it black crystals you out */
Event(11028304, Default, function() {
    SetNetworkSyncState(Disabled); // Don't sync this becasue it invovles time delayed moving of players
    IfActionButton(MAIN, TargetEntityType.Object, 1028303, 180, 100, 2, 10010608, ReactionType.All, 0);
    RotateCharacter(10000, 1028303);
    ForceAnimationPlayback(10000, 7114, false, false, false);
    WaitFixedTimeSeconds(0.7);
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 17, 90021);
    WaitFixedTimeSeconds(1.5);
    SkipIfMultiplayerState(2, MultiplayerState.Client); // Skip to ::1
    WarpPlayer(10, 2, 1020966);
    EndUnconditionally(EventEndType.Restart);
    // ::1
    SetSpeffect(10000, 7);
    EndUnconditionally(EventEndType.Restart);
});

/* HangEmHigh(TDM) Join Game */
/* Bonfire that warps you into the actual map play area. */
Event(11028305, Default, function() {
    SetNetworkSyncState(Disabled); // Don't sync this becasue it invovles time delayed moving of players
    IfActionButton(MAIN, TargetEntityType.Object, 1028304, 180, 100, 2, 10010601, ReactionType.All, 0);
    RotateCharacter(10000, 1028304);
    ForceAnimationPlayback(10000, 7114, false, false, false);
    WaitFixedTimeSeconds(0.7);
    
    //PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1028306, 10, 2); // DEBUG!!!
    //EndUnconditionally(EventEndType.Restart);                                       // DEBUG!!!
    
    SkipIfMultiplayerState(2, MultiplayerState.Multiplayer); // Skip to ::1
    DisplayGenericDialog(10010609, PromptType.OKCANCEL, NumberofOptions.NoButtons, 10000, 1);
    EndUnconditionally(EventEndType.Restart);
    // ::1
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 17, 90021);
    WaitFixedTimeSeconds(1.5);
    IfCharacterType(OR_01, 10000, TargetType.Alive);
    IfCharacterType(OR_01, 10000, TargetType.WhitePhantom);
    SkipIfConditionGroupStateUncompiled(2, PASS, OR_01); // Skip to ::2
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1028306, 10, 2);
    EndUnconditionally(EventEndType.Restart);
    // ::2
    IfCharacterType(OR_02, 10000, TargetType.BlackPhantom);
    IfCharacterType(OR_02, 10000, TargetType.Invader);
    SkipIfConditionGroupStateUncompiled(2, PASS, OR_02); // Skip to ::3
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1028305, 10, 2);
    EndUnconditionally(EventEndType.Restart);
    // ::3
    EndUnconditionally(EventEndType.Restart);
});


/* HangEmHigh(TDM) Arena No Dead */
/* Applies the Arena No Dead effect to you while you are in the arena. Respawns are handled by scripts so we don't want people dieing. */
Event(11028306, Default, function() {
    SetNetworkSyncState(Disabled);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1028300);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1028301);
    IfInoutsideArea(AND_01, InsideOutsideState.Outside, 10000, 1028302);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetSpeffect(10000, 4613);
    SetSpeffect(10000, 4610);
    ClearSpeffect(10000, 33);
    ClearSpeffect(10000, 34);
    
    WaitFixedTimeSeconds(1);
    EndUnconditionally(EventEndType.Restart);
});

/* HangEmHigh(TDM) Staging Area Invincibility */
/* Grants full invincibility while in the staging area. Also removes it when you exit. Additionally, invincibility is granted if the player is currently in a 'dead' state in the arena play area. */
Event(11028307, Default, function() {
    SetNetworkSyncState(Disabled);
    WaitFixedTimeSeconds(1);
    IfInoutsideArea(AND_02, InsideOutsideState.Inside, 10000, 1028301);
    IfCharacterHasSpeffect(AND_02, 10000, 9100, true);
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_02); // Skip to ::2
    SetCharacterInvincibility(10000, Enabled);
    EndUnconditionally(EventEndType.Restart);
    // ::2
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 1028300);
    SkipIfConditionGroupStateUncompiled(2, PASS, AND_01); // Skip to ::1
    SetCharacterInvincibility(10000, Disabled);
    EndUnconditionally(EventEndType.Restart);
    // ::1
    SetCharacterInvincibility(10000, Enabled);
    BonfirelikeRecovery();
    SetSpeffect(10000, 9112);
    EndUnconditionally(EventEndType.Restart);
});

/* HangEmHigh(TDM) Play Area Offline Kickout */
/* If you are in the HangEmHigh(TDM) play area (the actual HangEmHigh(TDM) map) and you are in singleplayer, kick the player to the staging area. */
Event(11028308, Default, function() {
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 1028301);
    IfMultiplayerState(AND_01, MultiplayerState.Singleplayer);
    IfConditionGroup(MAIN, PASS, AND_01);
    WaitFixedTimeSeconds(3);
    WarpPlayer(10, 2, 1020997);
});

/* HangEmHigh(TDM) Give Lobby Items */
// If we are in the staging area, and we are the host, give lobby summon sign and lobby fingers
Event(11028309, Default, function() {
    SetNetworkSyncState(Disabled);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 1028300);
    IfCharacterType(AND_01, 10000, TargetType.Alive);
    IfPlayerHasdoesntHaveItem(AND_01, ItemType.Goods, 267, OwnershipState.DoesntOwn);
    IfPlayerHasdoesntHaveItem(AND_01, ItemType.Goods, 268, OwnershipState.DoesntOwn);
    IfConditionGroup(MAIN, PASS, AND_01);
    AwardItemLot(5055);
    WaitFixedTimeSeconds(1);
    EndUnconditionally(EventEndType.Restart);
});

/* HangEmHigh(TDM) Enforce Red Team ID */
// Both invaders and red summons should have their team immideately changed to 6. Prevents friendly fire.
Event(11028310, Default, function() {
    SetNetworkSyncState(Disabled);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1028300);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1028301);
    IfCharacterType(OR_02, 10000, TargetType.BlackPhantom);
    IfCharacterType(OR_02, 10000, TargetType.Invader);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfConditionGroup(AND_01, PASS, OR_02);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetCharacterTeamType(10000, TeamType.Enemy);
    EndUnconditionally(EventEndType.Restart);
});

/* HangEmHigh(TDM) Red Return To Lobby */
/* Bonfire that warps you from the play area back to the lobby. Red base edition. */
Event(11028311, Default, function() {
    SetNetworkSyncState(Disabled); // Don't sync this becasue it invovles time delayed moving of players
    IfCharacterHasSpeffect(AND_01, 10000, 9105, false);  // Can't take either flag into the lobby
    IfCharacterHasSpeffect(AND_01, 10000, 9106, false);
    IfActionButton(AND_01, TargetEntityType.Object, 1028308, 180, 100, 2, 10010603, ReactionType.All, 0);
    IfConditionGroup(MAIN, PASS, AND_01);
    RotateCharacter(10000, 1028308);
    ForceAnimationPlayback(10000, 7114, false, false, false);
    WaitFixedTimeSeconds(0.7);
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 17, 90021);
    WaitFixedTimeSeconds(1.5);
    RequestCharacterAnimationReset(10000, Interpolation.Uninterpolated);
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1028310, 10, 2);
    EndUnconditionally(EventEndType.Restart);
});

/* HangEmHigh(TDM) Blue Return To Lobby */
/* Bonfire that warps you from the play area back to the lobby. Blue base edition. */
Event(11028312, Default, function() {
    SetNetworkSyncState(Disabled); // Don't sync this becasue it invovles time delayed moving of players
    IfCharacterHasSpeffect(AND_01, 10000, 9105, false);  // Can't take either flag into the lobby
    IfCharacterHasSpeffect(AND_01, 10000, 9106, false);
    IfActionButton(AND_01, TargetEntityType.Object, 1028309, 180, 100, 2, 10010603, ReactionType.All, 0);
    IfConditionGroup(MAIN, PASS, AND_01);
    RotateCharacter(10000, 1028309);
    ForceAnimationPlayback(10000, 7114, false, false, false);
    WaitFixedTimeSeconds(0.7);
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 17, 90021);
    WaitFixedTimeSeconds(1.5);
    RequestCharacterAnimationReset(10000, Interpolation.Uninterpolated);
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1028310, 10, 2);
    EndUnconditionally(EventEndType.Restart);
});

/* HangEmHigh(TDM) 'On Death' Handler */
/* When a player reaches 5 hp, and does not yet have the arena dead speff or arena respawn speff, we put them into 'arena dead' state for 10 seconds. Then when the 10 seconds is up we flag them for respawn via speff. */
Event(11028313, Default, function() {
    SetNetworkSyncState(Disabled); //Don't sync this because it displays a message. The part that needs sync (status changes) is handled by the script below.
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 1028301);
    IfCharacterHPValue(AND_01, 10000, ComparisonType.Greater, 5);
    IfCharacterHasSpeffect(AND_01, 10000, 9100, false);
    IfCharacterHasSpeffect(AND_01, 10000, 9101, false);
    IfCharacterHasSpeffect(AND_01, 10000, 9102, false);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    SetSpeffect(10000, 9100);    // Set "Dead" Speff
    SetSpeffect(10000, 9111);
    
    RemoveItemFromPlayer(ItemType.Weapon, 2107000, 999); // Remove special arrows on death
    RemoveItemFromPlayer(ItemType.Weapon, 2203000, 999);
    RemoveItemFromPlayer(ItemType.Weapon, 2204000, 999);
    
    DisplayGenericDialog(10010617, PromptType.OKCANCEL, NumberofOptions.NoButtons, 10000, 1);

    //RequestCharacterAnimationReset(10000, Interpolation.Uninterpolated);
    //SetSpecialAnimations(10000, 0, -1, -1, -1, -1);   // Force animation reset
    //SetSpecialAnimations(10000, -1, -1, -1, -1, -1);  // Hopefully this isn't needed anymore. (??) It should help with syncing to not have it I hope.
    EndUnconditionally(EventEndType.Restart);
});

/* HangEmHigh(TDM) Red On Death Kill Counter */
/* Description */
Event(11028360, Default, function() {
    IfCharacterHasSpeffect(AND_01, 10000, 9111, true);
    IfCharacterHasSpeffect(AND_01, 10000, 9100, true);
    IfCharacterType(OR_01, 10000, TargetType.Alive);
    IfCharacterType(OR_01, 10000, TargetType.WhitePhantom);
    IfConditionGroup(AND_02, PASS, OR_01);
    IfConditionGroup(AND_02, PASS, AND_01);
    IfConditionGroup(MAIN, PASS, AND_02);  // If red team member dead and has 'kill count flag'
    IncrementEventValue(11029750, 8, 30);  // Increment blue score
    ClearSpeffect(10000, 9111);            // Remove kill count flag speff
    
    EndUnconditionally(EventEndType.Restart);
});

/* HangEmHigh(TDM) Blue On Death Kill Counter */
/* Description */
Event(11028361, Default, function() {
    IfCharacterHasSpeffect(AND_01, 10000, 9111, true);
    IfCharacterHasSpeffect(AND_01, 10000, 9100, true);
    IfCharacterType(OR_01, 10000, TargetType.BlackPhantom);
    IfCharacterType(OR_01, 10000, TargetType.Invader);
    IfConditionGroup(AND_02, PASS, OR_01);
    IfConditionGroup(AND_02, PASS, AND_01);
    IfConditionGroup(MAIN, PASS, AND_02);  // If blue team member dead and has 'kill count flag'
    IncrementEventValue(11029760, 8, 30);  // Increment red score
    ClearSpeffect(10000, 9111);            // Remove kill count flag speff
    
    EndUnconditionally(EventEndType.Restart);
});

/* HangEmHigh(TDM) Sync'd Respawn Speff Remvoer */
/* When a player dies, we remove any speffs for powerups or status effects. This is synced so as to prevent phantom visual effects for other players. */
Event(11028354, Default, function() {
    IfCharacterHasSpeffect(AND_01, 10000, 9100, true);
    IfConditionGroup(MAIN, PASS, AND_01);
    
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
    
    ClearSpeffect(10000, 510);  // Clear various magic buffs (mostly spells)
    ClearSpeffect(10000, 530);
    ClearSpeffect(10000, 540);
    ClearSpeffect(10000, 541);
    ClearSpeffect(10000, 550);
    ClearSpeffect(10000, 555);
    ClearSpeffect(10000, 570);
    ClearSpeffect(10000, 571);
    ClearSpeffect(10000, 572);
    ClearSpeffect(10000, 573);
    ClearSpeffect(10000, 574);
    ClearSpeffect(10000, 610);
    ClearSpeffect(10000, 611);
    ClearSpeffect(10000, 612);
    ClearSpeffect(10000, 620);
    ClearSpeffect(10000, 640);
    ClearSpeffect(10000, 645);
    ClearSpeffect(10000, 1000);
    ClearSpeffect(10000, 1010);
    ClearSpeffect(10000, 1020);
    ClearSpeffect(10000, 1024);
    ClearSpeffect(10000, 1025);
    ClearSpeffect(10000, 1040);
    ClearSpeffect(10000, 1050);
    ClearSpeffect(10000, 1060);
    ClearSpeffect(10000, 1070);
    ClearSpeffect(10000, 1080);
    ClearSpeffect(10000, 1081);
    ClearSpeffect(10000, 1082);
    ClearSpeffect(10000, 1083);
    ClearSpeffect(10000, 1120);
    ClearSpeffect(10000, 1130);
    ClearSpeffect(10000, 1140);
    ClearSpeffect(10000, 1150);
    ClearSpeffect(10000, 1155);
    ClearSpeffect(10000, 1156);
    ClearSpeffect(10000, 1160);
    ClearSpeffect(10000, 1170);
    ClearSpeffect(10000, 1090);
    ClearSpeffect(10000, 1360);
    ClearSpeffect(10000, 1061);
    ClearSpeffect(10000, 1435);
    ClearSpeffect(10000, 1436);
    ClearSpeffect(10000, 1800);
    
    SetSpeffect(10000, 1303); // Cure all status effects 
    
    EndUnconditionally(EventEndType.Restart);
});

/* HangEmHigh(TDM) 'On Respawn' Handler */
/* If a player has the 'arena respawn' speff we do a respawn. Also add the 'post respawn' speff to prevent a double respawn due to emevd nonsense. */
Event(11028314, Default, function() {
    SetNetworkSyncState(Disabled); // Do not sync this since we are applying bonfire recovery and doing a cutscene warp
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 1028301);
    IfCharacterHasSpeffect(AND_01, 10000, 9101, true);
    IfCharacterHasSpeffect(AND_01, 10000, 9102, false);
    SkipIfConditionGroupStateUncompiled(1, PASS, AND_01); // I don't know why I wrote it this way. ???
    EndUnconditionally(EventEndType.Restart);
    
    SetSpeffect(10000, 9102);   // Add 'post respawn' speff
    ClearSpeffect(10000, 9100); // Clear 'dead' speff
    ClearSpeffect(10000, 9101); // Clear 'respawn' spefff
    
    BonfirelikeRecovery();      // Recovery
    SetSpeffect(10000, 1330);   // Repair all equipment
    SetSpeffect(10000, 9108);   // Respawn hide effect. Makes you invis for 1 second.
    
    WaitFixedTimeFrames(1);     // Wait 1 frame for the chr.esd state to update
    
    // Pick a respawn point randomly
    ClearEventValue(11029720, 5);
    RandomlySetEventFlagInRange(11029720, 11029724, ON);
    
    IfCharacterType(OR_01, 10000, TargetType.Alive);
    IfCharacterType(OR_01, 10000, TargetType.WhitePhantom);
    SkipIfConditionGroupStateUncompiled(10, PASS, OR_01);      // Skip to ::1
    // Respawns for Red Team
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 11029720);    
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1028320, 10, 2); // Warp to respawn point
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 11029721);    
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1028321, 10, 2); // Warp to respawn point
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 11029722);    
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1028322, 10, 2); // Warp to respawn point
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 11029723);    
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1028323, 10, 2); // Warp to respawn point
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 11029724);    
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1028324, 10, 2); // Warp to respawn point
    // ::1
    IfCharacterType(OR_02, 10000, TargetType.BlackPhantom);
    IfCharacterType(OR_02, 10000, TargetType.Invader);
    SkipIfConditionGroupStateUncompiled(10, PASS, OR_02);      // Skip to ::2
    // Respawns for Blue Team
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 11029720);    
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1028325, 10, 2); // Warp to respawn point
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 11029721);    
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1028326, 10, 2); // Warp to respawn point
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 11029722);    
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1028327, 10, 2); // Warp to respawn point
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 11029723);   
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1028328, 10, 2); // Warp to respawn point
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 11029724);    
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1028329, 10, 2); // Warp to respawn point
    // ::2
    RequestCharacterAnimationReset(10000, Interpolation.Uninterpolated);
    RequestAnimationPlayback(10000, 6950, false, false, false);        // 'Stand up' animation after respawn
    EndUnconditionally(EventEndType.Restart);
});

/* HangEmHigh(TDM) Red Kill Counter */
/* Host counts kills for each team. First to limit is flagged to win. */
Event(11028322, Default, function() {
    //EndIfMultiplayerState(EventEndType.End, MultiplayerState.Client); // Only host checks kill counts
    
    IfEventValue(AND_01, 11029750, 8, ComparisonType.GreaterOrEqual, 30);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 11028345);
    IfConditionGroup(MAIN, PASS, AND_01); // If blue team is not already flagged for loss, and red teams kill count is over 30
    
    SetEventFlag(11028345, ON); // Flag blue team loss
    
    EndUnconditionally(EventEndType.Restart);
});

/* HangEmHigh(TDM) Red Kill Threshold Messages */
/* When the kill counts reach certain values we display a message letting everyone know whos in the lead. */
Event(11028323, Default, function() {
    SetNetworkSyncState(Disabled); // Just reading event flags and displaying messages.
    //EndIfMultiplayerState(EventEndType.End, MultiplayerState.Client); // Only host checks kill counts
    
    IfEventValue(MAIN, 11029750, 8, ComparisonType.GreaterOrEqual, 10);
    DisplayMessage(10010622, 0);
    IfEventValue(MAIN, 11029750, 8, ComparisonType.GreaterOrEqual, 20);
    DisplayMessage(10010623, 0);
    IfEventValue(MAIN, 11029750, 8, ComparisonType.GreaterOrEqual, 25);
    DisplayMessage(10010624, 0);
    
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 11028345); 
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 11028320);
    IfConditionGroup(MAIN, PASS, OR_01);  // Wait for game to end before starting again
    
    WaitFixedTimeSeconds(10); // Delay to allow next round to start
    
    EndUnconditionally(EventEndType.Restart);
});

/* HangEmHigh(TDM) Blue Kill Counter */
/* Host counts kills for each team. First to limit is flagged to win. */
Event(11028324, Default, function() {
    //EndIfMultiplayerState(EventEndType.End, MultiplayerState.Client); // Only host checks kill counts
    
    IfEventValue(AND_01, 11029760, 8, ComparisonType.GreaterOrEqual, 30);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 11028320);
    IfConditionGroup(MAIN, PASS, AND_01); // If blue team is not already flagged for loss, and red teams kill count is over 30
    
    SetEventFlag(11028320, ON); // Flag blue team loss
    
    EndUnconditionally(EventEndType.Restart);
});

/* HangEmHigh(TDM) Blue Kill Threshold Messages */
/* When the kill counts reach certain values we display a message letting everyone know whos in the lead. */
Event(11028325, Default, function() {
    SetNetworkSyncState(Disabled); // Just reading event flags and displaying messages.
    //EndIfMultiplayerState(EventEndType.End, MultiplayerState.Client); // Only host checks kill counts
    
    IfEventValue(MAIN, 11029760, 8, ComparisonType.GreaterOrEqual, 10);
    DisplayMessage(10010626, 0);
    IfEventValue(MAIN, 11029760, 8, ComparisonType.GreaterOrEqual, 20);
    DisplayMessage(10010627, 0);
    IfEventValue(MAIN, 11029760, 8, ComparisonType.GreaterOrEqual, 25);
    DisplayMessage(10010628, 0);
    
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 11028345); 
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 11028320);
    IfConditionGroup(MAIN, PASS, OR_01);  // Wait for game to end before starting again
    
    WaitFixedTimeSeconds(10); // Delay to allow next round to start
    
    EndUnconditionally(EventEndType.Restart);
});

/* HangEmHigh(TDM) Red Team Lose */
/* Display victory/loss, give rewards, reset game and returns players to lobby. */
Event(11028321, Default, function() {
    SetNetworkSyncState(Disabled); // Should be fine.
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11028320);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    IfCharacterType(OR_01, 10000, TargetType.Alive);
    IfCharacterType(OR_01, 10000, TargetType.WhitePhantom);
    SkipIfConditionGroupStateUncompiled(2, PASS, OR_01);
    DisplayBanner(TextBannerType.YouLose);
    SkipUnconditionally(1);
    DisplayBanner(TextBannerType.YouWin);
    
    WaitFixedTimeSeconds(5.0);

    BonfirelikeRecovery();
    ClearSpeffect(10000, 9100);  // Clear all game state effects
    ClearSpeffect(10000, 9101);
    ClearSpeffect(10000, 9102);
    ClearSpeffect(10000, 9105);
    ClearSpeffect(10000, 9106);
    
    ClearSpeffect(10000, 9021);  // Remove all arena powerup buffs
    ClearSpeffect(10000, 9022);
    ClearSpeffect(10000, 9023);
    ClearSpeffect(10000, 9024);
    ClearSpeffect(10000, 9029);
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
    
    /* Return to lobby and ready for next match */
    RequestCharacterAnimationReset(10000, Interpolation.Uninterpolated);
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1028313, 10, 2);
    ClearEventValue(11029750, 8); // Clear red kill counter
    ClearEventValue(11029760, 8); // Clear red kill counter
    SetEventFlag(11028320, OFF);  // Reset red lose flag
    SetEventFlag(11028345, OFF);  // Reset blue lose flag
    RequestCharacterAnimationReset(10000, Interpolation.Uninterpolated); // Prevent fall animation lol
    
    /* Award loot */
    WaitFixedTimeSeconds(3.0);
    AwardItemsIncludingClients(5005);
    AwardItemsIncludingClients(5005);
    IfCharacterType(OR_02, 10000, TargetType.Alive);
    IfCharacterType(OR_02, 10000, TargetType.WhitePhantom);
    SkipIfConditionGroupStateUncompiled(1, PASS, OR_02);
    SkipUnconditionally(1);
    AwardItemsIncludingClients(5005);
    EndUnconditionally(EventEndType.Restart);
});

/* HangEmHigh(TDM) Blue Team Lose */
/* Display victory/loss, give rewards, reset game and returns players to lobby. */
Event(11028346, Default, function() {
    SetNetworkSyncState(Disabled); // Should be fine.
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11028345);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    IfCharacterType(OR_01, 10000, TargetType.Invader);
    IfCharacterType(OR_01, 10000, TargetType.BlackPhantom);
    SkipIfConditionGroupStateUncompiled(2, PASS, OR_01);
    DisplayBanner(TextBannerType.YouLose);
    SkipUnconditionally(1);
    DisplayBanner(TextBannerType.YouWin);
    
    WaitFixedTimeSeconds(5.0);

    BonfirelikeRecovery();
    ClearSpeffect(10000, 9100);  // Clear all game state effects
    ClearSpeffect(10000, 9101);
    ClearSpeffect(10000, 9102);
    ClearSpeffect(10000, 9105);
    ClearSpeffect(10000, 9106);
    
    ClearSpeffect(10000, 9021);  // Remove all arena powerup buffs
    ClearSpeffect(10000, 9022);
    ClearSpeffect(10000, 9023);
    ClearSpeffect(10000, 9024);
    ClearSpeffect(10000, 9025);
    ClearSpeffect(10000, 9026);
    ClearSpeffect(10000, 9028);
    ClearSpeffect(10000, 9027);
    ClearSpeffect(10000, 9029);
    ClearSpeffect(10000, 9030);
    ClearSpeffect(10000, 9031);
    ClearSpeffect(10000, 9032);
    ClearSpeffect(10000, 9033);
    ClearSpeffect(10000, 9034);
    ClearSpeffect(10000, 9035);
    ClearSpeffect(10000, 9041);
    
    /* Return to lobby and ready for next match */
    RequestCharacterAnimationReset(10000, Interpolation.Uninterpolated);
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1028313, 10, 2);
    ClearEventValue(11029750, 8); // Clear red kill counter
    ClearEventValue(11029760, 8); // Clear red kill counter
    SetEventFlag(11028320, OFF);  // Reset red lose flag
    SetEventFlag(11028345, OFF);  // Reset blue lose flag
    RequestCharacterAnimationReset(10000, Interpolation.Uninterpolated); // Prevent fall animation lol
    
    /* Award loot */
    WaitFixedTimeSeconds(3.0);
    AwardItemsIncludingClients(5005);
    AwardItemsIncludingClients(5005);
    IfCharacterType(OR_02, 10000, TargetType.Invader);
    IfCharacterType(OR_02, 10000, TargetType.BlackPhantom);
    SkipIfConditionGroupStateUncompiled(1, PASS, OR_02);
    SkipUnconditionally(1);
    AwardItemsIncludingClients(5005);
    EndUnconditionally(EventEndType.Restart);
});


/* == Special IDs == */
// 11029700 -> 11029707 - Red Flag Reset Timer - 8 Bits
// 11029710 -> 11029717 - Red Flag Fumble Timer - 8 Bits
// 11029720 -> 11029724 - Randomize Respawn Flags - 5 Bits
// 11029730 -> 11029737 - Blue Flag Reset Timer - 8 Bits
// 11029740 -> 11029747 - Blue Flag Fumble Timer - 8 Bits

/* === ID Dictionary === */
// 11028400 - Sanctuary(CTF) Init Script
// 1028400 - Sanctuary(CTF) Staging Area Region
// 1028401 - Sanctuary(CTF) Region
// 11028401 - Sanctuary(CTF) Give Team Change Items
// 11028402 - Sanctuary(CTF) Remove Team Change Items
// 11028403 - Sanctuary(CTF) Staging Area Auto-Invade
// 1028402 - Sanctuary(CTF) Staging Area Auto-Invade Region
// 11028404 - Sanctuary(CTF) Return To Firelink Script
// 1028403 - Sanctuary(CTF) Return To Firelink Bonfire
// 11028405 - Sanctuary(CTF) Join game Script
// 1028404 - Sanctuary(CTF) Join Game Bonfire
// 1028405 - Sanctuary(CTF) Join Game Red Warp
// 1028406 - Sanctuary(CTF) Join Game Blue Warp
// 11028406 - Sanctuary(CTF) Arena No Dead Apply
// 11028407 - Sanctuary(CTF) Staging Area Invincibility
// 11028408 - Sanctuary(CTF) Offline Kick Out
// 1028407 - Sanctuary(CTF) Map Collision
// 11028409 - Sanctuary(CTF) give lobby summon sign and fingers
// 11028410 - Sanctuary(CTF) enforce red team id
// 1028408 - Sanctuary(CTF) Red Return To Lobby Bonfire
// 1028409 - Sanctuary(CTF) Blue Return To Lobby Bonfire
// 1028410 - Sanctuary(CTF) Return To Lobby Target Region
// 11028411 - Sanctuary(CTF) Return to Lobby: Red
// 11028412 - Sanctuary(CTF) Return to Lobby: Blue
// 11028413 - Sanctuary(CTF) 'On Death' Handler
// 11028414 - Sanctuary(CTF) 'On Respawn' Handler
// 1028420 -> 1028424 - Red Team Respawn Points
// 1028425 -> 1028429 - Blue Team Respawn Points
// 1028411 - Sanctuary(CTF) Red Flag Character
// 1028412 - Sanctuary(CTF) Red Flag Capture Region
// 1028413 - Sanctuary(CTF) Game Over Return Target Region
// 1028414 - Sanctuary(CTF) Red Flag Stand Target Region
// 11028415 - Sanctuary(CTF) Red Flag Pickup Script
// 11028416 - Sanctuary(CTF) Red Flag Update Script
// 11028417 - Sanctuary(CTF) Red Flag 'Is Picked Up' Flag
// 11028418 - Sanctuary(CTF) Red Flag Return Script
// 11028419 - Sanctuary(CTF) Red Flag Captured Script
// 11028420 - Sanctuary(CTF) Red Lose Flag
// 11028421 - Sanctuary(CTF) Red Lose Script
// 1028435 - Sanctuary(CTF) Blue Flag Capture Region
// 11028422 - Sanctuary(CTF) Red Flag Drop Script
// 11028423 - Sanctuary(CTF) Red Flag Reset Script
// 11028424 - Sanctuary(CTF) Red Flag Fumble Timer Script
// 11028425 - Sanctuary(CTF) Red Flag Fumble Trigger A Script
// 11028426 - Sanctuary(CTF) Red Flag Fumble Trigger B Script
// 11028427 - Sanctuary(CTF) Red Flag Fumble Animation Script
// 11028428 - Sanctuary(CTF) Red Flag Fumble Drop Script
// 11028429 - Sanctuary(CTF) Red Flag Fumbling Flag
// 11028430 - Sanctuary(CTF) Red Flag Fumbled Flag
// 1028431 - Sanctuary(CTF) Blue Flag Character
// 1028434 - Sanctuary(CTF) Blue Flag Stand Target Region
// 11028431 - Sanctuary(CTF) Blue Flag Pickup Script
// 11028432 - Sanctuary(CTF) Blue Flag Update Script
// 11028433 - Sanctuary(CTF) Blue Flag 'Is Picked Up' Flag
// 11028443 - Sanctuary(CTF) Blue Flag Return Script
// 11028444 - Sanctuary(CTF) Blue Flag Captured Script
// 11028445 - Sanctuary(CTF) Blue Lose Flag
// 11028446 - Sanctuary(CTF) Blue Lose Script
// 11028434 - Sanctuary(CTF) Blue Flag Drop Script
// 11028435 - Sanctuary(CTF) Blue Flag Reset Script
// 11028436 - Sanctuary(CTF) Blue Flag Fumble Timer Script
// 11028437 - Sanctuary(CTF) Blue Flag Fumble Trigger A Script
// 11028438 - Sanctuary(CTF) Blue Flag Fumble Trigger B Script
// 11028439 - Sanctuary(CTF) Blue Flag Fumble Animation Script
// 11028440 - Sanctuary(CTF) Blue Flag Fumble Drop Script
// 11028441 - Sanctuary(CTF) Blue Flag Fumbling Flag
// 11028442 - Sanctuary(CTF) Blue Flag Fumbled Flag
// 11028448 - Sanctuary(CTF) Give Hollowing Item
// 11028449 - Sanctuary(CTF) Remove Hollowing Item
// 11028450 - Sanctuary(CTF) Remove Arena Speff Auto-Invade Fix
// 11028451 - Sanctuary(CTF) Red Flag Out Of Bounds Reset
// 11028452 - Sanctuary(CTF) Blue Flag Out Of Bounds Reset
// 1028440 - Sanctuary(CTF) Red Teleporter Interact Region
// 1028441 - Sanctuary(CTF) Red Teleporter Target Region
// 1028442 - Sanctuary(CTF) Red Teleporter Trigger Region
// 1028443 - Sanctuary(CTF) Red Teleporter Exit Region
// 11028453 - Sanctuary(CTF) Flag Desync Speff Remover
// 11028454 - Sanctuary(CTF) Respawn Sync'd Speff Remover
// 11028455 - Sanctuary(CTF) Red Lizard Notifier
// 11028456 - Sanctuary(CTF) Blue Lizard Notifier


/* Sanctuary(CTF) Init General */
Event(11028400, Default, function() {
    
    /* Initialize some variables, only the host does this. */
    SkipIfMultiplayerState(13, MultiplayerState.Client);
    ClearEventValue(11029720, 5); // Clear randomize respawn flags
    SetEventFlag(11028417, OFF);  // Reset red flag pickup flag
    SetEventFlag(11028420, OFF);  // Reset red lose flag
    SetEventFlag(11028429, OFF);  // Reset red fumbling flag
    SetEventFlag(11028429, OFF);  // Reset red fumbled flag
    ClearEventValue(11029700, 8); // Clear red flag reset timer
    ClearEventValue(11029710, 8); // Clear red flag fumble timer
    SetEventFlag(11028433, OFF);  // Reset blue flag pickup flag
    SetEventFlag(11028445, OFF);  // Reset blue lose flag
    SetEventFlag(11028441, OFF);  // Reset blue fumbling flag
    SetEventFlag(11028442, OFF);  // Reset blue fumbled flag
    ClearEventValue(11029730, 8); // Clear blue flag reset timer
    ClearEventValue(11029740, 8); // Clear blue flag fumble timer
    
    
    /* Start arena scripts, but only once we enter the lobby. */
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1028400); // Don't init SN arena unless we are in the staging area (or map)
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1028401);
    IfConditionGroup(MAIN, PASS, OR_01);
    InitializeEvent(0, 11028401, 0); // Give team change items while in staging area
    InitializeEvent(0, 11028402, 0); // Remove team change items if outside staging area
    InitializeEvent(0, 11028403, 0); // Auto-Invade area
    InitializeEvent(0, 11028404, 0); // Return to Firelink
    InitializeEvent(0, 11028405, 0); // Join game
    InitializeEvent(0, 11028406, 0); // Arena No Dead
    InitializeEvent(0, 11028407, 0); // Staging Area Invincibility
    InitializeEvent(0, 11028408, 0); // Offline Kick Out                              // DEBUG!!!
    InitializeEvent(0, 11028409, 0); // Give lobby summon sign and dried fingers
    InitializeEvent(0, 11028410, 0); // Enforce red team id
    InitializeEvent(0, 11028411, 0); // Return to lobby: Red
    InitializeEvent(0, 11028412, 0); // Return to lobby: Blue
    InitializeEvent(0, 11028413, 0); // 'On Death' Handler
    InitializeEvent(0, 11028414, 0); // 'On Respawn' Handler
    InitializeEvent(0, 11028448, 0); // Give Hollowing Item
    InitializeEvent(0, 11028449, 0); // Remove Hollowing Item
    InitializeEvent(0, 11028450, 0); // Remove Arena Speff Auto-Invade Fix
    InitializeEvent(0, 11028453, 0); // Flag Desync Speff Remover
    InitializeEvent(0, 11028454, 0); // Synced Respawn Speff Remover
    
    
    InitializeEvent(0, 11028415, 0); // Red Flag Pickup
    InitializeEvent(0, 11028416, 0); // Red Flag Update
    InitializeEvent(0, 11028422, 0); // Red Flag Drop
    InitializeEvent(0, 11028418, 0); // Red Flag Return
    InitializeEvent(0, 11028419, 0); // Red Flag Captured
    InitializeEvent(0, 11028423, 0); // Red Flag Reset
    InitializeEvent(0, 11028424, 0); // Red Flag Fumble Timer
    InitializeEvent(0, 11028425, 0); // Red Flag Fumble Trigger A
    InitializeEvent(0, 11028426, 0); // Red Flag Fumble Trigger B
    InitializeEvent(0, 11028427, 0); // Red Flag Fumble Animation
    InitializeEvent(0, 11028428, 0); // Red Flag Fumble Drop
    InitializeEvent(0, 11028421, 0); // Red Lose
    InitializeEvent(0, 11028451, 0); // Red Flag Out Of Bounds Reset
    InitializeEvent(0, 11028455, 0); // Red Lizard Notifier
    
    InitializeEvent(0, 11028431, 0); // Blue Flag Pickup
    InitializeEvent(0, 11028432, 0); // Blue Flag Update
    InitializeEvent(0, 11028434, 0); // Blue Flag Drop
    InitializeEvent(0, 11028443, 0); // Blue Flag Return
    InitializeEvent(0, 11028444, 0); // Blue Flag Captured
    InitializeEvent(0, 11028435, 0); // Blue Flag Reset
    InitializeEvent(0, 11028436, 0); // Blue Flag Fumble Timer
    InitializeEvent(0, 11028437, 0); // Blue Flag Fumble Trigger A
    InitializeEvent(0, 11028438, 0); // Blue Flag Fumble Trigger B
    InitializeEvent(0, 11028439, 0); // Blue Flag Fumble Animation
    InitializeEvent(0, 11028440, 0); // Blue Flag Fumble Drop
    InitializeEvent(0, 11028446, 0); // Blue Lose
    InitializeEvent(0, 11028452, 0); // Blue Flag Out Of Bounds Reset
    InitializeEvent(0, 11028456, 0); // Blue Lizard Notifier
    
    /* Teleporters */
    
    /* Powerups */
    InitializeEvent(0, 11029901, 9010, 9500); // Give SP Ammo Handler
    InitializeEvent(0, 11029902, 0);          // Remove last speical arrow bugfix
    InitializeEvent(0, 11029900, 1028450, 1028451, 10030175, 9035, 5400); // Powerup 01
    InitializeEvent(1, 11029900, 1028452, 1028453, 10030166, 9026, 3600); // Powerup 02
    InitializeEvent(2, 11029900, 1028454, 1028455, 10030165, 9025, 3600); // Powerup 03
    InitializeEvent(3, 11029900, 1028456, 1028457, 10030162, 9022, 1350); // Powerup 04
    InitializeEvent(4, 11029900, 1028458, 1028459, 10030162, 9022, 1350); // Powerup 05
    InitializeEvent(5, 11029900, 1028460, 1028461, 10030168, 9028, 3600); // Powerup 06
    InitializeEvent(6, 11029900, 1028462, 1028463, 10030168, 9028, 3600); // Powerup 07
    InitializeEvent(7, 11029900, 1028464, 1028465, 10030163, 9023, 1800); // Powerup 08
    InitializeEvent(8, 11029900, 1028466, 1028467, 10030163, 9023, 1800); // Powerup 09
    InitializeEvent(9, 11029900, 1028468, 1028469, 10030171, 9031, 3600); // Powerup 10
    InitializeEvent(10, 11029900, 1028470, 1028471, 10030172, 9032, 3600); // Powerup 11
    InitializeEvent(11, 11029900, 1028472, 1028473, 10030164, 9024, 3600); // Powerup 12
    InitializeEvent(12, 11029900, 1028474, 1028475, 10030164, 9024, 3600); // Powerup 13
    InitializeEvent(13, 11029900, 1028476, 1028477, 10030161, 9021, 900); // Powerup 14
    InitializeEvent(14, 11029900, 1028478, 1028479, 10030161, 9021, 900); // Powerup 15
    InitializeEvent(15, 11029900, 1028480, 1028481, 10030167, 9027, 4500); // Powerup 16
    InitializeEvent(16, 11029900, 1028482, 1028483, 10030160, 9010, 4500); // Powerup 17
    InitializeEvent(17, 11029900, 1028484, 1028485, 10030162, 9022, 1350); // Powerup 18
    InitializeEvent(18, 11029900, 1028486, 1028487, 10030162, 9022, 1350); // Powerup 19
    
    /* Set some properties */
    SetCharacterInvincibility(1028411, Enabled);  // Make red flag invincible
    ActivateHit(1028411, Disabled);               // Make red flag no-collide players and avoid all attacks
    SetCharacterInvincibility(1028431, Enabled);  // Make blue flag invincible
    ActivateHit(1028431, Disabled);               // Make blue flag no-collide players and avoid all attacks
    
    /* Welcome! */
    WaitFixedTimeSeconds(3.25);
    DisplayStatusMessage(10010644, Enabled);  // Lobby entrance message
});

/* Sanctuary(CTF) Red Lizard Notifier */
// Dislpay message if lizard stolen
Event(11028455, Default, function() {
    SetNetworkSyncState(Disabled);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 1028411, 1028435);
    IfConditionGroup(MAIN, PASS, AND_01);
    IfInoutsideArea(AND_01, InsideOutsideState.Outside, 1028411, 1028435);
    IfConditionGroup(MAIN, PASS, AND_01);
    DisplayMessage(10010632, 0);
    WaitFixedTimeSeconds(15);
    EndUnconditionally(EventEndType.Restart);
});

/* Sanctuary(CTF) Blue Lizard Notifier */
// Dislpay message if lizard stolen
Event(11028456, Default, function() {
    SetNetworkSyncState(Disabled);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 1028431, 1028412);
    IfConditionGroup(MAIN, PASS, AND_01);
    IfInoutsideArea(AND_01, InsideOutsideState.Outside, 1028431, 1028412);
    IfConditionGroup(MAIN, PASS, AND_01);
    DisplayMessage(10010633, 0);
    WaitFixedTimeSeconds(15);
    EndUnconditionally(EventEndType.Restart);
});

/* Sanctuary(CTF) Give Team Change Items */
// If we are in the staging area, and we are NOT the host, give the team changing items.
Event(11028401, Default, function() {
    SetNetworkSyncState(Disabled);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 1028400);
    IfMultiplayerState(AND_01, MultiplayerState.Client);
    IfPlayerHasdoesntHaveItem(AND_01, ItemType.Goods, 265, OwnershipState.DoesntOwn);
    IfPlayerHasdoesntHaveItem(AND_01, ItemType.Goods, 266, OwnershipState.DoesntOwn);
    IfCharacterType(OR_01, 10000, TargetType.WhitePhantom);
    IfCharacterType(OR_01, 10000, TargetType.BlackPhantom);
    IfCharacterType(OR_01, 10000, TargetType.Invader);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfConditionGroup(MAIN, PASS, AND_01);
    AwardItemsIncludingClients(5050);
    WaitFixedTimeSeconds(1);
    EndUnconditionally(EventEndType.Restart);
});

/* Sanctuary(CTF) Remove Team Change Items */
// If we are outside the staging area, remove team change items.
Event(11028402, Default, function() {
    SetNetworkSyncState(Disabled);
    IfInoutsideArea(AND_01, InsideOutsideState.Outside, 10000, 1028400);
    IfPlayerHasdoesntHaveItem(AND_01, ItemType.Goods, 265, OwnershipState.Owns);
    IfPlayerHasdoesntHaveItem(AND_01, ItemType.Goods, 266, OwnershipState.Owns);
    IfConditionGroup(MAIN, PASS, AND_01);
    RemoveItemFromPlayer(ItemType.Goods, 265, 1);
    RemoveItemFromPlayer(ItemType.Goods, 266, 1);
    WaitFixedTimeSeconds(1);
    EndUnconditionally(EventEndType.Restart);
});

/* Sanctuary(CTF) Give Hollowing Item */
// If we are in the invasion area, and we are singleplayer, and we are team 1 (alive), give hollow orb
Event(11028448, Default, function() {
    SetNetworkSyncState(Disabled);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 1028402);
    IfMultiplayerState(AND_01, MultiplayerState.Singleplayer);
    IfPlayerHasdoesntHaveItem(AND_01, ItemType.Goods, 269, OwnershipState.DoesntOwn);
    IfCharacterType(AND_01, 10000, TargetType.Alive);
    IfCharacterHasSpeffect(AND_01, 10000, 4610, false);
    IfCharacterHasSpeffect(AND_01, 10000, 4613, false);
    IfConditionGroup(MAIN, PASS, AND_01);
    AwardItemLot(5058);
    WaitFixedTimeSeconds(1);
    EndUnconditionally(EventEndType.Restart);
});

/* Sanctuary(CTF) Remove Hollowing Item */
// If we are ouside the invasion area, are in multiplayer, are hollow, or have arena speffs, we remove the hollow orb
Event(11028449, Default, function() {
    SetNetworkSyncState(Disabled);
    IfInoutsideArea(OR_01, InsideOutsideState.Outside, 10000, 1028402);
    IfMultiplayerState(OR_01, MultiplayerState.Multiplayer);
    IfCharacterType(OR_01, 10000, TargetType.Hollow);
    IfPlayerHasdoesntHaveItem(AND_01, ItemType.Goods, 269, OwnershipState.Owns);
    IfCharacterHasSpeffect(OR_01, 10000, 4610, true);
    IfCharacterHasSpeffect(OR_01, 10000, 4613, true);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfConditionGroup(MAIN, PASS, AND_01);
    RemoveItemFromPlayer(ItemType.Goods, 269, 1);
    WaitFixedTimeSeconds(1);
    EndUnconditionally(EventEndType.Restart);
});

/* Sanctuary(CTF) Clear Arena Speff 3 Frame Delay Fix */
// There is a delay betweeen clearing 4610 and returning to proper human/hollow, so I clear the effects to sort out a minor issue. Not critical.
Event(11028450, Default, function() {
    SetNetworkSyncState(Disabled);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 1028402);
    IfMultiplayerState(AND_01, MultiplayerState.Singleplayer);
    IfConditionGroup(MAIN, PASS, AND_01);
    ClearSpeffect(10000, 4610);
    WaitFixedTimeSeconds(0.05);
    ClearSpeffect(10000, 4613);
    
    EndUnconditionally(EventEndType.Restart);
});
    

/* Sanctuary(CTF) Staging Area Auto-Invade Script */
// Small area that players can stand in and it will constantly search for players to invade. Also clears arena speff so you can invade while hollow
Event(11028403, Default, function() {
    SetNetworkSyncState(Disabled);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 1028402);
    IfMultiplayerState(AND_01, MultiplayerState.Singleplayer);
    IfConditionGroup(MAIN, PASS, AND_01);
    WaitFixedTimeSeconds(1.5);
    
    IfInoutsideArea(AND_02, InsideOutsideState.Inside, 10000, 1028402);
    IfMultiplayerState(AND_02, MultiplayerState.Singleplayer);
    IfConditionGroup(MAIN, PASS, AND_02);
    SetSpeffect(10000, 11);
    WaitFixedTimeSeconds(20);
    
    EndUnconditionally(EventEndType.Restart);
});


/* Sanctuary(CTF) Return to Firelink */
/* Ends multiplayer session. For hosts it returns you to firelink and for phantoms it black crystals you out */
Event(11028404, Default, function() {
    SetNetworkSyncState(Disabled); // Don't sync this becasue it invovles time delayed moving of players
    IfActionButton(MAIN, TargetEntityType.Object, 1028403, 180, 100, 2, 10010608, ReactionType.All, 0);
    RotateCharacter(10000, 1028403);
    ForceAnimationPlayback(10000, 7114, false, false, false);
    WaitFixedTimeSeconds(0.7);
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 17, 90021);
    WaitFixedTimeSeconds(1.5);
    SkipIfMultiplayerState(2, MultiplayerState.Client); // Skip to ::1
    WarpPlayer(10, 2, 1020966);
    EndUnconditionally(EventEndType.Restart);
    // ::1
    SetSpeffect(10000, 7);
    EndUnconditionally(EventEndType.Restart);
});

/* Sanctuary(CTF) Join Game */
/* Bonfire that warps you into the actual map play area. */
Event(11028405, Default, function() {
    SetNetworkSyncState(Disabled); // Don't sync this becasue it invovles time delayed moving of players
    IfActionButton(MAIN, TargetEntityType.Object, 1028404, 180, 100, 2, 10010601, ReactionType.All, 0);
    RotateCharacter(10000, 1028404);
    ForceAnimationPlayback(10000, 7114, false, false, false);
    WaitFixedTimeSeconds(0.7);
    
    SkipIfMultiplayerState(2, MultiplayerState.Multiplayer); // Skip to ::1
    DisplayGenericDialog(10010609, PromptType.OKCANCEL, NumberofOptions.NoButtons, 10000, 1);
    EndUnconditionally(EventEndType.Restart);
    // ::1
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 17, 90021);
    WaitFixedTimeSeconds(1.5);
    IfCharacterType(OR_01, 10000, TargetType.Alive);
    IfCharacterType(OR_01, 10000, TargetType.WhitePhantom);
    SkipIfConditionGroupStateUncompiled(2, PASS, OR_01); // Skip to ::2
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1028406, 10, 2);
    EndUnconditionally(EventEndType.Restart);
    // ::2
    IfCharacterType(OR_02, 10000, TargetType.BlackPhantom);
    IfCharacterType(OR_02, 10000, TargetType.Invader);
    SkipIfConditionGroupStateUncompiled(2, PASS, OR_02); // Skip to ::3
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1028405, 10, 2);
    EndUnconditionally(EventEndType.Restart);
    // ::3
    EndUnconditionally(EventEndType.Restart);
});


/* Sanctuary(CTF) Arena No Dead */
/* Applies the Arena No Dead effect to you while you are in the arena. Respawns are handled by scripts so we don't want people dieing. */
Event(11028406, Default, function() {
    SetNetworkSyncState(Disabled);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1028400);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1028401);
    IfInoutsideArea(AND_01, InsideOutsideState.Outside, 10000, 1028402);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetSpeffect(10000, 4613);
    SetSpeffect(10000, 4610);
    ClearSpeffect(10000, 33);
    ClearSpeffect(10000, 34);
    
    WaitFixedTimeSeconds(1);
    EndUnconditionally(EventEndType.Restart);
});

/* Sanctuary(CTF) Staging Area Invincibility */
/* Grants full invincibility while in the staging area. Also removes it when you exit. Additionally, invincibility is granted if the player is currently in a 'dead' state in the arena play area. */
Event(11028407, Default, function() {
    SetNetworkSyncState(Disabled);
    WaitFixedTimeSeconds(1);
    IfInoutsideArea(AND_02, InsideOutsideState.Inside, 10000, 1028401);
    IfCharacterHasSpeffect(AND_02, 10000, 9100, true);
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_02); // Skip to ::2
    SetCharacterInvincibility(10000, Enabled);
    EndUnconditionally(EventEndType.Restart);
    // ::2
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 1028400);
    SkipIfConditionGroupStateUncompiled(2, PASS, AND_01); // Skip to ::1
    SetCharacterInvincibility(10000, Disabled);
    EndUnconditionally(EventEndType.Restart);
    // ::1
    SetCharacterInvincibility(10000, Enabled);
    BonfirelikeRecovery();
    SetSpeffect(10000, 9112);
    EndUnconditionally(EventEndType.Restart);
});

/* Sanctuary(CTF) Play Area Offline Kickout */
/* If you are in the Sanctuary(CTF) play area (the actual Sanctuary(CTF) map) and you are in singleplayer, kick the player to the staging area. */
Event(11028408, Default, function() {
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 1028401);
    IfMultiplayerState(AND_01, MultiplayerState.Singleplayer);
    IfConditionGroup(MAIN, PASS, AND_01);
    WaitFixedTimeSeconds(3);
    WarpPlayer(10, 2, 1020997);
});

/* Sanctuary(CTF) Give Lobby Items */
// If we are in the staging area, and we are the host, give lobby summon sign and lobby fingers
Event(11028409, Default, function() {
    SetNetworkSyncState(Disabled);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 1028400);
    IfCharacterType(AND_01, 10000, TargetType.Alive);
    IfPlayerHasdoesntHaveItem(AND_01, ItemType.Goods, 267, OwnershipState.DoesntOwn);
    IfPlayerHasdoesntHaveItem(AND_01, ItemType.Goods, 268, OwnershipState.DoesntOwn);
    IfConditionGroup(MAIN, PASS, AND_01);
    AwardItemLot(5055);
    WaitFixedTimeSeconds(1);
    EndUnconditionally(EventEndType.Restart);
});

/* Sanctuary(CTF) Enforce Red Team ID */
// Both invaders and red summons should have their team immideately changed to 6. Prevents friendly fire.
Event(11028410, Default, function() {
    SetNetworkSyncState(Disabled);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1028400);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 1028401);
    IfCharacterType(OR_02, 10000, TargetType.BlackPhantom);
    IfCharacterType(OR_02, 10000, TargetType.Invader);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfConditionGroup(AND_01, PASS, OR_02);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetCharacterTeamType(10000, TeamType.Enemy);
    EndUnconditionally(EventEndType.Restart);
});

/* Sanctuary(CTF) Red Return To Lobby */
/* Bonfire that warps you from the play area back to the lobby. Red base edition. */
Event(11028411, Default, function() {
    SetNetworkSyncState(Disabled); // Don't sync this becasue it invovles time delayed moving of players
    IfCharacterHasSpeffect(AND_01, 10000, 9105, false);  // Can't take either flag into the lobby
    IfCharacterHasSpeffect(AND_01, 10000, 9106, false);
    IfActionButton(AND_01, TargetEntityType.Object, 1028408, 180, 100, 2, 10010603, ReactionType.All, 0);
    IfConditionGroup(MAIN, PASS, AND_01);
    RotateCharacter(10000, 1028408);
    ForceAnimationPlayback(10000, 7114, false, false, false);
    WaitFixedTimeSeconds(0.7);
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 17, 90021);
    WaitFixedTimeSeconds(1.5);
    RequestCharacterAnimationReset(10000, Interpolation.Uninterpolated);
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1028410, 10, 2);
    EndUnconditionally(EventEndType.Restart);
});

/* Sanctuary(CTF) Blue Return To Lobby */
/* Bonfire that warps you from the play area back to the lobby. Blue base edition. */
Event(11028412, Default, function() {
    SetNetworkSyncState(Disabled); // Don't sync this becasue it invovles time delayed moving of players
    IfCharacterHasSpeffect(AND_01, 10000, 9105, false);  // Can't take either flag into the lobby
    IfCharacterHasSpeffect(AND_01, 10000, 9106, false);
    IfActionButton(AND_01, TargetEntityType.Object, 1028409, 180, 100, 2, 10010603, ReactionType.All, 0);
    IfConditionGroup(MAIN, PASS, AND_01);
    RotateCharacter(10000, 1028409);
    ForceAnimationPlayback(10000, 7114, false, false, false);
    WaitFixedTimeSeconds(0.7);
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 17, 90021);
    WaitFixedTimeSeconds(1.5);
    RequestCharacterAnimationReset(10000, Interpolation.Uninterpolated);
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1028410, 10, 2);
    EndUnconditionally(EventEndType.Restart);
});

/* Sanctuary(CTF) 'On Death' Handler */
/* When a player reaches 5 hp, and does not yet have the arena dead speff or arena respawn speff, we put them into 'arena dead' state for 10 seconds. Then when the 10 seconds is up we flag them for respawn via speff. */
Event(11028413, Default, function() {
    SetNetworkSyncState(Disabled); //Don't sync this because it displays a message. The part that needs sync (status changes) is handled by the script below.
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 1028401);
    IfCharacterHPValue(AND_01, 10000, ComparisonType.Greater, 5);
    IfCharacterHasSpeffect(AND_01, 10000, 9100, false);
    IfCharacterHasSpeffect(AND_01, 10000, 9101, false);
    IfCharacterHasSpeffect(AND_01, 10000, 9102, false);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    SetSpeffect(10000, 9100);    // Set "Dead" Speff
    
    RemoveItemFromPlayer(ItemType.Weapon, 2107000, 999); // Remove special arrows on death
    RemoveItemFromPlayer(ItemType.Weapon, 2203000, 999);
    RemoveItemFromPlayer(ItemType.Weapon, 2204000, 999);
    
    DisplayGenericDialog(10010617, PromptType.OKCANCEL, NumberofOptions.NoButtons, 10000, 1);

    //RequestCharacterAnimationReset(10000, Interpolation.Uninterpolated);
    //SetSpecialAnimations(10000, 0, -1, -1, -1, -1);   // Force animation reset
    //SetSpecialAnimations(10000, -1, -1, -1, -1, -1);  // Hopefully this isn't needed anymore. (??) It should help with syncing to not have it I hope.
    EndUnconditionally(EventEndType.Restart);
});

/* Sanctuary(CTF) Sync'd Respawn Speff Remvoer */
/* When a player dies, we remove any speffs for powerups or status effects. This is synced so as to prevent phantom visual effects for other players. */
Event(11028454, Default, function() {
    IfCharacterHasSpeffect(AND_01, 10000, 9100, true);
    IfConditionGroup(MAIN, PASS, AND_01);
    
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
    
    ClearSpeffect(10000, 510);  // Clear various magic buffs (mostly spells)
    ClearSpeffect(10000, 530);
    ClearSpeffect(10000, 540);
    ClearSpeffect(10000, 541);
    ClearSpeffect(10000, 550);
    ClearSpeffect(10000, 555);
    ClearSpeffect(10000, 570);
    ClearSpeffect(10000, 571);
    ClearSpeffect(10000, 572);
    ClearSpeffect(10000, 573);
    ClearSpeffect(10000, 574);
    ClearSpeffect(10000, 610);
    ClearSpeffect(10000, 611);
    ClearSpeffect(10000, 612);
    ClearSpeffect(10000, 620);
    ClearSpeffect(10000, 640);
    ClearSpeffect(10000, 645);
    ClearSpeffect(10000, 1000);
    ClearSpeffect(10000, 1010);
    ClearSpeffect(10000, 1020);
    ClearSpeffect(10000, 1024);
    ClearSpeffect(10000, 1025);
    ClearSpeffect(10000, 1040);
    ClearSpeffect(10000, 1050);
    ClearSpeffect(10000, 1060);
    ClearSpeffect(10000, 1070);
    ClearSpeffect(10000, 1080);
    ClearSpeffect(10000, 1081);
    ClearSpeffect(10000, 1082);
    ClearSpeffect(10000, 1083);
    ClearSpeffect(10000, 1120);
    ClearSpeffect(10000, 1130);
    ClearSpeffect(10000, 1140);
    ClearSpeffect(10000, 1150);
    ClearSpeffect(10000, 1160);
    ClearSpeffect(10000, 1170);
    ClearSpeffect(10000, 1090);
    ClearSpeffect(10000, 1360);
    ClearSpeffect(10000, 1061);
    ClearSpeffect(10000, 1435);
    ClearSpeffect(10000, 1436);
    ClearSpeffect(10000, 1800);
    
    SetSpeffect(10000, 1303); // Cure all status effects 
    
    EndUnconditionally(EventEndType.Restart);
});

/* Sanctuary(CTF) 'On Respawn' Handler */
/* If a player has the 'arena respawn' speff we do a respawn. Also add the 'post respawn' speff to prevent a double respawn due to emevd nonsense. */
Event(11028414, Default, function() {
    SetNetworkSyncState(Disabled); // Do not sync this since we are applying bonfire recovery and doing a cutscene warp
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 1028401);
    IfCharacterHasSpeffect(AND_01, 10000, 9101, true);
    IfCharacterHasSpeffect(AND_01, 10000, 9102, false);
    SkipIfConditionGroupStateUncompiled(1, PASS, AND_01); // I don't know why I wrote it this way. ???
    EndUnconditionally(EventEndType.Restart);
    
    SetSpeffect(10000, 9102);   // Add 'post respawn' speff
    ClearSpeffect(10000, 9100); // Clear 'dead' speff
    ClearSpeffect(10000, 9101); // Clear 'respawn' spefff
    
    BonfirelikeRecovery();      // Recovery
    SetSpeffect(10000, 1330);   // Repair all equipment
    SetSpeffect(10000, 9108);   // Respawn hide effect. Makes you invis for 1 second.
    
    WaitFixedTimeFrames(1);     // Wait 1 frame for the chr.esd state to update
    
    // Pick a respawn point randomly
    ClearEventValue(11029720, 5);
    RandomlySetEventFlagInRange(11029720, 11029724, ON);
    
    IfCharacterType(OR_01, 10000, TargetType.Alive);
    IfCharacterType(OR_01, 10000, TargetType.WhitePhantom);
    SkipIfConditionGroupStateUncompiled(10, PASS, OR_01);      // Skip to ::1
    // Respawns for Red Team
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 11029720);    
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1028420, 10, 2); // Warp to respawn point
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 11029721);    
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1028421, 10, 2); // Warp to respawn point
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 11029722);    
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1028422, 10, 2); // Warp to respawn point
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 11029723);    
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1028423, 10, 2); // Warp to respawn point
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 11029724);    
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1028424, 10, 2); // Warp to respawn point
    // ::1
    IfCharacterType(OR_02, 10000, TargetType.BlackPhantom);
    IfCharacterType(OR_02, 10000, TargetType.Invader);
    SkipIfConditionGroupStateUncompiled(10, PASS, OR_02);      // Skip to ::2
    // Respawns for Blue Team
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 11029720);    
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1028425, 10, 2); // Warp to respawn point
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 11029721);    
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1028426, 10, 2); // Warp to respawn point
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 11029722);    
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1028427, 10, 2); // Warp to respawn point
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 11029723);   
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1028428, 10, 2); // Warp to respawn point
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 11029724);    
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1028429, 10, 2); // Warp to respawn point
    // ::2
    RequestCharacterAnimationReset(10000, Interpolation.Uninterpolated);
    RequestAnimationPlayback(10000, 6950, false, false, false);        // 'Stand up' animation after respawn
    EndUnconditionally(EventEndType.Restart);
});

/* Flag Desync Speff Remover */
/* If the flag is dropped (the 'is dropped' flag is off) then remove the flag carrying speffs. */
Event(11028453, Default, function() {
    SetNetworkSyncState(Disabled); // Don't sync this, doing uncompiled shit
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 11028417);
    IfCharacterHasSpeffect(AND_01, 10000, 9105, true);
    SkipIfConditionGroupStateUncompiled(1, PASS, AND_01);
    SkipUnconditionally(1);
    ClearSpeffect(10000, 9105); // For red flag
    
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 11028433);
    IfCharacterHasSpeffect(AND_01, 10000, 9106, true);
    SkipIfConditionGroupStateUncompiled(1, PASS, AND_01);
    SkipUnconditionally(1);
    ClearSpeffect(10000, 9106); // For blue flag
    
    EndUnconditionally(EventEndType.Restart);
});
    

/* ====================================================== */
/* ====== Bloogulch ctf red team specific scripts. ====== */
/* ====================================================== */

/* Sanctuary(CTF) Red Flag Pickup */
/* Script to let a blue team player pickup the red flag. */
Event(11028415, Default, function() {
    IfCharacterType(OR_01, 10000, TargetType.Alive);
    IfCharacterType(OR_01, 10000, TargetType.WhitePhantom);
    IfConditionGroup(AND_01, PASS, OR_01);                       // If on blue team
    
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 11028417);
    IfActionButton(AND_01, TargetEntityType.Character, 1028411, 180, -1, 2.5, 10010613, ReactionType.All, 0);
    IfConditionGroup(MAIN, PASS, AND_01);                      // If flag is not already picked up
    
    RotateCharacter(10000, 1028411);
    ForceAnimationPlayback(10000, 7522, false, false, false);
    SetSpeffect(10000, 9105);                                  // Pickup red flag
    SetEventFlag(11028417, ON);
    SetSpecialAnimations(1028411, -1, -1, -1, -1, -1);
    EndUnconditionally(EventEndType.Restart);
});

/* Sanctuary(CTF) Red Flag Update */
/* Keep flag attached to player holding it. If they die, drop the flag on the ground. */
Event(11028416, Default, function() {
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11028417);   // Flag picked up
    IfCharacterHasSpeffect(AND_01, 10000, 9105, true);                  // Has flag
    IfCharacterHasSpeffect(AND_01, 10000, 9100, false);                 // Not dead
    IfConditionGroup(MAIN, PASS, AND_01);
    
    WarpCharacterAndSetFloor(1028411, TargetEntityType.Character, 10000, 91, 1028407);  // Attach flag to player

    SetCharacterGravity(1028411, Disabled);
    EndUnconditionally(EventEndType.Restart);
});

/* Sanctuary(CTF) Red Flag Drop */
/* Keep flag attached to player holding it. If they die, drop the flag on the ground. */
Event(11028422, Default, function() {
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11028417);   // Flag picked up
    IfCharacterHasSpeffect(AND_01, 10000, 9105, true);                  // Has flag
    IfCharacterHasSpeffect(AND_01, 10000, 9100, true);                  // Is dead
    IfConditionGroup(OR_01, PASS, AND_01);
    
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 11028417);   // Flag picked up
    IfCharacterHasSpeffect(AND_02, 10000, 9105, true);                  // Has flag
    IfCharacterHasSpeffect(AND_02, 10000, 9100, false);                 // Is dead
    IfActionButton(AND_02, TargetEntityType.Character, 1028411, 180, -1, 2.5, 10010615, ReactionType.All, 0);
    IfConditionGroup(OR_01, PASS, AND_02);
    
    IfConditionGroup(MAIN, PASS, OR_01);
    
    ClearSpeffect(10000, 9105);
    SetCharacterGravity(1028411, Enabled);
    SetEventFlag(11028417, OFF);
    SetSpecialAnimations(1028411, -1, -1, -1, -1, -1)
    EndUnconditionally(EventEndType.Restart);
});

/* Sanctuary(CTF) Red Flag Reset */
/* If the flag is on the ground for 30s, reset it. */
Event(11028423, Default, function() {
    SetNetworkSyncState(Disabled);                                          // Don't sync. The player that is nearest will have the update authority to move it back.
    WaitFixedTimeSeconds(1);                                                // Run once a second
    
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 11028417);      // Flag not picked up
    IfInoutsideArea(AND_01, InsideOutsideState.Outside, 1028411, 1028435);  // Flag not at the flag stand
    SkipIfConditionGroupStateUncompiled(2, PASS, AND_01);
    ClearEventValue(11029700, 8);                                           // Clear timer and restart if conditions not met
    EndUnconditionally(EventEndType.Restart);
    
    IncrementEventValue(11029700, 8, 30);                                   // Increment counter 1
    
    IfEventValue(AND_02, 11029700, 8, ComparisonType.Less, 30);
    SkipIfConditionGroupStateUncompiled(2, PASS, AND_02);                   // If the counter reaches 30, return red flag to the stand, and clear counter
    WarpCharacterAndSetFloor(1028411, TargetEntityType.Area, 1028414, -1, 1028407);
    ClearEventValue(11029700, 8);
    EndUnconditionally(EventEndType.Restart);
});

/* Sanctuary(CTF) Red Flag Fumble Timer */
/* Counts up to 70 while lizard is held by a player. */
Event(11028424, Default, function() {
    WaitFixedTimeSeconds(1);                                                // Run once a second
    
    EndIfMultiplayerState(EventEndType.End, MultiplayerState.Client);       // Only the host needs to do this
    
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11028417);       // Flag picked up
    SkipIfConditionGroupStateUncompiled(2, PASS, AND_01);
    ClearEventValue(11029710, 8);                                           // Clear timer and restart if conditions not met
    EndUnconditionally(EventEndType.Restart);
    
    IncrementEventValue(11029710, 8, 70);                                   // Increment counter 1
    
    EndUnconditionally(EventEndType.Restart);
});

/* Sanctuary(CTF) Red Flag Fumble Trigger A */
/* If fumble timer is over 60 we flag an event to start playing the 'about to fumble' animation on the flag. */
Event(11028425, Default, function() {
    IfEventValue(AND_01, 11029710, 8, ComparisonType.GreaterOrEqual, 60);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    SetEventFlag(11028429, ON);
    
    IfEventValue(AND_01, 11029710, 8, ComparisonType.Less, 60);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    SetEventFlag(11028429, OFF);
    EndUnconditionally(EventEndType.Restart);
});

/* Sanctuary(CTF) Red Flag Fumble Trigger B */
/* If fumble timer is over 70 we flag an event to tell everyone the flag is dropped now. */
Event(11028426, Default, function() {
    IfEventValue(AND_01, 11029710, 8, ComparisonType.GreaterOrEqual, 70);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    SetEventFlag(11028430, ON);
    
    IfEventValue(AND_01, 11029710, 8, ComparisonType.Less, 70);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    SetEventFlag(11028430, OFF);
    EndUnconditionally(EventEndType.Restart);
});


/* Sanctuary(CTF) Red Flag Fumble Animation */
/* If the fumbling flag is on we play an animation on the flag. */
Event(11028427, Default, function() {
    WaitFixedTimeSeconds(2.5);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11028429);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    SetSpecialAnimations(1028411, 7500, -1, -1, -1, -1);
    EndUnconditionally(EventEndType.Restart);
});

/* Sanctuary(CTF) Red Flag Fumble Drop */
/* If the fumble flag is on we drop the flag. */
Event(11028428, Default, function() {
    WaitFixedTimeSeconds(2.5);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11028430);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    SetSpecialAnimations(1028411, -1, -1, -1, -1, -1);
    SetCharacterGravity(1028411, Enabled);
    SetEventFlag(11028417, OFF);
    
    IfCharacterHasSpeffect(AND_02, 10000, 9105, false);
    SkipIfConditionGroupStateUncompiled(1, PASS, AND_02); //* might cause bugs. test. */
    DisplayGenericDialog(10010616, PromptType.OKCANCEL, NumberofOptions.NoButtons, 10000, 1);
    
    ClearSpeffect(10000, 9105);
    
    EndUnconditionally(EventEndType.Restart);
});

/* Sanctuary(CTF) Red Flag Return */
/* Script to let a red team player return red flag to base */
Event(11028418, Default, function() {
    IfCharacterType(OR_01, 10000, TargetType.Invader);
    IfCharacterType(OR_01, 10000, TargetType.BlackPhantom);
    IfConditionGroup(AND_01, PASS, OR_01);                       // If on red team
    
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 11028417);                                        
    IfInoutsideArea(AND_01, InsideOutsideState.Outside, 1028411, 1028435);
    IfActionButton(AND_01, TargetEntityType.Character, 1028411, 180, -1, 2.5, 10010614, ReactionType.All, 0);
    IfConditionGroup(MAIN, PASS, AND_01);                       // If flag is not already picked up, and it's not on the stand
    
    RotateCharacter(10000, 1028411);
    ForceAnimationPlayback(10000, 7522, false, false, false);         
    WarpCharacterAndSetFloor(1028411, TargetEntityType.Area, 1028414, -1, 1028407); // Return flag to it's stand
    SetSpecialAnimations(1028411, -1, -1, -1, -1, -1);
    EndUnconditionally(EventEndType.Restart);
});


/* Sanctuary(CTF) Red Flag Captured */
/* Script to let a red team player return red flag to base */
Event(11028419, Default, function() {
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 1028411, 1028412);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 1028431, 1028412);
    IfConditionGroup(MAIN, PASS, AND_01);                    // Both red flag and blue flag are in the blue capture zone
    ClearSpeffect(10000, 9105);
    SetEventFlag(11028417, OFF);
    WarpCharacterAndSetFloor(1028411, TargetEntityType.Area, 1028414, -1, 1028407); // Return flag to it's stand
    SetCharacterGravity(1028411, Enabled);
    SetEventFlag(11028420, ON);                              // End game in victory for blue
    EndUnconditionally(EventEndType.Restart);
});

/* Sanctuary(CTF) Red Team Lose */
/* Display victory/loss, give rewards, reset game and returns players to lobby. */
Event(11028421, Default, function() {
    SetNetworkSyncState(Disabled); // Should be fine.
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11028420);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    IfCharacterType(OR_01, 10000, TargetType.Alive);
    IfCharacterType(OR_01, 10000, TargetType.WhitePhantom);
    SkipIfConditionGroupStateUncompiled(2, PASS, OR_01);
    DisplayBanner(TextBannerType.YouLose);
    SkipUnconditionally(1);
    DisplayBanner(TextBannerType.YouWin);
    
    WaitFixedTimeSeconds(5.0);

    BonfirelikeRecovery();
    ClearSpeffect(10000, 9100);  // Clear all game state effects
    ClearSpeffect(10000, 9101);
    ClearSpeffect(10000, 9102);
    ClearSpeffect(10000, 9105);
    ClearSpeffect(10000, 9106);
    
    ClearSpeffect(10000, 9021);  // Remove all arena powerup buffs
    ClearSpeffect(10000, 9022);
    ClearSpeffect(10000, 9023);
    ClearSpeffect(10000, 9024);
    ClearSpeffect(10000, 9029);
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
    
    /* Force flag drop and reset */
    SetSpecialAnimations(1028411, -1, -1, -1, -1, -1)
    SetCharacterGravity(1028411, Enabled);
    SetEventFlag(11028417, OFF);
    WarpCharacterAndSetFloor(1028411, TargetEntityType.Area, 1028414, -1, 1028407); // Return red flag to it's stand
    SetSpecialAnimations(1028431, -1, -1, -1, -1, -1)
    SetCharacterGravity(1028431, Enabled);
    SetEventFlag(11028433, OFF);
    WarpCharacterAndSetFloor(1028431, TargetEntityType.Area, 1028434, -1, 1028407); // Return blue flag to it's stand
    
    /* Return to lobby and ready for next match */
    RequestCharacterAnimationReset(10000, Interpolation.Uninterpolated);
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1028413, 10, 2);
    SetEventFlag(11028420, OFF);
    
    /* Award loot */
    WaitFixedTimeSeconds(3.0);
    AwardItemsIncludingClients(5005);
    AwardItemsIncludingClients(5005);
    IfCharacterType(OR_02, 10000, TargetType.Alive);
    IfCharacterType(OR_02, 10000, TargetType.WhitePhantom);
    SkipIfConditionGroupStateUncompiled(1, PASS, OR_02);
    SkipUnconditionally(1);
    AwardItemsIncludingClients(5005);
    EndUnconditionally(EventEndType.Restart);
});

/* Sanctuary(CTF) Red Flag Out Of Bounds Reset */
/* If the flag falls out of the map area, reset it fully. */
Event(11028451, Default, function() {
    IfInoutsideArea(AND_01, InsideOutsideState.Outside, 1028411, 1028401);         // If red flag is outside of the map play area
    IfConditionGroup(MAIN, PASS, AND_01);
    
    SetSpecialAnimations(1028411, -1, -1, -1, -1, -1)
    SetCharacterGravity(1028411, Enabled);
    SetEventFlag(11028417, OFF);
    WarpCharacterAndSetFloor(1028411, TargetEntityType.Area, 1028414, -1, 1028407); // Return red flag to it's stand
    ClearSpeffect(10000, 9105);
    EndUnconditionally(EventEndType.Restart);
});


/* ======================================================= */
/* ====== Bloogulch ctf blue team specific scripts. ====== */
/* ======================================================= */


/* Sanctuary(CTF) Blue Flag Pickup */
/* Script to let a Red team player pickup the Blue flag. */
Event(11028431, Default, function() {
    IfCharacterType(OR_01, 10000, TargetType.Invader);
    IfCharacterType(OR_01, 10000, TargetType.BlackPhantom);
    IfConditionGroup(AND_01, PASS, OR_01);                       // If on Red team
    
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 11028433);
    IfActionButton(AND_01, TargetEntityType.Character, 1028431, 180, -1, 2.5, 10010613, ReactionType.All, 0);
    IfConditionGroup(MAIN, PASS, AND_01);                      // If flag is not already picked up
    
    RotateCharacter(10000, 1028431);
    ForceAnimationPlayback(10000, 7522, false, false, false);
    SetSpeffect(10000, 9106);                                  // Pickup Blue flag
    SetEventFlag(11028433, ON);
    SetSpecialAnimations(1028431, -1, -1, -1, -1, -1);
    EndUnconditionally(EventEndType.Restart);
});

/* Sanctuary(CTF) Blue Flag Update */
/* Keep flag attached to player holding it. If they die, drop the flag on the ground. */
Event(11028432, Default, function() {
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11028433);   // Flag picked up
    IfCharacterHasSpeffect(AND_01, 10000, 9106, true);                  // Has flag
    IfCharacterHasSpeffect(AND_01, 10000, 9100, false);                 // Not dead
    IfConditionGroup(MAIN, PASS, AND_01);
    
    WarpCharacterAndSetFloor(1028431, TargetEntityType.Character, 10000, 91, 1028407);  // Attach flag to player

    SetCharacterGravity(1028431, Disabled);
    EndUnconditionally(EventEndType.Restart);
});

/* Sanctuary(CTF) Blue Flag Drop */
/* Keep flag attached to player holding it. If they die, drop the flag on the ground. */
Event(11028434, Default, function() {
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11028433);   // Flag picked up
    IfCharacterHasSpeffect(AND_01, 10000, 9106, true);                  // Has flag
    IfCharacterHasSpeffect(AND_01, 10000, 9100, true);                  // Is dead
    IfConditionGroup(OR_01, PASS, AND_01);
    
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 11028433);   // Flag picked up
    IfCharacterHasSpeffect(AND_02, 10000, 9106, true);                  // Has flag
    IfCharacterHasSpeffect(AND_02, 10000, 9100, false);                 // Is dead
    IfActionButton(AND_02, TargetEntityType.Character, 1028431, 180, -1, 2.5, 10010615, ReactionType.All, 0);
    IfConditionGroup(OR_01, PASS, AND_02);
    
    IfConditionGroup(MAIN, PASS, OR_01);
    
    ClearSpeffect(10000, 9106);
    SetCharacterGravity(1028431, Enabled);
    SetEventFlag(11028433, OFF);
    SetSpecialAnimations(1028431, -1, -1, -1, -1, -1)
    EndUnconditionally(EventEndType.Restart);
});

/* Sanctuary(CTF) Blue Flag Reset */
/* If the flag is on the ground for 30s, reset it. */
Event(11028435, Default, function() {
    SetNetworkSyncState(Disabled);                                          // Don't sync. The player that is nearest will have the update authority to move it back.
    WaitFixedTimeSeconds(1);                                                // Run once a second
    
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 11028433);      // Flag not picked up
    IfInoutsideArea(AND_01, InsideOutsideState.Outside, 1028431, 1028412);  // Flag not at the flag stand
    SkipIfConditionGroupStateUncompiled(2, PASS, AND_01);
    ClearEventValue(11029730, 8);                                           // Clear timer and restart if conditions not met
    EndUnconditionally(EventEndType.Restart);
    
    IncrementEventValue(11029730, 8, 30);                                   // Increment counter 1
    
    IfEventValue(AND_02, 11029730, 8, ComparisonType.Less, 30);
    SkipIfConditionGroupStateUncompiled(2, PASS, AND_02);                   // If the counter reaches 30, return Blue flag to the stand, and clear counter
    WarpCharacterAndSetFloor(1028431, TargetEntityType.Area, 1028434, -1, 1028407);
    ClearEventValue(11029730, 8);
    EndUnconditionally(EventEndType.Restart);
});

/* Sanctuary(CTF) Blue Flag Fumble Timer */
/* Counts up to 70 while lizard is held by a player. */
Event(11028436, Default, function() {
    WaitFixedTimeSeconds(1);                                                // Run once a second
    
    EndIfMultiplayerState(EventEndType.End, MultiplayerState.Client);       // Only the host needs to do this
    
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11028433);       // Flag picked up
    SkipIfConditionGroupStateUncompiled(2, PASS, AND_01);
    ClearEventValue(11029740, 8);                                           // Clear timer and restart if conditions not met
    EndUnconditionally(EventEndType.Restart);
    
    IncrementEventValue(11029740, 8, 70);                                   // Increment counter 1
    
    EndUnconditionally(EventEndType.Restart);
});

/* Sanctuary(CTF) Blue Flag Fumble Trigger A */
/* If fumble timer is over 60 we flag an event to start playing the 'about to fumble' animation on the flag. */
Event(11028437, Default, function() {
    IfEventValue(AND_01, 11029740, 8, ComparisonType.GreaterOrEqual, 60);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    SetEventFlag(11028441, ON);
    
    IfEventValue(AND_01, 11029740, 8, ComparisonType.Less, 60);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    SetEventFlag(11028441, OFF);
    EndUnconditionally(EventEndType.Restart);
});

/* Sanctuary(CTF) Blue Flag Fumble Trigger B */
/* If fumble timer is over 70 we flag an event to tell everyone the flag is dropped now. */
Event(11028438, Default, function() {
    IfEventValue(AND_01, 11029740, 8, ComparisonType.GreaterOrEqual, 70);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    SetEventFlag(11028442, ON);
    
    IfEventValue(AND_01, 11029740, 8, ComparisonType.Less, 70);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    SetEventFlag(11028442, OFF);
    EndUnconditionally(EventEndType.Restart);
});


/* Sanctuary(CTF) Blue Flag Fumble Animation */
/* If the fumbling flag is on we play an animation on the flag. */
Event(11028439, Default, function() {
    WaitFixedTimeSeconds(2.5);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11028441);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    SetSpecialAnimations(1028431, 7500, -1, -1, -1, -1);
    EndUnconditionally(EventEndType.Restart);
});

/* Sanctuary(CTF) Blue Flag Fumble Drop */
/* If the fumble flag is on we drop the flag. */
Event(11028440, Default, function() {
    WaitFixedTimeSeconds(2.5);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11028442);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    SetSpecialAnimations(1028431, -1, -1, -1, -1, -1);
    SetCharacterGravity(1028431, Enabled);
    SetEventFlag(11028433, OFF);
    
    IfCharacterHasSpeffect(AND_02, 10000, 9106, false);
    SkipIfConditionGroupStateUncompiled(1, PASS, AND_02); //* might cause bugs. test. */
    DisplayGenericDialog(10010616, PromptType.OKCANCEL, NumberofOptions.NoButtons, 10000, 1);
    
    ClearSpeffect(10000, 9106);
    
    EndUnconditionally(EventEndType.Restart);
});

/* Sanctuary(CTF) Blue Flag Return */
/* Script to let a Blue team player return Blue flag to base */
Event(11028443, Default, function() {
    IfCharacterType(OR_01, 10000, TargetType.Alive);
    IfCharacterType(OR_01, 10000, TargetType.WhitePhantom);
    IfConditionGroup(AND_01, PASS, OR_01);                       // If on Blue team
    
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 11028433);                                        
    IfInoutsideArea(AND_01, InsideOutsideState.Outside, 1028431, 1028412);
    IfActionButton(AND_01, TargetEntityType.Character, 1028431, 180, -1, 2.5, 10010614, ReactionType.All, 0);
    IfConditionGroup(MAIN, PASS, AND_01);                       // If flag is not already picked up, and it's not on the stand
    
    RotateCharacter(10000, 1028431);
    ForceAnimationPlayback(10000, 7522, false, false, false);         
    WarpCharacterAndSetFloor(1028431, TargetEntityType.Area, 1028434, -1, 1028407); // Return flag to it's stand
    SetSpecialAnimations(1028431, -1, -1, -1, -1, -1);
    EndUnconditionally(EventEndType.Restart);
});

/* Sanctuary(CTF) Blue Flag Captured */
/* Script to let a Blue team player return Blue flag to base */
Event(11028444, Default, function() {
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 1028411, 1028435);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 1028431, 1028435);
    IfConditionGroup(MAIN, PASS, AND_01);                    // Both Blue flag and Red flag are in the Red capture zone
    ClearSpeffect(10000, 9106);
    SetEventFlag(11028433, OFF);
    WarpCharacterAndSetFloor(1028431, TargetEntityType.Area, 1028434, -1, 1028407); // Return flag to it's stand
    SetCharacterGravity(1028431, Enabled);
    SetEventFlag(11028445, ON);                              // End game in victory for Red
    EndUnconditionally(EventEndType.Restart);
});

/* Sanctuary(CTF) Blue Team Lose */
/* Display victory/loss, give rewards, reset game and returns players to lobby. */
Event(11028446, Default, function() {
    SetNetworkSyncState(Disabled); // Should be fine.
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 11028445);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    IfCharacterType(OR_01, 10000, TargetType.Invader);
    IfCharacterType(OR_01, 10000, TargetType.BlackPhantom);
    SkipIfConditionGroupStateUncompiled(2, PASS, OR_01);
    DisplayBanner(TextBannerType.YouLose);
    SkipUnconditionally(1);
    DisplayBanner(TextBannerType.YouWin);
    
    WaitFixedTimeSeconds(5.0);

    BonfirelikeRecovery();
    ClearSpeffect(10000, 9100);  // Clear all game state effects
    ClearSpeffect(10000, 9101);
    ClearSpeffect(10000, 9102);
    ClearSpeffect(10000, 9105);
    ClearSpeffect(10000, 9106);
    
    ClearSpeffect(10000, 9021);  // Remove all arena powerup buffs
    ClearSpeffect(10000, 9022);
    ClearSpeffect(10000, 9023);
    ClearSpeffect(10000, 9024);
    ClearSpeffect(10000, 9025);
    ClearSpeffect(10000, 9026);
    ClearSpeffect(10000, 9028);
    ClearSpeffect(10000, 9027);
    ClearSpeffect(10000, 9029);
    ClearSpeffect(10000, 9030);
    ClearSpeffect(10000, 9031);
    ClearSpeffect(10000, 9032);
    ClearSpeffect(10000, 9033);
    ClearSpeffect(10000, 9034);
    ClearSpeffect(10000, 9035);
    ClearSpeffect(10000, 9041);
    
    /* Force flag drop and reset */
    SetSpecialAnimations(1028411, -1, -1, -1, -1, -1)
    SetCharacterGravity(1028411, Enabled);
    SetEventFlag(11028417, OFF);
    WarpCharacterAndSetFloor(1028411, TargetEntityType.Area, 1028414, -1, 1028407); // Return red flag to it's stand
    SetSpecialAnimations(1028431, -1, -1, -1, -1, -1)
    SetCharacterGravity(1028431, Enabled);
    SetEventFlag(11028433, OFF);
    WarpCharacterAndSetFloor(1028431, TargetEntityType.Area, 1028434, -1, 1028407); // Return blue flag to it's stand
    
    /* Return to lobby and ready for next match */
    RequestCharacterAnimationReset(10000, Interpolation.Uninterpolated);
    PlayCutsceneAndWarpAllPlayers(0, CutscenePlayMode.Unskippable, 1028413, 10, 2);
    SetEventFlag(11028445, OFF);
    
    /* Award loot */
    WaitFixedTimeSeconds(3.0);
    AwardItemsIncludingClients(5005);
    AwardItemsIncludingClients(5005);
    IfCharacterType(OR_02, 10000, TargetType.Invader);
    IfCharacterType(OR_02, 10000, TargetType.BlackPhantom);
    SkipIfConditionGroupStateUncompiled(1, PASS, OR_02);
    SkipUnconditionally(1);
    AwardItemsIncludingClients(5005);
    EndUnconditionally(EventEndType.Restart);
});

/* Sanctuary(CTF) Blue Flag Out Of Bounds Reset */
/* If the flag falls out of the map area, reset it fully. */
Event(11028452, Default, function() {
    IfInoutsideArea(AND_01, InsideOutsideState.Outside, 1028431, 1028401);         // If blue flag is outside of the map play area
    IfConditionGroup(MAIN, PASS, AND_01);
    
    SetSpecialAnimations(1028431, -1, -1, -1, -1, -1)
    SetCharacterGravity(1028431, Enabled);
    SetEventFlag(11028433, OFF);
    WarpCharacterAndSetFloor(1028431, TargetEntityType.Area, 1028434, -1, 1028407); // Return blue flag to it's stand
    ClearSpeffect(10000, 9106);
    EndUnconditionally(EventEndType.Restart);
});
