const Stats = () => {
  const stats = [
    { value: "99.9%", label: "Uptime Reliability", suffix: "" },
    { value: "50+", label: "Years of Operation", suffix: "" },
    { value: "0", label: "Carbon Emissions", suffix: "g/kWh" },
    { value: "10M+", label: "Homes Powered", suffix: "" },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/50" />
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gradient-primary mb-2 group-hover:scale-105 transition-transform duration-300">
                {stat.value}
                <span className="text-lg md:text-xl text-muted-foreground">{stat.suffix}</span>
              </div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
