import React from "react";
import Layout from "../components/Layout/Layout";
function Contact() {
  return (
    <Layout>
      <div>
        <h2 className="py-10 text-center font-display font-bold">
          Contact Page
        </h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3584.402524334033!2d84.50927247447267!3d26.05309829650476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3992eeb7872ad10b%3A0xb6f22662e60ac5fd!2sJalalpur%2C%20Bihar%20841404!5e0!3m2!1sen!2sin!4v1716751866102!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="bg-stone-50">
          <div className="md:m-auto md:w-1/2 p-10">
            <h2 className="my-5">Leave Message</h2>
            <div className="border rounded-lg p-10 bg-stone-100 w-full">
              <form action="">
                <div className="bg-stone-100 w-[100%] border mb-5 ">
                  <input
                    type="text"
                    placeholder="username"
                    name="username"
                    value=""
                    required
                    autoComplete="off"
                    className="w-[100%] p-2"
                  />
                </div>
                <div className="border w-[100%] mb-5">
                  <input
                    type="email"
                    placeholder="email"
                    name="Email"
                    value=""
                    required
                    autoComplete="off"
                    className="w-[100%] p-2"
                  />
                </div>
                <div className="mb-5">
                  <textarea
                    className="w-[100%] border p-2"
                    placeholder="Enter your Message"
                    name="Messages"
                    required
                    cols="50"
                    rows="5"
                    autoComplete="off"
                  ></textarea>
                </div>

                <input
                  type="submit"
                  className="border p-2 w-[100px] bg-blue-600 text-white cursor-pointer"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
