import crypto from "crypto";
import user from "../models/User.js";

export async function register(req, res) { const {email, password, isAdmin } = req.body;
   try { const userExist = await user.findOne({ email });
    if (userExist)
        return res.status(409).json({ error: "User already exists",
       });
const hashedpassword = await bcrypt.hash(password, 10);
const newuser = await User.reate({email,
password: hashedpassword, isAdmin,});

res.status(201).json({
       success: true,
       message: "user Registered",
       user: {
                 email: newUser.email,
        }
      });
   } catch (err) {
res.status(500).json({ error: "Invalid  email", });
}
export async function login(req, res
