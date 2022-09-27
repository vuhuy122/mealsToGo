import React from "react";
import { SafeAreaView, StatusBar, View } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { RestaurantsInfoCard } from "../../../components/restaurants-info-card";
import { SafeArea } from "../../../components/utility/safe-area.component";

const SearchView = styled(View)`
  padding: ${(props: any) => props.theme.space[3]};
`;
export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchView>
      <Searchbar key={1} />
    </SearchView>
    <View style={{ flex: 1 }}>
      <RestaurantsInfoCard />
    </View>
  </SafeArea>
);
