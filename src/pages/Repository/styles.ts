import styled from 'styled-components';

export const Header = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;

  a {
    align-items: center;
    color: #a8a8b3;
    display: flex;
    font-size: 16px;
    font-weight: bold;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: #666;
    }

    svg {
      margin-right: 4px;
    }
  }
`;

export const RepositoryInfo = styled.section`
  margin-top 80px;

  header {
    align-items: center;
    display: flex;
    
    img {
      border-radius: 50%;
      height: 125px;
      width: 125px;
    }

    div {
      margin-left: 32px;
      
      strong {
        color: #3D3D4D;
        display: block;
        font-size: 32px;
        font-weight: bold;
        line-height: 36px;
        margin-bottom: 8px;
      }

      p {
        color: #737380;
        font-size: 20px;
        line-height: 24px;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;

    li {
      & + li {
        margin-left: 80px;
      }

      strong {
        color: #3D3D4D;
        display: block;
        font-size: 34px;
        font-weight: bold;
        line-height: 40px;
      }

      span {
        color: #6C6C80;
        font-size: 18px;
        line-height: 24px;
        margin-top 8px;
      }
    }
  }
`;

export const Issues = styled.section`
  margin-top: 80px;

  a {
    align-items: center;
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    padding: 28px 24px 28px;
    text-decoration: none;
    transition: transform 0.2s;

    &:hover {
      transform: translateX(10px);
    }

    & + a {
      margin-top: 16px;
    }

    div {
      flex: 1;

      strong {
        color: #3d3d4d;
        display: block;
        font-size: 22px;
        line-height: 26px;
        margin-bottom: 8px;
      }

      p {
        color: #a8a8b3;
        font-size: 18px;
        line-height: 22px;
      }
    }

    svg {
      color: #cbcbd6;
      margin-left: 16px;
    }
  }
`;
