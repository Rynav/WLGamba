import getConfig from 'next/config';
import mongoose from 'mongoose';

import {IDiscordAccessToken} from "@/schemas/discord";

const { serverRuntimeConfig } = getConfig();
const Schema = mongoose.Schema;

mongoose.connect(process.env.MONGODB_URI || serverRuntimeConfig.connectionString);
mongoose.Promise = global.Promise;

export const db = {
    DiscordAccessToken: discordAccessTokenModel()
};

// mongoose models with schema definitions

function discordAccessTokenModel() {
    const schema = new Schema<IDiscordAccessToken>({
        access_token: {type: String, required: true},
        token_type: {type: String, required: true},
        expires_in: {type: Number, required: true},
        refresh_token: {type: String, required: true},
        scope: {type: String, required: true},
    }, {
        // add createdAt and updatedAt timestamps
        timestamps: true
    });

    schema.set('toJSON', {
        virtuals: true,
        versionKey: false,
        transform: function (doc, ret) {
            delete ret._id;
            delete ret.hash;
        }
    });

    return mongoose.models.User || mongoose.model('User', schema);
}