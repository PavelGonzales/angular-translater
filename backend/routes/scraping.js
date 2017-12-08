const fs = require('fs')
const path = require('path')

const parseWebPage = require('./../lib/parseWebPage')

const scraping = (req, res) => {
  parseWebPage('https://yandex.ru', (error, item) => {
    if (error) throw error;
    console.log(item)
  })
}

module.exports = scraping