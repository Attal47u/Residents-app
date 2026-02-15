
import React, { useState, useMemo } from 'react';
import { 
  Heart, 
  Brain, 
  Wind, 
  Dna, 
  Microscope, 
  Utensils, 
  Search, 
  ChevronLeft, 
  ChevronRight,
  Stethoscope,
  AlertTriangle,
  Info,
  Clock,
  ClipboardList,
  Navigation,
  ArrowRight,
  Workflow,
  LayoutGrid,
  ChevronDown
} from 'lucide-react';
import { MEDICAL_DATA } from './data';
import { MedicalProtocol, MedicalSystem, SystemTheme } from './types';

// Theme Configuration
const SYSTEM_THEMES: Record<MedicalSystem, SystemTheme> = {
  [MedicalSystem.Cardiovascular]: {
    primary: 'bg-rose-600',
    secondary: 'bg-rose-50',
    accent: 'text-rose-600',
    text: 'text-rose-900',
    border: 'border-rose-200',
    bgLight: 'bg-rose-50',
    iconBg: 'bg-rose-100'
  },
  [MedicalSystem.Emergency]: {
    primary: 'bg-red-700',
    secondary: 'bg-red-50',
    accent: 'text-red-700',
    text: 'text-red-900',
    border: 'border-red-200',
    bgLight: 'bg-red-50',
    iconBg: 'bg-red-100'
  },
  [MedicalSystem.Neurology]: {
    primary: 'bg-blue-600',
    secondary: 'bg-blue-50',
    accent: 'text-blue-600',
    text: 'text-blue-900',
    border: 'border-blue-200',
    bgLight: 'bg-blue-50',
    iconBg: 'bg-blue-100'
  },
  [MedicalSystem.Respiratory]: {
    primary: 'bg-cyan-600',
    secondary: 'bg-cyan-50',
    accent: 'text-cyan-600',
    text: 'text-cyan-900',
    border: 'border-cyan-200',
    bgLight: 'bg-cyan-50',
    iconBg: 'bg-cyan-100'
  },
  [MedicalSystem.Endocrine]: {
    primary: 'bg-purple-600',
    secondary: 'bg-purple-50',
    accent: 'text-purple-600',
    text: 'text-purple-900',
    border: 'border-purple-200',
    bgLight: 'bg-purple-50',
    iconBg: 'bg-purple-100'
  },
  [MedicalSystem.Infectious]: {
    primary: 'bg-emerald-600',
    secondary: 'bg-emerald-50',
    accent: 'text-emerald-600',
    text: 'text-emerald-900',
    border: 'border-emerald-200',
    bgLight: 'bg-emerald-50',
    iconBg: 'bg-emerald-100'
  },
  [MedicalSystem.Gastrointestinal]: {
    primary: 'bg-orange-600',
    secondary: 'bg-orange-50',
    accent: 'text-orange-600',
    text: 'text-orange-900',
    border: 'border-orange-200',
    bgLight: 'bg-orange-50',
    iconBg: 'bg-orange-100'
  }
};

const getSystemIcon = (system: MedicalSystem) => {
  switch (system) {
    case MedicalSystem.Cardiovascular: return <Heart className="w-5 h-5" />;
    case MedicalSystem.Emergency: return <AlertTriangle className="w-5 h-5" />;
    case MedicalSystem.Neurology: return <Brain className="w-5 h-5" />;
    case MedicalSystem.Respiratory: return <Wind className="w-5 h-5" />;
    case MedicalSystem.Endocrine: return <Dna className="w-5 h-5" />;
    case MedicalSystem.Infectious: return <Microscope className="w-5 h-5" />;
    case MedicalSystem.Gastrointestinal: return <Utensils className="w-5 h-5" />;
    default: return <Stethoscope className="w-5 h-5" />;
  }
};

/**
 * Renders text and automatically converts patterns in brackets into styled brand pills.
 */
const BrandTagText = ({ text, theme }: { text: string, theme: SystemTheme }) => {
  const parts = text.split(/(\(.*?\))/g);
  return (
    <div className="flex flex-wrap items-center gap-1.5 leading-relaxed">
      {parts.map((part, i) => {
        if (part.startsWith('(') && part.endsWith(')')) {
          const inner = part.slice(1, -1);
          return (
            <span key={i} className={`px-2 py-0.5 rounded-md text-[10px] font-bold uppercase ${theme.primary} text-white shadow-sm inline-block`}>
              {inner}
            </span>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </div>
  );
};

// UI Components
const ProtocolCard = ({ protocol, active, onClick, theme }: { protocol: MedicalProtocol, active: boolean, onClick: () => void, theme: SystemTheme }) => (
  <button 
    onClick={onClick}
    className={`w-full text-left p-4 rounded-xl transition-all duration-200 border-2 mb-3 flex items-center gap-4 ${
      active 
        ? `${theme.primary} text-white border-transparent shadow-lg scale-[1.02]` 
        : 'bg-white border-slate-100 hover:border-slate-300 shadow-sm'
    }`}
  >
    <div className={`p-2 rounded-lg ${active ? 'bg-white/20' : 'bg-slate-100'}`}>
      {getSystemIcon(protocol.system)}
    </div>
    <div className="flex-1 min-w-0">
      <h4 className="font-semibold text-sm truncate uppercase tracking-tight">{protocol.name}</h4>
      <p className={`text-xs ${active ? 'text-white/80' : 'text-slate-500'}`}>{protocol.category}</p>
    </div>
    {active ? <ChevronRight className="w-4 h-4 opacity-50" /> : null}
  </button>
);

const BentoBox = ({ title, icon: Icon, children, className = "", style }: { title: string, icon: any, children?: React.ReactNode, className?: string, style?: React.CSSProperties }) => (
  <div style={style} className={`bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex flex-col gap-4 animate-in ${className}`}>
    <div className="flex items-center gap-3 border-b border-slate-50 pb-3">
      <div className="p-2 bg-slate-50 rounded-lg text-slate-500">
        <Icon className="w-5 h-5" />
      </div>
      <h3 className="font-bold text-slate-800 uppercase text-sm tracking-widest">{title}</h3>
    </div>
    <div className="flex-1 overflow-auto">
      {children}
    </div>
  </div>
);

const App: React.FC = () => {
  const [view, setView] = useState<'launchpad' | 'dashboard' | 'flowchart'>('launchpad');
  const [selectedProtocolId, setSelectedProtocolId] = useState<string>(MEDICAL_DATA[0].id);
  const [searchQuery, setSearchQuery] = useState('');

  const selectedProtocol = useMemo(() => 
    MEDICAL_DATA.find(p => p.id === selectedProtocolId) || MEDICAL_DATA[0]
  , [selectedProtocolId]);

  const filteredProtocols = useMemo(() => 
    MEDICAL_DATA.filter(p => 
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      p.category.toLowerCase().includes(searchQuery.toLowerCase())
    )
  , [searchQuery]);

  const currentTheme = SYSTEM_THEMES[selectedProtocol.system] || SYSTEM_THEMES[MedicalSystem.Cardiovascular];

  const Launchpad = () => (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-100 via-white to-slate-200">
      <div className="max-w-5xl w-full animate-in">
        <div className="text-center mb-12">
          <div className="inline-flex p-4 rounded-3xl bg-rose-50 text-rose-600 mb-6 shadow-sm">
            <Stethoscope className="w-12 h-12" />
          </div>
          <h1 className="text-5xl font-black text-slate-900 mb-4 tracking-tighter">MedGuide Resident</h1>
          <p className="text-xl text-slate-500 max-w-lg mx-auto leading-relaxed">
            Instant decision support and visual clinical flows for the modern medical resident.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Option 1: Protocols */}
          <button 
            onClick={() => setView('dashboard')}
            className="group relative bg-white p-8 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-slate-50 hover:border-rose-100 text-left overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-rose-50 rounded-bl-[5rem] group-hover:scale-110 transition-transform duration-500 -z-0 opacity-50" />
            <div className="relative z-10">
              <div className="bg-rose-600 text-white w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <LayoutGrid className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold text-slate-800 mb-3 tracking-tight">Clinical Protocols</h2>
              <p className="text-slate-500 text-lg mb-6 leading-relaxed">
                Deep-dive into comprehensive protocols with structured bento-grids for doses and symptoms.
              </p>
              <div className="flex items-center text-rose-600 font-bold gap-2">
                Standard View <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </button>

          {/* Option 2: Flowcharts */}
          <button 
            onClick={() => setView('flowchart')}
            className="group relative bg-slate-900 p-8 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-slate-800 hover:border-blue-900 text-left overflow-hidden text-white"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-950 rounded-bl-[5rem] group-hover:scale-110 transition-transform duration-500 -z-0 opacity-30" />
            <div className="relative z-10">
              <div className="bg-blue-600 text-white w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Workflow className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold mb-3 tracking-tight">Visual Flowcharts</h2>
              <p className="text-slate-400 text-lg mb-6 leading-relaxed">
                Expandable decision trees and mind maps to visualize management steps and clinical logic.
              </p>
              <div className="flex items-center text-blue-400 font-bold gap-2">
                Flow Mode <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </button>
        </div>

        <footer className="mt-20 text-center text-slate-400 text-sm font-medium">
          &copy; {new Date().getFullYear()} MedGuide Clinical Solutions • Verified Evidence-Based Medicine
        </footer>
      </div>
    </div>
  );

  const Dashboard = () => (
    <div className="flex h-screen overflow-hidden bg-slate-50">
      <aside className="w-80 bg-white border-r border-slate-200 flex flex-col shadow-sm z-30">
        <div className="p-6 border-b border-slate-100">
          <button onClick={() => setView('launchpad')} className="flex items-center gap-2 text-slate-500 hover:text-slate-800 transition-colors mb-6 text-sm font-semibold">
            <ChevronLeft className="w-4 h-4" /> Back to Launchpad
          </button>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input type="text" placeholder="Search..." className="w-full bg-slate-100 border-none rounded-xl py-3 pl-10 pr-4 text-sm focus:ring-2 focus:ring-rose-500 outline-none" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto p-4">
          {filteredProtocols.map(p => (
            <ProtocolCard key={p.id} protocol={p} active={selectedProtocolId === p.id} onClick={() => setSelectedProtocolId(p.id)} theme={SYSTEM_THEMES[p.system] || SYSTEM_THEMES[MedicalSystem.Cardiovascular]} />
          ))}
        </div>
      </aside>
      <main className="flex-1 flex flex-col overflow-hidden relative">
        <div className={`absolute inset-0 ${currentTheme.bgLight} opacity-30 pointer-events-none`} />
        <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 p-8 flex justify-between items-center relative z-10">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className={`px-2 py-1 rounded text-[10px] font-black uppercase tracking-widest ${currentTheme.primary} text-white`}>{selectedProtocol.system}</span>
              <span className="text-slate-400 text-[10px] font-black uppercase tracking-widest">{selectedProtocol.category}</span>
            </div>
            <h1 className="text-4xl font-black text-slate-900 tracking-tight leading-none uppercase">{selectedProtocol.name}</h1>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => setView('flowchart')} className="bg-slate-900 text-white px-4 py-2 rounded-xl text-xs font-bold uppercase flex items-center gap-2 hover:bg-slate-800 transition-colors">
              <Workflow className="w-4 h-4" /> Flow Mode
            </button>
            <div className={`p-4 rounded-2xl ${currentTheme.iconBg} ${currentTheme.accent}`}>
              {getSystemIcon(selectedProtocol.system)}
            </div>
          </div>
        </header>
        <div className="flex-1 overflow-y-auto p-8 relative z-10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
            <BentoBox title="Symptoms" icon={Stethoscope} className="h-full">
              <ul className="space-y-3">
                {selectedProtocol.symptoms.map((s, idx) => (
                  <li key={idx} className="flex gap-3 text-sm text-slate-600 leading-relaxed">
                    <div className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${currentTheme.primary}`} />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </BentoBox>
            <div className="lg:col-span-2 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {selectedProtocol.treatment.map((step, idx) => (
                  <BentoBox key={idx} title={step.title} icon={idx === 0 ? Clock : ClipboardList} className="border-l-4" style={{ borderLeftColor: currentTheme.primary.replace('bg-', '') }}>
                    <ul className="space-y-4">
                      {step.options.map((opt, oIdx) => (
                        <li key={oIdx} className="p-3 bg-slate-50 rounded-xl text-sm font-medium text-slate-700 border border-slate-100 shadow-sm">
                          <BrandTagText text={opt} theme={currentTheme} />
                        </li>
                      ))}
                    </ul>
                  </BentoBox>
                ))}
              </div>
              {selectedProtocol.importantNotes.length > 0 && (
                <div className="bg-slate-900 text-white rounded-[2rem] p-8 shadow-xl relative overflow-hidden">
                  <div className="flex items-center gap-3 mb-6 relative z-10">
                    <div className="bg-red-500 p-2 rounded-lg"><Info className="w-6 h-6 text-white" /></div>
                    <h3 className="text-xl font-bold uppercase tracking-widest">Clinical Alert</h3>
                  </div>
                  <ul className="space-y-4 relative z-10">
                    {selectedProtocol.importantNotes.map((note, idx) => (
                      <li key={idx} className="flex gap-4 items-start text-red-100 text-lg font-medium leading-relaxed">
                        <div className="w-2 h-2 rounded-full bg-red-500 mt-2.5 shrink-0 shadow-[0_0_10px_rgba(239,68,68,0.8)]" />
                        <BrandTagText text={note} theme={currentTheme} />
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );

  const Flowchart = () => {
    const [expandedSteps, setExpandedSteps] = useState<number[]>([0]);

    const toggleStep = (idx: number) => {
      setExpandedSteps(prev => 
        prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
      );
    };

    return (
      <div className="flex h-screen bg-slate-100">
        <aside className="w-80 bg-white border-r border-slate-200 flex flex-col shadow-sm">
          <div className="p-6 border-b border-slate-100">
            <button onClick={() => setView('launchpad')} className="flex items-center gap-2 text-slate-500 hover:text-slate-800 mb-6 text-sm font-semibold">
              <ChevronLeft className="w-4 h-4" /> Exit Mode
            </button>
            <div className="flex items-center gap-2 text-blue-600 font-bold mb-4 uppercase text-xs tracking-tighter">
              <Workflow className="w-4 h-4" /> Visual Flow Designer
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-4">
            {MEDICAL_DATA.map(p => (
              <ProtocolCard key={p.id} protocol={p} active={selectedProtocolId === p.id} onClick={() => setSelectedProtocolId(p.id)} theme={SYSTEM_THEMES[p.system]} />
            ))}
          </div>
        </aside>

        <main className="flex-1 overflow-auto p-12 flex flex-col items-center">
          <div className="max-w-4xl w-full">
            <div className="text-center mb-16">
              <div className={`inline-flex items-center gap-2 px-6 py-2 rounded-full ${currentTheme.primary} text-white font-bold uppercase text-xs mb-4 shadow-lg`}>
                {getSystemIcon(selectedProtocol.system)} {selectedProtocol.system}
              </div>
              <h2 className="text-5xl font-black text-slate-900 uppercase tracking-tighter">{selectedProtocol.name}</h2>
              <p className="text-slate-500 mt-2 font-medium tracking-wide">MANAGEMENT FLOWCHART</p>
            </div>

            {/* Start Node */}
            <div className="flex flex-col items-center">
              <div className="bg-white border-2 border-slate-200 p-8 rounded-[2rem] shadow-xl w-full text-center relative hover:border-slate-400 transition-colors">
                <div className="text-slate-400 text-[10px] font-black uppercase mb-2">Primary Presentation</div>
                <div className="flex flex-wrap justify-center gap-2">
                  {selectedProtocol.symptoms.slice(0, 4).map((s, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-50 border border-slate-100 rounded-lg text-xs font-semibold text-slate-600">
                      {s}
                    </span>
                  ))}
                  {selectedProtocol.symptoms.length > 4 && <span className="text-xs text-slate-400 font-bold self-center">+{selectedProtocol.symptoms.length - 4} more...</span>}
                </div>
              </div>

              {/* Vertical Connector */}
              <div className="w-1 h-16 bg-gradient-to-b from-slate-200 to-slate-300" />

              {/* Treatment Sequence */}
              <div className="w-full space-y-12">
                {selectedProtocol.treatment.map((step, idx) => (
                  <div key={idx} className="relative">
                    {/* Lateral connectors could go here if branching */}
                    <div className="flex flex-col items-center">
                      <button 
                        onClick={() => toggleStep(idx)}
                        className={`w-full bg-white border-2 ${expandedSteps.includes(idx) ? currentTheme.border : 'border-slate-200'} p-6 rounded-[2rem] shadow-md hover:shadow-xl transition-all text-left flex items-center justify-between group`}
                      >
                        <div className="flex items-center gap-4">
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black ${expandedSteps.includes(idx) ? currentTheme.primary + ' text-white' : 'bg-slate-100 text-slate-400'}`}>
                            {idx + 1}
                          </div>
                          <div>
                            <h3 className="font-bold text-slate-800">{step.title}</h3>
                            <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">
                              {step.options.length} Management Options
                            </p>
                          </div>
                        </div>
                        <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${expandedSteps.includes(idx) ? 'rotate-180' : ''}`} />
                      </button>

                      {expandedSteps.includes(idx) && (
                        <div className="w-full mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 animate-in">
                          {step.options.map((opt, oIdx) => (
                            <div key={oIdx} className={`p-4 rounded-2xl bg-white border ${currentTheme.border} shadow-sm hover:scale-[1.02] transition-transform`}>
                              <BrandTagText text={opt} theme={currentTheme} />
                            </div>
                          ))}
                        </div>
                      )}

                      {idx < selectedProtocol.treatment.length - 1 && (
                        <div className="w-1 h-12 bg-slate-200 my-4" />
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* End Node (Notes) */}
              {selectedProtocol.importantNotes.length > 0 && (
                <>
                  <div className="w-1 h-16 bg-slate-200" />
                  <div className="bg-slate-900 p-8 rounded-[2.5rem] w-full shadow-2xl border-4 border-red-500/20">
                    <div className="flex items-center gap-2 text-red-500 font-black text-xs uppercase mb-4 tracking-widest">
                      <AlertTriangle className="w-4 h-4" /> Critical Considerations
                    </div>
                    <div className="space-y-4">
                      {selectedProtocol.importantNotes.map((note, i) => (
                        <div key={i} className="text-white font-medium leading-relaxed border-b border-white/5 pb-4 last:border-0">
                          <BrandTagText text={note} theme={currentTheme} />
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </main>
      </div>
    );
  };

  return (
    <>
      {view === 'launchpad' && <Launchpad />}
      {view === 'dashboard' && <Dashboard />}
      {view === 'flowchart' && <Flowchart />}
    </>
  );
};

export default App;
