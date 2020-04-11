import {View, Image} from 'react-native';
import styled from 'styled-components';

export const Title = styled(View)`
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

export const Picture = styled(View)`
  width: inherit;
  height: inherit;
  border-radius: 40px;
`;

export const Img = styled(Image)`
  width: 300px;
  border-radius: 40px;
  object-fit: cover;
`;

export const Card = styled(View)`
  margin: 30px 30px;
  width: 300px;
  height: 400px;
  border-radius: 40px;
`;

export const Container = styled(View)`
  z-index: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 6rem;
`;
