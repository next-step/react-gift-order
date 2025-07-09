import { useState, useMemo, useCallback } from "react"
import mock_present from "@/mock_present"
import Grid from "@/components/Grid"
import Card from "@/components/Card"
import Text from "@/components/Text"
import IndexBadge from "@/components/IndexBadge"
import ProductImage from "./ProductImage"
import MoreButton from "./MoreButton"
import theme from "@/styles/theme"
import { useAuth } from "@/context/AuthContext"
import { useNavigate } from "react-router-dom"
import { ROUTES } from "@/constants/routes"
import getRoute from "@/functions/getRoute"

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
  const navigate = useNavigate()
  const { isLoggedIn } = useAuth()

  const handleGoOrder = useCallback(
    (id: number) => {
      if (!isLoggedIn) {
        navigate(ROUTES.LOGIN)
      } else {
        navigate(getRoute(ROUTES.ORDER, { id: id }))
      }
    },
    [isLoggedIn, navigate]
  )
  return (
    <>
      <Grid gap="spacing2">
        {visibleProducts.map((item, idx) => (
          <Card
            key={item.id}
            borderRadius="spacing02"
            onClick={() => handleGoOrder(item.id)}
          >
            <IndexBadge backGroundColor={idx < 3 ? "critical" : "gray400"}>
              {idx + 1}
            </IndexBadge>
            <ProductImage
              src={item.imageURL}
              alt={item.name}
              borderTopLeftRadius="spacing3"
              borderTopRightRadius="spacing3"
            />
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
        borderRadius="spacing2"
        background="gray00"
        onClick={() => setShowAll((prev) => !prev)}
      >
        {showAll ? "접기" : "더보기"}
      </MoreButton>
    </>
  )
}

export default ProductGrid
