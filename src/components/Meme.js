import React from 'react'

export const Meme = () => {
    return (
        <main>
            <form className='form'>
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
                <button className='button'>
                    Get a new meme image 🖼
                </button>
            </form>
        </main>
    )
}
