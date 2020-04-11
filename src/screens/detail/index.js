import React, {Component} from 'react';
import {
  Image,
  FlatList,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as tvShowsActions from '../../redux/actions/tvShowsActions';
import styled from 'styled-components';

class Detail extends Component {
  render() {
    console.log('detail', this.props.show);
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <Image
            source={{uri: this.props.show.show.image.medium}}
            style={styles.cardImage}
          />
          <View>
            <Text style={styles.textLeft}>{this.props.show.show.name}</Text>
            <Text style={styles.textRight}>{this.props.show.show.type}</Text>
          </View>
        </View>
      </View>
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
)(Detail);

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    borderWidth: 3,
    borderRadius: 3,
    borderColor: '#000',
    width: 300,
    height: 300,
    padding: 10,
  },
  cardImage: {
    height: 260,
  },
  textLeft: {
    position: 'absolute',
    left: 0,
    top: 0,
  },
  textRight: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
});

const Container = styled.View`
  z-index: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Card = styled.View`
  margin: 30px 30px;
  width: 300px;
  height: 400px;
  border-radius: 40px;
`;

const Img = styled.Image`
  width: 300px;
  border-radius: 40px;
  object-fit: cover;
`;

const Title = styled.Text`
  text-align: center;
  font-family: Gadget;
  font-weight: bold;
  font-size: 30px;
  margin-top: -100px;
  color: #001529;
  background: #f0f2f5;
  position: relative;
  opacity: 0.2;
  border-radius: 40px;
`;

const Picture = styled.View`
  border-radius: 40px;
`;
