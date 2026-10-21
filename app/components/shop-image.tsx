import Image from "next/image";

export function ShopImage() {
  return (
    <div className="relative">
      {/* Shop image */}
      <div className="relative overflow-hidden">
        <Image
          src="/images/shop-building.jpg"
          alt="Moyer Fuel Tank Renu shop in Greensburg, Pennsylvania"
          width={1057}
          height={294}
          className="h-auto w-full object-cover"
        />
      </div>

      {/* Experience badge */}
      <div
        className="
        absolute top-full right-4 -translate-y-1/2
        flex h-20 w-24 items-center justify-center
        bg-near-black px-3 text-center shadow-xl
        sm:h-24 sm:w-28
        "
        style={{
          clipPath: "polygon(15% 0, 100% 0, 100% 82%, 85% 100%, 0 100%, 0 18%)",
        }}
      >
        <div>
          <p className="font-head text-2xl font-bold leading-none text-moyer-gold sm:text-3xl">
            80+
          </p>
          <p className="mt-1.5 font-head text-[10px] font-bold uppercase tracking-wide text-white sm:text-xs">
            Years experience
          </p>
        </div>
      </div>
    </div>
  );
}
