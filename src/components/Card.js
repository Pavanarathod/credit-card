import { useEffect, useState } from "react";
import database from "../firebase";
import CreditList from "./CreditList";
import firebase from "firebase";

const Card = () => {
  const [one, setOne] = useState("");
  const [two, setTwo] = useState("");
  const [three, setThree] = useState("");
  const [four, setFour] = useState("");
  const [creditData, setCreditData] = useState([]);

  const finalCode = `${one} ${two} ${three} ${four}`;

  const submitCode = (e) => {
    e.preventDefault();
    database.collection("data").add({
      creditData: finalCode,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setOne("");
    setTwo("");
    setThree("");
    setFour("");
  };

  useEffect(() => {
    database
      .collection("data")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setCreditData(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  return (
    <div>
      <div className="bg-gray-900 rounded-lg p-3 max-w-lg mt-9 h-48 shadow-lg border border-white text-white rounded-sm">
        <div className="ml-3">
          <h1 className="text-lg font-sans font-semibold text-green-500">
            Credit Card
          </h1>
        </div>
        <div className="flex mt-4 ml-3">
          <form className="">
            <input
              value={one}
              onChange={(e) => setOne(e.target.value)}
              type="text"
              maxLength={4}
              className="bg-transparent border border-gray-500 rounded-md text-white w-16 sm:w-24 focus:ring-2 focus:ring-pink-400 focus:outline-none  mr-3 p-1"
            />
            <input
              value={two}
              onChange={(e) => setTwo(e.target.value)}
              type="text"
              maxLength={4}
              className="bg-transparent border border-gray-500 rounded-md text-white w-16 sm:w-24 focus:ring-2 focus:ring-pink-400 focus:outline-none mr-3 p-1"
            />
            <input
              value={three}
              onChange={(e) => setThree(e.target.value)}
              type="text"
              maxLength={4}
              className="bg-transparent border border-gray-500 rounded-md text-white w-16 sm:w-24 focus:ring-2 focus:ring-pink-400 focus:outline-none mr-3 p-1"
            />
            <input
              value={four}
              onChange={(e) => setFour(e.target.value)}
              type="text"
              maxLength={4}
              className="bg-transparent border border-gray-500 rounded-md text-white w-16 sm:w-24 focus:ring-2 focus:ring-pink-400 focus:outline-none mr-3 p-1"
            />
            <div className="flex justify-center mt-10">
              <button
                type="submit"
                onClick={submitCode}
                className="bg-blue-500 hover:bg-blue-400 px-4 py-1 text-white text-base font-bold tracking-wider focus:outline-none rounded-md"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="px-2 border-b border-green-500 mt-3">
        <h1 className="text-red-500 text-lg font-semibold">Card List</h1>
      </div>
      <div>
        {creditData?.map(({ id, data: { creditData } }) => (
          <CreditList id={id} data={creditData} key={id} />
        ))}
      </div>
    </div>
  );
};

export default Card;
