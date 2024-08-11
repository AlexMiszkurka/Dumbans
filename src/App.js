import logo from './logo.svg';
import './App.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Hi! This is Leon. Welcome to my new website. It is still under construction</h2>
      </header>
      <Tabs>
        <TabList>
          <Tab>Videos</Tab>
          <Tab>Chat</Tab>
        </TabList>
        <TabPanel>
          <h2>Leon's Videos</h2>
          <body>
            Video list TBD
          </body>
        </TabPanel>
        <TabPanel>
          <h2>Chat Box</h2>
          <body>
            Chat box will be here
          </body>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default App;
