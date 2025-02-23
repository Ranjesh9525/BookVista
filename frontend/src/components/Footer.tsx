const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-orange-500 to-green-500 text-white py-6">
      <div className="container mx-auto px-6 md:px- lg:px-20 flex flex-col md:flex-row justify-between items-center">
        
        {/* Left Section: Logo, Company Name & Tagline */}
        <div className="flex flex-col items-start space-y-2">
          <div className="flex items-center space-x-4">
            <a href="#">
              <img src="/logo.png" alt="Bookvista Logo" className="h-24 w-24 md:h-28 md:w-28" />
            </a>
            <a href="#">
              <h2 className="text-4xl md:text-3xl font-extrabold bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
                BookVista
              </h2>
            </a>
          </div>
          <p className="text-sm md:text-lg">More than just a game. It's a lifestyle.</p>
        </div>

        {/* Right Section: Copyright & Social Media Icons */}
        <div className="flex flex-col items-center md:items-end space-y-3 mt-6 md:mt-0">
          
          <div className="flex space-x-4">
          <a href="#" className="cursor-pointer hover:text-gray-200">
                  <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" className="h-6 w-6" />
                </a>
                <a href="#" className="cursor-pointer hover:text-gray-200">
                  <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" className="h-6 w-6" />
                </a>
                <a href="#" className="cursor-pointer hover:text-gray-200">
                  <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="YouTube" className="h-6 w-6" />
                </a>
          </div>
          <p className="text-sm md:text-base text-center md:text-right">
            Copyright © 2025 Bookvista. All rights reserved
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
