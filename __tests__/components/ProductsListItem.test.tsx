import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import { priceParseToUSD } from '@app/hooks/products'
import ProductListItem from '@app/components/ProductListItem'

jest.mock('@app/hooks/products', () => ({
  priceParseToUSD: jest.fn((price) => `$${price} USD`)
}))

describe('ProductListItem', () => {
  const mockItem: ProductType = {
    id: 1,
    title: 'Test Product',
    category: 'Test Category',
    price: "99.99",
    image: 'https://example.com/image.jpg',
    description: 'Test description'
  }

  const mockOnPress = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders correctly with all props', () => {
    const { getByTestId, getByText } = render(
      <ProductListItem item={mockItem} onPress={mockOnPress} />
    )

    expect(getByTestId('item_container_press')).toBeTruthy()
    expect(getByTestId('item_image_container')).toBeTruthy()
    expect(getByTestId('item_image_product')).toBeTruthy()
    expect(getByTestId('item_container_info')).toBeTruthy()
    expect(getByTestId('item_container_text')).toBeTruthy()
    expect(getByTestId('item_text_title')).toBeTruthy()
    expect(getByTestId('item_text_category')).toBeTruthy()
    expect(getByTestId('item_text_price')).toBeTruthy()

    expect(getByText('Test Product')).toBeTruthy()
    expect(getByText('Test Category')).toBeTruthy()
    expect(getByText('$99.99 USD')).toBeTruthy()
  })

  it('handles onPress correctly', () => {
    const { getByTestId } = render(
      <ProductListItem item={mockItem} onPress={mockOnPress} />
    )
    const touchable = getByTestId('item_container_press')
    fireEvent.press(touchable)
    expect(mockOnPress).toHaveBeenCalledTimes(1)
    expect(mockOnPress).toHaveBeenCalledWith(mockItem)
  })

  it('does not crash when onPress is undefined', () => {
    const { getByTestId } = render(
      <ProductListItem item={mockItem} />
    )

    const touchable = getByTestId('item_container_press')
    fireEvent.press(touchable)

    expect(mockOnPress).not.toHaveBeenCalled()
  })

  it('correctly displays truncated title with numberOfLines', () => {
    const longTitleItem = {
      ...mockItem,
      title: 'Lorem Ipsum is simply dummyr'
    }
    const { getByTestId } = render(
      <ProductListItem item={longTitleItem} onPress={mockOnPress} />
    )
    const titleElement = getByTestId('item_text_title')
    expect(titleElement.props.numberOfLines).toBe(2)
  })

  it('correctly displays truncated category with numberOfLines', () => {
    const longCategoryItem = {
      ...mockItem,
      category: 'Lorem Ipsum Category'
    }
    const { getByTestId } = render(
      <ProductListItem item={longCategoryItem} onPress={mockOnPress} />
    )
    const categoryElement = getByTestId('item_text_category')
    expect(categoryElement.props.numberOfLines).toBe(1)
  })

  it('correctly formats price using priceParseToUSD', () => {
    render(<ProductListItem item={mockItem} onPress={mockOnPress} />)
    expect(priceParseToUSD).toHaveBeenCalledWith(mockItem.price)
  })

  it('verifies image source is set correctly', () => {
    const { getByTestId } = render(
      <ProductListItem item={mockItem} onPress={mockOnPress} />
    )
    const image = getByTestId('item_image_product')
    expect(image.props.src).toBe(mockItem.image)
  })

  it('applies correct style theme to components', () => {
    const { getByTestId } = render(
      <ProductListItem item={mockItem} onPress={mockOnPress} />
    )
    expect(getByTestId('item_container_press').props.style).toBeDefined()
    expect(getByTestId('item_image_container').props.style).toBeDefined()
    expect(getByTestId('item_image_product').props.style).toBeDefined()
    expect(getByTestId('item_container_info').props.style).toBeDefined()
    expect(getByTestId('item_container_text').props.style).toBeDefined()
    expect(getByTestId('item_text_price').props.style).toBeDefined()
  })

  it('does not re-render when item id remains the same', () => {
    const { rerender, getByTestId } = render(
      <ProductListItem item={mockItem} onPress={mockOnPress} />
    )
    const firstRender = getByTestId('item_container_press')
    const updatedItem = { ...mockItem, title: 'Lorem Ipsum is simply dummy' }
    rerender(<ProductListItem item={updatedItem} onPress={mockOnPress} />)
    const secondRender = getByTestId('item_container_press')
    expect(firstRender).toBe(secondRender)
  })

  it('does re-render when item id changes', () => {
    const { rerender, getByTestId } = render(
      <ProductListItem item={mockItem} onPress={mockOnPress} />
    )
    const firstTitle = getByTestId('item_text_title').props.children
    const newItem = { ...mockItem, id: 2, title: 'New Product' }
    rerender(<ProductListItem item={newItem} onPress={mockOnPress} />)
    const secondTitle = getByTestId('item_text_title').props.children
    expect(firstTitle).not.toBe(secondTitle)
  })
})