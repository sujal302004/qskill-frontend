export default function CourseCard({ title, description }) {
  return (
    <div className="border rounded-lg p-5 shadow hover:shadow-lg">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <button className="text-orange-500 font-semibold">
        View Details →
      </button>
    </div>
  );
}
