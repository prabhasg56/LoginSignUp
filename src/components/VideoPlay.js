import axios from 'axios';
import React, { useEffect, useState } from 'react'

const VideoPlay = () => {
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = "https://fxojmluid9.execute-api.ap-south-1.amazonaws.com/Prod/api/engt/getfeeds_v1";

        const headers = {
          "Content-Type": "application/json",
          "x-api-key": "MXqO3cDcr492OTPGZZAot7akPvLmfKbA4bKt5Ryr",
          "x-tenant-key": "BLAASH1122"

        }

        const reqBody = { "Index": 1, "ContentType": [2], "ProductCategory": [], "PlayListCode": "XL7OXUUX_638264173348576143", "IsTagged": false }

        const response = await axios.post(apiUrl, reqBody, {
          headers: headers
        })

        setFetchedData(response.data.data.Feeds)
      } catch (err) {
        console.log(err);
      }
    }

    fetchData();
  }, [])
  console.log(fetchedData)
  return (
    <div className='con'>
      {fetchedData.map((item, key) => {
        return (<div>

          <video width="100%" height="100%" autoPlay
            preLoad="auto" loop muted key={key}>
            <source src={item.Thumbnail_URL} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>)
      })}

    </div>
  )
}

export default VideoPlay;
