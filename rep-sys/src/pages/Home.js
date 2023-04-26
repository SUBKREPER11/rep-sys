import logo from '../ZSE-banner.png';
import '../App.css';
// import { Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
//import { tasks } from '../tasks.json';

let tasks = require('../tasks.json');

// function listTasks() {
//   console.log(tasks);
//   let lst = [];
//   for (let [key, value] of Object.entries(tasks)) {
//     console.log(key);
//     console.log(value);
//     lst.push(`<li><a href="#${key}">${value}</a></li>`);
//   }
//   return lst;
// }

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>
          System zgłoszeń spraw uczniowskich
        </h2>
        <ol id="tasks">
          {/* {listTasks()} */}
          {
            Object.keys(tasks).map((key, value) => {
              return <li><a href={'#' + String(key)}>{tasks[key]}</a></li>
            })
          }
          {/* <li>Sprawy</li> */}
        </ol>
        <a
          className="App-link"
          href="/help"
          // target="_blank"
          rel="noopener noreferrer"
        >
          Uzyskaj pomoc (pytania i odpowiedzi)
        </a>
        <Link to="/help">pomoc</Link>
      </header>
    </div>
  );
}

export default Home;
