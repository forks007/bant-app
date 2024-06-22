"use client";

import EventDetails from "@/components/event-details";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header />
      <EventDetails />
      <Footer />
    </main>
  );
}
