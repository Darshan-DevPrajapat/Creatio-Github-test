{
	"viewConfigDiff": [
		{
			"operation": "merge",
			"name": "Tabs",
			"values": {
				"layoutConfig": {
					"column": 1,
					"colSpan": 1,
					"row": 1,
					"rowSpan": 1
				}
			}
		},
		{
			"operation": "merge",
			"name": "AreaProfileContainer",
			"values": {
				"layoutConfig": {
					"column": 1,
					"colSpan": 1,
					"row": 1,
					"rowSpan": 1
				}
			}
		},
		{
			"operation": "merge",
			"name": "AttachmentsContainer",
			"values": {
				"layoutConfig": {
					"column": 1,
					"colSpan": 1,
					"row": 1,
					"rowSpan": 1
				}
			}
		},
		{
			"operation": "merge",
			"name": "AttachmentsHeaderContainer",
			"values": {
				"layoutConfig": {
					"column": 1,
					"colSpan": 1,
					"row": 1,
					"rowSpan": 1
				}
			}
		},
		{
			"operation": "merge",
			"name": "AttachmentFileList",
			"values": {
				"layoutConfig": {
					"column": 1,
					"colSpan": 1,
					"row": 2,
					"rowSpan": 1
				}
			}
		},
		{
			"operation": "insert",
			"name": "EntityStageProgressBar_ot0mypo",
			"values": {
				"layoutConfig": {
					"column": 1,
					"colSpan": 1,
					"row": 1,
					"rowSpan": 1
				},
				"type": "crt.EntityStageProgressBar",
				"entityName": "UsrWorkoo"
			},
			"parentName": "AreaProfileContainer",
			"propertyName": "items",
			"index": 0
		},
		{
			"operation": "insert",
			"name": "Button_x42vq3j",
			"values": {
				"layoutConfig": {
					"column": 1,
					"colSpan": 1,
					"row": 2,
					"rowSpan": 1
				},
				"type": "crt.Button",
				"caption": "#ResourceString(Button_x42vq3j_caption)#",
				"color": "default",
				"disabled": false,
				"size": "medium",
				"iconPosition": "only-text",
				"visible": true,
				"clicked": {
					"request": "usr.ChangeStatusToSubmittedRequest"
				},
				"clickMode": "default"
			},
			"parentName": "AreaProfileContainer",
			"propertyName": "items",
			"index": 1
		},
		{
			"operation": "insert",
			"name": "UsrName",
			"values": {
				"type": "crt.Input",
				"label": "$Resources.Strings.UsrName",
				"control": "$UsrName",
				"placeholder": "",
				"readonly": false,
				"multiline": false,
				"labelPosition": "above",
				"layoutConfig": {
					"column": 1,
					"colSpan": 1,
					"row": 3,
					"rowSpan": 1
				}
			},
			"parentName": "AreaProfileContainer",
			"propertyName": "items",
			"index": 2
		},
		{
			"operation": "insert",
			"name": "Input_q6p8wp2",
			"values": {
				"layoutConfig": {
					"column": 1,
					"colSpan": 1,
					"row": 4,
					"rowSpan": 1
				},
				"type": "crt.Input",
				"label": "$Resources.Strings.PDS_Usrdesc_y7rdgqu",
				"control": "$PDS_Usrdesc_y7rdgqu",
				"placeholder": "",
				"readonly": false,
				"multiline": false,
				"labelPosition": "auto"
			},
			"parentName": "AreaProfileContainer",
			"propertyName": "items",
			"index": 3
		},
		{
			"operation": "insert",
			"name": "NumberInput_42mbk8c",
			"values": {
				"layoutConfig": {
					"column": 1,
					"colSpan": 1,
					"row": 5,
					"rowSpan": 1
				},
				"type": "crt.NumberInput",
				"label": "$Resources.Strings.PDS_Usrduration_vsus971",
				"control": "$PDS_Usrduration_vsus971",
				"readonly": false,
				"placeholder": "",
				"labelPosition": "auto"
			},
			"parentName": "AreaProfileContainer",
			"propertyName": "items",
			"index": 4
		},
		{
			"operation": "insert",
			"name": "ComboBox_cvw7sxc",
			"values": {
				"layoutConfig": {
					"column": 1,
					"colSpan": 1,
					"row": 6,
					"rowSpan": 1
				},
				"type": "crt.ComboBox",
				"label": "$Resources.Strings.PDS_UsrStatus_f8h0g4r",
				"ariaLabel": "",
				"isAddAllowed": true,
				"showValueAsLink": true,
				"labelPosition": "auto",
				"control": "$PDS_UsrStatus_f8h0g4r"
			},
			"parentName": "AreaProfileContainer",
			"propertyName": "items",
			"index": 5
		}
	],
	"viewModelConfigDiff": [
		{
			"operation": "merge",
			"path": [
				"attributes"
			],
			"values": {
				"UsrName": {
					"modelConfig": {
						"path": "PDS.UsrName"
					}
				},
				"Id": {
					"modelConfig": {
						"path": "PDS.Id"
					}
				},
				"PDS_Usrdesc_y7rdgqu": {
					"modelConfig": {
						"path": "PDS.Usrdesc"
					}
				},
				"PDS_Usrduration_vsus971": {
					"modelConfig": {
						"path": "PDS.Usrduration"
					}
				},
				"PDS_UsrStatus_f8h0g4r": {
					"modelConfig": {
						"path": "PDS.UsrStatus"
					}
				}
			}
		}
	],
	"modelConfigDiff": [
		{
			"operation": "merge",
			"path": [],
			"values": {
				"primaryDataSourceName": "PDS"
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
					"scope": "page",
					"config": {
						"entitySchemaName": "UsrWorkoo",
						"loadParameters": {
							"options": {
								"pagingConfig": {
									"rowCount": 1,
									"rowsOffset": -1
								},
								"sortingConfig": {
									"columns": []
								}
							}
						},
						"allowCopyingRecords": false
					}
				}
			}
		}
	]
}