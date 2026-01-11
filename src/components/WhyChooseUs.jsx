export default function WhyChooseUs() {
  return (
    <div className="bg-gray-100 py-16 text-center">
      <h2 className="text-3xl font-bold mb-10">
        Why Coding Ninjas?
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">
            Industry Focused Curriculum
          </h3>
          <p>
            Learn skills that top companies actually look for.
          </p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">
            Expert Mentors
          </h3>
          <p>
            Learn from professionals working in the industry.
          </p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">
            Placement Assistance
          </h3>
          <p>
            Get resume reviews, mock interviews, and referrals.
          </p>
        </div>

      </div>
    </div>
  );
}
