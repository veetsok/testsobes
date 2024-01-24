import type { Metadata } from "next";
import StyledComponentsRegistry from "./lib/registry";
import "./styles/fonts.module.css";
import "./globals.css";
import HeaderBar from "./user.InterfaceLayer/Components/HeaderBar/HeaderBar";
import FooterBar from "./user.InterfaceLayer/Components/FooterBar/FooterBar";
import ReactQueryProvider from "./business.InterfaceLayer/providers/ReactQueryProvider";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <div className="PageContainer">
            <ReactQueryProvider>
              <HeaderBar />
              <div className="MainContainer">{children}</div>
              <FooterBar />
            </ReactQueryProvider>
          </div>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
