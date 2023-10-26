const Contact = () => {
    return (
      <section className="py-20" id="contact">
        <div className="w-[89%] m-auto max-w-[1400px] ">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-6 md:text-2xl text-xl font-semibold">Get In Touch !</h3>
  
            <p className="text-slate-400 max-w-xl mx-auto text-[15px]">
              We would love to hear from you! Please allow 24 - 48 hours for a response.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-2 mt-8 gap-[80px]">
            {/* FORM */}
            <div className="lg:col-span-6">
              <form>
                <div className="grid lg:grid-cols-12 lg:gap-5">
                  <div className="lg:col-span-6 mb-10">
                    <input
                      name="name"
                      type="text"
                      className="w-full py-2 px-3 border rounded h-10 outline-none bg-transparent focus:border-[#FFAFCC] text-[15px]"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="lg:col-span-6 mb-10">
                    <input
                      name="email"
                      type="email"
                      className="w-full py-2 px-3 border rounded h-10 outline-none bg-transparent focus:border-[#FFAFCC] text-[15px]"
                      placeholder="Your Email"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1">
                  <div className="mb-10">
                    <input
                      name="subject"
                      type="text"
                      className="w-full py-2 px-3 border rounded h-10 outline-none bg-transparent focus:border-[#FFAFCC] text-[15px]"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="mb-5">
                    <textarea
                      style={{ resize: "none" }}
                      name="message"
                      className="w-full py-2 px-3 border rounded h-28 outline-none bg-transparent focus:border-[#FFAFCC] text-[15px]"
                      placeholder="Message"
                    ></textarea>
                  </div>
                </div>
                <button type="submit" id="submit" name="send" className=" bg-[#FFAFCC] text-white rounded-md py-3 px-5">
                  Send Message
                </button>
              </form>
            </div>
  
            <div className="lg:col-span-6">
              <div style={{ width: "100%" }}>
                <iframe
                  width="100%"
                  height="350"
                  src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=51%20S%20Pearl%20St,%20Albany,%20NY%2012207+(Imagine%20Media)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                >
                  <a href="https://www.maps.ie/population/">Population calculator map</a>
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Contact;