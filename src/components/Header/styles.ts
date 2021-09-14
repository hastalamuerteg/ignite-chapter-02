import styled from "styled-components";

export const Container = styled.header`
  background: var(--blue);
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1rem 10rem;
  max-width: 80%;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }

  button {
    font-size: 1rem;
    background: var(--blue-light);
    padding: 0.8rem 2rem;
    border: 0;
    color: #fff;
    border-radius: 0.2rem;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }

    @media screen and (max-width: 768px) {
      margin-top: 2rem;
      width: 100%;
    }
  }
`;
