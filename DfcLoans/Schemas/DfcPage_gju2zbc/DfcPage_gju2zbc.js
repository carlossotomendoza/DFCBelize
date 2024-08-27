define("DfcPage_gju2zbc", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "GeneralInfoTabContainer",
				"values": {
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
				}
			},
			{
				"operation": "insert",
				"name": "ComboBox_t7p1xyb",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.DfcCollateralsDS_DfcLoanNo_lfhlg63",
					"labelPosition": "auto",
					"control": "$DfcCollateralsDS_DfcLoanNo_lfhlg63",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_5vastwv",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_5vastwv_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_t7p1xyb",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_20e4zps",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "date",
					"label": "$Resources.Strings.DfcCollateralsDS_DfcDateEntered_l1mnhdy",
					"labelPosition": "auto",
					"control": "$DfcCollateralsDS_DfcDateEntered_l1mnhdy"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_8grebko",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "datetime",
					"label": "#ResourceString(DateTimePicker_8grebko_label)#",
					"labelPosition": "auto",
					"control": "$DfcCollateralsDS_DfcLastValuationType_7a6srbo",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ComboBox_hvo67ld",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.DfcCollateralsDS_DfcCollateralType_v6ht5r4",
					"labelPosition": "auto",
					"control": "$DfcCollateralsDS_DfcCollateralType_v6ht5r4",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "addRecord_8qdv7z0",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_8qdv7z0_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_hvo67ld",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_ovgin7z",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.DfcCollateralsDS_DfcTypeClassification_ntigie6",
					"labelPosition": "auto",
					"control": "$DfcCollateralsDS_DfcTypeClassification_ntigie6",
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
				"name": "addRecord_wq4275n",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_wq4275n_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_ovgin7z",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_972dvnm",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 6,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.DfcCollateralsDS_DfcStatus_4grx74n",
					"labelPosition": "auto",
					"control": "$DfcCollateralsDS_DfcStatus_4grx74n",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "addRecord_i7uiag5",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_i7uiag5_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_972dvnm",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NumberInput_y8256vd",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.DfcCollateralsDS_DfcColValue_3b1m9ct",
					"labelPosition": "auto",
					"control": "$DfcCollateralsDS_DfcColValue_3b1m9ct"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NumberInput_a503lot",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.DfcCollateralsDS_DfcDiscountPercentaje_vepy1yv",
					"labelPosition": "auto",
					"control": "$DfcCollateralsDS_DfcDiscountPercentaje_vepy1yv"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "NumberInput_ya638fq",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.DfcCollateralsDS_DfcValueSecuringLoans_63onwm3",
					"labelPosition": "auto",
					"control": "$DfcCollateralsDS_DfcValueSecuringLoans_63onwm3"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "NumberInput_0i7t9xk",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.DfcCollateralsDS_DfcDiscountedValue_i4o6khs",
					"labelPosition": "auto",
					"control": "$DfcCollateralsDS_DfcDiscountedValue_i4o6khs"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "NumberInput_n9rqpiq",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.DfcCollateralsDS_DfcAvalaibleValue_mzaus2u",
					"labelPosition": "auto",
					"control": "$DfcCollateralsDS_DfcAvalaibleValue_mzaus2u"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_bz6j3td",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "datetime",
					"label": "$Resources.Strings.DfcCollateralsDS_DfcExpiryDate_jqcknv6",
					"labelPosition": "auto",
					"control": "$DfcCollateralsDS_DfcExpiryDate_jqcknv6"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "NumberInput_tckp3i7",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.DfcCollateralsDS_DfcProjectedValue_orp1nj1",
					"labelPosition": "auto",
					"control": "$DfcCollateralsDS_DfcProjectedValue_orp1nj1"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "GridContainer_c3laylu",
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
				"name": "ComboBox_2sdyqht",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.DfcCollateralsDS_DfcLocationOfSecurity_quh3y2k",
					"labelPosition": "auto",
					"control": "$DfcCollateralsDS_DfcLocationOfSecurity_quh3y2k",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_c3laylu",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_ppa5tuq",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_ppa5tuq_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_2sdyqht",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_pk4vs14",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.DfcCollateralsDS_DfcExternalEntity_udnbvuq",
					"labelPosition": "auto",
					"control": "$DfcCollateralsDS_DfcExternalEntity_udnbvuq",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GridContainer_c3laylu",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_pns93jx",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_pns93jx_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_pk4vs14",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NumberInput_ds4v7eg",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.DfcCollateralsDS_DfcProjectedValue_8faovma",
					"labelPosition": "auto",
					"control": "$DfcCollateralsDS_DfcProjectedValue_8faovma"
				},
				"parentName": "GridContainer_c3laylu",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ComboBox_dz0eop0",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.DfcCollateralsDS_DfcSolicitor_rk0j2v6",
					"labelPosition": "auto",
					"control": "$DfcCollateralsDS_DfcSolicitor_rk0j2v6",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GridContainer_c3laylu",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "addRecord_4w8cxpd",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_4w8cxpd_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_dz0eop0",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_04j1sb2",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "datetime",
					"label": "$Resources.Strings.DfcCollateralsDS_DfcDateClosed_1d25t5q",
					"labelPosition": "auto",
					"control": "$DfcCollateralsDS_DfcDateClosed_1d25t5q"
				},
				"parentName": "GridContainer_c3laylu",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_clmnn28",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "datetime",
					"label": "$Resources.Strings.DfcCollateralsDS_DfcDateSubmmited_qban51d",
					"labelPosition": "auto",
					"control": "$DfcCollateralsDS_DfcDateSubmmited_qban51d"
				},
				"parentName": "GridContainer_c3laylu",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "TabContainer_kzmx7je",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_kzmx7je_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_vj8jze5",
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
				"parentName": "TabContainer_kzmx7je",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_ru4n7qd",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "datetime",
					"label": "$Resources.Strings.DfcCollateralsDS_DfcRegistrationDate_d5cwacc",
					"labelPosition": "auto",
					"control": "$DfcCollateralsDS_DfcRegistrationDate_d5cwacc"
				},
				"parentName": "GridContainer_vj8jze5",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_5bfyn3l",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.DfcCollateralsDS_DfcTitleNumber_gdpbll1",
					"labelPosition": "auto",
					"control": "$DfcCollateralsDS_DfcTitleNumber_gdpbll1"
				},
				"parentName": "GridContainer_vj8jze5",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Input_feyn148",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.DfcCollateralsDS_DfcRegistrationSection_hfxisu0",
					"labelPosition": "auto",
					"control": "$DfcCollateralsDS_DfcRegistrationSection_hfxisu0"
				},
				"parentName": "GridContainer_vj8jze5",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "NumberInput_qhltgz7",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.DfcCollateralsDS_DfcBlock_xhiy04r",
					"labelPosition": "auto",
					"control": "$DfcCollateralsDS_DfcBlock_xhiy04r"
				},
				"parentName": "GridContainer_vj8jze5",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "DfcAreaCant",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.DfcCollateralsDS_DfcAreaCant_yo8rof2",
					"labelPosition": "auto",
					"control": "$DfcCollateralsDS_DfcAreaCant_yo8rof2"
				},
				"parentName": "GridContainer_vj8jze5",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "ComboBox_k54yhni",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.DfcCollateralsDS_DfcUnit_fop0xxz",
					"labelPosition": "auto",
					"control": "$DfcCollateralsDS_DfcUnit_fop0xxz",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GridContainer_vj8jze5",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "addRecord_6zyvx4u",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_6zyvx4u_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_k54yhni",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_amsd7d3",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.DfcCollateralsDS_DfcParcel_scf5d36",
					"labelPosition": "auto",
					"control": "$DfcCollateralsDS_DfcParcel_scf5d36"
				},
				"parentName": "GridContainer_vj8jze5",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "GridContainer_o20hy4g",
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
				"parentName": "TabContainer_kzmx7je",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Input_xbkm434",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.DfcCollateralsDS_DfcAddressOfProperty_06anmjx",
					"labelPosition": "auto",
					"control": "$DfcCollateralsDS_DfcAddressOfProperty_06anmjx"
				},
				"parentName": "GridContainer_o20hy4g",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_ratb1hm",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.DfcCollateralsDS_DfcTownVillage_5xkgrq3",
					"labelPosition": "auto",
					"control": "$DfcCollateralsDS_DfcTownVillage_5xkgrq3",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GridContainer_o20hy4g",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_45j7wfa",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_45j7wfa_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_ratb1hm",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RichTextEditor_cv3gvoh",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.RichTextEditor",
					"label": "$Resources.Strings.DfcCollateralsDS_DfcNotes_vilayae",
					"labelPosition": "auto",
					"control": "$DfcCollateralsDS_DfcNotes_vilayae",
					"filesStorage": {
						"masterRecordColumnValue": "$Id",
						"entitySchemaName": "SysFile",
						"recordColumnName": "RecordId"
					}
				},
				"parentName": "GridContainer_o20hy4g",
				"propertyName": "items",
				"index": 2
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"DfcCollateralsDS_DfcLoanNo_lfhlg63": {
						"modelConfig": {
							"path": "DfcCollateralsDS.DfcLoanNo"
						}
					},
					"DfcCollateralsDS_DfcCollateralType_v6ht5r4": {
						"modelConfig": {
							"path": "DfcCollateralsDS.DfcCollateralType"
						}
					},
					"DfcCollateralsDS_DfcTypeClassification_ntigie6": {
						"modelConfig": {
							"path": "DfcCollateralsDS.DfcTypeClassification"
						}
					},
					"DfcCollateralsDS_DfcDateEntered_l1mnhdy": {
						"modelConfig": {
							"path": "DfcCollateralsDS.DfcDateEntered"
						}
					},
					"DfcCollateralsDS_DfcLastValuationType_7a6srbo": {
						"modelConfig": {
							"path": "DfcCollateralsDS.DfcLastValuationType"
						}
					},
					"DfcCollateralsDS_DfcStatus_4grx74n": {
						"modelConfig": {
							"path": "DfcCollateralsDS.DfcStatus"
						}
					},
					"DfcCollateralsDS_DfcColValue_j1psxqn": {
						"modelConfig": {
							"path": "DfcCollateralsDS.DfcColValue"
						}
					},
					"DfcCollateralsDS_DfcLocationOfSecurity_quh3y2k": {
						"modelConfig": {
							"path": "DfcCollateralsDS.DfcLocationOfSecurity"
						}
					},
					"DfcCollateralsDS_DfcDiscountPercentaje_tmuyskv": {
						"modelConfig": {
							"path": "DfcCollateralsDS.DfcDiscountPercentaje"
						}
					},
					"DfcCollateralsDS_DfcDiscountPercentaje_vepy1yv": {
						"modelConfig": {
							"path": "DfcCollateralsDS.DfcDiscountPercentaje"
						}
					},
					"DfcCollateralsDS_DfcExternalEntity_udnbvuq": {
						"modelConfig": {
							"path": "DfcCollateralsDS.DfcExternalEntity"
						}
					},
					"DfcCollateralsDS_DfcExpiryDate_jqcknv6": {
						"modelConfig": {
							"path": "DfcCollateralsDS.DfcExpiryDate"
						}
					},
					"DfcCollateralsDS_DfcSolicitor_rk0j2v6": {
						"modelConfig": {
							"path": "DfcCollateralsDS.DfcSolicitor"
						}
					},
					"DfcCollateralsDS_DfcProjectedValue_8faovma": {
						"modelConfig": {
							"path": "DfcCollateralsDS.DfcProjectedValue"
						}
					},
					"DfcCollateralsDS_DfcDiscountedValue_i4o6khs": {
						"modelConfig": {
							"path": "DfcCollateralsDS.DfcDiscountedValue"
						}
					},
					"DfcCollateralsDS_DfcValueSecuringLoans_63onwm3": {
						"modelConfig": {
							"path": "DfcCollateralsDS.DfcValueSecuringLoans"
						}
					},
					"DfcCollateralsDS_DfcAvalaibleValue_mzaus2u": {
						"modelConfig": {
							"path": "DfcCollateralsDS.DfcAvalaibleValue"
						}
					},
					"DfcCollateralsDS_DfcProjectedValue_orp1nj1": {
						"modelConfig": {
							"path": "DfcCollateralsDS.DfcProjectedValue"
						}
					},
					"DfcCollateralsDS_DfcColValue_3b1m9ct": {
						"modelConfig": {
							"path": "DfcCollateralsDS.DfcColValue"
						}
					},
					"DfcCollateralsDS_DfcDateClosed_1d25t5q": {
						"modelConfig": {
							"path": "DfcCollateralsDS.DfcDateClosed"
						}
					},
					"DfcCollateralsDS_DfcDateSubmmited_qban51d": {
						"modelConfig": {
							"path": "DfcCollateralsDS.DfcDateSubmmited"
						}
					},
					"DfcCollateralsDS_DfcAddressProperty_5v66jze": {
						"modelConfig": {
							"path": "DfcCollateralsDS.DfcAddressProperty"
						}
					},
					"DfcCollateralsDS_DfcNotes_n5stzi5": {
						"modelConfig": {
							"path": "DfcCollateralsDS.DfcNotes"
						}
					},
					"DfcCollateralsDS_DfcDateOfTitle_h4i6oh6": {
						"modelConfig": {
							"path": "DfcCollateralsDS.DfcDateOfTitle"
						}
					},
					"DfcCollateralsDS_DfcTitleNumber_aqtxvdy": {
						"modelConfig": {
							"path": "DfcCollateralsDS.DfcTitleNumber"
						}
					},
					"DfcCollateralsDS_DfcRegistrationSection_7zmsur8": {
						"modelConfig": {
							"path": "DfcCollateralsDS.DfcRegistrationSection"
						}
					},
					"DfcCollateralsDS_DfcBlock_l18ciat": {
						"modelConfig": {
							"path": "DfcCollateralsDS.DfcBlock"
						}
					},
					"DfcCollateralsDS_DfcParcel_0vunww7": {
						"modelConfig": {
							"path": "DfcCollateralsDS.DfcParcel"
						}
					},
					"DfcCollateralsDS_DfcArea_vftivry": {
						"modelConfig": {
							"path": "DfcCollateralsDS.DfcArea"
						}
					},
					"DfcCollateralsDS_DfcArea_qktf32r": {
						"modelConfig": {
							"path": "DfcCollateralsDS.DfcArea"
						}
					},
					"DfcCollateralsDS_DfcColumn31_27up8va": {
						"modelConfig": {
							"path": "DfcCollateralsDS.DfcColumn31"
						}
					},
					"DfcCollateralsDS_DfcTitleDetails_k7u1ai3": {
						"modelConfig": {
							"path": "DfcCollateralsDS.DfcTitleDetails"
						}
					},
					"DfcCollateralsDS_DfcTownVillage_5xkgrq3": {
						"modelConfig": {
							"path": "DfcCollateralsDS.DfcTownVillage"
						}
					},
					"DfcCollateralsDS_DfcRegistrationDate_d5cwacc": {
						"modelConfig": {
							"path": "DfcCollateralsDS.DfcRegistrationDate"
						}
					},
					"DfcCollateralsDS_DfcTitleNumber_gdpbll1": {
						"modelConfig": {
							"path": "DfcCollateralsDS.DfcTitleNumber"
						}
					},
					"DfcCollateralsDS_DfcRegistrationSection_hfxisu0": {
						"modelConfig": {
							"path": "DfcCollateralsDS.DfcRegistrationSection"
						}
					},
					"DfcCollateralsDS_DfcBlock_xhiy04r": {
						"modelConfig": {
							"path": "DfcCollateralsDS.DfcBlock"
						}
					},
					"DfcCollateralsDS_DfcParcel_scf5d36": {
						"modelConfig": {
							"path": "DfcCollateralsDS.DfcParcel"
						}
					},
					"DfcCollateralsDS_DfcArea_5is848c": {
						"modelConfig": {
							"path": "DfcCollateralsDS.DfcArea"
						}
					},
					"DfcCollateralsDS_DfcUnit_fop0xxz": {
						"modelConfig": {
							"path": "DfcCollateralsDS.DfcUnit"
						}
					},
					"DfcCollateralsDS_DfcAddressOfProperty_06anmjx": {
						"modelConfig": {
							"path": "DfcCollateralsDS.DfcAddressOfProperty"
						}
					},
					"DfcCollateralsDS_DfcNotes_vilayae": {
						"modelConfig": {
							"path": "DfcCollateralsDS.DfcNotes"
						}
					},
					"DfcCollateralsDS_DfcAreaCant_yo8rof2": {
						"modelConfig": {
							"path": "DfcCollateralsDS.DfcAreaCant"
						}
					},
					"DfcCollateralsDS_DfcArea_mi0b684": {
						"modelConfig": {
							"path": "DfcCollateralsDS.DfcArea"
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
					"primaryDataSourceName": "DfcCollateralsDS"
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"DfcCollateralsDS": {
						"type": "crt.EntityDataSource",
						"scope": "page",
						"config": {
							"entitySchemaName": "DfcCollaterals"
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