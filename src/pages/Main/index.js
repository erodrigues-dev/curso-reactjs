import React from "react";
import api from "../../services/api";
import { useEffect } from "react";
import { useState } from "react";

import {
  Container,
  Item,
  Title,
  Description,
  Button,
  Paginate,
  PaginateButton,
} from "./styles";
import { useCallback } from "react";

export default function Main() {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(0);

  const loadProducts = useCallback(async (page) => {
    const response = await api.get("/products", {
      params: { page, limit: 5 },
    });
    const { docs, pages } = response.data;
    setPages(pages);
    setList(docs);
  }, []);

  useEffect(() => {
    loadProducts(page);
  }, [page, loadProducts]);

  function handlePaginate(increment) {
    const newPage = page + increment;
    if (newPage < 1 || newPage > pages) return;
    setPage(newPage);
  }

  return (
    <Container>
      {list.map((item) => (
        <Item key={item._id}>
          <Title>{item.title}</Title>
          <Description>{item.description}</Description>
          <Button to={`/products/${item._id}`}>Acessar</Button>
        </Item>
      ))}
      <Paginate>
        <PaginateButton
          onClick={() => handlePaginate(-1)}
          disabled={page - 1 < 1}
        >
          Anterior
        </PaginateButton>
        <PaginateButton
          onClick={() => handlePaginate(1)}
          disabled={page + 1 > pages}
        >
          Próxima
        </PaginateButton>
      </Paginate>
    </Container>
  );
}
