import { useState } from "react";

function useOrderForm() {
    const [selectedId, setSelectedId] = useState(904);
    const [senderName, setSenderName] = useState('');
    const [receiverName, setReceiverName] = useState('');
    const [receiverPhoneNum, setReceiverPhoneNum] = useState('');
    const [itemCount, setItemCount] = useState(0);

    const [selectedIdTxtError, setSelectedIdTxtError] = useState(false);
    const [senderNameError, setSenderNameError] = useState(false);
    const [receiverNameError, setReceiverNameError] = useState(false);
    const [receiverPhoneNumError, setReceiverPhoneNumError] = useState(false);
    const [itemCountError, setItemCountError] = useState(false);

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

    return {selectedId, senderName, receiverName, receiverPhoneNum, itemCount, handleChangeSelectedId, handleChangeSenderName, handleChangeReceiverName, handleChangeReceiverPhoneNum, handleChangeItemCount, selectedIdTxtError, setSelectedIdTxtError, senderNameError, setSenderNameError, receiverNameError, setReceiverNameError, receiverPhoneNumError, setReceiverPhoneNumError, itemCountError, setItemCountError}
}

export default useOrderForm;