import "./globals.css";
import "./css/colors.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { Vazirmatn } from "next/font/google";
import theme from "./src/theme";
import ContainerContent from "./src/components/ContainerContent";
import { ThemeProvider } from "@mui/material";
import Header from "./src/components/header/Header";

const vazir = Vazirmatn({
  subsets: ["arabic", "latin"],
  weight: ["100", "200", "300", "400", "500", "700"],
});

export const metadata = {
  title: "Deka Team",
  description: "A site to introduce the Deka team",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <ContainerContent>
              <Header />
              {children}
            </ContainerContent>
          </ThemeProvider>
        </AppRouterCacheProvider>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.$crisp=[]; 
              window.CRISP_WEBSITE_ID="652ed8b2-2f5e-4602-9fb1-01ee804d142e"; 
              (function(){ 
                d=document; 
                s=d.createElement("script"); 
                s.src="https://client.crisp.chat/l.js"; 
                s.async=1; 
                d.getElementsByTagName("head")[0].appendChild(s);
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
