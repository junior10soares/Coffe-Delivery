import styled from 'styled-components'

export const ListCoffeContainer = styled.main`
  margin-top: 108px;

  strong {
    padding-left: 160px;
    padding-top: 32px;
    font-size: 32px;
    color: ${(props) => props.theme['gray-800']};
    font-family: 'Baloo 2';
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 32px;
    padding-left: 160px;
    margin-top: 20px;
    list-style: none;
  }
  li {
    display: flex;
    text-align: center;
    margin-top: 24px;
    width: 256px;
    height: 310px;
    background: ${(props) => props.theme['gray-200']};
    border-radius: 6px 36px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  img {
    margin-top: -20px;
  }
  header{
    display: flex;
    gap: 4px;
  }
  div {
    display: flex;
    gap: 4px;
  }
  h3 {
    display: flex;
    border-radius: 100px;
    font-size: 10px;
    color: ${(props) => props.theme['yellow-700']};
    background: ${(props) => props.theme['yellow-100']};
    height: 21px;
    padding: 4px 8px;
    margin-top: 12px;
    align-items: center;
    justify-content: center;
  }
  h1 {
    margin-top: 16px;
    font-family: 'Baloo 2';
    font-size: 20px;
    color: ${(props) => props.theme['gray-800']};
  }
  h2 {
    margin-top: 8px;
    font-size: 14px;
    max-width: 216px;
    color: ${(props) => props.theme['gray-600']};
  }
  footer {
    margin-top: 33px;
    padding-bottom: 20px;
    display: flex;
    height: 38px;
    justify-content: center;
    align-items: center;
    max-width: 208px;
    gap: 8px;
    span {
      font-weight: bold;
      font-family: 'Baloo 2';
      font-size: 24px;
      color: ${(props) => props.theme['gray-700']};
      margin-right: 15px;
    }
    button[name='cart'] {
      display: flex;
      justify-content: center;
      align-items: center;
      background: #4b2995;
      cursor: pointer;
      color: white;
      border: none;
      width: 38px;
      height: 33px;
      border-radius: 6px;
    }
    button[name='cart']:hover {
      background: #8047f8;
    }
    button[name='cart']:disabled {
      cursor: not-allowed;

    }
  }
`
export const ButtonInputContainer = styled.div`
  font-size: 16px;
  width: 72px;
  height: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #e6e5e5;
  border-radius: 6px;
  border: none;
  button {
    background: transparent;
    border: none;
    font-size: 18px;
    text-align: center;
    width: 20px;
    cursor: pointer;
    color: #8047f8;
  }
  button:hover {
    background: #d7d5d5;
  }
  input{
    height: 20px;
    background: transparent;
    border: none;
    width: 20px;
    text-align: center;
  }
`
