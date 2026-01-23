.. _heart-bioamp-arduino-firmware:

Firmware Arduino BioAmp Jantung (ECG)
#####################################

Apa itu Elektrokardiografi (ECG)?
**************************************

Elektrokardiografi `[1] <https://www.mayoclinic.org/tests-procedures/ekg/about/pac-20384983>`_ adalah proses 
menghasilkan elektrokardiogram (ECG atau EKG), rekaman aktivitas listrik jantung 
melalui siklus jantung berulang.
Ini adalah elektrogram jantung yang merupakan grafik tegangan versus waktu dari aktivitas listrik 
jantung menggunakan elektroda yang ditempatkan pada kulit. Elektroda ini mendeteksi perubahan listrik kecil yang 
merupakan konsekuensi dari depolarisasi otot jantung diikuti oleh repolarisasi selama 
setiap siklus jantung (detak jantung).

Untuk mengetahui lebih lanjut tentang ECG `kunjungi di sini <https://en.wikipedia.org/wiki/Electrocardiography>`_.

Untuk siapa ini?
===================

Siapa pun yang menggunakan Hardware BioAmp untuk pertama kali — baik Anda siswa, hobiis, pendidik atau hanya penasaran. Tidak perlu pengalaman!

👉 Untuk mempelajari Hardware BioAmp kami lihat :ref:`halaman hardware <upsidedownlabs_hardware_home>`.

Panduan Pengaturan Langkah demi Langkah
**************************

Dengan hardware di tangan Anda, Anda hanya beberapa langkah lagi untuk membuka potensinya — mari siapkan software!

Langkah 1: Mengunduh Repository GitHub untuk Hardware
===================================================


- Ini adalah kode yang dibutuhkan Arduino Anda untuk membaca sinyal Jantung (ECG).
- Anda memiliki dua cara mudah untuk mendapatkan kode yang akan membantu Anda membaca sinyal ECG Anda:

.. dropdown:: Cukup Unduh (direkomendasikan untuk pemula)
    :open:

    - Pergi ke halaman GitHub: `Heart BioAmp Arduino Firmware <https://github.com/upsidedownlabs/Heart-BioAmp-Arduino-Firmware>`_
    - Klik tombol hijau "**Code**" > Download ZIP
    - Ekstrak folder dan simpan di tempat yang mudah ditemukan.

.. dropdown:: Klon menggunakan Git (untuk pengguna ahli)

      - Instal Git untuk OS Anda: https://git-scm.com/
      - Klon repository GitHub ini menggunakan
      
        .. code-block:: bash
            
            git clone https://github.com/upsidedownlabs/Heart-BioAmp-Arduino-Firmware

Langkah 2: Aplikasi yang Diperlukan
================================

Sebelum mulai menggunakan kit, silakan unduh atau buka berikut: 

1. **Arduino IDE** 
   
   - Kami membutuhkan Arduino IDE untuk mengunggah kode ke board Arduino Anda
   - Link untuk mengunduh IDE untuk OS Anda: https://www.arduino.cc/en/software

2. **Situs Web Chords**
   
   - Kami akan menggunakan Situs Web Chords untuk memvisualisasikan Sinyal Jantung!
   - Buka situs web ini: `Chords Web <https://chords.upsidedownlabs.tech>`_


.. _heart-bioamp-arduino-firmware-connect-hardware:

Langkah 3: Hubungkan Hardware Anda
=================================

1. Hubungkan Hardware ke Arduino UNO Anda menggunakan jumper wires.
2. Ikuti diagram wiring yang tepat dari :ref:`dokumentasi hardware <upsidedownlabs_hardware_home>` hardware yang Anda gunakan.
3. Hardware yang kompatibel dengan Firmware BioAmp Jantung:
   
   - :ref:`Bioamp EXG Pill <bioamp-exg-pill>`
   - :ref:`Heart BioAmp Candy <heart-bioamp-candy>`

Ini seperti menyusun puzzle!

Langkah 4: Persiapan Kulit dan Penempatan Elektroda
==================================================

- **Menggunakan Elektroda Gel:**

1. **Siapkan kulit Anda**

   - Pilih area di mana Anda akan menempatkan elektroda.
   - Lap area dada menggunakan **swab alkohol** atau **Gel Nuprep** untuk menghilangkan minyak dan sel mati — ini meningkatkan kejelasan sinyal.

   .. note::

      Butuh bantuan dengan persiapan kulit? Lihat panduan lengkap di sini: :ref:`Panduan Persiapan Kulit <skin-preparation>`

2. Pasang kawat ke elektroda, lalu pasang elektroda ke kulit (lihat diagram di bawah):
   
   - ``IN+`` (positif): Sisi kiri dada, lebih dekat ke jantung
   - ``IN–`` (negatif): Sisi kiri dada, tepat di bawah tulang selangka, dekat dengan elektroda positif.
   - ``REF`` (referensi): Sisi kanan dada, jauh dari jantung (di atas tulang rusuk)

.. figure:: ../../../guides/usage-guides/skin-preparation/media/skin-prep-ecg.png
    :align: center
    :alt: Penempatan ECG

    Penempatan ECG


- **Menggunakan BioAmp Band:** Untuk BioAmp Band, lihat dokumentasi berikut: :ref:`Menggunakan BioAmp Bands <using-bioamp-bands>`

.. _heart-bioamp-arduino-firmware-code-upload:

Langkah 5: Cara Mengunggah Kode ke Arduino
===========================================

1. Buka folder yang Anda unduh: **Heart-BioAmp-Arduino-Firmware**
2. Di dalamnya, Anda akan menemukan beberapa subfolder.
3. Pilih folder untuk eksperimen yang ingin Anda coba. (Untuk pemula: mulai dengan yang pertama dan maju langkah demi langkah untuk pengalaman belajar yang lebih baik)
4. Di dalam folder itu, buka file **.ino** menggunakan **Arduino IDE**
   
- Sebagai contoh:

  - Untuk mencoba sinyal mentah: buka ``1_FixedSampling.ino``
  - Untuk mencoba sinyal terfilter: buka ``2_ECGFilter.ino``

.. note::
    Anda akan menemukan semua eksperimen tercantum di bawah, masing-masing dengan :ref:`instruksi langkah demi langkah <heart-bioamp-arduino-firmware-exp-list>`. Cukup gulir ke yang sedang Anda kerjakan untuk memulai dengan pengaturan yang benar.
   
5. Hubungkan Arduino Anda

   - Hubungkan board Arduino Anda ke port USB komputer Anda menggunakan kabel USB.
   - Tunggu sistem operasi menginstal driver USB yang diperlukan.

6. Di Arduino IDE:

   - Pergi ke **Tools > Board > Arduino UNO** pilih model board Anda (misalnya, "Arduino Uno" atau "Arduino Nano" jika Anda wiring ke Nano)
   - Pergi ke **Tools > Port > [pilih port COM yang benar]**

7.	Verifikasi (Kompilasi) Sketch

        - Klik tombol "**✔️ Verify**" (atau tekan ``Ctrl + R``).
        - Tunggu "**Done compiling.**" Jika muncul error, periksa ulang Anda membuka file .ino yang benar.

8.  Klik tombol **✓** Upload (atau tekan ``Ctrl + U``) untuk mengirim kode ke Arduino Anda.  

    - IDE akan mengkompilasi lagi dan kemudian mengirim kode ke board Anda.
    - LED onboard berlabel "**L**" mungkin berkedip selama upload. Saat Anda melihat "**Done uploading**", firmware baru sedang berjalan.


9. Buka Serial Monitor dan Serial Plotter (Opsional)

   - Untuk serial monitor dan plotter, kami merekomendasikan menggunakan `Chords Web <https://chords.upsidedownlabs.tech>`_. Namun, jika Anda belajar mengembangkan, Anda mungkin juga menemukan opsi ini berguna.

   - Untuk Serial Monitor: Di IDE, klik **Tools → Serial Monitor** (atau tekan ``Ctrl + Shift + M``).
   - Pastikan baud rate di kanan bawah Serial Monitor disetel ke ``115200`` (atau apa pun yang ditentukan oleh sketch Serial.begin(115200);).
   - Anda harus mulai melihat baris angka. Itu adalah pembacaan Anda.


   - Untuk Serial Plotter: Di IDE, klik **Tools → Serial Plotter**.
   - Anda harus mulai melihat plotting grafik dan memvisualisasikan gelombang.

.. important::

    - Ingat untuk menutup **Serial Monitor & Serial Plotter** di **Arduino IDE** sebelum memulai Chords Visualizer.

.. _heart-bioamp-arduino-firmware-visualize-signals:

Langkah 6: Visualisasikan Sinyal Jantung Anda!
======================================

1. Buka situs web ini: `Chords Web <https://chords.upsidedownlabs.tech>`_
2. Klik: Visualize Now → lalu pilih Serial Wizard.
3. Pilih port COM yang benar (sama dari Arduino IDE).
4. Klik Connect.

.. important::

    - Selalu **putuskan charger laptop** Anda saat testing. Mengapa? Charging dapat memperkenalkan noise 50 Hz yang mempengaruhi sinyal.


🎉 Sekarang duduklah, rileks, dan diam—atau ambil napas dalam—Anda akan melihat detak jantung Anda hidup sebagai gelombang ECG real-time yang menari di layar!

    
.. _heart-bioamp-arduino-firmware-exp-list:

Mari jelajahi semua eksperimen langkah demi langkah
***********************************************

.. Eksperimen 1

.. dropdown:: 1. Fixed Sampling
    :open:
    
    **1. Tujuan Program & Gambaran**

    Program **Fixed Sampling** membaca sinyal listrik mentah jantung Anda (ECG) 
    menggunakan pin analog dan mencetaknya ke Serial Monitor. Ini berguna untuk memahami 
    seperti apa sinyal jantung yang tidak terfilter. Anggap saja seperti melihat "bahan mentah" sebelum memasak.

    **2. Cara Kerjanya**

    - ``analogRead(A0)`` membaca tegangan dari sensor Heart BioAmp.
    - ``Serial.println()`` mencetak nilai-nilai itu ke komputer.
    - Timer memastikan nilai dibaca pada tingkat yang stabil.

    Anda dapat melihat bagaimana detak jantung mengubah waveform.
    
    **3. Lakukan Hardware**
    
    - Lihat wiring sesuai instruksi yang diberikan di :ref:`Connect Your Hardware<heart-bioamp-arduino-firmware-connect-hardware>`

    **4. Unggah Firmware**

    - Untuk proyek ini, navigasi ke folder repository (Heart-BioAmp-Arduino-Firmware/1_FixedSampling) dan pilih ``1_FixedSampling.ino``.
    - Untuk mengunggah firmware, lihat :ref:`How to upload the Code to Arduino<heart-bioamp-arduino-firmware-code-upload>`
    
    **5. Visualisasikan sinyal Anda**

    - Ikuti langkah-langkah yang diberikan di :ref:`Visualize Your Heart Signals! <heart-bioamp-arduino-firmware-visualize-signals>` 
  
    **6. Menjalankan & Mengamati Hasil**

    - Angka-angka melompat naik turun dengan cepat, mencerminkan setiap fluktuasi kecil dalam tegangan ECG mentah.
    - Baseline wander (drift lambat naik/turun selama detik).
    - High‑frequency spikes (noise otot, interferensi line).
    - Puncak yang sesuai dengan detak jantung terkubur dalam noise dan drift—ini murni sinyal tidak terfilter Anda.

.. dropdown:: 2. ECG Filter

    **1. Tujuan Program & Gambaran**

    Program **ECG Filter** melewatkan ECG mentah Anda melalui filter band-pass digital (0.5–44.5 Hz), 
    menghilangkan drift baseline dan noise frekuensi tinggi sehingga Anda melihat waveform jantung yang benar.

    ECG nyata memiliki tren wandering lambat (misalnya drift terkait pernapasan) dan 
    interferensi frekuensi tinggi (noise otot, hum powerline). Filter band-pass mengisolasi 
    band klinis yang relevan 0.5–44 Hz di mana kompleks QRS dan gelombang T hidup.

    **2. Cara Kerjanya**

    - Menggunakan filter IIR band-pass orde dan koefisien yang dipilih untuk memotong tajam di bawah 0.5 Hz dan di atas 44.5 Hz.
    - Menerapkan filter sampel-by-sampel di dalam loop fixed-rate yang sama.
    - Mencetak nilai terfilter ke Serial Monitor.
    - Untuk mempelajari lebih lanjut tentang filter dan cara menghasilkan filter baru, kunjungi:  https://docs.scipy.org/doc/scipy/reference/generated/scipy.signal.butter.html

    **3. Lakukan Hardware**

    - Lihat wiring sesuai instruksi yang diberikan di :ref:`Connect Your Hardware<heart-bioamp-arduino-firmware-connect-hardware>`

    **4. Unggah Firmware**

    - Untuk proyek ini, pergi ke folder repository (Heart-BioAmp-Arduino-Firmware/2_ECGFilter) dan pilih ``2_ECGFilter.ino``.
    - Untuk mengunggah firmware, lihat :ref:`How to upload the Code to Arduino<heart-bioamp-arduino-firmware-code-upload>`
    
    **5. Visualisasikan sinyal Anda**

    - Ikuti langkah-langkah yang diberikan di :ref:`Visualize Your Heart Signals! <heart-bioamp-arduino-firmware-visualize-signals>` 

    **6. Menjalankan & Mengamati Hasil**

    - Waveform halus, terpusat di mana kompleks QRS (spike utama jantung) dan gelombang T menonjol dengan jelas.
    - Anda harus dengan mudah melihat pola berulang satu spike besar (R‑peak) diikuti oleh gelombang yang lebih kecil (gelombang P dan T).
    - Jika Anda fleks atau batuk pelan, Anda mungkin melihat artefak transient—ini akan ditekan dibandingkan dengan sinyal tidak terfilter.

    Untuk panduan detail, kunjungi **Halaman Instructables** kami: `Record Publication Grade ECG at Your Home Using BioAmp EXG Pill <https://www.instructables.com/Record-Publication-Grade-ECG-at-Your-Home-Using-Bi/>`_

.. dropdown:: 3. Heart Rate Detection

    Program **Heart Rate Detection** mengubah sinyal ECG terfilter Anda menjadi readout detak jantung numerik langsung. 
    Saat Arduino terus menerus sampling waveform ECG yang dibersihkan dari BioAmp EXG Pill, sketch ini 
    mengidentifikasi puncak gelombang R karakteristik detak jantung dan menandai waktu kejadiannya. Dengan mengukur 
    waktu antara puncak berurutan, ini menghitung detak per menit (BPM) Anda dan mencetak hasilnya ke 
    Serial Monitor, memberikan tampilan real-time detak jantung Anda tanpa software atau display eksternal.

    Di bawah kap, sketch beroperasi seperti stetoskop digital: ini mempertahankan scan berjalan dari 
    ECG masuk, dan setiap kali sinyal naik tajam di atas threshold yang dipilih—menunjukkan gelombang R—itu
    menandai itu sebagai satu detak. Kemudian menghitung interval sejak detak sebelumnya dan menerapkan konversi standar 
    (60 000 ms dibagi interval) untuk menentukan BPM. Pendekatan ini memberikan pengukuran detak jantung yang segera dan 
    intuitif, mengubah spike biopotensial mentah menjadi data yang bermakna dan dapat dibaca manusia.

    Untuk panduan detail, kunjungi **Halaman Instructables** kami: `Measuring Heart Rate Using BioAmp EXG Pill <https://www.instructables.com/Measuring-Heart-Rate-Using-BioAmp-EXG-Pill/>`_

.. dropdown:: 4. Heart Beat Detection

    Program **Heart Beat Detection** mengubah waveform ECG terfilter Anda menjadi hitungan detak jantung yang andal 
    dengan memantau "energi" sinyal daripada puncak mentah. Saat Arduino terus membaca ECG bersih 
    dari BioAmp EXG Pill, sketch ini menghitung ukuran variabilitas sinyal jangka pendek—pada dasarnya envelope atau deviasi standar 
    tegangan. Setiap kali envelope itu melonjak di atas threshold yang disetel 
    (menunjukkan perubahan tegangan cepat dari gelombang R), kode mendaftarkan satu detak jantung dan kemudian menunggu
    sinyal turun di bawah threshold lagi, memastikan setiap detak dihitung hanya sekali.

    Dengan melacak saat envelope melintasi thresholdnya, sketch membangun tally real-time detak jantung Anda. 
    Daripada hanya mencari spike tegangan, ini menggunakan envelope untuk menghaluskan noise dan 
    drift baseline, membuatnya jauh lebih kuat dalam pengaturan sehari-hari yang kurang terkendali. Hasilnya adalah 
    counter detak jantung yang bergantung yang bekerja bahkan jika amplitudo ECG bervariasi atau elektroda Anda bergeser sedikit—sempurna untuk 
    monitoring detak jantung dasar tanpa sirkuit deteksi puncak yang kompleks.

    Untuk panduan detail, kunjungi **Halaman Instructables** kami: `Detecting Heart Beats Using BioAmp EXG Pill <https://www.instructables.com/Detecting-Heart-Beats-Using-BioAmp-EXG-Pill/>`_

    Lihat Visualisasi Demo di **YouTube**:

    .. youtube:: uB5R-vGJjJo

.. dropdown:: 5. BLE Heart Rate Detection

    Akan didokumentasikan.

.. dropdown:: 6. Faster Heart Rate Detection

    **1. Tujuan Program & Gambaran**

    Sketch **Faster Heart Rate Detection** memberikan fungsionalitas beat-to-BPM yang sama seperti pendahulunya
    tetapi dalam paket yang sangat dioptimalkan. Ini membaca ECG Anda dari BioAmp EXG Pill dan Muscle BioAmp Shield pada tingkat
    125 Hz yang terkendali, menerapkan filter band-pass Butterworth 4-tahap untuk mengisolasi band jantung 0.5–44.5 Hz, 
    lalu mendeteksi setiap gelombang R menggunakan metode envelope buffer berjalan. Daripada crossing threshold sederhana, 
    ini menggunakan jendela kecil sampel terkini untuk menghitung mean dan deviasi standar, menandai detak jantung hanya ketika sampel masuk 
    melebihi mean + 0.5 × stddev dan menghormati interval debounce singkat.

    **2. Cara Kerjanya**
    
    - Sampling tingkat tetap pada 125 Hz menggunakan timer mikrodetik (micros() + loop timer) memastikan interval data konsisten dengan overhead timing yang sangat sedikit.
    - Filter Butterworth IIR 4-seksi inlined (ECGFilter()) menghilangkan drift baseline dan noise frekuensi tinggi dalam satu pass, menghindari biaya call fungsi.
    - Deteksi puncak berbasis envelope di atas buffer melingkar 26-sampel menghitung mean dan deviasi standar on-the-fly, menandai detak jantung hanya ketika sampel saat ini melebihi mean + 0.5 × stddev.
    - Logika debounce (peakCooldownPeriod = 2 ms) menggunakan hanya dua Boolean dan timestamp untuk mencegah re-trigger palsu pada detak yang sama.
    - Buffer timing melingkar (timeBuffer/sumBuffer, ukuran 5) rata-rata interval inter-beat terkini sebelum mengonversi ke BPM, menghaluskan ketidakteraturan tanpa loop besar.

    **3. Lakukan Hardware**

    - Lihat wiring sesuai instruksi yang diberikan di :ref:`Connect Your Hardware<heart-bioamp-arduino-firmware-connect-hardware>`

    **4. Unggah Firmware**

    - Untuk proyek ini, pergi ke folder repository (Heart-BioAmp-Arduino-Firmware/6_Faster_HeartRateDetection) dan pilih ``6_Faster_HeartRateDetection.ino``.
    - Untuk mengunggah firmware, lihat :ref:`How to upload the Code to Arduino<heart-bioamp-arduino-firmware-code-upload>`
    
    **5. Visualisasikan sinyal Anda**

    - Ikuti langkah-langkah yang diberikan di :ref:`Visualize Your Heart Signals! <heart-bioamp-arduino-firmware-visualize-signals>` 
  
    **6. Menjalankan & Mengamati Hasil**
    
    - Pembacaan Halus: Berkat buffer moving-average kecil, BPM yang ditampilkan tetap stabil, bahkan jika detak datang sedikit awal atau terlambat.
    - Penggunaan CPU Rendah: Loop tetap cepat dan responsif, sehingga Anda dapat menambahkan display atau fitur nirkabel tanpa kehilangan detak jantung.

.. dropdown:: 7. OLED BPM

    Program OLED BPM mengubah detak jantung terukur Arduino Anda menjadi display on-screen real-time. Saat sensor BioAmp dan kode deteksi beat Anda menghitung BPM, sketch ini:
    
    - Merender angka besar, mudah dibaca pada layar OLED 128×64 sehingga Anda dapat melihat detak jantung saat ini sekilas.
    - Memperbarui display secara instan setiap kali detak jantung baru terdeteksi, menjaga BPM yang ditampilkan sinkron dengan denyut nadi Anda.
    - Opsional menganimasikan ikon pulsing atau bar sederhana di samping angka, memberikan isyarat visual "detak jantung".

    Singkatnya, OLED BPM membuat setup Arduino Anda berfungsi sebagai monitor detak jantung standalone—tidak perlu PC, ponsel, atau plotting eksternal.

    Untuk panduan detail, kunjungi **Halaman Instructables** kami: `Heartrate on OLED Display in Real Time <https://www.instructables.com/Heartrate-on-OLED-Display-in-Real-Time/>`_

✅ **And That’s it!, Congrats on making your neuroscience project using BioAmp Hardware.**



 

