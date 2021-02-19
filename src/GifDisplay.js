import { useEffect, useState } from "react";

function GifDisplay ({displayGif}) {
    const [winGif, setWinGif] = useState('https://media.tenor.com/images/dc0f251d272fc029aac2dab8caca580c/tenor.gif')
    const [loseGif, setLoseGif] = useState('https://media.tenor.com/images/f631f0d7ae647124c440deaf8e648881/tenor.gif')

    return (
        <div className='GifDisplay'>
            {displayGif.length > 0
                ? (displayGif === 'win' 
                    ? <div className='GifDisplay_gif'><img src={winGif} width={300} height={200} alt='giphy'/><img src='https://www.gstatic.com/tenor/web/attribution/PB_tenor_logo_blue_horizontal.png' width={60} alt='Tenor'/></div>
                    : <div className='GifDisplay_gif'><img src={loseGif} width={300} height={200} alt='giphy'/><img src='https://www.gstatic.com/tenor/web/attribution/PB_tenor_logo_blue_horizontal.png' width={60} alt='Tenor'/></div>)
                : ''
            }
        </div>
    )
}

export default GifDisplay;

