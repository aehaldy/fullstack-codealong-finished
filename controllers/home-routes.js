const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('login');
});

router.get('/home', (req, res) => {
    temp_auth_test = true; // Auth will replace this

    if (!temp_auth_test) {
      res.redirect('/');
      return;
    }
  
    res.render('home');
});

module.exports = router;