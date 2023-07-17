import { styled } from 'styled-components'

export const ContainerSection = styled.div`
  margin: 80px 0;
`
export const ContainerCardPromo = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;

  @media (max-width: 850px) {
    justify-content: center;
  }
`
export const ContainerCard = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
`
