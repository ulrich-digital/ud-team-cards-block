import { __ } from "@wordpress/i18n";
import { useRef, useState } from "@wordpress/element";
import {
	useBlockProps,
	MediaUpload,
	MediaUploadCheck,
	RichText,
	LinkControl,
} from "@wordpress/block-editor";
import { Button, TextControl, Popover, Icon } from "@wordpress/components";
import { link, linkOff } from "@wordpress/icons";

export default function Edit({ attributes, setAttributes }) {
	const {
		name,
		role,
		email,
		phone,
		imageUrl,
		imageId,
		imageAlt,
		buttonText,
		buttonUrl,
	} = attributes;

	const [isLinkPickerOpen, setIsLinkPickerOpen] = useState(false);
	const linkTriggerRef = useRef();

	const blockProps = useBlockProps({
		className: "ud-team-card",
	});

	const onSelectImage = (media) => {
		setAttributes({
			imageId: media?.id || 0,
			imageUrl: media?.url || "",
			imageAlt: media?.alt || "",
		});
	};



	const removeImage = (event) => {
		event.preventDefault();
		event.stopPropagation();

		setAttributes({
			imageId: 0,
			imageUrl: "",
			imageAlt: "",
		});
	};

	return (
		<div {...blockProps}>
			<div className="ud-team-card__image">
				<MediaUploadCheck>
					<MediaUpload
						onSelect={onSelectImage}
						allowedTypes={["image"]}
						value={imageId}
						render={({ open }) =>
							imageUrl ? (
								<button
									type="button"
									className="ud-team-card__image-button"
									onClick={open}
				
								>
									<img
										src={imageUrl}
										alt={imageAlt || ""}
										className="ud-team-card__image-img"
									/>
								</button>
							) : (
								<div className="ud-team-card__image-control">
									<Button
										variant="secondary"
									onClick={open}

										__next40pxDefaultSize={true}
										__nextHasNoMarginBottom={true}
									>
										{__(
											"Bild auswählen",
											"team-cards-block-ud"
										)}
									</Button>
								</div>
							)
						}
					/>
				</MediaUploadCheck>

				{imageUrl && (
					<Button
						className="ud-team-card__image-remove"
						variant="secondary"
						onClick={removeImage}
						__next40pxDefaultSize={true}
						__nextHasNoMarginBottom={true}
					>
						{__("Bild entfernen", "team-cards-block-ud")}
					</Button>
				)}
			</div>

			<div className="ud-team-card__content">
				<RichText
					tagName="h3"
					className="ud-team-card__name"
					value={name}
					onChange={(value) => setAttributes({ name: value })}
					placeholder={__("Name", "team-cards-block-ud")}
					allowedFormats={[]}
				/>

				<RichText
					tagName="p"
					className="ud-team-card__role"
					value={role}
					onChange={(value) => setAttributes({ role: value })}
					placeholder={__("Funktion", "team-cards-block-ud")}
					allowedFormats={[]}
				/>

				<div className="ud-team-card__contact-fields">
					<TextControl
						value={email}
						onChange={(value) => setAttributes({ email: value })}
						placeholder="name@beispiel.ch"
						type="email"
						__next40pxDefaultSize={true}
						__nextHasNoMarginBottom={true}
					/>

					<TextControl
						value={phone}
						onChange={(value) => setAttributes({ phone: value })}
						placeholder="+41 41 123 45 67"
						__next40pxDefaultSize={true}
						__nextHasNoMarginBottom={true}
					/>
				</div>

				<div className="ud-team-card__actions">
					<div className="ud-team-card__button-wrap">
						<div className="wp-block-buttons">
							<div className="wp-block-button">
								<div
									className={`ud-team-card__button-editable${
										buttonUrl ? " has-link" : ""
									}`}
								>
									<RichText
										tagName="span"
										className="wp-block-button__link wp-element-button"
										value={buttonText}
										onChange={(value) =>
											setAttributes({ buttonText: value })
										}
										placeholder={__(
											"Mehr erfahren",
											"team-cards-block-ud"
										)}
										allowedFormats={[]}
									/>

									<button
										ref={linkTriggerRef}
										type="button"
										className={`ud-team-card__link-trigger${
											buttonUrl
												? " is-linked"
												: " is-empty"
										}`}
										aria-label={
											buttonUrl
												? __(
														"Link bearbeiten",
														"team-cards-block-ud"
												  )
												: __(
														"Link setzen",
														"team-cards-block-ud"
												  )
										}
										onClick={(event) => {
											event.preventDefault();
											event.stopPropagation();
											setIsLinkPickerOpen(
												(state) => !state
											);
										}}
									>
										<Icon
											icon={buttonUrl ? link : linkOff}
										/>
									</button>

									{isLinkPickerOpen && (
										<Popover
											anchor={linkTriggerRef.current}
											placement="bottom-start"
											onClose={() =>
												setIsLinkPickerOpen(false)
											}
										>
											<div className="ud-team-card__link-popover">
												<LinkControl
													value={
														buttonUrl
															? { url: buttonUrl }
															: {}
													}
													settings={[]}
													onChange={(nextValue) => {
														setAttributes({
															buttonUrl:
																nextValue?.url ||
																"",
														});
													}}
												/>

												{buttonUrl && (
													<Button
														variant="tertiary"
														onClick={() => {
															setAttributes({
																buttonUrl: "",
															});
															setIsLinkPickerOpen(
																false
															);
														}}
														__next40pxDefaultSize={
															true
														}
														__nextHasNoMarginBottom={
															true
														}
													>
														{__(
															"Link entfernen",
															"team-cards-block-ud"
														)}
													</Button>
												)}
											</div>
										</Popover>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}