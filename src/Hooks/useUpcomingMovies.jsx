import { useEffect } from "react"
import { API_OPTIONS } from "../Utils/constants"
import { useDispatch } from "react-redux"
import { addUpcomingMovies } from "../Utils/moviesSlice"

const useUpcomingMovies = ()=>{
    const dispatch = useDispatch()

    useEffect(()=>{
        getUpcomingMovies()
    },[])

    const getUpcomingMovies= async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS)
        const json = await data.json()
        dispatch(addUpcomingMovies(json.results))

    }

}

export default useUpcomingMovies