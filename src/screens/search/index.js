import React, {Component} from 'react';
import {
  SafeAreaView,
  FlatList,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as tvShowsActions from '../../redux/actions/tvShowsActions';
import {Header, Button, Item, Input, Text} from 'native-base';
import XCard from '../../components/Card';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {value: ''};
  }
  componentDidMount() {
    this.props.actions.getShows('Batman');
  }

  onPress = item => {
    console.log('VOLKAN: Search -> item', item);

    this.props.actions.selectShow(item);
    this.props.navigation.navigate('Detail');
  };

  onChangeText = text => {
    this.setState({value: text});
  };

  render() {
    console.log(this.props);
    return (
      <SafeAreaView style={styles.container}>
        <Header searchBar rounded>
          <Item>
            <Input
              placeholder="Search"
              onChangeText={text => this.onChangeText(text)}
              value={this.state.value}
            />
          </Item>
          <Button
            transparent
            onPress={() => this.props.actions.getShows(this.state.value)}>
            <Text>Search</Text>
          </Button>
        </Header>

        <FlatList
          data={this.props.shows}
          renderItem={({item}) => (
            <XCard
              key={item}
              onPress={() => this.onPress(item)}
              content={item.show}
            />
          )}
          keyExtractor={item => item.show.id.toString()}
        />
      </SafeAreaView>
    );
  }
}

function mapStateToProps(state) {
  return {
    shows: state.tvShowsReducer,
    show: state.selectShowReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getShows: bindActionCreators(tvShowsActions.getShows, dispatch),
      selectShow: bindActionCreators(tvShowsActions.selectShow, dispatch),
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
