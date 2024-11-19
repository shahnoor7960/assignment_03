import Link from "next/link";
export default function Navbar() {
  return (
    <div className="flex justify-center items-center h-14 text-white font-sans font-semibold fixed top-0 left-0 bg-slate-500 w-full border border-black" >
      <span>     
        <Link href="/"  className="px-3 py-1 hover:text-blue-500">Home</Link>
      </span>
      &nbsp;&nbsp; &nbsp;&nbsp;
      <span>
        <Link href="/introduction"  className="px-3 py-1 hover:text-blue-500">Intro</Link>
      </span>
      &nbsp;&nbsp; &nbsp;&nbsp;
      <span>
        <Link href="/education"  className="px-3 py-1 hover:text-blue-500">Education</Link>
      </span>
      &nbsp;&nbsp; &nbsp;&nbsp;
      <span>
        <Link href="/skills"  className="px-3 py-1 hover:text-blue-500">Skills</Link>
      </span>
      &nbsp;&nbsp; &nbsp;&nbsp;
      <span>
        <Link href="/projects"  className="px-3 py-1 hover:text-blue-500">Project</Link>
      </span>
      &nbsp;&nbsp; &nbsp;&nbsp;
      <span>
      <Link href="/contact" className="px-3 py-1 hover:text-blue-500">
        Contact
      </Link>
      </span>
      &nbsp;&nbsp; &nbsp;&nbsp;
    </div>
  );
}
