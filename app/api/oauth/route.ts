import {NextRequest, NextResponse} from "next/server";
import connection from "@/helpers/api/db";
import DiscordUserSchema, {IDiscordAccessToken, IDiscordUser} from "@/schemas/discord";
import axios from "axios";
import {redirect} from "next/navigation";
import Discord from "@/schemas/discord";


async function discordAuthLoop (code: string): Promise<IDiscordAccessToken> {

    const data = new URLSearchParams();
    data.append('grant_type', 'authorization_code');
    data.append('code', code);
    data.append('redirect_uri', process.env.REDIRECT_URI!);

    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded'
    };

    try {
        const response = await axios.post(`${process.env.DISCORD_TOKEN_URL}`, data.toString(), {
            headers: headers,
            auth: {
                username: process.env.DISCORD_CLIENT_ID!,
                password: process.env.DISCORD_CLIENT_SECRET!
            }
        });
        return response.data
    } catch (error) {
        throw error;
    }
}

async function discordUserinfo (auth_data: IDiscordAccessToken): Promise<IDiscordUser>{
    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Bearer ${auth_data.access_token}`
    };

    try {
        const response = await axios.get(`${process.env.DISCORD_USERDATA_URL}`, {
            headers: headers
        });
        return {
            accent_color: response.data.accent_color,
            avatar: response.data.avatar,
            avatar_decoration_data: response.data.avatar_decoration_data,
            banner: response.data.banner,
            banner_color: response.data.banner_color,
            clan: response.data.clan,
            discriminator: response.data.discriminator,
            global_name: response.data.global_name,
            id: response.data.id,
            locale: response.data.locale,
            mfa_enabled: response.data.mfa_enabled,
            premium_type: response.data.premium_type,
            public_flags: response.data.public_flags,
            username: response.data.username,
            auth_data: auth_data
        }
    } catch (error) {
        throw error;
    }
}

export const GET = async (request: NextRequest) => {

    const {searchParams} = new URL(request.url)
    const code = searchParams.get("code")
    if(!code)
        return new NextResponse("No code provided!", {status: 400})

    try{
        await connection();
        const auth_data: IDiscordAccessToken = await discordAuthLoop(code)
        const user_data:IDiscordUser = await discordUserinfo(auth_data)
        await DiscordUserSchema.findOneAndUpdate({id: user_data.id}, user_data);
        return NextResponse.redirect("http://localhost:3000")
    }catch (error:any){
        return new NextResponse("Error in connecting to database " + error, {status: 500})
    }
}