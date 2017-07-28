import configureStore from "./store/configure";
import { loadEntities } from "./actions/thunk";
import { toggleTable, toggleDimension, toggleRow } from "./actions/common";

const store = configureStore();

store.dispatch(loadEntities());

setTimeout(() => {
    store.dispatch(toggleTable("1"));
    store.dispatch(toggleTable("2"));

    store.dispatch(toggleTable("1"));

    store.dispatch(toggleDimension("20"));

    store.dispatch(toggleRow("121"));
    store.dispatch(toggleRow("122"));
    store.dispatch(toggleRow("123"));
    store.dispatch(toggleRow("123"));
    store.dispatch(toggleRow("122"));

    store.dispatch(toggleDimension("20"));

    store.dispatch(toggleTable("1"));
}, 500);
