.. _bioamp-exg-pill:

BioAmp EXG Pill
##################

:bdg-danger:`v1.0`

Ringkasan
*********

BioAmp EXG Pill adalah papan akuisisi sinyal biopotensial analog-front-end (AFE) yang kecil dan kuat yang dapat dipasangkan 
dengan unit mikrokontroler (MCU) atau komputer papan tunggal (SBC) dengan konverter analog-ke-digital (ADC) seperti 
Arduino UNO & Nano, Adafruit QtPy, STM32 Blue Pill, BeagleBone Black, dan Raspberry Pi Pico, untuk beberapa nama saja. It juga bekerja dengan ADC khusus apa pun, seperti Texas Instruments ADS1115 dan ADS131M0x, di antara lainnya.

.. note:: Dianjurkan untuk menggunakan Arduino UNO R4 saat merekam sinyal biopotensial karena memiliki ADC 14-bit dan dapat merekam sinyal dengan lebih akurat.

.. figure:: ../../../media/bioamp-exg-pill.*
    :align: center

Apa yang membuatnya berbeda?
**************************

1. Rekam sinyal biopotensial berkualitas publikasi seperti ECG, EMG, EOG, atau EEG.
2. Ukuran kecil (25.4 x 10.0mm) memungkinkan integrasi mudah ke dalam proyek mobile dan terbatas ruang.
3. Penolakan kebisingan yang kuat membuatnya dapat digunakan bahkan saat perangkat dekat dengan pasokan AC mains.
4. Kabel apa pun dengan diameter 1.5 mm dapat digunakan sebagai kabel elektroda yang mengurangi tegangan, menjadikannya sangat hemat biaya.
5. Pasangkan dengan MCU apa pun dengan ADC. Itu secara default kompatibel dengan 5V tetapi Anda dapat membuatnya kompatibel dengan 3.3V juga menggunakan pembagi tegangan.
6. Konfigurasikan gain, filter band pass dan jumlah elektroda sesuai kebutuhan Anda.

Fitur & Spesifikasi
**************************

+----------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Tegangan Operasi     | 5 V                                                                                                                                                                                  |
+----------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Impedansi Input      | 10^12 ohm                                                                                                                                                                            |
+----------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Perangkat Keras Kompatibel | Papan pengembangan apa pun dengan ADC (Arduino UNO & Nano, Adafruit QtPy, STM32 Blue Pill, BeagleBone Black, Raspberry Pi Pico, untuk beberapa nama saja) atau ADC mandiri pilihan Anda |
+----------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Sinyal Bio-potensial | EMG, ECG, EOG, EEG (band-pass yang dapat dikonfigurasi, secara default dikonfigurasi untuk EEG & EOG)                                                                                |
+----------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Jumlah saluran       | 1                                                                                                                                                                                    |
+----------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Elektroda            | 2 atau 3 (Secara default dikonfigurasi untuk 3 elektroda)                                                                                                                           |
+----------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Dimensi              | 25.4 x 10 mm                                                                                                                                                                         |
+----------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Open Source          | Perangkat Keras + Perangkat Lunak                                                                                                                                                    |
+----------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

Tata letak papan
*************

Desain elegan BioAmp EXG Pill memungkinkannya digunakan dalam 3 cara:

1. Lubang pin-header memungkinkan Anda menyolder header pin (berg strip) untuk penggunaan mudah dengan breadboard.
2. Lubang castellated memungkinkan Anda menyolder BioAmp EXG Pill langsung ke PCB kustom yang memerlukan kemampuan amplifikasi biopotensial.
3. Lubang elektroda memungkinkan Anda menggunakan kabel apa pun dengan diameter 1.5 mm sebagai kabel elektroda dengan tegangan minimal.

.. figure:: media/Front_Specifications.*
    :align: center

.. figure:: media/Back_Specifications.*
    :align: center

BioAmp EXG Pill sepenuhnya dapat dikonfigurasi
=============================================

1. Tingkatkan gain amplifier instrumentasi dengan menggunakan resistor 0603 di ``R6``. Kurangi gain dan konfigurasikan filter bandpass dengan menggunakan bagian 0603 di ``R12`` dan ``C5``. Pembatasan band sangat berguna untuk perekaman EOG dan EEG. Juga, sinyal terkadang klip saat merekam ECG dengan elektroda sangat dekat dengan jantung. Membuat jumper solder untuk filter band-pass membantu dengan itu. Secara default, BioAmp EXG Pill dikonfigurasi untuk merekam EEG dan EOG tetapi Anda dapat menjembatani pad (di bawah bandpass) dengan solder untuk membuatnya dapat dikonfigurasi untuk EMG dan ECG.
2. Metode operasi normal untuk amplifikasi sinyal berkualitas terbaik adalah menggunakan 3 elektroda secara default tetapi Anda dapat menjembatani pad (di bawah elektroda) untuk membuatnya dapat dikonfigurasi untuk 2 elektroda. Mode 2-elektroda secara khusus disertakan untuk proyek seperti patch jantung (ECG) untuk HRV. Itu hanya dimaksudkan untuk digunakan dengan setup beroperasi baterai dan cukup rentan terhadap kebisingan interferensi tinggi karena kurangnya referensi yang tepat pada tubuh (Opsi ini tidak direkomendasikan untuk sebagian besar operasi)

Persyaratan perangkat lunak
**********************

- Sebelum Anda mulai menggunakan kit, silakan unduh `Arduino IDE v1.8.19 (legacy IDE) <https://www.arduino.cc/en/software>`_. Dengan menggunakan ini Anda akan dapat mengunggah sketsa arduino di papan pengembangan Anda dan memvisualisasikan data di laptop Anda.
    
.. figure:: ../../../kits/diy-neuroscience/basic/media/arduino-ide.*
    :align: center
    :alt: Arduino IDE v1.8.19 (legacy IDE)

    Arduino IDE v1.8.19 (legacy IDE) 

- Kunjungi Upside Down Labs `Chords Web <https://chords.upsidedownlabs.tech>`__ untuk memvisualisasikan sinyal bio-potensial Anda langsung di browser.

.. figure:: ../../../software/chords/chords-web/media/chords_landing_page.*
    :align: center
    :alt: Halaman Peluncuran Chords Web 

    Halaman Peluncuran Chords Web

**Memulai dengan Chords Web**

.. youtube:: IVIPnk9z75g
    :align: center
    :width: 100%

.. tip:: Untuk mengetahui lebih lanjut tentang Chords Web :ref:`klik di sini<chords>`.

Menggunakan Perangkat Keras
*********************

Jika Anda telah menerima BioAmp EXG Pill yang dirakit maka Anda dapat melewati langkah 1 dan langsung ke langkah 2.

Langkah 1: Solder Konektor
===========================

Masukkan konektor JST PH kabel BioAmp yang disediakan dan header pin dari atas seperti yang ditunjukkan di gambar dan solder dari bawah.

.. figure:: media/assembly-step1.*
    :align: center
    :alt: Menyolder konektor & header pin pada BioAmp EXG Pill

    Menyolder konektor & header pin pada BioAmp EXG Pill

.. figure:: media/bioamp-exg-pill-soldered.*
    :align: center
    :alt: Setelah menyolder, BioAmp EXG Pill harus terlihat seperti ini

    Setelah menyolder, BioAmp EXG Pill harus terlihat seperti ini

Langkah 2 (opsional): Konfigurasikan untuk ECG/EMG
==========================================

BioAmp EXG Pill secara default dikonfigurasi untuk merekam EEG atau EOG tetapi jika Anda ingin merekam ECG atau EMG berkualitas baik, maka disarankan untuk mengkonfigurasinya dengan membuat sambungan solder seperti yang ditunjukkan di gambar.

.. figure:: media/assembly-step2.*
    :align: center

.. note:: Bahkan tanpa membuat sambungan solder BioAmp EXG Pill mampu merekam ECG atau EMG tetapi sinyal akan lebih akurat jika Anda mengkonfigurasinya.

Langkah 3: Hubungkan MCU/ADC
=========================

Hubungkan BioAmp EXG Pill Anda ke MCU/ADC sesuai tabel koneksi yang ditunjukkan di bawah:

.. table:: Koneksi BioAmp ke MCU/ADC

    +--------+-----------+
    | BioAmp | MCU/ADC   |
    +========+===========+
    | VCC    | 5V        |
    +--------+-----------+
    | GND    | GND       |
    +--------+-----------+
    | OUT    | Input ADC |
    +--------+-----------+

Untuk semua contoh yang disediakan, kami menggunakan pin A0 Arduino UNO R3. Hubungkan BioAmp Anda ke MCU/ADC melalui kabel jumper yang disediakan di kit. Jika Anda menghubungkan pin OUT BioAmp ke pin analog lain (A0-A5) Arduino UNO board, maka Anda harus mengubah PIN INPUT di sketsa Arduino sesuai.

.. figure:: media/connections-with-arduino.*
    :align: center
    :alt: Koneksi dengan Arduino UNO R3

    Koneksi dengan Arduino UNO R3

.. warning:: Pastikan laptop Anda tidak terhubung ke charger dan duduk 5m jauh dari peralatan AC apa pun untuk akuisisi sinyal terbaik.

Langkah 4: Menghubungkan kabel elektroda
====================================

Hubungkan kabel BioAmp ke BioAmp EXG Pill dengan memasukkan ujung kabel ke konektor JST PH seperti yang ditunjukkan di grafik di bawah.

.. figure:: media/connection-with-cable.*
    :align: center
    :alt: Koneksi dengan Kabel BioAmp v3

    Koneksi dengan Kabel BioAmp v3

Langkah 5: Persiapan Kulit
===========================

Oleskan Gel Persiapan Kulit Nuprep pada permukaan kulit tempat elektroda akan ditempatkan untuk menghilangkan sel kulit mati dan membersihkan kulit dari kotoran. Setelah menggosok permukaan kulit secara menyeluruh, bersihkan dengan tisu alkohol atau tisu basah.

Untuk informasi lebih lanjut, silakan lihat langkah-langkah detail :ref:`persiapan kulit`.

Langkah 6: Mengukur Elektromiografi (EMG)
=========================================

.. note::

   Elektromiografi (EMG) adalah teknik untuk mengevaluasi dan merekam aktivitas listrik yang dihasilkan oleh otot rangka. 
   EMG juga digunakan sebagai prosedur diagnostik untuk menilai kesehatan otot dan sel saraf yang mengontrolnya (neuron motor). 
   Hasil EMG mengungkap disfungsi saraf, disfungsi otot, atau masalah transmisi sinyal saraf-ke-otot. 

..    .. figure:: media/EMGEnvelop.*
..        :align: center

..    .. figure:: media/EMG.*
..        :align: center

Penempatan elektroda
----------------------

Kami memiliki 2 opsi untuk mengukur sinyal EMG, baik menggunakan elektroda gel atau menggunakan band BioAmp Otot berbasis elektroda kering. Anda dapat mencoba keduanya satu per satu.

- **Menggunakan elektroda gel:**

1. Hubungkan kabel BioAmp ke elektroda gel,
2. Kupas backing plastik dari elektroda
3. Tempatkan kabel IN+ dan IN- di lengan dekat saraf ulnar & REF (referensi) di bagian belakang tangan Anda seperti yang ditunjukkan di diagram koneksi.

.. figure:: media/emg.*

- **Menggunakan Band BioAmp Otot:**

1. Hubungkan kabel BioAmp ke Band BioAmp Otot dengan cara sehingga IN+ dan IN- ditempatkan di lengan dekat saraf ulnar & REF (referensi) di sisi jauh band.

2. Sekarang letakkan tetesan kecil gel elektroda antara kulit dan bagian logam kabel BioAmp untuk mendapatkan hasil terbaik.

.. tip:: Kunjungi dokumentasi lengkap tentang cara :ref:`merakit dan menggunakan Band BioAmp <using-bioamp-bands>` atau ikuti video youtube yang diberikan di bawah.

   **Tutorial tentang cara menggunakan band:**

   .. youtube:: xYZdw0aesa0
       :align: center
       :width: 100%

.. note:: Dalam demonstrasi ini kami merekam sinyal EMG dari saraf ulnar, tetapi Anda dapat merekam EMG dari area lain juga (bisep, trisep, kaki, rahang dll) sesuai kebutuhan proyek Anda. Pastikan untuk menempatkan elektroda IN+, IN- pada otot yang ditargetkan dan REF pada bagian tulang.

Mengunggah kode
---------------------------

Hubungkan Arduino Uno ke laptop Anda menggunakan kabel USB (Type A to Type B). Salin tempel salah satu Sketsa Arduino yang diberikan di bawah di Arduino IDE v1.8.19 yang Anda unduh sebelumnya:
    
:fab:`github;pst-color-primary` `EMG Filter <https://github.com/upsidedownlabs/Muscle-BioAmp-Arduino-Firmware/blob/main/2_EMGFilter/2_EMGFilter.ino>`_

:fab:`github;pst-color-primary` `EMG Envelope <https://github.com/upsidedownlabs/Muscle-BioAmp-Arduino-Firmware/blob/main/3_EMGEnvelope/3_EMGEnvelope.ino>`_

Pergi ke ``tools`` dari menu bar, pilih opsi ``board`` lalu pilih Arduino UNO. Di menu yang sama, 
pilih port COM tempat Arduino Uno Anda terhubung. Untuk mengetahui port COM yang benar, 
putuskan sambungan papan Anda dan buka kembali menu. Entri yang menghilang harus 
port COM yang benar. Sekarang unggah kode, & buka serial plotter dari menu tools untuk memvisualisasikan 
sinyal EMG. 

Setelah membuka serial plotter pastikan untuk memilih baud rate ke 115200.

.. tip:: Kunjungi dokumentasi lengkap tentang cara :ref:`mengunggah kode <muscle-bioamp-arduino-firmware-code-upload>`.

.. important:: Pastikan laptop Anda tidak terhubung ke charger dan duduk 5m jauh dari peralatan AC apa pun untuk akuisisi sinyal terbaik.

Memvisualisasikan sinyal EMG
----------------------------

Untuk memvisualisasikan sinyal EMG, gunakan `Chords Web <https://chords.upsidedownlabs.tech/>`__ untuk visualisasi sinyal bio-potensial real-time yang cepat dan tanpa masalah langsung dari browser Anda, tanpa menginstal perangkat lunak apa pun.

.. figure:: ../../../software/chords/chords-web/media/chords_emg_signal.*
    :align: center
    :alt: Memvisualisasikan sinyal EMG di Chords Web

    Memvisualisasikan sinyal EMG di Chords Web

Sekarang tekuk lengan Anda untuk memvisualisasikan sinyal otot secara real-time di laptop Anda.

.. figure:: media/EMGEnvelop.*
    :align: center
    :alt: Memvisualisasikan sinyal EMG di Arduino IDE v1.8.x

    Memvisualisasikan sinyal EMG di Arduino IDE v1.8.x

Langkah 6: Mengukur Elektrokardiografi (ECG)
=============================================

.. note::

   Elektrokardiografi (ECG) adalah proses menghasilkan elektrokardiogram (ECG atau EKG). It adalah grafik tegangan versus waktu 
   dari aktivitas listrik jantung menggunakan elektroda yang ditempatkan pada kulit. Elektroda ini mendeteksi perubahan listrik kecil 
   yang merupakan konsekuensi depolarisasi otot jantung diikuti oleh repolarisasi selama setiap siklus jantung (detak jantung).

Penempatan elektroda
----------------------

Kami memiliki 2 opsi untuk mengukur sinyal ECG, baik menggunakan elektroda gel atau menggunakan band BioAmp Jantung berbasis elektroda kering. Anda dapat mencoba keduanya satu per satu.

- **Menggunakan elektroda gel:**

1. Hubungkan kabel BioAmp ke elektroda gel
2. Kupas backing plastik dari elektroda
3. Tempatkan kabel IN- di sisi kiri, IN+ di tengah dan REF (referensi) di sisi kanan jauh seperti yang ditunjukkan di diagram.

.. figure:: media/ecg.*
    :align: center

- **Menggunakan Band BioAmp Jantung:**

1. Pakai band seperti yang ditunjukkan di video tutorial yang diberikan di bawah
2. Tempatkan kabel IN- di sisi kiri, IN+ di tengah dan REF (referensi) di sisi kanan jauh.
3. Sekarang letakkan tetesan kecil gel elektroda antara kulit dan bagian logam kabel BioAmp untuk mendapatkan hasil terbaik.

.. tip:: Kunjungi dokumentasi lengkap tentang cara :ref:`merakit dan menggunakan Band BioAmp <using-bioamp-bands>` atau ikuti video youtube yang diberikan di bawah.

   **Tutorial tentang cara menggunakan band:**

   .. youtube:: fr5iORsVyUM
       :align: center
       :width: 100%

Mengunggah kode
---------------------

Hubungkan Arduino Uno ke laptop Anda menggunakan kabel USB (Type A to Type B). Salin tempel Sketsa Arduino yang diberikan di bawah di Arduino IDE v1.8.19 yang Anda unduh sebelumnya:
    
:fab:`github;pst-color-primary` `ECG Filter <https://github.com/upsidedownlabs/Heart-BioAmp-Arduino-Firmware/blob/main/2_ECGFilter/2_ECGFilter.ino>`_

Pergi ke ``tools`` dari menu bar, pilih opsi ``board`` lalu pilih Arduino UNO. Di menu yang sama, 
pilih port COM tempat Arduino Uno Anda terhubung. Untuk mengetahui port COM yang benar, 
putuskan sambungan papan Anda dan buka kembali menu. Entri yang menghilang harus 
port COM yang benar. Sekarang unggah kode, & buka serial plotter dari menu tools untuk memvisualisasikan 
sinyal. 

Setelah membuka serial plotter pastikan untuk memilih baud rate ke 115200.

.. tip:: Kunjungi dokumentasi lengkap tentang cara :ref:`mengunggah kode <heart-bioamp-arduino-firmware-code-upload>`.

.. important:: Pastikan laptop Anda tidak terhubung ke charger dan duduk 5m jauh dari peralatan AC apa pun untuk akuisisi sinyal terbaik.

Memvisualisasikan sinyal ECG
-----------------------------

Untuk memvisualisasikan sinyal ECG, gunakan `Chords Web <https://chords.upsidedownlabs.tech/>`__ untuk visualisasi sinyal bio-potensial real-time yang cepat dan tanpa masalah langsung dari browser Anda, tanpa menginstal perangkat lunak apa pun.

.. figure:: ../../../software/chords/chords-web/media/chords_ecg_signal.*
    :align: center
    :alt: Memvisualisasikan sinyal ECG di Chords Web

    Memvisualisasikan sinyal ECG di Chords Web


Duduklah santai dan lihat sinyal ECG Anda secara real-time di laptop Anda.

.. figure:: media/bioamp-Exg-Pill-ECG.*
    :align: center
    :alt: Memvisualisasikan sinyal ECG di Arduino IDE v1.8.x

    Memvisualisasikan sinyal ECG di Arduino IDE v1.8.x

Langkah 7: Mengukur Elektrookulografi (EOG)
================================================

.. note::

   Elektrookulografi (EOG) adalah teknik untuk mengukur potensi korneo-retinal yang ada antara depan dan 
   belakang mata manusia. Sinyal yang dihasilkan disebut EOG. Untuk mengukur gerakan mata, pasangan elektroda biasanya ditempatkan 
   baik di atas dan di bawah mata atau ke kiri dan kanan mata. Jika mata bergerak dari posisi tengah menuju salah satu dari dua 
   elektroda, elektroda itu "melihat" sisi positif retina, dan elektroda yang berlawanan "melihat" sisi negatif retina. 
   Akibatnya, perbedaan potensi terjadi antara elektroda. Dengan asumsi potensi istirahat konstan, potensi yang direkam 
   adalah ukuran posisi mata.

Penempatan elektroda
----------------------

Kami memiliki 2 cara untuk mengukur sinyal EOG, baik merekam gerakan mata horizontal atau gerakan mata vertikal. Anda dapat merekam kedua sinyal satu per satu.

- **Perekaman EOG horizontal:**

.. figure:: media/eog-horizontal.*
    :align: center

1. Hubungkan kabel BioAmp ke elektroda gel.
2. Kupas backing plastik dari elektroda.
3. Tempatkan kabel IN- di sisi kanan mata, IN+ di sisi kiri mata dan REF (referensi) di bagian tulang, di sisi belakang cuping telinga Anda seperti yang ditunjukkan di diagram di atas.

- **Perekaman EOG vertikal:**

.. figure:: media/eog-vertical.*
    :align: center

1. Hubungkan kabel BioAmp ke elektroda gel.
2. Kupas backing plastik dari elektroda.
3. Tempatkan kabel IN- & IN+ di atas dan di bawah mata masing-masing dan REF (referensi) di bagian tulang, di sisi belakang cuping telinga Anda seperti yang ditunjukkan di diagram di atas.

Mengunggah kode
---------------------

Hubungkan Arduino Uno ke laptop Anda menggunakan kabel USB (Type A to Type B). Salin tempel Sketsa Arduino yang diberikan di bawah di Arduino IDE v1.8.19 yang Anda unduh sebelumnya:
    
:fab:`github;pst-color-primary` `EOG Filter <https://github.com/upsidedownlabs/Eye-BioAmp-Arduino-Firmware/blob/main/2_EOGFilter/2_EOGFilter.ino>`_

Pergi ke ``tools`` dari menu bar, pilih opsi ``board`` lalu pilih Arduino UNO. Di menu yang sama, 
pilih port COM tempat Arduino Uno Anda terhubung. Untuk mengetahui port COM yang benar, 
putuskan sambungan papan Anda dan buka kembali menu. Entri yang menghilang harus 
port COM yang benar. Sekarang unggah kode, & buka serial plotter dari menu tools untuk memvisualisasikan 
sinyal. 

Setelah membuka serial plotter pastikan untuk memilih baud rate ke 115200.

.. tip:: Visit the complete documentation on how to :ref:`How to upload the code <eye-bioamp-arduino-firmware-code-upload>`.

.. important:: Pastikan laptop Anda tidak terhubung ke charger dan duduk 5m jauh dari peralatan AC apa pun untuk akuisisi sinyal terbaik.

Memvisualisasikan sinyal EOG
------------------------------

Untuk memvisualisasikan sinyal EOG, gunakan `Chords Web <https://chords.upsidedownlabs.tech/>`__ untuk visualisasi sinyal bio-potensial real-time yang cepat dan tanpa masalah langsung dari browser Anda, tanpa menginstal perangkat lunak apa pun.

.. figure:: ../../../software/chords/chords-web/media/chords_eog_signal.*
    :align: center
    :alt: Memvisualisasikan sinyal EOG di Chords Web

    Memvisualisasikan sinyal EOG di Chords Web


Gerakkan mata Anda atas-bawah atau kiri-kanan untuk melihat sinyal EOG Anda secara real-time di laptop Anda.

.. figure:: media/bioamp-exg-pill-eog.*
    :align: center
    :alt: Memvisualisasikan sinyal EOG di Arduino IDE v1.8.x

    Memvisualisasikan sinyal EOG di Arduino IDE v1.8.x

Langkah 8: Mengukur Elektroensefalografi (EEG)
===================================================

.. note::

   Elektroensefalografi (EEG) adalah metode pemantauan elektrofisiologis untuk merekam aktivitas listrik pada kulit kepala. Selama 
   prosedur, elektroda yang terdiri dari cakram logam kecil dengan kawat tipis ditempelkan ke kulit kepala Anda. Elektroda mendeteksi muatan listrik kecil 
   yang dihasilkan oleh aktivitas sel otak Anda yang kemudian diperkuat untuk muncul di layar komputer. 
   Itu biasanya non-invasif, dengan elektroda ditempatkan di sepanjang kulit kepala.

Untuk merekam EEG dari bagian otak yang berbeda, Anda harus menempatkan elektroda sesuai dengan `sistem 10-20 internasional untuk merekam EEG <https://en.wikipedia.org/wiki/10%E2%80%9320_system_(EEG)>`_.

.. figure:: ../../../kits/diy-neuroscience/basic/media/10-20-system.*
    :align: center

Penempatan elektroda
----------------------

Kami memiliki 2 opsi untuk mengukur sinyal EEG, baik menggunakan elektroda gel atau menggunakan band BioAmp Otak berbasis elektroda kering. Anda dapat mencoba keduanya satu per satu.

- **Menggunakan elektroda gel untuk merekam dari korteks prefrontal bagian otak:**

.. figure:: media/eeg_placement.*
    :align: center

1. Hubungkan kabel BioAmp ke elektroda gel.
2. Kupas backing plastik dari elektroda.
3. Tempatkan kabel IN+ dan IN- pada Fp1 dan Fp2 sesuai sistem 10-20 internasional & REF (referensi) di bagian tulang, di sisi belakang cuping telinga Anda seperti yang ditunjukkan di atas.

- **Menggunakan Band BioAmp Otak untuk merekam dari korteks prefrontal bagian otak:**

1. Hubungkan kabel BioAmp ke Band BioAmp Otak dengan cara sehingga IN+ dan IN- ditempatkan pada Fp1 dan Fp2 sesuai sistem 10-20 internasional.
2. Dalam hal ini, REF (referensi) harus dihubungkan menggunakan elektroda gel. Jadi hubungkan referensi kabel BioAmp ke elektroda gel, kupas backing plastik dan tempatkan di bagian tulang, di sisi belakang cuping telinga Anda.
3. Sekarang letakkan tetesan kecil gel elektroda pada elektroda kering (IN+ dan IN-) antara kulit dan bagian logam kabel BioAmp untuk mendapatkan hasil terbaik.

.. tip:: Kunjungi dokumentasi lengkap tentang cara :ref:`merakit dan menggunakan Band BioAmp <using-bioamp-bands>` atau ikuti video youtube yang diberikan di bawah.

   **Tutorial tentang cara menggunakan band:**

   .. youtube:: O6qp7teT-sM
       :align: center
       :width: 100%

.. note:: Demikian pula Anda dapat menggunakan band untuk merekam sinyal EEG dari korteks visual bagian otak dengan menempatkan elektroda kering pada O1 dan O2 alih-alih Fp1 dan Fp2. Semuanya akan tetap sama.

Data EEG 2-saluran 
----------------------

Untuk merekam data Elektroensefalografi (EEG) 2-saluran menggunakan dua BioAmp EXG Pill dalam hubungannya dengan Arduino Uno R4 Minima, setup perangkat keras yang cermat diperlukan.

**Komponen yang Diperlukan**

1. Dua BioAmp EXG Pill
2. Arduino Uno R4 minima
3. Breadboard
4. Kabel jumper
5. Elektroda gel

**Setup perangkat keras**

Untuk mengatur perangkat keras untuk perekaman EEG 2-saluran menggunakan dua modul BioAmp EXG Pill dan Arduino Uno R4 Minima, mulailah dengan menghubungkan pin 5V dan GND Arduino ke rel daya breadboard, lalu pasok VCC dan GND dari breadboard ke kedua BioAmp EXG Pills. Hubungkan pin OUT dari EXG pill pertama ke pin analog Arduino A0 (saluran 1) dan OUT dari EXG Pill kedua ke pin analog A1 (saluran 2). Untuk penempatan elektroda, hubungkan IN+ dari setiap modul (kabel merah) ke situs perekaman EEG yang berbeda di dahi (mis. Fp1 dan Fp2), dan hubungkan IN- (kabel hitam) dan kedua pin REF (kabel kuning) dari EXG Pills ke elektroda referensi umum yang ditempatkan di lokasi netral seperti mastoid atau cuping telinga untuk memastikan akuisisi sinyal yang bersih dan sinkron.

.. figure:: media/channel-2-eeg-connection.*
    :align: center
    :alt: Koneksi EEG 2 Saluran

Mengunggah kode
-----------------------

Hubungkan Arduino Uno ke laptop Anda menggunakan kabel USB (Type A to Type B). Salin tempel Sketsa Arduino yang diberikan di bawah di Arduino IDE v1.8.19 yang Anda unduh sebelumnya:
    
:fab:`github;pst-color-primary` `Kode Filter EEG <https://github.com/upsidedownlabs/Brain-BioAmp-Arduino-Firmware/blob/main/02-eeg-filter/02-eeg-filter.ino>`_

Pergi ke ``tools`` dari menu bar, pilih opsi ``board`` lalu pilih Arduino UNO. Di menu yang sama, 
pilih port COM tempat papan pengembangan Anda terhubung. Untuk mengetahui port COM yang benar, layar
putuskan sambungan papan Anda dan buka kembali menu. Entri yang menghilang harus 
port COM yang benar. Sekarang unggah kode.

.. tip:: Kunjungi dokumentasi lengkap tentang cara :ref:`mengunggah kode <brain-bioamp-arduino-firmware-code-upload>`.

.. important:: Pastikan laptop Anda tidak terhubung ke charger dan duduk 5m jauh dari peralatan AC apa pun untuk akuisisi sinyal terbaik.
 
Memvisualisasikan sinyal EEG
-------------------------------

Untuk memvisualisasikan sinyal EEG, gunakan `Chords Web <https://chords.upsidedownlabs.tech/>`__ untuk visualisasi sinyal bio-potensial real-time yang cepat dan tanpa masalah langsung dari browser Anda, tanpa menginstal perangkat lunak apa pun.

.. figure:: ../../../software/chords/chords-web/media/chords_eeg_signal.*
    :align: center
    :alt: Memvisualisasikan sinyal EEG di Chords Web

    Memvisualisasikan sinyal EEG di Chords Web

Sinyal yang dapat Anda lihat di layar sekarang berasal dari korteks prefrontal bagian otak Anda dan menyebar melalui semua lapisan ke permukaan kulit Anda.

Anda telah menempatkan elektroda di dahi (Fp1 & Fp2), BioAmp EXG Pill memperkuat sinyal tersebut sehingga kita dapat mendeteksinya dan akhirnya mengirimkannya ke ADC (Konverter Analog ke Digital) Arduino Uno Anda dan sinyal divisualisasikan di Chords Web.

.. tip::

   Untuk memastikan Anda merekam sinyal berkualitas tinggi, lihat panduan detail di sini: :ref:`Memecahkan Masalah Kualitas Sinyal EEG <recording_quality_eeg>`.

Kami harap semuanya jelas sekarang dan Anda memahami bagaimana sinyal menyebar dari otak Anda ke layar laptop.

Glimpses dari versi sebelumnya
*******************************

BioAmp EXG Pill dapat digunakan dalam berbagai cara, video YouTube di bawah menunjukkan cara potensial menggunakan ``v0.7`` dari 
BioAmp EXG Pill.

.. youtube:: -G3z9fvQnuw
    :align: center
    :width: 100%

Banyak yang meningkat dalam hal penolakan interferensi dan fleksibilitas dari ``v0.7`` ke ``v1.0`` dari BioAmp EXG Pill. Video YouTube 
di bawah menunjukkan perekaman ECG, EMG, EOG, dan EEG menggunakan ``v1.0b`` dari perangkat.

.. youtube:: z9-B9bHWuhg
    :align: center
    :width: 100%

Aplikasi Dunia Nyata
************************

BioAmp EXG Pill sempurna untuk peneliti, pembuat, dan hobi yang mencari cara baru untuk sampling data biopotensial. It dapat 
digunakan untuk berbagai proyek biosensing menarik, termasuk:

- Deteksi congestive heart failure menggunakan CNN (ECG)
- Perhitungan variabilitas detak jantung untuk mendeteksi penyakit jantung (ECG)
- Kontrol lengan prostetik (servo) (EMG)
- Kontrol lengan robotik 3DOF (EMG)
- Kontroler permainan real-time (EOG)
- Deteksi kedipan mata (EOG)
- Mengambil foto dengan kedipan mata (EOG) dan banyak contoh lainnya. 


Ide proyek & tutorial
********************************

.. only:: html

    .. article-info::
      :avatar: ../../../kits/diy-neuroscience/basic/media/instructables.svg
      :avatar-link: https://www.instructables.com/member/Upside+Down+Labs/
      :avatar: outline: muted
      :author: Proyek di Instructables
      :class-container: sd-p-2 sd-rounded-1

    Di bawah ini adalah beberapa proyek yang dibuat oleh siswa menggunakan BioAmp EXG Pill.

    .. grid:: 2 2 2 2
        :margin: 4 4 0 0 
        :gutter: 2

        .. grid-item-card:: Mengontrol video game menggunakan gelombang otak (EEG)
            :text-align: center
            :link: https://www.instructables.com/Controlling-Video-Game-Using-Brainwaves-EEG/

        .. grid-item-card:: Memvisualisasikan impuls listrik dari mata (EOG)
            :text-align: center
            :link: https://www.instructables.com/Visualizing-Electrical-Impulses-of-Eyes-EOG-Using-/

        .. grid-item-card:: Merekam EEG dari korteks visual
            :text-align: center
            :link: https://www.instructables.com/Recording-EEG-From-Visual-Cortex-of-Brain-Using-Bi/

        .. grid-item-card:: Merekam EEG dari korteks prefrontal
            :text-align: center
            :link: https://www.instructables.com/Recording-EEG-From-Pre-Frontal-Cortex-of-Brain-Usi/

        .. grid-item-card:: Deteksi kedipan mata
            :text-align: center
            :link: https://www.instructables.com/Eye-Blink-Detection-by-Recording-EOG-Using-BioAmp-/

        .. grid-item-card:: Membuat detektor kantuk
            :text-align: center
            :link: https://www.instructables.com/Drowsiness-Detector-by-Detecting-EOG-Signals-Using/

        .. grid-item-card:: Merekam ECG berkualitas publikasi
            :text-align: center
            :link: https://www.instructables.com/Record-Publication-Grade-ECG-at-Your-Home-Using-Bi/

        .. grid-item-card:: Mengukur detak jantung
            :text-align: center
            :link: https://www.instructables.com/Measuring-Heart-Rate-Using-BioAmp-EXG-Pill/

        .. grid-item-card:: Mendeteksi detak jantung
            :text-align: center
            :link: https://www.instructables.com/Detecting-Heart-Beats-Using-BioAmp-EXG-Pill/

        .. grid-item-card:: Merekam EMG berkualitas publikasi
            :text-align: center
            :link: https://www.instructables.com/Recording-Publication-Grade-Muscle-Signals-Using-B/

        .. grid-item-card:: Mendeteksi gerakan mata atas dan bawah
            :text-align: center
            :link: https://www.instructables.com/Tracking-UP-and-DOWN-Movements-of-Eyes-Using-EOG/

    Ini adalah beberapa ide proyek tetapi kemungkinannya tak terbatas. Jadi buat proyek Human Computer Interface (HCI) dan 
    Brain Computer Interface (BCI) Anda sendiri dan bagikan dengan kami di contact@upsidedownlabs.tech.

.. only:: latex

    Anda dapat menemukan tutorial langkah demi langkah untuk berbagai proyek HCI/BCI di `Instructables <https://www.instructables.com/member/Upside+Down+Labs/>`_ kami.

    Di bawah ini adalah beberapa ide proyek yang dapat Anda coba buat di rumah Anda.

    1. `Mengontrol video game menggunakan gelombang otak (EEG) <https://www.instructables.com/Controlling-Video-Game-Using-Brainwaves-EEG/>`_
    2. `Memvisualisasikan impuls listrik dari mata (EOG) <https://www.instructables.com/Visualizing-Electrical-Impulses-of-Eyes-EOG-Using-/>`_
    3. `Merekam EEG dari korteks visual bagian otak <https://www.instructables.com/Recording-EEG-From-Visual-Cortex-of-Brain-Using-Bi/>`_
    4. `Merekam EEG dari korteks prefrontal bagian otak <https://www.instructables.com/Recording-EEG-From-Pre-Frontal-Cortex-of-Brain-Usi/>`_
    5. `Deteksi kedipan mata <https://www.instructables.com/Eye-Blink-Detection-by-Recording-EOG-Using-BioAmp-/>`_
    6. `Membuat detektor kantuk <https://www.instructables.com/Drowsiness-Detector-by-Detecting-EOG-Signals-Using/>`_
    7. `Merekam ECG berkualitas publikasi <https://www.instructables.com/Record-Publication-Grade-ECG-at-Your-Home-Using-Bi/>`_
    8. `Mengukur detak jantung <https://www.instructables.com/Measuring-Heart-Rate-Using-BioAmp-EXG-Pill/>`_
    9. `Mendeteksi detak jantung <https://www.instructables.com/Detecting-Heart-Beats-Using-BioAmp-EXG-Pill/>`_
    10. `Merekam EMG berkualitas publikasi <https://www.instructables.com/Recording-Publication-Grade-Muscle-Signals-Using-B/>`_
    11. `Mendeteksi gerakan mata atas dan bawah <https://www.instructables.com/Tracking-UP-and-DOWN-Movements-of-Eyes-Using-EOG/>`_

    Ini adalah beberapa ide proyek tetapi kemungkinannya tak terbatas. Jadi buat proyek Human Computer Interface (HCI) dan 
    Brain Computer Interface (BCI) Anda sendiri dan bagikan dengan kami di contact@upsidedownlabs.tech
