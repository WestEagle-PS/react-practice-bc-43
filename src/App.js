import './App.css';
import { BlogCard } from './components/BlogCard/BlogCard';
import { Statistics } from './components/Statistics/Statistics';
import article from './data/article.json';
import statistics from './data/statistics.json';

function App() {
  return (
    <div className="App">
      <BlogCard {...article} />
      <Statistics data={statistics} title="Main Statistics" />
      <Statistics data={statistics} />
    </div>
  );
}

export default App;
