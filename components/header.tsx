"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { Icons } from "./icons";
import { ModeToggle } from "./ui/mode-toggle";
import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";

const SiteHeader = () => {
  const { user, isSignedIn } = useUser();

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex justify-between h-16 max-w-screen-2xl items-center">
        <Link href="/">
          <h1 className=" text-lg mr-4  font-bold sm:inline-block">
            Artify
          </h1>
        </Link>
        <div className="flex items-center gap-4">
          <div className="lg:flex md:hidden items-center gap-4">
            <Link
              className="font-bold text-base transition-colors hover:text-foreground/80 text-foreground/60"
              href="/"
            >
              About
            </Link>
            <Link
              className="font-bold text-base transition-colors hover:text-foreground/80 text-foreground/60"
              href="/"
            >
              Explore
            </Link>
            <Link
              className="font-bold text-base transition-colors hover:text-foreground/80 text-foreground/60"
              href="/"
            >
              Contact Us
            </Link>
          </div>
          {isSignedIn ? (
            <UserButton afterSignOutUrl="/" />
          ) : (
            <div className="flex gap-4">
              <SignUpButton mode="modal">
                <Button size="sm" variant="ghost">
                  Sign Up
                </Button>
              </SignUpButton>
              <SignInButton mode="modal">
                <Button size="sm">Sign In</Button>
              </SignInButton>
            </div>
          )}
          <div>
            <Button variant="ghost" size="icon">
              {" "}
              <Icons.gitHub className="h-5 w-5 fill-current" />
            </Button>
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SiteHeader;
