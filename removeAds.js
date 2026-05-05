try {
  let obj = JSON.parse($response.body);

  // Xoá ads phổ biến
  if (obj.ads) obj.ads = [];
  if (obj.ad) obj.ad = null;

  // Xoá tracking flag
  if (obj.tracking) obj.tracking = false;

  $done({ body: JSON.stringify(obj) });

} catch (e) {
  $done({});
}
