import courses from "../data/courses";
import CourseCard from "../components/CourseCard";

export default function Courses() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Our Courses</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {courses.map(course => (
          <CourseCard
            key={course.id}
            title={course.title}
            description={course.description}
          />
        ))}
      </div>
    </div>
  );
}
