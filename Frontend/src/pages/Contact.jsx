import React from "react";
import FooterComponents from "../card/FooterComponents";
import Button from "../componets/Button";
import { FaImage } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white gap-20 py-20">
      <div className="w-full">
        <div
          className="flex flex-col items-center justify-center gap-2"
          style={{ padding: "20px 20px" }}
        >
          <h2 className="text-gray-500 text-lg mb-2">Get In Touch</h2>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Join Our Newsletter
          </h1>
        </div>

        <div
          className="flex items-center justify-center gap-2"
          style={{ padding: "10px 10px 20px 10px" }}
        >
          <p
            className="text-gray-600 text-sm leading-relaxed mb-6"
            style={{ padding: "20px 20px" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
            nisl,
            <br />
            elementum elit arcu amet nec non eget felis. Eu ut cursus luctus
            nunc.
          </p>
        </div>

        <div
          className="flex flex-row items-center justify-center gap-20"
          style={{ padding: "20px 20px" }}
        >
          <input
            type="email"
            placeholder="Your email"
            className="border border-gray-200 rounded-md px-4 py-3 w-72 focus:outline-none focus:ring-1 focus:ring-gray-300 transition-all"
            style={{ padding: "10px 10px" }}
          />
          <Button variant="primary">Subscribe</Button>
        </div>

        {/* 2. Image UI Section (Gray Bar) */}
        <div className="w-full bg-gray-500 py-24" style={{padding:"30px 30px"}}>
          {/* max-w-7xl keeps the content from touching screen edges on huge monitors */}
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 px-10">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="flex justify-center items-center">
                <div className="bg-gray-500 w-full max-w-[200px] aspect-[4/3] rounded-sm flex items-center justify-center border border-gray-500">
                  <FaImage className="w-32 h-32 md:w-36 md:h-36 text-white opacity-80" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <FooterComponents />

    </div>
  );
};

export default Contact;
