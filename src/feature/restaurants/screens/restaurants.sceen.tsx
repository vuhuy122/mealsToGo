import React from 'react'
import { SafeAreaView, StatusBar, View } from 'react-native'
import { Searchbar } from 'react-native-paper'
import styled from 'styled-components/native'
import { RestaurantsInfoCard } from '../../../components/restaurants-info-card'

const SafeArea = styled(SafeAreaView)`
    flex: 1;
    ${StatusBar.currentHeight && `marginTop:${StatusBar.currentHeight}px`}
`
const SearchView = styled(View)`
    padding: 15px
`
export const RestaurantsScreen = () => (
    <SafeArea >
        <SearchView >
            <Searchbar />
        </SearchView>
        <View style={{ flex: 1 }}>
            <RestaurantsInfoCard />
        </View>
    </SafeArea>
)