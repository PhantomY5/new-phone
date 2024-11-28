import Image from 'next/image';

export default function ProductHero() {
  return (
    <div className="text-center p-8">
      <h1 className="text-4xl font-bold mb-4">iPhone 16 Pro</h1>
      <Image
        src="https://picsum.photos/600/400"
        alt="iPhone 16 Pro"
        width={600}
        height={400}
        className="mx-auto"
      />
      <p className="text-lg mt-4">Hello, Apple Intelligence.</p>
    </div>
  );
}