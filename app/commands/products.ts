import { getProductsApi } from "@app/api/products";
import { NUMBER_RENDER_PRODUCTS } from "@app/constants/products";
import { setProductsList, setProductsListError } from "@app/features/products/productsSlice";
import { chunk } from "@app/hooks/global";
import { store } from "@app/store";

/// Obtención de productos via API
export const getProducts = async () => {
  __DEV__ && console.log("getProducts start")
  const dispatch = store.dispatch
  const {products, error} = await getProductsApi()
  if (products) {
    const chunkProductsList = chunk<ProductType>(products, NUMBER_RENDER_PRODUCTS)
    dispatch(setProductsList({ productsList: chunkProductsList, productsListLength: products.length }))
  }else if(error){
    dispatch(setProductsListError({ productsError: error }))
  }
}
