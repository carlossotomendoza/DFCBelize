define("DfcPage_3ngla0q", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
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
					"control": "$DfcPaymentsDS_DfcPaymentNumber_zbo2rfw"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_43rrs4t",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.DfcPaymentsDS_DfcLoan_3ig2a90",
					"labelPosition": "above",
					"control": "$DfcPaymentsDS_DfcLoan_3ig2a90",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_ehwv2sv",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_ehwv2sv_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_43rrs4t",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_w3dzt68",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.DfcPaymentsDS_DfcPeriod_4ugfrs0",
					"labelPosition": "above",
					"control": "$DfcPaymentsDS_DfcPeriod_4ugfrs0",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "addRecord_pgh5wqp",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_pgh5wqp_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_w3dzt68",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_y10rn34",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "date",
					"label": "$Resources.Strings.DfcPaymentsDS_DfcDate_mqvy7n7",
					"labelPosition": "above",
					"control": "$DfcPaymentsDS_DfcDate_mqvy7n7"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ComboBox_xa7nf4p",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.DfcPaymentsDS_DfcPaymentType_0d63d9w",
					"labelPosition": "above",
					"control": "$DfcPaymentsDS_DfcPaymentType_0d63d9w",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "addRecord_k2k7244",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_k2k7244_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_xa7nf4p",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NumberInput_v6rp3yo",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 6,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.DfcPaymentsDS_DfcAmount_5kf7ljd",
					"labelPosition": "above",
					"control": "$DfcPaymentsDS_DfcAmount_5kf7ljd"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 5
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
								"entitySchemaName": "DfcPayments"
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