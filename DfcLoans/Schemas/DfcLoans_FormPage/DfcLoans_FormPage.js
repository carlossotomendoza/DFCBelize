define("DfcLoans_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
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
				"name": "DfcAccount",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
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
				"index": 1
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
						"row": 3,
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
				"index": 2
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
				"name": "DfcLoanAmt",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_DfcLoanAmt_90436eq",
					"labelPosition": "auto",
					"control": "$PDS_DfcLoanAmt_90436eq"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "DfcInterestRate",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_DfcInterestRate_gjvhcim",
					"labelPosition": "auto",
					"control": "$PDS_DfcInterestRate_gjvhcim"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "DfcLoanStatus",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 6,
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
				"index": 5
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
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});