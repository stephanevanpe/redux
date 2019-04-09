import React from 'react';

const GenerateCitation = ({ selectCharacter }) => {
    return (
        <div className="GenerateCharacter">
            <button onClick={selectCharacter}>Get charatere</button>
        </div>
    );
};

export default GenerateCitation;
