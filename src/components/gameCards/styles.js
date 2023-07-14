import { styled } from 'styled-components'

export const ContainerCardGame = styled.div`
  background-color: #2983aa;
  display: flex;
`

export const Info = styled.div`
  padding: 10px;
  flex: 1;
  display: flex;
  flex-direction: column;
`

export const Title = styled.h3`
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 700;
`

export const Details = styled.p`
  color: #c7c7c7;
  font-size: 16px;
  font-weight: 400;
  flex: 1;
`

export const ContainerPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`

export const Price = styled.h2`
  color: #beeb14;
  font-size: 32px;
`
