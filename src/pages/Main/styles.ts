import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  background-color: bisque;
`;

export const ButtonsWrapper = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const Button = styled.button`
  width: 10%;
  padding: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.span`
  color: black;
  size: 16px;
  font-weight: 500;
`;

export const Loading = styled.h1`
  font-size: 36px;
  color: black;
`;
