import React, { useState } from "react";
import { motion } from "framer-motion";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Image from "../../components/collection/form/Image";
import Title from "../../components/collection/form/Title";
import Member from "../../components/collection/form/Member";
import TourName from "../../components/collection/form/TourName";
import Photo from "../../components/collection/form/Photo";
import { TourOptionType } from "../../data/data";

type CreateProps = {
  onClose: () => void;
};

const Create: React.FC<CreateProps> = ({ onClose }) => {
  const [selectedTour, setSelectedTour] = useState<TourOptionType | null>(null);
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleFabClick = () => {
    onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 100, y: 100 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      exit={{ opacity: 0, x: 100, y: 100 }}
      transition={{ duration: 0.3 }}
      className="w-full m-auto bg-white p-5 shadow-md h-screen"
      tabIndex={0}
    >
      <div className="w-2/3 flex flex-col justify-center h-screen m-auto">
        <h1 className="text-xl font-bold">マイ コレクション登録</h1>
        <div className="my-5">
          <form
            method="POST"
            encType="multipart/form-data"
            onSubmit={handleSubmit}
          >
            {/* 写真選択 */}
            <Image />

            {/* タイトル */}
            <Title />

            {/* メンバー */}
            <Member />

            {/* ツアー名 */}
            <TourName
              setSelectedTour={setSelectedTour}
              setSelectedPhoto={setSelectedPhoto}
              selectedTour={selectedTour}
            />

            {/* 写真セット */}
            <Photo
              setSelectedPhoto={setSelectedPhoto}
              selectedTour={selectedTour}
              selectedPhoto={selectedPhoto}
            />
          </form>
        </div>
        <div className="fixed bottom-20 right-5">
          <Fab
            style={{
              backgroundColor: "#f9a8d4",
              color: "white",
            }}
            aria-label="add"
            onClick={handleFabClick}
          >
            <AddIcon sx={{ rotate: "45deg" }} />
          </Fab>
        </div>
      </div>
    </motion.div>
  );
};

export default Create;
