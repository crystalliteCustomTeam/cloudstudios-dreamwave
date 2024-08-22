import { Poppins } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../styles/globals.scss";
import ScriptsCode from "@/src/app/scripts";
import ConditionalLayout from "./conditionallayout";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ScriptsCode />
      <body className={poppins.className}>
        <ConditionalLayout >
          {children}
        </ConditionalLayout>
      </body>
    </html>
  );
}
