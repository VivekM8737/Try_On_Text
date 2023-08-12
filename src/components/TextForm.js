import React, { useState } from 'react'
export default function TextForm(props) {
    const handalextraspaces = () => {
        let x = text.trim().split(/\s+/).filter(word => word !== '')
        let y = ""
        for (let i = 0; i < x.length; i++) {
            console.log(x[i])
            let c = " "
            if (i === x.length - 1) {
                c = ""
            }
            y = y + x[i] + c
            setText(y)

        }
        props.showAlert("Change in the Invert Case", "Successfully")
    }
    const handaleuperCase = () => {
        if (text === text.toUpperCase()) {
            let new_text = text.toLowerCase();
            setText(new_text)
            props.showAlert("Change in the Lower Case", "Successfully")
        }
        else {

            let new_text = text.toUpperCase();
            setText(new_text)
            props.showAlert("Change in the Upper Case", "Successfully")
        }
    }
    const handaleInvertCase = () => {
        let new_text = "";
        for (let i = 0; i < text.length; i++) {
            let b = text.charAt(i)
            if (b === b.toUpperCase()) {
                new_text = new_text + b.toLowerCase()
            }
            else {
                new_text = new_text + b.toUpperCase()
            }
        }
        props.showAlert("Change in the Invert Case", "Successfully")
        setText(new_text)
    }
        const unsecuredCopyToClipboard = (text) => {
        const textArea = document.createElement("textarea"); textArea.value = text; document.body.appendChild(textArea); textArea.focus(); textArea.select();
        try { document.execCommand('copy') } catch (err) { console.error('Unable to copy to clipboard', err) } document.body.removeChild(textArea)
    };
    const copyToClipboard = () => {
        if (window.isSecureContext && navigator.clipboard) {
            navigator.clipboard.writeText(text);
        props.showAlert("Copied Texts", "Successfully")

        } else {
            unsecuredCopyToClipboard(text);
        props.showAlert("Copied Texts", "Successfully")

        }
    };
    const handalonChage = (event) => {
        setText(event.target.value)
    }
    const [text, setText] = useState("")
    return (
        <>
            <div className='main'>
                <div className='mx-2'>
                    <h2>{props.heading}</h2>
                    <div className="mb-3">
                        <textarea className="form-control back" placeholder='Write_here' value={text} onChange={handalonChage} id="exampleFormControlTextarea1" rows="10"></textarea>
                    </div>
                    <button disabled={text.trim().split(/\s+/).filter(word => word !== '').length === 0} className='btn btn-primary btn-sm  mar' onClick={handaleuperCase} >Change_Case</button>
                    <button disabled={text.trim().split(/\s+/).filter(word => word !== '').length === 0} className='btn btn-primary btn-sm  mar' value={text} onClick={handaleInvertCase}>Invert_case</button>
                    <button disabled={text.trim().split(/\s+/).filter(word => word !== '').length === 0} className='btn btn-primary btn-sm mar bt-c' value={text} onClick={copyToClipboard}>Copy</button>
                    <button disabled={text.trim().split(/\s+/).filter(word => word !== '').length === 0} className='btn btn-primary btn-sm  mar' value={text} onClick={handalextraspaces}>Remove_Extra_Space</button>
                </div>
                <div className='mx-2'>
                    <b>{text.trim().split(/\s+/).filter(word => word !== '').length} words and {text.trim().length} characters</b>
                </div>
                <div className='mx-2'>
                    <h2>Preview</h2>
                    <p>{text}</p>
                </div>
            </div>

        </>

    )
}