import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-screen min-h-screen py-4 flex flex-col justify-center items-center space-y-8"
    >
      <h1 className="text-center font-quad text-primary text-4xl md:text-6xl">
        Lets <br /> Collaborate
      </h1>
      <div className="flex text-primary text-2xl space-x-4 md:text-4xl">
        <a href="https://github.com/WulfCoDev">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/dev-christian-alexander/">
          <FaLinkedin />
        </a>
      </div>
      <p className="font-primary text-white text-center text-pretty md:text-xl">
        Message me on a social above or fill out the form below
      </p>
      <p className="font-primary text-white text-center text-pretty md:text-xl">
        I am currently seeking opportunities within California or remote.
      </p>
      <div>
        <form
          className="flex flex-col space-y-4 *:flex *:flex-col bg-tertiary p-4 rounded-lg w-[90vw] md:w-[75vw]"
          action="mailto:wulfcodev@gmail.com"
          method="post"
          encType="text/plain"
        >
          <div>
            <label className="font-secondary text-primary" htmlFor="name">
              Name:{" "}
            </label>
            <input
              className="rounded-md bg-blue-400/50 border-primary border-2"
              type="text"
              id="name"
              required
              placeholder=" Enter name"
            />
          </div>
          <div>
            <label className="font-secondary text-primary" htmlFor="email">
              Email:{" "}
            </label>
            <input
              className="rounded-md bg-blue-400/50 border-primary border-2"
              type="email"
              id="email"
              required
              placeholder=" Enter email"
            />
          </div>
          <div>
            <label className="font-secondary text-primary" htmlFor="message">
              Message:{" "}
            </label>
            <textarea
              className="rounded-md bg-blue-400/50 border-primary border-2 w-full h-[200px]"
              name="message"
              id="message"
              required
              placeholder=" Enter message"
            />
          </div>
          <button className="bg-primary w-fit p-2 rounded-md font-tertiary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
