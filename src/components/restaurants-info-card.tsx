import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import star from "../../assets/star";
import open from "../../assets/open";
import { Spacer } from "../components/spacer/spacer.component";
type Props = {
  name?: string;
  icon?: string;
  photos?: string;
  address?: string;
  type?: number;
  isOpenNow?: boolean;
  ratting?: any;
  isCloseTemporarily?: any;
};

const Title = styled(Text)`
  color: ${(props: any) => props.theme.colors.text.primary};
  font-family: ${(props: any) => props.theme.fonts.heading};
  font-size: ${(props: any) => props.theme.fontSizes.body};
`;
const Address = styled(Text)`
  color: ${(props: any) => props.theme.colors.text.primary};
  font-family: ${(props: any) => props.theme.fonts.body};
  font-size: ${(props: any) => props.theme.fontSizes.caption};
`;
const RestaurantCard = styled(Card)`
  background-color: ${(props: any) => props.theme.colors.bg.primary};
  margin: ${(props: any) => props.theme.space[3]};
`;
const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props: any) => props.theme.space[3]};
  background-color: ${(props: any) => props.theme.colors.bg.primary};
`;
const Info = styled(View)`
  padding: ${(props: any) => props.theme.space[3]};
`;
const Ratting = styled(View)`
  flex-direction: row;
  padding-vertical: ${(props: any) => props.theme.space[2]};
`;
const Section = styled(View)`
  flex-direction: row;
  align-items: center;
`;
const SectionEnd = styled(View)`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;
const Padding = styled(View)`
  padding-left: ${(props: any) => props.theme.space[3]};
`;
export const RestaurantsInfoCard = (restaurant: Props) => {
  const {
    name = "nhà hàng hải sản Phước Huy Vu",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://images.foody.vn/res/g21/201010/s/foody-moc-rieu-nuong-992-636021404803259509.jpg",
    ],
    address = "10 random street",
    isOpenNow = true,
    ratting = 4,
    isCloseTemporarily = true,
  } = restaurant;
  const rattingArray = Array.from(new Array(Math.ceil(ratting)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Section>
          <Ratting>
            {rattingArray.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </Ratting>
          <SectionEnd>
            {isCloseTemporarily && (
              <Text style={{ color: "red" }}>CLOSE TEMPORARILY</Text>
            )}
            <Spacer variant="left.large" />
            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            <Spacer variant="left.large" />
            <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
