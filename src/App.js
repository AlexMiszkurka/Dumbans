import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import qrCode1 from './Images/LM-Gmail.png'; // Import first QR code
import qrCode2 from './Images/QR-Dumbans@DBC.png'; // Import second QR code

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
            {/* Display both QR codes */}
            <img src={qrCode1} alt="QR Code 1" style={{ width: '100px', height: '100px', border: '1px solid red' }} />
            <img src={qrCode2} alt="QR Code 2" style={{ width: '100px', height: '100px', border: '1px solid blue' }} />
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
      </Tabs>
    </div>
  );
}

export default App;
