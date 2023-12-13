const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();
const saltRounds = 10;

exports.userRegister = async (req, res) =>  {
    try {
        let newUser = new User(req.body);

        newUser.password = await bcrypt.hash(newUser.password, saltRounds);
        if(!newUser.role){
            newUser.role = 1;
        }
        let user = await newUser.save();
        res.status(201).json({ message: `Utilisateur créé: ${user.email}` });
    } catch (error) {
        console.log(error);
        res.status(401).json({ message: "Requête invalide" });
    }
}

exports.userLogin = async (req, res) => {
    try {
        const user = await User.findOne({email: req.body.email});

        if(!user) {
            res.status(500).json({message: "utilisateur non trouvé"});
            return;
        }
        const isPasswordValid = await bcrypt.compare(req.body.password, user.password);

        if(user.email === req.body.email && isPasswordValid) {
            const userData = {
            id: user._id,
            email: user.email,
            role: user.role
            };
        const token = await jwt.sign(userData, process.env.JWT_KEY, { expiresIn: "10h"});
        res.status(200).json({token});
        } else {
            res.status(401).json({message: "Email ou mot de passe incorrect"});
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Une erreur s'est produite lors du traitement"});
    }

};

exports.userDelete = async (req, res) =>{

    try {
        await User.findByIdAndDelete(req.params.user_id);
        res.status(200).json({message: 'Utilisateur supprimé'});

    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Une erreur s'est produite lors du traitement"});
    }
}

exports.userPut = async (req, res) =>{
    try {

        if (req.body.password) {
            req.body.password = await bcrypt.hash(req.body.password, saltRounds);
        }

        const user = await User.findByIdAndUpdate(req.params.user_id, req.body, { new: true });

        res.status(201).json({ message: `Utilisateur modifié: ${user.email}` });

    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Une erreur s'est produite lors du traitement"});
    }
}

