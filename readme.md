# Product Checker

Product-Checker is an app that scans barCode or Qr and displays the ingredients, chemicals, benefits of each ingredient, harmful effects, and better options available based on the user ratings.

# Description

- This app uses the HTML5QRScanner to scan the barcode for a number which then fetches detailed info about that product from openFoodFacts api in the backend.

- Info is then displayed in visual format using different types of representations such as graph, chart etc. (not implemented yet)

- I have used react for frontend part and node(express) for backend, while mongo db is our storage space(local server).

# How to Install and Run the Project

- Fork the repo and deselect
  "Copy the master branch only" option as server is the current branch we are working on and main is a lot behind .

- Install Node, MongoDB-Compass, and VS code to get started.

- Run "npm install" or "yarn"(if u use yarn) on terminal to get all the required dependencies installed.

- In MongoDB Compass connect to localhost:27017(present by default).

- Go to client directory in terminal and run "npm start/yarn start" to start the Frontend react app on localhost:3000.

- Got to server directory in terminal and run "npm run dev" to start the backend with nodemon(installed as a dependency) running on localhost:5000.

- The app runs on localhost:3000 while the backend run on localhost:5000 as an api.

# Credits

This app was developed by Krishan Kumar Jha and Mohd Saad(me). Fork now to contribute to the project.
