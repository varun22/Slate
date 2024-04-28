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
      href="#"
      className="block w-full p-6 bg-white border border-gray-200 rounded-3xl shadow hover:bg-gray-100 bg-white"
    >
      <div className="py-4 pb-6 flex flex-row">
        <div className=" text-5xl font-semibold  text-gray-900">
          {values.title}
        </div>
      </div>
      <div className="py-4  text-xl font-light  text-gray-900 ">
        {values.question}
      </div>

      <div className="flex flex-row">
        <Image alt="" src={people}></Image>
        <p className="font-normal text-gray-900 text-sm px-2 self-end pb-1">
          {values.replies} replies
        </p>
      </div>
    </a>
  );
};

const data: any[] = [
  {
    title: "NPM install not working",
    question:
      "The terminal says install nvm but nvm install npm not working? Am I tripping? ",
    replies: 1,
  },
  {
    title: "Professor Grading unclear",
    question: "Professor says 93% is F?? I thought there was a curve...",
    replies: 3,
  },
  {
    title: "How do I git pull without errors? ",
    question: "I have never used github before. How do I pull before I merge? ",
    replies: 18,
  },
];
export default function Dashboard() {
  return (
    <div className={openSans.variable}>
      <div className="bg-[#F5F5F5]">
        <div className="py-4 flex flex-row">
          <div className="  pl-16 pt-16 pr-4 text-black font-semibold text-6xl">
            ECS 161
          </div>
          <div className="self-center">
            <Image alt="" src={arrow}></Image>
          </div>
        </div>
        <div className="flex flex-row gap-8 p-16">
          <button
            type="button"
            className="py-2.5 px-5 me-2 mb-2  font-extralight text-xl font-medium text-white focus:outline-none bg-neutral-700 rounded-lg border border-gray-200 hover:bg-neutral-500 focus:z-10 focus:ring-4 focus:ring-gray-100"
          >
            Search Posts
          </button>
          <button
            type="button"
            className="py-2.5 px-5 me-2  font-extralight mb-2 text-xl font-medium bg-white text-neutral-700 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-100 "
          >
            New Post
          </button>
        </div>

        <button
          data-modal-target="authentication-modal"
          data-modal-toggle="authentication-modal"
          className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
        >
          Toggle modal
        </button>

        <div
          id="authentication-modal"
          tabIndex={-1}
          aria-hidden="true"
          className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
          <div className="relative p-4 w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Sign in to our platform
                </h3>
                <button
                  type="button"
                  className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="authentication-modal"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="p-4 md:p-5">
                <form className="space-y-4" action="#">
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="name@company.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Your password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      required
                    />
                  </div>
                  <div className="flex justify-between">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="remember"
                          type="checkbox"
                          value=""
                          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                          required
                        />
                      </div>
                      <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Remember me
                      </label>
                    </div>
                    <a
                      href="#"
                      className="text-sm text-blue-700 hover:underline dark:text-blue-500"
                    >
                      Lost Password?
                    </a>
                  </div>
                  <button
                    type="submit"
                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Login to your account
                  </button>
                  <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                    Not registered?{" "}
                    <a
                      href="#"
                      className="text-blue-700 hover:underline dark:text-blue-500"
                    >
                      Create account
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        
        <div className="px-16 flex flex-row gap-12 flex-wrap">
          {data.map((values, index) => (
            <Card key={index} values={values} />
          ))}
        </div>
      </div>
    </div>
  );
}
