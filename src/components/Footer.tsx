import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#0c1172] to-[#0c0e27] text-white py-10 px-5 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Contact */}
        <div>
          <h1 className="text-2xl font-bold">solar<br />square</h1>
          <p className="mt-3 text-sm">
            Rooftop solar made simple. We don’t just sell solar — we give you
            peace of mind.
          </p>
          <div className="mt-4 space-y-1 text-sm">
            <p>📞 98 3000 3000</p>
            <p>📧 welisten@solarsquare.in</p>
          </div>
          <div className="flex gap-4 mt-4 text-xl">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaYoutube /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Our Solutions */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Our Solutions</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Homes</a></li>
            <li><a href="#">Commercial</a></li>
            <li><a href="#">Housing Society</a></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">About Us</a></li>
            <li><a href="#">SolarPro Partner</a></li>
            <li><a href="#">Sitemap</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">On-Grid Solar</a></li>
            <li><a href="#">Off-Grid Solar</a></li>
          </ul>
        </div>

        {/* Address */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Address</h3>
          <p className="text-sm">
            1st floor, Standford Building, S.V. Road & Juhu Lane Junction,<br />
            above Mahindra Showroom, Zalawad Nagar, Ganga Vihar,<br />
            Andheri West, Mumbai, Maharashtra 400058
          </p>
        </div>
      </div>
    </footer>
  );
}
