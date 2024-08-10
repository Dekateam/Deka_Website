import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { Vazirmatn } from "next/font/google";
// import { ThemeProvider } from "@mui/material/styles";
import theme from "./src/theme";
import ContainerContent from "./src/components/ContainerContent";
import { ThemeProvider } from "@mui/material";

const vazir = Vazirmatn({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "700"],
});
export const metadata = {
  title: "Deka Team",
  description: "A site to introduce the Deka team",
};
export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={vazir.className}>{children}</body>
      <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>
          <ContainerContent>{children}</ContainerContent>
        </ThemeProvider>
      </AppRouterCacheProvider>
    </html>
  );
}
