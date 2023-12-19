import SearchIcon from "../../assets/SearchIcon.svg";

function Home() {
  return (
    <div className="w-full h-full">
      <div className="bg-white flex max-w-[650px] flex-col px-5 py-4 rounded-lg">
        <div className="flex gap-4">
          <img loading="lazy" src={SearchIcon} />
          <input
            type="text"
            className="outline-none w-[550px]"
            placeholder="Search or type"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
