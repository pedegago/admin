import ActionTypes from "../actions/ActionTypes";

export const uiReducers = (
    state = {
        hoverAside: false,
        minimizeAside: false,
        toggleAside: false,
        toggleHeader: false,
        breadcrumbPath: []
    },
    action
) => {
    switch (action.type) {
        case ActionTypes.HOVER_ASIDE: {
            return {
                ...state,
                hoverAside: action.payload
            };
        }
        case ActionTypes.MINIMIZE_ASIDE: {
            return {
                ...state,
                minimizeAside: action.payload
            };
        }
        case ActionTypes.TOGGLE_ASIDE: {
            return {
                ...state,
                toggleAside: action.payload
            };
        }
        case ActionTypes.TOGGLE_HEADER: {
            return {
                ...state,
                toggleHeader: action.payload
            };
        }
        case ActionTypes.BREADCRUMB_PATH: {
            return {
                ...state,
                breadcrumbPath: action.payload
            };
        }
        default: {
            return state;
        }
    }
};
