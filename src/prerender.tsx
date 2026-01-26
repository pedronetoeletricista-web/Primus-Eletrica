import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider } from "react-helmet-async";

import App from "./app/App";

// O plugin chama essa função.
// Ela precisa retornar pelo menos { html: "..." }  :contentReference[oaicite:3]{index=3}
export async function prerender(data: { url: string }) {
  const helmetContext: any = {};

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={data.url}>
        <App />
      </StaticRouter>
    </HelmetProvider>
  );

  // Helmet (title/meta) renderizados no SSR:
  const helmet = helmetContext.helmet;

  const headElements = new Set<any>();

  if (helmet?.title?.toString()) {
    // O plugin aceita head.title também, mas vamos inserir como elementos para garantir.
    headElements.add({ type: "title", props: {}, children: helmet.title.toString().replace(/<\/?title>/g, "") });
  }

  // Injeta meta/links gerados pelo Helmet (canonical/description, etc.)
  const metas = helmet?.meta?.toString?.() || "";
  const links = helmet?.link?.toString?.() || "";

  // Como o plugin aceita "elements" como Set de objetos, vamos inserir como string via dangerously?
  // Melhor: retornar apenas html + head.elements vazios e deixar o Helmet só no client.
  // Porém, para SEO, vamos inserir meta/link direto via `head.elements` em objetos.
  // Como Helmet nos dá string HTML, aqui vai uma abordagem segura: apenas setar `head.elements` com meta/links essenciais manualmente em cada página.
  // Então, por enquanto, só retornamos html e links das rotas:
  return {
    html,
    links: new Set(["/", "/produtos", "/santos", "/sao-vicente", "/praia-grande", "/cubatao"]),
  };
}

