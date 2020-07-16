import React, { Component } from 'react';
import { StatusBar, Text, View, TouchableHighlight, ScrollView, FlatList } from 'react-native';
import { FontAwesome as Icon } from '@expo/vector-icons';
import colors from '../styles/colors';
import styles from './styles/CallHistory';

// TODO: Make separate file holding the data
const callHistoryData = [
  {id: 0, name: 'Offc. Darryl Booth', date: 'June 9, 2020'},
  {id: 1, name: 'Offc. Alyssa Jones', date: 'March 7, 2018'},
  {id: 2, name: 'Offc. Jean Sanders', date: 'May 12, 2016'}
]

export default class LandingPage extends Component {

  constructor(props) {
    super(props);
    this.state = { user: null, customState: null };
  }

  renderHeader = () => {
    return (
      <Text style={styles.headerText}>Call History</Text>
    )
  }

  renderSeparator = () => {
    return (
      <View style={styles.separator} />
    )
  }

   // Use a flat-list to display previous recordings
  render() {
    const { user } = this.state;

    return (

      <View style={styles.mainWrapper}>
        <StatusBar backgroundColor={colors.black} barStyle="light-content"/>

        <FlatList 
        data={callHistoryData}
        ListHeaderComponent={this.renderHeader}
        ItemSeparatorComponent={this.renderSeparator}
        renderItem={({ item }) => (
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Icon name="file-archive-o" style={styles.docsIcon} />

          <View style={{flex: 1, flexDirection: 'column'}}>
            <Text style={styles.nameText}>{item.name}</Text>
            <Text style={styles.dateText}>{item.date}</Text>
            <View style={styles.videoRec} />
            <Icon name="play-circle-o" style={styles.playIcon} />
          </View>
          
        </View>
        )}
        />

      </View>
    );
  }
}