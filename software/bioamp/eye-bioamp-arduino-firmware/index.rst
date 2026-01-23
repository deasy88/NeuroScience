.. _eye-bioamp-arduino-firmware:

Firmware Arduino BioAmp Mata (EOG)
#####################################

Apa itu Elektrookulografi (EOG)?
**************************************

Elektrookulografi (EOG) `[1] <https://eyewiki.org/Electrooculogram>`_  adalah teknik untuk mengukur potensi corneo-retinal yang ada antara bagian depan dan belakang mata manusia. Sinyal yang dihasilkan disebut elektrookulogram. 
Aplikasi utama adalah dalam diagnosis oftalmologi dan dalam merekam gerakan mata. Untuk mengukur gerakan mata, pasangan elektroda biasanya ditempatkan di atas dan di bawah mata atau ke kiri dan kanan mata. 
Jika mata bergerak dari posisi tengah menuju salah satu dari dua elektroda, 
elektroda ini "melihat" sisi positif retina dan elektroda yang berlawanan "melihat"
sisi negatif retina. Akibatnya, perbedaan potensi terjadi antara elektroda. 
Dengan asumsi potensi istirahat konstan, potensi yang direkam adalah ukuran posisi mata.


Untuk mengetahui lebih lanjut tentang EOG `kunjungi di sini <https://en.wikipedia.org/wiki/Electrooculography>`_.

Untuk siapa ini?
====================

Siapa saja yang menggunakan Hardware BioAmp untuk pertama kali — baik Anda siswa, hobiis, pendidik, atau hanya penasaran. Tidak perlu pengalaman!

👉 Untuk mempelajari Hardware BioAmp kami lihat :ref:`halaman hardware <upsidedownlabs_hardware_home>`.

Panduan Pengaturan Langkah demi Langkah
***************************

Dengan hardware di tangan Anda, Anda hanya beberapa langkah lagi untuk membuka potensinya — mari siapkan perangkat lunaknya!

Langkah 1: Mengunduh Repository GitHub untuk hardware
======================================================

- Ini adalah kode yang dibutuhkan Arduino Anda untuk membaca sinyal Mata (EOG).
- Anda memiliki dua cara mudah untuk mendapatkan kode yang akan membantu Anda membaca sinyal EOG:

.. dropdown:: Cukup Unduh (direkomendasikan untuk pemula)
    :open:

    - Pergi ke halaman GitHub: `Eye BioAmp Arduino Firmware <https://github.com/upsidedownlabs/Eye-BioAmp-Arduino-Firmware>`_
    - Klik tombol "**Code**" hijau > Download ZIP
    - Ekstrak folder dan simpan di tempat yang mudah ditemukan.

.. dropdown:: Kloning menggunakan Git (untuk pengguna ahli)

      - Instal Git untuk OS Anda: https://git-scm.com/
      - Kloning repository GitHub ini menggunakan
      
        .. code-block:: bash
            
            git clone https://github.com/upsidedownlabs/Eye-BioAmp-Arduino-Firmware

Langkah 2: Aplikasi yang Diperlukan
===============================

Sebelum Anda mulai menggunakan kit, silakan unduh atau buka yang berikut: 

1. **Arduino IDE** 
   
   - Kami membutuhkan Arduino IDE untuk mengunggah kode ke papan Arduino Anda
   - Tautan untuk mengunduh IDE untuk OS Anda: https://www.arduino.cc/en/software

2. **Situs Web Chords**
   
   - Kami akan menggunakan Situs Web Chords untuk memvisualisasikan Sinyal Mata!
   - Buka situs web ini: `Chords Web <https://chords.upsidedownlabs.tech>`_

.. _eye-bioamp-arduino-firmware-connect-hardware:

Langkah 3: Hubungkan Hardware Anda
================================

1. Colokkan Hardware ke Arduino UNO Anda menggunakan kabel jumper.
2. Ikuti diagram wiring yang tepat dari :ref:`dokumentasi hardware <upsidedownlabs_hardware_home>` hardware yang Anda gunakan.
3. Hardware yang kompatibel dengan Firmware Eye BioAmp:
   
   - :ref:`Bioamp EXG Pill <bioamp-exg-pill>`

Ini seperti menyusun puzzle!

Langkah 4: Persiapan Kulit dan Penempatan Elektroda
====================================================

- **Menggunakan Elektroda Gel:**

1. **Siapkan kulit Anda**

   - Pilih area di mana Anda akan menempatkan elektroda.
   - Bersihkan kulit menggunakan **alkohol swab** atau **Nuprep Gel** untuk menghilangkan minyak dan sel mati — ini meningkatkan kejelasan sinyal.

   .. note::

      Butuh bantuan dengan persiapan kulit? Lihat panduan lengkap di sini: :ref:`Panduan Persiapan Kulit <skin-preparation>`

2. Untuk **EOG Vertikal**, pasang kabel ke elektroda, lalu pasang elektroda ke kulit (lihat diagram di bawah):
   
   - ``IN+`` (positif): Tempatkan tepat di bawah mata (di bawah pupil).
   - ``IN–`` (negatif): Tempatkan tepat di atas alis (sejajar dengan pupil).
   - ``REF`` (referensi): Pasang di area tulang dekat pipi atau di belakang telinga (seperti pada diagram).

3. Untuk **EOG Horizontal**, pasang kabel ke elektroda, lalu pasang elektroda ke kulit (lihat diagram di bawah):
   

   - ``IN+`` (positif): Tempatkan di pelipis kanan, tepat di luar alis kanan.
   - ``IN–`` (negatif): Tempatkan di pelipis kiri, tepat di luar alis kiri.
   - ``REF`` (referensi): Pasang di area tulang dekat pipi atau di belakang telinga (seperti pada diagram).
  
.. figure:: ../../../guides/usage-guides/skin-preparation/media/skin-prep-eog.png
    :align: center
    :alt: Penempatan EOG

    Penempatan EOG

.. _eye-bioamp-arduino-firmware-code-upload:

Langkah 5: Cara Mengunggah Kode ke Arduino
===========================================

1. Buka folder yang Anda unduh: **Eye-BioAmp-Arduino-Firmware**
2. Di dalamnya, Anda akan menemukan beberapa subfolder.
3. Pilih folder untuk eksperimen yang ingin Anda coba. (Untuk pemula: mulai dengan yang pertama dan lanjutkan langkah demi langkah melalui yang lain untuk pengalaman belajar yang lebih baik )
4. Di dalam folder itu, buka file **.ino** menggunakan **Arduino IDE**
   
- Sebagai contoh:

  - Untuk mencoba sinyal mentah: buka ``01_FixedSampling.ino``
  - Untuk mencoba sinyal yang difilter: buka ``02_EOGFilter.ino``

.. note::
    Anda akan menemukan semua eksperimen tercantum di bawah, masing-masing dengan :ref:`instruksi langkah demi langkah<eye-bioamp-arduino-firmware-exp-list>`. Gulir saja ke yang sedang Anda kerjakan untuk memulai pengaturan yang tepat.
   
5. Hubungkan Arduino Anda

   - Colokkan papan Arduino Anda ke port USB komputer Anda menggunakan kabel USB.
   - Tunggu sistem operasi menginstal driver USB yang diperlukan.

6. Di Arduino IDE:

   - Pergi ke **Tools > Board > Arduino UNO** pilih model papan Anda (misalnya, "Arduino Uno" atau "Arduino Nano" jika Anda wiring ke Nano)
   - Pergi ke **Tools > Port > [pilih port COM yang benar]**

7.	Verifikasi (Kompilasi) Sketch

        - Klik tombol **“✔️ Verify”** (atau tekan ``Ctrl + R``).
        - Tunggu **“Done compiling.”** Jika kesalahan muncul, periksa ulang Anda membuka file .ino yang benar.

8.  Klik tombol **✓** Upload (atau tekan ``Ctrl + U``) untuk mengirim kode ke papan Anda.  

    - IDE akan mengkompilasi lagi dan mengirim kode ke papan Anda.
    - LED onboard berlabel **“L”** mungkin berkedip selama upload. Ketika Anda melihat **“Done uploading”**, firmware baru sedang berjalan.


9. Buka Serial Monitor dan Serial Plotter (Opsional)

   - Untuk serial monitor dan plotter, kami merekomendasikan menggunakan `Chords Web <https://chords.upsidedownlabs.tech>`_. Namun, jika Anda sedang belajar mengembangkan, Anda mungkin juga menemukan opsi ini berguna.

   - Untuk Serial Monitor: Di IDE, klik **Tools → Serial Monitor** (atau tekan ``Ctrl + Shift + M``).
   - Pastikan baud rate di kanan bawah Serial Monitor disetel ke ``115200`` (atau apa pun yang ditentukan oleh sketch Serial.begin(115200);).
   - Anda harus mulai melihat baris angka. Itu adalah pembacaan Anda.


   - Untuk Serial Plotter: Di IDE, klik **Tools → Serial Plotter**.
   - Anda harus mulai melihat plotting grafik dan memvisualisasikan gelombang.

.. important::

    - Ingat untuk menutup **Serial Monitor & Serial Plotter** di **Arduino IDE** sebelum memulai Chords Visualizer.

.. _eye-bioamp-arduino-firmware-visualize-signals:

Langkah 6: Visualisasikan Sinyal Mata Anda!
======================================

1. Buka situs web ini: `Chords Web <https://chords.upsidedownlabs.tech>`_
2. Klik: Visualize Now → lalu pilih Serial Wizard.
3. Pilih port COM yang benar (sama dengan dari Arduino IDE).
4. Klik Connect.

.. important::

    - Selalu **putuskan pengisi daya laptop Anda** saat menguji. Mengapa? Pengisian dapat memperkenalkan noise 50 Hz yang memengaruhi sinyal.


🎉 Sekarang kedipkan mata Anda atau lihat ke samping — Anda akan melihat gelombang EOG real-time di layar!
    
.. _eye-bioamp-arduino-firmware-exp-list:

Mari jelajahi semua eksperimen langkah demi langkah
***********************************************
.. Experiment 1

.. dropdown:: 1. Sampling Tetap
    :open:
    
    **1. Tujuan & Gambaran Program**

    Program **Sampling Tetap** membaca sinyal listrik mentah dari mata (Elektrookulografi atau EOG) 
    menggunakan pin analog dan mencetaknya ke Serial Monitor. Ini berguna untuk memahami 
    seperti apa sinyal mata yang tidak difilter. Anggap saja seperti melihat "bahan mentah" sebelum memasak.

    **2. Cara Kerjanya**

    - ``analogRead(A0)`` membaca tegangan dari sensor Eye BioAmp.
    - ``Serial.println()`` mencetak nilai-nilai itu ke komputer.
    - Timer memastikan nilai dibaca pada laju stabil (misalnya, 500 kali per detik atau 500 Hz).

    Anda dapat melihat bagaimana kedipan atau gerakan mata mengubah gelombang.
    
    **3. Lakukan Hardware**
    
    - Lihat wiring sesuai instruksi yang diberikan di :ref:`Connect Your Hardware<eye-bioamp-arduino-firmware-connect-hardware>`

    **4. Unggah Firmware**

    - Untuk proyek ini, navigasi ke folder repository (Eye-BioAmp-Arduino-Firmware/1_FixedSampling) dan pilih ``1_FixedSampling.ino``.
    - Untuk mengunggah firmware, lihat :ref:`How to upload the Code to Arduino<eye-bioamp-arduino-firmware-code-upload>`
    
    **5. Visualisasikan sinyal Anda**

    - Ikuti langkah-langkah yang diberikan di :ref:`Visualize Your Eye Signals!<eye-bioamp-arduino-firmware-visualize-signals>` 
  
    **6. Menjalankan & Mengamati Hasil**

    - Aliran angka.
    - Melihat atas/bawah → perubahan tegangan mendadak.
    - Kedipan → lonjakan tajam.

    Lihat Demo Visualisasi di **YouTube**:

    .. youtube:: Txo7DjUr5Tk
    
    .. note::
        Untuk mempelajari lebih lanjut tentang proyek ini, kunjungi halaman Instructables kami: `Visualizing Electrical Impulses of Eyes (EOG) Using BioAmp EXG Pill <https://www.instructables.com/Visualizing-Electrical-Impulses-of-Eyes-EOG-Using-/>`_
    .. Experiment 2

.. dropdown:: 2. Filter EOG
 
    **1. Tujuan & Gambaran Program**

    Program **Filter EOG** membersihkan sinyal mentah dengan menghilangkan drift lambat (offset DC) dan noise frekuensi tinggi.
    Ini memberikan pandangan yang lebih akurat tentang gerakan mata yang disengaja.

    **2. Cara Kerjanya**

    - Menggunakan filter bandpass IIR (0.5 Hz sampai 19.5 Hz).
    - Menyimpan beberapa sampel terbaru dalam array (buffer melingkar).
    - Untuk setiap pembacaan baru, menghitung rata-rata tertimbang menggunakan koefisien filter.
    - Mencetak nilai yang difilter ke Serial Monitor.
    - Untuk mempelajari lebih lanjut tentang filter dan cara menghasilkan filter baru, kunjungi:  https://docs.scipy.org/doc/scipy/reference/generated/scipy.signal.butter.html

    **3. Lakukan Hardware**

    - Lihat wiring sesuai instruksi yang diberikan di :ref:`Connect Your Hardware<eye-bioamp-arduino-firmware-connect-hardware>`

    **4. Unggah Firmware**

    - Untuk proyek ini, pergi ke folder repository (Eye-BioAmp-Arduino-Firmware/2_EOGFilter) dan pilih ``2_EOGFilter.ino``.
    - Untuk mengunggah firmware, lihat :ref:`How to upload the Code to Arduino<eye-bioamp-arduino-firmware-code-upload>`
    
    **5. Visualisasikan sinyal Anda**

    - Ikuti langkah-langkah yang diberikan di :ref:`Visualize Your Eye Signals!<eye-bioamp-arduino-firmware-visualize-signals>` 

    **6. Menjalankan & Mengamati Hasil**

    - Sinyal yang lebih halus, lebih stabil.
    - Kedipan mata dan gerakan lebih mudah dideteksi secara visual.
.. Experiment 3

.. dropdown:: 3. Deteksi Kantuk

    Sketch **Deteksi Kantuk** membantu mendeteksi kantuk atau mengantuk dengan mengukur interval kedipan. 
    Jika seseorang tidak berkedip untuk waktu yang lama atau mata mereka tetap tertutup, sistem dapat 
    memberikan peringatan (misalnya, bunyi).
    
    - Ini terus membaca sinyal EOG.
    - Menghitung envelope sinyal (aktivitas puncak).
    - Jika envelope di atas threshold kedipan, dihitung sebagai kedipan.
    - Mengukur waktu antara kedipan.
    - Jika waktu melebihi batas yang ditetapkan → memicu buzzer.

    Untuk panduan detail, ikuti bersama tutorial **YouTube** untuk proyek ini:

    .. youtube:: h4F41mp4mWk
    
    .. note::
        Untuk mempelajari lebih lanjut tentang proyek ini, kunjungi halaman Instructables kami: `Drowsiness Detector by Detecting EOG Signals Using BioAmp EXG Pill <https://www.instructables.com/Drowsiness-Detector-by-Detecting-EOG-Signals-Using/>`_
.. Experiment 4

.. dropdown:: 4. Tangkap Foto EOG BLE

    Akan didokumentasikan.

.. dropdown:: 5. Deteksi Kedipan Mata

    Program **Deteksi Kedipan Mata** mendeteksi kedipan mata individu secara real-time dan mengaktifkan output, seperti buzzer atau LED. Bagus untuk membuat 
    antarmuka berbasis kedipan!
    
    Terus mengambil sampel gelombang EOG yang difilter dan menerapkan threshold dinamis + hysteresis untuk menangkap 
    firmware segera menandai "peristiwa kedipan" dan menggerakkan output digital yang dapat dikonfigurasi (LED, buzzer, relay 
    atau pesan serial). 
    
    Karena beroperasi secara real-time pada mikrokontroler, Anda mendapatkan latensi sub-50 ms dari 
    kedipan fisik ke pemicu output—sempurna untuk antarmuka berbasis kedipan responsif atau prototipe teknologi asistif.

    Untuk panduan detail, ikuti bersama tutorial **YouTube** untuk proyek ini:

    .. youtube:: PfEJVa3gv6E
    
    .. note::
        Untuk mempelajari lebih lanjut tentang proyek ini, kunjungi halaman Instructables kami: `Eye Blink Detection by Recording EOG Using BioAmp EXG Pill <https://www.instructables.com/Eye-Blink-Detection-by-Recording-EOG-Using-BioAmp-/>`_

.. dropdown:: 6. DinoGame EOG
 
    Program **DinoGame EOG** mengontrol Chrome Dino Game dengan kedipan mata Anda! 

    Mengubah kedipan Anda menjadi input permainan untuk "Dino Run" offline Chrome. 
    Arduino menjalankan algoritma deteksi kedipan yang sama seperti di atas, tetapi alih-alih LED onboard 
    ia mengirim kode sederhana melalui USB serial untuk setiap kedipan. 
    
    Skrip pendamping di PC Anda mendengarkan port COM dan mensintesis penekanan space-bar 
    setiap kali peristiwa kedipan tiba—memungkinkan Anda melompat kaktus dan menghindari pterodactyl hanya dengan mata. 
    Ini adalah demo menyenangkan bagaimana EOG dapat menggerakkan aplikasi penuh tanpa tangan sama sekali.

    Menggunakan komunikasi serial atau USB HID untuk mensimulasikan aksi lompat saat Anda berkedip.

    .. note::
    
        Untuk mempelajari proyek ini, kunjungi halaman Instructables kami untuk panduan detail: `Control Dino Game Using Eye Blinks (EOG) <https://www.instructables.com/Control-Dino-Game-Using-Eye-Blinks-EOG/>`_

    Lihat video **YouTube** kami, untuk tahu seperti apa:

    .. youtube:: Sw46RTjeLs4

.. dropdown:: 7. Kontrol Servo EOG


    Sketch **Kontrol Servo EOG** memetakan kedipan mata ke gerakan fisik—misalnya, mengontrol cakar servo dengan input mata.
    
    Memetakan kedipan individu (atau pola kedipan) ke gerakan servo presisi untuk aktuasi mekanik. 
    Peristiwa kedipan dideteksi persis seperti di sketch Deteksi Kedipan Mata, tetapi di sini setiap kedipan memicu sinyal kontrol 
    servo hobi (via library Servo Arduino) untuk bergerak ke sudut yang telah ditentukan. 

    Anda dapat mengkonfigurasi urutan kedipan tunggal/ganda untuk membuka dan menutup gripper, mengangguk kepala mainan, 
    atau menunjuk indikator—menunjukkan robotika sederhana tanpa tangan yang digerakkan sepenuhnya oleh gerakan mata Anda.

    .. note::
        Untuk mempelajari proyek ini, kunjungi halaman Instructables kami untuk panduan detail: `Control a Servo Claw Using Your Eye Blinks (EOG) <https://www.instructables.com/Control-a-Servo-Claw-Using-Your-Eye-Blinks-EOG/>`_

.. dropdown:: 8. Detektor Gerakan Mata Vertikal
 
    Firmware **Detektor Gerakan Mata Vertikal** mendeteksi **gerakan mata ke atas dan ke bawah** menggunakan sinyal EOG yang ditangkap oleh sensor **Eye-BioAmp**.
    Ini berguna untuk aplikasi di mana gestur mata vertikal dipetakan ke fungsi kontrol spesifik, seperti interaksi perangkat asistif atau antarmuka pengguna sederhana.

    Untuk panduan detail, ikuti bersama tutorial **YouTube** untuk proyek ini:

    .. youtube:: Zt7YWTnSAY0

    .. note::
    
        Untuk mempelajari proyek ini, kunjungi halaman Instructables kami untuk panduan detail: `Detecting UP and DOWN Movements of Eyes Using EOG <https://www.instructables.com/Tracking-UP-and-DOWN-Movements-of-Eyes-Using-EOG/>`_

✅ **Dan Itu saja!, Selamat telah membuat proyek neuroscience Anda menggunakan Hardware BioAmp.**
