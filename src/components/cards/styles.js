import { styled } from 'styled-components'

export const CardContainer = styled.div`
  background-color: #2b87ae;
  width: 250px;
`

export const Info = styled.div`
  padding: 20px;
  margin: 0;
`

export const Title = styled.h3`
  text-transform: uppercase;
  font-size: 16px;
`

export const PriceCard = styled.div`
  display: flex;
  background: #344654;
  margin: 15px 0;
`

export const Percent = styled.div`
  font-weight: 700;
  font-size: 24px;
  color: #beeb14;
  padding: 5px;
  background-color: #4c6b22;
  display: flex;
  align-items: center;
`

export const Price = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 5px;
`

export const OldPrice = styled.p`
  color: #a8a8a8;
  font-size: 12px;
  text-decoration: line-through;
`

export const NewPrice = styled.h4`
  font-size: 16px;
  font-weight: 700;
  color: #beeb14;
`
