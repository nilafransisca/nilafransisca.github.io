import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader, { usePageLoader } from "./components/Loader";

const pages = [
  { id: "home", label: "Home", component: Hero },
  { id: "about", label: "About", component: About },
  { id: "skills", label: "Skills", component: Skills },
  { id: "projects", label: "Projects", component: Projects },
  { id: "certificates", label: "Certificates", component: Certificates },
  { id: "contact", label: "Contact", component: Contact },
];

function pageFromHash() {
  const id = window.location.hash.slice(1);
  return pages.find((p) => p.id === id) ?? pages[0];
}

export default function App() {
  const [page, setPage] = useState(pageFromHash);
  const loader = usePageLoader();

  useEffect(() => {
    const onHashChange = () => {
      setPage(pageFromHash());
      window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const Page = page.component;

  return (
    <>
      {loader !== "done" && <Loader hiding={loader === "hiding"} />}
      <div className={`flex min-h-screen flex-col ${loader === "visible" ? "is-loading" : ""}`}>
        <Navbar pages={pages} current={page.id} />
        <main className="mx-auto w-full max-w-page flex-1 px-5 md:px-8">
          <Page />
        </main>
        <Footer />
      </div>
    </>
  );
}
