{
	"viewConfigDiff": [
		{
			"operation": "merge",
			"name": "HeaderContainer",
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
			"name": "FolderTreeActions",
			"values": {
				"caption": "Folders",
				"rootSchemaName": "UsrWorkoo"
			}
		},
		{
			"operation": "merge",
			"name": "ListContainer",
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
			"operation": "merge",
			"name": "List",
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
			"name": "ListItem",
			"values": {
				"body": [
					{
						"value": "$PDS_CreatedOn"
					},
					{
						"value": "$PDS_CreatedBy"
					},
					{
						"value": "$PDS_Usrdesc"
					},
					{
						"value": "$PDS_Usrduration"
					},
					{
						"value": "$PDS_UsrStatus"
					}
				],
				"title": "$PDS_UsrName",
				"icon": null
			}
		}
	],
	"viewModelConfigDiff": [
		{
			"operation": "merge",
			"path": [
				"attributes",
				"Items",
				"viewModelConfig",
				"attributes"
			],
			"values": {
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
				"PDS_Usrdesc": {
					"modelConfig": {
						"path": "PDS.Usrdesc"
					}
				},
				"PDS_Usrduration": {
					"modelConfig": {
						"path": "PDS.Usrduration"
					}
				},
				"PDS_UsrStatus": {
					"modelConfig": {
						"path": "PDS.UsrStatus"
					}
				},
				"PDS_UsrName": {
					"modelConfig": {
						"path": "PDS.UsrName"
					}
				},
				"PDS_Id": {
					"modelConfig": {
						"path": "PDS.Id"
					}
				}
			}
		}
	],
	"modelConfigDiff": [
		{
			"operation": "merge",
			"path": [
				"dataSources",
				"PDS",
				"config"
			],
			"values": {
				"entitySchemaName": "UsrWorkoo",
				"attributes": {
					"CreatedOn": {
						"path": "CreatedOn"
					},
					"CreatedBy": {
						"path": "CreatedBy"
					},
					"Usrdesc": {
						"path": "Usrdesc"
					},
					"Usrduration": {
						"path": "Usrduration"
					},
					"UsrStatus": {
						"path": "UsrStatus"
					},
					"UsrName": {
						"path": "UsrName"
					}
				}
			}
		}
	]
}