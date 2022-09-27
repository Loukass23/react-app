import { useState, useEffect } from 'react'



const FuncComp = (props) => {
    const greeting = props.text
    const { text } = props

    const [msg, setMsg] = useState("initial")

    const [show, setShow] = useState(false)

    console.log('msg', msg)

    useEffect(() => {
        console.log("use effect")
        setMsg("in use effect")

    }, [])

    function handleClick(e) {
        console.log('Click', e)
        setShow(true)
    }

    // const greetingComp = () => {
    //     if (show) {
    //         return (<p>{greeting}</p>)
    //     }
    //     else return <p>Not Showing</p>

    // }

    return (
        <>
            {/* {greetingComp()} */}
            {show === true && <p>{greeting}</p>}
            {show ? <p>{greeting}</p> : <p>Don't show</p>}

            <button onClick={handleClick}>Click Me</button>
        </>
    )
}


export default FuncComp