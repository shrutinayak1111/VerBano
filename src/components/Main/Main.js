import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'
const Main = () => {
const{onSent,recentPrompt,showResult,loading,resultData,setInput,input}=useContext(Context)

const handleCardClick = (content) => {
    setInput(content);
    onSent(content);
 };
  return (
   <div className="main">
    <div className="nav"><p>VerBano</p>
   
   <img src={assets.user_icon} alt="" />
   
   
    </div>
        
        <div className="main-container">
            {!showResult?<>
                <div className="greet">
                <p><span>Hello,Peeps.</span></p>
                <p>How can I assist you today</p>
            </div>
            <div className="cards">
                <div className="card"  onClick={() => handleCardClick("Best place to visit in India")}>
               
          <p>Best place to visit</p>
          <p>in India</p>
          <img src={assets.compass_icon} alt="" />
        </div>
                
                <div className="card" onClick={()=>handleCardClick("best selling books with their author")}>
                 
                    <p >best selling books </p>
                    <p>with their author</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card" onClick={()=>handleCardClick("Tell me a joke.")}>
                    <p>Tell me a joke.</p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div className="card" onClick={()=>handleCardClick("write a code to multiply two number")}>
                    <p>write a code to multiply two number</p>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div>

            </>
            : <div className="result">
            <div className="result-title">
                <img src={assets.user_icon} alt="User Icon" />
                <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
                <img src={assets.gemini_icon} alt="Gemini Icon" />
                {loading?<div className='loader'>
                    <hr />
                    <hr /><hr />
                </div>: <p dangerouslySetInnerHTML={{__html:resultData}}></p>}
           
            </div>
        </div>
    
            }
            
            <div className="main-bottom">
                <div className="search-box">
                    <input onChange={(e)=>setInput(e.target.value)} value={input} qtype="text" placeholder='Enter a prompt' onKeyDown={(e) => {
    if (e.key === 'Enter') {
      onSent(input);
    } }} />
<div>
    <img src={assets.gallery_icon} alt="" />
    <img src={assets.mic_icon} alt='' />
    {input?<img onClick={() => onSent(input)} src={assets.send_icon} alt="" />:null}

</div>

                </div>
              <p className="bottom-info">
              VerBano may display inaccurate info, including about people, so double-check its responses. 
              </p>
            </div>
        </div>
       </div>
  
  )
}

export default Main;
