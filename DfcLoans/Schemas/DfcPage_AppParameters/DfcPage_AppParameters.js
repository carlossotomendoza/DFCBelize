define("DfcPage_AppParameters", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "MainContainer",
				"values": {
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"alignItems": "stretch"
				}
			},
			{
				"operation": "insert",
				"name": "Label_6jh4c57",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_6jh4c57_caption)#)#",
					"labelType": "headline-2",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "end",
					"visible": true
				},
				"parentName": "MainHeader",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FinApplication",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 3,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "#ResourceString(FinApplication_label)#",
					"labelPosition": "above",
					"control": "$FinApplicationSpecDS_FinApplication_1e770yt",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"readonly": true,
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_j5vpe70",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_j5vpe70_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "FinApplication",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OpportunityCondition",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 3,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "#ResourceString(OpportunityCondition_label)#",
					"labelPosition": "above",
					"control": "$FinApplicationSpecDS_OpportunityCondition_18a6diq",
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
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_wnpumsu",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_wnpumsu_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "OpportunityCondition",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Specification",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 3,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "#ResourceString(Specification_label)#",
					"labelPosition": "above",
					"control": "$FinApplicationSpecDS_Specification_1qtj0bb",
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
				"name": "addRecord_8lhdlx2",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_8lhdlx2_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "Specification",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DecimalValue",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "#ResourceString(DecimalValue_label)#",
					"labelPosition": "above",
					"control": "$FinApplicationSpecDS_FloatValue_jvyjsa6",
					"visible": false,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "MinFloatValue",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "#ResourceString(MinFloatValue_label)#",
					"labelPosition": "above",
					"control": "$FinApplicationSpecDS_MinFloatValue_xwyh72a",
					"visible": false,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "MaxFloatValue",
				"values": {
					"layoutConfig": {
						"column": 3,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "#ResourceString(MaxFloatValue_label)#",
					"labelPosition": "above",
					"control": "$FinApplicationSpecDS_MaxFloatValue_f7mirkf",
					"visible": false,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "IntegerValue",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "#ResourceString(IntegerValue_label)#",
					"labelPosition": "above",
					"control": "$FinApplicationSpecDS_IntegerValue_dzsxceh",
					"visible": false,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "MinIntegerValue",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "#ResourceString(MinIntegerValue_label)#",
					"labelPosition": "above",
					"control": "$FinApplicationSpecDS_MinIntegerValue_a96onzt",
					"visible": false,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "MaxIntegerValue",
				"values": {
					"layoutConfig": {
						"column": 3,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "#ResourceString(MaxIntegerValue_label)#",
					"labelPosition": "above",
					"control": "$FinApplicationSpecDS_MaxIntegerValue_ks0v70c",
					"visible": false,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "SpecificationListItem",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 6,
						"colSpan": 3,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "#ResourceString(SpecificationListItem_label)#",
					"labelPosition": "above",
					"control": "$FinApplicationSpecDS_SpecificationListItem_crqexqs",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": false,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"mode": "List"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 9
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"FinApplicationSpecDS_FinApplication_1e770yt": {
						"modelConfig": {
							"path": "FinApplicationSpecDS.FinApplication"
						}
					},
					"FinApplicationSpecDS_Specification_1qtj0bb": {
						"modelConfig": {
							"path": "FinApplicationSpecDS.Specification"
						}
					},
					"FinApplicationSpecDS_FloatValue_jvyjsa6": {
						"modelConfig": {
							"path": "FinApplicationSpecDS.FloatValue"
						}
					},
					"FinApplicationSpecDS_SpecificationType": {
						"modelConfig": {
							"path": "FinApplicationSpecDS.SpecificationType"
						}
					},
					"FinApplicationSpecDS_SpecificationUnit": {
						"modelConfig": {
							"path": "FinApplicationSpecDS.SpecificationUnit"
						}
					},
					"FinApplicationSpecDS_IntegerValue_dzsxceh": {
						"modelConfig": {
							"path": "FinApplicationSpecDS.IntegerValue"
						}
					},
					"FinApplicationSpecDS_MinFloatValue_xwyh72a": {
						"modelConfig": {
							"path": "FinApplicationSpecDS.MinFloatValue"
						}
					},
					"FinApplicationSpecDS_MaxFloatValue_f7mirkf": {
						"modelConfig": {
							"path": "FinApplicationSpecDS.MaxFloatValue"
						}
					},
					"FinApplicationSpecDS_MinIntegerValue_a96onzt": {
						"modelConfig": {
							"path": "FinApplicationSpecDS.MinIntegerValue"
						}
					},
					"FinApplicationSpecDS_MaxIntegerValue_ks0v70c": {
						"modelConfig": {
							"path": "FinApplicationSpecDS.MaxIntegerValue"
						}
					},
					"FinApplicationSpecDS_DisplayValue_1seegp3": {
						"modelConfig": {
							"path": "FinApplicationSpecDS.DisplayValue"
						}
					},
					"FinApplicationSpecDS_SpecificationListItem_crqexqs": {
						"modelConfig": {
							"path": "FinApplicationSpecDS.SpecificationListItem"
						}
					},
					"FinApplicationSpecDS_CurrentType_jgxjt22": {
						"modelConfig": {
							"path": "FinApplicationSpecDS.CurrentType"
						}
					},
					"FinApplicationSpecDS_BooleanValue_wcklyg2": {
						"modelConfig": {
							"path": "FinApplicationSpecDS.BooleanValue"
						}
					},
					"FinApplicationSpecDS_TextValue_mcj814l": {
						"modelConfig": {
							"path": "FinApplicationSpecDS.TextValue"
						}
					},
					"FinApplicationSpecDS_OpportunityCondition_18a6diq": {
						"modelConfig": {
							"path": "FinApplicationSpecDS.OpportunityCondition"
						}
					},
					"FinApplicationSpecDS_RowPosition_pw7s5lh": {
						"modelConfig": {
							"path": "FinApplicationSpecDS.RowPosition"
						}
					},
					"FinApplicationSpecDS_DfcParametertype_vjtdpuu": {
						"modelConfig": {
							"path": "FinApplicationSpecDS.DfcParametertype"
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
						"FinApplicationSpecDS": {
							"type": "crt.EntityDataSource",
							"scope": "page",
							"config": {
								"entitySchemaName": "FinApplicationSpec",
								"attributes": {}
							}
						}
					},
					"primaryDataSourceName": "FinApplicationSpecDS"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});