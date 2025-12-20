type TranOptModalProps = {
  open: boolean;
  close: () => void;
  action: "deposit" | "withdraw" | "transfer" | null;
};

function TranOptModal({ open,close,action }:TranOptModalProps) {
  if (!open || !action) return null;

  const title =
    action === "deposit"
      ? "Deposit"
      : action === "withdraw"
      ? "Withdraw"
      : "Transfer";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">

      <div className="h-[500px] w-full max-w-md rounded-2xl bg-white p-6 shadow-lg">
  
        <div className="flex items-center justify-between mb-24">
          <h2 className="ml-36 text-xl font-semibold">{title}</h2>
          <button
            onClick={close}
            className="text-gray-500 hover:text-gray-700 text-xl leading-none"
          >
            ×
          </button>
        </div>
        <div className="bg-gray-300 w-full h-[150px] rounded-2xl shadow-lg mb-10">
          amount
        </div>
        <button className="btn-primary w-full h-[50px]">
          confirm
        </button>
      </div>
    </div>
  );
}

export default TranOptModal;
