import Image from 'next/image';

const Search = () => {
  return (
    <div className="flex items-center relative py-8 px-1.5">
      <input
        type="text"
        placeholder="Find your groove..."
        className="pl-6 pr-20 py-4 h-[72px] rounded-full w-full placeholder:text-bg text-bg focus:outline-none bg-text"
      />
      <button className="h-[66px] w-[66px] right-[9px] rounded-full flex justify-center items-center bg-bg absolute active:bg-accent/95 active:scale-95 transition">
        <Image src="/assets/search.svg" alt="search" width={24} height={24} />
      </button>
    </div>
  );
};

export default Search;
