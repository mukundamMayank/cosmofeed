const express = require('express');
const app = express();
app.use(express.json());

class NotificationService {
  constructor() {
    this.adapters = {
      push: new PushNotificationAdapter(),
      sms: new SmsAdapter(),
      email: new EmailAdapter()
    };
  }

  sendNotification(message, recipient, channel) {
    if (!this.adapters[channel]) {
      console.error(`Unsupported channel: ${channel}`);
      return;
    }

    try {
      this.adapters[channel].sendNotification(message, recipient);
      console.log(`Notification sent successfully to ${recipient} via ${channel}`);
    } catch (error) {
      console.error(`Failed to send notification to ${recipient} via ${channel}: ${error.message}`);
    }
  }
}

class NotificationAdapter {
  sendNotification(message, recipient) {
    throw new Error("Method 'sendNotification' must be implemented");
  }
}

class PushNotificationAdapter extends NotificationAdapter {
  sendNotification(message, recipient) {
    console.log(`Sending push notification to ${recipient}: ${message}`);
  }
}

class SmsAdapter extends NotificationAdapter {
  sendNotification(message, recipient) {
    console.log(`Sending SMS to ${recipient}: ${message}`);
  }
}

class EmailAdapter extends NotificationAdapter {
  sendNotification(message, recipient) {
    console.log(`Sending email to ${recipient}: ${message}`);
  }
}

app.post('/sendNotification', (req, res) => {
  console.log(req.body)
  const { message, recipient, channel } = req.body;
  notificationService.sendNotification(message, recipient, channel);
  res.status(200).send('Notification sent');
});

const notificationService = new NotificationService();
app.listen(3000, () => console.log('Notification service running on port 3000'));
