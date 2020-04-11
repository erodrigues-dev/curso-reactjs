import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  max-width: 700px;
  margin: 20px auto 0;
  padding: 0 20px;
`;

export const Item = styled.article`
  background: #fff;
  border: 1px solid #ddd;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.strong``;

export const Description = styled.p`
  font-size: 16px;
  color: #999;
  margin-top: 5px;
  line-height: 24px;
`;

export const Button = styled(Link)`
  height: 42px;
  border-radius: 5px;
  border: 2px solid #da552f;
  background: none;
  margin-top: 10px;
  color: #da552f;
  font-weight: bold;
  font-size: 16px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background 0.2s, color 0.2s;

  &:hover {
    background: #da552f;
    color: #fff;
  }
`;

export const Paginate = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const PaginateButton = styled.button`
  padding: 10px;
  border-radius: 5px;
  border: 0;
  background: #da552f;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }

  &[disabled] {
    opacity: 0.4;
  }
`;
