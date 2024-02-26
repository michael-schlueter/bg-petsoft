import Image from "next/image";

export default function PetList() {
  return (
    <ul className="bg-white border-b border-light">
      <li>
        <button className="flex items-center h-[70px] w-full cursor-pointer px-5 text-base gap-3 hover:bg-[#EFF1F2] focus:bg-[#EFF1F2] transition">
          <Image
            src="https://bytegrad.com/course-assets/react-nextjs/pet-placeholder.png"
            alt="Pet image"
            width={45}
            height={45}
            className="w-[45px] h-[45px] rounded-full object-cover"
          />
          <p className="font-semibold">Benjamin</p>
        </button>
      </li>
      <li>
        <button className="flex items-center h-[70px] w-full cursor-pointer px-5 text-base gap-3 hover:bg-[#EFF1F2] focus:bg-[#EFF1F2] transition">
          <Image
            src="https://bytegrad.com/course-assets/react-nextjs/pet-placeholder.png"
            alt="Pet image"
            width={45}
            height={45}
            className="w-[45px] h-[45px] rounded-full object-cover"
          />
          <p className="font-semibold">William</p>
        </button>
      </li>
    </ul>
  );
}
