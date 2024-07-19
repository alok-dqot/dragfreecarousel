import "@/styles/globals.css";
import type { AppProps } from "next/app";
import '@/styles/Home.module.css';
import '@/styles/embla.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
