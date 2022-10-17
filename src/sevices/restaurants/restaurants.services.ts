import { mockImages, mocks } from "./mock"
import camelize from 'camelize-ts'

export const restaurantsRequest = (location: string = "51.219448,4.402464") => {
    return new Promise(((resolve, reject) => {
        const mock = mocks[location]
        if (!mock) {
            reject('not Found!')
        }
        resolve(mock)
    }))
}
export const restaurantsTransform = (result: any = []) => {
    console.log('mappedResults', result);

    const mappedResults = result?.results?.map((item: any) => {
        item.photos = item.photos.map((p) => {
            return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))]
        })
        return {
            ...item,
            isOpenNow: item.opening_hours && item.opening_hours.open_now,
            isCloseTemporarily: item.business_status === "CLOSED_TEMPORARILY"
        }
    })
    return camelize(mappedResults)
}
restaurantsRequest().then(restaurantsTransform).then(transform => console.log('transform', transform)).catch((err) => console.log(err))