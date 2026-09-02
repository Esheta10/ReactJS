import {createContext, useContext, useState, useEffect} from "react"
import api from "../config/axios";

// create context
// provide context
// use context

const NewsContext = createContext();

const NewsContextProvider = ({children}) => {

    const [news, setNews] = useState([]);
    
    const fetchNews = async (url="/everything?q=india") => {

        try {
                const response = await api.get(`${url}&apiKey=${import.meta.env.VITE_API_KEY}`)
                const articles = response.data.articles ?? []
                setNews(articles)
                return articles
        } catch(error){
            console.log(error)
            return []
        }
    
  }

   const value = {
        news,
        setNews,
        fetchNews
    }
  
    useEffect(()=>{
        fetchNews();
    }, [])

    return (
        <NewsContext.Provider value={value}>
            {children}
        </NewsContext.Provider>
    )
}

const useNewsContext = () => {
    return useContext(NewsContext)
}

export {NewsContextProvider, useNewsContext}