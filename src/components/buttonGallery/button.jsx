export const Button = ({ handleButtonClick, active, className, text, color }) => {
    let colors;

    if (color === 'blue') {
        colors = 'bg-blue-500 hover:bg-blue-700';
    } else if (color === 'green') {
        colors = 'bg-green-500 hover:bg-green-700';
    } else if (color === 'red') {
        colors = 'bg-red-500 hover:bg-red-700';
    } else if (color === 'stone') {
        colors = 'bg-stone-500 hover:bg-stone-700';
    } else if (color === 'purple') {
        colors = 'bg-purple-500 hover:bg-purple-700';
    } else {
        colors = 'bg-slate-500 hover:bg-slate-700';
    }

    return (
        <button
            className={`min-w-[195px] active:scale-95 hover:scale-105 text-white font-bold transition-all py-2 px-4 rounded ${active === text ? 'bg-yellow-500 hover:bg-yellow-600 hover:shadow-[1px_2px_0_4px_#493201] shadow-[1px_2px_0_4px_#ca8a04]' : colors
                } ${className}`}
            onClick={() => handleButtonClick(text)}
        >
            {text} Button
        </button>
    );
};
