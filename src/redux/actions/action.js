export const ADD = (item) => {
  return {
    type: "ADD_CART",
    payload:item
  }
}

// remove items
export const DLT = (id) => {
  return {
      type: "RMV_CART",
      payload: id
  }
}
// remove wishlist
export const DISLIKE = (id) => {
  return {
      type: "RMV_WISHLIST",
      payload: id
  }
}
// like items
export const LIKE = (id) => {
  return {
      type: "ADD_WISHLIST",
      payload: id
  }
}

// remove individual iteam

export const REMOVE = (item) => {
  return {
      type: "RMV_ONE",
      payload: item
  }
}
