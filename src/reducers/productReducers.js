import {
  FETCH_PRODUCTS,
  FILTER_PRODUCTS_BY_SIZE,
  ORDER_PRODUCTS_BY_PRICE,
  FILTER_PRODUCTS_BY_FREESHIPPING,
} from "../actions/types";

const initState = { items: [], filteredItems: [], size: "", sort: "",freeshipping:"" };
export default function (state = initState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { ...state, items: action.payload, filteredItems: action.payload };
    case FILTER_PRODUCTS_BY_SIZE:
      return {
        ...state,
        filteredItems: action.payload.items,
        size: action.payload.size,
      };
    case ORDER_PRODUCTS_BY_PRICE:
      return {
        ...state,
        filteredItems: action.payload.items,
        sort: action.payload.sort,
      };
    case FILTER_PRODUCTS_BY_FREESHIPPING:
      return {
        ...state,
        filteredItems: action.payload.items,
        freeshipping: action.payload.freeshipping,
      }
    default:
      return state;
  }
}
