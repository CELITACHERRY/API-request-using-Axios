import React,{ useState} from "react";
import Axios from "axios";
import "./App.css";

function App() {

  const [quote, setQuote] = useState("");

  const getQuote = () => {
    Axios.get("http://ron-swanson-quotes.herokuapp.com/v2/quotes").then(
      (response) => {
        console.log(response);
        setQuote(response.data);
      }
    );
  };
  return (
    <div>
      Ron Swanson Quotes <button onClick={getQuote}>Get Quote</button>
    {quote}
    </div>
  );
}

export default App;
