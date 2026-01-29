import { useEffect, type ReactNode } from "react"
import Modal from "./dialog"

type children = {
    children: ReactNode,
    handleInative: () => void
}
export const Dialogs = ({ children, handleInative }: children) => {
    const handelEnableDiv = (even: Event) => {
        even.stopPropagation()
    }
    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [])
    return (
        <Modal.container onClick={handleInative}>
            <Modal.modal onClick={(e: any) => handelEnableDiv(e)}>
                {children}
            </Modal.modal>
        </Modal.container>
    );
}