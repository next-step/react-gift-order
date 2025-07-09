import React from 'react'
import { useNavigate } from 'react-router-dom'
import { templates } from '@/resources/mock/templates'
import { ProductRankingList } from '@/pages/Home/components/ProductRankingListSection/ProductRankingList'

export default function Home() {
  const nav = useNavigate()

  return (
    <main className="p-4">
      {/* 1) 템플릿 그리드 */}
      <section>
        <ul className="grid grid-cols-4 gap-4">
          {templates.map((t) => (
            <li
              key={t.id}
              className="cursor-pointer"
              onClick={() => nav(`/order/${t.id}`)}
            >
              <img src={t.thumbUrl} alt={String(t.id)} />
            </li>
          ))}
        </ul>
      </section>

      {/* 2) 인기 상품 리스트 */}
      <section className="mt-8">
        <h2 className="text-xl font-bold mb-4">오늘의 인기 상품</h2>
        <ProductRankingList />
      </section>
    </main>
  )
}
