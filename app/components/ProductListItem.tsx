import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Theme from '@app/styles'

const ProductListItem = ({ item }: { item: UserProps }) => {
    return (
      <TouchableOpacity style={Theme.ProductList.userCard}>
        <View style={Theme.ProductList.avatarContainer}>
          <Image
            src={item.avatar}
            style={Theme.ProductList.avatar}
          />
        </View>
        <View>
          <Text style={Theme.ProductList.userName}>
            {`${item.first_name} ${item.last_name}`}
          </Text>
          <View style={Theme.ProductList.separator} />
          <Text>
            {item.email}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }

export default ProductListItem