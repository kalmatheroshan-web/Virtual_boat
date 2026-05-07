const userModal = require("../modals/user.model");
const bcrypt = require('bcrypt');

async function signUp(req, res) {
    try {
        const { email, password, assitantName } = req.body;
        const isExist = await userModall.findOne({ email });
        if (isExist) {
            return res.status(401).send({
                success: false,
                message: "user already exist",
            })
        }
        if (password.length < 6) {
            return res.statue(401).send({
                success: false,
                message: "password must be at least 6 characters"
            });
        }
        password = await bcrypt.hash(password, 10);
        const user = await userModal.create({
            email, password, assitantImage
        })

        return res.status(201).send({
            success: true,
            message: "user created successfully",
            user
        })

    } catch (error) {
        console.log(error.message);
        return res.statue(500).send({
            message: "internal server error",
            success: false
        });
    }
}
async function login(req, res) {
    try {
        const { email, password } = req.body;
        const user = await userModal.findOne({ email });
        if (!user) {
            return res.status(401).send({
                success: false,
                message: "user not found"
            })
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).send({
                success: false,
                message: "invalid password"
            })
        }
        let token = generateToken(user._id);
        return res.cookie("token", token, {
            maxAge: 7 * 24 * 60 * 60 * 1000,
            httpOnly: true,
            sameSite: "strict",
            secure: false
        }).status(200).send({
            success: true,
            message: "user logged in successfully",
            user
        })
    } catch (error) {
        console.log(error.message);
        return res.status(500).send({
            message: "internal server error",
            success: false
        });
    }
}

async function logout(req, res) {
    try {
        return res.clearCookie("token").status(200).send({
            success: true,
            message: "user logged out successfully"
        })
    } catch (error) {
        console.log(error.message);
        return res.status(500).send({
            message: "internal server error",
            success: false
        });
    }
}
module.exports = {
    signUp, login,logout
}