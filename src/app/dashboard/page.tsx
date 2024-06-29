/** @format */

import { Dashboard } from "@/components/Dashboard";
import Link from "next/link";

const RecentActivity = () => {
  return (
    <div className="ml-auto border-l border-neutral-700 w-[30%] h-full">
      <div className="flex flex-row items-center p-4 gap-3">
        <div className="w-2 h-2 bg-emerald-400 rounded-full">
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-ping" />
        </div>
        <p>{"Recent activity"}</p>
        <Link
          href="/dashboard/audit-log"
          className="p-1 px-2 rounded ml-auto text-sm text-neutral-500 hover:bg-neutral-800 hover:text-white"
        >
          {"View all"}
        </Link>
      </div>
      <hr className="border-neutral-700 mx-4" />
    </div>
  );
};

export default function PageDashboard() {
  return (
    <>
      <Dashboard>
        <div className="flex-1 h-full flex flex-row">
          <div className="p-4">
            <p>Overview</p>
          </div>
          <RecentActivity />
        </div>
      </Dashboard>
    </>
  );
}
