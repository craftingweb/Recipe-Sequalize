const express = require("express");
const app = express();
const { RecipeApp } = require("./models");
const port = 4000;

app.use(express.json());
// Create a new recipe
app.post("/recipes", async (req, res) => {
  try {
    const newRecipe = await RecipeApp.create(req.body);

    res.status(201).json(newRecipe);
  } catch (err) {
    if (err.name === "SequelizeValidationError") {
      return res.status(422).json({ errors: err.errors.map((e) => e.message) });
    }
    console.error(err);
    res.status(500).send({ message: err.message });
  }
});

// Get all recipes
app.get("/recipes", async (req, res) => {
  try {
    const allRecipes = await RecipeApp.findAll();

    res.status(200).json(allRecipes);
  } catch (err) {
    if (err.name === "SequelizeValidationError") {
      return res.status(422).json({ errors: err.errors.map((e) => e.message) });
    }
    console.error(err);
    res.status(500).send({ message: err.message });
  }
});

// Get a specific job
app.get("/recipes/:id", async (req, res) => {
  const recipeId = parseInt(req.params.id, 10);

  try {
    const job = await RecipeApp.findOne({ where: { id: recipeId } });

    if (job) {
      res.status(200).json(job);
    } else {
      res.status(404).send({ message: "Recipe not found" });
    }
  } catch (err) {
    if (err.name === "SequelizeValidationError") {
      return res.status(422).json({ errors: err.errors.map((e) => e.message) });
    }
    console.error(err);
    res.status(500).send({ message: err.message });
  }
});

// Update a specific recipe
app.patch("/recipes/:id", async (req, res) => {
  const recipeId = parseInt(req.params.id, 10);

  try {
    const [numberOfAffectedRows, affectedRows] = await RecipeApp.update(
      req.body,
      { where: { id: recipeId }, returning: true }
    );

    if (numberOfAffectedRows > 0) {
      res.status(200).json(affectedRows[0]);
    } else {
      res.status(404).send({ message: "Recipe not found" });
    }
  } catch (err) {
    if (err.name === "SequelizeValidationError") {
      return res.status(422).json({ errors: err.errors.map((e) => e.message) });
    }
    res.status(500).send({ message: err.message });
    console.error(err);
  }
});

// Delete a specific recipe
app.delete("/recipes/:id", async (req, res) => {
  const recipeId = parseInt(req.params.id, 10);

  try {
    const deleteOp = await RecipeApp.destroy({ where: { id: recipeId } });

    if (deleteOp > 0) {
      res.status(200).send({ message: "Recipe deleted successfully" });
    } else {
      res.status(404).send({ message: "Recipe not found" });
    }
  } catch (err) {
    if (err.name === "SequelizeValidationError") {
      return res.status(422).json({ errors: err.errors.map((e) => e.message) });
    }
    console.error(err);
    res.status(500).send({ message: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

// we have to add.listen(then port) in order to show in browser
