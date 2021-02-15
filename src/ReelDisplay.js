function ReelDisplay({reel}) {
    return(
        reel.map((reel, idx) => <div key={idx} className='Reel_display' style={{backgroundColor: reel}}></div>)
    ) 

}

export default ReelDisplay;