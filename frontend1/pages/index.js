import Link from 'next/link';
//this creates the components of links for users to interact
import styles from '../styles/Home.module.css';
//this links the pages with a file with styling from a certain file
export default function Home() {
  return (
    //this makes a container to contain the home page 
    <div className={styles.container}>
      <h1>Welcome to My FrontEnd App</h1> 
      <nav className={styles.nav}>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </div>
  );
}
//going over the last line of code we have..
//h1 is the header of text, essentially the main text for the app which is FrontEnd in this case
//the link href is for the linking of pages which is the about and contact page so that users can navigate to other pages 