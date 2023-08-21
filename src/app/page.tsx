import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center">
      <div className="absolute w-screen z-10">
        <Image
          src="https://github.com/Lichanyeok/DreamCatcher/blob/main/public/%EC%84%B8%EB%A1%9C.png"
          alt="MainImg"
          layout="responsive"></Image>
      </div>
      <div className="absolute z-20 h-1/6 w-10/12 bottom-1/3 p-4 border-t-4 border-solid border-textBoxTop rounded-b-2xl shadow-md text-white text-center  bg-textBox">
        <p>여긴 어떻게 찾아온거야?</p>
      </div>
    </div>
  );
}
