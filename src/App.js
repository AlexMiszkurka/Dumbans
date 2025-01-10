import logo from './logo.svg';
import './App.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import qrCode from './Images/LM-Gmail.png'; // Corrected the path

console.log("loading... website");

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
          <Tab>Random stuff</Tab>
          <Tab>Downloads</Tab>
          <Tab>Store</Tab>
          <Tab>Account</Tab>
        </TabList>
        <TabPanel>
          <h2>Videos</h2>
          <body>
            Video list TBD
          </body>
        </TabPanel>
        <TabPanel>
          <h2>Random stuff</h2>
            Random stuff TBD
          <body>
          <img src={qrCode} alt="QR Code Email" style={{ width: '100px', height: '100px', border: '1px solid red' }} />
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
        <TabPanel>
          <h2>Store</h2>
          <body>
            Store items TBD
          </body>
        </TabPanel>
        <TabPanel>
          <h2>Account</h2>
          <body>
            <form>
              <div>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" placeholder="Username" />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" placeholder="Email" />
              </div>
              <div>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" placeholder="Password" />
              </div>
              <input type="submit" value="Sign Up" />
            </form>
          </body>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default App;
