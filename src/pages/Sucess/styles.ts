import styled from 'styled-components'

export const SucessContainer = styled.div`
display: flex;
flex-direction: column;
margin: 112px 160px;
gap: 4px;
strong {
  font-family: 'Baloo 2';
  font-size: 32px;
  color: ${props => props.theme['yellow-700']};
}
p {
  font-size: 20px;
  color: ${props => props.theme['gray-800']};
}

section{
  display: flex;
  margin-top: 40px;
  justify-content: space-between;
}
section div:nth-child(1){
  padding: 40px;
  width: 526px;
  height: 270px;
  border: 1px solid purple;
  border-radius: 6px 36px;
}
aside{
  display: flex;
  gap: 12px;
}
section p, section   strong{
  width: 354px;
  font-family: 'Roboto';
  color: ${props => props.theme['gray-700']};
  font-size: 16px;
}
span{
    display: flex;
    color: white;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    padding: 8px;
    background: #8047F8;
    border-radius: 1000px;
}
`
export const ClientsDataContainer = styled.div`
  display: flex;  
  flex-direction: column;
  gap: 32px;
  margin-top: 32px;
main, footer {
  display: flex;
  gap: 12px;
}
main span{
  background: ${props => props.theme['yellow-500']};
}
footer span{
  background: ${props => props.theme['yellow-700']};
}

`