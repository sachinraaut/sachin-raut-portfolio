import { motion } from "framer-motion";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";

interface StackNode {
  id: string;
  label: string;
  x: number;
  y: number;
}

// Positions are laid out on a 400×400 viewBox grid. The chain isn't
// decorative — it's the actual path a request takes through Sachin's
// stack: a React component tree, rendered by Next.js, talking to a
// commerce platform, deployed to the edge.
const NODES: StackNode[] = [
  { id: "react", label: "React", x: 80, y: 80 },
  { id: "typescript", label: "TypeScript", x: 80, y: 200 },
  { id: "nextjs", label: "Next.js", x: 200, y: 140 },
  { id: "shopify", label: "Shopify", x: 320, y: 80 },
  { id: "sfcc", label: "SFCC", x: 320, y: 200 },
  { id: "edge", label: "Edge", x: 200, y: 320 },
];

const CONNECTIONS: [string, string][] = [
  ["react", "nextjs"],
  ["typescript", "nextjs"],
  ["nextjs", "shopify"],
  ["nextjs", "sfcc"],
  ["nextjs", "edge"],
];

function findNode(id: string): StackNode {
  const node = NODES.find((n) => n.id === id);
  if (!node) throw new Error(`Unknown stack node: ${id}`);
  return node;
}

/**
 * The hero's signature element. Rather than a generic gradient blob or
 * abstract shape, this renders the literal chain of systems Sachin works
 * across — grounded in the brief's real subject matter rather than a
 * decorative stand-in. Animates in once on load; idle pulse afterward.
 */
export function StackDiagram() {
  const prefersReducedMotion = useReducedMotionSafe();

  return (
    <svg
      viewBox="0 0 400 400"
      className="h-full w-full"
      role="img"
      aria-label="Diagram of Sachin's technology stack: React and TypeScript feeding into Next.js, which connects to Shopify, Salesforce Commerce Cloud, and edge deployment"
    >
      <defs>
        <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#2997FF" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#2997FF" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Connections drawn first so nodes sit on top */}
      {CONNECTIONS.map(([fromId, toId], index) => {
        const from = findNode(fromId);
        const to = findNode(toId);
        return (
          <motion.line
            key={`${fromId}-${toId}`}
            x1={from.x}
            y1={from.y}
            x2={to.x}
            y2={to.y}
            stroke="rgba(255,255,255,0.18)"
            strokeWidth={1.5}
            initial={prefersReducedMotion ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 + index * 0.12, ease: [0.16, 1, 0.3, 1] }}
          />
        );
      })}

      {/* Nodes */}
      {NODES.map((node, index) => {
        const isHub = node.id === "nextjs";
        return (
          <motion.g
            key={node.id}
            initial={prefersReducedMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            {isHub && <circle cx={node.x} cy={node.y} r={42} fill="url(#nodeGlow)" />}
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={isHub ? 26 : 20}
              fill={isHub ? "#2997FF" : "#131316"}
              stroke={isHub ? "#64B5FF" : "rgba(255,255,255,0.22)"}
              strokeWidth={1.5}
              animate={
                prefersReducedMotion
                  ? undefined
                  : { scale: isHub ? [1, 1.06, 1] : 1 }
              }
              transition={
                isHub ? { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 } : undefined
              }
            />
            <text
              x={node.x}
              y={node.y + (isHub ? 44 : 38)}
              textAnchor="middle"
              fill={isHub ? "#F5F5F7" : "#86868B"}
              fontSize={isHub ? 13 : 11.5}
              fontFamily="JetBrains Mono, monospace"
              fontWeight={isHub ? 600 : 400}
            >
              {node.label}
            </text>
          </motion.g>
        );
      })}
    </svg>
  );
}
