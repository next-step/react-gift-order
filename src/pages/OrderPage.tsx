/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const OrderPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product } = location.state || {};

  useEffect(() => {
    if (!product) {
      navigate("/notfound", { replace: true });
    }
  }, [product, navigate]);

  if (!product) return null;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 유효성검증 로직과 주문 제출 로직 구현해야함
    alert("주문이 완료되었습니다!");
    navigate("/");
  };

  return <div>{/*주문 폼 구현해야함*/}주문폼</div>;
};

export default OrderPage;
