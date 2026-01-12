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

### Fitur Pendukung
1. **Carousel Hero Section** - Slider promo di homepage
2. **News/Blog Section** - Artikel terbaru seputar GAGA
3. **User Authentication** - Halaman login dan registrasi
4. **Promo Gallery** - Tampilan promosi khusus

### Fitur Interaktif
1. **Navbar Auto-hide** - Navbar menghilang saat scroll down
2. **Password Toggle** - Show/hide password di form login/register
3. **Store Status** - Indikator buka/tutup real-time
4. **Modal Product Detail** - Popup detail produk di halaman menu

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
