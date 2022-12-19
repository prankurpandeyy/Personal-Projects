import React from "react";

function Navbar() {
  return (
    <div>
      <nav class=" relative w-full flex flex-wrap items-center justify-between py-2 bg-white text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg navbar navbar-expand-lg navbar-light">
        <div class="container-fluid w-full flex flex-wrap items-center justify-between px-6">
          <button
            class=" navbar-toggler text-gray-500 border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <div className="flex justify-center items-center">
              <span className="material-icons  text-black">menu</span>
              <h1 className=" text-black  font-inter font-bold text-sm ml-2">
                Crypto Tracker
              </h1>
            </div>
          </button>
          <div
            class="collapse navbar-collapse flex-grow items-center"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav  flex-col pl-0 list-style-none mr-auto">
              <li class="nav-item p-2 flex justify-center items-center">
                <span className="material-icons">
                  <svg
                    width="21"
                    height="23"
                    viewBox="0 0 21 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.7502 16.7399C20.997 16.8855 21.0721 17.209 20.9023 17.4397C19.6077 19.1986 17.7858 20.5593 15.6642 21.3437C13.3719 22.1912 10.8513 22.321 8.4747 21.714C6.09813 21.107 3.99165 19.7954 2.46649 17.973C0.941322 16.1505 0.0783558 13.9138 0.00508226 11.5934C-0.0681913 9.27298 0.652114 6.99187 2.05958 5.08709C3.46705 3.1823 5.48703 1.75486 7.8211 1.01565C10.1552 0.27645 12.6795 0.264688 15.0212 0.982106C17.1887 1.64615 19.0933 2.90232 20.4966 4.58559C20.6804 4.80608 20.6245 5.1342 20.3861 5.29411L17.8494 6.99566C17.6291 7.14348 17.333 7.09205 17.1592 6.89154C16.2705 5.86625 15.0859 5.10013 13.7437 4.68893C12.2456 4.22997 10.6306 4.23749 9.13745 4.71039C7.64425 5.18329 6.35198 6.09648 5.45157 7.31506C4.55115 8.53363 4.09034 9.99295 4.13722 11.4774C4.1841 12.9619 4.73617 14.3928 5.71188 15.5587C6.68759 16.7246 8.03519 17.5637 9.55558 17.952C11.076 18.3403 12.6885 18.2572 14.155 17.7151C15.4679 17.2296 16.6014 16.3993 17.4238 15.327C17.5855 15.1161 17.8787 15.047 18.1077 15.182L20.7502 16.7399Z"
                      fill="black"
                    />
                  </svg>
                </span>
                <span class="nav-link text-black p-0 font-inter font-bold text-sm leading-9">
                  Crypto Tracker
                </span>
              </li>
            </ul>
          </div>

          <div class="flex items-center relative">
            <span className="material-icons">search</span>
            <span className="material-icons">menu</span>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
