import React from "react"
import { useFormContext } from "react-hook-form"
import type { FormData } from "@/pages/OrderPage"
import Text from "../Text"
import Layout from "../Layout"
import Blank from "../Blank"

const ReceiverList: React.FC = () => {
  const { watch, setValue } = useFormContext<FormData>()
  const receivers = watch("receivers") || []

  const removeReceiver = (index: number) => {
    const updatedReceivers = receivers.filter((_, i) => i !== index)
    setValue("receivers", updatedReceivers)
  }

  if (receivers.length === 0) {
    return null
  }

  return (
    <Layout direction="column" gap="theme.space.spacing4">
      <Text size="lg" weight="bold">
        받는 사람 목록
      </Text>
      
      {receivers.map((receiver, index) => (
        <div
          key={index}
          style={{
            padding: "16px",
            border: "1px solid #e0e0e0",
            borderRadius: "8px",
            backgroundColor: "#f9f9f9",
            position: "relative"
          }}
        >
          <Layout direction="row" justify="space-between" align="flex-start">
            <Layout direction="column" gap={8}>
              <Layout direction="row" gap={16}>
                <Text size="sm" color="#666">
                  받는 사람 {index + 1}
                </Text>
                <button
                  type="button"
                  onClick={() => removeReceiver(index)}
                  style={{
                    background: "none",
                    border: "none",
                    color: "#999",
                    cursor: "pointer",
                    fontSize: "16px",
                    padding: "0",
                    lineHeight: "1"
                  }}
                >
                  ×
                </button>
              </Layout>
              
              <Layout direction="column" gap={4}>
                <Layout direction="row" gap={8} align="center">
                  <Text size="sm" color="#666" style={{ minWidth: "60px" }}>
                    이름:
                  </Text>
                  <Text size="sm" weight="medium">
                    {receiver.name}
                  </Text>
                </Layout>
                
                <Layout direction="row" gap={8} align="center">
                  <Text size="sm" color="#666" style={{ minWidth: "60px" }}>
                    전화번호:
                  </Text>
                  <Text size="sm" weight="medium">
                    {receiver.phone}
                  </Text>
                </Layout>
                
                <Layout direction="row" gap={8} align="center">
                  <Text size="sm" color="#666" style={{ minWidth: "60px" }}>
                    수량:
                  </Text>
                  <Text size="sm" weight="medium">
                    {receiver.quantity}개
                  </Text>
                </Layout>
              </Layout>
            </Layout>
          </Layout>
        </div>
      ))}
      
      <Blank height={16} />
    </Layout>
  )
}

export default ReceiverList