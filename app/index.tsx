import { useFocusEffect } from "expo-router";
import { useState, useCallback, useEffect } from "react";
import { Text } from "react-native";
import Swipeable from "react-native-gesture-handler/ReanimatedSwipeable";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Reanimated, {
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

export default function Index() {
  useFocusEffect(
    useCallback(() => {
      console.log("test");
    }, [])
  );

  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={RightAction}>
        <Text style={{ color: "white" }}>ANYTHING IN HERE</Text>
      </Swipeable>
    </GestureHandlerRootView>
  );
}

function RightAction(prog: SharedValue<number>, drag: SharedValue<number>) {
  return (
    <Reanimated.View>
      <Text>Text</Text>
    </Reanimated.View>
  );
}
