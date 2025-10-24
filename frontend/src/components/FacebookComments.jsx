import { useEffect } from "react";

const FacebookComments = ({ url }) => {
  useEffect(() => {
    if (window.FB) {
      window.FB.XFBML.parse();
    }
  }, []);

  return (
    <div className="fb-comments"
         data-href={url}
         data-width="100%"
         data-numposts="5"
         data-colorscheme="light">
    </div>
  );
};

export default FacebookComments;
