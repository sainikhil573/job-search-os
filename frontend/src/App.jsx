import { NavLink, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import JobTracker from "./pages/JobTracker.jsx";
import Profile from "./pages/Profile.jsx";
import ResumeStudio from "./pages/ResumeStudio.jsx";

const navigation = [
  { name: "Dashboard", path: "/dashboard" },
  { name: "Profile", path: "/profile" },
  { name: "Resume Studio", path: "/resume-studio" },
  { name: "Job Tracker", path: "/job-tracker" },
];

function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-zinc-950">
      <header className="border-b border-zinc-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <div>
            <p className="text-sm font-medium uppercase tracking-wide text-teal-700">
              Job Search OS
            </p>
            <h1 className="text-2xl font-semibold">Workspace</h1>
          </div>
          <nav className="flex flex-wrap gap-2">
            {navigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  [
                    "rounded-md px-3 py-2 text-sm font-medium transition",
                    isActive
                      ? "bg-zinc-950 text-white"
                      : "text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950",
                  ].join(" ")
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/resume-studio" element={<ResumeStudio />} />
          <Route path="/job-tracker" element={<JobTracker />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
