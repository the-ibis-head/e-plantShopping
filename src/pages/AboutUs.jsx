import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const AboutUs = () => {
  const teamMembers = [
    { name: "Emma Green", role: "Founder & Plant Expert" },
    { name: "James Root", role: "Head Grower" },
    { name: "Sophia Leaf", role: "Customer Success" },
  ];
  return (
    <div className="bg-gray-50 py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-forest-green mb-4 text-4xl font-bold">
            About Paradise Nursery
          </h2>
          <p className="mx-auto max-w-3xl text-lg">
            Founded in 2020, Paradise Nursery is dedicated to bringing joy and
            greenery to homes worldwide. We believe every space deserves a touch
            of nature, and we're here to make that dream a reality.
          </p>
        </div>
        <div className="mb-12 grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-center text-2xl">
                Our Mission
              </CardTitle>
              <CardDescription className="leading-relaxed">
                To cultivate healthier, happier environments through plants. We
                hand-select each specimen, ensuring quality and vitality. Our
                commitment to customer education means you'll receive care
                guidance with every purchase.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-center text-2xl">
                Why Choose Us
              </CardTitle>
              <CardDescription className="leading-relaxed">
                <ul>
                  <li>
                    <span className="text-secondary">✓</span>
                    Premium, disease-free plants
                  </li>
                  <li>
                    <span className="text-secondary">✓</span>
                    Eco-friendly packaging
                  </li>
                  <li>
                    <span className="text-secondary">✓</span>
                    30-day health guarantee
                  </li>
                  <li>
                    <span className="text-secondary">✓</span>
                    Free care consultation
                  </li>
                </ul>
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
        <div className="text-center">
          <h3 className="mb-8 text-2xl">Meet Our Team</h3>
          <div className="grid gap-6 md:grid-cols-3">
            {teamMembers.map((member, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <CardTitle className="text-center text-2xl">
                    {member.name}
                  </CardTitle>
                  <CardDescription className="leading-relaxed">
                    <p className="text-sm">{member.role}</p>
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
