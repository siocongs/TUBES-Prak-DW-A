# ☕ Laporan Proyek Website Coffee Shop GAGA
> **Website statis minimalis untuk profil & store dengan fitur navigasi multi-halaman responsif.**

## 1. 📖 Identitas Proyek

### Nama Project
**GAGA Indonesia - Thailand Tea Experience**

### Deskripsi Singkat
Website GAGA Indonesia adalah platform e-commerce dan informasi untuk brand minuman Thai Tea terkemuka di Indonesia. Website ini menghadirkan pengalaman digital yang modern dan responsif untuk memperkenalkan produk, promosi, dan informasi outlet GAGA kepada pelanggan. Dengan konsep "Attitude in a Cup", website ini dirancang untuk menarik target pasar muda dengan tampilan yang bold, fun, dan interaktif.

## Pembagian Tugas Anggota Kelompok

| No | Nama Anggota | NPM | Bagian yang Dikerjakan | 
|----|-------------|-----------------------|-----------|
| 1  | Muhamad Bachtiar | 4524210141 | Developer & Designer Home, Menu, Store, Login, Register |
| 2  | Vina Aisya Hafiz | 4524210131 | Developer & Designer Contact / About, Promo |
| 3  | Lilis | 4524210051 | Developer & Designer News Page | 
| 4  | Muhammad Agis Irawan | 4524210056 | Developer & Contributor Page (Code Maintenance) |
| 5  | Satrio Bagaskoro | 4524210125 | Developer & Contributor Menu (Perbaikan Kode & Bug) | 

---

## 2. Teknologi

### Frontend Framework
- **Bootstrap 5.3.8** - Dipilih karena komponen UI yang lengkap, sistem grid responsif, dan mudah diintegrasikan
- **Vanilla CSS** - Untuk kustomisasi styling khusus sesuai brand identity

### JavaScript Library
- **Vanilla JavaScript** - Untuk interaktivitas dasar tanpa dependensi framework berat
- **Google Maps API** - Untuk fitur lokasi store (store.html)

### Tools Pengembangan
- **VS Code** - Editor utama
- **Git & GitHub** - Version control dan kolaborasi tim
- **Figma** - Untuk desain mockup dan wireframe

### Hosting
- **GitHub Pages** - Untuk deployment statis & performa cepat
- **Netlify** - Untuk deployment dengan sortlink

---

## 3. Daftar Fitur

### Fitur Utama
1. **Multi-page Navigation** - 8 halaman utama yang saling terhubung
   <img width="2840" height="254" alt="image" src="https://github.com/user-attachments/assets/5d04fb17-0a25-432a-b6aa-a91ccb3a275e" />
2. **Responsive Design** - Optimal di mobile, tablet, dan desktop

| Desktop (1440px) | Tablet/Pad (768px) | Mobile (375px) |
| :-: | :-: | :-: |
| <img src="https://github.com/user-attachments/assets/7814924e-4e07-473c-8670-1d668d546f10" alt="Desktop" width="400"> | <img src="https://github.com/user-attachments/assets/a8be5cec-f769-40b0-b680-d02bc5e340d1" alt="Tablet" width="260"> | <img src="https://github.com/user-attachments/assets/a6993959-865a-44ff-b6be-599f396be846" alt="Mobile" width="200"> |
| *Full layout dengan semua komponen* | *Layout grid menyesuaikan ukuran tablet* | *Tampilan mobile dengan menu hamburger* |
3. **Interactive Menu** - Filter kategori produk dengan modal detail

| Desktop | Tablet/Pad | Mobile |
| :-: | :-: | :-: |
| <img src="https://github.com/user-attachments/assets/8fb858ed-9cd3-41b8-9017-71aaed4027c0" alt="Desktop" width="400"> | <img src="https://github.com/user-attachments/assets/be22e431-e777-4582-b25e-38210ce9375b" alt="Tablet" width="260"> | <img src="https://github.com/user-attachments/assets/d5d27590-3dbd-47ef-abe6-a431a79d7a8e" alt="Mobile" width="200"> |
| *Sidebar kiri dengan grid 3 kolom* | *Grid 1 kolom untuk tablet* | *Filter kategori horizontal scroll* |

4. **Store Locator** - Peta interaktif dengan daftar outlet

| Desktop | Mobile |
| :-: | :-: |
| <img src="https://github.com/user-attachments/assets/7e322e4c-9700-44e8-8485-fe8656ba5820" alt="Desktop" width="650"> | <img src="https://github.com/user-attachments/assets/896ed717-b1a6-4d02-80a3-56de23d9523c" alt="Mobile" width="200"> |
| *Split view: list kiri, map kanan* | *Map di atas, list store di bawah* |

6. **Contact Form** - Formulir kontak dengan validasi
   <div align="center">
      <img width="700"  alt="Tangkapan Layar 2026-01-12 pukul 19 56 27" src="https://github.com/user-attachments/assets/82cb43e8-793c-4330-9f73-0fa6d3b48080" />
   </div>

### Fitur Pendukung
1. **Carousel Hero Section** - Slider promo di homepage
   <div align="center">
      <img width="700" alt="image" src="https://github.com/user-attachments/assets/96872c95-7ea4-420c-b40f-e2a04af7992e" />
   </div>
3. **News/Blog Section** - Artikel terbaru seputar GAGA
   <div align="center">
      <img width="700" alt="image" src="https://github.com/user-attachments/assets/9562baa6-379f-4a9a-9507-07aeaf03a41b" />
   </div>
5. **User Authentication** - Halaman login dan registrasi

| Login | Registrasi |
| :-: | :-: |
| <img width="400" alt="image" src="https://github.com/user-attachments/assets/9583dca1-431a-4ed0-ac98-c4b9f5945c85" /> | <img width="400" alt="image" src="https://github.com/user-attachments/assets/9599f3b7-8c4f-4523-b54f-129d43e51c35" /> |

7. **Promo Gallery** - Tampilan promosi khusus
   <div align="center">
      <img width="700" alt="image" src="https://github.com/user-attachments/assets/34cf0b9c-a976-49c2-a6b2-2da210c57bab" />
   </div>

### Fitur Interaktif
1. **Navbar Auto-hide** - Navbar menghilang saat scroll down
   <div align="center">
      <img width="700" alt="auto-hide-nav-gaga" src="https://github.com/user-attachments/assets/83a0aea3-713c-4206-b76a-68a12eb1c6ba" />
   </div>
3. **Password Toggle** - Show/hide password di form login/register
      <div align="center">
         <img width="400" alt="image" src="https://github.com/user-attachments/assets/e45121d8-24f8-423a-aba6-959941cd4722" />
         <img width="400" alt="image" src="https://github.com/user-attachments/assets/f3cb32e2-e5de-49d1-95ce-d4e4e350a27d" />
      </div>
5. **Store Status** - Indikator buka/tutup real-time
   <div align="center">
      <img width="200" alt="image" src="https://github.com/user-attachments/assets/d849b681-1148-4b49-bcc0-cbe0f6ecea02" />
   </div>
7. **Modal Product Detail** - Popup detail produk di halaman menu
   <div align="center">
      <img width="200" height="1700" alt="image" src="https://github.com/user-attachments/assets/5c6cbd17-909d-4124-8c2e-96047934a77e" />
   </div>

### Screenshoot Code
1. Beranda (index.html)
Halaman utama yang memperkenalkan brand GAGA Indonesia, menampilkan produk unggulan, promo, berita, dan mengarahkan pengunjung untuk memesan.
Isi Fitur:
- Hero Carousel – Menampilkan 3 slide produk terbaru (Mochi Taro, Signature Series, dll) dengan gambar menarik dan call-to-action
  <img width="2080" height="2686" alt="hero" src="https://github.com/user-attachments/assets/66d3244b-0712-4cff-a728-f9950e2083ef" />1
- About Section – Cerita singkat tentang GAGA sebagai #1 Authentic Thai Milk Tea dengan konsep "Attitude in a Cup"
  <img width="1772" height="1318" alt="hero" src="https://github.com/user-attachments/assets/04ddba07-15e7-43db-aee6-97661e929bd4" />
- Promo Section – 2 kartu promo dengan desain dark/light untuk menampilkan New Signature Series dan Limited Edition
  <img width="2234" height="1774" alt="promo" src="https://github.com/user-attachments/assets/597050b8-55ef-4c29-b6e6-b396cf55cbca" />
- Menu Recommendation – 3 produk rekomendasi dengan rating dan deskripsi
  <img width="2326" height="2002" alt="menu" src="https://github.com/user-attachments/assets/abfe6b2e-a1eb-4b09-a5c9-670e83db2d80" />
- News Section – 4 berita terbaru tentang kegiatan GAGA dengan tanggal dan gambar
  <img width="9900" height="2800" alt="news section" src="https://github.com/user-attachments/assets/5aa383bf-9c28-4322-8605-2d2da5934ede" />
- Fixed Navigation Bar – Menu navigasi lengkap dengan logo, fitur "Find a Store", Sign In, dan Join Now
- Top Bar – Bar kecil di atas navbar dengan pesan motivasi dan tombol "Start Order"
- Footer Komprehensif – Logo, informasi kantor, layanan perlindungan konsumen, dan media sosial
  <img width="1480" height="2534" alt="footer" src="https://github.com/user-attachments/assets/0cb92aa0-014b-44ba-a27e-433d8b795e11" />

2. Menu (menu.html)
Halaman katalog produk lengkap dengan sistem filter kategori untuk memudahkan pencarian minuman.
Isi Fitur:
- Hero Banner – Gambar besar dengan judul "OUR MENU"
- Sidebar Kategori – 13 kategori produk: All, Recommended, Thai Tea, Milk Tea, Black Tea, Fresh Milk, Fresh Juice, Chocolate, Green Tea, Coffee, Frappe, Dessert, Signature
- Grid Produk – Display produk dengan gambar, nama, harga, dan tombol detail
- Product Modal – Popup detail produk yang muncul saat mengklik item (menampilkan gambar besar, nama, harga, deskripsi, dan tombol pesan)
- Filter JavaScript – Sistem filter real-time berdasarkan kategori
- Responsive Layout – Layout sidebar + grid yang responsif untuk desktop/mobile

3. Promo (promo.html)
Halaman khusus untuk menampilkan penawaran dan promo terbaru.
Isi Fitur:
- Promo Cards Layout – 3 kartu promo besar dengan desain alternating (dark/light)
- Promo Menu Section – Grid 3 produk yang sedang promo dengan rating dan deskripsi
- Visual Konten – Gambar produk yang menarik dengan teks promo jelas
- Call-to-Action – Tombol "Explore Menu" dan "See Promo" yang mengarah ke halaman terkait

4. Berita (news.html)
Halaman blog/news untuk update terbaru tentang GAGA.
Isi Fitur:
- News Grid – 8 kartu berita dengan layout grid responsive
- Konten Berita – Setiap kartu berisi: gambar, tanggal, judul, deskripsi singkat, dan link "Baca selengkapnya"
- Topik Variatif – Berita tentang: komitmen keberlanjutan, pembukaan store baru, promo event, pertumbuhan bisnis
- Header Section – Judul halaman dan deskripsi singkat

5. Kontak (contact.html)
Halaman kontak dan tentang perusahaan.
Isi Fitur:
- About Section – 2 blok cerita: "Our Story" (sejarah brand) dan "About our Products" (sertifikasi halal)
- Contact Hero – Header dengan judul dan tab (Pertanyaan/Customer Service)

Contact Container – Layout 2 kolom:
- Kiri: Informasi kontak (telepon, email, alamat kantor)
- Kanan: Form kontak dengan field: Nama, Email, Telepon, Pesan, dan tombol Send
- Informasi Detail – Alamat lengkap kantor pusat dan nomor telepon resmi

6. Login (login.html)
Halaman autentikasi untuk member yang sudah terdaftar.
Isi Fitur:
- Login Form – Form sederhana dengan: Username/Email, Password (dengan toggle visibility)
- Remember Me – Checkbox "Keep me signed in"
- Forgot Links – Link untuk lupa username/password
- Join Rewards Section – Promo untuk bergabung dengan GAGA Rewards (exclusive promos, birthday treats)
- Password Toggle – Fitur show/hide password dengan icon eye

7. Registrasi (register.html)
Halaman pendaftaran member baru.
Isi Fitur:
Registration Form – Form 2 bagian:
- Personal Information (First name, Last name)
- Account Security (Email sebagai username, Password dengan requirements)
- Password Requirements – Petunjuk panjang dan karakteristik password
- Password Toggle – Fitur show/hide password
- Clean Layout – Form dengan shadow dan rounded corners untuk UX yang baik

8. Toko (store.html)
Halaman pencarian lokasi toko GAGA.
Isi Fitur:
- Dual Mode – Tab Pickup vs Delivery

Pickup Mode:
- Search box untuk mencari toko
- Store list dengan detail lokasi
- Integration dengan Google Maps API
- Delivery Mode – Informasi delivery service dengan partner
- Interactive Map – Google Maps integration untuk menunjukkan lokasi toko
- Store Details – Informasi jam operasional dan alamat lengkap

Fitur Umum yang Konsisten di Semua Halaman:
- Navigation Bar – Konsisten dengan logo, menu utama, dan auth buttons
- Top Bar – "It's a great day for a cup of tea" + Start Order button
- Footer – Sama di semua halaman dengan: logo, office info, consumer protection, social media
- Responsive Design – Menggunakan Bootstrap 5 untuk mobile-friendly
- Brand Consistency – Warna, font, dan styling yang konsisten
- Icon Set – Menggunakan Bootstrap Icons untuk visual yang rapi

Teknologi yang Digunakan:
- Frontend: HTML5, CSS3, JavaScript
- Framework: Bootstrap 5.3.8
- Icons: Bootstrap Icons
- Maps: Google Maps API (untuk store locator)
- Structure: Assets terorganisir (css/, js/, img/)

Setiap halaman memiliki tujuan yang jelas dan mengarahkan pengunjung melalui customer journey: dari pengenalan brand → melihat produk → promo → informasi kontak → registrasi → pemesanan.
---

## 4. Struktur Halaman

```mermaid
flowchart TD
    A[Homepage] --> B[Menu]
    A --> C[Promo]
    A --> D[News]
    A --> E[Store Locator]
    A --> F[Contact Us]
    A --> G[Login]
    A --> H[Register]
    
    B --> B1[Product Modal]
    E --> E1[Google Maps Integration]
    F --> F1[Contact Form]
    G --> G1[Password Toggle]
```

### Deskripsi Halaman:
- **Homepage (index.html)**: Landing page dengan hero carousel, about section, promo, menu rekomendasi, dan news
- **Menu (menu.html)**: Katalog produk dengan filter kategori dan modal detail
- **Promo (promo.html)**: Gallery promosi dan menu spesial
- **News (news.html)**: Artikel dan berita terbaru
- **Store Locator (store.html)**: Peta dan daftar outlet dengan status real-time
- **Contact Us (contact.html)**: Form kontak dan informasi perusahaan
- **Login/Register**: Sistem autentikasi pengguna

---

## 5. Bukti Responsivitas & Tampilan

### Homepage (index.html)
| Desktop (1440px) | Tablet/Pad (768px) | Mobile (375px) |
| :-: | :-: | :-: |
| <img src="https://github.com/user-attachments/assets/7814924e-4e07-473c-8670-1d668d546f10" alt="Desktop" width="400"> | <img src="https://github.com/user-attachments/assets/a8be5cec-f769-40b0-b680-d02bc5e340d1" alt="Tablet" width="260"> | <img src="https://github.com/user-attachments/assets/a6993959-865a-44ff-b6be-599f396be846" alt="Mobile" width="200"> |
| *Full layout dengan semua komponen* | *Layout grid menyesuaikan ukuran tablet* | *Tampilan mobile dengan menu hamburger* |

### Menu Page (menu.html)
| Desktop | Tablet/Pad | Mobile |
| :-: | :-: | :-: |
| <img src="https://github.com/user-attachments/assets/8fb858ed-9cd3-41b8-9017-71aaed4027c0" alt="Desktop" width="400"> | <img src="https://github.com/user-attachments/assets/be22e431-e777-4582-b25e-38210ce9375b" alt="Tablet" width="260"> | <img src="https://github.com/user-attachments/assets/d5d27590-3dbd-47ef-abe6-a431a79d7a8e" alt="Mobile" width="200"> |
| *Sidebar kiri dengan grid 3 kolom* | *Grid 1 kolom untuk tablet* | *Filter kategori horizontal scroll* |

### Store Locator (store.html)
| Desktop | Mobile |
| :-: | :-: |
| <img src="https://github.com/user-attachments/assets/7e322e4c-9700-44e8-8485-fe8656ba5820" alt="Desktop" width="650"> | <img src="https://github.com/user-attachments/assets/896ed717-b1a6-4d02-80a3-56de23d9523c" alt="Mobile" width="200"> |
| *Split view: list kiri, map kanan* | *Map di atas, list store di bawah* |

---

## 6. Bukti Aksesibilitas

### Lighthouse Audit Results
#### Performance Score
| Desktop: 97/100 | Mobile: 67/100 |
| :-: | :-: |
| <img src="https://github.com/user-attachments/assets/cd0218c5-fd6e-46bd-87eb-6e17a4d93631" alt="desktop" width="500"> | <img src="https://github.com/user-attachments/assets/ddcd4a8a-aaa5-4b6f-a8f0-2f6e47ad432f" alt="mobile" width="500"> |

#### Accessibility Score
| Score: 72/100 |
| :-: |
| <img src="https://github.com/user-attachments/assets/ff1c27c5-e9a6-4d5e-b938-17fe6b3d2062" alt="desktop" width="1080"> |

### Color Contrast Check
<div align="center">
  <img width="800" alt="Image" src="https://github.com/user-attachments/assets/2fe52e20-ea19-42e2-b9fa-f00916f364fc" />
  <br>
  <em>Rasio kontras teks-latar memenuhi WCAG AA</em>
</div>

### Keyboard Navigation Test
<div align="center">
  <img width="500" alt="Image" src="https://github.com/user-attachments/assets/a21e3c98-34f2-4cef-9635-a7cba4132448" />
  <br>
  <em>Navigasi & Elemen bisa diakses menggunakan Keyboard (Tab index)</em>
</div>

### Screen Reader Compatibility
<div align="center">
  <img width="600" alt="Image" src="https://github.com/user-attachments/assets/c50fb612-a062-4cd7-a325-516af0e7e932" />
  <br>
  <em>Struktur HTML semantic mendukung screen reader</em>
</div>
---

**Catatan Tambahan:**
- Website telah diuji di Chrome, Firefox, dan Safari
- Semua form memiliki basic validation
- Images dioptimalkan untuk loading cepat
- Kode telah diorganisir dengan struktur folder yang jelas

### Live Demo
| Platform | Link | Status |
| :--- | :--- | :---: |
| **GitHub Pages** | <a href="https://siocongs.github.io/TUBES-Prak-DW-A/"><img src="https://img.shields.io/badge/Visit-GitHub_Pages-black?style=for-the-badge&logo=github&logoColor=white" height="30"/></a> | 🟢 |
| **Netlify** | <a href="https://gagaindo.netlify.app/"><img src="https://img.shields.io/badge/Visit-Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white" height="30"/></a> | 🟢 |

---

**Lampiran:**
- [Wireframe desain awal](https://www.figma.com/design/ngEfFo1N9C4NtvvaK0fpOF/WIREFRAME-PRAK-DW?node-id=0-1&t=EgSVGV8jri49VTyx-1)
- [Assets source (logo, gambar produk, screenshot)](https://github.com/siocongs/TUBES-Prak-DW-A/tree/main/assets)
- Testing checklist
- Deployment configuration
