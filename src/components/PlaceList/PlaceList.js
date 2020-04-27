import React from 'react';
import { FlatList } from 'react-native';
import ListItem from '../ListItem/ListItem';

const placeList = ( props ) => {   
    return (
      <FlatList 
        style={{width: "100%"}}
        data={props.places}
        renderItem={(info) => (
          <ListItem 
            placeName={info.item.name}
            onItemPressed={() => props.onItemSelected(info.item.key)}
            placeImage={info.item.image}
          />
        )}
      />
    );
};

export default placeList;