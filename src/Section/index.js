import "./style.css";

const Section = ({title, body, extraHeaderContent}) => (
<section className="section">
        <header className="section__header">
          <h2>{title}</h2>
          {extraHeaderContent}
        </header>
        <div className="section__form">
         {body}
        </div>
</section>
);

export default Section;