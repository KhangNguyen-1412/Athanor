import React from 'react';
import type { HeroStats } from '../../types/athanor';

interface RadarChartProps {
  stats: HeroStats;
  color?: string;
  size?: number;
}

export const RadarChart: React.FC<RadarChartProps> = ({
  stats,
  color = '#007ba7',
  size = 230
}) => {
  const center = size / 2;
  const radius = size * 0.36;

  const categories = [
    { label: 'SÁT THƯƠNG', value: stats.damage },
    { label: 'CHỐNG CHỊU', value: stats.toughness },
    { label: 'CƠ ĐỘNG', value: stats.mobility },
    { label: 'KHỐNG CHẾ', value: stats.crowdControl },
    { label: 'ĐỘ KHÓ', value: stats.difficulty }
  ];

  const totalAxes = categories.length;
  const angleStep = (Math.PI * 2) / totalAxes;

  const getPoint = (value: number, index: number, max = 10) => {
    const angle = index * angleStep - Math.PI / 2;
    const r = (value / max) * radius;
    const x = center + r * Math.cos(angle);
    const y = center + r * Math.sin(angle);
    return { x, y };
  };

  const dataPoints = categories.map((cat, i) => getPoint(cat.value, i));
  const pointsString = dataPoints.map((p) => `${p.x},${p.y}`).join(' ');

  const rings = [0.25, 0.5, 0.75, 1.0];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <defs>
          <radialGradient id="editorialRadarGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={color} stopOpacity="0.25" />
            <stop offset="100%" stopColor={color} stopOpacity="0.05" />
          </radialGradient>
        </defs>

        {/* Concentric Rings */}
        {rings.map((factor, rIdx) => {
          const ringPoints = categories
            .map((_, i) => getPoint(10 * factor, i))
            .map((p) => `${p.x},${p.y}`)
            .join(' ');
          return (
            <polygon
              key={rIdx}
              points={ringPoints}
              fill="none"
              stroke="rgba(15, 23, 42, 0.12)"
              strokeWidth="1"
              strokeDasharray={rIdx === rings.length - 1 ? 'none' : '2,2'}
            />
          );
        })}

        {/* Axis Lines */}
        {categories.map((_, i) => {
          const outerPoint = getPoint(10, i);
          return (
            <line
              key={i}
              x1={center}
              y1={center}
              x2={outerPoint.x}
              y2={outerPoint.y}
              stroke="rgba(15, 23, 42, 0.15)"
              strokeWidth="1"
            />
          );
        })}

        {/* Filled Polygon */}
        <polygon
          points={pointsString}
          fill="url(#editorialRadarGrad)"
          stroke={color}
          strokeWidth="1.8"
        />

        {/* Vertices */}
        {dataPoints.map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r="3" fill="#ffffff" stroke={color} strokeWidth="1.5" />
        ))}

        {/* Labels in Newsreader */}
        {categories.map((cat, i) => {
          const labelDist = radius + 22;
          const angle = i * angleStep - Math.PI / 2;
          const lx = center + labelDist * Math.cos(angle);
          const ly = center + labelDist * Math.sin(angle);

          return (
            <text
              key={i}
              x={lx}
              y={ly + 3}
              textAnchor="middle"
              fill="#475569"
              fontSize="9"
              fontFamily="Newsreader, Georgia, serif"
              fontStyle="italic"
              letterSpacing="0.06em"
            >
              {cat.label} [{cat.value}]
            </text>
          );
        })}
      </svg>
    </div>
  );
};
