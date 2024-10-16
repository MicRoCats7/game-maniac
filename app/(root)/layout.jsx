import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function RootLayout({ children }) {
    return (
        <div>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
        </div>
    );
}