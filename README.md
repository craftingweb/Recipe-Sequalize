# Recipe-Sequalize


https://github.com/VitaliPri/Recipe-Sequalize/assets/101225909/062354ee-3619-47f6-85c8-0476c4728811

Installation

1. Clone the repository with HTTP:
git clone https://github.com/VitaliPri/Recipe-Sequalize.git
with SSH key:
git clone git@github.com:VitaliPri/Recipe-Sequalize.git

3. Install the dependencies:
   cd recipe-app
   npm install
   
4. Database Configuration:
Set up a PostgreSQL database.
Configure the database connection by updating the config/config.js file with your database credentials.

5. Running the Application
To start the application, run the following command:
  npm start
The server will start running on http://localhost:4000

API Endpoints

Get All Recipes
Endpoint: GET /recipes
Description: Retrieves a list of all recipes.
Response:
Status Code: 200 (OK)
Body: Array of recipe objects
------------------------------------------------
Get Recipe by ID

Endpoint: GET /recipes/:id
Description: Retrieves a specific recipe by ID.
Parameters:
id (string): The ID of the recipe.
Response:
Status Code: 200 (OK)
Body: Recipe object
-------------------------------------------------
Create Recipe

Endpoint: POST /recipes
Description: Creates a new recipe.
Request Body:
title (string): The title of the recipe.
description (string): The description of the recipe.
ingredients (string): The ingredients of the recipe.
instructions (string): The instructions for the recipe.
Response:
Status Code: 201 (Created)
Body: Created recipe object
--------------------------------------------------
Update Recipe

Endpoint: PUT /recipes/:id
Description: Updates an existing recipe.
Parameters:
id (string): The ID of the recipe to update.
Request Body:
title (string): The updated title of the recipe.
description (string): The updated description of the recipe.
ingredients (string): The updated ingredients of the recipe.
instructions (string): The updated instructions for the recipe.
Response:
Status Code: 200 (OK)
Body: Updated recipe object
---------------------------------------------------
Delete Recipe

Endpoint: DELETE /recipes/:id
Description: Deletes a recipe.
Parameters:
id (string): The ID of the recipe to delete.
Response:
Status Code: 204 (No Content)

#Validation
Server-side data validation is implemented using Sequelize's built-in validation methods. The following fields have specific validation rules:

title: Required, minimum length of 3 characters.
description: Required, maximum length of 500 characters.
ingredients: Required, maximum length of 1000 characters.
instructions: Required, maximum length of 5000 characters.

#Error Handling
The application handles errors and provides appropriate error messages for invalid requests or database errors. When an error occurs, the server responds with the appropriate status code and an error message in the response body.

Contributing
Contributions are welcome! If you find any issues or want to enhance the application, please submit a pull request.



