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
				"operation": "remove",
				"name": "SubordinateCasesExpansionPanel"
			},
			{
				"operation": "remove",
				"name": "SubordinateCasesToolsContainer"
			},
			{
				"operation": "remove",
				"name": "SubordinateCasesToolsFlexContainer"
			},
			{
				"operation": "remove",
				"name": "SubordinateCasesAddButton"
			},
			{
				"operation": "remove",
				"name": "SubordinateCasesRefreshButton"
			},
			{
				"operation": "remove",
				"name": "SubordinateCasesSettingsButton"
			},
			{
				"operation": "remove",
				"name": "SubordinateCasesExportDataButton"
			},
			{
				"operation": "remove",
				"name": "SubordinateCasesImportDataButton"
			},
			{
				"operation": "remove",
				"name": "SubordinateCasesSearchFilter"
			},
			{
				"operation": "remove",
				"name": "SubordinateCasesListContainer"
			},
			{
				"operation": "remove",
				"name": "SubordinateCasesList"
			},
			{
				"operation": "remove",
				"name": "CardsExpansionPanel"
			},
			{
				"operation": "remove",
				"name": "CardsToolsContainer"
			},
			{
				"operation": "remove",
				"name": "CardsToolsFlexContainer"
			},
			{
				"operation": "remove",
				"name": "CardsAddButton"
			},
			{
				"operation": "remove",
				"name": "CardsRefreshButton"
			},
			{
				"operation": "remove",
				"name": "CardsSettingsButton"
			},
			{
				"operation": "remove",
				"name": "CardsExportDataButton"
			},
			{
				"operation": "remove",
				"name": "CardsImportDataButton"
			},
			{
				"operation": "remove",
				"name": "CardsSearchFilter"
			},
			{
				"operation": "remove",
				"name": "CardsListContainer"
			},
			{
				"operation": "remove",
				"name": "CardsList"
			},
			{
				"operation": "remove",
				"name": "KnowledgeBaseArticlesExpansionPanel"
			},
			{
				"operation": "remove",
				"name": "KnowledgeBaseArticlesToolsContainer"
			},
			{
				"operation": "remove",
				"name": "KnowledgeBaseArticlesToolsFlexContainer"
			},
			{
				"operation": "remove",
				"name": "KnowledgeBaseArticlesRefreshButton"
			},
			{
				"operation": "remove",
				"name": "KnowledgeBaseArticlesSettingsButton"
			},
			{
				"operation": "remove",
				"name": "KnowledgeBaseArticlesExportDataButton"
			},
			{
				"operation": "remove",
				"name": "KnowledgeBaseArticlesImportDataButton"
			},
			{
				"operation": "remove",
				"name": "KnowledgeBaseArticlesSearchFilter"
			},
			{
				"operation": "remove",
				"name": "KnowledgeBaseArticlesListContainer"
			},
			{
				"operation": "remove",
				"name": "KnowledgeBaseArticlesList"
			},
			{
				"operation": "insert",
				"name": "GridContainer_jckmc22",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"items": [],
					"fitContent": true,
					"padding": {
						"top": "medium",
						"right": "large",
						"bottom": "medium",
						"left": "large"
					},
					"color": "primary",
					"borderRadius": "medium",
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "ProgressBarContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "NextStepsContainer_0kontoh",
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
					"title": "#ResourceString(NextStepsContainer_0kontoh_title)#",
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
					"fitContent": true,
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "GridContainer_jckmc22",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_0pchfvd",
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
				"parentName": "NextStepsContainer_0kontoh",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_cfyoh8v",
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
				"parentName": "GridContainer_0pchfvd",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AddStepButton_h3gwnkq",
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
				"parentName": "FlexContainer_cfyoh8v",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CreateTaskMenuItem_nwoakc0",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(CreateTaskMenuItem_nwoakc0_caption)#",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.AddNextStepRequest",
						"params": {
							"entityName": "Activity"
						}
					}
				},
				"parentName": "AddStepButton_h3gwnkq",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CreateEmailMenuItem_6lfcjyy",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(CreateEmailMenuItem_6lfcjyy_caption)#",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateEmailRequest"
					}
				},
				"parentName": "AddStepButton_h3gwnkq",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_4q1sd6i",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
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
				"parentName": "NextStepsContainer_0kontoh",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NextSteps_zxa6q2s",
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
					"masterSchemaName": "Case"
				},
				"parentName": "GridContainer_4q1sd6i",
				"propertyName": "items",
				"index": 0
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
				"name": "GridDetail_bczgf70",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
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
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_5exdrbp",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_5exdrbp_title)#",
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
				"index": 4
			},
			{
				"operation": "insert",
				"name": "GridContainer_u3u654k",
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
				"parentName": "ExpansionPanel_5exdrbp",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_6sdj79d",
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
				"parentName": "GridContainer_u3u654k",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_d4uwbx4",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_d4uwbx4_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "DfcBid"
						}
					}
				},
				"parentName": "FlexContainer_6sdj79d",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_sg6ebuj",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_sg6ebuj_caption)#",
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
							"dataSourceName": "GridDetail_592smgeDS"
						}
					}
				},
				"parentName": "FlexContainer_6sdj79d",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_l76cwxv",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_l76cwxv_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_6sdj79d",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_chxaqzp",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_chxaqzp_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_592smge"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_l76cwxv",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_vfnu33z",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_vfnu33z_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "DfcBid"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_l76cwxv",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_jk6xt4p",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_jk6xt4p_placeholder)#",
					"iconOnly": true,
					"targetAttributes": [
						"GridDetail_592smge"
					]
				},
				"parentName": "FlexContainer_6sdj79d",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_573rqbz",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
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
				"parentName": "ExpansionPanel_5exdrbp",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NumberInput_195llo1",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_DfcLoanDfcReservePrice",
					"control": "$PDS_DfcLoanDfcReservePrice",
					"readonly": true,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "GridContainer_573rqbz",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Label_2g51r7b",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_2g51r7b_caption)#)#",
					"labelType": "headline-1-small",
					"labelThickness": "light",
					"labelEllipsis": false,
					"labelColor": "#757575",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "center",
					"visible": true
				},
				"parentName": "GridContainer_573rqbz",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_unws389",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.PDS_DfcLoanDfcDepositPayDate",
					"placeholder": "",
					"readonly": true,
					"labelPosition": "auto",
					"tooltip": "",
					"pickerType": "date",
					"control": "$PDS_DfcLoanDfcDepositPayDate"
				},
				"parentName": "GridContainer_573rqbz",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Timer_CounterDepositDate",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Timer",
					"caption": "#ResourceString(Timer_5yuppj7_caption)#",
					"labelType": "headline-1",
					"labelThickness": "light",
					"labelEllipsis": false,
					"labelColor": "#098401",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "center",
					"timerType": "timer-from-date",
					"showNegativeCountDownValue": true,
					"negativeTextColor": "#FD3F11",
					"positiveTextColor": "#098401",
					"positiveTextValue": "",
					"negativeTextValue": "",
					"label": "#ResourceString(Timer_5yuppj7_label)#",
					"visible": true,
					"readonly": true,
					"labelPosition": "auto",
					"placeholder": "",
					"tooltip": "",
					"control": "$PDS_DfcLoanDfcDepositPayDate"
				},
				"parentName": "GridContainer_573rqbz",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridDetail_592smge",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 3,
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
					"items": "$GridDetail_592smge",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_592smgeDS_Id",
					"columns": [
						{
							"id": "7c592904-c18c-5af7-a055-8f837a850ea0",
							"code": "GridDetail_592smgeDS_DfcBestOffer",
							"caption": "#ResourceString(GridDetail_592smgeDS_DfcBestOffer)#",
							"dataValueType": 12
						}
					],
					"placeholder": false
				},
				"parentName": "GridContainer_573rqbz",
				"propertyName": "items",
				"index": 4
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
					},
					"GridDetail_592smge": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_592smgeDS"
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_592smgeDS_DfcBestOffer": {
									"modelConfig": {
										"path": "GridDetail_592smgeDS.DfcBestOffer"
									}
								},
								"GridDetail_592smgeDS_Id": {
									"modelConfig": {
										"path": "GridDetail_592smgeDS.Id"
									}
								}
							}
						}
					},
					"PDS_DfcLoanDfcReservePrice": {
						"modelConfig": {
							"path": "PDS.DfcLoanDfcReservePrice"
						}
					},
					"PDS_DfcLoanDfcDepositPayDate": {
						"modelConfig": {
							"path": "PDS.DfcLoanDfcDepositPayDate"
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"KnowledgeBaseArticlesList",
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
					},
					"GridDetail_592smgeDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "DfcBid",
							"attributes": {
								"DfcBestOffer": {
									"path": "DfcBestOffer"
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
					},
					"DfcLoanDfcReservePrice": {
						"path": "DfcLoan.DfcReservePrice",
						"type": "ForwardReference"
					},
					"DfcLoanDfcDepositPayDate": {
						"path": "DfcLoan.DfcDepositPayDate",
						"type": "ForwardReference"
					}
				}
			},
			{
				"operation": "remove",
				"path": [
					"dependencies"
				],
				"properties": [
					"SubordinateCasesListDS",
					"KnowledgeBaseArticlesListDS",
					"BankCardDS"
				]
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
					],
					"GridDetail_592smgeDS": [
						{
							"attributePath": "DfcLoan",
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