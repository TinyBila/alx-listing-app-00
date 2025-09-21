import Card from "../components/common/Card";
import Button from "../components/common/Button";

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">ALX Listing Page</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card
          title="Cozy Apartment"
          description="A cozy 2-bedroom apartment near the beach."
          image="/assets/placeholder.jpg"
        />
        <Card
          title="Luxury Villa"
          description="Spacious villa with private pool and garden."
          image="/assets/placeholder.jpg"
        />
        <Card
          title="Modern Loft"
          description="Stylish loft in the heart of the city."
          image="/assets/placeholder.jpg"
        />
      </div>

      <div className="mt-6">
        <Button label="View More Listings" onClick={() => alert("Coming soon!")} />
      </div>
    </div>
  );
}
