import Image from 'next/image';

export default function ProfileCard() {
  return (
    <div className="flex flex-col-reverse sm:flex-row items-start">
      <div className="flex flex-col pr-8">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
          Jose Tom
        </h1>
        <h2 className="text-gray-700 dark:text-gray-200 mb-4">
          Engineering Manager at <span className="font-semibold">Chargebee</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 sm:w-72">
          Building and managing the Chargebee checkout experience and all things frontend
        </p>
      </div>
      <div className="">
        <Image
          className="inline-block rounded-md place-self-end"
          src="/images/IMG-sikkim-small.jpg"
          alt=""
          width={192}
          height={192}
        />
      </div>
    </div>
  );
}
