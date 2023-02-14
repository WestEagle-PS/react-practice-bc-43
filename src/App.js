import './App.css';
import { BlogCard } from './components/BlogCard/BlogCard';
import { Statistics } from './components/Statistics/Statistics';
import { Forbes } from './components/ForbesList/Forbes';
import article from './data/article.json';
import statistics from './data/statistics.json';
import forbes from './data/forbes.json';

function App() {
  return (
    <div className="App">
      <BlogCard {...article} />
      <Statistics data={statistics} title="Main Statistics" />
      <Statistics data={statistics} />
      ç
      <Forbes list={forbes} title="hello" />
    </div>
  );
}

export default App;
