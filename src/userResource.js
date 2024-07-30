import { useEffect, useState } from 'react'
import axios from 'axios'

function useResource(resourcePath) {
    const [resource,setResource] = useState(null)

    useEffect(()=>{
        (async()=>{
            const response = await axios(resourcePath)
            setResource(response.data)
        }
        )()
    },[resourcePath])

  return resource;
}

export default useResource