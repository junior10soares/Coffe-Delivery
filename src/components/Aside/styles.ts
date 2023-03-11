import styled from 'styled-components'

export const AsideContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-inline: 160px;
  aside {
    margin-top: 126px;
    flex-direction: column;
  }
  strong p {
    font-size: 48px;
    color: ${(props) => props.theme['gray-900']};
    font-weight: 800;
    line-height: 130%;
    font-family: 'Baloo 2';
  }
  p {
    font-size: 20px;
    color: ${(props) => props.theme['gray-800']};
  }
  div {
    display: flex;
    margin-top: 66px;
    gap: 12px;
    align-items: center;
    font-size: 16px;
  }
  div:last-child {
    display: flex;
    margin-top: 20px;
    font-size: 16px;
  }
  img {
    margin-top: 126px;
    width: 476px;
    height: 360px;
  }
`
export const BaseSpan = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 1000px;
`
export const CartIcon = styled(BaseSpan)`
  background: ${(props) => props.theme['yellow-700']};
  color: ${(props) => props.theme['gray-100']};
`
export const ClockIcon = styled(BaseSpan)`
  background: ${(props) => props.theme['yellow-500']};
  color: ${(props) => props.theme['gray-100']};
`
export const CoffeIcon = styled(BaseSpan)`
  background: ${(props) => props.theme['purple-500']};
  color: ${(props) => props.theme['gray-100']};
`
export const BoxIcon = styled(BaseSpan)`
  margin-left: 5px;
  background: ${(props) => props.theme['gray-700']};
  color: ${(props) => props.theme['gray-100']};
`
