import { doc, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";
import { db } from "../../../firebaseConfig";
import { useRouter } from "next/router";

function LikeDislike({ getLike, getDislike, post_id }) {
  const [docLikes, setLikes] = useState(false);
  const [numLike, setNumLike] = useState();
  const [numDislike, setNumDislike] = useState(0);
  const [dislikes, setDislikes] = useState(false);

  const router = useRouter();
  const { id } = router.query;

  // console.log("data getlike", getLike, "get dislike", getDislike);
  const handleLikes = async () => {
    if (!docLikes) {
      setNumLike(numLike + 1);
      if (dislikes) {
        setNumDislike(numDislike - 1);
      }
    }
    setLikes(!docLikes);
    setDislikes(false);
    const docRef = doc(db, "Sharing", id);
    await updateDoc(docRef, {
      likes: getLike + 1,
      dislikes: getDislike,
    });
  };

  const handleDislikes = async () => {
    if (!dislikes) {
      setNumDislike(numDislike + 1);
      if (docLikes) {
        setNumLike(numLike - 1);
      }
    }
    setDislikes(!dislikes);
    setLikes(false);
    const docRef = doc(db, "Sharing", id);
    await updateDoc(docRef, {
      likes: getLike,
      dislikes: getDislike + 1,
    });
  };

  useEffect(() => {
    setNumLike(getLike);
    setNumDislike(getDislike);
  }, [getLike, getDislike]);

  return (
    <>
      <div className="item-reaction-click">
        <FiThumbsDown
          className={`text-red-1 cursor-pointer ${
            dislikes ? "fill-red-1" : ""
          }`}
          onClick={handleDislikes}
        />
        <span className="text-p21">{numDislike}</span>
      </div>
      <div className="item-reaction-click">
        <FiThumbsUp
          className={`text-primary-2 cursor-pointer ${
            docLikes ? "fill-primary-2" : ""
          }`}
          onClick={handleLikes}
        />
        <span className="text-p21">{numLike}</span>
      </div>
    </>
  );
}

export default LikeDislike;
