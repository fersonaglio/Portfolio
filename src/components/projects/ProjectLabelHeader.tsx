const ProjectLabelHeader = ({
  label,
  accent,
}: {
  label: string;
  accent: string;
}) => (
  <div
    className={`flex flex-1 w-full h-full min-h-[6rem] rounded-sm bg-gradient-to-br ${accent} border border-white/5 flex-col items-center justify-center p-4 relative overflow-hidden`}
  >
    <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/30 z-10">
      {label}
    </div>
    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
  </div>
);

export default ProjectLabelHeader;
