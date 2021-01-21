/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';
import {IconWrapper} from './helpers/IconWrapper';
import type {IconWrapperProps} from './helpers/IconWrapper';

export interface ProductAdminDomainsIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductAdminDomainsIcon: React.FC<ProductAdminDomainsIconProps> = ({
  as,
  display,
  size,
  color,
  title,
  decorative,
}) => {
  const titleId = `ProductAdminDomainsIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error('[ProductAdminDomainsIcon]: Missing a title for non-decorative icon.');
  }

  return (
    <IconWrapper as={as} display={display} size={size} color={color}>
      <svg role="img" aria-hidden={decorative} width="100%" height="100%" viewBox="0 0 20 20" aria-labelledby={titleId}>
        {title ? <title id={titleId}>{title}</title> : null}
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M10.07 2A8.001 8.001 0 0118 10a7.975 7.975 0 01-1.974 5.257 7.979 7.979 0 01-5.969 2.737.386.386 0 01-.13 0 8.007 8.007 0 01-5.936-2.718.424.424 0 01-.113-.13 7.973 7.973 0 01-1.63-3.176 7.99 7.99 0 011.634-7.125.447.447 0 01.1-.116 7.973 7.973 0 013.096-2.175A7.984 7.984 0 019.948 2zm1.871 13.37H8.163a7.258 7.258 0 001.774 1.64l.073.045.044-.024a6.402 6.402 0 001.887-1.66zm-4.851 0H5.326a7.139 7.139 0 003.098 1.572A8.137 8.137 0 017.09 15.37zm7.586 0h-1.668a7.28 7.28 0 01-1.303 1.54 7.089 7.089 0 002.971-1.54zM6.595 5.504H4.474a7.115 7.115 0 00.002 8.988l2.118.001a8.132 8.132 0 01-.31-.725.438.438 0 11.822-.305c.132.357.292.702.477 1.03h4.92c.126-.237.237-.482.333-.735l.099-.279a.438.438 0 01.833.272c-.083.254-.18.501-.289.742h2.045a7.1 7.1 0 001.6-4.495 7.094 7.094 0 00-1.596-4.494h-2.13c.114.235.218.477.31.725a.438.438 0 11-.822.305 7.25 7.25 0 00-.477-1.03H7.583c-.13.233-.249.473-.354.72l-.123.31a.438.438 0 01-.821-.305c.091-.248.195-.49.31-.725zm4.388 2.74c.212 0 .388.151.43.35l.008.089v.885c0 .464-.074.925-.218 1.366l-.096.261-.375.939a.439.439 0 01-.794.043l-.034-.086-.237-.827-.236.827a.439.439 0 01-.786.125l-.043-.082-.375-.939a4.39 4.39 0 01-.305-1.35l-.009-.278v-.884a.438.438 0 01.868-.088l.009.088v.884c0 .268.03.534.09.794l.065.237.3-1.049c.112-.391.633-.421.807-.09l.036.09.3 1.049.066-.237c.04-.173.067-.35.08-.527l.01-.267v-.884c0-.242.197-.438.439-.438zm3.947 0c.212 0 .389.151.43.35l.008.089v.885c0 .464-.074.925-.218 1.366l-.095.261-.376.939a.439.439 0 01-.794.043l-.034-.086-.237-.827-.236.827a.439.439 0 01-.786.125l-.042-.082-.376-.939a4.39 4.39 0 01-.305-1.35l-.009-.278v-.884a.438.438 0 01.868-.088l.009.088v.884c0 .268.03.534.09.794l.065.237.301-1.049c.112-.391.632-.421.807-.09l.036.09.3 1.049.065-.237c.04-.173.067-.35.08-.527l.01-.267v-.884c0-.242.197-.438.44-.438zm-7.895 0c.212 0 .389.151.43.35l.009.089v.885c0 .464-.074.925-.219 1.366l-.095.261-.376.939a.439.439 0 01-.794.043l-.034-.086-.236-.827-.237.827a.439.439 0 01-.785.125l-.043-.082-.376-.939a4.39 4.39 0 01-.304-1.35l-.01-.278v-.884a.438.438 0 01.868-.088l.01.088v.884c0 .268.03.534.09.794l.064.236.301-1.048c.112-.391.632-.421.807-.09l.036.09.3 1.049.065-.237c.04-.173.067-.35.081-.527l.01-.267v-.884c0-.242.196-.438.438-.438zm1.393-5.192l-.087.02a7.165 7.165 0 00-3.02 1.555h1.77a8.13 8.13 0 011.337-1.575zm1.568-.102l-.06.038c-.681.446-1.28 1-1.772 1.639h3.665a7.253 7.253 0 00-1.774-1.639l-.06-.038zm1.566.1l.21.198c.425.416.804.879 1.13 1.379h1.777a7.14 7.14 0 00-3.117-1.578z"
        />
      </svg>
    </IconWrapper>
  );
};

ProductAdminDomainsIcon.displayName = 'ProductAdminDomainsIcon';
export {ProductAdminDomainsIcon};