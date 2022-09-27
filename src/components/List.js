import React from 'react'

import data from "../data/data.json"
import ListItem from './ListItem'

const List = () => {
    const characters = data.results
    console.log('characters', characters)


    return (
        <div>
            <h1>Characters</h1>
            {characters.map((character, i) => {
                return <ListItem character={character} key={character.id} />
            })
            }

        </div>
    )
}

export default List
