import styled from "@emotion/styled";

import { css } from "@emotion/react";

const basicStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const HomeworkWrapper = styled.div`
  ${basicStyles}
  gap: 30px;
  flex: 1;
  padding: 50px;
  background: rgba(194, 160, 58, 1);
  font-size: 30px;
`;

export const Result = styled.div`
  font-size: 30px;
  color: rgba(40, 15, 86, 1);
  background-color: gray;
  padding: 50px;
`;
