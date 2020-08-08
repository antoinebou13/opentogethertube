const URL = require("url");
const ServiceAdapter = require("../serviceadapter");

class VimeoAdapter extends ServiceAdapter {
  static SERVICE_ID = "vimeo";

  canHandleLink(link) {
    const url = URL.parse(link);
    return url.host.endsWith("vimeo.com");
  }
}

module.exports = VimeoAdapter;
