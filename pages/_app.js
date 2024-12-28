// pages/_app.js
import '../styles/custom.css'; // Importa tu CSS personalizado
import 'nextra-theme-docs/style.css'; // Asegúrate de que el estilo base de Nextra sigue importado

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
