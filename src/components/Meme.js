import React, { useState } from 'react'
import { memesData } from '../memesData'

export const Meme = () => {
    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg'
    })
    const [allMemeImages, setAllMemeImages] = useState(memesData)

    const getMemeImage = () => {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    return (
        <main>
            <div className='form'>
                <input
                    className='form-inputs'
                    type="text"
                    placeholder='Top text'
                />
                <input
                    className='form-inputs'
                    type="text"
                    placeholder='Bottom text'
                />
                <button
                    onClick={getMemeImage}
                    className='button'
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <img
                className='meme-img'
                src={meme.randomImage}
                alt="Meme"
            />
        </main>
    )
}
