import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Mail, Menu, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import ThemeToggle from "../ThemeToggle";
import { useState, useEffect } from "react"; // Add useEffect
import logo from "@/assets/logo.png";
import LogoDark from "@/assets/LogoDark.png";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  // Add this effect to listen for theme changes
  useEffect(() => {
    const handleThemeChange = () => {
      setIsDarkMode(
        localStorage.getItem("theme") === "dark" ||
          (!localStorage.getItem("theme") &&
            window.matchMedia("(prefers-color-scheme: dark)").matches)
      );
    };

    // Listen for changes in localStorage
    window.addEventListener("storage", handleThemeChange);
    // Listen for theme changes from ThemeToggle
    document.addEventListener("themeChange", handleThemeChange);

    return () => {
      window.removeEventListener("storage", handleThemeChange);
      document.removeEventListener("themeChange", handleThemeChange);
    };
  }, []);

  const handleLinkClick = () => {
    setOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center gap-2  p-2 rounded-lg">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src={isDarkMode ? LogoDark : logo}
              alt="Logo"
              className="h-12 w-12"
            />
          </Link>
        </div>
        <div className="flex space-x-3 ">
          <a
            href="tel:+4619269767"
            className="text-muted-foreground hover:text-foreground flex items-center gap-2"
          >
            <Phone className="h-5 w-5" />
            <span className="mr-2 hidden md:inline">019-26 97 67</span>
          </a>
        </div>
        {/* <div className="flex space-x-3 text-muted-foreground hover:text-foreground flex items-center ">
          <Clock className="h-5 w-5 " />
          <span>08:00-15:00</span>
        </div> */}

        <div className="flex space-x-3">
          <a
            href="mailto:info@renthus.com"
            className="text-muted-foreground hover:text-foreground flex items-center gap-2"
          >
            <Mail className="h-5 w-5" />
            <span className="hidden md:inline">info@renthus.com</span>
          </a>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link
            to="/"
            onClick={() => window.scrollTo(0, 0)}
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Hem
          </Link>

          <Link
            to="/services"
            onClick={() => window.scrollTo(0, 0)}
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Våra tjänster
          </Link>
          <Link
            to="/contact"
            onClick={() => window.scrollTo(0, 0)}
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Kontakt
          </Link>
          <ThemeToggle />
        </nav>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-6 mt-12">
              <Link
                to="/"
                onClick={handleLinkClick}
                className="text-lg font-medium transition-colors hover:text-primary flex items-center py-2"
              >
                Hem
              </Link>
              <div className="h-px bg-muted" />

              <Link
                to="/about-us"
                onClick={handleLinkClick}
                className="text-lg font-medium transition-colors hover:text-primary flex items-center py-2"
              >
                Våra tjänster
              </Link>
              <div className="h-px bg-muted" />

              <Link
                to="/contact"
                onClick={handleLinkClick}
                className="text-lg font-medium transition-colors hover:text-primary flex items-center py-2"
              >
                Kontakt
              </Link>
              <div className="h-px bg-muted" />

              <div className="mt-2 h-6 w-6 ">
                <ThemeToggle />
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
