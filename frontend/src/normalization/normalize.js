import { normalize, schema } from "normalizr";

export default function normalizeJson(json) {

    const row = new schema.Entity("rows", {}, { idAttribute: "rowId" });
    
    const dimension = new schema.Entity("dimensions", {
        rows: [row]
    }, { idAttribute: "dimensionId" });
    
    const table = new schema.Entity("tables", {
        dimensions: [dimension]
    }, { idAttribute: "tableId" });

    const tablesList = [table];

    return normalize(json, tablesList);
}