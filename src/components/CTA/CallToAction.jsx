import CTAStyle from "./CTA-style";
import CTACopyStyle from "./CTACopy";
import CTAPinkButtonStyle from "./CTAPinkButton";
import CTASubStyle from "./CTASubCopy";

export default function CallToAction() {
	return (
		<CTAStyle>
			<CTACopyStyle>Book a call with me</CTACopyStyle>
			<CTAPinkButtonStyle>Free Consultation</CTAPinkButtonStyle>
			<CTASubStyle>
				I’d love to have a chat to see how I can help you. The best first step
				is for us to discuss your project during a free consultation. Then we
				can move forward from there.
			</CTASubStyle>
		</CTAStyle>
	);
}
