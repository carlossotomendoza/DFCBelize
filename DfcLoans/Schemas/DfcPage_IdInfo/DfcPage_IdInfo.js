define("DfcPage_IdInfo", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
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
				"name": "DfcNumber",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.DfcIdInfoDS_DfcNumber_28j52vm",
					"labelPosition": "above",
					"control": "$DfcIdInfoDS_DfcNumber_28j52vm",
					"readonly": true
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ParticipantRoleInput",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.DfcIdInfoDS_DfcAppformParticipantRole",
					"ariaLabel": "#ResourceString(ComboBox_hzt2lra_ariaLabel)#",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "above",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"readonly": true,
					"control": "$DfcIdInfoDS_DfcAppformParticipantRole",
					"visible": true,
					"placeholder": ""
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "DfcAppform",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "#ResourceString(DfcAppform_label)#",
					"labelPosition": "above",
					"control": "$DfcIdInfoDS_DfcAppform_hpmd4g6",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
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
				"name": "addRecord_hop56ei",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_hop56ei_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "DfcAppform",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DfcProduct",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.DfcIdInfoDS_DfcProduct_sqfpdyl",
					"labelPosition": "above",
					"control": "$DfcIdInfoDS_DfcProduct_sqfpdyl",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "DfcProductCondition",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.DfcIdInfoDS_DfcProductCondition_o53uc2b",
					"labelPosition": "above",
					"control": "$DfcIdInfoDS_DfcProductCondition_o53uc2b",
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
				"index": 4
			},
			{
				"operation": "insert",
				"name": "DfcListInCondition",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "#ResourceString(DfcListInCondition_label)#",
					"labelPosition": "above",
					"control": "$DfcIdInfoDS_DfcListInCondition_feunpuc",
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
				"index": 5
			},
			{
				"operation": "insert",
				"name": "DfcIdNumber",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.DfcIdInfoDS_DfcIdNumber_irk8z71",
					"labelPosition": "above",
					"control": "$DfcIdInfoDS_DfcIdNumber_irk8z71"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "DfcIdIssueDate",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "date",
					"label": "$Resources.Strings.DfcIdInfoDS_DfcIdIssueDate_qk958r6",
					"labelPosition": "above",
					"control": "$DfcIdInfoDS_DfcIdIssueDate_qk958r6"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "DfcIdExpirationDate",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "date",
					"label": "$Resources.Strings.DfcIdInfoDS_DfcIdExpirationDate_ikpcjkm",
					"labelPosition": "above",
					"control": "$DfcIdInfoDS_DfcIdExpirationDate_ikpcjkm"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "ComboBox_f6ltdnn",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 6,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.DfcIdInfoDS_DfcDocUploadStatus_a5ygvpw",
					"labelPosition": "above",
					"control": "$DfcIdInfoDS_DfcDocUploadStatus_a5ygvpw",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "addRecord_y58plpi",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_y58plpi_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_f6ltdnn",
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
					"DfcIdInfoDS_DfcAppform_hpmd4g6": {
						"modelConfig": {
							"path": "DfcIdInfoDS.DfcAppform"
						}
					},
					"DfcIdInfoDS_DfcListInCondition_feunpuc": {
						"modelConfig": {
							"path": "DfcIdInfoDS.DfcListInCondition"
						}
					},
					"DfcIdInfoDS_DfcDocListGroup_rdkcull": {
						"modelConfig": {
							"path": "DfcIdInfoDS.DfcDocListGroup"
						}
					},
					"DfcIdInfoDS_DfcProductCondition_o53uc2b": {
						"modelConfig": {
							"path": "DfcIdInfoDS.DfcProductCondition"
						}
					},
					"DfcIdInfoDS_DfcAppformFinApplicationProduct": {
						"modelConfig": {
							"path": "DfcIdInfoDS.DfcAppformFinApplicationProduct"
						}
					},
					"DfcIdInfoDS_DfcAppformParticipantRole": {
						"modelConfig": {
							"path": "DfcIdInfoDS.DfcAppformParticipantRole"
						}
					},
					"DfcIdInfoDS_DfcIdNumber_irk8z71": {
						"modelConfig": {
							"path": "DfcIdInfoDS.DfcIdNumber"
						}
					},
					"DfcIdInfoDS_DfcIdIssueDate_qk958r6": {
						"modelConfig": {
							"path": "DfcIdInfoDS.DfcIdIssueDate"
						}
					},
					"DfcIdInfoDS_DfcIdExpirationDate_ikpcjkm": {
						"modelConfig": {
							"path": "DfcIdInfoDS.DfcIdExpirationDate"
						}
					},
					"DfcIdInfoDS_DfcDocUploadStatus_a5ygvpw": {
						"modelConfig": {
							"path": "DfcIdInfoDS.DfcDocUploadStatus"
						}
					},
					"DfcIdInfoDS_DfcNumber_28j52vm": {
						"modelConfig": {
							"path": "DfcIdInfoDS.DfcNumber"
						}
					},
					"DfcIdInfoDS_DfcProduct_sqfpdyl": {
						"modelConfig": {
							"path": "DfcIdInfoDS.DfcProduct"
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
						"DfcIdInfoDS": {
							"type": "crt.EntityDataSource",
							"scope": "page",
							"config": {
								"entitySchemaName": "DfcIdInfo",
								"attributes": {
									"DfcAppformParticipantRole": {
										"path": "DfcAppform.ParticipantRole",
										"type": "ForwardReference"
									}
								}
							}
						}
					},
					"primaryDataSourceName": "DfcIdInfoDS"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});