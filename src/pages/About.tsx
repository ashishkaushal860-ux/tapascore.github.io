import { Link } from "react-router-dom";
import emblem from "@/assets/icons-local/emblem.png";
import earthOrbit from "@/assets/icons-local/earth-orbit.png";
import satellite from "@/assets/icons-local/satellite.png";
import groundStation from "@/assets/icons-local/ground-station.png";
import magneticSensor from "@/assets/icons-local/magnetic-sensor.png";
import rfMicrowave from "@/assets/icons-local/rf-microwave.png";
import satelliteSystems from "@/assets/icons-local/satellite-systems.png";
import payloadElectronics from "@/assets/icons-local/payload-electronics.png";

const NAV = [
  { label: "Robotics", href: "/#robotics" },
  { label: "Satellites", href: "/#manufacturing" },
  { label: "Missions", href: "/#missions" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" },
];

const PILLARS = [
  {
    icon: satelliteSystems,
    title: "Orbital Robotics",
    body: "Six-axis manipulators, capture mechanisms, and autonomous rendezvous stacks for satellite servicing, on-orbit assembly, and debris mitigation.",
  },
  {
    icon: payloadElectronics,
    title: "Satellite Manufacturing",
    body: "Modular buses from 3U CubeSats to 500 kg-class platforms, produced on a robotic AIT line with in-situ metrology and vision-guided integration.",
  },
  {
    icon: magneticSensor,
    title: "Guidance & Sensing",
    body: "Star trackers, magnetometers, and vision systems that give our robots and spacecraft the situational awareness to operate on orbit autonomously.",
  },
  {
    icon: rfMicrowave,
    title: "Ground & Comms",
    body: "Owned S/X-band ground segment, low-noise RF chains, and telemetry pipelines built to command robotic assets end-to-end.",
  },
];

const TIMELINE = [
  { year: "2023", event: "Martand Advanced Labs founded to close the gap between space robotics research and flight hardware." },
  { year: "2024", event: "First robotic AIT cell commissioned; delivered a 12U satellite bus prototype to a national space agency partner." },
  { year: "2025", event: "M-ARM 04 six-DOF servicing arm completed qualification testing in TVAC and vibration." },
  { year: "2026", event: "Selected as manufacturing partner for an upcoming LEO Earth-observation constellation and RDV-01 servicing demo." },
];

const STATS = [
  { k: "6-DOF", v: "Servicing arms" },
  { k: "12U → 500kg", v: "Bus envelope" },
  { k: "24 / 7", v: "AIT operations" },
  { k: "100%", v: "In-house build" },
];

const About = () => {
  return (
    <div className="min-h-screen w-full bg-background text-foreground font-body p-4 md:p-8 flex flex-col items-center">
      <div className="max-w-7xl w-full space-y-10">
        {/* Header */}
        <nav className="flex justify-between items-center py-6 border-b border-border">
          <Link to="/" className="flex items-center gap-3">
            <img src={emblem} alt="Martand emblem" className="w-9 h-9" />
            <div className="font-display text-2xl tracking-tighter uppercase">
              Martand<span className="text-foreground/50"> / Robotics</span>
            </div>
          </Link>
          <div className="hidden md:flex gap-8 text-xs font-semibold tracking-[0.2em] uppercase text-foreground/70">
            {NAV.map((l) =>
              l.href.startsWith("/about") ? (
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
          <div className="md:col-span-3 tile flex flex-col justify-between min-h-[380px] relative overflow-hidden scanline">
            <div className="absolute inset-0 grid-overlay opacity-50 pointer-events-none" />
            <div className="absolute inset-0 starfield opacity-60 pointer-events-none" />
            <img src={earthOrbit} alt="" className="absolute -right-6 -bottom-6 w-72 h-72 opacity-25 pointer-events-none animate-orbit" />
            <div className="label-mono relative z-10">About / 001</div>
            <h1 className="font-display text-5xl md:text-7xl uppercase leading-[0.9] relative z-10">
              Robots That <br />
              Manufacture <br />
              <span className="text-foreground/50">And Service Orbit.</span>
            </h1>
            <p className="max-w-2xl text-foreground/70 text-lg relative z-10">
              Martand Advanced Labs is an independent space robotics and satellite manufacturing group. We build the machines that assemble, deploy, and maintain spacecraft — on the ground and in orbit.
            </p>
          </div>
          <div className="tile flex flex-col justify-between min-h-[380px]">
            <div className="label-mono">Established</div>
            <div className="font-display text-6xl">2023</div>
            <div className="text-foreground/60 text-sm uppercase tracking-widest font-semibold">
              Integration & Test Complex · Robotic AIT line · TVAC
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="tile md:col-span-2">
            <div className="label-mono mb-4">Mission</div>
            <p className="text-2xl md:text-3xl font-display uppercase leading-tight">
              To build the robots that build spacecraft — and the spacecraft that service the orbits we depend on.
            </p>
          </div>
          <div className="bg-foreground text-background p-8 flex flex-col justify-between">
            <div className="text-xs font-bold uppercase tracking-[0.25em] opacity-60">Principle</div>
            <p className="font-display text-2xl uppercase leading-tight">
              Automate the build. Autonomize the mission.
            </p>
            <div className="text-xs opacity-60 uppercase tracking-widest">— Engineering charter, 2023</div>
          </div>
        </section>

        {/* Stats */}
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

        {/* Program narrative */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="tile md:col-span-2 relative overflow-hidden">
            <img src={satellite} alt="" className="absolute -right-4 -bottom-4 w-56 h-56 opacity-25 pointer-events-none" />
            <div className="label-mono mb-4 relative z-10">Robotics & Manufacturing Program</div>
            <h2 className="font-display text-3xl md:text-4xl uppercase leading-tight mb-4 relative z-10">
              A robotic arm, a satellite bus, a ground segment you can trust.
            </h2>
            <p className="text-foreground/70 leading-relaxed max-w-xl relative z-10">
              Our work begins on the AIT floor — robotic manipulators assembling and testing spacecraft to a repeatable schedule — and ends on orbit, where those same platforms host servicing arms, rendezvous sensors, and downlinks we own end-to-end. Every subsystem is built, tested, and flown by the same team.
            </p>
          </div>
          <div className="tile flex flex-col justify-between relative overflow-hidden">
            <img src={groundStation} alt="" className="absolute -right-3 -bottom-3 w-32 h-32 opacity-25 pointer-events-none" />
            <div className="label-mono relative z-10">Ground Segment</div>
            <div className="font-display text-2xl uppercase leading-tight relative z-10">
              Owned dish. <br /> Owned pipeline.
            </div>
            <p className="text-sm text-foreground/60 relative z-10">
              S-band and X-band uplink for robotic commanding; in-house telemetry and calibration pipelines.
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
              Build the robotic missions of tomorrow with us.
            </h3>
          </div>
          <button className="px-8 py-4 border border-background text-xs font-bold uppercase tracking-widest hover:bg-background hover:text-foreground transition-all">
            Request a Brief →
          </button>
        </section>

        {/* Footer */}
        <footer className="flex flex-col md:flex-row justify-between items-center py-12 border-t border-border text-foreground/50 text-[10px] uppercase tracking-[0.3em] font-bold">
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

export default About;
