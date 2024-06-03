// import { useState } from "react";
import { XCircleIcon } from "@heroicons/react/24/outline";

function NoteModal() {
  // const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="fixed z-20 bottom-40 right-[2%] max-w-[60vw] md:max-w-xs rounded-xl bg-white/80 p-2 text-left">
      <p className="text-xs font-text md:text-sm lg:text-base">
        The hidden secrets is waiting for you! Go up to top and click on
        &lsquo;MAGIC UNIVERSE&rsquo;
      </p>
      <button
        className="absolute -top-8 right-0"
        // onClick={() => setIsOpen(false)}
      >
        <XCircleIcon className="h-8 w-8 text-red-600" />
      </button>
    </div>
  );
}

export default NoteModal;
