import styled from '@emotion/styled'
import { Navbar } from '@/components/Navbar/Navbar'
import { Layout } from '@/components/Layout/Layout'
import { useParams } from 'react-router-dom'
import { productMock } from '@/components/Product/productMock'
import { useMemo } from 'react'
import { OrderForm } from '@/components/OrderPage/OrderForm'

export function OrderPage() {
  const { id } = useParams<{ id: string }>()
  const product = useMemo(
    () => productMock.find((p) => p.id === Number(id)),
    [id]
  )

  if (!product) return <div>상품을 찾을 수 없습니다.</div>

  return (
    <>
      <Layout>
        <Navbar />
        <Container>
          <OrderForm product={product} />
        </Container>
      </Layout>
    </>
  )
}

const Container = styled.div`
  width: 100%;
`
