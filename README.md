## Employees App using MERN stack
#Backend and fronted of a minimalist app storing employees records 👌.

First, you need to create your own MongoDB database called `employees` with a collection called `records`.
After that, it is required to add the file `config.env` based on your MongoDB connection data (Check `.env.example` to know which properties you need to fill)

Once you clone the project you need to setup the MERN stack running the following command in the folders `client` and `server`:
```
npm install
```

To run the frontend in localhost you have to execute the following command in `client` folder:
```
npm start
```

To run the backend in localhost you have to execute the following command in `server` folder:
```
node server.js
```

This project was done following this tutorial https://www.mongodb.com/languages/mern-stack-tutorial and fixing some methods in `record.js`
