import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;

  div {
    display: none;

    @media screen and (max-width: 768px) {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    h2 {
      color: var(--text-title);
      font-weight: 500;
    }
  }

  @media screen and (max-width: 768px) {
    thead {
      display: none;
    }
    tbody tr {
      display: flex;
      flex-direction: column;
      margin: 0.7rem 0;
      position: relative;
    }

    tbody tr td:nth-child(1) {
      font-weight: 500;
    }
    tbody tr td:nth-child(n + 3):nth-child(-n + 4) {
      display: inline-block;
    }
    tbody tr td:nth-child(4) {
      position: absolute;
      bottom: 0;
      right: 1rem;
    }
  }

  table {
    width: 100%;
    border-spacing: 0 0.5rem;
  }

  th {
    color: var(--text-body);
    font-weight: 400;
    padding: 1rem 2rem;
    text-align: left;
    line-height: 1.5rem;
  }

  td {
    padding: 1rem 2rem;
    border: 0;
    background: var(--shape);
    border-radius: 0.35rem;
    color: var(--text-body);

    &:first-child {
      color: var(--text-title);
    }

    &.deposit {
      color: var(--green);

      @media screen and (max-width: 768px) {
        font-size: 2rem;
        font-weight: 500;
      }
    }
    &.withdrawal {
      color: var(--red);

      @media screen and (max-width: 768px) {
        font-size: 2rem;
        font-weight: 500;
      }
    }
  }
`;
