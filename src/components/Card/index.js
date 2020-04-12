import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {
  Container,
  Content,
  Card,
  CardItem,
  Text,
  Thumbnail,
  Left,
  Body,
  Right,
  Button,
} from 'native-base';

class XCard extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <TouchableOpacity onPress={() => this.props.onPress()}>
        <Content padder>
          <Card style={styles.mb}>
            <CardItem>
              <Left>
                {this.props.content.image ? (
                  <Thumbnail source={{uri: this.props.content.image.medium}} />
                ) : (
                  <Thumbnail
                    source={{
                      uri:
                        'https://static.tvmaze.com/images/no-img/no-img-portrait-text.png',
                    }}
                  />
                )}

                <Body>
                  <Text>{this.props.content.name}</Text>
                  <Text note>{this.props.content.type}</Text>
                </Body>
              </Left>
            </CardItem>

            <CardItem style={styles.cis}>
              <Left>
                <Text>{this.props.content.language}</Text>
              </Left>
              <Body />
              <Right>
                {this.props.content.rating.average ? (
                  <Text>
                    Rating : {this.props.content.rating.average.toFixed(1)}
                  </Text>
                ) : (
                  <Text />
                )}
              </Right>
            </CardItem>
          </Card>
        </Content>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  mb: {
    marginBottom: 15,
  },
  cis: {
    paddingVertical: 0,
  },
});

export default XCard;
