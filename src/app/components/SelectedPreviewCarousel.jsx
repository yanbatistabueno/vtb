export default function SelectedPreviewCarousel(props) {
  const slidesPreview = props.slides.map((slide) => {
    return (
      <div
        key={slide.id}
        className="preview-slides"
        data-visible={`${props.slideSelected == slide.id ? "true" : "false"}`}
      ></div>
    );
  });

  return slidesPreview;
}
