import React, { useContext } from "react";
import { FlatList, View, TouchableOpacity } from "react-native";
import { ActivityIndicator, Searchbar, Colors } from "react-native-paper";
import styled from "styled-components/native";
import { RestaurantsInfoCard } from "../../../components/restaurants-info-card";
import { Search } from "../../../components/search.componet";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantsContext } from "../../../sevices/restaurants/restaurants.contex";

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
const SearchView = styled(View)`
        padding: ${(props: any) => props.theme.space[3]};
    `;

export const RestaurantsScreen = ({ navigation }) => {
  console.log('navigation', navigation);
  const { restaurants, isLoading, Error }: any = useContext(RestaurantsContext);
  return (
    <SafeArea>
      {isLoading &&
        <LoadingContainer style={{ position: 'absolute', top: "50%", left: '50%', zIndex: 2 }}>
          <Loading animating={true} color={Colors.blue200} size={50} style={{ marginLeft: -25 }} />
        </LoadingContainer>}
      <SearchView>
        <Search />
      </SearchView>
      <View style={{ flex: 1 }}>
        <RestaurantList
          data={restaurants}
          renderItem={({ item }: any) => {
            return (
              <TouchableOpacity onPress={() => navigation.navigate("RestaurantsDetail", { restaurants: item })}>
                <RestaurantsInfoCard restaurant={item} />

              </TouchableOpacity>
            )
          }

          }
          keyExtractor={(i) => i?.name?.toString()}
        />

      </View>
    </SafeArea>
  )
}
