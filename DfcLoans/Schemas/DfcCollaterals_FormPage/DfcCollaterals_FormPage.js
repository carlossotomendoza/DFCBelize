define("DfcCollaterals_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
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
					"entitySchemaName": "DfcCollaterals"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "7d3d35d3-3642-4e9f-9f07-04d49370ee0d",
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
				"name": "DfcCollateralNumber",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.DfcCollateralNumber",
					"control": "$DfcCollateralNumber",
					"labelPosition": "auto"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_9fukha5",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_DfcLoanNo_8k9q0vz",
					"labelPosition": "auto",
					"control": "$PDS_DfcLoanNo_8k9q0vz",
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
				"name": "addRecord_nczfljz",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_nczfljz_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_9fukha5",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_pz9i3oz",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "date",
					"label": "$Resources.Strings.PDS_DfcDateEntered_unqyxa8",
					"labelPosition": "auto",
					"control": "$PDS_DfcDateEntered_unqyxa8"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_azbtg1g",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "datetime",
					"label": "#ResourceString(DateTimePicker_azbtg1g_label)#",
					"labelPosition": "auto",
					"control": "$PDS_DfcLastValuationType_ke2kbix",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ComboBox_2bsut01",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_DfcCollateralType_ppdyggo",
					"labelPosition": "auto",
					"control": "$PDS_DfcCollateralType_ppdyggo",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "addRecord_e3vr0lv",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_e3vr0lv_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_2bsut01",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_zbvpzhi",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 6,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_DfcTypeClassification_osbqhmn",
					"labelPosition": "auto",
					"control": "$PDS_DfcTypeClassification_osbqhmn",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "addRecord_o9odhmp",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_o9odhmp_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_zbvpzhi",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_86h2rio",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 7,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_DfcStatus_4mzehs2",
					"labelPosition": "auto",
					"control": "$PDS_DfcStatus_4mzehs2",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "addRecord_2wxuxzg",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_2wxuxzg_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_86h2rio",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NumberInput_ha5220j",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_DfcColValue_xhs931s",
					"labelPosition": "auto",
					"control": "$PDS_DfcColValue_xhs931s"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NumberInput_o225p4d",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_DfcDiscountPercentaje_7lm4wzo",
					"labelPosition": "auto",
					"control": "$PDS_DfcDiscountPercentaje_7lm4wzo"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "NumberInput_h7po7wb",
				"values": {
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_DfcValueSecuringLoans_3se665s",
					"labelPosition": "auto",
					"control": "$PDS_DfcValueSecuringLoans_3se665s",
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "NumberInput_gy236ys",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_DfcDiscountedValue_tv7df9a",
					"labelPosition": "auto",
					"control": "$PDS_DfcDiscountedValue_tv7df9a"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "NumberInput_a0mubfg",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_DfcAvalaibleValue_wx86bvp",
					"labelPosition": "auto",
					"control": "$PDS_DfcAvalaibleValue_wx86bvp"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_3gxznr0",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "datetime",
					"label": "$Resources.Strings.PDS_DfcExpiryDate_w69bu9v",
					"labelPosition": "auto",
					"control": "$PDS_DfcExpiryDate_w69bu9v"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "NumberInput_on0bme9",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_DfcProjectedValue_copyd1r",
					"labelPosition": "auto",
					"control": "$PDS_DfcProjectedValue_copyd1r"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "GridContainer_yu28387",
				"values": {
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
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ComboBox_rf1fnf4",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_DfcExternalEntity_m48crfg",
					"labelPosition": "auto",
					"control": "$PDS_DfcExternalEntity_m48crfg",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GridContainer_yu28387",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_1w6qajo",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_1w6qajo_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_rf1fnf4",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_13ni05i",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_DfcLocationSecurity_lf7l357",
					"labelPosition": "auto",
					"control": "$PDS_DfcLocationSecurity_lf7l357",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GridContainer_yu28387",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_kk2hzdj",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_kk2hzdj_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_13ni05i",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_ex0ynld",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_DfcSolicitor_l7eu81x",
					"labelPosition": "auto",
					"control": "$PDS_DfcSolicitor_l7eu81x",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GridContainer_yu28387",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "addRecord_h3pggm7",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_h3pggm7_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_ex0ynld",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_00un9tb",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "datetime",
					"label": "$Resources.Strings.PDS_DfcDateClosed_6zsov71",
					"labelPosition": "auto",
					"control": "$PDS_DfcDateClosed_6zsov71"
				},
				"parentName": "GridContainer_yu28387",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_osjuemb",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "datetime",
					"label": "$Resources.Strings.PDS_DfcDateSubmmited_m1mqio7",
					"labelPosition": "auto",
					"control": "$PDS_DfcDateSubmmited_m1mqio7"
				},
				"parentName": "GridContainer_yu28387",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "TabContainer_gd9yhga",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_gd9yhga_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_s1habg9",
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
				"parentName": "TabContainer_gd9yhga",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_31o6old",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "datetime",
					"label": "$Resources.Strings.PDS_DfcRegistrationDate_yq5zvf9",
					"labelPosition": "auto",
					"control": "$PDS_DfcRegistrationDate_yq5zvf9"
				},
				"parentName": "GridContainer_s1habg9",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_u8xy223",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.PDS_DfcTitleNumber_h9f554z",
					"labelPosition": "auto",
					"control": "$PDS_DfcTitleNumber_h9f554z"
				},
				"parentName": "GridContainer_s1habg9",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Input_v1g08ag",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.PDS_DfcRegistrationSection_7ke47xg",
					"labelPosition": "auto",
					"control": "$PDS_DfcRegistrationSection_7ke47xg"
				},
				"parentName": "GridContainer_s1habg9",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "NumberInput_j1gwzhp",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_DfcBlock_ndw3ygm",
					"labelPosition": "auto",
					"control": "$PDS_DfcBlock_ndw3ygm"
				},
				"parentName": "GridContainer_s1habg9",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "NumberInput_psdyieq",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_DfcArea_m6aatx7",
					"labelPosition": "auto",
					"control": "$PDS_DfcArea_m6aatx7"
				},
				"parentName": "GridContainer_s1habg9",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "Input_ixxgpwj",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.PDS_Dfcparcel_dl75pgb",
					"labelPosition": "auto",
					"control": "$PDS_Dfcparcel_dl75pgb"
				},
				"parentName": "GridContainer_s1habg9",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "ComboBox_1f14dgs",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_DfcUnit_l0bqm9q",
					"labelPosition": "auto",
					"control": "$PDS_DfcUnit_l0bqm9q",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GridContainer_s1habg9",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "addRecord_4hf1uv2",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_4hf1uv2_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_1f14dgs",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_m00s7xm",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_DfcTownVillage_e9hf092",
					"labelPosition": "auto",
					"control": "$PDS_DfcTownVillage_e9hf092",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GridContainer_s1habg9",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "addRecord_rq7qcqh",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_rq7qcqh_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_m00s7xm",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_oi7ljiv",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.PDS_DfcAddressOfProperty_l8t4pb8",
					"labelPosition": "auto",
					"control": "$PDS_DfcAddressOfProperty_l8t4pb8"
				},
				"parentName": "GridContainer_s1habg9",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "RichTextEditor_ta2acxd",
				"values": {
					"type": "crt.RichTextEditor",
					"label": "$Resources.Strings.PDS_DfcNotes_llv2omh",
					"labelPosition": "auto",
					"control": "$PDS_DfcNotes_llv2omh",
					"filesStorage": {
						"masterRecordColumnValue": "$Id",
						"entitySchemaName": "SysFile",
						"recordColumnName": "RecordId"
					}
				},
				"parentName": "TabContainer_gd9yhga",
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
					"DfcCollateralNumber": {
						"modelConfig": {
							"path": "PDS.DfcCollateralNumber"
						}
					},
					"PDS_DfcLoanNo_8k9q0vz": {
						"modelConfig": {
							"path": "PDS.DfcLoanNo"
						}
					},
					"PDS_DfcDateEntered_unqyxa8": {
						"modelConfig": {
							"path": "PDS.DfcDateEntered"
						}
					},
					"PDS_DfcLastValuationType_ke2kbix": {
						"modelConfig": {
							"path": "PDS.DfcLastValuationType"
						}
					},
					"PDS_DfcCollateralType_ppdyggo": {
						"modelConfig": {
							"path": "PDS.DfcCollateralType"
						}
					},
					"PDS_DfcTypeClassification_osbqhmn": {
						"modelConfig": {
							"path": "PDS.DfcTypeClassification"
						}
					},
					"PDS_DfcStatus_4mzehs2": {
						"modelConfig": {
							"path": "PDS.DfcStatus"
						}
					},
					"PDS_DfcColValue_xhs931s": {
						"modelConfig": {
							"path": "PDS.DfcColValue"
						}
					},
					"PDS_DfcDiscountPercentaje_7lm4wzo": {
						"modelConfig": {
							"path": "PDS.DfcDiscountPercentaje"
						}
					},
					"PDS_DfcValueSecuringLoans_3se665s": {
						"modelConfig": {
							"path": "PDS.DfcValueSecuringLoans"
						}
					},
					"PDS_DfcDiscountedValue_tv7df9a": {
						"modelConfig": {
							"path": "PDS.DfcDiscountedValue"
						}
					},
					"PDS_DfcAvalaibleValue_wx86bvp": {
						"modelConfig": {
							"path": "PDS.DfcAvalaibleValue"
						}
					},
					"PDS_DfcExpiryDate_w69bu9v": {
						"modelConfig": {
							"path": "PDS.DfcExpiryDate"
						}
					},
					"PDS_DfcProjectedValue_copyd1r": {
						"modelConfig": {
							"path": "PDS.DfcProjectedValue"
						}
					},
					"PDS_DfcLocationSecurity_lvfw7bz": {
						"modelConfig": {
							"path": "PDS.DfcLocationSecurity"
						}
					},
					"PDS_DfcLocationSecurity_lf7l357": {
						"modelConfig": {
							"path": "PDS.DfcLocationSecurity"
						}
					},
					"PDS_DfcExternalEntity_m48crfg": {
						"modelConfig": {
							"path": "PDS.DfcExternalEntity"
						}
					},
					"PDS_DfcDateClosed_6zsov71": {
						"modelConfig": {
							"path": "PDS.DfcDateClosed"
						}
					},
					"PDS_DfcSolicitor_l7eu81x": {
						"modelConfig": {
							"path": "PDS.DfcSolicitor"
						}
					},
					"PDS_DfcDateSubmmited_m1mqio7": {
						"modelConfig": {
							"path": "PDS.DfcDateSubmmited"
						}
					},
					"PDS_DfcRegistrationDate_yq5zvf9": {
						"modelConfig": {
							"path": "PDS.DfcRegistrationDate"
						}
					},
					"PDS_DfcTitleNumber_h9f554z": {
						"modelConfig": {
							"path": "PDS.DfcTitleNumber"
						}
					},
					"PDS_DfcRegistrationSection_7ke47xg": {
						"modelConfig": {
							"path": "PDS.DfcRegistrationSection"
						}
					},
					"PDS_DfcBlock_ndw3ygm": {
						"modelConfig": {
							"path": "PDS.DfcBlock"
						}
					},
					"PDS_DfcArea_m6aatx7": {
						"modelConfig": {
							"path": "PDS.DfcArea"
						}
					},
					"PDS_Dfcparcel_dl75pgb": {
						"modelConfig": {
							"path": "PDS.Dfcparcel"
						}
					},
					"PDS_DfcAddressOfProperty_l8t4pb8": {
						"modelConfig": {
							"path": "PDS.DfcAddressOfProperty"
						}
					},
					"PDS_DfcTownVillage_e9hf092": {
						"modelConfig": {
							"path": "PDS.DfcTownVillage"
						}
					},
					"PDS_DfcNotes_llv2omh": {
						"modelConfig": {
							"path": "PDS.DfcNotes"
						}
					},
					"PDS_DfcUnit_aik6eg3": {
						"modelConfig": {
							"path": "PDS.DfcUnit"
						}
					},
					"PDS_DfcUnit_l0bqm9q": {
						"modelConfig": {
							"path": "PDS.DfcUnit"
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
					"primaryDataSourceName": "PDS"
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
							"entitySchemaName": "DfcCollaterals"
						},
						"scope": "page"
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});