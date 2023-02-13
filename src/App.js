import './App.css';
import { BlogCard } from "./components/BlogCard/BlogCard"
import article from "./data/article.json"

function App() {
  return (
    <div className="App">
      <BlogCard {...article} />
    </div>
  );
}

export default App;
