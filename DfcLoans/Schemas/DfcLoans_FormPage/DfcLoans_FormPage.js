define("DfcLoans_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "remove",
				"name": "TagSelect"
			},
			{
				"operation": "merge",
				"name": "CardContentWrapper",
				"values": {
					"padding": {
						"left": "small",
						"right": "small",
						"top": "none",
						"bottom": "none"
					},
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"alignItems": "stretch"
				}
			},
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "GeneralInfoTab",
				"values": {
					"iconPosition": "only-text"
				}
			},
			{
				"operation": "merge",
				"name": "GeneralInfoTabContainer",
				"values": {
					"columns": [
						"minmax(64px, 1fr)",
						"minmax(64px, 1fr)",
						"minmax(64px, 1fr)"
					],
					"gap": {
						"columnGap": "none",
						"rowGap": "none"
					},
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
				}
			},
			{
				"operation": "merge",
				"name": "CardToggleTabPanel",
				"values": {
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "DfcLoans"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "69eeeba7-86ed-402d-b511-577e37c8d264",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "DfcLoanNo",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.PDS_DfcLoanNo_k34mwag",
					"labelPosition": "auto",
					"control": "$PDS_DfcLoanNo_k34mwag",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DfcLoanApp",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_DfcLoanApp_nlbj80g",
					"labelPosition": "auto",
					"control": "$PDS_DfcLoanApp_nlbj80g",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_6g3z8c7",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_6g3z8c7_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "DfcLoanApp",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DfcContact",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_DfcContact_nh3i50v",
					"labelPosition": "auto",
					"control": "$PDS_DfcContact_nh3i50v",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "addRecord_vyu29pr",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_vyu29pr_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "DfcContact",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DfcAccount",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_DfcAccount_iwpq71s",
					"labelPosition": "auto",
					"control": "$PDS_DfcAccount_iwpq71s",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "addRecord_ll8puqj",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_ll8puqj_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "DfcAccount",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DfcLoanStatus",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_DfcLoanStatus_e11tix3",
					"labelPosition": "auto",
					"control": "$PDS_DfcLoanStatus_e11tix3",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "addRecord_ujxbf3x",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_ujxbf3x_caption)#",
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
				"name": "GridContainer_mib9kql",
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
				"parentName": "SideContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "DfcProduct",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_DfcProduct_33a0ucc",
					"labelPosition": "auto",
					"control": "$PDS_DfcProduct_33a0ucc",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_mib9kql",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_wz9y7d7",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_wz9y7d7_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "DfcProduct",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DfcLoanAmt",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_DfcLoanAmt_90436eq",
					"labelPosition": "auto",
					"control": "$PDS_DfcLoanAmt_90436eq",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_mib9kql",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "DfcInterestRate",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_DfcInterestRate_gjvhcim",
					"labelPosition": "auto",
					"control": "$PDS_DfcInterestRate_gjvhcim",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_mib9kql",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "DfcTerm",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_DfcTerm_8g4shgy",
					"labelPosition": "auto",
					"control": "$PDS_DfcTerm_8g4shgy",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_mib9kql",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "DfcCurrency",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_DfcCurrency_3aedo6u",
					"labelPosition": "auto",
					"control": "$PDS_DfcCurrency_3aedo6u",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"readonly": true
				},
				"parentName": "GridContainer_mib9kql",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "NumberInput_zb74501",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 6,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_DfcTotalEscrowPayment_2rsx3pn",
					"labelPosition": "auto",
					"control": "$PDS_DfcTotalEscrowPayment_2rsx3pn"
				},
				"parentName": "GridContainer_mib9kql",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "NumberInput_gcvikif",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 7,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_DfcTotalPeriodPayment_vqhu80o",
					"labelPosition": "auto",
					"control": "$PDS_DfcTotalPeriodPayment_vqhu80o"
				},
				"parentName": "GridContainer_mib9kql",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "GridContainer_d45cqul",
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
				"parentName": "SideContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ComboBox_hgceck5",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "#ResourceString(ComboBox_hgceck5_label)#",
					"ariaLabel": "#ResourceString(ComboBox_hgceck5_ariaLabel)#",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"readonly": true,
					"control": "$PDS_DfcLoanAppDfcLoanType",
					"visible": true,
					"placeholder": ""
				},
				"parentName": "GridContainer_d45cqul",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_dmfxn01",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_DfcLoanAppDfcInterestType",
					"ariaLabel": "#ResourceString(ComboBox_dmfxn01_ariaLabel)#",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"readonly": true,
					"control": "$PDS_DfcLoanAppDfcInterestType"
				},
				"parentName": "GridContainer_d45cqul",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_gz4ef1g",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_gz4ef1g_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_dmfxn01",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_m9mnq9t",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_DfcLoanAppDfcIntCalcMethod",
					"ariaLabel": "#ResourceString(ComboBox_m9mnq9t_ariaLabel)#",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"readonly": true,
					"control": "$PDS_DfcLoanAppDfcIntCalcMethod"
				},
				"parentName": "GridContainer_d45cqul",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "addRecord_yfje2dw",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_yfje2dw_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_m9mnq9t",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_uv0lq3n",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_DfcLoanAppDfcGracePeriodIntMethod",
					"ariaLabel": "#ResourceString(ComboBox_uv0lq3n_ariaLabel)#",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"readonly": true,
					"control": "$PDS_DfcLoanAppDfcGracePeriodIntMethod"
				},
				"parentName": "GridContainer_d45cqul",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "addRecord_482z99v",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_482z99v_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_uv0lq3n",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_9muqevp",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_DfcLoanAppDfcLatePymtPenaltyFeeCalc",
					"ariaLabel": "#ResourceString(ComboBox_9muqevp_ariaLabel)#",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"readonly": true,
					"control": "$PDS_DfcLoanAppDfcLatePymtPenaltyFeeCalc"
				},
				"parentName": "GridContainer_d45cqul",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "addRecord_qkp51cp",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_qkp51cp_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_9muqevp",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Checkbox_3w8r0d1",
				"values": {
					"type": "crt.Checkbox",
					"label": "$Resources.Strings.PDS_DfcRefinanceEvaluacion_h2npuw9",
					"labelPosition": "right",
					"control": "$PDS_DfcRefinanceEvaluacion_h2npuw9",
					"layoutConfig": {
						"column": 1,
						"row": 6,
						"colSpan": 1,
						"rowSpan": 1
					},
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_d45cqul",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "Label_LoanApplication",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_ivhdx2r_caption)#)#",
					"labelType": "headline-4",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_LoanApplication",
				"values": {
					"type": "crt.DataGrid",
					"features": {
						"rows": {
							"selection": false,
							"numeration": false
						},
						"editable": {
							"enable": false,
							"itemsCreation": false
						}
					},
					"items": "$DataGrid_36pclew",
					"activeRow": "$DataGrid_36pclew_ActiveRow",
					"selectionState": "$DataGrid_36pclew_SelectionState",
					"_selectionOptions": {
						"attribute": "DataGrid_36pclew_SelectionState"
					},
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "DataGrid_36pclewDS_Id",
					"columns": [
						{
							"id": "8911e13c-077c-86a0-8ea7-4cef667a2861",
							"code": "DataGrid_36pclewDS_Number",
							"caption": "#ResourceString(DataGrid_36pclewDS_Number)#",
							"dataValueType": 28,
							"width": 132.9857940673828
						},
						{
							"id": "bc43dbf6-b554-95a5-0120-f709e637fceb",
							"code": "DataGrid_36pclewDS_FillingDate",
							"caption": "#ResourceString(DataGrid_36pclewDS_FillingDate)#",
							"dataValueType": 8,
							"width": 162.99147033691406
						},
						{
							"id": "74df35fe-cdb5-d7e1-8c6a-93983e0e197b",
							"code": "DataGrid_36pclewDS_Product",
							"caption": "#ResourceString(DataGrid_36pclewDS_Product)#",
							"dataValueType": 10,
							"width": 200
						},
						{
							"id": "850070cf-bc83-34e0-041c-7c0411994867",
							"code": "DataGrid_36pclewDS_ProductType",
							"caption": "#ResourceString(DataGrid_36pclewDS_ProductType)#",
							"dataValueType": 10
						},
						{
							"id": "a802e9b1-c151-50a5-4286-e6455669a997",
							"code": "DataGrid_36pclewDS_OpportunityCondition",
							"caption": "#ResourceString(DataGrid_36pclewDS_OpportunityCondition)#",
							"dataValueType": 10
						},
						{
							"id": "6a41e629-32b0-468c-42b1-e3d4c0f41894",
							"code": "DataGrid_36pclewDS_DfcReqAmt",
							"caption": "#ResourceString(DataGrid_36pclewDS_DfcReqAmt)#",
							"dataValueType": 32,
							"width": 193.99999237060547
						},
						{
							"id": "c1e2051a-0214-57d1-32e7-b121875ed30b",
							"code": "DataGrid_36pclewDS_DfcInterestRate",
							"caption": "#ResourceString(DataGrid_36pclewDS_DfcInterestRate)#",
							"dataValueType": 32
						},
						{
							"id": "33643421-792e-dac6-8e2f-a53ea5493dcf",
							"code": "DataGrid_36pclewDS_DfcTerm",
							"caption": "#ResourceString(DataGrid_36pclewDS_DfcTerm)#",
							"dataValueType": 4
						},
						{
							"id": "7823d083-e7e8-c44a-a1c6-ac7bbe699bb4",
							"code": "DataGrid_36pclewDS_DfcPurpose",
							"caption": "#ResourceString(DataGrid_36pclewDS_DfcPurpose)#",
							"dataValueType": 43
						},
						{
							"id": "4199fd48-1291-e3dc-5cf4-cbbd702bca43",
							"code": "DataGrid_36pclewDS_DfcSector",
							"caption": "#ResourceString(DataGrid_36pclewDS_DfcSector)#",
							"dataValueType": 10
						},
						{
							"id": "e95c36c3-c978-aeb1-ef4d-30fc70eaef9a",
							"code": "DataGrid_36pclewDS_DfcSubSector",
							"caption": "#ResourceString(DataGrid_36pclewDS_DfcSubSector)#",
							"dataValueType": 10
						},
						{
							"id": "c1cfda4b-73df-287e-f58a-d34baf69af04",
							"code": "DataGrid_36pclewDS_Division",
							"caption": "#ResourceString(DataGrid_36pclewDS_Division)#",
							"dataValueType": 10
						},
						{
							"id": "eca23dfa-fde9-b514-79e5-9df53c85eaf4",
							"code": "DataGrid_36pclewDS_DecisionDate",
							"caption": "#ResourceString(DataGrid_36pclewDS_DecisionDate)#",
							"dataValueType": 8
						},
						{
							"id": "2ff01a7e-fb5d-3ce9-33c2-697dda380409",
							"code": "DataGrid_36pclewDS_Approver",
							"caption": "#ResourceString(DataGrid_36pclewDS_Approver)#",
							"dataValueType": 10
						},
						{
							"id": "95e3694e-6785-6e10-9f7e-384c8a30e53c",
							"code": "DataGrid_36pclewDS_CreatedBy",
							"caption": "#ResourceString(DataGrid_36pclewDS_CreatedBy)#",
							"dataValueType": 10
						},
						{
							"id": "745bd10f-b4a9-3b8e-093f-74a2d7d426f9",
							"code": "DataGrid_36pclewDS_CreatedOn",
							"caption": "#ResourceString(DataGrid_36pclewDS_CreatedOn)#",
							"dataValueType": 7
						}
					],
					"placeholder": false,
					"bulkActions": [],
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 3,
						"rowSpan": 1
					}
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "DataGrid_36pclew_AddTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Add tag",
					"icon": "tag-icon",
					"clicked": {
						"request": "crt.AddTagsInRecordsRequest",
						"params": {
							"dataSourceName": "DataGrid_36pclewDS",
							"filters": "$DataGrid_36pclew | crt.ToCollectionFilters : 'DataGrid_36pclew' : $DataGrid_36pclew_SelectionState | crt.SkipIfSelectionEmpty : $DataGrid_36pclew_SelectionState"
						}
					},
					"items": []
				},
				"parentName": "DataGrid_LoanApplication",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_36pclew_RemoveTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Remove tag",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.RemoveTagsInRecordsRequest",
						"params": {
							"dataSourceName": "DataGrid_36pclewDS",
							"filters": "$DataGrid_36pclew | crt.ToCollectionFilters : 'DataGrid_36pclew' : $DataGrid_36pclew_SelectionState | crt.SkipIfSelectionEmpty : $DataGrid_36pclew_SelectionState"
						}
					}
				},
				"parentName": "DataGrid_36pclew_AddTagsBulkAction",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_36pclew_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Export to Excel",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "DataGrid_LoanApplication",
							"filters": "$DataGrid_36pclew | crt.ToCollectionFilters : 'DataGrid_36pclew' : $DataGrid_36pclew_SelectionState | crt.SkipIfSelectionEmpty : $DataGrid_36pclew_SelectionState"
						}
					}
				},
				"parentName": "DataGrid_LoanApplication",
				"propertyName": "bulkActions",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_CurrentAmountsDue",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_CurrentAmountsDue_title)#",
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
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_vrus6ws",
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
				"parentName": "ExpansionPanel_CurrentAmountsDue",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_8yf6e40",
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
				"parentName": "GridContainer_vrus6ws",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_nirpjwq",
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
				"parentName": "ExpansionPanel_CurrentAmountsDue",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NumberInput_hw28vt3",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_DfcEscrowBal_m40gr6s",
					"labelPosition": "auto",
					"control": "$PDS_DfcEscrowBal_m40gr6s"
				},
				"parentName": "GridContainer_nirpjwq",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DfcOtherBal",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_DfcOtherBal_8vyzu5w",
					"labelPosition": "auto",
					"control": "$PDS_DfcOtherBal_8vyzu5w"
				},
				"parentName": "GridContainer_nirpjwq",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "DfcInterestBal",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_DfcInterestBal_yn9y8kb",
					"labelPosition": "auto",
					"control": "$PDS_DfcInterestBal_yn9y8kb"
				},
				"parentName": "GridContainer_nirpjwq",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "FlexContainer_ph2h6yt",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "column",
					"items": [],
					"fitContent": true
				},
				"parentName": "ExpansionPanel_CurrentAmountsDue",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "NumberInput_xejr9tv",
				"values": {
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_DfcPpalBal_yywztd5",
					"labelPosition": "auto",
					"control": "$PDS_DfcPpalBal_yywztd5"
				},
				"parentName": "FlexContainer_ph2h6yt",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NumberInput_v0ew65o",
				"values": {
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_DfcTotalBal_0upweyr",
					"labelPosition": "auto",
					"control": "$PDS_DfcTotalBal_0upweyr"
				},
				"parentName": "FlexContainer_ph2h6yt",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_Disbursements",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 3,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_b8uvs9i_title)#",
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
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_oh6dx12",
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
				"parentName": "ExpansionPanel_Disbursements",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_zg99ble",
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
				"parentName": "GridContainer_oh6dx12",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_emffdf9",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_emffdf9_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "DfcDisbursements",
							"defaultValues": [
								{
									"attributeName": "DfcLoanNo",
									"value": "$DfcLoanNo"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_zg99ble",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_f3cyvb4",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_f3cyvb4_caption)#",
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
							"dataSourceName": "GridDetail_pxv0h5aDS"
						}
					}
				},
				"parentName": "FlexContainer_zg99ble",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_9cgdoy0",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_9cgdoy0_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_zg99ble",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_0fgpnu2",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_0fgpnu2_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_pxv0h5a"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_9cgdoy0",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_2j9et1j",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_2j9et1j_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "DfcDisbursements"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_9cgdoy0",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_zhn0eyg",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_zhn0eyg_placeholder)#",
					"iconOnly": true,
					"targetAttributes": [
						"GridDetail_pxv0h5a"
					]
				},
				"parentName": "FlexContainer_zg99ble",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_zcftewq",
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
				"parentName": "ExpansionPanel_Disbursements",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_pxv0h5a",
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
						},
						"editable": {
							"enable": false,
							"itemsCreation": false
						}
					},
					"items": "$GridDetail_pxv0h5a",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_pxv0h5aDS_Id",
					"columns": [
						{
							"id": "a30664bb-9d73-df41-402e-47808dda1b4d",
							"code": "GridDetail_pxv0h5aDS_DfcDisbNo",
							"caption": "#ResourceString(GridDetail_pxv0h5aDS_DfcDisbNo)#",
							"dataValueType": 27
						},
						{
							"id": "1c7e92ea-7359-2aad-d7b8-4d0ee68628ab",
							"code": "GridDetail_pxv0h5aDS_DfcDisbDate",
							"caption": "#ResourceString(GridDetail_pxv0h5aDS_DfcDisbDate)#",
							"dataValueType": 8
						},
						{
							"id": "a7a4cb25-9451-b1a1-1d9a-e5025a244a3b",
							"code": "GridDetail_pxv0h5aDS_DfcAmount",
							"caption": "#ResourceString(GridDetail_pxv0h5aDS_DfcAmount)#",
							"dataValueType": 6
						},
						{
							"id": "76827ce0-aa1b-9ffd-9b5c-d6cb8a66a9fb",
							"code": "GridDetail_pxv0h5aDS_CreatedBy",
							"caption": "#ResourceString(GridDetail_pxv0h5aDS_CreatedBy)#",
							"dataValueType": 10
						},
						{
							"id": "f1d4cc9f-35e8-65f1-f802-c64f97238750",
							"code": "GridDetail_pxv0h5aDS_CreatedOn",
							"caption": "#ResourceString(GridDetail_pxv0h5aDS_CreatedOn)#",
							"dataValueType": 7
						},
						{
							"id": "95ee58d1-710c-0bf9-6e9b-399313b5c8cf",
							"code": "GridDetail_pxv0h5aDS_ModifiedBy",
							"caption": "#ResourceString(GridDetail_pxv0h5aDS_ModifiedBy)#",
							"dataValueType": 10
						},
						{
							"id": "6a652755-495d-4fdc-dea5-bd1cead9f69f",
							"code": "GridDetail_pxv0h5aDS_ModifiedOn",
							"caption": "#ResourceString(GridDetail_pxv0h5aDS_ModifiedOn)#",
							"dataValueType": 7
						}
					],
					"placeholder": false
				},
				"parentName": "GridContainer_zcftewq",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_5s6kumx",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
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
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_ktr742f",
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
					"title": "#ResourceString(ExpansionPanel_ktr742f_title)#",
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
				"parentName": "GridContainer_5s6kumx",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_om7pu28",
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
				"parentName": "ExpansionPanel_ktr742f",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_tj9jyhm",
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
				"parentName": "GridContainer_om7pu28",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_2jon6e2",
				"values": {
					"type": "crt.DateTimePicker",
					"pickerType": "date",
					"label": "$Resources.Strings.PDS_DfcLastPymtDate_722oqa6",
					"labelPosition": "auto",
					"control": "$PDS_DfcLastPymtDate_722oqa6"
				},
				"parentName": "ExpansionPanel_ktr742f",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DfcLoanApprovalDate",
				"values": {
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.PDS_DfcLoanApprovalDate_n5u3skt",
					"labelPosition": "auto",
					"control": "$PDS_DfcLoanApprovalDate_n5u3skt",
					"pickerType": "datetime"
				},
				"parentName": "ExpansionPanel_ktr742f",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Dfc1stDisbursementDate",
				"values": {
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.PDS_Dfc1stDisbursementDate_7el28pt",
					"labelPosition": "auto",
					"control": "$PDS_Dfc1stDisbursementDate_7el28pt",
					"pickerType": "datetime"
				},
				"parentName": "ExpansionPanel_ktr742f",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_48oa1lu",
				"values": {
					"type": "crt.DateTimePicker",
					"pickerType": "date",
					"label": "$Resources.Strings.PDS_DfcRepaymentStartDate_c66966r",
					"labelPosition": "auto",
					"control": "$PDS_DfcRepaymentStartDate_c66966r"
				},
				"parentName": "ExpansionPanel_ktr742f",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "DfcRepaymentEndDate",
				"values": {
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.PDS_DfcRepaymentEndDate_x77mdli",
					"labelPosition": "auto",
					"control": "$PDS_DfcRepaymentEndDate_x77mdli",
					"pickerType": "datetime",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "ExpansionPanel_ktr742f",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_8yrq815",
				"values": {
					"type": "crt.DateTimePicker",
					"pickerType": "date",
					"label": "$Resources.Strings.PDS_DfcWriteoffDate_rxeva8n",
					"labelPosition": "auto",
					"control": "$PDS_DfcWriteoffDate_rxeva8n"
				},
				"parentName": "ExpansionPanel_ktr742f",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_f868skj",
				"values": {
					"type": "crt.DateTimePicker",
					"pickerType": "datetime",
					"label": "#ResourceString(DateTimePicker_f868skj_label)#",
					"labelPosition": "auto",
					"control": "$PDS_ModifiedOn_hpy4x1p",
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "ExpansionPanel_ktr742f",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "DfcLoanLastInterest",
				"values": {
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.PDS_DfcLoanLastInterest_6pysaq3",
					"labelPosition": "auto",
					"control": "$PDS_DfcLoanLastInterest_6pysaq3",
					"pickerType": "datetime"
				},
				"parentName": "ExpansionPanel_ktr742f",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "DfcLastNoticeDate",
				"values": {
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.PDS_DfcLastNoticeDate_0nzt57a",
					"labelPosition": "auto",
					"control": "$PDS_DfcLastNoticeDate_0nzt57a",
					"pickerType": "datetime"
				},
				"parentName": "ExpansionPanel_ktr742f",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_p9g9ara",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_p9g9ara_title)#",
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
				"parentName": "GridContainer_5s6kumx",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_29lj4n3",
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
				"parentName": "ExpansionPanel_p9g9ara",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_pwqox3x",
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
				"parentName": "GridContainer_29lj4n3",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NumberInput_04pu97b",
				"values": {
					"type": "crt.NumberInput",
					"label": "#ResourceString(NumberInput_04pu97b_label)#",
					"labelPosition": "auto",
					"control": "$PDS_DfcLoanAmt_b34ugkh",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "ExpansionPanel_p9g9ara",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DfcLoanAmDec",
				"values": {
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_DfcLoanAmDec_av69r9b",
					"labelPosition": "auto",
					"control": "$PDS_DfcLoanAmDec_av69r9b"
				},
				"parentName": "ExpansionPanel_p9g9ara",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "NumberInput_zhg82xi",
				"values": {
					"type": "crt.NumberInput",
					"label": "#ResourceString(NumberInput_zhg82xi_label)#",
					"labelPosition": "auto",
					"control": "$PDS_DfcLoanAmt_951pbil",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "ExpansionPanel_p9g9ara",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "NumberInput_ez7u74e",
				"values": {
					"type": "crt.NumberInput",
					"label": "#ResourceString(NumberInput_ez7u74e_label)#",
					"labelPosition": "auto",
					"control": "$PDS_DfcLoanAmt_sbfy108",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "ExpansionPanel_p9g9ara",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "DfcLastPaymentAm",
				"values": {
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_DfcLastPaymentAm_hf3gkam",
					"labelPosition": "auto",
					"control": "$PDS_DfcLastPaymentAm_hf3gkam"
				},
				"parentName": "ExpansionPanel_p9g9ara",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "DfcLoanOutstandingPrincipal",
				"values": {
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_DfcLoanOutstandingPrincipal_t888c0b",
					"labelPosition": "auto",
					"control": "$PDS_DfcLoanOutstandingPrincipal_t888c0b"
				},
				"parentName": "ExpansionPanel_p9g9ara",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "DfcLastNoticeLoaninfo",
				"values": {
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_DfcLastNoticeLoaninfo_6qbcgqq",
					"labelPosition": "auto",
					"control": "$PDS_DfcLastNoticeLoaninfo_6qbcgqq"
				},
				"parentName": "ExpansionPanel_p9g9ara",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "DfcLoanTimesRescheduled",
				"values": {
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_DfcLoanTimesRescheduled_ne2bybp",
					"labelPosition": "auto",
					"control": "$PDS_DfcLoanTimesRescheduled_ne2bybp"
				},
				"parentName": "ExpansionPanel_p9g9ara",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "NumberInput_69a9df9",
				"values": {
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_DfcEscrowBal_rtopzkg",
					"labelPosition": "auto",
					"control": "$PDS_DfcEscrowBal_rtopzkg"
				},
				"parentName": "ExpansionPanel_p9g9ara",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "TabContainer_EscrowAccounts",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_EscrowAccounts_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_7z7djtj",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_7z7djtj_title)#",
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
				"parentName": "TabContainer_EscrowAccounts",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_f2sr3xo",
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
				"parentName": "ExpansionPanel_7z7djtj",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_cu9qk67",
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
				"parentName": "GridContainer_f2sr3xo",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_n2a7583",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_n2a7583_caption)#",
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
							"dataSourceName": "GridDetail_614bp6yDS"
						}
					}
				},
				"parentName": "FlexContainer_cu9qk67",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_29482py",
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
				"parentName": "ExpansionPanel_7z7djtj",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_614bp6y",
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
					"items": "$GridDetail_614bp6y",
					"primaryColumnName": "GridDetail_614bp6yDS_Id",
					"columns": [
						{
							"id": "934f8e4e-c01f-5056-bb59-b9e714363059",
							"code": "GridDetail_614bp6yDS_BankAccountNumber",
							"caption": "#ResourceString(GridDetail_614bp6yDS_BankAccountNumber)#",
							"dataValueType": 27
						}
					],
					"placeholder": false,
					"visible": true,
					"fitContent": true
				},
				"parentName": "GridContainer_29482py",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabContainer_nskx9ds",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_nskx9ds_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_fe0ozex",
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
						"rowGap": "none"
					},
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
				"parentName": "TabContainer_nskx9ds",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_o2j9jqt",
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
				"parentName": "TabContainer_nskx9ds",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_w0xe4q7",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_w0xe4q7_title)#",
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
					"alignItems": "stretch",
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_o2j9jqt",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_xgnx2p4",
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
					"color": "#CBE8FA",
					"borderRadius": "medium",
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "ExpansionPanel_w0xe4q7",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_hdmn3dk",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.GridContainer",
					"columns": [
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
				"parentName": "GridContainer_xgnx2p4",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Button_lm03qqx",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_lm03qqx_caption)#",
					"color": "accent",
					"disabled": false,
					"size": "large",
					"iconPosition": "only-text",
					"visible": true,
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "DfcProcess_b8b54d2",
							"processRunType": "ForTheSelectedPage",
							"showNotification": true,
							"recordIdProcessParameterName": "RecordId"
						}
					},
					"clickMode": "default"
				},
				"parentName": "GridContainer_hdmn3dk",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Button_5e7dsmg",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Button",
					"caption": "#ResourceString(Button_5e7dsmg_caption)#",
					"color": "accent",
					"disabled": false,
					"size": "large",
					"iconPosition": "only-text",
					"visible": true,
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "DfcProcess_80fae23",
							"processRunType": "ForTheSelectedPage",
							"showNotification": true,
							"recordIdProcessParameterName": "RecordId"
						}
					},
					"clickMode": "default"
				},
				"parentName": "GridContainer_hdmn3dk",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Button_arxciqy",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_arxciqy_caption)#",
					"color": "primary",
					"disabled": false,
					"size": "large",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "disk-warn-button-icon",
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "DfcSchedulePayment_3b86a37",
							"processRunType": "ForTheSelectedPage",
							"showNotification": true,
							"recordIdProcessParameterName": "ProcessSchemaParameter1"
						}
					},
					"clickMode": "default",
					"layoutConfig": {
						"column": 3,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_hdmn3dk",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_0u1pwpr",
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
				"parentName": "ExpansionPanel_w0xe4q7",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_kyuqu66",
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
					"alignItems": "stretch",
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_0u1pwpr",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DfcOutstandingPrincipal",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "#ResourceString(DfcOutstandingPrincipal_label)#",
					"labelPosition": "auto",
					"control": "$PDS_DfcOutstandingPrincipal_kvrpiqy",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_kyuqu66",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DfcTotalToPaySim",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_DfcTotalToPaySim_bvtovwh",
					"labelPosition": "auto",
					"control": "$PDS_DfcTotalToPaySim_bvtovwh"
				},
				"parentName": "GridContainer_0u1pwpr",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "DfcPaymentFrecuencySim",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "#ResourceString(DfcPaymentFrecuencySim_label)#",
					"labelPosition": "auto",
					"control": "$PDS_DfcColumn57_239hyzt",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GridContainer_0u1pwpr",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_748ppqw",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_9cx5x3r_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "DfcPaymentFrecuencySim",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DfcInstallmentSim",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "#ResourceString(DfcInstallmentSim_label)#",
					"labelPosition": "auto",
					"control": "$PDS_DfcInstallmentSim_2d4nkpx",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_0u1pwpr",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "DfcPeriodSim",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_DfcPeriodSim_v4ten77",
					"labelPosition": "auto",
					"control": "$PDS_DfcPeriodSim_v4ten77"
				},
				"parentName": "GridContainer_0u1pwpr",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "DfcAssosExpSim",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_DfcAssosExpSim_yq8zzy1",
					"labelPosition": "auto",
					"control": "$PDS_DfcAssosExpSim_yq8zzy1"
				},
				"parentName": "GridContainer_0u1pwpr",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "DfcInterestRateSim",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_DfcInterestRateSim_gw96i04",
					"labelPosition": "auto",
					"control": "$PDS_DfcInterestRateSim_gw96i04"
				},
				"parentName": "GridContainer_0u1pwpr",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_1vrkmur",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_1vrkmur_title)#",
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
				"parentName": "GridContainer_o2j9jqt",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_o8ec6dk",
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
				"parentName": "ExpansionPanel_1vrkmur",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_98yv1ar",
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
				"parentName": "GridContainer_o8ec6dk",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_562389j",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"visible": true,
					"color": "#CBE8FA",
					"borderRadius": "medium",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"justifyContent": "start",
					"wrap": "wrap"
				},
				"parentName": "FlexContainer_98yv1ar",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Button_35xf714",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_35xf714_caption)#",
					"color": "default",
					"disabled": false,
					"size": "large",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "message-composer-checkmark",
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "DfcProcess_6bbb3ad",
							"processRunType": "ForTheSelectedPage",
							"showNotification": true,
							"recordIdProcessParameterName": "RecordId"
						}
					},
					"clickMode": "default"
				},
				"parentName": "FlexContainer_562389j",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_h53ooac",
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
				"parentName": "ExpansionPanel_1vrkmur",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_dourile",
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
					"items": "$GridDetail_dourile",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_dourileDS_Id",
					"columns": [
						{
							"id": "ded63d21-c371-10de-8993-89c24131a0e8",
							"code": "GridDetail_dourileDS_DfcAmortizationNumber",
							"caption": "#ResourceString(GridDetail_dourileDS_DfcAmortizationNumber)#",
							"dataValueType": 27,
							"width": 177
						},
						{
							"id": "f6b21c45-9583-910b-b98d-c9b1d321b79b",
							"code": "GridDetail_dourileDS_DfcAmortizationAmount",
							"caption": "#ResourceString(GridDetail_dourileDS_DfcAmortizationAmount)#",
							"dataValueType": 6,
							"width": 155
						},
						{
							"id": "03f6130b-568a-2781-3298-bd9736e19f1a",
							"code": "GridDetail_dourileDS_DfcAmortizationBeginningBalance",
							"caption": "#ResourceString(GridDetail_dourileDS_DfcAmortizationBeginningBalance)#",
							"dataValueType": 6
						},
						{
							"id": "323ffb51-d9a0-9ed4-1fbc-fd5fb7304de7",
							"code": "GridDetail_dourileDS_DfcAmortizationEndingBalance",
							"caption": "#ResourceString(GridDetail_dourileDS_DfcAmortizationEndingBalance)#",
							"dataValueType": 6
						},
						{
							"id": "ca93209e-53f1-fe56-0535-2d9e0a7bf9be",
							"code": "GridDetail_dourileDS_DfcCurrentDue",
							"caption": "#ResourceString(GridDetail_dourileDS_DfcCurrentDue)#",
							"dataValueType": 12
						},
						{
							"id": "c349f652-8363-2e9b-3311-349b2d6b479e",
							"code": "GridDetail_dourileDS_DfcAmortizationInterest",
							"caption": "#ResourceString(GridDetail_dourileDS_DfcAmortizationInterest)#",
							"dataValueType": 6
						}
					],
					"placeholder": false
				},
				"parentName": "GridContainer_h53ooac",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabContainer_Amortization",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_5nhcphw_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_au9do0x",
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
				"parentName": "TabContainer_Amortization",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_Amortization",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.DataGrid",
					"features": {
						"rows": {
							"selection": false
						},
						"editable": {
							"enable": false,
							"itemsCreation": false
						}
					},
					"items": "$DataGrid_e53ftud",
					"activeRow": "$DataGrid_e53ftud_ActiveRow",
					"selectionState": "$DataGrid_e53ftud_SelectionState",
					"_selectionOptions": {
						"attribute": "DataGrid_e53ftud_SelectionState"
					},
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "DataGrid_e53ftudDS_Id",
					"columns": [
						{
							"id": "3209f3e0-2a4a-8716-63eb-d689e2f94439",
							"code": "DataGrid_e53ftudDS_DfcAmortizationNumber",
							"caption": "#ResourceString(DataGrid_e53ftudDS_DfcAmortizationNumber)#",
							"dataValueType": 27
						},
						{
							"id": "64d3293f-fb2a-e763-dad5-c84181f2942f",
							"code": "DataGrid_e53ftudDS_DfcAmortizationBeginningBalance",
							"caption": "#ResourceString(DataGrid_e53ftudDS_DfcAmortizationBeginningBalance)#",
							"dataValueType": 6
						},
						{
							"id": "f11f6ce0-7819-1d40-75a6-053625988a84",
							"code": "DataGrid_e53ftudDS_DfcAmortizationEndingBalance",
							"caption": "#ResourceString(DataGrid_e53ftudDS_DfcAmortizationEndingBalance)#",
							"dataValueType": 6
						},
						{
							"id": "915b80f3-5a66-8b35-4e83-ff6e00a9ea45",
							"code": "DataGrid_e53ftudDS_DfcAmortizationAmount",
							"caption": "#ResourceString(DataGrid_e53ftudDS_DfcAmortizationAmount)#",
							"dataValueType": 6
						},
						{
							"id": "b0ef1cf9-82e8-43ad-bb1e-69c1bd82cc3f",
							"code": "DataGrid_e53ftudDS_CreatedOn",
							"caption": "#ResourceString(DataGrid_e53ftudDS_CreatedOn)#",
							"dataValueType": 7
						},
						{
							"id": "da4cd21f-47c9-bda6-edb6-bab6ff1b0808",
							"code": "DataGrid_e53ftudDS_DfcPaid",
							"caption": "#ResourceString(DataGrid_e53ftudDS_DfcPaid)#",
							"dataValueType": 12
						}
					],
					"placeholder": false,
					"bulkActions": []
				},
				"parentName": "GridContainer_au9do0x",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_e53ftud_AddTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Add tag",
					"icon": "tag-icon",
					"clicked": {
						"request": "crt.AddTagsInRecordsRequest",
						"params": {
							"dataSourceName": "DataGrid_e53ftudDS",
							"filters": "$DataGrid_e53ftud | crt.ToCollectionFilters : 'DataGrid_e53ftud' : $DataGrid_e53ftud_SelectionState | crt.SkipIfSelectionEmpty : $DataGrid_e53ftud_SelectionState"
						}
					},
					"items": []
				},
				"parentName": "DataGrid_Amortization",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_e53ftud_RemoveTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Remove tag",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.RemoveTagsInRecordsRequest",
						"params": {
							"dataSourceName": "DataGrid_e53ftudDS",
							"filters": "$DataGrid_e53ftud | crt.ToCollectionFilters : 'DataGrid_e53ftud' : $DataGrid_e53ftud_SelectionState | crt.SkipIfSelectionEmpty : $DataGrid_e53ftud_SelectionState"
						}
					}
				},
				"parentName": "DataGrid_e53ftud_AddTagsBulkAction",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_e53ftud_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Export to Excel",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "DataGrid_Amortization",
							"filters": "$DataGrid_e53ftud | crt.ToCollectionFilters : 'DataGrid_e53ftud' : $DataGrid_e53ftud_SelectionState | crt.SkipIfSelectionEmpty : $DataGrid_e53ftud_SelectionState"
						}
					}
				},
				"parentName": "DataGrid_Amortization",
				"propertyName": "bulkActions",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "DataGrid_e53ftud_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Delete",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "DataGrid_e53ftudDS",
							"filters": "$DataGrid_e53ftud | crt.ToCollectionFilters : 'DataGrid_e53ftud' : $DataGrid_e53ftud_SelectionState | crt.SkipIfSelectionEmpty : $DataGrid_e53ftud_SelectionState"
						}
					}
				},
				"parentName": "DataGrid_Amortization",
				"propertyName": "bulkActions",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "TabContainer_Collateral",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_es3rs4g_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "GridContainer_y6gwfsr",
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
				"parentName": "TabContainer_Collateral",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_Collaterals",
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
					"title": "#ResourceString(ExpansionPanel_tgka4vj_title)#",
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
					"fitContent": true
				},
				"parentName": "GridContainer_y6gwfsr",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_37obrt0",
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
				"parentName": "ExpansionPanel_Collaterals",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_bjwiy7e",
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
				"parentName": "GridContainer_37obrt0",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_Collateral",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_0sdy1zf_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "DfcCollaterals",
							"defaultValues": [
								{
									"attributeName": "DfcLoanNo",
									"value": "$DfcLoanNo"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_bjwiy7e",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_a9pwvjr",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_a9pwvjr_caption)#",
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
							"dataSourceName": "GridDetail_l0mxaloDS"
						}
					}
				},
				"parentName": "FlexContainer_bjwiy7e",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_rj04289",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_rj04289_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_bjwiy7e",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_tl8g136",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_tl8g136_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_Collaterals"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_rj04289",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_l3rhoeq",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_l3rhoeq_caption)#",
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
				"parentName": "GridDetailSettingsBtn_rj04289",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_l073eda",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_l073eda_placeholder)#",
					"iconOnly": true,
					"targetAttributes": [
						"GridDetail_l0mxalo"
					]
				},
				"parentName": "FlexContainer_bjwiy7e",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_5xop5xk",
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
				"parentName": "ExpansionPanel_Collaterals",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_Collaterals",
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
						},
						"editable": {
							"enable": false,
							"itemsCreation": false
						}
					},
					"items": "$GridDetail_l0mxalo",
					"activeRow": "$GridDetail_l0mxalo_ActiveRow",
					"selectionState": "$GridDetail_l0mxalo_SelectionState",
					"_selectionOptions": {
						"attribute": "GridDetail_l0mxalo_SelectionState"
					},
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_l0mxaloDS_Id",
					"columns": [
						{
							"id": "28f3ca36-77f3-ebd0-f7b0-f0847a9d9bf1",
							"code": "GridDetail_l0mxaloDS_DfcColValue",
							"caption": "#ResourceString(GridDetail_l0mxaloDS_DfcColValue)#",
							"dataValueType": 6,
							"width": 188.99999237060547
						},
						{
							"id": "18981bdd-b4f0-7dfc-4582-8010d5d8f7e6",
							"code": "GridDetail_l0mxaloDS_DfcDateEntered",
							"caption": "#ResourceString(GridDetail_l0mxaloDS_DfcDateEntered)#",
							"dataValueType": 8
						},
						{
							"id": "a96dfa5f-dfe1-f946-f98b-43fbf9a38aa9",
							"code": "GridDetail_l0mxaloDS_DfcDescription",
							"caption": "#ResourceString(GridDetail_l0mxaloDS_DfcDescription)#",
							"dataValueType": 30
						},
						{
							"id": "74a010e6-ce99-0fc9-b051-67f53ac76cb5",
							"code": "GridDetail_l0mxaloDS_DfcInAuction",
							"caption": "#ResourceString(GridDetail_l0mxaloDS_DfcInAuction)#",
							"dataValueType": 12
						},
						{
							"id": "227c6552-d969-1d8f-ac28-a5ca5b5f2410",
							"code": "GridDetail_l0mxaloDS_CreatedOn",
							"caption": "#ResourceString(GridDetail_l0mxaloDS_CreatedOn)#",
							"dataValueType": 7
						}
					],
					"placeholder": false,
					"bulkActions": []
				},
				"parentName": "GridContainer_5xop5xk",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_l0mxalo_AddTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Add tag",
					"icon": "tag-icon",
					"clicked": {
						"request": "crt.AddTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_l0mxaloDS",
							"filters": "$GridDetail_l0mxalo | crt.ToCollectionFilters : 'GridDetail_l0mxalo' : $GridDetail_l0mxalo_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_l0mxalo_SelectionState"
						}
					},
					"items": []
				},
				"parentName": "GridDetail_Collaterals",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_l0mxalo_RemoveTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Remove tag",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.RemoveTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_l0mxaloDS",
							"filters": "$GridDetail_l0mxalo | crt.ToCollectionFilters : 'GridDetail_l0mxalo' : $GridDetail_l0mxalo_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_l0mxalo_SelectionState"
						}
					}
				},
				"parentName": "GridDetail_l0mxalo_AddTagsBulkAction",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_l0mxalo_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Export to Excel",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_Collaterals",
							"filters": "$GridDetail_l0mxalo | crt.ToCollectionFilters : 'GridDetail_l0mxalo' : $GridDetail_l0mxalo_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_l0mxalo_SelectionState"
						}
					}
				},
				"parentName": "GridDetail_Collaterals",
				"propertyName": "bulkActions",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetail_l0mxalo_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Delete",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_l0mxaloDS",
							"filters": "$GridDetail_l0mxalo | crt.ToCollectionFilters : 'GridDetail_l0mxalo' : $GridDetail_l0mxalo_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_l0mxalo_SelectionState"
						}
					}
				},
				"parentName": "GridDetail_Collaterals",
				"propertyName": "bulkActions",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_BidList",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_hupg8t4_title)#",
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
				"parentName": "TabContainer_Collateral",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_4zavoqq",
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
				"parentName": "ExpansionPanel_BidList",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_5772i52",
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
				"parentName": "GridContainer_4zavoqq",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_vwp53jh",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_vwp53jh_caption)#",
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
				"parentName": "FlexContainer_5772i52",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_bcdehz8",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_bcdehz8_caption)#",
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
							"dataSourceName": "GridDetail_spuzx2dDS"
						}
					}
				},
				"parentName": "FlexContainer_5772i52",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_9r8g0hs",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_9r8g0hs_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_5772i52",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_lrltowl",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_lrltowl_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_spuzx2d"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_9r8g0hs",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_gil0qqf",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_gil0qqf_caption)#",
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
				"parentName": "GridDetailSettingsBtn_9r8g0hs",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_2n6lc98",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_2n6lc98_placeholder)#",
					"iconOnly": true,
					"targetAttributes": [
						"GridDetail_spuzx2d"
					]
				},
				"parentName": "FlexContainer_5772i52",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_sda7e0w",
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
				"parentName": "ExpansionPanel_BidList",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NumberInput_o2h10ps",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_DfcReservePrice_sl7ldgz",
					"labelPosition": "auto",
					"control": "$PDS_DfcReservePrice_sl7ldgz"
				},
				"parentName": "GridContainer_sda7e0w",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DfcDepositPayDate",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.PDS_DfcDepositPayDate_ljd5q4b",
					"labelPosition": "auto",
					"control": "$PDS_DfcDepositPayDate_ljd5q4b",
					"pickerType": "date"
				},
				"parentName": "GridContainer_sda7e0w",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetail_spuzx2d",
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
					"items": "$GridDetail_spuzx2d",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_spuzx2dDS_Id",
					"columns": [
						{
							"id": "41ff2910-e706-a165-2dc2-28d5b0622196",
							"code": "GridDetail_spuzx2dDS_DfcCollateralId",
							"caption": "#ResourceString(GridDetail_spuzx2dDS_DfcCollateralId)#",
							"dataValueType": 10
						},
						{
							"id": "797514dc-b7f8-ce92-f628-cdc77750412f",
							"code": "GridDetail_spuzx2dDS_DfcCustomerId",
							"caption": "#ResourceString(GridDetail_spuzx2dDS_DfcCustomerId)#",
							"dataValueType": 10
						},
						{
							"id": "54b0bdaa-70c5-7283-0c41-dafc8c1d971e",
							"code": "GridDetail_spuzx2dDS_DfcOffer",
							"caption": "#ResourceString(GridDetail_spuzx2dDS_DfcOffer)#",
							"dataValueType": 31
						},
						{
							"id": "e61bf63b-652b-73fd-086f-f414e1650f8c",
							"code": "GridDetail_spuzx2dDS_DfcPurchaseMethod",
							"caption": "#ResourceString(GridDetail_spuzx2dDS_DfcPurchaseMethod)#",
							"dataValueType": 10
						},
						{
							"id": "c08d30fe-85ab-5ccc-3bae-57d1b7707eeb",
							"code": "GridDetail_spuzx2dDS_DfcBestOffer",
							"caption": "#ResourceString(GridDetail_spuzx2dDS_DfcBestOffer)#",
							"dataValueType": 12
						}
					],
					"placeholder": false
				},
				"parentName": "GridContainer_sda7e0w",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "TabContainer_Payments",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_60ju3uw_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "GridContainer_lksad8k",
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
				"parentName": "TabContainer_Payments",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_Payments",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.DataGrid",
					"features": {
						"rows": {
							"selection": false
						},
						"editable": {
							"enable": false,
							"itemsCreation": false
						}
					},
					"items": "$DataGrid_13xfjxc",
					"activeRow": "$DataGrid_13xfjxc_ActiveRow",
					"selectionState": "$DataGrid_13xfjxc_SelectionState",
					"_selectionOptions": {
						"attribute": "DataGrid_13xfjxc_SelectionState"
					},
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "DataGrid_13xfjxcDS_Id",
					"columns": [
						{
							"id": "0fcb2b6d-17f4-bff1-6d07-edab58eb0dc9",
							"code": "DataGrid_13xfjxcDS_DfcPaymentNumber",
							"caption": "#ResourceString(DataGrid_13xfjxcDS_DfcPaymentNumber)#",
							"dataValueType": 28
						},
						{
							"id": "7f54dc8a-dde2-45ba-13a1-b83975754741",
							"code": "DataGrid_13xfjxcDS_DfcDate",
							"caption": "#ResourceString(DataGrid_13xfjxcDS_DfcDate)#",
							"dataValueType": 8
						},
						{
							"id": "be549c4d-ca91-c78d-3abc-25780e8cd0ec",
							"code": "DataGrid_13xfjxcDS_DfcAmount",
							"caption": "#ResourceString(DataGrid_13xfjxcDS_DfcAmount)#",
							"dataValueType": 6
						},
						{
							"id": "5bbc9765-5cce-55a3-2b90-d6616032303b",
							"code": "DataGrid_13xfjxcDS_DfcCurrentPayment",
							"caption": "#ResourceString(DataGrid_13xfjxcDS_DfcCurrentPayment)#",
							"dataValueType": 10
						},
						{
							"id": "3414e65f-4b34-1b18-16fa-131605918bd9",
							"code": "DataGrid_13xfjxcDS_DfcPaymentType",
							"caption": "#ResourceString(DataGrid_13xfjxcDS_DfcPaymentType)#",
							"dataValueType": 10
						},
						{
							"id": "fdda425f-8411-82c9-3e6a-ae9088ae3aeb",
							"code": "DataGrid_13xfjxcDS_DfcPeriod",
							"caption": "#ResourceString(DataGrid_13xfjxcDS_DfcPeriod)#",
							"dataValueType": 10
						}
					],
					"placeholder": false,
					"bulkActions": []
				},
				"parentName": "GridContainer_lksad8k",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_13xfjxc_AddTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Add tag",
					"icon": "tag-icon",
					"clicked": {
						"request": "crt.AddTagsInRecordsRequest",
						"params": {
							"dataSourceName": "DataGrid_13xfjxcDS",
							"filters": "$DataGrid_13xfjxc | crt.ToCollectionFilters : 'DataGrid_13xfjxc' : $DataGrid_13xfjxc_SelectionState | crt.SkipIfSelectionEmpty : $DataGrid_13xfjxc_SelectionState"
						}
					},
					"items": []
				},
				"parentName": "DataGrid_Payments",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_13xfjxc_RemoveTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Remove tag",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.RemoveTagsInRecordsRequest",
						"params": {
							"dataSourceName": "DataGrid_13xfjxcDS",
							"filters": "$DataGrid_13xfjxc | crt.ToCollectionFilters : 'DataGrid_13xfjxc' : $DataGrid_13xfjxc_SelectionState | crt.SkipIfSelectionEmpty : $DataGrid_13xfjxc_SelectionState"
						}
					}
				},
				"parentName": "DataGrid_13xfjxc_AddTagsBulkAction",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_13xfjxc_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Export to Excel",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "DataGrid_13xfjxc",
							"filters": "$DataGrid_13xfjxc | crt.ToCollectionFilters : 'DataGrid_13xfjxc' : $DataGrid_13xfjxc_SelectionState | crt.SkipIfSelectionEmpty : $DataGrid_13xfjxc_SelectionState"
						}
					}
				},
				"parentName": "DataGrid_Payments",
				"propertyName": "bulkActions",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "DataGrid_13xfjxc_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Delete",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "DataGrid_13xfjxcDS",
							"filters": "$DataGrid_13xfjxc | crt.ToCollectionFilters : 'DataGrid_13xfjxc' : $DataGrid_13xfjxc_SelectionState | crt.SkipIfSelectionEmpty : $DataGrid_13xfjxc_SelectionState"
						}
					}
				},
				"parentName": "DataGrid_Payments",
				"propertyName": "bulkActions",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "TabContainer_Arrears",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_skrt05p_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "GridContainer_xd5ahxn",
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
				"parentName": "TabContainer_Arrears",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_Arrears",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.DataGrid",
					"features": {
						"rows": {
							"selection": false
						},
						"editable": {
							"enable": false,
							"itemsCreation": false
						}
					},
					"items": "$DataGrid_okh4yv4",
					"activeRow": "$DataGrid_okh4yv4_ActiveRow",
					"selectionState": "$DataGrid_okh4yv4_SelectionState",
					"_selectionOptions": {
						"attribute": "DataGrid_okh4yv4_SelectionState"
					},
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "DataGrid_okh4yv4DS_Id",
					"columns": [
						{
							"id": "8927c569-8295-370d-d6ef-4c0bb889eafe",
							"code": "DataGrid_okh4yv4DS_DfcArrearNumber",
							"caption": "#ResourceString(DataGrid_okh4yv4DS_DfcArrearNumber)#",
							"dataValueType": 27,
							"width": 174
						},
						{
							"id": "0eb28568-4e2e-1b8c-9f75-22b724ae42fa",
							"code": "DataGrid_okh4yv4DS_DfcArrearDate",
							"caption": "#ResourceString(DataGrid_okh4yv4DS_DfcArrearDate)#",
							"dataValueType": 8,
							"width": 132
						},
						{
							"id": "e7f26c55-d73c-cac4-1776-20ca4eda3a39",
							"code": "DataGrid_okh4yv4DS_DfcArrearAmount",
							"caption": "#ResourceString(DataGrid_okh4yv4DS_DfcArrearAmount)#",
							"dataValueType": 6
						},
						{
							"id": "639a5d9b-7921-d40e-7fb9-4d5d6c2c8f72",
							"code": "DataGrid_okh4yv4DS_DfcAmortizationPeriod",
							"caption": "#ResourceString(DataGrid_okh4yv4DS_DfcAmortizationPeriod)#",
							"dataValueType": 10,
							"width": 132
						},
						{
							"id": "52eee675-9188-7661-5fa6-511a105dca21",
							"code": "DataGrid_okh4yv4DS_CreatedOn",
							"caption": "#ResourceString(DataGrid_okh4yv4DS_CreatedOn)#",
							"dataValueType": 7
						},
						{
							"id": "c9235b48-b69e-25f2-a8e7-8144aa90162e",
							"code": "DataGrid_okh4yv4DS_CreatedBy",
							"caption": "#ResourceString(DataGrid_okh4yv4DS_CreatedBy)#",
							"dataValueType": 10
						},
						{
							"id": "f9d03bde-7538-0aad-66cc-566dd447f1ae",
							"code": "DataGrid_okh4yv4DS_ModifiedBy",
							"caption": "#ResourceString(DataGrid_okh4yv4DS_ModifiedBy)#",
							"dataValueType": 10
						},
						{
							"id": "c918dcaa-3f3d-9b7b-5c3b-3a5d0cc19447",
							"code": "DataGrid_okh4yv4DS_ModifiedOn",
							"caption": "#ResourceString(DataGrid_okh4yv4DS_ModifiedOn)#",
							"dataValueType": 7
						}
					],
					"placeholder": false,
					"bulkActions": []
				},
				"parentName": "GridContainer_xd5ahxn",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_okh4yv4_AddTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Add tag",
					"icon": "tag-icon",
					"clicked": {
						"request": "crt.AddTagsInRecordsRequest",
						"params": {
							"dataSourceName": "DataGrid_okh4yv4DS",
							"filters": "$DataGrid_okh4yv4 | crt.ToCollectionFilters : 'DataGrid_okh4yv4' : $DataGrid_okh4yv4_SelectionState | crt.SkipIfSelectionEmpty : $DataGrid_okh4yv4_SelectionState"
						}
					},
					"items": []
				},
				"parentName": "DataGrid_Arrears",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_okh4yv4_RemoveTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Remove tag",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.RemoveTagsInRecordsRequest",
						"params": {
							"dataSourceName": "DataGrid_okh4yv4DS",
							"filters": "$DataGrid_okh4yv4 | crt.ToCollectionFilters : 'DataGrid_okh4yv4' : $DataGrid_okh4yv4_SelectionState | crt.SkipIfSelectionEmpty : $DataGrid_okh4yv4_SelectionState"
						}
					}
				},
				"parentName": "DataGrid_okh4yv4_AddTagsBulkAction",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_okh4yv4_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Export to Excel",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "DataGrid_okh4yv4",
							"filters": "$DataGrid_okh4yv4 | crt.ToCollectionFilters : 'DataGrid_okh4yv4' : $DataGrid_okh4yv4_SelectionState | crt.SkipIfSelectionEmpty : $DataGrid_okh4yv4_SelectionState"
						}
					}
				},
				"parentName": "DataGrid_Arrears",
				"propertyName": "bulkActions",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "DataGrid_okh4yv4_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Delete",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "DataGrid_okh4yv4DS",
							"filters": "$DataGrid_okh4yv4 | crt.ToCollectionFilters : 'DataGrid_okh4yv4' : $DataGrid_okh4yv4_SelectionState | crt.SkipIfSelectionEmpty : $DataGrid_okh4yv4_SelectionState"
						}
					}
				},
				"parentName": "DataGrid_Arrears",
				"propertyName": "bulkActions",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "TabContainer_ni7dz6e",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_ni7dz6e_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_lmg1hc0",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_lmg1hc0_title)#",
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
				"parentName": "TabContainer_ni7dz6e",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_t00xune",
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
				"parentName": "ExpansionPanel_lmg1hc0",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_2xjp2c9",
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
				"parentName": "GridContainer_t00xune",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_egb2t4t",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_egb2t4t_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "DfcVisits"
						}
					}
				},
				"parentName": "FlexContainer_2xjp2c9",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_podm96p",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_podm96p_caption)#",
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
							"dataSourceName": "GridDetail_ugt1ez7DS"
						}
					}
				},
				"parentName": "FlexContainer_2xjp2c9",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_1qmm4nn",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_1qmm4nn_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_2xjp2c9",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_j25fft0",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_j25fft0_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_ugt1ez7"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_1qmm4nn",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_9pend1g",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_9pend1g_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "DfcVisits"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_1qmm4nn",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_54ntzbi",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_54ntzbi_placeholder)#",
					"iconOnly": true,
					"targetAttributes": [
						"GridDetail_ugt1ez7"
					]
				},
				"parentName": "FlexContainer_2xjp2c9",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_ylwt734",
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
				"parentName": "ExpansionPanel_lmg1hc0",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_ugt1ez7",
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
						},
						"editable": {
							"enable": false,
							"itemsCreation": false
						}
					},
					"items": "$GridDetail_ugt1ez7",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_ugt1ez7DS_Id",
					"columns": [
						{
							"id": "4fcfba7e-683e-e660-ff2c-df8ebcf9a043",
							"code": "GridDetail_ugt1ez7DS_DfcVisitSubject",
							"caption": "#ResourceString(GridDetail_ugt1ez7DS_DfcVisitSubject)#",
							"dataValueType": 27
						},
						{
							"id": "bbd475bd-ffe9-8b9c-049c-5469ad6ef382",
							"code": "GridDetail_ugt1ez7DS_DfcStart",
							"caption": "#ResourceString(GridDetail_ugt1ez7DS_DfcStart)#",
							"dataValueType": 7
						},
						{
							"id": "c6c1a864-45e0-1d88-75b8-2f5fb13a91a2",
							"code": "GridDetail_ugt1ez7DS_DfcDue",
							"caption": "#ResourceString(GridDetail_ugt1ez7DS_DfcDue)#",
							"dataValueType": 8
						},
						{
							"id": "4d5b00bc-75c9-9303-602e-3925d446dd91",
							"code": "GridDetail_ugt1ez7DS_DfcVisitStatus",
							"caption": "#ResourceString(GridDetail_ugt1ez7DS_DfcVisitStatus)#",
							"dataValueType": 10
						}
					],
					"placeholder": false
				},
				"parentName": "GridContainer_ylwt734",
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
					"DfcLoanNo": {
						"modelConfig": {
							"path": "PDS.Id"
						}
					},
					"PDS_DfcAccount_iwpq71s": {
						"modelConfig": {
							"path": "PDS.DfcAccount"
						}
					},
					"PDS_DfcContact_nh3i50v": {
						"modelConfig": {
							"path": "PDS.DfcContact"
						}
					},
					"PDS_DfcLoanAmt_90436eq": {
						"modelConfig": {
							"path": "PDS.DfcLoanAmt"
						}
					},
					"PDS_DfcInterestRate_gjvhcim": {
						"modelConfig": {
							"path": "PDS.DfcInterestRate"
						}
					},
					"PDS_DfcLoanStatus_e11tix3": {
						"modelConfig": {
							"path": "PDS.DfcLoanStatus"
						}
					},
					"GridDetail_l0mxalo": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_l0mxaloDS"
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_l0mxaloDS_DfcColValue": {
									"modelConfig": {
										"path": "GridDetail_l0mxaloDS.DfcColValue"
									}
								},
								"GridDetail_l0mxaloDS_DfcDateEntered": {
									"modelConfig": {
										"path": "GridDetail_l0mxaloDS.DfcDateEntered"
									}
								},
								"GridDetail_l0mxaloDS_DfcDescription": {
									"modelConfig": {
										"path": "GridDetail_l0mxaloDS.DfcDescription"
									}
								},
								"GridDetail_l0mxaloDS_DfcInAuction": {
									"modelConfig": {
										"path": "GridDetail_l0mxaloDS.DfcInAuction"
									}
								},
								"GridDetail_l0mxaloDS_CreatedOn": {
									"modelConfig": {
										"path": "GridDetail_l0mxaloDS.CreatedOn"
									}
								},
								"GridDetail_l0mxaloDS_Id": {
									"modelConfig": {
										"path": "GridDetail_l0mxaloDS.Id"
									}
								}
							}
						}
					},
					"PDS_DfcLoanNo_k34mwag": {
						"modelConfig": {
							"path": "PDS.DfcLoanNo"
						}
					},
					"GridDetail_spuzx2d": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_spuzx2dDS"
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_spuzx2dDS_DfcCollateralId": {
									"modelConfig": {
										"path": "GridDetail_spuzx2dDS.DfcCollateralId"
									}
								},
								"GridDetail_spuzx2dDS_DfcCustomerId": {
									"modelConfig": {
										"path": "GridDetail_spuzx2dDS.DfcCustomerId"
									}
								},
								"GridDetail_spuzx2dDS_DfcOffer": {
									"modelConfig": {
										"path": "GridDetail_spuzx2dDS.DfcOffer"
									}
								},
								"GridDetail_spuzx2dDS_DfcPurchaseMethod": {
									"modelConfig": {
										"path": "GridDetail_spuzx2dDS.DfcPurchaseMethod"
									}
								},
								"GridDetail_spuzx2dDS_DfcBestOffer": {
									"modelConfig": {
										"path": "GridDetail_spuzx2dDS.DfcBestOffer"
									}
								},
								"GridDetail_spuzx2dDS_Id": {
									"modelConfig": {
										"path": "GridDetail_spuzx2dDS.Id"
									}
								}
							}
						}
					},
					"PDS_DfcReservePrice_sl7ldgz": {
						"modelConfig": {
							"path": "PDS.DfcReservePrice"
						}
					},
					"PDS_DfcDepositPayDate_ljd5q4b": {
						"modelConfig": {
							"path": "PDS.DfcDepositPayDate"
						}
					},
					"PDS_DfcLoanApp_nlbj80g": {
						"modelConfig": {
							"path": "PDS.DfcLoanApp"
						}
					},
					"PDS_DfcProduct_33a0ucc": {
						"modelConfig": {
							"path": "PDS.DfcProduct"
						}
					},
					"DataGrid_36pclew": {
						"isCollection": true,
						"modelConfig": {
							"path": "DataGrid_36pclewDS",
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "FillingDate"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"DataGrid_36pclewDS_Number": {
									"modelConfig": {
										"path": "DataGrid_36pclewDS.Number"
									}
								},
								"DataGrid_36pclewDS_FillingDate": {
									"modelConfig": {
										"path": "DataGrid_36pclewDS.FillingDate"
									}
								},
								"DataGrid_36pclewDS_Product": {
									"modelConfig": {
										"path": "DataGrid_36pclewDS.Product"
									}
								},
								"DataGrid_36pclewDS_ProductType": {
									"modelConfig": {
										"path": "DataGrid_36pclewDS.ProductType"
									}
								},
								"DataGrid_36pclewDS_OpportunityCondition": {
									"modelConfig": {
										"path": "DataGrid_36pclewDS.OpportunityCondition"
									}
								},
								"DataGrid_36pclewDS_DfcReqAmt": {
									"modelConfig": {
										"path": "DataGrid_36pclewDS.DfcReqAmt"
									}
								},
								"DataGrid_36pclewDS_DfcInterestRate": {
									"modelConfig": {
										"path": "DataGrid_36pclewDS.DfcInterestRate"
									}
								},
								"DataGrid_36pclewDS_DfcTerm": {
									"modelConfig": {
										"path": "DataGrid_36pclewDS.DfcTerm"
									}
								},
								"DataGrid_36pclewDS_DfcPurpose": {
									"modelConfig": {
										"path": "DataGrid_36pclewDS.DfcPurpose"
									}
								},
								"DataGrid_36pclewDS_DfcSector": {
									"modelConfig": {
										"path": "DataGrid_36pclewDS.DfcSector"
									}
								},
								"DataGrid_36pclewDS_DfcSubSector": {
									"modelConfig": {
										"path": "DataGrid_36pclewDS.DfcSubSector"
									}
								},
								"DataGrid_36pclewDS_Division": {
									"modelConfig": {
										"path": "DataGrid_36pclewDS.Division"
									}
								},
								"DataGrid_36pclewDS_DecisionDate": {
									"modelConfig": {
										"path": "DataGrid_36pclewDS.DecisionDate"
									}
								},
								"DataGrid_36pclewDS_Approver": {
									"modelConfig": {
										"path": "DataGrid_36pclewDS.Approver"
									}
								},
								"DataGrid_36pclewDS_CreatedBy": {
									"modelConfig": {
										"path": "DataGrid_36pclewDS.CreatedBy"
									}
								},
								"DataGrid_36pclewDS_CreatedOn": {
									"modelConfig": {
										"path": "DataGrid_36pclewDS.CreatedOn"
									}
								},
								"DataGrid_36pclewDS_Id": {
									"modelConfig": {
										"path": "DataGrid_36pclewDS.Id"
									}
								}
							}
						}
					},
					"PDS_DfcEscrowBal_m40gr6s": {
						"modelConfig": {
							"path": "PDS.DfcEscrowBal"
						}
					},
					"GridDetail_pxv0h5a": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_pxv0h5aDS"
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_pxv0h5aDS_DfcDisbNo": {
									"modelConfig": {
										"path": "GridDetail_pxv0h5aDS.DfcDisbNo"
									}
								},
								"GridDetail_pxv0h5aDS_DfcDisbDate": {
									"modelConfig": {
										"path": "GridDetail_pxv0h5aDS.DfcDisbDate"
									}
								},
								"GridDetail_pxv0h5aDS_DfcAmount": {
									"modelConfig": {
										"path": "GridDetail_pxv0h5aDS.DfcAmount"
									}
								},
								"GridDetail_pxv0h5aDS_CreatedBy": {
									"modelConfig": {
										"path": "GridDetail_pxv0h5aDS.CreatedBy"
									}
								},
								"GridDetail_pxv0h5aDS_CreatedOn": {
									"modelConfig": {
										"path": "GridDetail_pxv0h5aDS.CreatedOn"
									}
								},
								"GridDetail_pxv0h5aDS_ModifiedBy": {
									"modelConfig": {
										"path": "GridDetail_pxv0h5aDS.ModifiedBy"
									}
								},
								"GridDetail_pxv0h5aDS_ModifiedOn": {
									"modelConfig": {
										"path": "GridDetail_pxv0h5aDS.ModifiedOn"
									}
								},
								"GridDetail_pxv0h5aDS_Id": {
									"modelConfig": {
										"path": "GridDetail_pxv0h5aDS.Id"
									}
								}
							}
						}
					},
					"PDS_DfcLoanAmOther_thkyblw": {
						"modelConfig": {
							"path": "PDS.DfcLoanAmOther"
						}
					},
					"PDS_DfcInterestRate_vp6vbii": {
						"modelConfig": {
							"path": "PDS.DfcInterestRate"
						}
					},
					"PDS_DfcPpalBal_yywztd5": {
						"modelConfig": {
							"path": "PDS.DfcPpalBal"
						}
					},
					"PDS_DfcTotalBal_0upweyr": {
						"modelConfig": {
							"path": "PDS.DfcTotalBal"
						}
					},
					"PDS_DfcLastPymtDate_inz4ymr": {
						"modelConfig": {
							"path": "PDS.DfcLastPymtDate"
						}
					},
					"PDS_DfcLastPymtDate_722oqa6": {
						"modelConfig": {
							"path": "PDS.DfcLastPymtDate"
						}
					},
					"PDS_DfcLoanApprovalDate_n5u3skt": {
						"modelConfig": {
							"path": "PDS.DfcLoanApprovalDate"
						}
					},
					"PDS_Dfc1stDisbursementDate_7el28pt": {
						"modelConfig": {
							"path": "PDS.Dfc1stDisbursementDate"
						}
					},
					"PDS_DfcRepaymentStartDate_c66966r": {
						"modelConfig": {
							"path": "PDS.DfcRepaymentStartDate"
						}
					},
					"PDS_DfcRepaymentEndDate_x77mdli": {
						"modelConfig": {
							"path": "PDS.DfcRepaymentEndDate"
						}
					},
					"PDS_DfcWriteoffDate_rxeva8n": {
						"modelConfig": {
							"path": "PDS.DfcWriteoffDate"
						}
					},
					"PDS_ModifiedOn_hpy4x1p": {
						"modelConfig": {
							"path": "PDS.ModifiedOn"
						}
					},
					"PDS_DfcLoanLastInterest_6pysaq3": {
						"modelConfig": {
							"path": "PDS.DfcLoanLastInterest"
						}
					},
					"PDS_DfcLastNoticeDate_0nzt57a": {
						"modelConfig": {
							"path": "PDS.DfcLastNoticeDate"
						}
					},
					"PDS_DfcLoanAmt_n096vdg": {
						"modelConfig": {
							"path": "PDS.DfcLoanAmt"
						}
					},
					"PDS_DfcLoanAmt_b34ugkh": {
						"modelConfig": {
							"path": "PDS.DfcLoanAmt"
						}
					},
					"PDS_DfcLoanAmDec_av69r9b": {
						"modelConfig": {
							"path": "PDS.DfcLoanAmDec"
						}
					},
					"PDS_DfcLoanAmt_951pbil": {
						"modelConfig": {
							"path": "PDS.DfcLoanAmt"
						}
					},
					"PDS_DfcLoanAmt_sbfy108": {
						"modelConfig": {
							"path": "PDS.DfcLoanAmt"
						}
					},
					"PDS_DfcLastPaymentAm_tppzcin": {
						"modelConfig": {
							"path": "PDS.DfcLastPaymentAm"
						}
					},
					"PDS_DfcLastPaymentAm_hf3gkam": {
						"modelConfig": {
							"path": "PDS.DfcLastPaymentAm"
						}
					},
					"PDS_DfcLoanOutstandingPrincipal_t888c0b": {
						"modelConfig": {
							"path": "PDS.DfcLoanOutstandingPrincipal"
						}
					},
					"PDS_DfcLastNoticeLoaninfo_6qbcgqq": {
						"modelConfig": {
							"path": "PDS.DfcLastNoticeLoaninfo"
						}
					},
					"PDS_DfcLoanTimesRescheduled_ne2bybp": {
						"modelConfig": {
							"path": "PDS.DfcLoanTimesRescheduled"
						}
					},
					"PDS_DfcEscrowBal_rtopzkg": {
						"modelConfig": {
							"path": "PDS.DfcEscrowBal"
						}
					},
					"DataGrid_yejkzi5": {
						"isCollection": true,
						"modelConfig": {
							"path": "DataGrid_yejkzi5DS",
							"filterAttributes": []
						},
						"viewModelConfig": {
							"attributes": {
								"DataGrid_yejkzi5DS_DfcLoanNo": {
									"modelConfig": {
										"path": "DataGrid_yejkzi5DS.DfcLoanNo"
									}
								},
								"DataGrid_yejkzi5DS_Id": {
									"modelConfig": {
										"path": "DataGrid_yejkzi5DS.Id"
									}
								}
							}
						}
					},
					"DataGrid_yejkzi5_PredefinedFilter": {
						"value": null
					},
					"DataGrid_uy0c8tc": {
						"isCollection": true,
						"modelConfig": {
							"path": "DataGrid_uy0c8tcDS",
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "DfcVisitSubject"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"DataGrid_uy0c8tcDS_DfcVisitSubject": {
									"modelConfig": {
										"path": "DataGrid_uy0c8tcDS.DfcVisitSubject"
									}
								},
								"DataGrid_uy0c8tcDS_DfcStart": {
									"modelConfig": {
										"path": "DataGrid_uy0c8tcDS.DfcStart"
									}
								},
								"DataGrid_uy0c8tcDS_DfcDue": {
									"modelConfig": {
										"path": "DataGrid_uy0c8tcDS.DfcDue"
									}
								},
								"DataGrid_uy0c8tcDS_DfcVisitStatus": {
									"modelConfig": {
										"path": "DataGrid_uy0c8tcDS.DfcVisitStatus"
									}
								},
								"DataGrid_uy0c8tcDS_Id": {
									"modelConfig": {
										"path": "DataGrid_uy0c8tcDS.Id"
									}
								}
							}
						}
					},
					"GridDetail_ugt1ez7": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_ugt1ez7DS",
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "DfcVisitSubject"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_ugt1ez7DS_DfcVisitSubject": {
									"modelConfig": {
										"path": "GridDetail_ugt1ez7DS.DfcVisitSubject"
									}
								},
								"GridDetail_ugt1ez7DS_DfcStart": {
									"modelConfig": {
										"path": "GridDetail_ugt1ez7DS.DfcStart"
									}
								},
								"GridDetail_ugt1ez7DS_DfcDue": {
									"modelConfig": {
										"path": "GridDetail_ugt1ez7DS.DfcDue"
									}
								},
								"GridDetail_ugt1ez7DS_DfcVisitStatus": {
									"modelConfig": {
										"path": "GridDetail_ugt1ez7DS.DfcVisitStatus"
									}
								},
								"GridDetail_ugt1ez7DS_Id": {
									"modelConfig": {
										"path": "GridDetail_ugt1ez7DS.Id"
									}
								}
							}
						}
					},
					"PDS_DfcInterestBal_yn9y8kb": {
						"modelConfig": {
							"path": "PDS.DfcInterestBal"
						}
					},
					"PDS_DfcOtherBal_8vyzu5w": {
						"modelConfig": {
							"path": "PDS.DfcOtherBal"
						}
					},
					"DataGrid_e53ftud": {
						"isCollection": true,
						"modelConfig": {
							"path": "DataGrid_e53ftudDS"
						},
						"viewModelConfig": {
							"attributes": {
								"DataGrid_e53ftudDS_DfcAmortizationNumber": {
									"modelConfig": {
										"path": "DataGrid_e53ftudDS.DfcAmortizationNumber"
									}
								},
								"DataGrid_e53ftudDS_DfcAmortizationBeginningBalance": {
									"modelConfig": {
										"path": "DataGrid_e53ftudDS.DfcAmortizationBeginningBalance"
									}
								},
								"DataGrid_e53ftudDS_DfcAmortizationEndingBalance": {
									"modelConfig": {
										"path": "DataGrid_e53ftudDS.DfcAmortizationEndingBalance"
									}
								},
								"DataGrid_e53ftudDS_DfcAmortizationAmount": {
									"modelConfig": {
										"path": "DataGrid_e53ftudDS.DfcAmortizationAmount"
									}
								},
								"DataGrid_e53ftudDS_CreatedOn": {
									"modelConfig": {
										"path": "DataGrid_e53ftudDS.CreatedOn"
									}
								},
								"DataGrid_e53ftudDS_DfcPaid": {
									"modelConfig": {
										"path": "DataGrid_e53ftudDS.DfcPaid"
									}
								},
								"DataGrid_e53ftudDS_Id": {
									"modelConfig": {
										"path": "DataGrid_e53ftudDS.Id"
									}
								}
							}
						}
					},
					"DataGrid_13xfjxc": {
						"isCollection": true,
						"modelConfig": {
							"path": "DataGrid_13xfjxcDS"
						},
						"viewModelConfig": {
							"attributes": {
								"DataGrid_13xfjxcDS_DfcPaymentNumber": {
									"modelConfig": {
										"path": "DataGrid_13xfjxcDS.DfcPaymentNumber"
									}
								},
								"DataGrid_13xfjxcDS_DfcDate": {
									"modelConfig": {
										"path": "DataGrid_13xfjxcDS.DfcDate"
									}
								},
								"DataGrid_13xfjxcDS_DfcAmount": {
									"modelConfig": {
										"path": "DataGrid_13xfjxcDS.DfcAmount"
									}
								},
								"DataGrid_13xfjxcDS_DfcCurrentPayment": {
									"modelConfig": {
										"path": "DataGrid_13xfjxcDS.DfcCurrentPayment"
									}
								},
								"DataGrid_13xfjxcDS_DfcPaymentType": {
									"modelConfig": {
										"path": "DataGrid_13xfjxcDS.DfcPaymentType"
									}
								},
								"DataGrid_13xfjxcDS_DfcPeriod": {
									"modelConfig": {
										"path": "DataGrid_13xfjxcDS.DfcPeriod"
									}
								},
								"DataGrid_13xfjxcDS_Id": {
									"modelConfig": {
										"path": "DataGrid_13xfjxcDS.Id"
									}
								}
							}
						}
					},
					"DataGrid_okh4yv4": {
						"isCollection": true,
						"modelConfig": {
							"path": "DataGrid_okh4yv4DS"
						},
						"viewModelConfig": {
							"attributes": {
								"DataGrid_okh4yv4DS_DfcArrearNumber": {
									"modelConfig": {
										"path": "DataGrid_okh4yv4DS.DfcArrearNumber"
									}
								},
								"DataGrid_okh4yv4DS_DfcArrearDate": {
									"modelConfig": {
										"path": "DataGrid_okh4yv4DS.DfcArrearDate"
									}
								},
								"DataGrid_okh4yv4DS_DfcArrearAmount": {
									"modelConfig": {
										"path": "DataGrid_okh4yv4DS.DfcArrearAmount"
									}
								},
								"DataGrid_okh4yv4DS_DfcAmortizationPeriod": {
									"modelConfig": {
										"path": "DataGrid_okh4yv4DS.DfcAmortizationPeriod"
									}
								},
								"DataGrid_okh4yv4DS_CreatedOn": {
									"modelConfig": {
										"path": "DataGrid_okh4yv4DS.CreatedOn"
									}
								},
								"DataGrid_okh4yv4DS_CreatedBy": {
									"modelConfig": {
										"path": "DataGrid_okh4yv4DS.CreatedBy"
									}
								},
								"DataGrid_okh4yv4DS_ModifiedBy": {
									"modelConfig": {
										"path": "DataGrid_okh4yv4DS.ModifiedBy"
									}
								},
								"DataGrid_okh4yv4DS_ModifiedOn": {
									"modelConfig": {
										"path": "DataGrid_okh4yv4DS.ModifiedOn"
									}
								},
								"DataGrid_okh4yv4DS_Id": {
									"modelConfig": {
										"path": "DataGrid_okh4yv4DS.Id"
									}
								}
							}
						}
					},
					"PDS_DfcTerm_8g4shgy": {
						"modelConfig": {
							"path": "PDS.DfcTerm"
						}
					},
					"PDS_DfcLoanAppDfcLoanType": {
						"modelConfig": {
							"path": "PDS.DfcLoanAppDfcLoanType"
						}
					},
					"PDS_DfcLoanAppDfcInterestType": {
						"modelConfig": {
							"path": "PDS.DfcLoanAppDfcInterestType"
						}
					},
					"PDS_DfcLoanAppDfcIntCalcMethod": {
						"modelConfig": {
							"path": "PDS.DfcLoanAppDfcIntCalcMethod"
						}
					},
					"PDS_DfcLoanAppDfcGracePeriodIntMethod": {
						"modelConfig": {
							"path": "PDS.DfcLoanAppDfcGracePeriodIntMethod"
						}
					},
					"PDS_DfcLoanApp_onmr9nf": {
						"modelConfig": {
							"path": "PDS.DfcLoanApp"
						}
					},
					"PDS_DfcLoanAppDfcLatePymtPenaltyFeeCalc": {
						"modelConfig": {
							"path": "PDS.DfcLoanAppDfcLatePymtPenaltyFeeCalc"
						}
					},
					"PDS_DfcCurrency_3aedo6u": {
						"modelConfig": {
							"path": "PDS.DfcCurrency"
						}
					},
					"PDS_DfcRepaymentCycle_5k1ahuo": {
						"modelConfig": {
							"path": "PDS.DfcRepaymentCycle"
						}
					},
					"PDS_DfcLoanAppDfcPaymentFrequency": {
						"modelConfig": {
							"path": "PDS.DfcLoanAppDfcPaymentFrequency"
						}
					},
					"PDS_DfcOutstandingPrincipal_kvrpiqy": {
						"modelConfig": {
							"path": "PDS.DfcOutstandingPrincipal"
						}
					},
					"PDS_DfcTotalToPaySim_bvtovwh": {
						"modelConfig": {
							"path": "PDS.DfcTotalToPaySim"
						}
					},
					"PDS_DfcInstallmentSim_2d4nkpx": {
						"modelConfig": {
							"path": "PDS.DfcInstallmentSim"
						}
					},
					"PDS_DfcInterestRateSim_gw96i04": {
						"modelConfig": {
							"path": "PDS.DfcInterestRateSim"
						}
					},
					"PDS_DfcAssosExpSim_yq8zzy1": {
						"modelConfig": {
							"path": "PDS.DfcAssosExpSim"
						}
					},
					"PDS_DfcPeriodSim_v4ten77": {
						"modelConfig": {
							"path": "PDS.DfcPeriodSim"
						}
					},
					"GridDetail_ohtfy90": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_ohtfy90DS",
							"filterAttributes": []
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_ohtfy90DS_DfcAmortizationNumber": {
									"modelConfig": {
										"path": "GridDetail_ohtfy90DS.DfcAmortizationNumber"
									}
								},
								"GridDetail_ohtfy90DS_DfcPeriodNumber": {
									"modelConfig": {
										"path": "GridDetail_ohtfy90DS.DfcPeriodNumber"
									}
								},
								"GridDetail_ohtfy90DS_DfcAmortizationEndingBalance": {
									"modelConfig": {
										"path": "GridDetail_ohtfy90DS.DfcAmortizationEndingBalance"
									}
								},
								"GridDetail_ohtfy90DS_DfcAmortizationBeginningBalance": {
									"modelConfig": {
										"path": "GridDetail_ohtfy90DS.DfcAmortizationBeginningBalance"
									}
								},
								"GridDetail_ohtfy90DS_DfcCurrentDue": {
									"modelConfig": {
										"path": "GridDetail_ohtfy90DS.DfcCurrentDue"
									}
								},
								"GridDetail_ohtfy90DS_DfcAmortizationInterest": {
									"modelConfig": {
										"path": "GridDetail_ohtfy90DS.DfcAmortizationInterest"
									}
								},
								"GridDetail_ohtfy90DS_DfcPaid": {
									"modelConfig": {
										"path": "GridDetail_ohtfy90DS.DfcPaid"
									}
								},
								"GridDetail_ohtfy90DS_DfcAmortizationPrincipal": {
									"modelConfig": {
										"path": "GridDetail_ohtfy90DS.DfcAmortizationPrincipal"
									}
								},
								"GridDetail_ohtfy90DS_DfcAmortizationDate": {
									"modelConfig": {
										"path": "GridDetail_ohtfy90DS.DfcAmortizationDate"
									}
								},
								"GridDetail_ohtfy90DS_DfcAmortizationAmount": {
									"modelConfig": {
										"path": "GridDetail_ohtfy90DS.DfcAmortizationAmount"
									}
								},
								"GridDetail_ohtfy90DS_Id": {
									"modelConfig": {
										"path": "GridDetail_ohtfy90DS.Id"
									}
								}
							}
						}
					},
					"PDS_DfcColumn57_239hyzt": {
						"modelConfig": {
							"path": "PDS.DfcPaymentFrecuencySim"
						}
					},
					"PDS_DfcLoanOutstandingPrincipal_nz3elrw": {
						"modelConfig": {
							"path": "PDS.DfcLoanOutstandingPrincipal"
						}
					},
					"GridDetail_ohtfy90_PredefinedFilter": {
						"value": {
							"items": {
								"5494d17c-7a79-4292-b512-b31059d0a3f4": {
									"filterType": 1,
									"comparisonType": 3,
									"isEnabled": true,
									"trimDateTimeParameterToDate": false,
									"leftExpression": {
										"expressionType": 0,
										"columnPath": "DfcAmortizationApplicationNumber.DfcRefinanced"
									},
									"isAggregative": false,
									"dataValueType": 12,
									"rightExpression": {
										"expressionType": 2,
										"parameter": {
											"dataValueType": 12,
											"value": true
										}
									}
								}
							},
							"logicalOperation": 0,
							"isEnabled": true,
							"filterType": 6,
							"rootSchemaName": "DfcLoanAmortizationTable"
						}
					},
					"PDS_DfcRefinanceEvaluacion_h2npuw9": {
						"modelConfig": {
							"path": "PDS.DfcRefinanceEvaluacion"
						}
					},
					"PDS_DfcLoanAppDfcLegacyLoan": {
						"modelConfig": {
							"path": "PDS.DfcLoanAppDfcLegacyLoan"
						}
					},
					"DataGrid_xoft756": {
						"isCollection": true,
						"modelConfig": {
							"path": "DataGrid_xoft756DS"
						},
						"viewModelConfig": {
							"attributes": {
								"DataGrid_xoft756DS_DfcAmortizationNumber": {
									"modelConfig": {
										"path": "DataGrid_xoft756DS.DfcAmortizationNumber"
									}
								},
								"DataGrid_xoft756DS_Id": {
									"modelConfig": {
										"path": "DataGrid_xoft756DS.Id"
									}
								}
							}
						}
					},
					"GridDetail_dourile": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_dourileDS",
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "DfcAmortizationAmount"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_dourileDS_DfcAmortizationNumber": {
									"modelConfig": {
										"path": "GridDetail_dourileDS.DfcAmortizationNumber"
									}
								},
								"GridDetail_dourileDS_DfcAmortizationAmount": {
									"modelConfig": {
										"path": "GridDetail_dourileDS.DfcAmortizationAmount"
									}
								},
								"GridDetail_dourileDS_DfcAmortizationBeginningBalance": {
									"modelConfig": {
										"path": "GridDetail_dourileDS.DfcAmortizationBeginningBalance"
									}
								},
								"GridDetail_dourileDS_DfcAmortizationEndingBalance": {
									"modelConfig": {
										"path": "GridDetail_dourileDS.DfcAmortizationEndingBalance"
									}
								},
								"GridDetail_dourileDS_DfcCurrentDue": {
									"modelConfig": {
										"path": "GridDetail_dourileDS.DfcCurrentDue"
									}
								},
								"GridDetail_dourileDS_DfcAmortizationInterest": {
									"modelConfig": {
										"path": "GridDetail_dourileDS.DfcAmortizationInterest"
									}
								},
								"GridDetail_dourileDS_Id": {
									"modelConfig": {
										"path": "GridDetail_dourileDS.Id"
									}
								}
							}
						}
					},
					"GridDetail_3roxzy7": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_3roxzy7DS"
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_3roxzy7DS_DfcEscrowItem": {
									"modelConfig": {
										"path": "GridDetail_3roxzy7DS.DfcEscrowItem"
									}
								},
								"GridDetail_3roxzy7DS_DfcAmount": {
									"modelConfig": {
										"path": "GridDetail_3roxzy7DS.DfcAmount"
									}
								},
								"GridDetail_3roxzy7DS_DfcStartDate": {
									"modelConfig": {
										"path": "GridDetail_3roxzy7DS.DfcStartDate"
									}
								},
								"GridDetail_3roxzy7DS_DfcEndDate": {
									"modelConfig": {
										"path": "GridDetail_3roxzy7DS.DfcEndDate"
									}
								},
								"GridDetail_3roxzy7DS_CreatedBy": {
									"modelConfig": {
										"path": "GridDetail_3roxzy7DS.CreatedBy"
									}
								},
								"GridDetail_3roxzy7DS_CreatedOn": {
									"modelConfig": {
										"path": "GridDetail_3roxzy7DS.CreatedOn"
									}
								},
								"GridDetail_3roxzy7DS_ModifiedBy": {
									"modelConfig": {
										"path": "GridDetail_3roxzy7DS.ModifiedBy"
									}
								},
								"GridDetail_3roxzy7DS_ModifiedOn": {
									"modelConfig": {
										"path": "GridDetail_3roxzy7DS.ModifiedOn"
									}
								},
								"GridDetail_3roxzy7DS_Id": {
									"modelConfig": {
										"path": "GridDetail_3roxzy7DS.Id"
									}
								}
							}
						}
					},
					"DfcLoanApp": {
						"modelConfig": {
							"path": "PDS.DfcLoanApp"
						}
					},
					"PDS_DfcTotalPeriodPayment_vqhu80o": {
						"modelConfig": {
							"path": "PDS.DfcTotalPeriodPayment"
						}
					},
					"PDS_DfcTotalEscrowPayment_2rsx3pn": {
						"modelConfig": {
							"path": "PDS.DfcTotalEscrowPayment"
						}
					},
					"GridDetail_614bp6y": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_614bp6yDS",
							"filterAttributes": [
								{
									"loadOnChange": true,
									"name": "GridDetail_614bp6y_PredefinedFilter"
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_614bp6yDS_BankAccountNumber": {
									"modelConfig": {
										"path": "GridDetail_614bp6yDS.BankAccountNumber"
									}
								},
								"GridDetail_614bp6yDS_Id": {
									"modelConfig": {
										"path": "GridDetail_614bp6yDS.Id"
									}
								}
							}
						}
					},
					"GridDetail_614bp6y_PredefinedFilter": {
						"value": null
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS",
					"dependencies": {
						"GridDetail_l0mxaloDS": [
							{
								"attributePath": "DfcLoanNo",
								"relationPath": "PDS.Id"
							}
						],
						"DataGrid_36pclewDS": [
							{
								"attributePath": "Id",
								"relationPath": "PDS.DfcLoanApp"
							}
						],
						"GridDetail_pxv0h5aDS": [
							{
								"attributePath": "DfcLoanNo",
								"relationPath": "PDS.Id"
							}
						],
						"GridDetail_ugt1ez7DS": [
							{
								"attributePath": "Id",
								"relationPath": "PDS.Id"
							}
						],
						"DataGrid_e53ftudDS": [
							{
								"attributePath": "DfcAmortizationLoan",
								"relationPath": "PDS.Id"
							}
						],
						"DataGrid_13xfjxcDS": [
							{
								"attributePath": "DfcLoan",
								"relationPath": "PDS.Id"
							}
						],
						"DataGrid_okh4yv4DS": [
							{
								"attributePath": "DfcArrearLoan",
								"relationPath": "PDS.Id"
							}
						],
						"GridDetail_dourileDS": [
							{
								"attributePath": "DfcLegacyLoan",
								"relationPath": "PDS.Id"
							}
						],
						"GridDetail_614bp6yDS": [
							{
								"attributePath": "DfcAssociatedLoan",
								"relationPath": "PDS.Id"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "DfcLoans",
							"attributes": {
								"DfcLoanAppDfcLoanType": {
									"path": "DfcLoanApp.DfcLoanType",
									"type": "ForwardReference"
								},
								"DfcLoanAppDfcInterestType": {
									"path": "DfcLoanApp.DfcInterestType",
									"type": "ForwardReference"
								},
								"DfcLoanAppDfcIntCalcMethod": {
									"path": "DfcLoanApp.DfcIntCalcMethod",
									"type": "ForwardReference"
								},
								"DfcLoanAppDfcGracePeriodIntMethod": {
									"path": "DfcLoanApp.DfcGracePeriodIntMethod",
									"type": "ForwardReference"
								},
								"DfcLoanAppDfcLatePymtPenaltyFeeCalc": {
									"path": "DfcLoanApp.DfcLatePymtPenaltyFeeCalc",
									"type": "ForwardReference"
								}
							}
						},
						"scope": "page"
					},
					"GridDetail_l0mxaloDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "DfcCollaterals",
							"attributes": {
								"DfcColValue": {
									"path": "DfcColValue"
								},
								"DfcDateEntered": {
									"path": "DfcDateEntered"
								},
								"DfcDescription": {
									"path": "DfcDescription"
								},
								"DfcInAuction": {
									"path": "DfcInAuction"
								},
								"CreatedOn": {
									"path": "CreatedOn"
								}
							}
						}
					},
					"GridDetail_spuzx2dDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "DfcBid",
							"attributes": {
								"DfcCollateralId": {
									"path": "DfcCollateralId"
								},
								"DfcCustomerId": {
									"path": "DfcCustomerId"
								},
								"DfcOffer": {
									"path": "DfcOffer"
								},
								"DfcPurchaseMethod": {
									"path": "DfcPurchaseMethod"
								},
								"DfcBestOffer": {
									"path": "DfcBestOffer"
								}
							}
						}
					},
					"DataGrid_36pclewDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "FinApplication",
							"attributes": {
								"Number": {
									"path": "Number"
								},
								"FillingDate": {
									"path": "FillingDate"
								},
								"Product": {
									"path": "Product"
								},
								"ProductType": {
									"path": "ProductType"
								},
								"OpportunityCondition": {
									"path": "OpportunityCondition"
								},
								"DfcReqAmt": {
									"path": "DfcReqAmt"
								},
								"DfcInterestRate": {
									"path": "DfcInterestRate"
								},
								"DfcTerm": {
									"path": "DfcTerm"
								},
								"DfcPurpose": {
									"path": "DfcPurpose"
								},
								"DfcSector": {
									"path": "DfcSector"
								},
								"DfcSubSector": {
									"path": "DfcSubSector"
								},
								"Division": {
									"path": "Division"
								},
								"DecisionDate": {
									"path": "DecisionDate"
								},
								"Approver": {
									"path": "Approver"
								},
								"CreatedBy": {
									"path": "CreatedBy"
								},
								"CreatedOn": {
									"path": "CreatedOn"
								}
							}
						}
					},
					"GridDetail_pxv0h5aDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "DfcDisbursements",
							"attributes": {
								"DfcDisbNo": {
									"path": "DfcDisbNo"
								},
								"DfcDisbDate": {
									"path": "DfcDisbDate"
								},
								"DfcAmount": {
									"path": "DfcAmount"
								},
								"CreatedBy": {
									"path": "CreatedBy"
								},
								"CreatedOn": {
									"path": "CreatedOn"
								},
								"ModifiedBy": {
									"path": "ModifiedBy"
								},
								"ModifiedOn": {
									"path": "ModifiedOn"
								}
							}
						}
					},
					"DataGrid_yejkzi5DS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "DfcLoans",
							"attributes": {
								"DfcLoanNo": {
									"path": "DfcLoanNo"
								}
							}
						}
					},
					"DataGrid_uy0c8tcDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "DfcVisits",
							"attributes": {
								"DfcVisitSubject": {
									"path": "DfcVisitSubject"
								},
								"DfcStart": {
									"path": "DfcStart"
								},
								"DfcDue": {
									"path": "DfcDue"
								},
								"DfcVisitStatus": {
									"path": "DfcVisitStatus"
								}
							}
						}
					},
					"GridDetail_ugt1ez7DS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "DfcVisits",
							"attributes": {
								"DfcVisitSubject": {
									"path": "DfcVisitSubject"
								},
								"DfcStart": {
									"path": "DfcStart"
								},
								"DfcDue": {
									"path": "DfcDue"
								},
								"DfcVisitStatus": {
									"path": "DfcVisitStatus"
								}
							}
						}
					},
					"DataGrid_e53ftudDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "DfcLoanAmortizationTable",
							"attributes": {
								"DfcAmortizationNumber": {
									"path": "DfcAmortizationNumber"
								},
								"DfcAmortizationBeginningBalance": {
									"path": "DfcAmortizationBeginningBalance"
								},
								"DfcAmortizationEndingBalance": {
									"path": "DfcAmortizationEndingBalance"
								},
								"DfcAmortizationAmount": {
									"path": "DfcAmortizationAmount"
								},
								"CreatedOn": {
									"path": "CreatedOn"
								},
								"DfcPaid": {
									"path": "DfcPaid"
								}
							}
						}
					},
					"DataGrid_13xfjxcDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "DfcPayments",
							"attributes": {
								"DfcPaymentNumber": {
									"path": "DfcPaymentNumber"
								},
								"DfcDate": {
									"path": "DfcDate"
								},
								"DfcAmount": {
									"path": "DfcAmount"
								},
								"DfcCurrentPayment": {
									"path": "DfcCurrentPayment"
								},
								"DfcPaymentType": {
									"path": "DfcPaymentType"
								},
								"DfcPeriod": {
									"path": "DfcPeriod"
								}
							}
						}
					},
					"DataGrid_okh4yv4DS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "DfcLoanArrears",
							"attributes": {
								"DfcArrearNumber": {
									"path": "DfcArrearNumber"
								},
								"DfcArrearDate": {
									"path": "DfcArrearDate"
								},
								"DfcArrearAmount": {
									"path": "DfcArrearAmount"
								},
								"DfcAmortizationPeriod": {
									"path": "DfcAmortizationPeriod"
								},
								"CreatedOn": {
									"path": "CreatedOn"
								},
								"CreatedBy": {
									"path": "CreatedBy"
								},
								"ModifiedBy": {
									"path": "ModifiedBy"
								},
								"ModifiedOn": {
									"path": "ModifiedOn"
								}
							}
						}
					},
					"GridDetail_ohtfy90DS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "DfcLoanAmortizationTable",
							"attributes": {
								"DfcAmortizationNumber": {
									"path": "DfcAmortizationNumber"
								},
								"DfcPeriodNumber": {
									"path": "DfcPeriodNumber"
								},
								"DfcAmortizationEndingBalance": {
									"path": "DfcAmortizationEndingBalance"
								},
								"DfcAmortizationBeginningBalance": {
									"path": "DfcAmortizationBeginningBalance"
								},
								"DfcCurrentDue": {
									"path": "DfcCurrentDue"
								},
								"DfcAmortizationInterest": {
									"path": "DfcAmortizationInterest"
								},
								"DfcPaid": {
									"path": "DfcPaid"
								},
								"DfcAmortizationPrincipal": {
									"path": "DfcAmortizationPrincipal"
								},
								"DfcAmortizationDate": {
									"path": "DfcAmortizationDate"
								},
								"DfcAmortizationAmount": {
									"path": "DfcAmortizationAmount"
								}
							}
						}
					},
					"DataGrid_xoft756DS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "DfcLoanAmortizationTable",
							"attributes": {
								"DfcAmortizationNumber": {
									"path": "DfcAmortizationNumber"
								}
							}
						}
					},
					"GridDetail_dourileDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "DfcLoanAmortizationTable",
							"attributes": {
								"DfcAmortizationNumber": {
									"path": "DfcAmortizationNumber"
								},
								"DfcAmortizationAmount": {
									"path": "DfcAmortizationAmount"
								},
								"DfcAmortizationBeginningBalance": {
									"path": "DfcAmortizationBeginningBalance"
								},
								"DfcAmortizationEndingBalance": {
									"path": "DfcAmortizationEndingBalance"
								},
								"DfcCurrentDue": {
									"path": "DfcCurrentDue"
								},
								"DfcAmortizationInterest": {
									"path": "DfcAmortizationInterest"
								}
							}
						}
					},
					"GridDetail_3roxzy7DS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "DfcEscrowInfo",
							"attributes": {
								"DfcEscrowItem": {
									"path": "DfcEscrowItem"
								},
								"DfcAmount": {
									"path": "DfcAmount"
								},
								"DfcStartDate": {
									"path": "DfcStartDate"
								},
								"DfcEndDate": {
									"path": "DfcEndDate"
								},
								"CreatedBy": {
									"path": "CreatedBy"
								},
								"CreatedOn": {
									"path": "CreatedOn"
								},
								"ModifiedBy": {
									"path": "ModifiedBy"
								},
								"ModifiedOn": {
									"path": "ModifiedOn"
								}
							}
						}
					},
					"GridDetail_614bp6yDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "BankAccount",
							"attributes": {
								"BankAccountNumber": {
									"path": "BankAccountNumber"
								}
							}
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