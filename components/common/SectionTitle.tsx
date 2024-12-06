interface Props {
  title: string;
  description: string;
}

export default function SectionTitle({ title, description }: Props) {
  return (
    <div className="mb-12">
      <h1 className="section-title">{title}</h1>
      <p className="section-description">{description}</p>
    </div>
  );
}
