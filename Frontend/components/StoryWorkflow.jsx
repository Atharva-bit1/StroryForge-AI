import { FLOW_NODES } from "../data/workflow";
import { WorkflowNode, Connector } from "./WorkflowNode";

export default function StoryWorkflow() {
  return (
    <section className="workflow-section" id="workflow">
      <div className="section-head">
        <p className="eyebrow">How it works</p>
        <h2 className="section-title">
          One idea becomes an entire <span className="grad-text">story world</span>
        </h2>
        <p className="section-sub">
          Follow a single idea as it moves through StoryForge&apos;s pipeline — from a spark of imagination to a
          fully realized, consistent, multi-scene story.
        </p>
      </div>

      <div className="flow">
        {FLOW_NODES.map((node, i) => (
          <div key={node.title} style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <WorkflowNode node={node} />
            {i < FLOW_NODES.length - 1 && <Connector />}
          </div>
        ))}
      </div>
    </section>
  );
}
