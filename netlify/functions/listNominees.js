/* eslint-disable no-undef */
const Airtable = require('airtable');
const apiKey = 'keyeKovmQLeCAOEJ3';
const baseId = 'appbLj1ywEmXpzYbX';

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: apiKey
})
const base = Airtable.base(baseId)

exports.handler = function(event, context, callback) {
  let allRecords = []
  base('Nominations')
    .select({
      maxRecords: 1000,
      view: 'Grid view',
      sort: [{field: 'Created', direction: 'desc'}],
      filterByFormula: "(Suppress = FALSE())",
    })
    .eachPage(
      function page(records, fetchNextPage) {
        records.forEach(function(record) {
          allRecords.push(record)
        })
        fetchNextPage()
      },
      function done(err) {
        if (err) {
          callback(err)
        } else {
					console.log('allRecords', allRecords)
          const body = JSON.stringify({ records: allRecords })
          const response = {
            statusCode: 200,
            body: body,
						records: allRecords,
            headers: {
              'content-type': 'application/json',
              'cache-control': 'Cache-Control: max-age=300, public'
            }
          }
          callback(null, response)
        }
      }
    )
}