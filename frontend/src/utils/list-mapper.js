import ListItemRecord from "components/list-item/list-item-record";

const mapEntityForList = entityName => (entities, selectedEntities) => {
    return entities.map(entity => new ListItemRecord({
        isChecked: selectedEntities.includes(entity.get("name")),
        label: entity.get("name"),
        itemId: entity.get(`${entityName}Id`)
    }));
};

export const mapRowsForList = mapEntityForList("row");
export const mapDimsForList = mapEntityForList("dimension");
export const mapTablesForList = mapEntityForList("table");
