const pg = require('pg');
require( 'pg-parse-float' )( pg );

// const config = {
// 	user: 'postgres',
// 	database: 'FSIdb',
// 	password: '1234',
// 	host: 'localhost',
// 	port: 5432,
// 	max: 10,
// 	idleTimeoutMillis: 30000
// };

const config = {
	user: 'teywlppooyogvw',
	database: 'da2i95mcv6cnrp',
	password: '02cd6ecd7637fc669f225fde73e6cc69a610ff77d7cceffc657ff3c68a0232a9',
	host: 'ec2-23-21-219-105.compute-1.amazonaws.com',
	port: 5432,
	max: 10,
	idleTimeoutMillis: 30000,
	ssl: true
};
//test
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