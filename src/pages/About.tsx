import { Mail, Phone, MapPin } from 'lucide-react';

function About() {
  return (
    <div className="flex justify-center items-center p-10">
      <div className="bg-white p-10 md:p-20 rounded-lg shadow-lg">
        <div className="flex justify-center mb-2">
          <img
            className="w-30 h-30 mb-5 rounded-full"
            src="/images/Profile.JPG"
            alt="Profile"
          />
        </div>
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-10">Chisnucha Pechtussana</h2>
          <div className="flex items-center justify-start bg-gray-50 p-4 w-120 gap-3">
            <Mail className="w-5 h-5 mr-2 text-blue-400" />
            <p className="text-black">backham.2154@gmail.com</p>
          </div>
          <div className="flex items-center justify-start bg-gray-50 p-4 w-120 gap-3">
            <Phone className="w-5 h-5 mr-2 text-blue-400" />
            <p className="text-black">084-312-4370</p>
          </div>
          <div className="flex items-center justify-start bg-gray-50 p-4 w-120 gap-3">
            <MapPin className="w-5 h-5 mr-2 text-blue-400" />
            <p className="text-black">New York, USA</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;