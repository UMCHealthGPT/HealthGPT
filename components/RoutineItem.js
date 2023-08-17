import { useEffect, useState } from "react";
import styled from "styled-components/native";
import { colors } from "../colors";
export default function RoutineItem({
  day,
  parts,
  exercises,
  onPress,
  select,
  isDark,
}) {
  const [kday, setKday] = useState("");
  useEffect(() => {
    switch (day) {
      case "Sunday":
        setKday("일");
        break;
      case "Monday":
        setKday("월");
        break;
      case "Tuesday":
        setKday("화");
        break;
      case "Wednesday":
        setKday("수");
        break;
      case "Thursday":
        setKday("목");
        break;
      case "Friday":
        setKday("금");
        break;
      case "Saturday":
        setKday("토");
        break;

      default:
        break;
    }
  }, [day]);
  return (
    <Container isDark={isDark}>
      <Item isDark={isDark} onPress={onPress}>
        <ItemTitle isDark={isDark}>{kday}</ItemTitle>
        <ItemSubTitle isDark={isDark}>{parts}</ItemSubTitle>
      </Item>
      {select ? (
        <ExerciseContainer>
          {exercises.map((exercise) => (
            <ExerciseItem isDark={isDark} key={exercise.healthCategoryIdx}>
              <ExerciseName isDark={isDark}>{exercise.name}</ExerciseName>
              <ExerciseSet isDark={isDark}>{exercise.set} set</ExerciseSet>
            </ExerciseItem>
          ))}
        </ExerciseContainer>
      ) : null}
    </Container>
  );
}
const Container = styled.View``;
const Item = styled.TouchableOpacity`
  flex-direction: row;
  width: 303px;
  height: 45px;
  background-color: ${(props) =>
    props.isDark ? colors.grey_8 : colors.grey_2};
  border-radius: 12px;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`;
const ItemTitle = styled.Text`
  font-size: 20px;
  margin-left: 15px;
  color: ${(props) => (props.isDark ? colors.white : colors.black)};
`;
const ItemSubTitle = styled.Text`
  margin-right: 15px;
  font-weight: bold;
  color: ${colors.l_main};
`;
const ExerciseContainer = styled.View`
  margin: 1px 20px;
`;
const ExerciseItem = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 3px;
`;
const ExerciseName = styled.Text`
  color: ${(props) => (props.isDark ? colors.white : colors.black)};
`;
const ExerciseSet = styled.Text`
  color: ${colors.grey_5};
`;
