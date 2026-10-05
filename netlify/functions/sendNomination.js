/* eslint-disable no-undef */

const Airtable = require('airtable');
const apiKey = 'keyeKovmQLeCAOEJ3';
const baseId = 'appbLj1ywEmXpzYbX';

const saveNominee = async ({ nomineeFName, nomineeLName, trait, reason, nominatedByFName, nominatedByLName }) => {
	return new Promise((resolve, reject) => {
		Airtable.configure({
			apiKey
		});

		const base = Airtable.base(baseId);
		base('tblOE2k7nV27k3ifj').create({
			"First Name": nomineeFName,
			"Last Name": nomineeLName,
			"Trait": trait,
			"Reason": reason,
			"Nominated By First Name": nominatedByFName,
			"Nominated By Last Name": nominatedByLName,
		}, err => {
			if (err) return reject(err);
			resolve();
		});
	});
};

exports.handler = async (event) => {
	try {
		const data = JSON.parse(event.body);

		console.log('data', data)

		await saveNominee(data);

		return {
			statusCode: 200,
			body: JSON.stringify({
				message: "Success"
			})
		};
	} catch (e) {
		console.log(e);
		return {
			statusCode: 500,
			body: e.mssage
		};
	}
};