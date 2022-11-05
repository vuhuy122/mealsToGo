import React, { useState } from "react";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";
import { RestaurantsInfoCard } from "../../../components/restaurants-info-card";
import { SafeArea } from "../../../components/utility/safe-area.component";

export const RestaurantsDetailScreen = ({ route }: any) => {
  const [breakFastExpanded, setBreakFastExpanded] = useState(false)
  const [LunchExpanded, setLunchExpanded] = useState(false)
  const [dinnerExpanded, setDinnerExpanded] = useState(false)
  const [dinksExpanded, setDrinksExpanded] = useState(false)

  const { restaurants } = route?.params
  return (
    <SafeArea>
      <RestaurantsInfoCard restaurant={restaurants} />
      <ScrollView>
        <List.Accordion
          title="Breakfast"
          expanded={breakFastExpanded}
          onPress={() => setBreakFastExpanded(!breakFastExpanded)}
          left={props => <List.Icon {...props} icon="bread-slice" />}>
          <List.Item title="Phở bò" />
          <List.Item title="Bánh canh" />
        </List.Accordion>

        <List.Accordion
          title="Lunch"
          expanded={LunchExpanded}
          onPress={() => setLunchExpanded(!LunchExpanded)}
          left={props => <List.Icon {...props} icon="hamburger" />}>
          <List.Item title="Phở bò" />
          <List.Item title="Bánh canh" />
        </List.Accordion>

        <List.Accordion
          title="Dinner"
          expanded={dinnerExpanded}
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
          left={props => <List.Icon {...props} icon="food-variant" />}>
          <List.Item title="Phở bò" />
          <List.Item title="Bánh canh" />
        </List.Accordion>

        <List.Accordion
          title="Dinks"
          expanded={dinksExpanded}
          onPress={() => setDrinksExpanded(!dinksExpanded)}
          left={props => <List.Icon {...props} icon="cup" />}>
          <List.Item title="Phở bò" />
          <List.Item title="Bánh canh" />
        </List.Accordion>
      </ScrollView>
    </SafeArea>
  )
}
