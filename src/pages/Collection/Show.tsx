import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemType } from "../../data/data";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import axios from "axios";

const Show = () => {
  const [count, setCount] = useState<number>(0);
  const [item, setItem] = useState<{ [key: number]: ItemType }>();

  const { id } = useParams();

  useEffect(() => {
    if (item) {
      setCount(item[0].item_num);
    }

    axios
      .get("http://localhost:3003/item", { params: { id: id } })
      .then((response) => {
        const { item } = response.data;
        setItem(item);
      });
  }, []);

  if (!id) {
    return (
      <div className="mt-[70px] h-screen flex items-center justify-center">
        <p className="text-3xl">IDが正しくありません</p>
      </div>
    );
  }

  if (!item) {
    return (
      <div className="mt-[70px] h-screen flex items-center justify-center">
        <p className="text-3xl">アイテムが見つかりません</p>
      </div>
    );
  }

  console.log(item);

  return (
    <div className="my-[70px] w-full flex justify-center">
      <div className="w-2/3">
        <h2 className="text-4xl text-center mb-5">
          {item[Number(id)].item_title}
        </h2>
        <figure className="flex items-center justify-center">
          <img
            src={item[Number(id)].img_path}
            alt={item[Number(id)].item_title}
          />
        </figure>
        <div className="my-2 flex items-center">
          <div
            className={`bg-[${
              item[Number(id)].member.color
            }] mr-3 py-1 px-3 rounded-sm text-white`}
          >
            <span className="text-xl">{item[Number(id)].member.name}</span>
          </div>
          <span className="text-lg text-gray-400">
            #{item[Number(id)].tour.tour_title}
          </span>
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
