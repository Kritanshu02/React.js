function Square({ value, onSquareClick }) {
  return (
    <button className="w-20 h-20 text-2xl font-bold bg-white border border-gray-400 
                 hover:bg-gray-200 hover:scale-107"
      onClick={onSquareClick}
    >
      {value || "?"}
    </button>
  );
}

export default Square;




