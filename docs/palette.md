# Palette & Typography — Raka Murdiarta Portfolio

Arah: **Fresh Mint** — terang, bersih, sejuk. Struktur tetap mengikuti referensi (2 warna utama + 2 abu-abu pendukung), tapi hitam `#121212` diganti **deep teal** dan putih diganti **mint white**, ditambah satu aksen segar untuk titik fokus.

---

## 1. Warna inti

| Token | Hex | Peran | Pengganti di referensi |
|---|---|---|---|
| `--bg` **Mist** | `#F3F8F5` | Background halaman | `#121212` (hitam) |
| `--ink` **Deep Teal** | `#0E3B3A` | Heading, teks utama, tombol solid, baris aktif | `#F5F5F5` (putih) |
| `--muted` **Sage Gray** | `#4E6E69` | Body text sekunder, label, durasi kerja | `#A6A6A6` |
| `--line` **Frost** | `#CFE0DA` | Border kartu, divider tabel, lingkaran dekoratif | `#3D3D3D` |

## 2. Warna pendukung

| Token | Hex | Peran |
|---|---|---|
| `--surface` **Paper** | `#FFFFFF` | Kartu skill, kartu project |
| `--soft` **Mint Wash** | `#E3F1EB` | Hover kartu, background tag/pill |
| `--accent` **Fresh Mint** | `#3DDC97` | Titik fokus: dot status "Available", ikon panah, underline link, highlight baris Work saat hover |

> Aturan aksen: `--accent` **tidak boleh** dipakai sebagai warna teks di atas `--bg` (kontras cuma 1.65:1). Pakai sebagai *fill* dengan teks `--ink` di atasnya.

## 3. Kontras (WCAG)

| Kombinasi | Rasio | Status |
|---|---|---|
| `--ink` di `--bg` | 11.47 : 1 | AAA |
| `--bg` di `--ink` (tombol/baris aktif) | 11.47 : 1 | AAA |
| `--muted` di `--bg` | 5.20 : 1 | AA |
| `--muted` di `--surface` | 5.59 : 1 | AA |
| `--muted` di `--soft` | 4.80 : 1 | AA |
| `--ink` di `--accent` | 6.97 : 1 | AA (AAA untuk teks besar) |
| `--accent` di `--bg` | 1.65 : 1 | Dekoratif saja |

## 4. Pemetaan elemen (dari referensi)

| Elemen di referensi | Versi baru |
|---|---|
| Background hitam | `--bg` Mist |
| Heading besar putih (“Full-stack Developer”, “Work”) | `--ink` |
| Kartu skill aktif (putih solid) | `--ink` solid + teks `--bg` |
| Kartu skill biasa (outline abu) | `--surface` + border `--line` |
| Pill sosial media (outline) | border `--line`, hover fill `--soft` |
| Tombol “Projects” (putih solid) + bulatan panah | `--ink` solid, bulatan panah fill `--accent` |
| Baris Work yang di-hover (putih) | fill `--ink`, teks `--bg`, dot `--accent` di kiri |
| Lingkaran garis tipis dekoratif | stroke `--line` 1px |
| Foto hitam-putih | tetap grayscale, beri overlay tipis `--ink` 8% agar menyatu |

## 5. CSS token

```css
:root {
  --bg: #F3F8F5;
  --surface: #FFFFFF;
  --soft: #E3F1EB;
  --ink: #0E3B3A;
  --muted: #4E6E69;
  --line: #CFE0DA;
  --accent: #3DDC97;

  --radius-sm: 12px;   /* pill, tag */
  --radius-md: 24px;   /* kartu skill, kartu project */
  --radius-lg: 40px;   /* frame halaman */
}
```

## 6. Tipografi

Tetap memakai pasangan dari referensi — cocok untuk backend developer karena nuansa “kode”.

| Peran | Font | Weight | Ukuran (desktop / mobile) |
|---|---|---|---|
| Display (hero, judul section) | **Fira Code** | 600 | 96px / 44px |
| Section label (`... /About me ...`) | Fira Code | 500 | 14px / 12px |
| Stack list, tag, role di tabel Work | Fira Code | 400 | 14px / 12px |
| Body, deskripsi | **Open Sans** | 400 (+ italic untuk penekanan) | 18px / 15px |
| Tombol, nav | Open Sans | 400 italic | 14px / 13px |

Google Fonts: `Fira+Code:wght@400;500;600` dan `Open+Sans:ital,wght@0,400;0,600;1,400`.

Ciri khas yang dipertahankan: kata kunci dalam paragraf ditulis *italic* dengan warna `--ink`, sisa kalimat `--muted`.
