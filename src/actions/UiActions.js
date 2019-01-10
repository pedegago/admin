import ActionTypes from "./ActionTypes";

export const onHoverAside = (hovered) => {
    return {
        type: ActionTypes.HOVER_ASIDE,
        payload: hovered
    };
};

export const onMinimizeAside = (minimized) => {
    return {
        type: ActionTypes.MINIMIZE_ASIDE,
        payload: minimized
    };
};

export const onToggleAside = (expanded) => {
    return {
        type: ActionTypes.TOGGLE_ASIDE,
        payload: expanded
    };
};

export const onToggleHeader = (expanded) => {
    return {
        type: ActionTypes.TOGGLE_HEADER,
        payload: expanded
    };
};

export const onSetBreadcrumb = (path) => {
    return {
        type: ActionTypes.BREADCRUMB_PATH,
        payload: path
    };
};
