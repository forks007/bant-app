import Footer from "@/components/footer";
import Header from "@/components/header";
import Members from "@/components/members";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header />
      <Members />
      <Footer />
    </main>
  );
}
