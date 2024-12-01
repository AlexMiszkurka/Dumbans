import logo from './logo.svg';
import './App.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

console.log("loading.. website");

window.alert("welcome to dumbans");


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
          <Tab>Store</Tab>
        </TabList>
        <TabPanel>
          <h2>Videos</h2>
          <body>
            Video list TBD
          </body>
        </TabPanel>
        <TabPanel>
          <h2>Chat Box</h2>
          <body>
            <form>
              <div>
              <label for="ET1">Enter text:</label>
              <input type="text" id="ET1" text="ET1" placeholder="TEXT"></input>
              </div>
              <input type="submit"></input>

              <br>
              </br>
              <br>
              </br>


              <div>
              <label for="EC1">Enter text:</label>
              <input type="text" id="EC1" text="EC1" placeholder="COMMENT"></input>
              </div>
              <input type="submit"></input>
            </form>
          </body>
        </TabPanel>
        <TabPanel>
          <h2>Downloads</h2>
          <body>
          <Tabs>
              <TabList>
                <Tab>Programs</Tab>
                <Tab>Artwork</Tab>
                <Tab>Server Stuff</Tab>
              </TabList>
              <TabPanel>
                <body>
                Programs coming soon
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
     <script src="pop-ups.js"></script>
    </div>
  );
}

export default App;
