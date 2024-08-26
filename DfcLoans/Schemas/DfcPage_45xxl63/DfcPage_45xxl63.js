define("DfcPage_45xxl63", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "remove",
				"name": "MainHeader"
			},
			{
				"operation": "remove",
				"name": "TitleContainer"
			},
			{
				"operation": "remove",
				"name": "PageTitle"
			},
			{
				"operation": "remove",
				"name": "ActionButtonsContainer"
			},
			{
				"operation": "move",
				"name": "ContinueInOtherPageButton",
				"parentName": "FlexContainer_nfx9cru",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "merge",
				"name": "ContinueInOtherPageButton",
				"values": {
					"color": "default"
				}
			},
			{
				"operation": "move",
				"name": "CloseButton",
				"parentName": "FlexContainer_nfx9cru",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "merge",
				"name": "MainContainer",
				"values": {
					"alignItems": "stretch"
				}
			},
			{
				"operation": "merge",
				"name": "CancelButton",
				"values": {
					"color": "default",
					"size": "large",
					"iconPosition": "only-text"
				}
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_h87zvei",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_h87zvei_title)#",
					"toggleType": "material",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true,
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_sz9hovz",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_h87zvei",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_nfx9cru",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_sz9hovz",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_32qyrpz",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"items": [],
					"fitContent": true,
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch"
				},
				"parentName": "ExpansionPanel_h87zvei",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DfcVisitSubjectRichtext",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 4,
						"rowSpan": 1
					},
					"type": "crt.RichTextEditor",
					"label": "$Resources.Strings.DfcVisitsDS_DfcVisitSubjectRichtext_kdhh8ac",
					"labelPosition": "above",
					"control": "$DfcVisitsDS_DfcVisitSubjectRichtext_kdhh8ac",
					"filesStorage": {
						"masterRecordColumnValue": "$Id",
						"entitySchemaName": "SysFile",
						"recordColumnName": "RecordId"
					},
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"toolbarDisplayMode": null
				},
				"parentName": "GridContainer_32qyrpz",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_5caxihz",
				"values": {
					"type": "crt.DateTimePicker",
					"pickerType": "datetime",
					"label": "$Resources.Strings.DfcVisitsDS_DfcStart_rwo1sgx",
					"labelPosition": "above",
					"control": "$DfcVisitsDS_DfcStart_rwo1sgx"
				},
				"parentName": "ExpansionPanel_h87zvei",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_pzfogez",
				"values": {
					"type": "crt.DateTimePicker",
					"pickerType": "date",
					"label": "$Resources.Strings.DfcVisitsDS_DfcDue_4qhzf4w",
					"labelPosition": "above",
					"control": "$DfcVisitsDS_DfcDue_4qhzf4w"
				},
				"parentName": "ExpansionPanel_h87zvei",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ComboBox_ejx7ix1",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.DfcVisitsDS_DfcVisitStatus_52vncwo",
					"labelPosition": "above",
					"control": "$DfcVisitsDS_DfcVisitStatus_52vncwo",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "ExpansionPanel_h87zvei",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "addRecord_xpniluh",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_xpniluh_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_ejx7ix1",
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
					"DfcVisitsDS_DfcVisitSubject_z1w7mle": {
						"modelConfig": {
							"path": "DfcVisitsDS.DfcVisitSubject"
						}
					},
					"DfcVisitsDS_DfcStart_rwo1sgx": {
						"modelConfig": {
							"path": "DfcVisitsDS.DfcStart"
						}
					},
					"DfcVisitsDS_DfcDue_4qhzf4w": {
						"modelConfig": {
							"path": "DfcVisitsDS.DfcDue"
						}
					},
					"DfcVisitsDS_DfcVisitStatus_52vncwo": {
						"modelConfig": {
							"path": "DfcVisitsDS.DfcVisitStatus"
						}
					},
					"DfcVisitsDS_DfcVisitSubjectRichtext_kdhh8ac": {
						"modelConfig": {
							"path": "DfcVisitsDS.DfcVisitSubjectRichtext"
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
						"DfcVisitsDS": {
							"type": "crt.EntityDataSource",
							"scope": "page",
							"config": {
								"entitySchemaName": "DfcVisits"
							}
						}
					},
					"primaryDataSourceName": "DfcVisitsDS"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});