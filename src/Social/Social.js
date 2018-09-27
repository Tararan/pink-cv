import React from "react";

const Social = ({ linkIn, imgIn, linkWapp, imgWapp, linkInsta, imgInsta, linkMail, imgMail }) => {
        return (
            <section className="Social">
                <a href={linkIn} className="Social__icons"> 
                    <img className="Social__icons-img Social__icons-img--hover" src={imgIn} alt="linked-in icon" />
                    <img className="Social__icons-img Social__icons-img--blurred" src={imgIn} alt="linked-in icon" />
                </a>
                <a href={linkWapp} className="Social__icons"> 
                    <img className="Social__icons-img Social__icons-img--hover" src={imgWapp} alt="linked-in icon" />
                    <img className="Social__icons-img Social__icons-img--blurred" src={imgWapp} alt="linked-in icon" />
                </a>
                <a href={linkInsta} className="Social__icons"> 
                    <img className="Social__icons-img Social__icons-img--hover" src={imgInsta} alt="linked-in icon" />
                    <img className="Social__icons-img Social__icons-img--blurred" src={imgInsta} alt="linked-in icon" />
                </a>
                <a href={linkMail} className="Social__icons"> 
                    <img className="Social__icons-img Social__icons-img--hover" src={imgMail} alt="linked-in icon" />
                    <img className="Social__icons-img Social__icons-img--blurred" src={imgMail} alt="linked-in icon" />
                </a>
            </section>
        ); 
}

export default Social;