import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/react";

const boxBasicStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Homework10Wrapper = styled.div` ${boxBasicStyles}
  gap: 30px;
  flex: 1;
  padding: 50px;
  background: rgba(177, 209, 163, 1);
  font-size: 36px;
`;

export const InputWrapper= styled.form` ${boxBasicStyles}
  gap: 20px;
  width: 400px;
  padding: 20px;
  background: white;
  border-radius: 10px;`

export const Result=styled.div`
font-size: 30px;
 color: rgba(40, 15, 86, 1);`

 const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

 export const Spinner = styled.div`
 border: 4px solid rgba(0,0,0,0.1);
  border-top: 4px solid #333;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation:${spin} 1s linear infinite ;
 `