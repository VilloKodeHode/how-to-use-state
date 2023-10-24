import React, { useState, useEffect } from 'react';


function Calculator() {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    const handleButtonClick = (value) => {
        if (value === '=') {
            try {
                const evalResult = eval(input);
                setResult(evalResult);
            } catch (error) {
                setResult('Error');
            }
        } else if (value === 'C') {
            setInput('');
            setResult('');
        } else {
            setInput((prevInput) => prevInput + value);
        }
    };

    useEffect(() => {
        const handleKeyPress = (event) => {
            const key = event.key;

            if (/[\d+\-*/.=C]/.test(key)) {
                if (key === '=' || key === 'Enter') {
                    event.preventDefault();
                    setResult(input);
                } else if (key === 'Escape') {
                    handleButtonClick('C');
                } else {
                    handleButtonClick(key);
                }
            }
        };


        window.addEventListener('keydown', handleKeyPress);


        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [input]);

    return (
        <>
            <a href="/buttongallery">
                <button
                    className={`bg-cyan-500 hover:bg-cyan-700 hover:scale-105 text-white font-bold transition-all py-2 px-4 rounded active:scale-95`}

                >
                    To button gallery
                </button>
            </a>
            <div className='p-4 border-2 border-slate-900 bg-slate-700'>
                <div className="">
                    <input type="text" className='w-full p-4 bg-slate-950' value={input} readOnly />
                    <div className='flex items-center justify-center w-full h-12'>
                        <div className="">{result}</div>
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-2">
                    {[7, 8, 9, '+', 4, 5, 6, '-', 1, 2, 3, '*', 'C', 0, '=', '/'].map((item, index) => (
                        <button className='h-12 px-6 text-xl bg-slate-500 focus:bg-slate-800' key={index} onClick={() => handleButtonClick(item)}>
                            {item}
                        </button>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Calculator;
