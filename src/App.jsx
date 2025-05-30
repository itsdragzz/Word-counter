import { useState, useEffect } from 'react'
import './App.css'

function App() {



  const [counttext, setCountText] = useState(0)

  const [AutoCounText, SetAutoCounText] = useState(0)



  function handleClick() {
    setCount(count + 1)
  }

  /*
  const [count, setCount] = useState(0) // [current state, function that updates that state]
  function ThisButton({ count, onClick }) {
    return (
      <button onClick={handleClick}>
        Clicked {count} times
      </button>
    )
  }
*/
  //const [text, setText] = useState('')  //this is for the useeffect hook
  /*
    useEffect(() => {
      const WcountAuto=formJson.textInput.split(/\s+/).filter(word => word.length > 0).length
      SetAutoCounText(WcountAuto)
    }, [text])
  */

  function handleChangeOfText(e) {
    //  setText(e.target.value)
    console.log(e.target.value)

    const WcountAuto = e.target.value.split(/\s+/).filter(word => word.length > 0).length

    SetAutoCounText(WcountAuto)
  }

  function handleSubmit(e) {
    e.preventDefault(); //prevents brower from reloading the page

    //read the data
    const form = e.target; //gets the form
    const formData = new FormData(form) //Collects input from the form

    const formJson = Object.fromEntries(formData.entries()); //Converts form data into json
    // Access the textInput property from the data object
    // Count the words by splitting on whitespace and filtering empty strings
    //cannot use e.target.value like in the function above (handleChangeOfText) since
    //the e.target does not have a value here since it is a onSubmit event
    const wordCount = formJson.textInput.split(/\s+/).filter(word => word.length > 0).length; 
    console.log(wordCount)
    setCountText(wordCount) //sets the word count to the state variable

    //now i need to display the result under the variable wordcount
  }


  return (
    <main>
      <form method="post" onSubmit={handleSubmit}>
        <h1>Word counter project</h1>

        {/* <label  htmlFor={TextAreaId}> */}
        <label >

          <h2>Input text below</h2>
          <textarea
            name="textInput"
            placeholder="Type here..."
            className="textarea"
            rows="10" cols="50" wrap="soft"
            onChange={handleChangeOfText}
          />

        </label>

        <h2>Auto count text is: {AutoCounText} </h2>
        <button type="submit">Count words</button>
        <h2> Click the button: word count is {counttext}</h2>
        {/* <ThisButton count={count} onClick={handleClick}/>*/}





        <p className="footer">
          My first react project!
        </p>
        
      </form>

    </main>
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