import { useConfig } from "nextra-theme-docs";

const Head = () => {
    const { frontMatter } = useConfig();

    return (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta property="og:title" content={frontMatter.title || "FOSS UOK"} />
            <meta property="og:description" content={frontMatter.description || "This is design guidelines for FOSS Community University of Kelaniya"} />
        </>
    );
};

export default Head;