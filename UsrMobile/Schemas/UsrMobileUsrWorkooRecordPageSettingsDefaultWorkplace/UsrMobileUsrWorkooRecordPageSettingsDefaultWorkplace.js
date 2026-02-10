[
	{
		"operation": "insert",
		"name": "settings",
		"values": {
			"entitySchemaName": "UsrWorkoo",
			"details": [],
			"columnSets": [],
			"localizableStrings": {
				"SocialMessageDetailCaptionUsrWorkoo_caption": "Feed",
				"AttachmentsDetailCaptionUsrWorkoo_caption": "Attachments",
				"primaryColumnSetUsrWorkoo_caption": "General information"
			},
			"settingsType": "RecordPage",
			"operation": "insert",
			"viewConfigDiff": "[{\"operation\":\"insert\",\"name\":\"Button_x42vq3j\",\"values\":{\"layoutConfig\":{\"column\":1,\"colSpan\":1,\"row\":2,\"rowSpan\":1},\"type\":\"crt.Button\",\"caption\":\"#ResourceString(Button_x42vq3j_caption)#\",\"color\":\"default\",\"disabled\":false,\"size\":\"medium\",\"iconPosition\":\"only-text\",\"visible\":true,\"clicked\":{\"request\":\"usr.ChangeStatusToSubmittedRequest\"},\"clickMode\":\"default\"},\"parentName\":\"AreaProfileContainer\",\"propertyName\":\"items\",\"index\":1}]"
		}
	},
	{
		"operation": "insert",
		"name": "SocialMessageDetailV2StandardDetail",
		"values": {
			"caption": "SocialMessageDetailCaptionUsrWorkoo_caption",
			"entitySchemaName": "SocialMessage",
			"showForVisibleModule": true,
			"filter": {
				"detailColumn": "EntityId",
				"masterColumn": "Id"
			},
			"operation": "insert"
		},
		"parentName": "settings",
		"propertyName": "details",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "AttachmentsFlutterDetailStandardDetail",
		"values": {
			"caption": "AttachmentsDetailCaptionUsrWorkoo_caption",
			"entitySchemaName": "SysFile",
			"filter": {
				"detailColumn": "RecordId",
				"masterColumn": "Id"
			},
			"operation": "insert"
		},
		"parentName": "settings",
		"propertyName": "details",
		"index": 1
	},
	{
		"operation": "insert",
		"name": "primaryColumnSet",
		"values": {
			"items": [],
			"rows": 1,
			"entitySchemaName": "UsrWorkoo",
			"caption": "primaryColumnSetUsrWorkoo_caption",
			"position": 0,
			"operation": "insert"
		},
		"parentName": "settings",
		"propertyName": "columnSets",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "bdb82b11-1e05-4bdb-80fd-2eda1bfb2cf9",
		"values": {
			"row": 0,
			"content": "Name",
			"columnName": "UsrName",
			"dataValueType": 1,
			"operation": "insert"
		},
		"parentName": "primaryColumnSet",
		"propertyName": "items",
		"index": 0
	}
]