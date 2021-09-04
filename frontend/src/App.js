import { useState,useEffect } from 'react'
import './App.css';
import ArticleList from './Components/ArticleList'

function App() {
  const [articles, setArticles] = useState([]);

  // Modify the current state by setting the new data to
  // the response from the backend
  useEffect(()=>{
    fetch('http://localhost:5000/articles',{
      'methods':'GET',
      headers : {
        'Content-Type':'application/json'
      }
    })
    .then(response => response.json())
    .then(response => setArticles(response))
    .catch(error => console.log(error))

  },[])

  return (
    <div className="App container m-4">
    <div className="row">
      <div className="text-center">
      <h1>Connecting a React Frontend to a Flask Backend.</h1>
      </div>
    </div>

      <ArticleList 
      articles={articles} 
      />

    </div>
  );
}

export default App;
