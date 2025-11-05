import './SectionTags.css';

interface SectionTag {
  id: string;
  label: string;
}

interface SectionTagsProps {
  sections: SectionTag[];
}

function SectionTags({ sections }: SectionTagsProps) {
  const onClick = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="section-tags">
      {sections.map(s => (
        <button key={s.id} className="section-tag" onClick={() => onClick(s.id)}>
          {s.label}
        </button>
      ))}
    </div>
  );
}

export default SectionTags;


