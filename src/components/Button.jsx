function Button({ label, borderColor, bgColor , txtColor }) {
  return (
    <button
      className={`border  ${borderColor ? borderColor : "border-blue-400"} ${
        bgColor ? bgColor : "bg-white"
      }  ${txtColor ? txtColor : "text-black"}   rounded-md p-1 px-4 m-4`}
    >
      {label}
    </button>
  );
}

export default Button;
