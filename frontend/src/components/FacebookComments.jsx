// src/components/FacebookComments.jsx
import { useEffect } from "react";

const FacebookComments = ({ url }) => {
  useEffect(() => {
    // Intentar parsear el plugin cuando el componente se monte
    if (window.FB) {
      window.FB.XFBML.parse();
    }
  }, [url]);

  return (
    <div 
      className="fb-comments"
      data-href={url}
      data-width="100%"
      data-numposts="5"
      data-colorscheme="light"
    />
  );
};

export default FacebookComments;