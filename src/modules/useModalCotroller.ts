import { useCallback, useEffect, useRef } from "react";

export const useModalCotroller = () => {
   const dialogRef = useRef<HTMLDialogElement>(null);
   const handleClose: (id: string) => void = useCallback(
      (id) => {
         const modal = document.getElementById(id) as HTMLDialogElement;
         if (!modal) return;
         modal.setAttribute("closing", "");
         modal.addEventListener(
            "animationend",
            () => {
               modal.removeAttribute("closing");
               modal.close();
            },
            { once: true },
         );
      },

      [],
   );

   const openModal = useCallback((id: string) => {
      const modal = document.getElementById(id) as HTMLDialogElement;
      modal.showModal();
   }, []);

   useEffect(() => {
      const dialogElement = dialogRef.current;
      if (dialogElement) {
         dialogElement.addEventListener("click", () => handleClose);
      }

      return () => {
         if (dialogElement) {
            dialogElement.removeEventListener("click", () => handleClose);
         }
      };
   }, [dialogRef, handleClose]);

   return { dialogRef, openModal, handleClose };
};
