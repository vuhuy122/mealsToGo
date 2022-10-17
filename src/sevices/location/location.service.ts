import camelize from "camelize-ts";
import { locations } from "./location.mock";
export const locationRequest = (searchTerm: any) => {
    return new Promise((resolve, reject) => {
        const locationMock: object = locations[searchTerm];
        if (!locationMock) {
            reject('not found!!')
        }
        resolve(locationMock)
    })
};

export const locationTransform = (result: any) => {
    const formattedResponse: any = camelize(result)
    const { geometry = {} } = formattedResponse.results[0]
    const { lat, lng } = geometry.location

    return { lat, lng }
};