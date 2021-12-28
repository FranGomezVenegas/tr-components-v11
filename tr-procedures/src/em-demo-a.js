export const EmDemoA = {
  "SamplePendingSampling": {
    "langConfig": {
      "title": {
        "samples": {
          "label_en": "Samples Pending Sampling Date", 
          "label_es": "Muestras pendientes de la fecha de muestreo"
        },
        "personel": {
          "label_en": "Personnel Samples Pending Sampling Date", 
          "label_es": "Muestras de personal pendientes de la fecha de muestreo"
        }
      },
      "fieldText": {
        "comment": { "label_en": "Comment", "label_es": "Comentario" }
      },
      "gridHeader": {
        "sample_id": {
          "label_en": "Sample ID", "label_es": "ID Muestra", "sort": false, "filter": true
        },
        "program_name": {
          "label_en": "Project", "label_es": "Programa", "sort": false, "filter": true
        },
        "location_name": {
          "label_en": "Location", "label_es": "Ubicación", "sort": false, "filter": true
        },
        "sampling_date": {
          "label_en": "Sampling Date", "label_es": "ID Fecha de Muestreo", "sort": false, "filter": true
        },
        "sampling_comment": {
          "label_en": "sampling Comment", "label_es": "Comentario Muestreo", "sort": false, "filter": true
        },
        "spec_code": {
          "label_en": "Spec", "label_es": "Especificación", "sort": false, "filter": true
        },
        "spec_variation_name": {
          "label_en": "Variation", "label_es": "Variación", "sort": false, "filter": true
        }
      }
    },
    "actions": [
      {
        "actionName": "SAMPLES_BY_STAGE",
        "clientMethod": "getSamples",
        "button": {
          "icon": "refresh",
          "title": {
            "label_en": "Reload", "label_es": "Recargar"
          },
          "whenDisabled": "samplesReload"
        },
        "apiParams": [
          { "query": "sampleFieldToRetrieve", "value": "sample_id|current_stage|status|status_previous|sampling_date|sampling_comment|sample_config_code|program_name|location_name|spec_code|spec_variation_name" },
          { "query": "whereFieldsValue", "value": "Sampling|prog_pers_template" }
        ],
        "paramFilter": {
          "samples": { "query": "whereFieldsName", "value": "current_stage|sample_config_code not in*" },
          "personel": { "query": "whereFieldsName", "value": "current_stage|sample_config_code in*" }
        }
      },
      {
        "actionName": "GET_SAMPLE_AUDIT",
        "clientMethod": "getSampleAudit",
        "button": {
          "icon": "rule",
          "title": {
            "label_en": "Sample Audit", "label_es": "Auditoría de Muestra"
          },
          "whenDisabled": "selectedSamples"
        },
        "dialogInfo": { 
          "automatic": true
        }
      },
      {
        "actionName": "SETSAMPLINGDATE",
        "clientMethod": "setSamplingDate",
        "button": {
          "icon": "date_range",
          "title": {
            "label_en": "Set Sample Date", "label_es": "Establecer Fecha Muestra"
          },
          "whenDisabled": "selectedSamples"
        }
      },
      {
        "actionName": "CHANGESAMPLINGDATE",
        "clientMethod": "setSamplingDate",
        "button": {
          "icon": "event",
          "title": {
            "label_en": "Change Sample Date", "label_es": "Cambiar Fecha Muestra"
          },
          "whenDisabled": "selectedSamples"
        },
        "dialogInfo": { 
          "requiresDialog": true,
          "name": "dateDialog"
        },
        "apiParams": [
          { "query": "newDateTime", "element": "dateInput", "defaultValue": "" }
        ]
      },
      {
        "actionName": "SAMPLESTAGE_MOVETONEXT",
        "clientMethod": "moveToNext",
        "button": {
          "icon": "next_week",
          "title": {
            "label_en": "Next", "label_es": "Siguiente"
          },
          "whenDisabled": "selectedSamples"
        }
      },
      {
        "actionName": "SAMPLINGCOMMENTADD",
        "clientMethod": "addSamplingComment",
        "button": {
          "icon": "add_comment",
          "title": {
            "label_en": "Add Sampling Comment", "label_es": "Agregar Comentario de Muestra"
          },
          "whenDisabled": "selectedSamples"
        },
        "dialogInfo": { 
          "requiresDialog": true,
          "name": "commentDialog"
        },
        "apiParams": [
          { "query": "sampleComment", "element": "commentInput", "defaultValue": "" }
        ]
      },
      {
        "actionName": "SAMPLINGCOMMENTREMOVE",
        "clientMethod": "removeSamplingComment",
        "button": {
          "icon": "speaker_notes_off",
          "title": {
            "label_en": "Remove Sampling Comment", "label_es": "Eliminar Comentario de Muestra"
          },
          "whenDisabled": "selectedSamples"
        }
      }
    ]
  },
  "SamplePlateReading": {
    "langConfig": {
      "title": {
        "PlateReadingSMP": {
          "label_en": "Samples Pending Plate Reading", 
          "label_es": "Muestras pendientes de la lectura de placa"
        },
        "PlateReadingPERS": {
          "label_en": "Personnel Samples Pending Plate Reading", 
          "label_es": "Muestras de personal pendientes de la lectura de placa"
        }
      },
      "gridHeader": {
        "sample_id": {
          "label_en": "Sample ID", "label_es": "ID Muestra", "sort": false, "filter": true
        },
        "status": {
          "label_en": "Status", "label_es": "Estado", "is_icon": true
        },
        "program_name": {
          "label_en": "Project", "label_es": "Programa", "sort": false, "filter": true
        },
        "location_name": {
          "label_en": "Location", "label_es": "Ubicación", "sort": false, "filter": true
        },
        "sampling_date": {
          "label_en": "sampling Date", "label_es": "ID Fecha de Muestreo", "sort": false, "filter": true
        },
        "incubation_batch": {
          "label_en": "Batch incub 1", "label_es": "Tanda 1a Incubacion", "sort": false, "filter": true
        },
        "incubation_incubator": {
          "label_en": "Incubator incub 1", "label_es": "Incubadora 1a Incubacion", "sort": false, "filter": true
        },
        "incubation_start": {
          "label_en": "incubation 1 start", "label_es": "Inicio 1a Incubacion", "sort": false, "filter": true
        },
        "incubation_end": {
          "label_en": "incubation 1 end", "label_es": "Fin 1a Incubacion", "sort": false, "filter": true
        },
        "incubation2_batch": {
          "label_en": "Batch incub 2", "label_es": "Tanda 2a Incubacion", "sort": false, "filter": true
        },
        "incubation2_incubator": {
          "label_en": "Incubator incub 2", "label_es": "Incubadora 2a Incubacion", "sort": false, "filter": true
        },
        "incubation2_start": {
          "label_en": "incubation 2 start", "label_es": "Inicio 2a Incubacion", "sort": false, "filter": true
        },
        "incubation2_end": {
          "label_en": "incubation 2 end", "label_es": "Fin 2a Incubacion", "sort": false, "filter": true
        }
      },
      "resultHeader": {
        "spec_eval": {
          "label_en": "spec_eval", "label_es": "Eval Espec"
        },
        "result_id": {
          "label_en": "Result Id", "label_es": "Id Resultado"
        },
        "analysis": {
          "label_en": "Analysis", "label_es": "Análísis"
        },
        "param_name": {
          "label_en": "Parameter", "label_es": "Parámetro"
        },
        "raw_value": {
          "label_en": "Value", "label_es": "Valor"
        }
      }
    },
    "actions": [
      {
        "actionName": "SAMPLES_BY_STAGE",
        "clientMethod": "getSamples",
        "button": {
          "icon": "refresh",
          "title": {
            "label_en": "Reload", "label_es": "Recargar"
          },
          "whenDisabled": "samplesReload"
        },
        "apiParams": [
          { "query": "sampleFieldToRetrieve", "value": "sample_id|program_name|location_name|current_stage|status|sampling_date|sampling_comment|incubation_batch|incubation_incubator|incubation_start|incubation_end|incubation2_batch|incubation2_incubator|incubation2_start|incubation2_end|sample_config_code" },
          { "query": "whereFieldsValue", "value": "PlateReading|prog_pers_template" }
        ],
        "paramFilter": {
          "PlateReadingSMP": { "query": "whereFieldsName", "value": "current_stage|sample_config_code not in*" },
          "PlateReadingPERS": { "query": "whereFieldsName", "value": "current_stage|sample_config_code in*" }
        }
      },
      {
        "actionName": "SAMPLESTAGE_MOVETOPREVIOUS",
        "clientMethod": "moveToNext",
        "button": {
          "id": "prev",
          "icon": "next_week",
          "title": {
            "label_en": "Previous", "label_es": "Previo"
          },
          "whenDisabled": "selectedSamples"
        }
      },
      {
        "actionName": "SAMPLESTAGE_MOVETONEXT",
        "clientMethod": "moveToNext",
        "button": {
          "icon": "next_week",
          "title": {
            "label_en": "Next", "label_es": "Siguiente"
          },
          "whenDisabled": "selectedSamples"
        }
      },
      {
        "actionName": "GET_SAMPLE_AUDIT",
        "clientMethod": "getSampleAudit",
        "button": {
          "icon": "rule",
          "title": {
            "label_en": "Sample Audit", "label_es": "Auditoría de Muestra"
          },
          "whenDisabled": "selectedSamples"
        },
        "dialogInfo": { 
          "automatic": true,
          "action": [
            {
              "actionName": "SAMPLEAUDIT_SET_AUDIT_ID_REVIEWED",
              "clientMethod": "signAudit",
              "apiParams": [
                { "query": "auditId", "targetValue": true }
              ]
            }
          ]
        }
      },
      {
        "actionName": "GET_SAMPLE_ANALYSIS_RESULT_LIST",
        "clientMethod": "getResult",
        "button": {
          "icon": "document_scanner",
          "title": {
            "label_en": "Enter Result", "label_es": "Ingrese el Resultado"
          },
          "whenDisabled": "selectedSamples"
        },
        "dialogInfo": { 
          "automatic": true,
          "action": [
            {
              "actionName": "ENTERRESULT",
              "clientMethod": "enterResult",
              "apiParams": [
                { "query": "rawValueResult", "targetValue": true },
                { "query": "resultId", "targetValue": true }
              ]
            }
          ]
        },
        "apiParams": [
          { "query": "sampleAnalysisResultFieldToRetrieve", "value": "result_id|analysis|method_name|method_version|param_name|param_type|raw_value|uom|spec_eval|spec_eval_detail|status|min_val_allowed|min_allowed_strict|max_val_allowed|max_allowed_strict" },
          { "query": "sortFieldsName", "value": "test_id|result_id" }
        ]
      }
    ]
  },
  "SampleMicroorganism": {
    "langConfig": {
      "title": {
        "samples": {
          "label_en": "Samples Pending Microorganism Identification", 
          "label_es": "Muestras pendientes de la identificación de microorganismos"
        },
        "personel": {
          "label_en": "Personnel Samples Pending Microorganism Identification", 
          "label_es": "Muestras de personal pendientes de la identificación de microorganismos"
        }
      },
      "fieldText": {
        "addhocInput": { "label_en": "Ad-hoc microorganism name", "label_es": "Nombre Ad-hoc" },
        "addhocBtn": { "label_en": "Add Addhoc", "label_es": "Añadir Nuevo" },
        "addBtn": { "label_en": "Add", "label_es": "Añadir" }
      },
      "gridHeader": {
        "sample_id": {
          "label_en": "Sample ID", "label_es": "ID Muestra", "sort": false, "filter": true, width: "12px"
        },
        "program_name": {
          "label_en": "Project", "label_es": "Programa", "sort": false, "filter": true, width:'20px'
        },
        "location_name": {
          "label_en": "Location", "label_es": "Ubicación", "sort": false, "filter": true, width:'30px'
        },
        "sampling_date": {
          "label_en": "sampling Date", "label_es": "ID Fecha de Muestreo", "sort": false, "filter": true, width:'20px'
        },
        "raw_value": {
          "label_en": "Reading Result", "label_es": "Recuento", "sort": false, "filter": true, width:'20px'
        },
        "microorganism_count": {
          "label_en": "# Organism Ident.", "label_es": "Num. MicroOrg. Detectados", "sort": false, "filter": true, width:'20px'
        },
        "microorganism_list": {
          "label_en": "Microorganisms", "label_es": "Microorganismos", "sort": false, "filter": true, width:'20px'
        }
      },
      "microorganismHeader": {
        "name": {
          "label_en": "Name", "label_es": "Nombre", "sort": true, "filter": false 
        }
      }
    },
    "actions": [
      {
        "actionName": "GET_SAMPLE_MICROORGANISM_VIEW",
        "clientMethod": "getSamples",
        "button": {
          "icon": "refresh",
          "title": {
            "label_en": "Reload", "label_es": "Recargar"
          },
          "whenDisabled": "samplesReload"
        },
        "apiParams": [
          { "query": "sampleFieldToRetrieve", "value": "sample_id|current_stage|status|status_previous|sampling_comment|sample_config_code|program_name|location_name|spec_code|spec_variation_name" },
          { "query": "whereFieldsValue", "value": "MicroorganismIdentification|prog_pers_template" }
        ],
        "paramFilter": {
          "samples": { "query": "whereFieldsName", "value": "current_stage|sample_config_code not in*" },
          "personel": { "query": "whereFieldsName", "value": "current_stage|sample_config_code in*" }
        }
      },
      {
        "actionName": "SAMPLESTAGE_MOVETOPREVIOUS",
        "clientMethod": "moveToNext",
        "button": {
          "id": "prev",
          "icon": "next_week",
          "title": {
            "label_en": "Previous", "label_es": "Previo"
          },
          "whenDisabled": "selectedSamples"
        }
      },
      {
        "actionName": "SAMPLESTAGE_MOVETONEXT",
        "clientMethod": "moveToNext",
        "button": {
          "icon": "next_week",
          "title": {
            "label_en": "Next", "label_es": "Siguiente"
          },
          "whenDisabled": "selectedSamples"
        }
      },
      {
        "actionName": "GET_SAMPLE_AUDIT",
        "clientMethod": "getSampleAudit",
        "button": {
          "title": {
            "label_en": "Sample Audit", "label_es": "Auditoría de Muestra"
          },
          "whenDisabled": "selectedSamples"
        },
        "dialogInfo": { 
          "automatic": true
        }
      },
      {
        "actionName": "GET_MICROORGANISM_LIST",
        "clientMethod": "getMicroorganism",
        "button": {
          "icon": "add",
          "title": {
            "label_en": "Add Microorganism", "label_es": "Añadir Microorganismo"
          },
          "whenDisabled": "selectedSamples"
        },
        "dialogInfo": { 
          "automatic": true,
          "action": [
            {
              "actionName": "ADD_SAMPLE_MICROORGANISM",
              "clientMethod": "addSampleMicroorganism",
              "apiParams": [
                { "query": "microorganismName", "targetValue": true }
              ]
            },
            {
              "actionName": "ADD_ADHOC_SAMPLE_MICROORGANISM",
              "clientMethod": "addSampleMicroorganism",
              "apiParams": [
                { "query": "microorganismName", "targetValue": true }
              ]
            }
          ]
        }
      },
      {
        "actionName": "GET_SAMPLE_MICROORGANISM_VIEW",
        "clientMethod": "getMicroorganismItem",
        "button": {
          "icon": "remove",
          "title": {
            "label_en": "Remove Microorganism", "label_es": "Borrar Microorganismo"
          },
          "whenDisabled": "selectedSamples"
        },
        "apiParams": [
          { "query": "whereFieldsName", "value": "sample_id" },
          { "query": "whereFieldsValue", "targetValue": true }
        ],
        "dialogInfo": { 
          "automatic": true,
          "action": [
            {
              "actionName": "REMOVE_SAMPLE_MICROORGANISM",
              "clientMethod": "removeSampleMicroorganism",
              "apiParams": [
                { "query": "microorganismName", "targetValue": true }
              ]
            }
          ]
        }
      }
    ]
  },
  "SampleIncubation": {
    "langConfig": {
      "title": {
        "active_batches" : {
          "label_en": "Batches", 
          "label_es": "Tandas"
        }
      },
      "fieldText": {
        "newBatch" : { "label_en": "New Batch Name", "label_es": "Nombre para la nueva tanda" }
      },
      "gridHeader": {
        "iconCol": {
          "label_en": "", "label_es": "", "is_icon": true
        },
        "name": {
          "label_en": "Name", "label_es": "Nombre", "sort": true, "filter": false
        },
        "incub_stage": {
          "label_en": "#Incub", "label_es": "IncNº", "sort": true, "filter": false
        },
        "incubation_incubator": {
          "label_en": "Incubator", "label_es": "Incubadora", "sort": false, "filter": true
        },
        "incubator_info_temperature": {
          "label_en": "Temperature", "label_es": "Temperatura", "sort": false, "filter": false
        },
        "incubator_info_created_on": {
          "label_en": "T.Date", "label_es": "Fecha T.", "sort": false, "filter": false
        },
        "NUM_SAMPLES": {
          "label_en": "Num Samples", "label_es": "Nº Muestras", "sort": false, "filter": false
        },
        "incubation_start": {
          "label_en": "Start Date", "label_es": "Fecha Inicio", "sort": false, "filter": false
        }
      },
      "assignHeader": {
        "stage": { "label_en": "Incub", "label_es": "Incub" },
        "name": { "label_en": "Name", "label_es": "Nombre" },
        "description": { "label_en": "description", "label_es": "descripción" }
      }
    },
    "actions": [
      {
        "actionName": "GET_PENDING_INCUBATION_SAMPLES_AND_ACTIVE_BATCHES",
        "clientMethod": "getSamples",
        "button": {
          "icon": "refresh",
          "title": {
            "label_en": "Reload", "label_es": "Recargar"
          },
          "whenDisabled": "samplesReload"
        },
        "apiParams": [
          { "query": "incub1_whereFieldsName", "value": "current_stage|incubation_passed" },
          { "query": "incub1_whereFieldsValue", "value": "Incubation|false" },
          { "query": "incub1_sortFieldsName", "value": "sample_id desc" },
          { "query": "incub2_whereFieldsName", "value": "current_stage|incubation_passed" },
          { "query": "incub2_whereFieldsValue", "value": "Incubation|true" },
          { "query": "incub2_sortFieldsName", "value": "sample_id desc" },
          { "query": "includeAllWithAnyPendingIncubation", "value": true },
          { "query": "samplesWithAnyPendingIncubation", "value": true}
        ],
        "sortItem": "active_batches"
      },
      {
        "actionName": "EM_BATCH_INCUB_CREATE",
        "clientMethod": "setIncubator",
        "button": {
          "title": {
            "label_en": "New Batch", "label_es": "Nuevo Lote"
          },
          "whenDisabled": "samplesReload"
        },
        "dialogInfo": { 
          "requiresDialog": true,
          "name": "newBatchDialog"
        },
        "apiParams": [
          { "query": "batchName", "element": "batchInput", "defaultValue": "" },
          { "query": "batchTemplateId", "defaultValue": 1 },
          { "query": "batchTemplateVersion", "defaultValue": 1 }
        ]
      },
      {
        "actionName": "EM_BATCH_INCUB_REMOVE",
        "clientMethod": "setIncubator",
        "button": {
          "title": {
            "label_en": "Delete Batch", "label_es": "Eliminar Lote"
          },
          "whenDisabled": "selectedSamples"
        },
        "apiParams": [
          { "query": "batchName", "beItem": "name" }
        ]
      },
      {
        "actionName": "INCUBATORS_LIST",
        "clientMethod": "getAssign",
        "button": {
          "title": {
            "label_en": "Assign Incubator", "label_es": "Asignar Incubadora"
          },
          "whenDisabled": "selectedSamples"
        },
        "dialogInfo": { 
          "automatic": true,
          "action": [
            {
              "actionName": "EM_BATCH_ASSIGN_INCUB",
              "clientMethod": "setIncubator",
              "apiParams": [
                { "query": "batchName", "beItem": "name" },
                { "query": "incubatorName", "targetValue": true },
                { "query": "incubStage", "targetValue": true }
              ]
            }
          ]
        }
      },
      {
        "actionName": "EM_BATCH_INCUB_START",
        "clientMethod": "setIncubator",
        "button": {
          "title": {
            "label_en": "Start Incubator", "label_es": "Iniciar Incubadora"
          },
          "whenDisabled": "selectedSamples"
        },
        "apiParams": [
          { "query": "batchName", "beItem": "name" },
          { "query": "batchTemplateId", "defaultValue": 1 },
          { "query": "batchTemplateVersion", "defaultValue": 1 }
        ]
      },
      {
        "actionName": "EM_BATCH_INCUB_END",
        "clientMethod": "setIncubator",
        "button": {
          "title": {
            "label_en": "End Incubator", "label_es": "Termina incubadora"
          },
          "whenDisabled": "selectedSamples"
        },
        "apiParams": [
          { "query": "batchName", "beItem": "name" },
          { "query": "batchTemplateId", "defaultValue": 1 },
          { "query": "batchTemplateVersion", "defaultValue": 1 }
        ]
      }
    ],
    "compositions": [
      {
        "filter": "samplesWithAnyPendingIncubation",
        "langConfig": {
          "title": {
            "samplesWithAnyPendingIncubation": {
              "label_en": "All Samples Pending Incubation", 
              "label_es": "Todas las muestras pendientes de incubación"
            }
          },
          "gridHeader": {
            "iconCol": {
              "label_en": "", "label_es": "", "is_icon": true, "width": "7%"
            },
            "sampleType": {
              "label_en": "", "label_es": "", "is_icon": true, "width": "7%"
            },
            "sample_id": {
              "label_en": "Sample ID", "label_es": "ID Muestra", "sort": false, "filter": true, "width": "9%"
            },
            "incubation_batch": {
              "label_en": "Batch 1", "label_es": "Tanda", "sort": true, "filter": false, "width": "9%"
            },
            "incubation2_batch": {
              "label_en": "Batch 2", "label_es": "Tanda", "sort": false, "filter": false, "width": "9%"
            },
            "incubation2_start": {
              "label_en": "Incubation 2 Start", "label_es": "Inicio 2a Incubacion", "sort": false, "filter": true, "width": "9%"
            },
            "sampling_date": {
              "label_en": "Sampling Date", "label_es": "ID Fecha de Muestreo", "sort": false, "filter": true, "width": "9%"
            },
            "sampling_comment": {
              "label_en": "Sampling Commment", "label_es": "Comentario Muestreo", "sort": false, "filter": true, "width": "9%"
            },
            "incubation_incubator": {
              "label_en": "Incubator incub 1", "label_es": "Incubadora 1a Incubacion", "sort": false, "filter": true, "width": "9%"
            },
            "incubation_start": {
              "label_en": "incubation 1 start", "label_es": "Inicio 1a Incubacion", "sort": false, "filter": true, "width": "9%"
            },
            "incubation_end": {
              "label_en": "incubation 1 end", "label_es": "Fin 1a Incubacion", "sort": false, "filter": true, "width": "9%"
            }
          }
        },
        "actions": [
          {
            "actionName": "GET_PENDING_INCUBATION_SAMPLES_AND_ACTIVE_BATCHES",
            "clientMethod": "getSamples",
            "button": {
              "icon": "refresh",
              "title": {
                "label_en": "Reload", "label_es": "Recargar"
              },
              "whenDisabled": "samplesReload"
            },
            "apiParams": [
              { "query": "incub1_whereFieldsName", "value": "current_stage|incubation_passed" },
              { "query": "incub1_whereFieldsValue", "value": "Incubation|false" },
              { "query": "incub1_sortFieldsName", "value": "sample_id desc" },
              { "query": "incub2_whereFieldsName", "value": "current_stage|incubation_passed" },
              { "query": "incub2_whereFieldsValue", "value": "Incubation|true" },
              { "query": "incub2_sortFieldsName", "value": "sample_id desc" },
              { "query": "includeAllWithAnyPendingIncubation", "value": true },
              { "query": "samplesWithAnyPendingIncubation", "value": true}
            ]
          },
          {
            "actionName": "SAMPLESTAGE_MOVETOPREVIOUS",
            "clientMethod": "moveToNext",
            "button": {
              "id": "prev",
              "icon": "next_week",
              "title": {
                "label_en": "Previous", "label_es": "Previo"
              },
              "whenDisabled": "selectedSamples"
            }
          },
          {
            "actionName": "GET_SAMPLE_AUDIT",
            "clientMethod": "getSampleAudit",
            "button": {
              "title": {
                "label_en": "Sample Audit", "label_es": "Auditoría de Muestra"
              },
              "whenDisabled": "selectedSamples"
            },
            "dialogInfo": { 
              "automatic": true
            }
          },
          {
            "actionName": "EM_BATCH_INCUB_ADD_SMP",
            "clientMethod": "addRemoveBatch",
            "button": {
              "title": {
                "label_en": "Add to Batch", "label_es": "Añadir a Tanda"
              },
              "whenDisabled": "selectedSamples"
            },
            "apiParams": [
              { "query": "batchTemplateId", "defaultValue": 1 },
              { "query": "batchTemplateVersion", "defaultValue": 1 }
            ]
          },
          {
            "actionName": "EM_BATCH_INCUB_REMOVE_SMP",
            "clientMethod": "addRemoveBatch",
            "button": {
              "title": {
                "label_en": "Remove from Batch", "label_es": "Quitar de Tanda"
              },
              "whenDisabled": "selectedSamples"
            }
          }
        ]
      }
    ]
  }
}