import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeatureCard from "../components/FeatureCard";
import WhyChoose from "../components/WhyChoose";
import Footer from "../components/Footer";

function Home() {
  return (
    <div
      style={{
        background: "#0f172a",
        minHeight: "100vh",
      }}
    >
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Features */}
      <section
        style={{
          padding: "60px 20px",
        }}
      >
        <h2
          style={{
            color: "white",
            textAlign: "center",
            fontSize: "40px",
            marginBottom: "40px",
          }}
        >
          Core Features
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "25px",
            flexWrap: "wrap",
          }}
        >
          <FeatureCard
            title="📄 Upload PDFs"
            description="Upload industrial manuals, SOPs, reports and technical documents."
          />

          <FeatureCard
            title="🤖 AI Assistant"
            description="Ask questions from uploaded documents using Generative AI."
          />

          <FeatureCard
            title="🔍 Smart Search"
            description="Instantly search across thousands of engineering documents."
          />
        </div>
      </section>

      {/* Why Choose Section */}
      <WhyChoose />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;