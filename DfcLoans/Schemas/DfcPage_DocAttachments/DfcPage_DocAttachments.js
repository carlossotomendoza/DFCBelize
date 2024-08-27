define("DfcPage_DocAttachments", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "MainContainer",
				"values": {
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"alignItems": "stretch"
				}
			},
			{
				"operation": "merge",
				"name": "SaveButton",
				"values": {
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "DfcProcess_beb48a7",
							"processRunType": "ForTheSelectedPage",
							"showNotification": true,
							"recordIdProcessParameterName": "DfcDocumentId"
						}
					},
					"caption": "#ResourceString(SaveButton_caption)#"
				}
			},
			{
				"operation": "insert",
				"name": "FinApplication",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.DocListInFinAppDS_FinApplication_5lznhvc",
					"labelPosition": "above",
					"control": "$DocListInFinAppDS_FinApplication_5lznhvc",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_h4hy8d0",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_h4hy8d0_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "FinApplication",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Name",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.DocListInFinAppDS_Name_fvob7ud",
					"labelPosition": "above",
					"control": "$DocListInFinAppDS_Name_fvob7ud",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_7meu7ty",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_7meu7ty_caption)#",
					"icon": null,
					"iconPosition": "only-text",
					"color": "accent",
					"size": "extra-large",
					"clicked": {
						"request": "crt.UploadFileRequest",
						"params": {
							"viewElementName": "FileList_Attachments"
						}
					},
					"visible": true,
					"clickMode": "default",
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					}
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "DfcFileUploaded",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Checkbox",
					"label": "$Resources.Strings.DocListInFinAppDS_DfcFileUploaded_totz4lh",
					"labelPosition": "left",
					"control": "$DocListInFinAppDS_DfcFileUploaded_totz4lh",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_Attachment",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_Attachment_title)#",
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
					"visible": false,
					"alignItems": "stretch"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "GridContainer_v14jd6n",
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
				"parentName": "ExpansionPanel_Attachment",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_vnv8zb4",
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
				"parentName": "GridContainer_v14jd6n",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_h4jtxq1",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_h4jtxq1_caption)#",
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
							"dataSourceName": "FileList_c99x10bDS"
						}
					}
				},
				"parentName": "FlexContainer_vnv8zb4",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_izjxn53",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_izjxn53_placeholder)#",
					"targetAttributes": [
						"FileList_c99x10b"
					]
				},
				"parentName": "FlexContainer_vnv8zb4",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_yt2ynbi",
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
				"parentName": "ExpansionPanel_Attachment",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FileList_Attachments",
				"values": {
					"type": "crt.FileList",
					"masterRecordColumnValue": "$masterRecordColumnValue",
					"recordColumnName": "FinApplication",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 3
					},
					"items": "$FileList_c99x10b",
					"primaryColumnName": "FileList_c99x10bDS_Id",
					"columns": [
						{
							"id": "17dbd41e-a2a4-763e-dc29-82dd21d4f742",
							"code": "FileList_c99x10bDS_Name",
							"caption": "#ResourceString(FileList_c99x10bDS_Name)#",
							"dataValueType": 28
						},
						{
							"id": "3e1f9b26-7f8e-3063-c4fa-026d7738d2e4",
							"code": "FileList_c99x10bDS_CreatedOn",
							"caption": "#ResourceString(FileList_c99x10bDS_CreatedOn)#",
							"dataValueType": 7
						},
						{
							"id": "a87e6d21-2c0d-b675-c683-6fb5c9023815",
							"code": "FileList_c99x10bDS_CreatedBy",
							"caption": "#ResourceString(FileList_c99x10bDS_CreatedBy)#",
							"dataValueType": 10
						},
						{
							"id": "f43b45ba-4824-3acd-61aa-1500738ae1f8",
							"code": "FileList_c99x10bDS_Size",
							"caption": "#ResourceString(FileList_c99x10bDS_Size)#",
							"dataValueType": 4
						}
					],
					"visible": true,
					"viewType": "list",
					"tileSize": "medium"
				},
				"parentName": "GridContainer_yt2ynbi",
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
					"DocListInFinAppDS_FinApplication_5lznhvc": {
						"modelConfig": {
							"path": "DocListInFinAppDS.FinApplication"
						}
					},
					"DocListInFinAppDS_Name_fvob7ud": {
						"modelConfig": {
							"path": "DocListInFinAppDS.Name"
						}
					},
					"DocListInFinAppDS_DfcFileUploaded_totz4lh": {
						"modelConfig": {
							"path": "DocListInFinAppDS.DfcFileUploaded"
						}
					},
					"FileList_c99x10b": {
						"isCollection": true,
						"modelConfig": {
							"path": "FileList_c99x10bDS",
							"sortingConfig": {
								"default": [
									{
										"columnName": "CreatedOn",
										"direction": "desc"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"FileList_c99x10bDS_Name": {
									"modelConfig": {
										"path": "FileList_c99x10bDS.Name"
									}
								},
								"FileList_c99x10bDS_CreatedOn": {
									"modelConfig": {
										"path": "FileList_c99x10bDS.CreatedOn"
									}
								},
								"FileList_c99x10bDS_CreatedBy": {
									"modelConfig": {
										"path": "FileList_c99x10bDS.CreatedBy"
									}
								},
								"FileList_c99x10bDS_Size": {
									"modelConfig": {
										"path": "FileList_c99x10bDS.Size"
									}
								},
								"FileList_c99x10bDS_Id": {
									"modelConfig": {
										"path": "FileList_c99x10bDS.Id"
									}
								}
							}
						}
					},
					"masterRecordColumnValue": {
						"modelConfig": {
							"path": "DocListInFinAppDS.FinApplication"
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
						"DocListInFinAppDS": {
							"type": "crt.EntityDataSource",
							"scope": "page",
							"config": {
								"entitySchemaName": "DocListInFinApp"
							}
						},
						"FileList_c99x10bDS": {
							"type": "crt.EntityDataSource",
							"scope": "viewElement",
							"config": {
								"entitySchemaName": "FinApplicationFile",
								"attributes": {
									"Name": {
										"path": "Name"
									},
									"CreatedOn": {
										"path": "CreatedOn"
									},
									"CreatedBy": {
										"path": "CreatedBy"
									},
									"Size": {
										"path": "Size"
									}
								}
							}
						},
						"FileList_AttachmentsDS": {
							"type": "crt.EntityDataSource",
							"scope": "viewElement",
							"config": {
								"entitySchemaName": "SysFile"
							}
						}
					},
					"primaryDataSourceName": "DocListInFinAppDS"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});