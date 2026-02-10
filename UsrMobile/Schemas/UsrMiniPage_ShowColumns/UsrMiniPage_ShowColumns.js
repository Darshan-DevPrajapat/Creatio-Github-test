define("UsrMiniPage_ShowColumns", /**SCHEMA_DEPS*/["@creatio-devkit/common"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/(sdk)/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "PageTitle",
				"values": {
					"caption": "#MacrosTemplateString(#ResourceString(PageTitle_caption)#)#",
					"visible": true,
					"headingLevel": "label"
				}
			},
			{
				"operation": "remove",
				"name": "ContinueInOtherPageButton"
			},
			{
				"operation": "merge",
				"name": "MainContainer",
				"values": {
					"alignItems": "stretch"
				}
			},
			{
				"operation": "remove",
				"name": "CancelButton"
			},
			{
				"operation": "remove",
				"name": "SaveButton"
			},
			{
				"operation": "insert",
				"name": "ComboBox_76qf15g",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PageParameters_UsrLookupParameter1_vhbni6p",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": false,
					"labelPosition": "above",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PageParameters_UsrLookupParameter1_vhbni6p",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null,
					"mode": "List",
					"secondaryDisplayValue": "Name"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Demo_uwfcnls",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "usr.Demo",
					"value": "$tableValue",
					"visible": "$tableVisible"
				},
				"parentName": "MainContainer",
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
					"tableValue": {
						"modelConfig": {}
					},
					"tableVisible":{},
					"PageParameters_UsrLookupParameter1_vhbni6p": {
						"modelConfig": {
							"path": "PageParameters.UsrSelectLookup"
						}
					},
					"PageParameters_UsrLookupParameter1_vhbni6p_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Title",
										"direction": "asc"
									}
								]
							}
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
					"dataSources": {}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{
			request: "crt.HandleViewModelAttributeChangeRequest",
			handler: async (request, next) => {
					if(request.attributeName==="PageParameters_UsrLookupParameter1_vhbni6p"){
						const object = request.value;
					if (typeof object === "object" && object !== null && !Array.isArray(object)) {
					    const objectCode=object.secondaryDisplayValue;
						const objectModel = await sdk.Model.create(objectCode);
					const objectSchema = await objectModel.getSchema();
					console.log(objectSchema);
					const attributes = objectSchema.attributes;
					const headers = ["Code", "Name", "Required"];

					const rows = attributes.map(attr => [
					    attr.name,
					    attr.caption,
					    attr.isRequired ? "Yes" : "No"
					  ]);
					console.log({headers,rows});
					const Value = JSON.stringify({headers,rows});
				
					request.$context.tableValue = Value;
					request.$context.tableVisible = true;
					} else {
					    return next?.handle(request);
					}
						
					}
			    return next?.handle(request);
			}
			},
			{
			    request: "crt.CanDiscardUnsavedDataRequest",
			    handler: async (request, next) => {
			        return true;
			    }
			}
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});