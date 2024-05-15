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
import { IoNewspaperOutline, IoNewspaper } from 'react-icons/io5';
import { MdAddCircleOutline, MdAddCircle } from "react-icons/md";
import { FaStar,FaRegStar} from "react-icons/fa";
import { IoBookmarkOutline,IoBookmark } from "react-icons/io5";


export default function ProblemComponent() {
  const [expanded, setExpanded] = useState(false);
  const [showText, setShowText] = useState(false);
  const [hoveredSolution, setHoveredSolution] = useState(false);
  const [hoveredAdd, setHoveredAdd] = useState(false);
  const [hoveredStar, setHoveredStar] = useState(false);
  const [hoveredBookMark, setHoveredBookMark] = useState(false);
  const toggleExpansion = () => {
    setExpanded(!expanded);
  };
  const hideLogos = () => {
    setExpanded(false);
  };
  const handleMouseEnterSolution = () => {
    setHoveredSolution(true);
    setShowText(true);
  };

  const handleMouseLeaveSolution = () => {
    setHoveredSolution(false);
    setShowText(false);
  };

  const handleMouseEnterAdd = () => {
    setHoveredAdd(true);
    setShowText(true);
  };

  const handleMouseLeaveAdd = () => {
    setHoveredAdd(false);
    setShowText(false);
  };
  const handleMouseEnterStar = () => {
    setHoveredStar(true);
    setShowText(true);
  };

  const handleMouseLeaveStar = () => {
    setHoveredStar(false);
    setShowText(false);
  };
  const handleMouseEnterBookMark = () => {
    setHoveredBookMark(true);
    setShowText(true);
  };

  const handleMouseLeaveBookMark = () => {
    setHoveredBookMark(false);
    setShowText(false);
  };
  return (
    <div className='problem-rectangle' >
      <div style={{display:'flex',justifyContent:'space-between'}}>
        <h1 className='problem-rectangle-heading' style={{position:'relative'}}>Valid Sudoku</h1>
        <div className='problem-difficulty-indicator' style={{color:'#E3C525'}}>Medium</div>
      </div>
      <div style={{marginLeft:'1.5rem'}}>
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
        </div>
          <div style={{display:'flex'}}> 
          <img className='GFG-logo-problem-solve-rectangle' style={{height:'30px'}} src={GFG} alt='GFG'></img>
          <img className='GFG-logo-problem-solve-rectangle' style={{height:'40px',marginBottom:'-0.3rem'}} src={LeetCode} alt='LeetCode'></img>
          {/* <div 
            className="icon-container"
            onMouseEnter={() => setShowText(true)}
            onMouseLeave={() => setShowText(false)}
            style={{marginLeft:'1rem'}}
          >
            <IoSolutionOutline 
              style={{ height: 'auto', width: '35px', cursor: 'pointer'}}
              title={showText ? "Solution" : ""}
            />
           
          </div> */}
            <div 
            className="icon-container"
            onMouseEnter={handleMouseEnterSolution}
            onMouseLeave={handleMouseLeaveSolution}
            style={{ 
              transition: 'transform 0.3s ease-in-out', 
              transform: hoveredSolution ? 'scale(1.1)' : 'scale(1)', 
              display: 'inline-block',
              marginLeft:'1.5rem'
            }}
          >
            {hoveredSolution ? 
              <IoNewspaper style={{ height: 'auto', width: '35px', cursor: 'pointer'}} title={showText ? "Solution" : ""} /> : 
              <IoNewspaperOutline style={{ height: 'auto', width: '35px', cursor: 'pointer'}} />
            }
          </div>
          <div 
            className="icon-container"
            onMouseEnter={handleMouseEnterAdd}
            onMouseLeave={handleMouseLeaveAdd}
            style={{ 
              transition: 'transform 0.3s ease-in-out', 
              transform: hoveredAdd ? 'scale(1.1)' : 'scale(1)', 
              display: 'inline-block',
              marginLeft:'1.5rem'
            }}
          >
            {hoveredAdd ? 
              <MdAddCircle style={{ height: 'auto', width: '35px', cursor: 'pointer'}} title={showText ? "Add Notes" : ""} /> : 
              <MdAddCircleOutline style={{ height: 'auto', width: '35px', cursor: 'pointer'}} />
            }
          </div>
          <div 
            className="icon-container"
            onMouseEnter={handleMouseEnterStar}
            onMouseLeave={handleMouseLeaveStar}
            style={{ 
              transition: 'transform 0.3s ease-in-out', 
              transform: hoveredStar ? 'scale(1.1)' : 'scale(1)', 
              display: 'inline-block',
              marginLeft:'1.5rem'
            }}
          >
            {hoveredStar ? 
              <FaStar style={{ height: 'auto', width: '35px', cursor: 'pointer'}} title={showText ? "Add to Favourites" : ""} /> : 
              <FaRegStar style={{ height: 'auto', width: '35px', cursor: 'pointer'}} />
            }
          </div>
          <div 
            className="icon-container"
            onMouseEnter={handleMouseEnterBookMark}
            onMouseLeave={handleMouseLeaveBookMark}
            style={{ 
              transition: 'transform 0.3s ease-in-out', 
              transform: hoveredBookMark ? 'scale(1.1)' : 'scale(1)', 
              display: 'inline-block',
              marginLeft:'1.5rem'
            }}
          >
            {hoveredBookMark ? 
              <IoBookmark style={{ height: 'auto', width: '35px', cursor: 'pointer'}} title={showText ? "Bookmark" : ""} /> : 
              <IoBookmarkOutline style={{ height: 'auto', width: '35px', cursor: 'pointer'}} />
            }
          </div>
          <div className='problem-completion-indicator' style={{color:'black'}}>Status</div>
          </div>
    </div>
  );
}
