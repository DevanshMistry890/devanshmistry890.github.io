"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";

import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import SplitText from "gsap/SplitText";

import { animationCreate } from "@/utils/utils";
import { throwableAnimation } from "@/utils/throwableAnimation";
import animationTitle from "@/utils/animationTitle";
import animationTitleChar from "@/utils/animationTitleChar";
import servicesPanel from "@/utils/servicesPanel";
import PortfolioPanel from "@/utils/PortfolioPanel";
import blogAnimation from "@/utils/blogAnimation";
import linesAnimation from "@/utils/linesAnimation";
import { buttonAnimation } from "@/utils/buttonAnimation";
import { scrollTextAnimation } from "@/utils/scrollTextAnimation";
import textInvert from "@/utils/textInvert";

import ScrollToTop from "@/components/common/ScrollToTop";
import AnimateMouse from "@/components/common/animated-mouse";
import ContextProvider from "@/context/app-context";
import { ToastContainer } from "react-toastify";


if (typeof window !== "undefined") {
  gsap.registerPlugin(
    ScrollTrigger,
    ScrollToPlugin,
    SplitText
  );
}

/* -------------------------------------------------------------------------- */

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  /* Initial animation setup */
  useEffect(() => {
    const timer = setTimeout(() => {
      animationCreate();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  /* Sticky section (desktop only) */
  useEffect(() => {
    if (typeof window === "undefined") return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1199px)", () => {
      ScrollTrigger.create({
        trigger: ".tp-port-3-area",
        start: "top -60%",
        end: "bottom 120%",
        pin: ".tp-port-3-content-left",
        pinSpacing: true, // REQUIRED for static export
      });
    });

    return () => mm.revert();
  }, []);

  /* Route change animations */
  useEffect(() => {
    if (typeof window === "undefined") return;

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    if (typeof ScrollTrigger !== "undefined") {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      ScrollTrigger.refresh();
    }

    throwableAnimation();
    servicesPanel();
    PortfolioPanel();
    animationTitle();
    animationTitleChar();
    blogAnimation();
    linesAnimation();
    buttonAnimation();
    scrollTextAnimation();
    textInvert();

    // Reset scroll position safely
    window.scrollTo(0, 0);
    ScrollTrigger.refresh();
  }, [pathname]);

  return (
    <ContextProvider>
      {children}
      <ToastContainer position="top-right" />
      <AnimateMouse />
      <ScrollToTop />
    </ContextProvider>
  );
};

export default Wrapper;