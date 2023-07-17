import { styled } from 'styled-components'

export const ContainerCardGame = styled.div`
  background-color: #2983aa;
  display: flex;

  @media (max-width: 850px) {
    img {
      width: 100%;
      height: auto;
      object-fit: contain;
    }

    flex-direction: column;
  }
`

export const Info = styled.div`
  padding: 10px;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const Title = styled.h3`
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 700;

  @media (max-width: 850px) {
    text-align: center;
  }
`

export const Details = styled.p`
  color: #c7c7c7;
  font-size: 16px;
  font-weight: 400;
  flex: 1;

  @media (max-width: 850px) {
    text-align: center;
  }
`

export const ContainerPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  @media (max-width: 850px) {
    flex-direction: column;
  }
`

export const Price = styled.h2`
  color: #beeb14;
  font-size: 32px;
`
