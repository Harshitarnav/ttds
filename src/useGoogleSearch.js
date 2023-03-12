import { useState, useEffect} from 'react'
import API_KEY from './keys'

const CONTEXT_KEY  = "e2efc428cb6324710";

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async() => {
      console.log("1", term)

        await fetch(
            "http://127.0.0.1:8080/search_and_return_results?term="+`${term}`
       
        )
        .then((res) => res.json().then((result)=>{
              console.log(result);
              setData(result)

        })
        );
    }

    fetchData();
  }, [term])

  return { data }
};

export default useGoogleSearch