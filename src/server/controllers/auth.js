import Users from "../models/user";
require("dotenv").config();

export const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await Users.findOne({username:username, password:password});
        if (!user) {
            return res.json({error: "Incorrect username or password!"});
        }
        res.json({data: "Login successful"});
    } catch (err) {
        console.log(err);
        return res.status(400).send("Error. Try again.");
    }
};

export const signup = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await Users.create({username:username, password:password});
        if (!user) {
            return res.json({error: "An error occured."});
        }
        res.json({
            data: "Signup successful"
        });
    } catch (err) {
        console.log(err);
        return res.status(400).send("Error. Try again.");
    }
};

export const addBuild = async (req, res) => {
    try {
        const { username, selectedLegoSet } = req.body;
        const result = await Users.updateOne({username:username}, {$push:{collections:selectedLegoSet}});
        if (!result) {
            return res.json({error: "An error occured."})
        }
        res.json({
            data: "Add build successful."
        });
    } catch (err) {
        console.log(err);
        return res.status(400).send("Error. Try again.");
    }
}

export const getExistingCollection = async (req, res) => {
    try {
        const { username } = req.body;
        const result = await Users.findOne({username:username}, 'collections');
        if (!result) {
            return res.json({error: "An error occured."})
        }
        return res.json(result);
    } catch (err) {
        console.log(err);
        return res.status(400).send("Error. Try again.");
    }
}