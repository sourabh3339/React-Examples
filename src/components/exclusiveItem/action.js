

export function addRowData(properties, results) {
    let {row} = properties;
    return {
      type: "ADD_ITEM",
      row
    }
  }