define("Contacts_MiniPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "MainContainer",
				"values": {
					"alignItems": "stretch"
				}
			},
			{
				"operation": "merge",
				"name": "Type",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 2,
						"rowSpan": 1
					},
					"readonly": false
				}
			},
			{
				"operation": "remove",
				"name": "Account"
			},
			{
				"operation": "remove",
				"name": "addRecord_3b5w93f"
			},
			{
				"operation": "merge",
				"name": "JobTitle",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 2,
						"rowSpan": 1
					}
				}
			},
			{
				"operation": "merge",
				"name": "MobilePhone",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 6,
						"colSpan": 2,
						"rowSpan": 1
					}
				}
			},
			{
				"operation": "merge",
				"name": "Email",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 7,
						"colSpan": 2,
						"rowSpan": 1
					},
					"readonly": false
				}
			},
			{
				"operation": "insert",
				"name": "SalutationType",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.ContactDS_SalutationType_8v9i15v",
					"labelPosition": "above",
					"control": "$ContactDS_SalutationType_8v9i15v",
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
				"name": "addRecord_gcmeiea",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_gcmeiea_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "SalutationType",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_Account",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.ContactDS_Account_m5brshh",
					"labelPosition": "above",
					"control": "$ContactDS_Account_m5brshh",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": false,
					"readonly": false,
					"placeholder": "#ResourceString(ComboBox_Account_placeholder)#",
					"tooltip": ""
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "addRecord_vwp1r0s",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_vwp1r0s_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_Account",
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
					"ContactDS_SalutationType_8v9i15v": {
						"modelConfig": {
							"path": "ContactDS.SalutationType"
						}
					},
					"ContactDS_Account_m5brshh": {
						"modelConfig": {
							"path": "ContactDS.Account"
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