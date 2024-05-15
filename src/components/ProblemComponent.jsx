import React,{ useState }  from 'react';
import './styles/ProblemComponent.css';
import Microsoft from './styles/Microsoft.png';
import Google from './styles/Google.jpg';
import Telegram from './styles/Telegram.png';
import Apple from './styles/Apple.png';
import Dell from './styles/Dell.png';
import Spotify from './styles/Spotify.png';
import LeetCode from './styles/LeetCode.png';
import GFG from './styles/GFG.svg';


export default function ProblemComponent() {
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };
  const hideLogos = () => {
    setExpanded(false);
  };


  return (
    <div className='problem-rectangle' >
      <div style={{display:'flex',justifyContent:'space-between'}}>
        <h1 className='problem-rectangle-heading' style={{position:'relative'}}>Valid Sudoku</h1>
        <div className='problem-difficulty-indicator' style={{color:'#E3C525'}}>Medium</div>
      </div>
          <img className="problem-rectangle-company-logo" src={Microsoft} alt='Microsoft'></img>
          <img className="problem-rectangle-company-logo" src={Google} alt='Google'></img>
          <img className="problem-rectangle-company-logo" src={Telegram} alt='Telegram'></img>
          {expanded && (
            <>
              <img className="problem-rectangle-company-logo" src={Dell} alt='Telegram'></img>
              <img className="problem-rectangle-company-logo" src={Apple} alt='Apple'></img>
              <img className="problem-rectangle-company-logo" src={Spotify} alt='Spotify'></img>
              <p className="problem-rectangle-more-text" onClick={hideLogos}>Hide</p>              
            </>
          )}
          {!expanded && (
            <p className="problem-rectangle-more-text" onClick={toggleExpansion}>+2 more</p>
          )}
          <img className='GFG-logo-problem-solve-rectangle' style={{height:'50px'}} src={GFG} alt='GFG'></img>

    </div>
  );
}
