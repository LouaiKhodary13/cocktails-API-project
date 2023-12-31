# React Cocktail DB App

This repository contains the source code for a Cocktail Database App built using React. The application allows users to explore a wide range of cocktails, view details about individual drinks, search for specific cocktails, and learn more about each beverage's ingredients and preparation methods.

## Project Structure

### Components

1. **Cocktail Component**

   - **File:** `Cocktail.js`
   - Displays individual cocktail details like name, image, glass type, and additional information.
   - Provides a link to view further details about a specific cocktail.

2. **CocktailList Component**

   - **File:** `CocktailList.js`
   - Renders a list of cocktails fetched from an external API.
   - Handles loading states and displays appropriate messages based on search results.

3. **Loading Component**

   - **File:** `Loading.js`
   - Renders a loading animation or indicator while fetching data.

4. **Navbar Component**

   - **File:** `Navbar.js`
   - Displays a navigation bar with links to the home page and an about section.

5. **SearchForm Component**

   - **File:** `SearchForm.js`
   - Provides a search input field allowing users to search for specific cocktails.

6. **SingleCocktail Component**
   - **File:** `SingleCocktail.js`
   - Displays detailed information about a selected cocktail.
   - Shows the cocktail's category, type, glassware, instructions, and ingredients.

### Context and State Management

- **AppContext and AppProvider**
  - **File:** `AppContext.js`
  - Manages global state variables like loading status, search term, and fetched cocktails using Context API.

## Functionality

- **Home Page (`Home.js`):**

  - Combines the SearchForm and CocktailList components to provide a search interface and display a list of cocktails.

- **About Page (`About.js`):**

  - Contains information about the application, explaining its purpose and functionality.

- **Routing (`react-router-dom`):**

  - Enables navigation between different pages using React Router.

- **Data Fetching (`fetch` API):**
  - Retrieves cocktail data from [TheCocktailDB API](https://www.thecocktaildb.com/api.php).

## Installation and Running the Application Locally

1. # **Clone the Repository:**

   git clone https://github.com/LouaiKhodary13/cocktails-API-project.git
   cd cocktails-API-project

2. Install Dependencies:

   npm install

3. Start the Application:

   npm start
   Access the application via http://localhost:3000 in your web browser.

## Technologies Used

React: Frontend library for building user interfaces.
React Router: Provides navigation capabilities within the app.
Context API: Manages global state variables.
Fetch API: Retrieves data from external sources.

### Acknowledgments

Special thanks to [Coding Addict](https://johnsmilga.com/) for their fantastic tutorial series that inspired and guided this project.
