import { getProductsApi } from "@app/api/products";
import { setProductsList, setProductsListError } from "@app/features/products/productsSlice";
import { store } from "@app/store";

/// Obtención de productos via API
export const getProducts = async () => {
  __DEV__ && console.log("getProducts start")
  const dispatch = store.dispatch
  const {products, error} = await getProductsApi()
  if (products) {
    dispatch(setProductsList({ productsList: products }))
  }else if(error){
    dispatch(setProductsListError({ productsError: error }))
  }
}
