import Profile from "./Profile";
import { GiWyvern } from "react-icons/gi";
const ContactsContainer = () => {
  return (
    <div className="relative md:w-[25vm] lg:w-[15vm] xl:w-[10vm] w-3/6 bg-gray-900 border-r-2 border-white">
      <div className="pt-0 bg-white rounded-md m-2">
        <Logo />
      </div>
      <div className="my-5">
        <div className="flex items-center justify-between pr-10">
          <Title text="DIrect Messages" />
        </div>
      </div>
      <div className="my-5">
        <div className="flex items-center justify-between pr-10">
          <Title text="channels" />
        </div>
      </div>
      <Profile className="" />
    </div>
  );
};

export default ContactsContainer;

const Logo = () => {
  return (
    <div className="flex p-5  justify-start items-center gap-2">
      <svg
        id="logo-38"
        width="78"
        height="32"
        viewBox="0 0 78 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {" "}
        <path
          d="M55.5 0H77.5L58.5 32H36.5L55.5 0Z"
          className="ccustom"
          fill="#131591"
        ></path>{" "}
        <path
          d="M35.5 0H51.5L32.5 32H16.5L35.5 0Z"
          className="ccompli1"
          fill="#3a3cd6"
        ></path>{" "}
        <path
          d="M19.5 0H31.5L12.5 32H0.5L19.5 0Z"
          className="ccompli2 rounded-md"
          fill="#6e91e8"
        ></path>{" "}
      </svg>
      <span className="text-3xl font-semibold text-blue-700 opacity-50 ">
        Buddy
      </span>
      <GiWyvern className="text-blue-600 text-5xl bg-gradient-to-t from-blue-600 rounded-full" />
    </div>
  );
};

const Title = ({ text }) => {
  return (
    <h6 className="uppercase text-neutral-100 pl-10 font-light text-opacity-90 text-sm tracking-widest">
      {text}
    </h6>
  );
};
