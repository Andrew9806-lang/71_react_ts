import styled from "@emotion/styled";

//interface dlya propsov stilizovannogo komponenta BoxInfo
interface BoxInfoProps{
  primary?:boolean
}

export const BoxInfo = styled.div<BoxInfoProps>`
  display: flex;
  align-items:center;
  justify-content: center ;
  padding:20px;
  min-width: 300px;
  min-height: 300px;
  /* dobavlenie logiki cherez props? ispolzovanie raznih znacheniy background */
/*   
    background: rgba(6, 62, 65, 1);
     znak ? eto oznachaet if esli true to vipoln o 1 esli net idet znak : vipolne chto posle */

    background:${({primary})=>primary? " rgba(56, 123, 58, 1)" :" rgba(6, 62, 65, 1)" };
    border:2px solid  rgba(6, 62, 65, 1);
    color:white;
    font-size: ${({ primary }) =>
    primary ? "40px" : "30px"};
`

export const ContentContainer = styled.div`
  display: flex;
  align-items:center;
  justify-content: center ;
  padding:20px;
  gap: 20px;

`;

export const Image = styled.img`
width: 30px;

`
export const Text = styled.p``;