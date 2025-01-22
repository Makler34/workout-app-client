import { useEffect, useRef, useState } from "react";

export const useClickOutside = () => {
    const [isShow, setIsShow] = useState(false);
    const ref = useRef(null);

    const handleClickOutside = event => {
        if (ref.current && !ref.current.contains(event.target)) {
            setIsShow(false);
        }
    };


    useEffect(() => {
        if (isShow) {
            document.addEventListener('click', handleClickOutside, true);
        } else {
            document.removeEventListener('click', handleClickOutside, true);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isShow]);

    return { ref, isShow, setIsShow }
}