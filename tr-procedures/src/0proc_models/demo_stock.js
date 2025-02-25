export const Stock = 
{
  "TrackingChanges":{
	  "version": 0.9,
	  "last change on (YYYYMMDD)": "20230604", 
	  "last_change_note_20230604": "Naming Convention, replaced certif by qualif and volume by quantity",
	  "last_change_note_20230530": "Added filter by daterange for expired lots",
      "last_change_note_20230517": "Added new view Config References",
	  "last_change_note_20230408": "Added min_allowed 0 and max_dp 0 to verify the functionality in ADJUST_INV_LOT_QUANTITY and ADD_INV_LOT_QUANTITY",
	  "last_change_note_20230407": "Added min_allowed 0 and max_dp 0 to verify the functionality in allInventoryLots for CONSUME_INV_LOT_QUANTITY",
	  "last_change_note_20230327": "Added Qualification event enter results in main inventory lots view",
	  "last_change_note_20230327_2": "Added new view, QualificationInProgress"
  },
  "ModuleSettings":{
	  "actionsEndpoints":[
		{ "name": "InventoryLot" , "url" : "/app/procs/InvTrackingAPIactions"}
	  ],
	  "queriesEndpoints":[
		{ "name": "InventoryLot" , "url" : "/app/procs/InvTrackingAPIqueries"}
	  ]
  },
  "InventoryLotsGeneral": {
	"component": "TableWithButtons",
    "langConfig": {
      "title": {
        "InventoryLots.1": {
          "label_en": "Active Inventory Lots",
          "label_es": "Lotes de inventario activos"
        }
      },
      "gridHeader": {
        "category": {
          "label_en": "Category", "label_es": "Categoría", "sort": false, "filter": true, "is_icon": false, "width": "20%", "align": "left"
        },
        "reference": {
          "label_en": "Reference", "label_es": "Referencia", "sort": false, "filter": true, "is_icon": false, "width": "20%"
        },
        "lot_name": {
          "label_en": "Name", "label_es": "lot_id", "Nombre": false, "filter": true, "is_icon": false, "width": "10%"
        },
        "status": {
          "label_en": "Status", "label_es": "Estado", "sort": false, "filter": true, "width": "10%"
        },
        "quantity": {
          "label_en": "Quantity", "label_es": "Cantidad", "sort": false, "filter": true, "width": "10%"
        },
        "quantity_uom": {
          "label_en": "uom", "label_es": "uom", "sort": false, "filter": true, "width": "10%"
        }
      },
      "gridHeaderOptionalFlds": {
        "category": {
          "label_en": "extra", "label_es": "Categoría", "sort": false, "filter": true, "is_icon": false, "width": "20%", "align": "left"
		}  
	  },
	  "exportToCSV":{
		"requiredFlds":"lot_name",
		"optionalFlds": "quantity"
	  }
    },
    "viewQuery":{ "actionName": "ALL_INVENTORY_LOTS",
      "endPoint": "/app/procs/InvTrackingAPIqueries",
      "addRefreshButton": true,
      "button": {
        "icon": "refresh",
        "title": {
          "label_en": "Reload", "label_es": "Recargar"
        },
        "requiresGridItemSelected": true
      }
    },
    "actions": [
		{"actionName": "zzzNEW_INVENTORY_LOT",
		"requiresDialog": true,
        "endPointParams": [
          { "argumentName": "reference", "element": "tree1", "defaultValue": ""  },
          { "argumentName": "category", "element": "list1", "defaultValue": "" },
          { "argumentName": "lotName", "element": "text2", "defaultValue": "" },
		  { "argumentName": "quantity", "element": "number1", "defaultValue": "" },
		  { "argumentName": "quantityUom", "fixValue": "mL" },
          { "argumentName": "expiryDate", "element": "date1", "defaultValue": "", "optional": true },
		  { "argumentName": "expiryDateInUse", "element": "date2", "defaultValue": "", "optional": true},
		  { "argumentName": "retestDate", "element": "date3", "defaultValue": "", "optional": true},
		  { "argumentName": "vendor", "element": "text3", "defaultValue": "" },
		  { "argumentName": "vendorReference", "element": "text5", "defaultValue": "" },
		  { "argumentName": "vendorLot", "element": "text4", "defaultValue": "" },
		  { "argumentName": "purity", "element": "text6", "defaultValue": "" },
		  { "argumentName": "conservationCondition", "element": "list7", "defaultValue": "" },
          { "argumentName": "numEntries", "element": "number2", "defaultValue": "" }
        ],
        "button": {
          "icon": "create_new_folder",
          "title": {
            "label_en": "New", "label_es": "Nuevo"
          },
          "requiresGridItemSelected": false
        },
        "dialogInfo": {          
          "name": "genericDialog",
          "fields": [
			{"tree1":{
				"treeElementData":[
					{
					  "name": "hola lvl1",
					  "level2":[
						{ 
						  "otro":"hola lvl2"
						},
						{ 
						  "otro":"adios lvl2"
						}
					  ]
					},
					{
					  "name": "adios lvl1"
					}
				  ],
				"treeElementSpecification":[
					{
					  "key": "name",
					  "label": "name",
					  "label2": [
						"'('",
						"name",
						"') '",
						"name"
					  ],
					  "children": "level2"
					},
					{
					  "key": "otro",
					  "label": "otro",
					  "label2": [
						"'('",
						"otro",
						"') '",
						"otro"
					  ],
					  "children": "children"
					}
				]
			}

			},
			{"list1": {
				"label_en": "Category", "label_es": "Categoría", "optional": true,
				"addBlankValueOnTop": true, "addBlankValueAtBottom": false,
				"valuesFromMasterData": {
					"propertyNameContainer": "category_and_references",
					"propertyNameContainerLevelPropertyKeyName": "name",
					"propertyKeyName": "name", "propertyKeyValueEn": "name", "propertyKeyValueEs": "name"
				},
				"dependencyActionFields":[
					{"field": "text4", "staticValue": "hola" },
					{"field": "text3", "fieldValue": "name" },
					{"field": "list2", "allRecordEntryWithList": "inv_reference", 
						"propertyNameInDestination": "category_and_references"}
				],
				"dependencyFieldBehaviorForAll":
					{"rule": "whenEmpty", "resetValue": true, "action": "disable", 
						"exceptionFields":[ "list2"]}
				,
				"dependencyFieldBehavior":[
					{"field": "text4", "rule": "whenEmpty", "resetValue": true}, 
					{"field": "text5", "rule": "whenEmpty"}, 
					{"field": "list2", "rule": "whenEmpty", "resetValue": true},
					{"field": "number2", "rule": "whenEmpty", "resetValue": true, 
						"action": "hide"}
				]

			}},
			{"list2": { "label_en": "Reference", "label_es": "Referencia",
			  "valuesFromMasterData": {
				"propertyNameContainer": "category_and_references",
				"propertyNameContainerLevelPropertyKeyName": "name",
				"filterDependency": ["list1"],
				"selectedEntryFromFilterPropertyName": "inv_reference",
				"propertyKeyName": "name", "propertyKeyValueEn": "name", "propertyKeyValueEs": "name"				
			  }			

			}
			},
            {"text2": { "label_en": "lot id", "label_es": "id Lote" ,
				}
			},
			{"number1": {"label_en": "Quantity", "label_es": "Cantidad", "optional": true , "min_allowed":0, "max_dp":2}},			
            {"date1": {"label_en": "Expiry Date", "label_es": "Fecha Caducidad", "optional": true }},
            {"date2": {"label_en": "Expiry Date In Use", "label_es": "Fecha Caducidad En Uso", "optional": true }},
            {"date3": {"label_en": "Retest Date", "label_es": "Fecha Retest", "optional": true }},
			{"text3": { "label_en": "Vendor", "label_es": "Proveedor", "optional": true }},			
			{"text4": { "label_en": "Vendor Lot", "label_es": "Lote de Proveedor", "optional": true }},			
			{"text5": { "label_en": "Vendor Reference", "label_es": "Referencia de Proveedor", "optional": true }},			
			{"text6": { "label_en": "Purity", "label_es": "Pureza", "optional": true }},			
			{"list7": { "label_en": "Conservation Condition", "label_es": "Condición de Conservación", "optional": true ,
				"items":[
					{"keyName":"ROOM_TEMP", "keyValue_en":"Room temperature", "keyValue_es":"Temperatura del recinto"},
					{"keyName":"15-25ºC", "keyValue_en":"15-25ºC", "keyValue_es":"15-25ºC"},
					{"keyName":"NMT 30ºc", "keyValue_en":"NMT 30ºc", "keyValue_es":"NMT 30ºc"},
					{"keyName":"2-8ºc", "keyValue_en":"2-8ºc", "keyValue_es":"2-8ºc"},
					{"keyName":"Freezer (-20ºC)", "keyValue_en":"Freezer (-20ºC)", "keyValue_es":"Congelador (-20ºC)"}
				]}
			},
            {"number2": {"label_en": "Number of Entries", "label_es": "Unidades recepcionadas", "optional": true, "default_value": 1 }}		
          ]
        }
      },
		{"actionName": "AUDIT_FOR_GIVEN_INVENTORY_LOT",	  
			"parentAuditBusinessRuleName": "inventoryAuditRevisionMode",
			"childAuditBusinessRuleName": "inventoryAuditChildRevisionRequired",		
			"requiresDialog": true,
			"endPoint": "/app/procs/InvTrackingAPIqueries",
			"button": {
			  "icon": "rule",
			  "title": {
				"label_en": "Lot Audit", "label_es": "Auditoría de Lote"
			  },
			  "requiresGridItemSelected": true
			},
			"clientMethod": "getObjectAuditInfo",
			"endPointParams": [
			  { "argumentName": "lotName", "selObjectPropertyName": "lot_name" }
			],        
			"dialogInfo": { 
				"name": "auditDialog",
				"automatic": true,
				"action": [
				{
				  "actionName": "LOTAUDIT_SET_AUDIT_ID_REVIEWED",
				  "requiresDialog": false,
				  "notGetViewData": true,
				  "secondaryActionToPerform": {
					  "name": "getObjectAuditInfo",
					  "endPointParams": [
						{ "argumentName": "lotName", "selObjectPropertyName": "lot_name" }
					  ]
				  },
				  "endPointUrl": "Samples",
				  "clientMethod": "signAudit",
				  "endPointParams": [
					{ "argumentName": "lotName", "selObjectPropertyName": "lot_name" },
					{ "argumentName": "auditId", "targetValue": true }
				  ]
				}
				]
			}
		},
		{"actionName": "TURN_LOT_UNAVAILABLE",
			"requiresDialog": false,
			"button": {
			  "img": "deactivate.svg",
			  "title": {
				"label_en": "Turn Unavailable", "label_es": "Poner NO Disponible"
			  },
			  "requiresGridItemSelected": true,
			  "hideWhenSelectedItem": [{
				"column": "status", "value": "AVAILABLE_FOR_USER"
			  }]
			},
			"endPointParams": [
			  { "argumentName": "lotName", "selObjectPropertyName": "lot_name" },
			  { "argumentName": "category", "selObjectPropertyName": "category" },
			  { "argumentName": "reference", "selObjectPropertyName": "reference" }			  
			]
		},
		{"actionName": "TURN_LOT_AVAILABLE",
			"requiresDialog": false,
			"button": {
			  "img": "activate.svg",
			  "title": {
				"label_en": "Turn Available", "label_es": "Poner Disponible"
			  },
			  "requiresGridItemSelected": true,
			  "xshowWhenSelectedItem": [
				{"column": "is_locked", "value": false},
				{"column": "status", "value": "NEW|QUARANTINE"}			
			]
			},
			"endPointParams": [
			  { "argumentName": "lotName", "selObjectPropertyName": "lot_name" },
			  { "argumentName": "category", "selObjectPropertyName": "category" },
			  { "argumentName": "reference", "selObjectPropertyName": "reference" }
			]
		},
	
		{"actionName": "QUALIFIFICATION_EVENT_VARIABLES",
			"requiresDialog": true,
			"alertMsg": {
				"empty": { "label_en": "No pending variables to enter result", "label_es": "No hay variables pendientes de resultados" }
			},
			"button": {
				"icon": "document_scanner",
				"title": {"label_en": "Enter Value", "label_es": "Ingrese el Valor"},
				"requiresGridItemSelected": true,
				"showWhenSelectedItem": 				
					{"column": "status", "value": "QUARANTINE"}
			},
			"resultHeader": {
				"id": {"label_en": "Id", "label_es": "Id", "width": "10%"},
				"param_name": {"label_en": "Parameter", "label_es": "Parámetro"},
				"value": {"label_en": "Value", "label_es": "Valor"}
			},
			"resultHeaderObjectLabelTopLeft": {
				"label_en": "Lot Qualification:", "label_es": "Cualificación de Lote :"
			},    
			"dialogInfo": { 
				"name": "resultDialog",
				"keyFldName": "qualif_id",
				"subQueryName": "getParams",		  
				"viewQuery": {
					"actionName": "QUALIFIFICATION_EVENT_VARIABLES",
					"endPoint": "/app/procs/InvTrackingAPIqueries",
					"endPointParams": [				  
						{ "argumentName": "lotName", "selObjectPropertyName": "lot_name"},
						{ "argumentName": "category", "selObjectPropertyName": "category"},
						{ "argumentName": "reference", "selObjectPropertyName": "reference"}
					]
				},			  
				"automatic": true,
				"action": [
					{ "actionName": "ENTER_EVENT_RESULT",
						"notGetViewData": true,
						"requiresDialog": false,
						"endPointUrl": "Samples",
						"clientMethod": "enterEventResult",
						"endPointParams": [
							{ "argumentName": "newValue", "targetValue": true },
							{ "argumentName": "qualifId", "selObjectPropertyName": "qualif_id" },
							{ "argumentName": "lotName", "selObjectPropertyName": "lot_name" },
							{ "argumentName": "category", "selObjectPropertyName": "category"},
							{ "argumentName": "reference", "selObjectPropertyName": "reference"},
							{ "argumentName": "variableName", "targetValue": true }
						]
					}
				]
			},
			"endPointParams": [
				{ "argumentName": "sampleAnalysisResultFieldToRetrieve", "value": "result_id|analysis|method_name|method_version|param_name|param_type|raw_value|uom|spec_eval|spec_eval_detail|status|min_val_allowed|min_allowed_strict|max_val_allowed|max_allowed_strict" },
				{ "argumentName": "sortFieldsName", "value": "test_id|result_id" },
				{ "argumentName": "sampleId", "selObjectPropertyName": "sample_id" }
			]
		},
		{"actionName": "COMPLETE_QUALIFICATION",
			"requiresDialog": true,
			"dialogInfo": {          
			  "name": "genericDialog",
				"fields": [
					{"list8": { "label_en": "Decision", "label_es": "Decisión",
					  "items":[
						{"keyName":"ACCEPTED", "keyValue_en":"Accepted", "keyValue_es":"Aceptado"},
						{"keyName":"ACCEPTED_WITH_RESTRICTIONS", "keyValue_en":"Accepted with restrictions", "keyValue_es":"Aceptado con restricciones"},
						{"keyName":"REJECTED", "keyValue_en":"Rejected", "keyValue_es":"Rechazado"}
					  ]}
					}      
				]
			},
			"button": {
			  "icon": "alarm_on",
			  "title": {
				"label_en": "Complete Qualification", "label_es": "Completar Cualificación"
			  },
			  "requiresGridItemSelected": true,
			  "showWhenSelectedItem": 				
				{"column": "status", "value": "QUARANTINE"}
			   
			},
			"endPointParams": [
			  { "argumentName": "lotName", "selObjectPropertyName": "lot_name" },
			  { "argumentName": "category", "selObjectPropertyName": "category" },
			  { "argumentName": "reference", "selObjectPropertyName": "reference" },
			  { "argumentName": "decision", "element": "list8" }
			]
		},
		{"actionName": "CONSUME_INV_LOT_QUANTITY",
			"requiresDialog": true,
			"button": {
			  "icon": "receipt-text",
			  "title": {
				"label_en": "Consume", "label_es": "Consumir"
			  },
			  "requiresGridItemSelected": true,
			  "hideWhenSelectedItem": {
				"column": "status",
				"value": "RETIRED"
			  }
			},
			"dialogInfo": {          
				"name": "genericDialog",
				"fields": [
					{"number1": {"label_en": "Quantity to consume", "label_es": "Cantidad a consumir" , "min_allowed":0, "max_dp":2}}
				]
			},
			
			"endPointParams": [
			  { "argumentName": "lotName", "selObjectPropertyName": "lot_name" },
			  { "argumentName": "category", "selObjectPropertyName": "category" },
			  { "argumentName": "reference", "selObjectPropertyName": "reference" },
			  { "argumentName": "quantityUom", "selObjectPropertyName": "quantity_uom" },
			  { "argumentName": "quantity", "element": "number1", "defaultValue": "" }
			]
		},		
		{"actionName": "ADJUST_INV_LOT_QUANTITY",
			"requiresDialog": true,
			"button": {
			  "icon": "receipt-text",
			  "title": {
				"label_en": "Adjust", "label_es": "Ajustar"
			  },
			  "requiresGridItemSelected": true,
			  "hideWhenSelectedItem": {
				"column": "status", 
				"value": "RETIRED"
			  }
			},
			"dialogInfo": {          
				"name": "genericDialog",
				"fields": [
					{"number1": {"label_en": "Adjust (new)quantity", "label_es": "(Nuevo)Cantidad a ajustar", "min_allowed":0, "max_dp":2 }}
				]
			},
			
			"endPointParams": [
			  { "argumentName": "lotName", "selObjectPropertyName": "lot_name" },
			  { "argumentName": "category", "selObjectPropertyName": "category" },
			  { "argumentName": "reference", "selObjectPropertyName": "reference" },
			  { "argumentName": "quantityUom", "selObjectPropertyName": "quantity_uom" },
			  { "argumentName": "quantity", "element": "number1", "defaultValue": "" }
			]
		},		
		{"actionName": "ADD_INV_LOT_QUANTITY",
			"requiresDialog": true,
			"button": {
			  "icon": "receipt-text",
			  "title": {
				"label_en": "Add", "label_es": "Añadir"
			  },
			  "requiresGridItemSelected": true,
			  "hideWhenSelectedItem": {
				"column": "status",
				"value": "RETIRED"
			  }
			},
			"dialogInfo": {          
				"name": "genericDialog",
				"fields": [
					{"number1": {"label_en": "Quantity to add", "label_es": "Cantidad a añadir", "min_allowed":0, "max_dp":2 }}	
					]
			},
			
			"endPointParams": [
			  { "argumentName": "lotName", "selObjectPropertyName": "lot_name" },
			  { "argumentName": "category", "selObjectPropertyName": "category" },
			  { "argumentName": "reference", "selObjectPropertyName": "reference" },
			  { "argumentName": "quantityUom", "selObjectPropertyName": "quantity_uom" },
			  { "argumentName": "quantity", "element": "number1", "defaultValue": "" }
			]
		}	
    ]
  },   
  "InventoryLotsMediosDeCultivo": {
	"component": "TableWithButtons",
    "langConfig": {
      "title": {
        "InventoryLots.MediosDeCultivo": {
          "label_en": "Active Inventory Lots",
          "label_es": "Lotes de inventario activos"
        }
      },
      "gridHeader": {
        "category": {
          "label_en": "Category", "label_es": "Categoría", "sort": false, "filter": true, "is_icon": false, "width": "20%", "align": "left"
        },
        "reference": {
          "label_en": "Reference", "label_es": "Referencia", "sort": false, "filter": true, "is_icon": false, "width": "20%"
        },
        "lot_name": {
          "label_en": "Name", "label_es": "lot_id", "Nombre": false, "filter": true, "is_icon": false, "width": "10%"
        },
        "status": {
          "label_en": "Status", "label_es": "Estado", "sort": false, "filter": true, "width": "10%"
        },
        "quantity": {
          "label_en": "Quantity", "label_es": "Cantidad", "sort": false, "filter": true, "width": "10%"
        },
        "quantity_uom": {
          "label_en": "uom", "label_es": "uom", "sort": false, "filter": true, "width": "10%"
        }
      }
    },
    "viewQuery":{ "actionName": "ALL_INVENTORY_LOTS",
      "endPoint": "/app/procs/InvTrackingAPIqueries",
	  "endPointParams": [
          { "argumentName": "category", "fixValue": "Medios de Cultivo"}
        ],
      "addRefreshButton": true,
      "button": {
        "icon": "refresh",
        "title": {
          "label_en": "Reload", "label_es": "Recargar"
        },
        "requiresGridItemSelected": true
      }
    },
    "actions": [
		{"actionName": "NEW_INVENTORY_LOT",
		"requiresDialog": true,
        "endPointParams": [
          { "argumentName": "reference", "element": "list1", "defaultValue": ""  },
          { "argumentName": "category", "fixValue": "Medios de Cultivo"},
          { "argumentName": "lotName", "element": "text2", "defaultValue": "" },
		  { "argumentName": "quantity", "element": "number1", "defaultValue": "" },
		  { "argumentName": "quantityUom", "fixValue": "mL" },
          { "argumentName": "expiryDate", "element": "date1", "defaultValue": "", "optional": true },
		  { "argumentName": "expiryDateInUse", "element": "date2", "defaultValue": "", "optional": true},
		  { "argumentName": "retestDate", "element": "date3", "defaultValue": "", "optional": true },
		  { "argumentName": "vendor", "element": "text3", "defaultValue": "" },		  
		  { "argumentName": "vendorReference", "element": "text5", "defaultValue": "" },
		  { "argumentName": "vendorLot", "element": "text4", "defaultValue": "" },
		  { "argumentName": "purity", "element": "text6", "defaultValue": "" },
		  { "argumentName": "conservationCondition", "element": "list7", "defaultValue": "" },
          { "argumentName": "numEntries", "element": "number2", "defaultValue": "" }
        ],
        "button": {
          "icon": "create_new_folder",
          "title": {
            "label_en": "New", "label_es": "Nuevo"
          },
          "requiresGridItemSelected": false
        },
        "dialogInfo": {          
          "name": "genericDialog",
          "fields": [
			{"list1": {
			  "label_en": "Reference", "label_es": "Referencia", "optional": false,
			  "addBlankValueOnTop": true, "addBlankValueAtBottom": false,
			  "valuesFromMasterData": {
				"filterInFirstLevel": true, "elementName":"list1",
				"propertyNameContainer": "category_and_references",
				"propertyNameContainerLevelPropertyKeyName": "name",
				"propertyNameContainerLevelfixValue": "Medios de Cultivo",
				"propertyNameContainerLevel2": "inv_reference",
				"propertyKeyName": "name", "propertyKeyValueEn": "name", "propertyKeyValueEs": "name"
			  }			
			}},
            {"text2": { "label_en": "lot id", "label_es": "id Lote" }},
			{"number1": {"label_en": "Quantity", "label_es": "Cantidad", "optional": true }},			
            {"date1": {"label_en": "Expiry Date", "label_es": "Fecha Caducidad", "optional": true }},
            {"date2": {"label_en": "Expiry Date In Use", "label_es": "Fecha Caducidad En Uso", "optional": true }},
            {"date3": {"label_en": "Retest Date", "label_es": "Fecha Retest", "optional": true }},
			{"text3": { "label_en": "Vendor", "label_es": "Proveedor", "optional": true }},			
			{"text4": { "label_en": "Vendor Lot", "label_es": "Lote de Proveedor", "optional": true }},			
			{"text5": { "label_en": "Vendor Reference", "label_es": "Referencia de Proveedor", "optional": true }},			
			{"text6": { "label_en": "Purity", "label_es": "Pureza", "optional": true }},			
			{"list7": { "label_en": "Conservation Condition", "label_es": "Condición de Conservación", "optional": true ,
				"items":[
					{"keyName":"ROOM_TEMP", "keyValue_en":"Room temperature", "keyValue_es":"Temperatura del recinto"},
					{"keyName":"15-25ºC", "keyValue_en":"15-25ºC", "keyValue_es":"15-25ºC"},
					{"keyName":"NMT 30ºc", "keyValue_en":"NMT 30ºc", "keyValue_es":"NMT 30ºc"},
					{"keyName":"2-8ºc", "keyValue_en":"2-8ºc", "keyValue_es":"2-8ºc"},
					{"keyName":"Freezer (-20ºC)", "keyValue_en":"Freezer (-20ºC)", "keyValue_es":"Congelador (-20ºC)"}
				]}
			},
            {"number2": {"label_en": "Number of Entries", "label_es": "Unidades recepcionadas", "optional": true, "default_value": 1 }}		
          ]
        }
      },
		{
			"actionName": "AUDIT_FOR_GIVEN_INVENTORY_LOT",	
			"parentAuditBusinessRuleName": "inventoryAuditRevisionMode",
			"childAuditBusinessRuleName": "inventoryAuditChildRevisionRequired",		
			"requiresDialog": true,
			"endPoint": "/app/procs/InvTrackingAPIqueries",
			"button": {
			  "icon": "rule",
			  "title": {
				"label_en": "Lot Audit", "label_es": "Auditoría de Lote"
			  },
			  "requiresGridItemSelected": true
			},
			"clientMethod": "getObjectAuditInfo",
			"endPointParams": [
			  { "argumentName": "lotName", "selObjectPropertyName": "lot_name" }
			],        
			"dialogInfo": { 
				"name": "auditDialog",
				"automatic": true,
				"action": [
				{
				  "actionName": "LOTAUDIT_SET_AUDIT_ID_REVIEWED",
				  "requiresDialog": false,
				  "notGetViewData": true,
				  "secondaryActionToPerform": {
					  "name": "getObjectAuditInfo",
					  "endPointParams": [
						{ "argumentName": "lotName", "selObjectPropertyName": "lot_name" }
					  ]
				  },
				  "endPointUrl": "Samples",
				  "clientMethod": "signAudit",
				  "endPointParams": [
					{ "argumentName": "lotName", "selObjectPropertyName": "lot_name" },
					{ "argumentName": "auditId", "targetValue": true }
				  ]
				}
				]
			}
		},
		{"actionName": "TURN_LOT_UNAVAILABLE",
			"requiresDialog": false,
			"button": {
			  "img": "deactivate.svg",
			  "title": {
				"label_en": "Turn Unavailable", "label_es": "Poner NO Disponible"
			  },
			  "requiresGridItemSelected": true,
			  "hideWhenSelectedItem": [{
				"column": "status", "value": "AVAILABLE_FOR_USER"
			  }]
			},
			"endPointParams": [
			  { "argumentName": "lotName", "selObjectPropertyName": "lot_name" },
			  { "argumentName": "category", "selObjectPropertyName": "category" },
			  { "argumentName": "reference", "selObjectPropertyName": "reference" }			  
			]
		},
		{"actionName": "TURN_LOT_AVAILABLE",
			"requiresDialog": false,
			"button": {
			  "img": "activate.svg",
			  "title": {
				"label_en": "Turn Available", "label_es": "Poner Disponible"
			  },
			  "requiresGridItemSelected": true,
			  "xshowWhenSelectedItem": [
				{"column": "is_locked", "value": false},
				{"column": "status", "value": "NEW|QUARANTINE"}			
			]
			},
			"endPointParams": [
			  { "argumentName": "lotName", "selObjectPropertyName": "lot_name" },
			  { "argumentName": "category", "selObjectPropertyName": "category" },
			  { "argumentName": "reference", "selObjectPropertyName": "reference" }
			]
		},
		{"actionName": "COMPLETE_QUALIFICATION",
			"requiresDialog": true,
			"dialogInfo": {          
			  "name": "genericDialog",
				"fields": [
					{"list8": { "label_en": "Decision", "label_es": "Decisión",
					  "items":[
						{"keyName":"ACCEPTED", "keyValue_en":"Accepted", "keyValue_es":"Aceptado"},
						{"keyName":"ACCEPTED_WITH_RESTRICTIONS", "keyValue_en":"Accepted with restrictions", "keyValue_es":"Aceptado con restricciones"},
						{"keyName":"REJECTED", "keyValue_en":"Rejected", "keyValue_es":"Rechazado"}
					  ]}
					}      
				]
			},
			"button": {
			  "icon": "alarm_on",
			  "title": {
				"label_en": "Complete Qualification", "label_es": "Completar Cualificación"
			  },
			  "requiresGridItemSelected": true,
			  "showWhenSelectedItem": 				
				{"column": "status", "value": "QUARANTINE"}
			   
			},
			"endPointParams": [
			  { "argumentName": "lotName", "selObjectPropertyName": "lot_name" },
			  { "argumentName": "category", "selObjectPropertyName": "category" },
			  { "argumentName": "reference", "selObjectPropertyName": "reference" },
			  { "argumentName": "decision", "element": "list8" }
			]
		},
		{"actionName": "COMPLETE_QUALIFICATION",
			"requiresDialog": true,
			"dialogInfo": {          
			  "name": "genericDialog",
				"fields": [
					{"list9": { "label_en": "Decision", "label_es": "Decisión",
					  "items":[
						{"keyName":"ACCEPTED", "keyValue_en":"Accepted", "keyValue_es":"Aceptado"},
						{"keyName":"ACCEPTED_WITH_RESTRICTIONS", "keyValue_en":"Accepted with restrictions", "keyValue_es":"Aceptado con restricciones"},
						{"keyName":"REJECTED", "keyValue_en":"Rejected", "keyValue_es":"Rechazado"}
					  ]}
					}      
				]
			},
			"button": {
			  "icon": "alarm_on",
			  "title": {
				"label_en": "Complete Qualification + Available", "label_es": "Completar Cualificación + Disponible"
			  },
			  "requiresGridItemSelected": true,
			  "showWhenSelectedItem": 				
				{"column": "status", "value": "QUARANTINE"}
			   
			},
			"endPointParams": [
			  { "argumentName": "lotName", "selObjectPropertyName": "lot_name" },
			  { "argumentName": "category", "selObjectPropertyName": "category" },
			  { "argumentName": "reference", "selObjectPropertyName": "reference" },
			  { "argumentName": "decision", "element": "list9" },
			  { "argumentName": "turn_available_lot", "fixValue": "true" }			  
			]
		},		
		{"actionName": "CONSUME_INV_LOT_QUANTITY",
			"requiresDialog": true,
			"button": {
			  "icon": "receipt-text",
			  "title": {
				"label_en": "Consume", "label_es": "Consumir"
			  },
			  "requiresGridItemSelected": true,
			  "hideWhenSelectedItem": {
				"column": "status",
				"value": "RETIRED"
			  }
			},
			"dialogInfo": {          
				"name": "genericDialog",
				"fields": [
					{"number1": {"label_en": "Quantity to consume", "label_es": "Cantidad a consumir", "min_allowed":0, "max_dp":2 }}		
					]
			},
			
			"endPointParams": [
			  { "argumentName": "lotName", "selObjectPropertyName": "lot_name" },
			  { "argumentName": "category", "selObjectPropertyName": "category" },
			  { "argumentName": "reference", "selObjectPropertyName": "reference" },
			  { "argumentName": "quantityUom", "selObjectPropertyName": "quantity_uom" },
			  { "argumentName": "quantity", "element": "number1", "defaultValue": "" }
			]
		},		
		{"actionName": "ADJUST_INV_LOT_QUANTITY",
			"requiresDialog": true,
			"button": {
			  "icon": "receipt-text",
			  "title": {
				"label_en": "Adjust", "label_es": "Ajustar"
			  },
			  "requiresGridItemSelected": true,
			  "hideWhenSelectedItem": {
				"column": "status", 
				"value": "RETIRED"
			  }
			},
			"dialogInfo": {          
				"name": "genericDialog",
				"fields": [
					{"number1": {"label_en": "Adjust (new)quantity", "label_es": "(Nuevo)Cantidad a ajustar", "min_allowed":0, "max_dp":2 }}
				]
			},
			
			"endPointParams": [
			  { "argumentName": "lotName", "selObjectPropertyName": "lot_name" },
			  { "argumentName": "category", "selObjectPropertyName": "category" },
			  { "argumentName": "reference", "selObjectPropertyName": "reference" },
			  { "argumentName": "quantityUom", "selObjectPropertyName": "quantity_uom" },
			  { "argumentName": "quantity", "element": "number1", "defaultValue": "" }
			]
		},		
		{"actionName": "ADD_INV_LOT_QUANTITY",
			"requiresDialog": true,
			"button": {
			  "icon": "receipt-text",
			  "title": {
				"label_en": "Add", "label_es": "Añadir"
			  },
			  "requiresGridItemSelected": true,
			  "hideWhenSelectedItem": {
				"column": "status",
				"value": "RETIRED"
			  }
			},
			"dialogInfo": {          
				"name": "genericDialog",
				"fields": [
					{"number1": {"label_en": "Quantity to add", "label_es": "Cantidad a añadir", "min_allowed":0, "max_dp":2 }}			
					]
			},
			
			"endPointParams": [
			  { "argumentName": "lotName", "selObjectPropertyName": "lot_name" },
			  { "argumentName": "category", "selObjectPropertyName": "category" },
			  { "argumentName": "reference", "selObjectPropertyName": "reference" },
			  { "argumentName": "quantityUom", "selObjectPropertyName": "quantity_uom" },
			  { "argumentName": "quantity", "element": "number1", "defaultValue": "" }
			]
		}	
    ]
  }, 
  "InventoryLotsEstandPrim": {
	"component": "TableWithButtons",
    "langConfig": {
      "title": {
        "InventoryLots.EstandarPrim": {
          "label_en": "Active Inventory Lots",
          "label_es": "Lotes de inventario activos"
        }
      },
      "gridHeader": {
        "category": {
          "label_en": "Category", "label_es": "Categoría", "sort": false, "filter": true, "is_icon": false, "width": "20%", "align": "left"
        },
        "reference": {
          "label_en": "Reference", "label_es": "Referencia", "sort": false, "filter": true, "is_icon": false, "width": "20%"
        },
        "lot_name": {
          "label_en": "Name", "label_es": "lot_id", "Nombre": false, "filter": true, "is_icon": false, "width": "10%"
        },
        "status": {
          "label_en": "Status", "label_es": "Estado", "sort": false, "filter": true, "width": "10%"
        },
        "quantity": {
          "label_en": "Quantity", "label_es": "Cantidad", "sort": false, "filter": true, "width": "10%"
        },
        "quantity_uom": {
          "label_en": "uom", "label_es": "uom", "sort": false, "filter": true, "width": "10%"
        }
      }
    },
    "viewQuery":{ "actionName": "ALL_INVENTORY_LOTS",
      "endPoint": "/app/procs/InvTrackingAPIqueries",
	  "endPointParams": [
          { "argumentName": "category", "fixValue": "Estándares Primarios"}
        ],
      "addRefreshButton": true,
      "button": {
        "icon": "refresh",
        "title": {
          "label_en": "Reload", "label_es": "Recargar"
        },
        "requiresGridItemSelected": true
      }
    },
    "actions": [
		{"actionName": "NEW_INVENTORY_LOT",
		"requiresDialog": true,
        "endPointParams": [
          { "argumentName": "reference", "element": "list1", "defaultValue": ""  },
          { "argumentName": "category", "fixValue": "Estándares Primarios"},
          { "argumentName": "lotName", "element": "text2", "defaultValue": "" },
		  { "argumentName": "quantity", "element": "number1", "defaultValue": "" },
		  { "argumentName": "quantityUom", "selObjectPropertyName": "quantity_uom" },
          { "argumentName": "expiryDate", "element": "date1", "defaultValue": "", "optional": true },
		  { "argumentName": "expiryDateInUse", "element": "date2", "defaultValue": "", "optional": true},
		  { "argumentName": "retestDate", "element": "date3", "defaultValue": "", "optional": true },
		  { "argumentName": "vendor", "element": "text3", "defaultValue": "" },
		  { "argumentName": "vendorReference", "element": "text5", "defaultValue": "" },
		  { "argumentName": "vendorLot", "element": "text4", "defaultValue": "" },
		  { "argumentName": "purity", "element": "text6", "defaultValue": "" },
		  { "argumentName": "conservationCondition", "element": "list7", "defaultValue": "" },
          { "argumentName": "numEntries", "element": "number2", "defaultValue": "" }
        ],
        "button": {
          "icon": "create_new_folder",
          "title": {
            "label_en": "New", "label_es": "Nuevo"
          },
          "requiresGridItemSelected": false
        },
        "dialogInfo": {          
          "name": "genericDialog",
          "fields": [
			{"list1": {
			  "items": [
			  { "keyName": "Estándares Primarios", "keyValue_en": "Estándares Primarios", "keyValue_es": "Estándares Primarios" }
			  ],
			  "label_en": "Reference", "label_es": "Referencia", "optional": true,
			  "addBlankValueOnTop": true, "addBlankValueAtBottom": false,
			  "valuesFromMasterData": {
				"filterInFirstLevel": true, "elementName":"list1",
				"propertyNameContainer": "category_and_references",
				"propertyNameContainerLevelPropertyKeyName": "name",
				"propertyNameContainerLevelfixValue": "Estándares Primarios",
				"propertyNameContainerLevel2": "inv_reference",
				"propertyKeyName": "name", "propertyKeyValueEn": "name", "propertyKeyValueEs": "name"
			  }			
			}},
            {"text2": { "label_en": "lot id", "label_es": "id Lote" }},
			{"number1": {"label_en": "Quantity", "label_es": "Cantidad", "optional": true }},			
            {"date1": {"label_en": "Expiry Date", "label_es": "Fecha Caducidad", "optional": true }},
            {"date2": {"label_en": "Expiry Date In Use", "label_es": "Fecha Caducidad En Uso", "optional": true }},
            {"date3": {"label_en": "Retest Date", "label_es": "Fecha Retest", "optional": true }},
			{"text3": { "label_en": "Vendor", "label_es": "Proveedor", "optional": true }},			
			{"text4": { "label_en": "Vendor Lot", "label_es": "Lote de Proveedor", "optional": true }},			
			{"text5": { "label_en": "Vendor Reference", "label_es": "Referencia de Proveedor", "optional": true }},			
			{"text6": { "label_en": "Purity", "label_es": "Pureza", "optional": true }},
			{"list7": { "label_en": "Conservation Condition", "label_es": "Condición de Conservación", "optional": true ,
				"items":[
					{"keyName":"ROOM_TEMP", "keyValue_en":"Room temperature", "keyValue_es":"Temperatura del recinto"},
					{"keyName":"15-25ºC", "keyValue_en":"15-25ºC", "keyValue_es":"15-25ºC"},
					{"keyName":"NMT 30ºc", "keyValue_en":"NMT 30ºc", "keyValue_es":"NMT 30ºc"},
					{"keyName":"2-8ºc", "keyValue_en":"2-8ºc", "keyValue_es":"2-8ºc"},
					{"keyName":"Freezer (-20ºC)", "keyValue_en":"Freezer (-20ºC)", "keyValue_es":"Congelador (-20ºC)"}
				]}
			},
            {"number2": {"label_en": "Number of Entries", "label_es": "Unidades recepcionadas", "optional": true, "default_value": 1 }}		
          ]
        }
      },
		{	"actionName": "AUDIT_FOR_GIVEN_INVENTORY_LOT",	  
			"parentAuditBusinessRuleName": "inventoryAuditRevisionMode",
			"childAuditBusinessRuleName": "inventoryAuditChildRevisionRequired",		
			"requiresDialog": true,
			"endPoint": "/app/procs/InvTrackingAPIqueries",
			"button": {
			  "icon": "rule",
			  "title": {
				"label_en": "Lot Audit", "label_es": "Auditoría de Lote"
			  },
			  "requiresGridItemSelected": true
			},
			"clientMethod": "getObjectAuditInfo",
			"endPointParams": [
			  { "argumentName": "lotName", "selObjectPropertyName": "lot_name" }
			],        
			"dialogInfo": { 
				"name": "auditDialog",
				"automatic": true,
				"action": [
				{
				  "actionName": "LOTAUDIT_SET_AUDIT_ID_REVIEWED",
				  "requiresDialog": false,
				  "notGetViewData": true,
				  "secondaryActionToPerform": {
					  "name": "getObjectAuditInfo",
					  "endPointParams": [
						{ "argumentName": "lotName", "selObjectPropertyName": "lot_name" }
					  ]
				  },
				  "endPointUrl": "Samples",
				  "clientMethod": "signAudit",
				  "endPointParams": [
					{ "argumentName": "lotName", "selObjectPropertyName": "lot_name" },
					{ "argumentName": "auditId", "targetValue": true }
				  ]
				}
				]
			}
		},
		{"actionName": "TURN_LOT_UNAVAILABLE",
			"requiresDialog": false,
			"button": {
			  "img": "deactivate.svg",
			  "title": {
				"label_en": "Turn Unavailable", "label_es": "Poner NO Disponible"
			  },
			  "requiresGridItemSelected": true,
			  "hideWhenSelectedItem": [{
				"column": "status", "value": "AVAILABLE_FOR_USER"
			  }]
			},
			"endPointParams": [
			  { "argumentName": "lotName", "selObjectPropertyName": "lot_name" },
			  { "argumentName": "category", "selObjectPropertyName": "category" },
			  { "argumentName": "reference", "selObjectPropertyName": "reference" }			  
			]
		},
		{"actionName": "TURN_LOT_AVAILABLE",
			"requiresDialog": false,
			"button": {
			  "img": "activate.svg",
			  "title": {
				"label_en": "Turn Available", "label_es": "Poner Disponible"
			  },
			  "requiresGridItemSelected": true,
			  "xshowWhenSelectedItem": [
				{"column": "is_locked", "value": false},
				{"column": "status", "value": "NEW|QUARANTINE"}			
			]
			},
			"endPointParams": [
			  { "argumentName": "lotName", "selObjectPropertyName": "lot_name" },
			  { "argumentName": "category", "selObjectPropertyName": "category" },
			  { "argumentName": "reference", "selObjectPropertyName": "reference" }
			]
		},
		{"actionName": "COMPLETE_QUALIFICATION",
			"requiresDialog": true,
			"dialogInfo": {          
			  "name": "genericDialog",
				"fields": [
					{"list8": { "label_en": "Decision", "label_es": "Decisión",
					  "items":[
						{"keyName":"ACCEPTED", "keyValue_en":"Accepted", "keyValue_es":"Aceptado"},
						{"keyName":"ACCEPTED_WITH_RESTRICTIONS", "keyValue_en":"Accepted with restrictions", "keyValue_es":"Aceptado con restricciones"},
						{"keyName":"REJECTED", "keyValue_en":"Rejected", "keyValue_es":"Rechazado"}
					  ]}
					}      
				]
			},
			"button": {
			  "icon": "alarm_on",
			  "title": {
				"label_en": "Complete Qualification", "label_es": "Completar Cualificación"
			  },
			  "requiresGridItemSelected": true,
			  "showWhenSelectedItem": 				
				{"column": "status", "value": "QUARANTINE"}
			   
			},
			"endPointParams": [
			  { "argumentName": "lotName", "selObjectPropertyName": "lot_name" },
			  { "argumentName": "category", "selObjectPropertyName": "category" },
			  { "argumentName": "reference", "selObjectPropertyName": "reference" },
			  { "argumentName": "decision", "element": "list8" }
			]
		},
		{"actionName": "COMPLETE_QUALIFICATION",
			"requiresDialog": true,
			"dialogInfo": {          
			  "name": "genericDialog",
				"fields": [
					{"list9": { "label_en": "Decision", "label_es": "Decisión",
					  "items":[
						{"keyName":"ACCEPTED", "keyValue_en":"Accepted", "keyValue_es":"Aceptado"},
						{"keyName":"ACCEPTED_WITH_RESTRICTIONS", "keyValue_en":"Accepted with restrictions", "keyValue_es":"Aceptado con restricciones"},
						{"keyName":"REJECTED", "keyValue_en":"Rejected", "keyValue_es":"Rechazado"}
					  ]}
					}      
				]
			},
			"button": {
			  "icon": "alarm_on",
			  "title": {
				"label_en": "Complete Qualification + Available", "label_es": "Completar Cualificación + Disponible"
			  },
			  "requiresGridItemSelected": true,
			  "showWhenSelectedItem": 				
				{"column": "status", "value": "QUARANTINE"}
			   
			},
			"endPointParams": [
			  { "argumentName": "lotName", "selObjectPropertyName": "lot_name" },
			  { "argumentName": "category", "selObjectPropertyName": "category" },
			  { "argumentName": "reference", "selObjectPropertyName": "reference" },
			  { "argumentName": "decision", "element": "list9" },
			  { "argumentName": "turn_available_lot", "fixValue": "true" }			  
			]
		},		
		{"actionName": "CONSUME_INV_LOT_QUANTITY",
			"requiresDialog": true,
			"button": {
			  "icon": "receipt-text",
			  "title": {
				"label_en": "Consume", "label_es": "Consumir"
			  },
			  "requiresGridItemSelected": true,
			  "hideWhenSelectedItem": {
				"column": "status",
				"value": "RETIRED"
			  }
			},
			"dialogInfo": {          
				"name": "genericDialog",
				"fields": [
					{"number1": {"label_en": "Quantity to consume", "label_es": "Cantidad a consumir", "min_allowed":0, "max_dp":2 }}		
					]
			},
			
			"endPointParams": [
			  { "argumentName": "lotName", "selObjectPropertyName": "lot_name" },
			  { "argumentName": "category", "selObjectPropertyName": "category" },
			  { "argumentName": "reference", "selObjectPropertyName": "reference" },
			  { "argumentName": "quantityUom", "selObjectPropertyName": "quantity_uom" },
			  { "argumentName": "quantity", "element": "number1", "defaultValue": "" }
			]
		},		
		{"actionName": "ADJUST_INV_LOT_QUANTITY",
			"requiresDialog": true,
			"button": {
			  "icon": "receipt-text",
			  "title": {
				"label_en": "Adjust", "label_es": "Ajustar"
			  },
			  "requiresGridItemSelected": true,
			  "hideWhenSelectedItem": {
				"column": "status", 
				"value": "RETIRED"
			  }
			},
			"dialogInfo": {          
				"name": "genericDialog",
				"fields": [
					{"number1": {"label_en": "Adjust (new)quantity", "label_es": "(Nuevo)cantidad a ajustar", "min_allowed":0, "max_dp":2 }}
				]
			},
			
			"endPointParams": [
			  { "argumentName": "lotName", "selObjectPropertyName": "lot_name" },
			  { "argumentName": "category", "selObjectPropertyName": "category" },
			  { "argumentName": "reference", "selObjectPropertyName": "reference" },
			  { "argumentName": "quantityUom", "selObjectPropertyName": "quantity_uom" },
			  { "argumentName": "quantity", "element": "number1", "defaultValue": "" }
			]
		},		
		{"actionName": "ADD_INV_LOT_QUANTITY",
			"requiresDialog": true,
			"button": {
			  "icon": "receipt-text",
			  "title": {
				"label_en": "Add", "label_es": "Añadir"
			  },
			  "requiresGridItemSelected": true,
			  "hideWhenSelectedItem": {
				"column": "status",
				"value": "RETIRED"
			  }
			},
			"dialogInfo": {          
				"name": "genericDialog",
				"fields": [
					{"number1": {"label_en": "Quantity to add", "label_es": "Cantidad a añadir", "min_allowed":0, "max_dp":2 }}			
					]
			},
			
			"endPointParams": [
			  { "argumentName": "lotName", "selObjectPropertyName": "lot_name" },
			  { "argumentName": "category", "selObjectPropertyName": "category" },
			  { "argumentName": "reference", "selObjectPropertyName": "reference" },
			  { "argumentName": "quantityUom", "selObjectPropertyName": "quantity_uom" },
			  { "argumentName": "quantity", "element": "number1", "defaultValue": "" }
			]
		}	
    ]
  }, 
  "InventoryLotsEstandSec": {
	"component": "TableWithButtons",
    "langConfig": {
      "title": {
        "InventoryLots.EstandSec": {
          "label_en": "Active Inventory Lots",
          "label_es": "Lotes de inventario activos"
        }
      },
      "gridHeader": {
        "category": {
          "label_en": "Category", "label_es": "Categoría", "sort": false, "filter": true, "is_icon": false, "width": "20%", "align": "left"
        },
        "reference": {
          "label_en": "Reference", "label_es": "Referencia", "sort": false, "filter": true, "is_icon": false, "width": "20%"
        },
        "lot_name": {
          "label_en": "Name", "label_es": "lot_id", "Nombre": false, "filter": true, "is_icon": false, "width": "10%"
        },
        "status": {
          "label_en": "Status", "label_es": "Estado", "sort": false, "filter": true, "width": "10%"
        },
        "quantity": {
          "label_en": "Quantity", "label_es": "Cantidad", "sort": false, "filter": true, "width": "10%"
        },
        "quantity_uom": {
          "label_en": "uom", "label_es": "uom", "sort": false, "filter": true, "width": "10%"
        }
      }
    },
    "viewQuery":{ "actionName": "ALL_INVENTORY_LOTS",
      "endPoint": "/app/procs/InvTrackingAPIqueries",
	  "endPointParams": [
          { "argumentName": "category", "fixValue": "Estándares Secundarios"}
        ],
      "addRefreshButton": true,
      "button": {
        "icon": "refresh",
        "title": {
          "label_en": "Reload", "label_es": "Recargar"
        },
        "requiresGridItemSelected": true
      }
    },
    "actions": [
		{"actionName": "NEW_INVENTORY_LOT",
		"requiresDialog": true,
        "endPointParams": [
          { "argumentName": "reference", "element": "list1", "defaultValue": ""  },
          { "argumentName": "category", "fixValue": "Estándares Secundarios"},
          { "argumentName": "lotName", "element": "text2", "defaultValue": "" },
		  { "argumentName": "quantity", "element": "number1", "defaultValue": "" },
		  { "argumentName": "quantityUom", "fixValue": "mL" },
          { "argumentName": "expiryDate", "element": "date1", "defaultValue": "", "optional": true },
		  { "argumentName": "expiryDateInUse", "element": "date2", "defaultValue": "", "optional": true},
		  { "argumentName": "retestDate", "element": "date3", "defaultValue": "", "optional": true },
		  { "argumentName": "vendor", "element": "text3", "defaultValue": "" },
		  { "argumentName": "vendorReference", "element": "text5", "defaultValue": "" },
		  { "argumentName": "vendorLot", "element": "text4", "defaultValue": "" },
		  { "argumentName": "purity", "element": "text6", "defaultValue": "" },
		  { "argumentName": "conservationCondition", "element": "list7", "defaultValue": "" },
          { "argumentName": "numEntries", "element": "number2", "defaultValue": "" }
        ],
        "button": {
          "icon": "create_new_folder",
          "title": {
            "label_en": "New", "label_es": "Nuevo"
          },
          "requiresGridItemSelected": false
        },
        "dialogInfo": {          
          "name": "genericDialog",
          "fields": [
			{"list1": {
			  "items": [
			  { "keyName": "Estándares Secundarios", "keyValue_en": "Estándares Secundarios", "keyValue_es": "Estándares Secundarios" }
			  ],
			  "label_en": "Reference", "label_es": "Referencia", "optional": true,
			  "addBlankValueOnTop": true, "addBlankValueAtBottom": false,
			  "valuesFromMasterData": {
				"filterInFirstLevel": true, "elementName":"list1",
				"propertyNameContainer": "category_and_references",
				"propertyNameContainerLevelPropertyKeyName": "name",
				"propertyNameContainerLevelfixValue": "Estándares Secundarios",
				"propertyNameContainerLevel2": "inv_reference",
				"propertyKeyName": "name", "propertyKeyValueEn": "name", "propertyKeyValueEs": "name"
			  }			
			}},
            {"text2": { "label_en": "lot id", "label_es": "id Lote" }},
			{"number1": {"label_en": "Quantity", "label_es": "Cantidad", "optional": true }},			
            {"date1": {"label_en": "Expiry Date", "label_es": "Fecha Caducidad", "optional": true }},
            {"date2": {"label_en": "Expiry Date In Use", "label_es": "Fecha Caducidad En Uso", "optional": true }},
            {"date3": {"label_en": "Retest Date", "label_es": "Fecha Retest", "optional": true }},
			{"text3": { "label_en": "Vendor", "label_es": "Proveedor", "optional": true }},			
			{"text4": { "label_en": "Vendor Lot", "label_es": "Lote de Proveedor", "optional": true }},			
			{"text5": { "label_en": "Vendor Reference", "label_es": "Referencia de Proveedor", "optional": true }},			
			{"text6": { "label_en": "Purity", "label_es": "Pureza", "optional": true }},			
			{"list7": { "label_en": "Conservation Condition", "label_es": "Condición de Conservación", "optional": true ,
				"items":[
					{"keyName":"ROOM_TEMP", "keyValue_en":"Room temperature", "keyValue_es":"Temperatura del recinto"},
					{"keyName":"15-25ºC", "keyValue_en":"15-25ºC", "keyValue_es":"15-25ºC"},
					{"keyName":"NMT 30ºc", "keyValue_en":"NMT 30ºc", "keyValue_es":"NMT 30ºc"},
					{"keyName":"2-8ºc", "keyValue_en":"2-8ºc", "keyValue_es":"2-8ºc"},
					{"keyName":"Freezer (-20ºC)", "keyValue_en":"Freezer (-20ºC)", "keyValue_es":"Congelador (-20ºC)"}
				]}
			},
            {"number2": {"label_en": "Number of Entries", "label_es": "Unidades recepcionadas", "optional": true, "default_value": 1 }}		
          ]
        }
      },
		{"actionName": "AUDIT_FOR_GIVEN_INVENTORY_LOT",	  
			"parentAuditBusinessRuleName": "inventoryAuditRevisionMode",
			"childAuditBusinessRuleName": "inventoryAuditChildRevisionRequired",		
			"requiresDialog": true,
			"endPoint": "/app/procs/InvTrackingAPIqueries",
			"button": {
			  "icon": "rule",
			  "title": {
				"label_en": "Lot Audit", "label_es": "Auditoría de Lote"
			  },
			  "requiresGridItemSelected": true
			},
			"clientMethod": "getObjectAuditInfo",
			"endPointParams": [
			  { "argumentName": "lotName", "selObjectPropertyName": "lot_name" }
			],        
			"dialogInfo": { 
				"name": "auditDialog",
				"automatic": true,
				"action": [
				{
				  "actionName": "LOTAUDIT_SET_AUDIT_ID_REVIEWED",
				  "requiresDialog": false,
				  "notGetViewData": true,
				  "secondaryActionToPerform": {
					  "name": "getObjectAuditInfo",
					  "endPointParams": [
						{ "argumentName": "lotName", "selObjectPropertyName": "lot_name" }
					  ]
				  },
				  "endPointUrl": "Samples",
				  "clientMethod": "signAudit",
				  "endPointParams": [
					{ "argumentName": "lotName", "selObjectPropertyName": "lot_name" },
					{ "argumentName": "auditId", "targetValue": true }
				  ]
				}
				]
			}
		},
		{"actionName": "TURN_LOT_UNAVAILABLE",
			"requiresDialog": false,
			"button": {
			  "img": "deactivate.svg",
			  "title": {
				"label_en": "Turn Unavailable", "label_es": "Poner NO Disponible"
			  },
			  "requiresGridItemSelected": true,
			  "hideWhenSelectedItem": [{
				"column": "status", "value": "AVAILABLE_FOR_USER"
			  }]
			},
			"endPointParams": [
			  { "argumentName": "lotName", "selObjectPropertyName": "lot_name" },
			  { "argumentName": "category", "selObjectPropertyName": "category" },
			  { "argumentName": "reference", "selObjectPropertyName": "reference" }			  
			]
		},
		{"actionName": "TURN_LOT_AVAILABLE",
			"requiresDialog": false,
			"button": {
			  "img": "activate.svg",
			  "title": {
				"label_en": "Turn Available", "label_es": "Poner Disponible"
			  },
			  "requiresGridItemSelected": true,
			  "xshowWhenSelectedItem": [
				{"column": "is_locked", "value": false},
				{"column": "status", "value": "NEW|QUARANTINE"}			
			]
			},
			"endPointParams": [
			  { "argumentName": "lotName", "selObjectPropertyName": "lot_name" },
			  { "argumentName": "category", "selObjectPropertyName": "category" },
			  { "argumentName": "reference", "selObjectPropertyName": "reference" }
			]
		},
		{"actionName": "COMPLETE_QUALIFICATION",
			"requiresDialog": true,
			"dialogInfo": {          
			  "name": "genericDialog",
				"fields": [
					{"list8": { "label_en": "Decision", "label_es": "Decisión",
					  "items":[
						{"keyName":"ACCEPTED", "keyValue_en":"Accepted", "keyValue_es":"Aceptado"},
						{"keyName":"ACCEPTED_WITH_RESTRICTIONS", "keyValue_en":"Accepted with restrictions", "keyValue_es":"Aceptado con restricciones"},
						{"keyName":"REJECTED", "keyValue_en":"Rejected", "keyValue_es":"Rechazado"}
					  ]}
					}      
				]
			},
			"button": {
			  "icon": "alarm_on",
			  "title": {
				"label_en": "Complete Qualification", "label_es": "Completar Cualificación"
			  },
			  "requiresGridItemSelected": true,
			  "showWhenSelectedItem": 				
				{"column": "status", "value": "QUARANTINE"}
			   
			},
			"endPointParams": [
			  { "argumentName": "lotName", "selObjectPropertyName": "lot_name" },
			  { "argumentName": "category", "selObjectPropertyName": "category" },
			  { "argumentName": "reference", "selObjectPropertyName": "reference" },
			  { "argumentName": "decision", "element": "list8" }
			]
		},
		{"actionName": "COMPLETE_QUALIFICATION",
			"requiresDialog": true,
			"dialogInfo": {          
			  "name": "genericDialog",
				"fields": [
					{"list9": { "label_en": "Decision", "label_es": "Decisión",
					  "items":[
						{"keyName":"ACCEPTED", "keyValue_en":"Accepted", "keyValue_es":"Aceptado"},
						{"keyName":"ACCEPTED_WITH_RESTRICTIONS", "keyValue_en":"Accepted with restrictions", "keyValue_es":"Aceptado con restricciones"},
						{"keyName":"REJECTED", "keyValue_en":"Rejected", "keyValue_es":"Rechazado"}
					  ]}
					}      
				]
			},
			"button": {
			  "icon": "alarm_on",
			  "title": {
				"label_en": "Complete Qualification + Available", "label_es": "Completar Cualificación + Disponible"
			  },
			  "requiresGridItemSelected": true,
			  "showWhenSelectedItem": 				
				{"column": "status", "value": "QUARANTINE"}
			   
			},
			"endPointParams": [
			  { "argumentName": "lotName", "selObjectPropertyName": "lot_name" },
			  { "argumentName": "category", "selObjectPropertyName": "category" },
			  { "argumentName": "reference", "selObjectPropertyName": "reference" },
			  { "argumentName": "decision", "element": "list9" },
			  { "argumentName": "turn_available_lot", "fixValue": "true" }			  
			]
		},		
		{"actionName": "CONSUME_INV_LOT_QUANTITY",
			"requiresDialog": true,
			"button": {
			  "icon": "receipt-text",
			  "title": {
				"label_en": "Consume", "label_es": "Consumir"
			  },
			  "requiresGridItemSelected": true,
			  "hideWhenSelectedItem": {
				"column": "status",
				"value": "RETIRED"
			  }
			},
			"dialogInfo": {          
				"name": "genericDialog",
				"fields": [
					{"number1": {"label_en": "Quantity to consume", "label_es": "Cantidad a consumir", "min_allowed":0, "max_dp":2 }}		
					]
			},
			
			"endPointParams": [
			  { "argumentName": "lotName", "selObjectPropertyName": "lot_name" },
			  { "argumentName": "category", "selObjectPropertyName": "category" },
			  { "argumentName": "reference", "selObjectPropertyName": "reference" },
			  { "argumentName": "quantityUom", "selObjectPropertyName": "quantity_uom" },
			  { "argumentName": "quantity", "element": "number1", "defaultValue": "" }
			]
		},		
		{"actionName": "ADJUST_INV_LOT_QUANTITY",
			"requiresDialog": true,
			"button": {
			  "icon": "receipt-text",
			  "title": {
				"label_en": "Adjust", "label_es": "Ajustar"
			  },
			  "requiresGridItemSelected": true,
			  "hideWhenSelectedItem": {
				"column": "status", 
				"value": "RETIRED"
			  }
			},
			"dialogInfo": {          
				"name": "genericDialog",
				"fields": [
					{"number1": {"label_en": "Adjust (new)quantity", "label_es": "(Nuevo)cantidad a ajustar", "min_allowed":0, "max_dp":2 }}
				]
			},
			
			"endPointParams": [
			  { "argumentName": "lotName", "selObjectPropertyName": "lot_name" },
			  { "argumentName": "category", "selObjectPropertyName": "category" },
			  { "argumentName": "reference", "selObjectPropertyName": "reference" },
			  { "argumentName": "quantityUom", "selObjectPropertyName": "quantity_uom" },
			  { "argumentName": "quantity", "element": "number1", "defaultValue": "" }
			]
		},		
		{"actionName": "ADD_INV_LOT_QUANTITY",
			"requiresDialog": true,
			"button": {
			  "icon": "receipt-text",
			  "title": {
				"label_en": "Add", "label_es": "Añadir"
			  },
			  "requiresGridItemSelected": true,
			  "hideWhenSelectedItem": {
				"column": "status",
				"value": "RETIRED"
			  }
			},
			"dialogInfo": {          
				"name": "genericDialog",
				"fields": [
					{"number1": {"label_en": "Quantity to add", "label_es": "Cantidad a añadir", "min_allowed":0, "max_dp":2 }}			
					]
			},
			
			"endPointParams": [
			  { "argumentName": "lotName", "selObjectPropertyName": "lot_name" },
			  { "argumentName": "category", "selObjectPropertyName": "category" },
			  { "argumentName": "reference", "selObjectPropertyName": "reference" },
			  { "argumentName": "quantityUom", "selObjectPropertyName": "quantity_uom" },
			  { "argumentName": "quantity", "element": "number1", "defaultValue": "" }
			]
		}	
    ]
  }, 
  "InventoryLotsMatFung": {
	"component": "TableWithButtons",
    "langConfig": {
      "title": {
        "InventoryLots.MaterialFungible": {
          "label_en": "Active Inventory Lots",
          "label_es": "Lotes de inventario activos"
        }
      },
      "gridHeader": {
        "category": {
          "label_en": "Category", "label_es": "Categoría", "sort": false, "filter": true, "is_icon": false, "width": "20%", "align": "left"
        },
        "reference": {
          "label_en": "Reference", "label_es": "Referencia", "sort": false, "filter": true, "is_icon": false, "width": "20%"
        },
        "lot_name": {
          "label_en": "Name", "label_es": "lot_id", "Nombre": false, "filter": true, "is_icon": false, "width": "10%"
        },
        "status": {
          "label_en": "Status", "label_es": "Estado", "sort": false, "filter": true, "width": "10%"
        },
        "quantity": {
          "label_en": "Quantity", "label_es": "Cantidad", "sort": false, "filter": true, "width": "10%"
        },
        "quantity_uom": {
          "label_en": "uom", "label_es": "uom", "sort": false, "filter": true, "width": "10%"
        }
      }
    },
    "viewQuery":{ "actionName": "ALL_INVENTORY_LOTS",
      "endPoint": "/app/procs/InvTrackingAPIqueries",
	  "endPointParams": [
          { "argumentName": "category", "fixValue": "Material Fungible"}
        ],
      "addRefreshButton": true,
      "button": {
        "icon": "refresh",
        "title": {
          "label_en": "Reload", "label_es": "Recargar"
        },
        "requiresGridItemSelected": true
      }
    },
    "actions": [
		{"actionName": "NEW_INVENTORY_LOT",
		"requiresDialog": true,
        "endPointParams": [
          { "argumentName": "reference", "element": "list1", "defaultValue": "" },
          { "argumentName": "category", "fixValue": "Material Fungible"},
          { "argumentName": "lotName", "element": "text2", "defaultValue": "" },
		  { "argumentName": "quantity", "element": "number1", "defaultValue": "" },
		  { "argumentName": "quantityUom", "fixValue": "mL" },
          { "argumentName": "expiryDate", "element": "date1", "defaultValue": "", "optional": true },
		  { "argumentName": "expiryDateInUse", "element": "date2", "defaultValue": "", "optional": true},
		  { "argumentName": "retestDate", "element": "date3", "defaultValue": "", "optional": true },
		  { "argumentName": "vendor", "element": "text3", "defaultValue": "" },
		  { "argumentName": "vendorReference", "element": "text5", "defaultValue": "" },
		  { "argumentName": "vendorLot", "element": "text4", "defaultValue": "" },
		  { "argumentName": "purity", "element": "text6", "defaultValue": "" },
		  { "argumentName": "conservationCondition", "element": "list7", "defaultValue": "" },
          { "argumentName": "numEntries", "element": "number2", "defaultValue": "" }
        ],
        "button": {
          "icon": "create_new_folder",
          "title": {
            "label_en": "New", "label_es": "Nuevo"
          },
          "requiresGridItemSelected": false
        },
        "dialogInfo": {          
          "name": "genericDialog",
          "fields": [
			{"list1": {
			  "items": [
			  { "keyName": "Material Fungible", "keyValue_en": "Material Fungible", "keyValue_es": "Material Fungible" }
			  ],
			  "label_en": "Reference", "label_es": "Referencia", "optional": true,
			  "addBlankValueOnTop": true, "addBlankValueAtBottom": false,
			  "valuesFromMasterData": {
				"filterInFirstLevel": true, "elementName":"list1",
				"propertyNameContainer": "category_and_references",
				"propertyNameContainerLevelPropertyKeyName": "name",
				"propertyNameContainerLevelfixValue": "Material Fungible",
				"propertyNameContainerLevel2": "inv_reference",
				"propertyKeyName": "name", "propertyKeyValueEn": "name", "propertyKeyValueEs": "name"
			  }			
			}},
            {"text2": { "label_en": "lot id", "label_es": "id Lote" }},
			{"number1": {"label_en": "Quantity", "label_es": "Cantidad", "optional": true }},			
            {"date1": {"label_en": "Expiry Date", "label_es": "Fecha Caducidad", "optional": true }},
            {"date2": {"label_en": "Expiry Date In Use", "label_es": "Fecha Caducidad En Uso", "optional": true }},
            {"date3": {"label_en": "Retest Date", "label_es": "Fecha Retest", "optional": true }},
			{"text3": { "label_en": "Vendor", "label_es": "Proveedor", "optional": true }},			
			{"text4": { "label_en": "Vendor Lot", "label_es": "Lote de Proveedor", "optional": true }},			
			{"text5": { "label_en": "Vendor Reference", "label_es": "Referencia de Proveedor", "optional": true }},			
			{"text6": { "label_en": "Purity", "label_es": "Pureza", "optional": true }},			
			{"list7": { "label_en": "Conservation Condition", "label_es": "Condición de Conservación", "optional": true ,
				"items":[
					{"keyName":"ROOM_TEMP", "keyValue_en":"Room temperature", "keyValue_es":"Temperatura del recinto"},
					{"keyName":"15-25ºC", "keyValue_en":"15-25ºC", "keyValue_es":"15-25ºC"},
					{"keyName":"NMT 30ºc", "keyValue_en":"NMT 30ºc", "keyValue_es":"NMT 30ºc"},
					{"keyName":"2-8ºc", "keyValue_en":"2-8ºc", "keyValue_es":"2-8ºc"},
					{"keyName":"Freezer (-20ºC)", "keyValue_en":"Freezer (-20ºC)", "keyValue_es":"Congelador (-20ºC)"}
				]}
			},
            {"number2": {"label_en": "Number of Entries", "label_es": "Unidades recepcionadas", "optional": true, "default_value": 1 }}		
          ]
        }
      },
		{"actionName": "AUDIT_FOR_GIVEN_INVENTORY_LOT",	  
			"parentAuditBusinessRuleName": "inventoryAuditRevisionMode",
			"childAuditBusinessRuleName": "inventoryAuditChildRevisionRequired",		
			"requiresDialog": true,
			"endPoint": "/app/procs/InvTrackingAPIqueries",
			"button": {
			  "icon": "rule",
			  "title": {
				"label_en": "Lot Audit", "label_es": "Auditoría de Lote"
			  },
			  "requiresGridItemSelected": true
			},
			"clientMethod": "getObjectAuditInfo",
			"endPointParams": [
			  { "argumentName": "lotName", "selObjectPropertyName": "lot_name" }
			],        
			"dialogInfo": { 
				"name": "auditDialog",
				"automatic": true,
				"action": [
				{
				  "actionName": "LOTAUDIT_SET_AUDIT_ID_REVIEWED",
				  "requiresDialog": false,
				  "notGetViewData": true,
				  "secondaryActionToPerform": {
					  "name": "getObjectAuditInfo",
					  "endPointParams": [
						{ "argumentName": "lotName", "selObjectPropertyName": "lot_name" }
					  ]
				  },
				  "endPointUrl": "Samples",
				  "clientMethod": "signAudit",
				  "endPointParams": [
					{ "argumentName": "lotName", "selObjectPropertyName": "lot_name" },
					{ "argumentName": "auditId", "targetValue": true }
				  ]
				}
				]
			}
		},
		{"actionName": "TURN_LOT_UNAVAILABLE",
			"requiresDialog": false,
			"button": {
			  "img": "deactivate.svg",
			  "title": {
				"label_en": "Turn Unavailable", "label_es": "Poner NO Disponible"
			  },
			  "requiresGridItemSelected": true,
			  "hideWhenSelectedItem": [{
				"column": "status", "value": "AVAILABLE_FOR_USER"
			  }]
			},
			"endPointParams": [
			  { "argumentName": "lotName", "selObjectPropertyName": "lot_name" },
			  { "argumentName": "category", "selObjectPropertyName": "category" },
			  { "argumentName": "reference", "selObjectPropertyName": "reference" }			  
			]
		},
		{"actionName": "TURN_LOT_AVAILABLE",
			"requiresDialog": false,
			"button": {
			  "img": "activate.svg",
			  "title": {
				"label_en": "Turn Available", "label_es": "Poner Disponible"
			  },
			  "requiresGridItemSelected": true,
			  "xshowWhenSelectedItem": [
				{"column": "is_locked", "value": false},
				{"column": "status", "value": "NEW|QUARANTINE"}			
			]
			},
			"endPointParams": [
			  { "argumentName": "lotName", "selObjectPropertyName": "lot_name" },
			  { "argumentName": "category", "selObjectPropertyName": "category" },
			  { "argumentName": "reference", "selObjectPropertyName": "reference" }
			]
		},
		{"actionName": "COMPLETE_QUALIFICATION",
			"requiresDialog": true,
			"dialogInfo": {          
			  "name": "genericDialog",
				"fields": [
					{"list8": { "label_en": "Decision", "label_es": "Decisión",
					  "items":[
						{"keyName":"ACCEPTED", "keyValue_en":"Accepted", "keyValue_es":"Aceptado"},
						{"keyName":"ACCEPTED_WITH_RESTRICTIONS", "keyValue_en":"Accepted with restrictions", "keyValue_es":"Aceptado con restricciones"},
						{"keyName":"REJECTED", "keyValue_en":"Rejected", "keyValue_es":"Rechazado"}
					  ]}
					}      
				]
			},
			"button": {
			  "icon": "alarm_on",
			  "title": {
				"label_en": "Complete Qualification", "label_es": "Completar Cualificación"
			  },
			  "requiresGridItemSelected": true,
			  "showWhenSelectedItem": 				
				{"column": "status", "value": "QUARANTINE"}
			   
			},
			"endPointParams": [
			  { "argumentName": "lotName", "selObjectPropertyName": "lot_name" },
			  { "argumentName": "category", "selObjectPropertyName": "category" },
			  { "argumentName": "reference", "selObjectPropertyName": "reference" },
			  { "argumentName": "decision", "element": "list8" }
			]
		},
		{"actionName": "COMPLETE_QUALIFICATION",
			"requiresDialog": true,
			"dialogInfo": {          
			  "name": "genericDialog",
				"fields": [
					{"list9": { "label_en": "Decision", "label_es": "Decisión",
					  "items":[
						{"keyName":"ACCEPTED", "keyValue_en":"Accepted", "keyValue_es":"Aceptado"},
						{"keyName":"ACCEPTED_WITH_RESTRICTIONS", "keyValue_en":"Accepted with restrictions", "keyValue_es":"Aceptado con restricciones"},
						{"keyName":"REJECTED", "keyValue_en":"Rejected", "keyValue_es":"Rechazado"}
					  ]}
					}      
				]
			},
			"button": {
			  "icon": "alarm_on",
			  "title": {
				"label_en": "Complete Qualification + Available", "label_es": "Completar Cualificación + Disponible"
			  },
			  "requiresGridItemSelected": true,
			  "showWhenSelectedItem": 				
				{"column": "status", "value": "QUARANTINE"}
			   
			},
			"endPointParams": [
			  { "argumentName": "lotName", "selObjectPropertyName": "lot_name" },
			  { "argumentName": "category", "selObjectPropertyName": "category" },
			  { "argumentName": "reference", "selObjectPropertyName": "reference" },
			  { "argumentName": "decision", "element": "list9" },
			  { "argumentName": "turn_available_lot", "fixValue": "true" }			  
			]
		},		
		{"actionName": "CONSUME_INV_LOT_QUANTITY",
			"requiresDialog": true,
			"button": {
			  "icon": "receipt-text",
			  "title": {
				"label_en": "Consume", "label_es": "Consumir"
			  },
			  "requiresGridItemSelected": true,
			  "hideWhenSelectedItem": {
				"column": "status",
				"value": "RETIRED"
			  }
			},
			"dialogInfo": {          
				"name": "genericDialog",
				"fields": [
					{"number1": {"label_en": "Quantity to consume", "label_es": "Cantidad a consumir", "min_allowed":0, "max_dp":2 }}		
					]
			},
			
			"endPointParams": [
			  { "argumentName": "lotName", "selObjectPropertyName": "lot_name" },
			  { "argumentName": "category", "selObjectPropertyName": "category" },
			  { "argumentName": "reference", "selObjectPropertyName": "reference" },
			  { "argumentName": "quantityUom", "selObjectPropertyName": "quantity_uom" },
			  { "argumentName": "quantity", "element": "number1", "defaultValue": "" }
			]
		},		
		{"actionName": "ADJUST_INV_LOT_QUANTITY",
			"requiresDialog": true,
			"button": {
			  "icon": "receipt-text",
			  "title": {
				"label_en": "Adjust", "label_es": "Ajustar"
			  },
			  "requiresGridItemSelected": true,
			  "hideWhenSelectedItem": {
				"column": "status", 
				"value": "RETIRED"
			  }
			},
			"dialogInfo": {          
				"name": "genericDialog",
				"fields": [
					{"number1": {"label_en": "Adjust (new)quantity", "label_es": "(Nuevo)Cantidad a ajustar", "min_allowed":0, "max_dp":2 }}
				]
			},
			
			"endPointParams": [
			  { "argumentName": "lotName", "selObjectPropertyName": "lot_name" },
			  { "argumentName": "category", "selObjectPropertyName": "category" },
			  { "argumentName": "reference", "selObjectPropertyName": "reference" },
			  { "argumentName": "quantityUom", "selObjectPropertyName": "quantity_uom" },
			  { "argumentName": "quantity", "element": "number1", "defaultValue": "" }
			]
		},		
		{"actionName": "ADD_INV_LOT_QUANTITY",
			"requiresDialog": true,
			"button": {
			  "icon": "receipt-text",
			  "title": {
				"label_en": "Add", "label_es": "Añadir"
			  },
			  "requiresGridItemSelected": true,
			  "hideWhenSelectedItem": {
				"column": "status",
				"value": "RETIRED"
			  }
			},
			"dialogInfo": {          
				"name": "genericDialog",
				"fields": [
					{"number1": {"label_en": "Quantity to add", "label_es": "Cantidad a añadir", "min_allowed":0, "max_dp":2 }}			
					]
			},
			
			"endPointParams": [
			  { "argumentName": "lotName", "selObjectPropertyName": "lot_name" },
			  { "argumentName": "category", "selObjectPropertyName": "category" },
			  { "argumentName": "reference", "selObjectPropertyName": "reference" },
			  { "argumentName": "quantityUom", "selObjectPropertyName": "quantity_uom" },
			  { "argumentName": "quantity", "element": "number1", "defaultValue": "" }
			]
		}	
    ]
  }, 
  "InventoryLotsOtros": {
	"component": "TableWithButtons",
    "langConfig": {
      "title": {
        "InventoryLots.Otros": {
          "label_en": "Active Inventory Lots",
          "label_es": "Lotes de inventario activos"
        }
      },
      "gridHeader": {
        "category": {
          "label_en": "Category", "label_es": "Categoría", "sort": false, "filter": true, "is_icon": false, "width": "20%", "align": "left"
        },
        "reference": {
          "label_en": "Reference", "label_es": "Referencia", "sort": false, "filter": true, "is_icon": false, "width": "20%"
        },
        "lot_name": {
          "label_en": "Name", "label_es": "lot_id", "Nombre": false, "filter": true, "is_icon": false, "width": "10%"
        },
        "status": {
          "label_en": "Status", "label_es": "Estado", "sort": false, "filter": true, "width": "10%"
        },
        "quantity": {
          "label_en": "Quantity", "label_es": "Cantidad", "sort": false, "filter": true, "width": "10%"
        },
        "quantity_uom": {
          "label_en": "uom", "label_es": "uom", "sort": false, "filter": true, "width": "10%"
        }
      }
    },
    "viewQuery":{ "actionName": "ALL_INVENTORY_LOTS",
      "endPoint": "/app/procs/InvTrackingAPIqueries",
	  "endPointParams": [
          { "argumentName": "category", "fixValue": "Otros"}
        ],
      "addRefreshButton": true,
      "button": {
        "icon": "refresh",
        "title": {
          "label_en": "Reload", "label_es": "Recargar"
        },
        "requiresGridItemSelected": true
      }
    },
    "actions": [
		{"actionName": "NEW_INVENTORY_LOT",
		"requiresDialog": true,
        "endPointParams": [
          { "argumentName": "reference", "element": "list1", "defaultValue": ""  },
          { "argumentName": "category", "fixValue": "Otros"},
          { "argumentName": "lotName", "element": "text2", "defaultValue": "" },
		  { "argumentName": "quantity", "element": "number1", "defaultValue": "" },
		  { "argumentName": "quantityUom", "fixValue": "mL" },
          { "argumentName": "expiryDate", "element": "date1", "defaultValue": "", "optional": true },
		  { "argumentName": "expiryDateInUse", "element": "date2", "defaultValue": "", "optional": true},
		  { "argumentName": "retestDate", "element": "date3", "defaultValue": "", "optional": true },
		  { "argumentName": "vendor", "element": "text3", "defaultValue": "" },
		  { "argumentName": "vendorReference", "element": "text5", "defaultValue": "" },
		  { "argumentName": "vendorLot", "element": "text4", "defaultValue": "" },
		  { "argumentName": "purity", "element": "text6", "defaultValue": "" },
		  { "argumentName": "conservationCondition", "element": "list7", "defaultValue": "" },
          { "argumentName": "numEntries", "element": "number2", "defaultValue": "" }
        ],
        "button": {
          "icon": "create_new_folder",
          "title": {
            "label_en": "New", "label_es": "Nuevo"
          },
          "requiresGridItemSelected": false
        },
        "dialogInfo": {          
          "name": "genericDialog",
          "fields": [
			{"list1": {
			  "items": [
			  { "keyName": "Otros", "keyValue_en": "v", "keyValue_es": "Otros" }
			  ],
			  "label_en": "Reference", "label_es": "Referencia", "optional": true,
			  "addBlankValueOnTop": true, "addBlankValueAtBottom": false,
			  "valuesFromMasterData": {
				"filterInFirstLevel": true, "elementName":"list1",
				"propertyNameContainer": "category_and_references",
				"propertyNameContainerLevelPropertyKeyName": "name",
				"propertyNameContainerLevelfixValue": "Otros",
				"propertyNameContainerLevel2": "inv_reference",
				"propertyKeyName": "name", "propertyKeyValueEn": "name", "propertyKeyValueEs": "name"
			  }			
			}},
            {"text2": { "label_en": "lot id", "label_es": "id Lote" }},
			{"number1": {"label_en": "Quantity", "label_es": "Cantidad", "optional": true }},			
            {"date1": {"label_en": "Expiry Date", "label_es": "Fecha Caducidad", "optional": true }},
            {"date2": {"label_en": "Expiry Date In Use", "label_es": "Fecha Caducidad En Uso", "optional": true }},
            {"date3": {"label_en": "Retest Date", "label_es": "Fecha Retest", "optional": true }},
			{"text3": { "label_en": "Vendor", "label_es": "Proveedor", "optional": true }},			
			{"text4": { "label_en": "Vendor Lot", "label_es": "Lote de Proveedor", "optional": true }},			
			{"text5": { "label_en": "Vendor Reference", "label_es": "Referencia de Proveedor", "optional": true }},			
			{"text6": { "label_en": "Purity", "label_es": "Pureza", "optional": true }},			
			{"list7": { "label_en": "Conservation Condition", "label_es": "Condición de Conservación", "optional": true ,
				"items":[
					{"keyName":"ROOM_TEMP", "keyValue_en":"Room temperature", "keyValue_es":"Temperatura del recinto"},
					{"keyName":"15-25ºC", "keyValue_en":"15-25ºC", "keyValue_es":"15-25ºC"},
					{"keyName":"NMT 30ºc", "keyValue_en":"NMT 30ºc", "keyValue_es":"NMT 30ºc"},
					{"keyName":"2-8ºc", "keyValue_en":"2-8ºc", "keyValue_es":"2-8ºc"},
					{"keyName":"Freezer (-20ºC)", "keyValue_en":"Freezer (-20ºC)", "keyValue_es":"Congelador (-20ºC)"}
				]}
			},
            {"number2": {"label_en": "Number of Entries", "label_es": "Unidades recepcionadas", "optional": true, "default_value": 1 }}		
          ]
        }
      },
		{"actionName": "AUDIT_FOR_GIVEN_INVENTORY_LOT",	  
			"parentAuditBusinessRuleName": "inventoryAuditRevisionMode",
			"childAuditBusinessRuleName": "inventoryAuditChildRevisionRequired",		
			"requiresDialog": true,
			"endPoint": "/app/procs/InvTrackingAPIqueries",
			"button": {
			  "icon": "rule",
			  "title": {
				"label_en": "Lot Audit", "label_es": "Auditoría de Lote"
			  },
			  "requiresGridItemSelected": true
			},
			"clientMethod": "getObjectAuditInfo",
			"endPointParams": [
			  { "argumentName": "lotName", "selObjectPropertyName": "lot_name" }
			],        
			"dialogInfo": { 
				"name": "auditDialog",
				"automatic": true,
				"action": [
				{
				  "actionName": "LOTAUDIT_SET_AUDIT_ID_REVIEWED",
				  "requiresDialog": false,
				  "notGetViewData": true,
				  "secondaryActionToPerform": {
					  "name": "getObjectAuditInfo",
					  "endPointParams": [
						{ "argumentName": "lotName", "selObjectPropertyName": "lot_name" }
					  ]
				  },
				  "endPointUrl": "Samples",
				  "clientMethod": "signAudit",
				  "endPointParams": [
					{ "argumentName": "lotName", "selObjectPropertyName": "lot_name" },
					{ "argumentName": "auditId", "targetValue": true }
				  ]
				}
				]
			}
		},
		{"actionName": "TURN_LOT_UNAVAILABLE",
			"requiresDialog": false,
			"button": {
			  "img": "deactivate.svg",
			  "title": {
				"label_en": "Turn Unavailable", "label_es": "Poner NO Disponible"
			  },
			  "requiresGridItemSelected": true,
			  "hideWhenSelectedItem": [{
				"column": "status", "value": "AVAILABLE_FOR_USER"
			  }]
			},
			"endPointParams": [
			  { "argumentName": "lotName", "selObjectPropertyName": "lot_name" },
			  { "argumentName": "category", "selObjectPropertyName": "category" },
			  { "argumentName": "reference", "selObjectPropertyName": "reference" }			  
			]
		},
		{"actionName": "TURN_LOT_AVAILABLE",
			"requiresDialog": false,
			"button": {
			  "img": "activate.svg",
			  "title": {
				"label_en": "Turn Available", "label_es": "Poner Disponible"
			  },
			  "requiresGridItemSelected": true,
			  "xshowWhenSelectedItem": [
				{"column": "is_locked", "value": false},
				{"column": "status", "value": "NEW|QUARANTINE"}			
			]
			},
			"endPointParams": [
			  { "argumentName": "lotName", "selObjectPropertyName": "lot_name" },
			  { "argumentName": "category", "selObjectPropertyName": "category" },
			  { "argumentName": "reference", "selObjectPropertyName": "reference" }
			]
		},
		{"actionName": "COMPLETE_QUALIFICATION",
			"requiresDialog": true,
			"dialogInfo": {          
			  "name": "genericDialog",
				"fields": [
					{"list8": { "label_en": "Decision", "label_es": "Decisión",
					  "items":[
						{"keyName":"ACCEPTED", "keyValue_en":"Accepted", "keyValue_es":"Aceptado"},
						{"keyName":"ACCEPTED_WITH_RESTRICTIONS", "keyValue_en":"Accepted with restrictions", "keyValue_es":"Aceptado con restricciones"},
						{"keyName":"REJECTED", "keyValue_en":"Rejected", "keyValue_es":"Rechazado"}
					  ]}
					}      
				]
			},
			"button": {
			  "icon": "alarm_on",
			  "title": {
				"label_en": "Complete Qualification", "label_es": "Completar Cualificación"
			  },
			  "requiresGridItemSelected": true,
			  "showWhenSelectedItem": 				
				{"column": "status", "value": "QUARANTINE"}
			   
			},
			"endPointParams": [
			  { "argumentName": "lotName", "selObjectPropertyName": "lot_name" },
			  { "argumentName": "category", "selObjectPropertyName": "category" },
			  { "argumentName": "reference", "selObjectPropertyName": "reference" },
			  { "argumentName": "decision", "element": "list8" }
			]
		},
		{"actionName": "COMPLETE_QUALIFICATION",
			"requiresDialog": true,
			"dialogInfo": {          
			  "name": "genericDialog",
				"fields": [
					{"list9": { "label_en": "Decision", "label_es": "Decisión",
					  "items":[
						{"keyName":"ACCEPTED", "keyValue_en":"Accepted", "keyValue_es":"Aceptado"},
						{"keyName":"ACCEPTED_WITH_RESTRICTIONS", "keyValue_en":"Accepted with restrictions", "keyValue_es":"Aceptado con restricciones"},
						{"keyName":"REJECTED", "keyValue_en":"Rejected", "keyValue_es":"Rechazado"}
					  ]}
					}      
				]
			},
			"button": {
			  "icon": "alarm_on",
			  "title": {
				"label_en": "Complete Qualification + Available", "label_es": "Completar Cualificación + Disponible"
			  },
			  "requiresGridItemSelected": true,
			  "showWhenSelectedItem": 				
				{"column": "status", "value": "QUARANTINE"}
			   
			},
			"endPointParams": [
			  { "argumentName": "lotName", "selObjectPropertyName": "lot_name" },
			  { "argumentName": "category", "selObjectPropertyName": "category" },
			  { "argumentName": "reference", "selObjectPropertyName": "reference" },
			  { "argumentName": "decision", "element": "list9" },
			  { "argumentName": "turn_available_lot", "fixValue": "true" }			  
			]
		},		
		{"actionName": "CONSUME_INV_LOT_QUANTITY",
			"requiresDialog": true,
			"button": {
			  "icon": "receipt-text",
			  "title": {
				"label_en": "Consume", "label_es": "Consumir"
			  },
			  "requiresGridItemSelected": true,
			  "hideWhenSelectedItem": {
				"column": "status",
				"value": "RETIRED"
			  }
			},
			"dialogInfo": {          
				"name": "genericDialog",
				"fields": [
					{"number1": {"label_en": "Quantity to consume", "label_es": "Cantidad a consumir", "min_allowed":0, "max_dp":2 }}		
					]
			},
			
			"endPointParams": [
			  { "argumentName": "lotName", "selObjectPropertyName": "lot_name" },
			  { "argumentName": "category", "selObjectPropertyName": "category" },
			  { "argumentName": "reference", "selObjectPropertyName": "reference" },
			  { "argumentName": "quantityUom", "selObjectPropertyName": "quantity_uom" },
			  { "argumentName": "quantity", "element": "number1", "defaultValue": "" }
			]
		},		
		{"actionName": "ADJUST_INV_LOT_QUANTITY",
			"requiresDialog": true,
			"button": {
			  "icon": "receipt-text",
			  "title": {
				"label_en": "Adjust", "label_es": "Ajustar"
			  },
			  "requiresGridItemSelected": true,
			  "hideWhenSelectedItem": {
				"column": "status", 
				"value": "RETIRED"
			  }
			},
			"dialogInfo": {          
				"name": "genericDialog",
				"fields": [
					{"number1": {"label_en": "Adjust (new)Quantity", "label_es": "(Nuevo)Cantidad a ajustar", "min_allowed":0, "max_dp":2 }}
				]
			},
			
			"endPointParams": [
			  { "argumentName": "lotName", "selObjectPropertyName": "lot_name" },
			  { "argumentName": "category", "selObjectPropertyName": "category" },
			  { "argumentName": "reference", "selObjectPropertyName": "reference" },
			  { "argumentName": "quantityUom", "selObjectPropertyName": "quantity_uom" },
			  { "argumentName": "quantity", "element": "number1", "defaultValue": "" }
			]
		},		
		{"actionName": "ADD_INV_LOT_QUANTITY",
			"requiresDialog": true,
			"button": {
			  "icon": "receipt-text",
			  "title": {
				"label_en": "Add", "label_es": "Añadir"
			  },
			  "requiresGridItemSelected": true,
			  "hideWhenSelectedItem": {
				"column": "status",
				"value": "RETIRED"
			  }
			},
			"dialogInfo": {          
				"name": "genericDialog",
				"fields": [
					{"number1": {"label_en": "Quantity to add", "label_es": "Cantidad a añadir", "min_allowed":0, "max_dp":2 }}			
					]
			},
			
			"endPointParams": [
			  { "argumentName": "lotName", "selObjectPropertyName": "lot_name" },
			  { "argumentName": "category", "selObjectPropertyName": "category" },
			  { "argumentName": "reference", "selObjectPropertyName": "reference" },
			  { "argumentName": "quantityeUom", "selObjectPropertyName": "quantity_uom" },
			  { "argumentName": "quantity", "element": "number1", "defaultValue": "" }
			]
		}	
    ]
  }, 
  "InventoryLotsReactivos": {
	"component":"Tabs",  
    "abstract": true,
    "tabs": [
	{"component": "TableWithButtons",
      "langConfig": {
		"tab": {
            "label_en": "Active Inventory Lots Reactivos Comerciales", 
            "label_es": "Lotes de inventario activos Reactivos Comerciales"
        },
        "title": {
          "label_en": "Active Inventory Lots Reactivos Comerciales",
          "label_es": "Lotes de inventario activos Reactivos Comerciales"
        },
      "gridHeader": {
        "reference": {
          "label_en": "Reference", "label_es": "Referencia", "sort": false, "filter": true, "is_icon": false, "width": "20%"
        },
		"category": {
          "label_en": "Category", "label_es": "Categoría", "sort": false, "filter": true, "is_icon": false, "width": "20%", "align": "left"
        },
        "status": {
          "label_en": "Status", "label_es": "Estado", "sort": false, "filter": true, "width": "10%"
        },
		"lot_name": {
          "label_en": "Name", "label_es": "lot_id", "Nombre": false, "filter": true, "is_icon": false, "width": "10%"
        },
        "quantity": {
          "label_en": "Quantity", "label_es": "Cantidad", "sort": false, "filter": true, "width": "10%"
        },
        "quantity_uom": {
          "label_en": "uom", "label_es": "uom", "sort": false, "filter": true, "width": "10%"
        }
      }
    },
    "viewQuery":{ "actionName": "ALL_INVENTORY_LOTS",
      "endPoint": "/app/procs/InvTrackingAPIqueries",
	  "endPointParams": [
          { "argumentName": "category", "fixValue": "Reactivos Comerciales"}
        ],
      "addRefreshButton": true,
      "button": {
        "icon": "refresh",
        "title": {
          "label_en": "Reload", "label_es": "Recargar"
        },
        "requiresGridItemSelected": true
      }
    },
    "actions": [
		{"actionName": "NEW_INVENTORY_LOT",
		"requiresDialog": true,
        "endPointParams": [
          { "argumentName": "reference", "element": "list1", "defaultValue": ""  },
          { "argumentName": "category", "fixValue": "Reactivos Comerciales"},
          { "argumentName": "lotName", "element": "text2", "defaultValue": "" },
		  { "argumentName": "quantity", "element": "number1", "defaultValue": "" },
		  { "argumentName": "quantityUom", "fixValue": "mL" },
          { "argumentName": "expiryDate", "element": "date1", "defaultValue": "", "optional": true },
		  { "argumentName": "expiryDateInUse", "element": "date2", "defaultValue": "", "optional": true},
		  { "argumentName": "retestDate", "element": "date3", "defaultValue": "", "optional": true },
		  { "argumentName": "vendor", "element": "text3", "defaultValue": "" },
		  { "argumentName": "vendorReference", "element": "text5", "defaultValue": "" },
		  { "argumentName": "vendorLot", "element": "text4", "defaultValue": "" },
		  { "argumentName": "purity", "element": "text6", "defaultValue": "" },
		  { "argumentName": "conservationCondition", "element": "list7", "defaultValue": "" },
          { "argumentName": "numEntries", "element": "number2", "defaultValue": "" }
        ],
        "button": {
          "icon": "create_new_folder",
          "title": {
            "label_en": "New", "label_es": "Nuevo"
          },
          "requiresGridItemSelected": false
        },
        "dialogInfo": {          
          "name": "genericDialog",
          "fields": [
			{"list1": {
			  "items": [
			  {	"keyName": "Reactivos Comerciales", "keyValue_en": "Reactivos Comerciales", "keyValue_es": "Reactivos Comerciales" }
			  ],
			  "label_en": "Reference", "label_es": "Referencia", "optional": true,
			  "addBlankValueOnTop": true, "addBlankValueAtBottom": false,
			  "valuesFromMasterData": {
				"filterInFirstLevel": true, "elementName":"list1",
				"propertyNameContainer": "category_and_references",
				"propertyNameContainerLevelPropertyKeyName": "name",
				"propertyNameContainerLevelfixValue": "Reactivos Comerciales",
				"propertyNameContainerLevel2": "inv_reference",
				"propertyKeyName": "name", "propertyKeyValueEn": "name", "propertyKeyValueEs": "name"
			  }			
			}},
            {"text2": { "label_en": "lot id", "label_es": "id Lote" }},
			{"number1": {"label_en": "Quantity", "label_es": "Cantidad", "optional": true }},			
            {"date1": {"label_en": "Expiry Date", "label_es": "Fecha Caducidad", "optional": true }},
            {"date2": {"label_en": "Expiry Date In Use", "label_es": "Fecha Caducidad En Uso", "optional": true }},
            {"date3": {"label_en": "Retest Date", "label_es": "Fecha Retest", "optional": true }},
			{"text3": { "label_en": "Vendor", "label_es": "Proveedor", "optional": true }},			
			{"text4": { "label_en": "Vendor Lot", "label_es": "Lote de Proveedor", "optional": true }},			
			{"text5": { "label_en": "Vendor Reference", "label_es": "Referencia de Proveedor", "optional": true }},			
			{"text6": { "label_en": "Purity", "label_es": "Pureza", "optional": true }},			
			{"list7": { "label_en": "Conservation Condition", "label_es": "Condición de Conservación", "optional": true ,
				"items":[
					{"keyName":"ROOM_TEMP", "keyValue_en":"Room temperature", "keyValue_es":"Temperatura del recinto"},
					{"keyName":"15-25ºC", "keyValue_en":"15-25ºC", "keyValue_es":"15-25ºC"},
					{"keyName":"NMT 30ºc", "keyValue_en":"NMT 30ºc", "keyValue_es":"NMT 30ºc"},
					{"keyName":"2-8ºc", "keyValue_en":"2-8ºc", "keyValue_es":"2-8ºc"},
					{"keyName":"Freezer (-20ºC)", "keyValue_en":"Freezer (-20ºC)", "keyValue_es":"Congelador (-20ºC)"}
				]}
			},
            {"number2": {"label_en": "Number of Entries", "label_es": "Unidades recepcionadas", "optional": true, "default_value": 1 }}		
          ]
        }
      },
		{"actionName": "AUDIT_FOR_GIVEN_INVENTORY_LOT",	  
			"parentAuditBusinessRuleName": "inventoryAuditRevisionMode",
			"childAuditBusinessRuleName": "inventoryAuditChildRevisionRequired",		
			"requiresDialog": true,
			"endPoint": "/app/procs/InvTrackingAPIqueries",
			"button": {
			  "icon": "rule",
			  "title": {
				"label_en": "Lot Audit", "label_es": "Auditoría de Lote"
			  },
			  "requiresGridItemSelected": true
			},
			"clientMethod": "getObjectAuditInfo",
			"endPointParams": [
			  { "argumentName": "lotName", "selObjectPropertyName": "lot_name" }
			],        
			"dialogInfo": { 
				"name": "auditDialog",
				"automatic": true,
				"action": [
				{
				  "actionName": "LOTAUDIT_SET_AUDIT_ID_REVIEWED",
				  "requiresDialog": false,
				  "notGetViewData": true,
				  "secondaryActionToPerform": {
					  "name": "getObjectAuditInfo",
					  "endPointParams": [
						{ "argumentName": "lotName", "selObjectPropertyName": "lot_name" }
					  ]
				  },
				  "endPointUrl": "Samples",
				  "clientMethod": "signAudit",
				  "endPointParams": [
					{ "argumentName": "lotName", "selObjectPropertyName": "lot_name" },
					{ "argumentName": "auditId", "targetValue": true }
				  ]
				}
				]
			}
		},
		{"actionName": "TURN_LOT_UNAVAILABLE",
			"requiresDialog": false,
			"button": {
			  "img": "deactivate.svg",
			  "title": {
				"label_en": "Turn Unavailable", "label_es": "Poner NO Disponible"
			  },
			  "requiresGridItemSelected": true,
			  "hideWhenSelectedItem": [{
				"column": "status", "value": "AVAILABLE_FOR_USER"
			  }]
			},
			"endPointParams": [
			  { "argumentName": "lotName", "selObjectPropertyName": "lot_name" },
			  { "argumentName": "category", "selObjectPropertyName": "category" },
			  { "argumentName": "reference", "selObjectPropertyName": "reference" }			  
			]
		},
		{"actionName": "TURN_LOT_AVAILABLE",
			"requiresDialog": false,
			"button": {
			  "img": "activate.svg",
			  "title": {
				"label_en": "Turn Available", "label_es": "Poner Disponible"
			  },
			  "requiresGridItemSelected": true,
			  "xshowWhenSelectedItem": [
				{"column": "is_locked", "value": false},
				{"column": "status", "value": "NEW|QUARANTINE"}			
			]
			},
			"endPointParams": [
			  { "argumentName": "lotName", "selObjectPropertyName": "lot_name" },
			  { "argumentName": "category", "selObjectPropertyName": "category" },
			  { "argumentName": "reference", "selObjectPropertyName": "reference" }
			]
		},
		{"actionName": "COMPLETE_QUALIFICATION",
			"requiresDialog": true,
			"dialogInfo": {          
			  "name": "genericDialog",
				"fields": [
					{"list8": { "label_en": "Decision", "label_es": "Decisión",
					  "items":[
						{"keyName":"ACCEPTED", "keyValue_en":"Accepted", "keyValue_es":"Aceptado"},
						{"keyName":"ACCEPTED_WITH_RESTRICTIONS", "keyValue_en":"Accepted with restrictions", "keyValue_es":"Aceptado con restricciones"},
						{"keyName":"REJECTED", "keyValue_en":"Rejected", "keyValue_es":"Rechazado"}
					  ]}
					}      
				]
			},
			"button": {
			  "icon": "alarm_on",
			  "title": {
				"label_en": "Complete Qualification", "label_es": "Completar Cualificación"
			  },
			  "requiresGridItemSelected": true,
			  "showWhenSelectedItem": 				
				{"column": "status", "value": "QUARANTINE"}
			   
			},
			"endPointParams": [
			  { "argumentName": "lotName", "selObjectPropertyName": "lot_name" },
			  { "argumentName": "category", "selObjectPropertyName": "category" },
			  { "argumentName": "reference", "selObjectPropertyName": "reference" },
			  { "argumentName": "decision", "element": "list8" }
			]
		},
		{"actionName": "COMPLETE_QUALIFICATION",
			"requiresDialog": true,
			"dialogInfo": {          
			  "name": "genericDialog",
				"fields": [
					{"list9": { "label_en": "Decision", "label_es": "Decisión",
					  "items":[
						{"keyName":"ACCEPTED", "keyValue_en":"Accepted", "keyValue_es":"Aceptado"},
						{"keyName":"ACCEPTED_WITH_RESTRICTIONS", "keyValue_en":"Accepted with restrictions", "keyValue_es":"Aceptado con restricciones"},
						{"keyName":"REJECTED", "keyValue_en":"Rejected", "keyValue_es":"Rechazado"}
					  ]}
					}      
				]
			},
			"button": {
			  "icon": "alarm_on",
			  "title": {
				"label_en": "Complete Qualification + Available", "label_es": "Completar Cualificación + Disponible"
			  },
			  "requiresGridItemSelected": true,
			  "showWhenSelectedItem": 				
				{"column": "status", "value": "QUARANTINE"}
			   
			},
			"endPointParams": [
			  { "argumentName": "lotName", "selObjectPropertyName": "lot_name" },
			  { "argumentName": "category", "selObjectPropertyName": "category" },
			  { "argumentName": "reference", "selObjectPropertyName": "reference" },
			  { "argumentName": "decision", "element": "list9" },
			  { "argumentName": "turn_available_lot", "fixValue": "true" }			  
			]
		},		
		{"actionName": "CONSUME_INV_LOT_QUANTITY",
			"requiresDialog": true,
			"button": {
			  "icon": "receipt-text",
			  "title": {
				"label_en": "Consume", "label_es": "Consumir"
			  },
			  "requiresGridItemSelected": true,
			  "hideWhenSelectedItem": {
				"column": "status",
				"value": "RETIRED"
			  }
			},
			"dialogInfo": {          
				"name": "genericDialog",
				"fields": [
					{"number1": {"label_en": "Quantity to consume", "label_es": "Cantidad a consumir", "min_allowed":0, "max_dp":2 }}		
					]
			},
			
			"endPointParams": [
			  { "argumentName": "lotName", "selObjectPropertyName": "lot_name" },
			  { "argumentName": "category", "selObjectPropertyName": "category" },
			  { "argumentName": "reference", "selObjectPropertyName": "reference" },
			  { "argumentName": "quantityUom", "selObjectPropertyName": "quantity_uom" },
			  { "argumentName": "quantity", "element": "number1", "defaultValue": "" }
			]
		},		
		{"actionName": "ADJUST_INV_LOT_QUANTITY",
			"requiresDialog": true,
			"button": {
			  "icon": "receipt-text",
			  "title": {
				"label_en": "Adjust", "label_es": "Ajustar"
			  },
			  "requiresGridItemSelected": true,
			  "hideWhenSelectedItem": {
				"column": "status", 
				"value": "RETIRED"
			  }
			},
			"dialogInfo": {          
				"name": "genericDialog",
				"fields": [
					{"number1": {"label_en": "Adjust (new)quantity", "label_es": "(Nuevo)Cantidad a ajustar", "min_allowed":0, "max_dp":2 }}
				]
			},
			
			"endPointParams": [
			  { "argumentName": "lotName", "selObjectPropertyName": "lot_name" },
			  { "argumentName": "category", "selObjectPropertyName": "category" },
			  { "argumentName": "reference", "selObjectPropertyName": "reference" },
			  { "argumentName": "quantityUom", "selObjectPropertyName": "quantity_uom" },
			  { "argumentName": "quantity", "element": "number1", "defaultValue": "" }
			]
		},		
		{"actionName": "ADD_INV_LOT_QUANTITY",
			"requiresDialog": true,
			"button": {
			  "icon": "receipt-text",
			  "title": {
				"label_en": "Add", "label_es": "Añadir"
			  },
			  "requiresGridItemSelected": true,
			  "hideWhenSelectedItem": {
				"column": "status",
				"value": "RETIRED"
			  }
			},
			"dialogInfo": {          
				"name": "genericDialog",
				"fields": [
					{"number1": {"label_en": "Quantity to add", "label_es": "Cantidad a añadir", "min_allowed":0, "max_dp":2 }}			
					]
			},
			
			"endPointParams": [
			  { "argumentName": "lotName", "selObjectPropertyName": "lot_name" },
			  { "argumentName": "category", "selObjectPropertyName": "category" },
			  { "argumentName": "reference", "selObjectPropertyName": "reference" },
			  { "argumentName": "quantityUom", "selObjectPropertyName": "quantity_uom" },
			  { "argumentName": "quantity", "element": "number1", "defaultValue": "" }
			]
		}	
     ]
    }, 
    {"component": "TableWithButtons",
    "langConfig": {
		"tab": {
            "label_en": "Active Inventory Lots ReactivosPreparados", 
            "label_es": "Lotes de inventario activos ReactivosPreparados"
        },
        "title": {
          "label_en": "Active Inventory Lots ReactivosPreparados",
          "label_es": "Lotes de inventario activos ReactivosPreparados"
        },
      "gridHeader": {
        "reference": {
          "label_en": "Reference", "label_es": "Referencia", "sort": false, "filter": true, "is_icon": false, "width": "20%"
        },
		"category": {
          "label_en": "Category", "label_es": "Categoría", "sort": false, "filter": true, "is_icon": false, "width": "20%", "align": "left"
        },
		"locked_reason": {
          "label_en": "Locked Reason", "label_es": "Razón de bloqueo", "sort": false, "filter": true, "is_icon": false, "width": "20%", "align": "left"
        },
		"status": {
          "label_en": "Status", "label_es": "Estado", "sort": false, "filter": true, "width": "10%"
        },
        "lot_name": {
          "label_en": "Name", "label_es": "lot_id", "Nombre": false, "filter": true, "is_icon": false, "width": "10%"
        },
        "quantity": {
          "label_en": "Quantity", "label_es": "Cantidad", "sort": false, "filter": true, "width": "10%"
        },
        "quantity_uom": {
          "label_en": "uom", "label_es": "uom", "sort": false, "filter": true, "width": "10%"
        }
      }
    },
    "viewQuery":{ "actionName": "ALL_INVENTORY_LOTS",
      "endPoint": "/app/procs/InvTrackingAPIqueries",
	  "endPointParams": [
          { "argumentName": "category", "fixValue": "Reactivos preparados"}
        ],
      "addRefreshButton": true,
      "button": {
        "icon": "refresh",
        "title": {
          "label_en": "Reload", "label_es": "Recargar"
        },
        "requiresGridItemSelected": true
      }
    },
    "actions": [
		{"actionName": "NEW_INVENTORY_LOT",
		"requiresDialog": true,
        "endPointParams": [
          { "argumentName": "reference", "element": "list1", "defaultValue": ""  },
          { "argumentName": "category", "fixValue": "Reactivos preparados"},
          { "argumentName": "lotName", "element": "text2", "defaultValue": "" },
		  { "argumentName": "quantity", "element": "number1", "defaultValue": "" },
		  { "argumentName": "quantityUom", "fixValue": "mL" },
          { "argumentName": "expiryDate", "element": "date1", "defaultValue": "", "optional": true },
		  { "argumentName": "expiryDateInUse", "element": "date2", "defaultValue": "", "optional": true},
		  { "argumentName": "retestDate", "element": "date3", "defaultValue": "", "optional": true },
		  { "argumentName": "vendor", "element": "text3", "defaultValue": "" },
		  { "argumentName": "vendorReference", "element": "text5", "defaultValue": "" },
		  { "argumentName": "vendorLot", "element": "text4", "defaultValue": "" },
		  { "argumentName": "purity", "element": "text6", "defaultValue": "" },
		  { "argumentName": "conservationCondition", "element": "list7", "defaultValue": "" },
          { "argumentName": "numEntries", "element": "number2", "defaultValue": "" }
        ],
        "button": {
          "icon": "create_new_folder",
          "title": {
            "label_en": "New", "label_es": "Nuevo"
          },
          "requiresGridItemSelected": false
        },
        "dialogInfo": {          
          "name": "genericDialog",
          "fields": [
			{"list1": {
			  "items": [
			  { "keyName": "Reactivos preparados", "keyValue_en": "Reactivos preparados", "keyValue_es": "Reactivos preparados" }
			  ],
			  "label_en": "Reference", "label_es": "Referencia", "optional": true,
			  "addBlankValueOnTop": true, "addBlankValueAtBottom": false,
			  "valuesFromMasterData": {
				"filterInFirstLevel": true, "elementName":"list1",
				"propertyNameContainer": "category_and_references",
				"propertyNameContainerLevelPropertyKeyName": "name",
				"propertyNameContainerLevelfixValue": "Reactivos preparados",
				"propertyNameContainerLevel2": "inv_reference",
				"propertyKeyName": "name", "propertyKeyValueEn": "name", "propertyKeyValueEs": "name"
			  }			
			}},
            {"text2": { "label_en": "lot id", "label_es": "id Lote" }},
			{"number1": {"label_en": "Quantity", "label_es": "Cantidad", "optional": true }},			
            {"date1": {"label_en": "Expiry Date", "label_es": "Fecha Caducidad", "optional": true }},
            {"date2": {"label_en": "Expiry Date In Use", "label_es": "Fecha Caducidad En Uso", "optional": true }},
            {"date3": {"label_en": "Retest Date", "label_es": "Fecha Retest", "optional": true }},
			{"text3": { "label_en": "Vendor", "label_es": "Proveedor", "optional": true }},			
			{"text4": { "label_en": "Vendor Lot", "label_es": "Lote de Proveedor", "optional": true }},			
			{"text5": { "label_en": "Vendor Reference", "label_es": "Referencia de Proveedor", "optional": true }},			
			{"text6": { "label_en": "Purity", "label_es": "Pureza", "optional": true }},			
			{"list7": { "label_en": "Conservation Condition", "label_es": "Condición de Conservación", "optional": true ,
				"items":[
					{"keyName":"ROOM_TEMP", "keyValue_en":"Room temperature", "keyValue_es":"Temperatura del recinto"},
					{"keyName":"15-25ºC", "keyValue_en":"15-25ºC", "keyValue_es":"15-25ºC"},
					{"keyName":"NMT 30ºc", "keyValue_en":"NMT 30ºc", "keyValue_es":"NMT 30ºc"},
					{"keyName":"2-8ºc", "keyValue_en":"2-8ºc", "keyValue_es":"2-8ºc"},
					{"keyName":"Freezer (-20ºC)", "keyValue_en":"Freezer (-20ºC)", "keyValue_es":"Congelador (-20ºC)"}
				]}
			},
            {"number2": {"label_en": "Number of Entries", "label_es": "Unidades recepcionadas", "optional": true, "default_value": 1 }}		
          ]
        }
      },
		{"actionName": "AUDIT_FOR_GIVEN_INVENTORY_LOT",	  
			"parentAuditBusinessRuleName": "inventoryAuditRevisionMode",
			"childAuditBusinessRuleName": "inventoryAuditChildRevisionRequired",		
			"requiresDialog": true,
			"endPoint": "/app/procs/InvTrackingAPIqueries",
			"button": {
			  "icon": "rule",
			  "title": {
				"label_en": "Lot Audit", "label_es": "Auditoría de Lote"
			  },
			  "requiresGridItemSelected": true
			},
			"clientMethod": "getObjectAuditInfo",
			"endPointParams": [
			  { "argumentName": "lotName", "selObjectPropertyName": "lot_name" }
			],        
			"dialogInfo": { 
				"name": "auditDialog",
				"automatic": true,
				"action": [
				{
				  "actionName": "LOTAUDIT_SET_AUDIT_ID_REVIEWED",
				  "requiresDialog": false,
				  "notGetViewData": true,
				  "secondaryActionToPerform": {
					  "name": "getObjectAuditInfo",
					  "endPointParams": [
						{ "argumentName": "lotName", "selObjectPropertyName": "lot_name" }
					  ]
				  },
				  "endPointUrl": "Samples",
				  "clientMethod": "signAudit",
				  "endPointParams": [
					{ "argumentName": "lotName", "selObjectPropertyName": "lot_name" },
					{ "argumentName": "auditId", "targetValue": true }
				  ]
				}
				]
			}
		},
		{"actionName": "TURN_LOT_UNAVAILABLE",
			"requiresDialog": false,
			"button": {
			  "img": "deactivate.svg",
			  "title": {
				"label_en": "Turn Unavailable", "label_es": "Poner NO Disponible"
			  },
			  "requiresGridItemSelected": true,
			  "hideWhenSelectedItem": [{
				"column": "status", "value": "AVAILABLE_FOR_USER"
			  }]
			},
			"endPointParams": [
			  { "argumentName": "lotName", "selObjectPropertyName": "lot_name" },
			  { "argumentName": "category", "selObjectPropertyName": "category" },
			  { "argumentName": "reference", "selObjectPropertyName": "reference" }			  
			]
		},
		{"actionName": "TURN_LOT_AVAILABLE",
			"requiresDialog": false,
			"button": {
			  "img": "activate.svg",
			  "title": {
				"label_en": "Turn Available", "label_es": "Poner Disponible"
			  },
			  "requiresGridItemSelected": true,
			  "xshowWhenSelectedItem": [
				{"column": "is_locked", "value": false},
				{"column": "status", "value": "NEW|QUARANTINE"}			
			]
			},
			"endPointParams": [
			  { "argumentName": "lotName", "selObjectPropertyName": "lot_name" },
			  { "argumentName": "category", "selObjectPropertyName": "category" },
			  { "argumentName": "reference", "selObjectPropertyName": "reference" }
			]
		},
		{"actionName": "COMPLETE_QUALIFICATION",
			"requiresDialog": true,
			"dialogInfo": {          
			  "name": "genericDialog",
				"fields": [
					{"list8": { "label_en": "Decision", "label_es": "Decisión",
					  "items":[
						{"keyName":"ACCEPTED", "keyValue_en":"Accepted", "keyValue_es":"Aceptado"},
						{"keyName":"ACCEPTED_WITH_RESTRICTIONS", "keyValue_en":"Accepted with restrictions", "keyValue_es":"Aceptado con restricciones"},
						{"keyName":"REJECTED", "keyValue_en":"Rejected", "keyValue_es":"Rechazado"}
					  ]}
					}      
				]
			},
			"button": {
			  "icon": "alarm_on",
			  "title": {
				"label_en": "Complete Qualification", "label_es": "Completar Cualificación"
			  },
			  "requiresGridItemSelected": true,
			  "showWhenSelectedItem": 				
				{"column": "status", "value": "QUARANTINE"}
			   
			},
			"endPointParams": [
			  { "argumentName": "lotName", "selObjectPropertyName": "lot_name" },
			  { "argumentName": "category", "selObjectPropertyName": "category" },
			  { "argumentName": "reference", "selObjectPropertyName": "reference" },
			  { "argumentName": "decision", "element": "list8" }
			]
		},
		{"actionName": "COMPLETE_QUALIFICATION",
			"requiresDialog": true,
			"dialogInfo": {          
			  "name": "genericDialog",
				"fields": [
					{"list9": { "label_en": "Decision", "label_es": "Decisión",
					  "items":[
						{"keyName":"ACCEPTED", "keyValue_en":"Accepted", "keyValue_es":"Aceptado"},
						{"keyName":"ACCEPTED_WITH_RESTRICTIONS", "keyValue_en":"Accepted with restrictions", "keyValue_es":"Aceptado con restricciones"},
						{"keyName":"REJECTED", "keyValue_en":"Rejected", "keyValue_es":"Rechazado"}
					  ]}
					}      
				]
			},
			"button": {
			  "icon": "alarm_on",
			  "title": {
				"label_en": "Complete Qualification + Available", "label_es": "Completar Cualificación + Disponible"
			  },
			  "requiresGridItemSelected": true,
			  "showWhenSelectedItem": 				
				{"column": "status", "value": "QUARANTINE"}
			   
			},
			"endPointParams": [
			  { "argumentName": "lotName", "selObjectPropertyName": "lot_name" },
			  { "argumentName": "category", "selObjectPropertyName": "category" },
			  { "argumentName": "reference", "selObjectPropertyName": "reference" },
			  { "argumentName": "decision", "element": "list9" },
			  { "argumentName": "turn_available_lot", "fixValue": "true" }			  
			]
		},		
		{"actionName": "CONSUME_INV_LOT_QUANTITY",
			"requiresDialog": true,
			"button": {
			  "icon": "receipt-text",
			  "title": {
				"label_en": "Consume", "label_es": "Consumir"
			  },
			  "requiresGridItemSelected": true,
			  "hideWhenSelectedItem": {
				"column": "status",
				"value": "RETIRED"
			  }
			},
			"dialogInfo": {          
				"name": "genericDialog",
				"fields": [
					{"number1": {"label_en": "Quantity to consume", "label_es": "Cantidad a consumir", "min_allowed":0, "max_dp":2 }}		
					]
			},
			
			"endPointParams": [
			  { "argumentName": "lotName", "selObjectPropertyName": "lot_name" },
			  { "argumentName": "category", "selObjectPropertyName": "category" },
			  { "argumentName": "reference", "selObjectPropertyName": "reference" },
			  { "argumentName": "quantityUom", "selObjectPropertyName": "quantityUom" },
			  { "argumentName": "quantity", "element": "number1", "defaultValue": "" }
			]
		},		
		{"actionName": "ADJUST_INV_LOT_QUANTITY",
			"requiresDialog": true,
			"button": {
			  "icon": "receipt-text",
			  "title": {
				"label_en": "Adjust", "label_es": "Ajustar"
			  },
			  "requiresGridItemSelected": true,
			  "hideWhenSelectedItem": {
				"column": "status", 
				"value": "RETIRED"
			  }
			},
			"dialogInfo": {          
				"name": "genericDialog",
				"fields": [
					{"number1": {"label_en": "Adjust (new)quantity", "label_es": "(Nuevo)Cantidad a ajustar", "min_allowed":0, "max_dp":2 }}
				]
			},
			
			"endPointParams": [
			  { "argumentName": "lotName", "selObjectPropertyName": "lot_name" },
			  { "argumentName": "category", "selObjectPropertyName": "category" },
			  { "argumentName": "reference", "selObjectPropertyName": "reference" },
			  { "argumentName": "quantityUom", "selObjectPropertyName": "quantity_uom" },
			  { "argumentName": "quantity", "element": "number1", "defaultValue": "" }
			]
		},		
		{"actionName": "ADD_INV_LOT_QUANTITY",
			"requiresDialog": true,
			"button": {
			  "icon": "receipt-text",
			  "title": {
				"label_en": "Add", "label_es": "Añadir"
			  },
			  "requiresGridItemSelected": true,
			  "hideWhenSelectedItem": {
				"column": "status",
				"value": "RETIRED"
			  }
			},
			"dialogInfo": {          
				"name": "genericDialog",
				"fields": [
					{"number1": {"label_en": "Quantity to add", "label_es": "Cantidad a añadir", "min_allowed":0, "max_dp":2 }}			
					]
			},
			
			"endPointParams": [
			  { "argumentName": "lotName", "selObjectPropertyName": "lot_name" },
			  { "argumentName": "category", "selObjectPropertyName": "category" },
			  { "argumentName": "reference", "selObjectPropertyName": "reference" },
			  { "argumentName": "quantityUom", "selObjectPropertyName": "quantity_uom" },
			  { "argumentName": "quantity", "element": "number1", "defaultValue": "" }
			]
		}	
    ]
   }
   ]
  },  
  "InventoryControls":{
	"tabsListElement": {
	  "label_es": "Consultas",
	  "label_en": "Queries"
	},
	"component": "DataMining",
	"tabs": [
	  {
		"filter": {
		  "fixParams": {
			"sampleGroups": "area, spec_code,sample_config_code*counter_by_area_spec_tmp|spec_eval*counter_range_eval|has_invest*counter_investigations|has_pre_invest, has_invest*counter_pre_and_invest"
		  },
		  "extraParams2": [
			{
			  "argumentName": "programName",
			  "element": "text1"
			},
			{
			  "argumentName": "locationName",
			  "element": "text2"
			},
			{
			  "argumentName": "area",
			  "element": "text3"
			},
			{
			  "argumentName": "excludeReadingNotEntered",
			  "element": "checkbox1"
			},
			{
			  "argumentName": "samplingDayStart",
			  "element": "daterange1dateStart"
			},
			{
			  "argumentName": "samplingDayEnd",
			  "element": "daterange1dateEnd"
			},
			{
			  "argumentName": "readingEqual",
			  "element": "number1"
			},
			{
			  "argumentName": "readingMin",
			  "element": "number2"
			},
			{
			  "argumentName": "readingMax",
			  "element": "number3"
			},
			{
			  "argumentName": "includeMicroorganisms",
			  "element": "checkbox4"
			},
			{
			  "argumentName": "MicroorganismsToFind",
			  "element": "text4"
			}
		  ],
		  "extraParams": [],
		  "filterFields": [
			{
			  "text1": {
				"label_es": "Lote",
				"default_value": "",
				"label_en": "Lot Name"
			  }
			},
			{
			  "text2": {
				"label_es": "Referencia",
				"default_value": "REF1",
				"label_en": "Reference"
			  }
			},
			{
			  "multilist2": {
				"label_en": "Category",
				"label_es": "Categoría",
				"optional": true,
				"addBlankValueOnTop": true,
				"addBlankValueAtBottom": false,
				"valuesFromMasterData": {
				  "propertyNameContainer": "category_and_references",
				  "propertyNameContainerLevelPropertyKeyName": "name",
				  "propertyKeyName": "name",
				  "propertyKeyValueEn": "name",
				  "propertyKeyValueEs": "name"
				}
			  }
			},
			{
			  "daterange1": {
				"dateStart": {
				  "label_es": "Fecha Inicio Caducidad",
				  "default_value": "",
				  "label_en": "Expiry Start Date"
				},
				"dateEnd": {
				  "label_es": "Fecha Fin Caducidad",
				  "default_value": "",
				  "label_en": "Expiry End Date"
				}
			  }
			}
		  ],
		  "endPointParams": [
			{
			  "notAddWhenValueIsBlank": true,
			  "argumentName": "lotName",
			  "element": "text1"
			},
			{
			  "notAddWhenValueIsBlank": true,
			  "argumentName": "reference",
			  "element": "text2"
			},
			{
			  "notAddWhenValueIsBlank": true,
			  "argumentName": "category",
			  "element": "multilist2"
			},
			{
			  "argumentName": "expiry_date_start",
			  "element": "daterange1dateStart"
			},
			{
			  "argumentName": "expiry_date_end",
			  "element": "daterange1dateEnd"
			}
		  ],
		  "filterFields2": [
			{
			  "daterange1": {
				"dateStart": {
				  "label_es": "Fecha Inicio Muestreo",
				  "default_value": "",
				  "label_en": "Sampling Start Date"
				},
				"dateEnd": {
				  "label_es": "Fecha Fin Muestreo",
				  "default_value": "",
				  "label_en": "Sampling End Date"
				}
			  }
			},
			{
			  "checkbox1": {
				"label_es": "Excluir Lecturas no entradas aún",
				"default_value": true,
				"label_en": "Exclude Readings Not Entered Yet"
			  }
			},
			{
			  "number1": {
				"label_es": "Solo las lecturas igual a",
				"default_value": "",
				"label_en": "Only readings Equal to"
			  }
			},
			{
			  "number2": {
				"label_es": "Solo las lecturas Mayores a",
				"default_value": "",
				"label_en": "Only readings Greater than"
			  }
			},
			{
			  "number3": {
				"label_es": "Solo las lecturas Menores a",
				"default_value": "",
				"label_en": "Only readings Less than"
			  }
			},
			{
			  "checkbox4": {
				"label_es": "Incluir Microorganismos",
				"default_value": false,
				"label_en": "Include Microorganisms"
			  }
			},
			{
			  "text4": {
				"label_es": "Microorganismos a encontrar",
				"default_value": "",
				"label_en": "Microorganisms to find"
			  }
			}
		  ]
		},
		"label_es": "Lotes Caducados",
		"endPoint": "/app/procs/InvTrackingAPIqueries",
		"download": {
		  "elements": [
			{
			  "elementName": "datatable"
			}
		  ],
		  "active": true
		},
		"reportElements": [
		  [
			{
			  "type": "reportTitle",
			  "title": {
				"label_es": "Lotes Caducados",
				"label_en": "Expired Lots"
			  }
			}
		  ],
		  [
			{
			  "fieldsToDisplay": [
				{
				  "property": "lot_name",
				  "header": "lot_name"
				},
				{
				  "property": "reference",
				  "header": "reference"
				},
				{
				  "property": "category",
				  "header": "category"
				},
				{
				  "property": "expiry_reason",
				  "header": "expiry_reason"
				}
			  ],
			  "type": "grid",
			  "title": {
				"label_es": "Información cumpliendo el criterio de selección",
				"label_en": "Info Matching Selection Criteria"
			  },
			  "elementName": "datatable"
			}
		  ]
		],
		"action": "EXPIRED_LOTS",
		"label_en": "Expired Lots",
		"printable": true
	  },
	  {
		"filter": {
		  "endPointParams2": [
			{
			  "notAddWhenValueIsBlank": true,
			  "argumentName": "locationName",
			  "element": "text3"
			},
			{
			  "notAddWhenValueIsBlank": true,
			  "argumentName": "area",
			  "element": "text4"
			},
			{
			  "notAddWhenValueIsBlank": true,
			  "argumentName": "excludeSamplerSamples",
			  "element": "checkbox1"
			},
			{
			  "notAddWhenValueIsBlank": true,
			  "argumentName": "excludeReadingNotEntered",
			  "element": "checkbox2"
			},
			{
			  "notAddWhenValueIsBlank": true,
			  "argumentName": "samplingDayStart",
			  "element": "daterange1dateStart"
			},
			{
			  "notAddWhenValueIsBlank": true,
			  "argumentName": "samplingDayEnd",
			  "element": "daterange1dateEnd"
			},
			{
			  "notAddWhenValueIsBlank": true,
			  "argumentName": "readingEqual",
			  "element": "number1"
			},
			{
			  "notAddWhenValueIsBlank": true,
			  "argumentName": "readingMin",
			  "element": "number2"
			},
			{
			  "notAddWhenValueIsBlank": true,
			  "argumentName": "readingMax",
			  "element": "number3"
			},
			{
			  "notAddWhenValueIsBlank": true,
			  "argumentName": "includeMicroorganisms",
			  "element": "checkbox3"
			},
			{
			  "notAddWhenValueIsBlank": true,
			  "argumentName": "MicroorganismsToFind",
			  "element": "text5"
			}
		  ],
		  "filterFields": [
			{
			  "text1": {
				"label_es": "Referencia",
				"default_value": "REF1",
				"label_en": "Reference"
			  }
			},
			{
			  "text2": {
				"label_es": "Categoria",
				"default_value": "",
				"label_en": "Category"
			  }
			}
		  ],
		  "endPointParams": [
			{
			  "notAddWhenValueIsBlank": true,
			  "argumentName": "reference",
			  "element": "text1"
			},
			{
			  "notAddWhenValueIsBlank": true,
			  "argumentName": "category",
			  "element": "text2"
			}
		  ],
		  "filterFields2": [
			{
			  "daterange1": {
				"dateStart": {
				  "label_es": "Fecha Inicio Muestreo",
				  "default_value": "",
				  "label_en": "Sampling Start Date"
				},
				"dateEnd": {
				  "label_es": "Fecha Fin Muestreo",
				  "default_value": "",
				  "label_en": "Sampling End Date"
				}
			  }
			},
			{
			  "text1": {
				"label_es": "Lote",
				"default_value": "20220202",
				"label_en": "Lot Name"
			  }
			},
			{
			  "text2": {
				"label_es": "Programa",
				"default_value": "",
				"label_en": "Program"
			  }
			},
			{
			  "text3": {
				"label_es": "Ubicación",
				"default_value": "",
				"label_en": "Location"
			  }
			},
			{
			  "text4": {
				"label_es": "Area",
				"default_value": "",
				"label_en": "Area"
			  }
			},
			{
			  "checkbox1": {
				"label_es": "Excluir Personal",
				"default_value": true,
				"label_en": "Exclude Personal"
			  }
			},
			{
			  "checkbox2": {
				"label_es": "Excluir Lecturas no entradas aún",
				"default_value": true,
				"label_en": "Exclude Readings Not Entered Yet"
			  }
			},
			{
			  "number1": {
				"label_es": "Solo las lecturas igual a",
				"default_value": "",
				"label_en": "Only readings Equal to"
			  }
			},
			{
			  "number2": {
				"label_es": "Solo las lecturas Mayores a",
				"default_value": "",
				"label_en": "Only readings Greater than"
			  }
			},
			{
			  "number3": {
				"label_es": "Solo las lecturas Menores a",
				"default_value": "",
				"label_en": "Only readings Less than"
			  }
			},
			{
			  "checkbox3": {
				"label_es": "Incluir Microorganismos",
				"default_value": false,
				"label_en": "Include Microorganisms"
			  }
			},
			{
			  "text5": {
				"label_es": "Microorganismos a encontrar",
				"default_value": "",
				"label_en": "Microorganisms to find"
			  }
			}
		  ]
		},
		"label_es": "Referencias cuyas existencias están por debajo de lo esperado",
		"endPoint": "/app/procs/InvTrackingAPIqueries",
		"label_es2": "Stock bajo mínimos",
		"download": {
		  "elements": [
			{
			  "elementName": "datatable"
			}
		  ],
		  "active": true
		},
		"reportElements": [
		  [
			{
			  "style": "color:blue",
			  "type": "reportTitle",
			  "title": {
				"label_es": "Referencias cuyas existencias están por debajo de lo esperado",
				"label_en": "Reference which stock is upon min expected"
			  }
			}
		  ],
		  [
			{
			  "fieldsToDisplay": [
				{
				  "property": "name",
				  "header": "Name"
				},
				{
				  "property": "category",
				  "header": "Category"
				},
				{
				  "property": "min_stock_type",
				  "header": "Control Type"
				},
				{
				  "property": "min_stock",
				  "header": "Min Expected"
				},
				{
				  "property": "current_stock",
				  "header": "Current Stock"
				}
			  ],
			  "type": "grid",
			  "title": {
				"label_es": " ",
				"label_en": " "
			  },
			  "elementName": "datatable"
			}
		  ]
		],
		"label_en2": "Stocks under min",
		"action": "REFERENCES_UNDER_MIN_STOCK",
		"label_en": "Reference which stock is upon min expected",
		"printable": true
	  }
	]
  },
  "InventoryControls20240405": {
	"component": "DataMining",
	"tabsListElement": {
		"label_en": "Queries", 
        "label_es": "Consultas"
	},
    "tabs": [
      { "action": "EXPIRED_LOTS",
        "label_en": "Expired Lots", 
        "label_es": "Lotes Caducados", 
        "endPoint": "/app/procs/InvTrackingAPIqueries",
        "filter":{
          "fixParams": {
            "sampleGroups": "area, spec_code,sample_config_code*counter_by_area_spec_tmp|spec_eval*counter_range_eval|has_invest*counter_investigations|has_pre_invest, has_invest*counter_pre_and_invest"
          },
		  "filterFields":[
            {"text1": { "label_en": "Lot Name", "label_es": "Lote", "default_value": "" }},
            {"text2": { "label_en": "Reference", "label_es": "Referencia", "default_value": "REF1" }},
            {"text3": { "label_en": "Category", "label_es": "Categoria", "default_value": "" }},
            {"daterange1":
              {
              "dateStart":{ "label_en": "Expiry Start Date", "label_es": "Fecha Inicio Caducidad", "default_value": "" },
              "dateEnd":{ "label_en": "Expiry End Date", "label_es": "Fecha Fin Caducidad", "default_value": "" }
              }
            }            
		  ],
          "filterFields2":[
            {"daterange1":
              {
              "dateStart":{ "label_en": "Sampling Start Date", "label_es": "Fecha Inicio Muestreo", "default_value": "" },
              "dateEnd":{ "label_en": "Sampling End Date", "label_es": "Fecha Fin Muestreo", "default_value": "" }
              }
            },
            {"checkbox1": { "label_en": "Exclude Readings Not Entered Yet", "label_es": "Excluir Lecturas no entradas aún", "default_value": true }},
            {"number1": { "label_en": "Only readings Equal to", "label_es": "Solo las lecturas igual a", "default_value": "" }},
            {"number2": { "label_en": "Only readings Greater than", "label_es": "Solo las lecturas Mayores a", "default_value": "" }},
            {"number3": { "label_en": "Only readings Less than", "label_es": "Solo las lecturas Menores a", "default_value": "" }},
            {"checkbox4": { "label_en": "Include Microorganisms", "label_es": "Incluir Microorganismos", "default_value": false }},
            {"text4": { "label_en": "Microorganisms to find", "label_es": "Microorganismos a encontrar", "default_value": "" }}
          ],
		  
		  "endPointParams": [
		    {"argumentName": "lotName", "element": "text1", "notAddWhenValueIsBlank": true},
			{"argumentName": "reference", "element": "text2", "notAddWhenValueIsBlank": true},
            {"argumentName": "category", "element": "text3", "notAddWhenValueIsBlank": true},
            {"argumentName": "expiry_date_start", "element": "daterange1dateStart"},
            {"argumentName": "expiry_date_end", "element": "daterange1dateEnd"}
           
		  ],		  
		  "extraParams": [],
          "extraParams2": [
            {"argumentName": "programName", "element": "text1"},
            {"argumentName": "locationName", "element": "text2"},
            {"argumentName": "area", "element": "text3"},
            {"argumentName": "excludeReadingNotEntered", "element": "checkbox1"},
            {"argumentName": "samplingDayStart", "element": "daterange1dateStart"},
            {"argumentName": "samplingDayEnd", "element": "daterange1dateEnd"},
            {"argumentName": "readingEqual", "element": "number1"},
            {"argumentName": "readingMin", "element": "number2"},
            {"argumentName": "readingMax", "element": "number3"},
            {"argumentName": "includeMicroorganisms", "element": "checkbox4"},
            {"argumentName": "MicroorganismsToFind", "element": "text4"}
          ]      
        },
        "printable": true,
        "download":{
          "active": true,
          "elements":[
            {"elementName": "datatable"}
          ] 
        },
        "reportElements":[
          [
			{"type": "reportTitle", "title":{"label_en": "Expired Lots", "label_es": "Lotes Caducados"}}
          ],
          [
          {"type": "grid", "title":{"label_en": "Info Matching Selection Criteria", "label_es": "Información cumpliendo el criterio de selección"}, 
           "elementName": "datatable", "fieldsToDisplay":[
              {"property": "lot_name", "header": "lot_name"}, 
              {"property": "reference", "header": "reference"}, 
              {"property": "category", "header": "category"}, 
              {"property": "expiry_reason", "header": "expiry_reason"}			  
           ] 
          }          
        ]
        ]
      },
      { "action": "REFERENCES_UNDER_MIN_STOCK",
		"label_en": "Reference which stock is upon min expected", 
		"label_es": "Referencias cuyas existencias están por debajo de lo esperado",
        "label_en2": "Stocks under min", 
        "label_es2": "Stock bajo mínimos", 
        "endPoint": "/app/procs/InvTrackingAPIqueries",
        "filter":{
			"filterFields":[
            {"text1": { "label_en": "Reference", "label_es": "Referencia", "default_value": "REF1" }},
            {"text2": { "label_en": "Category", "label_es": "Categoria", "default_value": "" }}
			
			],
          "filterFields2":[
            {"daterange1":
              {
              "dateStart":{ "label_en": "Sampling Start Date", "label_es": "Fecha Inicio Muestreo", "default_value": "" },
              "dateEnd":{ "label_en": "Sampling End Date", "label_es": "Fecha Fin Muestreo", "default_value": "" }
              }
            },
            {"text1": { "label_en": "Lot Name", "label_es": "Lote", "default_value": "20220202" }},
            {"text2": { "label_en": "Program", "label_es": "Programa", "default_value": "" }},
            {"text3": { "label_en": "Location", "label_es": "Ubicación", "default_value": "" }},
            {"text4": { "label_en": "Area", "label_es": "Area", "default_value": "" }},
            {"checkbox1": { "label_en": "Exclude Personal", "label_es": "Excluir Personal", "default_value": true }},
            {"checkbox2": { "label_en": "Exclude Readings Not Entered Yet", "label_es": "Excluir Lecturas no entradas aún", "default_value": true }},
            {"number1": { "label_en": "Only readings Equal to", "label_es": "Solo las lecturas igual a", "default_value": "" }},
            {"number2": { "label_en": "Only readings Greater than", "label_es": "Solo las lecturas Mayores a", "default_value": "" }},
            {"number3": { "label_en": "Only readings Less than", "label_es": "Solo las lecturas Menores a", "default_value": "" }},
            {"checkbox3": { "label_en": "Include Microorganisms", "label_es": "Incluir Microorganismos", "default_value": false }},
            {"text5": { "label_en": "Microorganisms to find", "label_es": "Microorganismos a encontrar", "default_value": "" }}
          ],
		  "endPointParams": [
			{"argumentName": "reference", "element": "text1", "notAddWhenValueIsBlank": true},
            {"argumentName": "category", "element": "text2", "notAddWhenValueIsBlank": true}
		  ],
          "endPointParams2": [
            {"argumentName": "locationName", "element": "text3", "notAddWhenValueIsBlank": true},
            {"argumentName": "area", "element": "text4", "notAddWhenValueIsBlank": true},
            {"argumentName": "excludeSamplerSamples", "element": "checkbox1", "notAddWhenValueIsBlank": true},
            {"argumentName": "excludeReadingNotEntered", "element": "checkbox2", "notAddWhenValueIsBlank": true},
            {"argumentName": "samplingDayStart", "element": "daterange1dateStart", "notAddWhenValueIsBlank": true},
            {"argumentName": "samplingDayEnd", "element": "daterange1dateEnd", "notAddWhenValueIsBlank": true},
            {"argumentName": "readingEqual", "element": "number1", "notAddWhenValueIsBlank": true},
            {"argumentName": "readingMin", "element": "number2", "notAddWhenValueIsBlank": true},
            {"argumentName": "readingMax", "element": "number3", "notAddWhenValueIsBlank": true},
            {"argumentName": "includeMicroorganisms", "element": "checkbox3", "notAddWhenValueIsBlank": true},
            {"argumentName": "MicroorganismsToFind", "element": "text5", "notAddWhenValueIsBlank": true}
          ]      
        },
        "printable": true,
        "download":{
          "active": true,
          "elements":[
            {"elementName": "datatable"}
          ] 
        },		
        "reportElements":[
          [
            {"type": "reportTitle", "title":{"label_en": "Reference which stock is upon min expected", 
				"label_es": "Referencias cuyas existencias están por debajo de lo esperado"},
              "style":"color:blue"}
          ],
          [
            {"type": "grid", "title":{"label_en": " ", "label_es": " "}, 
             "elementName": "datatable", "fieldsToDisplay":[
                {"property": "name", "header": "Name"}, 
                {"property": "category", "header": "Category"}, 
                {"property": "min_stock_type", "header": "Control Type"}, 
                {"property": "min_stock", "header": "Min Expected"}, 
                {"property": "current_stock", "header": "Current Stock"}
             ] 
            }          
          ]          
        ]
      }
    ]
  },
  "QualificationsInProgress": {
	"component": "TableWithButtons",
    "langConfig": {
      "title": {
        "QualificationsInProgress": {
          "label_en": "Events in progress",
          "label_es": "Eventos en curso"
        }
      },
      "gridHeader": {
        "lot_name": {"label_en": "Lot", "label_es": "Lote", "sort": false, "filter": true, "is_icon": false, "width": "20%", "align": "left"},
        "created_on": {"label_en": "Creation", "label_es": "Creación", "sort": false, "filter": true, "is_icon": false, "width": "10%"},
        "created_on": {"label_en": "Creation", "label_es": "Creación", "sort": false, "filter": true, "is_icon": false, "width": "10%"},
        "created_by": {"label_en": "Creator", "label_es": "Creador", "sort": false, "filter": false, "is_icon": false, "width": "10%"}
      },
      "xxxxresultHeader": {
        "id": {
          "label_en": "Id", "label_es": "Id", "width": "10%"
        },
        "param_name": {
          "label_en": "Parameter", "label_es": "Parámetro"
        },
        "value": {
          "label_en": "Value", "label_es": "Valor"
        }
      },
      "xxxresultHeaderObjectLabelTopLeft": {
        "label_en": "Instrument Event:", "label_es": "Evento de Instrumento :"
      }
    },
    "viewQuery":{ "actionName": "QUALIFICATIONS_INPROGRESS",	  
      "xxxclientMethod": "getSamples",
      "endPoint": "/app/procs/InvTrackingAPIqueries",
      "addRefreshButton": true,
      "button": {
        "icon": "refresh",
        "title": {
          "label_en": "Reload", "label_es": "Recargar"
        },
        "requiresGridItemSelected": true
      }
    },
  "actions": [
		{"actionName": "QUALIFIFICATION_EVENT_VARIABLES",
			"requiresDialog": true,
			"alertMsg": {
				"empty": { "label_en": "No pending variables to enter result", "label_es": "No hay variables pendientes de resultados" }
			},
			"button": {
				"icon": "document_scanner",
				"title": {"label_en": "Enter Value", "label_es": "Ingrese el Valor"},
				"requiresGridItemSelected": true
			},
			"resultHeader": {
				"id": {"label_en": "Id", "label_es": "Id", "width": "10%"},
				"param_name": {"label_en": "Parameter", "label_es": "Parámetro"},
				"value": {"label_en": "Value", "label_es": "Valor"}
			},
			"resultHeaderObjectLabelTopLeft": {
				"label_en": "Lot Qualification:", "label_es": "Cualificación de Lote :"
			},    
			"dialogInfo": { 
				"name": "resultDialog",
				"keyFldName": "qualif_id",
				"subQueryName": "getParams",		  
				"viewQuery": {
					"actionName": "QUALIFIFICATION_EVENT_VARIABLES",
					"endPoint": "/app/procs/InvTrackingAPIqueries",
					"endPointParams": [				  
						{ "argumentName": "lotName", "selObjectPropertyName": "lot_name"},
						{ "argumentName": "category", "selObjectPropertyName": "category"},
						{ "argumentName": "reference", "selObjectPropertyName": "reference"}
					]
				},			  
				"automatic": true,
				"action": [
					{ "actionName": "ENTER_EVENT_RESULT",
						"notGetViewData": true,
						"requiresDialog": false,
						"endPointUrl": "Samples",
						"clientMethod": "enterEventResult",
						"endPointParams": [
							{ "argumentName": "newValue", "targetValue": true },
							{ "argumentName": "qualifId", "selObjectPropertyName": "qualif_id" },
							{ "argumentName": "lotName", "selObjectPropertyName": "lot_name" },
							{ "argumentName": "category", "selObjectPropertyName": "category"},
							{ "argumentName": "reference", "selObjectPropertyName": "reference"},
							{ "argumentName": "variableName", "targetValue": true }
						]
					}
				]
			},
			"endPointParams": [
				{ "argumentName": "sampleAnalysisResultFieldToRetrieve", "value": "result_id|analysis|method_name|method_version|param_name|param_type|raw_value|uom|spec_eval|spec_eval_detail|status|min_val_allowed|min_allowed_strict|max_val_allowed|max_allowed_strict" },
				{ "argumentName": "sortFieldsName", "value": "test_id|result_id" },
				{ "argumentName": "sampleId", "selObjectPropertyName": "sample_id" }
			]
		},
		{"actionName": "COMPLETE_QUALIFICATION",
			"requiresDialog": true,
			"dialogInfo": {          
			  "name": "genericDialog",
				"fields": [
					{"list8": { "label_en": "Decision", "label_es": "Decisión",
					  "items":[
						{"keyName":"ACCEPTED", "keyValue_en":"Accepted", "keyValue_es":"Aceptado"},
						{"keyName":"ACCEPTED_WITH_RESTRICTIONS", "keyValue_en":"Accepted with restrictions", "keyValue_es":"Aceptado con restricciones"},
						{"keyName":"REJECTED", "keyValue_en":"Rejected", "keyValue_es":"Rechazado"}
					  ]}
					}      
				]
			},
			"button": {
			  "icon": "alarm_on",
			  "title": {
				"label_en": "Complete Qualification", "label_es": "Completar Cualificación"
			  },
			  "requiresGridItemSelected": true			   
			},
			"endPointParams": [
			  { "argumentName": "lotName", "selObjectPropertyName": "lot_name" },
			  { "argumentName": "category", "selObjectPropertyName": "category" },
			  { "argumentName": "reference", "selObjectPropertyName": "reference" },
			  { "argumentName": "decision", "element": "list8" }
			]
		},
		{ "actionName": "REOPEN_QUALIFICATION",
			"alternativeAPIActionMethod": "completeInstrumentEventAction",
			"requiresDialog": true,					
			"endPoint": "/app/procs/InvTrackingAPIactions",
			"endPointParams": [
			  { "argumentName": "lotName", "selObjectPropertyName": "lot_name" },
			  { "argumentName": "category", "selObjectPropertyName": "category" },
			  { "argumentName": "reference", "selObjectPropertyName": "reference" },
			  { "argumentName": "qualifIdId", "selObjectPropertyName": "qualif_id" }
			  
			],
			"button": {
			  "icon": "alarm_add",
			  "title": {
				"label_en": "Reopen", "label_es": "Reabrir"
			  },
			  "requiresGridItemSelected": false
			},
			"dialogInfo": {
			  "requiresDialog": true,
			  "name": "reactivateObjectDialog",
			  "fieldsObject": {
				"queryNumDays": { "label_en": "Number of Days", "label_es": "Número de Días" },
				"objectName": { "label_en": "Reopen event", "label_es": "Reabrir evento" }
			  },  
			  "listDefinition":{
				"keyFldName":"qualif_id",
				"eachEntryTextGenerator":[
				  {"value": "lot_name", "type":"field"}, {"value": " (", "type":"fix"}, 
				  {"value": "category", "type":"field"}, {"value": "-", "type":"fix"},
				  {"value": "reference", "type":"field"}, {"value": "-", "type":"fix"},
				  {"value": "completed_on", "type":"field"}, {"value": "-", "type":"fix"},
				  {"value": "completed_decision", "type":"field"}, {"value": ")", "type":"fix"}
				  ]
			  },
			  "viewQuery": {
				  "endPoint": "/app/procs/InvTrackingAPIqueries",
				  "actionName": "COMPLETED_EVENTS_LAST_N_DAYS",
				  "clientMethod": "getDeactivatedObjects",
				  "endPointParams": [
					{ "argumentName": "numDays", "element": "queryNumDays", "fixValue": 7 }
				  ]
			  }
			}
		}
	
  ]
  },
  "Deviation": {
	"component":"Tabs",  
    "abstract": true,
    "tabs": [
      { "component":"TableWithButtons",  
        "filter": "pending",
        "langConfig": {
          "tab": {
            "label_en": "Pending Decision", 
            "label_es": "Decisión pendiente"
          },
          "title": {
            "pending": {
				"label_en": "Pending Decision", 
				"label_es": "Decisión pendiente"
            }
          },
          "gridHeader": {
            "qualif_id": {
              "label_en": "qualif Id", "label_es": "Id qualif", "sort": false, "filter": true, "width": "10%"
            },
            "lot_name": {
              "label_en": "Lot Name", "label_es": "Nombre del lote", "sort": false, "filter": true, "width": "10%"
            },
            "reference": {
              "label_en": "Reference", "label_es": "Referencia", "sort": true, "filter": false, "width": "15%"
            },
            "category": {
              "label_en": "Category", "label_es": "Categoria", "sort": false, "filter": true, "width": "15%"
            },
            "object_type": {
              "label_en": "Object Type", "label_es": "Tipo de objeto", "sort": false, "filter": true, "width": "10%"
            }
          }
        },
        "viewQuery":{
            "actionName": "INVESTIGATION_QUALIFICATIONS_PENDING_DECISION",
            "button": {
              "icon": "refresh",
              "title": {
                "label_en": "Reload", "label_es": "Recargar"
              },
              "requiresGridItemSelected": true
            }		
		},
		"actions": [
			{"actionName": "NEW_INVESTIGATION", 
            "alternativeAPIActionMethod": "newInvestigationAction",
			"requiresDialog": false,
            "button": {
              "title": {
                "label_en": "Create Investigation", "label_es": "Crear Investigación"
              },
              "requiresGridItemSelected": true
            },
            "endPointParams": [				
              	{ "argumentName": "objectToAddObjectType", "selObjectPropertyName": "object_type" },	
              	{ "argumentName": "objectToAddObjectName", "selObjectPropertyName": "event_id" }		
            ]
          },
          {"actionName": "ADD_INVEST_OBJECTS",          
			"requiresDialog": true,
            "button": {
              "title": {
                "label_en": "Add to Investigation", "label_es": "Añadir a Investigación"
              },
              "requiresGridItemSelected": true
            },
            "endPointParams": [
				{"argumentName": "investigationId", "getFromGrid": true, "selObjectPropertyName": "id"},
				{ "argumentName": "objectToAddObjectType", "selObjectPropertyName": "object_type" },	
				{ "argumentName": "objectToAddObjectName", "selObjectPropertyName": "qualif_id" }		
			  ],			
			"dialogInfo": {
			  "name": "genericDialog",
			  "gridContent": true,			  
			  "langConfig": {
				  "gridHeader": [
					{"fldName": "id", "label_en": "Investigation", "label_es": "Investigación", "width": "40%",
						"sort": false, "filter": true, "align": "left"},
				  	{"fldName": "created_on", "label_en": "Created on", "label_es": "F.Creación", "width": "40%",
						"sort": true,"filter": false}			
				  ]
			  },			  
			  "dialogQuery":{
				"actionName": "OPEN_INVESTIGATIONS",
				"button": {
				  "icon": "refresh",
				  "title": {
					"label_en": "Reload", "label_es": "Recargar"
				  },
				  "requiresGridItemSelected": true
				}
			},			  
			}
          }
        ]
      },	
      { "component":"TableWithButtons",  
        "filter": "open",
        "langConfig": {
          "tab": {
            "label_en": "Investigations", 
            "label_es": "Investigaciones"
          },
          "title": {
            "open": {
              "label_en": "In Progress Investigations", 
              "label_es": "Investigaciones en curso"
            }
          },
          "fieldText": {
            "systemName": { "label_en": "System Name", "label_es": "Nombre Sistema" },
            "systemId": { "label_en": "System Id", "label_es": "Id Sistema" },
            "capa": { "label_en": "CAPA Required", "label_es": "¿Requiere CAPA?" },
            "capaName": { "label_en": "CAPA System Name", "label_es": "Nombre Sistema CAPA" },
            "capaId": { "label_en": "CAPA Id", "label_es": "Id CAPA" }
          },
          "gridHeader": {
            "id": {
              "label_en": "ID", "label_es": "ID", "width": "12px", "sort": false, "filter": true
            },
            "description": {
              "label_en": "description", "label_es": "description", "width": "20px", "sort": false, "filter": true
            },
            "created_on": {
              "label_en": "Creation", "label_es": "Creación", "width": "30px", "sort": false, "filter": true
            },
            "external_system_name": {
              "label_en": "External System Name", "label_es": "Nombre Sistema Externo", "width": "20px", "sort": false, "filter": true
            },
            "external_system_id": {
              "label_en": "External System Id", "label_es": "Id Sistema Externo", "width": "20px", "sort": false, "filter": true
            },
            "capa_required": {
              "label_en": "capa_required", "label_es": "CAPA Necesario", "width": "20px", "sort": false, "filter": true
            },
            "capa_external_system_name": {
              "label_en": "CAPA System", "label_es": "Sistema para CAPAs", "width": "20px", "sort": false, "filter": true
            },
            "capa_external_system_id": {
              "label_en": "CAPA System Id", "label_es": "Id en Sistema CAPAs", "width": "20px", "sort": false, "filter": true
            }
          }
        },
        "viewQuery":{
            "actionName": "OPEN_INVESTIGATIONS",
            "button": {
              "icon": "refresh",
              "title": {
                "label_en": "Reload", "label_es": "Recargar"
              },
              "requiresGridItemSelected": true
            }
		},
		"actions": [
          {"actionName": "INVESTIGATION_CAPA_DECISION",			
			"requiresDialog": true,
            "button": {
              "title": {
                "label_en": "Decision", "label_es": "Decisión"
              },
              "requiresGridItemSelected": true
            },
            "dialogInfo": {               
              "name": "decisionDialog"
            },
            "endPointParams": [
              { "argumentName": "investigationId", "selObjectPropertyName": "id" },
              { "argumentName": "capaRequired", "targetValue": true },
              { "argumentName": "capaFieldName", "value": "external_system_name|external_system_id|capa_external_system_name|capa_external_system_id" },
              { "argumentName": "capaFieldValue", "targetValue": true },
			  { "argumentName": "closeInvestigation", "value": false }				  
            ]
          },
          {"actionName": "CLOSE_INVESTIGATION",
            "clientMethod": "closeInvestigation",
			"requiresDialog": false,
            "button": {
              "title": {
                "label_en": "Close", "label_es": "Cerrar"
              },
              "requiresGridItemSelected": true
            },
            "endPointParams": [
              { "argumentName": "investigationId", "selObjectPropertyName": "id" }
            ]
          }
        ]
      }
    ]
  },
  "configReferences": {
    "component": "TableWithButtons",
    "langConfig": {
      "title": {
        "configReferences": {
          "label_en": "Master of References",
          "label_es": "Maestro de Referencias"
        }
      },
      "gridHeader": {
        "category": {
          "label_en": "Category",
          "label_es": "Categoría",
          "width": "20%",
          "sort": false,
          "filter": true
        },
        "name": {
          "label_en": "Name",
          "label_es": "Nombre",
          "width": "20%",
          "sort": false,
          "filter": true,
          "align": "left"
        },
        "lot_requires_qualif": {
          "label_en": "Requires Qualif?",
          "label_es": "¿Necesita Cualif?",
          "width": "20%",
          "sort": true,
          "filter": false
        }
      }
    },
    "viewQuery": {
      "actionName": "ALL_INVENTORY_REFERENCES",
      "addRefreshButton": true,
      "button": {
        "icon": "refresh",
        "title": {
          "label_en": "Refresh",
          "label_es": "Recargar"
        }
      }
    },
    "actions": [
		{ "actionName": "CONFIG_ADD_REFERENCE",
		"requiresDialog": true,
		"button": {
		  "icon": "create_new_folder",
		  "title": {
			"label_en": "New",
			"label_es": "Nuevo"
		  },
		  "requiresGridItemSelected": false
		},
		"dialogInfo": {
		  "name": "genericDialog",
		  "fields": [
			{
			  "text1": {
				"label_en": "New Reference Name",
				"label_es": "Nombre nueva Referencia"
			  }
			},
			{
			  "list1": {
				"label_en": "Category",
				"label_es": "Categoría",
				"addBlankValueOnTop": true,
				"addBlankValueAtBottom": false,
				"valuesFromMasterData": {
				  "propertyNameContainer": "category_and_references",
				  "propertyNameContainerLevelPropertyKeyName": "name",
				  "propertyKeyName": "name",
				  "propertyKeyValueEn": "name",
				  "propertyKeyValueEs": "name"
				}
			  }
			},
			{
			  "checkbox1": {
				"label_en": "Requires Qualification?",
				"label_es": "¿Requiere Cualificación?",
				"defaultValue": false
			  }
			},
			{
			  "number1": {
				"label_en": "Min Stock",
				"label_es": "Stock Mínimo",
				"optional": true
			  }
			},
			{
			  "list2": {
				"label_en": "UOM",
				"label_es": "UDM",
				"addBlankValueOnTop": true,
				"addBlankValueAtBottom": false,
				"valuesFromMasterData": {
				  "propertyNameContainer": "units_of_measurement",
				  "propertyKeyName": "pretty_name",
				  "propertyKeyValueEn": "pretty_name",
				  "propertyKeyValueEs": "pretty_name"
				}
			  }
			},
			{
			  "multilist1": {
				"label_en": "Other Allowed UOMs",
				"label_es": "Otras UDM aceptadas",
				"addBlankValueOnTop": true,
				"addBlankValueAtBottom": false,
				"valuesFromMasterData": {
				  "propertyNameContainer": "units_of_measurement",
				  "propertyKeyName": "pretty_name",
				  "propertyKeyValueEn": [
					"pretty_name"
				  ],
				  "propertyKeyValueEs": [
					"pretty_name"
				  ]
				}
			  }
			},
			{
			  "list3": {
				"label_en": "min Stock Type",
				"label_es": "Tipo Stock Mínimo",
				"optional": true,
				"addBlankValueOnTop": true,
				"items": [
				  {
					"keyName": "QUANTITY",
					"keyValue_en": "Quantity",
					"keyValue_es": "Cantidad"
				  },
				  {
					"keyName": "PB ITEMS",
					"keyValue_en": "Items",
					"keyValue_es": "Items"
				  }
				]
			  }
			},
			{
			  "checkbox2": {
				"label_en": "Requires control for Available for use",
				"label_es": "¿Requiere control disponible para uso?",
				"optional": true
			  }
			},
			{
			  "number2": {
				"label_en": "Min Available for use",
				"label_es": "Minimo en Disponible para uso",
				"optional": true
			  }
			},
			{
			  "list3": {
				"label_en": "Type",
				"label_es": "Tipo",
				"optional": true,
				"addBlankValueOnTop": true,
				"items": [
				  {
					"keyName": "QUANTITY",
					"keyValue_en": "Quantity",
					"keyValue_es": "Cantidad"
				  },
				  {
					"keyName": "PB ITEMS",
					"keyValue_en": "Items",
					"keyValue_es": "Items"
				  }
				]
			  }
			},
			{
			  "checkbox3": {
				"label_en": "Allow Some open at a time?",
				"label_es": "¿Permitir abrir varios a la vez?",
				"optional": true
			  }
			},
			{
			  "text4": {
				"label_en": "Qualification Variables Set",
				"label_es": "Conjunto Variables para Cualificación",
				"optional": true
			  }
			}
		  ]
		},
		"endPointParams": [
		  {
			"argumentName": "name",
			"element": "text1"
		  },
		  {
			"argumentName": "category",
			"element": "list1"
		  },
		  {
			"argumentName": "lotRequiresQualif",
			"element": "checkbox1"
		  },
		  {
			"argumentName": "minStock",
			"element": "number1"
		  },
		  {
			"argumentName": "minStockUom",
			"element": "list2"
		  },
		  {
			"argumentName": "allowedUoms",
			"element": "multilist1",
			"defaultValue": ""
		  },
		  {
			"argumentName": "minStockType",
			"element": "list3"
		  },
		  {
			"argumentName": "requiresAvailableForUse",
			"element": "checkbox2"
		  },
		  {
			"argumentName": "minAvailablesForUse",
			"element": "number2"
		  },
		  {
			"argumentName": "minAvailablesForUseType",
			"element": "list3"
		  },
		  {
			"argumentName": "allowedOpeningSomeAtaTime",
			"element": "checkbox3"
		  },
		  {
			"argumentName": "qualificationVariablesSet",
			"element": "text4"
		  }
		]
	  },
	  { "actionName": "CONFIG_UPDATE_REFERENCE",
		"requiresDialog": true,
		"notGetViewData": true,
		"selectedItemPropertyName": "selectedItems",
		"secondaryActionToPerform": {
		  "name": "refreshSelProcData"
		},
		"button": {
		  "icon": "manufacturing",
		  "title": {
			"label_en": "Edit reference",
			"label_es": "Configurar referencia"
		  },
		  "requiresGridItemSelected": true
		},
		"dialogInfo": {
		  "name": "genericDialog",
		  "fields": [
			{
			  "list1": {
				"label_en": "Category",
				"label_es": "Categoría",
				"addBlankValueOnTop": true,
				"addBlankValueAtBottom": false,
				"optional": false,
				"valuesFromMasterData": {
				  "propertyNameContainer": "category_and_references",
				  "propertyNameContainerLevelPropertyKeyName": "name",
				  "propertyKeyName": "name",
				  "propertyKeyValueEn": "name",
				  "propertyKeyValueEs": "name"
				}
			  }
			},
			{
			  "checkbox1": {
				"label_en": "Requires Qualification?",
				"label_es": "¿Requiere Cualificación?",
				"defaultValue": false,
				"optional": false
			  }
			},
			{
			  "number1": {
				"label_en": "Min Stock",
				"label_es": "Stock Mínimo",
				"optional": true
			  }
			},
			{
			  "list2": {
				"label_en": "UOM",
				"label_es": "UDM",
				"addBlankValueOnTop": true,
				"addBlankValueAtBottom": false,
				"optional": true,
				"valuesFromMasterData": {
				  "propertyNameContainer": "units_of_measurement",
				  "propertyKeyName": "pretty_name",
				  "propertyKeyValueEn": "pretty_name",
				  "propertyKeyValueEs": "pretty_name"
				}
			  }
			},
			{
			  "multilist1": {
				"label_en": "Other Allowed UOMs",
				"label_es": "Otras UDM aceptadas",
				"addBlankValueOnTop": true,
				"addBlankValueAtBottom": false,
				"valuesFromMasterData": {
				  "propertyNameContainer": "units_of_measurement",
				  "propertyKeyName": "pretty_name",
				  "propertyKeyValueEn": [
					"pretty_name"
				  ],
				  "propertyKeyValueEs": [
					"pretty_name"
				  ]
				}
			  }
			},
			{
			  "list3": {
				"label_en": "min Stock Type",
				"label_es": "Tipo Stock Mínimo",
				"optional": true,
				"addBlankValueOnTop": true,
				"items": [
				  {
					"keyName": "QUANTITY",
					"keyValue_en": "Quantity",
					"keyValue_es": "Cantidad"
				  },
				  {
					"keyName": "PB ITEMS",
					"keyValue_en": "Items",
					"keyValue_es": "Items"
				  }
				]
			  }
			},
			{
			  "checkbox2": {
				"label_en": "Requires control for Available for use",
				"label_es": "¿Requiere control disponible para uso?",
				"optional": true
			  }
			},
			{
			  "number2": {
				"label_en": "Min Available for use",
				"label_es": "Minimo en Disponible para uso",
				"optional": true
			  }
			},
			{
			  "list3": {
				"label_en": "Type",
				"label_es": "Tipo",
				"optional": true,
				"addBlankValueOnTop": true,
				"items": [
				  {
					"keyName": "QUANTITY",
					"keyValue_en": "Quantity",
					"keyValue_es": "Cantidad"
				  },
				  {
					"keyName": "PB ITEMS",
					"keyValue_en": "Items",
					"keyValue_es": "Items"
				  }
				]
			  }
			},
			{
			  "checkbox3": {
				"label_en": "Allow Some open at a time?",
				"label_es": "¿Permitir abrir varios a la vez?",
				"optional": true
			  }
			},
			{
			  "text4": {
				"label_en": "Qualification Variables Set",
				"label_es": "Conjunto Variables para Cualificación",
				"optional": true
			  }
			}
		  ]
		},
		"endPointParams": [
		  {
			"argumentName": "referenceName",
			"selObjectPropertyName": "name"
		  },
		  {
			"argumentName": "category",
			"element": "list1"
		  },
		  {
			"argumentName": "lotRequiresQualif",
			"element": "checkbox1",
			"addToFieldNameAndValue": true,
			"notAddWhenValueIsBlank": true,
			"fieldType": "BOOLEAN"
		  },
		  {
			"argumentName": "minStock",
			"element": "number1",
			"addToFieldNameAndValue": true,
			"notAddWhenValueIsBlank": true
		  },
		  {
			"argumentName": "minStockUom",
			"element": "list2",
			"addToFieldNameAndValue": true,
			"notAddWhenValueIsBlank": true
		  },
		  {
			"argumentName": "allowedUoms",
			"element": "multilist1",
			"defaultValue": "",
			"addToFieldNameAndValue": true,
			"notAddWhenValueIsBlank": true
		  },
		  {
			"argumentName": "minStockType",
			"element": "list3",
			"addToFieldNameAndValue": true,
			"notAddWhenValueIsBlank": true
		  },
		  {
			"argumentName": "requiresAvailableForUse",
			"element": "checkbox2",
			"addToFieldNameAndValue": true,
			"notAddWhenValueIsBlank": true
		  },
		  {
			"argumentName": "minAvailablesForUse",
			"element": "number2",
			"addToFieldNameAndValue": true,
			"notAddWhenValueIsBlank": true
		  },
		  {
			"argumentName": "minAvailablesForUseType",
			"element": "number2",
			"addToFieldNameAndValue": true,
			"notAddWhenValueIsBlank": true
		  },
		  {
			"argumentName": "allowedOpeningSomeAtaTime",
			"element": "checkbox3",
			"addToFieldNameAndValue": true,
			"notAddWhenValueIsBlank": true
		  },
		  {
			"argumentName": "qualificationVariablesSet",
			"element": "text4",
			"addToFieldNameAndValue": true,
			"notAddWhenValueIsBlank": true
		  }
		]
	  },		
      {
        "actionName": "CONFIG_ADD_REFERENCE",
        "requiresDialog": true,
        "button": {
          "icon": "create_new_folder",
          "title": {
            "label_en": "New",
            "label_es": "Nuevo"
          },
          "requiresGridItemSelected": false
        },
        "dialogInfo": {
          "name": "genericDialog",
          "fields": [            
			{"text1": {"label_en": "New Reference Name","label_es": "Nombre nueva Referencia"}},
			{"list1": {"label_en": "Category", "label_es": "Categoría",
			  "addBlankValueOnTop": true, "addBlankValueAtBottom": false,
			  "valuesFromMasterData": {
				"propertyNameContainer": "category_and_references",
				"propertyNameContainerLevelPropertyKeyName": "name",
				"propertyKeyName": "name", "propertyKeyValueEn": "name", "propertyKeyValueEs": "name"
			  }			
			}},		  			  
			{"checkbox1": {"label_en": "Requires Qualification?","label_es": "¿Requiere Cualificación?", "defaultValue":false}},
			{"number1": {"label_en": "Min Stock","label_es": "Stock Mínimo", "optional":true}},
			{"text2": {"label_en": "UOM","label_es": "UDM", "optional":true}},
			{"text3": {"label_en": "Other Allowed UOMs","label_es": "Otras UDM aceptadas", "optional":true}},
			{"list2": {"label_en": "min Stock Type","label_es": "Tipo Stock Mínimo", "optional":true,
				"addBlankValueOnTop": true,
				"items": [
					{ "keyName": "QUANTITY", "keyValue_en": "Quantity", "keyValue_es": "Cantidad" },                
					{ "keyName": "PB ITEMS", "keyValue_en": "Items", "keyValue_es": "Items" }
				]
			}},
			{"checkbox2": {"label_en": "Requires control for Available for use","label_es": "¿Requiere control disponible para uso?", "optional":true}},
			{"number2": {"label_en": "Min Available for use","label_es": "Minimo en Disponible para uso", "optional":true}},
			{"list3": {"label_en": "Type","label_es": "Tipo", "optional":true,
				"addBlankValueOnTop": true,
				"items": [
					{ "keyName": "QUANTITY", "keyValue_en": "Quantity", "keyValue_es": "Cantidad" },                
					{ "keyName": "PB ITEMS", "keyValue_en": "Items", "keyValue_es": "Items" }
				]			  
			}},
			{"checkbox3": {"label_en": "Allow Some open at a time?","label_es": "¿Permitir abrir varios a la vez?", "optional":true}},
			{"text4": {"label_en": "Qualification Variables Set","label_es": "Conjunto Variables para Cualificación", "optional":true}}            
          ]
        },
        "endPointParams": [
          {"argumentName": "name",                "element": "text1"           },
          {"argumentName": "category",            "element": "list1"          },
          {"argumentName": "lotRequiresQualif",   "element": "checkbox1"      },
          {"argumentName": "minStock",            "element": "number1"        },
          {"argumentName": "minStockUom",         "element": "text2"          },
          {"argumentName": "allowedUoms",         "element": "text3"          },
          {"argumentName": "minStockType",        "element": "list2"          },
          {"argumentName": "requiresAvailableForUse",   "element": "checkbox2"},
          {"argumentName": "minAvailablesForUse",       "element": "number2"  },
          {"argumentName": "minAvailablesForUseType",   "element": "list3"    },
          {"argumentName": "allowedOpeningSomeAtaTime", "element": "checkbox3"},
          {"argumentName": "qualificationVariablesSet", "element": "text4"    }
        ]
      }
    ]
  }  
}