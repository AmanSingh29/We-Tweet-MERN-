const User = require("../Models/userModel");
const bcryptjs = require("bcryptjs");

// Register controller
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

// Login controller
exports.handleLoginController = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    if (!username || !password || !email) {
      return res
        .status(400)
        .json({ status: "fail", msg: "One or more fields are mandatory !" });
    }
    const userInDb = await User.findOne({ username });
    if (!userInDb) {
      return res
        .status(400)
        .json({ status: "fail", msg: "Please check username or password !" });
    }
    const passCompare = bcryptjs.compare(password, userInDb.password);
    if (!passCompare) {
      return res
        .status(400)
        .json({ status: "fail", msg: "Please check username or password !" });
    }
    return res.status(200).json({
      status: "success",
      msg: "Login Successfully",
      data: {
        fullName: userInDb.fullName,
        username: userInDb.username,
        email: userInDb.email,
        profilePicture: userInDb.profilePicture,
      },
    });
  } catch (error) {
    return res.status(400).json({
      status: "fail",
      msg: "Some error occured !",
    });
  }
};
