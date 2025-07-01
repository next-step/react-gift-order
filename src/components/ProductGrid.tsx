import { useState, useMemo } from "react"
import mock_present from "@/mock_present"
import Grid from "@/components/Grid"
import Card from "@/components/Card"
import Text from "@/components/Text"
import IndexBadge from "@/components/IndexBadge"
import ProductImage from "./ProductImage"
import MoreButton from "./MoreButton"
import theme from "@/styles/theme"

const VISIBLE_COUNT = 6

const generateMockProducts = () => {
  return Array.from({ length: 21 }, (_, i) => ({
    ...mock_present[0],
    id: i + 1,
  }))
}

const ProductGrid = () => {
  const [showAll, setShowAll] = useState(false)

  const products = useMemo(() => generateMockProducts(), [])

  const visibleCount = showAll ? products.length : VISIBLE_COUNT
  const visibleProducts = products.slice(0, visibleCount)

  return (
    <>
      <Grid gap="spacing2">
        {visibleProducts.map((item, idx) => (
          <Card key={item.id} borderRadius="spacing02">
            <IndexBadge backGroundColor={idx < 3 ? "critical" : "gray400"}>
              {idx + 1}
            </IndexBadge>
            <ProductImage src={item.imageURL} alt={item.name} />
            <div style={{ padding: `${theme.space.spacing3}` }}>
              <Text
                variant="subtitle2Regular"
                margin="spacing0"
                padding="spacing0"
                color="textSub"
              >
                {item.brandInfo.name}
              </Text>
              <Text
                variant="subtitle2Regular"
                margin="spacing0"
                padding="spacing0"
              >
                {item.brandInfo.name}
              </Text>
              <Text variant="title2Bold" margin="spacing0" padding="spacing0">
                {item.price.sellingPrice.toLocaleString()} 원
              </Text>
            </div>
          </Card>
        ))}
      </Grid>
      <MoreButton
        background="gray00"
        onClick={() => setShowAll((prev) => !prev)}
      >
        {showAll ? "접기" : "더보기"}
      </MoreButton>
    </>
  )
}

export default ProductGrid
