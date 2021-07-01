import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, FlatList, View } from 'react-native';
import TextButton from '../components/TextButton';

export interface ToggleableButtonFlatlistProps {
  array: any;
}

const ToggleableButtonFlatlist: React.FC<ToggleableButtonFlatlistProps> = ({ array }) => {
  const [renderData, setRenderData] = useState(array)

  const onPressHandler = (id: string) => {
    let copyData = [...renderData]
    for (let data of copyData){
      if (data.id === id) {
        data.selected = !data.selected;
      }
    }
    setRenderData(copyData)
  }

  return (
    <View style={{height: 400, justifyContent: 'center', alignItems: 'center', paddingVertical: '25%' }}>
      <FlatList
        data={renderData}
        columnWrapperStyle={styles.tagView}
        numColumns={5}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (
          <TouchableOpacity 
            onPress={() => onPressHandler(item.id)}
            style={{height: 48}}
          >
            <TextButton title={item.name} filled={item.selected}/>
          </TouchableOpacity>
        )}
        extraData={renderData}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  tagView: {
    // flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    // alignItems: 'center',
    justifyContent: 'center',
  },
  
})

export default ToggleableButtonFlatlist;