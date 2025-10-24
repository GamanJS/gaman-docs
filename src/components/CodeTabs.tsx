import React, { useState, useEffect } from "react";
import { codeToHtml } from "shiki";
import { Home, Route, Code2, Cog, Shield } from "lucide-react";

type Section = "Entry" | "Router" | "Controller" | "Service" | "Middleware";

interface FileMap {
  file: string;
  lang: string;
  code: string;
  title: string;
  desc: string;
}

const FILES: Record<Section, FileMap> = {
  Entry: {
    file: "index.ts",
    lang: "ts",
    title: "Entry Point",
    desc: "The main entry file where the GamanJS server is initialized using `defineBootstrap`.",
    code: `import { defineBootstrap } from '@gaman/core';
import { Log } from '@gaman/common';

defineBootstrap(async (app) => {
  await app.mountServer(':3431');
  Log.info('Server is running at http://localhost:3431');
});`,
  },
  Router: {
    file: "AppRoutes.ts",
    lang: "ts",
    title: "Router",
    desc: "Defines the main routes and connects them with the corresponding controllers.",
    code: `import { autoComposeRoutes } from '@gaman/core';
import AppController from '../controllers/AppController';

export default autoComposeRoutes((r) => {
  r.get('/', [AppController, 'HelloWorld']);
});`,
  },
  Controller: {
    file: "AppController.ts",
    lang: "ts",
    title: "Controller",
    desc: "Handles business logic and communicates with services to process and return data.",
    code: `import { composeController } from '@gaman/core';
import { AppService, AppServiceType } from '../services/AppService.ts';

export default composeController((
  service: AppServiceType = AppService('GamanJS')) => ({

  HelloWorld(ctx) {
    return Res.json({ message: service.Welcome() });
  },

}));`,
  },
  Service: {
    file: "AppService.ts",
    lang: "ts",
    title: "Service",
    desc: "Contains reusable functions, core business logic, or external API/database calls.",
    code: `import { composeService } from "@gaman/core";

export const AppService = composeService((appName: string) => ({
  Welcome() {
    return '❤️ Welcome to ' + appName;
  },
}));

export type AppServiceType = ReturnType<typeof AppService>;`,
  },
  Middleware: {
    file: "AppMiddleware.ts",
    lang: "ts",
    title: "Middleware",
    desc: "Executes logic before and after a request is processed by the controller.",
    code: `import { autoComposeMiddleware } from '@gaman/core';

export default autoComposeMiddleware(async (ctx, next) => {
  // todo:
  return await next();
});`,
  },
};

const ICONS: Record<Section, any> = {
  Entry: Home,
  Router: Route,
  Controller: Code2,
  Service: Cog,
  Middleware: Shield,
};

export default function CodeTabs() {
  const [active, setActive] = useState<Section>("Entry");
  const [highlighted, setHighlighted] = useState("");

  useEffect(() => {
    const { code, lang } = FILES[active];
    codeToHtml(code, { lang, theme: "nord" }).then((html) => {
      const clean = html.replace(/background-color:[^;"]+;?/g, "");
      setHighlighted(clean);
    });
  }, [active]);

  const { title, desc } = FILES[active];
  const Icon = ICONS[active];

  return (
    <div className="relative w-full md:max-w-6xl mx-auto my-8 rounded-xl overflow-hidden shadow-lg shadow-purple-500/10">
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-pink-500/10 backdrop-blur-xl border border-white/10 rounded-xl" />

      <div className="relative z-10">
        <div className="flex flex-wrap md:flex-nowrap sm:gap-2 bg-stone-900/70 border-b border-stone-700/50 p-4 backdrop-blur-md relative">
          {(Object.keys(FILES) as Section[]).map((key) => {
            const TabIcon = ICONS[key];
            return (
              <div
                key={key}
                className="relative"
              >
                <button
                  onClick={() => setActive(key)}
                  className={`flex items-center gap-1 px-4 py-2 text-sm rounded-lg transition-colors font-semibold ${
                    active === key
                      ? "bg-pink-500/30 text-pink-300 shadow-inner"
                      : "text-stone-400 hover:bg-stone-800/40"
                  }`}
                >
                  <TabIcon size={16} />
                  <span>{key}</span>
                </button>

              </div>
            );
          })}
        </div>

        <div className="px-4 py-3 border-b border-stone-700/40 bg-black/30 backdrop-blur-md">
          <div className="flex items-center gap-2 text-lg font-semibold text-pink-300">
            <Icon size={20} />
            {title}
          </div>
          <p className="text-sm text-stone-300 mt-1">{desc}</p>
        </div>

        {/* Code Block */}
        <div className="relative bg-black/40 backdrop-blur-lg group">
          <div className="absolute -top-6 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
            <div className="relative px-3 py-1 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 border border-white/20 text-xs font-mono text-white text-bold shadow-[0_0_10px_rgba(255,100,200,0.3)] backdrop-blur-md">
              {FILES[active].file}
              <span className="absolute left-5 -bottom-1 w-2 h-2 bg-white/10 rotate-45 border-b border-r border-white/20" />
            </div>
          </div>

          <div
            className="overflow-x-auto font-mono text-sm p-4 text-stone-100"
            dangerouslySetInnerHTML={{ __html: highlighted }}
          />

          <button
            className="absolute top-3 right-3 px-3 py-1 text-xs rounded-md bg-stone-800/70 hover:bg-stone-700/80 border border-stone-600/60 transition text-stone-200 backdrop-blur-md"
            onClick={() => navigator.clipboard.writeText(FILES[active].code)}
          >
            Copy
          </button>
        </div>
      </div>
    </div>
  );
}
