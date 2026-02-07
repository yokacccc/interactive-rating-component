import { useState } from "react";

import "./App.css";
import InteractiveRatingPage from "./InteractiveRatingPage";
import MessagePage from "./MessagePage";

function App() {
    const [score, setScore] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const onScoreChange = (e) => {
        const newValue = e.target.value;

        setScore((pre) => (pre === newValue ? "" : newValue));
    };

    const handleSubmit = () => {
        if (score) {
            setSubmitted(true);
        }
    };

    return submitted ? (
        <MessagePage score={score} />
    ) : (
        <InteractiveRatingPage score={score} onclick={onScoreChange} onSubmit={handleSubmit} />
    );
}

export default App;
