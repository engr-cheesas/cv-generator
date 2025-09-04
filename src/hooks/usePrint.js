import {useRef} from "react"
import { useReactToPrint } from "react-to-print"

export default function usePrint() {
    const printRef = useRef()

    const handlePrint = useReactToPrint({
        contentRef: () => printRef.current,
        documentTitle: "MyCV"
    })

    return {
        printRef,
        handlePrint
    }
}