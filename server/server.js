
const express = require('express');
const cors = require('cors');

const pool = require('./db');

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send('Green Compass API');
});

app.get('/places', async (req, res) => {
    try {

        const result = await pool.query(
            'SELECT * FROM places'
        );

        res.json(result.rows);

    } catch (err) {
        console.error(err);
    }
});

app.get("/places/map", async (req, res) => {
    // console.log("MAP ROUTE");
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

         `
      );

      res.json(result.rows);

   } catch (err) {

      console.error(err);

      res.status(500).json({
         error: "Server error"
      });
   }
});


app.get("/places/:id", async (req, res) => {
    // console.log("ID ROUTE:", req.params.id);
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
         [id]
      );

      res.json(result.rows[0]);

   } catch (err) {

      console.error(err);

      res.status(500).json({
         error: "Server error"
      });
   }
});

app.listen(3000, () => {
    console.log('Server started');
});