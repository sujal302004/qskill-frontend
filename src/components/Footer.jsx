export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 mt-16">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Logo / About */}
        <div>
          <h2 className="text-xl font-bold mb-3">Coding Ninjas</h2>
          <p className="text-sm text-gray-400">
            Learn coding from industry experts and get career-ready.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Courses</li>
            <li>Careers</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <p className="text-gray-400 text-sm">support@codingninjas.com</p>
          <p className="text-gray-400 text-sm">India</p>
        </div>

      </div>

      <div className="text-center text-gray-500 text-sm mt-8">
        © 2026 Coding Ninjas. All rights reserved.
      </div>
    </footer>
  );
}
