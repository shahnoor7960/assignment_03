
export default function Contact() {
  return (
    <>
      <div className="font-sans bg-white p-10">
      <div className="bg-slate-300 max-w-xl mx-auto rounded-lg border p-6 space-y-6">
      <section className="p-5 border border-current rounded-lg">
          <h2 className="text-xl font-bold underline">Contact Information</h2>
          <ul className="list-disc list-inside">
            <li>Email: shahnoor@gmail.com</li>
            <li>Phone: 0330-1234567</li>
            <li>Github:{" "}
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
                className="text-blue-500 underline"
              >
                www.LinkedIn.com
              </a>
            </li>
          </ul>
        </section> </div>
      </div>
    </>
  );
}
