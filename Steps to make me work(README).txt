Steps to setup project:

1) Go into the folder- notification-system.
2) Now type - npm install    // this will install all the dependencies.
3) Start the mongodb server.
4) Now type - npm start
5) Now type this url in your browser- localhost:3000 
6) The project is running.

On running the project initially there are no new notifications. 
The notifications are generated at the backend at a random time in  interval of 1-10 seconds.
The notifications are also fetched at a random time in interval of 1-10 seconds.
Now as soon as the new notications are fetched the bell has a counter containing the new notifications count. 
Now as you click the bell you get the new notifications.
As soon as you click outside the notifications dialog box, the notifications count is set to zero and the notifications are marked as read at the backend and cleared. (This is the modification I did.)
It uses the pull mechanism in which the front makes call at random intervals to fetch the data from the back-end.

