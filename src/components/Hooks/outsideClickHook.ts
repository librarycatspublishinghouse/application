import { useEffect, RefObject } from "react";

export function useOutSideClickAlert(ref: RefObject<HTMLElement>, onClick: () => void) {
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event: MouseEvent | Event){
            if (ref.current && !(ref.current as HTMLElement).contains(event.target as Node)) {
                onClick();
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, onClick]);
}