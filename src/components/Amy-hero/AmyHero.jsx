import AmyStyle from "./AmyImageStyle";
import AmyBoldCopyStyle from "./AmyBoldTitle";
import AmyGreyCopyStyle from "./AmyGreyCopy";
import PinkButton from "../PinkButton/PinkButtonCTA";

export default function AmyHero() {
	return (
		<>
			<AmyStyle />
			<AmyBoldCopyStyle>
				I’m Amy, and I’d love to work on your next project
			</AmyBoldCopyStyle>
			<AmyGreyCopyStyle>
				I love working with others to create beautiful design solutions. I’ve
				designed everything from brand illustrations to complete mobile apps.
				I’m also handy with a camera!
			</AmyGreyCopyStyle>
            <PinkButton>Free Consultation</PinkButton>
		</>
	);
}
