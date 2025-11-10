import { BoxInfo, ContentContainer, Text, Image } from "./style";
import "./style.css";
import ImgLogo from "assets/avatar.jpg";
import ImgAvatar from "assets/avatar.jpg";
// stili propisivayutsya v otdelnom faile v scc
//2 sposob
function Lesson08() {
  //object dlya inline stilei
  const textStyle = {
    color: "blue",
    fontSize: "26px",
  };
  return (
    <div className="lesson08-wrapper">
      {/* 2 способ - inline styles (передача объекта стилей в атрибут style) */}
      <div style={{ color: "blueviolet", fontSize: "24px" }}>
        Inline style example
      </div>
      <p style={textStyle}>inline style example 3</p>
      <div style={textStyle}>inline style example 3</div>
      {/* 3 sposob ispolzovanie biblioteki emotion
      to est mi vizivaem to chto napisali v style.ts */}
      <BoxInfo primary>
        <ContentContainer>
          <Image src={ImgAvatar}/>
          <Text>Emotion Example 1</Text>
        </ContentContainer>
      </BoxInfo>
      <BoxInfo>
        <ContentContainer>
          <Image src={ImgLogo}/>
        Emotion Example 2
        </ContentContainer>
        </BoxInfo>
    </div>
  );
}
export default Lesson08;
