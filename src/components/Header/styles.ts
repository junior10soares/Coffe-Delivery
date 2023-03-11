import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding-left: 160px;
  margin-top: 32px;
  nav:nth-child(1) {
    background: transparent;
  }
  img {
    background: white;
    border: none;
    width: 85px;
    height: 40px;
    text-decoration: none;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    padding-right: 160px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
  p {
    display: flex;
    color: ${(props) => props.theme['purple-700']};
    background: ${(props) => props.theme['purple-100']};
    border-radius: 6px;
    font-size: 14px;
    padding: 8px;
    align-items: center;
    gap: 4px;
  }

  span{
    display: flex;
    position: relative;
    background: ${(props) => props.theme['yellow-100']};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 6px;
    padding: 8px;
    width: 38px;
    height: 38px;
    padding: 8px;
    cursor: pointer;
  }
  span strong {
    display: flex;
    font-size: 12px;
    position: absolute;
    top: -8px;
    justify-content: center;
    align-items: center;
    background: #c47f17;
    border-radius: 1000px;
    width: 20px;
    height: 20px;
    color: white;
    margin-left: 20px;
  }
  a:focus {
    box-shadow: none;
  }
`
