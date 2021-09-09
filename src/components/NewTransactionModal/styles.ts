import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  margin: 1rem;

  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    background: #e7e9ee;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    margin-top: 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    border: 0;
    background: var(--green);
    color: #fff;
    font-size: 1rem;
    font-weight: 600;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  display: flex;
  margin: 1rem 0;
`;

interface ITransactionTypeButtonProps {
  isActive: boolean;
  activeColor: "green" | "red";
}

const transactionTypeButtonColors = {
  green: "#d7f5ea",
  red: "#fce3e7",
};

export const TransactionTypeButton = styled.button<ITransactionTypeButtonProps>`
  flex: 1;
  height: 4rem;
  border: 1px solid #d7d7d7;
  background: ${(props) =>
    props.isActive
      ? transactionTypeButtonColors[props.activeColor]
      : "transparent"};

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.25rem;
  transition: border-color 0.2s;

  & ~ button {
    margin-left: 0.5rem;
  }

  &:hover {
    border: 1px solid #bbb;
  }

  img {
    width: 20px;
    height: 20px;
  }

  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--text-title);
  }
`;
