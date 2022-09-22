import styled from "styled-components";

const Button = styled.button`
  color: #fff;
  background: #4d90fe;
  padding: 0.5rem;
  border: none;
  outline: none;
  border-radius: 5px;
  :hover {
    opacity: 0.9;
  }

  ${props => props.disabled ? `
   cursor: not-allowed;
    `: `
    cursor: pointer;`
  }
`;

export default Button;
