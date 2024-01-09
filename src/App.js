
import { useState } from 'react';
import './App.css';

function App() {
  const [count,setCount]=useState(0)
  const [prevcount,setPrevcount] = useState(0)
  let add = ()=>{
    if(count < 23)
    {
    setCount(count + 1 )
    setPrevcount(count)
    }else{
      setCount("sorry img is not available")
    }
    if(count == "sorry img is not available"){
      setCount(0)
    }
  }
  let remove = () => {
    if(count !== "sorry img is not available" && count > 0){
      setCount(count -1)
    }else{
       setCount(prevcount)
    }
    if(count == 0){
      setCount("sorry img is not available")
    }else if(count =="sorry img is not available"){
      setCount(23)
    }
  }

  return (
    <div className="App m-2">

      <h1>{count}</h1>
      <button onClick={add}> ++ </button>
      <button onClick={remove}> -- </button>

    </div>
  );
}

export default App;
