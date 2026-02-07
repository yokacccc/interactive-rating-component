import React from "react";

import starIcon from "./assets/images/icon-star.svg";

export default function InteractiveRatingPage({ score, onclick, onSubmit }) {
    return (
        <div className="interactive-page__container">
            <div className="interactive-icon">
                <img src={starIcon} alt="star icon" />
            </div>
            <div className="interactive-text">
                <h1>How did we do?</h1>
                <p>
                    Please let us know how we did with your support request. All feedback is
                    appreciated to help us improve our offering!
                </p>

                <form action="#" className="interactive-btn__wrap">
                    <input
                        type="radio"
                        id="scoreChoice-1"
                        name="score"
                        value="1"
                        checked={score === "1"}
                        onClick={onclick}
                        className="input-radio"
                    />
                    <label htmlFor="scoreChoice-1">1</label>
                    <input
                        type="radio"
                        id="scoreChoice-2"
                        name="score"
                        value="2"
                        checked={score === "2"}
                        onClick={onclick}
                        className="input-radio"
                    />
                    <label htmlFor="scoreChoice-2">2</label>
                    <input
                        type="radio"
                        id="scoreChoice-3"
                        name="score"
                        value="3"
                        checked={score === "3"}
                        onClick={onclick}
                        className="input-radio"
                    />
                    <label htmlFor="scoreChoice-3">3</label>
                    <input
                        type="radio"
                        id="scoreChoice-4"
                        name="score"
                        value="4"
                        checked={score === "4"}
                        onClick={onclick}
                        className="input-radio"
                    />
                    <label htmlFor="scoreChoice-4">4</label>
                    <input
                        type="radio"
                        id="scoreChoice-5"
                        name="score"
                        value="5"
                        checked={score === "5"}
                        onClick={onclick}
                        className="input-radio"
                    />
                    <label htmlFor="scoreChoice-5">5</label>
                </form>
            </div>
            <button onClick={onSubmit}>SUBMIT</button>
        </div>
    );
}
