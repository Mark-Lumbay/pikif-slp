import { boot } from "quasar/wrappers";

export let router = null;

export default boot(({ router: _router }) => {
  router = _router;
});
