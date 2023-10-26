// import { AiFillStar } from "react-icons/ai";
// import heroImage from "../assets/heroimage.png"

// const Hero = () => {
//   return (
//     <section className="bg-secondary w-full">
//         <div className="max-w-[1400px] w-[89%] m-auto grid
//         m:grid-cols-2 grid-cols-1 gap-10 items-center">
//             {/* LEFT SIDE */}
//             <div className="mt-20 md:mt-0 text-center
//             md:text-start">
//                 <h2 className="text-white text-2xl font-bold
//                 drop-shadow-lg">Welcome to </h2>
//                 <h1 className="text-white text-6xl font-bold
//                 drop-shadow-lg mb-3">Imagine Media</h1>
//                 <p className="text-gray-500">Discover limitless growth possibilities through innovation
//                 social media strategies, drive by Imagine Media's expertise and passion for success.</p>
//             <div className="flex gap-4 md:gap-1 mt-6 justify-center md:justify-start ">
//                 <a href="/" className="duration-500 hover:bg-[#f88eb7] 
//                 py-2 px-6 rounded text-white shadown-lg drop-shadow
//                 bg-primary">Pricing</a>

//                 <a href="/" className="duration-500 hover:bg-[#f88eb7] 
//                 py-2 px-6 rounded text-white shadown-lg drop-shadow
//                 bg-primary">More Info</a>
//              </div>
//             </div>

//             {/* RIGHT SIDE */}
//             <div className="relative w-full">
//                 <img src={heroImage} alt="imagine-hero" className="w-full lg:h-[550px] h-[450px]
//                 object-cover"/>
//             </div>
//         </div>
//     </section>
//   )
// }

// export default Hero


import heroImage from "../assets/heroimage.png";
import { AiFillStar } from "react-icons/ai";
const Hero = () => {
  return (
    <section className="bg-[#BDE0FE]  w-full">
      <div className="max-w-[1400px] w-[89%] m-auto grid  md:grid-cols-2 grid-cols-1 gap-10 items-center">
        {/* LEFT SIDE */}
        <div className="mt-20 md:mt-0 text-center md:text-start">
          <h2 className="text-white text-2xl font-bold drop-shadow-lg ">Welcome to</h2>
          <h1 className="text-white text-6xl font-bold drop-shadow-lg mb-3">InfluenceHub</h1>
          <p className="text-gray-400">
            Discover limitless growth possibilities through innovative social media strategies, driven by InfluenceHub's expertise and passion for success.
          </p>
          <div className="flex gap-4 md:gap-1 lg:gap-4 mt-6 justify-center md:justify-start">
            <a
              className="duration-500 hover:bg-[#f88eb7] bg-[#FFAFCC] py-1 px-6 rounded text-white shadow-lg drop-shadow"
              href="/"
            >
              Pricing
            </a>
            <a
              className="duration-500 hover:bg-[#f88eb7] bg-[#ffafcc] py-1 px-6 rounded text-white shadow-lg drop-shadow"
              href="/"
            >
              More Info
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative w-full">
          <img src={heroImage} className="w-full lg:h-[550px] h-[450px] object-cover" alt="" />
          <div className="absolute bottom-2 md:bottom-10 lg:bottom-20 left-2 md:left-5 p-4 m-3 w-44 rounded-lg shadow-md bg-white text-center">
            <span className="text-3xl font-bold mb-0 text-[#FFAFCC]">5000+</span>
            <h6 className="text-sm text-slate-400 mt-1">Reviews</h6>
          </div>
          <div className="absolute right-0 top-5 md:top-10 lg:top-10 md:right-0 lg:right-10 p-4 w-44 rounded-lg shadow-md bg-white m-3 text-center animate-bounce">
            <div className="font-semibold text-[#FFAFCC] flex justify-center text-[18px]">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <h6 className="text-sm text-slate-400 mt-1">Top Rated Service</h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;