define("Cases_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "insert",
				"name": "DfcLoan",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_DfcLoan_nlvloge",
					"labelPosition": "auto",
					"control": "$PDS_DfcLoan_nlvloge",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "CaseInfoFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_1qkoqiu",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_1qkoqiu_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "DfcLoan",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_3ti84hl",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_Status_rieb79r",
					"labelPosition": "auto",
					"control": "$PDS_Status_rieb79r",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"readonly": false
				},
				"parentName": "CaseInfoFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_q5l7gpi",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_q5l7gpi_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_3ti84hl",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DfcActionToTake",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_DfcActionToTake_f2yx7ka",
					"labelPosition": "auto",
					"control": "$PDS_DfcActionToTake_f2yx7ka",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "CaseInfoFlexContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "addRecord_g12fv6f",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_g12fv6f_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "DfcActionToTake",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DfcCommiteeDecisions",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_DfcCommiteeDecisions_f2aahhg",
					"labelPosition": "auto",
					"control": "$PDS_DfcCommiteeDecisions_f2aahhg",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "CaseInfoFlexContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "addRecord_tdfbhv3",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_tdfbhv3_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "DfcCommiteeDecisions",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DfcOutOfRecovery",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_DfcOutOfRecovery_k4fhwwz",
					"labelPosition": "auto",
					"control": "$PDS_DfcOutOfRecovery_k4fhwwz",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "CaseInfoFlexContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "addRecord_8pl2dkz",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_8pl2dkz_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "DfcOutOfRecovery",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TimelineTile_FinApplication_9x9ilnf",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"linkedColumn": "Case",
					"sortedByColumn": null,
					"ownerColumn": "CreatedBy",
					"iconId": null,
					"data": {
						"columns": [
							{
								"columnName": "Number",
								"columnLayout": null
							},
							{
								"columnName": "Status",
								"columnLayout": "{\"column\": 1,\"row\": 1,\"colSpan\": 6,\"rowSpan\": 1}"
							},
							{
								"columnName": "Product",
								"columnLayout": "{\"column\": 7,\"row\": 1,\"colSpan\": 6,\"rowSpan\": 1}"
							}
						],
						"schemaName": "FinApplication",
						"schemaType": null,
						"isDefault": true
					}
				},
				"parentName": "Timeline",
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
					"PDS_DfcLoan_nlvloge": {
						"modelConfig": {
							"path": "PDS.DfcLoan"
						}
					},
					"PDS_DfcColumn2_kpg2zjr": {
						"modelConfig": {
							"path": "PDS.DfcColumn2"
						}
					},
					"PDS_Status_rieb79r": {
						"modelConfig": {
							"path": "PDS.Status"
						}
					},
					"PDS_DfcColumn2_jkic95f": {
						"modelConfig": {
							"path": "PDS.DfcColumn2"
						}
					},
					"PDS_DfcLoanDfcLoanStatus": {
						"modelConfig": {
							"path": "PDS.DfcLoanDfcLoanStatus"
						}
					},
					"PDS_DfcColumn2_de6blm1": {
						"modelConfig": {
							"path": "PDS.DfcColumn2"
						}
					},
					"PDS_DfcCommiteeDecisions_5kvrfck": {
						"modelConfig": {
							"path": "PDS.DfcCommiteeDecisions"
						}
					},
					"PDS_DfcCommiteeDecisions_f2aahhg": {
						"modelConfig": {
							"path": "PDS.DfcCommiteeDecisions"
						}
					},
					"PDS_DfcActionToTake_f2yx7ka": {
						"modelConfig": {
							"path": "PDS.DfcActionToTake"
						}
					},
					"PDS_DfcOutOfRecovery_k4fhwwz": {
						"modelConfig": {
							"path": "PDS.DfcOutOfRecovery"
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});