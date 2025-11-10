import styled from "@emotion/styled";



 interface Input{
  primary?:boolean
};

export const InputStyle = styled.div<Input>`
display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;

`;


