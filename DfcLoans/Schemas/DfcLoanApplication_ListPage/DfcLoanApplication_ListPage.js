define("DfcLoanApplication_ListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "MenuItem_ImportFromExcel",
				"values": {
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "FinApplication"
						}
					}
				}
			},
			{
				"operation": "merge",
				"name": "FolderTree",
				"values": {
					"sourceSchemaName": "FinApplicationFolder",
					"rootSchemaName": "FinApplication"
				}
			},
			{
				"operation": "merge",
				"name": "DataTable",
				"values": {
					"columns": [
						{
							"id": "f252f581-0ccf-44ac-b7c9-c00df2ad9919",
							"code": "PDS_Number",
							"caption": "#ResourceString(PDS_Number)#",
							"dataValueType": 1
						},
						{
							"id": "e790ee77-eabd-0070-8de5-8e11923befd8",
							"code": "PDS_DfcClient",
							"caption": "#ResourceString(PDS_DfcClient)#",
							"dataValueType": 10
						},
						{
							"id": "07c80afd-aff8-88ea-6135-7f57eb9f1ecc",
							"code": "PDS_DfcCustomerType",
							"caption": "#ResourceString(PDS_DfcCustomerType)#",
							"dataValueType": 10
						},
						{
							"id": "e5d3991e-61e6-375f-77e9-fa8a73c00e65",
							"code": "PDS_Account",
							"caption": "#ResourceString(PDS_Account)#",
							"dataValueType": 10
						},
						{
							"id": "cd12c491-fdc3-70f4-7e4b-0ec6dc516638",
							"code": "PDS_Product",
							"caption": "#ResourceString(PDS_Product)#",
							"dataValueType": 10
						},
						{
							"id": "c65fb7c8-1ad7-f147-029e-7303b0071a77",
							"code": "PDS_DfcReqAmt",
							"caption": "#ResourceString(PDS_DfcReqAmt)#",
							"dataValueType": 32
						},
						{
							"id": "e40d6813-1ebd-5ddf-6b18-1106430ae8f1",
							"code": "PDS_Stage",
							"caption": "#ResourceString(PDS_Stage)#",
							"dataValueType": 10
						},
						{
							"id": "a1c57370-c597-e026-c3dd-8518cd1f6c55",
							"code": "PDS_Status",
							"caption": "#ResourceString(PDS_Status)#",
							"dataValueType": 10
						},
						{
							"id": "fd4b3485-a46e-4219-b775-adef1210fe51",
							"code": "PDS_CreatedBy",
							"caption": "#ResourceString(PDS_CreatedBy)#",
							"dataValueType": 10
						},
						{
							"id": "c8689d78-80ba-4e71-8cf2-fa478e3be5bc",
							"code": "PDS_CreatedOn",
							"caption": "#ResourceString(PDS_CreatedOn)#",
							"dataValueType": 7
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
					"PDS_Number": {
						"modelConfig": {
							"path": "PDS.Number"
						}
					},
					"PDS_DfcClient": {
						"modelConfig": {
							"path": "PDS.DfcClient"
						}
					},
					"PDS_DfcCustomerType": {
						"modelConfig": {
							"path": "PDS.DfcCustomerType"
						}
					},
					"PDS_Account": {
						"modelConfig": {
							"path": "PDS.Account"
						}
					},
					"PDS_Product": {
						"modelConfig": {
							"path": "PDS.Product"
						}
					},
					"PDS_DfcReqAmt": {
						"modelConfig": {
							"path": "PDS.DfcReqAmt"
						}
					},
					"PDS_Stage": {
						"modelConfig": {
							"path": "PDS.Stage"
						}
					},
					"PDS_Status": {
						"modelConfig": {
							"path": "PDS.Status"
						}
					},
					"PDS_CreatedBy": {
						"modelConfig": {
							"path": "PDS.CreatedBy"
						}
					},
					"PDS_CreatedOn": {
						"modelConfig": {
							"path": "PDS.CreatedOn"
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
					"entitySchemaName": "FinApplication",
					"attributes": {
						"Number": {
							"path": "Number"
						},
						"DfcClient": {
							"path": "DfcClient"
						},
						"DfcCustomerType": {
							"path": "DfcCustomerType"
						},
						"Account": {
							"path": "Account"
						},
						"Product": {
							"path": "Product"
						},
						"DfcReqAmt": {
							"path": "DfcReqAmt"
						},
						"Stage": {
							"path": "Stage"
						},
						"Status": {
							"path": "Status"
						},
						"CreatedBy": {
							"path": "CreatedBy"
						},
						"CreatedOn": {
							"path": "CreatedOn"
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