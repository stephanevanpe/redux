import React from 'react';

const DisplayCitation = ({ character }) => {
    return (
        <div className="DisplayCitation">
            <img src={character.image} alt="picture" />
            <ul>
                <li> Name : {character.character}</li>
                <li> citation : {character.quote}</li>
            </ul>
        </div>
    );
};

export default DisplayCitation;