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
				"name": "ComboBox_gepyqjc",
				"values": {
					"layoutConfig": {
						"column": 1,
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
				"index": 3
			},
			{
				"operation": "insert",
				"name": "DfcSubSector",
				"values": {
					"layoutConfig": {
						"column": 2,
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
				"index": 4
			},
			{
				"operation": "insert",
				"name": "DfcReqAmt",
				"values": {
					"layoutConfig": {
						"column": 3,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_DfcReqAmt_sb7sqaj",
					"labelPosition": "above",
					"control": "$PDS_DfcReqAmt_sb7sqaj",
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
				"name": "DfcInterestRate",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_DfcInterestRate_m3yhhrh",
					"labelPosition": "above",
					"control": "$PDS_DfcInterestRate_m3yhhrh",
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
				"name": "DfcTerm",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_DfcTerm_wv82jgc",
					"labelPosition": "above",
					"control": "$PDS_DfcTerm_wv82jgc",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "DfcPeriodType",
				"values": {
					"layoutConfig": {
						"column": 3,
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
				"index": 8
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
						"column": 1,
						"row": 4,
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
						"GridDetail_qw3hbjh"
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
							"id": "f2d67003-bbb5-af7d-53d9-ee2683cb52df",
							"code": "GridDetail_qw3hbjhDS_DisplayValue",
							"caption": "#ResourceString(GridDetail_qw3hbjhDS_DisplayValue)#",
							"dataValueType": 30
						},
						{
							"id": "1e39162e-ef07-6d11-62e8-84f0c1967b16",
							"code": "GridDetail_qw3hbjhDS_OpportunityCondition",
							"caption": "#ResourceString(GridDetail_qw3hbjhDS_OpportunityCondition)#",
							"dataValueType": 10
						},
						{
							"id": "67a51145-d736-342f-f1bf-b8648944d614",
							"code": "GridDetail_qw3hbjhDS_Specification",
							"caption": "#ResourceString(GridDetail_qw3hbjhDS_Specification)#",
							"dataValueType": 10
						},
						{
							"id": "ae07d30c-1325-80a0-034f-d8329c545e9f",
							"code": "GridDetail_qw3hbjhDS_SpecificationListItem",
							"caption": "#ResourceString(GridDetail_qw3hbjhDS_SpecificationListItem)#",
							"dataValueType": 10
						},
						{
							"id": "3733fd8d-ff62-a283-7cee-f96f097049be",
							"code": "GridDetail_qw3hbjhDS_SpecInConditionType",
							"caption": "#ResourceString(GridDetail_qw3hbjhDS_SpecInConditionType)#",
							"dataValueType": 10
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
							"path": "GridDetail_qw3hbjhDS"
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_qw3hbjhDS_DisplayValue": {
									"modelConfig": {
										"path": "GridDetail_qw3hbjhDS.DisplayValue"
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
								"GridDetail_qw3hbjhDS_SpecificationListItem": {
									"modelConfig": {
										"path": "GridDetail_qw3hbjhDS.SpecificationListItem"
									}
								},
								"GridDetail_qw3hbjhDS_SpecInConditionType": {
									"modelConfig": {
										"path": "GridDetail_qw3hbjhDS.SpecInConditionType"
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
								"OpportunityCondition": {
									"path": "OpportunityCondition"
								},
								"Specification": {
									"path": "Specification"
								},
								"SpecificationListItem": {
									"path": "SpecificationListItem"
								},
								"SpecInConditionType": {
									"path": "SpecInConditionType"
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