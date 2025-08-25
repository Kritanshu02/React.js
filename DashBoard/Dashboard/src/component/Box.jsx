const Box = ({ heading, data }) => {
  return (
    <div className="max-w-xs rounded-lg overflow-hidden shadow-md bg-white hover:scale-105 transform transition-all duration-300">
      <div className="px-6 py-4 text-center text-stone-600">
        <h3 className="text-2xl font-semibold">{heading}</h3>
        <p className="text-4xl mt-2">{data ? data : 0}</p>
      </div>
    </div>
  );
};

export default Box;









