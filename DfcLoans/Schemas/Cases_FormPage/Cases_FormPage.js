define("Cases_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "SideAreaProfileContainer",
				"values": {
					"alignItems": "stretch"
				}
			},
			{
				"operation": "remove",
				"name": "CaseInfoSolutionDate"
			},
			{
				"operation": "insert",
				"name": "Approval_q531r59",
				"values": {
					"type": "crt.Approval",
					"activeColor": "white",
					"inactiveColor": "white",
					"items": [],
					"entityName": "Case",
					"approvalEntityName": "SysApproval",
					"visible": true,
					"hiddenWhenNoData": true
				},
				"parentName": "SideContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DfcLoan",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_DfcLoan_nlvloge",
					"labelPosition": "auto",
					"control": "$PDS_DfcLoan_nlvloge",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "CaseInfoFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_1qkoqiu",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_1qkoqiu_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "DfcLoan",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DfcLoanStatus",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_DfcLoanDfcLoanStatus",
					"ariaLabel": "#ResourceString(ComboBox_mfhizka_ariaLabel)#",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"readonly": true,
					"control": "$PDS_DfcLoanDfcLoanStatus"
				},
				"parentName": "CaseInfoFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_whae2rz",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_whae2rz_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "DfcLoanStatus",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_3ti84hl",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_Status_rieb79r",
					"labelPosition": "auto",
					"control": "$PDS_Status_rieb79r",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"readonly": false
				},
				"parentName": "CaseInfoFlexContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "addRecord_q5l7gpi",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_q5l7gpi_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_3ti84hl",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DfcActionToTake",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_DfcActionToTake_f2yx7ka",
					"labelPosition": "auto",
					"control": "$PDS_DfcActionToTake_f2yx7ka",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "CaseInfoFlexContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "addRecord_g12fv6f",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_g12fv6f_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "DfcActionToTake",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DfcCommiteeDecisions",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_DfcCommiteeDecisions_f2aahhg",
					"labelPosition": "auto",
					"control": "$PDS_DfcCommiteeDecisions_f2aahhg",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "CaseInfoFlexContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "addRecord_tdfbhv3",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_tdfbhv3_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "DfcCommiteeDecisions",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DfcOutOfRecovery",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_DfcOutOfRecovery_k4fhwwz",
					"labelPosition": "auto",
					"control": "$PDS_DfcOutOfRecovery_k4fhwwz",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "CaseInfoFlexContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "addRecord_8pl2dkz",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_8pl2dkz_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "DfcOutOfRecovery",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DfcPublicationDate",
				"values": {
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.PDS_DfcPublicationDate_ht0mtbq",
					"labelPosition": "auto",
					"control": "$PDS_DfcPublicationDate_ht0mtbq",
					"pickerType": "datetime"
				},
				"parentName": "CaseInfoFlexContainer",
				"propertyName": "items",
				"index": 12
			},
			{
				"operation": "insert",
				"name": "Timer_publicationdate",
				"values": {
					"type": "crt.Timer",
					"caption": "#ResourceString(Timer_xoz5gvg_caption)#",
					"labelType": "body",
					"labelThickness": "normal",
					"labelEllipsis": false,
					"labelColor": "#098401",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"timerType": "timer-from-date",
					"showNegativeCountDownValue": true,
					"negativeTextColor": "#FD3F11",
					"positiveTextColor": "#098401",
					"positiveTextValue": "",
					"negativeTextValue": "",
					"label": "$Resources.Strings.PDS_DfcPublicationDate_h5w824x",
					"readonly": false,
					"control": "$PDS_DfcPublicationDate_h5w824x"
				},
				"parentName": "CaseInfoFlexContainer",
				"propertyName": "items",
				"index": 13
			},
			{
				"operation": "insert",
				"name": "TabContainer_u9deoko",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_u9deoko_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_jiu6c2v",
				"values": {
					"type": "crt.GridContainer",
					"items": [],
					"rows": "minmax(32px, max-content)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					}
				},
				"parentName": "TabContainer_u9deoko",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NextStepsContainer_cm6ch8j",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(NextStepsContainer_cm6ch8j_title)#",
					"toggleType": "material",
					"togglePosition": "after",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "none",
						"bottom": "none",
						"left": "none",
						"right": "none"
					},
					"fitContent": true
				},
				"parentName": "GridContainer_jiu6c2v",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_iapy9fl",
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
				"parentName": "NextStepsContainer_cm6ch8j",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_403lkdx",
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
				"parentName": "GridContainer_iapy9fl",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AddStepButton_k38fis1",
				"values": {
					"type": "crt.Button",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"visible": "$CardState | crt.IsEqual : 'edit'",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_403lkdx",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CreateTaskMenuItem_l7s78rk",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(CreateTaskMenuItem_l7s78rk_caption)#",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.AddNextStepRequest",
						"params": {
							"entityName": "Activity"
						}
					}
				},
				"parentName": "AddStepButton_k38fis1",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CreateEmailMenuItem_l0nq9nv",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(CreateEmailMenuItem_l0nq9nv_caption)#",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateEmailRequest"
					}
				},
				"parentName": "AddStepButton_k38fis1",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_nqzj9ut",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
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
				"parentName": "NextStepsContainer_cm6ch8j",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NextSteps_ryhlhz5",
				"values": {
					"type": "crt.NextSteps",
					"masterSchemaId": "$Id",
					"cardState": "$CardState",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					},
					"masterSchemaName": "Case",
					"bindingColumns": []
				},
				"parentName": "GridContainer_nqzj9ut",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_najd9hj",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_najd9hj_title)#",
					"toggleType": "default",
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
				"parentName": "CaseGeneralInfoTab",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_xgpop31",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": [],
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
				"parentName": "ExpansionPanel_najd9hj",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_bn53zc0",
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
				"parentName": "GridContainer_xgpop31",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_q1k6fkr",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_q1k6fkr_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "DfcCollaterals"
						}
					}
				},
				"parentName": "FlexContainer_bn53zc0",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_gsxqnlg",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_gsxqnlg_caption)#",
					"icon": "reload-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_bczgf70DS"
						}
					}
				},
				"parentName": "FlexContainer_bn53zc0",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_lcjo1t6",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_lcjo1t6_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_bn53zc0",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_2bhstzy",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_2bhstzy_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_bczgf70"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_lcjo1t6",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_336riey",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_336riey_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "DfcCollaterals"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_lcjo1t6",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_4z8r14w",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_4z8r14w_placeholder)#",
					"iconOnly": true,
					"targetAttributes": [
						"GridDetail_bczgf70"
					]
				},
				"parentName": "FlexContainer_bn53zc0",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_khompqx",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
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
				"parentName": "ExpansionPanel_najd9hj",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DfcAucSaleAgreement",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_DfcAucSaleAgreement_edm9atn",
					"labelPosition": "auto",
					"control": "$PDS_DfcAucSaleAgreement_edm9atn",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GridContainer_khompqx",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_phuaqhk",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_phuaqhk_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "DfcAucSaleAgreement",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DfcAuctionSaleAmount",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_DfcAuctionSaleAmount_cfz830n",
					"labelPosition": "auto",
					"control": "$PDS_DfcAuctionSaleAmount_cfz830n"
				},
				"parentName": "GridContainer_khompqx",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetail_bczgf70",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 2,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						}
					},
					"items": "$GridDetail_bczgf70",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_bczgf70DS_Id",
					"columns": [
						{
							"id": "5c4a808b-f53f-3966-79ba-0c2e8244543b",
							"code": "GridDetail_bczgf70DS_DfcColValue",
							"caption": "#ResourceString(GridDetail_bczgf70DS_DfcColValue)#",
							"dataValueType": 6
						}
					],
					"placeholder": false
				},
				"parentName": "GridContainer_khompqx",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "TimelineTile_FinApplication_9x9ilnf",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"linkedColumn": "Case",
					"sortedByColumn": null,
					"ownerColumn": "CreatedBy",
					"iconId": null,
					"data": {
						"columns": [
							{
								"columnName": "Number",
								"columnLayout": null
							},
							{
								"columnName": "Status",
								"columnLayout": "{\"column\": 1,\"row\": 1,\"colSpan\": 6,\"rowSpan\": 1}"
							},
							{
								"columnName": "Product",
								"columnLayout": "{\"column\": 7,\"row\": 1,\"colSpan\": 6,\"rowSpan\": 1}"
							}
						],
						"schemaName": "FinApplication",
						"schemaType": null,
						"isDefault": true
					}
				},
				"parentName": "Timeline",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "move",
				"name": "CaseInfoContainer",
				"parentName": "SideContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "move",
				"name": "CaseGeneralInfoTab",
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 1
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"PDS_DfcLoan_nlvloge": {
						"modelConfig": {
							"path": "PDS.DfcLoan"
						}
					},
					"PDS_DfcColumn2_kpg2zjr": {
						"modelConfig": {
							"path": "PDS.DfcColumn2"
						}
					},
					"PDS_Status_rieb79r": {
						"modelConfig": {
							"path": "PDS.Status"
						}
					},
					"PDS_DfcColumn2_jkic95f": {
						"modelConfig": {
							"path": "PDS.DfcColumn2"
						}
					},
					"PDS_DfcColumn2_de6blm1": {
						"modelConfig": {
							"path": "PDS.DfcColumn2"
						}
					},
					"PDS_DfcCommiteeDecisions_5kvrfck": {
						"modelConfig": {
							"path": "PDS.DfcCommiteeDecisions"
						}
					},
					"PDS_DfcCommiteeDecisions_f2aahhg": {
						"modelConfig": {
							"path": "PDS.DfcCommiteeDecisions"
						}
					},
					"PDS_DfcActionToTake_f2yx7ka": {
						"modelConfig": {
							"path": "PDS.DfcActionToTake"
						}
					},
					"PDS_DfcOutOfRecovery_k4fhwwz": {
						"modelConfig": {
							"path": "PDS.DfcOutOfRecovery"
						}
					},
					"GridDetail_bczgf70": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_bczgf70DS"
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_bczgf70DS_DfcColValue": {
									"modelConfig": {
										"path": "GridDetail_bczgf70DS.DfcColValue"
									}
								},
								"GridDetail_bczgf70DS_Id": {
									"modelConfig": {
										"path": "GridDetail_bczgf70DS.Id"
									}
								}
							}
						}
					},
					"PDS_DfcAuctionSaleAmount_cfz830n": {
						"modelConfig": {
							"path": "PDS.DfcAuctionSaleAmount"
						}
					},
					"PDS_DfcAucSaleAgreement_edm9atn": {
						"modelConfig": {
							"path": "PDS.DfcAucSaleAgreement"
						}
					},
					"PDS_DfcLoanDfcLoanStatus": {
						"modelConfig": {
							"path": "PDS.DfcLoanDfcLoanStatus"
						}
					},
					"PDS_DfcPublicationDate_ht0mtbq": {
						"modelConfig": {
							"path": "PDS.DfcPublicationDate"
						}
					},
					"PDS_DfcPublicationDate_h5w824x": {
						"modelConfig": {
							"path": "PDS.DfcPublicationDate"
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"GridDetail_bczgf70DS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "DfcCollaterals",
							"attributes": {
								"DfcColValue": {
									"path": "DfcColValue"
								}
							}
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources",
					"PDS",
					"config",
					"attributes"
				],
				"values": {
					"DfcLoanDfcLoanStatus": {
						"path": "DfcLoan.DfcLoanStatus",
						"type": "ForwardReference"
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dependencies"
				],
				"values": {
					"GridDetail_bczgf70DS": [
						{
							"attributePath": "DfcLoanNo",
							"relationPath": "PDS.DfcLoan"
						}
					]
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});