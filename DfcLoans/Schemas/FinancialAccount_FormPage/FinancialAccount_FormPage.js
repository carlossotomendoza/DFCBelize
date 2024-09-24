define("FinancialAccount_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "remove",
				"name": "SetRecordRightsButton"
			},
			{
				"operation": "remove",
				"name": "TagSelect"
			},
			{
				"operation": "merge",
				"name": "BankAccountNumber",
				"values": {
					"readonly": true,
					"multiline": false
				}
			},
			{
				"operation": "remove",
				"name": "Contract"
			},
			{
				"operation": "remove",
				"name": "Contract_addRecord"
			},
			{
				"operation": "merge",
				"name": "Contact",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					}
				}
			},
			{
				"operation": "merge",
				"name": "LegalEntity",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					}
				}
			},
			{
				"operation": "merge",
				"name": "Product",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					}
				}
			},
			{
				"operation": "remove",
				"name": "Branch"
			},
			{
				"operation": "remove",
				"name": "ActivatedOn"
			},
			{
				"operation": "merge",
				"name": "ClosedOn",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					}
				}
			},
			{
				"operation": "remove",
				"name": "ReasonForClosing"
			},
			{
				"operation": "remove",
				"name": "CardsAndFinancialAccountExpansionPanel"
			},
			{
				"operation": "remove",
				"name": "CardsAndFinancialAccountToolsContainer"
			},
			{
				"operation": "remove",
				"name": "CardsAndFinancialAccountToolsFlexContainer"
			},
			{
				"operation": "remove",
				"name": "CardsAndFinancialAccountRefreshButton"
			},
			{
				"operation": "remove",
				"name": "CardsSettingsButton"
			},
			{
				"operation": "remove",
				"name": "CardsAndFinancialAccountExportDataButton"
			},
			{
				"operation": "remove",
				"name": "CardsAndFinancialAccountImportDataButton"
			},
			{
				"operation": "remove",
				"name": "CardsAndFinancialAccountSearchFilter"
			},
			{
				"operation": "remove",
				"name": "CardsAndFinancialAccountsContainer"
			},
			{
				"operation": "remove",
				"name": "CardsAndFinancialAccountsList"
			},
			{
				"operation": "insert",
				"name": "AssociatedApplication",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 6,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_DfcAssociatedApplication_dj9t1bg",
					"labelPosition": "auto",
					"control": "$PDS_DfcAssociatedApplication_dj9t1bg",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "addRecord_vmev4lf",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_vmev4lf_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "AssociatedApplication",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_1nn2psw",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 7,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "#ResourceString(ComboBox_1nn2psw_label)#",
					"labelPosition": "auto",
					"control": "$PDS_DfcAssociatedLoan_n4tzc7c",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "ComboBox_2pejlcm",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_DfcAssociatedApplicationDfcPaymentFrequency",
					"ariaLabel": "#ResourceString(ComboBox_2pejlcm_ariaLabel)#",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"readonly": true,
					"control": "$PDS_DfcAssociatedApplicationDfcPaymentFrequency",
					"visible": true,
					"placeholder": ""
				},
				"parentName": "FinancialAccountInfoFieldsContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "YearlyEscrowAmount",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_DfcYearlyEscrowAmount_rx711ai",
					"labelPosition": "auto",
					"control": "$PDS_DfcYearlyEscrowAmount_rx711ai"
				},
				"parentName": "FinancialAccountInfoFieldsContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "EscrowAmountPayment",
				"values": {
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_DfcEscrowAmountPayment_uzs7c63",
					"labelPosition": "auto",
					"control": "$PDS_DfcEscrowAmountPayment_uzs7c63",
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					}
				},
				"parentName": "FinancialAccountInfoFieldsContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "Button_p9oj07b",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_p9oj07b_caption)#",
					"color": "primary",
					"disabled": false,
					"size": "small",
					"iconPosition": "only-text",
					"visible": true,
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "Transaction",
							"defaultValues": [
								{
									"attributeName": "BankAccount",
									"value": "$BankAccount"
								}
							]
						}
					},
					"clickMode": "default"
				},
				"parentName": "TransactionsToolsFlexContainer",
				"propertyName": "items",
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
					"PDS_DfcAssociatedLoan_n4tzc7c": {
						"modelConfig": {
							"path": "PDS.DfcAssociatedLoan"
						}
					},
					"PDS_DfcAssociatedLoanDfcTotalBal": {
						"modelConfig": {
							"path": "PDS.DfcAssociatedLoanDfcTotalBal"
						}
					},
					"PDS_DfcYearlyEscrowAmount_rx711ai": {
						"modelConfig": {
							"path": "PDS.DfcYearlyEscrowAmount"
						}
					},
					"PDS_DfcEscrowAmountPayment_uzs7c63": {
						"modelConfig": {
							"path": "PDS.DfcEscrowAmountPayment"
						}
					},
					"PDS_DfcAssociatedApplication_dj9t1bg": {
						"modelConfig": {
							"path": "PDS.DfcAssociatedApplication"
						}
					},
					"PDS_DfcAssociatedApplicationDfcPaymentFrequency": {
						"modelConfig": {
							"path": "PDS.DfcAssociatedApplicationDfcPaymentFrequency"
						}
					},
					"PDS_DfcColumn5_mney3sx": {
						"modelConfig": {
							"path": "PDS.DfcColumn5"
						}
					},
					"BankAccount": {
						"modelConfig": {
							"path": "PDS.Id"
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"BankCardBankAccountItems",
					"modelConfig"
				],
				"values": {
					"filterAttributes": []
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
					"attributes": {
						"DfcAssociatedApplicationDfcPaymentFrequency": {
							"path": "DfcAssociatedApplication.DfcPaymentFrequency",
							"type": "ForwardReference"
						}
					}
				}
			},
			{
				"operation": "remove",
				"path": [
					"dependencies"
				],
				"properties": [
					"BankCardBankAccountDS"
				]
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});