import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';

const API = () => {
    const [data, setData] = useState([]);

    useEffect(()=>{
        const fetchData = async () => {
            const url = "https://jsonplaceholder.typicode.com/posts"

           try{
            const response = await axios.get(url)

            setData(response.data)
           }catch(err) {
            console.log(err)
           }

        }

        fetchData();
    },[])
  return (
    <div>
        {
            data.map((item) => {
                return(
                    <ul>
                        <li>
                            {item.title}
                        </li>
                    </ul>
                )
            })
        }
    </div>
  )
}

export default API;
