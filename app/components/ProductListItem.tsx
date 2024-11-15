import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { memo } from 'react'
import Theme from '@app/styles'
import Colors from '@app/styles/colors'

const ProductListItem = memo(
  ({ item, onPress }: { item: ProductType, onPress?: (value: ProductType) => void }) => (
    <TouchableOpacity
      style={Theme.ProductList.userCard}
      onPress={onPress? () => onPress(item) : undefined}
    >
      <View style={Theme.ProductList.avatarContainer}>
        <Image
          src={item.image}
          style={Theme.ProductList.avatar}
        />
      </View>
      <View style={Theme.ProductListItem.container_info}>
        <View style={Theme.ProductListItem.container_name_product}>
          <Text style={Theme.ProductList.userName} numberOfLines={2}>
            {item.title}
          </Text>
        </View>
        <View style={Theme.ProductList.separator} />
        <View style={Theme.ProductListItem.container_price}>
          <Text style={Theme.ProductListItem.value_price}>
            {`$${item.price} USD`}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  ),
  (prevProps, nextProps) => {
    return prevProps.item.title === nextProps.item.title;
  },
);

export default ProductListItem