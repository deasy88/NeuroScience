.. _upsidedownlabs_contribute:

Berkontribusi pada Dokumentasi
#############################

Selamat datang di panduan kontribusi dokumentasi Upside Down Labs! Panduan ini dirancang untuk semua orang - baik Anda benar-benar baru dalam pemrograman atau pengembang berpengalaman. Kami akan memandu Anda melalui setiap langkah dengan penjelasan yang jelas dan membantu Anda memecahkan masalah umum yang mungkin Anda temui.

🏫 Apa yang Akan Anda Pelajari
=======================

- Cara mengatur komputer Anda untuk berkontribusi
- Cara membuat perubahan pada dokumentasi
- Cara mengirimkan kontribusi Anda
- Cara memecahkan masalah umum yang mungkin Anda temui

📃 Prasyarat (Yang Anda Butuhkan Sebelum Memulai)
====================================================
Sebelum kita mulai, Anda perlu menginstal beberapa alat di komputer Anda. Jangan khawatir - kami akan menjelaskan apa yang dilakukan masing-masing dan cara menginstalnya.

1. **Python - Bahasa Pemrograman**

   - Kunjungi: https://www.python.org/downloads/
   - Klik tombol kuning besar "Download Python"
   - Jalankan file yang diunduh
   - Klik "Install Now"

   .. important:: 
      Centang kotak yang bertuliskan "Add Python to PATH" selama instalasi

   - Cara memverifikasi itu berhasil:
      * Buka Command Prompt (Windows) atau Terminal (Mac/Linux)
  
      * Ketik
  
      .. code-block:: bash
         
         python --version

      * Anda harus melihat sesuatu seperti "**Python 3.11.x**"

2. **Git - Sistem Kontrol Versi**

   - Kunjungi: https://git-scm.com/downloads
   - Unduh versi untuk sistem operasi Anda
   - Jalankan installer dengan pengaturan default
   - Saat ditanya tentang "Adjusting your PATH environment," pilih "Git from the command line and also from 3rd-party software"

   - Cara memverifikasi itu berhasil:
      * Buka Command Prompt atau Terminal
      * Ketik
  
      .. code-block:: bash
         
        git --version

      * Anda harus melihat sesuatu seperti "**git version 2.x.x**"

3. **Akun GitHub - Ruang Kerja Online Anda**

   - Cara membuat akun:
      - Kunjungi: https://github.com/signup
      - Klik "Sign up"
      - Pilih nama pengguna (ini akan publik)
      - Gunakan alamat email Anda
      - Buat kata sandi yang kuat
      - Verifikasi akun Anda melalui email

4. **VSCode (Visual Studio Code)**
   
   .. dropdown:: Microsoft Store (Recommended for Windows)
      :open:

      1. **Open Microsoft Store**
   
         - Click the ``Windows Start`` button
         - Type "Microsoft Store" and press Enter
         - Or click the Microsoft Store icon in your taskbar

      2. **Search for Visual Studio Code**
   
         - Click the search box at the top
         - Type "Visual Studio Code"
         - Press Enter

      3. **Install VS Code**
   
         - Click on "Visual Studio Code" (published by Microsoft)
         - Click the "Get" or "Install" button
         - Wait for the download and installation to complete (usually 2-5 minutes)

      4. **Launch VS Code**
   
         - Click "Launch" when installation is complete
         - Or find "Visual Studio Code" in your Start menu

   .. dropdown:: Direct Download (For All Platforms)

      Visit Visual Studio Code Website: https://code.visualstudio.com/download

   To learn about VSCode and its setup visit: https://code.visualstudio.com/docs


🛠️ Langkah Setup (Mempersiapkan Semuanya)
===============================================

Sekarang Anda telah menginstal alat-alat tersebut, mari kita atur ruang kerja Anda. Ikuti langkah-langkah ini persis seperti yang ditulis.

.. tab-set::

   .. tab-item:: Windows

      **Langkah 1: Fork Repository (Buat Salinan Anda Sendiri)**

      Pikirkan "forking" seperti membuat fotokopi buku sehingga Anda dapat menulis catatan di dalamnya tanpa mempengaruhi yang asli.

      - **Login ke akun GitHub Anda** : https://github.com/login menggunakan kredensial yang Anda buat sebelumnya.
      - Sekarang Anda telah login ke GitHub, Anda siap membuat salinan Anda sendiri dari proyek dokumentasi.
      - **Kunjungi repository resmi:** https://github.com/upsidedownlabs/docs.upsidedownlabs.tech
      - **Klik tombol Fork** di sudut kanan atas halaman
      - GitHub akan membuat salinan pribadi proyek di akun Anda
      - Anda sekarang memiliki salinan Anda sendiri di ``github.com/YOUR-USERNAME/docs.upsidedownlabs.tech``

      **Langkah 2: Clone Fork Anda (Unduh di Komputer Anda)**

      Sekarang kami akan mengunduh salinan fork Anda ke komputer Anda sehingga Anda dapat mengerjakannya, menggunakan Git di komputer Anda, ikuti instruksi langkah demi langkah yang diberikan:
      Anda juga dapat mengikuti panduan detail `GitHub for cloning <https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository>`_.

      1. Navigasi ke tempat Anda ingin menyimpan proyek dengan membuka File Explorer ``(Windows + E)``.
      2. **Klik kanan di ruang kosong** di Documents atau folder pilihan Anda. Kami merekomendasikan menggunakan Folder Documents.
      3. Pilih **"Open in Terminal"** dari menu konteks dan jika Anda tidak melihat opsi ini, tahan Shift sambil klik kanan.
    
      4. Sekarang Anda memiliki terminal terbuka di direktori pilihan Anda, clone repo fork Anda dengan perintah yaitu Unduh fork Anda ke komputer Anda:
      
         .. code-block:: bash

            git clone https://github.com/YOUR-USERNAME/docs.upsidedownlabs.tech

         Ganti **YOUR-USERNAME** dengan nama pengguna GitHub Anda yang sebenarnya!
         
         **Apa yang terjadi:** Git akan membuat folder baru bernama ``docs.upsidedownlabs.tech`` di lokasi Anda saat ini.

      5. Setelah cloning selesai, masukkan perintah berikut, ini akan membuka Visual Studio Code dengan semua folder ``docs.upsidedownlabs.tech``:

         .. code-block:: bash

            code ./docs.upsidedownlabs.tech

        
      **Langkah 3: Membuat virtual environment (Ruang Kerja Terisolasi)**
      
      Virtual environment seperti membuat ruang kerja terpisah untuk proyek ini sehingga tidak mengganggu proyek Python lain di komputer Anda.
      
      Sekarang kami akan membuat dan mengaktifkan virtual environment menggunakan terminal terintegrasi VS Code:

      6. Di terminal VS Code, buat virtual environment:

         .. code-block:: bash

            py -m venv .venv
            
      7. Aktifkan virtual environment:

         .. code-block:: bash

            .venv\Scripts\activate
         
      .. dropdown:: Pemecahan Masalah
         :icon: alert
    
         Anda mungkin mendapatkan kesalahan kebijakan eksekusi jika skrip dibatasi. 
         Untuk memperbaikinya:

            1. Tutup Command Prompt Anda saat ini.
            2. Jalankan Windows PowerShell atau Command Prompt sebagai "Run as Administrator".
            3. Jalankan perintah ini:
               
               .. code-block:: bash
                  
                  Set-ExecutionPolicy Unrestricted -Scope Process

            4. Kemudian ketik **Y** dan tekan Enter.
            5. Navigasi kembali ke folder proyek (docs.upsidedownlabs.tech) dan tempel jalur file folder:
               
               .. code-block:: bash

                  cd <FILE-PATH>

            6. Coba aktifkan lagi:
               
               .. code-block:: bash

                  .venv\Scripts\activate
         
         **Cara tahu itu berhasil:** Anda harus melihat (.venv) di awal baris command prompt Anda.

      **Langkah 4: Install Dependencies (Alat yang Diperlukan)**
      
      Dependencies seperti bahan untuk resep - sistem dokumentasi membutuhkan alat spesifik untuk bekerja.

      .. code-block:: bash

         pip install -r requirements.txt
      
      Apa yang dilakukan ini: Mengunduh dan menginstal semua alat yang diperlukan untuk membangun dokumentasi.
      
      .. dropdown:: Pemecahan Masalah
         :icon: alert

         Jika Anda mendapatkan kesalahan:
         Coba ini sebagai gantinya:

         .. code-block:: bash
            
            python -m pip install -r requirements.txt

      **Langkah 5: Bangun dan Pratinjau Dokumentasi**

      Sekarang mari kita lihat situs web dokumentasi berjalan di komputer Anda!

      8.  Install Python dari situs web resmi jika belum diinstal.
      9.  Bangun dokumentasi:

      .. code-block:: bash
         
         sphinx-autobuild . .build
      
      **Apa yang harus Anda lihat:**

      - Perintah akan menampilkan beberapa teks dan kemudian mengatakan sesuatu seperti "Serving on http://127.0.0.1:8000"
      - Buka browser web Anda dan pergi ke http://127.0.0.1:8000
      - Anda harus melihat situs web dokumentasi Upside Down Labs!

      .. note::

         - Jalankan perintah ini jika pembaruan terbaru tidak terlihat, ini akan membersihkan memori cache dan membangun ulang dokumentasi.
         
         .. code-block:: bash

            .\make.bat clean
         
         - **Stop live server**: Di terminal VSCode, tekan ``Ctrl+C``.
         
         - Jika perintah di atas tidak berhasil membersihkan cache gunakan; **Remove build directory** di terminal VSCode:

         .. code-block:: bash

            rmdir /s/q .build


   .. tab-item:: Linux

      Untuk dilakukan.


✏️ Membuat Perubahan (Bagian Yang Menyenangkan!)
===================================

Sekarang Anda siap berkontribusi! Berikut cara membuat perubahan pada dokumentasi.

Memahami Struktur File
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Dokumentasi ditulis dalam file dengan ekstensi .rst (reStructuredText). Pikirkan ini seperti dokumen Word, tetapi dengan kode pemformatan khusus.

**Folder umum yang akan Anda kerjakan:**

- guides/ - Panduan tutorial dan how-to
- hardware/ - Dokumentasi hardware
- software/ - Dokumentasi software
- index.rst - Halaman utama


1. Cari file ``.rst`` di repository yang ingin Anda edit menggunakan VSCode Explorer atau browsing di komputer Anda.
2. Di VSCode atau jika Anda menggunakan editor teks lain pilihan Anda buka file.
3. Buat perubahan yang diinginkan yaitu kontribusi pada dokumentasi. 
4. Simpan file.
5. Periksa browser Anda (berjalan sebagai server lokal di http://127.0.0.1:8000)- perubahan harus muncul secara otomatis!

💾 Mengirimkan Perubahan Anda (Berbagi Pekerjaan Anda)
===============================================

Setelah Anda puas dengan perubahan Anda, berikut cara mengirimkannya ke UpsideDown Labs, ada dua cara:

.. tab-set::

   .. tab-item:: Menggunakan Command Line

      **Langkah 1: Simpan Perubahan Anda ke Git**

      - Periksa file apa yang Anda ubah:

      .. code-block:: bash

         git status

      - Tambahkan perubahan Anda:

      .. code-block:: bash

         git add .

      - Commit perubahan Anda dengan pesan (Tulis deskripsi singkat tentang apa yang Anda ubah):

      .. code-block:: bash

         git commit -m "Improve installation instructions for beginners"



      **Langkah 2: Unggah ke GitHub**

      .. code-block:: bash
         
         git push origin main

      **Langkah 3: Buat Pull Request**

      - Pergi ke fork Anda di GitHub (github.com/YOUR-USERNAME/docs.upsidedownlabs.tech)
      - Klik "Compare & pull request" (tombol ini muncul setelah Anda push perubahan)
      - Tulis judul dan deskripsi yang menjelaskan apa yang Anda ubah dan mengapa
      - Klik "Create pull request"
   
   .. tab-item:: Menggunakan GUI

      **Langkah untuk Commit dan Push menggunakan VS Code GUI**

      Setelah Anda membuat semua perubahan dan kontribusi pada dokumentasi **Simpan perubahan Anda ``Ctrl + S``**.

      **Langkah 1: Buka panel Source Control**
      
      - Klik ikon Source Control di sidebar kiri (terlihat seperti ikon cabang) atau tekan ``Ctrl + Shift + G``.

      **Langkah 2: Stage perubahan Anda**
      
      - Anda akan melihat daftar file yang diubah.
      - Arahkan kursor ke file dan klik ikon plus (+) untuk stage atau klik **"Stage All Changes"** di atas.

      **Langkah 3: Tulis pesan commit**
      - Ketik pesan di kotak di atas yang bertuliskan **"Message"** (tekan ``Ctrl+Enter`` untuk commit pada 'main'). Ini wajib menulis pesan.  
         
      Contoh:

      .. code-block:: bash

         Update README and fix typos

      **Langkah 4: Commit perubahan Anda**

      - Tekan ``Ctrl + Enter`` ATAU klik ikon centang ✅ di atas panel Source Control.

      **Langkah 5: Push ke GitHub**
      
      - Di status bar bawah atau kanan atas Source Control, klik **"… menu" (More Actions) > "Push"** atau klik ikon **"Synchronize Changes"** 🔄 di kiri bawah.

      **VS Code akan push commit Anda ke GitHub.**

      **Untuk Pertama Kali? Anda Mungkin Diminta untuk Sign In**
      
      Jika ini pertama kali Anda menggunakan GitHub dengan VS Code, itu mungkin meminta Anda untuk:

      - Sign in dengan GitHub
      - Otorisasi VS Code untuk mengakses repo Anda
      - Konfigurasi nama pengguna/email Git (itu mungkin memandu Anda melalui itu).



**Apa yang terjadi selanjutnya:** Tim Upside Down Labs akan meninjau perubahan Anda dan menerimanya atau meminta modifikasi.


💡 Tips untuk Kontribusi yang Baik
=================================

1. Tulis seperti Anda menjelaskan kepada teman - gunakan bahasa yang sederhana dan jelas
2. Pecah paragraf panjang - paragraf yang lebih pendek lebih mudah dibaca
3. Gunakan contoh - tunjukkan jangan hanya katakan
4. Uji instruksi Anda - pastikan itu benar-benar bekerja
5. Periksa kesalahan ketik - baca melalui perubahan Anda sebelum mengirimkan

Untuk Visual Studio Code: Jadikan pengalaman editing Anda bahkan lebih baik
=====================================================================

1. **Buka panel Extensions** atau ``Ctrl+Shift+X``
2. **Cari dan install extensions ini:**
   
   - **"reStructuredText"** - Menambahkan syntax highlighting dan preview
   - **"Python"** - Dukungan Python yang lebih baik
   - **"GitLens"** - Integrasi Git yang ditingkatkan
   - **"Live Preview"** - Preview file HTML langsung di VS Code