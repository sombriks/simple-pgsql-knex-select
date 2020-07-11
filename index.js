const knex = require("knex")({
    client:"pg",
    connection:{
        host: "127.0.0.1",
        user: "postgres",
        password: "postgres",
        database: "sample",
    }
})

knex("pessoa").then(res => {
    console.log(res)
    process.exit(0)
})

