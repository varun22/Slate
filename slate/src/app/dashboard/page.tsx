import { Open_Sans } from "next/font/google";
import Image from "next/image";
import people from "../../../public/people.png";
import arrow from "../../../public/arrow.svg";
const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  //👇 Add variable to our object
  variable: "--font-opensans",
});

const Card = ({ values }: any) => {
  return (
    <a
      href="/classes"
      className="block w-[410px] p-6 bg-white border border-gray-200 rounded-3xl shadow hover:bg-gray-100 bg-white"
    >
      <div className="py-4  text-xl font-bold  text-gray-900 ">
        University of California, Davis
      </div>
      <div className="py-4 pb-20 flex flex-row">
        <div className=" text-5xl font-semibold  text-gray-900">
          {values.class}
        </div>
        <div className="pl-4 pt-2">
          <Image alt="" src={arrow}></Image>
        </div>
      </div>
      <div className="flex flex-row">
        <Image alt="" src={people}></Image>
        <p className="font-normal text-gray-900 text-sm px-2 self-end pb-1">
          {values.sources} sources
        </p>
      </div>
    </a>
  );
};

const data: any[] = [
  { class: "ECS 161", sources: 123 },
  { class: "ECS 171", sources: 124 },
  { class: "ECS 120", sources: 76 },
  { class: "ECS 154", sources: 261 },
  { class: "ECS 140", sources: 110 },
];
export default function Dashboard() {
  return (
    <div className={openSans.variable}>
      <div className="bg-[#F5F5F5]">
        <div className=" p-16 text-black font-semibold text-6xl">Classes</div>

        <div className="px-16 flex flex-row gap-12 flex-wrap">
          {data.map((values, index) => (
            <Card key={index} values={values} />
          ))}
        </div>
        <div className="flex flex-row gap-8 p-16">
          <button
            type="button"
            className="py-2.5 px-5 me-2 mb-2  font-extralight text-xl font-medium text-white focus:outline-none bg-[#007585] rounded-lg border border-gray-200 hover:bg-neutral-500 focus:z-10 focus:ring-4 focus:ring-gray-100"
          >
            Create Class
          </button>
          <button
            type="button"
            className="py-2.5 px-5 me-2  font-extralight mb-2 text-xl font-medium bg-white text-neutral-700 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-100 "
          >
            Join Class
          </button>
        </div>
      </div>
    </div>
  );
}
