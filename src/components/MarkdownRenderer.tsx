// src/MarkdownRenderer.tsx
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// Definiere die Props für die Komponente
interface MarkdownRendererProps {
    content: string;
}

// Beispielhafte Inline-Styles für Überschriften und Text
const headingStyle: React.CSSProperties = {
    marginTop: "1.5rem",
    marginBottom: "0.5rem",
    color: "#2b6cb0",
};

const textStyle: React.CSSProperties = {
    margin: "0.5rem 0",
    lineHeight: "1.5",
};

// Die MarkdownRenderer Komponente
const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({content}: any) => {
    return (
        <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
                // Überschriften anpassen
                h1: ({node, ...props}) => (
                    <h1 style={{...headingStyle, fontSize: "2rem"}} {...props} />
                ),
                h2: ({node, ...props}) => (
                    <h2 style={{...headingStyle, fontSize: "1.75rem"}} {...props} />
                ),
                h3: ({node, ...props}) => (
                    <h3 style={{...headingStyle, fontSize: "1.5rem"}} {...props} />
                ),
                // Absätze anpassen
                p: ({node, ...props}) => <p style={textStyle} {...props} />,
            }}
        >
            {content.frontmatter.content}
        </ReactMarkdown>
    );
};

export default MarkdownRenderer;
