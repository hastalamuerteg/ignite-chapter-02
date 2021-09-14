import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-top: -10rem;
  }

  div {
    margin-top: -10rem;
    background: var(--shape);
    padding: 1.5rem 2rem;
    flex: 1;
    border-radius: 0.25rem;
    color: var(--text-title);

    & ~ div {
      margin-left: 0.7rem;
    }

    &:last-child {
      background: var(--green);
      color: #fff;
    }

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: normal;
      line-height: 3rem;
      font-weight: 500;
    }
    @media screen and (max-width: 768px) {
      margin: 0.5rem;
    }
  }
`;
