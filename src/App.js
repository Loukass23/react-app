import React from 'react'
import Form from './components/Form'
import FuncComp from './components/FuncComp'
import List from './components/List'
import ListItem from './components/ListItem'
import CharacterList from './pages/CharacterList'
import RenderTest from './utils/RenderTest'

const number = 8
const element = <p>Test {number}</p>
function App() {
    return (
        <div>
            <h2>Fun with React 🎉</h2>
            {/* <ListItem character={{ name: "Lucas" }} />
            <List /> */}
            {/* <Form /> */}
            {/* <FuncComp text="hello" /> */}
            {/* <FuncComp text="hi" /> */}
            {/* {element} */}
            {/* <RenderTest /> */}
            <CharacterList />
        </div>
    )
}

export default App