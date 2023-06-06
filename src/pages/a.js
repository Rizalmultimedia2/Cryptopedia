import React from "react";

function a() {
  return (
    <div className="col-span-2 flex flex-col gap-[20px]">
      <Link href="/artikel">
        <FiChevronLeft className="inline" />
        <span>Kembali</span>
      </Link>
      <div>
        <span className="level" style={{ background: getColor(data.level) }}>
          {" "}
          {getLevel(data.level)}
        </span>
        {isLoading && <Loading />}
        <p className="text-h2">{data.articles_title}</p>
        <div>
          <span className="text-p2">{date}</span>
          <span className="text-primary-1 lg:inline block">
            {" "}
            Rizal Herliansyah Hidayat
          </span>
        </div>
      </div>
      <div className="relative h-[380px]">
        <Image
          src={data.image_url}
          fill
          className="object-cover rounded-xl"
          alt="Cover"
        />
      </div>
      <div className="flex flex-col gap-5">{body}</div>
      <div className="py-5 px-5 bg-[#CDEDE6]/25 w-fit text-p1 flex flex-row items-center gap-3 flex-wrap">
        <span className="font-semibold">
          Apakah kamu suka dengan artikel ini?{" "}
        </span>
        <FiThumbsDown
          className={`text-red-1 cursor-pointer ${dislike ? "fill-red-4" : ""}`}
          onClick={handleDislikes}
        />
        <FiThumbsUp
          className={`text-primary-1 cursor-pointer ${
            like ? "fill-primary-3" : ""
          }`}
          onClick={handleLikes}
        />
      </div>
    </div>
  );
}

export default a;
