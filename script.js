// member atas
const teamMembers = [
  { name: "Fadel Azhar M", role: "Innovation Architect", bio: "Informatika 2026 - H1D026007", github: "azhameer", placeholder: "azhameer", color: "#38624d", image: "assets/team/azhar1.jpg" },
  { name: "M.Abduh Arifin", role: "Research Strategist", bio: "Informatika 2026 - H1D026031", github: "abduharifin28-coder", placeholder: "abduharifin28-coder", color: "#5b6b50", image: "assets/team/arif1.jpg" },
  { name: "Amelia Zahro", role: "Literature Analyst", bio: "Informatika 2026 - H1D026001", github: "ameng-cell", placeholder: "ameng-cell", color: "#646d85", image: "assets/team/amel1.jpg" },
  { name: "Intan Rizkia J", role: "Strategic Reviewer", bio: "Informatika 2026 - H1D026037", github: "", placeholder: "cinnamon2278", color: "#786551", image: "assets/team/intan1.jpg" },
  { name: "Zakya Fiby Audya", role: "Research Synthesist", bio: "Informatika 2026 - H1D026045", github: "", placeholder: "username-anggota4", color: "#566b68", image: "assets/team/zakya1.jpg" }
];

// char atas
const characters = [
  { id: "bima", name: "Bima", gender: "Laki-laki", number: "01", type: "PENJELAJAH", role: "Penjelajah Hutan", trait: "Berani & teliti", description: "Petualang penuh rasa ingin tahu yang gemar menemukan jalur baru di Hutan Logika.", color: "#527a5d", image: "assets/characters/bima.svg" },
  { id: "arga", name: "Arga", gender: "Laki-laki", number: "02", type: "PEMETA", role: "Pembaca Peta", trait: "Strategis & tenang", description: "Pemetaan wilayah dan rute menjadi kekuatannya saat menghadapi tantangan belajar.", color: "#537a86", image: "assets/characters/arga.svg" },
  { id: "nara", name: "Nara", gender: "Perempuan", number: "03", type: "PENELITI", role: "Penjelajah Pengetahuan", trait: "Kritis & penasaran", description: "Selalu membawa catatan untuk memahami petunjuk dan mengurai teka-teki dalam quest.", color: "#a27f62", image: "assets/characters/nara.svg" },
  { id: "sora", name: "Sora", gender: "Perempuan", number: "04", type: "PENGAMAT", role: "Pengamat Alam", trait: "Cermat & kreatif", description: "Peka terhadap detail lingkungan dan senang mengamati berbagai cara menyelesaikan misi.", color: "#8e789e", image: "assets/characters/sora.svg" },
  { id: "kirana", name: "Kirana", gender: "Perempuan", number: "05", type: "PENEMU", role: "Pencari Kunci", trait: "Gigih & adaptif", description: "Tertarik dengan tantangan baru serta pantang menyerah sampai kunci terakhir ditemukan.", color: "#ad8053", image: "assets/characters/kirana.svg" }
];

// gagasan atas
const flowDetails = [
  { title: "Masuk ke Dunia Belajar", text: "Mahasiswa mengakses web pembelajaran dan memilih mata kuliah. Setiap mata kuliah dapat memiliki lingkungan dan rangkaian quest yang relevan dengan materinya." },
  { title: "Eksplorasi Peta 2D", text: "Mahasiswa bebas menjelajahi area yang tersedia pada peta semi-open world dua dimensi, menemukan lokasi misi, serta mempelajari materi yang terhubung dengan lingkungan game." },
  { title: "Pretest Berbasis Game Quest", text: "Asesmen awal dikemas menjadi quest dengan pertanyaan pemahaman dasar. Hasil jawaban menjadi indikator awal untuk memetakan tingkat penguasaan materi mahasiswa." },
  { title: "Rekomendasi Misi Adaptif", text: "Berdasarkan hasil pretest, sistem yang diusulkan akan merekomendasikan quest dengan tingkat kesulitan lebih sesuai. Performa pada misi berikutnya dapat menjadi masukan untuk rekomendasi selanjutnya." },
  { title: "Quest, Poin dan Pengumpulan Kunci", text: "Mahasiswa menyelesaikan kuis atau materi di tiap quest. Daftar quest bergeser ke tahap berikutnya, poin diperbarui, dan kunci diperoleh setelah misi memenuhi syarat penyelesaian." },
  { title: "Selesaikan atau Masuk Spectator", text: "Setelah semua quest dan kunci diselesaikan, mahasiswa dapat menuju pintu keluar atau, pada konsep pengembangan game sesungguhnya, mengamati aktivitas pemain lain melalui spectator mode." }
];

//beranda dan sistem
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const header = document.querySelector("#siteHeader");
const menuToggle = document.querySelector("#menuToggle");
const navLinks = document.querySelector("#navLinks");

function updateHeader() {
  header.classList.toggle("scrolled", window.scrollY > 30);
}
window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

menuToggle.addEventListener("click", () => {
  const opened = navLinks.classList.toggle("open");
  menuToggle.classList.toggle("is-open", opened);
  menuToggle.setAttribute("aria-expanded", String(opened));
  menuToggle.setAttribute("aria-label", opened ? "Tutup menu navigasi" : "Buka menu navigasi");
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Buka menu navigasi");
  });
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && navLinks.classList.contains("open")) {
    navLinks.classList.remove("open");
    menuToggle.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.focus();
  }
});

const sections = document.querySelectorAll("main > section[id]");
const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    document.querySelectorAll(".nav-link").forEach(link => {
      const isActive = link.getAttribute("href") === `#${entry.target.id}`;
      link.classList.toggle("active", isActive);
      if (isActive) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
  });
}, { rootMargin: "-24% 0px -64% 0px" });
sections.forEach(section => sectionObserver.observe(section));

