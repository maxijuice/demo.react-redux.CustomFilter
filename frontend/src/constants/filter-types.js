export const CONTAINS = "CONTAINS";
export const EQUALS = "EQUALS";
export const BEGINS_WITH = "BEGINS_WITH";

export const CONTAINS_LABEL = "**";
export const EQUALS_LABEL = '" "';
export const BEGINS_WITH_LABEL = "*...";

export const SORT_LABEL = "A-Z";

export function getLabelForType(type) {
    switch (type) {
        case CONTAINS: return CONTAINS_LABEL;
        case EQUALS: return EQUALS_LABEL;
        case BEGINS_WITH: return BEGINS_WITH_LABEL;
        default: return "undefined";
    }
}