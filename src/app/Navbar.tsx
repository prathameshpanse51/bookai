"use client";

import React from "react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import ModeToggle from "./ModeToggle";
import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <header className="flex h-20 w-full shrink-0 items-center mt-6 px-4 md:px-36">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetTitle className="hidden"></SheetTitle>
            <Link
              href="#"
              className="mr-6 lg:flex flex items-center gap-4"
              prefetch={false}
            >
              {/* <MountainIcon className="h-6 w-6" /> */}
              <Image
                src="https://ik.imagekit.io/qz6ubt34n4/bookailogo.png?updatedAt=1723714681001"
                alt="logo"
                width={50}
                height={50}
              />

              <span className="sr-only">BookAI </span>
              <p
                className={cn(
                  "text-4xl font-normal text-black dark:text-white"
                )}
              >
                BookAI
              </p>
            </Link>
            <div className="grid gap-2 py-6">
              <Link
                href="#"
                className={cn("flex w-full items-center py-2 text-lg")}
                prefetch={false}
              >
                Features
              </Link>
              <Link
                href="#"
                className={cn("flex w-full items-center py-2 text-lg")}
                prefetch={false}
              >
                How It Works
              </Link>
              <Link
                href="#"
                className={cn("flex w-full items-center py-2 text-lg")}
                prefetch={false}
              >
                Roadmap
              </Link>
              <Link
                href="#"
                className={cn("flex w-full items-center py-2 text-lg")}
                prefetch={false}
              >
                API
              </Link>
              <Link
                href="#"
                className={cn("flex w-full items-center py-2 text-lg")}
                prefetch={false}
              >
                Price
              </Link>
              <Link
                href="#"
                className={cn("flex w-full items-center py-2 text-lg")}
                prefetch={false}
              >
                Model
              </Link>
            </div>
          </SheetContent>
        </Sheet>
        <Link
          href="#"
          className="mr-6 hidden lg:flex flex items-center gap-4"
          prefetch={false}
        >
          {/* <MountainIcon className="h-6 w-6" /> */}
          <Image
            src="https://ik.imagekit.io/qz6ubt34n4/bookailogo.png?updatedAt=1723714681001"
            alt="logo"
            width={60}
            height={60}
          />

          <span className="sr-only">BookAI </span>
          <p className={cn("text-5xl font-normal text-black dark:text-white")}>
            BookAI
          </p>
        </Link>
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuLink aria-describedby="link1-description" asChild>
              <Link
                href="#features"
                className={cn(
                  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-xl transition-colors hover:text-[#8a2be2]  dark:bg-gray-950 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50 hover:transition hover:duration-700 hover:-translate-y-1"
                )}
                prefetch={false}
              >
                Features
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink aria-describedby="link2-description" asChild>
              <Link
                href="#howitworks"
                className={cn(
                  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-xl transition-colors hover:text-[#8a2be2]  dark:bg-gray-950 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/ hover:transition hover:duration-700 hover:-translate-y-1"
                )}
                prefetch={false}
              >
                How It Works
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink aria-describedby="link3-description" asChild>
              <Link
                href="#roadmap"
                className={cn(
                  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-xl transition-colors hover:text-[#8a2be2]  dark:bg-gray-950 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50 hover:transition hover:duration-700 hover:-translate-y-1"
                )}
                prefetch={false}
              >
                Roadmap
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink aria-describedby="link4-description" asChild>
              <Link
                href="#api"
                className={cn(
                  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-xl transition-colors hover:text-[#8a2be2]  dark:bg-gray-950 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50 hover:transition hover:duration-700 hover:-translate-y-1"
                )}
                prefetch={false}
              >
                API
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink aria-describedby="link5-description" asChild>
              <Link
                href="#price"
                className={cn(
                  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-xl transition-colors hover:text-[#8a2be2]  dark:bg-gray-950 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50 hover:transition hover:duration-700 hover:-translate-y-1"
                )}
                prefetch={false}
              >
                Price
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink aria-describedby="link6-description" asChild>
              <Link
                href="#Model"
                className={cn(
                  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-xl transition-colors hover:text-[#8a2be2]  dark:bg-gray-950 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50 hover:transition hover:duration-700 hover:-translate-y-1"
                )}
                prefetch={false}
              >
                Model
              </Link>
            </NavigationMenuLink>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="ml-auto flex gap-4">
          <Button
            className={cn(
              "md:w-[188px] md:h-[52px] dark:text-white rounded-md text-xl bg-[#8a2be2] font-medium hover:bg-[#FE6100]"
            )}
            style={{
              backgroundImage: "linear-gradient(45deg, #726bff, #57b6fe)",
            }}
          >
            Login / Sign Up
          </Button>
          <ModeToggle />
        </div>
      </header>
    </>
  );
}

function MenuIcon(
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
