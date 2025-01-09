import { useFocusEffect } from "expo-router";
import { useState, useCallback, useEffect } from "react";
import { Text } from "react-native";
import Swipeable from "react-native-gesture-handler/ReanimatedSwipeable";
import { SharedValue } from "react-native-reanimated";
import { GestureHandlerRootView } from "react-native-gesture-handler";
export const getWorkouts = [
  {
    id: 0,
    startDatetime: "2024-01-01",
    endDatetime: "2024-01-01",
  },
];
export default function Index() {
  useFocusEffect(useCallback(() => {}, []));

  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={RightAction}>
        <Text style={{ color: "white" }}>ANYTHING IN HERE</Text>
      </Swipeable>
    </GestureHandlerRootView>
  );
}

function RightAction(prog: SharedValue<number>, drag: SharedValue<number>) {
  return <Text>Delete</Text>;
}
