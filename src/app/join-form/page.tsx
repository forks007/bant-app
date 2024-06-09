import EventDetails from "@/components/event-details";
import EventsList from "@/components/events-list";
import Footer from "@/components/footer";
import Header from "@/components/header";
import RegisterForm from "@/components/join-form";
import YouthList from "@/components/youth-list";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header />
      <RegisterForm />
      <Footer />
    </main>
  );
}
