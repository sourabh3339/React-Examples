

export default (state = {}, action ) => {
    let {row,id,new_item} = action;
    var obj = {};
    switch (action.type) {
        case "ADD_ITEM":
            obj = {
                new_item
            };
            return Object.assign({},state, obj);
        case "REMOVE_ITEM":
            return Object.assign({},state,{
                row:action.row,
                new_item:null
            });
    }
    return state;
}