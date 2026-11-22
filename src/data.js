export const profile = {
  name: "Nila Fransisca Hardiyeni",
  shortName: "Nila Fransisca",
  role: "Junior Full Stack Developer",
  tagline: "Helping businesses build meaningful digital products through technology",
  cvUrl: "cv/CV-NilaFransiscaH.pdf",
  email: "nilaafransisca@gmail.com",
};

export const education = [
  {
    period: "2022 — 2025",
    title: "Universitas Brawijaya",
    subtitle: "D3 Teknologi Informasi · IPK 3.83 / 4.00",
    logo: "img/logoUB.webp",
  },
];

// Order matters: the Skills page shows one row per group, top to bottom.
// Closely related skills share one chip ("HTML & CSS") to keep the page light.
export const skillGroups = [
  {
    number: "01",
    title: "Front-end",
    items: ["HTML & CSS", "JavaScript", "ReactJS", "Tailwind CSS", "Bootstrap"],
  },
  {
    number: "02",
    title: "Back-end",
    items: ["C#", "ASP.NET", "Node.js", "ExpressJs", "REST API"],
  },
  {
    number: "03",
    title: "Database",
    items: ["MySQL", "SQL Server"],
  },
  {
    number: "04",
    title: "Software QA",
    items: ["Manual & Black Box Testing", "Test Case & Scenario", "Bug Reporting"],
  },
  {
    number: "05",
    title: "Tools",
    items: ["Git & GitHub", "VS Code", "Visual Studio", "Postman"],
  },
  {
    number: "06",
    title: "Design",
    items: ["Figma", "Canva", "UI/UX Design"],
  },
];

// Kartu proyek menampilkan judul, subjudul, tag, dan peran (role). Sisanya muncul di popup saat diklik:
//   role     — peranmu di proyek ini; kalau dikosongkan, kartu menampilkan stack sebagai gantinya
//   stack    — teknologi yang dipakai (ditampilkan di popup)
//   problem  — masalah atau kebutuhan sebelum proyek dibuat
//   solution — apa yang kamu buat untuk menyelesaikannya
//   features — fitur utama (kalimat pendek)
//   links    — opsional: { demo: "https://...", repo: "https://github.com/..." }
export const projects = [
  {
    id: "viincraft",
    image: "img/TA.jpg",
    title: "Viincraft Buket",
    subtitle: "Sistem Pemesanan Buket Berbasis Web",
    tag: "Tugas Akhir",
    role: "Full Stack Developer",
    stack: ["ReactJS", "Tailwind CSS", "ExpressJs", "MySQL"],
    problem: "Pemesanan buket masih dilakukan secara manual lewat chat WhatsApp, dan admin belum punya satu tempat untuk mengelola produk, pesanan, pembayaran, dan laporan.",
    solution: "Dibangun sistem pemesanan buket berbasis web agar proses pemesanan lebih terstruktur dan otomatis, atau lebih mudah dicatat dan diakses, pelanggan dapat memesan secara mandiri.",
    features: ["Katalog produk", "Keranjang", "Checkout", "Upload bukti pembayaran", "Pesanan saya", "Dashboard Admin"],
  },
  {
    id: "asgar",
    image: "img/project2.png",
    title: "ASGAR",
    subtitle: "Website Referensi Kuliner Khas Garut",
    tag: "Project Micro",
    role: "UI/UX & Front-end Developer",
    stack: ["UI Design", "Prototyping", "ReactJs", "Tailwind"],
    problem:
      "Para wisatawan kesulitan mencari makanan khas lokal saat berkunjung ke suatu kota. Mengembangkan platform yang dapat diakses dengan mudah oleh wisatawan melalui situs web, yang menyajikan informasi lengkap mengenai kuliner lokal khas daerah Garut.",
    solution: "Dirancang sebuah platform online yang mudah diakses oleh wisatawan melalui situs web dan menyediakan informasi lengkap mengenai kuliner khas daerah Garut.",
    features: ["Kumpulan makanan khas Garut", "Referensi kuliner untuk pengunjung", "Lokasi", "Rating"],
  },
  {
    id: "unsiq",
    image: "img/project3.png",
    title: "Pondok Pesantren UNSIQ II",
    subtitle: "Website Informasi & Pendaftaran",
    tag: "Project Massive",
    role: "Full Stack Developer",
    stack: ["ReactJS", "Tailwind CSS", "ExpressJs", "MySQL"],
    problem:
      "Dalam hal pendaftaran, calon santri UNSIQ 2 merasa kesulitan karena harus datang langsung ke pondoknya dan seringkali menyebabkan kebingungan terkait status pembayaran. Kurangnya Informasi Promosi, Kendala Administrasi Pendaftaran, Kurangnya Sinergi Informasi.",
    solution: "Website informasi dan pendaftaran yang dirancang dengan fokus pada struktur informasi dan pengalaman pengguna.",
    features: ["Informasi untuk calon santri dan santri", "Pendaftaran online", "Berita terbaru", "Info administrasi", "Kontak & Lokasi"],
  },
  {
    id: "suaco",
    image: "img/project1.jpg",
    title: "Inventory Cafe SUACO",
    subtitle: "Sistem Informasi Inventory",
    tag: "Project Based Learning",
    role: "Quality Assurance",
    stack: ["Black box testing", "Test case scenario"],
    problem: "Pemilik cafe dan kepala gudang membutuhkan cara yang lebih baik untuk mencatat dan mengelola stok barang.",
    solution: "Dirancang sistem informasi inventory dengan antarmuka yang terstruktur dan mudah digunakan untuk pencatatan dan pengelolaan barang.",
    features: ["Pencatatan barang", "Pengelolaan stok"],
  },
];

// type: dipakai untuk tombol filter di halaman Certificates (Training, Certification, Internship, ...)
export const certificates = [
  { type: "Training", image: "img/kampusmerdeka.png", title: "Studi Independen — Kampus Merdeka", link: null },
  { type: "Training", image: "img/IL.png", title: "Web Development & UI/UX Design — Infinite Learning", link: "https://drive.google.com/file/d/1cBHuZyG6Dr6GvxUFryXOL4VILSmji5hd/view?usp=sharing" },
  { type: "Certification", image: "img/ic3.png", title: "Microsoft Office — Trust Training Partners", link: "https://drive.google.com/file/d/17a7r8lUPHjXJCbMqBkBkgq4ZU4KnovTN/view?usp=sharing" },
  {
    type: "Training",
    image: "img/uiuxmyskill.png",
    title: "UI/UX Research & Design Bootcamp — MySkill",
    link: "https://storage.googleapis.com/myskill-v2-certificates/bootcamp-7xZrY9cF4BaXvQwJV6D2/iM4zTVdr1mVGg2n3M7b8H0YL2wZ2-H7q7C0HIvjSHRacyEdwL.pdf",
  },
  { type: "Certification", image: "img/bnsp.png", title: "Junior Web Developer — BNSP", link: "https://drive.google.com/file/d/1ob-8sX9y4P_AIIJTKuTgNkK5CPE-6jMu/view?usp=sharing" },
  { type: "Internship", image: "img/magangdisty.png", title: "Web Developer Intern — PT Disty Teknologi Indonesia", link: "https://drive.google.com/file/d/1pzjxdyzTDw8iUsJ_y8LUZk2UI2x2gc53/view?usp=sharing" },
  { type: "Training", image: "img/codingcamp.png", title: "Coding Camp Software Engineering — RevoU", link: "https://drive.google.com/file/d/1PqqcrK0cYKVE8-0SxIUx6bksCo9bT03C/view" },
];

export const achievement = {
  category: "Academic Achievement",
  title: "Cum Laude",
  degree: "D3 Teknologi Informasi",
  institution: "Universitas Brawijaya",
  image: "img/CUMLAUDE UB.jpeg",
};

export const socials = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/nilafransisca/", icon: "linkedin", handle: "in/nilafransisca" },
  { name: "GitHub", url: "https://github.com/nilafransisca", icon: "github", handle: "@nilafransisca" },
  { name: "Instagram", url: "https://www.instagram.com/nilafrnssca", icon: "instagram" },
];
