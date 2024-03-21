const Skills = () => {
  return (
    <div
      id="skills"
      className="w-full min-h-screen mx-auto container flex flex-col items-center mt-4"
    >
      <h1 className="font-secondary font-thin text-primary text-4xl mb-4 md:text-6xl">
        Skills
      </h1>
      <div className="flex flex-col justify-center items-center space-y-4">
        <div className="flex flex-col space-y-4">
          <div className="bg-blue-400/50 shadow-md shadow-primary border-2 border-primary p-2 rounded-md w-[75vw] text-center">
            <p className="font-tertiary text-primary font-semibold underline md:text-4xl">
              Front-End Technologies:
            </p>
            <ul className="*:text-primary *:font-tertiary *:md:text-2xl">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <div className="bg-blue-400/50 shadow-md shadow-primary border-2 border-primary p-2 rounded-md w-[75vw] text-center">
            <p className="font-tertiary text-primary font-semibold underline md:text-4xl">
              Back-End Technologies:
            </p>
            <ul className="*:text-primary *:font-tertiary *:md:text-2xl">
              <li>Node.js</li>
              <li>Express.js</li>
              <li>PostgreSQL</li>
              <li>MongoDB</li>
              <li>REST API's</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <div className="bg-blue-400/50 shadow-md shadow-primary border-2 border-primary p-2 rounded-md w-[75vw] text-center">
            <p className="font-tertiary text-primary font-semibold underline md:text-4xl">
              Soft-Skills:
            </p>
            <ul className="*:text-primary *:font-tertiary *:md:text-2xl">
              <li>Fast paced self-learner</li>
              <li>Adaptable</li>
              <li>Agile methodology</li>
              <li>Time management</li>
              <li>Great Communicator</li>
            </ul>
          </div>
          <div className="bg-blue-400/50 shadow-md shadow-primary border-2 border-primary p-2 rounded-md w-[75vw] text-center">
            <p className="font-tertiary text-primary font-semibold underline md:text-4xl">
              Other Skills:
            </p>
            <ul className="*:text-primary *:font-tertiary *:md:text-2xl">
              <li>Photshop</li>
              <li>Illustrator</li>
              <li>Figma</li>
              <li>Github / Version Control</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
