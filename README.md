# express-cron-appengine
Express middleware that secure a Scheduling Jobs for App Engine


## Installation

Use the package manager [npm](https://npmjs.com) to install express-cron-appengine.

```bash
npm install express-cron-appengine
```

## Usage

```javascript
const cron = require("express-cron-appengine")

app.get('/demo', cron, function(req, res) {
    res.sendStatus(200)
}));
```
or
```javascript
import cron from 'express-cron-appengine'

app.get('/demo', cron, function(req, res) {
    res.sendStatus(200)
}));
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)