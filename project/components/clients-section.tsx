import Image from 'next/image';

const clients = [
  { name: 'Company 1', logo: 'https://images.pexels.com/photos/11983229/pexels-photo-11983229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  { name: 'Company 2', logo: 'https://images.pexels.com/photos/11983228/pexels-photo-11983228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  { name: 'Company 3', logo: 'https://images.pexels.com/photos/3140204/pexels-photo-3140204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  { name: 'Company 4', logo: 'https://images.pexels.com/photos/15031232/pexels-photo-15031232/free-photo-of-logo-of-spotify.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  { name: 'Company 5', logo: 'https://images.pexels.com/photos/15031212/pexels-photo-15031212/free-photo-of-logo-of-amazon.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
];

export default function ClientsSection() {
  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold mb-12">Trusted by Leading Companies</h2>
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
          {clients.map((client, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center grayscale opacity-70 transition-all hover:grayscale-0 hover:opacity-100"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={120}
                height={40}
                className="h-8 md:h-10 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}