function CategoryChip({ category, isChosen, onClick }) {
  const { name } = category;
  return (
    <div
      onClick={onClick}
      className={`${
        isChosen ? "bg-purple-400 text-white" : "bg-white text-black"
      } p-2 
        cursor-pointer
        hover:bg-purple-100
        border-purple-400 border px-4 rounded-md`}
    >
      <h1>{name}</h1>
    </div>
  );
}

export default CategoryChip;
