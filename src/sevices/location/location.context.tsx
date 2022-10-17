import React, { createContext, useState, useEffect } from "react";
import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }: any) => {
    const [keyword, setkeyword] = useState<any>('')
    const [location, setlocation] = useState<any>([])
    const [isLoading, setIsloading] = useState<boolean>(false)
    const [Error, setError] = useState<any>(false)
    const onSearch = (SearchKeyWord) => {
        setkeyword(SearchKeyWord?.toLowerCase())
        setIsloading(true)
        locationRequest(keyword).then(locationTransform).then((result) => {
            setIsloading(false)
            setlocation(result)
        }).catch((err) => {
            setIsloading(false)
            setError(err)
        })
    }
    return (
        <LocationContext.Provider value={{
            isLoading,
            Error,
            location,
            search: onSearch,
            keyword
        }}>
            {children}
        </LocationContext.Provider>
    )
}