{
	"SyncOptions": {
		"SysSettingsImportConfig": [],
		"ModelDataImportConfig": [
			{
				"Name": "UsrWorkoo",
				"SyncColumns": [
					"UsrName"
				]
			},
			{
				"Name": "UsrWorkooStatus",
				"SyncColumns": []
			},
			{
				"Name": "SocialMessage",
				"SyncColumns": [
					"EntityId"
				]
			},
			{
				"Name": "SysFile",
				"SyncColumns": [
					"RecordId",
					"Name",
					"Type",
					"Data",
					"Size",
					"RecordSchemaName"
				],
				"QueryFilter": {
					"items": {
						"DesignerDefaultRecordSchemaNameFilter": {
							"filterType": 4,
							"comparisonType": 3,
							"isEnabled": true,
							"trimDateTimeParameterToDate": false,
							"leftExpression": {
								"expressionType": 0,
								"columnPath": "RecordSchemaName"
							},
							"rightExpressions": [
								{
									"expressionType": 2,
									"parameter": {
										"dataValueType": 1,
										"value": "UsrWorkoo"
									}
								}
							]
						}
					},
					"logicalOperation": 0,
					"isEnabled": true,
					"filterType": 6
				}
			},
			{
				"Name": "FileGroup",
				"SyncColumns": []
			}
		]
	},
	"Modules": {
		"UsrWorkoo": {
			"Group": "main",
			"Model": "UsrWorkoo",
			"Position": 10,
			"isStartPage": false,
			"Title": "UsrWorkooSectionTitle",
			"Hidden": false,
			"sysModuleId": "290a9cd4-2566-4892-9c2b-58f31209f017",
			"screens": {
				"start": {
					"schemaName": "UsrMobileUsrWorkooGridPageSettingsDefaultWorkplace"
				},
				"edit": {
					"schemaName": "UsrMobileUsrWorkooRecordPageSettingsDefaultWorkplace"
				}
			}
		}
	},
	"Models": {
		"UsrWorkoo": {
			"RequiredModels": [
				"UsrWorkoo",
				"UsrWorkooStatus",
				"SocialMessage",
				"SysFile",
				"FileGroup"
			],
			"ModelExtensions": [],
			"PagesExtensions": [
				"UsrMobileUsrWorkooActionsSettingsDefaultWorkplace",
				"UsrMobileUsrWorkooGridPageSettingsDefaultWorkplace",
				"UsrMobileUsrWorkooRecordPageSettingsDefaultWorkplace"
			]
		},
		"SocialMessage": {
			"RequiredModels": [],
			"ModelExtensions": [],
			"PagesExtensions": []
		},
		"SysFile": {
			"RequiredModels": [],
			"ModelExtensions": [],
			"PagesExtensions": []
		}
	},
	"ModuleGroups": {
		"main": {}
	},
	"UseUTC": true
}