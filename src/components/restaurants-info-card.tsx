import React from "react";
import { StyleSheet, Text } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

const Title = styled(Text)`
    padding : 16px;
    color : red;
`
const RestaurantCard = styled(Card)`
    backgroundColor: white,
    margin: 2%
`
const RestaurantCardCover = styled(Card.Cover)`
    padding: 20px;
    backgroundColor: 'white'
`

export const RestaurantsInfoCard = ({ restaurant = {} }) => {
    const {
        name = "nhà hàng hải sản Huy Vu",
        icon,
        photos = ['https://images.foody.vn/res/g21/201010/s/foody-moc-rieu-nuong-992-636021404803259509.jpg'],
        address = '10 random street',
        isOpenNow = true,
        rating = 4,
        isCloseTemporarily } = restaurant;

    return (
        <RestaurantCard elevation={5} >
            <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
            <Title style={styles.title}>{name}</Title>
        </RestaurantCard>
    )
}
const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white', margin: '2%'
    },
    cover: {
        padding: 20,
        backgroundColor: 'white'
    },
    title: {
        padding: 16
    }
})