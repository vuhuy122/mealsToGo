import React, { createContext, useState, useEffect } from "react";
import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }: any) => {
    const [keyword, setkeyword] = useState<any>('san francisco')
    const [location, setlocation] = useState<any>([])
    const [isLoading, setIsloading] = useState<boolean>(false)
    const [Error, setError] = useState<any>(false)
    const onSearch = (SearchKeyWord) => {
        if (!SearchKeyWord.length) {
            return
        }
        setkeyword(SearchKeyWord?.toLowerCase())
        setIsloading(true)
        locationRequest(keyword).then(locationTransform).then((result) => {
            setIsloading(false)
            setlocation(result)
            console.log('result', result);
        }).catch((err) => {
            setIsloading(false)
            setError(err)
            console.log('err', err);
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