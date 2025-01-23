import mysql from 'mysql2/promise';

export async function query({ query, values = [] }) {
    const dbconnection = await mysql.createConnection({
        host: 'localhost', 
        user: 'root', 
        password: '30G@briel30', 
        database: 'database_seubone',
        port: 3306,
    });

    try {
        const [results] = await dbconnection.execute(query, values);
        dbconnection.end();
        return results;
    } catch (error) {
        console.error('Erro ao executar a consulta:', error.message);
        return { error };
    }
}
