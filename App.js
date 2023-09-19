import { useState } from "react";

import Fonts from "./components/Fonts";
import Router from "./components/Router";

export default function App() {
  const [IsReady, SetIsReady] = useState(false);

  const LoadFonts = async (finished) => {
    await Fonts();
    finished(true);
  };

  if (!IsReady) {
    LoadFonts(SetIsReady);

    return null;
  }

  return (
  <Router />
  );
}
