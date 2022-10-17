
import React, { useState, createContext, useEffect, useMemo } from "react";

import { restaurantsRequest, restaurantsTransform } from "./restaurants.services";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }: any) => {
    const [restaurant, setRestaurant] = useState<any>([])
    const [isLoading, setIsloading] = useState<boolean>(false)
    const [Error, setError] = useState<any>(false)

    const retrieveRestaurants = () => {
        setIsloading(true)
        return
    }
    useEffect(() => {
        retrieveRestaurants()
        setTimeout(() => {
            restaurantsRequest().then(restaurantsTransform).then((result) => {
                setRestaurant(result)
                setIsloading(false)
            }).catch((err: any) => {
                setIsloading(false)
                setError(err);
            });
        }, 2000);
    }, [])
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
