module.exports = function (req, res, next) {

    if ((req.headers['x-appengine-cron']) && (req._remoteAddress === '10.0.0.1' || req._remoteAddress === '0.1.0.1')) return next();

    res.status(403).json({ status: 'forbidden', response: 'Forbidden' });

}