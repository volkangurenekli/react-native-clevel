import React from 'react';
import {Title, Picture, Card, Img} from './style';

function XCard(props) {
  return (
    <Card {...props}>
      <Picture>
        {props.image ? <Img source={{uri: props.image.medium}} /> : null}
      </Picture>
      <Title>{props.name}</Title>
    </Card>
  );
}

export default XCard;
