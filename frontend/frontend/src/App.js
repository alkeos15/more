// frontend/src/App.js
import React, { useState, useEffect } from 'react';

function App() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000/api/message')
            .then(response => response.json())
            .then(data => setMessage(data.message))
            .catch(error => console.error('Error fetching message:', error));
    }, []);

    return (
        <div>
            <h1>Frontend Service</h1>
            <p>Message from Backend: Hello more.com people!</p>
        </div>
    );
}

export default App;

