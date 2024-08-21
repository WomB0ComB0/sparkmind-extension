import "./chunk-EGRHWZRV.js";
import {
  AnchorMdx,
  CodeOrSourceMdx,
  Docs,
  HeadersMdx
} from "./chunk-I3NSKG5E.js";
import "./chunk-7C4746ZP.js";
import "./chunk-Z2TXJYCM.js";
import "./chunk-7VDBMASF.js";
import "./chunk-M2SMWPXR.js";
import "./chunk-JAV3BEES.js";
import "./chunk-FAY27ZE3.js";
import "./chunk-7L5JYPT4.js";
import "./chunk-UHU3NK7Q.js";
import "./chunk-JQ2GWK6M.js";
import {
  renderElement,
  unmountElement
} from "./chunk-LDYIVF4Z.js";
import "./chunk-GDNJB6U6.js";
import "./chunk-CYHXIIKI.js";
import "./chunk-YGZ2ZWFG.js";
import {
  require_react
} from "./chunk-VMU3GUP3.js";
import {
  __toESM
} from "./chunk-LK32TJAX.js";

// node_modules/.pnpm/@storybook+addon-docs@8.2.9_storybook@8.2.9_@babel+preset-env@7.25.3_@babel+core@7.25.2__/node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs
var import_react = __toESM(require_react(), 1);
var defaultComponents = { code: CodeOrSourceMdx, a: AnchorMdx, ...HeadersMdx };
var ErrorBoundary = class extends import_react.Component {
  constructor() {
    super(...arguments);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(err) {
    let { showException } = this.props;
    showException(err);
  }
  render() {
    let { hasError } = this.state, { children } = this.props;
    return hasError ? null : import_react.default.createElement(import_react.default.Fragment, null, children);
  }
};
var DocsRenderer = class {
  constructor() {
    this.render = async (context, docsParameter, element) => {
      let components = { ...defaultComponents, ...docsParameter == null ? void 0 : docsParameter.components }, TDocs = Docs;
      return new Promise((resolve, reject) => {
        import("./@mdx-js_react.js").then(({ MDXProvider }) => renderElement(import_react.default.createElement(ErrorBoundary, { showException: reject, key: Math.random() }, import_react.default.createElement(MDXProvider, { components }, import_react.default.createElement(TDocs, { context, docsParameter }))), element)).then(() => resolve());
      });
    }, this.unmount = (element) => {
      unmountElement(element);
    };
  }
};
export {
  DocsRenderer,
  defaultComponents
};
//# sourceMappingURL=DocsRenderer-PKQXORMH-U7FPNJQV.js.map
