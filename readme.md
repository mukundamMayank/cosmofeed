1) Notification Service

	This is a simple notification service that allows sending notifications via different channels (push notification, SMS, and email) using Express.js and Axios. I have translated it in a client server architecture & used adapter pattern in server in order to choose the channel & perform the activity accordingly.

2) Installation

	a) Before running the service, make sure you have Node.js installed on your machine.
	b) Clone this repository & go to cosmofeed folder

3) Libraries used

		Express.js: For handling HTTP requests and routing.
    	Axios: For making HTTP requests to send notifications.

4) How to run
	
	a) Starting the Server
			To start the server, run node response.js.

	b) Sending Notification
			To start the client, run node request.js. You can make changes to the channel & message accordingly.


Note:
	a) I have translated it in a client server architecture
	b) Since the major focus was on design optimization so I have not implemented the actual phone number & email & device registration part which can be done on any third party app like twillio.

	
