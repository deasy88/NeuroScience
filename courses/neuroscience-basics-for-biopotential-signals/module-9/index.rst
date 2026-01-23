.. _neuroscience-basics-for-biopotential-signals-module-9:

Module 9 : EEG
#############################################

- **Terminologi Dasar**
  
  1. **Elektroensefalografi (Electroencephalography)** : Teknik untuk mengukur aktivitas listrik otak
  2. **Elektroensefalograf (Electroencephalograph)** : Perangkat yang digunakan untuk mengukur aktivitas listrik otak
  3. **Elektroensefalogram (Electroencephalogram)** : Representasi grafis dari aktivitas listrik otak

- **Jika Anda ingin mengetahui sejarah lengkap EEG, silakan merujuk ke bagian ini:**  
  `History of EEG <https://www.neuroelectrics.com/blog/the-evolution-of-eeg-a-journey-through-time>`_
  
9.1 Pendahuluan
****************************

EEG adalah pemeriksaan medis non-invasif yang merekam aktivitas listrik otak menggunakan elektroda kecil yang ditempatkan
di kulit kepala. EEG membantu mendeteksi pola gelombang otak yang abnormal dan umum digunakan untuk mendiagnosis epilepsi,
gangguan tidur, cedera otak, serta untuk mempelajari kondisi psikiatri seperti gangguan bipolar dan skizofrenia.

**Rentang frekuensi EEG normal :** [1]_

1. Gelombang Delta : 0,5–4 Hz
2. Gelombang Theta : 4–7 Hz
3. Gelombang Alpha : 8–12 Hz
4. Gelombang Beta  : 13–30 Hz
5. Gelombang Gamma : 30–80 Hz

9.2 Prinsip Dasar
*******************************

EEG mengukur tegangan listrik yang sangat kecil (dalam mikrovolt) yang dihasilkan di kulit kepala ketika sejumlah besar
neuron otak menembak secara sinkron. EEG terutama merekam penjumlahan potensial pascasinaptik dari neuron piramidal kortikal,
yang kemudian diperkuat dan ditampilkan sebagai gelombang otak terhadap waktu.

9.3 Cara Kerja
***********************

9.3.1 Penempatan Elektroda
==================================

1. Pada **EEG permukaan (surface EEG)**, elektroda kecil ditempatkan di kulit kepala sesuai dengan sistem standar seperti
   sistem 10–20, yang memastikan posisi elektroda konsisten di atas area otak tertentu.
2. **Electrode Cap**: Penutup kepala yang dapat dikenakan dan berisi banyak elektroda. Alat ini memastikan penempatan
   elektroda yang konsisten dan memudahkan perekaman dalam durasi yang panjang.

9.3.2 Deteksi Sinyal
=================================

Ketika kelompok neuron di otak menembak secara sinkron, mereka menghasilkan medan listrik kecil yang merambat hingga ke
kulit kepala. Elektroda mendeteksi fluktuasi tegangan ini, yang dikenal sebagai gelombang otak, dan merepresentasikan
penjumlahan potensial pascasinaptik dari neuron kortikal.

9.3.3 Penguatan dan Penyaringan Sinyal
==================================================

Karena sinyal EEG sangat lemah (dalam satuan mikrovolt), sinyal tersebut terlebih dahulu diperkuat agar dapat dibaca.
Selanjutnya, gangguan yang tidak diinginkan seperti kedipan mata, artefak otot, atau interferensi listrik 50/60 Hz
disaring untuk memastikan data yang direkam bersih dan akurat.

**Perangkat keras Upside Down Labs yang kompatibel untuk akuisisi dan pemrosesan sinyal EEG:**

- :ref:`Neuro PlayGround Lite <neuro-play-ground-lite>`
- :ref:`Bioamp EXG Pill <bioamp-exg-pill>`

Kami menyediakan perangkat lunak **open source** :ref:`Chords <upsidedownlabs_software_home>` dengan fitur visualisasi
sinyal, perekaman data (opsi simpan dan unduh yang mudah), plotting berbasis waktu, serta analisis frekuensi dan bandpower.

9.4 Komponen Utama EEG
***********************************

9.4.1 Sistem Penempatan Elektroda
==========================================

1. Sistem 10–20
----------------------------------

Ini adalah sistem standar untuk penempatan elektroda di kulit kepala. Sistem ini membagi kulit kepala menjadi beberapa
wilayah dan menentukan posisi elektroda berdasarkan titik anatomi tertentu (misalnya nasion, inion, dan daun telinga),
sehingga membantu konsistensi penempatan elektroda.

Untuk penjelasan lebih detail mengenai sistem 10–20, silakan merujuk ke:
`10-20 system wikipedia <https://en.wikipedia.org/wiki/10%E2%80%9320_system_(EEG)>`_

2. EEG Kepadatan Tinggi (High-Density EEG)
----------------------------------------------

Pada konfigurasi lanjutan, digunakan elektroda tambahan untuk memperoleh informasi spasial yang lebih detail,
misalnya dengan 64, 128, atau bahkan 256 elektroda.

9.4.2 Karakteristik Berbagai Jenis Gelombang EEG
==========================================================

1. **Gelombang Delta**

   - Frekuensi rendah dengan amplitudo tinggi
   - Rentang frekuensi : 0,5–4 Hz
   - Berkaitan dengan tidur dalam (Non-REM) tahap 3 dan 4 pada orang dewasa

2. **Gelombang Theta**

   - Rentang frekuensi : 4–7 Hz
   - Berkaitan dengan rasa mengantuk dan tahap awal tidur

3. **Gelombang Alpha**

   - Rentang frekuensi : 8–12 Hz
   - Berkaitan dengan kondisi terjaga yang rileks, terutama saat seseorang tenang dan tidak fokus pada tugas tertentu
   - Gelombang alpha paling dominan saat mata tertutup

4. **Gelombang Beta**

   - Rentang frekuensi : 13–30 Hz
   - Pola EEG paling umum pada orang dewasa dan anak-anak yang sadar dan waspada
   - Pola beta abnormal dapat mengindikasikan gangguan neurologis seperti penyakit Parkinson

5. **Gelombang Gamma**

   - Rentang frekuensi : 30–80 Hz
   - Berkaitan dengan aktivitas mental tingkat tinggi, pemrosesan kognitif, dan integrasi informasi
   - Umumnya muncul saat tugas yang membutuhkan konsentrasi dan pemecahan masalah

9.5 Aplikasi EEG
********************************

1. Aplikasi Klinis
===================================

- **Diagnosis Epilepsi** : EEG merupakan alat utama untuk mendiagnosis epilepsi dengan mendeteksi pola gelombang abnormal
  seperti spike atau sharp wave. [2]_
- **Gangguan Tidur** : EEG digunakan dalam studi tidur (polisomnografi) untuk memantau tahap tidur dan mengidentifikasi
  gangguan seperti sleep apnea, insomnia, dan narkolepsi. [3]_
- **Pemantauan Aktivitas Otak** : Digunakan pada perawatan intensif untuk memantau pasien koma, kondisi vegetatif,
  atau selama anestesi.
- **Diagnosis Kematian Otak** : EEG dapat digunakan untuk mengonfirmasi kematian otak yang ditandai dengan tidak adanya
  aktivitas listrik otak. [4]_
- **Gangguan Neurokognitif** : EEG membantu mengevaluasi kondisi seperti demensia, Alzheimer, dan ensefalitis. [5]_

2. Aplikasi Penelitian
===============================

- **Brain-Computer Interface (BCI)** : EEG mengubah sinyal otak menjadi perintah untuk mengendalikan perangkat seperti
  komputer atau anggota tubuh buatan. [6]_
- **Neurosains Kognitif** : EEG digunakan untuk mempelajari perhatian, memori, persepsi, dan pemrosesan bahasa. [7]_

3. Neurofeedback
============================

EEG juga digunakan dalam terapi neurofeedback, di mana individu dilatih untuk mengendalikan aktivitas otaknya sendiri.
Metode ini digunakan untuk menangani ADHD, kecemasan, depresi, serta peningkatan performa atlet dan musisi. [8]_

9.6 Kelebihan EEG
**********************************

- Non-invasif dan aman
- Biaya relatif rendah
- Efektif untuk diagnosis gangguan neurologis
- Pemantauan real-time
- Cocok untuk pemantauan jangka panjang
- Digunakan dalam penelitian kognitif dan psikofisiologi
- Portabel dan mudah diakses

9.7 Keterbatasan EEG
******************************

1. **Resolusi Spasial Rendah** : Tidak dapat menentukan lokasi aktivitas otak secara presisi
2. **Memerlukan Analisis Ahli** : Interpretasi kompleks dan subjektif
3. **Sensitif terhadap Gangguan Eksternal** : Artefak otot, kedipan mata, dan interferensi listrik
4. **Informasi Kedalaman Terbatas** : Kurang efektif mendeteksi aktivitas struktur otak bagian dalam

9.8 Ringkasan
**********************

EEG adalah teknik non-invasif untuk merekam aktivitas listrik otak menggunakan elektroda di kulit kepala. EEG digunakan
dalam diagnosis klinis, penelitian kognitif, serta brain-computer interface. Meskipun memiliki keterbatasan seperti
resolusi spasial rendah dan sensitivitas terhadap noise, EEG tetap sangat bernilai karena kemampuan pemantauan real-time
dan resolusi temporal yang sangat baik.

.. warning::

    **Konten ini disediakan hanya untuk tujuan pembelajaran. Selalu konsultasikan dengan tenaga medis profesional
    untuk penerapan klinis.**

9.9 Referensi
************************

.. [1] `Nayak CS, Anilkumar AC. EEG Normal Waveforms. [Updated 2025 Aug 3]. In: StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2025 Jan-. <https://www.ncbi.nlm.nih.gov/books/NBK539805/>`_
.. [2] `Britton JW, Frey LC, Hopp JLet al., authors; St. Louis EK, Frey LC, editors. Electroencephalography (EEG): An Introductory Text and Atlas of Normal and Abnormal Findings in Adults, Children, and Infants [Internet]. Chicago: American Epilepsy Society; 2016. EEG in the Epilepsies. <https://www.ncbi.nlm.nih.gov/books/NBK390347/>`_    
.. [3] `Nayak CS, Anilkumar AC. EEG Normal Sleep. [Updated 2023 May 23]. In: StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2025 Jan-. <https://www.ncbi.nlm.nih.gov/books/NBK537023/>`_ 
.. [4] `Szurhaj W, Lamblin MD, Kaminska A, Sediri H; Société de Neurophysiologie Clinique de Langue Française. EEG guidelines in the diagnosis of brain death. Neurophysiol Clin. 2015 Mar;45(1):97-104. doi: 10.1016/j.neucli.2014.11.005. Epub 2015 Jan 14. PMID: 25687591. <https://pubmed.ncbi.nlm.nih.gov/27303609/>`_  
.. [5] `Kanda PAM, Anghinah R, Smidth MT, Silva JM. The clinical use of quantitative EEG in cognitive disorders. Dement Neuropsychol. 2009;3(3):195-203. doi:10.1590/S1980-57642009DN30300004 <https://pubmed.ncbi.nlm.nih.gov/29213628/>`_
.. [6] `Värbu K, Muhammad N, Muhammad Y. Past, Present, and Future of EEG-Based BCI Applications. Sensors (Basel). 2022;22(9):3331. Published 2022 Apr 26. doi:10.3390/s22093331 <https://pubmed.ncbi.nlm.nih.gov/35591021/>`_
.. [7] `Höller Y. Quantitative EEG in Cognitive Neuroscience. Brain Sci. 2021;11(4):517. Published 2021 Apr 19. doi:10.3390/brainsci11040517 <https://pubmed.ncbi.nlm.nih.gov/33921596/>`_
.. [8] `Marzbani H, Marateb HR, Mansourian M. Neurofeedback: A Comprehensive Review on System Design, Methodology and Clinical Applications. Basic Clin Neurosci. 2016;7(2):143-158. doi:10.15412/J.BCN.03070208 <https://pmc.ncbi.nlm.nih.gov/articles/PMC4892319/>`_
