import { useEffect, useRef, useState } from 'react'


export const useFetch = (url) => {
    const isMounted = useRef(true);
        useEffect(() => {
            
            return () => {
                isMounted.current = false;
            }
        }, [])
    
    const [state, setstate] = useState({data:null,loading:true,error:null});
    useEffect(() => {
        
        setstate({data:null,loading:true,error:null});
        fetch(url)
        .then(resp=>resp.json())
        .then(data=>{
            
                
            
            if (isMounted.current) {
                 setstate({
                loading:false,
                error:null,
                data
            });
            }
       
        }).catch(()=>{
            setstate({data:null,
            loading:false,
            error:'no se puede cargar esta info'})
        })
         
       
    }, [url])
    return state;
}
