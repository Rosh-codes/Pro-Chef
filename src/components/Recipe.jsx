import ReactMarkdown from "react-markdown";
import "../Recipe.css"

export default function Recipe({ recipe }) {
    return (
        <section className="recipe-wrapper">
            <article className="recipe-card">
                <ReactMarkdown className="recipe-markdown">
                    {recipe}
                </ReactMarkdown>
            </article>
        </section>
    );
}
