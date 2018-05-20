

export default (state = {}, action ) => {
    let {row,id,new_item} = action;
    var obj = {};
    switch (action.type) {
        case "ADD_ITEM":
            obj = {
                new_item,id
            };
            return Object.assign({},state, obj);
        case "REMOVE_ITEM":
            obj = {
                row : [...row]
            };      
            obj.row.pop();
            return Object.assign({},obj);
    }
    return state;
}