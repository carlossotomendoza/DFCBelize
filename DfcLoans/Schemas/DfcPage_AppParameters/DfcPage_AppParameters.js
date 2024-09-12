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
				"name": "FinApplication",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 3,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.FinApplicationSpecDS_FinApplication_1e770yt",
					"labelPosition": "above",
					"control": "$FinApplicationSpecDS_FinApplication_1e770yt",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"readonly": true
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
					"label": "$Resources.Strings.FinApplicationSpecDS_OpportunityCondition_18a6diq",
					"labelPosition": "above",
					"control": "$FinApplicationSpecDS_OpportunityCondition_18a6diq",
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
					"label": "$Resources.Strings.FinApplicationSpecDS_Specification_1qtj0bb",
					"labelPosition": "above",
					"control": "$FinApplicationSpecDS_Specification_1qtj0bb",
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
				"name": "ComboBox_2z61uug",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 3,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.FinApplicationSpecDS_DfcParametertype_vjtdpuu",
					"labelPosition": "above",
					"control": "$FinApplicationSpecDS_DfcParametertype_vjtdpuu",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "addRecord_a0n11xy",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_a0n11xy_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_2z61uug",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CurrentType",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 3,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.FinApplicationSpecDS_CurrentType_jgxjt22",
					"labelPosition": "above",
					"control": "$FinApplicationSpecDS_CurrentType_jgxjt22"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "Unit",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 6,
						"colSpan": 3,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.FinApplicationSpecDS_SpecificationUnit",
					"ariaLabel": "#ResourceString(ComboBox_2bboxe7_ariaLabel)#",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "above",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"readonly": true,
					"control": "$FinApplicationSpecDS_SpecificationUnit"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "addRecord_3tl9zrn",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_3tl9zrn_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "Unit",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DecimalValue",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 7,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.FinApplicationSpecDS_FloatValue_jvyjsa6",
					"labelPosition": "above",
					"control": "$FinApplicationSpecDS_FloatValue_jvyjsa6"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "MinFloatValue",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 7,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.FinApplicationSpecDS_MinFloatValue_xwyh72a",
					"labelPosition": "above",
					"control": "$FinApplicationSpecDS_MinFloatValue_xwyh72a"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "MaxFloatValue",
				"values": {
					"layoutConfig": {
						"column": 3,
						"row": 7,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.FinApplicationSpecDS_MaxFloatValue_f7mirkf",
					"labelPosition": "above",
					"control": "$FinApplicationSpecDS_MaxFloatValue_f7mirkf"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "IntegerValue",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 8,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.FinApplicationSpecDS_IntegerValue_dzsxceh",
					"labelPosition": "above",
					"control": "$FinApplicationSpecDS_IntegerValue_dzsxceh"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "MinIntegerValue",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 8,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.FinApplicationSpecDS_MinIntegerValue_a96onzt",
					"labelPosition": "above",
					"control": "$FinApplicationSpecDS_MinIntegerValue_a96onzt"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 10
			},
			{
				"operation": "insert",
				"name": "MaxIntegerValue",
				"values": {
					"layoutConfig": {
						"column": 3,
						"row": 8,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.FinApplicationSpecDS_MaxIntegerValue_ks0v70c",
					"labelPosition": "above",
					"control": "$FinApplicationSpecDS_MaxIntegerValue_ks0v70c"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 11
			},
			{
				"operation": "insert",
				"name": "DisplayValue",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 9,
						"colSpan": 3,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.FinApplicationSpecDS_DisplayValue_1seegp3",
					"labelPosition": "above",
					"control": "$FinApplicationSpecDS_DisplayValue_1seegp3"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 12
			},
			{
				"operation": "insert",
				"name": "SpecificationListItem",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 10,
						"colSpan": 3,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.FinApplicationSpecDS_SpecificationListItem_crqexqs",
					"labelPosition": "above",
					"control": "$FinApplicationSpecDS_SpecificationListItem_crqexqs",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 13
			},
			{
				"operation": "insert",
				"name": "addRecord_qb15c67",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_qb15c67_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "SpecificationListItem",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "BooleanValue",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 11,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Checkbox",
					"label": "$Resources.Strings.FinApplicationSpecDS_BooleanValue_wcklyg2",
					"labelPosition": "above",
					"control": "$FinApplicationSpecDS_BooleanValue_wcklyg2"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 14
			},
			{
				"operation": "insert",
				"name": "TextValue",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 12,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.FinApplicationSpecDS_TextValue_mcj814l",
					"labelPosition": "above",
					"control": "$FinApplicationSpecDS_TextValue_mcj814l"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 15
			},
			{
				"operation": "insert",
				"name": "RowPosition",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 13,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.FinApplicationSpecDS_RowPosition_pw7s5lh",
					"labelPosition": "above",
					"control": "$FinApplicationSpecDS_RowPosition_pw7s5lh"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 16
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
								"attributes": {
									"SpecificationUnit": {
										"path": "Specification.Unit",
										"type": "ForwardReference"
									}
								}
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