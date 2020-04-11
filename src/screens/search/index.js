import React, {Component} from 'react';
import {
  SafeAreaView,
  FlatList,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Button,
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as tvShowsActions from '../../redux/actions/tvShowsActions';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {value: ''};
  }
  componentDidMount() {
    this.props.actions.getShows('Batman');
  }

  onPress = item => {
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
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            marginLeft: 20,
            marginRight: 20,
          }}
          onChangeText={text => this.onChangeText(text)}
          value={this.state.value}
        />
        <Button
          title="Search"
          color="#f194ff"
          onPress={() => this.props.actions.getShows(this.state.value)}
        />

        <FlatList
          data={this.props.shows}
          renderItem={({item}) => (
            <View key={item} style={styles.item}>
              <TouchableOpacity onPress={() => this.onPress(item)}>
                <Text style={styles.title}>{item.show.name}</Text>
              </TouchableOpacity>
            </View>
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
    marginTop: 15,
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
