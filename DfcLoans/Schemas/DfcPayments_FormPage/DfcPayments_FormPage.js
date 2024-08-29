define("DfcPayments_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "SaveButton",
				"values": {
					"color": "accent",
					"caption": "#ResourceString(SaveButton_caption)#",
					"size": "large",
					"iconPosition": "only-text",
					"clickMode": "default"
				}
			},
			{
				"operation": "remove",
				"name": "TagSelect"
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
				"name": "GeneralInfoTab",
				"values": {
					"iconPosition": "only-text",
					"visible": true
				}
			},
			{
				"operation": "merge",
				"name": "GeneralInfoTabContainer",
				"values": {
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
					"alignItems": "stretch",
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					}
				}
			},
			{
				"operation": "move",
				"name": "GeneralInfoTabContainer",
				"parentName": "GridContainer_utdit3q",
				"propertyName": "items",
				"index": 0
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
					"entitySchemaName": "DfcPayments"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "33e3a062-51ee-4ae7-a55e-4e0aa75075b3",
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
				"name": "GridContainer_iw0hw0p",
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
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Label_x3csx3s",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_x3csx3s_caption)#)#",
					"labelType": "headline-4",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "center",
					"visible": true
				},
				"parentName": "GridContainer_iw0hw0p",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_xtynll6",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_DfcLegalEntity_tzo7z6a",
					"labelPosition": "auto",
					"control": "$PDS_DfcLegalEntity_tzo7z6a",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GridContainer_iw0hw0p",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_v4ozvg6",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_v4ozvg6_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_xtynll6",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_ip9hwor",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_DfcContact_e9zh6s4",
					"labelPosition": "auto",
					"control": "$PDS_DfcContact_e9zh6s4",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GridContainer_iw0hw0p",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "addRecord_4ilrwse",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_4ilrwse_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_ip9hwor",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_0vf38hp",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_DfcLoan_qbhoi4a",
					"labelPosition": "auto",
					"control": "$PDS_DfcLoan_qbhoi4a",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GridContainer_iw0hw0p",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "addRecord_f3lbyed",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_f3lbyed_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_0vf38hp",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "IndicatorWidget_cmmzmoo",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(IndicatorWidget_cmmzmoo_title)#",
						"data": {
							"providing": {
								"attribute": "IndicatorWidget_cmmzmoo_Data",
								"schemaName": "DfcLoanAmortizationTable",
								"filters": {
									"filter": {
										"items": {
											"762bfba7-5747-4203-88ee-69f9cc0348fd": {
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
												"columnPath": "DfcAmortizationAmount"
											},
											"functionType": 2,
											"aggregationType": 5,
											"aggregationEvalType": 0
										}
									}
								},
								"dependencies": []
							},
							"formatting": {
								"type": "number",
								"decimalSeparator": ".",
								"decimalPrecision": 2,
								"thousandSeparator": ","
							}
						},
						"text": {
							"template": "#ResourceString(IndicatorWidget_cmmzmoo_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "medium",
							"labelPosition": "above-under"
						},
						"layout": {
							"color": "green"
						},
						"theme": "full-fill"
					}
				},
				"parentName": "GridContainer_iw0hw0p",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "TabContainer_wun4w4r",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_wun4w4r_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_tvocb2u",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_tvocb2u_title)#",
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
				"parentName": "TabContainer_wun4w4r",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_0wlauh3",
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
				"parentName": "ExpansionPanel_tvocb2u",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_yftbuot",
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
				"parentName": "GridContainer_0wlauh3",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_clfdrrs",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_clfdrrs_placeholder)#",
					"iconOnly": false,
					"targetAttributes": [
						"GridDetail_g0myy7s"
					]
				},
				"parentName": "FlexContainer_yftbuot",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_sfcwv2d",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_sfcwv2d_caption)#",
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
							"dataSourceName": "GridDetail_g0myy7sDS"
						}
					}
				},
				"parentName": "FlexContainer_yftbuot",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_8ignl7g",
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
				"parentName": "ExpansionPanel_tvocb2u",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_g0myy7s",
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
					"items": "$GridDetail_g0myy7s",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_g0myy7sDS_Id",
					"columns": [
						{
							"id": "b80062ea-e9b2-7c92-f3a2-7cab8a77c205",
							"code": "GridDetail_g0myy7sDS_DfcAmortizationNumber",
							"caption": "#ResourceString(GridDetail_g0myy7sDS_DfcAmortizationNumber)#",
							"dataValueType": 27,
							"width": 114
						},
						{
							"id": "1fcc4c46-465f-7aff-f53d-8b66e3e22a4d",
							"code": "GridDetail_g0myy7sDS_DfcAmortizationApplicationNumber",
							"caption": "#ResourceString(GridDetail_g0myy7sDS_DfcAmortizationApplicationNumber)#",
							"dataValueType": 10,
							"width": 163
						},
						{
							"id": "ddb30205-1ec3-9134-20ed-f942a1a43547",
							"code": "GridDetail_g0myy7sDS_DfcAmortizationBeginningBalance",
							"caption": "#ResourceString(GridDetail_g0myy7sDS_DfcAmortizationBeginningBalance)#",
							"dataValueType": 6,
							"width": 182
						},
						{
							"id": "e979a51b-90f4-a983-40d2-115057607d9e",
							"code": "GridDetail_g0myy7sDS_DfcAmortizationPrincipal",
							"caption": "#ResourceString(GridDetail_g0myy7sDS_DfcAmortizationPrincipal)#",
							"dataValueType": 6
						},
						{
							"id": "309dbdc3-5de2-f4a5-b9d3-22ee180466dc",
							"code": "GridDetail_g0myy7sDS_DfcAmortizationInterest",
							"caption": "#ResourceString(GridDetail_g0myy7sDS_DfcAmortizationInterest)#",
							"dataValueType": 6
						},
						{
							"id": "5e3c4821-140c-4b5e-aef8-cc20dbc5ce54",
							"code": "GridDetail_g0myy7sDS_DfcAmortizationEndingBalance",
							"caption": "#ResourceString(GridDetail_g0myy7sDS_DfcAmortizationEndingBalance)#",
							"dataValueType": 6,
							"width": 164
						},
						{
							"id": "dba526a7-bbdf-47d2-731f-110696482a78",
							"code": "GridDetail_g0myy7sDS_DfcAmortizationAmount",
							"caption": "#ResourceString(GridDetail_g0myy7sDS_DfcAmortizationAmount)#",
							"dataValueType": 6,
							"width": 223
						}
					],
					"placeholder": false
				},
				"parentName": "GridContainer_8ignl7g",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_pg62p8m",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_pg62p8m_title)#",
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
				"parentName": "TabContainer_wun4w4r",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_k6uuo0c",
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
				"parentName": "ExpansionPanel_pg62p8m",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_kzxxnsb",
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
				"parentName": "GridContainer_k6uuo0c",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_ti8hp92",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_ti8hp92_placeholder)#",
					"iconOnly": false,
					"targetAttributes": [
						"GridDetail_03fhl1h"
					]
				},
				"parentName": "FlexContainer_kzxxnsb",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_frkeycy",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_frkeycy_caption)#",
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
							"dataSourceName": "GridDetail_03fhl1hDS"
						}
					}
				},
				"parentName": "FlexContainer_kzxxnsb",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_vdpccun",
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
				"parentName": "ExpansionPanel_pg62p8m",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_03fhl1h",
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
					"items": "$GridDetail_03fhl1h",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_03fhl1hDS_Id",
					"columns": [
						{
							"id": "bb8f4041-bc15-0d06-b6ce-2eeae99094f3",
							"code": "GridDetail_03fhl1hDS_DfcPaymentNumber",
							"caption": "#ResourceString(GridDetail_03fhl1hDS_DfcPaymentNumber)#",
							"dataValueType": 28,
							"width": 157
						},
						{
							"id": "173ed5dc-daeb-2d11-f0f2-214d5278c727",
							"code": "GridDetail_03fhl1hDS_DfcAmount",
							"caption": "#ResourceString(GridDetail_03fhl1hDS_DfcAmount)#",
							"dataValueType": 6
						},
						{
							"id": "ff97aa6f-e994-9403-f445-cbea8abe06f7",
							"code": "GridDetail_03fhl1hDS_DfcPaymentType",
							"caption": "#ResourceString(GridDetail_03fhl1hDS_DfcPaymentType)#",
							"dataValueType": 10
						},
						{
							"id": "91fae335-3495-6415-2173-892a00c1e4ab",
							"code": "GridDetail_03fhl1hDS_DfcPeriod",
							"caption": "#ResourceString(GridDetail_03fhl1hDS_DfcPeriod)#",
							"dataValueType": 10
						},
						{
							"id": "f199f8f5-3898-5fad-0598-56d4bbeddc3b",
							"code": "GridDetail_03fhl1hDS_DfcDate",
							"caption": "#ResourceString(GridDetail_03fhl1hDS_DfcDate)#",
							"dataValueType": 8
						}
					],
					"placeholder": false
				},
				"parentName": "GridContainer_vdpccun",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabContainer_ctk8qp3",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_ctk8qp3_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_d1k4uv9",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_d1k4uv9_title)#",
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
				"parentName": "TabContainer_ctk8qp3",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_jme6eax",
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
				"parentName": "ExpansionPanel_d1k4uv9",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_pp90i9a",
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
				"parentName": "GridContainer_jme6eax",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_hss8ud2",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_hss8ud2_caption)#",
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
				"parentName": "FlexContainer_pp90i9a",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_mpbfkgj",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_mpbfkgj_caption)#",
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
							"dataSourceName": "GridDetail_hxwg7x4DS"
						}
					}
				},
				"parentName": "FlexContainer_pp90i9a",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_oczp01u",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_oczp01u_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_pp90i9a",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_fjs5n9u",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_fjs5n9u_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_hxwg7x4"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_oczp01u",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_0pplgpa",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_0pplgpa_caption)#",
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
				"parentName": "GridDetailSettingsBtn_oczp01u",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_ffrasp6",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_ffrasp6_placeholder)#",
					"iconOnly": true,
					"targetAttributes": [
						"GridDetail_hxwg7x4"
					]
				},
				"parentName": "FlexContainer_pp90i9a",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_iv1q5hx",
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
				"parentName": "ExpansionPanel_d1k4uv9",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_hxwg7x4",
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
					"items": "$GridDetail_hxwg7x4",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_hxwg7x4DS_Id",
					"columns": [
						{
							"id": "4075a222-8f30-dfd7-3193-c370716d0a6e",
							"code": "GridDetail_hxwg7x4DS_DfcArrearNumber",
							"caption": "#ResourceString(GridDetail_hxwg7x4DS_DfcArrearNumber)#",
							"dataValueType": 27,
							"width": 171
						},
						{
							"id": "45fe2384-8c68-3f48-723c-144604eb60e7",
							"code": "GridDetail_hxwg7x4DS_DfcAmortizationPeriod",
							"caption": "#ResourceString(GridDetail_hxwg7x4DS_DfcAmortizationPeriod)#",
							"dataValueType": 10
						},
						{
							"id": "4093ca5e-41ed-60b4-b3ef-51c483348c78",
							"code": "GridDetail_hxwg7x4DS_DfcArrearAmount",
							"caption": "#ResourceString(GridDetail_hxwg7x4DS_DfcArrearAmount)#",
							"dataValueType": 6
						},
						{
							"id": "173cfe77-5100-8bde-01ee-8102e80c0b9c",
							"code": "GridDetail_hxwg7x4DS_DfcArrearDate",
							"caption": "#ResourceString(GridDetail_hxwg7x4DS_DfcArrearDate)#",
							"dataValueType": 8
						}
					],
					"placeholder": false
				},
				"parentName": "GridContainer_iv1q5hx",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_utdit3q",
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
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_ivlewgg",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.PDS_DfcPaymentNumber_vz35cmk",
					"labelPosition": "auto",
					"control": "$PDS_DfcPaymentNumber_vz35cmk",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_oo145xg",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_DfcPeriod_ekz1uj5",
					"labelPosition": "auto",
					"control": "$PDS_DfcPeriod_ekz1uj5",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_o80aayg",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_o80aayg_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_oo145xg",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_e1r8igg",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "date",
					"label": "$Resources.Strings.PDS_DfcDate_wobu26g",
					"labelPosition": "auto",
					"control": "$PDS_DfcDate_wobu26g"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ComboBox_mikeeaf",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_DfcPaymentType_pvc9w0t",
					"labelPosition": "auto",
					"control": "$PDS_DfcPaymentType_pvc9w0t",
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
				"name": "addRecord_c2u1cbd",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_c2u1cbd_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_mikeeaf",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NumberInput_z2eb44r",
				"values": {
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_DfcAmount_2fzmlel",
					"labelPosition": "auto",
					"control": "$PDS_DfcAmount_2fzmlel",
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 4
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"DfcName": {
						"modelConfig": {
							"path": "PDS.DfcName"
						}
					},
					"PDS_DfcLoan_qbhoi4a": {
						"modelConfig": {
							"path": "PDS.DfcLoan"
						}
					},
					"PDS_DfcPaymentNumber_vz35cmk": {
						"modelConfig": {
							"path": "PDS.DfcPaymentNumber"
						}
					},
					"PDS_DfcDate_wobu26g": {
						"modelConfig": {
							"path": "PDS.DfcDate"
						}
					},
					"PDS_DfcPeriod_ekz1uj5": {
						"modelConfig": {
							"path": "PDS.DfcPeriod"
						}
					},
					"PDS_DfcPaymentType_pvc9w0t": {
						"modelConfig": {
							"path": "PDS.DfcPaymentType"
						}
					},
					"PDS_DfcContact_e9zh6s4": {
						"modelConfig": {
							"path": "PDS.DfcContact"
						}
					},
					"PDS_DfcLegalEntity_tzo7z6a": {
						"modelConfig": {
							"path": "PDS.DfcLegalEntity"
						}
					},
					"GridDetail_g0myy7s": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_g0myy7sDS",
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "DfcAmortizationAmount"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_g0myy7sDS_DfcAmortizationNumber": {
									"modelConfig": {
										"path": "GridDetail_g0myy7sDS.DfcAmortizationNumber"
									}
								},
								"GridDetail_g0myy7sDS_DfcAmortizationApplicationNumber": {
									"modelConfig": {
										"path": "GridDetail_g0myy7sDS.DfcAmortizationApplicationNumber"
									}
								},
								"GridDetail_g0myy7sDS_DfcAmortizationBeginningBalance": {
									"modelConfig": {
										"path": "GridDetail_g0myy7sDS.DfcAmortizationBeginningBalance"
									}
								},
								"GridDetail_g0myy7sDS_DfcAmortizationPrincipal": {
									"modelConfig": {
										"path": "GridDetail_g0myy7sDS.DfcAmortizationPrincipal"
									}
								},
								"GridDetail_g0myy7sDS_DfcAmortizationInterest": {
									"modelConfig": {
										"path": "GridDetail_g0myy7sDS.DfcAmortizationInterest"
									}
								},
								"GridDetail_g0myy7sDS_DfcAmortizationEndingBalance": {
									"modelConfig": {
										"path": "GridDetail_g0myy7sDS.DfcAmortizationEndingBalance"
									}
								},
								"GridDetail_g0myy7sDS_DfcAmortizationAmount": {
									"modelConfig": {
										"path": "GridDetail_g0myy7sDS.DfcAmortizationAmount"
									}
								},
								"GridDetail_g0myy7sDS_Id": {
									"modelConfig": {
										"path": "GridDetail_g0myy7sDS.Id"
									}
								}
							}
						}
					},
					"PDS_DfcCurrentPayment_cjkopzc": {
						"modelConfig": {
							"path": "PDS.DfcCurrentPayment"
						}
					},
					"PDS_DfcAmount_2fzmlel": {
						"modelConfig": {
							"path": "PDS.DfcAmount"
						}
					},
					"GridDetail_03fhl1h": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_03fhl1hDS"
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_03fhl1hDS_DfcPaymentNumber": {
									"modelConfig": {
										"path": "GridDetail_03fhl1hDS.DfcPaymentNumber"
									}
								},
								"GridDetail_03fhl1hDS_DfcAmount": {
									"modelConfig": {
										"path": "GridDetail_03fhl1hDS.DfcAmount"
									}
								},
								"GridDetail_03fhl1hDS_DfcPaymentType": {
									"modelConfig": {
										"path": "GridDetail_03fhl1hDS.DfcPaymentType"
									}
								},
								"GridDetail_03fhl1hDS_DfcPeriod": {
									"modelConfig": {
										"path": "GridDetail_03fhl1hDS.DfcPeriod"
									}
								},
								"GridDetail_03fhl1hDS_DfcDate": {
									"modelConfig": {
										"path": "GridDetail_03fhl1hDS.DfcDate"
									}
								},
								"GridDetail_03fhl1hDS_Id": {
									"modelConfig": {
										"path": "GridDetail_03fhl1hDS.Id"
									}
								}
							}
						}
					},
					"GridDetail_hxwg7x4": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_hxwg7x4DS",
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
								"GridDetail_hxwg7x4DS_DfcArrearNumber": {
									"modelConfig": {
										"path": "GridDetail_hxwg7x4DS.DfcArrearNumber"
									}
								},
								"GridDetail_hxwg7x4DS_DfcAmortizationPeriod": {
									"modelConfig": {
										"path": "GridDetail_hxwg7x4DS.DfcAmortizationPeriod"
									}
								},
								"GridDetail_hxwg7x4DS_DfcArrearAmount": {
									"modelConfig": {
										"path": "GridDetail_hxwg7x4DS.DfcArrearAmount"
									}
								},
								"GridDetail_hxwg7x4DS_DfcArrearDate": {
									"modelConfig": {
										"path": "GridDetail_hxwg7x4DS.DfcArrearDate"
									}
								},
								"GridDetail_hxwg7x4DS_Id": {
									"modelConfig": {
										"path": "GridDetail_hxwg7x4DS.Id"
									}
								}
							}
						}
					},
					"PDS_DfcLoanStatus_cfd12qr": {
						"modelConfig": {
							"path": "PDS.DfcLoanStatus"
						}
					},
					"PDS_DfcLoanStatus_of6u975": {
						"modelConfig": {
							"path": "PDS.DfcLoanStatus"
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
						"GridDetail_g0myy7sDS": [
							{
								"attributePath": "DfcAmortizationLoan",
								"relationPath": "PDS.DfcLoan"
							}
						],
						"GridDetail_03fhl1hDS": [
							{
								"attributePath": "DfcLoan",
								"relationPath": "PDS.DfcLoan"
							}
						],
						"GridDetail_hxwg7x4DS": [
							{
								"attributePath": "DfcArrearLoan",
								"relationPath": "PDS.DfcLoan"
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
							"entitySchemaName": "DfcPayments"
						},
						"scope": "page"
					},
					"GridDetail_g0myy7sDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "DfcLoanAmortizationTable",
							"attributes": {
								"DfcAmortizationNumber": {
									"path": "DfcAmortizationNumber"
								},
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
								"DfcAmortizationEndingBalance": {
									"path": "DfcAmortizationEndingBalance"
								},
								"DfcAmortizationAmount": {
									"path": "DfcAmortizationAmount"
								}
							}
						}
					},
					"GridDetail_03fhl1hDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "DfcPayments",
							"attributes": {
								"DfcPaymentNumber": {
									"path": "DfcPaymentNumber"
								},
								"DfcAmount": {
									"path": "DfcAmount"
								},
								"DfcPaymentType": {
									"path": "DfcPaymentType"
								},
								"DfcPeriod": {
									"path": "DfcPeriod"
								},
								"DfcDate": {
									"path": "DfcDate"
								}
							}
						}
					},
					"GridDetail_hxwg7x4DS": {
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
								"DfcArrearAmount": {
									"path": "DfcArrearAmount"
								},
								"DfcArrearDate": {
									"path": "DfcArrearDate"
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