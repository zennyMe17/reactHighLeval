import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

function Tag() {

    // const [gif,setgif] = useState('');
    // const [loading,setLoading] = useState(false);
    const [tag,setTag] = useState("car");
    const {gif,loading,fetchData} = useGif(tag);

    // async function fetchData() {
    //     setLoading(true);
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    //     const {data} = await axios.get(url);
    //     const imageSource = data.data.images.downsized_large.url;
    //     console.log("Im in Tag.js")
    //     console.log(imageSource);
    //     setgif(imageSource)
    //     setLoading(false);
    // }

    // useEffect(()=>{
    //     fetchData();
    // },[])

    


    function changeHandler(event){
        setTag(event.target.value);
    }

    return ( <div className="w-1/2 h-[500px] bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
        <h1 className="text-2xl underline uppercase font-bold mt-[15px] mb-[20px]">Random {tag} Gif</h1>
        {loading ? (<Spinner />) : (<img src={gif} width="450" alt="pat nahi bhai" />)}
        <input 
        className="w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center"
        onChange={changeHandler}
        value={tag}
        />
        <button onClick={()=>fetchData(tag)} className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg">Generate</button>
    </div> );
}

export default Tag;