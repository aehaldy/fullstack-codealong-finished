# Code-Along Steps

## Create Front End Login Template
1. `npm i handlebars`
2. Navigate to `views/layouts/main.handlebars` and notice that the handlebars injection `{{{body}}}` is there, but not much else. 
3. Create a new file in the `view` diretory called `login.handlebars`
4. Add html forms controlled through a tabbing feature to toggle between login and sign up. 
5. Tabbing is handled using CSS, and of course, JavaScript. (NOTE: A basic CSS stylesheet has been provided)

## Create the Login/Sign-Up Logic 
1. Navigate to `public/js/login.js` and add the logic to handle tabbing.
2. While we're at it, we can add event listeners to the forms and the functions that will capture input.
3. Import the script into `login.handlebars`

## Create the Post-Login View
1. Create a new handlebars view called `home.handlebars`
2. Write a basic html template to show that the user has successfully logged in.
3. Taking advantage of handlebars templating, we'll dynamically show the username.

### The Controller (Express with Handlebars) will control which of these views users receive, based on session authentication.  

&nbsp;

## Create the Server:

1. `npm  i express express-handlebars`
2. Open server.js
3. Create the base express server:

```
const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

const app = express();
const PORT = process.env.PORT || 3001;

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

app.listen(PORT, () => console.log(`Rarin' ta go on http://localhost:${PORT}`));

```
3. NOTE, we will be adding Sequelize and Sessions as we build out the app. For now, we are simply getting up and running with Handlebars.

## Create the Root Route
1. The root route will determine whether to display the login page or the logged-in page. Eventually we will use session data to determine this, but for now we can use a simple boolean. Navigate to `controllers/home-routes.js`
2. Create simple routing for rendering either the login (default) view, or the /home page (only if logged in).
3. Use router so we can combine these routes with API routes later in one convenient index.
4. Speaking of, navigate up one level to `index.js` and import the root route here.

## Add the Routes to Express
```
const routes = require('./controllers');

// Then, just above app.listen -->

app.use(routes);
```

### We can now run `npm start` to test our application!
Normally styling would be done after getting the main componenets created and functional, but to save time for this code-along, we've already applied styles.

&nbsp;

## Create the User Model
1. We need to be able to reliably retrieve the data of users who have signed up, so we need to store them in our database.

## Create the Sign-Up Route
1. We need a path to start adding users to our database. 