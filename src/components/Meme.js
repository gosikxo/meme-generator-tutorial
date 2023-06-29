import React, { useState } from 'react'
import { memesData } from '../memesData'

export const Meme = () => {
    const [memeImage, setMemeImage] = useState('')

    const getMemeImage = () => {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMemeImage(url)
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
                <button onClick={getMemeImage} className='button'>
                    Get a new meme image 🖼
                </button>
            </div>
            <img className='meme-img' src={memeImage} alt="Meme" />
        </main>
    )
}
