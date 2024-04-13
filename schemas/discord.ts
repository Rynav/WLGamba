import * as mongoose from "mongoose";

const {Schema} = mongoose


const DiscordUserSchema = new Schema <IDiscordUser>({
    id: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        required: true
    },
    discriminator: {
        type: String,
        required: true
    },
    public_flags: {
        type: Number,
        required: true
    },
    banner: {
        type: String,
        required: false
    },
    accent_color: {
        type: String,
        required: false
    },
    global_name: {
        type: String,
        required: true
    },
    avatar_decoration_data: {
        type: Object,
        required: true
    },
    banner_color: {
        type: String,
        required: false
    },
    clan: {
        type: String,
        required: false
    },
    mfa_enabled: {
        type: Boolean,
        required: true
    },
    locale: {
        type: String,
        required: true
    },
    premium_type: {
        type: Number,
        required: true
    },
    auth_data: {
        type: Object,
        required: true
    },
}, {timestamps: true})


export interface IDiscordAccessToken{
    access_token: string;
    token_type: "Bearer" | "";
    expires_in: number;
    refresh_token: string;
    scope: "identity" | ""
}

export interface IDiscordUser{
    id: string;
    username: string;
    avatar: string;
    discriminator: string;
    public_flags: number;
    banner: string;
    accent_color: string;
    global_name: string;
    avatar_decoration_data: {asset: string, sku_id: string};
    banner_color: string;
    clan: string;
    mfa_enabled: boolean;
    locale: string;
    premium_type: number;
    auth_data: IDiscordAccessToken;
}


export default mongoose.models.discordUserSchema || mongoose.model("discordUserSchema", DiscordUserSchema)