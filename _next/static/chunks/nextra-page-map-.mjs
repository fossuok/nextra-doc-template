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
  name: "colors",
  route: "/colors",
  frontMatter: {
    "sidebarTitle": "Colors"
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
    name: "banner",
    route: "/component/banner",
    frontMatter: {
      "title": "Banner Design Guidelines",
      "component": "Banner"
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
    name: "carousel",
    route: "/component/carousel",
    frontMatter: {
      "title": "Progress bar Design Guidelines",
      "component": "Progress bar"
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
    name: "form",
    route: "/component/form",
    frontMatter: {
      "title": "Form custamization Guidelines",
      "component": "Form"
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
    name: "progressBar",
    route: "/component/progressBar",
    frontMatter: {
      "title": "Progress bar Design Guidelines",
      "component": "Progress bar"
    }
  }, {
    name: "unifiedField",
    route: "/component/unifiedField",
    frontMatter: {
      "title": "Unified Form Inputs",
      "component": "Labels, Radio Buttons and Checkboxes"
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