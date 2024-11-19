"use client";

export default function Home() {
  return (
    <div className="font-sans bg-white p-10">
      
      <div className="bg-slate-300 max-w-2xl mx-auto border border-black  p-6 space-y-6">
     
        <section className="p-5 border border-current rounded-lg">
          <h1 className="text-3xl text-center font-bold ">Resume</h1>
          <h2 className="text-2xl  text-center font-bold">Shahnoor Shahzad</h2>
          <h3 className="text-xl text-center">Aspiring Web Developer</h3>
          <p >
               I am a passionate web developer with a strong foundation in
            front-end technologies. <br />
           </p>
            <p>I enjoy creating intuitive and user-friendly web experiences. I'm
            continuously learning and growing as a developer.
          </p>
        </section>

       
        <section className="p-5 border border-current rounded-lg">
          <h2 className="text-xl font-bold underline">Education</h2>
          <p>
            <strong>AL-Hidayah Academy</strong> - Matriculation (2020 - 2022)
          </p>
          <p>
            <strong>BAMM P.E.C.H.S College For Women</strong> - Intermediate
            (2023 - present)
          </p>
          <p>
            <strong>GIAIC</strong> - Certified Cloud Applied Gen AI Engineering
            (Feb 2024 - present)
          </p>
        </section>

        
        <section className="p-5 border border-current rounded-lg">
          <h2 className="text-xl font-bold underline">Skills</h2>
          <ul className="list-disc list-inside">
            <li>HTML</li>
            <li>CSS</li>
            <li>TypeScript</li>
            <li>Next.js</li>
          </ul>
        </section>

     
        <section className="p-5 border border-current rounded-lg">
          <h2 className="text-xl font-bold underline">Project</h2>
          <p>
            Check out my first project that consists of simple dynamic routing:
          </p>
          <p>
            Website link:{" "}
            <a
              href="https://vercel.com/api/toolbar/link/assignment-01-dun-alpha.vercel.app?via=project-dashboard-alias-list&p=1&page=/"
              className="text-blue-500 underline"
            >
              assignment-01-dun-alpha.vercel.app
            </a>
          </p>
          <p>
            Github repository:{" "}
            <a
              href="https://github.com/shahnoor7960/assignment_01.git"
              className="text-blue-500 underline"
            >
              shahnoor7960/assignment_01.git
            </a>
          </p>
        </section>

       
        <section className="p-5 border border-current rounded-lg">
          <h2 className="text-xl font-bold underline">Contact Information</h2>
          <ul className="list-disc list-inside">
            <li>Email: shahnoor@gmail.com</li>
            <li>Phone: 0330-1234567</li>
            <li>
              Github:{" "}
              <a
                href="https://github.com/shahnoor7960"
                className="text-blue-500 underline"
              >
                Shahnoor7960@gmail.com
              </a>
            </li>
            <li>
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/shahnoor-shahzad-5a97172b5/"
                className="text-blue-500 underline hover:text-purple-500"
              >
                www.LinkedIn.com
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
