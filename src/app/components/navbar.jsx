export default function Navbar(){
    return(
        <header className="w-screen">



    <div className=" bg-gray-100 ">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo or Brand Name */}
            <div className="text-xl font-bold text-gray-800">Exclusive</div>

            {/* Navigation Links */}
            <div className="flex space-x-6">
              <a href="/" className="text-gray-700 hover:text-gray-900 hover:bg-gray-200 p-[10px] rounded-lg ">Home</a>
              <a href="/contact" className="text-gray-700 hover:text-gray-900 hover:bg-gray-200 p-[10px] rounded-lg ">Contact</a>
              <a href="/aboutUs" className="text-gray-700 hover:text-gray-900 hover:bg-gray-200 p-[10px] rounded-lg ">About Us</a>
              <a href="/signup" className="text-gray-700 hover:text-gray-900 hover:bg-gray-200 p-[10px] rounded-lg ">Sign Up</a>
            </div>

            {/* Search Bar */}
            <div className="flex items-center">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                Search
              </button>
            </div>
          </div>
        </div>
      </nav>
   
 
    </div>
    </header>

    )
}