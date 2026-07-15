const NAV = ["Sensors", "Satellites", "Research", "Contact"];

const CAPABILITIES = [
  { n: "01", label: "Magnetic Sensing" },
  { n: "02", label: "RF & Microwave" },
  { n: "03", label: "Satellite Systems" },
  { n: "04", label: "Payload Electronics" },
];

const Index = () => {
  return (
    <div className="min-h-screen w-full bg-background text-foreground font-body p-4 md:p-8 flex flex-col items-center">
      <div className="max-w-7xl w-full space-y-6">
        {/* Header */}
        <nav className="flex justify-between items-center py-6 border-b border-border">
          <div className="font-display text-2xl tracking-tighter uppercase">
            Martand<span className="text-foreground/50"> / Labs</span>
          </div>
          <div className="hidden md:flex gap-8 text-xs font-semibold tracking-[0.2em] uppercase text-foreground/70">
            {NAV.map((l) => (
              <a key={l} href="#" className="hover:text-foreground transition-colors">
                {l}
              </a>
            ))}
          </div>
          <button className="px-6 py-2 border border-foreground text-xs font-bold uppercase tracking-widest hover:bg-foreground hover:text-background transition-all">
            Request Brief
          </button>
        </nav>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:h-[800px]">
          {/* Hero */}
          <div className="md:col-span-2 md:row-span-2 bg-card p-10 flex flex-col justify-end relative overflow-hidden border border-border">
            {/* Orbit graphic */}
            <div className="absolute top-8 right-8 pointer-events-none opacity-40">
              <svg width="280" height="280" viewBox="0 0 280 280" fill="none" stroke="currentColor" strokeWidth="1">
                <circle cx="140" cy="140" r="130" strokeDasharray="2 4" />
                <circle cx="140" cy="140" r="90" />
                <circle cx="140" cy="140" r="55" strokeDasharray="1 3" />
                <circle cx="140" cy="140" r="6" fill="currentColor" />
                <circle cx="270" cy="140" r="4" fill="currentColor" />
                <circle cx="140" cy="50" r="3" fill="currentColor" />
                <line x1="140" y1="10" x2="140" y2="270" strokeDasharray="1 6" opacity="0.4" />
                <line x1="10" y1="140" x2="270" y2="140" strokeDasharray="1 6" opacity="0.4" />
              </svg>
            </div>
            <div className="label-mono mb-6 relative z-10">Engineering the next frontier</div>
            <h1 className="font-display text-5xl md:text-7xl leading-[0.9] uppercase mb-6 relative z-10">
              Magnetic <br />
              Sensing. <br />
              <span className="text-foreground/50">Orbital Class.</span>
            </h1>
            <p className="max-w-md text-lg text-foreground/70 mb-8 relative z-10">
              Martand Advanced Labs designs precision magnetic sensors and satellite subsystems for the next generation of space and defense platforms.
            </p>
            <button className="w-fit bg-foreground hover:bg-transparent hover:text-foreground border border-foreground text-background font-bold py-4 px-8 uppercase tracking-widest transition-all duration-300 relative z-10">
              Explore Systems
            </button>
          </div>

          {/* Sensitivity Metric */}
          <div className="tile flex flex-col justify-between">
            <div className="label-mono">Sensor Sensitivity</div>
            <div>
              <div className="font-display text-6xl mb-2">10<span className="text-2xl align-top">-9</span><span className="text-xl"> T</span></div>
              <div className="h-px w-full bg-foreground/20 mt-2">
                <div className="h-full w-11/12 bg-foreground" />
              </div>
            </div>
            <p className="text-xs text-foreground/50 uppercase font-semibold tracking-widest">Nanotesla resolution class</p>
          </div>

          {/* Orbit Coverage */}
          <div className="tile flex flex-col justify-between">
            <div className="label-mono">Mission Envelope</div>
            <div className="font-display text-6xl">LEO<span className="text-xl text-foreground/60"> · GEO</span></div>
            <div className="flex items-center gap-2 text-xs font-bold tracking-widest">
              <span className="w-2 h-2 rounded-full bg-foreground animate-pulse" />
              TELEMETRY ONLINE
            </div>
          </div>

          {/* Core Capabilities */}
          <div className="md:col-span-2 bg-background border border-border p-8 flex flex-col justify-center">
            <div className="label-mono mb-4">Core Capabilities</div>
            <div className="grid grid-cols-2 gap-px bg-border">
              {CAPABILITIES.map((c) => (
                <div key={c.n} className="p-5 bg-background hover:bg-card transition-colors">
                  <span className="block text-foreground/50 text-xs font-bold mb-2 tracking-widest">{c.n}</span>
                  <span className="font-bold uppercase text-sm tracking-wide">{c.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Partner CTA */}
          <div className="md:col-span-1 bg-foreground text-background p-8 flex flex-col justify-between">
            <div className="text-xs font-bold uppercase tracking-[0.25em] opacity-60">Collaborate</div>
            <h3 className="font-display text-3xl uppercase leading-none">Build the payload of tomorrow.</h3>
            <div className="mt-6 w-12 h-12 border border-background flex items-center justify-center hover:bg-background hover:text-foreground transition-colors cursor-pointer">
              <span>→</span>
            </div>
          </div>

          {/* HQ */}
          <div className="tile flex flex-col justify-center">
            <div className="label-mono">Facility</div>
            <div className="mt-3 font-bold uppercase tracking-wide">Advanced Instrumentation Lab</div>
            <div className="text-foreground/60 text-sm mt-1">Class 1000 cleanroom · EMI shielded</div>
          </div>
        </div>

        {/* Footer */}
        <footer className="flex flex-col md:flex-row justify-between items-center py-12 border-t border-border text-foreground/50 text-[10px] uppercase tracking-[0.3em] font-bold">
          <div>© 2026 Martand Advanced Labs</div>
          <div className="mt-4 md:mt-0">Engineering the next frontier</div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-foreground">Compliance</a>
            <a href="#" className="hover:text-foreground">Research</a>
            <a href="#" className="hover:text-foreground">Careers</a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
