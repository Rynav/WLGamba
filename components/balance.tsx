interface balanceProps {
    balance?: number
}


const Balance: React.FC<balanceProps> = ({balance}) => {

    if(!balance){
        return(
            <div className="flex justify-center disabled">
                <div className="p-3 rounded-xl flex flex-row">
                    <p>$0</p>
                    <button className={"ml-2 rounded-xl btn btn-ghost btn-circle btn-xs"} disabled={true}><i
                        className="bi bi-plus-lg"></i>
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="flex justify-center">
            <div className="p-3 rounded-xl flex flex-row">
                <p>${balance}</p>
                <button className={"ml-2 rounded-xl btn btn-ghost btn-circle btn-xs"}><i className="bi bi-plus-lg"></i>
                </button>
            </div>
        </div>
    )
}

export default Balance;