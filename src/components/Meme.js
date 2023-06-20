import React from 'react'
import { memesData } from '../memesData'

export const Meme = () => {

    const getMemeImage = () => {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        console.log(url)
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
        </main>
    )
}
