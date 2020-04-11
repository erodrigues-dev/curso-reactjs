import React from "react";
import { useParams, useHistory } from "react-router";

import { Container, BackButton, Item, Title, Description } from "./styles";
import { useState } from "react";
import { useEffect } from "react";

import api from "../../services/api";

import { MdArrowBack } from "react-icons/md";

export default function Product(props) {
  const { id } = useParams();
  const history = useHistory();
  const [product, setProduct] = useState({});

  useEffect(() => {
    async function loadProduct() {
      const response = await api.get(`/products/${id}`);
      setProduct(response.data);
    }

    loadProduct();
  });

  function handleBackButton() {
    history.goBack();
  }

  return (
    <Container>
      <Item>
        <Title>{product?.title}</Title>
        <Description>{product?.description}</Description>
      </Item>
      <BackButton onClick={handleBackButton}>
        <MdArrowBack />
        Voltar
      </BackButton>
    </Container>
  );
}
