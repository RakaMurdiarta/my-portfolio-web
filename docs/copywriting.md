# Copywriting — Raka Murdiarta Portfolio (English)

Semua teks final untuk website. Bagian bertanda **[ISI]** perlu data asli dari Raka. Kata dalam *italic* = penekanan visual (warna `--ink`), sesuai gaya referensi.

---

## 0. Meta / SEO

- **Title tag:** Raka Murdiarta — Backend Developer
- **Meta description:** Raka Murdiarta is a backend developer who builds reliable APIs, clean data models, and systems that stay calm under load.
- **OG title:** Raka Murdiarta · Backend Developer
- **OG description:** APIs, databases, and the quiet infrastructure that keeps products running.

---

## 1. Navbar

- Logo (desktop, 2 baris): **Raka / Murdiarta**
- Logo (mobile): `raka.murdiarta`
- Menu: **About · Projects · Contacts**

---

## 2. Hero

- Headline (2 baris, zig-zag seperti referensi):
  - Baris 1 (kiri): **Backend**
  - Baris 2 (kanan): **Developer**
- Subheadline:
  > My goal is to build *reliable, well-structured systems* and *APIs that are a pleasure to consume* — so the product on top of them can move fast without breaking.
- Tombol utama: **Projects** →
- Status kecil (opsional, dot `--accent`): *Available for freelance & full-time roles*
- Pill sosial: **GitHub · LinkedIn · Telegram · Email** [ISI link]

> Carousel artikel di referensi **dihapus**. Hero cukup headline + subheadline + tombol + pill sosial.

---

## 3. About me

- Label: `... /About me ...`
- Intro:
  > Hi! I'm Raka, a *backend developer*. I've spent *[ISI] years* designing APIs, modeling data, and keeping services fast and dependable.
- Paragraf pendukung (opsional, di bawah intro):
  > I care about the parts users never see: clear database schemas, predictable APIs, sensible caching, and logs that actually help at 2 a.m. I like writing code the next developer can read without a guide.
- Caption di bawah kartu skill:
  > Some of my *favorite technologies, tools, and topics* that I work with

### Kartu skill (4 kartu, susunan sama dengan referensi)

Isi di bawah adalah **usulan** untuk backend developer — sesuaikan dengan stack asli.

| Kartu | Isi (Fira Code, dipisah ` / `) |
|---|---|
| **Languages & Frameworks** (kartu aktif/solid) | [ISI] mis. Go / Gin / Node.js / NestJS / PHP / Laravel / TypeScript |
| **Databases** | [ISI] mis. PostgreSQL / MySQL / Redis / MongoDB |
| **Architecture** | [ISI] mis. REST / gRPC / GraphQL / Microservices / Kafka / RabbitMQ |
| **DevOps** | [ISI] mis. Docker / Nginx / CI/CD / Linux / Kubernetes / Bash |

- Tombol ikon di samping kartu: GitHub ↗

---

## 4. Work

- Judul section: **Work**
- Tabel (kolom: Periode + durasi · Perusahaan · Role | Fokus):

| Periode | Durasi | Perusahaan | Role \| Fokus |
|---|---|---|---|
| [ISI] 2024 – | [ISI] | [ISI] | Backend Developer \| [ISI mis. Go & PostgreSQL] |
| [ISI] | [ISI] | [ISI] | Backend Developer \| [ISI] |
| [ISI] | [ISI] | [ISI] | [ISI] \| [ISI] |

- Footer tabel:
  > Work experience
  > *[ISI total, mis. 3 years 4 months]*

---

## 5. Projects

- Label: `... /Projects ...`
- Layout: showcase. Kiri daftar project (nama + klien, dikelompokkan Work / Freelance). Kanan satu kartu: bar atas (nomor `05 / 07` + tombol ← →), kanvas screenshot (browser + HP), lalu info: badge kategori, nama, tagline, tombol **Visit website ↗** (atau **Open app ↗** + catatan *Internal app · login required*), 3 poin highlight, dan tag. Di HP daftar jadi chip yang bisa digeser, dan kartu bisa di-swipe.
- Sumber teks: `src/data/site.ts` → `projects` (`client`, `summary` = tagline, `highlights` = 3 poin, `access` = catatan app internal).
- Screenshot: `public/images/projects/<slug>-desktop.webp` (1200×750) dan `<slug>-mobile.webp` (400×866). Project tanpa screenshot memakai ilustrasi.

### Work
| Project | Tagline |
|---|---|
| **e.id** (Baliola × PANDI) | A *digital identity wallet* by Baliola × PANDI: *verified once, trusted everywhere.* |
| **SMIS** (Internal TJS) | Manages *project workers*, from *attendance* to *opname* to *payment*. |
| **IPMS** (Internal TJS) | Plan, track, and report on *every project* in one place. |
| **SIA** (Internal TJS) | Every transaction *recorded, balanced, and reported*. |

### Freelance
| Project | Tagline |
|---|---|
| **Penida Tour Island** | Private island tours, *booked in one tap*. |
| **Rumah Sunat Permadi** | Helping parents *choose with confidence*, then book on WhatsApp. |
| **Umah Luwung** | Custom interiors, from *portfolio to free consultation*. |

---

## 6. Contacts / Footer

- Label: `... /Contacts ...`
- Nav footer: **Main · About · Projects**
- Kartu "Site":
  > Site
  > `Handcrafted by ME /`
  > `Designed by [ISI] /`
  > `Powered by [ISI mis. Astro / Next.js]`
- Nama besar (zig-zag):
  - **Raka**
  - **Murdiarta**
- Sub-label kecil di samping: *Backend developer*
- CTA opsional di atas nama:
  > Have a system that needs to be *fast, stable, and easy to maintain?* Let's talk.
- Pill kontak: **GitHub · LinkedIn · Email · Telegram · Instagram** [ISI link]
- Copyright: © 2026 Raka Murdiarta

---

## 7. Microcopy

| Tempat | Teks |
|---|---|
| Tombol hero | Projects |
| Link keluar | View on GitHub ↗ |
| Menu mobile buka / tutup | Menu / Close |
| Tooltip email | Copy email |
| Setelah email disalin | Copied! |
| Halaman 404 | `404 / endpoint not found` — Looks like this route doesn't exist. **Back to home** |
| Alt foto profil | Raka Murdiarta, backend developer |
