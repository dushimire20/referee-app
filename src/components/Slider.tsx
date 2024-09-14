import { PropsWithChildren } from 'react';
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";

type Props = { options?: EmblaOptionsType } & PropsWithChildren;
const Slider = ({children, options}: Props) => {
    const [emblaRef] = useEmblaCarousel({
        slidesToScroll: 1,
        align: "center",
        ...options,
      });
  return (
    <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-3">{children}</div>

    </div>
  )
}

export default Slider