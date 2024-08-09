define("DfcApplicationFinancials", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "insert",
				"name": "DfcRefNo",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.DfcAppFinancialsDS_DfcRefNo_46arvef",
					"labelPosition": "above",
					"control": "$DfcAppFinancialsDS_DfcRefNo_46arvef"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DfcFinType",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "#ResourceString(DfcFinType_label)#",
					"labelPosition": "above",
					"control": "$DfcAppFinancialsDS_DfcFinType_gvuqkbx",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "DfcFinCategory",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "#ResourceString(DfcFinCategory_label)#",
					"labelPosition": "above",
					"control": "$DfcAppFinancialsDS_DfcFinCategory_arszy41",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "addRecord_63iaa4a",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_63iaa4a_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "DfcFinCategory",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NumberInput_goj2nyj",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.DfcAppFinancialsDS_DfcAmount_ty8ckom",
					"labelPosition": "above",
					"control": "$DfcAppFinancialsDS_DfcAmount_ty8ckom"
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
					"DfcAppFinancialsDS_DfcFinType_gvuqkbx": {
						"modelConfig": {
							"path": "DfcAppFinancialsDS.DfcFinType"
						}
					},
					"DfcAppFinancialsDS_DfcFinCategory_arszy41": {
						"modelConfig": {
							"path": "DfcAppFinancialsDS.DfcFinCategory"
						}
					},
					"DfcAppFinancialsDS_DfcAmount_ty8ckom": {
						"modelConfig": {
							"path": "DfcAppFinancialsDS.DfcAmount"
						}
					},
					"DfcAppFinancialsDS_DfcRefNo_46arvef": {
						"modelConfig": {
							"path": "DfcAppFinancialsDS.DfcRefNo"
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
						"DfcAppFinancialsDS": {
							"type": "crt.EntityDataSource",
							"scope": "page",
							"config": {
								"entitySchemaName": "DfcAppFinancials"
							}
						}
					},
					"primaryDataSourceName": "DfcAppFinancialsDS"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});