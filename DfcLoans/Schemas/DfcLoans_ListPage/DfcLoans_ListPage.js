define("DfcLoans_ListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "MenuItem_ImportFromExcel",
				"values": {
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "DfcLoans"
						}
					}
				}
			},
			{
				"operation": "merge",
				"name": "FolderTree",
				"values": {
					"rootSchemaName": "DfcLoans"
				}
			},
			{
				"operation": "merge",
				"name": "DataTable",
				"values": {
					"columns": [
						{
							"id": "f252f581-0ccf-44ac-b7c9-c00df2ad9919",
							"code": "PDS_DfcLoanNo",
							"caption": "#ResourceString(PDS_DfcLoanNo)#",
							"dataValueType": 1
						},
						{
							"id": "c8689d78-80ba-4e71-8cf2-fa478e3be5bc",
							"code": "PDS_CreatedOn",
							"caption": "#ResourceString(PDS_CreatedOn)#",
							"dataValueType": 7
						},
						{
							"id": "fd4b3485-a46e-4219-b775-adef1210fe51",
							"code": "PDS_CreatedBy",
							"caption": "#ResourceString(PDS_CreatedBy)#",
							"dataValueType": 10
						},
						{
							"id": "b3e3dd11-f48c-d7db-a1da-ec19297e7c24",
							"code": "PDS_DfcProduct",
							"caption": "#ResourceString(PDS_DfcProduct)#",
							"dataValueType": 10
						},
						{
							"id": "56887a21-3293-d720-b10e-fc72c6f6a029",
							"code": "PDS_DfcRepaymentCycle",
							"caption": "#ResourceString(PDS_DfcRepaymentCycle)#",
							"dataValueType": 10
						},
						{
							"id": "241cb62b-3a4e-27e2-6d0f-2569d1f8e9b0",
							"code": "PDS_DfcTerm",
							"caption": "#ResourceString(PDS_DfcTerm)#",
							"dataValueType": 4
						},
						{
							"id": "d3a12952-fc23-42dc-bfb5-14c87050b538",
							"code": "PDS_DfcLoanAmt",
							"caption": "#ResourceString(PDS_DfcLoanAmt)#",
							"dataValueType": 32
						},
						{
							"id": "3a591ea6-0a9b-7d96-d7b0-c992b283ddbe",
							"code": "PDS_DfcLoanApp",
							"caption": "#ResourceString(PDS_DfcLoanApp)#",
							"dataValueType": 10
						},
						{
							"id": "fc231ef2-5c40-323b-c0ce-a41309903c53",
							"code": "PDS_DfcLoanNo",
							"caption": "#ResourceString(PDS_DfcLoanNo)#",
							"dataValueType": 27
						},
						{
							"id": "6f90d3b9-a030-d622-c2a0-60f4e6873970",
							"code": "PDS_DfcLoanStatus",
							"caption": "#ResourceString(PDS_DfcLoanStatus)#",
							"dataValueType": 10
						}
					]
				}
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"viewModelConfig",
					"attributes"
				],
				"values": {
					"PDS_DfcLoanNo": {
						"modelConfig": {
							"path": "PDS.DfcLoanNo"
						}
					},
					"PDS_CreatedOn": {
						"modelConfig": {
							"path": "PDS.CreatedOn"
						}
					},
					"PDS_CreatedBy": {
						"modelConfig": {
							"path": "PDS.CreatedBy"
						}
					},
					"PDS_DfcProduct": {
						"modelConfig": {
							"path": "PDS.DfcProduct"
						}
					},
					"PDS_DfcRepaymentCycle": {
						"modelConfig": {
							"path": "PDS.DfcRepaymentCycle"
						}
					},
					"PDS_DfcTerm": {
						"modelConfig": {
							"path": "PDS.DfcTerm"
						}
					},
					"PDS_DfcLoanAmt": {
						"modelConfig": {
							"path": "PDS.DfcLoanAmt"
						}
					},
					"PDS_DfcLoanApp": {
						"modelConfig": {
							"path": "PDS.DfcLoanApp"
						}
					},
					"PDS_DfcLoanStatus": {
						"modelConfig": {
							"path": "PDS.DfcLoanStatus"
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"dataSources",
					"PDS",
					"config"
				],
				"values": {
					"entitySchemaName": "DfcLoans",
					"attributes": {
						"DfcLoanNo": {
							"path": "DfcLoanNo"
						},
						"CreatedOn": {
							"path": "CreatedOn"
						},
						"CreatedBy": {
							"path": "CreatedBy"
						},
						"DfcProduct": {
							"path": "DfcProduct"
						},
						"DfcRepaymentCycle": {
							"path": "DfcRepaymentCycle"
						},
						"DfcTerm": {
							"path": "DfcTerm"
						},
						"DfcLoanAmt": {
							"path": "DfcLoanAmt"
						},
						"DfcLoanApp": {
							"path": "DfcLoanApp"
						},
						"DfcLoanStatus": {
							"path": "DfcLoanStatus"
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});