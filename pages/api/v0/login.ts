import {NextApiRequest, NextApiResponse} from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
    res.redirect("https://discord.com")
    return;
}