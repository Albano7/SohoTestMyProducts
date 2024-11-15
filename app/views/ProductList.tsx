import { ActivityIndicator, FlatList, RefreshControl, Text, View } from 'react-native';
import Colors from '@app/styles/colors';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@app/store';
import Theme from '@app/styles';
import ProductListItem from '@app/components/ProductListItem';

const ProductList = ({ testID }: { testID: string }) => {
  const usersList = useSelector((state: RootState) => state.users.usersList);
  const usersListError = useSelector((state: RootState) => state.users.isError);

  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    getApiUsersList().then();
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    try {
      await getApiUsersList();
    } finally {
      setRefreshing(false);
    }
  };

  return (
    <View style={Theme.ProductList.container} testID={testID}>
      <View style={Theme.ProductList.headerContainer}>
        <Text style={Theme.ProductList.headerTitle}>
          Listado de usuarios
        </Text>
      </View>
      <View style={Theme.ProductList.contentContainer}>
        <FlatList
          testID="flat-list"
          style={Theme.ProductList.list}
          data={usersList}
          renderItem={({ item }) => 
            <ProductListItem item={item} />
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
            usersListError ?
              <Text style={Theme.ProductList.errorText}>
                Ups! hay un error, vuelva a intentarlo
              </Text>
              :
              <ActivityIndicator size="large" color={Colors.bg} />}
        />
      </View>
    </View>
  );
};

export default ProductList;
