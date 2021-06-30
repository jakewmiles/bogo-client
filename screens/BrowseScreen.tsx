import React from 'react';
import { View, Text, Button } from 'react-native';
import Carousel from 'react-native-snap-carousel'
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from '../components/ProfileCarousel';
import { useNavigation } from '@react-navigation/core';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { MainBottomTabParamList } from '../types';

type BrowseScreenProp = BottomTabNavigationProp<MainBottomTabParamList, 'Browse'>;

export interface BrowseScreenProps {
}

const userMock = {
  profilePicture: 'https://ca.slack-edge.com/T0WU5R8NT-U01RH16H9TP-f954b072e6f0-512',
  name: 'George',
  age: '28',
  city: 'Dartford',
  country: 'England',
  rating: 4.5,
  content: 'If falling asleep on trains after a great night out at a pub is your thing. I\'d be happy to introduce some local brews!',
  hangout1: 'https://i.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68',
  hangout2: 'https://i.picsum.photos/id/1016/3844/2563.jpg?hmac=WEryKFRvTdeae2aUrY-DHscSmZuyYI9jd_-p94stBvc',
  interests: ['Music', 'Hiking', 'Films', 'Football', 'Cooking'],
  languages: [{ name: 'English', level: 'Fluent' }, { name: 'Chinese', level: 'Conversational' }],
  starRating: 3,
}

const userMock2 = {
  profilePicture: 'https://ca.slack-edge.com/T0WU5R8NT-U01H36GTUMD-d4226efa2eed-512',
  name: 'Mari',
  age: '32',
  city: 'L.A.',
  country: 'USA',
  rating: 5,
  content: 'If falling asleep on trains after a great night out at a pub is your thing. I\'d be happy to introduce some local brews!',
  hangout1: 'https://i.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68',
  hangout2: 'https://i.picsum.photos/id/1016/3844/2563.jpg?hmac=WEryKFRvTdeae2aUrY-DHscSmZuyYI9jd_-p94stBvc',
  interests: ['Music', 'Hiking', 'Films', 'Football', 'Cooking'],
  languages: [{ name: 'English', level: 'Fluent' }, { name: 'Chinese', level: 'Conversational' }],
  starRating: 5,
}

const userMock3 = {
  profilePicture: 'https://ca.slack-edge.com/T0WU5R8NT-UREPE1AR2-d3cad052b4a2-512',
  name: 'Andy',
  age: '61',
  city: 'Sidcup',
  country: 'England',
  rating: 2.5,
  content: 'Lets explore the countryside together!',
  hangout1: 'https://i.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68',
  hangout2: 'https://i.picsum.photos/id/1016/3844/2563.jpg?hmac=WEryKFRvTdeae2aUrY-DHscSmZuyYI9jd_-p94stBvc',
  interests: ['Music', 'Hiking', 'Films', 'Football', 'Cooking'],
  languages: [{ name: 'English', level: 'Fluent' }, { name: 'Chinese', level: 'Conversational' }],
  starRating: 2.5,
}

const data = [
  { user: userMock, ownProfile: false },
  { user: userMock2, ownProfile: false },
  { user: userMock3, ownProfile: false },
]

const BrowseScreen: React.FC<BrowseScreenProps> = () => {
  const isCarousel = React.useRef(null);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Carousel
        layout="default"
        layoutCardOffset={2}
        ref={isCarousel}
        data={data}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        inactiveSlideShift={0}
        useScrollView={true}
      />
    </View>
  );
}

export default BrowseScreen;