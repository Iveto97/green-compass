const express = require("express");
const cors = require("cors");

const pool = require("./db");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Green Compass API");
});

app.get("/places", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM places");

    res.json(result.rows);
  } catch (err) {
    console.error(err);

    res.status(500).json({
      error: "Server error",
    });
  }
});

app.get("/places/map", async (req, res) => {
  try {
    const result = await pool.query(
      `
         SELECT
            p.id,
            p.name,
            p.category,
            pd.coordinates
         FROM places p

         JOIN place_details pd
         ON p.id = pd.place_id

         `,
    );

    res.json(result.rows);
  } catch (err) {
    console.error(err);

    res.status(500).json({
      error: "Server error",
    });
  }
});

app.get("/places/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      `
         SELECT
            p.*,
            pd.content,
            pd.practical_info,
            pd.gallery,
            pd.hero_img,
            pd.coordinates,
            pd.access

         FROM places p

         JOIN place_details pd
         ON p.id = pd.place_id

         WHERE p.id = $1
         `,
      [id],
    );

    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);

    res.status(500).json({
      error: "Server error",
    });
  }
});

app.get("/articles", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM articles");

    res.json(result.rows);
  } catch (err) {
    console.error(err);

    res.status(500).json({
      error: "Server error",
    });
  }
});

app.get("/articles/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      `
            SELECT 
            a.*,
            ac.motto,
            ac.intro,
            ac.article,
            ac.content_img

            FROM articles a

            JOIN article_content ac
            on a.id = ac.article_id

            WHERE a.id = $1
         `,
      [id],
    );

    res.json(result.rows[0]);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      error: "Server error",
    });
  }
});

app.get("/articles/:id/places", async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      `
         SELECT
                a.id AS article_id,
                a.title AS article_title,
                p.id AS place_id,
                p.name AS place_name,
                p.category,
                pd.coordinates
            FROM articles a
            JOIN article_places ap
                ON a.id = ap.article_id
            JOIN places p
                ON p.id = ap.place_id
            JOIN place_details pd
                ON p.id = pd.place_id
            WHERE a.id = $1

         `,
      [id],
    );

    res.json(result.rows);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      error: "Server error",
    });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
