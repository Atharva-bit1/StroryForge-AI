"use client";
import { CAPABILITIES } from "../data/workflow";
import { NodeIcon } from "./icons";
import useInView from "./useInView";

function CapabilityCard({ cap }) {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} className={`cap-card${inView ? " in-view" : ""}`}>
      <div className="cap-icon">
        <NodeIcon name={cap.icon} size={22} />
      </div>
      <h3>{cap.title}</h3>
      <p>{cap.desc}</p>
    </div>
  );
}

export default function CapabilitySection() {
  return (
    <section className="capabilities" id="capabilities">
      <div className="section-head">
        <p className="eyebrow">Capabilities</p>
        <h2 className="section-title">
          Built for <span className="grad-text">long, consistent</span> stories
        </h2>
        <p className="section-sub">
          Every capability feeds the same story memory, so nothing generated at
          chapter one is forgotten by chapter twelve.
        </p>
      </div>
      <div className="cap-grid">
        {CAPABILITIES.map((cap) => (
          <CapabilityCard key={cap.title} cap={cap} />
        ))}
      </div>
    </section>
  );
}
