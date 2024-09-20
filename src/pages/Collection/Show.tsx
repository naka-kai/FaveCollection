import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { itemData } from "../../data/data";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

const Show = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    if (item) {
      setCount(item.num);
    }
  }, []);

  const { id } = useParams();
  if (!id) {
    return (
      <div className="mt-[70px] h-screen flex items-center justify-center">
        <p className="text-3xl">IDが正しくありません</p>
      </div>
    );
  }

  const item = itemData.find((item, index) => index + 1 === parseInt(id));
  if (!item) {
    return (
      <div className="mt-[70px] h-screen flex items-center justify-center">
        <p className="text-3xl">アイテムが見つかりません</p>
      </div>
    );
  }

  return (
    <div className="my-[70px] w-full flex justify-center">
      <div className="w-2/3">
        <h2 className="text-4xl text-center mb-5">{item.title}</h2>
        <figure>
          <img src={item.img} alt={item.title} />
        </figure>
        <div className="my-2 flex items-center">
          <div
            className={`bg-[${item.member.color}] mr-3 py-1 px-3 rounded-sm text-white`}
          >
            <span className="text-xl">{item.member.name}</span>
          </div>
          <span className="text-lg text-gray-400">{item.tour}</span>
        </div>
        <div className="flex justify-end items-center">
          <button
            onClick={() => setCount((prev) => (prev - 1 >= 0 ? prev - 1 : 0))}
          >
            <RemoveCircleIcon className="text-pink-300" fontSize="large" />
          </button>
          <p className="text-4xl mx-2">{count}</p>
          <button onClick={() => setCount((prev) => prev + 1)}>
            <AddCircleIcon className="text-pink-300" fontSize="large" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Show;
