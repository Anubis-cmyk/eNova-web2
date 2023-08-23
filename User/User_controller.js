const express = require("express");
const User = require("./User_model");  

/**
 * get all users
 * @param {*} req
 * @param {*} res
 */
const getUsers = async (req, res) => {
  try {
    const users = await User.find().then((users) => {
      res.status(200).json(users);
    }).catch((err) => {
      res.status(400).json({ error: err.message });
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

/**
 * add user
 * @param {*} req 
 * @param {*} res 
 */
const addUser = async (req, res) => {
    console.log(req.body);
  try {
    const {email, password} = req.body;
    const newUser = new User({email, password});
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

/**
 * update user
 * @param {*} req 
 * @param {*} res 
 */
const updateUser = async (req, res) => {
  try {
    const {email, password} = req.body;
    const newUser = new User({email, password});
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

/**
 * delete user
 * @param {*} req 
 * @param {*} res 
 */
const deleteUser = async (req, res) => {
  console.log(req.params.id);
  const id = req.params.id;
  try{
    const deletedUser = await User.findByIdAndDelete(id).then((deletedUser) => {
      res.status(200).json({ message: "User deleted successfully" });
    }
    ).catch((err) => {
      res.status(400).json({ error: err.message });
    });
  }catch(err){
    res.status(500).json({ error: err.message });
  }
}

/**
 * login user
 * @param {*} req 
 * @param {*} res 
 */
const login = async (req, res) => {
    console.log(req.body);
   try{
    const {email,password} = req.body;
    const newUser = await User.find({"email":email});
        if(newUser){
            if(password == newUser.password){
                res.status(200).json(newUser);
            }
        }
        else{
            res.status(500).json({ error: err.message });
        }
        res.status(200).json(newUser); 
   }catch(err){
    res.status(500).json({ error: err.message });
   }

}

exports.getUsers = getUsers;
exports.addUser = addUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
exports.login = login;
