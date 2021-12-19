import React, {useState} from 'react';
import CryptoJS from "crypto-js"


const MY_SECRET_PASSPHRASE = "Mojpassphrase"



const EncryptComponent = () => {
    const [inputValue, setInputValue] = useState("")
    const [encryptedMessage, setEncryptedMessage] = useState();



    const handleClick = () => {
        const encrypted = CryptoJS.AES.encrypt(inputValue, MY_SECRET_PASSPHRASE);
        console.log("encrypted", encrypted)
        console.log("encrypted", encrypted)

        setEncryptedMessage(encrypted.toString());
    }


    const handleChange = event => {
        const newValue = event.target.value;
        setInputValue(newValue);
    }

    return (
        <div>
            <input type="text" value={inputValue} onChange={handleChange} />
            <button onClick={handleClick}>Encrypt</button>
            <div><span>{encryptedMessage}</span></div>
        </div>
    )
}


const DecryptComponent = () => {
    const [inputValue, setInputValue] = useState("")
    const [decryptedMessage, setDecryptedMessage] = useState();



    const handleClick = () => {
        const decrypted = CryptoJS.AES.decrypt(inputValue, MY_SECRET_PASSPHRASE);
        console.log("decrypted", decrypted)
        setDecryptedMessage(decrypted.toString(CryptoJS.enc.Utf8));
    }


    const handleChange = event => {
        const newValue = event.target.value;
        setInputValue(newValue);
    }

    return (
        <div>
            <input type="text" value={inputValue} onChange={handleChange} />
            <button onClick={handleClick}>Decrypt</button>
            <div><span>{decryptedMessage}</span></div>
        </div>
    )
}


const RSACryptography = () => {
    return (
        <>
            <EncryptComponent/>
            <DecryptComponent/>
        </>
    )
}

export default RSACryptography;