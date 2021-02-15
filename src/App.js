import { useState } from 'react';
import './App.css';
import ReelDisplay from './ReelDisplay'
import BetButtons from './BetButtons'

function App() {
  // STATE VARIABLES //
  const [total, setTotal] = useState(10)
  const [reel, setReel] = useState(['white', 'white', 'white', 'white', 'white'])
  const [bet, setBet] = useState(0)
  const [result, setResult] = useState('')

  // OTHER VARIABLES //
  const colors = ['red', 'green', 'blue', 'yellow']

  // EVENT HANDLERS //
  const resetState = () => {
    setTotal(10);
    setReel(['white', 'white', 'white', 'white', 'white']);
    setBet(0)
    setResult('')
  }

  const handleSubmit = (e) => {
    setResult('')
    let newTotal = total - bet
    setTotal(total - bet)
    e.preventDefault()
    const newReel = []
    for(let i = 0; i < reel.length; i++) {
      let hash = Math.floor(Math.random() * 4)
      newReel.push(colors[hash])
    }
    setReel(newReel)
    generateResults(newReel, newTotal)
    setBet(0)
  }

  // AUX FUNCTIONS //
  const generateResults = (arr, roundTotal) => {
    let streakColor = ''
    let currStreak = 1
    let winningStreak = 1

    for(let i = 0; i < arr.length; i++) {
      if(arr[i] === arr[i + 1]) {
        currStreak++
        if(currStreak > winningStreak) {
          winningStreak = currStreak
          streakColor = arr[i]
        }
      }
      else {currStreak = 1}
    }

    if(winningStreak >= 3) {
      const reward = (bet * winningStreak)
      setResult(`Winner! Streak of ${winningStreak} on ${streakColor} for $${reward}.`)
      setTotal(roundTotal + reward)
    } else if(roundTotal === 0){
      setResult(`Sorry! You lost all your money.`)
    } else {
      setResult(`Sorry! You lost your bet of $${bet}.`)
    }
  }

  return (
    <div className='App'>
      <h1>Test Your Luck</h1>
      <h3>Total: ${total}</h3>
      <p className='Results'>{result}</p>
      <div className='Reel'>
        <ReelDisplay reel={reel}/>
      </div>
      <form className='Controls' onSubmit={handleSubmit}>
        <div className='Bet'>
          <label htmlFor='bet'>Bet: $</label>
          <input type='number' id='bet' name='bet' min='0' max={total} value={bet} onChange={e => setBet(parseInt(e.target.value))}/>
        </div>
        <BetButtons updateBet={setBet} bet={bet} total={total}/>
        {total === 0  
          ? <button type='button' onClick={resetState}>Reset</button>
          : <button type='submit' disabled={bet === 0 || bet > total ? true : false}>SPIN</button>
        }
      </form>
      <p className='Error'></p>
    </div>
  );
}

export default App;
