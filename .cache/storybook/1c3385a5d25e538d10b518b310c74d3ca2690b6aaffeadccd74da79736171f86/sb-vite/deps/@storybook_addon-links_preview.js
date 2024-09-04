import './chunk-FAY27ZE3.js';
import { require_global } from './chunk-CYHXIIKI.js';
import { require_core_events } from './chunk-JAV3BEES.js';
import { require_preview_api } from './chunk-JQ2GWK6M.js';
import { __toESM } from './chunk-LK32TJAX.js';

// node_modules/.pnpm/@storybook+addon-links@8.2.9_react@18.3.1_storybook@8.2.9_@babel+preset-env@7.25.4_@babel+core@7.25.2__/node_modules/@storybook/addon-links/dist/preview.mjs
var import_global = __toESM(require_global(), 1);
var import_preview_api = __toESM(require_preview_api(), 1);
var import_core_events = __toESM(require_core_events(), 1);
var PARAM_KEY = 'links';
var { document, HTMLElement } = import_global.global;
var navigate = (params) =>
  import_preview_api.addons.getChannel().emit(import_core_events.SELECT_STORY, params);
var linksListener = (e) => {
  const { target } = e;
  if (!(target instanceof HTMLElement)) return;
  const element = target,
    { sbKind: kind, sbStory: story } = element.dataset;
  (kind || story) && (e.preventDefault(), navigate({ kind, story }));
};
var hasListener = false;
var on = () => {
  hasListener || ((hasListener = true), document.addEventListener('click', linksListener));
};
var off = () => {
  hasListener && ((hasListener = false), document.removeEventListener('click', linksListener));
};
var withLinks = (0, import_preview_api.makeDecorator)({
  name: 'withLinks',
  parameterName: PARAM_KEY,
  wrapper: (getStory, context) => (
    on(),
    import_preview_api.addons.getChannel().once(import_core_events.STORY_CHANGED, off),
    getStory(context)
  ),
});
var decorators = [withLinks];
export { decorators };
//# sourceMappingURL=@storybook_addon-links_preview.js.map
