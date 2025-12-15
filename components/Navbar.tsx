"use client";

import { Bell, ChevronRight, CircleArrowRight, Menu, Merge, X } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { useState, useEffect } from "react";

const ANNOUNCEMENT_BAR_KEY = "announcement-bar-closed";
const ANNOUNCEMENT_BAR_DURATION = 12 * 60 * 60 * 1000; // 12 heures en millisecondes

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAnnouncementBarVisible, setIsAnnouncementBarVisible] = useState(false);

  useEffect(() => {
    // Vérifier si la barre a été fermée et si le délai est écoulé
    const checkAnnouncementBar = () => {
      const closedTimestamp = localStorage.getItem(ANNOUNCEMENT_BAR_KEY);
      
      if (!closedTimestamp) {
        // La barre n'a jamais été fermée, on l'affiche
        setIsAnnouncementBarVisible(true);
        return;
      }

      const now = Date.now();
      const closedTime = parseInt(closedTimestamp, 10);
      const timeElapsed = now - closedTime;

      // Si 12h se sont écoulées, on réaffiche la barre
      if (timeElapsed >= ANNOUNCEMENT_BAR_DURATION) {
        localStorage.removeItem(ANNOUNCEMENT_BAR_KEY);
        setIsAnnouncementBarVisible(true);
      } else {
        setIsAnnouncementBarVisible(false);
      }
    };

    checkAnnouncementBar();
  }, []);

  const handleCloseAnnouncementBar = () => {
    // Sauvegarder le timestamp actuel
    localStorage.setItem(ANNOUNCEMENT_BAR_KEY, Date.now().toString());
    setIsAnnouncementBarVisible(false);
  };

  return (
    <>
      {isAnnouncementBarVisible && (
        <div className="fixed w-full top-0 z-50">
          <div className="bg-zinc-900 flex items-center justify-center text-zinc-200 text-center text-sm py-2 px-4 relative">
            <Bell color="#ffffff" size={18} className="shrink-0" />
            <span className="ml-2 text-xs sm:text-sm">
              Bienvenue sur BuilderMania! Découvrez nos nouvelles fonctionnalités
              et offres spéciales.{" "}
              <Link
                href="/"
                className="underline underline-offset-2 font-semibold"
              >
                En savoir plus
              </Link>
            </span>
            <button
              onClick={handleCloseAnnouncementBar}
              className="absolute right-4 p-1 hover:bg-zinc-800 rounded transition-colors"
              aria-label="Fermer la barre d'annonce"
            >
              <X color="#ffffff" size={16} />
            </button>
          </div>
        </div>
      )}
      <header className={`fixed z-50 w-full py-4 ${isAnnouncementBarVisible ? 'top-8' : 'top-0'}`}>
        <div className="flex items-center w-full max-w-[80vw] mx-auto px-4 md:px-6 justify-between">
          <div className="flex justify-center items-center backdrop-blur supports-[backdrop-filter]:bg-white/50 border-2 ring-1 ring-primary-foreground/5 dark:ring-primary-foreground/10 backdrop-blur-sm px-4 md:px-6 py-2 rounded-xl border">
            <Link
              href="/"
              className="flex items-center uppercase gap-1 font-semibold text-sm capitalize border-r pr-3 md:pr-5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-circle-icon lucide-circle"
              >
                <circle cx="12" cy="12" r="10" />
              </svg>
              <span className="hidden sm:inline">buildermania</span>
            </Link>

            <nav className="hidden md:flex gap-8 text-zinc-600 pl-5">
              {/* <Link
                className="hover:text-zinc-400 duration-300 text-sm"
                href="/emploi"
              >
                Emploi
              </Link> */}
              <Link
                className="hover:text-zinc-400 duration-300 text-sm"
                href="/"
              >
                À propos
              </Link>
              <Link
                className="hover:text-zinc-400 duration-300 text-sm"
                href="/"
              >
                Blog
              </Link>
              <Link
                className="hover:text-zinc-400 duration-300 text-sm"
                href="/"
              >
                Contact
              </Link>
            </nav>
          </div>

          <div className="flex gap-2 md:gap-4 items-center">
            {/* Menu hamburger pour mobile */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>

            {/* Boutons desktop */}
            <div className="hidden md:flex gap-4">
              {/* <Link href="#">
                <Button
                  className="cursor-pointer hover:shadow-xl duration-300"
                  variant="outline"
                >
                  Se connecter
                </Button>
              </Link> */}

              <Link href="#">
                <Button
                  variant="default"
                  className="flex justify-center items-center cursor-pointer hover:shadow-xl duration-300"
                >
                  <span>Rejoindre</span>
                  <CircleArrowRight size={16} />
                </Button>
              </Link>
            </div>

            {/* Bouton unique pour mobile */}
            <Link href="#" className="md:hidden">
              <Button
                variant="default"
                size="sm"
                className="cursor-pointer hover:shadow-xl duration-300"
              >
                Commencer
              </Button>
            </Link>
          </div>
        </div>

        {/* Menu mobile */}
        {isMobileMenuOpen && (
          <div className={`fixed left-0 right-0 z-40 bg-white dark:bg-zinc-900 border-b shadow-lg md:hidden ${isAnnouncementBarVisible ? 'top-24' : 'top-16'}`}>
            <nav className="w-full max-w-[80vw] mx-auto px-4 py-4 flex flex-col gap-4">
              {/* <Link
                href="/emploi"
                className="text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white duration-300 text-sm py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Emploi
              </Link> */}
              <Link
                href="/about"
                className="text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white duration-300 text-sm py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                À propos
              </Link>
              <Link
                href="/blog"
                className="text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white duration-300 text-sm py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white duration-300 text-sm py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-2 border-t">
                <Link href="#">
                  <Button
                    variant="outline"
                    className="w-full cursor-pointer"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Se connecter
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}