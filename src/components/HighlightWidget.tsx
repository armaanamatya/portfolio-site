import './HighlightWidget.css';

interface HighlightWidgetProps {
  title?: string;
  description: React.ReactNode;
}

function HighlightWidget({ title, description }: HighlightWidgetProps) {
  return (
    <div className="highlight-widget">
      {title && <h3 className="highlight-title">{title}</h3>}
      <div className="highlight-description">{description}</div>
    </div>
  );
}

export default HighlightWidget;

