"use client";

import { useEffect, useState } from "react";
import { HamburgerIcon, PlusIcon, SearchIcon, ClockHistoryIcon, ChevronLeftIcon, ChevronRightIcon } from "./dashboard-icons";
import StoryHistoryItem from "./StoryHistoryItem";
import { STORY_HISTORY } from "../data/dashboard";

export default function DashboardSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [query, setQuery] = useState("");

  // Start collapsed on small screens so the sidebar doesn't cover the workspace on first load.
  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth <= 768) {
      setCollapsed(true);
    }
  }, []);

  const toggle = () => setCollapsed((c) => !c);

  const filtered = query.trim()
    ? STORY_HISTORY.filter((h) => h.title.toLowerCase().includes(query.trim().toLowerCase()))
    : STORY_HISTORY;

  return (
    <aside className={`dash-sidebar${collapsed ? " collapsed" : ""}`}>
      <div className="sidebar-top">
        <button className="icon-btn" onClick={toggle} aria-label="Toggle sidebar">
          <HamburgerIcon />
        </button>
        {!collapsed && (
          <button className="icon-btn sidebar-collapse-mini" onClick={toggle} aria-label="Collapse sidebar">
            <ChevronLeftIcon width={16} height={16} />
          </button>
        )}
      </div>

      {collapsed ? (
        <div className="sidebar-rail">
          <button className="icon-btn icon-btn-active" aria-label="New story" title="New Story">
            <PlusIcon />
          </button>
          <button className="icon-btn" aria-label="Search stories" title="Search">
            <SearchIcon />
          </button>
          <button className="icon-btn" aria-label="Story history" title="History Chats">
            <ClockHistoryIcon />
          </button>
          <div className="sidebar-rail-divider" />
          {STORY_HISTORY.map((item) => (
            <StoryHistoryItem key={item.id} item={item} collapsed />
          ))}
        </div>
      ) : (
        <>
          <button className="sidebar-new-btn">
            <PlusIcon width={18} height={18} />
            <span>New Story</span>
          </button>

          <div className="sidebar-search">
            <SearchIcon width={17} height={17} />
            <input
              type="text"
              placeholder="Search stories..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search stories"
            />
          </div>

          <div className="sidebar-history-head">
            <ClockHistoryIcon width={15} height={15} />
            <span>History Chats</span>
          </div>

          <div className="sidebar-history-list">
            {filtered.map((item) => (
              <StoryHistoryItem key={item.id} item={item} />
            ))}
            {filtered.length === 0 && <p className="sidebar-empty">No stories match &ldquo;{query}&rdquo;.</p>}
          </div>
        </>
      )}

      <button className="sidebar-bottom-btn" onClick={toggle} aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}>
        {collapsed ? <ChevronRightIcon width={18} height={18} /> : (
          <>
            <ChevronLeftIcon width={16} height={16} />
            <span>Collapse</span>
          </>
        )}
      </button>
    </aside>
  );
}
