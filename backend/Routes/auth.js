const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

router.use(express.json());
router.use(cookieParser());

router.post('/register', async (req, res) => {
    try{
        const {userName, email, password} = req.body;
        if(!(userName && email && password)){
            res.status(400).send('All fields are compulsory');
        }
        const user = await User.findOne({email});
        if(user){
            if(user.googleId && !user.password){
                const hashPassword = await bcrypt.hash(password, 10);
                user.password = hashPassword;
                user.save();
                res.status(200).json({ message : 'Password set succesfully. You can now log in using your email and password.' });
            }
            else if(user.password && !user.googleId){
                res.status(400).json({ message : 'Email already registered. Please log in using your email and password.'});
            }
            else{
                res.status(400).json({ message : 'Email already registered, Please log in'})
            }
        }
        const hashPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({
            name : userName,
            email : email,
            password : hashPassword
        });
        if(newUser){
            const token = jwt.sign(
                {id : newUser._id, email},
                process.env.JWT_SECRET,
                {
                    expiresIn : '2h',
                }
            );
            newUser.token = token;
            newUser.password = undefined;
            const options = {
                expires : new Date(Date.now() + 2 * 60 * 60 * 1000),
                httpOnly : true
            };
            res.status(200).cookie('token', token, options).json({
                success : true,
                token,
                newUser
            });
        }
        else{
            res.status(400).json({ message : 'Invalid user data' });
        }
    }
    catch(err){
        res.status(500).json({ message : 'Error in register' });
        console.log(err);
    }
});

router.post('/login', async (req, res) => {
    try{
        const {email, password} = req.body;
        if(!(email && password)){
            res.status(400).json({ mesaage : 'All fields are compulsory' });
        }
        const user = await User.findOne({ email });
        if(!user){
            res.status(400).json({ message : "User doesn't exist. Please signup.."});
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            res.status(400).json({ message : "Invalid credentials" });
        }
        const token = jwt.sign(
            { id : user._id, email},
            process.env.JWT_SECRET,
            {
                expiresIn : '2h'
            }
        );
        user.token = token;
        user.password = undefined;
        const options = {
            expires : new Date(Date.now() + 2 * 60 * 60 * 1000),
            httpOnly : true
        };
        res.status(200).cookie('token', token, options).json({
            success : true,
            token,
            user
        });
    }
    catch(err){
        res.status(500).json({ message : 'Error Logging in' });
        console.log(err);
    }
});

module.exports = router;