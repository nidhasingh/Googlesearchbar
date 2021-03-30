import React from "react";
import {FaSistrix, FaMicrophone} from "react-icons/fa";


const Home = (props) => {
    const [state,setState] = React.useState("");
    const googleSearch=(e)=>{
        props.history.push({pathname:"/search",state});    
    }
    
    return(
        <div className="home">
            <div className="home__container">
              <div className="home__logo">
                    <img src="/images/googleLogo.png" alt="loggo" />
               </div>
                <form className="form__home" onSubmit={googleSearch}>
                    <input type="text" className="home__input" placeholder="Search Google or type a URL" onChange={(e)=>setState(e.target.value)} value={state}/>
                   <div className="home__groupp">
                      <input type="submit" className="search_btn" value="Google Search" />
                      <input type="submit" className="search_btn" value="I'm feeling lucky"/>
                    </div>
                    <FaSistrix className="icon_search"/>
                    <FaMicrophone className="icon__microphone"/>
                 </form>
            </div>
        </div>
    );
}
export default Home;