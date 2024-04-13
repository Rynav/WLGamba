import User from "@/components/userComponent";
import Balance from "@/components/balance";
import {useState} from "react";

const Navbar = ({}) => {

    const [username, setUsername] = useState<string>();
    const [id, setId] = useState<number>();
    const [avatar, setAvatar] = useState<string>();
    const [balance, setBalance] = useState<number>();




    return (
        <div className="absolute top-0 left-0 navbar h-15 bg-neutral-800 grid grid-cols-3">
            <div className="col-start-1">
                <a className="btn btn-ghost text-xl">WLGamba</a>
            </div>
            <Balance balance={balance}/>
            <User username={username} id={id} avatar={avatar}/>
        </div>
    )
}

export default Navbar