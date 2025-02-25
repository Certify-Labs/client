import React from "react";
import { Menu, Wallet2, LogOut } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  return (
    <div className="max-w-[83rem] pt-6 mx-auto w-full">
      <div className="w-full flex items-center justify-between">
        <Link href={"/"} className=" flex gap-2 items-center">
          <div className="flex space-x-4">
            <Image
              src="/logo.svg"
              width={30}
              height={30}
              className="rounded-lg"
            />
          </div>
          <div className="text-gray-900 font-semibold ">Certify Blocks</div>
        </Link>

        <DropdownMenu>
          <DropdownMenuTrigger className="focus-visible:outline-none">
            <div className="bg-white border rounded-lg h-12 flex items-center gap-3 px-3 cursor-pointer hover:bg-gray-50 transition-colors">
              <Menu size={20} className="text-gray-600" />
              <img
                src="/avatar.svg"
                alt="User avatar"
                className="h-8 w-8 rounded-full bg-gray-100"
              />
            </div>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
              <Wallet2 size={16} className="text-gray-500" />
              <span>Address</span>
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            <DropdownMenuItem className="flex items-center gap-2 cursor-pointer text-red-600 focus:text-red-600">
              <LogOut size={16} />
              <span>Logout</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Nav;
