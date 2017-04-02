const pg = require('pg');

const config = {
	user: 'postgres',
	database: 'FSIdb',
	password: '1234',
	host: 'localhost',
	port: 5432,
	max: 10,
	idleTimeoutMillis: 30000
};

const pool = new pg.Pool(config);

pool.on('error', (err, client) => {
	console.error('idle client error', err.message, err.stack);
});

module.exports.query = (text, values, callback) => {
	console.log(`Running query: ${text} | ${values}`);
	return(pool.query(text, values, callback));
};

module.exports.connect = (callback) => {
	return(pool.connect(callback));
};