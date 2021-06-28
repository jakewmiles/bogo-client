import React from 'react';
import { View, Text } from "react-native";

export interface MessagesScreenProps {

}

const MessagesScreen: React.FC<MessagesScreenProps> = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Messages Screen</Text>
    </View>
  );
}

export default MessagesScreen;