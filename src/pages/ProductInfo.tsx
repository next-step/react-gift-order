import React from "react"
import styled from "@emotion/styled"
import Text from "@/components/Text"
import Layout from "@/components/Layout"
import RowForm from "@/components/RowForm"
import ProductImage from "@/components/ProductImage"
import theme from "@/styles/theme"

interface ProductInfoBarProps {
  image: string
  name: string
  brand: string
  price: number
}
const ProductInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`
const ProductInfoBar: React.FC<ProductInfoBarProps> = ({
  image,
  name,
  brand,
  price,
}) => {
  return (
    <Layout
      marginTop="spacing4"
      paddingUp="spacing4"
      paddingLeft="spacing4"
      paddingRight="spacing4"
      color="gray00"
      height="auto"
    >
      <Text variant="title2Bold" margin="spacing0" padding="spacing0">
        상품 정보
      </Text>
      <RowForm
        style={{
          border: `1px solid ${theme.colors.gray700}`,
          borderRadius: theme.space.spacing2,
        }}
      >
        <ProductImage
          borderBottomLeftRadius="spacing2"
          borderBottomRightRadius="spacing2"
          borderTopLeftRadius="spacing2"
          borderTopRightRadius="spacing2"
          src={image}
          alt={name}
          style={{ width: 60, height: 60, marginRight: 16 }}
        />
        <div style={{ flex: 1 }}>
          <Text variant="body2Regular" margin="spacing0" padding="spacing0">
            {name}
          </Text>
          <Text
            variant="label2Regular"
            margin="spacing0"
            padding="spacing0"
            color="gray700"
          >
            {brand}
          </Text>
          <ProductInfo>
            <Text
              variant="subtitle2Regular"
              margin="spacing0"
              padding="spacing0"
              color="gray700"
            >
              상품가
            </Text>

            <Text
              variant="subtitle1Bold"
              margin="spacing0"
              padding="spacing0"
              color="gray900"
            >
              {price.toLocaleString()}원
            </Text>
          </ProductInfo>
        </div>
      </RowForm>
    </Layout>
  )
}

export default ProductInfoBar
