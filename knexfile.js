module.exports = {

    development: {
        client: 'sqlite3',
        connection: {
        filename: './data/projects.sqlite3'
        },
        useNullAsDefault: true,
        // pool: {
        //     afterCreate: (conn, done) => {
        //         conn.run('PRAGMA foreign_keys = ON', done)
        //     }
        // }
    }

};