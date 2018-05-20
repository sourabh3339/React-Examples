

export function addRowData(properties, results) {
    let {row,id,new_item} = properties;
    return {
      type: "ADD_ITEM",
      id,
      new_item
    }
  }

  export function removeRowData(properties, results) {
    let {row,id} = properties;
    return {
      type: "REMOVE_ITEM",
      row,
      id
    }
  }