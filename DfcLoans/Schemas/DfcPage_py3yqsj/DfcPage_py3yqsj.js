define("DfcPage_py3yqsj", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
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
					"label": "$Resources.Strings.DfcAppFormCommInfoDS_DfcRefNo_jcmx1t2",
					"labelPosition": "above",
					"control": "$DfcAppFormCommInfoDS_DfcRefNo_jcmx1t2"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DfcCommunicationType",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.DfcAppFormCommInfoDS_DfcCommunicationType_y2x59nb",
					"labelPosition": "above",
					"control": "$DfcAppFormCommInfoDS_DfcCommunicationType_y2x59nb",
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
				"name": "addRecord_q9pzm2j",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_q9pzm2j_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "DfcCommunicationType",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DfcPhone",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.PhoneInput",
					"label": "$Resources.Strings.DfcAppFormCommInfoDS_DfcPhone_c1u1nlt",
					"labelPosition": "above",
					"control": "$DfcAppFormCommInfoDS_DfcPhone_c1u1nlt",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "DfcEmailAddr",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.EmailInput",
					"label": "$Resources.Strings.DfcAppFormCommInfoDS_DfcEmailAddr_xyy40af",
					"labelPosition": "above",
					"control": "$DfcAppFormCommInfoDS_DfcEmailAddr_xyy40af",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
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
					"DfcAppFormCommInfoDS_DfcCommunicationType_y2x59nb": {
						"modelConfig": {
							"path": "DfcAppFormCommInfoDS.DfcCommunicationType"
						}
					},
					"DfcAppFormCommInfoDS_DfcPhone_c1u1nlt": {
						"modelConfig": {
							"path": "DfcAppFormCommInfoDS.DfcPhone"
						}
					},
					"DfcAppFormCommInfoDS_DfcEmailAddr_xyy40af": {
						"modelConfig": {
							"path": "DfcAppFormCommInfoDS.DfcEmailAddr"
						}
					},
					"DfcAppFormCommInfoDS_DfcRefNo_jcmx1t2": {
						"modelConfig": {
							"path": "DfcAppFormCommInfoDS.DfcRefNo"
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
						"DfcAppFormCommInfoDS": {
							"type": "crt.EntityDataSource",
							"scope": "page",
							"config": {
								"entitySchemaName": "DfcAppFormCommInfo"
							}
						}
					},
					"primaryDataSourceName": "DfcAppFormCommInfoDS"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});