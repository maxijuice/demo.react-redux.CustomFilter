import { Record } from "immutable";

export default class MessageRecord extends Record({isError: false, text: ""}) {
    setError(txt) {
        return this.set("isError", true).set("text", txt);
    }    

    setMessage(txt) {
        return this.set("isError", false).set("text", txt);
    }
}