try {
  let body = $response.body;

  if (body && body[0] === "{") {
    let obj = JSON.parse(body);

    if (obj.ads) obj.ads = [];
    if (obj.ad) obj.ad = null;

    $done({ body: JSON.stringify(obj) });
  } else {
    $done({});
  }

} catch (e) {
  $done({});
}
