import React  from 'react'

export default function About(probs){
    return(

        <>
        <div className={`text-center ${probs.mode}`}>
            <div className='heading m-2'>
                <h2>About</h2>
            </div>
            <div className="row">
                <div className="col m-1">
                    <h3>Contacts</h3>
                    <p>Email Id: vivekmishra1526@gmail.com</p>
                </div>
                <div></div>
                <div className="col m-1">
                    <h3>Service</h3>
                    <p>We providing a website which is able to convert your text in Upper Case , Lower Case and Invert Case.</p>
                    <p>Also we working on it... </p>
                </div>
                <div className="col m-1">
                    <h3>Since</h3>
                    <p>We are working from 20/03/2023</p>
                    <p>Also we are working on it.We are alway ready on your Service...</p>
                </div>
            </div>
        </div>
        
        </>
    )
}