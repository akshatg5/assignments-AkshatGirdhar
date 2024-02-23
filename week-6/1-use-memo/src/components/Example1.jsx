import React,{useMemo, useState} from "react";

//creating a logic for creating a 1000 words 

// creating a list of random words that I want to use in this words list
const words = ["hi","hello","sports","basketball","cricket","tennis","football"]
const TOTAL_LINES = 1000;
const ALL_WORDS = []  // initializing an array that will store all the words?

for (let i=0;i < TOTAL_LINES;i++) { 
    let sentence = ""; //empty sentence
    for (let j =0; j < words.length;j++) {
        sentence += (words[Math.floor(words.length*Math.random())])
        sentence += " "
    }
    ALL_WORDS.push(sentence)
}

export function Example1 () {
    const [sentences, setSentences] = useState(ALL_WORDS);
    const [filter, setFilter] = useState("");

    const filteredSentences = useMemo(() => {
        return sentences.filter(x => x.includes(filter))
    },[sentences,filter]) // initializing array needs to know what values to look at for changes, when these values change we will  

    return <div>
        <input type="text" onChange={(e) => {
            setFilter(e.target.value)
        }}></input>
        {filteredSentences.map(word => <div>
            {word}    
        </div>)}
    </div>
}
