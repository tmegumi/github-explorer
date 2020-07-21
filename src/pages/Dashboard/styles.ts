import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  color: #3a3a3a;
  font-size: 48px;
  line-height: 56px;
  margin-top: 80px;
  max-width: 450px;
`;

export const Form = styled.form`
  display: flex;
  margin-top: 40px;
  max-width: 700px;

  input {
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    font-size: 18px;
    flex: 1;
    height: 72px;
    padding: 0 29px;

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    background-color: #04d361;
    border: 0;
    border-radius: 0 5px 5px 0;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    height: 72px;
    width: 210px;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 120px;
  max-width: 700px;

  a {
    align-items: center;
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    padding: 16px 24px 16px;
    text-decoration: none;
    transition: transform 0.2s;
    width: 100%;

    &:hover {
      transform: translateX(10px);
    }

    & + a {
      margin-top: 16px;
    }

    img {
      border-radius: 50%;
      height: 80px;
      width: 80px;
    }

    div {
      flex: 1;
      margin-left: 24px;

      strong {
        color: #3d3d4d;
        display: block;
        font-size: 24px;
        line-height: 28px;
        margin-bottom: 4px;
      }

      p {
        color: #a8a8b3;
        font-size: 18px;
        line-height: 21px;
      }
    }

    svg {
      color: #cbcbd6;
      margin-left: 16px;
    }
  }
`;
