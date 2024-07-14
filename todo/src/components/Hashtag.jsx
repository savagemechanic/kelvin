import { useState } from "react"

export default function Hashtag (){
    const [sent, setSent] = useState('')
    const [hash, setHash] = useState('')
    function gen2(sentence){
        let words = sentence.split(' ')
    
        let longest = ''
        let max = 0
        for (let word of words) {
            if (word.length > max) {
                max = word.length
                longest = word
            }
        }
    
        words.push('#'+longest)
        return words.join(' ')
    }
    function handleClick(){
        setHash(gen2(sent))
    }
    return (
        <>
            <h1>
                Hashtag App
            </h1>
            <input placeholder="Enter text"
             type="text"
             onChange={(e)=>setSent(e.target.value)} 
             value={sent}></input>
            <button onClick={handleClick} >Hashtagify</button>
            <p>{hash}</p>
        </>
    )
}