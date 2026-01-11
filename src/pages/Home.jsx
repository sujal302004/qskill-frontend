export default function Home() {
  return (
    <div className="w-full">

      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-[#0f172a] to-[#1e3a8a] text-white py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Learn Coding the Right Way
        </h1>
        <p className="text-lg mb-6">
          Industry-ready courses taught by top instructors
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded font-semibold">
          Explore Courses
        </button>
      </section>

      {/* POPULAR COURSES */}
      <section className="bg-gray-100 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Our Popular Courses
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6">

          {/* Card 1 */}
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">
              Data Structures & Algorithms
            </h3>
            <p className="text-gray-600 mb-4">
              Learn DSA from basics to advanced with real coding problems.
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded">
              View Course
            </button>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">
              Full Stack Web Development
            </h3>
            <p className="text-gray-600 mb-4">
              Become a full stack developer using MERN stack.
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded">
              View Course
            </button>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">
              Machine Learning
            </h3>
            <p className="text-gray-600 mb-4">
              Learn ML concepts with real-world projects.
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded">
              View Course
            </button>
          </div>

        </div>
      </section>

      {/* WHY CODING NINJAS */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Why Coding Ninjas?
        </h2>
        <p className="max-w-3xl mx-auto text-gray-600">
          Coding Ninjas helps you learn coding with structured courses,
          industry mentors, and real-world projects that make you job-ready.
        </p>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-gray-300 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">

          {/* About */}
          <div>
            <h3 className="text-white font-semibold mb-2">Coding Ninjas</h3>
            <p className="text-sm">
              Learn coding from industry experts and get career-ready.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>Courses</li>
              <li>Careers</li>
              <li>About Us</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-2">Contact</h3>
            <p className="text-sm">support@codingninjas.com</p>
            <p className="text-sm">India</p>
          </div>

        </div>

        <p className="text-center text-sm mt-8 text-gray-500">
          © 2026 Coding Ninjas. All rights reserved.
        </p>
      </footer>

    </div>
  );
}
