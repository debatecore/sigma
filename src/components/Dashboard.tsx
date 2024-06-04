/** @format */

import {
  BetweenHorizonalStartIcon,
  CastleIcon,
  FileClockIcon,
  FileImageIcon,
  LayoutDashboardIcon,
  PaintBucketIcon,
  ScaleIcon,
  ScrollTextIcon,
  SquareChevronRightIcon,
  TrophyIcon,
  UserCogIcon,
  UsersIcon,
} from "lucide-react";
import Link from "next/link";
import { PropsWithChildren } from "react";

const DashboardTopPanel = () => {
  const tournamentName = "Kórnik Debate League";
  const tournamentAbbreviation = "KLD";
  const tournamentHostString: "self-hosted" | "hosted by debatecore" =
    "self-hosted";

  return (
    <>
      <div className="px-6 py-4 flex flex-row items-center bg-neutral-900 border-b border-neutral-700">
        <div>
          <p className="text-2xl font-semibold">{`${tournamentAbbreviation} - ${tournamentName}`}</p>
          <p className="text-sm text-neutral-500 italic">
            {tournamentHostString}
          </p>
        </div>
        <div className="ml-auto p-2 rounded cursor-pointer text-center hover:bg-neutral-950">
          {/* <p>Log out</p> */}
        </div>
      </div>
    </>
  );
};

type sidebarItemType = {
  title: string;
  href: string;
  icon?: JSX.Element;
  disabled?: boolean;
};

type sidebarCategoryType = {
  title: string;
  items: sidebarItemType[];
};

const sidebar: sidebarCategoryType[] = [
  {
    title: "tournament",
    items: [
      {
        title: "Overview",
        href: "/dashboard",
        icon: <LayoutDashboardIcon />,
      },
      {
        title: "Tournament Ladder",
        href: "",
        icon: <BetweenHorizonalStartIcon />,
        disabled: true,
      },
      {
        title: "Tournament Standings",
        href: "",
        icon: <TrophyIcon />,
        disabled: true,
      },
    ],
  },
  {
    title: "tournament data",
    items: [
      {
        title: "Competing Teams",
        href: "",
        icon: <UsersIcon />,
        disabled: true,
      },
      {
        title: "Debate Motions",
        href: "",
        icon: <ScrollTextIcon />,
        disabled: true,
      },
      {
        title: "Staff, Judges & Bias",
        href: "",
        icon: <ScaleIcon />,
        disabled: true,
      },
      {
        title: "Event branding",
        href: "",
        icon: <FileImageIcon />,
        disabled: true,
      },
      {
        title: "Physical infrastructure",
        href: "",
        icon: <CastleIcon />,
        disabled: true,
      },
    ],
  },
  {
    title: "shareable",
    items: [
      {
        title: "Image generation",
        href: "",
        icon: <PaintBucketIcon />,
        disabled: true,
      },
    ],
  },
  {
    title: "admin zone",
    items: [
      {
        title: "Index page",
        href: "/",
        icon: <SquareChevronRightIcon />,
      },
      {
        title: "Audit log",
        href: "/dashboard/audit-log",
        icon: <FileClockIcon />,
      },
      {
        title: "Users",
        href: "/dashboard/users",
        icon: <UserCogIcon />,
      },
    ],
  },
];

const DashboardSidebar = () => {
  return (
    <aside className="flex flex-col gap-12 bg-neutral-900 border-r border-neutral-700 p-4 pt-6">
      {sidebar.map((category) => {
        return (
          <div key={category.title} className="flex flex-col">
            <p className="text-neutral-500 text-sm uppercase ml-2 mb-1">
              {category.title}
            </p>
            {category.items.map((item) => {
              return (
                <Link
                  href={!item.disabled ? item.href : ""}
                  key={item.title}
                  aria-disabled={item.disabled}
                  className={`flex flex-row gap-2 p-2 pr-4 rounded group hover:bg-neutral-950 ${
                    item.disabled && "opacity-[.5] cursor-not-allowed"
                  }`}
                >
                  <span className="text-neutral-500 group-hover:text-white scale-[.9]">
                    {item.icon}
                  </span>
                  {item.title}
                </Link>
              );
            })}
          </div>
        );
      })}
    </aside>
  );
};

const Dashboard = ({ children, ...props }: PropsWithChildren) => {
  return (
    <div className="min-h-screen flex flex-col">
      <DashboardTopPanel />
      <div className="flex flex-1 flex-row">
        <DashboardSidebar />
        {children}
      </div>
    </div>
  );
};

export { Dashboard };
