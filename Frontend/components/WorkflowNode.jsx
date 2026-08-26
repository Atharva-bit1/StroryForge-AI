"use client";
import { NodeIcon } from "./icons";
import useInView from "./useInView";

export function WorkflowNode({ node }) {
  const [ref, inView] = useInView();

  return (
    <div ref={ref} className={`flow-node${inView ? " in-view" : ""}`}>
      <div className="node-card">
        <div className="node-icon">
          <NodeIcon name={node.icon} />
        </div>
        <div className="node-body">
          <p className="node-eyebrow">{node.eyebrow}</p>
          <h3>{node.title}</h3>
          <p>{node.desc}</p>
          {node.list && (
            <ul>
              {node.list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export function Connector() {
  return (
    <div className="connector">
      <span className="particle" />
      <span className="particle p2" />
      <span className="particle p3" />
    </div>
  );
}
