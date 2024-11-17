import { View, Image, ScrollView } from 'react-native'
import React from 'react'
import { StaticScreenProps } from '@react-navigation/native';
import { Text } from '@react-native-material/core';
import { priceParseToUSD } from '@app/hooks/products';
import Theme from '@app/styles';

type ProductDetailRouteProps = StaticScreenProps<{
  productSelected: ProductType;
}>;

const ProductDetail = ({ route }: ProductDetailRouteProps) => {
  const productSelected = route?.params?.productSelected

  if (!productSelected) {
    return (
      <View
        style={Theme.ProductDetail.errorContainer}
        testID='error_container'
      >
        <View
          style={Theme.ProductDetail.errorContentContainer}
          testID='error_content_container'
        >
          <Text
            style={Theme.App.errorDontFound}
            testID='error_text'
          >
            Producto sin detalle
          </Text>
        </View>
      </View>
    )
  }

  return (
    <View
      style={Theme.ProductDetail.container}
      testID='product_detail_container'
    >
      <View
        style={Theme.ProductDetail.imageContainer}
        testID='image_container'
      >
        <View
          style={Theme.ProductDetail.imageWrapper}
          testID='image_wrapper'
        >
          <Image
            style={Theme.ProductDetail.productImage}
            src={productSelected.image}
            testID='product_image'
          />
        </View>
      </View>
      <View
        style={Theme.ProductDetail.detailsContainer}
        testID='container_detail_product'
      >
        <Text
          style={Theme.ProductDetail.priceText}
          testID='price_text'
        >
          {priceParseToUSD(productSelected.price)}
        </Text>
        <View
          style={Theme.App.separator}
          testID='separator_top'
        />
        <Text
          style={Theme.App.subtitleText}
          testID='category_text'
        >
          {productSelected.category}
        </Text>
        <Text
          style={Theme.App.titleText}
          testID='title_text'
        >
          {productSelected.title}
        </Text>
        <View
          style={Theme.App.separator}
          testID='separator_bottom'
        />
        <ScrollView testID='description_scroll'>
          <Text
            style={Theme.App.subtitleText}
            testID='description_text'
          >
            {productSelected.description}
          </Text>
        </ScrollView>
      </View>
    </View>
  )
}

export default ProductDetail