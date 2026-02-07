import React from "react";
import thankIcon from "./assets/images/illustration-thank-you.svg";

export default function MessagePage({ score }) {
    return (
        <div className="message-page__container">
            <div>
                <img src={thankIcon} alt="thank you icon" />
            </div>
            <div className="message-result__wrap">
                <p>You selected {score} out of 5</p>
            </div>
            <div className="message-text__container">
                <h1>Thank you!</h1>
                <p>
                    We appreciate you taking the time to give a rating. If you ever need more
                    support, don’t hesitate to get in touch!
                </p>
            </div>
        </div>
    );
}
