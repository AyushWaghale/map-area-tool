import { useReducer } from "react";

/**
 * Shape object structure
 * {
 *   id: string
 *   type: "polygon" | "rectangle" | "circle"
 *   layer: LeafletLayer
 * }
 */

const initialState = {
    shapes: [],
};

function shapeReducer(state, action) {
    switch (action.type) {
        case "ADD_SHAPE":
            return {
                ...state,
                shapes: [...state.shapes, action.payload],
            };

        case "REMOVE_SHAPE":
            return {
                ...state,
                shapes: state.shapes.filter(
                    (shape) => shape.id !== action.payload
                ),
            };

        case "CLEAR_SHAPES":
            return {
                ...state,
                shapes: [],
            };

        case "UNDO_LAST":
            return {
                ...state,
                shapes: state.shapes.slice(0, -1),
            };


        default:
            return state;
    }
}

export const useShapes = () => {
    const [state, dispatch] = useReducer(shapeReducer, initialState);

    const addShape = (shape) => {
        dispatch({ type: "ADD_SHAPE", payload: shape });
    };

    const removeShape = (id) => {
        dispatch({ type: "REMOVE_SHAPE", payload: id });
    };

    const clearShapes = () => {
        dispatch({ type: "CLEAR_SHAPES" });
    };

    const undoLastShape = () => {
        dispatch({ type: "UNDO_LAST" });
    };


    return {
        shapes: state.shapes,
        addShape,
        removeShape,
        clearShapes,
        undoLastShape,
    };
};
