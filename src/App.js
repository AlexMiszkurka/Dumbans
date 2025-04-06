import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import qr1 from './Images/QR-Dumbans@DBC.png';
import qr2 from './Images/LM-Gmail.png';
import qr3 from './Images/DBS.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Tabs>
        <TabList>
          <Tab>Videos</Tab><Tab>Random</Tab><Tab>Downloads</Tab><Tab>Store</Tab>
        </TabList>
        <TabPanel><div>Videos TBD</div></TabPanel>
        <TabPanel><div><img src={qr1} alt="QR 1" style={{width: '200px', border: '1px solid red'}}/><img src={qr2} alt="QR 2" style={{width: '200px', border: '1px solid blue'}}/><img src={qr3} alt="QR 3" style={{width: '200px', border: '1px solid blue'}}/></div></TabPanel>
        <TabPanel>
          <Tabs>
            <TabList><Tab>Programs</Tab><Tab>Artwork</Tab><Tab>Server</Tab></TabList>
            <TabPanel><div>Programs TBD</div></TabPanel>
            <TabPanel><div>Artwork TBD</div></TabPanel>
            <TabPanel><div>Server TBD</div></TabPanel>
          </Tabs>
        </TabPanel>
        <TabPanel><div>Store TBD</div></TabPanel>
      </Tabs>
    </div>
  );
}

export default App;