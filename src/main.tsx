import "@mantine/core/styles.css";

import {
  createTheme,
  MantineProvider,
  MantineColorsTuple,
} from "@mantine/core";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

const base: MantineColorsTuple = [
  "#faefef",
  "#efdcdc",
  "#e1b5b4",
  "#d58b8a",
  "#ca6866",
  "#c55250",
  "#c24644",
  "#ac3836",
  "#9a302f",
  "#541718",
];

const theme = createTheme({
  colors: {
    primary: base,
  },
  primaryColor: "primary",
  primaryShade: { light: 9, dark: 9 },
});

createRoot(document.getElementById("root")!).render(
  <MantineProvider theme={theme}>
    <App />
  </MantineProvider>
);
