import { Link } from "@inertiajs/react";
import { Children } from "react";

export default function Layout({ children }) {
    return (
        <>
            <header>
                <nav>
                    <Link href="/" className="nav-link">Home</Link>
                    <Link href="/nowShow" className="nav-link">Now Showing</Link>
                    <Link href="/comingUp" className="nav-link">Coming Up</Link>
                    <Link href="/about" className="nav-link">About</Link>
                </nav>
            </header>
            <main>
                {children}
            </main>
        </>
    )
}