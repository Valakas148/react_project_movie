import axios from "axios";
import {baseUrl} from "../urls/urls";

const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {}
})

axiosInstance.interceptors.request.use(req => {
    const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OWVlM2I5MDVhZDhiNDZmYTVhYjFiMjQwZGM3MDcxMCIsInN1YiI6IjY2NzE5YjNiMzgzYWRiYWZmMGUyMmQ2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.swu_TuHqatTAHaBo55BWDsUk10ntVFQl1CYjpjGfiYw'
    req.headers.Authorization = `Bearer ${accessToken}`

    return req
})

export {
    axiosInstance
}