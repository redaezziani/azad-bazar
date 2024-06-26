import Filter from "@/components/home-page/filter";
import ListCardGrid from "@/components/home-page/list-grid";
import Pagination from "@/components/home-page/pagination";
import Categories from "@/components/home-page/categories";
import SearchInput from "@/components/home-page/search-input";
import BestSlide from "@/components/home-page/best-slide";
import { CreatePost } from "@/components/home-page/post/create-post";

const Home = () => {
  return (
    <main className="flex overflow-x-hidden relative min-h-screen flex-col items-center justify-start p-3 pb-6 lg:p-0">
      <div className="mt-10 pb-11  flex-col w-full max-w-7xl flex justify-start  items-start gap-4 ">
        <div className=" z-1 w-full flex md:w-[100%] justify-center gap-10 md:gap-16 items-center ">
        <Categories />
        </div>
        <div className="w-full flex justify-between mt-6 items-center">
          <CreatePost />
          <SearchInput/>
        </div>
        <BestSlide/>
        <div className="mt-4 w-full flex justify-between items-center ">
          <h3
            className=" capitalize font-semibold text-primary text-lg"
          >
            latest posts 
          </h3>
          <Filter />
        </div>
        <ListCardGrid />
        <Pagination />
      </div>
    </main>
  );
}

export default Home;
