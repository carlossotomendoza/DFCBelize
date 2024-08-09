define("DfcApplicationForm_FormPage", /**SCHEMA_DEPS*/["@creatio-devkit/common"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
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
				"name": "GeneralInfoTabContainer",
				"values": {
					"columns": [
						"minmax(64px, 1fr)",
						"minmax(64px, 1fr)",
						"minmax(64px, 1fr)"
					],
					"gap": {
						"columnGap": "none",
						"rowGap": "none"
					},
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "medium",
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
					"entitySchemaName": "AppForm"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"recordColumnName": "AppForm",
					"columns": [
						{
							"id": "eaaeab52-f382-4a3c-901d-28eaee023e8f",
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
				"name": "ParticipantRole",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_ParticipantRole_elo7xfk",
					"labelPosition": "auto",
					"control": "$PDS_ParticipantRole_elo7xfk",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"mode": "List",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Participant",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.Participant",
					"control": "$Participant",
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
				"name": "FinApplication",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_FinApplication_3czow11",
					"labelPosition": "auto",
					"control": "$PDS_FinApplication_3czow11",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"readonly": true
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "DfcAge",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_DfcAge_y7ssvu7",
					"labelPosition": "auto",
					"control": "$PDS_DfcAge_y7ssvu7"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Number",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.PDS_Number_z6dcauf",
					"labelPosition": "auto",
					"control": "$PDS_Number_z6dcauf",
					"visible": true,
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
				"name": "GridContainer_o2geih1",
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
				"name": "Product",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_FinApplicationProduct",
					"ariaLabel": "#ResourceString(ComboBox_r5b29pl_ariaLabel)#",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"readonly": true,
					"control": "$PDS_FinApplicationProduct"
				},
				"parentName": "GridContainer_o2geih1",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_23if3sn",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_23if3sn_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "Product",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ChartWidget_Finances",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ChartWidget",
					"config": {
						"title": "#ResourceString(ChartWidget_Finances_title)#",
						"color": "green",
						"theme": "full-fill",
						"scales": {
							"stacked": false,
							"xAxis": {
								"name": "",
								"formatting": {
									"type": "string",
									"maxLinesCount": 2,
									"maxLineLength": 10
								}
							},
							"yAxis": {
								"name": "",
								"formatting": {
									"type": "number",
									"thousandAbbreviation": {
										"enabled": true
									}
								}
							}
						},
						"series": [
							{
								"color": "green",
								"type": "horizontal-bar",
								"label": "#ResourceString(ChartWidget_Finances_series_0)#",
								"legend": {
									"enabled": false
								},
								"data": {
									"providing": {
										"attribute": "ChartWidget_Finances_SeriesData_0",
										"schemaName": "DfcAppFinancials",
										"filters": {
											"filter": {
												"items": {
													"columnIsNotNullFilter": {
														"comparisonType": 2,
														"filterType": 2,
														"isEnabled": true,
														"isNull": false,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "DfcFinType"
														}
													}
												},
												"logicalOperation": 0,
												"isEnabled": true,
												"filterType": 6,
												"rootSchemaName": "DfcAppFinancials"
											},
											"filterAttributes": []
										},
										"aggregation": {
											"column": {
												"orderDirection": 0,
												"orderPosition": -1,
												"isVisible": true,
												"expression": {
													"expressionType": 1,
													"functionArgument": {
														"expressionType": 0,
														"columnPath": "DfcAmount"
													},
													"functionType": 2,
													"aggregationType": 2,
													"aggregationEvalType": 0
												}
											}
										},
										"dependencies": [],
										"rowCount": 50,
										"grouping": {
											"type": "by-value",
											"column": {
												"orderDirection": 0,
												"orderPosition": -1,
												"isVisible": true,
												"expression": {
													"expressionType": 0,
													"columnPath": "DfcFinType"
												}
											}
										}
									},
									"formatting": {
										"type": "number",
										"decimalSeparator": ".",
										"decimalPrecision": 2,
										"thousandSeparator": ","
									}
								},
								"dataLabel": {
									"display": true
								}
							}
						],
						"seriesOrder": {
							"type": "by-grouping-value",
							"direction": 1
						}
					},
					"visible": true,
					"sectionBindingColumnRecordId": "$Id"
				},
				"parentName": "GridContainer_o2geih1",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Surname",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.PDS_Surname_3arndre",
					"labelPosition": "auto",
					"control": "$PDS_Surname_3arndre"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GivenName",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.PDS_GivenName_ouqqyqy",
					"labelPosition": "auto",
					"control": "$PDS_GivenName_ouqqyqy"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Input_h0szykq",
				"values": {
					"layoutConfig": {
						"column": 3,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.PDS_MiddleName_hcy67xd",
					"labelPosition": "auto",
					"control": "$PDS_MiddleName_hcy67xd"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "BirthDate",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "date",
					"label": "$Resources.Strings.PDS_BirthDate_2fvt90y",
					"labelPosition": "auto",
					"control": "$PDS_BirthDate_2fvt90y"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Input_fg392yj",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.PDS_PlaceOfBirth_w9jovk9",
					"labelPosition": "auto",
					"control": "$PDS_PlaceOfBirth_w9jovk9"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "Citizenship",
				"values": {
					"layoutConfig": {
						"column": 3,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_Citizenship_f2r3rjd",
					"labelPosition": "auto",
					"control": "$PDS_Citizenship_f2r3rjd",
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
				"index": 5
			},
			{
				"operation": "insert",
				"name": "Gender",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_Gender_0u1drh9",
					"labelPosition": "auto",
					"control": "$PDS_Gender_0u1drh9",
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
				"index": 6
			},
			{
				"operation": "insert",
				"name": "MaritalStatus",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_MaritalStatus_fh5jwcy",
					"labelPosition": "auto",
					"control": "$PDS_MaritalStatus_fh5jwcy",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"mode": "List"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "DfcTitle",
				"values": {
					"layoutConfig": {
						"column": 3,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_DfcTitle_3644g7d",
					"labelPosition": "auto",
					"control": "$PDS_DfcTitle_3644g7d",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "addRecord_jd28g2k",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_jd28g2k_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "DfcTitle",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_IdInfo",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_g1l2awc_title)#",
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
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_bnhqrl6",
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
				"parentName": "ExpansionPanel_IdInfo",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_x9q9ydo",
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
				"parentName": "GridContainer_bnhqrl6",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_IdInfo",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_IdInfo_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "DfcIdInfo",
							"defaultValues": [
								{
									"attributeName": "DfcAppform",
									"value": "$DfcAppform"
								},
								{
									"attributeName": "DfcProduct",
									"value": "$DfcProduct"
								}
							]
						}
					},
					"clickMode": "default",
					"visible": true
				},
				"parentName": "FlexContainer_x9q9ydo",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_na2bfvo",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_na2bfvo_caption)#",
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
							"dataSourceName": "GridDetail_IdInfoDS"
						}
					}
				},
				"parentName": "FlexContainer_x9q9ydo",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_ryo7ydk",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_ryo7ydk_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_x9q9ydo",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_v78xqha",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_v78xqha_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_IdInfo"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_ryo7ydk",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_u6ngbk4",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_u6ngbk4_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "DfcIdInfo"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_ryo7ydk",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_ehpe3f4",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_ehpe3f4_placeholder)#",
					"iconOnly": true,
					"targetAttributes": [
						"GridDetail_IdInfo"
					]
				},
				"parentName": "FlexContainer_x9q9ydo",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_yje2tm5",
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
				"parentName": "ExpansionPanel_IdInfo",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_IdInfo",
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
					"items": "$GridDetail_luttt9y",
					"activeRow": "$GridDetail_luttt9y_ActiveRow",
					"selectionState": "$GridDetail_luttt9y_SelectionState",
					"primaryColumnName": "GridDetail_IdInfoDS_Id",
					"columns": [
						{
							"id": "b98d8410-1c54-9a0c-bfea-e0659037158e",
							"code": "GridDetail_IdInfoDS_DfcNumber",
							"caption": "#ResourceString(GridDetail_IdInfoDS_DfcNumber)#",
							"dataValueType": 27,
							"width": 146.99998474121094
						},
						{
							"id": "4de85f03-5b32-ea76-c153-3c95ac1e1557",
							"code": "GridDetail_IdInfoDS_DfcListInCondition",
							"caption": "#ResourceString(GridDetail_IdInfoDS_DfcListInCondition)#",
							"dataValueType": 10
						},
						{
							"id": "e61e8a48-d633-856d-b979-b64be0db0891",
							"code": "GridDetail_IdInfoDS_DfcIdNumber",
							"caption": "#ResourceString(GridDetail_IdInfoDS_DfcIdNumber)#",
							"dataValueType": 27
						},
						{
							"id": "43025836-b66c-1323-0c15-b8304630779a",
							"code": "GridDetail_IdInfoDS_DfcIdIssueDate",
							"caption": "#ResourceString(GridDetail_IdInfoDS_DfcIdIssueDate)#",
							"dataValueType": 8,
							"width": 142
						},
						{
							"id": "d6f16a2c-6da4-ef4a-c539-1a9db26d284f",
							"code": "GridDetail_IdInfoDS_DfcIdExpirationDate",
							"caption": "#ResourceString(GridDetail_IdInfoDS_DfcIdExpirationDate)#",
							"dataValueType": 8,
							"width": 166
						},
						{
							"id": "1b9d7333-f812-b29b-523a-1f345d5f16fd",
							"code": "GridDetail_IdInfoDS_DfcDocUploadStatus",
							"caption": "#ResourceString(GridDetail_IdInfoDS_DfcDocUploadStatus)#",
							"dataValueType": 10
						},
						{
							"id": "7b940d83-4c5c-ab08-5eb6-c78f1726ec94",
							"code": "GridDetail_IdInfoDS_DfcDocImageFile",
							"caption": "#ResourceString(GridDetail_IdInfoDS_DfcDocImageFile)#",
							"dataValueType": 25
						}
					],
					"placeholder": false
				},
				"parentName": "GridContainer_yje2tm5",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_y15imv2",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_y15imv2_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "none",
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
				"name": "GridContainer_1zai3xl",
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
				"parentName": "ExpansionPanel_y15imv2",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_u5kjh0j",
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
				"parentName": "GridContainer_1zai3xl",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_p9jw7e7",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_p9jw7e7_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "AppFormAddress",
							"defaultValues": [
								{
									"attributeName": "AppForm",
									"value": "$AppForm"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_u5kjh0j",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_3a5xg3n",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_3a5xg3n_caption)#",
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
							"dataSourceName": "GridDetail_y1q7iaiDS"
						}
					}
				},
				"parentName": "FlexContainer_u5kjh0j",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_epwcujl",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_epwcujl_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_u5kjh0j",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_o06ihjy",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_o06ihjy_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_y1q7iai"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_epwcujl",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_r2yp4v6",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_r2yp4v6_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "AppFormAddress"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_epwcujl",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_at2sas1",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_at2sas1_placeholder)#",
					"iconOnly": true,
					"targetAttributes": [
						"GridDetail_y1q7iai"
					]
				},
				"parentName": "FlexContainer_u5kjh0j",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_kwwha7x",
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
				"parentName": "ExpansionPanel_y15imv2",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_y1q7iai",
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
					"items": "$GridDetail_y1q7iai",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_y1q7iaiDS_Id",
					"columns": [
						{
							"id": "6e95b959-caa0-acdd-f49a-1e5abec93516",
							"code": "GridDetail_y1q7iaiDS_AddressType",
							"caption": "#ResourceString(GridDetail_y1q7iaiDS_AddressType)#",
							"dataValueType": 10,
							"width": 156
						},
						{
							"id": "c2496914-c9ca-ccf9-e538-cbb4710213a5",
							"code": "GridDetail_y1q7iaiDS_Primary",
							"caption": "#ResourceString(GridDetail_y1q7iaiDS_Primary)#",
							"dataValueType": 12,
							"width": 114
						},
						{
							"id": "32c84f3f-f5ea-0519-3f51-5741963b0162",
							"code": "GridDetail_y1q7iaiDS_DfcPrimaryResYears",
							"caption": "#ResourceString(GridDetail_y1q7iaiDS_DfcPrimaryResYears)#",
							"dataValueType": 31,
							"width": 154.99999237060547
						},
						{
							"id": "88f1f5c2-ea86-1caf-3145-f0e2241ae972",
							"code": "GridDetail_y1q7iaiDS_Address",
							"caption": "#ResourceString(GridDetail_y1q7iaiDS_Address)#",
							"dataValueType": 30
						},
						{
							"id": "7671d98b-6ce2-a642-4a32-bf4c0a1f1431",
							"code": "GridDetail_y1q7iaiDS_AptOffice",
							"caption": "#ResourceString(GridDetail_y1q7iaiDS_AptOffice)#",
							"dataValueType": 27
						},
						{
							"id": "d51a2c51-1fac-3474-7c0c-56f1f279e12b",
							"code": "GridDetail_y1q7iaiDS_DfcTownVillage",
							"caption": "#ResourceString(GridDetail_y1q7iaiDS_DfcTownVillage)#",
							"dataValueType": 10
						},
						{
							"id": "f70264da-182a-97c9-54c5-64e099beb42c",
							"code": "GridDetail_y1q7iaiDS_District",
							"caption": "#ResourceString(GridDetail_y1q7iaiDS_District)#",
							"dataValueType": 10
						},
						{
							"id": "d41cc3b5-2ca3-4b29-3a40-f0ee652904c8",
							"code": "GridDetail_y1q7iaiDS_Country",
							"caption": "#ResourceString(GridDetail_y1q7iaiDS_Country)#",
							"dataValueType": 10
						}
					],
					"placeholder": false
				},
				"parentName": "GridContainer_kwwha7x",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_Comm",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_fag8f3m_title)#",
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
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_dshm0xq",
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
				"parentName": "ExpansionPanel_Comm",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_p25v6me",
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
				"parentName": "GridContainer_dshm0xq",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_Comm",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_oyrzbp5_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "DfcAppFormCommInfo",
							"defaultValues": [
								{
									"attributeName": "DfcAppForm",
									"value": "$DfcAppForm"
								}
							]
						}
					},
					"clickMode": "default"
				},
				"parentName": "FlexContainer_p25v6me",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_y9sgvjg",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_y9sgvjg_caption)#",
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
							"dataSourceName": "GridDetail_CommDS"
						}
					}
				},
				"parentName": "FlexContainer_p25v6me",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_euv00hp",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_euv00hp_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_p25v6me",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_o1h31ob",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_o1h31ob_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_Comm"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_euv00hp",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_jyj3jx0",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_jyj3jx0_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "DfcAppFormCommInfo"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_euv00hp",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_gsoleze",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_gsoleze_placeholder)#",
					"iconOnly": true,
					"targetAttributes": [
						"GridDetail_Comm"
					]
				},
				"parentName": "FlexContainer_p25v6me",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_szgt41h",
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
				"parentName": "ExpansionPanel_Comm",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_Comm",
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
					"items": "$GridDetail_1y0i10c",
					"activeRow": "$GridDetail_1y0i10c_ActiveRow",
					"selectionState": "$GridDetail_1y0i10c_SelectionState",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_CommDS_Id",
					"columns": [
						{
							"id": "66d2402d-5209-516c-43b3-4129f2a75076",
							"code": "GridDetail_CommDS_DfcRefNo",
							"caption": "#ResourceString(GridDetail_CommDS_DfcRefNo)#",
							"dataValueType": 27,
							"width": 175.99998474121094
						},
						{
							"id": "5b34a94b-a1c3-3def-2e3f-31e31a42fb1d",
							"code": "GridDetail_CommDS_DfcPhone",
							"caption": "#ResourceString(GridDetail_CommDS_DfcPhone)#",
							"dataValueType": 42,
							"width": 184.99998474121094
						},
						{
							"id": "c0a3242b-1081-f089-ab64-a52052874523",
							"code": "GridDetail_CommDS_DfcEmailAddr",
							"caption": "#ResourceString(GridDetail_CommDS_DfcEmailAddr)#",
							"dataValueType": 45,
							"width": 200.99998474121094
						},
						{
							"id": "1457bbdd-8e8d-63b6-39ff-06a842ffcaa0",
							"code": "GridDetail_CommDS_CreatedBy",
							"caption": "#ResourceString(GridDetail_CommDS_CreatedBy)#",
							"dataValueType": 10
						},
						{
							"id": "c2db70ac-dc1d-e5e9-56fe-c442da6dcbde",
							"code": "GridDetail_CommDS_ModifiedBy",
							"caption": "#ResourceString(GridDetail_CommDS_ModifiedBy)#",
							"dataValueType": 10
						}
					],
					"placeholder": false
				},
				"parentName": "GridContainer_szgt41h",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabContainer_Employment",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_Employment_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_5pv95nv",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
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
				"parentName": "TabContainer_Employment",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Education",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_Education_f70dhue",
					"labelPosition": "above",
					"control": "$PDS_Education_f70dhue",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"mode": "List",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_5pv95nv",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "EmploymentType",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_EmploymentType_3jdsobh",
					"labelPosition": "above",
					"control": "$PDS_EmploymentType_3jdsobh",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"mode": "List"
				},
				"parentName": "GridContainer_5pv95nv",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "TotalWorkExperienceYears",
				"values": {
					"layoutConfig": {
						"column": 3,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_TotalWorkExperienceYears_7vpwou3",
					"labelPosition": "above",
					"control": "$PDS_TotalWorkExperienceYears_7vpwou3",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_5pv95nv",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Input_31983gx",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.PDS_DfcEmployer_hxojp8j",
					"labelPosition": "above",
					"control": "$PDS_DfcEmployer_hxojp8j",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_5pv95nv",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "DfcEmpContactLname",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.PDS_DfcEmpContactLname_l5an6pw",
					"labelPosition": "above",
					"control": "$PDS_DfcEmpContactLname_l5an6pw"
				},
				"parentName": "GridContainer_5pv95nv",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "DfcEmpContactName",
				"values": {
					"layoutConfig": {
						"column": 3,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.PDS_DfcEmpContactName_87d0yro",
					"labelPosition": "above",
					"control": "$PDS_DfcEmpContactName_87d0yro",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_5pv95nv",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "DfcEmpContactPhone",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.PhoneInput",
					"label": "$Resources.Strings.PDS_DfcEmpContactPhone_76k9xqm",
					"labelPosition": "above",
					"control": "$PDS_DfcEmpContactPhone_76k9xqm",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_5pv95nv",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "DfcEmpContactEmail",
				"values": {
					"layoutConfig": {
						"column": 3,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.EmailInput",
					"label": "$Resources.Strings.PDS_DfcEmpContactEmail_vbivavf",
					"labelPosition": "above",
					"control": "$PDS_DfcEmpContactEmail_vbivavf",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_5pv95nv",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_Occupations",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_rv9w93u_title)#",
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
				"parentName": "TabContainer_Employment",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_fji99vz",
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
				"parentName": "ExpansionPanel_Occupations",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_l7g2xor",
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
				"parentName": "GridContainer_fji99vz",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_Occupations",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_Occupations_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "DfcParticipantOccup",
							"defaultValues": [
								{
									"attributeName": "DfcAppForm",
									"value": "$DfcAppForm"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_l7g2xor",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_rg5g6ub",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_rg5g6ub_caption)#",
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
							"dataSourceName": "GridDetail_OccupationsDS"
						}
					}
				},
				"parentName": "FlexContainer_l7g2xor",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_pqrmolg",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_pqrmolg_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_l7g2xor",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_xpyex3k",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_xpyex3k_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_Occupations"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_pqrmolg",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_l2w2fsi",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_l2w2fsi_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "DfcParticipantOccup"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_pqrmolg",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_ssyligs",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_ssyligs_placeholder)#",
					"iconOnly": true,
					"targetAttributes": [
						"GridDetail_Occupations"
					]
				},
				"parentName": "FlexContainer_l7g2xor",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_o7pd7yy",
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
				"parentName": "ExpansionPanel_Occupations",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_Occupations",
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
					"items": "$GridDetail_nu5gx87",
					"activeRow": "$GridDetail_nu5gx87_ActiveRow",
					"selectionState": "$GridDetail_nu5gx87_SelectionState",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_OccupationsDS_Id",
					"columns": [
						{
							"id": "20bc4917-f1be-4b27-7326-0b794ae84863",
							"code": "GridDetail_OccupationsDS_DfcRefNo",
							"caption": "#ResourceString(GridDetail_OccupationsDS_DfcRefNo)#",
							"dataValueType": 27,
							"width": 196.99998474121094
						},
						{
							"id": "060ef93c-79f0-fe47-4dae-fd825683d4c7",
							"code": "GridDetail_OccupationsDS_DfcOccupation",
							"caption": "#ResourceString(GridDetail_OccupationsDS_DfcOccupation)#",
							"dataValueType": 10,
							"width": 200
						},
						{
							"id": "cabc0c84-614f-5cfe-a851-ee409ea9da8e",
							"code": "GridDetail_OccupationsDS_DfcYearsOfExp",
							"caption": "#ResourceString(GridDetail_OccupationsDS_DfcYearsOfExp)#",
							"dataValueType": 4,
							"width": 173.99999237060547
						}
					],
					"placeholder": false
				},
				"parentName": "GridContainer_o7pd7yy",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_Finances",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_qnmxmsi_title)#",
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
				"parentName": "TabContainer_Employment",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_kw4nxd6",
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
				"parentName": "ExpansionPanel_Finances",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_aqmw49p",
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
				"parentName": "GridContainer_kw4nxd6",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_Finances",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_Finances_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "DfcAppFinancials",
							"defaultValues": [
								{
									"attributeName": "DfcAppForm",
									"value": "$DfcAppForm"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_aqmw49p",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_8a9preb",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_8a9preb_caption)#",
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
							"dataSourceName": "GridDetail_FinancesDS"
						}
					}
				},
				"parentName": "FlexContainer_aqmw49p",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_cvhgbe3",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_cvhgbe3_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_aqmw49p",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_judohfk",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_judohfk_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_Finances"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_cvhgbe3",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_w69u30v",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_w69u30v_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "DfcAppFinancials"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_cvhgbe3",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_wpsl7h1",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_wpsl7h1_placeholder)#",
					"iconOnly": true,
					"targetAttributes": [
						"GridDetail_Finances"
					]
				},
				"parentName": "FlexContainer_aqmw49p",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_k2g2p28",
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
				"parentName": "ExpansionPanel_Finances",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_Finances",
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
					"items": "$GridDetail_1wwp28w",
					"activeRow": "$GridDetail_1wwp28w_ActiveRow",
					"selectionState": "$GridDetail_1wwp28w_SelectionState",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_FinancesDS_Id",
					"columns": [
						{
							"id": "a2545dd7-4007-37d7-5c72-97a179a0c8e0",
							"code": "GridDetail_FinancesDS_DfcRefNo",
							"caption": "#ResourceString(GridDetail_FinancesDS_DfcRefNo)#",
							"dataValueType": 27,
							"width": 159.99998474121094
						},
						{
							"id": "b9390de6-ed3c-f025-a5e4-fc85e8d7b16e",
							"code": "GridDetail_FinancesDS_DfcFinType",
							"caption": "#ResourceString(GridDetail_FinancesDS_DfcFinType)#",
							"dataValueType": 10,
							"width": 160
						},
						{
							"id": "7d26fdf5-5c09-333d-f94a-7bf169f159b2",
							"code": "GridDetail_FinancesDS_DfcFinCategory",
							"caption": "#ResourceString(GridDetail_FinancesDS_DfcFinCategory)#",
							"dataValueType": 10,
							"width": 175.98863220214844
						},
						{
							"id": "31d3242a-e753-844d-d22f-41e57a442c70",
							"code": "GridDetail_FinancesDS_DfcAmount",
							"caption": "#ResourceString(GridDetail_FinancesDS_DfcAmount)#",
							"dataValueType": 32
						},
						{
							"id": "0f0926b1-ede0-81f0-722c-407ceff4ec0e",
							"code": "GridDetail_FinancesDS_CreatedBy",
							"caption": "#ResourceString(GridDetail_FinancesDS_CreatedBy)#",
							"dataValueType": 10
						},
						{
							"id": "451f06b0-f0e2-f66b-985e-3414e41bf892",
							"code": "GridDetail_FinancesDS_CreatedOn",
							"caption": "#ResourceString(GridDetail_FinancesDS_CreatedOn)#",
							"dataValueType": 7
						},
						{
							"id": "fcb07c85-3611-4463-acd9-dc66cbd0dab1",
							"code": "GridDetail_FinancesDS_ModifiedBy",
							"caption": "#ResourceString(GridDetail_FinancesDS_ModifiedBy)#",
							"dataValueType": 10
						},
						{
							"id": "35eaab8b-c016-584a-45ec-66d3400b22f7",
							"code": "GridDetail_FinancesDS_ModifiedOn",
							"caption": "#ResourceString(GridDetail_FinancesDS_ModifiedOn)#",
							"dataValueType": 7
						}
					],
					"placeholder": false
				},
				"parentName": "GridContainer_k2g2p28",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabContainer_hjvafrw",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_hjvafrw_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_oaa108b",
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
				"parentName": "TabContainer_hjvafrw",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_Attachments",
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
					"title": "#ResourceString(ExpansionPanel_vyqnblu_title)#",
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
				"parentName": "GridContainer_oaa108b",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_43l6chz",
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
				"parentName": "ExpansionPanel_Attachments",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_vve6yk2",
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
				"parentName": "GridContainer_43l6chz",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_AppFormAttach",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_AppFormAttach_caption)#",
					"icon": "upload-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.UploadFileRequest",
						"params": {
							"viewElementName": "FileList_AppFormAttachments"
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_vve6yk2",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_dtldgpp",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_dtldgpp_caption)#",
					"icon": "reload-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload",
								"useLastLoadParameters": true
							},
							"dataSourceName": "FileList_92nvza3DS"
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_vve6yk2",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_fv64nsg",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_fv64nsg_placeholder)#",
					"targetAttributes": [
						"FileList_92nvza3"
					]
				},
				"parentName": "FlexContainer_vve6yk2",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_dehqhso",
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
				"parentName": "ExpansionPanel_Attachments",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FileList_AppFormAttachments",
				"values": {
					"type": "crt.FileList",
					"masterRecordColumnValue": "$Id",
					"recordColumnName": "RecordId",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 10
					},
					"items": "$FileList_92nvza3",
					"primaryColumnName": "FileList_92nvza3DS_Id",
					"columns": [
						{
							"id": "38d23e5b-555a-d258-04e0-3915134d8808",
							"code": "FileList_92nvza3DS_Name",
							"caption": "#ResourceString(FileList_92nvza3DS_Name)#",
							"dataValueType": 28
						},
						{
							"id": "ade1f8c4-bba6-41db-92b5-f63f503879ad",
							"code": "FileList_92nvza3DS_CreatedOn",
							"caption": "#ResourceString(FileList_92nvza3DS_CreatedOn)#",
							"dataValueType": 7
						},
						{
							"id": "0e3423cf-f1d4-e73c-da29-3eba792e3eca",
							"code": "FileList_92nvza3DS_CreatedBy",
							"caption": "#ResourceString(FileList_92nvza3DS_CreatedBy)#",
							"dataValueType": 10
						},
						{
							"id": "01824a73-b003-b876-ae46-531076db2b24",
							"code": "FileList_92nvza3DS_Size",
							"caption": "#ResourceString(FileList_92nvza3DS_Size)#",
							"dataValueType": 4
						}
					],
					"tag": "Application Form Documents"
				},
				"parentName": "GridContainer_dehqhso",
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
					"Participant": {
						"modelConfig": {
							"path": "PDS.Participant"
						}
					},
					"PDS_Surname_3arndre": {
						"modelConfig": {
							"path": "PDS.Surname"
						}
					},
					"PDS_GivenName_ouqqyqy": {
						"modelConfig": {
							"path": "PDS.GivenName"
						}
					},
					"PDS_MiddleName_hcy67xd": {
						"modelConfig": {
							"path": "PDS.MiddleName"
						}
					},
					"PDS_MaritalStatus_aesizz2": {
						"modelConfig": {
							"path": "PDS.MaritalStatus"
						}
					},
					"PDS_ParticipantRole_elo7xfk": {
						"modelConfig": {
							"path": "PDS.ParticipantRole"
						}
					},
					"PDS_BirthDate_2fvt90y": {
						"modelConfig": {
							"path": "PDS.BirthDate"
						}
					},
					"PDS_PlaceOfBirth_w9jovk9": {
						"modelConfig": {
							"path": "PDS.PlaceOfBirth"
						}
					},
					"PDS_Citizenship_f2r3rjd": {
						"modelConfig": {
							"path": "PDS.Citizenship"
						}
					},
					"PDS_FinApplication_3czow11": {
						"modelConfig": {
							"path": "PDS.FinApplication"
						}
					},
					"PDS_Gender_0u1drh9": {
						"modelConfig": {
							"path": "PDS.Gender"
						}
					},
					"PDS_MaritalStatus_fh5jwcy": {
						"modelConfig": {
							"path": "PDS.MaritalStatus"
						}
					},
					"PDS_DfcTitle_apjji86": {
						"modelConfig": {
							"path": "PDS.DfcTitle"
						}
					},
					"PDS_DfcTitle_3644g7d": {
						"modelConfig": {
							"path": "PDS.DfcTitle"
						}
					},
					"PDS_SocialStatus_pre2jq7": {
						"modelConfig": {
							"path": "PDS.SocialStatus"
						}
					},
					"AppForm": {
						"modelConfig": {
							"path": "PDS.Id"
						}
					},
					"GridDetail_y1q7iai": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_y1q7iaiDS",
							"sortingConfig": {
								"default": [
									{
										"direction": "desc",
										"columnName": "DfcPrimaryResYears"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_y1q7iaiDS_AddressType": {
									"modelConfig": {
										"path": "GridDetail_y1q7iaiDS.AddressType"
									}
								},
								"GridDetail_y1q7iaiDS_Primary": {
									"modelConfig": {
										"path": "GridDetail_y1q7iaiDS.Primary"
									}
								},
								"GridDetail_y1q7iaiDS_DfcPrimaryResYears": {
									"modelConfig": {
										"path": "GridDetail_y1q7iaiDS.DfcPrimaryResYears"
									}
								},
								"GridDetail_y1q7iaiDS_Address": {
									"modelConfig": {
										"path": "GridDetail_y1q7iaiDS.Address"
									}
								},
								"GridDetail_y1q7iaiDS_AptOffice": {
									"modelConfig": {
										"path": "GridDetail_y1q7iaiDS.AptOffice"
									}
								},
								"GridDetail_y1q7iaiDS_DfcTownVillage": {
									"modelConfig": {
										"path": "GridDetail_y1q7iaiDS.DfcTownVillage"
									}
								},
								"GridDetail_y1q7iaiDS_District": {
									"modelConfig": {
										"path": "GridDetail_y1q7iaiDS.District"
									}
								},
								"GridDetail_y1q7iaiDS_Country": {
									"modelConfig": {
										"path": "GridDetail_y1q7iaiDS.Country"
									}
								},
								"GridDetail_y1q7iaiDS_Id": {
									"modelConfig": {
										"path": "GridDetail_y1q7iaiDS.Id"
									}
								}
							}
						}
					},
					"PDS_Number_z6dcauf": {
						"modelConfig": {
							"path": "PDS.Number"
						}
					},
					"PDS_DfcAge_y7ssvu7": {
						"modelConfig": {
							"path": "PDS.DfcAge"
						}
					},
					"DataGrid_dwqvy4d": {
						"isCollection": true,
						"modelConfig": {
							"path": "DataGrid_dwqvy4dDS"
						},
						"viewModelConfig": {
							"attributes": {
								"DataGrid_dwqvy4dDS_DfcOccupation": {
									"modelConfig": {
										"path": "DataGrid_dwqvy4dDS.DfcOccupation"
									}
								},
								"DataGrid_dwqvy4dDS_CreatedBy": {
									"modelConfig": {
										"path": "DataGrid_dwqvy4dDS.CreatedBy"
									}
								},
								"DataGrid_dwqvy4dDS_CreatedOn": {
									"modelConfig": {
										"path": "DataGrid_dwqvy4dDS.CreatedOn"
									}
								},
								"DataGrid_dwqvy4dDS_Id": {
									"modelConfig": {
										"path": "DataGrid_dwqvy4dDS.Id"
									}
								}
							}
						}
					},
					"DataGrid_o5ajkfj": {
						"isCollection": true,
						"modelConfig": {
							"path": "DataGrid_o5ajkfjDS"
						},
						"viewModelConfig": {
							"attributes": {
								"DataGrid_o5ajkfjDS_DfcOccupation": {
									"modelConfig": {
										"path": "DataGrid_o5ajkfjDS.DfcOccupation"
									}
								},
								"DataGrid_o5ajkfjDS_CreatedOn": {
									"modelConfig": {
										"path": "DataGrid_o5ajkfjDS.CreatedOn"
									}
								},
								"DataGrid_o5ajkfjDS_CreatedBy": {
									"modelConfig": {
										"path": "DataGrid_o5ajkfjDS.CreatedBy"
									}
								},
								"DataGrid_o5ajkfjDS_Id": {
									"modelConfig": {
										"path": "DataGrid_o5ajkfjDS.Id"
									}
								}
							}
						}
					},
					"PDS_Education_h487lfz": {
						"modelConfig": {
							"path": "PDS.Education"
						}
					},
					"PDS_Education_il34tv5": {
						"modelConfig": {
							"path": "PDS.Education"
						}
					},
					"PDS_EmploymentType_18t8u5s": {
						"modelConfig": {
							"path": "PDS.EmploymentType"
						}
					},
					"PDS_TotalWorkExperienceYears_w65r7nt": {
						"modelConfig": {
							"path": "PDS.TotalWorkExperienceYears"
						}
					},
					"PDS_FinApplicationProduct": {
						"modelConfig": {
							"path": "PDS.FinApplicationProduct"
						}
					},
					"GridDetail_l225zrd": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_l225zrdDS"
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_l225zrdDS_DfcNumber": {
									"modelConfig": {
										"path": "GridDetail_l225zrdDS.DfcNumber"
									}
								},
								"GridDetail_l225zrdDS_DfcListInCondition": {
									"modelConfig": {
										"path": "GridDetail_l225zrdDS.DfcListInCondition"
									}
								},
								"GridDetail_l225zrdDS_DfcIdNumber": {
									"modelConfig": {
										"path": "GridDetail_l225zrdDS.DfcIdNumber"
									}
								},
								"GridDetail_l225zrdDS_DfcIdIssueDate": {
									"modelConfig": {
										"path": "GridDetail_l225zrdDS.DfcIdIssueDate"
									}
								},
								"GridDetail_l225zrdDS_DfcIdExpirationDate": {
									"modelConfig": {
										"path": "GridDetail_l225zrdDS.DfcIdExpirationDate"
									}
								},
								"GridDetail_l225zrdDS_DfcDocUploadStatus": {
									"modelConfig": {
										"path": "GridDetail_l225zrdDS.DfcDocUploadStatus"
									}
								},
								"GridDetail_l225zrdDS_DfcDocImageFile": {
									"modelConfig": {
										"path": "GridDetail_l225zrdDS.DfcDocImageFile"
									}
								},
								"GridDetail_l225zrdDS_Id": {
									"modelConfig": {
										"path": "GridDetail_l225zrdDS.Id"
									}
								}
							}
						}
					},
					"DfcAppform": {
						"modelConfig": {
							"path": "PDS.Id"
						}
					},
					"DfcProduct": {
						"modelConfig": {
							"path": "PDS.FinApplicationProduct"
						}
					},
					"GridDetail_2rr2wlj": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_2rr2wljDS"
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_2rr2wljDS_Number": {
									"modelConfig": {
										"path": "GridDetail_2rr2wljDS.Number"
									}
								},
								"GridDetail_2rr2wljDS_Id": {
									"modelConfig": {
										"path": "GridDetail_2rr2wljDS.Id"
									}
								}
							}
						}
					},
					"GridDetail_rgzalax": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_rgzalaxDS"
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_rgzalaxDS_DfcRefNo": {
									"modelConfig": {
										"path": "GridDetail_rgzalaxDS.DfcRefNo"
									}
								},
								"GridDetail_rgzalaxDS_DfcCommunicationType": {
									"modelConfig": {
										"path": "GridDetail_rgzalaxDS.DfcCommunicationType"
									}
								},
								"GridDetail_rgzalaxDS_DfcPhone": {
									"modelConfig": {
										"path": "GridDetail_rgzalaxDS.DfcPhone"
									}
								},
								"GridDetail_rgzalaxDS_DfcEmailAddr": {
									"modelConfig": {
										"path": "GridDetail_rgzalaxDS.DfcEmailAddr"
									}
								},
								"GridDetail_rgzalaxDS_CreatedBy": {
									"modelConfig": {
										"path": "GridDetail_rgzalaxDS.CreatedBy"
									}
								},
								"GridDetail_rgzalaxDS_CreatedOn": {
									"modelConfig": {
										"path": "GridDetail_rgzalaxDS.CreatedOn"
									}
								},
								"GridDetail_rgzalaxDS_ModifiedBy": {
									"modelConfig": {
										"path": "GridDetail_rgzalaxDS.ModifiedBy"
									}
								},
								"GridDetail_rgzalaxDS_ModifiedOn": {
									"modelConfig": {
										"path": "GridDetail_rgzalaxDS.ModifiedOn"
									}
								},
								"GridDetail_rgzalaxDS_Id": {
									"modelConfig": {
										"path": "GridDetail_rgzalaxDS.Id"
									}
								}
							}
						}
					},
					"DfcAppForm": {
						"modelConfig": {
							"path": "PDS.Id"
						}
					},
					"GridDetail_2y4qs6d": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_2y4qs6dDS"
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_2y4qs6dDS_DfcFinType": {
									"modelConfig": {
										"path": "GridDetail_2y4qs6dDS.DfcFinType"
									}
								},
								"GridDetail_2y4qs6dDS_DfcFinCategory": {
									"modelConfig": {
										"path": "GridDetail_2y4qs6dDS.DfcFinCategory"
									}
								},
								"GridDetail_2y4qs6dDS_DfcAmount": {
									"modelConfig": {
										"path": "GridDetail_2y4qs6dDS.DfcAmount"
									}
								},
								"GridDetail_2y4qs6dDS_Id": {
									"modelConfig": {
										"path": "GridDetail_2y4qs6dDS.Id"
									}
								}
							}
						}
					},
					"GridDetail_luttt9y": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_IdInfoDS",
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "DfcListInCondition"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_IdInfoDS_DfcNumber": {
									"modelConfig": {
										"path": "GridDetail_IdInfoDS.DfcNumber"
									}
								},
								"GridDetail_IdInfoDS_DfcListInCondition": {
									"modelConfig": {
										"path": "GridDetail_IdInfoDS.DfcListInCondition"
									}
								},
								"GridDetail_IdInfoDS_DfcIdNumber": {
									"modelConfig": {
										"path": "GridDetail_IdInfoDS.DfcIdNumber"
									}
								},
								"GridDetail_IdInfoDS_DfcIdIssueDate": {
									"modelConfig": {
										"path": "GridDetail_IdInfoDS.DfcIdIssueDate"
									}
								},
								"GridDetail_IdInfoDS_DfcIdExpirationDate": {
									"modelConfig": {
										"path": "GridDetail_IdInfoDS.DfcIdExpirationDate"
									}
								},
								"GridDetail_IdInfoDS_DfcDocUploadStatus": {
									"modelConfig": {
										"path": "GridDetail_IdInfoDS.DfcDocUploadStatus"
									}
								},
								"GridDetail_IdInfoDS_DfcDocImageFile": {
									"modelConfig": {
										"path": "GridDetail_IdInfoDS.DfcDocImageFile"
									}
								},
								"GridDetail_IdInfoDS_Id": {
									"modelConfig": {
										"path": "GridDetail_IdInfoDS.Id"
									}
								}
							}
						}
					},
					"DfcProductCondition": {
						"modelConfig": {
							"path": "PDS.Id"
						}
					},
					"FileList_92nvza3": {
						"isCollection": true,
						"modelConfig": {
							"path": "FileList_92nvza3DS",
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
								"FileList_92nvza3DS_Name": {
									"modelConfig": {
										"path": "FileList_92nvza3DS.Name"
									}
								},
								"FileList_92nvza3DS_CreatedOn": {
									"modelConfig": {
										"path": "FileList_92nvza3DS.CreatedOn"
									}
								},
								"FileList_92nvza3DS_CreatedBy": {
									"modelConfig": {
										"path": "FileList_92nvza3DS.CreatedBy"
									}
								},
								"FileList_92nvza3DS_Size": {
									"modelConfig": {
										"path": "FileList_92nvza3DS.Size"
									}
								},
								"FileList_92nvza3DS_Id": {
									"modelConfig": {
										"path": "FileList_92nvza3DS.Id"
									}
								}
							}
						}
					},
					"GridDetail_1y0i10c": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_CommDS"
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_CommDS_DfcRefNo": {
									"modelConfig": {
										"path": "GridDetail_CommDS.DfcRefNo"
									}
								},
								"GridDetail_CommDS_DfcPhone": {
									"modelConfig": {
										"path": "GridDetail_CommDS.DfcPhone"
									}
								},
								"GridDetail_CommDS_DfcEmailAddr": {
									"modelConfig": {
										"path": "GridDetail_CommDS.DfcEmailAddr"
									}
								},
								"GridDetail_CommDS_CreatedBy": {
									"modelConfig": {
										"path": "GridDetail_CommDS.CreatedBy"
									}
								},
								"GridDetail_CommDS_ModifiedBy": {
									"modelConfig": {
										"path": "GridDetail_CommDS.ModifiedBy"
									}
								},
								"GridDetail_CommDS_Id": {
									"modelConfig": {
										"path": "GridDetail_CommDS.Id"
									}
								}
							}
						}
					},
					"PDS_EmploymentType_3jdsobh": {
						"modelConfig": {
							"path": "PDS.EmploymentType"
						}
					},
					"PDS_TotalWorkExperienceYears_7vpwou3": {
						"modelConfig": {
							"path": "PDS.TotalWorkExperienceYears"
						}
					},
					"PDS_Education_f70dhue": {
						"modelConfig": {
							"path": "PDS.Education"
						}
					},
					"PDS_DfcEmployer_hxojp8j": {
						"modelConfig": {
							"path": "PDS.DfcEmployer"
						}
					},
					"PDS_DfcEmpContactLname_l5an6pw": {
						"modelConfig": {
							"path": "PDS.DfcEmpContactLname"
						}
					},
					"PDS_DfcEmpContactName_87d0yro": {
						"modelConfig": {
							"path": "PDS.DfcEmpContactName"
						}
					},
					"PDS_DfcEmpContactPhone_76k9xqm": {
						"modelConfig": {
							"path": "PDS.DfcEmpContactPhone"
						}
					},
					"PDS_DfcEmpContactEmail_vbivavf": {
						"modelConfig": {
							"path": "PDS.DfcEmpContactEmail"
						}
					},
					"GridDetail_nu5gx87": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_OccupationsDS"
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_OccupationsDS_DfcRefNo": {
									"modelConfig": {
										"path": "GridDetail_OccupationsDS.DfcRefNo"
									}
								},
								"GridDetail_OccupationsDS_DfcOccupation": {
									"modelConfig": {
										"path": "GridDetail_OccupationsDS.DfcOccupation"
									}
								},
								"GridDetail_OccupationsDS_DfcYearsOfExp": {
									"modelConfig": {
										"path": "GridDetail_OccupationsDS.DfcYearsOfExp"
									}
								},
								"GridDetail_OccupationsDS_Id": {
									"modelConfig": {
										"path": "GridDetail_OccupationsDS.Id"
									}
								}
							}
						}
					},
					"GridDetail_1wwp28w": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_FinancesDS",
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "DfcFinCategory"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_FinancesDS_DfcRefNo": {
									"modelConfig": {
										"path": "GridDetail_FinancesDS.DfcRefNo"
									}
								},
								"GridDetail_FinancesDS_DfcFinType": {
									"modelConfig": {
										"path": "GridDetail_FinancesDS.DfcFinType"
									}
								},
								"GridDetail_FinancesDS_DfcFinCategory": {
									"modelConfig": {
										"path": "GridDetail_FinancesDS.DfcFinCategory"
									}
								},
								"GridDetail_FinancesDS_DfcAmount": {
									"modelConfig": {
										"path": "GridDetail_FinancesDS.DfcAmount"
									}
								},
								"GridDetail_FinancesDS_CreatedBy": {
									"modelConfig": {
										"path": "GridDetail_FinancesDS.CreatedBy"
									}
								},
								"GridDetail_FinancesDS_CreatedOn": {
									"modelConfig": {
										"path": "GridDetail_FinancesDS.CreatedOn"
									}
								},
								"GridDetail_FinancesDS_ModifiedBy": {
									"modelConfig": {
										"path": "GridDetail_FinancesDS.ModifiedBy"
									}
								},
								"GridDetail_FinancesDS_ModifiedOn": {
									"modelConfig": {
										"path": "GridDetail_FinancesDS.ModifiedOn"
									}
								},
								"GridDetail_FinancesDS_Id": {
									"modelConfig": {
										"path": "GridDetail_FinancesDS.Id"
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
						"GridDetail_y1q7iaiDS": [
							{
								"attributePath": "AppForm.Id",
								"relationPath": "PDS.Id"
							}
						],
						"GridDetail_IdInfoDS": [
							{
								"attributePath": "DfcAppform",
								"relationPath": "PDS.Id"
							}
						],
						"GridDetail_CommDS": [
							{
								"attributePath": "DfcAppForm",
								"relationPath": "PDS.Id"
							}
						],
						"GridDetail_OccupationsDS": [
							{
								"attributePath": "DfcAppForm",
								"relationPath": "PDS.Id"
							}
						],
						"GridDetail_FinancesDS": [
							{
								"attributePath": "DfcAppForm",
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
							"entitySchemaName": "AppForm",
							"attributes": {
								"FinApplicationProduct": {
									"path": "FinApplication.Product",
									"type": "ForwardReference"
								}
							}
						},
						"scope": "page"
					},
					"GridDetail_y1q7iaiDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "AppFormAddress",
							"attributes": {
								"AddressType": {
									"path": "AddressType"
								},
								"Primary": {
									"path": "Primary"
								},
								"DfcPrimaryResYears": {
									"path": "DfcPrimaryResYears"
								},
								"Address": {
									"path": "Address"
								},
								"AptOffice": {
									"path": "AptOffice"
								},
								"DfcTownVillage": {
									"path": "DfcTownVillage"
								},
								"District": {
									"path": "District"
								},
								"Country": {
									"path": "Country"
								}
							}
						}
					},
					"DataGrid_dwqvy4dDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "DfcParticipantOccup",
							"attributes": {
								"DfcOccupation": {
									"path": "DfcOccupation"
								},
								"CreatedBy": {
									"path": "CreatedBy"
								},
								"CreatedOn": {
									"path": "CreatedOn"
								}
							}
						}
					},
					"DataGrid_o5ajkfjDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "DfcParticipantOccup",
							"attributes": {
								"DfcOccupation": {
									"path": "DfcOccupation"
								},
								"CreatedOn": {
									"path": "CreatedOn"
								},
								"CreatedBy": {
									"path": "CreatedBy"
								}
							}
						}
					},
					"GridDetail_l225zrdDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "DfcIdInfo",
							"attributes": {
								"DfcNumber": {
									"path": "DfcNumber"
								},
								"DfcListInCondition": {
									"path": "DfcListInCondition"
								},
								"DfcIdNumber": {
									"path": "DfcIdNumber"
								},
								"DfcIdIssueDate": {
									"path": "DfcIdIssueDate"
								},
								"DfcIdExpirationDate": {
									"path": "DfcIdExpirationDate"
								},
								"DfcDocUploadStatus": {
									"path": "DfcDocUploadStatus"
								},
								"DfcDocImageFile": {
									"path": "DfcDocImageFile"
								}
							}
						}
					},
					"GridDetail_2rr2wljDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "AppFormCommunication",
							"attributes": {
								"Number": {
									"path": "Number"
								}
							}
						}
					},
					"GridDetail_rgzalaxDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "DfcAppFormCommInfo",
							"attributes": {
								"DfcRefNo": {
									"path": "DfcRefNo"
								},
								"DfcCommunicationType": {
									"path": "DfcCommunicationType"
								},
								"DfcPhone": {
									"path": "DfcPhone"
								},
								"DfcEmailAddr": {
									"path": "DfcEmailAddr"
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
								}
							}
						}
					},
					"GridDetail_2y4qs6dDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "DfcAppFinancials",
							"attributes": {
								"DfcFinType": {
									"path": "DfcFinType"
								},
								"DfcFinCategory": {
									"path": "DfcFinCategory"
								},
								"DfcAmount": {
									"path": "DfcAmount"
								}
							}
						}
					},
					"GridDetail_IdInfoDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "DfcIdInfo",
							"attributes": {
								"DfcNumber": {
									"path": "DfcNumber"
								},
								"DfcListInCondition": {
									"path": "DfcListInCondition"
								},
								"DfcIdNumber": {
									"path": "DfcIdNumber"
								},
								"DfcIdIssueDate": {
									"path": "DfcIdIssueDate"
								},
								"DfcIdExpirationDate": {
									"path": "DfcIdExpirationDate"
								},
								"DfcDocUploadStatus": {
									"path": "DfcDocUploadStatus"
								},
								"DfcDocImageFile": {
									"path": "DfcDocImageFile"
								}
							}
						}
					},
					"FileList_92nvza3DS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "SysFile",
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
					"FileList_AttachmentsDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "SysFile"
						}
					},
					"FileList_AppFormAttachmentsDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "SysFile"
						}
					},
					"GridDetail_CommDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "DfcAppFormCommInfo",
							"attributes": {
								"DfcRefNo": {
									"path": "DfcRefNo"
								},
								"DfcPhone": {
									"path": "DfcPhone"
								},
								"DfcEmailAddr": {
									"path": "DfcEmailAddr"
								},
								"CreatedBy": {
									"path": "CreatedBy"
								},
								"ModifiedBy": {
									"path": "ModifiedBy"
								}
							}
						}
					},
					"GridDetail_OccupationsDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "DfcParticipantOccup",
							"attributes": {
								"DfcRefNo": {
									"path": "DfcRefNo"
								},
								"DfcOccupation": {
									"path": "DfcOccupation"
								},
								"DfcYearsOfExp": {
									"path": "DfcYearsOfExp"
								}
							}
						}
					},
					"GridDetail_FinancesDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "DfcAppFinancials",
							"attributes": {
								"DfcRefNo": {
									"path": "DfcRefNo"
								},
								"DfcFinType": {
									"path": "DfcFinType"
								},
								"DfcFinCategory": {
									"path": "DfcFinCategory"
								},
								"DfcAmount": {
									"path": "DfcAmount"
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
					"entitySchemaName": "AppFormFile"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
          	{
				request: "crt.HandleViewModelAttributeChangeRequest",
				/* The custom implementation of the system query handler. */
				handler: async (request, next) => {
					/* If the Name field changes, take the following steps. */
					if (request.attributeName === 'PDS_Surname_3arndre' || 					// if Surname changed
					    request.attributeName === 'PDS_GivenName_ouqqyqy'  ||	               // or GivenName changed
                        request.attributeName === 'PDS_MiddleName_hcy67xd' ) { 		           // or MiddleName changed
						var surname = await request.$context.PDS_Surname_3arndre;
						var givenName = await request.$context.PDS_GivenName_ouqqyqy;
						var middleName = await request.$context.PDS_MiddleName_hcy67xd;
                      if (middleName) 
                      {var paricipantName = givenName+" "+ middleName+" "+surname;
                        
                      } else {var paricipantName = givenName+" "+surname;
                        
                      }
											
						request.$context.Participant = paricipantName;						
					}
					/* Call the next handler if it exists and return its result. */
					return next?.handle(request);
				}
			}//,
          //	{
		//		request: "crt.HandleViewModelAttributeChangeRequest",
		//		/* The custom implementation of the system query handler. */
		//		handler: async (request, next) => {
		//			/* If the Name field changes, take the following steps. */
		//			if (request.attributeName === 'PDS_BirthDate_2fvt90y' ){ 					// if BirthDate changed 
       //               var birthDate = await request.$context.PDS_BirthDate_2fvt90y;
       //               var age = Date.prototype.getFullYear(Date.now())-Date.prototype.getFullYear(birthDate);
       //               request.$context.PDS_DfcAge_y7ssvu7 = age;
		//			}
		//			/* Call the next handler if it exists and return its result. */
		//			return next?.handle(request);
		//		}
		//	}                      
                        
        ]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});