

export default (state = {}, action ) => {
    let {row,id,new_item} = action;
    var obj = {};
    switch (action.type) {
        case "ADD_ITEM":
        obj[id] = {
            id,
            new_item
        }
        return Object.assign({},state, obj);
        case "REMOVE_ITEM":
            obj[id] = {
                id,
                row,
                new_item:null
            }
            return Object.assign({},state,obj);
    }
    return state;
}