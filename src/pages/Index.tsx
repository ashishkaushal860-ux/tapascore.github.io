const NAV = ["Reactors", "Safety", "Data", "Innovation"];

const CAPABILITIES = [
  { n: "01", label: "Fuel Cycle Mgmt" },
  { n: "02", label: "SMR Deployment" },
  { n: "03", label: "Waste Mitigation" },
  { n: "04", label: "Thermal Logistics" },
];

const Index = () => {
  return (
    <div className="min-h-screen w-full bg-background text-foreground font-body p-4 md:p-8 flex flex-col items-center">
      <div className="max-w-7xl w-full space-y-6">
        {/* Header */}
        <nav className="flex justify-between items-center py-6 border-b border-primary/20">
          <div className="font-display text-2xl tracking-tighter uppercase">
            Nucleo<span className="text-primary">Core</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-semibold tracking-widest uppercase opacity-70">
            {NAV.map((l) => (
              <a key={l} href="#" className="hover:text-primary transition-colors">
                {l}
              </a>
            ))}
          </div>
          <button className="px-6 py-2 border border-primary text-xs font-bold uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-all">
            Portal Access
          </button>
        </nav>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:h-[800px]">
          {/* Hero */}
          <div className="md:col-span-2 md:row-span-2 bg-card p-10 flex flex-col justify-end relative overflow-hidden border border-primary/30 shadow-2xl">
            <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
              <div className="w-64 h-64 border-4 border-foreground rounded-full flex items-center justify-center">
                <div className="w-32 h-32 border-2 border-foreground rounded-full animate-pulse" />
              </div>
            </div>
            <h1 className="font-display text-5xl md:text-7xl leading-none uppercase mb-6 relative z-10">
              Nuclear <br />Precision
            </h1>
            <p className="max-w-md text-lg opacity-80 mb-8 relative z-10">
              Engineering the future of carbon-free baseload energy through next-generation modular reactor architectures.
            </p>
            <button className="w-fit bg-primary hover:bg-foreground hover:text-background text-foreground font-bold py-4 px-8 uppercase tracking-widest transition-all duration-300 relative z-10">
              View Infrastructure
            </button>
          </div>

          {/* Safety Rating */}
          <div className="tile flex flex-col justify-between">
            <div className="label-mono">Safety Rating</div>
            <div>
              <div className="font-display text-6xl mb-2">99.9<span className="text-xl">%</span></div>
              <div className="h-1 w-full bg-background mt-2">
                <div className="h-full w-full bg-primary transition-all duration-1000" />
              </div>
            </div>
            <p className="text-xs opacity-60 uppercase font-semibold">Exceeding Global IAEA Standards</p>
          </div>

          {/* Output Capacity */}
          <div className="tile flex flex-col justify-between cursor-pointer hover:bg-primary/10 transition-colors">
            <div className="label-mono">Output Capacity</div>
            <div className="font-display text-6xl">1.2<span className="text-xl">GW</span></div>
            <div className="flex items-center gap-2 text-xs font-bold">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              LIVE GRID SYNC
            </div>
          </div>

          {/* Core Capabilities */}
          <div className="md:col-span-2 bg-background p-8 border border-primary/30 relative flex flex-col justify-center overflow-hidden">
            <h3 className="font-display text-2xl uppercase mb-4">Core Capabilities</h3>
            <div className="grid grid-cols-2 gap-4">
              {CAPABILITIES.map((c) => (
                <div key={c.n} className="p-4 border border-primary/20 bg-card/30">
                  <span className="block text-primary text-xs font-bold mb-1">{c.n}</span>
                  <span className="font-bold uppercase text-sm">{c.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Partner CTA */}
          <div className="md:col-span-1 bg-primary p-8 flex flex-col justify-center items-center text-center">
            <h3 className="font-display text-xl uppercase mb-4 text-primary-foreground">Partner With Us</h3>
            <p className="text-sm text-primary-foreground font-bold leading-tight opacity-90">
              Join the global transition to stable carbon-free energy.
            </p>
            <div className="mt-6 w-12 h-12 border-2 border-primary-foreground flex items-center justify-center rotate-45 group hover:bg-primary-foreground transition-colors cursor-pointer">
              <span className="-rotate-45 text-primary-foreground group-hover:text-foreground">→</span>
            </div>
          </div>

          {/* HQ */}
          <div className="tile flex flex-col justify-center">
            <div className="text-sm font-bold opacity-60 uppercase">Global Headquarters</div>
            <div className="mt-2 font-bold">Strasbourg Industrial District</div>
            <div className="text-primary text-sm mt-1">24/7 Operations Command</div>
          </div>
        </div>

        {/* Footer */}
        <footer className="flex flex-col md:flex-row justify-between items-center py-12 border-t border-primary/20 opacity-50 text-[10px] uppercase tracking-[0.3em] font-bold">
          <div>© 2024 NUCLEOCORE SYSTEMS INTERNATIONAL</div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary">Compliance</a>
            <a href="#" className="hover:text-primary">Investor Relations</a>
            <a href="#" className="hover:text-primary">Security Protocols</a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
