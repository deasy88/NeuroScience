.. _neuroscience-basics-for-biopotential-signals-module-8:

Module 8: ECG/EKG
#############################################

- **Terminologi Dasar**

  1. **Elektrokardiografi (Electrocardiography)** : Teknik untuk mengukur aktivitas listrik jantung.
  2. **Elektrokardiograf (Electrocardiograph)** : Perangkat yang digunakan untuk mengukur aktivitas listrik jantung.
  3. **Elektrokardiogram (Electrocardiogram)** : Representasi grafis dari aktivitas listrik jantung.

- **Jika Anda ingin mengetahui sejarah lengkap ECG, silakan merujuk ke bagian ini:**  
  `History of ECG <https://litfl.com/history-of-the-electrocardiogram/>`_

8.1 Pendahuluan
***********************

ECG (juga disebut EKG) adalah pemeriksaan non-invasif yang merekam aktivitas listrik jantung selama periode waktu tertentu
menggunakan elektroda yang ditempatkan pada permukaan kulit. ECG merupakan alat paling penting untuk mengevaluasi irama jantung,
mendeteksi iskemia/infark, mengidentifikasi kelainan konduksi, hipertrofi ruang jantung, gangguan elektrolit, efek obat,
serta berbagai kondisi jantung bawaan maupun yang didapat.

**Rentang frekuensi ECG** : Mesin ECG modern merekam sinyal ECG pada bandpass 0,05 (atau 0,5) Hz hingga 100 (atau 150) Hz
sebagai standar industri. [1]_

8.2 Prinsip Dasar
**********************

**ECG merekam perubahan potensial listrik (tegangan) di permukaan tubuh yang dihasilkan oleh depolarisasi dan repolarisasi
sel otot jantung.**

Setiap detak jantung dikendalikan oleh sinyal listrik yang terorganisasi di dalam jantung. Ketika jutaan sel otot jantung
mengalami depolarisasi (aktivasi) dan repolarisasi (pemulihan) hampir secara bersamaan, akan dihasilkan arus listrik kecil.
Arus ini merambat melalui tubuh hingga ke permukaan kulit. Mesin ECG menangkap perbedaan tegangan kecil antar titik tubuh,
memperkuatnya, dan menampilkannya sebagai gelombang terhadap waktu.

8.3 Prosedur ECG
*****************************

Proses pelaksanaan ECG meliputi langkah-langkah berikut:

1. **Persiapan**: Pasien diminta berbaring di meja pemeriksaan. Area kulit tempat elektroda dipasang dibersihkan
   untuk memastikan kontak listrik yang baik.
2. **Pemasangan Elektroda**: Elektroda ditempelkan pada tubuh pasien. ECG 12 sadapan menggunakan 10 elektroda
   (4 pada ekstremitas dan 6 pada dada).
3. **Perekaman**: Mesin ECG merekam aktivitas listrik dari setiap sadapan dan menampilkannya dalam bentuk gelombang.
4. **Analisis**: Dokter menganalisis hasil ECG untuk mengevaluasi aktivitas listrik jantung.

**Perangkat keras Upside Down Labs yang kompatibel untuk akuisisi dan pemrosesan sinyal ECG/EKG:**

- :ref:`Neuro PlayGround Lite <neuro-play-ground-lite>`
- :ref:`Bioamp EXG Pill <bioamp-exg-pill>`
- :ref:`Heart Bioamp Candy <heart-bioamp-candy>`

Kami menyediakan perangkat lunak **open source** :ref:`Chords <upsidedownlabs_software_home>` dengan fitur visualisasi sinyal,
perekaman data, plotting berbasis waktu, serta analisis frekuensi dan bandpower.

8.4 Komponen ECG
*******************************

ECG terdiri dari beberapa gelombang, segmen, dan interval yang merepresentasikan fase siklus listrik jantung.

.. note::

    1. **Gelombang (Waves)** : Deviasi dari garis dasar ECG
    2. **Segmen (Segments)** : Garis datar di antara gelombang
    3. **Interval (Intervals)** : Durasi waktu yang mencakup gelombang dan segmen

8.4.1 Gelombang PQRST pada ECG
===========================

- **Gelombang P**: Merepresentasikan depolarisasi atrium.
- **Interval PR**: Waktu antara awal gelombang P dan awal kompleks QRS.
- **Kompleks QRS**: Merepresentasikan depolarisasi ventrikel, terdiri dari:
  
  - **Gelombang Q**: Defleksi negatif pertama setelah gelombang P.
  - **Gelombang R**: Defleksi positif pertama.
  - **Gelombang S**: Defleksi negatif setelah gelombang R.

- **Segmen ST**: Periode datar setelah kompleks QRS.
- **Gelombang T**: Merepresentasikan repolarisasi ventrikel.
- **Interval QT**: Total waktu depolarisasi dan repolarisasi ventrikel.
- **Gelombang U**: Defleksi kecil setelah gelombang T, sering dikaitkan dengan hipokalemia.

8.4.2 Sadapan ECG dan Penempatannya
===================================

.. note::

    **Sadapan (lead)** adalah koneksi listrik antara dua elektroda yang memberikan sudut pandang tertentu
    terhadap aktivitas listrik jantung. ECG standar 12 sadapan menggunakan 10 elektroda.

**Sadapan Bipolar (I, II, III)**

- Lead I: Lengan kanan ke lengan kiri
- Lead II: Lengan kanan ke kaki kiri
- Lead III: Lengan kiri ke kaki kiri

**Sadapan Unipolar Teraugmentasi (aVR, aVL, aVF)**

- aVR: Bahu kanan
- aVL: Bahu kiri
- aVF: Kaki kiri

**Sadapan Prekordial/Dada (V1–V6)**

Ditempatkan pada dada untuk memberikan gambaran aktivitas listrik jantung secara lokal.

8.6 Kelebihan ECG
****************************

- Non-invasif
- Mudah dan cepat
- Pemantauan real-time
- Aman untuk semua usia
- Biaya rendah
- Tanpa radiasi
- Terstandarisasi secara global

8.7 Keterbatasan ECG
**********************************

1. Hanya menunjukkan aktivitas saat pemeriksaan
2. Tidak mendeteksi semua kelainan jantung
3. Tidak menunjukkan struktur jantung
4. Membutuhkan interpretasi tenaga ahli
5. Dipengaruhi faktor eksternal

8.8 Ringkasan
******************

Modul ini membahas ECG/EKG sebagai teknik non-invasif untuk merekam aktivitas listrik jantung, meliputi prinsip kerja,
komponen gelombang, jenis sadapan, prosedur, aplikasi, serta keterbatasannya.

.. warning::

    **Konten ini hanya untuk tujuan pembelajaran. Selalu konsultasikan dengan tenaga medis profesional
    untuk penggunaan klinis.**

8.9 Referensi
*******************

.. [1] `Tereshchenko LG, Josephson ME. Frequency content and characteristics of ventricular conduction. J Electrocardiol. 2015;48(6):933-937. doi:10.1016/j.jelectrocard.2015.08.034 <https://pmc.ncbi.nlm.nih.gov/articles/PMC4624499/>`_

