import '../css/App.css';

/*Components*/
import { MenuBar } from './MenuBar';
import { CreateTweet} from './CreateTweet';
import {Navbar} from './Navbar';
import { Timeline } from './Timeline';
import { SearchBar } from './SearchBar';

function App() {
  return (
    <div className='MainPage'>
      <div className="App">
        <MenuBar></MenuBar>
        <div className='create-tweet-and-timeline-container'>
          <Navbar></Navbar>
          <CreateTweet></CreateTweet>
          <Timeline></Timeline>
        </div>
        <SearchBar></SearchBar>
      </div>
    </div>
  );
}

export default App;
