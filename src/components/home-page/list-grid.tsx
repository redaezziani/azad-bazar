import Card from "./card"

const ListCardGrid = async () => {
  const posts = [
    {
      id: 1,
      price: 29.99,
      discount: 10,
      description: "Experience the breathtaking landscapes of New Zealand with our guided tours.",
      rating: 4.8,
      name: "New Zealand Adventure Tour",
      image: "https://cdn.gap360.com/tpl/lib/img/private/media/hobbiton-group.jpg?"
    },
    {
      id: 2,
      price: 19.95,
      description: "Learn the art of French cuisine with our expert chefs in the heart of Paris.",
      rating: 4.5,
      name: "French Cooking Class",
      image: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/7f/ff/79.jpg"
    },
    {
      id: 3,
      price: 99.99,
      discount: 20,
      description: "Explore the wonders of the Great Barrier Reef with our scuba diving packages.",
      rating: 4.9,
      name: "Great Barrier Reef Diving Experience",
      image: "https://tropicalnorthqueensland.org.au/wp-content/uploads/Diving-on-the-Great-Barrier-Reef-TEQ.jpg"
    },
    {
      id: 4,
      price: 49.99,
      description: "Discover the rich history and culture of Rome with our expert-guided tours.",
      rating: 4.7,
      name: "Rome Historical Tour",
      image: "https://i0.wp.com/www.carpediemtours.com/wp-content/uploads/2021/11/Tipsy-Tour-Cover-Photo-with-Colosseum-in-background-1.jpg?fit=1920%2C1280&ssl=1"
    },
    {
      id: 5,
      price: 39.95,
      discount: 15,
      description: "Embark on an unforgettable safari adventure in the heart of Africa.",
      rating: 4.6,
      name: "African Safari Expedition",
      image: "https://www.africasafaris-tours.com/wp-content/uploads/2023/05/12-Days-South-African-Luxury-Safari-Expedition-e1685268977865.jpg"
    },
    {
      id: 6,
      price: 79.99,
      discount: 30,
      description: "Sail the crystal-clear waters of the Caribbean on our luxury yacht cruises.",
      rating: 4.8,
      name: "Caribbean Yacht Adventure",
      image: "https://worldyachtgroup.com/wp-content/uploads/2017/11/At-Last-yacht-caribbean.jpg"
    },
    
  ];
  return (
    <div className="mt-6 w-full grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4 ">
      {posts.map((post) => (
        <Card
          key={post.name}
          price={post.price}
          discount={post.discount}
          description={post.description}
          rating={post.rating}
          name={post.name}
          image={post.image}
          id={post.id}
        />
      ))}
    </div>
  )
}

export default ListCardGrid