import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t mt-24 py-4 bg-white">
      <div className="w-full max-w-[80vw] mx-auto px-4 md:px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} BuilderMania. Tous droits réservés.
          </p>

          <nav className="flex gap-6 mt-6 md:mt-0 text-sm text-gray-600">
            <Link href="/">Mentions légales</Link>
            <Link href="/">Politique de confidentialité</Link>
            <Link href="/">CGU</Link>
          </nav>
        </div>

      </div>
    </footer>
  );
}