/** @format */
"use client";

import { LucideSettings, LucideUserCircle, LucideUsers } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import Link from "next/link";
import { toast } from "sonner";
import { Button } from "./ui/button";

const DashboardTop = () => {
  return (
    <div className="flex flex-row bg-neutral-900 border-b border-neutral-700 h-20 px-4">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={"secondary"} className="ml-auto my-auto">
            {"Jakub Mańczak"}
            <LucideUserCircle className="ml-2" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="min-w-48">
          <DropdownMenuLabel>{"Your account"}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem disabled>
              <LucideUserCircle className="h-4 w-4 mr-2" />
              {"Account"}
            </DropdownMenuItem>
            <DropdownMenuItem disabled>
              <LucideUsers className="h-4 w-4 mr-2" />
              {"Other Users"}
            </DropdownMenuItem>
            <DropdownMenuItem disabled>
              <LucideSettings className="h-4 w-4 mr-2" />
              {"Settings"}
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <Link
            href="/auth"
            onClick={() => toast.success("Logged out successfully!")}
          >
            <DropdownMenuItem className="cursor-pointer">
              {"Log out"}
            </DropdownMenuItem>
          </Link>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export { DashboardTop };
