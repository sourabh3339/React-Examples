

export function addRowData(properties, results) {
    let {row,id,new_item} = properties;
    return {
      type: "ADD_ITEM",
      new_item,
      id
    }
  }

  export function removeRowData(properties, results) {
    let {row,id} = properties;

    return {
      type: "REMOVE_ITEM",
      id,
      row: [...row.slice(0,row.length-1)]
    }
  }

  export function updateGlobalData(properties, results) {
    let {row,id} = properties;

    return {
      type: "UPDATE_GLOBAL",
      id,
      row: [...row.slice(0,row.length)]
    }
  }