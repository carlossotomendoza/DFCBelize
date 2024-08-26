define("DfcPage_gh47jaz", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "PageTitle",
				"values": {
					"caption": "#MacrosTemplateString(#ResourceString(PageTitle_caption)#)#",
					"visible": true
				}
			},
			{
				"operation": "merge",
				"name": "MainContainer",
				"values": {
					"alignItems": "stretch"
				}
			},
			{
				"operation": "insert",
				"name": "GridContainer_rakvwm2",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
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
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NumberInput_ckzvg5n",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.DfcLoansDS_DfcInstallmentPeriod_cspr5er",
					"labelPosition": "above",
					"control": "$DfcLoansDS_DfcInstallmentPeriod_cspr5er"
				},
				"parentName": "GridContainer_rakvwm2",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NumberInput_vorbwln",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "#ResourceString(NumberInput_vorbwln_label)#",
					"labelPosition": "above",
					"control": "$DfcLoansDS_DfcTotalBal_87umz72",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_rakvwm2",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_uo5e8st",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "datetime",
					"label": "#ResourceString(DateTimePicker_uo5e8st_label)#",
					"labelPosition": "above",
					"control": "$DfcLoansDS_ModifiedOn_tg6ssnq",
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_rakvwm2",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_cd29a68",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "date",
					"label": "#ResourceString(DateTimePicker_cd29a68_label)#",
					"labelPosition": "above",
					"control": "$DfcLoansDS_DfcDepositPayDate_7xck4a2",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_rakvwm2",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "NumberInput_v49vvuq",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.DfcLoansDS_DfcPaidAmount_km3v4ml",
					"labelPosition": "above",
					"control": "$DfcLoansDS_DfcPaidAmount_km3v4ml"
				},
				"parentName": "GridContainer_rakvwm2",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "NumberInput_3w8piui",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "#ResourceString(NumberInput_3w8piui_label)#",
					"labelPosition": "above",
					"control": "$DfcLoansDS_DfcInterestRate_myp77ah",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_rakvwm2",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "ComboBox_4a3zry6",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.DfcLoansDS_DfcLoanApp_smv5xtx",
					"labelPosition": "above",
					"control": "$DfcLoansDS_DfcLoanApp_smv5xtx",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GridContainer_rakvwm2",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "addRecord_2p6ktr2",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_2p6ktr2_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_4a3zry6",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_qyukh2o",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.DfcLoansDS_DfcLoanNo_ltwbd9a",
					"labelPosition": "above",
					"control": "$DfcLoansDS_DfcLoanNo_ltwbd9a"
				},
				"parentName": "GridContainer_rakvwm2",
				"propertyName": "items",
				"index": 7
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"DfcLoansDS_DfcInstallmentPeriod_cspr5er": {
						"modelConfig": {
							"path": "DfcLoansDS.DfcInstallmentPeriod"
						}
					},
					"DfcLoansDS_ModifiedOn_tg6ssnq": {
						"modelConfig": {
							"path": "DfcLoansDS.ModifiedOn"
						}
					},
					"DfcLoansDS_DfcPaidAmount_km3v4ml": {
						"modelConfig": {
							"path": "DfcLoansDS.DfcPaidAmount"
						}
					},
					"DfcLoansDS_DfcLoanApp_smv5xtx": {
						"modelConfig": {
							"path": "DfcLoansDS.DfcLoanApp"
						}
					},
					"DfcLoansDS_DfcLoanNo_ltwbd9a": {
						"modelConfig": {
							"path": "DfcLoansDS.DfcLoanNo"
						}
					},
					"DfcLoansDS_DfcTotalBal_87umz72": {
						"modelConfig": {
							"path": "DfcLoansDS.DfcTotalBal"
						}
					},
					"DfcLoansDS_DfcDepositPayDate_7xck4a2": {
						"modelConfig": {
							"path": "DfcLoansDS.DfcDepositPayDate"
						}
					},
					"DfcLoansDS_DfcInterestRate_myp77ah": {
						"modelConfig": {
							"path": "DfcLoansDS.DfcInterestRate"
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
						"DfcLoansDS": {
							"type": "crt.EntityDataSource",
							"scope": "page",
							"config": {
								"entitySchemaName": "DfcLoans"
							}
						}
					},
					"primaryDataSourceName": "DfcLoansDS"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});