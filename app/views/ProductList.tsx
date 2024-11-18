import { ActivityIndicator, FlatList, RefreshControl, Text, View, Animated } from 'react-native';
import Colors from '@app/styles/colors';
import { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@app/store';
import Theme from '@app/styles';
import ProductListItem from '@app/components/ProductListItem';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StackActions, useNavigation } from '@react-navigation/native';
import Routes from '@app/constants/routes';
import { getProducts } from '@app/commands/products';
import { NUMBER_RENDER_PRODUCTS } from '@app/constants/products';

let pageNumberProductsList = 0

const ProductList = () => {
  const allProductsList = useSelector((state: RootState) => state.products.productsList);
  const productsListLength = useSelector((state: RootState) => state.products.productsListLength);
  const productsListError = useSelector((state: RootState) => state.products?.productsListError);
  const [refreshing, setRefreshing] = useState(false);
  const navigation = useNavigation();
  const slideAnim = useRef(new Animated.Value(50)).current;
  const [productsList, setProductsList] = useState<ProductType[]>([])
  const isNotCompletedAllProducts = productsListLength && productsList.length < productsListLength

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  useEffect(() => {
    if (allProductsList && !refreshing) {
      __DEV__ && console.log("Configure products list start")
      setProductsList(allProductsList[pageNumberProductsList])
    }
  }, [allProductsList]);

  const onRefresh = async () => {
    setRefreshing(true);
    try {
      await getProducts();
    } finally {
      setRefreshing(false);
    }
  };

  const onPressItem = (productSelected: ProductType) => {
    navigation.dispatch(
      StackActions.push(Routes.ProductDetail, {
        productSelected
      })
    );
  }

  const handleLoadMore = () => {
    if(allProductsList && isNotCompletedAllProducts){
      pageNumberProductsList = pageNumberProductsList+1
      __DEV__ && console.log("Load more products", pageNumberProductsList)
      const newProductsList = productsList.concat(allProductsList[pageNumberProductsList])
      setProductsList(newProductsList)
    }
  }

  return (
    <SafeAreaView style={Theme.ProductList.container}>
      <View style={Theme.ProductList.headerContainer}>
        <Text style={Theme.ProductList.headerTitle}>
          Listado de productos
        </Text>
      </View>
      <Animated.View
        style={[
          Theme.ProductList.contentContainer,
          {
            transform: [{
              translateY: slideAnim
            }]
          }
        ]}
        testID='container_products_list'
      >
        <FlatList
          testID="products_list"
          style={Theme.ProductList.list}
          data={productsList}
          initialNumToRender={NUMBER_RENDER_PRODUCTS}
          maxToRenderPerBatch={NUMBER_RENDER_PRODUCTS}
          updateCellsBatchingPeriod={NUMBER_RENDER_PRODUCTS}
          keyExtractor={({ id }) => `${id}`}
          renderItem={({ item }) =>
            <ProductListItem item={item} onPress={onPressItem} />
          }
          ItemSeparatorComponent={() =>
            <View style={Theme.App.separator} />
          }
          refreshControl={
            <RefreshControl
              testID="refresh-control"
              refreshing={refreshing}
              onRefresh={onRefresh}
              colors={[Colors.bg]}
              tintColor={Colors.bg}
            />
          }
          ListEmptyComponent={() =>
            productsListError ?
              <Text style={Theme.ProductList.errorText}>
                Ups! hay un error, vuelva a intentarlo
              </Text>
              :
              <ActivityIndicator size="large" color={Colors.bg} />
          }
          ListFooterComponent={
            isNotCompletedAllProducts ?
              <ActivityIndicator size="large" color={Colors.bg} />
            :
              null
          }
          onEndReached={handleLoadMore}
        />
      </Animated.View>
    </SafeAreaView>
  );
};

export default ProductList;