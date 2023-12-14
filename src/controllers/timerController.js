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


exports.avgTime = async (req,res) => {
    try {
        const timers = await Timer.find({user_id: req.params.user_id});

        if (timers.length === 0) {
            res.status(404).json({ message: "Aucun timer trouvé pour cet utilisateur" });
            return;
        }
        
        try {

        const userId = req.params.user_id;

        const totalTimerValue = timers.reduce((acc, timer) => acc + timer.timer, 0);
        const averageTimer = totalTimerValue / timers.length;

        res.status(200).json({ user_id: userId, average_timer: averageTimer });
            
        } catch (error) { 
            console.log(error);
            res.status(401).json({ message: "Requête invalide" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Une erreur s'est produite lors du traitement"});
    }

}


exports.listTimer = async (req,res) => {
    try {
        const timers = await Timer.find({user_id: req.params.user_id});

        if (timers.length === 0) {
            res.status(404).json({ message: "Aucun timer trouvé pour cet utilisateur" });
            return;
        }
        
        try {

        res.status(200).json(timers);
            
        } catch (error) { 
            console.log(error);
            res.status(401).json({ message: "Requête invalide" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Une erreur s'est produite lors du traitement"});
    }

}