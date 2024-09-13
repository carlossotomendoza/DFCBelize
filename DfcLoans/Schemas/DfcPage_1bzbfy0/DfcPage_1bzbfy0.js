define("DfcPage_1bzbfy0", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "insert",
				"name": "DfcEscrowItem",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.DfcEscrowInfoDS_DfcEscrowItem_fohagn9",
					"labelPosition": "above",
					"control": "$DfcEscrowInfoDS_DfcEscrowItem_fohagn9",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_okzk0u3",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_okzk0u3_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "DfcEscrowItem",
				"propertyName": "listActions",
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
					"label": "$Resources.Strings.DfcEscrowInfoDS_DfcAmount_6x494xo",
					"labelPosition": "above",
					"control": "$DfcEscrowInfoDS_DfcAmount_6x494xo"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "DfcStartDate",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "date",
					"label": "$Resources.Strings.DfcEscrowInfoDS_DfcStartDate_0stv7sf",
					"labelPosition": "above",
					"control": "$DfcEscrowInfoDS_DfcStartDate_0stv7sf"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "DfcEndDate",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "date",
					"label": "$Resources.Strings.DfcEscrowInfoDS_DfcEndDate_5gndux6",
					"labelPosition": "above",
					"control": "$DfcEscrowInfoDS_DfcEndDate_5gndux6"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 3
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"DfcEscrowInfoDS_DfcEscrowItem_fohagn9": {
						"modelConfig": {
							"path": "DfcEscrowInfoDS.DfcEscrowItem"
						}
					},
					"DfcEscrowInfoDS_DfcAmount_6x494xo": {
						"modelConfig": {
							"path": "DfcEscrowInfoDS.DfcAmount"
						}
					},
					"DfcEscrowInfoDS_DfcStartDate_0stv7sf": {
						"modelConfig": {
							"path": "DfcEscrowInfoDS.DfcStartDate"
						}
					},
					"DfcEscrowInfoDS_DfcEndDate_5gndux6": {
						"modelConfig": {
							"path": "DfcEscrowInfoDS.DfcEndDate"
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
						"DfcEscrowInfoDS": {
							"type": "crt.EntityDataSource",
							"scope": "page",
							"config": {
								"entitySchemaName": "DfcEscrowInfo"
							}
						}
					},
					"primaryDataSourceName": "DfcEscrowInfoDS"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});