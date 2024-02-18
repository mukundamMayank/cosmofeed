const axios = require('axios');

const payload = {
  message: 'Hello from push',
  recipient: 'deviceToken123',
  channel: 'push'
};

axios.post('http://localhost:3000/sendNotification', payload)
  .then(response => {
    console.log('Response:', response.data);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });
