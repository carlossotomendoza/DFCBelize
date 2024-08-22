define("DfcPayments_ListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "AddButton",
				"values": {
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "DfcPayments",
							"defaultValues": [
								{
									"attributeName": "DfcLoan",
									"value": "$DfcLoan"
								},
								{
									"attributeName": "DfcLegalEntity",
									"value": "$DfcLegalEntity"
								}
							]
						}
					},
					"color": "accent",
					"caption": "#ResourceString(AddButton_caption)#",
					"size": "large",
					"visible": true,
					"clickMode": "default"
				}
			},
			{
				"operation": "remove",
				"name": "DataImportButton"
			},
			{
				"operation": "remove",
				"name": "MenuItem_ImportFromExcel"
			},
			{
				"operation": "remove",
				"name": "OpenLandingDesigner"
			},
			{
				"operation": "remove",
				"name": "ActionButton"
			},
			{
				"operation": "remove",
				"name": "MenuItem_ExportToExcel"
			},
			{
				"operation": "merge",
				"name": "MainFilterContainer",
				"values": {
					"visible": true,
					"alignItems": "stretch"
				}
			},
			{
				"operation": "remove",
				"name": "LeftFilterContainer"
			},
			{
				"operation": "remove",
				"name": "LeftFilterContainerInner"
			},
			{
				"operation": "remove",
				"name": "FolderTreeActions"
			},
			{
				"operation": "remove",
				"name": "LookupQuickFilterByTag"
			},
			{
				"operation": "remove",
				"name": "SearchFilter"
			},
			{
				"operation": "remove",
				"name": "RightFilterContainer"
			},
			{
				"operation": "remove",
				"name": "DataTable_Summaries"
			},
			{
				"operation": "remove",
				"name": "RefreshButton"
			},
			{
				"operation": "remove",
				"name": "FolderTree"
			},
			{
				"operation": "remove",
				"name": "DataTable"
			},
			{
				"operation": "insert",
				"name": "GridContainer_aie8fnr",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 3,
						"rowSpan": 1
					},
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
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
				"parentName": "MainFilterContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_f1w1c4z",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PageParameters_DfcLookupParameter1_u7vj91v",
					"labelPosition": "auto",
					"control": "$PageParameters_DfcLookupParameter1_u7vj91v",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"mode": "List",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GridContainer_aie8fnr",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_d10zfqv",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PageParameters_DfcLookupParameter1_xz2p1pr",
					"labelPosition": "auto",
					"control": "$PageParameters_DfcLookupParameter1_xz2p1pr",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"mode": "List",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null,
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_aie8fnr",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ComboBox_ihfkh5c",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PageParameters_DfcLookupParameter1_h2bliav",
					"labelPosition": "auto",
					"control": "$PageParameters_DfcLookupParameter1_h2bliav",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"mode": "List",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null,
					"layoutConfig": {
						"column": 3,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_aie8fnr",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "TabPanel_6tron9l",
				"values": {
					"type": "crt.TabPanel",
					"items": [],
					"mode": "tab",
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"tabTitleColor": "auto",
					"selectedTabTitleColor": "auto",
					"headerBackgroundColor": "auto",
					"underlineSelectedTabColor": "auto",
					"fitContent": true
				},
				"parentName": "SectionContentWrapper",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabContainer_qt39gmm",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_qt39gmm_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "TabPanel_6tron9l",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_l08yb4g",
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
				"parentName": "TabContainer_qt39gmm",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_eugqq0q",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "#ResourceString(ComboBox_eugqq0q_label)#",
					"labelPosition": "auto",
					"control": "$PageParameters_DfcLoansParameterDfcLoanStatus",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"mode": "List",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GridContainer_l08yb4g",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_o6o0834",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_o6o0834_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_eugqq0q",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NumberInput_0nncu3z",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "#ResourceString(NumberInput_0nncu3z_label)#",
					"labelPosition": "auto",
					"control": "$PageParameters_DfcLoansParameterDfcLoanAmt",
					"readonly": true,
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_l08yb4g",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_7thhm1z",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_7thhm1z_title)#",
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
				"parentName": "TabContainer_qt39gmm",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_rp8eywo",
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
				"parentName": "ExpansionPanel_7thhm1z",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_9d6e158",
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
				"parentName": "GridContainer_rp8eywo",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_ucn3y9f",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_ucn3y9f_placeholder)#",
					"iconOnly": false,
					"targetAttributes": [
						"GridDetail_plcq2jy"
					]
				},
				"parentName": "FlexContainer_9d6e158",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_dsufd6e",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_dsufd6e_caption)#",
					"icon": "reload-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "large",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload",
								"useLastLoadParameters": true
							},
							"dataSourceName": "GridDetail_plcq2jyDS"
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_9d6e158",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_p8cjezf",
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
				"parentName": "ExpansionPanel_7thhm1z",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_plcq2jy",
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
					"items": "$GridDetail_plcq2jy",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_plcq2jyDS_Id",
					"columns": [
						{
							"id": "24be054c-ff5b-782d-10ef-8a2783aea5b1",
							"code": "GridDetail_plcq2jyDS_DfcAmortizationApplicationNumber",
							"caption": "#ResourceString(GridDetail_plcq2jyDS_DfcAmortizationApplicationNumber)#",
							"dataValueType": 10
						},
						{
							"id": "b5cf1c9e-b738-feb1-0370-8bc26186067a",
							"code": "GridDetail_plcq2jyDS_DfcAmortizationBeginningBalance",
							"caption": "#ResourceString(GridDetail_plcq2jyDS_DfcAmortizationBeginningBalance)#",
							"dataValueType": 6,
							"width": 188
						},
						{
							"id": "5a32f811-64c1-d583-879e-dcb086f3dd93",
							"code": "GridDetail_plcq2jyDS_DfcAmortizationPrincipal",
							"caption": "#ResourceString(GridDetail_plcq2jyDS_DfcAmortizationPrincipal)#",
							"dataValueType": 6
						},
						{
							"id": "f8c5414b-a92d-87b1-0da8-890176a7a16b",
							"code": "GridDetail_plcq2jyDS_DfcAmortizationInterest",
							"caption": "#ResourceString(GridDetail_plcq2jyDS_DfcAmortizationInterest)#",
							"dataValueType": 6
						},
						{
							"id": "bfe58cd1-e721-f5f7-6d58-63d3af0ccaf4",
							"code": "GridDetail_plcq2jyDS_DfcAmortizationAmount",
							"caption": "#ResourceString(GridDetail_plcq2jyDS_DfcAmortizationAmount)#",
							"dataValueType": 6,
							"width": 204
						},
						{
							"id": "c727de45-e6d1-dc01-8720-269cb8de86b4",
							"code": "GridDetail_plcq2jyDS_DfcAmortizationEndingBalance",
							"caption": "#ResourceString(GridDetail_plcq2jyDS_DfcAmortizationEndingBalance)#",
							"dataValueType": 6,
							"width": 156
						},
						{
							"id": "e62be45b-6034-8835-47d9-9fae37dd9685",
							"code": "GridDetail_plcq2jyDS_DfcPaid",
							"caption": "#ResourceString(GridDetail_plcq2jyDS_DfcPaid)#",
							"dataValueType": 12
						}
					],
					"placeholder": false
				},
				"parentName": "GridContainer_p8cjezf",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_v4ucb82",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_v4ucb82_title)#",
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
				"parentName": "TabContainer_qt39gmm",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_tibasq9",
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
				"parentName": "ExpansionPanel_v4ucb82",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_2bd92my",
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
				"parentName": "GridContainer_tibasq9",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_md2pdx0",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_md2pdx0_caption)#",
					"icon": "reload-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "large",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload",
								"useLastLoadParameters": true
							},
							"dataSourceName": "GridDetail_f7dd5jvDS"
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_2bd92my",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_s19lbvi",
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
				"parentName": "ExpansionPanel_v4ucb82",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_f7dd5jv",
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
					"items": "$GridDetail_f7dd5jv",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_f7dd5jvDS_Id",
					"columns": [
						{
							"id": "9d6bdf62-eab1-0b02-c27b-7ebe9b90b69c",
							"code": "GridDetail_f7dd5jvDS_DfcPaymentNumber",
							"caption": "#ResourceString(GridDetail_f7dd5jvDS_DfcPaymentNumber)#",
							"dataValueType": 28
						}
					],
					"placeholder": false
				},
				"parentName": "GridContainer_s19lbvi",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabContainer_zp9469i",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_zp9469i_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "TabPanel_6tron9l",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_yy3oqzn",
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
				"parentName": "TabContainer_zp9469i",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_ix0qfhl",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_ix0qfhl_title)#",
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
				"parentName": "TabContainer_zp9469i",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_c2ycr2l",
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
				"parentName": "ExpansionPanel_ix0qfhl",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_4l8krd0",
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
				"parentName": "GridContainer_c2ycr2l",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_g8a31ak",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_g8a31ak_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "DfcLoanArrears"
						}
					}
				},
				"parentName": "FlexContainer_4l8krd0",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_8x5vqyf",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_8x5vqyf_caption)#",
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
							"dataSourceName": "GridDetail_gvq79mpDS"
						}
					}
				},
				"parentName": "FlexContainer_4l8krd0",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_y3wmv8q",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_y3wmv8q_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_4l8krd0",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_dzmldf1",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_dzmldf1_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_gvq79mp"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_y3wmv8q",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_wfx0828",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_wfx0828_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "DfcLoanArrears"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_y3wmv8q",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_0itdx6r",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_0itdx6r_placeholder)#",
					"iconOnly": true,
					"targetAttributes": [
						"GridDetail_gvq79mp"
					]
				},
				"parentName": "FlexContainer_4l8krd0",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_uc18uax",
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
				"parentName": "ExpansionPanel_ix0qfhl",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_gvq79mp",
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
					"items": "$GridDetail_gvq79mp",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_gvq79mpDS_Id",
					"columns": [
						{
							"id": "2aa706c3-9157-453f-c893-750d94fc3f96",
							"code": "GridDetail_gvq79mpDS_DfcArrearNumber",
							"caption": "#ResourceString(GridDetail_gvq79mpDS_DfcArrearNumber)#",
							"dataValueType": 27
						},
						{
							"id": "152dc58b-d1f6-7945-dda2-f2e4abda9b48",
							"code": "GridDetail_gvq79mpDS_DfcAmortizationPeriod",
							"caption": "#ResourceString(GridDetail_gvq79mpDS_DfcAmortizationPeriod)#",
							"dataValueType": 10
						},
						{
							"id": "f155609f-3a6b-ef30-32ac-1725cc7e9074",
							"code": "GridDetail_gvq79mpDS_DfcArrearDate",
							"caption": "#ResourceString(GridDetail_gvq79mpDS_DfcArrearDate)#",
							"dataValueType": 8
						},
						{
							"id": "d3136d87-7c74-4d68-363c-79753e318989",
							"code": "GridDetail_gvq79mpDS_DfcArrearAmount",
							"caption": "#ResourceString(GridDetail_gvq79mpDS_DfcArrearAmount)#",
							"dataValueType": 6
						}
					],
					"placeholder": false
				},
				"parentName": "GridContainer_uc18uax",
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
					"Items_PredefinedFilter": {
						"value": null
					},
					"GridDetail_z4kqgrt": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_z4kqgrtDS"
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_z4kqgrtDS_DfcPaymentNumber": {
									"modelConfig": {
										"path": "GridDetail_z4kqgrtDS.DfcPaymentNumber"
									}
								},
								"GridDetail_z4kqgrtDS_Id": {
									"modelConfig": {
										"path": "GridDetail_z4kqgrtDS.Id"
									}
								}
							}
						}
					},
					"PageParameters_DfcLookupParameter1_xz2p1pr": {
						"modelConfig": {
							"path": "PageParameters.DfcAccountParameter"
						}
					},
					"PageParameters_DfcLookupParameter1_h2bliav": {
						"modelConfig": {
							"path": "PageParameters.DfcLoansParameter"
						}
					},
					"DfcLoan": {
						"modelConfig": {
							"path": "PageParameters.DfcLoansParameter"
						}
					},
					"DfcLegalEntity": {
						"modelConfig": {
							"path": "PageParameters.DfcAccountParameter"
						}
					},
					"PageParameters_DfcLookupParameter1_u7vj91v": {
						"modelConfig": {
							"path": "PageParameters.DfcCustomer"
						}
					},
					"GridDetail_plcq2jy": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_plcq2jyDS",
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "DfcAmortizationApplicationNumber"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_plcq2jyDS_DfcAmortizationApplicationNumber": {
									"modelConfig": {
										"path": "GridDetail_plcq2jyDS.DfcAmortizationApplicationNumber"
									}
								},
								"GridDetail_plcq2jyDS_DfcAmortizationBeginningBalance": {
									"modelConfig": {
										"path": "GridDetail_plcq2jyDS.DfcAmortizationBeginningBalance"
									}
								},
								"GridDetail_plcq2jyDS_DfcAmortizationPrincipal": {
									"modelConfig": {
										"path": "GridDetail_plcq2jyDS.DfcAmortizationPrincipal"
									}
								},
								"GridDetail_plcq2jyDS_DfcAmortizationInterest": {
									"modelConfig": {
										"path": "GridDetail_plcq2jyDS.DfcAmortizationInterest"
									}
								},
								"GridDetail_plcq2jyDS_DfcAmortizationAmount": {
									"modelConfig": {
										"path": "GridDetail_plcq2jyDS.DfcAmortizationAmount"
									}
								},
								"GridDetail_plcq2jyDS_DfcAmortizationEndingBalance": {
									"modelConfig": {
										"path": "GridDetail_plcq2jyDS.DfcAmortizationEndingBalance"
									}
								},
								"GridDetail_plcq2jyDS_DfcPaid": {
									"modelConfig": {
										"path": "GridDetail_plcq2jyDS.DfcPaid"
									}
								},
								"GridDetail_plcq2jyDS_Id": {
									"modelConfig": {
										"path": "GridDetail_plcq2jyDS.Id"
									}
								}
							}
						}
					},
					"GridDetail_f7dd5jv": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_f7dd5jvDS"
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_f7dd5jvDS_DfcPaymentNumber": {
									"modelConfig": {
										"path": "GridDetail_f7dd5jvDS.DfcPaymentNumber"
									}
								},
								"GridDetail_f7dd5jvDS_Id": {
									"modelConfig": {
										"path": "GridDetail_f7dd5jvDS.Id"
									}
								}
							}
						}
					},
					"GridDetail_gvq79mp": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_gvq79mpDS"
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_gvq79mpDS_DfcArrearNumber": {
									"modelConfig": {
										"path": "GridDetail_gvq79mpDS.DfcArrearNumber"
									}
								},
								"GridDetail_gvq79mpDS_DfcAmortizationPeriod": {
									"modelConfig": {
										"path": "GridDetail_gvq79mpDS.DfcAmortizationPeriod"
									}
								},
								"GridDetail_gvq79mpDS_DfcArrearDate": {
									"modelConfig": {
										"path": "GridDetail_gvq79mpDS.DfcArrearDate"
									}
								},
								"GridDetail_gvq79mpDS_DfcArrearAmount": {
									"modelConfig": {
										"path": "GridDetail_gvq79mpDS.DfcArrearAmount"
									}
								},
								"GridDetail_gvq79mpDS_Id": {
									"modelConfig": {
										"path": "GridDetail_gvq79mpDS.Id"
									}
								}
							}
						}
					},
					"PageParameters_DfcTextParameter1_nm96tmr": {
						"modelConfig": {
							"path": "PageParameters.DfcTextParameter1"
						}
					},
					"PageParameters_DfcLookupParameter1_6v0cx87": {
						"modelConfig": {
							"path": "PageParameters.DfcLookupParameter1"
						}
					},
					"PageParameters_DfcLoansParameterDfcLoanStatus": {
						"modelConfig": {
							"path": "PageParameters.DfcLoansParameterDfcLoanStatus"
						}
					},
					"PageParameters_DfcIntegerParameter1_i98112q": {
						"modelConfig": {
							"path": "PageParameters.DfcIntegerParameter1"
						}
					},
					"PageParameters_DfcLoansParameterDfcLoanAmt": {
						"modelConfig": {
							"path": "PageParameters.DfcLoansParameterDfcLoanAmt"
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"viewModelConfig",
					"attributes"
				],
				"values": {
					"PDS_DfcLoanNo": {
						"modelConfig": {
							"path": "PDS.DfcLoanNo"
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"modelConfig"
				],
				"values": {
					"filterAttributes": []
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"dependencies": {
						"GridDetail_plcq2jyDS": [
							{
								"attributePath": "DfcAmortizationLoan",
								"relationPath": "PageParameters.DfcLoansParameter"
							}
						],
						"GridDetail_f7dd5jvDS": [
							{
								"attributePath": "DfcLoan",
								"relationPath": "PageParameters.DfcLoansParameter"
							}
						],
						"GridDetail_gvq79mpDS": [
							{
								"attributePath": "DfcArrearLoan",
								"relationPath": "PageParameters.DfcLoansParameter"
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
					"GridDetail_z4kqgrtDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "DfcPayments",
							"attributes": {
								"DfcPaymentNumber": {
									"path": "DfcPaymentNumber"
								}
							}
						}
					},
					"GridDetail_plcq2jyDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "DfcLoanAmortizationTable",
							"attributes": {
								"DfcAmortizationApplicationNumber": {
									"path": "DfcAmortizationApplicationNumber"
								},
								"DfcAmortizationBeginningBalance": {
									"path": "DfcAmortizationBeginningBalance"
								},
								"DfcAmortizationPrincipal": {
									"path": "DfcAmortizationPrincipal"
								},
								"DfcAmortizationInterest": {
									"path": "DfcAmortizationInterest"
								},
								"DfcAmortizationAmount": {
									"path": "DfcAmortizationAmount"
								},
								"DfcAmortizationEndingBalance": {
									"path": "DfcAmortizationEndingBalance"
								},
								"DfcPaid": {
									"path": "DfcPaid"
								}
							}
						}
					},
					"GridDetail_f7dd5jvDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "DfcPayments",
							"attributes": {
								"DfcPaymentNumber": {
									"path": "DfcPaymentNumber"
								}
							}
						}
					},
					"GridDetail_gvq79mpDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "DfcLoanArrears",
							"attributes": {
								"DfcArrearNumber": {
									"path": "DfcArrearNumber"
								},
								"DfcAmortizationPeriod": {
									"path": "DfcAmortizationPeriod"
								},
								"DfcArrearDate": {
									"path": "DfcArrearDate"
								},
								"DfcArrearAmount": {
									"path": "DfcArrearAmount"
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
					"PDS",
					"config"
				],
				"values": {
					"entitySchemaName": "DfcLoans",
					"attributes": {
						"DfcLoanNo": {
							"path": "DfcLoanNo"
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