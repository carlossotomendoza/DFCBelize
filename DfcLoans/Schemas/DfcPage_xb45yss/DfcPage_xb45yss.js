define("DfcPage_xb45yss", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "insert",
				"name": "ComboBox_ftc564y",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.DfcRiskMatrixDS_DfcLoanApplication_lgx0nsi",
					"labelPosition": "above",
					"control": "$DfcRiskMatrixDS_DfcLoanApplication_lgx0nsi",
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
				"name": "addRecord_0iv7gf7",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_0iv7gf7_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_ftc564y",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_d43r5zc",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.DfcRiskMatrixDS_DfcRobustnessId_t0hszqx",
					"labelPosition": "above",
					"control": "$DfcRiskMatrixDS_DfcRobustnessId_t0hszqx",
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
				"name": "addRecord_n7jmwhz",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_n7jmwhz_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_d43r5zc",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_p6qs26u",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.DfcRiskMatrixDS_DfcApplicantResidence_9jvzyag",
					"labelPosition": "above",
					"control": "$DfcRiskMatrixDS_DfcApplicantResidence_9jvzyag",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "addRecord_u9bkok1",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_u9bkok1_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_p6qs26u",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_5qez00w",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.DfcRiskMatrixDS_DfcApplicantStatus_yzc0yq2",
					"labelPosition": "above",
					"control": "$DfcRiskMatrixDS_DfcApplicantStatus_yzc0yq2",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "addRecord_7hl70f2",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_7hl70f2_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_5qez00w",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_1adsn4e",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.DfcRiskMatrixDS_DfcEmploymentType_8v75y56",
					"labelPosition": "above",
					"control": "$DfcRiskMatrixDS_DfcEmploymentType_8v75y56",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "addRecord_73wrfh9",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_73wrfh9_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_1adsn4e",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_u3z2kst",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.DfcRiskMatrixDS_DfcSourceFundRisk_nmp1l3u",
					"labelPosition": "above",
					"control": "$DfcRiskMatrixDS_DfcSourceFundRisk_nmp1l3u",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "addRecord_iwwaw1k",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_iwwaw1k_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_u3z2kst",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_37c9zm0",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.DfcRiskMatrixDS_DfcLoanPurpose_d9lnljw",
					"labelPosition": "above",
					"control": "$DfcRiskMatrixDS_DfcLoanPurpose_d9lnljw",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "addRecord_429usi5",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_429usi5_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_37c9zm0",
				"propertyName": "listActions",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"DfcRiskMatrixDS_DfcLoanApplication_lgx0nsi": {
						"modelConfig": {
							"path": "DfcRiskMatrixDS.DfcLoanApplication"
						}
					},
					"DfcRiskMatrixDS_DfcRobustnessId_t0hszqx": {
						"modelConfig": {
							"path": "DfcRiskMatrixDS.DfcRobustnessId"
						}
					},
					"DfcRiskMatrixDS_DfcApplicantResidence_9jvzyag": {
						"modelConfig": {
							"path": "DfcRiskMatrixDS.DfcApplicantResidence"
						}
					},
					"DfcRiskMatrixDS_DfcApplicantStatus_yzc0yq2": {
						"modelConfig": {
							"path": "DfcRiskMatrixDS.DfcApplicantStatus"
						}
					},
					"DfcRiskMatrixDS_DfcEmploymentType_8v75y56": {
						"modelConfig": {
							"path": "DfcRiskMatrixDS.DfcEmploymentType"
						}
					},
					"DfcRiskMatrixDS_DfcSourceFundRisk_nmp1l3u": {
						"modelConfig": {
							"path": "DfcRiskMatrixDS.DfcSourceFundRisk"
						}
					},
					"DfcRiskMatrixDS_DfcLoanPurpose_d9lnljw": {
						"modelConfig": {
							"path": "DfcRiskMatrixDS.DfcLoanPurpose"
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
						"DfcRiskMatrixDS": {
							"type": "crt.EntityDataSource",
							"scope": "page",
							"config": {
								"entitySchemaName": "DfcRiskMatrix"
							}
						}
					},
					"primaryDataSourceName": "DfcRiskMatrixDS"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});