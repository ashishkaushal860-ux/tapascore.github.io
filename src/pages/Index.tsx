import emblem from "@/assets/icons/emblem.png.asset.json";
import satellite from "@/assets/icons/satellite.png.asset.json";
import earthOrbit from "@/assets/icons/earth-orbit.png.asset.json";
import groundStation from "@/assets/icons/ground-station.png.asset.json";
import magneticSensor from "@/assets/icons/magnetic-sensor.png.asset.json";
import rfMicrowave from "@/assets/icons/rf-microwave.png.asset.json";
import satelliteSystems from "@/assets/icons/satellite-systems.png.asset.json";
import payloadElectronics from "@/assets/icons/payload-electronics.png.asset.json";

const NAV = ["Sensors", "Satellites", "Research", "About", "Contact"];

const CAPABILITIES = [
  { n: "01", label: "Magnetic Sensing", icon: magneticSensor.url },
  { n: "02", label: "RF & Microwave", icon: rfMicrowave.url },
  { n: "03", label: "Satellite Systems", icon: satelliteSystems.url },
  { n: "04", label: "Payload Electronics", icon: payloadElectronics.url },
];

const Index = () => {
  return (
    <div className="min-h-screen w-full bg-background text-foreground font-body p-4 md:p-8 flex flex-col items-center">
      <div className="max-w-7xl w-full space-y-6">
        {/* Header */}
        <nav className="flex justify-between items-center py-6 border-b border-border">
          <div className="flex items-center gap-3">
            <img src={emblem.url} alt="Martand emblem" className="w-9 h-9" />
            <div className="font-display text-2xl tracking-tighter uppercase">
              Martand<span className="text-foreground/50"> / Labs</span>
            </div>
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
            <img
              src={earthOrbit.url}
              alt="Earth orbit"
              className="absolute top-8 right-8 w-72 h-72 object-contain opacity-40 pointer-events-none"
            />
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
          <div className="tile flex flex-col justify-between relative overflow-hidden">
            <img src={satellite.url} alt="" className="absolute -top-2 -right-2 w-28 h-28 opacity-30 pointer-events-none" />
            <div className="label-mono relative z-10">Mission Envelope</div>
            <div className="font-display text-6xl relative z-10">LEO<span className="text-xl text-foreground/60"> · GEO</span></div>
            <div className="flex items-center gap-2 text-xs font-bold tracking-widest relative z-10">
              <span className="w-2 h-2 rounded-full bg-foreground animate-pulse" />
              TELEMETRY ONLINE
            </div>
          </div>

          {/* Core Capabilities */}
          <div className="md:col-span-2 bg-background border border-border p-8 flex flex-col justify-center">
            <div className="label-mono mb-4">Core Capabilities</div>
            <div className="grid grid-cols-2 gap-px bg-border">
              {CAPABILITIES.map((c) => (
                <div key={c.n} className="p-5 bg-background hover:bg-card transition-colors flex items-center gap-4">
                  <img src={c.icon} alt="" className="w-12 h-12 object-contain shrink-0" />
                  <div>
                    <span className="block text-foreground/50 text-xs font-bold mb-1 tracking-widest">{c.n}</span>
                    <span className="font-bold uppercase text-sm tracking-wide">{c.label}</span>
                  </div>
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
          <div className="tile flex flex-col justify-center relative overflow-hidden">
            <img src={groundStation.url} alt="" className="absolute -bottom-3 -right-3 w-24 h-24 opacity-30 pointer-events-none" />
            <div className="label-mono relative z-10">Facility</div>
            <div className="mt-3 font-bold uppercase tracking-wide relative z-10">Advanced Instrumentation Lab</div>
            <div className="text-foreground/60 text-sm mt-1 relative z-10">Class 1000 cleanroom · EMI shielded</div>
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
