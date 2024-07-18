
const Buttons = () => {
    return (
        <div className="flex justify-between mt-4 flex-wrap gap-3">
            <button className="bg-grey bg-slate-400 mr-7 hover:bg-blue-700 text-white   w-72 font-bold py-2 px-4 rounded-3xl ">
                Account Holder
            </button>
            <button className="bg- bg-slate-950 w-72 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-3xl ">
               Account Number
            </button>
        </div>
    );
};

export default Buttons;
