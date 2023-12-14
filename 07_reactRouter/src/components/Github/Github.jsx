import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    // const data = useLoaderData()
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/Shubham84095')
        .then(Response => Response.json())
        .then(data => setData(data));
    },[])
  return (
    <div className='text-center text-3xl m-4 bg-slate-400 text-black py-5'>
        Github Followers : {data.followers}
        <div> 
            <img src={data.avatar_url} alt="Git Picture" className='h-fit w-fit inline py-5 justify-center' />
        </div>
    </div>
  )
}

export default Github

// export const GithubInfoLoader = async () => {
//     const response = await fetch('https://api.github.com/users/Shubham84095')
//     return response.json();
// }