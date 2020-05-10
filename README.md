# MaxDeale-pokedex

# System Architecture:
For this app i will be using the MERN stack, with React being responsible for the design of the front-end, and express and node handling 
the back end, with MongoDB as a database. 

The app that i am designing is a personal "Pokedex", where users will be able to register, log in and add their own collection of pokemon.
each users collection of Pokemon will be unique to them, and thus a relationship between users and Pokemon will be created in the 
database Schema.

In terms of the front-end component requirements, there will be multiple components required as described below:

A component for the navbar, which will contain the necessary links for users to navigate the app, log in and out and register,
the navbar component will of course also contain the logo and title. The links will be conditionally rendered depending on
wether the user is logged in or not, ie a user will not see the login link if they are already logged in.

A component for the adding a Pokemon form, will contain all the necessary input fields and will send the data to the database accordingly.
this component will be displayed by default on the home page.

A component for the users Pokemon, which will be displayed to the right of the adding a new Pokemon form. above this will be the filtering
component where users will be able to filter their Pokemon by name.

A component for an actual Pokemon "item" which will be rendered inside the "Pokemon" component. when a user adds a Pokemon, this is the
component that will actually display each one, so every time a user adds one, the data will have to be fetched every time, so that
the newly added Pokemon "items" can be displayed inside the Pokemon component. This will be done by using axios requests to fetch the
data from the database, which is then added to state, which is then mapped through as an array and displayed asccordingly as components
on the page.

Components will also be made for the register and login forms, whose links will be rendered conditionally in the navbar as previously mentioned, there will be two seperate forms for these purposes where users can enter their details, and log in and out accordingly.

# System Requirements:
This app will require much functionality both on the front and back end in order for all the components to work properly together and in order for the users experience to be seamless and pleasureable.

-Users should be able to register, log in and out and view their own personal collection of Pokemon. in order to achieve this i will be using the JSON web token package as well as the BcryptJS package for authentication, there will be a relation in the database between users and their own Pokemon, and this is how they will be displayed when a user logs in.

-Users should be able to add to their own collection of Pokemon and have the newly added items show up immediately on the home page. In order to achieve this , whenever a new item is added, the data displayed on the page needs to be refreshed.

-Users should be able to edit their own Pokemon as they wish, in order to achieve this , the id of the specific item clicked on in their collection is used when the edit from is submitted, and the new data then overwrites the old data on the correct item in the databse. The edited items are also immediately shown on the home page.

-Users are able to add custom images to their Pokemon, which are displayed neatly in each item component and resized accordingly.

-Users should be able to filter their collection of Pokemon by name, this will be done by having a text input field where the data that is entered will be stored in a variable which will then be used to conditionally render the Pokemon items on the main page by the text that the user enters.

-In order for all components to work with one another, i will be using the Context API within react to create various states for Authentication as well as for the Pokemon. This means the the state for all things pertaining to authentication will be kept within the authentication context, and the same thing will be done for the Pokemon. All functions regarding CRUD operations will be created within the Pokemon state file, so that all these functions can be called in whatever components necessary.

-The same thing will be done for the authentication context, all functions regarding this will be created within the authentication state, so that these methods can easily be called inside the login and register components without having to worry about prop drilling or pulling up state.


## User Instructions

Register for an account , log in and start adding your personal pokemon collection!
You can delete and edit your collection as you see fit.
The form is on the left, and your collection is on the right, use the link provided to add appropraite images and stats.
Enjoy!
