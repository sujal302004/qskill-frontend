export default function Courses() {
  return (
    <div className="bg-white py-16">
      <h2 className="text-3xl font-bold text-center mb-10">
        Our Popular Courses
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10">
        
        <div className="border rounded-lg p-6 shadow hover:shadow-lg">
          <h3 className="text-xl font-semibold mb-2">
            Data Structures & Algorithms
          </h3>
          <p className="text-gray-600 mb-4">
            Learn DSA from basics to advanced with real coding problems.
          </p>
          <button className="bg-orange-500 text-white px-4 py-2 rounded">
            View Course
          </button>
        </div>

        <div className="border rounded-lg p-6 shadow hover:shadow-lg">
          <h3 className="text-xl font-semibold mb-2">
            Full Stack Web Development
          </h3>
          <p className="text-gray-600 mb-4">
            Become a full stack developer using MERN stack.
          </p>
          <button className="bg-orange-500 text-white px-4 py-2 rounded">
            View Course
          </button>
        </div>

        <div className="border rounded-lg p-6 shadow hover:shadow-lg">
          <h3 className="text-xl font-semibold mb-2">
            Machine Learning
          </h3>
          <p className="text-gray-600 mb-4">
            Learn ML concepts with real-world projects.
          </p>
          <button className="bg-orange-500 text-white px-4 py-2 rounded">
            View Course
          </button>
        </div>

      </div>
    </div>
  );
}
