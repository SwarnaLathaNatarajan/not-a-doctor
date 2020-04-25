const ResourceInfo = function (resourceinfo) {
  this.storename = resourceinfo.storename;
  this.title = resourceinfo.title;
  this.image_url = resourceinfo.image_url;
  this.product_url = resourceinfo.product_url;
  this.price = resourceinfo.price;
};

ResourceInfo.getResourceInfo = (req, result) => {
  async function getInfo() {
    var spawn = require("child_process").spawn;
    var process = spawn("python", [
      "./resource-tracker/main.py",
      req.query.item,
    ]);
    var items = "";
    process.stdout.on("data", (data) => {
      items = data;
    });
    process.on("close", () => {
      result(null, items);
    });
    console.log("Resource tracker api called!");
  }
  getInfo();
};
module.exports = ResourceInfo;
