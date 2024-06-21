import AppChakraProvider from "@/providers/AppChakraProvider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "@/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppChakraProvider>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </AppChakraProvider>
  );
}
