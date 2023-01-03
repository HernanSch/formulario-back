const express = require('express');
const dotenv = require ("dotenv");
const {connect} = require ("./src/utils/db");
const candidatosRouter = require ("./src/api/routes/candidatos.routes");
const cors = require('cors')

const PORT = process.env.PORT || 8000;
dotenv.config();

const app = express();
connect ();

app.use (cors ({
    origin: "*",
    credentials: true
}))

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/candidatos", candidatosRouter);

app.listen(PORT, () => console.log(`listening on port: http://localhost:${PORT}`));