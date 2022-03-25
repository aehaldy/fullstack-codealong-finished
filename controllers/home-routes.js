const router = require('express').Router();


router.get('/', (req, res) => {
  authorized = false; // Auth will replace this test boolean

  if (!authorized) {
    res.redirect('/login');
    return;
  }

  res.render('home');
});

router.get('/login', (req, res) => {
  res.render('login');
});

module.exports = router;