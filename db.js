const Pool = require("pg").Pool

const pool = new Pool ({
    user: "suzana",
    password: "suzana123",
    database: "ecommerce_database",
    host: "localhost",
    port: 5432
});

module.exports =pool;