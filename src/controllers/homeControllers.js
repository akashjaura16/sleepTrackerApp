/**
 * Home page controller handlers.
 */
function renderHome(req, res) {
  res.render('index', { appName: 'Alive Sleep Tracker App' });
}

module.exports = {
  renderHome,
};

