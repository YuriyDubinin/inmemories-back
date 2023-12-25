const delegateCorsOptions = function (req, callback) {
    let corsOptions;

    if (process.env.ALLOW_LIST.indexOf(req.header('Origin')) !== -1) {
        corsOptions = {origin: true};
    } else {
        corsOptions = {origin: false};
    }
    callback(null, corsOptions);
};

module.exports = delegateCorsOptions;
