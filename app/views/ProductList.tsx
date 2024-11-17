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

const ProductList = ({ testID }: { testID: string }) => {
  const productsList = useSelector((state: RootState) => state.products.productsList);
  const productsListError = useSelector((state: RootState) => state.products?.productsListError);
  const [refreshing, setRefreshing] = useState(false);
  const navigation = useNavigation();
  const slideAnim = useRef(new Animated.Value(50)).current;

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    try {
      // await getApiUsersList();
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
          initialNumToRender={8}
          maxToRenderPerBatch={9}
          updateCellsBatchingPeriod={8}
          keyExtractor={({id}, _) => `${id}`}
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
        />
      </Animated.View>
    </SafeAreaView>
  );
};

export default ProductList;