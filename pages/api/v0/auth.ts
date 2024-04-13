import {NextApiRequest, NextApiResponse} from "next";
import { Schema, model, connect } from 'mongoose';

export default (req: NextApiRequest, res: NextApiResponse) => {
    res.redirect("https://discord.com")
    return;
}