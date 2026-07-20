import { Link } from "react-router-dom";
import emblem from "@/assets/icons-local/emblem.png";
import satellite from "@/assets/icons-local/satellite.png";
import earthOrbit from "@/assets/icons-local/earth-orbit.png";
import groundStation from "@/assets/icons-local/ground-station.png";
import magneticSensor from "@/assets/icons-local/magnetic-sensor.png";
import rfMicrowave from "@/assets/icons-local/rf-microwave.png";
import satelliteSystems from "@/assets/icons-local/satellite-systems.png";
import payloadElectronics from "@/assets/icons-local/payload-electronics.png";

const NAV = [
  { label: "Robotics", href: "#robotics" },
  { label: "Satellites", href: "#manufacturing" },
  { label: "Missions", href: "#missions" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "#contact" },
];

const CAPABILITIES = [
  { n: "01", label: "Orbital Robotics", icon: satelliteSystems },
  { n: "02", label: "Satellite Manufacturing", icon: payloadElectronics },
  { n: "03", label: "AIT & Cleanroom", icon: magneticSensor },
  { n: "04", label: "Ground Segment & RF", icon: rfMicrowave },
];

const PROGRAMS = [
  { code: "M-ARM 04", name: "6-DOF Servicing Arm", status: "Qualification" },
  { code: "SAT-BUS 12U", name: "Modular Satellite Bus", status: "Flight Build" },
  { code: "AIT LINE 02", name: "Automated Integration Cell", status: "Commissioned" },
  { code: "RDV-01", name: "Autonomous Rendezvous Stack", status: "Ground Test" },
];

const STAGES = [
  { s: "Structure", d: "Machined chassis" },
  { s: "Integration", d: "Robotic harnessing" },
  { s: "AIT & Test", d: "TVAC · Vibration" },
  { s: "Delivery", d: "Range integration" },
];

const LOG: [string, string, string][] = [
  ["T+00:04:12", "M-ARM 04", "Berthing sequence nominal"],
  ["T+00:03:58", "SAT-BUS 12U", "Solar array deploy confirmed"],
  ["T+00:03:41", "RDV-01", "Delta-V burn 0.42 m/s"],
  ["T+00:03:22", "AIT LINE 02", "Panel 7 torque within tolerance"],
  ["T+00:02:59", "GS-DELHI", "Downlink lock · X-band"],
];

const Index = () => {
  return (
    <div className="min-h-screen w-full bg-background text-foreground font-body p-4 md:p-8 flex flex-col items-center">
      <div className="max-w-7xl w-full space-y-6">
        {/* Header */}
        <nav className="flex justify-between items-center py-6 border-b border-border">
          <div className="flex items-center gap-3">
            <img src={emblem} alt="Martand emblem" className="w-9 h-9" />
            <div className="font-display text-2xl tracking-tighter uppercase leading-none">
              Martand<span className="text-foreground/50"> / Robotics</span>
            </div>
          </div>
          <div className="hidden md:flex gap-8 text-xs font-semibold tracking-[0.2em] uppercase text-foreground/70">
            {NAV.map((l) =>
              l.href.startsWith("/") ? (
                <Link key={l.label} to={l.href} className="hover:text-foreground transition-colors">
                  {l.label}
                </Link>
              ) : (
                <a key={l.label} href={l.href} className="hover:text-foreground transition-colors">
                  {l.label}
                </a>
              )
            )}
          </div>
          <button className="px-6 py-2 border border-foreground text-xs font-bold uppercase tracking-widest hover:bg-foreground hover:text-background transition-all">
            Request Brief
          </button>
        </nav>

        {/* Status strip */}
        <div className="flex flex-wrap items-center justify-between gap-3 border border-border px-4 py-2 text-[10px] font-bold tracking-[0.25em] uppercase text-foreground/60">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-foreground animate-blink" />
            LIVE / AIT CELL 02 · ORBIT SIM RUNNING
          </div>
          <div className="hidden md:block">LAT 12.97°N · LON 77.59°E</div>
          <div>REV 26.29 · UTC-SYNC</div>
        </div>

        {/* Bento */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:h-[820px]">
          {/* Hero */}
          <div className="md:col-span-2 md:row-span-2 relative overflow-hidden border border-border scanline bg-card">
            <div className="absolute inset-0 grid-overlay opacity-60 pointer-events-none" />
            <div className="absolute inset-0 starfield opacity-70 pointer-events-none" />
            <img
              src={earthOrbit}
              alt="Earth orbit"
              className="absolute top-6 right-6 w-72 h-72 object-contain opacity-40 pointer-events-none animate-orbit"
            />
            <div className="relative z-10 p-10 flex flex-col justify-end h-full">
              <div className="label-mono mb-6">Space Robotics · Satellite Manufacturing</div>
              <h1 className="font-display text-5xl md:text-7xl leading-[0.9] uppercase mb-6">
                Robots That <br />
                Build & <br />
                <span className="text-foreground/50">Service Orbit.</span>
              </h1>
              <p className="max-w-md text-lg text-foreground/70 mb-8">
                Martand designs autonomous manipulators, satellite buses, and integration lines — engineering the machines that manufacture, deploy, and maintain spacecraft on orbit.
              </p>
              <div className="flex gap-3">
                <button className="bg-foreground hover:bg-transparent hover:text-foreground border border-foreground text-background font-bold py-4 px-8 uppercase tracking-widest transition-all duration-300 text-xs">
                  Explore Systems
                </button>
                <button className="border border-foreground text-foreground font-bold py-4 px-8 uppercase tracking-widest hover:bg-foreground hover:text-background transition-all duration-300 text-xs">
                  Manufacturing
                </button>
              </div>
            </div>
          </div>

          {/* Payload metric */}
          <div className="tile flex flex-col justify-between">
            <div className="label-mono">Payload Delivered</div>
            <div>
              <div className="font-display text-6xl mb-2">
                1.2<span className="text-2xl align-top">t</span>
              </div>
              <div className="relative h-px w-full bg-foreground/20 mt-2 overflow-hidden">
                <div className="h-full w-11/12 bg-foreground" />
                <div className="absolute inset-y-0 w-1/3 bg-foreground/40 animate-sweep" />
              </div>
            </div>
            <p className="text-xs text-foreground/50 uppercase font-semibold tracking-widest">Cumulative to LEO · 2026</p>
          </div>

          {/* Envelope */}
          <div className="tile flex flex-col justify-between relative overflow-hidden">
            <img src={satellite} alt="" className="absolute -top-2 -right-2 w-28 h-28 opacity-30 pointer-events-none" />
            <div className="label-mono relative z-10">Mission Envelope</div>
            <div className="font-display text-6xl relative z-10">
              LEO<span className="text-xl text-foreground/60"> · GEO</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold tracking-widest relative z-10">
              <span className="w-2 h-2 rounded-full bg-foreground animate-pulse" />
              TELEMETRY ONLINE
            </div>
          </div>

          {/* Capabilities */}
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

          {/* CTA */}
          <div className="md:col-span-1 bg-foreground text-background p-8 flex flex-col justify-between">
            <div className="text-xs font-bold uppercase tracking-[0.25em] opacity-60">Collaborate</div>
            <h3 className="font-display text-3xl uppercase leading-none">Machines that build spacecraft.</h3>
            <div className="mt-6 w-12 h-12 border border-background flex items-center justify-center hover:bg-background hover:text-foreground transition-colors cursor-pointer">
              <span>→</span>
            </div>
          </div>

          {/* Facility */}
          <div className="tile flex flex-col justify-center relative overflow-hidden">
            <img src={groundStation} alt="" className="absolute -bottom-3 -right-3 w-24 h-24 opacity-30 pointer-events-none" />
            <div className="label-mono relative z-10">Facility</div>
            <div className="mt-3 font-bold uppercase tracking-wide relative z-10">Integration & Test Complex</div>
            <div className="text-foreground/60 text-sm mt-1 relative z-10">Class 1000 cleanroom · Robotic AIT line · TVAC</div>
          </div>
        </div>

        {/* Active Programs */}
        <section id="robotics" className="border border-border">
          <div className="flex items-center justify-between px-6 py-4 border-b border-border">
            <div className="label-mono">Active Programs</div>
            <div className="text-[10px] font-bold tracking-widest text-foreground/50 uppercase">Manifest / 2026-Q3</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-border">
            {PROGRAMS.map((p) => (
              <div key={p.code} className="p-6 flex flex-col gap-3 hover:bg-card transition-colors">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold tracking-[0.3em] text-foreground/50">{p.code}</span>
                  <span className="w-1.5 h-1.5 bg-foreground animate-blink" />
                </div>
                <div className="font-display text-xl uppercase leading-tight">{p.name}</div>
                <div className="text-xs uppercase tracking-widest text-foreground/60">{p.status}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Manufacturing */}
        <section id="manufacturing" className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="tile md:col-span-2 relative overflow-hidden">
            <div className="absolute inset-0 grid-overlay opacity-50 pointer-events-none" />
            <div className="relative z-10">
              <div className="label-mono mb-4">Satellite Manufacturing</div>
              <h2 className="font-display text-3xl md:text-4xl uppercase leading-tight mb-4">
                From bare bus to flight-ready in weeks, not years.
              </h2>
              <p className="text-foreground/70 leading-relaxed text-sm">
                Our AIT line pairs six-axis robotic manipulators with in-situ metrology and vision-guided torque control — assembling, harnessing, and testing satellite buses on a repeatable schedule.
              </p>
            </div>
          </div>
          {STAGES.map((st, i) => (
            <div key={st.s} className="tile flex flex-col justify-between min-h-[180px]">
              <div className="flex items-center justify-between">
                <span className="label-mono">Stage 0{i + 1}</span>
                <span className="w-6 h-px bg-foreground/40" />
              </div>
              <div className="font-display text-2xl uppercase leading-tight">{st.s}</div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-foreground/50 font-bold">{st.d}</div>
            </div>
          ))}
        </section>

        {/* Mission log */}
        <section id="missions" className="border border-border overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b border-border">
            <div className="label-mono">Mission Log</div>
            <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-foreground/60">
              <span className="w-2 h-2 rounded-full bg-foreground animate-pulse" />
              STREAMING
            </div>
          </div>
          <div className="divide-y divide-border font-mono text-xs">
            {LOG.map(([t, s, m]) => (
              <div key={t} className="grid grid-cols-[110px_140px_1fr] gap-4 px-6 py-3 hover:bg-card transition-colors">
                <span className="text-foreground/50">{t}</span>
                <span className="font-bold uppercase tracking-widest">{s}</span>
                <span className="text-foreground/70">{m}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="flex flex-col md:flex-row justify-between items-center py-12 border-t border-border text-foreground/50 text-[10px] uppercase tracking-[0.3em] font-bold">
          <div>© 2026 Martand Advanced Labs</div>
          <div className="mt-4 md:mt-0">Space Robotics · Satellite Manufacturing</div>
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
