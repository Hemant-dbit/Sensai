import React from "react";
import {
  SignInButton,
  SignUpButton,
  UserButton,
  SignedOut,
  SignedIn,
} from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronDown,
  LayoutDashboard,
  StarsIcon,
  FileText,
  PenBox,
  GraduationCap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { checkUser } from "@/lib/checkUser";

const Header = async () => {

  await checkUser();
  

  return (
    <header className="fixed top-0 w-full bg-background/150 border-b border-white/8 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-black/40 shadow-lg">
      <nav className="container mx-auto h-16 flex items-center justify-between ">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Sensai logo"
            width={200}
            height={60}
            className="h-12 w-auto object-contain py-1"
          />
        </Link>

        <div className="flex items-center space-x-4">
          <SignedIn>
            <Button
              className="bg-black text-white border border-gray-600 
  hover:border-white transition-all duration-300 
  px-4 py-2 rounded-md shadow-sm hover:bg-gray-800"
            >
              <LayoutDashboard className="h-4 w-4 " />
              <span className="hidden md:inline-block">Industry Insights</span>
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  className="bg-white text-black border-b border-gray-400
hover:border-gray-300 transition-all duration-300 px-4 py-2 rounded-md shadow-sm hover:bg-gray-100 flex items-center"
                >
                  <StarsIcon className="h-4 w-4 " />
                  <span className="hidden md:inline-block">Growth Tools</span>
                  <ChevronDown className="h-4 w-4 " />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-black text-white-500 shadow-lg rounded-lg mt-2">
                <DropdownMenuItem>
                  <Link
                    href="/resume"
                    className="flex items-center gap-2  hover:text-white-100"
                  >
                    <FileText className="h-4 w-4 text-white-500" />
                    <span>Resume Builder</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    href="/ai-cover-letter"
                    className="flex items-center gap-2 hover:text-gray-700"
                  >
                    <PenBox className="h-4 w-4 text-white-500" />
                    <span>Cover Letter</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    href="/interview-prep"
                    className="flex items-center gap-2 hover:text-gray-700"
                  >
                    <GraduationCap className="h-4 w-4 text-white-500" />
                    <span>Interview Prep</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SignedIn>

          <SignedOut>
            <SignInButton>
              <Button
                className="bg-black text-white border border-gray-600 
  hover:border-white transition-all duration-300 
  px-4 py-2 rounded-md shadow-sm hover:bg-gray-800"
              >
                Sign In
              </Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-16 h-16 !important",
                  userButtonPopoverCard: "shadow-xl",
                  userPreviewMainIdentifier: "font-semibold",
                },
              }}
              afterSignOutUrl="/"
            />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
};

export default Header;
