import logo from './logo.svg';
import './App.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2></h2>
      </header>
      <Tabs>
        <TabList>
          <Tab>Videos</Tab>
          <Tab>Chat</Tab>
          <Tab>Downloads</Tab>
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
        <TabPanel>
          <h2>Downloads</h2>
          <body>
          <Tabs>
              <TabList>
                <Tab>Viruses</Tab>
                <Tab>Artwork</Tab>
                <Tab>Server Stuff</Tab>
              </TabList>
              <TabPanel>
                <body>
                  Viruses coming soon
                </body>
              </TabPanel>
              <TabPanel>
                <body>
                  Artwork coming soon
                </body>
              </TabPanel>
              <TabPanel>
                <body>
                  Server stuff coming soon
                </body>
              </TabPanel>
            </Tabs>
          </body>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default App;
