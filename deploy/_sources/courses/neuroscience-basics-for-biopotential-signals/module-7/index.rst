.. _neuroscience-basics-for-biopotential-signals-module-7:

Modul 7: EMG
##########################

- **Terminologi Dasar**

  1. **Elektromiografi** : Teknik untuk mengukur aktivitas elektrik otot.
  2. **Elektromiograf** : Perangkat yang digunakan untuk mengukur aktivitas elektrik otot. 
  3. **Elektromiogram** : Representasi grafis dari aktivitas elektrik otot.

- **Jika Anda ingin mengetahui sejarah detail EMG, Anda dapat merujuk ke bagian ini:** `Sejarah EMG <https://www.jalimedical.com/CC01132024>`_

- **Jenis EMG**: Ada banyak jenis EMG yang berbeda. Dua jenis utama adalah

  1. Surface EMG (non-invasif)
  2. Needle (atau Intramuskular) EMG

**Karena perangkat kami dapat merekam surface EMG, kami akan membahasnya secara detail.**

Surface EMG
********************

7.1 Pengantar
=======================

Surface Electromyography (sEMG) adalah teknik **non-invasif** (prosedur yang tidak memerlukan penyisipan instrumen melalui kulit atau ke dalam pembukaan tubuh) yang digunakan untuk mengukur aktivitas elektrik otot, yang dapat memberikan informasi berharga tentang fungsi **junction neuromuskular (NMJ)**, situs di mana serat saraf terhubung ke serat otot. Meskipun sEMG tidak secara langsung mengukur aktivitas di NMJ, ia dapat memberikan wawasan tidak langsung ke dalam fungsi situs kritis ini melalui aktivitas elektrik yang dideteksi di otot.

**Rentang frekuensi EMG**: Sinyal EMG berkisar dari **10 hingga 500 Hz** dalam frekuensi, tetapi sebagian besar energi bergunanya terkonsentrasi antara **50 dan 150 Hz**.

7.2 Prinsip Dasar
=============================

Surface EMG mendeteksi sinyal elektrik yang dihasilkan oleh serat otot selama kontraksi atau istirahat. Sinyal ini, dikenal sebagai **potensial aksi unit motor (MUAPs)**, ditransmisikan melalui kulit dan dapat dideteksi oleh elektroda yang ditempatkan di permukaan kulit di atas otot.

7.3 Bagaimana Cara Kerjanya
=======================

7.3.1 Penempatan Elektroda
-----------------------------

Dalam surface EMG, sensor kecil yang disebut elektroda ditempatkan di kulit langsung di atas otot yang dipelajari. Ini biasanya elektroda pre-gelled `(Elektroda Gel) <https://store.upsidedownlabs.tech/?s=gel+electrodes&post_type=product>`_ atau elektroda kering `(BioAmp bands) <https://store.upsidedownlabs.tech/?s=bioamp+band&post_type=product>`_ yang menempel di kulit dan tidak selalu memerlukan gel.

.. note::

    Untuk mengetahui lebih lanjut tentang elektroda silakan lihat tautan berikut :
    
    1. :ref:`Menggunakan Elektroda Gel <using-gel-electrodes>`
    2. :ref:`Menggunakan Elektroda Kering (BioAmp Bands) <using-bioamp-bands>`

7.3.2 Deteksi Sinyal
--------------------------------

Ketika otot berkontraksi, ia menciptakan sinyal elektrik kecil. Elektroda menangkap perubahan tegangan ini yang disebut potensial aksi.

7.3.3 Amplifikasi dan Filtering Sinyal
-------------------------------------------

Karena sinyal ini sangat lemah (diukur dalam mikrovolt), mereka pertama kali diperkuat untuk membuatnya dapat dibaca. Kemudian, noise yang tidak diinginkan seperti gangguan gerakan atau interferensi dari sinyal tubuh lain, seperti sinyal jantung, difilter untuk memastikan data yang direkam bersih dan akurat.

7.4 Komponen Utama Sistem sEMG
=======================================

7.4.1 Elektroda Permukaan
---------------------------

Ini ditempatkan di kulit untuk mendeteksi aktivitas elektrik. Mereka biasanya ditempatkan paralel dengan serat otot untuk mendapatkan sinyal terbaik.

7.4.2 Amplifier
--------------------

Ini digunakan untuk memperkuat sinyal elektrik kecil yang dihasilkan oleh serat otot, seringkali dengan faktor x1000 sehingga ADC papan pengembangan kami dapat mendigitalkan sinyal bio-potensial kecil dari tubuh.

**Perangkat Keras Upside Down Labs yang kompatibel dengan akuisisi dan pemrosesan sinyal sEMG:**

- :ref:`Neuro PlayGround Lite <neuro-play-ground-lite>`
- :ref:`Bioamp EXG Pill <bioamp-exg-pill>`
- :ref:`Heart Bioamp Candy <heart-bioamp-candy>`
- :ref:`Muscle Bioamp Patchy <muscle-bioamp-patchy>`
- :ref:`Muscle Bioamp Blip <muscle-bioamp-blip>`
- :ref:`Muscle Bioamp BisCute <muscle-bioamp-biscute>`
- :ref:`Muscle Bioamp Shield <muscle-bioamp-shield>`

7.4.3 Analog-to-Digital Converter (ADC)
----------------------------------------------

Setelah amplifikasi, sinyal didigitalkan untuk analisis. Kami menggunakan berbagai jenis papan pengembangan seperti Arduino UNO R3, Arduino UNO R4 Minima/WiFi, Raspberry Pi Pico, dll. Beberapa BioAmps seperti BioAmp EXG Pill dan Muscle BioAmp Patchy hanya kompatibel dengan 5v jadi Anda harus menggunakan Arduino UNO.

.. note::

    **Kami merekomendasikan menggunakan Arduino UNO R4 Minima untuk kompatibilitas terbaik dan resolusi ADC tinggi 14 bit.**

7.4.4 Perangkat Lunak untuk Pemrosesan Sinyal
--------------------------------------

Kami menawarkan suite perangkat lunak **open source** kami sendiri :ref:`Chords <upsidedownlabs_software_home>`, yang menampilkan alat untuk visualisasi sinyal, perekaman data (dengan opsi simpan dan unduh mudah), plotting berbasis waktu, dan banyak manfaat lainnya—seperti menganalisis frekuensi sinyal dan bandpower.

7.5 Aplikasi sEMG
=============================

7.5.1 Aplikasi Klinis
---------------------------------

Surface EMG (sEMG) memainkan peran penting dalam perawatan kesehatan, terutama untuk mendiagnosis dan mengobati masalah otot dan saraf:

1. **Gangguan neurologis**: Klinisi menggunakan sEMG untuk mendiagnosis kondisi seperti distrofi muskular, amyotrophic lateral sclerosis (ALS), myasthenia gravis, dan sindrom carpal tunnel. Dengan melihat pola aktivasi otot abnormal, klinisi dapat menemukan masalah yang mungkin tidak muncul pada tes standar.

2. **Kelemahan Otot dan Kelelahan**: Sangat berguna untuk menilai seberapa baik otot bekerja pada pasien yang mengalami kelemahan, kelelahan kronis, atau paralisis (misalnya, setelah stroke atau cedera sumsum tulang belakang).

3. **Terapi Biofeedback**: Pasien dapat melihat aktivitas otot mereka sendiri secara real-time di layar dan belajar mengontrolnya lebih baik. Ini sangat membantu dalam rehabilitasi setelah cedera, operasi, atau kejadian neurologis.

7.5.2 Ilmu Olahraga dan Biomekanik
-----------------------------------------

Dalam olahraga dan olahraga, sEMG memberikan wawasan detail kepada pelatih dan atlet tentang apa yang sebenarnya dilakukan otot:

1. **Pemantauan Performa**: Dengan merekam otot mana yang menembak, kapan, dan seberapa keras selama latihan atau kompetisi, atlet dan pelatih dapat membuat program yang lebih efektif, meningkatkan kekuatan dan daya, dan mengurangi risiko cedera.

2. **Analisis Gerakan**: Mengungkapkan waktu dan intensitas aktivasi otot yang tepat dalam aksi seperti berlari, melompat, melempar, atau angkat beban. Informasi ini membantu menyempurnakan teknik, memperbaiki ketidakseimbangan, dan meningkatkan performa keseluruhan.

7.5.3 Prostetik dan Robotik
-----------------------------------

Salah satu penggunaan paling mengubah hidup sEMG adalah dalam mengontrol anggota tubuh buatan dan perangkat bantu:

1. **Kontrol Anggota Tubuh Prostetik**: Orang dengan amputasi dapat menggunakan sinyal otot yang tersisa di tunggul mereka (anggota tubuh residual) untuk mengoperasikan lengan atau tangan prostetik canggih. Ketika mereka memikirkan tentang menggerakkan anggota tubuh yang hilang, sinyal elektrik kecil yang dihasilkan oleh otot ditangkap oleh elektroda permukaan dan diterjemahkan menjadi gerakan alami (meraih, memutar pergelangan tangan, dll.).

2. **Robotik dan Eksoskeleton**: Prinsip yang sama memberdayakan eksoskeleton robotik dan robot bantu. Untuk seseorang dengan paralisis atau kelemahan parah, sinyal otot kecil yang masih dapat mereka hasilkan memungkinkan kontrol intuitif dari eksoskeleton bertenaga yang membantu mereka berdiri, berjalan, atau mengangkat objek.

Proyek Menggunakan EMG
====================

Anda dapat memanfaatkan Perangkat Keras BioAmp kami untuk membuat berbagai aplikasi. Kami telah berhasil mengembangkan beberapa aplikasi, jadi tidak ada yang menghalangi Anda untuk membuat sesuatu yang inovatif dan luar biasa. Beberapa aplikasi perangkat kami disorot di bawah ini:

.. grid:: 2 2 2 2
    :margin: 4 4 0 0 
    :gutter: 2

    .. grid-item-card:: Rekam dan Visualisasikan Sinyal Otot menggunakan Muscle BioAmp Patchy
        :text-align: center
        :link: https://www.instructables.com/Recording-Muscle-Signals-Using-Muscle-BioAmp-Patch/

    .. grid-item-card:: Visualisasikan Sinyal Otot menggunakan Sensor Otot DIY Termurah
        :text-align: center
        :link: https://www.instructables.com/Visualizing-Muscle-Signals-EMG-Using-Worlds-Most-A/

    .. grid-item-card:: Rekam, Visualisasikan & Dengarkan Sinyal Otot Menggunakan Muscle BioAmp Shield
        :text-align: center
        :link: https://www.instructables.com/Record-Visualize-Listen-to-Muscle-Signals-Using-Mu/

    .. grid-item-card:: Mengukur Sinyal Otot Menggunakan Sensor Otot Ukuran Permen (EMG)
        :text-align: center
        :link: https://www.instructables.com/Measuring-Muscle-Signals-Using-Candy-Size-Muscle-S/

    .. grid-item-card:: Menggunakan Setup No-Code untuk Visualisasikan dan Dengarkan Sinyal Otot Anda (EMG)
        :text-align: center
        :link: https://www.instructables.com/Using-a-No-Code-Setup-to-Visualize-and-Listen-to-Y/

    .. grid-item-card:: Rekam Sinyal Otot (EMG) Menggunakan Muscle BioAmp Blip
        :text-align: center
        :link: https://www.instructables.com/Record-Muscle-Signals-EMG-Using-Muscle-BioAmp-Blip/

    .. grid-item-card:: Merekam Sinyal Otot Grade Publikasi Menggunakan BioAmp EXG Pill
        :text-align: center
        :link: https://www.instructables.com/Recording-Publication-Grade-Muscle-Signals-Using-B/

    .. grid-item-card:: Memvisualisasikan 2 Channel EMG pada Modul Display LCD
        :text-align: center
        :link: https://www.instructables.com/Visualizing-2-Channel-EMG-on-LCD-Display-Module/

    .. grid-item-card:: "Permainan Cakar Servo" Ultimate
        :text-align: center
        :link: https://www.instructables.com/Servo-Claw-Game/
    
    .. grid-item-card:: Membuat Permainan Kekuatan Otot Menggunakan Muscle BioAmp Shield & Arduino Uno
        :text-align: center
        :link: https://www.instructables.com/Making-a-Muscle-Strength-Game-Using-Muscle-BioAmp-/ 
    
    .. grid-item-card:: Mengontrol Tangan Prostetik (versi kardus) Menggunakan Sensor EMG
        :text-align: center
        :link: https://www.instructables.com/Controlling-Prosthetic-Hand-cardboard-Version-Usin/

    .. grid-item-card:: Pemantauan Latihan Menggunakan Sensor Otot Wearable (EMG)
        :text-align: center
        :link: https://www.instructables.com/Exercise-Monitoring-Using-Wearable-Muscle-Sensor-E/ 

    .. grid-item-card:: Gulir YouTube Shorts Menggunakan Sinyal EMG 2 Channel
        :text-align: center
        :link: https://www.instructables.com/Scroll-YouTube-Shorts-Using-2-Channel-EMG-Signals/ 

    .. grid-item-card:: Mengontrol Permainan Video Menggunakan Sinyal Otot (EMG)
        :text-align: center
        :link: https://www.instructables.com/Controlling-Video-Games-Using-Muscle-Signals-EMG/ 

    .. grid-item-card:: Melody Otot: Buat Musik Dengan Gerakan Otot Anda (EMG)
        :text-align: center
        :link: https://www.instructables.com/Muscle-Melody-Play-Music-With-Your-Muscle-Movement/


7.6 Keuntungan Surface EMG
====================================

- Non invasif
- Mudah dan cepat 
- Feedback real-time
- Aman untuk semua orang
- Biaya rendah
- Tidak ada radiasi 
- Pemantauan waktu lama mungkin


7.7 Keterbatasan sEMG 
================================

1. **Tidak dapat merekam aktivitas otot dalam** : 

   - sEMG hanya mengukur aktivitas otot superfisial.
   - Otot dalam memerlukan EMG intramuskular (fine-wire).

2. **Sensitivitas terhadap persiapan kulit** : 

   - Persiapan kulit yang buruk, keringat, rambut, atau penempatan elektroda yang tidak tepat mempengaruhi pembacaan.
   - Impedansi kulit tinggi mengurangi akurasi. 

3. **Crosstalk (Interferensi dari Otot Terdekat)** :

   - Elektroda menangkap sinyal dari beberapa otot tetangga.
   - Sulit mengisolasi aktivitas otot kecil atau dalam.

4. **Artefak gerakan** : 

   - Gerakan tubuh menyebabkan perpindahan elektroda yang menghasilkan sinyal palsu.
   - Gerakan kabel juga dapat memperkenalkan noise.

**sEMG juga dipengaruhi oleh jaringan adiposa (lapisan lemak tebal b/w otot dan kulit) yang dapat meredam sinyal.**

7.8 Ringkasan
===============

Dalam modul ini, kita mempelajari dasar-dasar EMG, terminologinya, dan fokus pada Surface EMG (sEMG) sebagai metode non-invasif untuk mengukur aktivitas elektrik otot. Kita belajar bagaimana sEMG bekerja, termasuk penempatan elektroda, deteksi sinyal, amplifikasi, dan pemrosesan. Modul ini membahas aplikasi utamanya dalam diagnosis klinis, olahraga, rehabilitasi, prostetik, dan robotik, bersama dengan keuntungan seperti feedback real-time dan non-invasivitas. Kita juga membahas keterbatasan seperti crosstalk, artefak gerakan, dan ketidakmampuan mendeteksi otot dalam, dan menyoroti potensinya dalam inovasi biomedis dan teknologi masa depan.
