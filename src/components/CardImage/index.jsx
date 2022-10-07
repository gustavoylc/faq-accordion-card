import React, { Fragment } from "react";
import {
	StyledIllustrationShadow,
	StyledIllustration,
	StyledImage,
	StyledImageShadow,
	StyledBoxImage,
} from "@components/CardImage/StyledCardImage";
export const CardImage = ({
	image,
	alternativeImage,
	imageShadow,
	alternativeImageShadow,
	boxImage,
	alternativeText,
}) => {
	return (
		<Fragment>
			<StyledIllustration>
				<picture>
					<source
						srcSet={alternativeImage}
						media="(min-width: 1024px)"
					/>
					<StyledImage
						src={image}
						alt={alternativeText}
					/>
				</picture>
			</StyledIllustration>
			<StyledIllustrationShadow>
				<picture>
					<source
						srcSet={alternativeImageShadow}
						media="(min-width: 1024px)"
					/>
					<StyledImageShadow
						src={imageShadow}
						alt={alternativeText}
					/>
				</picture>
			</StyledIllustrationShadow>			
		</Fragment>
	);
};
