const Footer = () => {
    return (
      <footer className="footer bg-[#FFAFCC] text-white relative">
        <div className="w-[89%] m-auto max-w-[1400px] pt-4">
          <div className="absolute top-[-1px] left-0 w-full overflow-hidden">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path
                fill="#fff"
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
          <div className="container mx-auto md:pt-28 md:pb-20 pt-10">
            <div className="flex flex-col md:flex-row items-center gap-10 justify-between">
              <div>
                <a href="">
                  <h1 className="text-3xl drop-shadow text-white font-bold text-center">IMAGINE</h1>
                </a>
                <span>Where Dreams Comes True</span>
              </div>
              <div className="text-center">
                <h2 className="text-lg font-bold mb-4">Links</h2>
                <ul className="list-none space-y-3">
                  <li>
                    <a href="/" className="hover:text-gray-300">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#about" className="hover:text-gray-300">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#pricing" className="hover:text-gray-300">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="hover:text-gray-300">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
  
              <div className="text-center">
                <h2 className="text-lg font-bold mb-4">Important</h2>
                <ul className="list-none space-y-3">
                  <li>
                    <a href="#" className="hover:text-gray-300">
                      Terms of Use
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-300">
                      Refund Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-300">
                      Shipping Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-300">
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>
  
              <div className="text-center">
                <h2 className="text-lg font-bold mb-4">Newsletter</h2>
                <p className="mb-4">
                  Subscribe to our newsletter to receive updates on our latest products and promotions.
                </p>
                <form>
                  <div className="flex flex-wrap mx-2 p-3 md:p-0">
                    <div className="mx-auto w-3/4 md:w-2/3 px-2 mb-4 md:mb-0">
                      <input
                        type="email"
                        className="w-full bg-white rounded-md py-2 px-3 text-gray-300 placeholder-gray-400 focus:outline-[#FFAFCC]"
                        placeholder="Enter your email address"
                      />
                    </div>
                    <div className="mx-auto md:w-1/3 px-2">
                      <button
                        type="submit"
                        className="w-full bg-[#BDE0FE] duration-500 hover:bg-[#7bbdf3] rounded-md py-2 px-4 text-gray-700 hover"
                      >
                        Subscribe
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;