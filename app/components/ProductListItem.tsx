import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { memo } from 'react'
import Theme from '@app/styles'
import { priceParseToUSD } from '@app/hooks/products'

type ProductListItemProps = {
  item: ProductType,
  onPress?: (value: ProductType) => void
}

const ProductListItem = memo(
  ({ item, onPress }: ProductListItemProps) => (
    <TouchableOpacity
      style={Theme.ProductListItem.productCard}
      onPress={onPress ? () => onPress(item) : undefined}
    >
      <View style={Theme.ProductListItem.imgContainer}>
        <Image
          src={item.image}
          style={Theme.ProductListItem.imgItemProduct}
        />
      </View>
      <View style={Theme.ProductListItem.containerInfo}>
        <View style={Theme.ProductListItem.containerNameProduct}>
          <Text style={Theme.App.titleText} numberOfLines={2}>
            {item.title}
          </Text>
          <Text style={Theme.App.subtitleText} numberOfLines={1}>
            {item.category}
          </Text>
        </View>
        <View style={Theme.App.separator} />
        <View style={Theme.ProductListItem.containerPrice}>
          <Text style={Theme.ProductListItem.valuePrice}>
            {priceParseToUSD(item.price)}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  ),
  (prevProps, nextProps) => {
    return prevProps.item.id === nextProps.item.id;
  },
);

export default ProductListItem