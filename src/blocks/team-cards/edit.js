import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

const ALLOWED_BLOCKS = ['ud/team-card'];

const TEMPLATE = [
	['ud/team-card'],
	['ud/team-card'],
	['ud/team-card']
];

export default function Edit() {
	const blockProps = useBlockProps({
		className: 'ud-team-cards'
	});

	return (
		<div {...blockProps}>
			<InnerBlocks
				allowedBlocks={ALLOWED_BLOCKS}
				template={TEMPLATE}
			/>
		</div>
	);
}