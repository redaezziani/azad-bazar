import Filter from "@/components/home-page/filter";
import Footer from "@/components/home-page/footer";
import ListCardGrid from "@/components/home-page/list-grid";
import Navbar from "@/components/home-page/navbar";
import Pagination from "@/components/home-page/pagination";
import Categories from "@/components/home-page/categories";

const Home = () => {
  return (
    <main className="flex overflow-x-hidden relative min-h-screen flex-col items-center justify-start p-3 pb-6 lg:p-0">
      <Navbar />

      <div className="mt-24 pb-11  flex-col w-full max-w-7xl flex justify-start  items-start gap-4 ">
        <div className=" z-1 w-full flex md:w-[100%] justify-center gap-10 md:gap-16 items-center mt-5">
        <Categories />
        </div>
        
        <div className="w-full rounded-md bg-zinc-100 min-h-96 p-2"></div>
        <div className="mt-4 w-full flex justify-between items-center ">
          <h3
            className=" capitalize text-primary text-lg"
          >
            top products
          </h3>
          <Filter />
        </div>
        <ListCardGrid />
        <Pagination />
        <Footer />
      </div>
    </main>
  );
}

export default Home;
