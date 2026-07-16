import { Link } from "react-router-dom";
import emblem from "@/assets/icons/emblem.png.asset.json";
import earthOrbit from "@/assets/icons/earth-orbit.png.asset.json";
import satellite from "@/assets/icons/satellite.png.asset.json";
import groundStation from "@/assets/icons/ground-station.png.asset.json";
import magneticSensor from "@/assets/icons/magnetic-sensor.png.asset.json";
import rfMicrowave from "@/assets/icons/rf-microwave.png.asset.json";
import satelliteSystems from "@/assets/icons/satellite-systems.png.asset.json";
import payloadElectronics from "@/assets/icons/payload-electronics.png.asset.json";

const NAV = [
  { label: "Sensors", href: "#" },
  { label: "Satellites", href: "#" },
  { label: "Research", href: "#" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "#" },
];

const PILLARS = [
  {
    icon: magneticSensor.url,
    title: "Magnetic Sensing",
    body: "Fluxgate, magnetoresistive, and optically-pumped instruments engineered for nanotesla-class resolution across space, defense, and geophysical applications.",
  },
  {
    icon: rfMicrowave.url,
    title: "RF & Microwave",
    body: "Low-noise front ends, filters, and phased-array electronics validated with vector network analysis and characterized down to sub-picosecond timing.",
  },
  {
    icon: satelliteSystems.url,
    title: "Satellite Systems",
    body: "End-to-end small-satellite subsystems — attitude determination, magnetometer booms, and thermal-vacuum qualified payload buses for LEO and GEO missions.",
  },
  {
    icon: payloadElectronics.url,
    title: "Payload Electronics",
    body: "Rad-tolerant boards, FPGA signal chains, and mixed-signal ASIC integration built for continuous on-orbit operation.",
  },
];

const TIMELINE = [
  { year: "2023", event: "Martand Advanced Labs founded to close the gap between magnetics research and flight hardware." },
  { year: "2024", event: "First fluxgate magnetometer prototype delivered to a national space agency partner." },
  { year: "2025", event: "Class 1000 cleanroom and EMI-shielded characterization facility commissioned." },
  { year: "2026", event: "Selected as payload electronics supplier for an upcoming LEO Earth-observation constellation." },
];

const STATS = [
  { k: "10⁻⁹ T", v: "Sensor floor" },
  { k: "LEO · GEO", v: "Mission envelope" },
  { k: "24 / 7", v: "Telemetry ops" },
  { k: "100%", v: "In-house test" },
];

const About = () => {
  return (
    <div className="min-h-screen w-full bg-background text-foreground font-body p-4 md:p-8 flex flex-col items-center">
      <div className="max-w-7xl w-full space-y-10">
        {/* Header */}
        <nav className="flex justify-between items-center py-6 border-b border-border">
          <Link to="/" className="flex items-center gap-3">
            <img src={emblem.url} alt="Martand emblem" className="w-9 h-9" />
            <div className="font-display text-2xl tracking-tighter uppercase">
              Martand<span className="text-foreground/50"> / Labs</span>
            </div>
          </Link>
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

        {/* Page title */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-3 tile flex flex-col justify-between min-h-[380px] relative overflow-hidden">
            <img src={earthOrbit.url} alt="" className="absolute -right-6 -bottom-6 w-72 h-72 opacity-20 pointer-events-none" />
            <div className="label-mono relative z-10">About / 001</div>
            <h1 className="font-display text-5xl md:text-7xl uppercase leading-[0.9] relative z-10">
              Instruments <br />
              For The <br />
              <span className="text-foreground/50">Space Between.</span>
            </h1>
            <p className="max-w-2xl text-foreground/70 text-lg relative z-10">
              Martand Advanced Labs is an independent research and manufacturing group building precision magnetic sensors and satellite subsystems for scientific, defense, and commercial space programs.
            </p>
          </div>
          <div className="tile flex flex-col justify-between min-h-[380px]">
            <div className="label-mono">Established</div>
            <div className="font-display text-6xl">2023</div>
            <div className="text-foreground/60 text-sm uppercase tracking-widest font-semibold">
              Advanced Instrumentation Lab · Class 1000 cleanroom · EMI shielded
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="tile md:col-span-2">
            <div className="label-mono mb-4">Mission</div>
            <p className="text-2xl md:text-3xl font-display uppercase leading-tight">
              To measure what others cannot — magnetic fields at the picotesla edge, from lab bench to orbit — and to build the flight hardware that carries those measurements into service.
            </p>
          </div>
          <div className="bg-foreground text-background p-8 flex flex-col justify-between">
            <div className="text-xs font-bold uppercase tracking-[0.25em] opacity-60">Principle</div>
            <p className="font-display text-2xl uppercase leading-tight">
              Precision is a discipline, not a specification.
            </p>
            <div className="text-xs opacity-60 uppercase tracking-widest">— Engineering charter, 2023</div>
          </div>
        </section>

        {/* Stats strip */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border">
          {STATS.map((s) => (
            <div key={s.k} className="bg-background p-6 flex flex-col gap-2">
              <div className="font-display text-4xl">{s.k}</div>
              <div className="label-mono">{s.v}</div>
            </div>
          ))}
        </section>

        {/* Pillars */}
        <section>
          <div className="label-mono mb-4">What We Build</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {PILLARS.map((p) => (
              <div key={p.title} className="tile flex gap-5">
                <img src={p.icon} alt="" className="w-16 h-16 object-contain shrink-0" />
                <div>
                  <h3 className="font-display text-xl uppercase mb-2">{p.title}</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Satellite mission narrative */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="tile md:col-span-2 relative overflow-hidden">
            <img src={satellite.url} alt="" className="absolute -right-4 -bottom-4 w-56 h-56 opacity-25 pointer-events-none" />
            <div className="label-mono mb-4 relative z-10">Satellite Program</div>
            <h2 className="font-display text-3xl md:text-4xl uppercase leading-tight mb-4 relative z-10">
              A magnetometer boom, a payload bus, a downlink you can trust.
            </h2>
            <p className="text-foreground/70 leading-relaxed max-w-xl relative z-10">
              Our satellite work begins where the physics stops being convenient — deploying booms that isolate our sensors from spacecraft-generated noise, hardening electronics against radiation, and closing the link with a ground segment we own end-to-end. Every subsystem is built, tested, and flown by the same team.
            </p>
          </div>
          <div className="tile flex flex-col justify-between relative overflow-hidden">
            <img src={groundStation.url} alt="" className="absolute -right-3 -bottom-3 w-32 h-32 opacity-25 pointer-events-none" />
            <div className="label-mono relative z-10">Ground Segment</div>
            <div className="font-display text-2xl uppercase leading-tight relative z-10">
              Owned dish. <br /> Owned pipeline.
            </div>
            <p className="text-sm text-foreground/60 relative z-10">
              S-band and X-band downlink with in-house telemetry decoders and calibration pipelines.
            </p>
          </div>
        </section>

        {/* Timeline */}
        <section>
          <div className="label-mono mb-4">Trajectory</div>
          <div className="border border-border">
            {TIMELINE.map((t, i) => (
              <div
                key={t.year}
                className={`grid grid-cols-[100px_1fr] md:grid-cols-[160px_1fr] gap-6 p-6 ${
                  i < TIMELINE.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <div className="font-display text-3xl">{t.year}</div>
                <div className="text-foreground/70 text-base leading-relaxed self-center">{t.event}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-foreground text-background p-10 md:p-14 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.25em] opacity-60 mb-3">Collaborate</div>
            <h3 className="font-display text-3xl md:text-4xl uppercase leading-none">
              Build the payload of tomorrow with us.
            </h3>
          </div>
          <button className="px-8 py-4 border border-background text-xs font-bold uppercase tracking-widest hover:bg-background hover:text-foreground transition-all">
            Request a Brief →
          </button>
        </section>

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

export default About;
