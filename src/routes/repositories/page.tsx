import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { RootState } from "@/store";
import Card from "@/components/Card";
import { IoSearchOutline } from "react-icons/io5";
import EmptyRepositories from "@/components/EmptyRepositories";
import { CgSpinner } from "react-icons/cg";
import { Link } from "react-router-dom";
import { GitHubRepo } from "@/types/repositories";
import dayjs from "dayjs";

const Repositories = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [repositories, setRepositories] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(false);
  const username = useSelector((state: RootState) => state.user.username);

  useEffect(() => {
    if (username) {
      fetchRepositories(username);
    }
  }, [username]);

  const fetchRepositories = async (username: string) => {
    setLoading(true);
    try {
      const response = await axios.get<GitHubRepo[]>(`https://api.github.com/users/${username}/repos`);
      setRepositories(response.data);
    } catch (error) {
      console.error("Error fetching repositories:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const filteredRepositories = repositories.filter((repo) =>
    repo.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    // this is the parent container
    <div className="h-[calc(100vh-100px)] overflow-hidden overflow-y-auto [scrollbar-width:_thin]">
      {/* 1 */}
      <div className="sticky top-0 border-b border-[#D5D7DA] bg-white px-6 py-5">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2 md:flex-row md:justify-between">
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl font-semibold">Repositories</h1>
              <p className="text-sm text-[#414651]">{repositories.length} total repositories</p>
            </div>
            <div className="text-md flex flex-row items-center gap-4 text-sm">
              <button 
                className="flex items-center justify-start gap-3 rounded-xl border-[2px] border-[#D5D7DA] px-3.5 py-2.5 hover:bg-[#f5f5f5] transition-all ease-in"
                onClick={() => fetchRepositories(username)}
              >
                <img src="/refresh.png" alt="" />
                <p className="text-[#414651]">Refresh All</p>
              </button>
              <button className="flex items-center justify-start gap-3 rounded-lg bg-[#1470ef] px-3.5 py-2.5 text-white hover:bg-[#166de8] transition-all ease-in">
                <img src="plus.png" alt="" />
                Add Repository
              </button>
            </div>
          </div>
          <div className="mt-4 flex w-[366px] items-center gap-1 rounded-md border border-[#D5D7DA] px-3.5 py-2.5 shadow-sm">
            <IoSearchOutline className="h-[24px] w-[24px] text-[#414651]" />
            <input
              type="search"
              className="h-full w-full outline-none placeholder:text-[#414651]"
              placeholder="Search Repositories"
              onChange={handleSearch}
            />
          </div>
        </div>
      </div>

      {/* 2 */}
      <div className="flex flex-col justify-center">
        {loading ? (
          <div className="flex h-[600px] items-center justify-center">
            <CgSpinner className="animate-spin text-5xl" />
          </div>
        ) : filteredRepositories.length > 0 ? (
          filteredRepositories.map((item) => (
            <Link to={item.html_url} target="_blank">
              <Card
                name={item.name}
                access={item.visibility}
                languages={item.language || "React"}
                size={item.size}
                updates={dayjs().diff(dayjs(item.updated_at), 'day')}
              />
            </Link>
          ))
        ) : (
          <div className="flex h-[600px] items-center justify-center">
            <EmptyRepositories />
          </div>
        )}
      </div>
    </div>
  );
};

export default Repositories;
