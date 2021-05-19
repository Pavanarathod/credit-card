import Card from "./Card";
import Header from "./Header";

const Credit = () => {
  return (
    <div className="w-full">
      <div className="flex justify-center p-3 bg-gray-800">
        <Header />
      </div>
      <div className="flex justify-center">
        <Card />
      </div>
    </div>
  );
};

export default Credit;
