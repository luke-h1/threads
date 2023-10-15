import { Platform, RefreshControl, ScrollView, StyleSheet } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import { SafeAreaView } from "react-native-safe-area-context";
import Lottie from "lottie-react-native";
import { useContext, useRef } from "react";
import { ThreadContext } from "../../context/ThreadContext";
import ThreadItem from "../../components/ThreadItem";

export default function TabOneScreen() {
  const animationRef = useRef<Lottie>(null);
  const threads = useContext(ThreadContext);

  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 10,
          paddingTop: Platform.select({ android: 30 }),
        }}
        refreshControl={
          <RefreshControl
            refreshing={false}
            tintColor={"transparent"}
            onRefresh={() => animationRef.current?.play()}
          />
        }
      >
        <Lottie
          ref={animationRef}
          source={require("../../lottie-animations/threads-logo.json")}
          autoPlay
          loop={false}
          style={{ width: 90, height: 90, alignSelf: "center" }}
        />
        {threads.map((thread) => (
          <ThreadItem key={thread.id} {...thread} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
