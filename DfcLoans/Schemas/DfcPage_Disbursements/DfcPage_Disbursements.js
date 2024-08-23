define("DfcPage_Disbursements", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "insert",
				"name": "DfcDisbDate",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "date",
					"label": "$Resources.Strings.DfcDisbursementsDS_DfcDisbDate_lujp64m",
					"labelPosition": "above",
					"control": "$DfcDisbursementsDS_DfcDisbDate_lujp64m"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DfcAmount",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.DfcDisbursementsDS_DfcAmount_wudk4zm",
					"labelPosition": "above",
					"control": "$DfcDisbursementsDS_DfcAmount_wudk4zm"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "CreatedBy",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.DfcDisbursementsDS_CreatedBy_1ilxeeo",
					"labelPosition": "above",
					"control": "$DfcDisbursementsDS_CreatedBy_1ilxeeo",
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
				"name": "addRecord_osxj9cp",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_osxj9cp_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "CreatedBy",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CreatedOn",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "datetime",
					"label": "$Resources.Strings.DfcDisbursementsDS_CreatedOn_uqlf03q",
					"labelPosition": "above",
					"control": "$DfcDisbursementsDS_CreatedOn_uqlf03q"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ModifiedBy",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.DfcDisbursementsDS_ModifiedBy_h5twyec",
					"labelPosition": "above",
					"control": "$DfcDisbursementsDS_ModifiedBy_h5twyec",
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
				"name": "addRecord_om16o9z",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_om16o9z_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ModifiedBy",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ModifiedOn",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 6,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "datetime",
					"label": "$Resources.Strings.DfcDisbursementsDS_ModifiedOn_y5s9ldi",
					"labelPosition": "above",
					"control": "$DfcDisbursementsDS_ModifiedOn_y5s9ldi"
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
					"DfcDisbursementsDS_DfcDisbDate_lujp64m": {
						"modelConfig": {
							"path": "DfcDisbursementsDS.DfcDisbDate"
						}
					},
					"DfcDisbursementsDS_DfcAmount_wudk4zm": {
						"modelConfig": {
							"path": "DfcDisbursementsDS.DfcAmount"
						}
					},
					"DfcDisbursementsDS_CreatedBy_1ilxeeo": {
						"modelConfig": {
							"path": "DfcDisbursementsDS.CreatedBy"
						}
					},
					"DfcDisbursementsDS_CreatedOn_uqlf03q": {
						"modelConfig": {
							"path": "DfcDisbursementsDS.CreatedOn"
						}
					},
					"DfcDisbursementsDS_ModifiedBy_h5twyec": {
						"modelConfig": {
							"path": "DfcDisbursementsDS.ModifiedBy"
						}
					},
					"DfcDisbursementsDS_ModifiedOn_y5s9ldi": {
						"modelConfig": {
							"path": "DfcDisbursementsDS.ModifiedOn"
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
						"DfcDisbursementsDS": {
							"type": "crt.EntityDataSource",
							"scope": "page",
							"config": {
								"entitySchemaName": "DfcDisbursements"
							}
						}
					},
					"primaryDataSourceName": "DfcDisbursementsDS"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});