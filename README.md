# Sentiment Analysis Website

Repository ini berisi proyek website untuk analisis sentimen pada berita. Proyek ini dibangun menggunakan **React**, **Vite**, **Tailwind CSS**, dan **React Router**. Fitur utama meliputi:
- **Halaman Home:** Menampilkan daftar berita dengan kartu (Card) yang memiliki tombol "Read More".
- **Halaman News Detail:** Menampilkan detail berita, analisis sentimen, dan analisis emosi.
- **Routing:** Menggunakan React Router untuk navigasi antar halaman.


## Deskripsi Proyek
Proyek ini bertujuan untuk menyediakan platform berita yang menampilkan analisis sentimen dan emosi dari masing-masing berita. Pengguna dapat mengklik tombol "Read More" pada masing-masing kartu berita untuk melihat detail berita secara lengkap.

## Persyaratan
Pastikan kamu sudah menginstall:
- [Node.js](https://nodejs.org/) (disarankan versi 14 ke atas)
- npm (sudah terinstall bersama Node.js)
- Git

## Instalasi
1. **Clone repository:**
   
    ```bash
   git clone https://github.com/mujadidfauzan/sentify.git

2. **Masuk ke folder proyek:**
    ```bash
   cd sentiment-analysis

3. **Install dependencies:**
    ```bash
   npm install

4. **Jalankan Proyek:**
    ```bash
   npm run dev
Buka browser dan akses http://localhost:5173 (default Vite) untuk melihat aplikasi.

# Panduan Kolaborasi pada Repository Sentify

Repository: [Sentify](https://github.com/mujadidfauzan/sentify)

## 1. Persiapan Awal

### a. Clone Repository
Jalankan perintah berikut untuk meng-clone repository:

```bash
git clone https://github.com/mujadidfauzan/sentify.git
cd sentify
```

### b. Buat Branch Baru
Sebelum memulai perubahan, buat branch baru agar tidak mengganggu branch utama:

```bash
git checkout -b nama-branch-anda
```

## 2. Menambahkan dan Mengupdate Kode

### a. Menambahkan Perubahan
Setelah melakukan perubahan pada kode, tambahkan file ke staging area:

```bash
git add .
```

### b. Commit Perubahan
Buat commit dengan pesan yang jelas:

```bash
git commit -m "Deskripsi perubahan yang dilakukan"
```

### c. Push ke Repository
Kirim perubahan ke GitHub dengan perintah berikut:

```bash
git push origin nama-branch-anda
```

## 3. Membuat Pull Request
1. Buka repository di GitHub.
2. Pilih tab **Pull Requests**.
3. Klik **New Pull Request**.
4. Pilih branch yang baru saja Anda buat.
5. Berikan deskripsi yang jelas mengenai perubahan yang dilakukan.
6. Klik **Create Pull Request**.

## 4. Menyinkronkan dengan Branch Utama
Sebelum memulai perubahan baru, pastikan branch Anda sudah up-to-date dengan `main`.

```bash
git checkout main
git pull origin main
git checkout nama-branch-anda
git merge main
```

## 5. Resolusi Konflik
Jika terjadi konflik saat merge, perbaiki konflik secara manual, lalu jalankan:

```bash
git add .
git commit -m "Menyelesaikan konflik"
git push origin nama-branch-anda
```

## 6. Konvensi Penulisan Kode
- Gunakan format penulisan yang sesuai dengan standar proyek.
- Pastikan kode bersih dan terdokumentasi.
- Gunakan nama variabel dan fungsi yang deskriptif.

## 7. Diskusi dan Kolaborasi
- Gunakan **Issues** di GitHub untuk mendiskusikan masalah atau fitur baru.
- Jika ada pertanyaan, gunakan fitur **Discussions** atau hubungi maintainer.

---

