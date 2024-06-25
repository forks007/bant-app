import Footer from "@/components/footer";
import Header from "@/components/header";
import MemberInfo from "@/components/member-info";
import Members from "@/components/members";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header />
      <MemberInfo />
      <Footer />
    </main>
  );
}
