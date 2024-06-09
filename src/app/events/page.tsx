import EventsList from "@/components/events-list";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header />
      <EventsList />
      <Footer />
    </main>
  );
}
