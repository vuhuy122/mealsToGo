import React, { useContext } from "react";
import { FlatList, View } from "react-native";
import { ActivityIndicator, Searchbar, Colors } from "react-native-paper";
import styled from "styled-components/native";
import { RestaurantsInfoCard } from "../../../components/restaurants-info-card";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantsContext } from "../../../sevices/restaurants/restaurants.contex";
const SearchView = styled(View)`
  padding: ${(props: any) => props.theme.space[3]};
`;
const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16
  }
})``
const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%,
  left: 50%
`
export const RestaurantsScreen = () => {
  const { restaurants, isLoading, Error }: any = useContext(RestaurantsContext);
  return (
    <SafeArea>
      {isLoading &&
        <LoadingContainer style={{ position: 'absolute', top: "50%", left: '50%', zIndex: 2 }}>
          <Loading animating={true} color={Colors.blue200} size={50} style={{ marginLeft: -25 }} />
        </LoadingContainer>}
      <SearchView>
        <Searchbar placeholder="Search" value={'Tìm nhà hàng'} onChangeText={(value) => null} />
      </SearchView>
      <View style={{ flex: 1 }}>
        <RestaurantList
          data={restaurants}
          renderItem={({ item }: any) => {
            console.log('item', item);
            return (
              <RestaurantsInfoCard restaurant={item} />
            )
          }

          }
          keyExtractor={(i) => i?.name?.toString()}
        />

      </View>
    </SafeArea>
  )
}
