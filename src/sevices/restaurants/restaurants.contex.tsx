
import React, { useState, createContext, useEffect, useMemo, useContext } from "react";
import { LocationContext } from "../location/location.context";

import { restaurantsRequest, restaurantsTransform } from "./restaurants.services";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }: any) => {
    const [restaurant, setRestaurant] = useState<any>([])
    const [isLoading, setIsloading] = useState<boolean>(false)
    const [Error, setError] = useState<any>(false)

    const { location }: any = useContext(LocationContext)

    const retrieveRestaurants = (loc) => {
        setIsloading(true)
        setRestaurant([])
        setTimeout(() => {
            restaurantsRequest(loc).then(restaurantsTransform).then((result) => {
                setRestaurant(result)
                setIsloading(false)
            }).catch((err: any) => {
                setIsloading(false)
                setError(err);
            });
        }, 2000);
        return
    }
    useEffect(() => {
        if (location) {
            const locationString = `${location.lat},${location?.lng}`;
            retrieveRestaurants(locationString)
        }
    }, [location])
    return (

        <RestaurantsContext.Provider value={{
            restaurants: restaurant,
            isLoading: isLoading,
            Error: Error
        }}>
            {children}
        </RestaurantsContext.Provider>
    )
};
