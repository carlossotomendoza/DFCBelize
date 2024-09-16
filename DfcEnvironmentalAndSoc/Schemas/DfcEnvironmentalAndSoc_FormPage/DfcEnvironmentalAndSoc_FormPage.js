define("DfcEnvironmentalAndSoc_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "CardContentWrapper",
				"values": {
					"padding": {
						"left": "small",
						"right": "small",
						"top": "none",
						"bottom": "none"
					},
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"alignItems": "stretch"
				}
			},
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "GeneralInfoTab",
				"values": {
					"iconPosition": "only-text"
				}
			},
			{
				"operation": "merge",
				"name": "CardToggleTabPanel",
				"values": {
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "DfcProjects"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "f4f81706-7710-40d7-8871-feec0e741432",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "DfcProjectName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.DfcProjectName",
					"control": "$DfcProjectName",
					"labelPosition": "auto"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_qkjrtmz",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_DfcProjectClient_037pblg",
					"labelPosition": "auto",
					"control": "$PDS_DfcProjectClient_037pblg",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_tu5l675",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_tu5l675_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_qkjrtmz",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_t1rqk8f",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_DfcProjectSector_kxjnkxt",
					"labelPosition": "auto",
					"control": "$PDS_DfcProjectSector_kxjnkxt",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					}
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "addRecord_1a0d4tw",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_1a0d4tw_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_t1rqk8f",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_3jr2kn5",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"items": [],
					"fitContent": true,
					"padding": {
						"top": "medium",
						"right": "large",
						"bottom": "medium",
						"left": "large"
					},
					"color": "primary",
					"borderRadius": "medium",
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "SideContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Checkbox_d1bpltz",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Checkbox",
					"label": "$Resources.Strings.PDS_DfcColumn9_z59l2u4",
					"labelPosition": "left",
					"control": "$PDS_DfcColumn9_z59l2u4",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_3jr2kn5",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_vjw4kny",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"items": [],
					"fitContent": true,
					"padding": {
						"top": "medium",
						"right": "large",
						"bottom": "medium",
						"left": "large"
					},
					"color": "primary",
					"borderRadius": "medium",
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "SideContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Checkbox_mt16m3r",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Checkbox",
					"label": "$Resources.Strings.PDS_DfcColumn1_m8kv2sb",
					"labelPosition": "left",
					"control": "$PDS_DfcColumn1_m8kv2sb",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_vjw4kny",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Checkbox_g3pyyb8",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Checkbox",
					"label": "$Resources.Strings.PDS_DfcColumn2_oxdig5q",
					"labelPosition": "left",
					"control": "$PDS_DfcColumn2_oxdig5q",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_vjw4kny",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Checkbox_78s1drb",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Checkbox",
					"label": "$Resources.Strings.PDS_DfcColumn3_gauoipe",
					"labelPosition": "left",
					"control": "$PDS_DfcColumn3_gauoipe",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_vjw4kny",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Checkbox_o7bgwfj",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Checkbox",
					"label": "$Resources.Strings.PDS_DfcColumn4_4z85b5o",
					"labelPosition": "left",
					"control": "$PDS_DfcColumn4_4z85b5o",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_vjw4kny",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Checkbox_fowo1f3",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Checkbox",
					"label": "$Resources.Strings.PDS_DfcColumn5_a4jtkm8",
					"labelPosition": "left",
					"control": "$PDS_DfcColumn5_a4jtkm8",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_vjw4kny",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "Checkbox_g982wwn",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 6,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Checkbox",
					"label": "$Resources.Strings.PDS_DfcColumn6_hrnpakl",
					"labelPosition": "left",
					"control": "$PDS_DfcColumn6_hrnpakl",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_vjw4kny",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "Checkbox_pf2p9od",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 7,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Checkbox",
					"label": "$Resources.Strings.PDS_DfcColumn7_2kyip26",
					"labelPosition": "left",
					"control": "$PDS_DfcColumn7_2kyip26",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_vjw4kny",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "Checkbox_0iterk9",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 8,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Checkbox",
					"label": "$Resources.Strings.PDS_DfcColumn8_gbpteid",
					"labelPosition": "left",
					"control": "$PDS_DfcColumn8_gbpteid",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_vjw4kny",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "Input_lw0qu8s",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.PDS_DfcProjectObjective_eh5o5qb",
					"labelPosition": "auto",
					"control": "$PDS_DfcProjectObjective_eh5o5qb"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_ed0wcy8",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_DfcProjectBorrowerAge_tiwhu4i",
					"labelPosition": "auto",
					"control": "$PDS_DfcProjectBorrowerAge_tiwhu4i",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_a99q3ds",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_a99q3ds_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_ed0wcy8",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_kjzi6zf",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_DfcProjectBorrowerEthnicity_5y3p7cu",
					"labelPosition": "auto",
					"control": "$PDS_DfcProjectBorrowerEthnicity_5y3p7cu",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "addRecord_ogwoes8",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_ogwoes8_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_kjzi6zf",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_ui20dcd",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_DfcProjectTypeOfLoans_1cbqkoy",
					"labelPosition": "auto",
					"control": "$PDS_DfcProjectTypeOfLoans_1cbqkoy",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "addRecord_j65o6v6",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_j65o6v6_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_ui20dcd",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_b2irsrt",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "date",
					"label": "$Resources.Strings.PDS_DfcProjectStartDate_jeq84y1",
					"labelPosition": "auto",
					"control": "$PDS_DfcProjectStartDate_jeq84y1"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "ComboBox_3lqxqwf",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_DfcProjectCategory_mtnobmt",
					"labelPosition": "auto",
					"control": "$PDS_DfcProjectCategory_mtnobmt",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "addRecord_1n64od8",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_1n64od8_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_3lqxqwf",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_kjozxw9",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.PDS_DfcProjectLocation_275sfep",
					"labelPosition": "auto",
					"control": "$PDS_DfcProjectLocation_275sfep"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "ComboBox_8wq42vf",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_DfcProjectLandUse_xju149g",
					"labelPosition": "auto",
					"control": "$PDS_DfcProjectLandUse_xju149g",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "addRecord_zmbzcb7",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_zmbzcb7_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_8wq42vf",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_650u52h",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 6,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.PDS_DfcProjectRationale_3swm5oz",
					"labelPosition": "auto",
					"control": "$PDS_DfcProjectRationale_3swm5oz"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "Input_w2915f5",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 7,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.PDS_DfcProjectAssociatedFacilities_e3ptw2e",
					"labelPosition": "auto",
					"control": "$PDS_DfcProjectAssociatedFacilities_e3ptw2e"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "ComboBox_8zawrxe",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 8,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_DfcProjectHistoricalContamination_12duxtl",
					"labelPosition": "auto",
					"control": "$PDS_DfcProjectHistoricalContamination_12duxtl",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 10
			},
			{
				"operation": "insert",
				"name": "addRecord_8a4qm6x",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_8a4qm6x_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_8zawrxe",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabContainer_pu6m2si",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_pu6m2si_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_o1egixf",
				"values": {
					"type": "crt.GridContainer",
					"items": [],
					"rows": "minmax(32px, max-content)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					}
				},
				"parentName": "TabContainer_pu6m2si",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_mjqrkf0",
				"values": {
					"type": "crt.DataGrid",
					"features": {
						"rows": {
							"selection": false,
							"numeration": true
						},
						"editable": {
							"enable": true,
							"itemsCreation": true
						}
					},
					"items": "$DataGrid_mjqrkf0",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "DataGrid_mjqrkf0DS_Id",
					"columns": [
						{
							"id": "59c83315-e478-8342-ba1d-452e7bb284f8",
							"code": "DataGrid_mjqrkf0DS_DfcExclusionName",
							"caption": "#ResourceString(DataGrid_mjqrkf0DS_DfcExclusionName)#",
							"dataValueType": 27
						}
					],
					"placeholder": false
				},
				"parentName": "TabContainer_pu6m2si",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "TabContainer_60bkder",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_60bkder_caption)#",
					"iconPosition": "only-text"
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_mhpkoqv",
				"values": {
					"type": "crt.GridContainer",
					"items": [],
					"rows": "minmax(32px, max-content)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					}
				},
				"parentName": "TabContainer_60bkder",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_eyl6bac",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"items": [],
					"fitContent": true,
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch"
				},
				"parentName": "GridContainer_mhpkoqv",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_n2bdlxs",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"items": [],
					"fitContent": true,
					"padding": {
						"top": "medium",
						"right": "large",
						"bottom": "medium",
						"left": "large"
					},
					"color": "#D1EDCF",
					"borderRadius": "medium",
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "GridContainer_eyl6bac",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Checkbox_ck2cxue",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Checkbox",
					"label": "$Resources.Strings.PDS_DfcColumn1_5j41u6o",
					"labelPosition": "left",
					"control": "$PDS_DfcColumn1_5j41u6o",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_n2bdlxs",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Checkbox_t72fsgg",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Checkbox",
					"label": "$Resources.Strings.PDS_DfcColumn2_bpxpulz",
					"labelPosition": "left",
					"control": "$PDS_DfcColumn2_bpxpulz",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_n2bdlxs",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Checkbox_xteluna",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Checkbox",
					"label": "$Resources.Strings.PDS_DfcColumn4_vigjidt",
					"labelPosition": "left",
					"control": "$PDS_DfcColumn4_vigjidt",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_n2bdlxs",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Checkbox_u6dnc2i",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Checkbox",
					"label": "$Resources.Strings.PDS_DfcColumn3_s8xl4xh",
					"labelPosition": "left",
					"control": "$PDS_DfcColumn3_s8xl4xh",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_n2bdlxs",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_3236n2y",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"items": [],
					"fitContent": true,
					"padding": {
						"top": "medium",
						"right": "large",
						"bottom": "medium",
						"left": "large"
					},
					"color": "#D1EDCF",
					"borderRadius": "medium",
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "GridContainer_eyl6bac",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Checkbox_1h8gfnv",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Checkbox",
					"label": "$Resources.Strings.PDS_DfcColumn5_macb4z1",
					"labelPosition": "left",
					"control": "$PDS_DfcColumn5_macb4z1",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_3236n2y",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Checkbox_9a2ad78",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Checkbox",
					"label": "$Resources.Strings.PDS_DfcColumn6_t95ued7",
					"labelPosition": "left",
					"control": "$PDS_DfcColumn6_t95ued7",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_3236n2y",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Checkbox_ksmiifg",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Checkbox",
					"label": "$Resources.Strings.PDS_DfcColumn7_zqdxxu9",
					"labelPosition": "left",
					"control": "$PDS_DfcColumn7_zqdxxu9",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_3236n2y",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Checkbox_scmeel7",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Checkbox",
					"label": "$Resources.Strings.PDS_DfcColumn8_8zynwrz",
					"labelPosition": "left",
					"control": "$PDS_DfcColumn8_8zynwrz",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_3236n2y",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ButtonToggleGroup_u6zfnas",
				"values": {
					"for": "TabPanel_xm9zbkl",
					"fitContent": true,
					"type": "crt.ButtonToggleGroup"
				},
				"parentName": "TabContainer_60bkder",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "TabPanel_xm9zbkl",
				"values": {
					"type": "crt.TabPanel",
					"items": [],
					"mode": "toggle",
					"fitContent": true,
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				},
				"parentName": "TabContainer_60bkder",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "TabContainer_fe8bt9w",
				"values": {
					"type": "crt.TabContainer",
					"tools": [],
					"items": [],
					"caption": "#ResourceString(TabContainer_fe8bt9w_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "TabPanel_xm9zbkl",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_5twcgni",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"alignItems": "center",
					"items": []
				},
				"parentName": "TabContainer_fe8bt9w",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Label_3t54jvo",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_3t54jvo_caption)#)#",
					"labelType": "headline-3",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#0D2E4E",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "FlexContainer_5twcgni",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_8ngs8hq",
				"values": {
					"type": "crt.FlexContainer",
					"items": [],
					"direction": "column"
				},
				"parentName": "TabContainer_fe8bt9w",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_1fpbcam",
				"values": {
					"type": "crt.DataGrid",
					"features": {
						"rows": {
							"selection": false
						}
					},
					"items": "$DataGrid_1fpbcam",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "DataGrid_1fpbcamDS_Id",
					"columns": [
						{
							"id": "5bd4eb70-8780-6e8f-c330-fccc225729ed",
							"code": "DataGrid_1fpbcamDS_DfcIFCPSQuestion",
							"caption": "#ResourceString(DataGrid_1fpbcamDS_DfcIFCPSQuestion)#",
							"dataValueType": 30,
							"width": 383
						},
						{
							"id": "4582eadd-91e0-304d-7e59-33c77efb8b4a",
							"code": "DataGrid_1fpbcamDS_DfcIFCPSAnswer",
							"caption": "#ResourceString(DataGrid_1fpbcamDS_DfcIFCPSAnswer)#",
							"dataValueType": 10
						},
						{
							"id": "c90b8084-4a79-b6ad-b89c-c1fd68408920",
							"code": "DataGrid_1fpbcamDS_DfcOtherApplicableESS",
							"caption": "#ResourceString(DataGrid_1fpbcamDS_DfcOtherApplicableESS)#",
							"dataValueType": 30
						}
					],
					"placeholder": false
				},
				"parentName": "FlexContainer_8ngs8hq",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabContainer_e9jolo6",
				"values": {
					"type": "crt.TabContainer",
					"tools": [],
					"items": [],
					"caption": "#ResourceString(TabContainer_e9jolo6_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "TabPanel_xm9zbkl",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "FlexContainer_udanqig",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"alignItems": "center",
					"items": []
				},
				"parentName": "TabContainer_e9jolo6",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Label_anaghzu",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_anaghzu_caption)#)#",
					"labelType": "headline-3",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#0D2E4E",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "FlexContainer_udanqig",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_u2wpxo7",
				"values": {
					"type": "crt.FlexContainer",
					"items": [],
					"direction": "column"
				},
				"parentName": "TabContainer_e9jolo6",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_1m2g85c",
				"values": {
					"type": "crt.DataGrid",
					"features": {
						"rows": {
							"selection": false
						}
					},
					"items": "$DataGrid_1m2g85c",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "DataGrid_1m2g85cDS_Id",
					"columns": [
						{
							"id": "0f003c22-48a4-e6c0-c4d3-c2c3647808fb",
							"code": "DataGrid_1m2g85cDS_DfcIFCPSQuestion",
							"caption": "#ResourceString(DataGrid_1m2g85cDS_DfcIFCPSQuestion)#",
							"dataValueType": 30
						},
						{
							"id": "a31033e3-0491-5381-d807-9e26502e5145",
							"code": "DataGrid_1m2g85cDS_DfcIFCPSAnswer",
							"caption": "#ResourceString(DataGrid_1m2g85cDS_DfcIFCPSAnswer)#",
							"dataValueType": 10
						},
						{
							"id": "6ee8adbe-888d-4269-02de-9d67678ccbce",
							"code": "DataGrid_1m2g85cDS_DfcOtherApplicableESS",
							"caption": "#ResourceString(DataGrid_1m2g85cDS_DfcOtherApplicableESS)#",
							"dataValueType": 30
						}
					],
					"placeholder": false
				},
				"parentName": "FlexContainer_u2wpxo7",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabContainer_v01b5qk",
				"values": {
					"type": "crt.TabContainer",
					"tools": [],
					"items": [],
					"caption": "#ResourceString(TabContainer_v01b5qk_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "TabPanel_xm9zbkl",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "FlexContainer_lb8hy8l",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"alignItems": "center",
					"items": []
				},
				"parentName": "TabContainer_v01b5qk",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Label_5ftvkbi",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_5ftvkbi_caption)#)#",
					"labelType": "headline-3",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#0D2E4E",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "FlexContainer_lb8hy8l",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_km2f4x5",
				"values": {
					"type": "crt.FlexContainer",
					"items": [],
					"direction": "column"
				},
				"parentName": "TabContainer_v01b5qk",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_427w5k2",
				"values": {
					"type": "crt.DataGrid",
					"features": {
						"rows": {
							"selection": false
						}
					},
					"items": "$DataGrid_427w5k2",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "DataGrid_427w5k2DS_Id",
					"columns": [
						{
							"id": "4cb75fb2-800c-edf9-0a6a-bfd2fb261f8f",
							"code": "DataGrid_427w5k2DS_DfcIFCPSQuestion",
							"caption": "#ResourceString(DataGrid_427w5k2DS_DfcIFCPSQuestion)#",
							"dataValueType": 30
						},
						{
							"id": "698f1207-e1a3-62f8-f6bb-276bc4c8bc20",
							"code": "DataGrid_427w5k2DS_DfcIFCPSAnswer",
							"caption": "#ResourceString(DataGrid_427w5k2DS_DfcIFCPSAnswer)#",
							"dataValueType": 10
						},
						{
							"id": "bb72bd25-89a5-903b-d901-fa9559200f37",
							"code": "DataGrid_427w5k2DS_DfcOtherApplicableESS",
							"caption": "#ResourceString(DataGrid_427w5k2DS_DfcOtherApplicableESS)#",
							"dataValueType": 30
						}
					],
					"placeholder": false
				},
				"parentName": "FlexContainer_km2f4x5",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabContainer_x5n2zxp",
				"values": {
					"type": "crt.TabContainer",
					"tools": [],
					"items": [],
					"caption": "#ResourceString(TabContainer_x5n2zxp_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "TabPanel_xm9zbkl",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "FlexContainer_p6ccjb7",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"alignItems": "center",
					"items": []
				},
				"parentName": "TabContainer_x5n2zxp",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Label_v9s4txa",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_v9s4txa_caption)#)#",
					"labelType": "headline-3",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#0D2E4E",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "FlexContainer_p6ccjb7",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_l0vzz0w",
				"values": {
					"type": "crt.FlexContainer",
					"items": [],
					"direction": "column"
				},
				"parentName": "TabContainer_x5n2zxp",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_ku584oy",
				"values": {
					"type": "crt.DataGrid",
					"features": {
						"rows": {
							"selection": false
						}
					},
					"items": "$DataGrid_ku584oy",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "DataGrid_ku584oyDS_Id",
					"columns": [
						{
							"id": "d22746af-a9e0-47ca-4bd8-7d01b427b4c2",
							"code": "DataGrid_ku584oyDS_DfcIFCPSQuestion",
							"caption": "#ResourceString(DataGrid_ku584oyDS_DfcIFCPSQuestion)#",
							"dataValueType": 30
						},
						{
							"id": "98c1f2e7-0131-5829-cefb-3e14af0260f9",
							"code": "DataGrid_ku584oyDS_DfcIFCPSAnswer",
							"caption": "#ResourceString(DataGrid_ku584oyDS_DfcIFCPSAnswer)#",
							"dataValueType": 10
						},
						{
							"id": "9f8b9332-2710-b811-bcb8-b21c96d4624a",
							"code": "DataGrid_ku584oyDS_DfcOtherApplicableESS",
							"caption": "#ResourceString(DataGrid_ku584oyDS_DfcOtherApplicableESS)#",
							"dataValueType": 30
						}
					],
					"placeholder": false
				},
				"parentName": "FlexContainer_l0vzz0w",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabContainer_2jctbjc",
				"values": {
					"type": "crt.TabContainer",
					"tools": [],
					"items": [],
					"caption": "#ResourceString(TabContainer_2jctbjc_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "TabPanel_xm9zbkl",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "FlexContainer_p7fmil1",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"alignItems": "center",
					"items": []
				},
				"parentName": "TabContainer_2jctbjc",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Label_1ere3c5",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_1ere3c5_caption)#)#",
					"labelType": "headline-3",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#0D2E4E",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "FlexContainer_p7fmil1",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_s03c6rg",
				"values": {
					"type": "crt.FlexContainer",
					"items": [],
					"direction": "column"
				},
				"parentName": "TabContainer_2jctbjc",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_44hevkf",
				"values": {
					"type": "crt.DataGrid",
					"features": {
						"rows": {
							"selection": false
						}
					},
					"items": "$DataGrid_44hevkf",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "DataGrid_44hevkfDS_Id",
					"columns": [
						{
							"id": "432cd53b-3eb5-40d6-024e-599a0332ff32",
							"code": "DataGrid_44hevkfDS_DfcIFCPSQuestion",
							"caption": "#ResourceString(DataGrid_44hevkfDS_DfcIFCPSQuestion)#",
							"dataValueType": 30
						},
						{
							"id": "607d95d4-88f5-c7cb-1f63-756d6140ff93",
							"code": "DataGrid_44hevkfDS_DfcIFCPSAnswer",
							"caption": "#ResourceString(DataGrid_44hevkfDS_DfcIFCPSAnswer)#",
							"dataValueType": 10
						},
						{
							"id": "47e1e28e-29ab-e65f-f827-11dae66ecf3a",
							"code": "DataGrid_44hevkfDS_DfcOtherApplicableESS",
							"caption": "#ResourceString(DataGrid_44hevkfDS_DfcOtherApplicableESS)#",
							"dataValueType": 30
						}
					],
					"placeholder": false
				},
				"parentName": "FlexContainer_s03c6rg",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabContainer_ng7veca",
				"values": {
					"type": "crt.TabContainer",
					"tools": [],
					"items": [],
					"caption": "#ResourceString(TabContainer_ng7veca_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "TabPanel_xm9zbkl",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "FlexContainer_pkk2wvu",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"alignItems": "center",
					"items": []
				},
				"parentName": "TabContainer_ng7veca",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Label_p2wkgv5",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_p2wkgv5_caption)#)#",
					"labelType": "headline-3",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#0D2E4E",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "FlexContainer_pkk2wvu",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_5oz2j7t",
				"values": {
					"type": "crt.FlexContainer",
					"items": [],
					"direction": "column"
				},
				"parentName": "TabContainer_ng7veca",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_c00sad8",
				"values": {
					"type": "crt.DataGrid",
					"features": {
						"rows": {
							"selection": false
						}
					},
					"items": "$DataGrid_c00sad8",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "DataGrid_c00sad8DS_Id",
					"columns": [
						{
							"id": "0366ff97-a42c-3eb7-ddd2-22596de3648b",
							"code": "DataGrid_c00sad8DS_DfcIFCPSQuestion",
							"caption": "#ResourceString(DataGrid_c00sad8DS_DfcIFCPSQuestion)#",
							"dataValueType": 30
						},
						{
							"id": "334eb18f-3aad-5c12-7a36-0cc01eebe4bd",
							"code": "DataGrid_c00sad8DS_DfcIFCPSAnswer",
							"caption": "#ResourceString(DataGrid_c00sad8DS_DfcIFCPSAnswer)#",
							"dataValueType": 10
						},
						{
							"id": "86f3e46a-8cb3-6e71-86f4-267edf22e95d",
							"code": "DataGrid_c00sad8DS_DfcOtherApplicableESS",
							"caption": "#ResourceString(DataGrid_c00sad8DS_DfcOtherApplicableESS)#",
							"dataValueType": 30
						}
					],
					"placeholder": false
				},
				"parentName": "FlexContainer_5oz2j7t",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabContainer_tqqmuwy",
				"values": {
					"type": "crt.TabContainer",
					"tools": [],
					"items": [],
					"caption": "#ResourceString(TabContainer_tqqmuwy_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "TabPanel_xm9zbkl",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "FlexContainer_29xowd7",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"alignItems": "center",
					"items": []
				},
				"parentName": "TabContainer_tqqmuwy",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Label_d2jtdzf",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_d2jtdzf_caption)#)#",
					"labelType": "headline-3",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#0D2E4E",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "FlexContainer_29xowd7",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_5ucff7i",
				"values": {
					"type": "crt.FlexContainer",
					"items": [],
					"direction": "column"
				},
				"parentName": "TabContainer_tqqmuwy",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_l5by70f",
				"values": {
					"type": "crt.DataGrid",
					"features": {
						"rows": {
							"selection": false
						}
					},
					"items": "$DataGrid_l5by70f",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "DataGrid_l5by70fDS_Id",
					"columns": [
						{
							"id": "fa1e1091-5b40-4dfa-d4cc-ac41db88ecf4",
							"code": "DataGrid_l5by70fDS_DfcIFCPSQuestion",
							"caption": "#ResourceString(DataGrid_l5by70fDS_DfcIFCPSQuestion)#",
							"dataValueType": 30
						},
						{
							"id": "f4f45c65-b0b7-95c1-ff37-6a1050e51346",
							"code": "DataGrid_l5by70fDS_DfcIFCPSAnswer",
							"caption": "#ResourceString(DataGrid_l5by70fDS_DfcIFCPSAnswer)#",
							"dataValueType": 10
						},
						{
							"id": "78195d31-1a76-b2ff-8cb8-eb9a0fb5a82b",
							"code": "DataGrid_l5by70fDS_DfcOtherApplicableESS",
							"caption": "#ResourceString(DataGrid_l5by70fDS_DfcOtherApplicableESS)#",
							"dataValueType": 30
						}
					],
					"placeholder": false
				},
				"parentName": "FlexContainer_5ucff7i",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabContainer_dlxn0q1",
				"values": {
					"type": "crt.TabContainer",
					"tools": [],
					"items": [],
					"caption": "#ResourceString(TabContainer_dlxn0q1_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "TabPanel_xm9zbkl",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "FlexContainer_lf7959f",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"alignItems": "center",
					"items": []
				},
				"parentName": "TabContainer_dlxn0q1",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Label_dpblbl5",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_dpblbl5_caption)#)#",
					"labelType": "headline-3",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#0D2E4E",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "FlexContainer_lf7959f",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_z253n7r",
				"values": {
					"type": "crt.FlexContainer",
					"items": [],
					"direction": "column"
				},
				"parentName": "TabContainer_dlxn0q1",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_ga7671e",
				"values": {
					"type": "crt.DataGrid",
					"features": {
						"rows": {
							"selection": false
						}
					},
					"items": "$DataGrid_ga7671e",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "DataGrid_ga7671eDS_Id",
					"columns": [
						{
							"id": "2d783407-6a1d-c47c-d8e0-45f6563f9d51",
							"code": "DataGrid_ga7671eDS_DfcIFCPSQuestion",
							"caption": "#ResourceString(DataGrid_ga7671eDS_DfcIFCPSQuestion)#",
							"dataValueType": 30
						},
						{
							"id": "3e27a2bc-2e96-f5ab-ab9a-45360e31c563",
							"code": "DataGrid_ga7671eDS_DfcIFCPSAnswer",
							"caption": "#ResourceString(DataGrid_ga7671eDS_DfcIFCPSAnswer)#",
							"dataValueType": 10
						},
						{
							"id": "da5fb3ea-5105-f82b-0576-f8fd7e4c1486",
							"code": "DataGrid_ga7671eDS_DfcOtherApplicableESS",
							"caption": "#ResourceString(DataGrid_ga7671eDS_DfcOtherApplicableESS)#",
							"dataValueType": 30
						}
					],
					"placeholder": false
				},
				"parentName": "FlexContainer_z253n7r",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabContainer_e7fts3y",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_e7fts3y_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_1lurgmx",
				"values": {
					"type": "crt.GridContainer",
					"items": [],
					"rows": "minmax(32px, max-content)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					}
				},
				"parentName": "TabContainer_e7fts3y",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_nr45t40",
				"values": {
					"type": "crt.DataGrid",
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						}
					},
					"items": "$DataGrid_nr45t40",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "DataGrid_nr45t40DS_Id",
					"columns": [
						{
							"id": "eca95584-c6dc-12bd-e41c-8f1f6a2befec",
							"code": "DataGrid_nr45t40DS_DfcRiskScreeningName",
							"caption": "#ResourceString(DataGrid_nr45t40DS_DfcRiskScreeningName)#",
							"dataValueType": 27
						}
					],
					"placeholder": false
				},
				"parentName": "TabContainer_e7fts3y",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "TabContainer_b54srzz",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_b54srzz_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "GridContainer_vdmy878",
				"values": {
					"type": "crt.GridContainer",
					"items": [],
					"rows": "minmax(32px, max-content)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					}
				},
				"parentName": "TabContainer_b54srzz",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_kx9iq0n",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"items": [],
					"fitContent": true,
					"padding": {
						"top": "medium",
						"right": "large",
						"bottom": "medium",
						"left": "large"
					},
					"color": "primary",
					"borderRadius": "medium",
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "CardContentContainer",
				"propertyName": "items",
				"index": 1
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"DfcProjectName": {
						"modelConfig": {
							"path": "PDS.DfcProjectName"
						}
					},
					"PDS_DfcProjectClient_037pblg": {
						"modelConfig": {
							"path": "PDS.DfcProjectClient"
						}
					},
					"PDS_DfcProjectSector_kxjnkxt": {
						"modelConfig": {
							"path": "PDS.DfcProjectSector"
						}
					},
					"PDS_DfcProjectBorrowerAge_tiwhu4i": {
						"modelConfig": {
							"path": "PDS.DfcProjectBorrowerAge"
						}
					},
					"PDS_DfcProjectTypeOfLoans_1cbqkoy": {
						"modelConfig": {
							"path": "PDS.DfcProjectTypeOfLoans"
						}
					},
					"PDS_DfcProjectStartDate_jeq84y1": {
						"modelConfig": {
							"path": "PDS.DfcProjectStartDate"
						}
					},
					"PDS_DfcProjectRationale_3swm5oz": {
						"modelConfig": {
							"path": "PDS.DfcProjectRationale"
						}
					},
					"PDS_DfcProjectLandUse_xju149g": {
						"modelConfig": {
							"path": "PDS.DfcProjectLandUse"
						}
					},
					"PDS_DfcProjectCategory_mtnobmt": {
						"modelConfig": {
							"path": "PDS.DfcProjectCategory"
						}
					},
					"PDS_DfcProjectLocation_275sfep": {
						"modelConfig": {
							"path": "PDS.DfcProjectLocation"
						}
					},
					"DataGrid_mjqrkf0": {
						"isCollection": true,
						"modelConfig": {
							"path": "DataGrid_mjqrkf0DS"
						},
						"viewModelConfig": {
							"attributes": {
								"DataGrid_mjqrkf0DS_DfcExclusionName": {
									"modelConfig": {
										"path": "DataGrid_mjqrkf0DS.DfcExclusionName"
									}
								},
								"DataGrid_mjqrkf0DS_Id": {
									"modelConfig": {
										"path": "DataGrid_mjqrkf0DS.Id"
									}
								}
							}
						}
					},
					"PDS_DfcProjectObjective_eh5o5qb": {
						"modelConfig": {
							"path": "PDS.DfcProjectObjective"
						}
					},
					"PDS_DfcProjectHistoricalContamination_12duxtl": {
						"modelConfig": {
							"path": "PDS.DfcProjectHistoricalContamination"
						}
					},
					"PDS_DfcProjectAssociatedFacilities_e3ptw2e": {
						"modelConfig": {
							"path": "PDS.DfcProjectAssociatedFacilities"
						}
					},
					"PDS_DfcProjectBorrowerEthnicity_5y3p7cu": {
						"modelConfig": {
							"path": "PDS.DfcProjectBorrowerEthnicity"
						}
					},
					"PDS_DfcColumn1_m8kv2sb": {
						"modelConfig": {
							"path": "PDS.DfcColumn1"
						}
					},
					"PDS_DfcColumn2_oxdig5q": {
						"modelConfig": {
							"path": "PDS.DfcColumn2"
						}
					},
					"PDS_DfcColumn3_gauoipe": {
						"modelConfig": {
							"path": "PDS.DfcColumn3"
						}
					},
					"PDS_DfcColumn4_4z85b5o": {
						"modelConfig": {
							"path": "PDS.DfcColumn4"
						}
					},
					"PDS_DfcColumn5_a4jtkm8": {
						"modelConfig": {
							"path": "PDS.DfcColumn5"
						}
					},
					"PDS_DfcColumn6_hrnpakl": {
						"modelConfig": {
							"path": "PDS.DfcColumn6"
						}
					},
					"PDS_DfcColumn7_2kyip26": {
						"modelConfig": {
							"path": "PDS.DfcColumn7"
						}
					},
					"PDS_DfcColumn8_gbpteid": {
						"modelConfig": {
							"path": "PDS.DfcColumn8"
						}
					},
					"PDS_DfcColumn1_5j41u6o": {
						"modelConfig": {
							"path": "PDS.DfcColumn1"
						}
					},
					"PDS_DfcColumn2_bpxpulz": {
						"modelConfig": {
							"path": "PDS.DfcColumn2"
						}
					},
					"PDS_DfcColumn3_s8xl4xh": {
						"modelConfig": {
							"path": "PDS.DfcColumn3"
						}
					},
					"PDS_DfcColumn4_vigjidt": {
						"modelConfig": {
							"path": "PDS.DfcColumn4"
						}
					},
					"PDS_DfcColumn5_macb4z1": {
						"modelConfig": {
							"path": "PDS.DfcColumn5"
						}
					},
					"PDS_DfcColumn6_t95ued7": {
						"modelConfig": {
							"path": "PDS.DfcColumn6"
						}
					},
					"PDS_DfcColumn7_zqdxxu9": {
						"modelConfig": {
							"path": "PDS.DfcColumn7"
						}
					},
					"PDS_DfcColumn8_8zynwrz": {
						"modelConfig": {
							"path": "PDS.DfcColumn8"
						}
					},
					"DataGrid_1fpbcam": {
						"isCollection": true,
						"modelConfig": {
							"path": "DataGrid_1fpbcamDS",
							"filterAttributes": [
								{
									"loadOnChange": true,
									"name": "DataGrid_1fpbcam_PredefinedFilter"
								}
							],
							"sortingConfig": {
								"default": [
									{
										"direction": "desc",
										"columnName": "DfcIFCPSQuestion"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"DataGrid_1fpbcamDS_DfcIFCPSQuestion": {
									"modelConfig": {
										"path": "DataGrid_1fpbcamDS.DfcIFCPSQuestion"
									}
								},
								"DataGrid_1fpbcamDS_DfcIFCPSAnswer": {
									"modelConfig": {
										"path": "DataGrid_1fpbcamDS.DfcIFCPSAnswer"
									}
								},
								"DataGrid_1fpbcamDS_DfcOtherApplicableESS": {
									"modelConfig": {
										"path": "DataGrid_1fpbcamDS.DfcOtherApplicableESS"
									}
								},
								"DataGrid_1fpbcamDS_Id": {
									"modelConfig": {
										"path": "DataGrid_1fpbcamDS.Id"
									}
								}
							}
						}
					},
					"DataGrid_1fpbcam_PredefinedFilter": {
						"value": {
							"items": {
								"917b6e75-0325-4240-84b8-9d5a36947668": {
									"filterType": 1,
									"comparisonType": 3,
									"isEnabled": true,
									"trimDateTimeParameterToDate": false,
									"leftExpression": {
										"expressionType": 0,
										"columnPath": "DfcIFCPS"
									},
									"isAggregative": false,
									"dataValueType": 4,
									"rightExpression": {
										"expressionType": 2,
										"parameter": {
											"dataValueType": 4,
											"value": 1
										}
									}
								}
							},
							"logicalOperation": 0,
							"isEnabled": true,
							"filterType": 6,
							"rootSchemaName": "DfcProjectApplicabilityChecklist"
						}
					},
					"DataGrid_1m2g85c": {
						"isCollection": true,
						"modelConfig": {
							"path": "DataGrid_1m2g85cDS",
							"filterAttributes": [
								{
									"loadOnChange": true,
									"name": "DataGrid_1m2g85c_PredefinedFilter"
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"DataGrid_1m2g85cDS_DfcIFCPSQuestion": {
									"modelConfig": {
										"path": "DataGrid_1m2g85cDS.DfcIFCPSQuestion"
									}
								},
								"DataGrid_1m2g85cDS_DfcIFCPSAnswer": {
									"modelConfig": {
										"path": "DataGrid_1m2g85cDS.DfcIFCPSAnswer"
									}
								},
								"DataGrid_1m2g85cDS_DfcOtherApplicableESS": {
									"modelConfig": {
										"path": "DataGrid_1m2g85cDS.DfcOtherApplicableESS"
									}
								},
								"DataGrid_1m2g85cDS_Id": {
									"modelConfig": {
										"path": "DataGrid_1m2g85cDS.Id"
									}
								}
							}
						}
					},
					"DataGrid_1m2g85c_PredefinedFilter": {
						"value": {
							"items": {
								"7e3ce478-c2be-4eda-843a-619623c034d1": {
									"filterType": 1,
									"comparisonType": 3,
									"isEnabled": true,
									"trimDateTimeParameterToDate": false,
									"leftExpression": {
										"expressionType": 0,
										"columnPath": "DfcIFCPS"
									},
									"isAggregative": false,
									"dataValueType": 4,
									"rightExpression": {
										"expressionType": 2,
										"parameter": {
											"dataValueType": 4,
											"value": 2
										}
									}
								}
							},
							"logicalOperation": 0,
							"isEnabled": true,
							"filterType": 6,
							"rootSchemaName": "DfcProjectApplicabilityChecklist"
						}
					},
					"DataGrid_427w5k2": {
						"isCollection": true,
						"modelConfig": {
							"path": "DataGrid_427w5k2DS",
							"filterAttributes": [
								{
									"loadOnChange": true,
									"name": "DataGrid_427w5k2_PredefinedFilter"
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"DataGrid_427w5k2DS_DfcIFCPSQuestion": {
									"modelConfig": {
										"path": "DataGrid_427w5k2DS.DfcIFCPSQuestion"
									}
								},
								"DataGrid_427w5k2DS_DfcIFCPSAnswer": {
									"modelConfig": {
										"path": "DataGrid_427w5k2DS.DfcIFCPSAnswer"
									}
								},
								"DataGrid_427w5k2DS_DfcOtherApplicableESS": {
									"modelConfig": {
										"path": "DataGrid_427w5k2DS.DfcOtherApplicableESS"
									}
								},
								"DataGrid_427w5k2DS_Id": {
									"modelConfig": {
										"path": "DataGrid_427w5k2DS.Id"
									}
								}
							}
						}
					},
					"DataGrid_427w5k2_PredefinedFilter": {
						"value": {
							"items": {
								"df1ec3de-59e0-436c-bbc4-ec7edc081e66": {
									"filterType": 1,
									"comparisonType": 3,
									"isEnabled": true,
									"trimDateTimeParameterToDate": false,
									"leftExpression": {
										"expressionType": 0,
										"columnPath": "DfcIFCPS"
									},
									"isAggregative": false,
									"dataValueType": 4,
									"rightExpression": {
										"expressionType": 2,
										"parameter": {
											"dataValueType": 4,
											"value": 3
										}
									}
								}
							},
							"logicalOperation": 0,
							"isEnabled": true,
							"filterType": 6,
							"rootSchemaName": "DfcProjectApplicabilityChecklist"
						}
					},
					"DataGrid_ku584oy": {
						"isCollection": true,
						"modelConfig": {
							"path": "DataGrid_ku584oyDS",
							"filterAttributes": [
								{
									"loadOnChange": true,
									"name": "DataGrid_ku584oy_PredefinedFilter"
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"DataGrid_ku584oyDS_DfcIFCPSQuestion": {
									"modelConfig": {
										"path": "DataGrid_ku584oyDS.DfcIFCPSQuestion"
									}
								},
								"DataGrid_ku584oyDS_DfcIFCPSAnswer": {
									"modelConfig": {
										"path": "DataGrid_ku584oyDS.DfcIFCPSAnswer"
									}
								},
								"DataGrid_ku584oyDS_DfcOtherApplicableESS": {
									"modelConfig": {
										"path": "DataGrid_ku584oyDS.DfcOtherApplicableESS"
									}
								},
								"DataGrid_ku584oyDS_Id": {
									"modelConfig": {
										"path": "DataGrid_ku584oyDS.Id"
									}
								}
							}
						}
					},
					"DataGrid_ku584oy_PredefinedFilter": {
						"value": {
							"items": {
								"6747e8cc-0182-406e-b34b-72fc73e42f0b": {
									"filterType": 1,
									"comparisonType": 3,
									"isEnabled": true,
									"trimDateTimeParameterToDate": false,
									"leftExpression": {
										"expressionType": 0,
										"columnPath": "DfcIFCPS"
									},
									"isAggregative": false,
									"dataValueType": 4,
									"rightExpression": {
										"expressionType": 2,
										"parameter": {
											"dataValueType": 4,
											"value": 4
										}
									}
								}
							},
							"logicalOperation": 0,
							"isEnabled": true,
							"filterType": 6,
							"rootSchemaName": "DfcProjectApplicabilityChecklist"
						}
					},
					"DataGrid_44hevkf": {
						"isCollection": true,
						"modelConfig": {
							"path": "DataGrid_44hevkfDS",
							"filterAttributes": [
								{
									"loadOnChange": true,
									"name": "DataGrid_44hevkf_PredefinedFilter"
								}
							],
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "DfcIFCPSAnswer"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"DataGrid_44hevkfDS_DfcIFCPSQuestion": {
									"modelConfig": {
										"path": "DataGrid_44hevkfDS.DfcIFCPSQuestion"
									}
								},
								"DataGrid_44hevkfDS_DfcIFCPSAnswer": {
									"modelConfig": {
										"path": "DataGrid_44hevkfDS.DfcIFCPSAnswer"
									}
								},
								"DataGrid_44hevkfDS_DfcOtherApplicableESS": {
									"modelConfig": {
										"path": "DataGrid_44hevkfDS.DfcOtherApplicableESS"
									}
								},
								"DataGrid_44hevkfDS_Id": {
									"modelConfig": {
										"path": "DataGrid_44hevkfDS.Id"
									}
								}
							}
						}
					},
					"DataGrid_44hevkf_PredefinedFilter": {
						"value": {
							"items": {
								"558222b1-36f3-4777-ae30-bde3b0e3ab2a": {
									"filterType": 1,
									"comparisonType": 3,
									"isEnabled": true,
									"trimDateTimeParameterToDate": false,
									"leftExpression": {
										"expressionType": 0,
										"columnPath": "DfcIFCPS"
									},
									"isAggregative": false,
									"dataValueType": 4,
									"rightExpression": {
										"expressionType": 2,
										"parameter": {
											"dataValueType": 4,
											"value": 5
										}
									}
								}
							},
							"logicalOperation": 0,
							"isEnabled": true,
							"filterType": 6,
							"rootSchemaName": "DfcProjectApplicabilityChecklist"
						}
					},
					"DataGrid_c00sad8": {
						"isCollection": true,
						"modelConfig": {
							"path": "DataGrid_c00sad8DS",
							"filterAttributes": [
								{
									"loadOnChange": true,
									"name": "DataGrid_c00sad8_PredefinedFilter"
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"DataGrid_c00sad8DS_DfcIFCPSQuestion": {
									"modelConfig": {
										"path": "DataGrid_c00sad8DS.DfcIFCPSQuestion"
									}
								},
								"DataGrid_c00sad8DS_DfcIFCPSAnswer": {
									"modelConfig": {
										"path": "DataGrid_c00sad8DS.DfcIFCPSAnswer"
									}
								},
								"DataGrid_c00sad8DS_DfcOtherApplicableESS": {
									"modelConfig": {
										"path": "DataGrid_c00sad8DS.DfcOtherApplicableESS"
									}
								},
								"DataGrid_c00sad8DS_Id": {
									"modelConfig": {
										"path": "DataGrid_c00sad8DS.Id"
									}
								}
							}
						}
					},
					"DataGrid_c00sad8_PredefinedFilter": {
						"value": {
							"items": {
								"901d23c5-66d5-458c-946e-652117a9edff": {
									"filterType": 1,
									"comparisonType": 3,
									"isEnabled": true,
									"trimDateTimeParameterToDate": false,
									"leftExpression": {
										"expressionType": 0,
										"columnPath": "DfcIFCPS"
									},
									"isAggregative": false,
									"dataValueType": 4,
									"rightExpression": {
										"expressionType": 2,
										"parameter": {
											"dataValueType": 4,
											"value": 6
										}
									}
								}
							},
							"logicalOperation": 0,
							"isEnabled": true,
							"filterType": 6,
							"rootSchemaName": "DfcProjectApplicabilityChecklist"
						}
					},
					"DataGrid_l5by70f": {
						"isCollection": true,
						"modelConfig": {
							"path": "DataGrid_l5by70fDS",
							"filterAttributes": [
								{
									"loadOnChange": true,
									"name": "DataGrid_l5by70f_PredefinedFilter"
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"DataGrid_l5by70fDS_DfcIFCPSQuestion": {
									"modelConfig": {
										"path": "DataGrid_l5by70fDS.DfcIFCPSQuestion"
									}
								},
								"DataGrid_l5by70fDS_DfcIFCPSAnswer": {
									"modelConfig": {
										"path": "DataGrid_l5by70fDS.DfcIFCPSAnswer"
									}
								},
								"DataGrid_l5by70fDS_DfcOtherApplicableESS": {
									"modelConfig": {
										"path": "DataGrid_l5by70fDS.DfcOtherApplicableESS"
									}
								},
								"DataGrid_l5by70fDS_Id": {
									"modelConfig": {
										"path": "DataGrid_l5by70fDS.Id"
									}
								}
							}
						}
					},
					"DataGrid_l5by70f_PredefinedFilter": {
						"value": {
							"items": {
								"0f3826c7-b75c-47cb-9b0a-92ecfe62d150": {
									"filterType": 1,
									"comparisonType": 3,
									"isEnabled": true,
									"trimDateTimeParameterToDate": false,
									"leftExpression": {
										"expressionType": 0,
										"columnPath": "DfcIFCPS"
									},
									"isAggregative": false,
									"dataValueType": 4,
									"rightExpression": {
										"expressionType": 2,
										"parameter": {
											"dataValueType": 4,
											"value": 7
										}
									}
								}
							},
							"logicalOperation": 0,
							"isEnabled": true,
							"filterType": 6,
							"rootSchemaName": "DfcProjectApplicabilityChecklist"
						}
					},
					"DataGrid_ga7671e": {
						"isCollection": true,
						"modelConfig": {
							"path": "DataGrid_ga7671eDS",
							"filterAttributes": [
								{
									"loadOnChange": true,
									"name": "DataGrid_ga7671e_PredefinedFilter"
								}
							],
							"sortingConfig": {
								"default": [
									{
										"direction": "desc",
										"columnName": "DfcOtherApplicableESS"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"DataGrid_ga7671eDS_DfcIFCPSQuestion": {
									"modelConfig": {
										"path": "DataGrid_ga7671eDS.DfcIFCPSQuestion"
									}
								},
								"DataGrid_ga7671eDS_DfcIFCPSAnswer": {
									"modelConfig": {
										"path": "DataGrid_ga7671eDS.DfcIFCPSAnswer"
									}
								},
								"DataGrid_ga7671eDS_DfcOtherApplicableESS": {
									"modelConfig": {
										"path": "DataGrid_ga7671eDS.DfcOtherApplicableESS"
									}
								},
								"DataGrid_ga7671eDS_Id": {
									"modelConfig": {
										"path": "DataGrid_ga7671eDS.Id"
									}
								}
							}
						}
					},
					"DataGrid_ga7671e_PredefinedFilter": {
						"value": {
							"items": {
								"7ed78b52-0175-4060-966c-d24f05ae9974": {
									"filterType": 1,
									"comparisonType": 3,
									"isEnabled": true,
									"trimDateTimeParameterToDate": false,
									"leftExpression": {
										"expressionType": 0,
										"columnPath": "DfcIFCPS"
									},
									"isAggregative": false,
									"dataValueType": 4,
									"rightExpression": {
										"expressionType": 2,
										"parameter": {
											"dataValueType": 4,
											"value": 8
										}
									}
								}
							},
							"logicalOperation": 0,
							"isEnabled": true,
							"filterType": 6,
							"rootSchemaName": "DfcProjectApplicabilityChecklist"
						}
					},
					"DataGrid_nr45t40": {
						"isCollection": true,
						"modelConfig": {
							"path": "DataGrid_nr45t40DS"
						},
						"viewModelConfig": {
							"attributes": {
								"DataGrid_nr45t40DS_DfcRiskScreeningName": {
									"modelConfig": {
										"path": "DataGrid_nr45t40DS.DfcRiskScreeningName"
									}
								},
								"DataGrid_nr45t40DS_Id": {
									"modelConfig": {
										"path": "DataGrid_nr45t40DS.Id"
									}
								}
							}
						}
					},
					"PDS_DfcColumn9_z59l2u4": {
						"modelConfig": {
							"path": "PDS.DfcColumn9"
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS",
					"dependencies": {
						"DataGrid_mjqrkf0DS": [
							{
								"attributePath": "DfcExclusionListProject",
								"relationPath": "PDS.Id"
							}
						],
						"DataGrid_nr45t40DS": [
							{
								"attributePath": "DfcRiskScreeningProject",
								"relationPath": "PDS.Id"
							},
							{
								"attributePath": "DfcRiskScreeningSector",
								"relationPath": "PDS.DfcProjectSector"
							}
						],
						"DataGrid_1fpbcamDS": [
							{
								"attributePath": "DfcProject",
								"relationPath": "PDS.Id"
							}
						],
						"DataGrid_1m2g85cDS": [
							{
								"attributePath": "DfcProject",
								"relationPath": "PDS.Id"
							}
						],
						"DataGrid_427w5k2DS": [
							{
								"attributePath": "DfcProject",
								"relationPath": "PDS.Id"
							}
						],
						"DataGrid_ku584oyDS": [
							{
								"attributePath": "DfcProject",
								"relationPath": "PDS.Id"
							}
						],
						"DataGrid_44hevkfDS": [
							{
								"attributePath": "DfcProject",
								"relationPath": "PDS.Id"
							}
						],
						"DataGrid_c00sad8DS": [
							{
								"attributePath": "DfcProject",
								"relationPath": "PDS.Id"
							}
						],
						"DataGrid_l5by70fDS": [
							{
								"attributePath": "DfcProject",
								"relationPath": "PDS.Id"
							}
						],
						"DataGrid_ga7671eDS": [
							{
								"attributePath": "DfcProject",
								"relationPath": "PDS.Id"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "DfcProjects"
						},
						"scope": "page"
					},
					"DataGrid_mjqrkf0DS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "DfcProjectExclusionList",
							"attributes": {
								"DfcExclusionName": {
									"path": "DfcExclusionName"
								}
							}
						}
					},
					"DataGrid_1fpbcamDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "DfcProjectApplicabilityChecklist",
							"attributes": {
								"DfcIFCPSQuestion": {
									"path": "DfcIFCPSQuestion"
								},
								"DfcIFCPSAnswer": {
									"path": "DfcIFCPSAnswer"
								},
								"DfcOtherApplicableESS": {
									"path": "DfcOtherApplicableESS"
								}
							}
						}
					},
					"DataGrid_1m2g85cDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "DfcProjectApplicabilityChecklist",
							"attributes": {
								"DfcIFCPSQuestion": {
									"path": "DfcIFCPSQuestion"
								},
								"DfcIFCPSAnswer": {
									"path": "DfcIFCPSAnswer"
								},
								"DfcOtherApplicableESS": {
									"path": "DfcOtherApplicableESS"
								}
							}
						}
					},
					"DataGrid_427w5k2DS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "DfcProjectApplicabilityChecklist",
							"attributes": {
								"DfcIFCPSQuestion": {
									"path": "DfcIFCPSQuestion"
								},
								"DfcIFCPSAnswer": {
									"path": "DfcIFCPSAnswer"
								},
								"DfcOtherApplicableESS": {
									"path": "DfcOtherApplicableESS"
								}
							}
						}
					},
					"DataGrid_ku584oyDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "DfcProjectApplicabilityChecklist",
							"attributes": {
								"DfcIFCPSQuestion": {
									"path": "DfcIFCPSQuestion"
								},
								"DfcIFCPSAnswer": {
									"path": "DfcIFCPSAnswer"
								},
								"DfcOtherApplicableESS": {
									"path": "DfcOtherApplicableESS"
								}
							}
						}
					},
					"DataGrid_44hevkfDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "DfcProjectApplicabilityChecklist",
							"attributes": {
								"DfcIFCPSQuestion": {
									"path": "DfcIFCPSQuestion"
								},
								"DfcIFCPSAnswer": {
									"path": "DfcIFCPSAnswer"
								},
								"DfcOtherApplicableESS": {
									"path": "DfcOtherApplicableESS"
								}
							}
						}
					},
					"DataGrid_c00sad8DS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "DfcProjectApplicabilityChecklist",
							"attributes": {
								"DfcIFCPSQuestion": {
									"path": "DfcIFCPSQuestion"
								},
								"DfcIFCPSAnswer": {
									"path": "DfcIFCPSAnswer"
								},
								"DfcOtherApplicableESS": {
									"path": "DfcOtherApplicableESS"
								}
							}
						}
					},
					"DataGrid_l5by70fDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "DfcProjectApplicabilityChecklist",
							"attributes": {
								"DfcIFCPSQuestion": {
									"path": "DfcIFCPSQuestion"
								},
								"DfcIFCPSAnswer": {
									"path": "DfcIFCPSAnswer"
								},
								"DfcOtherApplicableESS": {
									"path": "DfcOtherApplicableESS"
								}
							}
						}
					},
					"DataGrid_ga7671eDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "DfcProjectApplicabilityChecklist",
							"attributes": {
								"DfcIFCPSQuestion": {
									"path": "DfcIFCPSQuestion"
								},
								"DfcIFCPSAnswer": {
									"path": "DfcIFCPSAnswer"
								},
								"DfcOtherApplicableESS": {
									"path": "DfcOtherApplicableESS"
								}
							}
						}
					},
					"DataGrid_nr45t40DS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "DfcRiskScreening",
							"attributes": {
								"DfcRiskScreeningName": {
									"path": "DfcRiskScreeningName"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});