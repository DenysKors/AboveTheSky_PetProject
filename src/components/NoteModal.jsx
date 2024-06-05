import { XCircleIcon } from "@heroicons/react/24/outline";

import { useUser } from "../hooks/useContext";
import { STATUS } from "../constants/statusConstants";

function NoteModal() {
  const { visitStatus, userVisitStatus } = useUser();

  return (
    <>
      {visitStatus === STATUS.visible && (
        <div className="fixed z-20 bottom-40 right-[2%] max-w-[60vw] md:max-w-xs rounded-xl bg-white/80 p-2 text-left">
          <p className="text-xs font-text md:text-sm lg:text-base">
            The hidden secrets are waiting for you! Go up and click on
            &lsquo;MAGIC UNIVERSE&rsquo;
          </p>
          <button
            className="absolute -top-8 right-0"
            onClick={() => userVisitStatus(STATUS.hidden)}
          >
            <XCircleIcon className="h-8 w-8 text-red-600" />
          </button>
        </div>
      )}
    </>
  );
}

export default NoteModal;
