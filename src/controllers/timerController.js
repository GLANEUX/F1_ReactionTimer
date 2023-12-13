const Timer = require('../models/timerModel');
const User = require('../models/userModel')



exports.NewTimer = async (req, res) =>{
    try {
        const user = await User.findById(req.params.user_id);

        if (!user) {
            res.status(404).json({ message: 'utilisateur introuvable' });
            return;
        }

        const newTimer = new Timer({...req.body, user_id: req.params.user_id});
    
        try {
            const timer = await newTimer.save();
            res.status(201).json(timer);
        } catch (error) {
            console.log(error);
            res.status(401).json({ message: "Requête invalide" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Une erreur s'est produite lors du traitement"});
    }
   
}
