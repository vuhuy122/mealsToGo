import React from "react";
import { StyleSheet, Text } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

type Props = {
  name?: string;
  icon?: number;
  photos?: string;
  address?: string;
  type?: number;
  isOpenNow?: boolean;
  ratting?: string;
  isCloseTemporarily?: any;
};

const Title = styled(Text)`
  padding: ${(props: any) => props.theme.space[3]};
  color: ${(props: any) => props.theme.colors.text.primary};
  background-color: ${(props: any) => props.theme.colors.bg.primary};
  font-family: ${(props: any) => props.theme.fonts.body};
`;
const RestaurantCard = styled(Card)`
  background-color: ${(props: any) => props.theme.colors.bg.primary};
  margin: ${(props: any) => props.theme.space[3]};
`;
const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props: any) => props.theme.space[3]};
  background-color: ${(props: any) => props.theme.colors.bg.primary};
`;

export const RestaurantsInfoCard = (restaurant: Props) => {
  const {
    name = "nhà hàng hải sản Phước Huy Vu",
    icon,
    photos = [
      "https://images.foody.vn/res/g21/201010/s/foody-moc-rieu-nuong-992-636021404803259509.jpg",
    ],
    address = "10 random street",
    isOpenNow = true,
    rating = 4,
    isCloseTemporarily,
  } = restaurant;

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </RestaurantCard>
  );
};
