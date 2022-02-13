import React, { useEffect, useState } from 'react'

const Cards = () => {

    const [getCharacters, setCharacters] = useState([])

    useEffect(() => {
        fetchCharacters().then((response) => setCharacters(response)).catch((error) => console.error('error', error))
        return () => setCharacters([])
    }, [])

    // Fetching All Characters Dynamically...
    const fetchCharacters = async () => {
        const fetchChar = await fetch(`https://rickandmortyapi.com/api/character`)
        const result = await fetchChar?.json()
        return result?.results
    }

    return (
        <div>
            {
                getCharacters?.length && getCharacters?.map((item, index) => {
                    return (
                        <div
                            key={`${item?.id}-${index}`}
                            style={{
                                backgroundColor: '#CACACA',
                                flexDirection: 'row',
                                width: 500,
                                height: 300,
                                justifyContent: 'center',
                                alignItems: 'center',
                                margin: 20,
                                padding: 20,
                                borderRadius: 10
                            }}>
                            <img src={`${item?.image}`}
                                style={{ width: '50%' }}
                            />

                            <h3>{item?.name}</h3>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Cards