import React from "react";
import Container from "./Container";

const Footer = () => {
  return (
    <footer className="mt-auto bg-neutral-600 py-5 text-white">
      <Container>
        <div className="flex justify-between items-center">
          <p className="font-heading">
            Copy Right
            <a className="text-green-600 font-bold" href="https://mms-it.com">
              © MMS IT
            </a>
          </p>
          <a
            href="#headerSpacer"
            className="border border-neutral-300 h-12 w-12 flex justify-center items-center hover:bg-neutral-700 hover:border-neutral-500 active:scale-95 duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 stroke-1 hover:scale-125"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
              />
            </svg>
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
