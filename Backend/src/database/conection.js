import sql from 'mssql'

const dbSettings = {
    user: "honda",
    password: "isofthonda",
    server:  "localhost",
    database: "hondaDB",
    options: {
        encrypt: true, // for azure
        trustServerCertificate: true // change to true for local dev / self-signed certs
      }
}

async function getConnection(){
    try{
        const pool = await sql.connect(dbSettings)
    return pool;
    } catch (error) {
       console.error(error); 
    }
    
}

getConnection();