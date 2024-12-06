import Logo from "./components/Logo.jsx";
import Head from "./components/Head.jsx";

const config = {
  logo: <Logo />,
  project: {
    name: "FOSSUOK",
    link: "https://github.com/fossuok",
  },
  docsRepositoryBase: 'https://github.com/fossuok/nextra-doc-template/issues',
  banner: {
    key: 'Join Foss UOK',
    content: (
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSePWol8KVzrh8w-sTsoZCDo7_zwnVmxZznjNJMlA19CBOKmHQ/viewform" target="_blank">
        😊 Join FOSS UOK Community. Join here →
      </a>
    )
  },
  footer: {
    content: (
      <>
        <h1>
          <a href="https://fossuok.org/" target="_blank">
            {"MIT License © 2024 FOSSUOK."}  
          </a>
        </h1>
      </>
    ),
  },
  editLink: {
		content: null,
	},
  head: <Head />,
  useNextSeoProps() {
    return {
      title: "FOSS UOK",
      description: "This is design guidelines for FOSS Community University of Kelaniya",
      openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://fossuok.org",
        site_name: "FOSS UOK",
      },
    }
  },
};

export default config;

