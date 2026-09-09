import { useState } from "react";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("Dashboard");
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    {
      name: "Dashboard",
      path: "/",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="h-5 w-5"
        >
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
          <rect x="14" y="14" width="7" height="7" rx="1" />
        </svg>
      ),
    },
    {
      name: "Products",
      path: "/products",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="h-5 w-5"
        >
          <path d="m21 8-9-5-9 5 9 5 9-5Z" />
          <path d="m3 12 9 5 9-5" />
          <path d="m3 16 9 5 9-5" />
        </svg>
      ),
    },
    {
      name: "Add Product",
      path: "/products/add",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="h-5 w-5"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M12 8v8" />
          <path d="M8 12h8" />
        </svg>
      ),
    },
  ];

  return (
    <aside
      className={`hidden min-h-[calc(100vh-4rem)] border-r border-gray-200 bg-white transition-all duration-300 md:flex md:flex-col ${
        collapsed ? "w-20" : "w-64"
      }`}
    >
      {/* ==================== Sidebar Header ==================== */}
      <div className="flex h-16 items-center justify-between border-b border-gray-100 px-4">
        {!collapsed && (
          <div className="animate-[fadeIn_0.3s_ease-in-out]">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400">
              Workspace
            </p>

            <h2 className="mt-0.5 text-sm font-bold text-gray-800">
              Product Manager
            </h2>
          </div>
        )}

        <button
          type="button"
          onClick={() => setCollapsed(!collapsed)}
          className={`flex h-9 w-9 items-center justify-center rounded-lg text-gray-400 transition-all duration-300 hover:bg-gray-100 hover:text-gray-700 ${
            collapsed ? "mx-auto" : ""
          }`}
          aria-label="Toggle sidebar"
          aria-expanded={!collapsed}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className={`h-4 w-4 transition-transform duration-300 ${
              collapsed ? "rotate-180" : ""
            }`}
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
      </div>

      {/* ==================== Navigation ==================== */}
      <div className="flex-1 px-3 py-6">
        {!collapsed && (
          <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[0.18em] text-gray-400">
            Main Menu
          </p>
        )}

        <nav className="space-y-1.5">
          {menuItems.map((item) => {
            const isActive = activeItem === item.name;

            return (
              <button
                key={item.name}
                type="button"
                onClick={() => setActiveItem(item.name)}
                title={collapsed ? item.name : ""}
                aria-current={isActive ? "page" : undefined}
                className={`group relative flex w-full items-center rounded-xl transition-all duration-300 ${
                  collapsed
                    ? "justify-center px-3 py-3"
                    : "gap-3 px-3 py-3"
                } ${
                  isActive
                    ? "bg-blue-50 text-blue-600 shadow-sm"
                    : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                {/* Active indicator */}
                <span
                  className={`absolute left-0 top-1/2 h-6 -translate-y-1/2 rounded-r-full bg-blue-600 transition-all duration-300 ${
                    isActive ? "w-1" : "w-0"
                  }`}
                />

                {/* Icon */}
                <span
                  className={`shrink-0 transition-all duration-300 ${
                    isActive
                      ? "text-blue-600"
                      : "text-gray-400 group-hover:scale-110 group-hover:text-gray-700"
                  }`}
                >
                  {item.icon}
                </span>

                {/* Label */}
                {!collapsed && (
                  <span className="text-sm font-medium">
                    {item.name}
                  </span>
                )}

                {/* Arrow */}
                {!collapsed && isActive && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="ml-auto h-4 w-4 animate-[fadeIn_0.2s_ease-in-out]"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                )}

                {/* Tooltip */}
                {collapsed && (
                  <span className="pointer-events-none absolute left-16 z-50 whitespace-nowrap rounded-lg bg-gray-900 px-3 py-2 text-xs font-medium text-white opacity-0 shadow-lg transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100">
                    {item.name}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* ==================== Divider ==================== */}
        <div className="my-6 border-t border-gray-100" />

        {!collapsed && (
          <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[0.18em] text-gray-400">
            Management
          </p>
        )}

        {/* Settings */}
        <button
          type="button"
          onClick={() => setActiveItem("Settings")}
          title={collapsed ? "Settings" : ""}
          aria-current={activeItem === "Settings" ? "page" : undefined}
          className={`group relative flex w-full items-center rounded-xl px-3 py-3 transition-all duration-300 ${
            activeItem === "Settings"
              ? "bg-blue-50 text-blue-600 shadow-sm"
              : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
          } ${
            collapsed ? "justify-center" : "gap-3"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className={`h-5 w-5 shrink-0 transition-transform duration-500 group-hover:rotate-90 ${
              activeItem === "Settings" ? "text-blue-600" : ""
            }`}
          >
            <path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" />
            <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-1.41 1.41-.06-.06a1.7 1.7 0 0 0-1.88-.34 1.7 1.7 0 0 0-1.03 1.56V20h-2v-.49a1.7 1.7 0 0 0-1.03-1.56 1.7 1.7 0 0 0-1.88.34l-.06.06-1.41-1.41.06-.06A1.7 1.7 0 0 0 9.4 15a1.7 1.7 0 0 0-1.56-1.03H7v-2h.84A1.7 1.7 0 0 0 9.4 11a1.7 1.7 0 0 0-.34-1.88L9 9.06l1.41-1.41.06.06a1.7 1.7 0 0 0 1.88.34A1.7 1.7 0 0 0 13.38 6.5V6h2v.5a1.7 1.7 0 0 0 1.03 1.55 1.7 1.7 0 0 0 1.88-.34l.06-.06 1.41 1.41-.06.06A1.7 1.7 0 0 0 19.4 11a1.7 1.7 0 0 0 1.56 1.03H22v2h-1.04A1.7 1.7 0 0 0 19.4 15Z" />
          </svg>

          {!collapsed && (
            <span className="text-sm font-medium">
              Settings
            </span>
          )}

          {!collapsed && activeItem === "Settings" && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="ml-auto h-4 w-4 animate-[fadeIn_0.2s_ease-in-out]"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          )}

          {collapsed && (
            <span className="pointer-events-none absolute left-16 z-50 whitespace-nowrap rounded-lg bg-gray-900 px-3 py-2 text-xs font-medium text-white opacity-0 shadow-lg transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100">
              Settings
            </span>
          )}
        </button>
      </div>

      {/* ==================== Bottom Card ==================== */}
      {!collapsed && (
        <div className="p-3">
          <div className="relative overflow-hidden rounded-2xl bg-linear-to-br from-blue-600 via-indigo-600 to-purple-600 p-4 text-white shadow-lg shadow-blue-500/20">
            
            {/* Decorative circles */}
            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-white/10" />
            <div className="absolute -bottom-10 -left-6 h-24 w-24 rounded-full bg-white/10" />

            <div className="relative">
              <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-white/15">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-4 w-4"
                >
                  <path d="M12 3v12" />
                  <path d="m7 10 5 5 5-5" />
                  <path d="M5 21h14" />
                </svg>
              </div>

              <p className="text-xs font-semibold">
                Manage your products
              </p>

              <p className="mt-1 text-[11px] leading-relaxed text-blue-100">
                Keep your inventory organized and up to date.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ==================== Collapsed Bottom ==================== */}
      {collapsed && (
        <div className="flex justify-center p-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-all duration-300 hover:scale-105 hover:bg-blue-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-5 w-5"
            >
              <path d="M12 3v12" />
              <path d="m7 10 5 5 5-5" />
              <path d="M5 21h14" />
            </svg>
          </div>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;

