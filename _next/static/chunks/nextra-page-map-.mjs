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
  }, {
    name: "alerts",
    route: "/component/alerts",
    frontMatter: {
      "title": "Alert Design Guidelines",
      "component": "Alert"
    }
  }, {
    name: "button",
    route: "/component/button",
    frontMatter: {
      "title": "Button Design Guidelines",
      "component": "Button"
    }
  }, {
    name: "card",
    route: "/component/card",
    frontMatter: {
      "title": "Card Design Guidelines",
      "component": "Card"
    }
  }, {
    name: "footer",
    route: "/component/footer",
    frontMatter: {
      "title": "Footer Design Guidelines",
      "component": "Footer"
    }
  }, {
    name: "form-inputs",
    route: "/component/form-inputs",
    frontMatter: {
      "title": "Form Input Guidelines",
      "component": "Form Input"
    }
  }, {
    name: "modal",
    route: "/component/modal",
    frontMatter: {
      "title": "Modal Design Guidelines",
      "component": "Modal"
    }
  }, {
    name: "navigation",
    route: "/component/navigation",
    frontMatter: {
      "title": "Navigation Guidelines",
      "component": "Navigation"
    }
  }, {
    name: "typography",
    route: "/component/typography",
    frontMatter: {
      "title": "Typography Guidelines",
      "component": "Typography"
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