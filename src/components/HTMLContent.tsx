import React from "react";
import ReactMarkdown from "react-markdown";

const ImpressumPage = ({impressum}: any) => {
    return (
        <div>
            {/* Kopfzeile */}
            <header style={{backgroundColor: "brand-aqua-200", padding: "1rem"}}>
                <img
                    src="/pfad/zu/deinem/logo.png"
                    alt="Logo"
                    style={{height: 40}}
                />
            </header>

            {/* Hauptinhalt (Markdown) */}
            <main style={{padding: "1rem"}}>
                <ReactMarkdown>{impressum.frontmatter.impressum}</ReactMarkdown>
            </main>
        </div>
    );
};

export default ImpressumPage;
