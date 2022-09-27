import { mocks } from "./mock"
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
restaurantsRequest().then((res) => {
    console.log('res', camelize(res));
}).catch((err) => console.log(err))