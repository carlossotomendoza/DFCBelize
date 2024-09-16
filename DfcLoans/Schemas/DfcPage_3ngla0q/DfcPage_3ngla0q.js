define("DfcPage_3ngla0q", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "remove",
				"name": "ContinueInOtherPageButton"
			},
			{
				"operation": "insert",
				"name": "GridContainer_gxfcc7j",
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
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_7rcksox",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.DfcPaymentsDS_DfcPaymentNumber_zbo2rfw",
					"labelPosition": "above",
					"control": "$DfcPaymentsDS_DfcPaymentNumber_zbo2rfw",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_gxfcc7j",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_9n70zjp",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.DfcPaymentsDS_DfcContact_0fi6p7l",
					"labelPosition": "above",
					"control": "$DfcPaymentsDS_DfcContact_0fi6p7l",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GridContainer_gxfcc7j",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ComboBox_43rrs4t",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.DfcPaymentsDS_DfcLoan_3ig2a90",
					"labelPosition": "above",
					"control": "$DfcPaymentsDS_DfcLoan_3ig2a90",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_gxfcc7j",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ComboBox_w3dzt68",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.DfcPaymentsDS_DfcPeriod_4ugfrs0",
					"labelPosition": "above",
					"control": "$DfcPaymentsDS_DfcPeriod_4ugfrs0",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": false,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_gxfcc7j",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Checkbox_8fz3guf",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Checkbox",
					"label": "$Resources.Strings.DfcPaymentsDS_DfcPeriodDfcInArrear",
					"labelPosition": "above",
					"control": "$DfcPaymentsDS_DfcPeriodDfcInArrear",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_gxfcc7j",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "ComboBox_vfaaodi",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 6,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "#ResourceString(ComboBox_vfaaodi_label)#",
					"labelPosition": "above",
					"control": "$DfcPaymentsDS_DfcArrear_5mdziqw",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": false,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_gxfcc7j",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "AmountArrear",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 7,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "#ResourceString(AmountArrear_label)#",
					"labelPosition": "above",
					"control": "$DfcPaymentsDS_DfcArrearDfcArrearAmount",
					"readonly": true,
					"visible": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_gxfcc7j",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "ComboBox_xa7nf4p",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 8,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.DfcPaymentsDS_DfcPaymentType_0d63d9w",
					"labelPosition": "above",
					"control": "$DfcPaymentsDS_DfcPaymentType_0d63d9w",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": false,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_gxfcc7j",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_y10rn34",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 9,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "date",
					"label": "$Resources.Strings.DfcPaymentsDS_DfcDate_mqvy7n7",
					"labelPosition": "above",
					"control": "$DfcPaymentsDS_DfcDate_mqvy7n7"
				},
				"parentName": "GridContainer_gxfcc7j",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "Label_irabghe",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 10,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_irabghe_caption)#)#",
					"labelType": "headline-4",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "center",
					"visible": true
				},
				"parentName": "GridContainer_gxfcc7j",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "NumberInput_jt6lfkl",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 11,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.DfcPaymentsDS_DfcPeriodDfcAmortizationAmount",
					"control": "$DfcPaymentsDS_DfcPeriodDfcAmortizationAmount",
					"readonly": true,
					"placeholder": "",
					"labelPosition": "above",
					"tooltip": ""
				},
				"parentName": "GridContainer_gxfcc7j",
				"propertyName": "items",
				"index": 10
			},
			{
				"operation": "insert",
				"name": "NumberInput_qz7a287",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 12,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.DfcPaymentsDS_DfcLoanDfcTotalEscrowPayment",
					"control": "$DfcPaymentsDS_DfcLoanDfcTotalEscrowPayment",
					"readonly": true,
					"placeholder": "",
					"labelPosition": "above",
					"tooltip": ""
				},
				"parentName": "GridContainer_gxfcc7j",
				"propertyName": "items",
				"index": 11
			},
			{
				"operation": "insert",
				"name": "NumberInput_v6rp3yo",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 13,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "#ResourceString(NumberInput_v6rp3yo_label)#",
					"labelPosition": "above",
					"control": "$DfcPaymentsDS_DfcLoanDfcTotalPeriodPayment",
					"readonly": true,
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_gxfcc7j",
				"propertyName": "items",
				"index": 12
			},
			{
				"operation": "insert",
				"name": "NumberInput_259l6zm",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 14,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.DfcPaymentsDS_DfcTotalInstallmentAmount_q5i52f2",
					"labelPosition": "above",
					"control": "$DfcPaymentsDS_DfcTotalInstallmentAmount_q5i52f2",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_gxfcc7j",
				"propertyName": "items",
				"index": 13
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"DfcPaymentsDS_DfcPaymentNumber_zbo2rfw": {
						"modelConfig": {
							"path": "DfcPaymentsDS.DfcPaymentNumber"
						}
					},
					"DfcPaymentsDS_DfcPaymentType_0d63d9w": {
						"modelConfig": {
							"path": "DfcPaymentsDS.DfcPaymentType"
						}
					},
					"DfcPaymentsDS_DfcPeriod_4ugfrs0": {
						"modelConfig": {
							"path": "DfcPaymentsDS.DfcPeriod"
						}
					},
					"DfcPaymentsDS_DfcAmount_5kf7ljd": {
						"modelConfig": {
							"path": "DfcPaymentsDS.DfcAmount"
						}
					},
					"DfcPaymentsDS_DfcLoan_3ig2a90": {
						"modelConfig": {
							"path": "DfcPaymentsDS.DfcLoan"
						}
					},
					"DfcPaymentsDS_DfcDate_mqvy7n7": {
						"modelConfig": {
							"path": "DfcPaymentsDS.DfcDate"
						}
					},
					"DfcPaymentsDS_DfcArrear_5mdziqw": {
						"modelConfig": {
							"path": "DfcPaymentsDS.DfcArrear"
						}
					},
					"DfcPaymentsDS_DfcArrearDfcArrearAmount": {
						"modelConfig": {
							"path": "DfcPaymentsDS.DfcArrearDfcArrearAmount"
						}
					},
					"DfcPaymentsDS_DfcContact_639p4ih": {
						"modelConfig": {
							"path": "DfcPaymentsDS.DfcContact"
						}
					},
					"DfcPaymentsDS_DfcContact_0fi6p7l": {
						"modelConfig": {
							"path": "DfcPaymentsDS.DfcContact"
						}
					},
					"DfcPaymentsDS_DfcColumn9_as34jlt": {
						"modelConfig": {
							"path": "DfcPaymentsDS.DfcColumn9"
						}
					},
					"DfcPaymentsDS_DfcPeriodDfcInArrear": {
						"modelConfig": {
							"path": "DfcPaymentsDS.DfcPeriodDfcInArrear"
						}
					},
					"DfcPaymentsDS_DfcTotalInstallmentAmount_q5i52f2": {
						"modelConfig": {
							"path": "DfcPaymentsDS.DfcTotalInstallmentAmount"
						}
					},
					"DfcPaymentsDS_DfcLoanDfcTotalPeriodPayment": {
						"modelConfig": {
							"path": "DfcPaymentsDS.DfcLoanDfcTotalPeriodPayment"
						}
					},
					"DfcPaymentsDS_DfcLoanDfcTotalEscrowPayment": {
						"modelConfig": {
							"path": "DfcPaymentsDS.DfcLoanDfcTotalEscrowPayment"
						}
					},
					"DfcPaymentsDS_DfcPeriodDfcAmortizationAmount": {
						"modelConfig": {
							"path": "DfcPaymentsDS.DfcPeriodDfcAmortizationAmount"
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"dataSources": {
						"DfcPaymentsDS": {
							"type": "crt.EntityDataSource",
							"scope": "page",
							"config": {
								"entitySchemaName": "DfcPayments",
								"attributes": {
									"DfcArrearDfcArrearAmount": {
										"path": "DfcArrear.DfcArrearAmount",
										"type": "ForwardReference"
									},
									"DfcPeriodDfcInArrear": {
										"path": "DfcPeriod.DfcInArrear",
										"type": "ForwardReference"
									},
									"DfcLoanDfcTotalPeriodPayment": {
										"path": "DfcLoan.DfcTotalPeriodPayment",
										"type": "ForwardReference"
									},
									"DfcLoanDfcTotalEscrowPayment": {
										"path": "DfcLoan.DfcTotalEscrowPayment",
										"type": "ForwardReference"
									},
									"DfcPeriodDfcAmortizationAmount": {
										"path": "DfcPeriod.DfcAmortizationAmount",
										"type": "ForwardReference"
									}
								}
							}
						}
					},
					"primaryDataSourceName": "DfcPaymentsDS"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});