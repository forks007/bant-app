import Footer from "@/components/footer";
import Header from "@/components/header";
import Members from "@/components/members";
import SearchButtons from "@/components/search-butons";
import Sponsors from "@/components/sponsors";
import Stories from "@/components/stories";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header />
      <Stories />
      <Sponsors />
      <Footer />
    </main>
  );
}
