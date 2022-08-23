const checkValidate = async (req, res, next) => {
  if (!req.body.fullName) {
    res.status(400).json({ message: 'FullName Required' });
  }
  if (!req.body.email) {
    res.status(400).json({ message: 'E-mail Required' });
  }
  if (!req.body.password) {
    res.status(400).json({ message: 'Password Required' });
  }
  next();
};
module.exports = { checkValidate };
