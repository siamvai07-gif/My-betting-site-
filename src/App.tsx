import React, { useState } from 'react';
import { 
  Smartphone, 
  LayoutDashboard, 
  Columns, 
  ExternalLink, 
  Download, 
  Plane, 
  RotateCcw,
  BookOpen,
  CheckCircle2,
  Globe,
  KeyRound,
  Layers,
  X
} from 'lucide-react';

export default function App() {
  const [viewMode, setViewMode] = useState<'split' | 'user' | 'admin' | 'aviator'>('split');
  const [userFrameKey, setUserFrameKey] = useState<number>(0);
  const [adminFrameKey, setAdminFrameKey] = useState<number>(0);
  const [aviatorFrameKey, setAviatorFrameKey] = useState<number>(0);
  const [showDeployGuide, setShowDeployGuide] = useState<boolean>(false);

  const reloadUserFrame = () => setUserFrameKey(k => k + 1);
  const reloadAdminFrame = () => setAdminFrameKey(k => k + 1);
  const reloadAviatorFrame = () => setAviatorFrameKey(k => k + 1);

  return (
    <div className="min-h-screen bg-[#07080C] text-slate-100 flex flex-col font-sans select-none overflow-hidden">
      {/* Top Universal Control Bar */}
      <header className="h-14 bg-[#0B0D14]/95 backdrop-blur-xl border-b border-white/10 px-4 flex items-center justify-between shrink-0 z-50">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-violet-600 via-fuchsia-600 to-rose-600 flex items-center justify-center font-black text-white text-xs shadow-lg shadow-violet-600/30">
            NW
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-sm tracking-tight text-white">NEXUS<span className="text-violet-400">WIN</span></span>
              <span className="text-[10px] bg-violet-950/80 border border-violet-500/30 text-violet-300 font-bold px-2 py-0.5 rounded-full font-mono">
                AMOLED v3.0
              </span>
            </div>
          </div>
        </div>

        {/* View Mode Switcher */}
        <div className="flex items-center bg-[#10131E] p-1 rounded-xl border border-white/5 shadow-inner gap-1">
          <button 
            onClick={() => setViewMode('split')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
              viewMode === 'split' 
                ? 'bg-violet-600 text-white shadow-md shadow-violet-600/30' 
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Columns className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Dual Live View</span>
            <span className="sm:hidden">Dual</span>
          </button>
          
          <button 
            onClick={() => setViewMode('user')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
              viewMode === 'user' 
                ? 'bg-violet-600 text-white shadow-md shadow-violet-600/30' 
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Player Panel (/)</span>
          </button>

          <button 
            onClick={() => setViewMode('admin')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
              viewMode === 'admin' 
                ? 'bg-violet-600 text-white shadow-md shadow-violet-600/30' 
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <LayoutDashboard className="w-3.5 h-3.5" />
            <span>Admin (/admin)</span>
          </button>

          <button 
            onClick={() => setViewMode('aviator')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
              viewMode === 'aviator' 
                ? 'bg-rose-600 text-white shadow-md shadow-rose-600/30' 
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Plane className="w-3.5 h-3.5 text-rose-400" />
            <span>New Aviator (/aviator)</span>
          </button>
        </div>

        {/* Quick Actions & Deployment Downloads */}
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setShowDeployGuide(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/30 transition cursor-pointer"
          >
            <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
            <span className="hidden sm:inline">Netlify Deploy Guide</span>
            <span className="sm:hidden">Netlify</span>
          </button>

          <a 
            href="/AVVV.html" 
            download="AVVV.html"
            className="hidden md:flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-semibold bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 transition"
            title="Download Standalone AVVV.html"
          >
            <Download className="w-3.5 h-3.5 text-violet-400" />
            <span>AVVV.html</span>
          </a>

          <a 
            href="/admin.html" 
            download="admin.html"
            className="hidden md:flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-semibold bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 transition"
            title="Download Standalone admin.html"
          >
            <Download className="w-3.5 h-3.5 text-violet-400" />
            <span>admin.html</span>
          </a>

          <a 
            href="/aviator.html" 
            download="aviator.html"
            className="hidden md:flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-semibold bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 transition"
            title="Download Standalone aviator.html"
          >
            <Download className="w-3.5 h-3.5 text-rose-400" />
            <span>aviator.html</span>
          </a>
        </div>
      </header>

      {/* Main Viewport Container */}
      <div className="flex-1 min-h-0 flex bg-[#07080C] relative">
        {/* VIEW 1: DUAL SPLIT VIEW */}
        {viewMode === 'split' && (
          <div className="flex-1 flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-white/10 overflow-hidden">
            {/* Left: Mobile App Device Preview */}
            <div className="flex-1 flex flex-col items-center justify-center p-3 lg:p-6 bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,0.08),transparent_60%)] overflow-hidden">
              <div className="w-full max-w-[430px] flex items-center justify-between pb-2 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-violet-400" />
                  <span className="font-bold text-slate-200">User App (AMOLED Mobile View)</span>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={reloadUserFrame} title="Reload Panel" className="p-1 hover:text-white transition">
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                  <a href="/AVVV.html" target="_blank" rel="noreferrer" title="Open Fullscreen in New Tab" className="p-1 hover:text-white transition">
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Mobile Phone Mockup Chassis */}
              <div className="w-full max-w-[420px] h-[calc(100vh-140px)] rounded-[36px] bg-[#0A0D15] border-[3px] border-slate-800 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden relative flex flex-col ring-1 ring-white/10">
                <div className="h-5 bg-[#0A0D15] flex items-center justify-center shrink-0 border-b border-white/5">
                  <div className="w-16 h-1 bg-slate-700 rounded-full"></div>
                </div>
                <iframe 
                  key={userFrameKey}
                  src="/AVVV.html" 
                  title="Player Interface" 
                  className="w-full flex-1 border-none bg-[#07080C]"
                />
              </div>
            </div>

            {/* Right: SaaS Dashboard Preview */}
            <div className="flex-1 flex flex-col p-3 lg:p-6 bg-[#0B0D14] overflow-hidden">
              <div className="flex items-center justify-between pb-2 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <LayoutDashboard className="w-4 h-4 text-emerald-400" />
                  <span className="font-bold text-slate-200">Admin Operations Console (Live Firebase RTDB Sync)</span>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={reloadAdminFrame} title="Reload Panel" className="p-1 hover:text-white transition">
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                  <a href="/admin.html" target="_blank" rel="noreferrer" title="Open /admin in New Tab" className="p-1 hover:text-white transition">
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="flex-1 rounded-2xl border border-white/10 overflow-hidden shadow-2xl bg-[#06070A] flex flex-col">
                <iframe 
                  key={adminFrameKey}
                  src="/admin.html" 
                  title="Admin Console" 
                  className="w-full flex-1 border-none"
                />
              </div>
            </div>
          </div>
        )}

        {/* VIEW 2: FULL USER APP */}
        {viewMode === 'user' && (
          <div className="flex-1 flex items-center justify-center p-2 sm:p-6 bg-[#07080C]">
            <div className="w-full max-w-[480px] h-[calc(100vh-80px)] rounded-3xl border border-white/10 overflow-hidden shadow-2xl relative">
              <iframe 
                key={userFrameKey}
                src="/AVVV.html" 
                title="Player Interface Full" 
                className="w-full h-full border-none"
              />
            </div>
          </div>
        )}

        {/* VIEW 3: FULL ADMIN CONSOLE */}
        {viewMode === 'admin' && (
          <div className="flex-1 h-full bg-[#06070A]">
            <iframe 
              key={adminFrameKey}
              src="/admin.html" 
              title="Admin Console Full" 
              className="w-full h-[calc(100vh-56px)] border-none"
            />
          </div>
        )}

        {/* VIEW 4: NEW INTEGRATED AVIATOR ENGINE */}
        {viewMode === 'aviator' && (
          <div className="flex-1 flex flex-col items-center justify-center p-2 sm:p-6 bg-[#050608]">
            <div className="w-full max-w-[480px] flex items-center justify-between pb-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Plane className="w-4 h-4 text-rose-500" />
                <span className="font-bold text-slate-200">Official Spribe Aviator Engine</span>
                <span className="text-[10px] bg-rose-950 border border-rose-500/30 text-rose-300 font-mono px-2 py-0.5 rounded-full font-bold">
                  Direct /aviator Route
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={reloadAviatorFrame} title="Reload Aviator" className="p-1 hover:text-white transition">
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
                <a href="/aviator.html" target="_blank" rel="noreferrer" title="Open Fullscreen in New Tab" className="p-1 hover:text-white transition">
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="w-full max-w-[480px] h-[calc(100vh-120px)] rounded-3xl border border-white/10 overflow-hidden shadow-2xl relative bg-black">
              <iframe 
                key={aviatorFrameKey}
                src="/aviator.html" 
                title="Aviator Official Engine" 
                className="w-full h-full border-none"
              />
            </div>
          </div>
        )}
      </div>

      {/* Netlify Deployment Modal Guide */}
      {showDeployGuide && (
        <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#0E1017] border border-white/10 rounded-2xl w-full max-w-2xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
            <div className="p-4 border-b border-white/10 flex items-center justify-between bg-[#121622]">
              <div className="flex items-center gap-2.5">
                <Globe className="w-5 h-5 text-emerald-400" />
                <h3 className="font-bold text-base text-white">Netlify Deployment Guide (2 Panels + Direct /admin Route)</h3>
              </div>
              <button 
                onClick={() => setShowDeployGuide(false)}
                className="text-slate-400 hover:text-white p-1 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-6 overflow-y-auto text-sm text-slate-300">
              <div className="bg-emerald-950/30 border border-emerald-500/30 rounded-xl p-4 space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 font-bold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Configured & Ready for Netlify</span>
                </div>
                <p className="text-xs text-slate-300">
                  The project includes both <code className="text-emerald-300 bg-black/40 px-1.5 py-0.5 rounded font-mono">public/_redirects</code> and <code className="text-emerald-300 bg-black/40 px-1.5 py-0.5 rounded font-mono">netlify.toml</code> with forced 200 rewrite rules for <code className="text-emerald-300 bg-black/40 px-1.5 py-0.5 rounded font-mono">/admin</code> and <code className="text-emerald-300 bg-black/40 px-1.5 py-0.5 rounded font-mono">/aviator</code>.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-bold text-white text-sm flex items-center gap-2">
                  <Layers className="w-4 h-4 text-violet-400" />
                  <span>Deployment Methods (Choose One)</span>
                </h4>
                
                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 space-y-1.5">
                    <div className="font-semibold text-violet-300 text-xs uppercase tracking-wider">Method A: Git Repository Push (Recommended)</div>
                    <ol className="list-decimal list-inside text-xs text-slate-300 space-y-1">
                      <li>Push this repository to GitHub or GitLab.</li>
                      <li>In Netlify, click <strong>"Add new site" &rarr; "Import an existing project"</strong>.</li>
                      <li>Select your repo. Netlify will automatically detect:
                        <div className="mt-1 font-mono text-[11px] bg-slate-900 p-2 rounded border border-white/5">
                          Build Command: npm run build<br />
                          Publish directory: dist
                        </div>
                      </li>
                      <li>Click <strong>Deploy site</strong>. Done!</li>
                    </ol>
                  </div>

                  <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 space-y-1.5">
                    <div className="font-semibold text-emerald-300 text-xs uppercase tracking-wider">Method B: Direct Static Drag & Drop</div>
                    <ol className="list-decimal list-inside text-xs text-slate-300 space-y-1">
                      <li>Run <code className="text-emerald-300 font-mono">npm run build</code> locally.</li>
                      <li>Drag the generated <code className="text-emerald-300 font-mono">dist/</code> folder into Netlify's <strong>Deploys</strong> dropzone.</li>
                      <li>Both <code className="text-emerald-300 font-mono">/admin</code> and <code className="text-emerald-300 font-mono">/aviator</code> will work immediately.</li>
                    </ol>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-bold text-white text-sm flex items-center gap-2">
                  <KeyRound className="w-4 h-4 text-amber-400" />
                  <span>Access Credentials & Routes</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1">
                    <div className="text-slate-400">User Panel:</div>
                    <div className="font-mono text-emerald-400 font-bold">https://your-site.netlify.app/</div>
                  </div>
                  <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1">
                    <div className="text-slate-400">Admin Console:</div>
                    <div className="font-mono text-violet-400 font-bold">https://your-site.netlify.app/admin</div>
                  </div>
                  <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1">
                    <div className="text-slate-400">Dedicated Aviator:</div>
                    <div className="font-mono text-rose-400 font-bold">https://your-site.netlify.app/aviator</div>
                  </div>
                  <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1">
                    <div className="text-slate-400">Admin Passwords:</div>
                    <div className="font-mono text-amber-400 font-bold">SIAMVIP or rswinpass123</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 border-t border-white/10 bg-[#121622] flex justify-end">
              <button 
                onClick={() => setShowDeployGuide(false)}
                className="px-4 py-2 bg-violet-600 hover:bg-violet-500 text-white rounded-xl font-bold text-xs transition"
              >
                Close Guide
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
