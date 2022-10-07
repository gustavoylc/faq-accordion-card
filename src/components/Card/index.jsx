import React from "react";
import {
	StyledArticle,
	ImageContainer,
	StyledTitle,
	StyledContainer,
	StyledBoxImage,
} from "@components/Card/StyledCard";
import { CardAccordionQuestion } from "@components/CardAccordionQuestion";
import { CardImage } from "@components/CardImage";
import smallIlustration from "@images/illustration-woman-online-mobile.svg";
import largeIlustration from "@images/illustration-woman-online-desktop.svg";
import smallShadowIlustration from "@images/bg-pattern-mobile.svg";
import largeShadowIlustration from "@images/bg-pattern-desktop.svg";
import boxIlustration from "@images/illustration-box-desktop.svg";

export const Card = () => {
	const faqs = [
		{
			question: "How many team members can I invite?",
			answer: `You can invite up to 2 additional users on the Free plan. There is no limit on 
  			team members for the Premium plan.`,
			open: true,
		},
		{
			question: "What is the maximum file upload size?",
			answer: `No more than 2GB. All files in your account must fit your allotted storage space.`,
			open: false,
		},
		{
			question: "How do I reset my password?",
			answer: `  Click “Forgot password” from the login page or “Change password” from your profile page.
  			A reset link will be emailed to you.`,
			open: false,
		},
		{
			question: "Can I cancel my subscription?",
			answer: ` Yes! Send us a message and we’ll process your request no questions asked.`,
			open: false,
		},
		{
			question: "Do you provide additional support?",
			answer: `Chat and email support is available 24/7. Phone lines are open during normal business hours.`,
			open: false,
		},
	];

	return (
		<StyledArticle>
			<StyledContainer>
				<ImageContainer>
					<CardImage
						image={smallIlustration}
						alternativeImage={largeIlustration}
						alternativeText="Illustration"
						imageShadow={smallShadowIlustration}
						alternativeImageShadow={largeShadowIlustration}
					/>
				</ImageContainer>
				<section>
					<StyledTitle>FAQ</StyledTitle>
					{faqs.map((faq) => (
						<CardAccordionQuestion
							key={faq.question}
							question={faq.question}
							answer={faq.answer}
							open={faq.open}
						></CardAccordionQuestion>
					))}
				</section>
			</StyledContainer>
			<StyledBoxImage
				src={boxIlustration}
				alt="Illustration"
			/>
		</StyledArticle>
	);
};
