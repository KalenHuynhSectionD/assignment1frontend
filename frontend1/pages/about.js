import { useState } from 'react';
//this creates the react component to add function
import styles from '../styles/Home.module.css';
//this lets the specfic style.css to connect to the page to allow styling to happen

export default function About() {
  const [showDetails, setShowDetails] = useState(false);
  //showing of details when this function is being interacted with

  return (
    <div className={styles.container}>
      <h1>About Us</h1>
      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>
      {showDetails && <p>This is what makes us special, this pop-up! Cool right???</p>}
    </div>
  );
}
//the following lines of are the addition in components, functions, and adding of states/reacts
//p is for paragraph so the text shown 