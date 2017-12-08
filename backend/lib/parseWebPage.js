const http = require('https');

function get(url, done) {
  console.log(url)
  const req = http.get(url, res => {
    console.log(res.statusCode)
    if (res.statusCode !== 200) {
      done(new Error('Server error'))
      res.resume();
      return
    }

    res.setEncoding('utf-8')

    let body = ''

    res.on('data', data => body += data)

    res.on('end', () => {
      let resuls;

      try {
        result = JSON.parse(body)
      } catch (error) {
        done(error)
      }

      done(null, result)
    })
  })

  req.on('error', error => done(error))
}

module.exports = get;