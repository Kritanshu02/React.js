const Box = ({ heading, data }) => {
  return (
      <div className="w-70 h-50 bg-white shadow-md  flex flex-col justify-center items-center m-4 hover:bg-stone-100">
        <h3 className="text-lg font-semibold text-stone-700 text-center">{heading}</h3>
        <p className="text-2xl font-bold text-stone-900 mt-2">{data ? data : 0}</p>
      </div>
    
  );
};

export default Box;
