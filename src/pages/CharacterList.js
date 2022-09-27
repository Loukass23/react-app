import { useEffect, useState } from 'react'
import ListItem from '../components/ListItem'

const CharacterList = () => {

    const [characters, setCharacters] = useState()
    const [character, setCharacter] = useState()
    const [page, setPage] = useState(1)
    const [show, setShow] = useState(false)

    useEffect(() => {

        const fetchData = async () => {
            const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
            const data = await response.json()
            console.log(data)
            setCharacters(data.results)
        }

        fetchData()

    }, [page])

    const handlePopUp = (e) => {
        console.log(e)
    }
    const handlePopUpHere = (clickedCharacter) => {
        console.log(clickedCharacter)
        setCharacter(clickedCharacter)
    }
    return (
        <>
            <div>CharacterList</div>
            {character && <p>{character.species}</p>}
            {characters && characters.map(character => {
                return (<>
                    <ListItem handlePopUp={handlePopUp} character={character} key={character.id} />
                    <button onClick={() => handlePopUpHere(character)}>Click me</button>
                </>)
            })}
            <button onClick={() => setPage(page + 1)}>next</button>

        </>
    )
}

export default CharacterList