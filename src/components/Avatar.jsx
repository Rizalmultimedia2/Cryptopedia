import Image from "next/image";
import React, { useEffect, useState } from "react";

function Avatar({ avatar, alt, height, width }) {
  const [image, setImage] = useState("");
  useEffect(() => {
    switch (avatar) {
      case "avatar1":
        setImage("https://i.ibb.co/S6hs2bj/avatar1.png");
        break;
      case "avatar2":
        setImage("https://i.ibb.co/JpWKSfQ/avatar2.png");
        break;
      case "avatar3":
        setImage("https://i.ibb.co/S7GCpdk/avatar3.png");
        break;
      case "avatar4":
        setImage("https://i.ibb.co/1QR4Nsc/avatar4.png");
        break;
      case "avatar5":
        setImage("https://i.ibb.co/WvscSfT/avatar5.png");
        break;
      case "avatar6":
        setImage("https://i.ibb.co/S7395mX/avatar6.png");
        break;
      default:
        setImage("https://i.ibb.co/S6hs2bj/avatar1.png");
        break;
    }
  }, []);
  return (
    <>
      <Image
        src={avatar}
        height={55}
        width={55}
        className="object-cover rounded-full"
        alt="Profile"
      />
    </>
  );
}

export default Avatar;
