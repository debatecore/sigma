/** @format */
import { PropsWithChildren } from "react";
import Link from "next/link";
import { DashboardTop } from "./DashboardTop";
import {
  LucideBetweenHorizontalStart,
  LucideCastle,
  LucideFileClock,
  LucideFileImage,
  LucideLayoutDashboard,
  LucidePaintBucket,
  LucideScale,
  LucideScrollText,
  LucideSquareChevronRight,
  LucideTrophy,
  LucideUserCog,
  LucideUsers,
  LucideWaypoints,
} from "lucide-react";

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

const Dashboard = ({ children, ...props }: PropsWithChildren) => {
  return (
    <div className="min-h-screen w-full flex flex-row">
      <DashboardSidebar />
      <div className="flex-1">
        <DashboardTop />
        {children}
      </div>
    </div>
  );
};

const DashboardSidebar = () => {
  return (
    <div className="flex flex-col gap-4 bg-neutral-900 border-r border-neutral-700">
      <div className="flex flex-row gap-4 px-4 h-20 border-b border-neutral-700">
        <LucideWaypoints className="w-8 h-8 my-auto" />
        <div className="my-auto">
          <h1 className="text-lg font-semibold">{"SIGMA Planner"}</h1>
          <p className="text-neutral-500 text-sm">{"KLD (self-hosted)"}</p>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        {sidebar.map((category) => {
          return (
            <div className="mx-2" key={category.title}>
              <p className="text-neutral-500 text-sm uppercase ml-2 mb-1">
                {category.title}
              </p>
              <div className="flex flex-col">
                {category.items.map((item) => {
                  return (
                    <Link
                      href={!item.disabled ? item.href : ""}
                      key={item.title}
                      aria-disabled={item.disabled}
                      className={`flex flex-row gap-2 p-2 pr-4 rounded-md group hover:bg-neutral-950 ${
                        item.disabled && "opacity-[.5] cursor-not-allowed"
                      }`}
                    >
                      <span className="text-neutral-500 group-hover:text-white scale-[.9]">
                        {item.icon}
                      </span>
                      {item.title}
                    </Link>
                  );
                  // return (
                  //   <Button
                  //     variant={"ghost"}
                  //     key={item.title}
                  //     disabled={item.disabled}
                  //     className="font-normal disabled:text-neutral-500 flex flex-row justify-start gap-2"
                  //   >
                  //     {item.icon && <span className="w-3 h-3">{item.icon}</span>}
                  //     {item.title}
                  //   </Button>
                  // );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const sidebar: sidebarCategoryType[] = [
  {
    title: "tournament",
    items: [
      {
        title: "Overview",
        href: "/dashboard",
        icon: <LucideLayoutDashboard />,
      },
      {
        title: "Tournament Ladder",
        href: "",
        icon: <LucideBetweenHorizontalStart />,
        disabled: true,
      },
      {
        title: "Tournament Standings",
        href: "",
        icon: <LucideTrophy />,
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
        icon: <LucideUsers />,
        disabled: true,
      },
      {
        title: "Debate Motions",
        href: "",
        icon: <LucideScrollText />,
        disabled: true,
      },
      {
        title: "Staff, Judges & Bias",
        href: "",
        icon: <LucideScale />,
        disabled: true,
      },
      {
        title: "Event branding",
        href: "",
        icon: <LucideFileImage />,
        disabled: true,
      },
      {
        title: "Physical infrastructure",
        href: "",
        icon: <LucideCastle />,
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
        icon: <LucidePaintBucket />,
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
        icon: <LucideSquareChevronRight />,
      },
      {
        title: "Audit log",
        href: "/dashboard/audit-log",
        icon: <LucideFileClock />,
      },
      {
        title: "Users",
        href: "/dashboard/users",
        icon: <LucideUserCog />,
      },
    ],
  },
];

export { Dashboard };
