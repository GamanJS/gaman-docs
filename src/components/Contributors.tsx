import React, { useEffect, useState } from "react";

interface Contributor {
  login: string;
  avatar_url: string;
  html_url: string;
}

const REPOS = [
  "https://api.github.com/repos/GamanJS/gaman/contributors",
  "https://api.github.com/repos/GamanJS/gaman-docs/contributors",
];

export default function Contributors() {
  const [contributors, setContributors] = useState<Contributor[]>([]);

  useEffect(() => {
    async function loadContributors() {
      const users = new Map<string, Contributor>();

      for (const repo of REPOS) {
        const res = await fetch(repo);
        const data = await res.json();
        data.forEach((u: Contributor) => users.set(u.login, u));
      }

      setContributors([...users.values()]);
    }

    loadContributors();
  }, []);

  return (
    

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 justify-center">
          {contributors.length > 0 ? (
            contributors.map((user) => (
              <a
                key={user.login}
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center hover:scale-105 hover:opacity-90 transition"
              >
                <img
                  src={user.avatar_url}
                  alt={user.login}
                  className="w-16 h-16 rounded-full border border-white/10 shadow-lg"
                />
                <span className="mt-2 text-xs text-stone-300">
                  {user.login}
                </span>
              </a>
            ))
          ) : (
            <p className="text-stone-500 text-sm col-span-full">
              Loading contributors...
            </p>
          )}
        </div>
  );
}
