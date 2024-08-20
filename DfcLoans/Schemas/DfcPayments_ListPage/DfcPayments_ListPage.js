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
				"operation": "merge",
				"name": "LeftFilterContainer",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 3,
						"rowSpan": 1
					}
				}
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
				"operation": "merge",
				"name": "RefreshButton",
				"values": {
					"caption": "#ResourceString(RefreshButton_caption)#",
					"size": "large",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload",
								"useLastLoadParameters": true
							},
							"dataSourceName": "GridDetail_z4kqgrtDS"
						}
					},
					"visible": true
				}
			},
			{
				"operation": "move",
				"name": "RefreshButton",
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"index": 2
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
				"name": "Button_fjdn5e1",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_fjdn5e1_caption)#",
					"color": "default",
					"disabled": false,
					"size": "large",
					"iconPosition": "only-text"
				},
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_f1w1c4z",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
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
				"parentName": "MainFilterContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_ypab6vi",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_ypab6vi_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_f1w1c4z",
				"propertyName": "listActions",
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
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					}
				},
				"parentName": "MainFilterContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "addRecord_ih3gbqk",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_ih3gbqk_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_d10zfqv",
				"propertyName": "listActions",
				"index": 0
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
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					}
				},
				"parentName": "MainFilterContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "addRecord_tj6gsds",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_tj6gsds_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_ihfkh5c",
				"propertyName": "listActions",
				"index": 0
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
				"index": 0
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
				"name": "GridDetailAddBtn_dplj9oi",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_dplj9oi_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "DfcLoanAmortizationTable"
						}
					}
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
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_plcq2jyDS"
						}
					}
				},
				"parentName": "FlexContainer_9d6e158",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_ynwi9io",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_ynwi9io_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_9d6e158",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_dl1ofeh",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_dl1ofeh_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_plcq2jy"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_ynwi9io",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_quejj2l",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_quejj2l_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "DfcLoanAmortizationTable"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_ynwi9io",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_ucn3y9f",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_ucn3y9f_placeholder)#",
					"iconOnly": true,
					"targetAttributes": [
						"GridDetail_plcq2jy"
					]
				},
				"parentName": "FlexContainer_9d6e158",
				"propertyName": "items",
				"index": 3
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
				"index": 1
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
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_f7dd5jvDS"
						}
					}
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
					"caption": "#ResourceString(TabContainer_zp9469i_caption)#"
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
						"rowGap": 0
					}
				},
				"parentName": "TabContainer_zp9469i",
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
										"columnName": "DfcAmortizationNumber"
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