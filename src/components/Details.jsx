import React from "react";

function Details({ summary, detail1, detail2, onClose }) {
    return (
        <div className="details">
            <span className="close-button" onClick={onClose}>X</span>
            <p>{summary}</p>
            <p>{detail1}</p>
            <p>{detail2}</p>
        </div>
    );
}

export default Details;
