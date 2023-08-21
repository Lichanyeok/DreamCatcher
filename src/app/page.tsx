import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <div className="relative h-screen w-screen">
        <Image
          src="/%E1%84%89%E1%85%A6%E1%84%85%E1%85%A9.png"
          alt="MainImg"
          layout="fill"></Image>
      </div>
      <div className="absolute z-10 h-1/6 w-10/12 bottom-1/3 p-4 border-t-4 border-solid border-textBoxTop rounded-b-2xl shadow-md text-white text-center  bg-textBox">
        <p>네가 알고싶은 꿈을 말해봐.</p>
      </div>
    </div>
  );
}
