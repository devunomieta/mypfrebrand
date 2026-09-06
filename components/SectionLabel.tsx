type Props = {
  index?: string;
  children: React.ReactNode;
  tone?: 'light' | 'dark';
  className?: string;
};

export default function SectionLabel({
  index,
  children,
  tone = 'dark',
  className = '',
}: Props) {
  const line = tone === 'dark' ? 'bg-white/20' : 'bg-navy/20';
  const text = tone === 'dark' ? 'text-mist' : 'text-muted';
  const accent = tone === 'dark' ? 'text-gold' : 'text-coral';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {index && <span className={`font-mono-label ${accent}`}>{index}</span>}
      <span className={`h-px w-8 ${line}`} />
      <span className={`font-mono-label ${text}`}>{children}</span>
    </div>
  );
}
