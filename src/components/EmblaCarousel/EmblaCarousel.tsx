import React, { useEffect } from 'react';
import type { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import { DotButton, useDotButton } from './EmblaCarouselDotButton';

import css from './EmblaCarousel.module.css';

type PropType = {
  slides: React.ReactNode[];
  options?: EmblaOptionsType;
  onSlideChange?: (index: number) => void;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options, onSlideChange } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      const index = emblaApi.selectedScrollSnap();
      if (onSlideChange) {
        onSlideChange(index);
      }
    };

    emblaApi.on('select', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSlideChange]);

  return (
    <section className={css.embla}>
      <div className={css.emblaViewport} ref={emblaRef}>
        <div className={css.emblaContainer}>
          {slides.map((slide, index) => (
            <div className={css.emblaSlide} key={`embla-slide-${index}`}>
              <div className={css.emblaSlideNumber}>{slide}</div>
            </div>
          ))}
        </div>
      </div>

      <div className={css.emblaControls}>
        <div className={css.emblaDots}>
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={`embla-dot-${index}`}
              onClick={() => onDotButtonClick(index)}
              className={css.emblaDot.concat(
                index === selectedIndex ? ` ${css.emblaDotSelected}` : ''
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
