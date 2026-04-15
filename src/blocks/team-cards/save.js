import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save() {
	const blockProps = useBlockProps.save({
		className: 'ud-team-cards'
	});

	return (
		<div {...blockProps}>
			<InnerBlocks.Content />
		</div>
	);
}