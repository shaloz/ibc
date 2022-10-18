import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faTimes } from "@fortawesome/free-solid-svg-icons";

const VariantChip = ({result, handleDeleteOption, div_id}) => {
    return (
        <div  id={div_id} className="variation-chip-container">
             <div className="variation-chip-close" onClick={handleDeleteOption}>
                <FontAwesomeIcon icon={faTimes} />
            </div>
            <div style={{padding: 10}}>
                <p>{result.name}</p>
            </div>
        </div>
    )
}

export default VariantChip