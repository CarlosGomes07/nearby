import { View, Text } from "react-native";

import { Steps } from "@/components/stpes";
import { Button } from "@/components/button";
import { Welcome } from "@/components/welcome";

export default function Index() {
  return (
    <View style={{ flex: 1, padding: 40, gap: 40 }}>
      <Welcome />
      <Steps />

      <Button>
        <Button.Title> Começar </Button.Title>
      </Button>
    </View>
  );
}
