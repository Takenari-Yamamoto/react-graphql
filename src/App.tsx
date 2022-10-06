import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useQuery } from 'urql';

const TodoQuery = `
  query {
    todos {
      id
      title
    }
  }

`;

const Todos = () => {
  const [result, reexecuteQuery] = useQuery({
    query: TodoQuery,
  });

  const { data, fetching, error } = result;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <ul>
      {data.todo.map((todo: any) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
