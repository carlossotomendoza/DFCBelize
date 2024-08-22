define("DfcLoans_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
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
					"entitySchemaName": "DfcLoans"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "69eeeba7-86ed-402d-b511-577e37c8d264",
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
				"name": "DfcLoanNo",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.PDS_DfcLoanNo_k34mwag",
					"labelPosition": "auto",
					"control": "$PDS_DfcLoanNo_k34mwag",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DfcLoanApp",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_DfcLoanApp_nlbj80g",
					"labelPosition": "auto",
					"control": "$PDS_DfcLoanApp_nlbj80g",
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
				"name": "addRecord_6g3z8c7",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_6g3z8c7_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "DfcLoanApp",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DfcAccount",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_DfcAccount_iwpq71s",
					"labelPosition": "auto",
					"control": "$PDS_DfcAccount_iwpq71s",
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
				"name": "addRecord_ll8puqj",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_ll8puqj_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "DfcAccount",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DfcContact",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_DfcContact_nh3i50v",
					"labelPosition": "auto",
					"control": "$PDS_DfcContact_nh3i50v",
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
				"name": "addRecord_vyu29pr",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_vyu29pr_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "DfcContact",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DfcLoanStatus",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_DfcLoanStatus_e11tix3",
					"labelPosition": "auto",
					"control": "$PDS_DfcLoanStatus_e11tix3",
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
				"name": "addRecord_ujxbf3x",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_ujxbf3x_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "DfcLoanStatus",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_mib9kql",
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
				"name": "DfcProduct",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_DfcProduct_33a0ucc",
					"labelPosition": "auto",
					"control": "$PDS_DfcProduct_33a0ucc",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GridContainer_mib9kql",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_wz9y7d7",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_wz9y7d7_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "DfcProduct",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DfcLoanAmt",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_DfcLoanAmt_90436eq",
					"labelPosition": "auto",
					"control": "$PDS_DfcLoanAmt_90436eq"
				},
				"parentName": "GridContainer_mib9kql",
				"propertyName": "items",
				"index": 1
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
					"label": "$Resources.Strings.PDS_DfcInterestRate_gjvhcim",
					"labelPosition": "auto",
					"control": "$PDS_DfcInterestRate_gjvhcim"
				},
				"parentName": "GridContainer_mib9kql",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Label_LoanApplication",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_ivhdx2r_caption)#)#",
					"labelType": "headline-4",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_LoanApplication",
				"values": {
					"type": "crt.DataGrid",
					"features": {
						"rows": {
							"selection": false,
							"numeration": false
						},
						"editable": {
							"enable": false,
							"itemsCreation": false
						}
					},
					"items": "$DataGrid_36pclew",
					"activeRow": "$DataGrid_36pclew_ActiveRow",
					"selectionState": "$DataGrid_36pclew_SelectionState",
					"_selectionOptions": {
						"attribute": "DataGrid_36pclew_SelectionState"
					},
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "DataGrid_36pclewDS_Id",
					"columns": [
						{
							"id": "8911e13c-077c-86a0-8ea7-4cef667a2861",
							"code": "DataGrid_36pclewDS_Number",
							"caption": "#ResourceString(DataGrid_36pclewDS_Number)#",
							"dataValueType": 28,
							"width": 132.9857940673828
						},
						{
							"id": "bc43dbf6-b554-95a5-0120-f709e637fceb",
							"code": "DataGrid_36pclewDS_FillingDate",
							"caption": "#ResourceString(DataGrid_36pclewDS_FillingDate)#",
							"dataValueType": 8,
							"width": 162.99147033691406
						},
						{
							"id": "74df35fe-cdb5-d7e1-8c6a-93983e0e197b",
							"code": "DataGrid_36pclewDS_Product",
							"caption": "#ResourceString(DataGrid_36pclewDS_Product)#",
							"dataValueType": 10
						},
						{
							"id": "850070cf-bc83-34e0-041c-7c0411994867",
							"code": "DataGrid_36pclewDS_ProductType",
							"caption": "#ResourceString(DataGrid_36pclewDS_ProductType)#",
							"dataValueType": 10
						},
						{
							"id": "a802e9b1-c151-50a5-4286-e6455669a997",
							"code": "DataGrid_36pclewDS_OpportunityCondition",
							"caption": "#ResourceString(DataGrid_36pclewDS_OpportunityCondition)#",
							"dataValueType": 10
						},
						{
							"id": "6a41e629-32b0-468c-42b1-e3d4c0f41894",
							"code": "DataGrid_36pclewDS_DfcReqAmt",
							"caption": "#ResourceString(DataGrid_36pclewDS_DfcReqAmt)#",
							"dataValueType": 32,
							"width": 193.99999237060547
						},
						{
							"id": "c1e2051a-0214-57d1-32e7-b121875ed30b",
							"code": "DataGrid_36pclewDS_DfcInterestRate",
							"caption": "#ResourceString(DataGrid_36pclewDS_DfcInterestRate)#",
							"dataValueType": 32
						},
						{
							"id": "33643421-792e-dac6-8e2f-a53ea5493dcf",
							"code": "DataGrid_36pclewDS_DfcTerm",
							"caption": "#ResourceString(DataGrid_36pclewDS_DfcTerm)#",
							"dataValueType": 4
						},
						{
							"id": "7823d083-e7e8-c44a-a1c6-ac7bbe699bb4",
							"code": "DataGrid_36pclewDS_DfcPurpose",
							"caption": "#ResourceString(DataGrid_36pclewDS_DfcPurpose)#",
							"dataValueType": 43
						},
						{
							"id": "4199fd48-1291-e3dc-5cf4-cbbd702bca43",
							"code": "DataGrid_36pclewDS_DfcSector",
							"caption": "#ResourceString(DataGrid_36pclewDS_DfcSector)#",
							"dataValueType": 10
						},
						{
							"id": "e95c36c3-c978-aeb1-ef4d-30fc70eaef9a",
							"code": "DataGrid_36pclewDS_DfcSubSector",
							"caption": "#ResourceString(DataGrid_36pclewDS_DfcSubSector)#",
							"dataValueType": 10
						},
						{
							"id": "c1cfda4b-73df-287e-f58a-d34baf69af04",
							"code": "DataGrid_36pclewDS_Division",
							"caption": "#ResourceString(DataGrid_36pclewDS_Division)#",
							"dataValueType": 10
						},
						{
							"id": "eca23dfa-fde9-b514-79e5-9df53c85eaf4",
							"code": "DataGrid_36pclewDS_DecisionDate",
							"caption": "#ResourceString(DataGrid_36pclewDS_DecisionDate)#",
							"dataValueType": 8
						},
						{
							"id": "2ff01a7e-fb5d-3ce9-33c2-697dda380409",
							"code": "DataGrid_36pclewDS_Approver",
							"caption": "#ResourceString(DataGrid_36pclewDS_Approver)#",
							"dataValueType": 10
						},
						{
							"id": "95e3694e-6785-6e10-9f7e-384c8a30e53c",
							"code": "DataGrid_36pclewDS_CreatedBy",
							"caption": "#ResourceString(DataGrid_36pclewDS_CreatedBy)#",
							"dataValueType": 10
						},
						{
							"id": "745bd10f-b4a9-3b8e-093f-74a2d7d426f9",
							"code": "DataGrid_36pclewDS_CreatedOn",
							"caption": "#ResourceString(DataGrid_36pclewDS_CreatedOn)#",
							"dataValueType": 7
						}
					],
					"placeholder": false,
					"bulkActions": []
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "DataGrid_36pclew_AddTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Add tag",
					"icon": "tag-icon",
					"clicked": {
						"request": "crt.AddTagsInRecordsRequest",
						"params": {
							"dataSourceName": "DataGrid_36pclewDS",
							"filters": "$DataGrid_36pclew | crt.ToCollectionFilters : 'DataGrid_36pclew' : $DataGrid_36pclew_SelectionState | crt.SkipIfSelectionEmpty : $DataGrid_36pclew_SelectionState"
						}
					},
					"items": []
				},
				"parentName": "DataGrid_LoanApplication",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_36pclew_RemoveTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Remove tag",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.RemoveTagsInRecordsRequest",
						"params": {
							"dataSourceName": "DataGrid_36pclewDS",
							"filters": "$DataGrid_36pclew | crt.ToCollectionFilters : 'DataGrid_36pclew' : $DataGrid_36pclew_SelectionState | crt.SkipIfSelectionEmpty : $DataGrid_36pclew_SelectionState"
						}
					}
				},
				"parentName": "DataGrid_36pclew_AddTagsBulkAction",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_36pclew_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Export to Excel",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "DataGrid_LoanApplication",
							"filters": "$DataGrid_36pclew | crt.ToCollectionFilters : 'DataGrid_36pclew' : $DataGrid_36pclew_SelectionState | crt.SkipIfSelectionEmpty : $DataGrid_36pclew_SelectionState"
						}
					}
				},
				"parentName": "DataGrid_LoanApplication",
				"propertyName": "bulkActions",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "TabContainer_Collateral",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_es3rs4g_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_y6gwfsr",
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
				"parentName": "TabContainer_Collateral",
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
					"title": "#ResourceString(ExpansionPanel_tgka4vj_title)#",
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
				"parentName": "GridContainer_y6gwfsr",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_37obrt0",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
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
				"parentName": "ExpansionPanel_Collaterals",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_bjwiy7e",
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
				"parentName": "GridContainer_37obrt0",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_Collateral",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_0sdy1zf_caption)#",
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
									"attributeName": "DfcLoanNo",
									"value": "$DfcLoanNo"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_bjwiy7e",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_a9pwvjr",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_a9pwvjr_caption)#",
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
							"dataSourceName": "GridDetail_l0mxaloDS"
						}
					}
				},
				"parentName": "FlexContainer_bjwiy7e",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_rj04289",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_rj04289_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_bjwiy7e",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_tl8g136",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_tl8g136_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_Collaterals"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_rj04289",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_l3rhoeq",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_l3rhoeq_caption)#",
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
				"parentName": "GridDetailSettingsBtn_rj04289",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_l073eda",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_l073eda_placeholder)#",
					"iconOnly": true,
					"targetAttributes": [
						"GridDetail_l0mxalo"
					]
				},
				"parentName": "FlexContainer_bjwiy7e",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_5xop5xk",
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
				"name": "GridDetail_Collaterals",
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
					"items": "$GridDetail_l0mxalo",
					"activeRow": "$GridDetail_l0mxalo_ActiveRow",
					"selectionState": "$GridDetail_l0mxalo_SelectionState",
					"_selectionOptions": {
						"attribute": "GridDetail_l0mxalo_SelectionState"
					},
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_l0mxaloDS_Id",
					"columns": [
						{
							"id": "28f3ca36-77f3-ebd0-f7b0-f0847a9d9bf1",
							"code": "GridDetail_l0mxaloDS_DfcColValue",
							"caption": "#ResourceString(GridDetail_l0mxaloDS_DfcColValue)#",
							"dataValueType": 6,
							"width": 188.99999237060547
						},
						{
							"id": "18981bdd-b4f0-7dfc-4582-8010d5d8f7e6",
							"code": "GridDetail_l0mxaloDS_DfcDateEntered",
							"caption": "#ResourceString(GridDetail_l0mxaloDS_DfcDateEntered)#",
							"dataValueType": 8
						},
						{
							"id": "a96dfa5f-dfe1-f946-f98b-43fbf9a38aa9",
							"code": "GridDetail_l0mxaloDS_DfcDescription",
							"caption": "#ResourceString(GridDetail_l0mxaloDS_DfcDescription)#",
							"dataValueType": 30
						},
						{
							"id": "74a010e6-ce99-0fc9-b051-67f53ac76cb5",
							"code": "GridDetail_l0mxaloDS_DfcInAuction",
							"caption": "#ResourceString(GridDetail_l0mxaloDS_DfcInAuction)#",
							"dataValueType": 12
						},
						{
							"id": "227c6552-d969-1d8f-ac28-a5ca5b5f2410",
							"code": "GridDetail_l0mxaloDS_CreatedOn",
							"caption": "#ResourceString(GridDetail_l0mxaloDS_CreatedOn)#",
							"dataValueType": 7
						}
					],
					"placeholder": false,
					"bulkActions": []
				},
				"parentName": "GridContainer_5xop5xk",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_l0mxalo_AddTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Add tag",
					"icon": "tag-icon",
					"clicked": {
						"request": "crt.AddTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_l0mxaloDS",
							"filters": "$GridDetail_l0mxalo | crt.ToCollectionFilters : 'GridDetail_l0mxalo' : $GridDetail_l0mxalo_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_l0mxalo_SelectionState"
						}
					},
					"items": []
				},
				"parentName": "GridDetail_Collaterals",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_l0mxalo_RemoveTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Remove tag",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.RemoveTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_l0mxaloDS",
							"filters": "$GridDetail_l0mxalo | crt.ToCollectionFilters : 'GridDetail_l0mxalo' : $GridDetail_l0mxalo_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_l0mxalo_SelectionState"
						}
					}
				},
				"parentName": "GridDetail_l0mxalo_AddTagsBulkAction",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_l0mxalo_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Export to Excel",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_Collaterals",
							"filters": "$GridDetail_l0mxalo | crt.ToCollectionFilters : 'GridDetail_l0mxalo' : $GridDetail_l0mxalo_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_l0mxalo_SelectionState"
						}
					}
				},
				"parentName": "GridDetail_Collaterals",
				"propertyName": "bulkActions",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetail_l0mxalo_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Delete",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_l0mxaloDS",
							"filters": "$GridDetail_l0mxalo | crt.ToCollectionFilters : 'GridDetail_l0mxalo' : $GridDetail_l0mxalo_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_l0mxalo_SelectionState"
						}
					}
				},
				"parentName": "GridDetail_Collaterals",
				"propertyName": "bulkActions",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_BidList",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_hupg8t4_title)#",
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
				"parentName": "TabContainer_Collateral",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_4zavoqq",
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
				"parentName": "ExpansionPanel_BidList",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_5772i52",
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
				"parentName": "GridContainer_4zavoqq",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_vwp53jh",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_vwp53jh_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "DfcBid"
						}
					}
				},
				"parentName": "FlexContainer_5772i52",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_bcdehz8",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_bcdehz8_caption)#",
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
							"dataSourceName": "GridDetail_spuzx2dDS"
						}
					}
				},
				"parentName": "FlexContainer_5772i52",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_9r8g0hs",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_9r8g0hs_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_5772i52",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_lrltowl",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_lrltowl_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_spuzx2d"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_9r8g0hs",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_gil0qqf",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_gil0qqf_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "DfcBid"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_9r8g0hs",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_2n6lc98",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_2n6lc98_placeholder)#",
					"iconOnly": true,
					"targetAttributes": [
						"GridDetail_spuzx2d"
					]
				},
				"parentName": "FlexContainer_5772i52",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_sda7e0w",
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
				"parentName": "ExpansionPanel_BidList",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NumberInput_o2h10ps",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_DfcReservePrice_sl7ldgz",
					"labelPosition": "auto",
					"control": "$PDS_DfcReservePrice_sl7ldgz"
				},
				"parentName": "GridContainer_sda7e0w",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DfcDepositPayDate",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.PDS_DfcDepositPayDate_ljd5q4b",
					"labelPosition": "auto",
					"control": "$PDS_DfcDepositPayDate_ljd5q4b",
					"pickerType": "date"
				},
				"parentName": "GridContainer_sda7e0w",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetail_spuzx2d",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 2,
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
					"items": "$GridDetail_spuzx2d",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_spuzx2dDS_Id",
					"columns": [
						{
							"id": "41ff2910-e706-a165-2dc2-28d5b0622196",
							"code": "GridDetail_spuzx2dDS_DfcCollateralId",
							"caption": "#ResourceString(GridDetail_spuzx2dDS_DfcCollateralId)#",
							"dataValueType": 10
						},
						{
							"id": "797514dc-b7f8-ce92-f628-cdc77750412f",
							"code": "GridDetail_spuzx2dDS_DfcCustomerId",
							"caption": "#ResourceString(GridDetail_spuzx2dDS_DfcCustomerId)#",
							"dataValueType": 10
						},
						{
							"id": "54b0bdaa-70c5-7283-0c41-dafc8c1d971e",
							"code": "GridDetail_spuzx2dDS_DfcOffer",
							"caption": "#ResourceString(GridDetail_spuzx2dDS_DfcOffer)#",
							"dataValueType": 31
						},
						{
							"id": "e61bf63b-652b-73fd-086f-f414e1650f8c",
							"code": "GridDetail_spuzx2dDS_DfcPurchaseMethod",
							"caption": "#ResourceString(GridDetail_spuzx2dDS_DfcPurchaseMethod)#",
							"dataValueType": 10
						},
						{
							"id": "c08d30fe-85ab-5ccc-3bae-57d1b7707eeb",
							"code": "GridDetail_spuzx2dDS_DfcBestOffer",
							"caption": "#ResourceString(GridDetail_spuzx2dDS_DfcBestOffer)#",
							"dataValueType": 12
						}
					],
					"placeholder": false
				},
				"parentName": "GridContainer_sda7e0w",
				"propertyName": "items",
				"index": 2
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"DfcLoanNo": {
						"modelConfig": {
							"path": "PDS.Id"
						}
					},
					"PDS_DfcAccount_iwpq71s": {
						"modelConfig": {
							"path": "PDS.DfcAccount"
						}
					},
					"PDS_DfcContact_nh3i50v": {
						"modelConfig": {
							"path": "PDS.DfcContact"
						}
					},
					"PDS_DfcLoanAmt_90436eq": {
						"modelConfig": {
							"path": "PDS.DfcLoanAmt"
						}
					},
					"PDS_DfcInterestRate_gjvhcim": {
						"modelConfig": {
							"path": "PDS.DfcInterestRate"
						}
					},
					"PDS_DfcLoanStatus_e11tix3": {
						"modelConfig": {
							"path": "PDS.DfcLoanStatus"
						}
					},
					"GridDetail_l0mxalo": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_l0mxaloDS"
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_l0mxaloDS_DfcColValue": {
									"modelConfig": {
										"path": "GridDetail_l0mxaloDS.DfcColValue"
									}
								},
								"GridDetail_l0mxaloDS_DfcDateEntered": {
									"modelConfig": {
										"path": "GridDetail_l0mxaloDS.DfcDateEntered"
									}
								},
								"GridDetail_l0mxaloDS_DfcDescription": {
									"modelConfig": {
										"path": "GridDetail_l0mxaloDS.DfcDescription"
									}
								},
								"GridDetail_l0mxaloDS_DfcInAuction": {
									"modelConfig": {
										"path": "GridDetail_l0mxaloDS.DfcInAuction"
									}
								},
								"GridDetail_l0mxaloDS_CreatedOn": {
									"modelConfig": {
										"path": "GridDetail_l0mxaloDS.CreatedOn"
									}
								},
								"GridDetail_l0mxaloDS_Id": {
									"modelConfig": {
										"path": "GridDetail_l0mxaloDS.Id"
									}
								}
							}
						}
					},
					"PDS_DfcLoanNo_k34mwag": {
						"modelConfig": {
							"path": "PDS.DfcLoanNo"
						}
					},
					"GridDetail_spuzx2d": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_spuzx2dDS"
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_spuzx2dDS_DfcCollateralId": {
									"modelConfig": {
										"path": "GridDetail_spuzx2dDS.DfcCollateralId"
									}
								},
								"GridDetail_spuzx2dDS_DfcCustomerId": {
									"modelConfig": {
										"path": "GridDetail_spuzx2dDS.DfcCustomerId"
									}
								},
								"GridDetail_spuzx2dDS_DfcOffer": {
									"modelConfig": {
										"path": "GridDetail_spuzx2dDS.DfcOffer"
									}
								},
								"GridDetail_spuzx2dDS_DfcPurchaseMethod": {
									"modelConfig": {
										"path": "GridDetail_spuzx2dDS.DfcPurchaseMethod"
									}
								},
								"GridDetail_spuzx2dDS_DfcBestOffer": {
									"modelConfig": {
										"path": "GridDetail_spuzx2dDS.DfcBestOffer"
									}
								},
								"GridDetail_spuzx2dDS_Id": {
									"modelConfig": {
										"path": "GridDetail_spuzx2dDS.Id"
									}
								}
							}
						}
					},
					"PDS_DfcReservePrice_sl7ldgz": {
						"modelConfig": {
							"path": "PDS.DfcReservePrice"
						}
					},
					"PDS_DfcDepositPayDate_ljd5q4b": {
						"modelConfig": {
							"path": "PDS.DfcDepositPayDate"
						}
					},
					"PDS_DfcLoanApp_nlbj80g": {
						"modelConfig": {
							"path": "PDS.DfcLoanApp"
						}
					},
					"PDS_DfcProduct_33a0ucc": {
						"modelConfig": {
							"path": "PDS.DfcProduct"
						}
					},
					"DataGrid_36pclew": {
						"isCollection": true,
						"modelConfig": {
							"path": "DataGrid_36pclewDS"
						},
						"viewModelConfig": {
							"attributes": {
								"DataGrid_36pclewDS_Number": {
									"modelConfig": {
										"path": "DataGrid_36pclewDS.Number"
									}
								},
								"DataGrid_36pclewDS_FillingDate": {
									"modelConfig": {
										"path": "DataGrid_36pclewDS.FillingDate"
									}
								},
								"DataGrid_36pclewDS_Product": {
									"modelConfig": {
										"path": "DataGrid_36pclewDS.Product"
									}
								},
								"DataGrid_36pclewDS_ProductType": {
									"modelConfig": {
										"path": "DataGrid_36pclewDS.ProductType"
									}
								},
								"DataGrid_36pclewDS_OpportunityCondition": {
									"modelConfig": {
										"path": "DataGrid_36pclewDS.OpportunityCondition"
									}
								},
								"DataGrid_36pclewDS_DfcReqAmt": {
									"modelConfig": {
										"path": "DataGrid_36pclewDS.DfcReqAmt"
									}
								},
								"DataGrid_36pclewDS_DfcInterestRate": {
									"modelConfig": {
										"path": "DataGrid_36pclewDS.DfcInterestRate"
									}
								},
								"DataGrid_36pclewDS_DfcTerm": {
									"modelConfig": {
										"path": "DataGrid_36pclewDS.DfcTerm"
									}
								},
								"DataGrid_36pclewDS_DfcPurpose": {
									"modelConfig": {
										"path": "DataGrid_36pclewDS.DfcPurpose"
									}
								},
								"DataGrid_36pclewDS_DfcSector": {
									"modelConfig": {
										"path": "DataGrid_36pclewDS.DfcSector"
									}
								},
								"DataGrid_36pclewDS_DfcSubSector": {
									"modelConfig": {
										"path": "DataGrid_36pclewDS.DfcSubSector"
									}
								},
								"DataGrid_36pclewDS_Division": {
									"modelConfig": {
										"path": "DataGrid_36pclewDS.Division"
									}
								},
								"DataGrid_36pclewDS_DecisionDate": {
									"modelConfig": {
										"path": "DataGrid_36pclewDS.DecisionDate"
									}
								},
								"DataGrid_36pclewDS_Approver": {
									"modelConfig": {
										"path": "DataGrid_36pclewDS.Approver"
									}
								},
								"DataGrid_36pclewDS_CreatedBy": {
									"modelConfig": {
										"path": "DataGrid_36pclewDS.CreatedBy"
									}
								},
								"DataGrid_36pclewDS_CreatedOn": {
									"modelConfig": {
										"path": "DataGrid_36pclewDS.CreatedOn"
									}
								},
								"DataGrid_36pclewDS_Id": {
									"modelConfig": {
										"path": "DataGrid_36pclewDS.Id"
									}
								}
							}
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
						"GridDetail_l0mxaloDS": [
							{
								"attributePath": "DfcLoanNo",
								"relationPath": "PDS.Id"
							}
						],
						"DataGrid_36pclewDS": [
							{
								"attributePath": "Id",
								"relationPath": "PDS.DfcLoanApp"
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
							"entitySchemaName": "DfcLoans"
						},
						"scope": "page"
					},
					"GridDetail_l0mxaloDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "DfcCollaterals",
							"attributes": {
								"DfcColValue": {
									"path": "DfcColValue"
								},
								"DfcDateEntered": {
									"path": "DfcDateEntered"
								},
								"DfcDescription": {
									"path": "DfcDescription"
								},
								"DfcInAuction": {
									"path": "DfcInAuction"
								},
								"CreatedOn": {
									"path": "CreatedOn"
								}
							}
						}
					},
					"GridDetail_spuzx2dDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "DfcBid",
							"attributes": {
								"DfcCollateralId": {
									"path": "DfcCollateralId"
								},
								"DfcCustomerId": {
									"path": "DfcCustomerId"
								},
								"DfcOffer": {
									"path": "DfcOffer"
								},
								"DfcPurchaseMethod": {
									"path": "DfcPurchaseMethod"
								},
								"DfcBestOffer": {
									"path": "DfcBestOffer"
								}
							}
						}
					},
					"DataGrid_36pclewDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "FinApplication",
							"attributes": {
								"Number": {
									"path": "Number"
								},
								"FillingDate": {
									"path": "FillingDate"
								},
								"Product": {
									"path": "Product"
								},
								"ProductType": {
									"path": "ProductType"
								},
								"OpportunityCondition": {
									"path": "OpportunityCondition"
								},
								"DfcReqAmt": {
									"path": "DfcReqAmt"
								},
								"DfcInterestRate": {
									"path": "DfcInterestRate"
								},
								"DfcTerm": {
									"path": "DfcTerm"
								},
								"DfcPurpose": {
									"path": "DfcPurpose"
								},
								"DfcSector": {
									"path": "DfcSector"
								},
								"DfcSubSector": {
									"path": "DfcSubSector"
								},
								"Division": {
									"path": "Division"
								},
								"DecisionDate": {
									"path": "DecisionDate"
								},
								"Approver": {
									"path": "Approver"
								},
								"CreatedBy": {
									"path": "CreatedBy"
								},
								"CreatedOn": {
									"path": "CreatedOn"
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