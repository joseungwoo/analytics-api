'use strict';

module.exports.workName = async (evt) => ({
	statusCode: 200,
	body: JSON.stringify(evt),
});

