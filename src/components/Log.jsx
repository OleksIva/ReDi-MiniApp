

import React, { useState, useEffect } from "react";
import axios from "axios";
import Details from "./Details";
import SvgIcons from "./SvgIcons";

function Log({ selectedCategory }) {
    const [data, setData] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    
    function formatDate(inputDate) {
        const dateObject = new Date(inputDate);
        const day = dateObject.getDate();
        const month = dateObject.getMonth() + 1; 
        const year = dateObject.getFullYear() % 100; 
        return `${day}.${month}.${year}`;
    }

    const handleItemClick = (index) => {
        setSelectedItem(selectedItem === index ? null : index);
    };

    useEffect(() => {
        axios
            .get(
                "http://ec2-3-67-177-63.eu-central-1.compute.amazonaws.com:8055/items/userActivities"
            )
            .then((response) => setData(response.data.data))
            .catch((error) => console.error("Error:", error));
    }, []);

    const filteredData = selectedCategory
        ? data.filter((item) => item.type === selectedCategory)
        : data;

    return (
        <div className="log-container">
            <ul className="list">
                {filteredData.map((item, index) => (
                    <li
                        key={item.id}
                        className={`log__line ${index === selectedItem ? "selected" : ""}`}
                        onClick={() => handleItemClick(index)}
                    >
                        <SvgIcons />
                        <svg className="tick-icon"><use xlinkHref="#tick_icon" /></svg>
                        <span className="list__date">{formatDate(item.date)}</span>
                        <span className="list__type">{item.type}</span>
                        <span className="list__title">{item.title}</span>
                        <svg className="thumbup-icon"><use xlinkHref="#thumbup_icon" /></svg>
                        <svg className="details-arrow"><use xlinkHref="#details_arrow" /></svg>

                    </li>
                ))}
            </ul>
            <div className="details__container">
                {selectedItem !== null && (
                    <Details
                        summary={filteredData[selectedItem].summary}
                        detail1={filteredData[selectedItem].detail1}
                        detail2={filteredData[selectedItem].detail2}
                        onClose={() => setSelectedItem(null)}
                    />
                )}
            </div>
        </div>
    );
}

export default Log;


