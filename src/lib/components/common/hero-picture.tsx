import Image, { StaticImageData } from "next/image";

export const HeroPicture = ({
  mobile,
  desktop,
}: {
  mobile: StaticImageData;
  desktop: StaticImageData;
}) => {
  return (
    <>
      <Image
        src={mobile}
        alt="The picture of Daffa Ilhami"
        priority
        className="rounded-b-full w-full max-w-xs lg:max-w-md lg:hidden"
      />
      <Image
        src={desktop}
        alt="The picture of Daffa Ilhami"
        priority
        className="rounded-b-full w-full max-w-xs lg:max-w-md max-lg:hidden"
      />
    </>
  );
};
