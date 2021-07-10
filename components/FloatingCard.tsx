import React from 'react';
import { StyleSheet, View } from 'react-native';

export interface FloatingCardProps {
  children: React.ReactNode;
  cardWidth: string
}

const FloatingCard: React.FC<FloatingCardProps> = ({children, cardWidth}) => {
  return (
    <View style={[styles.card, {width: cardWidth}]}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    elevation: 6,
    backgroundColor: '#fff',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,

  },
})

export default FloatingCard;