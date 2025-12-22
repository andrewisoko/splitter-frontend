
type ModalOptions = {
  open:boolean;
  close: () => void;
}

export default function CurrencyModal({open,close}:ModalOptions){
   if (!open) return null;

    return(
           <div className="fixed inset-0 z-40 flex items-center justify-center">
           TO DO...
      <div className="h-[550px] w-full max-w-md rounded-2xl bg-white p-6 shadow-lg">
      </div>
    </div>
    )

}