import EventDetails from "@/components/event-details";
import EventsList from "@/components/events-list";
import Footer from "@/components/footer";
import Header from "@/components/header";
import YouthList from "@/components/youth-list";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header />
      <YouthList />
      <Footer />
    </main>
  );
}
