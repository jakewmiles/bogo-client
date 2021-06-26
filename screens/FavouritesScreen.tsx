import React from 'react';
import { View, Text } from "react-native";

export interface FavouritesScreenProps {
  
}
 
const FavouritesScreen: React.FC<FavouritesScreenProps> = () => {
  return ( 
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Favourites Screen</Text>
    </View>
   );
}
 
export default FavouritesScreen;