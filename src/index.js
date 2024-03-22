import app from './app.js';
import { sequelize } from './database/database.js';
import './models/autor.js';
import './models/libro.js';
import './models/prestamo.js';
import './models/usuario.js';

async function main() {
    try
    {
    await sequelize.sync({ alter: true });
    app.listen(3000);
    console.log('Server on port 3000');}
    catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

main();