// app/page.tsx

import Image from 'next/image'

// --- Tipe Data untuk Projek ---
type Project = {
  title: string
  description: string
  image: string
  tags: string[]
  liveUrl?: string
  githubUrl?: string
}

// --- DATA PROJEK (Sesuai update Anda) ---
const projects: Project[] = [
  {
    title: 'Aplikasi Food Delivery',
    description:
      'Aplikasi mobile cross-platform untuk pemesanan makanan, dibangun dengan Flutter.',
    image: '/images/gojek.jpeg', // Gambar Anda
    tags: ['Flutter', 'Dart', 'Firebase'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Website Data UMKM',
    description:
      'Dashboard frontend untuk memvisualisasikan data UMKM menggunakan Next.js dan Tailwind.',
    image: '/images/umkm.jpeg', // Gambar Anda
    tags: ['Next.js', 'Tailwind CSS', 'MongoDB'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Website Budaya Jawa',
    description:
      'Situs web informatif statis yang menampilkan berbagai aspek budaya Jawa.',
    image: '/images/jawa.jpeg', // Gambar Anda
    tags: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: '#',
    githubUrl: '#',
  },
]

// --- Komponen Helper ---
function DataItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col sm:flex-row">
      <dt className="w-full sm:w-48 font-semibold text-gray-600 flex-shrink-0">
        {label}
      </dt>
      <dd className="flex-grow text-gray-800">{value}</dd>
    </div>
  )
}

// --- Komponen Kartu Projek ---
function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <Image
        src={project.image}
        alt={`Screenshot ${project.title}`}
        width={600}
        height={400}
        className="w-full h-48 object-cover"
      />
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2 text-orange-600">
          {project.title}
        </h3>
        <p className="text-sm text-gray-700 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-orange-100 text-orange-800 text-xs font-semibold px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-orange-600 hover:text-orange-800 hover:underline"
            >
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-orange-600 hover:text-orange-800 hover:underline"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

// --- Komponen Halaman Utama ---
export default function Home() {
  return (
    <main className="container mx-auto max-w-4xl p-4 py-12 md:py-16">
      
      {/* --- Kartu Profile --- */}
      <section
        id="profile"
        className="bg-white p-6 md:p-8 rounded-lg shadow-lg mb-10"
      >
        <div className="flex flex-col md:flex-row items-center md:gap-8">
          {/* Foto Profil */}
          <div className="flex-shrink-0 text-center mb-6 md:mb-0">
            <Image
              src="/images/JJ1.jpeg" // <-- DIUBAH SESUAI PERMINTAAN ANDA
              alt="Foto Profil Juan Jefferson"
              width={160}
              height={160}
              className="rounded-full border-4 border-orange-500 mx-auto object-cover w-40 h-40"
              priority
            />
            <h1 className="text-3xl font-bold mt-4 text-gray-900">
              Juan Jefferson
            </h1>
            <a
              href="mailto:juan@gmail.com"
              className="text-lg text-orange-600 hover:underline"
            >
              juan@gmail.com
            </a>
          </div>
          
          {/* Data Pribadi */}
          <div className="w-full">
            <h2 className="text-2xl font-bold mb-4 text-orange-600">
              Data Pribadi
            </h2>
            <dl className="space-y-2">
              <DataItem
                label="Tempat, Tanggal Lahir"
                value="Bandung, 01 September 1998"
              />
              <DataItem 
                label="Alamat" 
                value="Jl. Merdeka No. 123"
              />
              <DataItem 
                label="No. HP" 
                value="0812-3456-7890"
              />
              <DataItem 
                label="Jenis Kelamin" 
                value="Laki-Laki"
              />
              <DataItem 
                label="Agama" 
                value="Kristen"
              />
              <DataItem 
                label="Kewarganegaraan" 
                value="Indonesia"
              />
            </dl>
          </div>
        </div>
      </section>

      {/* --- Kartu Pendidikan & Kemampuan (Side-by-side) --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
        {/* Kartu Pendidikan */}
        <section
          id="pendidikan"
          className="bg-white p-6 md:p-8 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-4 text-orange-600">
            Riwayat Pendidikan
          </h2>
          <ul className="space-y-3 list-none">
            <li>
              <strong className="block text-gray-800">SMAN 01</strong>
              <span className="text-sm text-gray-600">( 2012 - 2015 )</span>
            </li>
            <li>
              <strong className="block text-gray-800">SMPN 01</strong>
              <span className="text-sm text-gray-600">( 2009 - 2012 )</span>
            </li>
            <li>
              <strong className="block text-gray-800">SDN 01</strong>
              <span className="text-sm text-gray-600">( 2003 - 2009 )</span>
            </li>
          </ul>
        </section>

        {/* Kartu Kemampuan */}
        <section
          id="kemampuan"
          className="bg-white p-6 md:p-8 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-4 text-orange-600">
            Kemampuan
          </h2>
          <dl className="space-y-2">
            <DataItem
              label="Bahasa Pemrograman"
              value="HTML, CSS, JavaScript, Dart"
            />
            <DataItem label="Framework" value="Next.js, Flutter, Tailwind CSS" />
            <DataItem
              label="Microsoft Office"
              value="Word, Excel, PowerPoint"
            />
            <DataItem
              label="Desain Grafis"
              value="Adobe Photoshop, Adobe Illustrator"
            />
            <DataItem label="Bahasa Asing" value="Bahasa Inggris, Mandarin" />
          </dl>
        </section>
      </div>

      {/* --- BAGIAN PROJEK SAYA --- */}
      <section id="projek">
        <h2 className="text-3xl font-bold mb-6 text-center text-orange-600">
          Projek Saya
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
    </main>
  )
}