import React, { useEffect, useState } from "react";
import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";
import Swal from "sweetalert2";

function LikeDislike({ children, like, dislike }) {
  const [likes, setLikes] = useState(false);
  const [dislikes, setDislikes] = useState(false);

  const handleLikes = () => {
    setLikes(!likes);
    setDislikes(false);
  };

  const handleDislikes = () => {
    setDislikes(!dislikes);
    setLikes(false);
  };

  //   useEffect(() => {
  //     if (isActive) {
  //       Swal.fire({
  //         icon: "success",
  //         title: "Berhasil Bookmark",
  //       });
  //     }
  //   }, [isActive]);

  return (
    <>
      <div className="item-reaction-click">
        <FiThumbsDown
          className={`text-red-1 cursor-pointer ${
            dislikes ? "fill-red-1" : ""
          }`}
          onClick={handleDislikes}
        />
        <span className="text-p21">{dislike}</span>
      </div>
      <div className="item-reaction-click">
        <FiThumbsUp
          className={`text-primary-2 cursor-pointer ${
            likes ? "fill-primary-2" : ""
          }`}
          onClick={handleLikes}
        />
        <span className="text-p21">{like}</span>
      </div>
    </>
  );
}

export default LikeDislike;
