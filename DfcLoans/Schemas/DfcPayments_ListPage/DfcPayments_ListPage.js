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
									"attributeName": "DfcContact",
									"value": "$DfcContact"
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
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
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
				"name": "ContentContainer"
			},
			{
				"operation": "remove",
				"name": "FolderTree"
			},
			{
				"operation": "remove",
				"name": "SectionContentWrapper"
			},
			{
				"operation": "remove",
				"name": "DataTable"
			},
			{
				"operation": "insert",
				"name": "GridContainer_b5iotcz",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 6,
						"rowSpan": 1
					},
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
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
				"name": "GridContainer_hy4nopm",
				"values": {
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
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_f1663ls",
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
					"color": "primary",
					"borderRadius": "medium",
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "GridContainer_hy4nopm",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_wh06qdi",
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
					"color": "primary",
					"borderRadius": "medium",
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "GridContainer_f1663ls",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Label_wvfw3ez",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_wvfw3ez_caption)#)#",
					"labelType": "headline-4",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "center",
					"visible": true
				},
				"parentName": "GridContainer_wh06qdi",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_7napbw7",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "#ResourceString(ComboBox_7napbw7_label)#",
					"labelPosition": "auto",
					"control": "$PageParameters_DfcLookupParameter1_hxz1whe",
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
				"parentName": "GridContainer_wh06qdi",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_8e6syw3",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_8e6syw3_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_7napbw7",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_eenxovt",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
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
					"color": "primary",
					"borderRadius": "medium",
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "GridContainer_f1663ls",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "IndicatorWidget_7qb8bd0",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(IndicatorWidget_7qb8bd0_title)#",
						"data": {
							"providing": {
								"attribute": "IndicatorWidget_7qb8bd0_Data",
								"schemaName": "DfcLoanAmortizationTable",
								"filters": {
									"filter": {
										"items": {
											"527c2ebd-661d-4426-a137-ff82f37a491e": {
												"filterType": 1,
												"comparisonType": 3,
												"isEnabled": true,
												"trimDateTimeParameterToDate": false,
												"leftExpression": {
													"expressionType": 0,
													"columnPath": "DfcPaid"
												},
												"isAggregative": false,
												"dataValueType": 12,
												"rightExpression": {
													"expressionType": 2,
													"parameter": {
														"dataValueType": 12,
														"value": false
													}
												}
											}
										},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "DfcLoanAmortizationTable"
									},
									"filterAttributes": [
										{
											"attribute": "GridDetail_zb3pj84_c2bff2aa_ExposeFilter",
											"loadOnChange": true
										}
									]
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
												"columnPath": "DfcAmortizationAmount"
											},
											"functionType": 2,
											"aggregationType": 2,
											"aggregationEvalType": 0
										}
									}
								},
								"dependencies": [
									{
										"attributePath": "DfcAmortizationLoan",
										"relationPath": "GridDetail_zb3pj84DS.Id"
									}
								]
							},
							"formatting": {
								"type": "number",
								"decimalSeparator": ".",
								"decimalPrecision": 2,
								"thousandSeparator": ","
							}
						},
						"text": {
							"template": "#ResourceString(IndicatorWidget_7qb8bd0_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "small",
							"labelPosition": "above-under"
						},
						"layout": {
							"color": "green"
						},
						"theme": "full-fill"
					},
					"visible": true
				},
				"parentName": "GridContainer_eenxovt",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "IndicatorWidget_rmcpsnd",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(IndicatorWidget_rmcpsnd_title)#",
						"data": {
							"providing": {
								"attribute": "IndicatorWidget_rmcpsnd_Data",
								"schemaName": "DfcLoans",
								"filters": {
									"filter": {
										"items": {},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "DfcLoans"
									},
									"filterAttributes": [
										{
											"attribute": "GridDetail_zb3pj84_f88c607c_ExposeFilter",
											"loadOnChange": true
										}
									]
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
												"columnPath": "DfcPpalBal"
											},
											"functionType": 2,
											"aggregationType": 5,
											"aggregationEvalType": 0
										}
									}
								},
								"dependencies": [
									{
										"attributePath": "Id",
										"relationPath": "GridDetail_zb3pj84DS.Id"
									}
								]
							},
							"formatting": {
								"type": "number",
								"decimalSeparator": ".",
								"decimalPrecision": 2,
								"thousandSeparator": ","
							}
						},
						"text": {
							"template": "#ResourceString(IndicatorWidget_rmcpsnd_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "small",
							"labelPosition": "above-under"
						},
						"layout": {
							"color": "purple"
						},
						"theme": "full-fill"
					},
					"visible": true
				},
				"parentName": "GridContainer_eenxovt",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "IndicatorWidget_15lbfpr",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(IndicatorWidget_15lbfpr_title)#",
						"data": {
							"providing": {
								"attribute": "IndicatorWidget_15lbfpr_Data",
								"schemaName": "DfcLoans",
								"filters": {
									"filter": {
										"items": {},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "DfcLoans"
									},
									"filterAttributes": [
										{
											"attribute": "GridDetail_zb3pj84_4377cb27_ExposeFilter",
											"loadOnChange": true
										}
									]
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
												"columnPath": "DfcInterestBal"
											},
											"functionType": 2,
											"aggregationType": 5,
											"aggregationEvalType": 0
										}
									}
								},
								"dependencies": [
									{
										"attributePath": "Id",
										"relationPath": "GridDetail_zb3pj84DS.Id"
									}
								]
							},
							"formatting": {
								"type": "number",
								"decimalSeparator": ".",
								"decimalPrecision": 2,
								"thousandSeparator": ","
							}
						},
						"text": {
							"template": "#ResourceString(IndicatorWidget_15lbfpr_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "small",
							"labelPosition": "above-under"
						},
						"layout": {
							"color": "light-blue"
						},
						"theme": "full-fill"
					},
					"visible": true
				},
				"parentName": "GridContainer_eenxovt",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "IndicatorWidget_jls87bs",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(IndicatorWidget_jls87bs_title)#",
						"data": {
							"providing": {
								"attribute": "IndicatorWidget_jls87bs_Data",
								"schemaName": "DfcLoanAmortizationTable",
								"filters": {
									"filter": {
										"items": {
											"bf5e00b8-62a7-4859-87e0-015de223f698": {
												"filterType": 1,
												"comparisonType": 3,
												"isEnabled": true,
												"trimDateTimeParameterToDate": false,
												"leftExpression": {
													"expressionType": 0,
													"columnPath": "DfcCurrentDue"
												},
												"isAggregative": false,
												"dataValueType": 12,
												"rightExpression": {
													"expressionType": 2,
													"parameter": {
														"dataValueType": 12,
														"value": true
													}
												}
											}
										},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "DfcLoanAmortizationTable"
									},
									"filterAttributes": [
										{
											"attribute": "GridDetail_zb3pj84_ebcc1999_ExposeFilter",
											"loadOnChange": true
										}
									]
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
												"columnPath": "DfcAmortizationAmount"
											},
											"functionType": 2,
											"aggregationType": 5,
											"aggregationEvalType": 0
										}
									}
								},
								"dependencies": [
									{
										"attributePath": "DfcAmortizationLoan",
										"relationPath": "GridDetail_zb3pj84DS.Id"
									}
								]
							},
							"formatting": {
								"type": "number",
								"decimalSeparator": ".",
								"decimalPrecision": 2,
								"thousandSeparator": ","
							}
						},
						"text": {
							"template": "#ResourceString(IndicatorWidget_jls87bs_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "small",
							"labelPosition": "above-under"
						},
						"layout": {
							"color": "bright-red"
						},
						"theme": "full-fill"
					},
					"visible": true
				},
				"parentName": "GridContainer_eenxovt",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_8pi22dc",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 3,
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
					"color": "primary",
					"borderRadius": "medium",
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "GridContainer_hy4nopm",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "TabPanel_j7lb76s",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 20
					},
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
				"parentName": "GridContainer_8pi22dc",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabContainer_i448ov7",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_i448ov7_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "TabPanel_j7lb76s",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Label_kxbsa52",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_kxbsa52_caption)#)#",
					"labelType": "headline-4",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "center",
					"visible": true
				},
				"parentName": "TabContainer_i448ov7",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_1wzvl5j",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_1wzvl5j_title)#",
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
				"parentName": "TabContainer_i448ov7",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_ayup99c",
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
				"parentName": "ExpansionPanel_1wzvl5j",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_lpzk3ku",
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
				"parentName": "GridContainer_ayup99c",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_j2485ag",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_j2485ag_caption)#",
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
							"dataSourceName": "GridDetail_zb3pj84DS"
						}
					}
				},
				"parentName": "FlexContainer_lpzk3ku",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_myozup3",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_myozup3_placeholder)#",
					"iconOnly": false,
					"targetAttributes": [
						"GridDetail_zb3pj84"
					]
				},
				"parentName": "FlexContainer_lpzk3ku",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_7a90pe2",
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
				"parentName": "ExpansionPanel_1wzvl5j",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_zb3pj84",
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
							},
							"numeration": false
						},
						"editable": {
							"enable": false,
							"itemsCreation": false
						}
					},
					"items": "$GridDetail_zb3pj84",
					"activeRow": "$GridDetail_zb3pj84_ActiveRow",
					"selectionState": "$GridDetail_zb3pj84_SelectionState",
					"_filterOptions": {
						"from": [
							"GridDetail_zb3pj84",
							"GridDetail_zb3pj84_ActiveRow"
						],
						"expose": [
							{
								"attribute": "GridDetail_zb3pj84_d54d1c1a_ExposeFilter",
								"converters": [
									{
										"converter": "crt.ToValuesFromCollection",
										"args": [
											"GridDetail_zb3pj84",
											"Id"
										]
									},
									{
										"converter": "crt.ToInFilter",
										"args": [
											"DfcLoan"
										]
									}
								]
							},
							{
								"attribute": "GridDetail_zb3pj84_c2bff2aa_ExposeFilter",
								"converters": [
									{
										"converter": "crt.ToValuesFromCollection",
										"args": [
											"GridDetail_zb3pj84",
											"Id"
										]
									},
									{
										"converter": "crt.ToInFilter",
										"args": [
											"DfcAmortizationLoan"
										]
									}
								]
							},
							{
								"attribute": "GridDetail_zb3pj84_f88c607c_ExposeFilter",
								"converters": [
									{
										"converter": "crt.ToValuesFromCollection",
										"args": [
											"GridDetail_zb3pj84",
											"Id"
										]
									},
									{
										"converter": "crt.ToInFilter",
										"args": [
											"Id"
										]
									}
								]
							},
							{
								"attribute": "GridDetail_zb3pj84_f8f25b23_ExposeFilter",
								"converters": [
									{
										"converter": "crt.ToValuesFromCollection",
										"args": [
											"GridDetail_zb3pj84",
											"Id"
										]
									},
									{
										"converter": "crt.ToInFilter",
										"args": [
											"DfcArrearLoan"
										]
									}
								]
							},
							{
								"attribute": "GridDetail_zb3pj84_4377cb27_ExposeFilter",
								"converters": [
									{
										"converter": "crt.ToValuesFromCollection",
										"args": [
											"GridDetail_zb3pj84",
											"Id"
										]
									},
									{
										"converter": "crt.ToInFilter",
										"args": [
											"Id"
										]
									}
								]
							},
							{
								"attribute": "GridDetail_zb3pj84_ebcc1999_ExposeFilter",
								"converters": [
									{
										"converter": "crt.ToValuesFromCollection",
										"args": [
											"GridDetail_zb3pj84",
											"Id"
										]
									},
									{
										"converter": "crt.ToInFilter",
										"args": [
											"DfcAmortizationLoan"
										]
									}
								]
							},
							{
								"attribute": "GridDetail_zb3pj84_6dae234a_ExposeFilter",
								"converters": [
									{
										"converter": "crt.ToValuesFromCollection",
										"args": [
											"GridDetail_zb3pj84",
											"Id"
										]
									},
									{
										"converter": "crt.ToInFilter",
										"args": [
											"DfcAmortizationLoan"
										]
									}
								]
							}
						]
					},
					"_selectionOptions": {
						"attribute": "GridDetail_zb3pj84_SelectionState"
					},
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_zb3pj84DS_Id",
					"columns": [
						{
							"id": "665e0f9d-e3b4-134c-b59f-5d5e5e0ef85f",
							"code": "GridDetail_zb3pj84DS_DfcLoanNo",
							"caption": "#ResourceString(GridDetail_zb3pj84DS_DfcLoanNo)#",
							"dataValueType": 27,
							"width": 178
						},
						{
							"id": "2bb6fc5b-b164-81ad-5f3e-d2869163f0ce",
							"code": "GridDetail_zb3pj84DS_DfcLoanAmt",
							"caption": "#ResourceString(GridDetail_zb3pj84DS_DfcLoanAmt)#",
							"dataValueType": 32,
							"width": 175
						},
						{
							"id": "6e15dd1b-672f-ea35-6246-5f227ea5e6e0",
							"code": "GridDetail_zb3pj84DS_DfcInterestRate",
							"caption": "#ResourceString(GridDetail_zb3pj84DS_DfcInterestRate)#",
							"dataValueType": 32
						}
					],
					"placeholder": false,
					"bulkActions": []
				},
				"parentName": "GridContainer_7a90pe2",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_zb3pj84_AddTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Add tag",
					"icon": "tag-icon",
					"clicked": {
						"request": "crt.AddTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_zb3pj84DS",
							"filters": "$GridDetail_zb3pj84 | crt.ToCollectionFilters : 'GridDetail_zb3pj84' : $GridDetail_zb3pj84_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_zb3pj84_SelectionState"
						}
					},
					"items": []
				},
				"parentName": "GridDetail_zb3pj84",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Label_uyzvj1o",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_uyzvj1o_caption)#)#",
					"labelType": "headline-4",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "center",
					"visible": true
				},
				"parentName": "TabContainer_i448ov7",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_8olrjmo",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_8olrjmo_title)#",
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
				"parentName": "TabContainer_i448ov7",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_c34no7p",
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
				"parentName": "ExpansionPanel_8olrjmo",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_usz5buv",
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
				"parentName": "GridContainer_c34no7p",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_fpexgsy",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_fpexgsy_caption)#",
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
							"dataSourceName": "GridDetail_wwn8en7DS"
						}
					}
				},
				"parentName": "FlexContainer_usz5buv",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_x4frwbp",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_x4frwbp_placeholder)#",
					"iconOnly": false,
					"targetAttributes": [
						"GridDetail_wwn8en7"
					]
				},
				"parentName": "FlexContainer_usz5buv",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_x25cqzq",
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
				"parentName": "ExpansionPanel_8olrjmo",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_wwn8en7",
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
							"selection": false,
							"numeration": false
						},
						"editable": {
							"enable": false,
							"itemsCreation": false
						}
					},
					"items": "$GridDetail_wwn8en7",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_wwn8en7DS_Id",
					"columns": [
						{
							"id": "b21ff0ca-18ff-9bfb-a726-53450af48a34",
							"code": "GridDetail_wwn8en7DS_DfcPaymentNumber",
							"caption": "#ResourceString(GridDetail_wwn8en7DS_DfcPaymentNumber)#",
							"dataValueType": 28
						}
					],
					"placeholder": false
				},
				"parentName": "GridContainer_x25cqzq",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabContainer_yvvne6f",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_yvvne6f_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "TabPanel_j7lb76s",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_hml8kid",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_hml8kid_title)#",
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
				"parentName": "TabContainer_yvvne6f",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_mc0g84h",
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
				"parentName": "ExpansionPanel_hml8kid",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_q060rac",
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
				"parentName": "GridContainer_mc0g84h",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_o2a23pk",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_o2a23pk_caption)#",
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
							"dataSourceName": "GridDetail_7v3qulmDS"
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_q060rac",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_58kxh1w",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_58kxh1w_placeholder)#",
					"iconOnly": false,
					"targetAttributes": [
						"GridDetail_7v3qulm"
					]
				},
				"parentName": "FlexContainer_q060rac",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_2m0rku9",
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
				"parentName": "ExpansionPanel_hml8kid",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_7v3qulm",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 14
					},
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
					"items": "$GridDetail_7v3qulm",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_7v3qulmDS_Id",
					"columns": [
						{
							"id": "60a8f66c-d109-838e-28ab-b1685e57dd9d",
							"code": "GridDetail_7v3qulmDS_DfcAmortizationNumber",
							"caption": "#ResourceString(GridDetail_7v3qulmDS_DfcAmortizationNumber)#",
							"dataValueType": 27,
							"width": 190
						},
						{
							"id": "15442763-6fd9-0c19-5a7a-3cc6081b8287",
							"code": "GridDetail_7v3qulmDS_DfcAmortizationBeginningBalance",
							"caption": "#ResourceString(GridDetail_7v3qulmDS_DfcAmortizationBeginningBalance)#",
							"dataValueType": 6
						},
						{
							"id": "c425fcf6-0c02-1164-ce5b-84016d324155",
							"code": "GridDetail_7v3qulmDS_DfcAmortizationPrincipal",
							"caption": "#ResourceString(GridDetail_7v3qulmDS_DfcAmortizationPrincipal)#",
							"dataValueType": 6
						},
						{
							"id": "060c5ea7-545e-4c41-85a3-3e73d063941d",
							"code": "GridDetail_7v3qulmDS_DfcAmortizationInterest",
							"caption": "#ResourceString(GridDetail_7v3qulmDS_DfcAmortizationInterest)#",
							"dataValueType": 6
						},
						{
							"id": "7f7427ba-fd71-b5f9-f825-4cccb17ab65a",
							"code": "GridDetail_7v3qulmDS_DfcAmortizationAmount",
							"caption": "#ResourceString(GridDetail_7v3qulmDS_DfcAmortizationAmount)#",
							"dataValueType": 6
						},
						{
							"id": "03ef2339-7bc8-d19e-61a9-256e4af31571",
							"code": "GridDetail_7v3qulmDS_DfcCurrentDue",
							"caption": "#ResourceString(GridDetail_7v3qulmDS_DfcCurrentDue)#",
							"dataValueType": 12
						},
						{
							"id": "e0462440-0d5f-4b2e-994b-758cc17181c9",
							"code": "GridDetail_7v3qulmDS_DfcPaid",
							"caption": "#ResourceString(GridDetail_7v3qulmDS_DfcPaid)#",
							"dataValueType": 12
						},
						{
							"id": "51309598-dea1-d7bb-1c9f-b369d9d30ed5",
							"code": "GridDetail_7v3qulmDS_DfcPartiallyPaid",
							"caption": "#ResourceString(GridDetail_7v3qulmDS_DfcPartiallyPaid)#",
							"dataValueType": 12
						},
						{
							"id": "5d9e9088-8796-296f-5254-79e564169b89",
							"code": "GridDetail_7v3qulmDS_DfcInArrear",
							"caption": "#ResourceString(GridDetail_7v3qulmDS_DfcInArrear)#",
							"dataValueType": 12
						}
					],
					"placeholder": false
				},
				"parentName": "GridContainer_2m0rku9",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabContainer_o38ssfo",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_o38ssfo_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "TabPanel_j7lb76s",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_v51ud0h",
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
				"parentName": "TabContainer_o38ssfo",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_dr6e8ey",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 17
					},
					"type": "crt.DataGrid",
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							},
							"numeration": false
						},
						"editable": {
							"enable": false,
							"itemsCreation": false
						}
					},
					"items": "$DataGrid_dr6e8ey",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "DataGrid_dr6e8eyDS_Id",
					"columns": [
						{
							"id": "1bd9e989-313e-ee52-92dd-253cec5684dd",
							"code": "DataGrid_dr6e8eyDS_DfcArrearNumber",
							"caption": "#ResourceString(DataGrid_dr6e8eyDS_DfcArrearNumber)#",
							"dataValueType": 27,
							"width": 141
						},
						{
							"id": "764223d9-fd47-f631-292f-247a5354d841",
							"code": "DataGrid_dr6e8eyDS_DfcArrearAmount",
							"caption": "#ResourceString(DataGrid_dr6e8eyDS_DfcArrearAmount)#",
							"dataValueType": 6
						},
						{
							"id": "4e30ae72-4a92-ec95-760f-356a8f35167e",
							"code": "DataGrid_dr6e8eyDS_DfcAmortizationPeriod",
							"caption": "#ResourceString(DataGrid_dr6e8eyDS_DfcAmortizationPeriod)#",
							"dataValueType": 10,
							"width": 124
						},
						{
							"id": "87b397ef-1148-f746-86f5-aad9343fd2ad",
							"code": "DataGrid_dr6e8eyDS_DfcCurrentDue",
							"caption": "#ResourceString(DataGrid_dr6e8eyDS_DfcCurrentDue)#",
							"dataValueType": 12,
							"width": 146
						},
						{
							"id": "21114964-ce06-a10b-df46-2ec631439912",
							"code": "DataGrid_dr6e8eyDS_DfcPaid",
							"caption": "#ResourceString(DataGrid_dr6e8eyDS_DfcPaid)#",
							"dataValueType": 12
						},
						{
							"id": "a397af45-1608-ae77-efad-5bc70e23c748",
							"code": "DataGrid_dr6e8eyDS_DfcPaymentID",
							"caption": "#ResourceString(DataGrid_dr6e8eyDS_DfcPaymentID)#",
							"dataValueType": 10,
							"width": 131
						}
					],
					"placeholder": false,
					"bulkActions": []
				},
				"parentName": "GridContainer_v51ud0h",
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
							"path": "PageParameters.DfcContact"
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
					},
					"GridDetail_jjw7hw3": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_jjw7hw3DS",
							"filterAttributes": []
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_jjw7hw3DS_DfcAmortizationNumber": {
									"modelConfig": {
										"path": "GridDetail_jjw7hw3DS.DfcAmortizationNumber"
									}
								},
								"GridDetail_jjw7hw3DS_DfcPeriodNumber": {
									"modelConfig": {
										"path": "GridDetail_jjw7hw3DS.DfcPeriodNumber"
									}
								},
								"GridDetail_jjw7hw3DS_DfcAmortizationBeginningBalance": {
									"modelConfig": {
										"path": "GridDetail_jjw7hw3DS.DfcAmortizationBeginningBalance"
									}
								},
								"GridDetail_jjw7hw3DS_DfcAmortizationPrincipal": {
									"modelConfig": {
										"path": "GridDetail_jjw7hw3DS.DfcAmortizationPrincipal"
									}
								},
								"GridDetail_jjw7hw3DS_DfcAmortizationInterest": {
									"modelConfig": {
										"path": "GridDetail_jjw7hw3DS.DfcAmortizationInterest"
									}
								},
								"GridDetail_jjw7hw3DS_DfcCurrentDue": {
									"modelConfig": {
										"path": "GridDetail_jjw7hw3DS.DfcCurrentDue"
									}
								},
								"GridDetail_jjw7hw3DS_DfcAmortizationAmount": {
									"modelConfig": {
										"path": "GridDetail_jjw7hw3DS.DfcAmortizationAmount"
									}
								},
								"GridDetail_jjw7hw3DS_DfcPaid": {
									"modelConfig": {
										"path": "GridDetail_jjw7hw3DS.DfcPaid"
									}
								},
								"GridDetail_jjw7hw3DS_DfcAmortizationEndingBalance": {
									"modelConfig": {
										"path": "GridDetail_jjw7hw3DS.DfcAmortizationEndingBalance"
									}
								},
								"GridDetail_jjw7hw3DS_Id": {
									"modelConfig": {
										"path": "GridDetail_jjw7hw3DS.Id"
									}
								}
							}
						}
					},
					"GridDetail_0ip0dd8": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_0ip0dd8DS"
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_0ip0dd8DS_DfcPaymentNumber": {
									"modelConfig": {
										"path": "GridDetail_0ip0dd8DS.DfcPaymentNumber"
									}
								},
								"GridDetail_0ip0dd8DS_Id": {
									"modelConfig": {
										"path": "GridDetail_0ip0dd8DS.Id"
									}
								}
							}
						}
					},
					"GridDetail_ab6qbyj": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_ab6qbyjDS",
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "DfcArrearNumber"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_ab6qbyjDS_DfcArrearNumber": {
									"modelConfig": {
										"path": "GridDetail_ab6qbyjDS.DfcArrearNumber"
									}
								},
								"GridDetail_ab6qbyjDS_Id": {
									"modelConfig": {
										"path": "GridDetail_ab6qbyjDS.Id"
									}
								}
							}
						}
					},
					"GridDetail_zabupoh": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_zabupohDS",
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "DfcLoan"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_zabupohDS_DfcPaymentNumber": {
									"modelConfig": {
										"path": "GridDetail_zabupohDS.DfcPaymentNumber"
									}
								},
								"GridDetail_zabupohDS_DfcLoan": {
									"modelConfig": {
										"path": "GridDetail_zabupohDS.DfcLoan"
									}
								},
								"GridDetail_zabupohDS_DfcPeriod": {
									"modelConfig": {
										"path": "GridDetail_zabupohDS.DfcPeriod"
									}
								},
								"GridDetail_zabupohDS_DfcAmount": {
									"modelConfig": {
										"path": "GridDetail_zabupohDS.DfcAmount"
									}
								},
								"GridDetail_zabupohDS_DfcPaymentType": {
									"modelConfig": {
										"path": "GridDetail_zabupohDS.DfcPaymentType"
									}
								},
								"GridDetail_zabupohDS_Id": {
									"modelConfig": {
										"path": "GridDetail_zabupohDS.Id"
									}
								}
							}
						}
					},
					"GridDetail_089icif": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_089icifDS"
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_089icifDS_DfcAmortizationNumber": {
									"modelConfig": {
										"path": "GridDetail_089icifDS.DfcAmortizationNumber"
									}
								},
								"GridDetail_089icifDS_Id": {
									"modelConfig": {
										"path": "GridDetail_089icifDS.Id"
									}
								}
							}
						}
					},
					"GridDetail_nfa0h7h": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_nfa0h7hDS"
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_nfa0h7hDS_DfcAmortizationNumber": {
									"modelConfig": {
										"path": "GridDetail_nfa0h7hDS.DfcAmortizationNumber"
									}
								},
								"GridDetail_nfa0h7hDS_DfcAmortizationAmount": {
									"modelConfig": {
										"path": "GridDetail_nfa0h7hDS.DfcAmortizationAmount"
									}
								},
								"GridDetail_nfa0h7hDS_DfcAmortizationBeginningBalance": {
									"modelConfig": {
										"path": "GridDetail_nfa0h7hDS.DfcAmortizationBeginningBalance"
									}
								},
								"GridDetail_nfa0h7hDS_DfcAmortizationPrincipal": {
									"modelConfig": {
										"path": "GridDetail_nfa0h7hDS.DfcAmortizationPrincipal"
									}
								},
								"GridDetail_nfa0h7hDS_DfcAmortizationEndingBalance": {
									"modelConfig": {
										"path": "GridDetail_nfa0h7hDS.DfcAmortizationEndingBalance"
									}
								},
								"GridDetail_nfa0h7hDS_DfcAmortizationInterest": {
									"modelConfig": {
										"path": "GridDetail_nfa0h7hDS.DfcAmortizationInterest"
									}
								},
								"GridDetail_nfa0h7hDS_DfcPaid": {
									"modelConfig": {
										"path": "GridDetail_nfa0h7hDS.DfcPaid"
									}
								},
								"GridDetail_nfa0h7hDS_DfcCurrentDue": {
									"modelConfig": {
										"path": "GridDetail_nfa0h7hDS.DfcCurrentDue"
									}
								},
								"GridDetail_nfa0h7hDS_DfcAmortizationPartialPayment": {
									"modelConfig": {
										"path": "GridDetail_nfa0h7hDS.DfcAmortizationPartialPayment"
									}
								},
								"GridDetail_nfa0h7hDS_DfcPeriodNumber": {
									"modelConfig": {
										"path": "GridDetail_nfa0h7hDS.DfcPeriodNumber"
									}
								},
								"GridDetail_nfa0h7hDS_Id": {
									"modelConfig": {
										"path": "GridDetail_nfa0h7hDS.Id"
									}
								}
							}
						}
					},
					"GridDetail_zb3pj84": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_zb3pj84DS",
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "DfcPaidAmount"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_zb3pj84DS_DfcLoanNo": {
									"modelConfig": {
										"path": "GridDetail_zb3pj84DS.DfcLoanNo"
									}
								},
								"GridDetail_zb3pj84DS_DfcLoanAmt": {
									"modelConfig": {
										"path": "GridDetail_zb3pj84DS.DfcLoanAmt"
									}
								},
								"GridDetail_zb3pj84DS_DfcInterestRate": {
									"modelConfig": {
										"path": "GridDetail_zb3pj84DS.DfcInterestRate"
									}
								},
								"GridDetail_zb3pj84DS_Id": {
									"modelConfig": {
										"path": "GridDetail_zb3pj84DS.Id"
									}
								}
							}
						}
					},
					"GridDetail_wwn8en7": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_wwn8en7DS",
							"filterAttributes": [
								{
									"name": "GridDetail_zb3pj84_d54d1c1a_ExposeFilter",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_wwn8en7DS_DfcPaymentNumber": {
									"modelConfig": {
										"path": "GridDetail_wwn8en7DS.DfcPaymentNumber"
									}
								},
								"GridDetail_wwn8en7DS_Id": {
									"modelConfig": {
										"path": "GridDetail_wwn8en7DS.Id"
									}
								}
							}
						}
					},
					"PageParameters_DfcLookupParameter1_hxz1whe": {
						"modelConfig": {
							"path": "PageParameters.DfcContact"
						}
					},
					"DataGrid_3usjxb1": {
						"isCollection": true,
						"modelConfig": {
							"path": "DataGrid_3usjxb1DS",
							"filterAttributes": [],
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "DfcAmortizationBeginningBalance"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"DataGrid_3usjxb1DS_DfcAmortizationNumber": {
									"modelConfig": {
										"path": "DataGrid_3usjxb1DS.DfcAmortizationNumber"
									}
								},
								"DataGrid_3usjxb1DS_DfcAmortizationBeginningBalance": {
									"modelConfig": {
										"path": "DataGrid_3usjxb1DS.DfcAmortizationBeginningBalance"
									}
								},
								"DataGrid_3usjxb1DS_DfcAmortizationAmount": {
									"modelConfig": {
										"path": "DataGrid_3usjxb1DS.DfcAmortizationAmount"
									}
								},
								"DataGrid_3usjxb1DS_DfcAmortizationEndingBalance": {
									"modelConfig": {
										"path": "DataGrid_3usjxb1DS.DfcAmortizationEndingBalance"
									}
								},
								"DataGrid_3usjxb1DS_DfcAmortizationPrincipal": {
									"modelConfig": {
										"path": "DataGrid_3usjxb1DS.DfcAmortizationPrincipal"
									}
								},
								"DataGrid_3usjxb1DS_DfcAmortizationInterest": {
									"modelConfig": {
										"path": "DataGrid_3usjxb1DS.DfcAmortizationInterest"
									}
								},
								"DataGrid_3usjxb1DS_DfcCurrentDue": {
									"modelConfig": {
										"path": "DataGrid_3usjxb1DS.DfcCurrentDue"
									}
								},
								"DataGrid_3usjxb1DS_DfcPaid": {
									"modelConfig": {
										"path": "DataGrid_3usjxb1DS.DfcPaid"
									}
								},
								"DataGrid_3usjxb1DS_DfcPartiallyPaid": {
									"modelConfig": {
										"path": "DataGrid_3usjxb1DS.DfcPartiallyPaid"
									}
								},
								"DataGrid_3usjxb1DS_DfcAmortizationDate": {
									"modelConfig": {
										"path": "DataGrid_3usjxb1DS.DfcAmortizationDate"
									}
								},
								"DataGrid_3usjxb1DS_Id": {
									"modelConfig": {
										"path": "DataGrid_3usjxb1DS.Id"
									}
								}
							}
						}
					},
					"DataGrid_dr6e8ey": {
						"isCollection": true,
						"modelConfig": {
							"path": "DataGrid_dr6e8eyDS",
							"filterAttributes": [
								{
									"name": "GridDetail_zb3pj84_f8f25b23_ExposeFilter",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"DataGrid_dr6e8eyDS_DfcArrearNumber": {
									"modelConfig": {
										"path": "DataGrid_dr6e8eyDS.DfcArrearNumber"
									}
								},
								"DataGrid_dr6e8eyDS_DfcArrearAmount": {
									"modelConfig": {
										"path": "DataGrid_dr6e8eyDS.DfcArrearAmount"
									}
								},
								"DataGrid_dr6e8eyDS_DfcAmortizationPeriod": {
									"modelConfig": {
										"path": "DataGrid_dr6e8eyDS.DfcAmortizationPeriod"
									}
								},
								"DataGrid_dr6e8eyDS_DfcCurrentDue": {
									"modelConfig": {
										"path": "DataGrid_dr6e8eyDS.DfcCurrentDue"
									}
								},
								"DataGrid_dr6e8eyDS_DfcPaid": {
									"modelConfig": {
										"path": "DataGrid_dr6e8eyDS.DfcPaid"
									}
								},
								"DataGrid_dr6e8eyDS_DfcPaymentID": {
									"modelConfig": {
										"path": "DataGrid_dr6e8eyDS.DfcPaymentID"
									}
								},
								"DataGrid_dr6e8eyDS_Id": {
									"modelConfig": {
										"path": "DataGrid_dr6e8eyDS.Id"
									}
								}
							}
						}
					},
					"DfcContact": {
						"modelConfig": {
							"path": "PageParameters.DfcContact"
						}
					},
					"GridDetail_7v3qulm": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_7v3qulmDS",
							"filterAttributes": [
								{
									"name": "GridDetail_zb3pj84_6dae234a_ExposeFilter",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_7v3qulmDS_DfcAmortizationNumber": {
									"modelConfig": {
										"path": "GridDetail_7v3qulmDS.DfcAmortizationNumber"
									}
								},
								"GridDetail_7v3qulmDS_DfcAmortizationBeginningBalance": {
									"modelConfig": {
										"path": "GridDetail_7v3qulmDS.DfcAmortizationBeginningBalance"
									}
								},
								"GridDetail_7v3qulmDS_DfcAmortizationPrincipal": {
									"modelConfig": {
										"path": "GridDetail_7v3qulmDS.DfcAmortizationPrincipal"
									}
								},
								"GridDetail_7v3qulmDS_DfcAmortizationInterest": {
									"modelConfig": {
										"path": "GridDetail_7v3qulmDS.DfcAmortizationInterest"
									}
								},
								"GridDetail_7v3qulmDS_DfcAmortizationAmount": {
									"modelConfig": {
										"path": "GridDetail_7v3qulmDS.DfcAmortizationAmount"
									}
								},
								"GridDetail_7v3qulmDS_DfcCurrentDue": {
									"modelConfig": {
										"path": "GridDetail_7v3qulmDS.DfcCurrentDue"
									}
								},
								"GridDetail_7v3qulmDS_DfcPaid": {
									"modelConfig": {
										"path": "GridDetail_7v3qulmDS.DfcPaid"
									}
								},
								"GridDetail_7v3qulmDS_DfcPartiallyPaid": {
									"modelConfig": {
										"path": "GridDetail_7v3qulmDS.DfcPartiallyPaid"
									}
								},
								"GridDetail_7v3qulmDS_DfcInArrear": {
									"modelConfig": {
										"path": "GridDetail_7v3qulmDS.DfcInArrear"
									}
								},
								"GridDetail_7v3qulmDS_Id": {
									"modelConfig": {
										"path": "GridDetail_7v3qulmDS.Id"
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
						"GridDetail_zb3pj84DS": [
							{
								"attributePath": "DfcContact",
								"relationPath": "PageParameters.DfcContact"
							}
						],
						"GridDetail_wwn8en7DS": [
							{
								"attributePath": "DfcLoan",
								"relationPath": "GridDetail_zb3pj84DS.Id"
							}
						],
						"DataGrid_dr6e8eyDS": [
							{
								"attributePath": "DfcArrearLoan",
								"relationPath": "GridDetail_zb3pj84DS.Id"
							}
						],
						"GridDetail_7v3qulmDS": [
							{
								"attributePath": "DfcAmortizationLoan",
								"relationPath": "GridDetail_zb3pj84DS.Id"
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
					},
					"GridDetail_jjw7hw3DS": {
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
								"DfcAmortizationBeginningBalance": {
									"path": "DfcAmortizationBeginningBalance"
								},
								"DfcAmortizationPrincipal": {
									"path": "DfcAmortizationPrincipal"
								},
								"DfcAmortizationInterest": {
									"path": "DfcAmortizationInterest"
								},
								"DfcCurrentDue": {
									"path": "DfcCurrentDue"
								},
								"DfcAmortizationAmount": {
									"path": "DfcAmortizationAmount"
								},
								"DfcPaid": {
									"path": "DfcPaid"
								},
								"DfcAmortizationEndingBalance": {
									"path": "DfcAmortizationEndingBalance"
								}
							}
						}
					},
					"GridDetail_0ip0dd8DS": {
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
					"GridDetail_ab6qbyjDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "DfcLoanArrears",
							"attributes": {
								"DfcArrearNumber": {
									"path": "DfcArrearNumber"
								}
							}
						}
					},
					"GridDetail_zabupohDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "DfcPayments",
							"attributes": {
								"DfcPaymentNumber": {
									"path": "DfcPaymentNumber"
								},
								"DfcLoan": {
									"path": "DfcLoan"
								},
								"DfcPeriod": {
									"path": "DfcPeriod"
								},
								"DfcAmount": {
									"path": "DfcAmount"
								},
								"DfcPaymentType": {
									"path": "DfcPaymentType"
								}
							}
						}
					},
					"GridDetail_089icifDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "DfcLoanAmortizationTable",
							"attributes": {
								"DfcAmortizationNumber": {
									"path": "DfcAmortizationNumber"
								}
							}
						}
					},
					"GridDetail_nfa0h7hDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "DfcLoanAmortizationTable",
							"attributes": {
								"DfcAmortizationNumber": {
									"path": "DfcAmortizationNumber"
								},
								"DfcAmortizationAmount": {
									"path": "DfcAmortizationAmount"
								},
								"DfcAmortizationBeginningBalance": {
									"path": "DfcAmortizationBeginningBalance"
								},
								"DfcAmortizationPrincipal": {
									"path": "DfcAmortizationPrincipal"
								},
								"DfcAmortizationEndingBalance": {
									"path": "DfcAmortizationEndingBalance"
								},
								"DfcAmortizationInterest": {
									"path": "DfcAmortizationInterest"
								},
								"DfcPaid": {
									"path": "DfcPaid"
								},
								"DfcCurrentDue": {
									"path": "DfcCurrentDue"
								},
								"DfcAmortizationPartialPayment": {
									"path": "DfcAmortizationPartialPayment"
								},
								"DfcPeriodNumber": {
									"path": "DfcPeriodNumber"
								}
							}
						}
					},
					"GridDetail_zb3pj84DS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "DfcLoans",
							"attributes": {
								"DfcLoanNo": {
									"path": "DfcLoanNo"
								},
								"DfcLoanAmt": {
									"path": "DfcLoanAmt"
								},
								"DfcInterestRate": {
									"path": "DfcInterestRate"
								}
							}
						}
					},
					"GridDetail_wwn8en7DS": {
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
					"DataGrid_3usjxb1DS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "DfcLoanAmortizationTable",
							"attributes": {
								"DfcAmortizationNumber": {
									"path": "DfcAmortizationNumber"
								},
								"DfcAmortizationBeginningBalance": {
									"path": "DfcAmortizationBeginningBalance"
								},
								"DfcAmortizationAmount": {
									"path": "DfcAmortizationAmount"
								},
								"DfcAmortizationEndingBalance": {
									"path": "DfcAmortizationEndingBalance"
								},
								"DfcAmortizationPrincipal": {
									"path": "DfcAmortizationPrincipal"
								},
								"DfcAmortizationInterest": {
									"path": "DfcAmortizationInterest"
								},
								"DfcCurrentDue": {
									"path": "DfcCurrentDue"
								},
								"DfcPaid": {
									"path": "DfcPaid"
								},
								"DfcPartiallyPaid": {
									"path": "DfcPartiallyPaid"
								},
								"DfcAmortizationDate": {
									"path": "DfcAmortizationDate"
								}
							}
						}
					},
					"DataGrid_dr6e8eyDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "DfcLoanArrears",
							"attributes": {
								"DfcArrearNumber": {
									"path": "DfcArrearNumber"
								},
								"DfcArrearAmount": {
									"path": "DfcArrearAmount"
								},
								"DfcAmortizationPeriod": {
									"path": "DfcAmortizationPeriod"
								},
								"DfcCurrentDue": {
									"path": "DfcCurrentDue"
								},
								"DfcPaid": {
									"path": "DfcPaid"
								},
								"DfcPaymentID": {
									"path": "DfcPaymentID"
								}
							}
						}
					},
					"GridDetail_7v3qulmDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "DfcLoanAmortizationTable",
							"attributes": {
								"DfcAmortizationNumber": {
									"path": "DfcAmortizationNumber"
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
								"DfcCurrentDue": {
									"path": "DfcCurrentDue"
								},
								"DfcPaid": {
									"path": "DfcPaid"
								},
								"DfcPartiallyPaid": {
									"path": "DfcPartiallyPaid"
								},
								"DfcInArrear": {
									"path": "DfcInArrear"
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
		handlers: /**SCHEMA_HANDLERS*/[
           {
        request: "crt.LoadDataRequest",
        handler: async (request, next) => {
            if (request.dataSourceName !== "PageParameters_DfcLookupParameter1_h2bliav") { // "Select Loan" parameter
                return await next?.handle(request);
            }

            const customer = await request.$context.PageParameters_DfcLookupParameter1_u7vj91v; // "Customer"
            const legalEntity = await request.$context.PageParameters_DfcLookupParameter1_xz2p1pr; // "Legal Entity"

            if (!customer) { // Si no se ha seleccionado un "Customer", devolvemos un resultado vacío
                request.$context.response = {
                    collection: [],
                    success: true
                };
                return next?.handle(request);
            }

            // Construir la consulta SQL con filtros (solo si se ha seleccionado un "Customer")
            const esq = Ext.create("Terrasoft.EntitySchemaQuery", {
                rootSchemaName: "DfcLoan" // Reemplaza con el nombre real de tu esquema de "Select Loan"
            });
            esq.addColumn("Id");
            esq.addColumn("Name"); // O cualquier otra columna que necesites mostrar

            esq.filters.add("customerFilter", Terrasoft.createColumnFilterWithParameter(
                Terrasoft.ComparisonType.EQUAL,
                "ContactId", // Asumiendo que "ContactId" enlaza préstamos con clientes
                customer.value
            ));

            if (legalEntity) {
                esq.filters.add("legalEntityFilter", Terrasoft.createColumnFilterWithParameter(
                    Terrasoft.ComparisonType.EQUAL,
                    "DfcLegalEntity", // Asumiendo que "DfcLegalEntity" es la columna en "Select Loan"
                    legalEntity.value
                ));
            }

            // Ejecutar la consulta y obtener los resultados
            esq.getEntityCollection(function(response) {
                if (response && response.success) {
                    const collection = response.collection;
                    const data = collection.getItems().map(item => ({
                        value: item.get("Id"),
                        displayValue: item.get("Name")
                    }));

                    request.$context.response = {
                        collection: data,
                        success: true
                    };
                } else {
                    request.$context.response = {
                        success: false,
                        errorInfo: response?.errorInfo
                    };
                }

                next?.handle(request);
            }, this);
        }
    }
        ]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});