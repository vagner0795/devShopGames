import { styled } from 'styled-components'

export const ButtonStyles = styled.button`
  background-color: #549300;
  border: none;
  width: ${(props) => (props.width ? props.width : '100%')};
  padding: 15px 5px;
  border-radius: 10px;
  font-weight: 700;
  font-size: 12px;
  text-transform: uppercase;
  cursor: pointer;

  &&:hover {
    background-color: #417400;
  }
`
