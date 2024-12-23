import Card from "@/components/Card";
import { repositories } from "@/constants";
import { IoSearchOutline } from "react-icons/io5";

const Repositories = () => {
  return (
    // this is the parent container
    <div className="overflow-y-auto h-[calc(100vh-100px)] [scrollbar-width:_thin] overflow-hidden">

{/* 1 */}
    <div className="px-6 py-5 border-b border-[#D5D7DA] sticky top-0 bg-white">
    <div className="flex flex-col gap-4 ">
      <div className="flex flex-col gap-2 md:flex-row md:justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-semibold">Repositories</h1>
          <p className="text-[#414651] text-sm">33 total repositories</p>
        </div>
        <div className="text-md flex flex-row items-center gap-4 text-sm">
          <button className="flex items-center justify-start gap-3 rounded-xl border-[2px] border-[#D5D7DA] px-3.5 py-2.5">
            <img src="/refresh.png" alt="" />
            <p className="text-[#414651]">Refresh All</p>
          </button>
          <button className="flex items-center justify-start gap-3 rounded-lg bg-[#1470ef] px-3.5 py-2.5 text-white">
            <img src="plus.png" alt="" />
            Add Repository
          </button>
        </div>
      </div>
      <div className="mt-4 flex w-[366px] items-center rounded-md border border-[#D5D7DA] px-3.5 py-2.5 gap-1 shadow-sm">
        <IoSearchOutline className="h-[24px] w-[24px] text-[#414651]" />
        <input
          type="search"
          className="h-full w-full outline-none placeholder:text-[#414651]"
          placeholder="Search Repositories"
          // onChange={handleSearch}
        />
      </div>
    </div>
    </div>

{/* 2 */}
    <div className="flex flex-col justify-center ">
          {repositories.map((item) => (
            <Card
              name={item.name}
              access={item.access}
              languages={item.languages}
              size={item.size}
              updates={item.updates}
            />
          ))}
        </div>


    </div>

  );
};

export default Repositories;
