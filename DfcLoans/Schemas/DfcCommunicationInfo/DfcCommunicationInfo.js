define("DfcCommunicationInfo", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "insert",
				"name": "Number",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.AppFormCommunicationDS_Number_jshutkr",
					"labelPosition": "above",
					"control": "$AppFormCommunicationDS_Number_jshutkr"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CommunicationType",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.AppFormCommunicationDS_CommunicationType_mchbal3",
					"labelPosition": "above",
					"control": "$AppFormCommunicationDS_CommunicationType_mchbal3",
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
				"name": "addRecord_ijyhnaj",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_ijyhnaj_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "CommunicationType",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Primary",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Checkbox",
					"label": "$Resources.Strings.AppFormCommunicationDS_Primary_j7u0bhl",
					"labelPosition": "above",
					"control": "$AppFormCommunicationDS_Primary_j7u0bhl"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "SearchNumber",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.AppFormCommunicationDS_SearchNumber_3sutehm",
					"labelPosition": "above",
					"control": "$AppFormCommunicationDS_SearchNumber_3sutehm"
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
					"AppFormCommunicationDS_CommunicationType_mchbal3": {
						"modelConfig": {
							"path": "AppFormCommunicationDS.CommunicationType"
						}
					},
					"AppFormCommunicationDS_Primary_j7u0bhl": {
						"modelConfig": {
							"path": "AppFormCommunicationDS.Primary"
						}
					},
					"AppFormCommunicationDS_Number_jshutkr": {
						"modelConfig": {
							"path": "AppFormCommunicationDS.Number"
						}
					},
					"AppFormCommunicationDS_SearchNumber_3sutehm": {
						"modelConfig": {
							"path": "AppFormCommunicationDS.SearchNumber"
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
						"AppFormCommunicationDS": {
							"type": "crt.EntityDataSource",
							"scope": "page",
							"config": {
								"entitySchemaName": "AppFormCommunication"
							}
						}
					},
					"primaryDataSourceName": "AppFormCommunicationDS"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});