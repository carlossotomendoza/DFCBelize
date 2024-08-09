define("DfcPage_Occupations", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "MainContainer",
				"values": {
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"alignItems": "stretch"
				}
			},
			{
				"operation": "insert",
				"name": "DfcRefNo",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.DfcParticipantOccupDS_DfcRefNo_3tfil89",
					"labelPosition": "above",
					"control": "$DfcParticipantOccupDS_DfcRefNo_3tfil89",
					"readonly": true
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DfcOccupation",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.DfcParticipantOccupDS_DfcOccupation_782srla",
					"labelPosition": "above",
					"control": "$DfcParticipantOccupDS_DfcOccupation_782srla",
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
				"name": "addRecord_654xmf5",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_654xmf5_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "DfcOccupation",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DfcYearsOfExp",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.DfcParticipantOccupDS_DfcYearsOfExp_jnipwuv",
					"labelPosition": "above",
					"control": "$DfcParticipantOccupDS_DfcYearsOfExp_jnipwuv"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 2
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"DfcParticipantOccupDS_DfcRefNo_3tfil89": {
						"modelConfig": {
							"path": "DfcParticipantOccupDS.DfcRefNo"
						}
					},
					"DfcParticipantOccupDS_DfcOccupation_782srla": {
						"modelConfig": {
							"path": "DfcParticipantOccupDS.DfcOccupation"
						}
					},
					"DfcParticipantOccupDS_DfcYearsOfExp_jnipwuv": {
						"modelConfig": {
							"path": "DfcParticipantOccupDS.DfcYearsOfExp"
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
						"DfcParticipantOccupDS": {
							"type": "crt.EntityDataSource",
							"scope": "page",
							"config": {
								"entitySchemaName": "DfcParticipantOccup"
							}
						}
					},
					"primaryDataSourceName": "DfcParticipantOccupDS"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});