import { ReactNode } from "react";
import { Helmet } from "react-helmet-async";

type Props = {
  title: string;
  description: string;
  canonicalPath?: string; // ex: "/santos"
  children: ReactNode;
};

const SITE_URL = "https://primuseletrica.com";

export function SiteLayout({ title, description, canonicalPath = "/", children }: Props) {
  const canonical = `${SITE_URL}${canonicalPath}`;

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
      </Helmet>

      {/* Aqui você pode manter o mesmo Footer em todas */}
      {children}

      <footer className="bg-[#1E3A5F] text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>© 2026 Primus Elétrica. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

