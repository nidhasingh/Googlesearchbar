import React from 'react';
import {FaSistrix, FaMicrophone} from "react-icons/fa";
import { key, cx } from "../API";
import axios from "axios";
import Show from "./Show";

const Searchpage =(props) => {
    const goBack =() =>{
        props.history.push("/");
    };
    const [state,setState] = React.useState(props.location.state ? props.location.state: "");
    const [results, setResults] = React.useState([]);
    const [info, setInfo] = React.useState("");
    const googlesearch = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.get(
          `https://www.googleapis.com/customsearch/v1?key=${key}&cx=${cx}&q=${state}`
        );
        if (response) {
          setResults(response.data.items);
          setInfo(response.data.searchInformation);
        }
      } catch (error) {
        console.log(error);
      }
    };
    React.useEffect(() => {
      async function getPosts() {
        if (props.location.state) {
          try {
            const response = await axios.get(
              `https://www.googleapis.com/customsearch/v1?key=${key}&cx=${cx}&q=${state}`
            );
            if (response) {
              setResults(response.data.items);
              setInfo(response.data.searchInformation);
            }
          } catch (error) {
            console.log(error);
          }
        }
      }
      getPosts();
    }, []);
   
    return(
        <div className="Searchpage">
            <div className="search__form">
                <div className="search__logo">
                    <img src="/images/small.png" alt="logo" onClick={goBack}/>
                </div>
                <div className="search__inputbar">
                <form className="form__home" onSubmit={googlesearch} >
                    <input type="text" className="home__input" value={state} onChange={(e)=>setState(e.target.value)} />
                    <FaSistrix className="icon_search" />
                    <FaMicrophone className="icon__microphone"/>
                 </form>
                </div>
            </div>
            <Show results={results} />
            
        </div>
    )

}
export default Searchpage;
