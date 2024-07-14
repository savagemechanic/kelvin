import { useState } from "react"

export default function RandomQuote(){
    const quotes= [
        'in the land of the blind, the man with one eye is king',
        'what is a man to a king, a king to a god, a god to an unbeliever?',
        'in the pursuit of success, be sure you are happy with the road traveled',
        'power is an illusion, it resides where men believe it does'
    ]
    const [quote, setQuote]= useState('')
    function handleClick(){
        let i = Math.floor(Math.random() * (quotes.length))
        console.log(i)
        console.log(quotes[i])
        setQuote(quotes[i])
    }
    return (
        <>
        <h1>Random Quote Generator</h1>
        <button onClick={handleClick}>Generate</button>
        <p>{quote}</p>
        </>
    )
}