import { useState } from "react";

function useOrderForm() {
    const [selectedId, setSelectedId] = useState(0);
    const [senderName, setSenderName] = useState('');
    const [receiverName, setReceiverName] = useState('');
    const [receiverPhoneNum, setReceiverPhoneNum] = useState('');
    const [itemCount, setItemCount] = useState(0);

    const handleChangeSelectedId = (id:number) => {
        setSelectedId(id);
    }

    const handleChangeSenderName = (sn:string) => {
        setSenderName(sn);
    }

    const handleChangeReceiverName = (rn:string) => {
        setReceiverName(rn);
    }

    const handleChangeReceiverPhoneNum = (rp:string) => {
        setReceiverPhoneNum(rp);
    }

    const handleChangeItemCount = (count:number) => {
        setItemCount(count);
    }

    return {selectedId, senderName, receiverName, receiverPhoneNum, itemCount, handleChangeSelectedId, handleChangeSenderName, handleChangeReceiverName, handleChangeReceiverPhoneNum, handleChangeItemCount}
}

export default useOrderForm;