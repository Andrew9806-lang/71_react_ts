import styled from "@emotion/styled";

interface AnimalCardProps {
  primary?: boolean;
}

export const AnimalCardWrapper = styled.div<AnimalCardProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  min-width: 300px;
  background-color: ${({ primary }) => (primary ? "antiquewhite" : "white")};
  border-radius: 12px;
  font-size: 24px;

img{
    width: 100%;
}
`;

