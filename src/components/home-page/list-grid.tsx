import Card from "./card"

const ListCardGrid = async () => {
  return (
    <div className="mt-6 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 ">
        <Card title="G-class 2021" description="good condition and well maintained car for sale in dhaka city" price={2000} image="https://di-uploads-pod7.dealerinspire.com/bakermotorcompanyofcharleston/uploads/2022/11/2022-G-SUV-GAL-017-S-FI-DR_900x600.jpg"/>
    </div>
  )
}

export default ListCardGrid