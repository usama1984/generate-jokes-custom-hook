import { useRef, useState } from "react";
import "./App.css";
import useRandomJoke from "./useRandomJoke";

function App() {
    const firstNameRef = useRef(null);
    const lastNameRef = useRef(null);

    const [firstName, setFirstName] = useState("steve");
    const [lastName, setLastName] = useState("jobs");
    const joke = useRandomJoke(firstName, lastName);

    const generateJoke = (e) => {
        e.preventDefault(); //prevent the page from refreshing after submit the form
        setFirstName(firstNameRef.current.value);
        setLastName(lastNameRef.current.value);
    };

    return (
        <div className="App">
            <h1>The Joke Generator</h1>
            <h2>{joke}</h2>
            <form>
                <input placeholder="Enter FirstName" ref={firstNameRef} />
                <input placeholder="Enter LastName" ref={lastNameRef} />
                <button onClick={generateJoke}>Generate Joke</button>
            </form>
        </div>
    );
}

export default App;
