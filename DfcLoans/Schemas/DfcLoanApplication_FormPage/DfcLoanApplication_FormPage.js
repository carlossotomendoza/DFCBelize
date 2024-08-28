define("DfcLoanApplication_FormPage", /**SCHEMA_DEPS*/["@creatio-devkit/common"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
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
					"saveOnChange": false,
					"askUserToChangeSchema": true,
					"entityName": "FinApplication"
				},
				"parentName": "MainContainer",
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
				"name": "DfcCustomerType",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
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
				"index": 2
			},
			{
				"operation": "insert",
				"name": "DfcClient",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
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
				"index": 3
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
						"row": 5,
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
				"index": 4
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
				"index": 1
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
				"name": "FillingDate",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
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
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Owner",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_Owner_1pnziuc",
					"labelPosition": "auto",
					"control": "$PDS_Owner_1pnziuc",
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
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Source",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
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
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Stage",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
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
				"index": 4
			},
			{
				"operation": "insert",
				"name": "Status",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 6,
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
				"index": 5
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
					"label": "$Resources.Strings.PDS_OpportunityCondition_grlqn8k",
					"labelPosition": "auto",
					"control": "$PDS_OpportunityCondition_grlqn8k",
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
				"name": "addRecord_i4s9zni",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_i4s9zni_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "OpportunityCondition",
				"propertyName": "listActions",
				"index": 0
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
				"name": "DfcPeriodType",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_DfcPeriodType_4q50282",
					"labelPosition": "above",
					"control": "$PDS_DfcPeriodType_4q50282",
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
				"index": 6
			},
			{
				"operation": "insert",
				"name": "addRecord_c4we974",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_c4we974_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "DfcPeriodType",
				"propertyName": "listActions",
				"index": 0
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
						"column": 2,
						"row": 3,
						"colSpan": 2,
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
				"index": 7
			},
			{
				"operation": "insert",
				"name": "DfcInterestRate",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_DfcInterestRate_m3yhhrh",
					"labelPosition": "above",
					"control": "$PDS_DfcInterestRate_m3yhhrh",
					"visible": false,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "DfcTerm",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_DfcTerm_wv82jgc",
					"labelPosition": "above",
					"control": "$PDS_DfcTerm_wv82jgc",
					"visible": false,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "DfcReqAmt",
				"values": {
					"layoutConfig": {
						"column": 3,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_DfcReqAmt_sb7sqaj",
					"labelPosition": "above",
					"control": "$PDS_DfcReqAmt_sb7sqaj",
					"visible": false,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 10
			},
			{
				"operation": "insert",
				"name": "DfcInstallmentAmt",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_DfcInstallmentAmt_9mp5g18",
					"labelPosition": "auto",
					"control": "$PDS_DfcInstallmentAmt_9mp5g18"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 11
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
									"value": null
								}
							]
						}
					},
					"visible": true,
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
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_ProductTerms",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_AppParams",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 10
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
							"id": "432abc38-73d8-3ab3-80f2-52ca84f59275",
							"code": "GridDetail_qw3hbjhDS_DisplayValue",
							"caption": "#ResourceString(GridDetail_qw3hbjhDS_DisplayValue)#",
							"dataValueType": 30
						},
						{
							"id": "ee34c2c8-b330-8a66-0891-319a80eb67e6",
							"code": "GridDetail_qw3hbjhDS_IsCustom",
							"caption": "#ResourceString(GridDetail_qw3hbjhDS_IsCustom)#",
							"dataValueType": 12
						},
						{
							"id": "2710d385-0e13-4197-103d-df2c6276bbd4",
							"code": "GridDetail_qw3hbjhDS_FinApplication",
							"caption": "#ResourceString(GridDetail_qw3hbjhDS_FinApplication)#",
							"dataValueType": 10
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
							"id": "41930643-316a-bd4d-e860-ce88a01beb30",
							"code": "GridDetail_qw3hbjhDS_FloatValue",
							"caption": "#ResourceString(GridDetail_qw3hbjhDS_FloatValue)#",
							"dataValueType": 32
						},
						{
							"id": "09abc553-0705-be25-4dbc-1a97a6a11770",
							"code": "GridDetail_qw3hbjhDS_Id",
							"caption": "#ResourceString(GridDetail_qw3hbjhDS_Id)#",
							"dataValueType": 0
						},
						{
							"id": "d075bafb-4a46-24a1-5942-e20efccad62a",
							"code": "GridDetail_qw3hbjhDS_IntegerValue",
							"caption": "#ResourceString(GridDetail_qw3hbjhDS_IntegerValue)#",
							"dataValueType": 4
						},
						{
							"id": "8496607a-c264-c577-1d86-561d1a6f9758",
							"code": "GridDetail_qw3hbjhDS_BooleanValue",
							"caption": "#ResourceString(GridDetail_qw3hbjhDS_BooleanValue)#",
							"dataValueType": 12
						},
						{
							"id": "8db91c81-e2b3-3b64-abb0-aaa3e585d1e1",
							"code": "GridDetail_qw3hbjhDS_MaxFloatValue",
							"caption": "#ResourceString(GridDetail_qw3hbjhDS_MaxFloatValue)#",
							"dataValueType": 32
						},
						{
							"id": "6d122c58-b796-c150-7282-cfb634acd918",
							"code": "GridDetail_qw3hbjhDS_MaxIntegerValue",
							"caption": "#ResourceString(GridDetail_qw3hbjhDS_MaxIntegerValue)#",
							"dataValueType": 4
						},
						{
							"id": "062b67f3-160f-f718-b3f0-aabb375811f2",
							"code": "GridDetail_qw3hbjhDS_IsEmptyMaxValue",
							"caption": "#ResourceString(GridDetail_qw3hbjhDS_IsEmptyMaxValue)#",
							"dataValueType": 12
						},
						{
							"id": "ac90aa97-9385-a501-3a94-178202efaeae",
							"code": "GridDetail_qw3hbjhDS_MinFloatValue",
							"caption": "#ResourceString(GridDetail_qw3hbjhDS_MinFloatValue)#",
							"dataValueType": 32
						},
						{
							"id": "023bd409-b52a-b6ce-dc99-bab344edbeaa",
							"code": "GridDetail_qw3hbjhDS_MinIntegerValue",
							"caption": "#ResourceString(GridDetail_qw3hbjhDS_MinIntegerValue)#",
							"dataValueType": 4
						},
						{
							"id": "85e91862-1a01-49da-d2e2-28250a965e9b",
							"code": "GridDetail_qw3hbjhDS_IsEmptyMinValue",
							"caption": "#ResourceString(GridDetail_qw3hbjhDS_IsEmptyMinValue)#",
							"dataValueType": 12
						},
						{
							"id": "40a33eca-19be-1269-f832-e17573ef96dd",
							"code": "GridDetail_qw3hbjhDS_ModifiedBy",
							"caption": "#ResourceString(GridDetail_qw3hbjhDS_ModifiedBy)#",
							"dataValueType": 10
						},
						{
							"id": "84ce6090-cd11-a079-ac72-e9df30679ec8",
							"code": "GridDetail_qw3hbjhDS_ModifiedOn",
							"caption": "#ResourceString(GridDetail_qw3hbjhDS_ModifiedOn)#",
							"dataValueType": 7
						},
						{
							"id": "50bf9910-7fb0-e5e1-24a6-6f34536997d6",
							"code": "GridDetail_qw3hbjhDS_OpportunityCondition",
							"caption": "#ResourceString(GridDetail_qw3hbjhDS_OpportunityCondition)#",
							"dataValueType": 10
						},
						{
							"id": "8ccabed2-930f-aecb-6651-b0c810103f5a",
							"code": "GridDetail_qw3hbjhDS_Specification",
							"caption": "#ResourceString(GridDetail_qw3hbjhDS_Specification)#",
							"dataValueType": 10
						},
						{
							"id": "2055e7bf-1fda-9e7f-725b-435adfbfd164",
							"code": "GridDetail_qw3hbjhDS_SpecInConditionType",
							"caption": "#ResourceString(GridDetail_qw3hbjhDS_SpecInConditionType)#",
							"dataValueType": 10
						},
						{
							"id": "59470ffb-52ae-05f8-a502-c5d341f35303",
							"code": "GridDetail_qw3hbjhDS_SpecificationListItem",
							"caption": "#ResourceString(GridDetail_qw3hbjhDS_SpecificationListItem)#",
							"dataValueType": 10
						},
						{
							"id": "d07751ec-1da3-f76c-101a-a9149da9717f",
							"code": "GridDetail_qw3hbjhDS_RowPosition",
							"caption": "#ResourceString(GridDetail_qw3hbjhDS_RowPosition)#",
							"dataValueType": 4
						},
						{
							"id": "f5887e2e-681d-b357-dd7a-cc2fcafa287d",
							"code": "GridDetail_qw3hbjhDS_ValuePosition",
							"caption": "#ResourceString(GridDetail_qw3hbjhDS_ValuePosition)#",
							"dataValueType": 4
						},
						{
							"id": "84458344-9d58-7e8d-39fa-1f4b8b18e4b6",
							"code": "GridDetail_qw3hbjhDS_ProductCondition",
							"caption": "#ResourceString(GridDetail_qw3hbjhDS_ProductCondition)#",
							"dataValueType": 10
						},
						{
							"id": "5a56c862-88fd-dbb7-8ce3-bcfe41acc4b5",
							"code": "GridDetail_qw3hbjhDS_SpecTableValueX",
							"caption": "#ResourceString(GridDetail_qw3hbjhDS_SpecTableValueX)#",
							"dataValueType": 10
						},
						{
							"id": "f59e3db7-fd73-795e-5a80-0aea2a9d12d8",
							"code": "GridDetail_qw3hbjhDS_SpecTableValueY",
							"caption": "#ResourceString(GridDetail_qw3hbjhDS_SpecTableValueY)#",
							"dataValueType": 10
						},
						{
							"id": "5c941b64-e2c5-1727-e045-84f84849e412",
							"code": "GridDetail_qw3hbjhDS_TextValue",
							"caption": "#ResourceString(GridDetail_qw3hbjhDS_TextValue)#",
							"dataValueType": 29
						},
						{
							"id": "4c4b8ab7-5ad4-54a7-42c7-ec3a6520f8fd",
							"code": "GridDetail_qw3hbjhDS_IsEmptyValue",
							"caption": "#ResourceString(GridDetail_qw3hbjhDS_IsEmptyValue)#",
							"dataValueType": 12
						},
						{
							"id": "472c1abf-5013-8975-9ac6-f83398a7405d",
							"code": "GridDetail_qw3hbjhDS_CurrentType",
							"caption": "#ResourceString(GridDetail_qw3hbjhDS_CurrentType)#",
							"dataValueType": 27
						}
					],
					"placeholder": false,
					"bulkActions": []
				},
				"parentName": "GridContainer_hvu5m9w",
				"propertyName": "items",
				"index": 0
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
				"index": 1
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
							"enable": false,
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
				"index": 2
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
								"GridDetail_qw3hbjhDS_DisplayValue": {
									"modelConfig": {
										"path": "GridDetail_qw3hbjhDS.DisplayValue"
									}
								},
								"GridDetail_qw3hbjhDS_IsCustom": {
									"modelConfig": {
										"path": "GridDetail_qw3hbjhDS.IsCustom"
									}
								},
								"GridDetail_qw3hbjhDS_FinApplication": {
									"modelConfig": {
										"path": "GridDetail_qw3hbjhDS.FinApplication"
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
								"GridDetail_qw3hbjhDS_FloatValue": {
									"modelConfig": {
										"path": "GridDetail_qw3hbjhDS.FloatValue"
									}
								},
								"GridDetail_qw3hbjhDS_Id": {
									"modelConfig": {
										"path": "GridDetail_qw3hbjhDS.Id"
									}
								},
								"GridDetail_qw3hbjhDS_IntegerValue": {
									"modelConfig": {
										"path": "GridDetail_qw3hbjhDS.IntegerValue"
									}
								},
								"GridDetail_qw3hbjhDS_BooleanValue": {
									"modelConfig": {
										"path": "GridDetail_qw3hbjhDS.BooleanValue"
									}
								},
								"GridDetail_qw3hbjhDS_MaxFloatValue": {
									"modelConfig": {
										"path": "GridDetail_qw3hbjhDS.MaxFloatValue"
									}
								},
								"GridDetail_qw3hbjhDS_MaxIntegerValue": {
									"modelConfig": {
										"path": "GridDetail_qw3hbjhDS.MaxIntegerValue"
									}
								},
								"GridDetail_qw3hbjhDS_IsEmptyMaxValue": {
									"modelConfig": {
										"path": "GridDetail_qw3hbjhDS.IsEmptyMaxValue"
									}
								},
								"GridDetail_qw3hbjhDS_MinFloatValue": {
									"modelConfig": {
										"path": "GridDetail_qw3hbjhDS.MinFloatValue"
									}
								},
								"GridDetail_qw3hbjhDS_MinIntegerValue": {
									"modelConfig": {
										"path": "GridDetail_qw3hbjhDS.MinIntegerValue"
									}
								},
								"GridDetail_qw3hbjhDS_IsEmptyMinValue": {
									"modelConfig": {
										"path": "GridDetail_qw3hbjhDS.IsEmptyMinValue"
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
								"GridDetail_qw3hbjhDS_OpportunityCondition": {
									"modelConfig": {
										"path": "GridDetail_qw3hbjhDS.OpportunityCondition"
									}
								},
								"GridDetail_qw3hbjhDS_Specification": {
									"modelConfig": {
										"path": "GridDetail_qw3hbjhDS.Specification"
									}
								},
								"GridDetail_qw3hbjhDS_SpecInConditionType": {
									"modelConfig": {
										"path": "GridDetail_qw3hbjhDS.SpecInConditionType"
									}
								},
								"GridDetail_qw3hbjhDS_SpecificationListItem": {
									"modelConfig": {
										"path": "GridDetail_qw3hbjhDS.SpecificationListItem"
									}
								},
								"GridDetail_qw3hbjhDS_RowPosition": {
									"modelConfig": {
										"path": "GridDetail_qw3hbjhDS.RowPosition"
									}
								},
								"GridDetail_qw3hbjhDS_ValuePosition": {
									"modelConfig": {
										"path": "GridDetail_qw3hbjhDS.ValuePosition"
									}
								},
								"GridDetail_qw3hbjhDS_ProductCondition": {
									"modelConfig": {
										"path": "GridDetail_qw3hbjhDS.ProductCondition"
									}
								},
								"GridDetail_qw3hbjhDS_SpecTableValueX": {
									"modelConfig": {
										"path": "GridDetail_qw3hbjhDS.SpecTableValueX"
									}
								},
								"GridDetail_qw3hbjhDS_SpecTableValueY": {
									"modelConfig": {
										"path": "GridDetail_qw3hbjhDS.SpecTableValueY"
									}
								},
								"GridDetail_qw3hbjhDS_TextValue": {
									"modelConfig": {
										"path": "GridDetail_qw3hbjhDS.TextValue"
									}
								},
								"GridDetail_qw3hbjhDS_IsEmptyValue": {
									"modelConfig": {
										"path": "GridDetail_qw3hbjhDS.IsEmptyValue"
									}
								},
								"GridDetail_qw3hbjhDS_CurrentType": {
									"modelConfig": {
										"path": "GridDetail_qw3hbjhDS.CurrentType"
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
						"value": null
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
								"DisplayValue": {
									"path": "DisplayValue"
								},
								"IsCustom": {
									"path": "IsCustom"
								},
								"FinApplication": {
									"path": "FinApplication"
								},
								"CreatedBy": {
									"path": "CreatedBy"
								},
								"CreatedOn": {
									"path": "CreatedOn"
								},
								"FloatValue": {
									"path": "FloatValue"
								},
								"Id": {
									"path": "Id"
								},
								"IntegerValue": {
									"path": "IntegerValue"
								},
								"BooleanValue": {
									"path": "BooleanValue"
								},
								"MaxFloatValue": {
									"path": "MaxFloatValue"
								},
								"MaxIntegerValue": {
									"path": "MaxIntegerValue"
								},
								"IsEmptyMaxValue": {
									"path": "IsEmptyMaxValue"
								},
								"MinFloatValue": {
									"path": "MinFloatValue"
								},
								"MinIntegerValue": {
									"path": "MinIntegerValue"
								},
								"IsEmptyMinValue": {
									"path": "IsEmptyMinValue"
								},
								"ModifiedBy": {
									"path": "ModifiedBy"
								},
								"ModifiedOn": {
									"path": "ModifiedOn"
								},
								"OpportunityCondition": {
									"path": "OpportunityCondition"
								},
								"Specification": {
									"path": "Specification"
								},
								"SpecInConditionType": {
									"path": "SpecInConditionType"
								},
								"SpecificationListItem": {
									"path": "SpecificationListItem"
								},
								"RowPosition": {
									"path": "RowPosition"
								},
								"ValuePosition": {
									"path": "ValuePosition"
								},
								"ProductCondition": {
									"path": "ProductCondition"
								},
								"SpecTableValueX": {
									"path": "SpecTableValueX"
								},
								"SpecTableValueY": {
									"path": "SpecTableValueY"
								},
								"TextValue": {
									"path": "TextValue"
								},
								"IsEmptyValue": {
									"path": "IsEmptyValue"
								},
								"CurrentType": {
									"path": "CurrentType"
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