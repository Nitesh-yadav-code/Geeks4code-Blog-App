import React from 'react'
import parse, { attributesToProps } from "html-react-parser";
import Image from "next/image";
function Content({content}) {
    const options = {
        replace: domNode => {
          if (domNode.attribs && domNode.name === 'img') {
            const props = attributesToProps(domNode.attribs);
            return <Image {...props}  sizes="" />;
          }
        }
      };
  return parse(content, options);
}

export default Content