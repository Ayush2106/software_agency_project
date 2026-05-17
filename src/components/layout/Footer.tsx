import Link from "next/link";
import { Sparkles, Share2, Mail, Globe } from "lucide-react";

const socialIcons = [Share2, Mail, Globe];

export default function Footer() {
  return (
    <footer className="border-t border-violet-100 bg-white/80 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-violet-400 text-white">
                <Sparkles className="h-4 w-4" />
              </span>
              <span className="font-display text-xl font-bold">VioletForge</span>
            </Link>
            <p className="text-violet-900/60 max-w-sm text-sm leading-relaxed">
              AI-powered custom software studio. We build websites, mobile apps, and
              intelligent products that ship worldwide — on your timezone.
            </p>
            <div className="flex gap-3 mt-6">
              {socialIcons.map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-2 rounded-lg bg-violet-50 text-violet-600 hover:bg-violet-100 transition-colors"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-violet-900 mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-violet-900/60">
              <li><Link href="/#about" className="hover:text-violet-700">About</Link></li>
              <li><Link href="/#services" className="hover:text-violet-700">Services</Link></li>
              <li><Link href="/#work" className="hover:text-violet-700">Portfolio</Link></li>
              <li><Link href="/contact" className="hover:text-violet-700">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-violet-900 mb-4">Admin</h4>
            <ul className="space-y-2 text-sm text-violet-900/60">
              <li><Link href="/admin" className="hover:text-violet-700">Manage Projects</Link></li>
            </ul>
            <p className="mt-6 text-xs text-violet-400">
              © {new Date().getFullYear()} VioletForge. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
