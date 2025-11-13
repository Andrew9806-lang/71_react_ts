import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/react";

const boxBasicStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;


export const Lesson11Wrapper=styled.div`
${boxBasicStyles}
gap: 30px;
padding: 50px;
font-size: 35px;
background-color: rgba(83, 111, 71, 1) ;
flex: 1;
`

export const FormWrapper=styled.form`
${boxBasicStyles}
gap: 20px;
width: 400px;
background-color: beige;
padding: 30px;
`
export const ResultWrapper= styled.div`
${boxBasicStyles}
 max-height: 700px;
  overflow-y: auto;
  gap: 20px;
  width: 400px;
  padding: 20px;
`
export const Result = styled.div`
${boxBasicStyles}
  img {
    max-width: 300px;
    border-radius: 10px;
  }
`;
 const spin=keyframes`
 0%{transform:rotate(0deg)}
 100%{transform:rotate(360deg)}
 `;
export const Spinner = styled.div`
 border: 4px solid rgba(0,0,0,0.1);
  border-top: 4px solid #333;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation:${spin} 1s linear infinite ;
 `
export const ErrorMessage= styled.div`
  width: 600px;
  padding: 20px;
  background-color: #eb9378;
  border: 2px solid #e61212;
  border-radius: 6px;
  color: #e61212;
  font-size: 28px;
  font-weight: bold;
`;

