import database from "../firebase";

const CreditList = ({ id, data }) => {
  const delteData = () => {
    database.collection("data").doc(id).delete();
  };

  return (
    <div className="mt-3 px-3">
      <div className="mt-4 flex items-center justify-between">
        <div>
          <h2 className="text-base font-semibold">{data}</h2>
        </div>
        <div>
          <button
            onClick={delteData}
            className="px-3 py-1 focus:outline-none bg bg-green-400 hover:bg-green-500 text-black font-semibold rounded-md"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreditList;
