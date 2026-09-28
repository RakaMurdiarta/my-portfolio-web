# PRD — Website Portofolio Raka Murdiarta

| | |
|---|---|
| **Pemilik** | Raka Murdiarta — Backend Developer |
| **Tanggal** | 28 September 2026 |
| **Status** | Draft v1 |
| **Dokumen terkait** | `palette.md` (warna & tipografi), `copywriting.md` (semua teks) |

---

## 1. Latar belakang

Raka butuh website portofolio personal untuk menunjukkan keahlian backend, pengalaman kerja, project, dan cara menghubunginya. Desain mengacu pada referensi portofolio “Full-stack Developer” (layout editorial, tipografi monospace besar, kartu membulat, lingkaran garis dekoratif), dengan tiga perubahan utama:

1. **Palette diganti** dari hitam-putih menjadi *Fresh Mint* (terang, tanpa hitam).
2. **Positioning diubah** dari full-stack menjadi *backend developer*.
3. **Section Articles dihapus** karena belum ada artikel (termasuk carousel artikel di hero).

## 2. Tujuan

- Rekruter/klien paham dalam **< 10 detik** bahwa Raka adalah backend developer dan stack utamanya apa.
- Pengunjung bisa melihat project dan pengalaman kerja tanpa berpindah halaman.
- Pengunjung bisa menghubungi Raka dalam **1 klik** (email/LinkedIn/Telegram).

### Non-goal (v1)
- Blog/artikel, CMS, multi-bahasa, dark mode, halaman detail project terpisah.

## 3. Target pengguna

| Persona | Kebutuhan |
|---|---|
| Rekruter / HR tech | Cepat lihat role, lama pengalaman, stack, link LinkedIn/CV |
| Engineering lead | Lihat kedalaman teknis project, repo GitHub |
| Klien freelance | Lihat apa yang bisa dibangun, cara kontak |

## 4. Struktur halaman (single page)

Urutan section dan perubahan dari referensi:

| # | Section | Isi | Perubahan dari referensi |
|---|---|---|---|
| 1 | **Navbar** | Nama 2 baris, menu About · Projects · Contacts | Menu *Articles* dihapus; toggle bahasa dihapus (English saja) |
| 2 | **Hero** | Headline “Backend / Developer” zig-zag, subheadline, tombol Projects, pill sosial | Carousel artikel dihapus; opsional status *Available* |
| 3 | **About me** | Intro, 4 kartu skill backend, foto grayscale | Kategori skill disesuaikan backend |
| 4 | **Work** | Tabel riwayat kerja + total pengalaman | Sama; data diisi Raka |
| 5 | **Projects** | 3 project dengan kolase gambar, tag, deskripsi, tombol link | Sementara pakai isi referensi (Gostat, Kana Master, Anime Sentry) |
| 6 | **Contacts / Footer** | Nav footer, kartu “Site”, nama besar, pill kontak | Link *Articles* dihapus; tambah CTA singkat |

## 5. Kebutuhan fungsional

| ID | Kebutuhan | Prioritas |
|---|---|---|
| F-01 | Navigasi anchor dengan smooth scroll ke tiap section | Must |
| F-02 | Navbar mobile: hamburger → menu fullscreen, tutup setelah klik item | Must |
| F-03 | Kartu skill: satu kartu tampil “aktif” (solid `--ink`); hover kartu lain → fill `--soft` | Should |
| F-04 | Tabel Work: hover baris → fill `--ink`, teks `--bg` (seperti baris putih di referensi) | Must |
| F-05 | Total pengalaman kerja dihitung otomatis dari data periode kerja | Should |
| F-06 | Project: tag stack, deskripsi, tombol link eksternal (GitHub/Telegram/demo) buka tab baru | Must |
| F-07 | Pill kontak email → salin ke clipboard + toast “Copied!” | Should |
| F-08 | Konten (skill, work, project, link sosial) disimpan di satu file data (JSON/TS) agar mudah diganti tanpa sentuh layout | Must |
| F-09 | Animasi masuk ringan (fade/slide) saat section terlihat; hormati `prefers-reduced-motion` | Could |
| F-10 | Halaman 404 bertema “endpoint not found” | Could |

## 6. Kebutuhan desain

- Palette, token CSS, dan tipografi: lihat **`palette.md`**.
- Grid desktop max-width 1200px, frame halaman dengan radius besar (40px) seperti referensi.
- Lingkaran garis tipis dekoratif (`--line`, 1px) di belakang hero, About, dan Projects.
- Label section format `... /Nama ...` dengan Fira Code.
- Kolase gambar project: kartu radius 24px dengan potongan sudut berundak seperti referensi.
- Breakpoint: mobile < 640px, tablet 640–1024px, desktop > 1024px. Layout mobile mengikuti mockup mobile referensi (satu kolom, heading zig-zag tetap).

## 7. Kebutuhan non-fungsional

| Aspek | Target |
|---|---|
| Performa | Lighthouse Performance ≥ 90 mobile; LCP < 2.5s |
| Aksesibilitas | Kontras teks min. AA (sudah dicek di `palette.md`), fokus keyboard terlihat, alt text semua gambar |
| SEO | Title/meta/OG sesuai `copywriting.md`, satu `h1` |
| Gambar | WebP/AVIF, lazy-load di bawah fold |
| Hosting | Static hosting (mis. Vercel / Netlify / Cloudflare Pages) + custom domain |

## 8. Rekomendasi stack

Situs statis tanpa backend. Opsi: **Astro** (paling ringan untuk halaman statis) atau **Next.js static export** (seperti referensi). Keputusan final di tangan Raka.

## 9. Konten yang dibutuhkan dari Raka

| Item | Status |
|---|---|
| Lama pengalaman & riwayat kerja (periode, perusahaan, role, fokus stack) | Belum |
| Stack asli per kategori skill | Belum (ada usulan di `copywriting.md`) |
| Foto profil (akan dibuat grayscale) | Belum |
| Link GitHub, LinkedIn, Telegram, email, Instagram | Belum |
| Data 3 project asli + gambar/screenshot | Belum — sementara pakai referensi |
| Domain | Belum |

## 10. Rencana rilis

| Fase | Isi |
|---|---|
| v1 | Semua section di atas, konten placeholder project referensi |
| v1.1 | Ganti project dengan project asli Raka (template ada di `copywriting.md`) |
| v2 | Tambah kembali section Articles/Notes saat sudah ada tulisan; opsional toggle ID/EN |

## 11. Kriteria selesai

- Semua section tampil benar di mobile, tablet, desktop.
- Tidak ada warna hitam `#000`/`#121212` di seluruh halaman; semua warna dari token `palette.md`.
- Tidak ada link/menu ke Articles.
- Semua link eksternal berfungsi dan membuka tab baru.
- Lighthouse Performance ≥ 90, Accessibility ≥ 95.
