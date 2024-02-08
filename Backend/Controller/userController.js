const User = require("../Models/userModel");
const bcryptjs = require("bcryptjs");

exports.handleRegisterController = async (req, res) => {
  const { fullName, email, username, password } = req.body;
  try {
    if (!fullName || !email || !username || !password) {
      return res.status(400).json({
        status: "fail",
        msg: "One or more fields are mandatory !",
      });
    }
    const userByMail = await User.findOne({ email });
    const userByUsername = await User.findOne({ username });
    if (userByMail || userByUsername) {
      return res.status(400).json({
        status: "fail",
        msg: "User already registered !",
      });
    }
    const salt = await bcryptjs.genSalt(10);
    const hashPassword = await bcryptjs.hash(password, salt);
    const newUser = new User({
      fullName,
      email,
      username,
      password: hashPassword,
    });
    await newUser.save();
    return res.status(200).json({
      status: "success",
      msg: "User registered successfully !",
      data: newUser,
    });
  } catch (err) {
    return res.status(400).json({
      status: "fail",
      msg: "Some error occured !",
    });
  }
};
