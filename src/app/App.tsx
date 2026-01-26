import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Produtos } from "./pages/Produtos";
import { Cidade } from "./pages/Cidade";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { MobileFixedButtons } from "./components/MobileFixedButtons";
import { Privacidade } from "./pages/Privacidade";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white">
      {children}
      {/* Mantém botões fixos em TODAS as páginas */}
      <FloatingWhatsApp />
      <MobileFixedButtons />
    </div>
  );
}

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/santos" element={<Cidade cidade="Santos" />} />
        <Route path="/sao-vicente" element={<Cidade cidade="São Vicente" />} />
        <Route path="/praia-grande" element={<Cidade cidade="Praia Grande" />} />
        <Route path="/cubatao" element={<Cidade cidade="Cubatão" />} />
        <Route path="/privacidade" element={<Privacidade />} />
      </Routes>
    </Layout>
  );
}

