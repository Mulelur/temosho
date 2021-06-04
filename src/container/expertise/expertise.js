import React from "react";
import { Expertise } from "../../components";
import { MMData } from "../../data/mmData";

export default function ExpertiseContainer() {
  return (
    <Expertise>
      <Expertise.Content>
        <Expertise.Text>
          I am a student at VUT who is so busy studying a field of engineering
          which is mechanical engineering.
        </Expertise.Text>
        <Expertise.Text>
          In my free time i get to be busy with designing Women fashion dresse,
          developing my own Special spices for frying both red meat and chicken
          which i think i am going to succeed and it is going to be one of the
          best spices in south Africa.
        </Expertise.Text>
        <Expertise.Text>
          I also like to commit myselt with my school work.
        </Expertise.Text>
      </Expertise.Content>
      <Expertise.MMTitle>Manegment Matrix</Expertise.MMTitle>
      <Expertise.MM>
        {MMData.map((item) => {
          return (
            <>
              <Expertise.MMBedge>{item.day}</Expertise.MMBedge>
              <Expertise.MMContent>
                <Expertise.MMText>{item.task}</Expertise.MMText>
              </Expertise.MMContent>
            </>
          );
        })}
      </Expertise.MM>
    </Expertise>
  );
}
