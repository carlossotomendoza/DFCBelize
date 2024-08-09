define("DfcPage_AddressAppForm", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
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
				"name": "AddressType",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.AppFormAddressDS_AddressType_2lam8vh",
					"labelPosition": "above",
					"control": "$AppFormAddressDS_AddressType_2lam8vh",
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
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Primary",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Checkbox",
					"label": "$Resources.Strings.AppFormAddressDS_Primary_kjustea",
					"labelPosition": "above",
					"control": "$AppFormAddressDS_Primary_kjustea"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "DfcPrimaryResYears",
				"values": {
					"layoutConfig": {
						"column": 3,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "#ResourceString(DfcPrimaryResYears_label)#",
					"labelPosition": "above",
					"control": "$AppFormAddressDS_DfcPrimaryResYears_8pjrjl3",
					"visible": false,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Address",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 3,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.AppFormAddressDS_Address_1nt1te0",
					"labelPosition": "above",
					"control": "$AppFormAddressDS_Address_1nt1te0"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "AptOffice",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 3,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.AppFormAddressDS_AptOffice_0s954ib",
					"labelPosition": "above",
					"control": "$AppFormAddressDS_AptOffice_0s954ib"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "District",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 3,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.AppFormAddressDS_District_ghsunr6",
					"labelPosition": "above",
					"control": "$AppFormAddressDS_District_ghsunr6",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"mode": "List",
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
				"name": "DfcTownVillage",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 3,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.AppFormAddressDS_DfcTownVillage_5y238dh",
					"labelPosition": "above",
					"control": "$AppFormAddressDS_DfcTownVillage_5y238dh",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "Country",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 6,
						"colSpan": 3,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.AppFormAddressDS_Country_v44vwoh",
					"labelPosition": "above",
					"control": "$AppFormAddressDS_Country_v44vwoh",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"mode": "List"
				},
				"parentName": "MainContainer",
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
					"AppFormAddressDS_AddressType_2lam8vh": {
						"modelConfig": {
							"path": "AppFormAddressDS.AddressType"
						}
					},
					"AppFormAddressDS_Address_1nt1te0": {
						"modelConfig": {
							"path": "AppFormAddressDS.Address"
						}
					},
					"AppFormAddressDS_City_qxz0md1": {
						"modelConfig": {
							"path": "AppFormAddressDS.City"
						}
					},
					"AppFormAddressDS_AptOffice_0s954ib": {
						"modelConfig": {
							"path": "AppFormAddressDS.AptOffice"
						}
					},
					"AppFormAddressDS_District_ghsunr6": {
						"modelConfig": {
							"path": "AppFormAddressDS.District"
						}
					},
					"AppFormAddressDS_Country_v44vwoh": {
						"modelConfig": {
							"path": "AppFormAddressDS.Country"
						}
					},
					"AppFormAddressDS_Primary_kjustea": {
						"modelConfig": {
							"path": "AppFormAddressDS.Primary"
						}
					},
					"AppFormAddressDS_DfcTownVillage_5y238dh": {
						"modelConfig": {
							"path": "AppFormAddressDS.DfcTownVillage"
						}
					},
					"AppFormAddressDS_DfcPrimaryResYears_8pjrjl3": {
						"modelConfig": {
							"path": "AppFormAddressDS.DfcPrimaryResYears"
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
						"AppFormAddressDS": {
							"type": "crt.EntityDataSource",
							"scope": "page",
							"config": {
								"entitySchemaName": "AppFormAddress"
							}
						}
					},
					"primaryDataSourceName": "AppFormAddressDS"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});