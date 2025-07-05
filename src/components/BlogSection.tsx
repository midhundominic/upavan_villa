import BlogCard from "@/components/BlogCard";

const blogPosts = [
  {
    title: "Areekal Water Falls",
    description:
      "Areekkal or Areeckal Waterfalls, located amidst the peaceful environments of Piravom, Kerala, is a natural beauty waiting to be explored. This perennial wonder is known for its cascading waters, creating a destination that incites peace for lovers of nature and adventure seekers. Areekkal Waterfalls, situated in the western part of Kerala, offers a serene place with a pleasant view. Usually, it is through the countryside that the traveller reaches this fall, and en route gets to see the best of Kerala’s rural lustre and natural wealth.",
    image: "/images/areekalwaterfalls.jpg"
  },

  {
    title: "Cherayi Beach",
    description:
      "Areekkal or Areeckal Waterfalls, located amidst the peaceful environments of Piravom, Kerala, is a natural beauty waiting to be explored. This perennial wonder is known for its cascading waters, creating a destination that incites peace for lovers of nature and adventure seekers. Areekkal Waterfalls, situated in the western part of Kerala, offers a serene place with a pleasant view. Usually, it is through the countryside that the traveller reaches this fall, and en route gets to see the best of Kerala’s rural lustre and natural wealth.",
    image: "/images/cherayibeach.jpg"
  },

  {
    title: "Hill Palce Museum",
    description:
      "Areekkal or Areeckal Waterfalls, located amidst the peaceful environments of Piravom, Kerala, is a natural beauty waiting to be explored. This perennial wonder is known for its cascading waters, creating a destination that incites peace for lovers of nature and adventure seekers. Areekkal Waterfalls, situated in the western part of Kerala, offers a serene place with a pleasant view. Usually, it is through the countryside that the traveller reaches this fall, and en route gets to see the best of Kerala’s rural lustre and natural wealth.",
    image: "/images/Hillpalacemuseum.jpg"
  },

  {
    title: "Paniyeli Poru ",
    description:
      "Caressed and nourished by the River Periyar, which flows between Malayattoor in the north and Paneli in the south, the place obtained its name from the routine fight of raftsmen with the wild waves of the river. The river also offers one with a panoramic view of this pristine spot. Paniyeli Poru is just 35 km from Aluva.",
    image: "/images/paniyeli.jpg"
  },
];

export default function BlogPage(){
    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
          <h1 className="text-4xl font-bold text-[#0F086A] text-center mb-10">Explore Nearby Attractions</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <BlogCard key={index} {...post} />
            ))}
          </div>
        </div>
      );
}
