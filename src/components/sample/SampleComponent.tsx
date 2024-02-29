import './SampleComponent.css';

interface SampleComponentProps {
    title: string;
    description: string;
}

export default function SampleComponent({ title, description }: SampleComponentProps) {
    return (
        <div className="sample">
            <div className="sample-title">{title}</div>
            <div className="sample-desc">{description}</div>
        </div>
    );
}