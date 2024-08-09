import Navbar from "../ui/LandingPageNavbar.jsx";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <div className="bg-gray-700 h-screen flex flex-column justify-center">
        <div className="w-50 h-min mt-10">
          <p className="font-sans font-bold text-center text-white text-2xl text-pretty">Empowering libraries</p>
          <p className="font-sans font-bold text-center text-white text-2xl text-pretty">and technology</p>
        </div>
      </div>
    </>
  );
}
