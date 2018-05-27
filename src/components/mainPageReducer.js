

export default (state = {}, action ) => {
    let {row,id,new_item} = action;
    var obj = {};
    switch (action.type) {
        case "UPDATE_GLOBAL":
        obj[id] = {
            id,
            row
        }
        return Object.assign({},state, obj);
    }
    return state;
}