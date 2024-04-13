import Image from "next/image";
import React from "react";
interface userDivProps{
    username?: string;
    id?: number;
    avatar?: string;
}


const User: React.FC<userDivProps> = ({id, avatar, username = "user"}) => {

    if(!id && !avatar && !username){
        return (
            <div className="flex justify-end flex-none">
                <a href="/api/v0/login" target={"_blank"} className={"btn"}>Login</a>
            </div>
        )
    }

    return (
        <div className="flex justify-end flex-none">
            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="flex flex-row items-center hover:bg-neutral-700 duration-200 p-2 rounded-xl">
                    <p className={"mr-2"}>{username}</p>
                    <div className="avatar placeholder">
                        <div className="bg-neutral text-neutral-content rounded-full w-10">
                            <span className="text-xl">{username[0]}</span>
                        </div>
                    </div>
                </div>
                <ul tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-neutral-800 rounded-box w-52">
                    <li>
                        <a className="justify-between">
                            Profile
                            <span className="badge">New</span>
                        </a>
                    </li>
                    <li><a>Settings</a></li>
                    <li><a>Logout</a></li>
                </ul>
            </div>
        </div>
    )
}

export default User;