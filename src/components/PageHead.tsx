import Typewriter from './Typewriter';

interface PageHeadProps {
  crumb?: string;
  title: string;
  lead: string;
  image: string;
}

export default function PageHead({ crumb, title, lead, image }: PageHeadProps) {
  return (
    <div className="pagehead">
      <div className="hero-bg">
        <img src={image} alt="" loading="eager" />
      </div>
      <div className="container">
        {crumb && <span className="crumb">{crumb}</span>}
        <Typewriter as="h1" text={title} className="pagehead-title" />
        <p>{lead}</p>
      </div>
    </div>
  );
}
