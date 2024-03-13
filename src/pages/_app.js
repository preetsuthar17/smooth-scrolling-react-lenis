import "@/styles/globals.css";

import ReactLenis from "@studio-freight/react-lenis";

export default function App({ Component, pageProps }) {
  return (
    <ReactLenis
      root
      options={{
        duration: 10.5,
        SmoothScroll: true,
        smoothWheel: true,
        syncTouch: true,
        smoothTouch: true,
      }}
    >
      <Component {...pageProps} />;
    </ReactLenis>
  );
}
