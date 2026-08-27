function Button(props) {
  return (
    <button
      {...props}
      className="bg-blue-500 hover:bg-blue-600 p-2 rounded-md text-white"
    >
      {props.children}
    </button>
  );
}
function ButtonR(props) {
  return (
    <button
      {...props}
      className="bg-red-500 hover:bg-red-600 p-2 rounded-md text-white"
    >
      {props.children}
    </button>
  );
}

export { Button, ButtonR };
