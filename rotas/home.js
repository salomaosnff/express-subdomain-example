module.exports = app => {
    app.route('/').all((req, res, next) => {
        res.render('home');
    });

    app.route('/sub/help').all((req, res, next) => {
        res.render('help');
    });

    app.route('/sub/:subdomain').all((req, res, next) => {
        res.render('subdomain',{
            subdomain: req.params.subdomain
        });
    });
};