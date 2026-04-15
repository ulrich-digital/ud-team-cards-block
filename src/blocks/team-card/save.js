import { RichText, useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const {
		name,
		role,
		email,
		phone,
		imageUrl,
		imageAlt,
		buttonText,
		buttonUrl,
	} = attributes;

	const blockProps = useBlockProps.save({
		className: "ud-team-card",
	});

	return (
		<div {...blockProps}>
			{imageUrl && (
				<div className="ud-team-card__image">
					<img
						src={imageUrl}
						alt={imageAlt || ""}
						className="ud-team-card__image-img"
					/>
				</div>
			)}

			<div className="ud-team-card__content">
				{name && (
					<RichText.Content
						tagName="h3"
						className="ud-team-card__name"
						value={name}
					/>
				)}

				{role && (
					<RichText.Content
						tagName="p"
						className="ud-team-card__role"
						value={role}
					/>
				)}

				{email && (
					<p className="ud-team-card__email">
						<a href={`mailto:${email}`}>{email}</a>
					</p>
				)}

				{phone && (
					<p className="ud-team-card__phone">
						<a href={`tel:${phone}`}>{phone}</a>
					</p>
				)}

				{buttonUrl && (
					<div className="ud-team-card__actions">
						<div className="wp-block-buttons">
							<div className="wp-block-button">
								<a
									className="wp-block-button__link wp-element-button"
									href={buttonUrl}
								>
									{buttonText}
								</a>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
