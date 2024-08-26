define("DfcPage_33fs6gx", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
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
				"operation": "insert",
				"name": "GridContainer_sqg1z5e",
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
				"name": "DfcInstallmentPeriod",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.DfcLoansDS_DfcInstallmentPeriod_mvoteey",
					"labelPosition": "above",
					"control": "$DfcLoansDS_DfcInstallmentPeriod_mvoteey"
				},
				"parentName": "GridContainer_sqg1z5e",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NumberInput_p6dt041",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "#ResourceString(NumberInput_p6dt041_label)#",
					"labelPosition": "above",
					"control": "$DfcLoansDS_DfcTotalBal_pt2nvkt",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_sqg1z5e",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_x2x0u37",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "datetime",
					"label": "#ResourceString(DateTimePicker_x2x0u37_label)#",
					"labelPosition": "above",
					"control": "$DfcLoansDS_ModifiedOn_mvgp5ze",
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_sqg1z5e",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_lvlvgqt",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "date",
					"label": "$Resources.Strings.DfcLoansDS_DfcLastPymtDate_0l6zo4f",
					"labelPosition": "above",
					"control": "$DfcLoansDS_DfcLastPymtDate_0l6zo4f"
				},
				"parentName": "GridContainer_sqg1z5e",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "DfcPaidAmount",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.DfcLoansDS_DfcPaidAmount_fi37oid",
					"labelPosition": "above",
					"control": "$DfcLoansDS_DfcPaidAmount_fi37oid"
				},
				"parentName": "GridContainer_sqg1z5e",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "NumberInput_bdtkvnf",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "#ResourceString(NumberInput_bdtkvnf_label)#",
					"labelPosition": "above",
					"control": "$DfcLoansDS_DfcInterestRate_c1vl6q7",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_sqg1z5e",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "ComboBox_mim1edb",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.DfcLoansDS_DfcLoanApp_vhe18gq",
					"labelPosition": "above",
					"control": "$DfcLoansDS_DfcLoanApp_vhe18gq",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GridContainer_sqg1z5e",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "addRecord_v8rhc5t",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_v8rhc5t_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_mim1edb",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_1uca21i",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.DfcLoansDS_DfcLoanNo_e6bdsk8",
					"labelPosition": "above",
					"control": "$DfcLoansDS_DfcLoanNo_e6bdsk8"
				},
				"parentName": "GridContainer_sqg1z5e",
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
					"DfcLoansDS_DfcInstallmentPeriod_mvoteey": {
						"modelConfig": {
							"path": "DfcLoansDS.DfcInstallmentPeriod"
						}
					},
					"DfcLoansDS_ModifiedOn_mvgp5ze": {
						"modelConfig": {
							"path": "DfcLoansDS.ModifiedOn"
						}
					},
					"DfcLoansDS_DfcPaidAmount_fi37oid": {
						"modelConfig": {
							"path": "DfcLoansDS.DfcPaidAmount"
						}
					},
					"DfcLoansDS_DfcLoanApp_vhe18gq": {
						"modelConfig": {
							"path": "DfcLoansDS.DfcLoanApp"
						}
					},
					"DfcLoansDS_DfcLoanNo_e6bdsk8": {
						"modelConfig": {
							"path": "DfcLoansDS.DfcLoanNo"
						}
					},
					"DfcLoansDS_DfcTotalBal_pt2nvkt": {
						"modelConfig": {
							"path": "DfcLoansDS.DfcTotalBal"
						}
					},
					"DfcLoansDS_DfcLastPymtDate_0l6zo4f": {
						"modelConfig": {
							"path": "DfcLoansDS.DfcLastPymtDate"
						}
					},
					"DfcLoansDS_DfcInterestRate_c1vl6q7": {
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