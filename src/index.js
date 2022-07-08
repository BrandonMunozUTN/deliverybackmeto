import app from "./app.js";
import { settings } from './config/index.js'

app.listen(settings.port, () => {
    console.log("Servidor iniciado en puerto", settings.port);
});




