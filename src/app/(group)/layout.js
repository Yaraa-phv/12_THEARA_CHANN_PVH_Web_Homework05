import SearchBar from "@/components/SearchBar";
import SideBar from "@/components/SideBar";
import "@/styles/globals.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="w-full h-screen flex">
        <div className="sm:w-[20%]">
          <SideBar />
        </div>

        <div className="sm:w-[80%]">
          <div className="sm:w-full overflow-hidden sm:h-screen flex flex-col text-[#0B3954]">
            <div className="sm:w-[93%] rounded-3xl sm:mt-6 sm:ml-9 sm:h-fit">
              <SearchBar className="self-center" />
            </div>
            <div className="sm:w-[93%]  rounded-t-3xl sm:ml-9 sm:mt-6 sm:h-[90%] bg-[#F5F7F8] overflow-hidden">
              {children}
            </div>
          </div>
        </div>

      </body>
    </html>
  );
}
