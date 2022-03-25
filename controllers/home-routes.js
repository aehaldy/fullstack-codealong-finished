const router = require('express').Router();


router.get('/', (req, res) => {
  temp_auth_test = true; // Auth will replace this

  if (!temp_auth_test) {
    res.redirect('/login');
    return;
  }

  res.render('home');
});

router.get('/login', (req, res) => {
  res.render('login');
});

module.exports = router;