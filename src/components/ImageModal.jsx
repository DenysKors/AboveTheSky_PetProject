import { Dialog } from "@headlessui/react";

function ImageModal({ isOpen, setIsOpen, imgData }) {
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-20"
    >
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div className="fixed inset-0 bg-black/80" aria-hidden="true" />

      {/* Full-screen container to center the panel */}
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        {/* The actual dialog panel  */}
        <Dialog.Panel className="p-6 mx-auto max-w-3xl rounded bg-white">
          {imgData ? (
            <Dialog.Title className="font-main text-base md:text-lg lg:text-xl text-balance">
              {imgData?.title}
            </Dialog.Title>
          ) : (
            <h3 className="font-main text-base md:text-lg lg:text-xl">
              Oooops
            </h3>
          )}
          <div className="mt-2 flex justify-center items-center">
            {imgData?.media_type === "image" && (
              <img src={imgData?.url} alt={imgData?.title} />
            )}
            {imgData?.media_type === "video" && (
              <iframe
                src={imgData?.url}
                allow="gyroscope"
                allowfullscreen
              ></iframe>
            )}
          </div>
          <div className="mt-2 max-h-20 lg:max-h-28 overflow-y-auto">
            {imgData ? (
              <p className="text-xs font-text md:text-base lg:text-lg indent-2">
                {imgData?.explanation}
              </p>
            ) : (
              <p className="mt-2 text-xs font-text md:text-base lg:text-lg">
                Sorry, but there are no more magic images for today. Please try
                later.
              </p>
            )}
          </div>
          {imgData?.copyright && (
            <p className="mt-4 text-xs font-text md:text-base lg:text-lg">{`Copyright: ${imgData?.copyright}`}</p>
          )}
          <div className="mt-4">
            <button
              className="inline-flex justify-center rounded-md border border-transparent bg-yellow-100 px-4 py-2 font-main text-xs md:text-sm lg:text-base tracking-wide text-yellow-600 hover:bg-yellow-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-600 focus-visible:ring-offset-2"
              onClick={() => setIsOpen(false)}
            >
              Close
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
export default ImageModal;
