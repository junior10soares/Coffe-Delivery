import styled from 'styled-components'

export const DivContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-inline: 160px;

  h1 {
    font-family: 'Baloo 2';
    font-size: 18px;
    margin-top: 72px;
    font-weight: bold;
    color: ${(props) => props.theme['gray-800']};
    }
`
export const CheckoutContainer = styled.div`
  aside {
    margin-top: 15px;
    background: ${(props) => props.theme['gray-200']};
    width: 640px;
    height: 372px;
    border-radius: 6px;
    padding: 40px;
  }
  header {
    display: flex;
    gap: 8px;
  }
  h2 {
    font-size: 16px;
    color: ${(props) => props.theme['gray-800']};
  }
  h3 {
    font-size: 14px;
    color: ${(props) => props.theme['gray-700']};
  }
  input[type=number]::-webkit-inner-spin-button { 
    -webkit-appearance: none;
  }
  input[type=number] { 
    -moz-appearance: textfield;
    appearance: textfield;

  }
  input:nth-child(2) {
    margin-top: 32px;
    background: ${(props) => props.theme['gray-300']};
    border: 1px solid #e6e5e5;
    border-radius: 4px;
    width: 200px;
    height: 42px;
    padding: 12px;
  }
  input:nth-child(3) {
    width: 560px;
    height: 42px;
    background: ${(props) => props.theme['gray-300']};
    border: 1px solid #e6e5e5;
    border-radius: 4px;
    padding: 12px;
    margin-top: 8px;
  }
  input::placeholder {
    font-size: 14px;
    color: ${(props) => props.theme['gray-600']};
    word-spacing: 170px;
  }
`
export const AdressContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 8px;
  input:nth-child(1) {
    height: 42px;
    width: 200px;
    border: 1px solid #e6e5e5;
    border-radius: 4px;
    background: ${(props) => props.theme['gray-300']};
    padding: 12px;
  }
  input:nth-child(2) {
    margin-top: 0.5px;
    width: 348px;
    border: 1px solid #e6e5e5;
    border-radius: 4px;
    background: ${(props) => props.theme['gray-300']};
  }
`
export const FooterContainer = styled.div`
  display: flex;
  height: 42px;
  gap: 12px;
  margin-top: 16px;
  border-radius: 4px;
  input:nth-child(1) {
    background: ${(props) => props.theme['gray-300']};
    border-radius: 4px;
    border: 1px solid #e6e5e5;
    height: 42px;
    width: 200px;
    padding: 12px;
  }
  input:nth-child(2) {
    margin-top: -0.5px;
    background: ${(props) => props.theme['gray-300']};
    border-radius: 4px;
    border: 1px solid #e6e5e5;
    height: 42px;
    width: 276px;
  }
  input:nth-child(3) {
    margin-top: -0.5px;
    background: ${(props) => props.theme['gray-300']};
    border-radius: 4px;
    border: 1px solid #e6e5e5;
    height: 42px;
    width: 60px;
  }
`
export const PaymentContainer = styled.div`
  padding: 40px;
  margin-top: 12px;
  flex-direction: column;
  display: flex;
  width: 640px;
  height: 207px;
  background: ${(props) => props.theme['gray-200']};
  border-radius: 6px;
  gap: 8px;
  div {
    display: flex;
    gap: 8px;
  }
`
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 530px;
  height: 44px;
  p:nth-child(1) {
    font-size: 16px;
    color: ${(props) => props.theme['gray-800']};
  }
  p:nth-child(2) {
    font-size: 14px;
    color: ${(props) => props.theme['gray-700']};
  }
`
export const CardMoneyContainer = styled.div`
  display: flex;
  justify-content: space-around;

   button {
    display: flex;
    gap: 12px;
    margin-top: 32px;
    border: none;
    background: ${(props) => props.theme['gray-400']};
    justify-content: center;
    align-items: center;
    font-size: 12px;
    color: ${(props) => props.theme['gray-700']};
    border-radius: 6px;
    width: 178.67px;
    height: 51px;
    cursor: pointer;
  }
  button:hover {
    background: #d7d5d5;
  } 
  button:disabled {
    background: ${(props) => props.theme['gray-400']};
    cursor: not-allowed;
    opacity: 0.7;
  } 
`
export const CardCoffeContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  padding: 40px;
  width: 448px;
  height: auto;
  border-radius: 6px 44px;
  background: ${(props) => props.theme['gray-200']};
  gap: 48px;

  div {
    display: flex;
    justify-content: space-between;
  }
  aside {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-right: 30px;
  }
  img {
    width: 64px;
    height: 64px;
  }
  main {
    display: flex;
    gap: 8px;
    color: #403937;
    button[name='trash'] {
      display: flex;
      cursor: pointer;
      background: #e6e5e5;
      border-radius: 6px;
      justify-content: center;
      align-items: center;
      gap: 4px;
      font-size: 12px;
      color: #574f4d;
      width: 91px;
      height: 32px;
      border: none;
    }
    button[name='trash']:hover {
      background: #d7d5d5;
    }
  }
`
export const TextTotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 10px;
  p {
    font-size: 14px;
  }
  strong {
    font-size: 20px;
  }
  button {
    cursor: pointer;
    color: white;
    border: none;
    font-size: 15px;
    background: #dbac2c;
    width: 368px;
    height: 30px;
    border-radius: 6px;
    margin-top: 10px;
  }
  button:hover {
    background: #c47f17;
  }
  button:disabled {
    background: #dbac2c;
    cursor: not-allowed;
    opacity: 0.7;
  }
`
