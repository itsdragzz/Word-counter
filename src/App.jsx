import { useState, useId } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0) // [current state, function that updates that state]


  const [counttext, setCountText] = useState(0)
  
  function handleClick() {
    setCount(count + 1)
  }

  function ThisButton({count, onClick}){
    return(
      <button onClick={handleClick}>
      Clicked {count} times
      </button>
    )
  }


  function handleSubmit(e){
    e.preventDefault(); //prevents brower from reloading the page

    //read the data
    const form = e.target; //gets the form
    const formData = new FormData(form) //Collects input from the form

    const formJson = Object.fromEntries(formData.entries()); //Converts form data into json
    // Access the textInput property from the data object
    // Count the words by splitting on whitespace and filtering empty strings
    const wordCount = formJson.textInput.split(/\s+/).filter(word => word.length > 0).length;
    console.log(wordCount) 
    setCountText(wordCount) //sets the word count to the state variable

    //now i need to display the result under the variable wordcount
  }
  

  return (
    <>
    <form method="post" onSubmit={handleSubmit}>
      <h1>Word counter project</h1>

      {/* <label  htmlFor={TextAreaId}> */}
      <label >
        
          <h2>Input text below</h2>
        <textarea
          name="textInput"
          placeholder="Type here..."
          rows="10" cols="50" wrap="soft"/>

      </label>


        
        {/* <ThisButton count={count} onClick={handleClick}/>*/}
        <button type = "submit" className="CountButton">Count words</button>

        <p> Word count is {counttext}</p>
        <p className="footer">
          My first react project!
        </p>
    </form>

    </>
  )
}

export default App


/*
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
*/