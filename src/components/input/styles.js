import { styled } from 'styled-components'

export const InputStyles = styled.input`
  background-color: #316282;
  height: 40px;
  outline: none;
  border: none;
  margin: 0 10px;
  border-radius: 10px;
  padding-left: 10px;
  font-size: 16px;
  width: ${(props) => (props.width ? props.width : '100%')};

  &::placeholder {
    color: #c7c7c7;
    font-style: italic;
  }

  @media (max-width: 850px) {
    width: auto;
  }
`
