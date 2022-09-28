import React from "react";
import { Image, Text } from "react-native";
import { SvgXml } from "react-native-svg";
import open from "../../assets/open";
import star from "../../assets/star";
import { Spacer } from "../components/spacer/spacer.component";
import { Address, Info, Ratting, RestaurantCard, RestaurantCardCover, Section, SectionEnd, Title } from './restaurants-info-card-styles';
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
