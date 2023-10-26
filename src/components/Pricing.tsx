import { AiFillCheckCircle } from "react-icons/ai";
import { useState } from "react";
import Switch from "@mui/material/Switch";

// Package to install
// npm install @mui/material @emotion/react @emotion/styled

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section className="bg-[#BDE0FE] py-20 mt-10" id="pricing">
      <h2 className="font-bold text-[35px] md:text-[46px] text-gray-800 text-center mb-5">
        Choose The Best Plan For You
      </h2>
      <div className="flex items-center justify-center mb-5 font-bold">
        <span>Yearly</span>
        <Switch checked={isMonthly} onChange={() => setIsMonthly(!isMonthly)} color="primary" />
        <span>Monthly</span>
      </div>

      <div className="w-[89%] m-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 max-w-[1400px]">
        <div className="rounded-2xl p-[35px] bg-white flex flex-col justify-between border border-gray-400">
          <div>
            <div className="mb-[21px]">
              <span className="text-2xl font-bold text-[#FFAFCC]">{isMonthly ? "$35" : "$100"}</span>
              <span className="text-sm font-bold text-gray-400 ml-[1px]">/{isMonthly ? "month" : "year"}</span>
            </div>
            <h5 className="text-2xl font-bold mb-[9px]">Dreamer</h5>
            <p className="text-sm font-bold text-gray-400 mb-[43px]">Basic plan but has some really good perks</p>
            <div className="w-full bg-gray-400 h-[1px] mb-[21px]"></div>
            <ul className="mb-[20px]">
              <li className="flex items-center gap-[5px] mb-[17px]">
                <div className="text-[#FFAFCC]">
                  <AiFillCheckCircle />
                </div>
                <span className="text-md text-gray-500">100 GB Storage</span>
              </li>
              <li className="flex items-center gap-[5px] mb-[17px]">
                <div className="text-[#FFAFCC]">
                  <AiFillCheckCircle />
                </div>
                <span className="text-md text-gray-500">2 Users Available</span>
              </li>
              <li className="flex items-center gap-[5px] mb-[17px]">
                <div className="text-[#FFAFCC]">
                  <AiFillCheckCircle />
                </div>
                <span className="text-md text-gray-500">1 Social Account</span>
              </li>
              <li className="flex items-center gap-[5px] mb-[17px]">
                <div className="text-[#FFAFCC]">
                  <AiFillCheckCircle />
                </div>
                <span className="text-md text-gray-500">1 Email Account</span>
              </li>
            </ul>
          </div>
          <button className="py-[11px] px-[22px] rounded-md bg-[#FFAFCC] text-white font-bold duration-500 hover:bg-[#f88eb7]">
            Get Started
          </button>
        </div>

        <div className="rounded-2xl p-[35px] bg-white flex flex-col justify-between border border-gray-400">
          <div>
            <div className="mb-[21px]">
              <span className="text-2xl font-bold text-[#FFAFCC]">{isMonthly ? "$50" : "$200"}</span>
              <span className="text-sm font-bold text-gray-400 ml-[1px]">/{isMonthly ? "month" : "year"}</span>
            </div>
            <h5 className="text-2xl font-bold mb-[9px]">Thinker</h5>
            <p className="text-sm font-bold text-gray-400 mb-[43px]">
              Our Thinker plan is perfect if your'e looking for quick growth
            </p>
            <div className="w-full bg-gray-400 h-[1px] mb-[21px]"></div>
            <ul className="mb-[20px]">
              <li className="flex items-center gap-[5px] mb-[17px]">
                <div className="text-[#FFAFCC]">
                  <AiFillCheckCircle />
                </div>
                <span className="text-md text-gray-500">300 GB Storage</span>
              </li>
              <li className="flex items-center gap-[5px] mb-[17px]">
                <div className="text-[#FFAFCC]">
                  <AiFillCheckCircle />
                </div>
                <span className="text-md text-gray-500">5 Users Available</span>
              </li>
              <li className="flex items-center gap-[5px] mb-[17px]">
                <div className="text-[#FFAFCC]">
                  <AiFillCheckCircle />
                </div>
                <span className="text-md text-gray-500">3 Social Account</span>
              </li>
              <li className="flex items-center gap-[5px] mb-[17px]">
                <div className="text-[#FFAFCC]">
                  <AiFillCheckCircle />
                </div>
                <span className="text-md text-gray-500">3 Email Account</span>
              </li>
            </ul>
          </div>
          <button className="py-[11px] px-[22px] rounded-md bg-[#FFAFCC] text-white font-bold duration-500 hover:bg-[#f88eb7]">
            Get Started
          </button>
        </div>

        <div className="rounded-2xl p-[35px] bg-[#FFAFCC] flex flex-col justify-between border border-gray-400 relative">
          <span className="absolute right-[-5px] top-[-5px] bg-white px-2 rounded-md uppercase font-bold text-sm ">
            Best Offer
          </span>
          <div>
            <div className="mb-[21px]">
              <span className="text-2xl font-bold text-white">{isMonthly ? "$100" : "$300"}</span>
              <span className="text-sm font-bold text-gray-800 ml-[1px]">/{isMonthly ? "month" : "year"}</span>
            </div>
            <h5 className="text-2xl font-bold text-white mb-[9px]">Imaginative</h5>
            <p className="text-sm font-bold text-gray-800 mb-[43px]">
              Our most selling plan with the best features and perks
            </p>
            <div className="w-full bg-gray-400 h-[1px] mb-[21px]"></div>
            <ul className="mb-[20px]">
              <li className="flex items-center gap-[5px] mb-[17px]">
                <div className="text-[#BDE0FE] drop-shadow-sm">
                  <AiFillCheckCircle />
                </div>
                <span className="text-md text-white">500 GB Storage</span>
              </li>
              <li className="flex items-center gap-[5px] mb-[17px]">
                <div className="text-[#BDE0FE] drop-shadow-sm">
                  <AiFillCheckCircle />
                </div>
                <span className="text-md text-white">10 Users Available</span>
              </li>
              <li className="flex items-center gap-[5px] mb-[17px]">
                <div className="text-[#BDE0FE] drop-shadow-sm">
                  <AiFillCheckCircle />
                </div>
                <span className="text-md text-white">10 Social Account</span>
              </li>
              <li className="flex items-center gap-[5px] mb-[17px]">
                <div className="text-[#BDE0FE] drop-shadow-sm">
                  <AiFillCheckCircle />
                </div>
                <span className="text-md text-white">10 Email Account</span>
              </li>
              <li className="flex items-center gap-[5px] mb-[17px]">
                <div className="text-[#BDE0FE] drop-shadow-sm">
                  <AiFillCheckCircle />
                </div>
                <span className="text-md text-white">Custom Branding</span>
              </li>
            </ul>
          </div>
          <button className="py-[11px] px-[22px] rounded-md duration-500 hover:bg-[#7bbdf3] bg-[#BDE0FE] text-white font-bold">
            Get Started
          </button>
        </div>

        <div className="rounded-2xl p-[35px] bg-white flex flex-col justify-between border border-gray-400">
          <div>
            <div className="mb-[21px]">
              <span className="text-2xl font-bold text-[#FFAFCC]">{isMonthly ? "$300" : "$1000"}</span>
              <span className="text-sm font-bold text-gray-400 ml-[1px]">/{isMonthly ? "month" : "year"}</span>
            </div>
            <h5 className="text-2xl font-bold mb-[9px]">Enterprise</h5>
            <p className="text-sm font-bold text-gray-400 mb-[43px]">
              Our enterprise plan is for large companies with 50+ employees
            </p>
            <div className="w-full bg-gray-400 h-[1px] mb-[21px]"></div>
            <ul className="mb-[20px]">
              <li className="flex items-center gap-[5px] mb-[17px]">
                <div className="text-[#FFAFCC]">
                  <AiFillCheckCircle />
                </div>
                <span className="text-md text-gray-500">1 TB Storage</span>
              </li>
              <li className="flex items-center gap-[5px] mb-[17px]">
                <div className="text-[#FFAFCC]">
                  <AiFillCheckCircle />
                </div>
                <span className="text-md text-gray-500">Unlimited Users Available</span>
              </li>
              <li className="flex items-center gap-[5px] mb-[17px]">
                <div className="text-[#FFAFCC]">
                  <AiFillCheckCircle />
                </div>
                <span className="text-md text-gray-500">Unlimited Social Accounts</span>
              </li>
              <li className="flex items-center gap-[5px] mb-[17px]">
                <div className="text-[#FFAFCC]">
                  <AiFillCheckCircle />
                </div>
                <span className="text-md text-gray-500">Unlimited Email Accounts</span>
              </li>
            </ul>
          </div>
          <button className="py-[11px] px-[22px] rounded-md bg-[#FFAFCC] text-white font-bold duration-500 hover:bg-[#f88eb7]">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;