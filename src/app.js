const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const joyasRoutes = require("./routes/joyasRoutes");
const reportMiddleware = require("./middlewares/reportMiddleware");

dotenv.config();

const app = express();
app.use(express.json());
app.use(reportMiddleware);

app.use("/joyas", joyasRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
