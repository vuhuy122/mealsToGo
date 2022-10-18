import React, { useContext, useEffect, useState } from "react";
import { Platform, View } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { LocationContext } from "../sevices/location/location.context";


export const Search = (props) => {
    const { keyword, search }: any = useContext(LocationContext)
    const [searchQuery, setSearchQuery] = useState(keyword);
    useEffect(() => {
        search(keyword)
    }, [])
    return (
        <Searchbar
            // placeholder="Search"
            value={searchQuery}
            onChangeText={(text) => setSearchQuery(text)}
            onSubmitEditing={() => search(searchQuery)}
        />
    )
}