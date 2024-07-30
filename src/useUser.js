import { useEffect, useState } from 'react'
import axios from 'axios'

function useUser(userId) {
    const [user,setUser] = useState(null)

    useEffect(()=>{
        (async()=>{
            const response = await axios(`users/${userId}`)
            setUser(response.data)
        }
        )()
    },[userId])

  return user;
}

export default useUser