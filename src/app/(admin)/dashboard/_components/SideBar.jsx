"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LogOut, ChevronRight } from "lucide-react";
import * as Icons from "lucide-react";
import { useState } from "react";
import pb from "@/lib/pb";



export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [openMenus, setOpenMenus] = useState({});

  const toggleMenu = (title) => {
    setOpenMenus((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const role = pb.authStore.record?.role;

  const menuItems = [
    { title: "Dashboard", href: "/dashboard", icon: "LayoutDashboard" },

     {
      title: "Home",
      icon: "House",
      children: [
        { title: "Blogs", href: "/dashboard/home/blogs" },
        
      ],
    },

    
  ];

  return (
    <div className="w-64 min-h-screen bg-gray-100 text-gray-700 flex flex-col fixed border-r z-50">

      {/* Header */}
      <div className="text-xl font-bold text-center py-4 border-b">
        Admin Panel
      </div>

      {/* Menu */}
      <nav className="flex-1 px-3 py-4 space-y-2 overflow-y-auto">

        {menuItems.map((item, i) => {
          const Icon =
            item.icon && Icons[item.icon] ? Icons[item.icon] : Icons.File;

          return (
            <div key={i}>
              {item.children ? (
                <>
                  <button
                    onClick={() => toggleMenu(item.title)}
                    className="w-full flex justify-between items-center px-3 py-2 rounded hover:bg-gray-200"
                  >
                    <span className="flex items-center gap-2">
                      <Icon size={18} />
                      {item.title}
                    </span>
                    <ChevronRight
                      size={18}
                      className={`transition-transform ${
                        openMenus[item.title] ? "rotate-90" : ""
                      }`}
                    />
                  </button>

                  {openMenus[item.title] && (
                    <ul className="ml-6 mt-2 space-y-1 text-sm">
                      {item.children.map((child, j) => (
                        <li key={j}>
                          <Link
                            href={child.href}
                            className={`block px-2 py-1 rounded ${
                              pathname === child.href
                                ? "bg-gray-300 font-medium"
                                : "hover:bg-gray-200"
                            }`}
                          >
                            {child.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  className={`block px-3 py-2 rounded ${
                    pathname === item.href
                      ? "bg-gray-300 font-medium"
                      : "hover:bg-gray-200"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Icon size={18} />
                    {item.title}
                  </span>
                </Link>
              )}
            </div>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="p-3 border-t">
        <button
          onClick={() => {
            pb.authStore.clear();
            router.replace("/login");
          }}
          className="w-full flex items-center gap-2 px-3 py-2 border rounded hover:bg-black hover:text-white transition"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </div>
  );
}