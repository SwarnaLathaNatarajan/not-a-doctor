const ResourceInfo = function (resourceinfo) {
  this.storename = resourceinfo.storename;
  this.title = resourceinfo.title;
  this.image_url = resourceinfo.image_url;
  this.product_url = resourceinfo.product_url;
  this.price = resourceinfo.price;
};

ResourceInfo.getResourcesInfo = (req, result) => {
  async function getInfo() {
    const [rows] = [];
    console.log("Resource tracker api called!");
    result(null, rows);
  }
  getInfo();
};

module.exports = ResourceInfo;
