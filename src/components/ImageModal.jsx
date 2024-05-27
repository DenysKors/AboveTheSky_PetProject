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
        <Dialog.Panel className="mx-auto max-w-lg rounded bg-white">
          {imgData ? (
            <Dialog.Title>{imgData?.title}</Dialog.Title>
          ) : (
            <h3>Oooops</h3>
          )}
          {/* <img src={imgData?.url} alt={imgData.title} /> */}
          {imgData ? (
            <p>{imgData?.explanation}</p>
          ) : (
            <p>Sorry, but there are no more magic images for today.</p>
          )}
          {imgData && `Copyright: ${imgData?.copyright}`}
          <button onClick={() => setIsOpen(false)}>Close</button>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
export default ImageModal;
