export default function Projects() {
  return (
    <>
    <div className="font-sans bg-white p-10">
    <div className="bg-slate-300 max-w-2xl mx-auto rounded-lg border p-6 space-y-6">
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
 </div>
      </div>
    </>
  );
}
