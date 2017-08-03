import { normalize, schema } from "normalizr";

export default function normalizeJson(json) {

    const row = new schema.Entity("rows", {}, {
        idAttribute: "rowId",
        processStrategy: (value, parent, key) => {
            return {
                ...value,
                dimension: parent[ "dimensionId" ],
                table: parent[ "table" ]
            };
        }
    });

    const dimension = new schema.Entity("dimensions", {
        rows: [ row ]
    }, {
            idAttribute: "dimensionId",
            processStrategy: (value, parent, key) => {
                return {
                    ...value,
                    table: parent[ "tableId" ]
                };
            }
        });

    const table = new schema.Entity("tables", {
        dimensions: [ dimension ]
    }, { idAttribute: "tableId" });

    const tablesList = [ table ];

    return normalize(json, tablesList);
}