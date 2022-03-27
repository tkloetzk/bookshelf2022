import logo from './logo.svg';
import './App.css';
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";

function App() {
  const ALL_BOOKS = gql`
    query {
      getBookshelf {
        isbn
        title
        amazonAverageRating
        amazonRatingsCount
        goodreadsAverageRating
        goodreadsRatingsCount
        owned
        price
        subtitle
        thumbnail
        unread
      }
    }
  `

  const { loading, error, data } = useQuery(ALL_BOOKS);
  console.log(data)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          {data?.getBookshelf.map((book, i) => <li key={i}>{JSON.stringify(book)}</li>)}
        </ul>
      </header>
    </div>
  );
}

export default App;
