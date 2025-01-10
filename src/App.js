import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import qrCode1 from './Images/QR-Dumbans@DBC.png'; // Updated name for first QR code
import qrCode2 from './Images/LM-Gmail.png'; // Name for second QR code
import qrCode3 from './Images/DBS.png'; // Name for second QR code

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
            {/* Display both QR codes with larger sizes */}
            <img src={qrCode1} alt="QR Code 1" style={{ width: '200px', height: '200px', border: '1px solid red' }} />
            <img src={qrCode2} alt="QR Code 2" style={{ width: '200px', height: '200px', border: '1px solid blue' }} />
            <img src={qrCode3} alt="QR Code 2" style={{ width: '200px', height: '200px', border: '1px solid blue' }} />
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
