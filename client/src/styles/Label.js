import styled from "styled-components";

const Label = styled.label`
  color: ${({theme}) => theme.text};
  display: block;
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 8px;
`;

export default Label;
