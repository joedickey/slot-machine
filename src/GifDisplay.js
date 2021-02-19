import { useEffect, useState } from "react";

function GifDisplay ({displayGif}) {
    const [winGif, setWinGif] = useState('https://media.tenor.com/images/dc0f251d272fc029aac2dab8caca580c/tenor.gif')
    const [loseGif, setLoseGif] = useState('https://media.tenor.com/images/f631f0d7ae647124c440deaf8e648881/tenor.gif')

    return (
        <div className='GifDisplay'>
            {displayGif.length > 0
                ? (displayGif === 'win' ? <img src={winGif} width='300px' height='200px' alt='giphy'/> : <img src={loseGif} width='300px' height='200px' alt='giphy'/>)
                : ''
            }
        </div>
    )
}

export default GifDisplay;

