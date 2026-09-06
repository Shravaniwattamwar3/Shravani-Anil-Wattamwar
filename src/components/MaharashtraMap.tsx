import React, { useState, useEffect, useRef, useMemo } from 'react';
import * as d3 from 'd3';
import { 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  Search, 
  Layers, 
  Info, 
  TrendingUp, 
  AlertTriangle, 
  Award, 
  Clock, 
  MapPin, 
  Maximize2,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import { DistrictData, MetricType, AdministrativeDivision } from '../types';
import { MAHARASHTRA_DISTRICTS_DATA } from '../data/maharashtraData';

interface MaharashtraMapProps {
  selectedDistrict: DistrictData | null;
  onSelectDistrict: (district: DistrictData) => void;
  activeMetric: MetricType;
  onChangeMetric: (metric: MetricType) => void;
  filterDivision?: string;
  onSelectDivision?: (division: string) => void;
}

interface GeoFeature {
  type: string;
  properties: {
    dt_code?: string;
    district?: string;
    NAME_2?: string;
    district_name?: string;
    st_nm?: string;
    [key: string]: any;
  };
  geometry: any;
}

interface GeoData {
  type: string;
  features: GeoFeature[];
}

export const MaharashtraMap: React.FC<MaharashtraMapProps> = ({
  selectedDistrict,
  onSelectDistrict,
  activeMetric,
  onChangeMetric,
  filterDivision = 'All',
  onSelectDivision
}) => {
  const [geoData, setGeoData] = useState<GeoData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [hoveredDistrict, setHoveredDistrict] = useState<DistrictData | null>(null);
  const [tooltipPos, setTooltipPos] = useState<{ x: number; y: number } | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [zoomTransform, setZoomTransform] = useState<{ k: number; x: number; y: number }>({ k: 1, x: 0, y: 0 });

  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  // Dimensions
  const [dimensions, setDimensions] = useState({ width: 780, height: 600 });

  // Update container size dynamically
  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width } = entry.contentRect;
        if (width > 0) {
          const calculatedHeight = Math.max(500, Math.min(680, width * 0.76));
          setDimensions({ width, height: calculatedHeight });
        }
      }
    });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Fetch Maharashtra GeoJSON
  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    fetch('/data/maharashtra.geojson')
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to load GeoJSON: ${res.statusText}`);
        return res.json();
      })
      .then((data: GeoData) => {
        if (isMounted) {
          setGeoData(data);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError(err.message);
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  // Quick lookup dictionary for district data by name
  const districtMap = useMemo(() => {
    const map = new Map<string, DistrictData>();
    MAHARASHTRA_DISTRICTS_DATA.forEach((d) => {
      map.set(d.id.toLowerCase(), d);
      map.set(d.name.toLowerCase(), d);
    });
    // Add alias mappings
    const aurangabad = map.get('aurangabad');
    if (aurangabad) {
      map.set('chhatrapati sambhajinagar', aurangabad);
      map.set('sambhajinagar', aurangabad);
    }
    const osmanabad = map.get('osmanabad');
    if (osmanabad) {
      map.set('dharashiv', osmanabad);
    }
    const ahmednagar = map.get('ahmednagar');
    if (ahmednagar) {
      map.set('ahilyanagar', ahmednagar);
    }
    const mumbai = map.get('mumbai');
    if (mumbai) {
      map.set('mumbai city', mumbai);
      map.set('mumbai suburban', mumbai);
    }
    return map;
  }, []);

  const getDistrictForFeature = (feature: GeoFeature): DistrictData | undefined => {
    const name = (
      feature.properties.district || 
      feature.properties.NAME_2 || 
      feature.properties.district_name || 
      ''
    ).toLowerCase();

    return districtMap.get(name);
  };

  // Metric color scalers and helpers calibrated for Elegant Dark aesthetic
  const getColorForDistrict = (district: DistrictData | undefined): string => {
    if (!district) return '#1F2833';

    switch (activeMetric) {
      case 'employmentRate': {
        // Red (low <50) -> Amber (50-60) -> Teal (60-70) -> Electric Cyan (>70)
        const scale = d3.scaleLinear<string>()
          .domain([40, 52, 62, 70, 78])
          .range(['#ef4444', '#f59e0b', '#0d9488', '#06b6d4', '#66FCF1'])
          .clamp(true);
        return scale(district.employmentRate);
      }
      case 'skillGapIntensity': {
        // Lower is better. Higher gap = critical crimson alert!
        // Electric Cyan (low <35) -> Violet (45) -> Amber (60) -> Crimson Red (>70)
        const scale = d3.scaleLinear<string>()
          .domain([28, 42, 55, 68, 80])
          .range(['#38bdf8', '#818cf8', '#f59e0b', '#ef4444', '#dc2626'])
          .clamp(true);
        return scale(district.skillGapIntensity);
      }
      case 'completionRate': {
        // Amber (low 75) -> Sky Blue (82) -> Electric Cyan (>88)
        const scale = d3.scaleLinear<string>()
          .domain([76, 82, 86, 91])
          .range(['#f59e0b', '#0284c7', '#38bdf8', '#66FCF1'])
          .clamp(true);
        return scale(district.completionRate);
      }
      case 'retentionRate': {
        // Rose (low 50) -> Gold (65) -> Mint Teal -> Electric Cyan (>75)
        const scale = d3.scaleLinear<string>()
          .domain([52, 64, 72, 82])
          .range(['#f43f5e', '#facc15', '#45A29E', '#66FCF1'])
          .clamp(true);
        return scale(district.retentionRate);
      }
      default:
        return '#66FCF1';
    }
  };

  // D3 Projection and Path Generator
  const { projection, pathGenerator } = useMemo(() => {
    if (!geoData) return { projection: null, pathGenerator: null };

    // Fit projection to container size with comfortable padding
    const proj = d3.geoMercator()
      .fitExtent([[30, 25], [dimensions.width - 30, dimensions.height - 25]], geoData as any);
    const path = d3.geoPath().projection(proj);

    return { projection: proj, pathGenerator: path };
  }, [geoData, dimensions]);

  // Handle Zoom & Pan controls
  const handleZoomIn = () => {
    setZoomTransform(prev => ({
      ...prev,
      k: Math.min(prev.k * 1.35, 4.5)
    }));
  };

  const handleZoomOut = () => {
    setZoomTransform(prev => ({
      ...prev,
      k: Math.max(prev.k / 1.35, 0.8)
    }));
  };

  const handleResetZoom = () => {
    setZoomTransform({ k: 1, x: 0, y: 0 });
  };

  // Mouse move handler for interactive tooltip positioning
  const handleMouseMove = (e: React.MouseEvent, district: DistrictData) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setTooltipPos({ x, y });
    setHoveredDistrict(district);
  };

  const handleMouseLeave = () => {
    setHoveredDistrict(null);
    setTooltipPos(null);
  };

  // Search filter
  const filteredDistricts = useMemo(() => {
    if (!searchQuery.trim()) return [];
    return MAHARASHTRA_DISTRICTS_DATA.filter(d => 
      d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.marathiName.includes(searchQuery)
    );
  }, [searchQuery]);

  // Active legend details
  const legendConfig = useMemo(() => {
    switch (activeMetric) {
      case 'employmentRate':
        return {
          title: 'Employment Rate (Certified Placed)',
          subtitle: 'Certified Trainees in Wage Payroll Jobs',
          gradient: 'linear-gradient(to right, #ef4444, #f59e0b, #0d9488, #66FCF1)',
          minLabel: '< 50% (Lagging)',
          midLabel: '65% (State Average)',
          maxLabel: '> 75% (High Employment)',
          unit: '%'
        };
      case 'skillGapIntensity':
        return {
          title: 'Skill Gap Intensity Index',
          subtitle: 'Severity of Industry-Curriculum Mismatch',
          gradient: 'linear-gradient(to right, #38bdf8, #818cf8, #f59e0b, #ef4444)',
          minLabel: '< 35% (Aligned)',
          midLabel: '50% (Moderate)',
          maxLabel: '> 70% (Critical Shortage)',
          unit: '/100'
        };
      case 'completionRate':
        return {
          title: 'Training Completion Rate',
          subtitle: 'Enrolled Trainees who Pass Certification',
          gradient: 'linear-gradient(to right, #f59e0b, #0284c7, #38bdf8, #66FCF1)',
          minLabel: '75% (Low)',
          midLabel: '85% (Average)',
          maxLabel: '> 90% (High Completion)',
          unit: '%'
        };
      case 'retentionRate':
        return {
          title: '6-Month Retention Rate',
          subtitle: 'Trainees Sustained on Payroll 180+ Days',
          gradient: 'linear-gradient(to right, #f43f5e, #facc15, #45A29E, #66FCF1)',
          minLabel: '< 55% (High Attrition)',
          midLabel: '70% (Moderate)',
          maxLabel: '> 80% (Sustained Livelihood)',
          unit: '%'
        };
    }
  }, [activeMetric]);

  const divisions: (AdministrativeDivision | 'All')[] = [
    'All',
    'Pune',
    'Konkan',
    'Nashik',
    'Chhatrapati Sambhajinagar',
    'Amravati',
    'Nagpur'
  ];

  return (
    <div 
      id="maharashtra-map-container"
      className="bg-[#0A0B10] rounded-2xl border border-[#1F2833] shadow-2xl overflow-hidden flex flex-col transition-all"
    >
      {/* Top Map Bar: Title & Metric Toggles */}
      <div className="p-5 border-b border-[#1F2833] bg-[#0B0C10]">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#1F2833] text-[#66FCF1] border border-[#1F2833]">
                <MapPin className="w-3 h-3 text-[#66FCF1]" />
                MANDATORY CHOROPLETH
              </span>
              <span className="text-xs font-semibold text-[#45A29E]">All 36 Districts Active</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-white mt-1">
              Maharashtra Skilling Outcomes Map
            </h2>
            <p className="text-sm text-[#45A29E] mt-0.5">
              Explore employment outcomes, retention, and skill gap intensity across all 36 districts.
            </p>
          </div>

          {/* Metric Switcher Toggles (MANDATORY REQUIREMENT) */}
          <div className="flex flex-wrap items-center gap-1.5 bg-[#050608] p-1.5 rounded-xl border border-[#1F2833]">
            <button
              id="toggle-employment-rate-btn"
              onClick={() => onChangeMetric('employmentRate')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeMetric === 'employmentRate'
                  ? 'bg-[#1F2833] text-[#66FCF1] shadow-lg border border-[#66FCF1]/40'
                  : 'text-slate-400 hover:text-white hover:bg-[#1F2833]/30'
              }`}
            >
              <TrendingUp className="w-3.5 h-3.5" />
              <span>1. Employment Rate</span>
            </button>

            <button
              id="toggle-skill-gap-btn"
              onClick={() => onChangeMetric('skillGapIntensity')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeMetric === 'skillGapIntensity'
                  ? 'bg-[#1F2833] text-red-400 shadow-lg border border-red-500/40'
                  : 'text-slate-400 hover:text-white hover:bg-[#1F2833]/30'
              }`}
            >
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>2. Skill Gap Intensity</span>
            </button>

            <button
              id="toggle-completion-rate-btn"
              onClick={() => onChangeMetric('completionRate')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeMetric === 'completionRate'
                  ? 'bg-[#1F2833] text-cyan-300 shadow-lg border border-cyan-400/40'
                  : 'text-slate-400 hover:text-white hover:bg-[#1F2833]/30'
              }`}
            >
              <Award className="w-3.5 h-3.5" />
              <span>3. Training Completion</span>
            </button>

            <button
              id="toggle-retention-rate-btn"
              onClick={() => onChangeMetric('retentionRate')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeMetric === 'retentionRate'
                  ? 'bg-[#1F2833] text-[#45A29E] shadow-lg border border-[#45A29E]/40'
                  : 'text-slate-400 hover:text-white hover:bg-[#1F2833]/30'
              }`}
            >
              <Clock className="w-3.5 h-3.5" />
              <span>4. 6-Month Retention</span>
            </button>
          </div>
        </div>

        {/* Division Filter Chips & Quick District Search */}
        <div className="mt-3.5 pt-3 border-t border-[#1F2833] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none text-xs">
            <span className="text-[#45A29E] font-medium shrink-0 flex items-center gap-1">
              <Layers className="w-3 h-3 text-[#45A29E]" />
              Division:
            </span>
            {divisions.map((div) => (
              <button
                key={div}
                onClick={() => onSelectDivision && onSelectDivision(div)}
                className={`px-2.5 py-1 rounded-md text-xs font-medium whitespace-nowrap transition-colors ${
                  filterDivision === div
                    ? 'bg-[#66FCF1] text-[#0B0C10] font-bold shadow-md'
                    : 'bg-[#0B0C10] text-slate-400 border border-[#1F2833] hover:text-[#66FCF1] hover:bg-[#1F2833]/50'
                }`}
              >
                {div}
              </button>
            ))}
          </div>

          {/* Search District */}
          <div className="relative max-w-xs w-full">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
            <input
              id="district-search-input"
              type="text"
              placeholder="Search Maharashtra district..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 text-xs rounded-lg border border-[#1F2833] focus:outline-none focus:ring-1 focus:ring-[#66FCF1] bg-[#050608] text-white placeholder:text-slate-500"
            />
            {filteredDistricts.length > 0 && searchQuery && (
              <div className="absolute left-0 right-0 top-full mt-1 bg-[#0A0B10] border border-[#1F2833] rounded-lg shadow-2xl z-30 max-h-48 overflow-y-auto">
                {filteredDistricts.map((d) => (
                  <button
                    key={d.id}
                    onClick={() => {
                      onSelectDistrict(d);
                      setSearchQuery('');
                    }}
                    className="w-full text-left px-3 py-2 text-xs hover:bg-[#1F2833] flex items-center justify-between border-b border-[#1F2833]/50 last:border-0"
                  >
                    <div>
                      <span className="font-bold text-white">{d.name}</span>
                      <span className="text-slate-400 ml-1">({d.division})</span>
                    </div>
                    <span className="text-[#66FCF1] font-semibold">{d.employmentRate}% emp</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Map Stage */}
      <div 
        ref={containerRef} 
        className="relative bg-[radial-gradient(circle_at_center,_#1F2833_0%,_#050608_80%)] flex-1 min-h-[480px] flex items-center justify-center select-none overflow-hidden"
      >
        {loading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#050608]/80 z-20">
            <div className="w-10 h-10 border-3 border-[#66FCF1] border-t-transparent rounded-full animate-spin mb-2" />
            <span className="text-xs font-semibold text-slate-300">Loading accurate Maharashtra district boundaries...</span>
          </div>
        )}

        {error && (
          <div className="p-6 text-center text-rose-400 max-w-md bg-[#0A0B10] rounded-xl shadow border border-rose-900/50">
            <AlertTriangle className="w-8 h-8 text-rose-500 mx-auto mb-2" />
            <h3 className="font-bold text-sm">Failed to render Maharashtra map</h3>
            <p className="text-xs text-slate-400 mt-1">{error}</p>
          </div>
        )}

        {/* Zoom & Navigation Floating Controls */}
        <div className="absolute top-4 right-4 flex flex-col gap-1.5 z-10 bg-[#0A0B10]/90 backdrop-blur-xs p-1 rounded-xl shadow-xl border border-[#1F2833]">
          <button
            id="map-zoom-in-btn"
            onClick={handleZoomIn}
            title="Zoom In"
            className="p-2 hover:bg-[#1F2833] text-slate-300 hover:text-[#66FCF1] rounded-lg transition-colors"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
          <button
            id="map-zoom-out-btn"
            onClick={handleZoomOut}
            title="Zoom Out"
            className="p-2 hover:bg-[#1F2833] text-slate-300 hover:text-[#66FCF1] rounded-lg transition-colors"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
          <button
            id="map-reset-zoom-btn"
            onClick={handleResetZoom}
            title="Reset Zoom"
            className="p-2 hover:bg-[#1F2833] text-slate-300 hover:text-[#66FCF1] rounded-lg transition-colors border-t border-[#1F2833]"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>

        {/* Map State Indicator Floating Badge */}
        <div className="absolute top-4 left-4 z-10 bg-[#0A0B10]/95 backdrop-blur-xs px-3 py-1.5 rounded-lg border border-[#1F2833] shadow-md flex items-center gap-2 text-xs">
          <span className="w-2 h-2 rounded-full bg-[#66FCF1] animate-pulse" />
          <span className="font-semibold text-white">Maharashtra State (36 Districts)</span>
          <span className="text-[#1F2833]">|</span>
          <span className="text-[#45A29E]">Click district to inspect details</span>
        </div>

        {/* SVG Drawing Canvas */}
        {geoData && pathGenerator && (
          <svg
            ref={svgRef}
            id="maharashtra-district-svg"
            width={dimensions.width}
            height={dimensions.height}
            className="w-full h-full cursor-pointer"
            style={{ touchAction: 'none' }}
          >
            <defs>
              <filter id="map-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#66FCF1" floodOpacity="0.6" />
              </filter>
            </defs>

            <g 
              transform={`translate(${zoomTransform.x}, ${zoomTransform.y}) scale(${zoomTransform.k})`}
              className="transition-transform duration-200 ease-out"
            >
              {/* Outer boundary shadow */}
              <g opacity={0.3}>
                {geoData.features.map((feature, i) => {
                  const d = pathGenerator(feature as any);
                  return d ? (
                    <path
                      key={`shadow-${i}`}
                      d={d}
                      fill="#000000"
                      transform="translate(2, 3)"
                    />
                  ) : null;
                })}
              </g>

              {/* District Polygons */}
              {geoData.features.map((feature, i) => {
                const district = getDistrictForFeature(feature);
                const isSelected = selectedDistrict?.id === district?.id;
                const isHovered = hoveredDistrict?.id === district?.id;
                const d = pathGenerator(feature as any);
                const fillColor = getColorForDistrict(district);

                // Division filter highlight
                const matchesDivision = !filterDivision || filterDivision === 'All' || district?.division === filterDivision;
                const pathOpacity = matchesDivision ? 1 : 0.25;

                if (!d) return null;

                return (
                  <path
                    key={feature.properties.dt_code || feature.properties.district || i}
                    id={`district-path-${district?.id || i}`}
                    d={d}
                    fill={fillColor}
                    opacity={pathOpacity}
                    stroke={isSelected ? '#66FCF1' : isHovered ? '#66FCF1' : '#0B0C10'}
                    strokeWidth={isSelected ? 2.8 : isHovered ? 2 : 0.85}
                    strokeLinejoin="round"
                    className="transition-all duration-150 cursor-pointer"
                    style={{
                      filter: isSelected ? 'url(#map-glow)' : 'none',
                      transformOrigin: 'center'
                    }}
                    onMouseEnter={(e) => district && handleMouseMove(e, district)}
                    onMouseMove={(e) => district && handleMouseMove(e, district)}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => district && onSelectDistrict(district)}
                  />
                );
              })}

              {/* District Labels for Major Anchor Districts */}
              {geoData.features.map((feature, i) => {
                const district = getDistrictForFeature(feature);
                if (!district || !pathGenerator) return null;

                // Major anchor districts for clean, non-overcrowded display
                const majorAnchors = ['Pune', 'Mumbai', 'Nagpur', 'Nashik', 'Aurangabad', 'Kolhapur', 'Gadchiroli', 'Solapur', 'Nandurbar', 'Amravati', 'Nanded'];
                const isAnchor = majorAnchors.includes(district.name);
                const isSelected = selectedDistrict?.id === district.id;
                const isHovered = hoveredDistrict?.id === district.id;

                if (!isAnchor && !isSelected && !isHovered) return null;

                const centroid = pathGenerator.centroid(feature as any);
                if (!centroid || isNaN(centroid[0]) || isNaN(centroid[1])) return null;

                return (
                  <g 
                    key={`label-${district.id}`} 
                    pointerEvents="none"
                    transform={`translate(${centroid[0]}, ${centroid[1]})`}
                  >
                    <text
                      textAnchor="middle"
                      dy="0.35em"
                      fontSize={isSelected ? 12 : isHovered ? 11 : 9.5}
                      fontWeight={isSelected || isHovered ? 800 : 700}
                      fill={isSelected ? '#66FCF1' : '#FFFFFF'}
                      stroke="#050608"
                      strokeWidth={isSelected ? 3.5 : 2.5}
                      paintOrder="stroke"
                      className="tracking-tight select-none"
                    >
                      {district.name}
                    </text>
                  </g>
                );
              })}
            </g>
          </svg>
        )}

        {/* Hover Tooltip (MANDATORY REQUIREMENT) */}
        {hoveredDistrict && tooltipPos && (
          <div
            id="district-hover-tooltip"
            className="absolute z-30 pointer-events-none bg-[#050608]/95 text-white p-3 rounded-xl shadow-2xl border border-[#1F2833] text-xs w-64 backdrop-blur-md transition-all duration-75 -translate-x-1/2 -translate-y-full -mt-3"
            style={{
              left: `${Math.min(Math.max(130, tooltipPos.x), dimensions.width - 130)}px`,
              top: `${tooltipPos.y}px`
            }}
          >
            {/* Tooltip Header */}
            <div className="flex items-center justify-between border-b border-[#1F2833] pb-1.5 mb-2">
              <div>
                <span className="font-extrabold text-sm text-white block">
                  {hoveredDistrict.name}
                </span>
                <span className="text-[10px] text-[#45A29E]">
                  {hoveredDistrict.division} Division • {hoveredDistrict.marathiName}
                </span>
              </div>
              <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-[#1F2833] text-[#66FCF1] border border-[#1F2833]">
                {hoveredDistrict.epfoVerificationRate}% EPFO
              </span>
            </div>

            {/* Tooltip Metrics (Mandatory Fields) */}
            <div className="space-y-1.5 text-[11px]">
              <div className="flex justify-between">
                <span className="text-slate-400">Total Trainees:</span>
                <span className="font-semibold text-slate-200">
                  {hoveredDistrict.totalTrainees.toLocaleString('en-IN')}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Certified Trainees:</span>
                <span className="font-semibold text-[#66FCF1]">
                  {hoveredDistrict.certifiedTrainees.toLocaleString('en-IN')} ({hoveredDistrict.completionRate}%)
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Employed Trainees:</span>
                <span className="font-semibold text-emerald-400">
                  {hoveredDistrict.employedTrainees.toLocaleString('en-IN')}
                </span>
              </div>
              <div className="flex justify-between border-t border-[#1F2833] pt-1">
                <span className="text-slate-300 font-medium">Employment Rate:</span>
                <span className="font-bold text-[#66FCF1] text-xs">
                  {hoveredDistrict.employmentRate}%
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-300 font-medium">6-Mo Retention:</span>
                <span className="font-bold text-[#45A29E] text-xs">
                  {hoveredDistrict.retentionRate}%
                </span>
              </div>
            </div>

            {/* Top Skill Gap (Mandatory Field) */}
            <div className="mt-2 pt-2 border-t border-[#1F2833]">
              <span className="text-[10px] text-red-400 uppercase font-bold tracking-wider block">
                Top Skill Gap:
              </span>
              <p className="text-[11px] text-slate-300 line-clamp-2 mt-0.5 leading-tight font-medium">
                {hoveredDistrict.topSkillGap}
              </p>
            </div>

            <div className="mt-2 text-[10px] text-[#66FCF1] text-center font-medium bg-[#1F2833]/60 py-1 rounded border border-[#1F2833]">
              Click district for full intervention panel
            </div>
          </div>
        )}
      </div>

      {/* Map Legend (MANDATORY REQUIREMENT) */}
      <div 
        id="maharashtra-map-legend"
        className="p-4 bg-[#0B0C10] border-t border-[#1F2833] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
      >
        <div className="space-y-0.5">
          <span className="font-bold text-white block">{legendConfig.title}</span>
          <span className="text-[#45A29E] text-[11px]">{legendConfig.subtitle}</span>
        </div>

        {/* Continuous Color Scale Bar */}
        <div className="w-full sm:w-80 space-y-1">
          <div 
            className="h-3 rounded-full shadow-inner border border-[#1F2833]"
            style={{ background: legendConfig.gradient }}
          />
          <div className="flex justify-between text-[11px] text-slate-400 font-semibold px-0.5">
            <span>{legendConfig.minLabel}</span>
            <span className="text-[#45A29E]">{legendConfig.midLabel}</span>
            <span className="text-[#66FCF1]">{legendConfig.maxLabel}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
