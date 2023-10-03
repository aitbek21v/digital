import React from 'react';

const CallButton = () => {
    const phoneNumber = '+9960220462390'
    const handleClick = () => {
        window.location.href = `tel:${phoneNumber}`
    }
    return (
        <button onClick={handleClick}>Позвонить</button>

    );
};

export default CallButton;