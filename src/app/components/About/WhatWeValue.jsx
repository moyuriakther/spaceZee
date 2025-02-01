

export default function WhatWeValue() {
      const items = [
              {
                title: "Quality Recipes",
                description: "Every recipe is tested multiple times to ensure perfect results in your kitchen.",
                icon: "🥘",
              },
              {
                title: "Community",
                description: "We foster a supportive community where food lovers can share and learn together.",
                icon: "👨‍👩‍👧‍👦",
              },
              {
                title: "Innovation",
                description: "Constantly exploring new flavors and techniques to keep cooking exciting.",
                icon: "💡",
              },
            ];
  return (
    <div className="container mx-auto px-4">
        <h3 className="text-5xl font-semibold text-black mb-16 text-center">What we value</h3>
        <div className="grid md:grid-cols-3 gap-8">
        {items?.map((value, i) =>(
            <div key={i} className="bg-white rounded-2xl p-8 text-center">
            <span className="text-4xl mb-4 inline-block">{value.icon}</span>
            <h3 className="text-xl font-bold mb-4">{value.title}</h3>
            <p className="text-gray-600">{value.description}</p>
            </div>
        ))}
        </div>
    </div>
  )
}
