import { Outlet } from "@remix-run/react";

export default function BlogRoute() {
  return (
    <div className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16">
      <Outlet />
    </div>
  );
}