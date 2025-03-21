export default function StepCompareQuotes() {
  // Sample insurance companies data
  const sampleInsuranceCompanies = [
    {
      id: 1,
      name: "Bunna Insurance",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDqYqeN8vxmbBs178T01hbSEQtGXuGhmWCKWNFOlVWlxyA8iVjCb9ltLoNpQ&s", // Replace with actual logo URL
      description: "Comprehensive coverage with competitive pricing.",
      rating: "4.8/5",
    },
    {
      id: 2,
      name: "Awash Insurance",
      logo: "data:image/jpeg;base64,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", // Replace with actual logo URL
      description: "Trusted provider with a wide range of insurance options.",
      rating: "4.7/5",
    },
    {
      id: 3,
      name: "Nyala Insurance",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpQvjq28TGt_bnv4GzCZte6ZqCcfvTOabg7znmMPBy&s", // Replace with actual logo URL
      description:
        "Reliable coverage with excellent customer service and satisfaction.",
      rating: "4.6/5",
    },
  ];

  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        Compare Insurance Companies
      </h2>
      <p className="text-lg text-gray-600 mb-8">
        Choose from top insurance providers to get the best quote for your
        vehicle.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sampleInsuranceCompanies.map((company) => (
          <div
            key={company.id}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            {/* Company Logo */}
            <img
              src={company.logo}
              alt={`${company.name} logo`}
              className="w-24 h-24 mx-auto mb-4 rounded-full"
            />
            {/* Company Name */}
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              {company.name}
            </h3>
            {/* Company Description */}
            <p className="text-gray-600 text-sm mb-4">{company.description}</p>
            {/* Company Rating */}
            <p className="text-lg font-bold text-blue-600 mb-4">
              Rating: {company.rating}
            </p>
            {/* Get Quote Button */}
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Get Quote
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
