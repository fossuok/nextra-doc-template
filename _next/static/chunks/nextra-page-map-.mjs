import meta from "../../../pages/_meta.js";
import component_meta from "../../../pages/component/_meta.js";
export const pageMap = [{
  data: meta
}, {
  name: "about",
  route: "/about",
  frontMatter: {
    "sidebarTitle": "About"
  }
}, {
  name: "component",
  route: "/component",
  children: [{
    data: component_meta
  }, {
    name: "actionBar",
    route: "/component/actionBar",
    frontMatter: {
      "title": "BlogCard",
      "description": "BlogCard's UI for your blog or news website."
    }
  }]
}, {
  name: "guidance",
  route: "/guidance",
  frontMatter: {
    "title": "Guidance for Developers"
  }
}, {
  name: "index",
  route: "/",
  frontMatter: {
    "sidebarTitle": "Index"
  }
}, {
  name: "typography",
  route: "/typography",
  frontMatter: {
    "sidebarTitle": "Typography"
  }
}];