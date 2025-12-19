

function TranOptModal({ open, close, action }) {
  if (!open || !action) return null;

  const title =
    action === "deposit"
      ? "Deposit"
      : action === "withdraw"
      ? "Withdraw"
      : "Transfer";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      {/* modal box */}
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">{title}</h2>
          <button
            onClick={close}
            className="text-gray-500 hover:text-gray-700 text-xl leading-none"
          >
            ×
          </button>
        </div>

        <p className="text-sm text-gray-600">
          Here you will build the {title.toLowerCase()} flow…
        </p>
      </div>
    </div>
  );
}

export default TranOptModal;
