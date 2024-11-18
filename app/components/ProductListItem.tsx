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
      testID='item_container_press'
      style={Theme.ProductListItem.productCard}
      onPress={onPress ? () => onPress(item) : undefined}
    >
      <View
        testID='item_image_container'
        style={Theme.ProductListItem.imgContainer}
      >
        <Image
          testID='item_image_product'
          src={item.image}
          style={Theme.ProductListItem.imgItemProduct}
        />
      </View>
      <View
        testID='item_container_info'
        style={Theme.ProductListItem.containerInfo}
      >
        <View
          testID='item_container_text'
          style={Theme.ProductListItem.containerNameProduct}
        >
          <Text
            testID='item_text_title'
            style={Theme.App.titleText}
            numberOfLines={2}
          >
            {item.title}
          </Text>
          <Text
            testID='item_text_category'
            style={Theme.App.subtitleText}
            numberOfLines={1}
          >
            {item.category}
          </Text>
        </View>
        <View style={Theme.App.separator} />
        <View style={Theme.ProductListItem.containerPrice}>
          <Text 
            style={Theme.ProductListItem.valuePrice}
            testID='item_text_price' 
          >
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