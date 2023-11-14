import React from "react";

function FilterBar({ selectedCategory, onCategoryChange }) {
    const categories = [
        "Questionnaires",
        "Therapy journal",
        "Gratitude journal",
        "Exercises",
        "Goals",
        "Emotion protocol",
    ];

    const categoryMappings = {
        "Questionnaires": "questionnaire",
        "Therapy journal": "journaltherapy",
        "Gratitude journal": "journalgratitude",
        "Exercises": "exercise",
        "Goals": "goal",
        "Emotion protocol": "emotionprotocol",
    };

    const handleCategoryClick = (category) => {

        if (category === "Emotion protocol") {
            onCategoryChange(null);
        } else {
            onCategoryChange(categoryMappings[category]);
        }
    };

    return (
        <div className="filter">
            <p className="filter__name">Filter</p>
            <ul className="filter__categories">
                {categories.map((category) => (
                    <li key={category}>
                        <button
                            className={`filter__button ${selectedCategory === category ? "active" : ""
                                }`}
                            onClick={() => handleCategoryClick(category)}
                        >
                            {category}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FilterBar;
