import Image from "next/image";
import type { ImageAsset } from "@/lib/images";

type Props = {
  asset: ImageAsset;
  /** Responsive sizes hint — lets next/image pick the smallest srcset entry. */
  sizes?: string;
  /** Load eagerly for above-the-fold art (the hero only). */
  priority?: boolean;
  className?: string;
};

/**
 * Thin wrapper over next/image driven by the image manifest. The intrinsic
 * width/height come from the asset and reserve space (no CLS); callers add
 * `w-full h-auto` (or similar) to make it fluid inside its container.
 */
export function AppImage({ asset, sizes, priority = false, className = "" }: Props) {
  return (
    <Image
      src={asset.src}
      alt={asset.alt}
      width={asset.width}
      height={asset.height}
      sizes={sizes}
      priority={priority}
      className={className}
    />
  );
}
