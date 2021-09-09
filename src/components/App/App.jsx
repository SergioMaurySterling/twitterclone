/*Components*/
import { MenuBar } from '../MenuBar/MenuBar';
import { CreateTweet} from '../CreateTweet/CreateTweet';
import {Navbar} from '../Navbar/Navbar.js';
import { Timeline } from '../Timeline/Timeline';
import { SearchBar } from '../SearchBar/SearchBar';

/*styles*/
import {MainPage, MainApp} from '../App/App.styles';

function App() {
  return (
    <MainPage className='MainPage'>
      <MainApp className="App">
        <MenuBar></MenuBar>
        <div className='create-tweet-and-timeline-container'>
          <Navbar></Navbar>
          <CreateTweet></CreateTweet>
          <Timeline></Timeline>
        </div>
        <SearchBar></SearchBar>
      </MainApp>
    </MainPage>
  );
}

export default App;
