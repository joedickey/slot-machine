function BetButtons({updateBet, bet, total}) {
    const isDisabled = (val) => {
        return bet + val > total ? true : false
    }
    return (
        <div className='BetButtons'>
            <button  className='BetButtons_val' type='button' onClick={() => updateBet(bet + 1)} disabled={isDisabled(1)}>+$1</button>
            <button className='BetButtons_val' type='button' onClick={() => updateBet(bet + 5)} disabled={isDisabled(5)}>+$5</button>
            <button className='BetButtons_val' type='button' onClick={() => updateBet(bet + 10)} disabled={isDisabled(10)}>+$10</button>
            <button className='BetButtons_val' type='button' onClick={() => updateBet(bet + 50)} disabled={isDisabled(50)}>+$50</button>
        </div>
    )
}

export default BetButtons;