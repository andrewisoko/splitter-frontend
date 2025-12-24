type OpCls = {
    open: boolean;
    close: () => void;
}

export default function SwitchModal({open,close}:OpCls){
    if (!open) return null;

    return(
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="h-[550px] w-full max-w-md rounded-2xl bg-universe p-6 shadow-lg">
                <h2>Cards available</h2>
                <div>add card</div>
            </div>
        </div>   
    )
}