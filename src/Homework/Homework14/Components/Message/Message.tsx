import Button from "../../../../Components/Button/Button";
import { ContentComponent, DataItem } from "../../../../Lesson/Lesson14/components/Content/styles";


function Message(){
    return(
         <ContentComponent>
      <DataItem>First Name: {data?.firstName} </DataItem>
      <DataItem>Last Name: {data?.lastName}</DataItem>
      <DataItem>Age: {data?.age}</DataItem>
      <Button
        name="DELETE DATA"
        onClick={() => {
          onDataChange(undefined);
        }}
      />
    </ContentComponent>
  );
}
    )
}
export default Message;