define("DfcLoanApplication_FormPage", /**SCHEMA_DEPS*/["@creatio-devkit/common"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "SaveButton",
				"values": {
					"size": "large",
					"iconPosition": "only-text"
				}
			},
			{
				"operation": "merge",
				"name": "CloseButton",
				"values": {
					"size": "large",
					"iconPosition": "only-text"
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
				"name": "GeneralInfoTabContainer",
				"values": {
					"columns": [
						"minmax(64px, 1fr)",
						"minmax(64px, 1fr)",
						"minmax(64px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "large",
						"left": "none"
					},
					"alignItems": "stretch"
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
					"entitySchemaName": "FinApplication"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"recordColumnName": "FinApplication",
					"columns": [
						{
							"id": "0e6d6ba9-3d3a-4144-a074-6de2fe25b360",
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
				"name": "Button_Refresh",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_Refresh_caption)#",
					"color": "default",
					"disabled": false,
					"size": "large",
					"iconPosition": "only-icon",
					"visible": true,
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload",
								"useLastLoadParameters": true
							},
							"dataSourceName": "PDS"
						}
					},
					"clickMode": "default",
					"icon": "reload-button-icon"
				},
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "EntityStageProgressBar_LoanApp",
				"values": {
					"type": "crt.EntityStageProgressBar",
					"saveOnChange": true,
					"askUserToChangeSchema": true,
					"entityName": "FinApplication",
					"visible": true
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NextStepsContainer_kmjemon",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(NextStepsContainer_kmjemon_title)#",
					"toggleType": "material",
					"togglePosition": "after",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "none",
						"bottom": "none",
						"left": "none",
						"right": "none"
					},
					"fitContent": true
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_51ln9sb",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "NextStepsContainer_kmjemon",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_myr6yd9",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_51ln9sb",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AddStepButton_1ojce8r",
				"values": {
					"type": "crt.Button",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"visible": "$CardState | crt.IsEqual : 'edit'",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_myr6yd9",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CreateTaskMenuItem_vsnqd55",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(CreateTaskMenuItem_vsnqd55_caption)#",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.AddNextStepRequest",
						"params": {
							"entityName": "Activity"
						}
					}
				},
				"parentName": "AddStepButton_1ojce8r",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CreateEmailMenuItem_jbsd8rt",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(CreateEmailMenuItem_jbsd8rt_caption)#",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateEmailRequest"
					}
				},
				"parentName": "AddStepButton_1ojce8r",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_l7qw2wb",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "NextStepsContainer_kmjemon",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NextSteps_d75go4l",
				"values": {
					"type": "crt.NextSteps",
					"masterSchemaId": "$Id",
					"cardState": "$CardState",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					},
					"masterSchemaName": "FinApplication"
				},
				"parentName": "GridContainer_l7qw2wb",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DfcClientPhoto",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ImageInput",
					"labelPosition": "auto",
					"value": "$PDS_DfcColumn10_qpi8aja",
					"size": "large",
					"borderRadius": "medium",
					"positioning": "cover",
					"visible": true,
					"readonly": false,
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Number",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.Number",
					"control": "$Number",
					"labelPosition": "auto",
					"multiline": false,
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "DfcLegacyId",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.PDS_DfcLegacyId_j6t1hrb",
					"labelPosition": "auto",
					"control": "$PDS_DfcLegacyId_j6t1hrb",
					"readonly": true
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "DfcCustomerType",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "#ResourceString(DfcCustomerType_label)#",
					"labelPosition": "auto",
					"control": "$PDS_DfcCustomerType_qrgzuqv",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "DfcClient",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_DfcClient_clv0yy1",
					"labelPosition": "auto",
					"control": "$PDS_DfcClient_clv0yy1",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "addRecord_0q5yso1",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_0q5yso1_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "DfcClient",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Company",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 6,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "#ResourceString(Company_label)#",
					"labelPosition": "auto",
					"control": "$PDS_Account_pzf1fgg",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": false,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "addRecord_erjda0i",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_erjda0i_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "Company",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_kvbwula",
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
				"name": "DfcLoanType",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_DfcLoanType_3plnppm",
					"labelPosition": "auto",
					"control": "$PDS_DfcLoanType_3plnppm",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GridContainer_kvbwula",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DfcInterestType",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_DfcInterestType_si2jic2",
					"labelPosition": "auto",
					"control": "$PDS_DfcInterestType_si2jic2",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GridContainer_kvbwula",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "DfcIntCalcMethod",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_DfcIntCalcMethod_ubywopx",
					"labelPosition": "auto",
					"control": "$PDS_DfcIntCalcMethod_ubywopx",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GridContainer_kvbwula",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "DfcGracePeriodIntMethod",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_DfcGracePeriodIntMethod_ir9joaa",
					"labelPosition": "auto",
					"control": "$PDS_DfcGracePeriodIntMethod_ir9joaa",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GridContainer_kvbwula",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "DfcLatePymtPenaltyFeeCalc",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_DfcLatePymtPenaltyFeeCalc_xpx24sd",
					"labelPosition": "auto",
					"control": "$PDS_DfcLatePymtPenaltyFeeCalc_xpx24sd",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GridContainer_kvbwula",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "DfcRepaymentMethod",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 6,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_DfcRepaymentMethod_snnvcxs",
					"labelPosition": "auto",
					"control": "$PDS_DfcRepaymentMethod_snnvcxs",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GridContainer_kvbwula",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "addRecord_jmxbref",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_jmxbref_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "DfcRepaymentMethod",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_96w6upm",
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
				"name": "Division",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_Division_v2g2xg0",
					"labelPosition": "auto",
					"control": "$PDS_Division_v2g2xg0",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"mode": "List"
				},
				"parentName": "GridContainer_96w6upm",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DfcLoanOfficer",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_DfcLoanOfficer_1sd81fa",
					"labelPosition": "auto",
					"control": "$PDS_DfcLoanOfficer_1sd81fa",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GridContainer_96w6upm",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_zz141tv",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_zz141tv_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "DfcLoanOfficer",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_0yjzos9",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_DfcCreditOfficer_p5oo54x",
					"labelPosition": "auto",
					"control": "$PDS_DfcCreditOfficer_p5oo54x",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_96w6upm",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "FillingDate",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "date",
					"label": "$Resources.Strings.PDS_FillingDate_1d9uqee",
					"labelPosition": "auto",
					"control": "$PDS_FillingDate_1d9uqee"
				},
				"parentName": "GridContainer_96w6upm",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Source",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_Source_qpdj4aa",
					"labelPosition": "auto",
					"control": "$PDS_Source_qpdj4aa",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"mode": "List"
				},
				"parentName": "GridContainer_96w6upm",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "Stage",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 6,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_Stage_i1q3kei",
					"labelPosition": "auto",
					"control": "$PDS_Stage_i1q3kei",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"mode": "List",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_96w6upm",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "Status",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 7,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_Status_nhfeccw",
					"labelPosition": "auto",
					"control": "$PDS_Status_nhfeccw",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"mode": "List"
				},
				"parentName": "GridContainer_96w6upm",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "CreatedBy",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 8,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_CreatedBy_eh6s3za",
					"labelPosition": "auto",
					"control": "$PDS_CreatedBy_eh6s3za",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GridContainer_96w6upm",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "ProductCategory",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_ProductCategory_ygsp5bs",
					"labelPosition": "above",
					"control": "$PDS_ProductCategory_ygsp5bs",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"mode": "List",
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ProductType",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_ProductType_ccpv2gg",
					"labelPosition": "above",
					"control": "$PDS_ProductType_ccpv2gg",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"mode": "List",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Product",
				"values": {
					"layoutConfig": {
						"column": 3,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_Product_aflvaop",
					"labelPosition": "above",
					"control": "$PDS_Product_aflvaop",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"mode": "List",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "OpportunityCondition",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "#ResourceString(OpportunityCondition_label)#",
					"labelPosition": "auto",
					"control": "$PDS_OpportunityCondition_grlqn8k",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ComboBox_gepyqjc",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_DfcSector_csy1jrh",
					"labelPosition": "auto",
					"control": "$PDS_DfcSector_csy1jrh",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "DfcSubSector",
				"values": {
					"layoutConfig": {
						"column": 3,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_DfcSubSector_e2h6c4l",
					"labelPosition": "above",
					"control": "$PDS_DfcSubSector_e2h6c4l",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "DfcPurpose",
				"values": {
					"type": "crt.RichTextEditor",
					"label": "$Resources.Strings.PDS_DfcPurpose_iichd6d",
					"labelPosition": "above",
					"control": "$PDS_DfcPurpose_iichd6d",
					"filesStorage": {
						"masterRecordColumnValue": "$Id",
						"entitySchemaName": "SysFile",
						"recordColumnName": "RecordId"
					},
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 3,
						"rowSpan": 1
					},
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"toolbarDisplayMode": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "DfcPaymentFrequency",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_DfcPaymentFrequency_kjsmyp1",
					"labelPosition": "auto",
					"control": "$PDS_DfcPaymentFrequency_kjsmyp1",
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
				"name": "addRecord_0sb7llu",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_0sb7llu_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "DfcPaymentFrequency",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DfcInstallmentAmt",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_DfcInstallmentAmt_9mp5g18",
					"labelPosition": "auto",
					"control": "$PDS_DfcInstallmentAmt_9mp5g18",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "CalculateInstallment",
				"values": {
					"layoutConfig": {
						"column": 3,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Button",
					"caption": "#ResourceString(Button_xmybqfz_caption)#",
					"color": "primary",
					"disabled": false,
					"size": "large",
					"iconPosition": "only-text",
					"visible": true,
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "DfcCalculateInstallment",
							"processRunType": "ForTheSelectedPage",
							"showNotification": true,
							"recordIdProcessParameterName": "RecordId"
						}
					},
					"clickMode": "default"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_ProductTerms",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_ProductTerms_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true,
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_wj5lged",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_ProductTerms",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_l37ywah",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_wj5lged",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_3lu1gh4",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_3lu1gh4_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "FinApplicationSpec",
							"defaultValues": [
								{
									"attributeName": "FinApplication",
									"value": "$FinApplication"
								}
							]
						}
					},
					"visible": false,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_l37ywah",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_bn9r7zh",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_bn9r7zh_caption)#",
					"icon": "reload-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_qw3hbjhDS"
						}
					}
				},
				"parentName": "FlexContainer_l37ywah",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_6gy9njk",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_6gy9njk_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_l37ywah",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_m93rt5f",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_m93rt5f_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_AppParams"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_6gy9njk",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_nymzzxp",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_nymzzxp_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "FinApplicationSpec"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_6gy9njk",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_v0hx8m8",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_v0hx8m8_placeholder)#",
					"iconOnly": true,
					"targetAttributes": [
						"GridDetail_AppParams"
					]
				},
				"parentName": "FlexContainer_l37ywah",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_hvu5m9w",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": [],
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
				"parentName": "ExpansionPanel_ProductTerms",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_ljfwug6",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 10
					},
					"features": {
						"rows": {
							"selection": false
						},
						"editable": {
							"enable": false,
							"itemsCreation": false
						}
					},
					"items": "$DataGrid_ljfwug6",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "DataGrid_ljfwug6DS_Id",
					"columns": [
						{
							"id": "fc8426ae-333f-3cdb-d22d-201890c259c9",
							"code": "DataGrid_ljfwug6DS_Specification",
							"caption": "#ResourceString(DataGrid_ljfwug6DS_Specification)#",
							"dataValueType": 10
						},
						{
							"id": "97027548-f52d-97a1-7c0d-62f633aa199f",
							"code": "DataGrid_ljfwug6DS_DisplayValue",
							"caption": "#ResourceString(DataGrid_ljfwug6DS_DisplayValue)#",
							"dataValueType": 30
						},
						{
							"id": "d52c5edb-7a54-5eb7-4818-aca07966dcf5",
							"code": "DataGrid_ljfwug6DS_CreatedBy",
							"caption": "#ResourceString(DataGrid_ljfwug6DS_CreatedBy)#",
							"dataValueType": 10
						},
						{
							"id": "6cb7a14a-c658-a19a-e319-7a7def9a6b94",
							"code": "DataGrid_ljfwug6DS_CreatedOn",
							"caption": "#ResourceString(DataGrid_ljfwug6DS_CreatedOn)#",
							"dataValueType": 7
						},
						{
							"id": "9ffe3819-02e2-27c3-508b-141df318d3b0",
							"code": "DataGrid_ljfwug6DS_ModifiedBy",
							"caption": "#ResourceString(DataGrid_ljfwug6DS_ModifiedBy)#",
							"dataValueType": 10
						},
						{
							"id": "5b3918de-f447-df59-728a-89c36a2e57c6",
							"code": "DataGrid_ljfwug6DS_ModifiedOn",
							"caption": "#ResourceString(DataGrid_ljfwug6DS_ModifiedOn)#",
							"dataValueType": 7
						},
						{
							"id": "133eee4a-60fa-4088-647c-c4efe3a828cf",
							"code": "DataGrid_ljfwug6DS_DfcParametertype",
							"caption": "#ResourceString(DataGrid_ljfwug6DS_DfcParametertype)#",
							"dataValueType": 10
						}
					]
				},
				"parentName": "GridContainer_hvu5m9w",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_AppParams",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 1,
						"column": 2,
						"row": 1,
						"rowSpan": 10
					},
					"features": {
						"rows": {
							"selection": false
						},
						"editable": {
							"enable": false,
							"itemsCreation": false
						}
					},
					"items": "$GridDetail_qw3hbjh",
					"activeRow": "$GridDetail_qw3hbjh_ActiveRow",
					"selectionState": "$GridDetail_qw3hbjh_SelectionState",
					"_selectionOptions": {
						"attribute": "GridDetail_qw3hbjh_SelectionState"
					},
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_qw3hbjhDS_Id",
					"columns": [
						{
							"id": "8ccabed2-930f-aecb-6651-b0c810103f5a",
							"code": "GridDetail_qw3hbjhDS_Specification",
							"caption": "#ResourceString(GridDetail_qw3hbjhDS_Specification)#",
							"dataValueType": 10
						},
						{
							"id": "432abc38-73d8-3ab3-80f2-52ca84f59275",
							"code": "GridDetail_qw3hbjhDS_DisplayValue",
							"caption": "#ResourceString(GridDetail_qw3hbjhDS_DisplayValue)#",
							"dataValueType": 30
						},
						{
							"id": "bfda9a9b-e670-87b4-1a6e-42efa53a53ee",
							"code": "GridDetail_qw3hbjhDS_CreatedBy",
							"caption": "#ResourceString(GridDetail_qw3hbjhDS_CreatedBy)#",
							"dataValueType": 10
						},
						{
							"id": "ed3bc5ca-1e3e-998e-594c-3d260a23cfad",
							"code": "GridDetail_qw3hbjhDS_CreatedOn",
							"caption": "#ResourceString(GridDetail_qw3hbjhDS_CreatedOn)#",
							"dataValueType": 7
						},
						{
							"id": "813f5a64-aefe-4c0f-5f29-12b3d28d0639",
							"code": "GridDetail_qw3hbjhDS_ModifiedBy",
							"caption": "#ResourceString(GridDetail_qw3hbjhDS_ModifiedBy)#",
							"dataValueType": 10
						},
						{
							"id": "c945abd9-3fc3-cdf1-dd1f-c314a8b4ae29",
							"code": "GridDetail_qw3hbjhDS_ModifiedOn",
							"caption": "#ResourceString(GridDetail_qw3hbjhDS_ModifiedOn)#",
							"dataValueType": 7
						},
						{
							"id": "73079b80-2904-2222-8b6c-f132f38619f1",
							"code": "GridDetail_qw3hbjhDS_DfcParametertype",
							"caption": "#ResourceString(GridDetail_qw3hbjhDS_DfcParametertype)#",
							"dataValueType": 10
						}
					],
					"placeholder": false,
					"bulkActions": []
				},
				"parentName": "GridContainer_hvu5m9w",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetail_qw3hbjh_AddTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Add tag",
					"icon": "tag-icon",
					"clicked": {
						"request": "crt.AddTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_qw3hbjhDS",
							"filters": "$GridDetail_qw3hbjh | crt.ToCollectionFilters : 'GridDetail_qw3hbjh' : $GridDetail_qw3hbjh_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_qw3hbjh_SelectionState"
						}
					},
					"items": []
				},
				"parentName": "GridDetail_AppParams",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_qw3hbjh_RemoveTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Remove tag",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.RemoveTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_qw3hbjhDS",
							"filters": "$GridDetail_qw3hbjh | crt.ToCollectionFilters : 'GridDetail_qw3hbjh' : $GridDetail_qw3hbjh_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_qw3hbjh_SelectionState"
						}
					}
				},
				"parentName": "GridDetail_qw3hbjh_AddTagsBulkAction",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_qw3hbjh_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Export to Excel",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_AppParams",
							"filters": "$GridDetail_qw3hbjh | crt.ToCollectionFilters : 'GridDetail_qw3hbjh' : $GridDetail_qw3hbjh_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_qw3hbjh_SelectionState"
						}
					}
				},
				"parentName": "GridDetail_AppParams",
				"propertyName": "bulkActions",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetail_qw3hbjh_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Delete",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_qw3hbjhDS",
							"filters": "$GridDetail_qw3hbjh | crt.ToCollectionFilters : 'GridDetail_qw3hbjh' : $GridDetail_qw3hbjh_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_qw3hbjh_SelectionState"
						}
					}
				},
				"parentName": "GridDetail_AppParams",
				"propertyName": "bulkActions",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_6t8blni",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_6t8blni_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "large",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true,
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_naq804u",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_6t8blni",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_l6ytr4e",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_naq804u",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_w6thk04",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_w6thk04_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "AppForm",
							"defaultValues": [
								{
									"attributeName": "FinApplication",
									"value": "$FinApplication"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_l6ytr4e",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_7uhlloq",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_7uhlloq_caption)#",
					"icon": "reload-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_puci257DS"
						}
					}
				},
				"parentName": "FlexContainer_l6ytr4e",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_ling4ll",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_ling4ll_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_l6ytr4e",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_n3pr5n0",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_n3pr5n0_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_puci257"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_ling4ll",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_qraiqg6",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_qraiqg6_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "AppForm"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_ling4ll",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_bvjsyd5",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_bvjsyd5_placeholder)#",
					"iconOnly": true,
					"targetAttributes": [
						"GridDetail_puci257"
					]
				},
				"parentName": "FlexContainer_l6ytr4e",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_6mjms8x",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_6t8blni",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_puci257",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						},
						"editable": {
							"enable": false,
							"itemsCreation": false
						}
					},
					"items": "$GridDetail_puci257",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_puci257DS_Id",
					"columns": [
						{
							"id": "e363eba5-c984-a409-3eac-ee37c59f75fb",
							"code": "GridDetail_puci257DS_Participant",
							"caption": "#ResourceString(GridDetail_puci257DS_Participant)#",
							"dataValueType": 1
						},
						{
							"id": "ec804833-dd57-2201-0138-8a55cd8e6c2c",
							"code": "GridDetail_puci257DS_ParticipantRole",
							"caption": "#ResourceString(GridDetail_puci257DS_ParticipantRole)#",
							"dataValueType": 10
						},
						{
							"id": "b15ab42b-e414-422d-d176-54a2d664a019",
							"code": "GridDetail_puci257DS_BirthDate",
							"caption": "#ResourceString(GridDetail_puci257DS_BirthDate)#",
							"dataValueType": 8
						},
						{
							"id": "297c5a75-b631-6d78-b3fb-8f21c39f83c1",
							"code": "GridDetail_puci257DS_MaritalStatus",
							"caption": "#ResourceString(GridDetail_puci257DS_MaritalStatus)#",
							"dataValueType": 10
						},
						{
							"id": "ceae5a4d-cd58-7eee-b556-f52b40b2f8fb",
							"code": "GridDetail_puci257DS_PlaceOfBirth",
							"caption": "#ResourceString(GridDetail_puci257DS_PlaceOfBirth)#",
							"dataValueType": 29
						},
						{
							"id": "47c225c3-832e-358c-0b69-3ee000d46885",
							"code": "GridDetail_puci257DS_DfcAge",
							"caption": "#ResourceString(GridDetail_puci257DS_DfcAge)#",
							"dataValueType": 4
						}
					],
					"placeholder": false
				},
				"parentName": "GridContainer_6mjms8x",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabContainer_Amortization",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_bv77mre_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_co9fgv8",
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
				"parentName": "TabContainer_Amortization",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_Amortization",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.DataGrid",
					"features": {
						"rows": {
							"selection": false
						},
						"editable": {
							"enable": false,
							"itemsCreation": false
						}
					},
					"items": "$DataGrid_xlei2sm",
					"activeRow": "$DataGrid_xlei2sm_ActiveRow",
					"selectionState": "$DataGrid_xlei2sm_SelectionState",
					"_selectionOptions": {
						"attribute": "DataGrid_xlei2sm_SelectionState"
					},
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "DataGrid_xlei2smDS_Id",
					"columns": [
						{
							"id": "1593952d-ed17-fe10-8651-4da13a146037",
							"code": "DataGrid_xlei2smDS_DfcAmortizationNumber",
							"caption": "#ResourceString(DataGrid_xlei2smDS_DfcAmortizationNumber)#",
							"dataValueType": 27,
							"width": 193
						},
						{
							"id": "c0848a1f-8cbf-a3df-bcff-3696fdb7f15e",
							"code": "DataGrid_xlei2smDS_DfcPeriodNumber",
							"caption": "#ResourceString(DataGrid_xlei2smDS_DfcPeriodNumber)#",
							"dataValueType": 4
						},
						{
							"id": "ca0dc1a5-214a-5a01-638a-6dec971c064f",
							"code": "DataGrid_xlei2smDS_DfcAmortizationDate",
							"caption": "#ResourceString(DataGrid_xlei2smDS_DfcAmortizationDate)#",
							"dataValueType": 8,
							"width": 179
						},
						{
							"id": "df65a25b-138a-f1d0-a050-ec371ff206bb",
							"code": "DataGrid_xlei2smDS_DfcAmortizationBeginningBalance",
							"caption": "#ResourceString(DataGrid_xlei2smDS_DfcAmortizationBeginningBalance)#",
							"dataValueType": 6,
							"width": 177
						},
						{
							"id": "4f971648-bb13-0075-aabe-5f0368bb22f1",
							"code": "DataGrid_xlei2smDS_DfcAmortizationEndingBalance",
							"caption": "#ResourceString(DataGrid_xlei2smDS_DfcAmortizationEndingBalance)#",
							"dataValueType": 6,
							"width": 155
						},
						{
							"id": "fc51f6f1-9c55-d27f-b680-b3b6bad30ee9",
							"code": "DataGrid_xlei2smDS_DfcCurrentDue",
							"caption": "#ResourceString(DataGrid_xlei2smDS_DfcCurrentDue)#",
							"dataValueType": 12,
							"width": 140
						},
						{
							"id": "4b1beeb0-689f-d633-7310-d67380d88271",
							"code": "DataGrid_xlei2smDS_DfcAmortizationInterest",
							"caption": "#ResourceString(DataGrid_xlei2smDS_DfcAmortizationInterest)#",
							"dataValueType": 6
						},
						{
							"id": "c0ca941a-71d3-9c01-6000-e6894242a2b5",
							"code": "DataGrid_xlei2smDS_DfcPaid",
							"caption": "#ResourceString(DataGrid_xlei2smDS_DfcPaid)#",
							"dataValueType": 12,
							"width": 131
						},
						{
							"id": "9710c9a8-f746-5a93-3caf-8adae2e87470",
							"code": "DataGrid_xlei2smDS_DfcAmortizationPrincipal",
							"caption": "#ResourceString(DataGrid_xlei2smDS_DfcAmortizationPrincipal)#",
							"dataValueType": 6
						}
					],
					"placeholder": false,
					"bulkActions": []
				},
				"parentName": "GridContainer_co9fgv8",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_xlei2sm_AddTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Add tag",
					"icon": "tag-icon",
					"clicked": {
						"request": "crt.AddTagsInRecordsRequest",
						"params": {
							"dataSourceName": "DataGrid_xlei2smDS",
							"filters": "$DataGrid_xlei2sm | crt.ToCollectionFilters : 'DataGrid_xlei2sm' : $DataGrid_xlei2sm_SelectionState | crt.SkipIfSelectionEmpty : $DataGrid_xlei2sm_SelectionState"
						}
					},
					"items": []
				},
				"parentName": "DataGrid_Amortization",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_xlei2sm_RemoveTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Remove tag",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.RemoveTagsInRecordsRequest",
						"params": {
							"dataSourceName": "DataGrid_xlei2smDS",
							"filters": "$DataGrid_xlei2sm | crt.ToCollectionFilters : 'DataGrid_xlei2sm' : $DataGrid_xlei2sm_SelectionState | crt.SkipIfSelectionEmpty : $DataGrid_xlei2sm_SelectionState"
						}
					}
				},
				"parentName": "DataGrid_xlei2sm_AddTagsBulkAction",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_xlei2sm_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Export to Excel",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "DataGrid_Amortization",
							"filters": "$DataGrid_xlei2sm | crt.ToCollectionFilters : 'DataGrid_xlei2sm' : $DataGrid_xlei2sm_SelectionState | crt.SkipIfSelectionEmpty : $DataGrid_xlei2sm_SelectionState"
						}
					}
				},
				"parentName": "DataGrid_Amortization",
				"propertyName": "bulkActions",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "DataGrid_xlei2sm_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Delete",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "DataGrid_xlei2smDS",
							"filters": "$DataGrid_xlei2sm | crt.ToCollectionFilters : 'DataGrid_xlei2sm' : $DataGrid_xlei2sm_SelectionState | crt.SkipIfSelectionEmpty : $DataGrid_xlei2sm_SelectionState"
						}
					}
				},
				"parentName": "DataGrid_Amortization",
				"propertyName": "bulkActions",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "TabContainer_Collaterals",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_9rjaya8_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_6psjy1u",
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
				"parentName": "TabContainer_Collaterals",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_Collaterals",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_terc2fv_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": false,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true
				},
				"parentName": "GridContainer_6psjy1u",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_liwoj5o",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_Collaterals",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_d31e2u5",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_liwoj5o",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_njp54pu",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_njp54pu_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "DfcCollaterals",
							"defaultValues": [
								{
									"attributeName": "DfcLoanApp",
									"value": "$DfcLoanApp"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_d31e2u5",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_dzf9837",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_dzf9837_caption)#",
					"icon": "reload-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_atbo06pDS"
						}
					}
				},
				"parentName": "FlexContainer_d31e2u5",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_3r1y4in",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_3r1y4in_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_d31e2u5",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_a3oyrf8",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_a3oyrf8_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_atbo06p"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_3r1y4in",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_eppe3o1",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_eppe3o1_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "DfcCollaterals"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_3r1y4in",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_veqs4eu",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_veqs4eu_placeholder)#",
					"iconOnly": true,
					"targetAttributes": [
						"GridDetail_atbo06p"
					]
				},
				"parentName": "FlexContainer_d31e2u5",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_eailemy",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_Collaterals",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_atbo06p",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						}
					},
					"items": "$GridDetail_atbo06p",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_atbo06pDS_Id",
					"columns": [
						{
							"id": "9d19d49f-a21d-5497-bb4b-47c3c80a524b",
							"code": "GridDetail_atbo06pDS_DfcCollateralNumber",
							"caption": "#ResourceString(GridDetail_atbo06pDS_DfcCollateralNumber)#",
							"dataValueType": 27
						},
						{
							"id": "e7f10a32-b33d-6a98-7285-610e1e06ef47",
							"code": "GridDetail_atbo06pDS_DfcAddressOfProperty",
							"caption": "#ResourceString(GridDetail_atbo06pDS_DfcAddressOfProperty)#",
							"dataValueType": 28
						},
						{
							"id": "7356962d-288f-89d7-42a7-8f5a6103aeee",
							"code": "GridDetail_atbo06pDS_DfcArea",
							"caption": "#ResourceString(GridDetail_atbo06pDS_DfcArea)#",
							"dataValueType": 31
						},
						{
							"id": "48220674-39d0-5282-4b7c-6e66cb822d83",
							"code": "GridDetail_atbo06pDS_DfcAvalaibleValue",
							"caption": "#ResourceString(GridDetail_atbo06pDS_DfcAvalaibleValue)#",
							"dataValueType": 31
						},
						{
							"id": "f7af9514-a8df-2392-7784-34e50ac42fbc",
							"code": "GridDetail_atbo06pDS_DfcBlock",
							"caption": "#ResourceString(GridDetail_atbo06pDS_DfcBlock)#",
							"dataValueType": 4
						},
						{
							"id": "0490bbfa-cb6e-e15f-c8cd-0943da0217c4",
							"code": "GridDetail_atbo06pDS_DfcCollateralNumber",
							"caption": "#ResourceString(GridDetail_atbo06pDS_DfcCollateralNumber)#",
							"dataValueType": 27
						},
						{
							"id": "beb07983-60d8-5aa9-413d-e8c352a80aeb",
							"code": "GridDetail_atbo06pDS_DfcCollateralType",
							"caption": "#ResourceString(GridDetail_atbo06pDS_DfcCollateralType)#",
							"dataValueType": 10
						},
						{
							"id": "bae38a7e-4dc4-2902-92f4-74f6c233f458",
							"code": "GridDetail_atbo06pDS_DfcTypeClassification",
							"caption": "#ResourceString(GridDetail_atbo06pDS_DfcTypeClassification)#",
							"dataValueType": 10
						},
						{
							"id": "31f2a09a-b4c4-36bb-0730-da831e13f659",
							"code": "GridDetail_atbo06pDS_DfcColValue",
							"caption": "#ResourceString(GridDetail_atbo06pDS_DfcColValue)#",
							"dataValueType": 6
						},
						{
							"id": "970cf678-e42e-3b50-77b3-deea8c055d02",
							"code": "GridDetail_atbo06pDS_DfcDateClosed",
							"caption": "#ResourceString(GridDetail_atbo06pDS_DfcDateClosed)#",
							"dataValueType": 7
						},
						{
							"id": "6393a2ad-664c-be6b-02dd-c2acfb357c25",
							"code": "GridDetail_atbo06pDS_DfcDateEntered",
							"caption": "#ResourceString(GridDetail_atbo06pDS_DfcDateEntered)#",
							"dataValueType": 8
						},
						{
							"id": "6841c379-64c9-7394-9466-45132c57fc70",
							"code": "GridDetail_atbo06pDS_DfcDateOfIssue",
							"caption": "#ResourceString(GridDetail_atbo06pDS_DfcDateOfIssue)#",
							"dataValueType": 7
						},
						{
							"id": "d30a0752-3ffc-54e9-3213-5133b8a1789c",
							"code": "GridDetail_atbo06pDS_DfcDateSubmmited",
							"caption": "#ResourceString(GridDetail_atbo06pDS_DfcDateSubmmited)#",
							"dataValueType": 7
						},
						{
							"id": "dae81ae3-4ce8-e109-47c7-346ece20c042",
							"code": "GridDetail_atbo06pDS_DfcDescription",
							"caption": "#ResourceString(GridDetail_atbo06pDS_DfcDescription)#",
							"dataValueType": 30
						},
						{
							"id": "bbcf15c0-f029-bdff-78c0-abfdb08ba4c3",
							"code": "GridDetail_atbo06pDS_DfcDiscountPercentaje",
							"caption": "#ResourceString(GridDetail_atbo06pDS_DfcDiscountPercentaje)#",
							"dataValueType": 31
						},
						{
							"id": "65ab3449-280a-0cb2-6a8b-acc62a1b75ea",
							"code": "GridDetail_atbo06pDS_DfcDiscountedValue",
							"caption": "#ResourceString(GridDetail_atbo06pDS_DfcDiscountedValue)#",
							"dataValueType": 31
						},
						{
							"id": "e732db68-3592-12ec-40d7-dc8840b4cf85",
							"code": "GridDetail_atbo06pDS_DfcExpiryDate",
							"caption": "#ResourceString(GridDetail_atbo06pDS_DfcExpiryDate)#",
							"dataValueType": 7
						},
						{
							"id": "3ea51d2c-f680-6fdc-2cd7-b0facfa49979",
							"code": "GridDetail_atbo06pDS_DfcExternalEntity",
							"caption": "#ResourceString(GridDetail_atbo06pDS_DfcExternalEntity)#",
							"dataValueType": 10
						},
						{
							"id": "c1df414b-8ea1-604d-f00e-775ca4170c77",
							"code": "GridDetail_atbo06pDS_DfcFolio",
							"caption": "#ResourceString(GridDetail_atbo06pDS_DfcFolio)#",
							"dataValueType": 27
						},
						{
							"id": "b6726e2a-3db8-d5b6-f8f9-2e364a45c59a",
							"code": "GridDetail_atbo06pDS_DfcInAuction",
							"caption": "#ResourceString(GridDetail_atbo06pDS_DfcInAuction)#",
							"dataValueType": 12
						},
						{
							"id": "57de6c8e-9751-4599-2f0a-c599e03f5268",
							"code": "GridDetail_atbo06pDS_DfcLastValuationType",
							"caption": "#ResourceString(GridDetail_atbo06pDS_DfcLastValuationType)#",
							"dataValueType": 7
						},
						{
							"id": "4615e380-70e0-bc99-1844-80b4f355dd49",
							"code": "GridDetail_atbo06pDS_DfcLoanNo",
							"caption": "#ResourceString(GridDetail_atbo06pDS_DfcLoanNo)#",
							"dataValueType": 10
						},
						{
							"id": "1f291b3a-b060-a518-d8fe-0531b492923c",
							"code": "GridDetail_atbo06pDS_DfcLocationSecurity",
							"caption": "#ResourceString(GridDetail_atbo06pDS_DfcLocationSecurity)#",
							"dataValueType": 10
						},
						{
							"id": "76eceeae-b754-045f-7a61-1b2791b0eaff",
							"code": "GridDetail_atbo06pDS_DfcNotes",
							"caption": "#ResourceString(GridDetail_atbo06pDS_DfcNotes)#",
							"dataValueType": 43
						},
						{
							"id": "ae0ac409-7d2a-e46c-d139-b3c2d6fff1da",
							"code": "GridDetail_atbo06pDS_Dfcparcel",
							"caption": "#ResourceString(GridDetail_atbo06pDS_Dfcparcel)#",
							"dataValueType": 27
						},
						{
							"id": "4fd698f0-0cdf-7a01-3e66-e49b7b97a129",
							"code": "GridDetail_atbo06pDS_DfcProjectedValue",
							"caption": "#ResourceString(GridDetail_atbo06pDS_DfcProjectedValue)#",
							"dataValueType": 31
						},
						{
							"id": "f6bb1947-af46-8282-d2e9-2406bcf1cce2",
							"code": "GridDetail_atbo06pDS_DfcRegistrationDate",
							"caption": "#ResourceString(GridDetail_atbo06pDS_DfcRegistrationDate)#",
							"dataValueType": 7
						},
						{
							"id": "b71f379f-548d-d2ce-dadc-8f768131e82f",
							"code": "GridDetail_atbo06pDS_DfcRegistrationSection",
							"caption": "#ResourceString(GridDetail_atbo06pDS_DfcRegistrationSection)#",
							"dataValueType": 28
						},
						{
							"id": "c301b8fa-717c-34f9-d449-c366acdda19e",
							"code": "GridDetail_atbo06pDS_DfcSolicitor",
							"caption": "#ResourceString(GridDetail_atbo06pDS_DfcSolicitor)#",
							"dataValueType": 10
						},
						{
							"id": "bf8dd136-9766-1b79-67c1-5fc75c00ea87",
							"code": "GridDetail_atbo06pDS_DfcStatus",
							"caption": "#ResourceString(GridDetail_atbo06pDS_DfcStatus)#",
							"dataValueType": 10
						},
						{
							"id": "a77e417d-3cbb-dfd5-eceb-f51ad78925ba",
							"code": "GridDetail_atbo06pDS_DfcTermYears",
							"caption": "#ResourceString(GridDetail_atbo06pDS_DfcTermYears)#",
							"dataValueType": 4
						},
						{
							"id": "e2a90395-ec5f-e4e4-2980-cadf065e6863",
							"code": "GridDetail_atbo06pDS_DfcTermsStart",
							"caption": "#ResourceString(GridDetail_atbo06pDS_DfcTermsStart)#",
							"dataValueType": 7
						},
						{
							"id": "598d3aa0-53e9-408e-889e-8ce0aadc72e3",
							"code": "GridDetail_atbo06pDS_DfcTitleNumber",
							"caption": "#ResourceString(GridDetail_atbo06pDS_DfcTitleNumber)#",
							"dataValueType": 27
						},
						{
							"id": "8b19d60e-c46e-471b-af60-5622dfff4e4c",
							"code": "GridDetail_atbo06pDS_DfcTitleDetails",
							"caption": "#ResourceString(GridDetail_atbo06pDS_DfcTitleDetails)#",
							"dataValueType": 28
						},
						{
							"id": "193f50bf-4abd-2dc5-a0f0-039c721fc1f8",
							"code": "GridDetail_atbo06pDS_DfcTownVillage",
							"caption": "#ResourceString(GridDetail_atbo06pDS_DfcTownVillage)#",
							"dataValueType": 10
						},
						{
							"id": "90b80466-0e3b-6e11-8dab-dcd899e8d105",
							"code": "GridDetail_atbo06pDS_DfcUnit",
							"caption": "#ResourceString(GridDetail_atbo06pDS_DfcUnit)#",
							"dataValueType": 10
						},
						{
							"id": "bf1b9823-7e10-6985-c680-320f957a08e9",
							"code": "GridDetail_atbo06pDS_DfcValueSecuringLoans",
							"caption": "#ResourceString(GridDetail_atbo06pDS_DfcValueSecuringLoans)#",
							"dataValueType": 31
						},
						{
							"id": "7abd175e-0718-6d14-c345-563ad6885a75",
							"code": "GridDetail_atbo06pDS_DfcVolume",
							"caption": "#ResourceString(GridDetail_atbo06pDS_DfcVolume)#",
							"dataValueType": 27
						}
					],
					"placeholder": false
				},
				"parentName": "GridContainer_eailemy",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabContainer_Documents",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_w57ut9i_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_85aq2qj",
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
						"rowGap": "none"
					},
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
				"parentName": "TabContainer_Documents",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_RecDocsApp",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 4
					},
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_gj5szn0_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true
				},
				"parentName": "GridContainer_85aq2qj",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_gbm99us",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_RecDocsApp",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_gsvoeau",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_gbm99us",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_3no2oia",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_3no2oia_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "DocListInFinApp"
						}
					}
				},
				"parentName": "FlexContainer_gsvoeau",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_3ji5wqf",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_3ji5wqf_caption)#",
					"icon": "reload-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_r43er3zDS"
						}
					}
				},
				"parentName": "FlexContainer_gsvoeau",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_ljb0dn3",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_ljb0dn3_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_gsvoeau",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_4wbj5b5",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_4wbj5b5_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_RecDocsApp"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_ljb0dn3",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_ivkgff0",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_ivkgff0_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "DocListInFinApp"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_ljb0dn3",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_f9ezm5n",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_f9ezm5n_placeholder)#",
					"iconOnly": true,
					"targetAttributes": [
						"GridDetail_r43er3z"
					]
				},
				"parentName": "FlexContainer_gsvoeau",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_6z4pqs1",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_RecDocsApp",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_RecDocsApp",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 11
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						},
						"editable": {
							"enable": true,
							"itemsCreation": false
						}
					},
					"items": "$GridDetail_r43er3z",
					"activeRow": "$GridDetail_r43er3z_ActiveRow",
					"selectionState": "$GridDetail_r43er3z_SelectionState",
					"_selectionOptions": {
						"attribute": "GridDetail_r43er3z_SelectionState"
					},
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_r43er3zDS_Id",
					"columns": [
						{
							"id": "984d6eda-fa2f-24c0-39b1-9b46a2c856f6",
							"code": "GridDetail_r43er3zDS_Name",
							"caption": "#ResourceString(GridDetail_r43er3zDS_Name)#",
							"dataValueType": 27
						},
						{
							"id": "98364cba-6aa9-d046-186c-c0c4418109df",
							"code": "GridDetail_r43er3zDS_FinApplication",
							"caption": "#ResourceString(GridDetail_r43er3zDS_FinApplication)#",
							"dataValueType": 10
						},
						{
							"id": "ff45eb88-760d-40f2-3893-a2acbc4af123",
							"code": "GridDetail_r43er3zDS_AppForm",
							"caption": "#ResourceString(GridDetail_r43er3zDS_AppForm)#",
							"dataValueType": 10
						},
						{
							"id": "1011bc17-5202-3c38-cb18-c7e5be605ddb",
							"code": "GridDetail_r43er3zDS_CreatedBy",
							"caption": "#ResourceString(GridDetail_r43er3zDS_CreatedBy)#",
							"dataValueType": 10
						},
						{
							"id": "5be145e1-9858-2876-c7f8-eb0316c0e937",
							"code": "GridDetail_r43er3zDS_CreatedOn",
							"caption": "#ResourceString(GridDetail_r43er3zDS_CreatedOn)#",
							"dataValueType": 7
						},
						{
							"id": "c966695a-c1bf-6e95-4d48-bc3d88061ee1",
							"code": "GridDetail_r43er3zDS_Document",
							"caption": "#ResourceString(GridDetail_r43er3zDS_Document)#",
							"dataValueType": 10
						},
						{
							"id": "a6f64c6d-18a0-1227-6114-f9d375f98395",
							"code": "GridDetail_r43er3zDS_DocListGroup",
							"caption": "#ResourceString(GridDetail_r43er3zDS_DocListGroup)#",
							"dataValueType": 10
						},
						{
							"id": "259de866-c6c4-77e9-82be-a49af4c7e83e",
							"code": "GridDetail_r43er3zDS_DocumentLink",
							"caption": "#ResourceString(GridDetail_r43er3zDS_DocumentLink)#",
							"dataValueType": 10
						},
						{
							"id": "e093d7f5-6aba-b629-14bc-8cb02833d2d9",
							"code": "GridDetail_r43er3zDS_DocumentType",
							"caption": "#ResourceString(GridDetail_r43er3zDS_DocumentType)#",
							"dataValueType": 10
						},
						{
							"id": "720340f5-ec11-15ee-d37e-adfca530765e",
							"code": "GridDetail_r43er3zDS_HasFilters",
							"caption": "#ResourceString(GridDetail_r43er3zDS_HasFilters)#",
							"dataValueType": 12
						},
						{
							"id": "f1fd6452-581b-3231-bb05-3a1145901c03",
							"code": "GridDetail_r43er3zDS_FilterConfig",
							"caption": "#ResourceString(GridDetail_r43er3zDS_FilterConfig)#",
							"dataValueType": 29
						},
						{
							"id": "55d5f5f4-1d22-1058-56fc-7c84ac0033a4",
							"code": "GridDetail_r43er3zDS_Id",
							"caption": "#ResourceString(GridDetail_r43er3zDS_Id)#",
							"dataValueType": 0
						},
						{
							"id": "43a21151-abd7-5ccf-110b-541aaa8d00fb",
							"code": "GridDetail_r43er3zDS_ModifiedBy",
							"caption": "#ResourceString(GridDetail_r43er3zDS_ModifiedBy)#",
							"dataValueType": 10
						},
						{
							"id": "49c5cca1-8596-e181-7664-db54a62519d1",
							"code": "GridDetail_r43er3zDS_ModifiedOn",
							"caption": "#ResourceString(GridDetail_r43er3zDS_ModifiedOn)#",
							"dataValueType": 7
						},
						{
							"id": "631989d8-8e16-2123-0911-1ad6d42edf77",
							"code": "GridDetail_r43er3zDS_Notes",
							"caption": "#ResourceString(GridDetail_r43er3zDS_Notes)#",
							"dataValueType": 30
						},
						{
							"id": "82ca5b15-7aed-252e-6ab6-dc628171fe41",
							"code": "GridDetail_r43er3zDS_ProductCategory",
							"caption": "#ResourceString(GridDetail_r43er3zDS_ProductCategory)#",
							"dataValueType": 10
						},
						{
							"id": "ef6df961-b225-926c-b7b1-9a578122ceda",
							"code": "GridDetail_r43er3zDS_ProductType",
							"caption": "#ResourceString(GridDetail_r43er3zDS_ProductType)#",
							"dataValueType": 10
						},
						{
							"id": "232a9442-9602-fc76-e8bd-64692636425d",
							"code": "GridDetail_r43er3zDS_IsRequired",
							"caption": "#ResourceString(GridDetail_r43er3zDS_IsRequired)#",
							"dataValueType": 12
						},
						{
							"id": "a6910fe2-2ae6-9cdd-6299-ff5d3bbf89b6",
							"code": "GridDetail_r43er3zDS_ParticipantRole",
							"caption": "#ResourceString(GridDetail_r43er3zDS_ParticipantRole)#",
							"dataValueType": 10
						},
						{
							"id": "927b3c2c-d51b-7641-69db-8b641974d2d3",
							"code": "GridDetail_r43er3zDS_DocumentListStage",
							"caption": "#ResourceString(GridDetail_r43er3zDS_DocumentListStage)#",
							"dataValueType": 10
						},
						{
							"id": "f7cada92-85f9-0d69-e9f1-7266f6769c54",
							"code": "GridDetail_r43er3zDS_SysModuleReport",
							"caption": "#ResourceString(GridDetail_r43er3zDS_SysModuleReport)#",
							"dataValueType": 10
						}
					],
					"placeholder": false,
					"bulkActions": []
				},
				"parentName": "GridContainer_6z4pqs1",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_r43er3z_AddTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Add tag",
					"icon": "tag-icon",
					"clicked": {
						"request": "crt.AddTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_r43er3zDS",
							"filters": "$GridDetail_r43er3z | crt.ToCollectionFilters : 'GridDetail_r43er3z' : $GridDetail_r43er3z_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_r43er3z_SelectionState"
						}
					},
					"items": []
				},
				"parentName": "GridDetail_RecDocsApp",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_r43er3z_RemoveTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Remove tag",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.RemoveTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_r43er3zDS",
							"filters": "$GridDetail_r43er3z | crt.ToCollectionFilters : 'GridDetail_r43er3z' : $GridDetail_r43er3z_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_r43er3z_SelectionState"
						}
					}
				},
				"parentName": "GridDetail_r43er3z_AddTagsBulkAction",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_r43er3z_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Export to Excel",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_r43er3z",
							"filters": "$GridDetail_r43er3z | crt.ToCollectionFilters : 'GridDetail_r43er3z' : $GridDetail_r43er3z_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_r43er3z_SelectionState"
						}
					}
				},
				"parentName": "GridDetail_RecDocsApp",
				"propertyName": "bulkActions",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetail_r43er3z_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Delete",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_r43er3zDS",
							"filters": "$GridDetail_r43er3z | crt.ToCollectionFilters : 'GridDetail_r43er3z' : $GridDetail_r43er3z_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_r43er3z_SelectionState"
						}
					}
				},
				"parentName": "GridDetail_RecDocsApp",
				"propertyName": "bulkActions",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "TabContainer_Attachments",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_b5ch21q_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "GridContainer_vh5m6kn",
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
				"parentName": "TabContainer_Attachments",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_DocAttachments",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_6k75npf_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true,
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "GridContainer_vh5m6kn",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_byc5aic",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_DocAttachments",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_vemxerg",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_byc5aic",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_h9r2b0w",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_h9r2b0w_caption)#",
					"icon": "upload-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.UploadFileRequest",
						"params": {
							"viewElementName": "FileList_DocAttachments"
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_vemxerg",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_nq0pgva",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_nq0pgva_caption)#",
					"icon": "reload-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "FileList_0tdn74wDS"
						}
					}
				},
				"parentName": "FlexContainer_vemxerg",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_hmqwfin",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_hmqwfin_placeholder)#",
					"targetAttributes": [
						"FileList_0tdn74w"
					]
				},
				"parentName": "FlexContainer_vemxerg",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_hte3z7y",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_DocAttachments",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FileList_DocAttachments",
				"values": {
					"type": "crt.FileList",
					"masterRecordColumnValue": "$Id",
					"recordColumnName": "FinApplication",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 10
					},
					"items": "$FileList_0tdn74w",
					"primaryColumnName": "FileList_0tdn74wDS_Id",
					"columns": [
						{
							"id": "0726ff7a-2088-147e-d021-771c92795826",
							"code": "FileList_0tdn74wDS_Name",
							"caption": "#ResourceString(FileList_0tdn74wDS_Name)#",
							"dataValueType": 28
						},
						{
							"id": "e36176f3-d8b2-a335-d4ef-d600cbb20dcc",
							"code": "FileList_0tdn74wDS_CreatedOn",
							"caption": "#ResourceString(FileList_0tdn74wDS_CreatedOn)#",
							"dataValueType": 7
						},
						{
							"id": "649d01ec-9cf7-de69-c51f-1022958cc6fb",
							"code": "FileList_0tdn74wDS_CreatedBy",
							"caption": "#ResourceString(FileList_0tdn74wDS_CreatedBy)#",
							"dataValueType": 10
						},
						{
							"id": "f46a288a-1870-844e-b83d-e8c59fb3a09c",
							"code": "FileList_0tdn74wDS_Size",
							"caption": "#ResourceString(FileList_0tdn74wDS_Size)#",
							"dataValueType": 4
						}
					],
					"visible": true,
					"viewType": "list",
					"tileSize": "medium"
				},
				"parentName": "GridContainer_hte3z7y",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"Number": {
						"modelConfig": {
							"path": "PDS.Number"
						}
					},
					"PDS_FillingDate_1d9uqee": {
						"modelConfig": {
							"path": "PDS.FillingDate"
						}
					},
					"PDS_Division_v2g2xg0": {
						"modelConfig": {
							"path": "PDS.Division"
						}
					},
					"PDS_Owner_1pnziuc": {
						"modelConfig": {
							"path": "PDS.Owner"
						}
					},
					"PDS_Source_qpdj4aa": {
						"modelConfig": {
							"path": "PDS.Source"
						}
					},
					"PDS_Account_pzf1fgg": {
						"modelConfig": {
							"path": "PDS.Account"
						}
					},
					"PDS_Contact_hu61lfc": {
						"modelConfig": {
							"path": "PDS.Contact"
						}
					},
					"PDS_DfcCustomerType_qrgzuqv": {
						"modelConfig": {
							"path": "PDS.DfcCustomerType"
						}
					},
					"PDS_Stage_i1q3kei": {
						"modelConfig": {
							"path": "PDS.Stage"
						}
					},
					"PDS_Status_nhfeccw": {
						"modelConfig": {
							"path": "PDS.Status"
						}
					},
					"PDS_DfcClient_clv0yy1": {
						"modelConfig": {
							"path": "PDS.DfcClient"
						}
					},
					"PDS_Product_aflvaop": {
						"modelConfig": {
							"path": "PDS.Product"
						}
					},
					"PDS_ProductName": {
						"modelConfig": {
							"path": "PDS.ProductName"
						}
					},
					"PDS_ProductType_5fr1msa": {
						"modelConfig": {
							"path": "PDS.ProductType"
						}
					},
					"PDS_ProductTypeName": {
						"modelConfig": {
							"path": "PDS.ProductTypeName"
						}
					},
					"PDS_ProductType_ccpv2gg": {
						"modelConfig": {
							"path": "PDS.ProductType"
						}
					},
					"PDS_DfcColumn3_l2y7zuq": {
						"modelConfig": {
							"path": "PDS.DfcColumn3"
						}
					},
					"PDS_DfcPurpose_iichd6d": {
						"modelConfig": {
							"path": "PDS.DfcPurpose"
						}
					},
					"PDS_DfcReqAmt_sb7sqaj": {
						"modelConfig": {
							"path": "PDS.DfcReqAmt"
						}
					},
					"PDS_DfcSector_zi154a3": {
						"modelConfig": {
							"path": "PDS.DfcSector"
						}
					},
					"PDS_DfcSubSector_4fq4lqz": {
						"modelConfig": {
							"path": "PDS.DfcSubSector"
						}
					},
					"PDS_DfcSubSector_e2h6c4l": {
						"modelConfig": {
							"path": "PDS.DfcSubSector"
						}
					},
					"GridDetail_puci257": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_puci257DS"
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_puci257DS_Participant": {
									"modelConfig": {
										"path": "GridDetail_puci257DS.Participant"
									}
								},
								"GridDetail_puci257DS_ParticipantRole": {
									"modelConfig": {
										"path": "GridDetail_puci257DS.ParticipantRole"
									}
								},
								"GridDetail_puci257DS_BirthDate": {
									"modelConfig": {
										"path": "GridDetail_puci257DS.BirthDate"
									}
								},
								"GridDetail_puci257DS_MaritalStatus": {
									"modelConfig": {
										"path": "GridDetail_puci257DS.MaritalStatus"
									}
								},
								"GridDetail_puci257DS_PlaceOfBirth": {
									"modelConfig": {
										"path": "GridDetail_puci257DS.PlaceOfBirth"
									}
								},
								"GridDetail_puci257DS_DfcAge": {
									"modelConfig": {
										"path": "GridDetail_puci257DS.DfcAge"
									}
								},
								"GridDetail_puci257DS_Id": {
									"modelConfig": {
										"path": "GridDetail_puci257DS.Id"
									}
								}
							}
						}
					},
					"GridDetail_qw3hbjh": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_qw3hbjhDS",
							"filterAttributes": [
								{
									"loadOnChange": true,
									"name": "GridDetail_qw3hbjh_PredefinedFilter"
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_qw3hbjhDS_Specification": {
									"modelConfig": {
										"path": "GridDetail_qw3hbjhDS.Specification"
									}
								},
								"GridDetail_qw3hbjhDS_DisplayValue": {
									"modelConfig": {
										"path": "GridDetail_qw3hbjhDS.DisplayValue"
									}
								},
								"GridDetail_qw3hbjhDS_CreatedBy": {
									"modelConfig": {
										"path": "GridDetail_qw3hbjhDS.CreatedBy"
									}
								},
								"GridDetail_qw3hbjhDS_CreatedOn": {
									"modelConfig": {
										"path": "GridDetail_qw3hbjhDS.CreatedOn"
									}
								},
								"GridDetail_qw3hbjhDS_ModifiedBy": {
									"modelConfig": {
										"path": "GridDetail_qw3hbjhDS.ModifiedBy"
									}
								},
								"GridDetail_qw3hbjhDS_ModifiedOn": {
									"modelConfig": {
										"path": "GridDetail_qw3hbjhDS.ModifiedOn"
									}
								},
								"GridDetail_qw3hbjhDS_DfcParametertype": {
									"modelConfig": {
										"path": "GridDetail_qw3hbjhDS.DfcParametertype"
									}
								},
								"GridDetail_qw3hbjhDS_Id": {
									"modelConfig": {
										"path": "GridDetail_qw3hbjhDS.Id"
									}
								}
							}
						}
					},
					"PDS_DfcInterestRate_m3yhhrh": {
						"modelConfig": {
							"path": "PDS.DfcInterestRate"
						}
					},
					"PDS_DfcPeriodType_4q50282": {
						"modelConfig": {
							"path": "PDS.DfcPeriodType"
						}
					},
					"PDS_DfcTerm_wv82jgc": {
						"modelConfig": {
							"path": "PDS.DfcTerm"
						}
					},
					"PDS_DfcClientPhoto_ovy6g6v": {
						"modelConfig": {
							"path": "PDS.DfcClientPhoto"
						}
					},
					"FinApplication": {
						"modelConfig": {
							"path": "PDS.Id"
						}
					},
					"PDS_ProductCategory_ygsp5bs": {
						"modelConfig": {
							"path": "PDS.ProductCategory"
						}
					},
					"PDS_DfcProductSector_txc3kq3": {
						"modelConfig": {
							"path": "PDS.DfcProductSector"
						}
					},
					"PDS_DfcSector_csy1jrh": {
						"modelConfig": {
							"path": "PDS.DfcSector"
						}
					},
					"GridDetail_qw3hbjh_PredefinedFilter": {
						"value": {
							"items": {
								"452333fc-fe05-4d43-bd14-ba2f0119f998": {
									"filterType": 4,
									"comparisonType": 4,
									"isEnabled": true,
									"trimDateTimeParameterToDate": false,
									"leftExpression": {
										"expressionType": 0,
										"columnPath": "DfcParametertype"
									},
									"isAggregative": false,
									"dataValueType": 10,
									"referenceSchemaName": "SpecificationType",
									"rightExpressions": [
										{
											"expressionType": 2,
											"parameter": {
												"dataValueType": 10,
												"value": {
													"Name": "Decimal",
													"Id": "beb46531-4f29-452c-be18-1ed5f1aa8b80",
													"value": "beb46531-4f29-452c-be18-1ed5f1aa8b80",
													"displayValue": "Decimal"
												}
											}
										}
									]
								},
								"91938af3-aec2-41f9-bff6-9c96749ba0b2": {
									"filterType": 4,
									"comparisonType": 4,
									"isEnabled": true,
									"trimDateTimeParameterToDate": false,
									"leftExpression": {
										"expressionType": 0,
										"columnPath": "DfcParametertype"
									},
									"isAggregative": false,
									"dataValueType": 10,
									"referenceSchemaName": "SpecificationType",
									"rightExpressions": [
										{
											"expressionType": 2,
											"parameter": {
												"dataValueType": 10,
												"value": {
													"Name": "Integer",
													"Id": "2212241a-71eb-468b-a3d5-c0f39dfe51c9",
													"value": "2212241a-71eb-468b-a3d5-c0f39dfe51c9",
													"displayValue": "Integer"
												}
											}
										}
									]
								}
							},
							"logicalOperation": 0,
							"isEnabled": true,
							"filterType": 6,
							"rootSchemaName": "FinApplicationSpec"
						}
					},
					"PDS_OpportunityCondition_grlqn8k": {
						"modelConfig": {
							"path": "PDS.OpportunityCondition"
						}
					},
					"GridDetail_r43er3z": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_r43er3zDS"
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_r43er3zDS_Name": {
									"modelConfig": {
										"path": "GridDetail_r43er3zDS.Name"
									}
								},
								"GridDetail_r43er3zDS_FinApplication": {
									"modelConfig": {
										"path": "GridDetail_r43er3zDS.FinApplication"
									}
								},
								"GridDetail_r43er3zDS_AppForm": {
									"modelConfig": {
										"path": "GridDetail_r43er3zDS.AppForm"
									}
								},
								"GridDetail_r43er3zDS_CreatedBy": {
									"modelConfig": {
										"path": "GridDetail_r43er3zDS.CreatedBy"
									}
								},
								"GridDetail_r43er3zDS_CreatedOn": {
									"modelConfig": {
										"path": "GridDetail_r43er3zDS.CreatedOn"
									}
								},
								"GridDetail_r43er3zDS_Document": {
									"modelConfig": {
										"path": "GridDetail_r43er3zDS.Document"
									}
								},
								"GridDetail_r43er3zDS_DocListGroup": {
									"modelConfig": {
										"path": "GridDetail_r43er3zDS.DocListGroup"
									}
								},
								"GridDetail_r43er3zDS_DocumentLink": {
									"modelConfig": {
										"path": "GridDetail_r43er3zDS.DocumentLink"
									}
								},
								"GridDetail_r43er3zDS_DocumentType": {
									"modelConfig": {
										"path": "GridDetail_r43er3zDS.DocumentType"
									}
								},
								"GridDetail_r43er3zDS_HasFilters": {
									"modelConfig": {
										"path": "GridDetail_r43er3zDS.HasFilters"
									}
								},
								"GridDetail_r43er3zDS_FilterConfig": {
									"modelConfig": {
										"path": "GridDetail_r43er3zDS.FilterConfig"
									}
								},
								"GridDetail_r43er3zDS_Id": {
									"modelConfig": {
										"path": "GridDetail_r43er3zDS.Id"
									}
								},
								"GridDetail_r43er3zDS_ModifiedBy": {
									"modelConfig": {
										"path": "GridDetail_r43er3zDS.ModifiedBy"
									}
								},
								"GridDetail_r43er3zDS_ModifiedOn": {
									"modelConfig": {
										"path": "GridDetail_r43er3zDS.ModifiedOn"
									}
								},
								"GridDetail_r43er3zDS_Notes": {
									"modelConfig": {
										"path": "GridDetail_r43er3zDS.Notes"
									}
								},
								"GridDetail_r43er3zDS_ProductCategory": {
									"modelConfig": {
										"path": "GridDetail_r43er3zDS.ProductCategory"
									}
								},
								"GridDetail_r43er3zDS_ProductType": {
									"modelConfig": {
										"path": "GridDetail_r43er3zDS.ProductType"
									}
								},
								"GridDetail_r43er3zDS_IsRequired": {
									"modelConfig": {
										"path": "GridDetail_r43er3zDS.IsRequired"
									}
								},
								"GridDetail_r43er3zDS_ParticipantRole": {
									"modelConfig": {
										"path": "GridDetail_r43er3zDS.ParticipantRole"
									}
								},
								"GridDetail_r43er3zDS_DocumentListStage": {
									"modelConfig": {
										"path": "GridDetail_r43er3zDS.DocumentListStage"
									}
								},
								"GridDetail_r43er3zDS_SysModuleReport": {
									"modelConfig": {
										"path": "GridDetail_r43er3zDS.SysModuleReport"
									}
								}
							}
						}
					},
					"FileList_0tdn74w": {
						"isCollection": true,
						"modelConfig": {
							"path": "FileList_0tdn74wDS",
							"sortingConfig": {
								"default": [
									{
										"columnName": "CreatedOn",
										"direction": "desc"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"FileList_0tdn74wDS_Name": {
									"modelConfig": {
										"path": "FileList_0tdn74wDS.Name"
									}
								},
								"FileList_0tdn74wDS_CreatedOn": {
									"modelConfig": {
										"path": "FileList_0tdn74wDS.CreatedOn"
									}
								},
								"FileList_0tdn74wDS_CreatedBy": {
									"modelConfig": {
										"path": "FileList_0tdn74wDS.CreatedBy"
									}
								},
								"FileList_0tdn74wDS_Size": {
									"modelConfig": {
										"path": "FileList_0tdn74wDS.Size"
									}
								},
								"FileList_0tdn74wDS_Id": {
									"modelConfig": {
										"path": "FileList_0tdn74wDS.Id"
									}
								}
							}
						}
					},
					"PDS_DfcInstallmentAmt_9mp5g18": {
						"modelConfig": {
							"path": "PDS.DfcInstallmentAmt"
						}
					},
					"PDS_DfcLoanType_3plnppm": {
						"modelConfig": {
							"path": "PDS.DfcLoanType"
						}
					},
					"PDS_DfcInterestType_si2jic2": {
						"modelConfig": {
							"path": "PDS.DfcInterestType"
						}
					},
					"PDS_DfcIntCalcMethod_ubywopx": {
						"modelConfig": {
							"path": "PDS.DfcIntCalcMethod"
						}
					},
					"PDS_DfcGracePeriodIntMethod_ir9joaa": {
						"modelConfig": {
							"path": "PDS.DfcGracePeriodIntMethod"
						}
					},
					"PDS_DfcLatePymtPenaltyFeeCalc_xpx24sd": {
						"modelConfig": {
							"path": "PDS.DfcLatePymtPenaltyFeeCalc"
						}
					},
					"PDS_CreatedBy_eh6s3za": {
						"modelConfig": {
							"path": "PDS.CreatedBy"
						}
					},
					"PDS_DfcLoanOfficer_1sd81fa": {
						"modelConfig": {
							"path": "PDS.DfcLoanOfficer"
						}
					},
					"PDS_DfcCreditOfficer_p5oo54x": {
						"modelConfig": {
							"path": "PDS.DfcCreditOfficer"
						}
					},
					"PDS_DfcRepaymentCycle_wamfrj9": {
						"modelConfig": {
							"path": "PDS.DfcRepaymentCycle"
						}
					},
					"PDS_DfcPaymentFrequency_kjsmyp1": {
						"modelConfig": {
							"path": "PDS.DfcPaymentFrequency"
						}
					},
					"DataGrid_xlei2sm": {
						"isCollection": true,
						"modelConfig": {
							"path": "DataGrid_xlei2smDS"
						},
						"viewModelConfig": {
							"attributes": {
								"DataGrid_xlei2smDS_DfcAmortizationNumber": {
									"modelConfig": {
										"path": "DataGrid_xlei2smDS.DfcAmortizationNumber"
									}
								},
								"DataGrid_xlei2smDS_DfcPeriodNumber": {
									"modelConfig": {
										"path": "DataGrid_xlei2smDS.DfcPeriodNumber"
									}
								},
								"DataGrid_xlei2smDS_DfcAmortizationDate": {
									"modelConfig": {
										"path": "DataGrid_xlei2smDS.DfcAmortizationDate"
									}
								},
								"DataGrid_xlei2smDS_DfcAmortizationBeginningBalance": {
									"modelConfig": {
										"path": "DataGrid_xlei2smDS.DfcAmortizationBeginningBalance"
									}
								},
								"DataGrid_xlei2smDS_DfcAmortizationEndingBalance": {
									"modelConfig": {
										"path": "DataGrid_xlei2smDS.DfcAmortizationEndingBalance"
									}
								},
								"DataGrid_xlei2smDS_DfcCurrentDue": {
									"modelConfig": {
										"path": "DataGrid_xlei2smDS.DfcCurrentDue"
									}
								},
								"DataGrid_xlei2smDS_DfcAmortizationInterest": {
									"modelConfig": {
										"path": "DataGrid_xlei2smDS.DfcAmortizationInterest"
									}
								},
								"DataGrid_xlei2smDS_DfcPaid": {
									"modelConfig": {
										"path": "DataGrid_xlei2smDS.DfcPaid"
									}
								},
								"DataGrid_xlei2smDS_DfcAmortizationPrincipal": {
									"modelConfig": {
										"path": "DataGrid_xlei2smDS.DfcAmortizationPrincipal"
									}
								},
								"DataGrid_xlei2smDS_Id": {
									"modelConfig": {
										"path": "DataGrid_xlei2smDS.Id"
									}
								}
							}
						}
					},
					"PDS_DfcLegacyId_j6t1hrb": {
						"modelConfig": {
							"path": "PDS.DfcLegacyId"
						}
					},
					"PDS_DfcRepaymentMethod_snnvcxs": {
						"modelConfig": {
							"path": "PDS.DfcRepaymentMethod"
						}
					},
					"GridDetail_atbo06p": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_atbo06pDS"
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_atbo06pDS_DfcCollateralNumber": {
									"modelConfig": {
										"path": "GridDetail_atbo06pDS.DfcCollateralNumber"
									}
								},
								"GridDetail_atbo06pDS_DfcAddressOfProperty": {
									"modelConfig": {
										"path": "GridDetail_atbo06pDS.DfcAddressOfProperty"
									}
								},
								"GridDetail_atbo06pDS_DfcArea": {
									"modelConfig": {
										"path": "GridDetail_atbo06pDS.DfcArea"
									}
								},
								"GridDetail_atbo06pDS_DfcAvalaibleValue": {
									"modelConfig": {
										"path": "GridDetail_atbo06pDS.DfcAvalaibleValue"
									}
								},
								"GridDetail_atbo06pDS_DfcBlock": {
									"modelConfig": {
										"path": "GridDetail_atbo06pDS.DfcBlock"
									}
								},
								"GridDetail_atbo06pDS_DfcCollateralType": {
									"modelConfig": {
										"path": "GridDetail_atbo06pDS.DfcCollateralType"
									}
								},
								"GridDetail_atbo06pDS_DfcTypeClassification": {
									"modelConfig": {
										"path": "GridDetail_atbo06pDS.DfcTypeClassification"
									}
								},
								"GridDetail_atbo06pDS_DfcColValue": {
									"modelConfig": {
										"path": "GridDetail_atbo06pDS.DfcColValue"
									}
								},
								"GridDetail_atbo06pDS_DfcDateClosed": {
									"modelConfig": {
										"path": "GridDetail_atbo06pDS.DfcDateClosed"
									}
								},
								"GridDetail_atbo06pDS_DfcDateEntered": {
									"modelConfig": {
										"path": "GridDetail_atbo06pDS.DfcDateEntered"
									}
								},
								"GridDetail_atbo06pDS_DfcDateOfIssue": {
									"modelConfig": {
										"path": "GridDetail_atbo06pDS.DfcDateOfIssue"
									}
								},
								"GridDetail_atbo06pDS_DfcDateSubmmited": {
									"modelConfig": {
										"path": "GridDetail_atbo06pDS.DfcDateSubmmited"
									}
								},
								"GridDetail_atbo06pDS_DfcDescription": {
									"modelConfig": {
										"path": "GridDetail_atbo06pDS.DfcDescription"
									}
								},
								"GridDetail_atbo06pDS_DfcDiscountPercentaje": {
									"modelConfig": {
										"path": "GridDetail_atbo06pDS.DfcDiscountPercentaje"
									}
								},
								"GridDetail_atbo06pDS_DfcDiscountedValue": {
									"modelConfig": {
										"path": "GridDetail_atbo06pDS.DfcDiscountedValue"
									}
								},
								"GridDetail_atbo06pDS_DfcExpiryDate": {
									"modelConfig": {
										"path": "GridDetail_atbo06pDS.DfcExpiryDate"
									}
								},
								"GridDetail_atbo06pDS_DfcExternalEntity": {
									"modelConfig": {
										"path": "GridDetail_atbo06pDS.DfcExternalEntity"
									}
								},
								"GridDetail_atbo06pDS_DfcFolio": {
									"modelConfig": {
										"path": "GridDetail_atbo06pDS.DfcFolio"
									}
								},
								"GridDetail_atbo06pDS_DfcInAuction": {
									"modelConfig": {
										"path": "GridDetail_atbo06pDS.DfcInAuction"
									}
								},
								"GridDetail_atbo06pDS_DfcLastValuationType": {
									"modelConfig": {
										"path": "GridDetail_atbo06pDS.DfcLastValuationType"
									}
								},
								"GridDetail_atbo06pDS_DfcLoanNo": {
									"modelConfig": {
										"path": "GridDetail_atbo06pDS.DfcLoanNo"
									}
								},
								"GridDetail_atbo06pDS_DfcLocationSecurity": {
									"modelConfig": {
										"path": "GridDetail_atbo06pDS.DfcLocationSecurity"
									}
								},
								"GridDetail_atbo06pDS_DfcNotes": {
									"modelConfig": {
										"path": "GridDetail_atbo06pDS.DfcNotes"
									}
								},
								"GridDetail_atbo06pDS_Dfcparcel": {
									"modelConfig": {
										"path": "GridDetail_atbo06pDS.Dfcparcel"
									}
								},
								"GridDetail_atbo06pDS_DfcProjectedValue": {
									"modelConfig": {
										"path": "GridDetail_atbo06pDS.DfcProjectedValue"
									}
								},
								"GridDetail_atbo06pDS_DfcRegistrationDate": {
									"modelConfig": {
										"path": "GridDetail_atbo06pDS.DfcRegistrationDate"
									}
								},
								"GridDetail_atbo06pDS_DfcRegistrationSection": {
									"modelConfig": {
										"path": "GridDetail_atbo06pDS.DfcRegistrationSection"
									}
								},
								"GridDetail_atbo06pDS_DfcSolicitor": {
									"modelConfig": {
										"path": "GridDetail_atbo06pDS.DfcSolicitor"
									}
								},
								"GridDetail_atbo06pDS_DfcStatus": {
									"modelConfig": {
										"path": "GridDetail_atbo06pDS.DfcStatus"
									}
								},
								"GridDetail_atbo06pDS_DfcTermYears": {
									"modelConfig": {
										"path": "GridDetail_atbo06pDS.DfcTermYears"
									}
								},
								"GridDetail_atbo06pDS_DfcTermsStart": {
									"modelConfig": {
										"path": "GridDetail_atbo06pDS.DfcTermsStart"
									}
								},
								"GridDetail_atbo06pDS_DfcTitleNumber": {
									"modelConfig": {
										"path": "GridDetail_atbo06pDS.DfcTitleNumber"
									}
								},
								"GridDetail_atbo06pDS_DfcTitleDetails": {
									"modelConfig": {
										"path": "GridDetail_atbo06pDS.DfcTitleDetails"
									}
								},
								"GridDetail_atbo06pDS_DfcTownVillage": {
									"modelConfig": {
										"path": "GridDetail_atbo06pDS.DfcTownVillage"
									}
								},
								"GridDetail_atbo06pDS_DfcUnit": {
									"modelConfig": {
										"path": "GridDetail_atbo06pDS.DfcUnit"
									}
								},
								"GridDetail_atbo06pDS_DfcValueSecuringLoans": {
									"modelConfig": {
										"path": "GridDetail_atbo06pDS.DfcValueSecuringLoans"
									}
								},
								"GridDetail_atbo06pDS_DfcVolume": {
									"modelConfig": {
										"path": "GridDetail_atbo06pDS.DfcVolume"
									}
								},
								"GridDetail_atbo06pDS_Id": {
									"modelConfig": {
										"path": "GridDetail_atbo06pDS.Id"
									}
								}
							}
						}
					},
					"DfcLoanApp": {
						"modelConfig": {
							"path": "PDS.Id"
						}
					},
					"DataGrid_ljfwug6": {
						"isCollection": true,
						"modelConfig": {
							"path": "DataGrid_ljfwug6DS",
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "Specification"
									}
								]
							},
							"filterAttributes": [
								{
									"loadOnChange": true,
									"name": "DataGrid_ljfwug6_PredefinedFilter"
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"DataGrid_ljfwug6DS_Specification": {
									"modelConfig": {
										"path": "DataGrid_ljfwug6DS.Specification"
									}
								},
								"DataGrid_ljfwug6DS_DisplayValue": {
									"modelConfig": {
										"path": "DataGrid_ljfwug6DS.DisplayValue"
									}
								},
								"DataGrid_ljfwug6DS_CreatedBy": {
									"modelConfig": {
										"path": "DataGrid_ljfwug6DS.CreatedBy"
									}
								},
								"DataGrid_ljfwug6DS_CreatedOn": {
									"modelConfig": {
										"path": "DataGrid_ljfwug6DS.CreatedOn"
									}
								},
								"DataGrid_ljfwug6DS_ModifiedBy": {
									"modelConfig": {
										"path": "DataGrid_ljfwug6DS.ModifiedBy"
									}
								},
								"DataGrid_ljfwug6DS_ModifiedOn": {
									"modelConfig": {
										"path": "DataGrid_ljfwug6DS.ModifiedOn"
									}
								},
								"DataGrid_ljfwug6DS_DfcParametertype": {
									"modelConfig": {
										"path": "DataGrid_ljfwug6DS.DfcParametertype"
									}
								},
								"DataGrid_ljfwug6DS_Id": {
									"modelConfig": {
										"path": "DataGrid_ljfwug6DS.Id"
									}
								}
							}
						}
					},
					"DataGrid_ljfwug6_PredefinedFilter": {
						"value": {
							"items": {
								"c960b523-bb02-4304-a4a5-ed8bb552596b": {
									"filterType": 4,
									"comparisonType": 3,
									"isEnabled": true,
									"trimDateTimeParameterToDate": false,
									"leftExpression": {
										"expressionType": 0,
										"columnPath": "DfcParametertype"
									},
									"isAggregative": false,
									"dataValueType": 10,
									"referenceSchemaName": "SpecificationType",
									"rightExpressions": [
										{
											"expressionType": 2,
											"parameter": {
												"dataValueType": 10,
												"value": {
													"Name": "Decimal",
													"Id": "beb46531-4f29-452c-be18-1ed5f1aa8b80",
													"value": "beb46531-4f29-452c-be18-1ed5f1aa8b80",
													"displayValue": "Decimal"
												}
											}
										}
									]
								},
								"20eef576-0e26-4c9b-a864-d83a43ebf404": {
									"filterType": 4,
									"comparisonType": 3,
									"isEnabled": true,
									"trimDateTimeParameterToDate": false,
									"leftExpression": {
										"expressionType": 0,
										"columnPath": "DfcParametertype"
									},
									"isAggregative": false,
									"dataValueType": 10,
									"referenceSchemaName": "SpecificationType",
									"rightExpressions": [
										{
											"expressionType": 2,
											"parameter": {
												"dataValueType": 10,
												"value": {
													"Name": "Integer",
													"Id": "2212241a-71eb-468b-a3d5-c0f39dfe51c9",
													"value": "2212241a-71eb-468b-a3d5-c0f39dfe51c9",
													"displayValue": "Integer"
												}
											}
										}
									]
								}
							},
							"logicalOperation": 1,
							"isEnabled": true,
							"filterType": 6,
							"rootSchemaName": "FinApplicationSpec"
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
						"GridDetail_puci257DS": [
							{
								"attributePath": "FinApplication",
								"relationPath": "PDS.Id"
							}
						],
						"GridDetail_qw3hbjhDS": [
							{
								"attributePath": "FinApplication",
								"relationPath": "PDS.Id"
							}
						],
						"GridDetail_r43er3zDS": [
							{
								"attributePath": "FinApplication",
								"relationPath": "PDS.Id"
							}
						],
						"DataGrid_xlei2smDS": [
							{
								"attributePath": "DfcAmortizationApplicationNumber",
								"relationPath": "PDS.Id"
							}
						],
						"GridDetail_atbo06pDS": [
							{
								"attributePath": "DfcLoanApp",
								"relationPath": "PDS.Id"
							}
						],
						"DataGrid_ljfwug6DS": [
							{
								"attributePath": "FinApplication",
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
							"entitySchemaName": "FinApplication",
							"attributes": {}
						},
						"scope": "page"
					},
					"GridDetail_puci257DS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "AppForm",
							"attributes": {
								"Participant": {
									"path": "Participant"
								},
								"ParticipantRole": {
									"path": "ParticipantRole"
								},
								"BirthDate": {
									"path": "BirthDate"
								},
								"MaritalStatus": {
									"path": "MaritalStatus"
								},
								"PlaceOfBirth": {
									"path": "PlaceOfBirth"
								},
								"DfcAge": {
									"path": "DfcAge"
								}
							}
						}
					},
					"GridDetail_qw3hbjhDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "FinApplicationSpec",
							"attributes": {
								"Specification": {
									"path": "Specification"
								},
								"DisplayValue": {
									"path": "DisplayValue"
								},
								"CreatedBy": {
									"path": "CreatedBy"
								},
								"CreatedOn": {
									"path": "CreatedOn"
								},
								"ModifiedBy": {
									"path": "ModifiedBy"
								},
								"ModifiedOn": {
									"path": "ModifiedOn"
								},
								"DfcParametertype": {
									"path": "DfcParametertype"
								}
							}
						}
					},
					"GridDetail_r43er3zDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "DocListInFinApp",
							"attributes": {
								"Name": {
									"path": "Name"
								},
								"FinApplication": {
									"path": "FinApplication"
								},
								"AppForm": {
									"path": "AppForm"
								},
								"CreatedBy": {
									"path": "CreatedBy"
								},
								"CreatedOn": {
									"path": "CreatedOn"
								},
								"Document": {
									"path": "Document"
								},
								"DocListGroup": {
									"path": "DocListGroup"
								},
								"DocumentLink": {
									"path": "DocumentLink"
								},
								"DocumentType": {
									"path": "DocumentType"
								},
								"HasFilters": {
									"path": "HasFilters"
								},
								"FilterConfig": {
									"path": "FilterConfig"
								},
								"Id": {
									"path": "Id"
								},
								"ModifiedBy": {
									"path": "ModifiedBy"
								},
								"ModifiedOn": {
									"path": "ModifiedOn"
								},
								"Notes": {
									"path": "Notes"
								},
								"ProductCategory": {
									"path": "ProductCategory"
								},
								"ProductType": {
									"path": "ProductType"
								},
								"IsRequired": {
									"path": "IsRequired"
								},
								"ParticipantRole": {
									"path": "ParticipantRole"
								},
								"DocumentListStage": {
									"path": "DocumentListStage"
								},
								"SysModuleReport": {
									"path": "SysModuleReport"
								}
							}
						}
					},
					"FileList_0tdn74wDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "FinApplicationFile",
							"attributes": {
								"Name": {
									"path": "Name"
								},
								"CreatedOn": {
									"path": "CreatedOn"
								},
								"CreatedBy": {
									"path": "CreatedBy"
								},
								"Size": {
									"path": "Size"
								}
							}
						}
					},
					"FileList_DocAttachmentsDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "SysFile"
						}
					},
					"DataGrid_xlei2smDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "DfcLoanAmortizationTable",
							"attributes": {
								"DfcAmortizationNumber": {
									"path": "DfcAmortizationNumber"
								},
								"DfcPeriodNumber": {
									"path": "DfcPeriodNumber"
								},
								"DfcAmortizationDate": {
									"path": "DfcAmortizationDate"
								},
								"DfcAmortizationBeginningBalance": {
									"path": "DfcAmortizationBeginningBalance"
								},
								"DfcAmortizationEndingBalance": {
									"path": "DfcAmortizationEndingBalance"
								},
								"DfcCurrentDue": {
									"path": "DfcCurrentDue"
								},
								"DfcAmortizationInterest": {
									"path": "DfcAmortizationInterest"
								},
								"DfcPaid": {
									"path": "DfcPaid"
								},
								"DfcAmortizationPrincipal": {
									"path": "DfcAmortizationPrincipal"
								}
							}
						}
					},
					"GridDetail_atbo06pDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "DfcCollaterals",
							"attributes": {
								"DfcCollateralNumber": {
									"path": "DfcCollateralNumber"
								},
								"DfcAddressOfProperty": {
									"path": "DfcAddressOfProperty"
								},
								"DfcArea": {
									"path": "DfcArea"
								},
								"DfcAvalaibleValue": {
									"path": "DfcAvalaibleValue"
								},
								"DfcBlock": {
									"path": "DfcBlock"
								},
								"DfcCollateralType": {
									"path": "DfcCollateralType"
								},
								"DfcTypeClassification": {
									"path": "DfcTypeClassification"
								},
								"DfcColValue": {
									"path": "DfcColValue"
								},
								"DfcDateClosed": {
									"path": "DfcDateClosed"
								},
								"DfcDateEntered": {
									"path": "DfcDateEntered"
								},
								"DfcDateOfIssue": {
									"path": "DfcDateOfIssue"
								},
								"DfcDateSubmmited": {
									"path": "DfcDateSubmmited"
								},
								"DfcDescription": {
									"path": "DfcDescription"
								},
								"DfcDiscountPercentaje": {
									"path": "DfcDiscountPercentaje"
								},
								"DfcDiscountedValue": {
									"path": "DfcDiscountedValue"
								},
								"DfcExpiryDate": {
									"path": "DfcExpiryDate"
								},
								"DfcExternalEntity": {
									"path": "DfcExternalEntity"
								},
								"DfcFolio": {
									"path": "DfcFolio"
								},
								"DfcInAuction": {
									"path": "DfcInAuction"
								},
								"DfcLastValuationType": {
									"path": "DfcLastValuationType"
								},
								"DfcLoanNo": {
									"path": "DfcLoanNo"
								},
								"DfcLocationSecurity": {
									"path": "DfcLocationSecurity"
								},
								"DfcNotes": {
									"path": "DfcNotes"
								},
								"Dfcparcel": {
									"path": "Dfcparcel"
								},
								"DfcProjectedValue": {
									"path": "DfcProjectedValue"
								},
								"DfcRegistrationDate": {
									"path": "DfcRegistrationDate"
								},
								"DfcRegistrationSection": {
									"path": "DfcRegistrationSection"
								},
								"DfcSolicitor": {
									"path": "DfcSolicitor"
								},
								"DfcStatus": {
									"path": "DfcStatus"
								},
								"DfcTermYears": {
									"path": "DfcTermYears"
								},
								"DfcTermsStart": {
									"path": "DfcTermsStart"
								},
								"DfcTitleNumber": {
									"path": "DfcTitleNumber"
								},
								"DfcTitleDetails": {
									"path": "DfcTitleDetails"
								},
								"DfcTownVillage": {
									"path": "DfcTownVillage"
								},
								"DfcUnit": {
									"path": "DfcUnit"
								},
								"DfcValueSecuringLoans": {
									"path": "DfcValueSecuringLoans"
								},
								"DfcVolume": {
									"path": "DfcVolume"
								}
							}
						}
					},
					"DataGrid_ljfwug6DS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "FinApplicationSpec",
							"attributes": {
								"Specification": {
									"path": "Specification"
								},
								"DisplayValue": {
									"path": "DisplayValue"
								},
								"CreatedBy": {
									"path": "CreatedBy"
								},
								"CreatedOn": {
									"path": "CreatedOn"
								},
								"ModifiedBy": {
									"path": "ModifiedBy"
								},
								"ModifiedOn": {
									"path": "ModifiedOn"
								},
								"DfcParametertype": {
									"path": "DfcParametertype"
								}
							}
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources",
					"AttachmentListDS",
					"config"
				],
				"values": {
					"entitySchemaName": "FinApplicationFile"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});