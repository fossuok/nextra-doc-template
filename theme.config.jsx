import Logo from "./components/Logo.jsx";
import { DocsThemeConfig } from "nextra-theme-docs";
import { useConfig } from "nextra-theme-docs";

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
};

export default config;

