import { Map, List } from "immutable";
import { CONTAINS, EQUALS, BEGINS_WITH } from "constants/filters";
import MessageRecord from "records/message";
import PopupRecord from "records/popup";
import FilterConfigRecord from "records/filter-config";

const initialState = Map({
    domain: Map({
        filterResult: Map({
            tables: List(),
            dimensions: List(),
            rows: List()
        }),
        entities: Map({
            tables: Map(),
            dimensions: Map(),
            rows: Map()
        }),
        filters: List([CONTAINS, BEGINS_WITH, EQUALS])
    }),
    message: new MessageRecord(),
    currentPopup: new PopupRecord(),
    filterConfig: new FilterConfigRecord()
});

export default initialState;