const User = require("../models/user");

const getCurrentUser = (req, res, next) => {
  const { _id } = req.user._id;

  return User.findById(_id)
    .then((user) => {
      return res.status(200).send(user);
    })
    .catch(next);
};

const updateUserById = (req, res, next) => {
  const newUserData = req.body;
  const { _id } = req.user;
  return User.findByIdAndUpdate(_id, newUserData, {
    new: true,
    runValidators: true,
  })
    .then((user) => {
      return res.status(200).send(user);
    })
    .catch(next);
};

module.exports = {
  updateUserById,
  getCurrentUser,
};
