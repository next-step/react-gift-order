import { Navbar } from '@/components/Navbar/Navbar'
import { CategorySection } from '@/components/Category/CategorySection'
import { ProductListSection } from '@/components/Product/ProductListSection'
import { Layout } from '@/components/Layout/Layout'

export function Home() {
  return (
    <Layout>
      <Navbar />
      <CategorySection />
      <ProductListSection />
    </Layout>
  )
}
