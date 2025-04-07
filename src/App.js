import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import qr1 from './Images/QR-Dumbans@DBC.png';
import qr2 from './Images/LM-Gmail.png';
import qr3 from './Images/DBS.png';

// Function to simulate saving messages to a local JSON file (server-side)
const saveMessagesToFile = async (messages) => {
  try {
    const response = await fetch('/api/save-messages', { // Assuming your server is running on the same origin
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(messages),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    console.log(result.message); // Log success message from the server
  } catch (error) {
    console.error('Error saving messages:', error);
  }
};

// Function to simulate loading messages from a local JSON file (server-side)
const loadMessagesFromFile = async () => {
  try {
    const response = await fetch('/api/load-messages'); // Assuming your server is running on the same origin
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error loading messages:', error);
    return [];
  }
};

function UploadMessagePage({ onMessageSubmit }) {
  const [messageText, setMessageText] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleTextChange = (event) => {
    setMessageText(event.target.value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setSelectedImage(null);
      setImagePreview(null);
    }
  };

  const handleSubmit = () => {
    onMessageSubmit({ text: messageText, image: selectedImage });
    setMessageText('');
    setSelectedImage(null);
    setImagePreview(null);
  };

  return (
    <div>
      <h2>Create New Message</h2>
      <textarea
        placeholder="Enter your message..."
        value={messageText}
        onChange={handleTextChange}
      />
      <div>
        <label htmlFor="image-upload">Upload Image:</label>
        <input
          type="file"
          id="image-upload"
          accept="image/*"
          onChange={handleImageChange}
        />
        {imagePreview && (
          <div>
            <h3>Image Preview:</h3>
            <img src={imagePreview} alt="Image Preview" style={{ maxWidth: '200px', maxHeight: '200px' }} />
          </div>
        )}
      </div>
      <button onClick={handleSubmit} disabled={!messageText && !selectedImage}>
        Submit Message
      </button>
    </div>
  );
}

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Load messages when the component mounts
    const loadData = async () => {
      const loadedMessages = await loadMessagesFromFile();
      setMessages(loadedMessages);
    };
    loadData();
  }, []);

  useEffect(() => {
    // Save messages whenever the messages state updates
    if (messages.length > 0) { // Only save if there are messages to save
      saveMessagesToFile(messages);
    }
  }, [messages]);

  const handleMessageSubmit = (newMessage) => {
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Tabs>
        <TabList>
          <Tab>Videos</Tab><Tab>Random</Tab><Tab>Downloads</Tab><Tab>Store</Tab><Tab>Chat</Tab><Tab>Upload Message</Tab>
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
        <TabPanel>
          <div>
            <h3>Chat Messages:</h3>
            <div id="chat-messages">
              {messages.map((msg, index) => (
                <div key={index}>
                  {msg.text && <p>{msg.text}</p>}
                  {msg.image && <img src={msg.image ? URL.createObjectURL(msg.image) : ''} alt="Uploaded Image" style={{ maxWidth: '100px', maxHeight: '100px' }} />}
                  <hr />
                </div>
              ))}
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <UploadMessagePage onMessageSubmit={handleMessageSubmit} />
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default App;