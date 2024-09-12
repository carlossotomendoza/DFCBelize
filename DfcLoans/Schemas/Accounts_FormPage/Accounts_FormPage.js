define("Accounts_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "remove",
				"name": "NoteworthyEventList",
				"properties": [
					"_selectionOptions"
				]
			},
			{
				"operation": "remove",
				"name": "FinApplicationList",
				"properties": [
					"_selectionOptions"
				]
			},
			{
				"operation": "insert",
				"name": "DfcLegacyId",
				"values": {
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_DfcLegacyId_5vc3dzm",
					"labelPosition": "auto",
					"control": "$PDS_DfcLegacyId_5vc3dzm",
					"multiline": false,
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "PrimaryContactFieldContainer",
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
					"PDS_DfcLegacyId_5vc3dzm": {
						"modelConfig": {
							"path": "PDS.DfcLegacyId"
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"AccountCommunicationOptionsItems",
					"modelConfig"
				],
				"values": {
					"path": "AccountCommunicationOptionsDS"
				}
			},
			{
				"operation": "remove",
				"path": [
					"attributes",
					"AccountCommunicationOptionsItems",
					"viewModelConfig",
					"attributes"
				],
				"properties": [
					"LegalEntityCommunicationOptionsDS_CreatedOn",
					"LegalEntityCommunicationOptionsDS_Number",
					"LegalEntityCommunicationOptionsDS_Primary",
					"LegalEntityCommunicationOptionsDS_NonActual",
					"LegalEntityCommunicationOptionsDS_CommunicationType",
					"LegalEntityCommunicationOptionsDS_CommunicationTypeDisplayFormat",
					"LegalEntityCommunicationOptionsDS_CommunicationTypeName",
					"LegalEntityCommunicationOptionsDS_Id"
				]
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"AccountCommunicationOptionsItems",
					"viewModelConfig",
					"attributes"
				],
				"values": {
					"AccountCommunicationOptionsDS_CreatedOn": {
						"modelConfig": {
							"path": "AccountCommunicationOptionsDS.CreatedOn"
						}
					},
					"AccountCommunicationOptionsDS_Number": {
						"modelConfig": {
							"path": "AccountCommunicationOptionsDS.Number"
						}
					},
					"AccountCommunicationOptionsDS_Primary": {
						"modelConfig": {
							"path": "AccountCommunicationOptionsDS.Primary"
						}
					},
					"AccountCommunicationOptionsDS_NonActual": {
						"modelConfig": {
							"path": "AccountCommunicationOptionsDS.NonActual"
						}
					},
					"AccountCommunicationOptionsDS_CommunicationType": {
						"modelConfig": {
							"path": "AccountCommunicationOptionsDS.CommunicationType"
						}
					},
					"AccountCommunicationOptionsDS_CommunicationTypeDisplayFormat": {
						"modelConfig": {
							"path": "AccountCommunicationOptionsDS.CommunicationTypeDisplayFormat"
						}
					},
					"AccountCommunicationOptionsDS_CommunicationTypeName": {
						"modelConfig": {
							"path": "AccountCommunicationOptionsDS.CommunicationTypeName"
						}
					},
					"AccountCommunicationOptionsDS_Id": {
						"modelConfig": {
							"path": "AccountCommunicationOptionsDS.Id"
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