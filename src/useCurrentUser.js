import { useEffect, useState } from 'react'
import axios from 'axios'

function useCurrentUser() {
    const [user,setUser] = useState(null)

    useEffect(()=>{
        (async()=>{
            const response = await axios('/current-user')
            setUser(response.data)
        }
        )()
    },[])

  return user;
}

export default useCurrentUser