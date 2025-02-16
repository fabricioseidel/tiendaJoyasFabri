const pool = require("../db/db");
const { generateHATEOAS } = require("../utils/hateoasUtils");

const getJoyas = async (req, res) => {
  try {
    const { limits = 10, page = 1, order_by = "id_ASC" } = req.query;
    const offset = (page - 1) * limits;
    const [field, order] = order_by.split("_");
    const query = `
      SELECT * FROM inventario
      ORDER BY ${field} ${order}
      LIMIT $1 OFFSET $2;
    `;
    const { rows } = await pool.query(query, [limits, offset]);
    const joyasConHATEOAS = rows.map((joya) => ({
      ...joya,
      links: generateHATEOAS(joya.id),
    }));
    res.json(joyasConHATEOAS);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getJoyasFiltradas = async (req, res) => {
  try {
    const { precio_min, precio_max, categoria, metal } = req.query;
    const query = `
      SELECT * FROM inventario
      WHERE precio BETWEEN $1 AND $2
      AND categoria = $3
      AND metal = $4;
    `;
    const { rows } = await pool.query(query, [
      precio_min,
      precio_max,
      categoria,
      metal,
    ]);
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getJoyas, getJoyasFiltradas };
