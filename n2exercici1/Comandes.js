
db.createCollection( 'Comandes', {validator: {$jsonSchema: {bsonType: 'object',title:'Comandes',required: [         'IDComanda',          'Comanda',          'Client'],properties: {IDComanda: {bsonType: 'objectId'},Comanda: {bsonType: 'object',
title:'object',required: [         'Productes',          'Preu Total',          'Entregat',          'Pagat'],properties: {Productes: {bsonType: 'array',items: {
title:'object',required: [         'Quantitat',          'Tipus',          'Preu'],properties: {Quantitat: {bsonType: 'int'},Tipus: {bsonType: 'object',
title:'object',required: [         'Nom'],properties: {Nom: {bsonType: 'string'},Categoria Pizza: {bsonType: 'object',
title:'object',required: [         'Nom'],properties: {Nom: {bsonType: 'string'}}}}},Preu: {bsonType: 'double'}}}},Preu Total: {bsonType: 'double'},Entregat: {bsonType: 'bool'},Pagat: {bsonType: 'bool'}}},Client: {bsonType: 'object',
title:'object',required: [         'IDClient',          'Nom'],properties: {IDClient: {bsonType: 'objectId'},Nom: {bsonType: 'object',
title:'object',required: [         'Cognoms',          'Nom'],properties: {Cognoms: {bsonType: 'string'},Nom: {bsonType: 'string'}}}}},Repartiment: {bsonType: 'object',
title:'object',required: [         'Carrer',          'Numero',          'Pis/Porta',          'Telefon Contacte'],properties: {Carrer: {bsonType: 'string'},Numero: {bsonType: 'int'},Pis/Porta: {bsonType: 'string'},Telefon Contacte: {bsonType: 'int'},Nota: {bsonType: 'string'}}}}         }      }});  