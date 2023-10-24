import React, { useState } from 'react';
import { Button } from './button';

const ButtonGallery = () => {
    const [active, setActive] = useState(null);

    const handleButtonClick = (buttonName) => {
        setActive(buttonName);
    };

    return (
        <div className="flex flex-col gap-y-3 bg-gradient-to-br from-blue-800 via-slate-800 to-blue-600 p-8">
            <a href="/">
                <button
                    className={`bg-cyan-500 min-w-[195px] hover:bg-cyan-700 hover:scale-105 text-white font-bold transition-all py-2 px-4 rounded active:scale-95`}
                >
                    To calculator
                </button>
            </a>
            <button
                className={`min-w-[195px] active:scale-95 hover:scale-105 text-white font-bold transition-all py-2 px-4 rounded 
                ${active === "Primary" ? 'bg-yellow-500 hover:bg-yellow-600 hover:shadow-[1px_2px_0_4px_#493201] shadow-[1px_2px_0_4px_#ca8a04]'
                        : 'bg-blue-500 hover:bg-blue-700'
                    } `}
                onClick={() => handleButtonClick("Primary")}
            >
                Primary Button
            </button>
            {/* <Button text="Primary" color="blue" handleButtonClick={handleButtonClick} active={active} /> */}
            <Button text="Secondary" color="green" handleButtonClick={handleButtonClick} active={active} />
            <Button text="Danger" color="red" handleButtonClick={handleButtonClick} active={active} />
            <Button text="Warning" color="stone" handleButtonClick={handleButtonClick} active={active} />
            <Button text="Custom" color="purple" handleButtonClick={handleButtonClick} active={active} />
        </div>
    );
};

export default ButtonGallery;
