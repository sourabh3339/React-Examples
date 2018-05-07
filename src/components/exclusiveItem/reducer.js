

export default (state = {}, action ) => {
    let {row} = action;
    switch (action.type) {
        case "ADD_ITEM":
            var obj = {};
            obj["row"] = {row};
            console.log('here');
            return Object.assign(state, obj);
    }
    return state;
}