import React from 'react';
import { View, Text } from "react-native";

export interface ChatScreenProps {
  
}
 
const ChatScreen: React.FC<ChatScreenProps> = () => {
  return ( 
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Chat Screen</Text>
    </View>
   );
}
 
export default ChatScreen;