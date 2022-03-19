import React from "react";

function Iframe(props) {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }}
    />
  );
}

export const AmazonAffilateLink = ({ props }) => {
  const iframe =
    '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ac&ref=tf_til&ad_type=product_link&tracking_id=anothertechs-21&marketplace=amazon&amp;region=IN&placement=B07XCM6T4N&asins=B07XCM6T4N&linkId=b83f0cb18b11f2a8b4d116f865a113c5&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff"> </iframe>';

  return (
    <div>
      <Iframe iframe={iframe} />
    </div>
  );
};
