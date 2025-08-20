import React, { useEffect, useState } from 'react'

export default function useFetch(url) {

    const [data, setData] = useState(null);
    const [Loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
console.log(data);

    useEffect(() => {
        const getData = async () => {
            setLoading(true);

            try {
                const req = await fetch(url)

                if (!req.ok) {
                    throw new Error("Something went wrong");
                }

                const data = await req.json()
                setData(data)
            } catch (error) {
                setError(error.message)
                console.log(error.message);
            }
            finally{
                setLoading(false)
            }

        }

        getData()
    }, [url])
    return {data, Loading, error}
}
