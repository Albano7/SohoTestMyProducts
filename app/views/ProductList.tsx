import { ActivityIndicator, FlatList, RefreshControl, Text, View } from 'react-native';
import Colors from '@app/styles/colors';
import { useEffect, useState } from 'react';
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

  const onRefresh = async () => {
    setRefreshing(true);
    try {
      // await getApiUsersList();
    } finally {
      setRefreshing(false);
    }
  };

  const onPressItem = (value: ProductType) => {
    navigation.dispatch(
      StackActions.push(Routes.ProductDetail)
    );
      
  }

  return (
    <SafeAreaView style={Theme.ProductList.container}>
      <View style={Theme.ProductList.headerContainer}>
        <Text style={Theme.ProductList.headerTitle}>
          Listado de productos
        </Text>
      </View>
      <View style={Theme.ProductList.contentContainer}>
        <FlatList
          testID="products_list"
          style={Theme.ProductList.list}
          data={productsList}
          initialNumToRender={8}
          maxToRenderPerBatch={8}
          updateCellsBatchingPeriod={8}
          keyExtractor={({id}, _) => `${id}`}
          renderItem={({ item }) => 
            <ProductListItem item={item} onPress={onPressItem} />
          }
          ItemSeparatorComponent={() => 
            <View style={Theme.ProductList.listSeparator} />
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
      </View>
    </SafeAreaView>
  );
};

export default ProductList;
