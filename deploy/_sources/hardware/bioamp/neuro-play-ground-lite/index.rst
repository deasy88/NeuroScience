.. _neuro-play-ground-lite:

Neuro PlayGround (NPG) Lite
#############################

**BioAmp nirkabel 3-saluran yang dapat diperluas untuk HCI & BCI**

.. figure:: media/npg-lite-banner.*
    :target: https://www.crowdsupply.com/upside-down-labs/neuro-playground-lite
    :align: center
    :alt: Spanduk Crowd Supply NPG Lite

Ringkasan
*********

.. youtube:: 9ZnYd7bmcgY
    :align: center

**Neuro PlayGround Lite (NPG Lite)** adalah papan akuisisi sinyal bio-fisiologis nirkabel multikanal dengan form-factor Adafruit feather. 
It dapat digunakan untuk Elektrokardiografi (ECG), Elektromiografi (EMG), 
Elektrookulografi (EOG), atau Elektroensefalografi (EEG). Footprint kompak dan setup tanpa masalah memastikan 
portabilitas, penerapan cepat dan pengalaman tanpa kekacauan, menjadikannya ideal untuk penelitian, pendidikan dan 
aplikasi wearable.

.. figure:: media/npg-lite-front-back.*
    :align: center
    :alt: Neuro PlayGround (NPG) Lite

    Neuro PlayGround (NPG) Lite

Dengan penambahan **Papan Playmate NPG** dan papan FeatherWing pihak ketiga,
pengguna dapat dengan mudah meningkatkan kemampuan perangkat, memungkinkan mereka
membuat aplikasi Human-Computer Interface (HCI) dan Brain-Computer Interface (BCI) yang luar biasa.
Kompatibilitas luasnya memungkinkan Anda melengkapi perangkat dengan fitur seperti motor getar untuk 
umpan balik haptic, buzzer untuk umpan balik audio, dan konektivitas I2C, menjadikannya sangat serbaguna untuk berbagai 
aplikasi. 

It memanfaatkan suite perangkat lunak **Chords** open source lintas platform yang kuat kami
(:ref:`Chords-Web<chords>`, :ref:`Chords-Python<chords-pythons>`, :ref:`Chords LSL Connector<chords-lsl-connector>` dan :ref:`Chords LSL Visualizer<chords-lsl-visualizer>`), 
memungkinkan pengguna memvisualisasikan sinyal bio-potensial yang ditangkap secara real-time, menerapkan penyaringan, melakukan analisis FFT, dan banyak lagi. 
Untuk menyederhanakan proses **mem-flash papan NPG Lite** kami, kami juga telah membuat alat flasher khusus 
disebut :ref:`NPG Lite Flasher<npg-lite-flasher>`, yang memungkinkan Anda mengunduh biner firmware pra-build dari GitHub 
dan Anda dapat mem-flash biner Anda sendiri juga.
 
Karena ekspansibilitasnya, berbagai aplikasi, dan kemampuan jaringan yang kuat 
(menggunakan Bluetooth, Zigbee, Wi-Fi, atau Thread untuk jaringan mesh), NPG Lite memungkinkan Anda menangkap sinyal bio-potensial 
bagaimana Anda inginkan dan di mana Anda inginkan.

.. figure:: media/npg-lite-chords-3-ch-data.*
    :align: center
    :alt: Data 3 Saluran menggunakan Chords Web 

    Data 3 Saluran menggunakan Chords Web 

Fitur & Spesifikasi
**************************

+---------------------+----------------------------------------------------------+
| **Fitur**           | **Detail**                                               |
+=====================+==========================================================+
| Saluran sinyal bio  | BioAmp 3-6 Saluran (ECG, EMG, EOG, EEG)                  |
+---------------------+----------------------------------------------------------+
| Mikrokontroler      | ESP32-C6 (RISC-V) dengan 4 MB Flash                      |
+---------------------+----------------------------------------------------------+
| Biopotensial(s)     | EXG                                                      |
+---------------------+----------------------------------------------------------+
| Resolusi ADC        | 12 Bit                                                   |
+---------------------+----------------------------------------------------------+
| I/O Nirkabel        | Wi-Fi 6, Bluetooth LE 5, Thread, Zigbee                  |
+---------------------+----------------------------------------------------------+
| USB & Pemrograman   | USB-C untuk daya, pengisian & pemrograman; UART, JTAG    |
+---------------------+----------------------------------------------------------+
| LED                 | 6 LED RGB yang dapat dialamatkan, LED Pengguna, LED Indikator Pengisian |
+---------------------+----------------------------------------------------------+
| Tombol              | Tombol Reset + Tombol Pengguna/Boot                      |
+---------------------+----------------------------------------------------------+
| Opsi Daya           | USB-C atau baterai LiPo                                  |
+---------------------+----------------------------------------------------------+
| Regulasi Daya       | LDO 600 mA dengan pengisian baterai LiPo onboard         |
+---------------------+----------------------------------------------------------+
| Konektor Baterai    | PicoBlade LiPo                                           |
+---------------------+----------------------------------------------------------+
| Form Factor         | Standar Adafruit Feather (pin GPIO, Daya, RX/TX)         |
+---------------------+----------------------------------------------------------+
| Perlindungan        | Perlindungan ESD pasien & USB onboard                    |
+---------------------+----------------------------------------------------------+
| Perangkat Keras Kompatibel | Papan Playmate NPG & FeatherWing & QWIIC                 |
+---------------------+----------------------------------------------------------+


Tata Letak Papan & Diagram Pinout
******************************

.. figure:: media/npg-lite-annotated.*
    :align: center
    :alt: Anotasi Neuro PlayGround (NPG) Lite

    Anotasi Neuro PlayGround (NPG) Lite

.. figure:: media/npg-lite-pinout.*
    :align: center
    :alt: Pinout Neuro PlayGround (NPG) Lite

    Pinout Neuro PlayGround (NPG) Lite

Komponen
************

.. figure:: media/npg-lite-components.*
    :align: center
    :width: 80%
    :alt: Komponen Neuro PlayGround (NPG) Lite

    Komponen Neuro PlayGround (NPG) Lite

+--------+----------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Nomor  | Komponen                   | Deskripsi                                                                                                                                                         |
+========+============================+===================================================================================================================================================================+
| 1      | **ESP32-C6**               | ESP32-C6 adalah mikrokontroler yang mendukung Wi-Fi 6 dan Bluetooth 5 (LE) yang dikembangkan oleh Espressif Systems.                                             |
+--------+----------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| 2      | **Antena**                 | Antena PCB onboard disetel untuk 2.4GHz, memastikan konektivitas Wi-Fi dan Bluetooth yang kuat, stabil dengan konsumsi daya rendah.                               |
+--------+----------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| 3      | **6 LED RGB yang dapat dialamatkan** | Memungkinkan visualisasi status perangkat, kekuatan sinyal, atau umpan balik neural menggunakan indikator warna dinamis.                                         |
+--------+----------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| 4      | **Perlindungan ESD Pengguna** | Komponen perlindungan ESD, memastikan daya tahan dan keandalan saat menghubungkan elektroda.                                                                     |
+--------+----------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| 5      | **BioAmp**                 | BioAmp onboard adalah penguat biopotensial berkebisingan rendah, gain tinggi yang menangkap dan memperkuat sinyal EMG, ECG, dan EEG untuk pemrosesan digital oleh ESP32-C6. |
+--------+----------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| 6      | **Tombol Boot/Pengguna**   | Tombol Boot/Pengguna memungkinkan mode bootloader untuk flashing firmware dan berfungsi sebagai input pengguna yang dapat diprogram.                             |
+--------+----------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| 7      | **LDO 600mA**              | Regulator tegangan mengubah tegangan input yang lebih tinggi (USB atau baterai) menjadi output 3.3V yang stabil.                                                  |
+--------+----------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| 8      | **Konektor Baterai**       | Menawarkan port yang aman untuk daya baterai, memungkinkan operasi portabel dari papan. **Catatan:** Tidak ada perlindungan polaritas.                           |
+--------+----------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| 9      | **Pengisian LiPo**         | Kontroler pengisian LiPo terintegrasi mengelola siklus pengisian dengan aman, mendukung terminasi otomatis dan pengisian trickle untuk kesehatan baterai optimal. |
+--------+----------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| 10     | **Perlindungan ESD USB**   | Perlindungan ESD USB melindungi antarmuka dari lonjakan elektrostatik dan tegangan, memastikan transfer data yang andal dan mencegah kerusakan komponen.         |
+--------+----------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| 11     | **Tombol Reset**           | Tombol reset memulai ulang mikrokontroler dan program yang berjalan tanpa kehilangan daya, membantu debugging dan pengujian firmware.                            |
+--------+----------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| 12     | **LED Pengisian**          | LED Pengisian menunjukkan status pengisian baterai, menyala saat pengisian dan mati saat terisi penuh untuk umpan balik langsung.                                |
+--------+----------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| 13     | **USB C**                  | Port USB C untuk transfer data dan input daya.                                                                                                                   |
+--------+----------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| 14     | **LED Pengguna**           | LED yang dapat diprogram pada pin GPIO digunakan untuk menunjukkan aktivitas papan, status koneksi, atau sinyal khusus selama pengembangan.                       |
+--------+----------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------+

Explorer, Ninja, dan Beast!
********************************

Jika Anda nyaman dengan penyolderan dan hanya membutuhkan BioAmp nirkabel 3-saluran, **Paket Explorer** adalah pilihan yang bagus. Untuk pengalaman NPG Lite yang paling lengkap langsung dari kotak, pilih **Paket Ninja**. Jika Anda memerlukan saluran tambahan untuk akuisisi sinyal seluruh tubuh atau eksperimen lanjutan, **Paket Beast** menawarkan konfigurasi yang paling komprehensif.

.. only:: html

   .. grid:: 1 1 3 3
      :margin: 3 3 3 3 
      :gutter: 2

      .. grid-item-card:: NPG Lite - Paket Explorer 
         :text-align: center
         :link: npg-lite-explorer
         :img-top: ../../../kits/npg-lite-kits/npg-lite-explorer/media/npg-lite-explorer-box.*
         :img-alt: Kotak NPG Lite Explorer
         :link-type: ref

      .. grid-item-card:: NPG Lite - Paket Ninja 
         :text-align: center
         :link: npg-lite-ninja
         :img-top: ../../../kits/npg-lite-kits/npg-lite-ninja/media/npg-lite-ninja-box.*
         :img-alt: Kotak NPG Lite Ninja
         :link-type: ref

      .. grid-item-card:: NPG Lite - Paket Beast 
         :text-align: center
         :link: npg-lite-beast
         :img-top: ../../../kits/npg-lite-kits/npg-lite-beast/media/npg-lite-beast-box.*
         :img-alt: Kotak NPG Lite Beast
         :link-type: ref


+------------------+--------------+------------+------------+
| Opsi Paket       | Explorer     | Ninja      | Beast      |
+==================+==============+============+============+
| NPG Lite         | Termasuk     | Termasuk   | Termasuk   |
+------------------+--------------+------------+------------+
| Tipe Playmate    | Proto        | VibZ       | VibZ+      |
+------------------+--------------+------------+------------+
| Jumlah Saluran   | 3 Saluran    | 3 Saluran  | 6 Saluran  |
+------------------+--------------+------------+------------+
| Elektroda Gel    | 12 Buah      | 24 Buah    | 24 Buah    |
+------------------+--------------+------------+------------+
| Kabel Snap       | 7 Buah       | 7 Buah     | 13 Buah    |
+------------------+--------------+------------+------------+
| Kabel Aligator   | 5 Buah       | 5 Buah     | 8 Buah     |
+------------------+--------------+------------+------------+
| Kabel Baterai    | Termasuk     | Termasuk   | Termasuk   |
+------------------+--------------+------------+------------+
| Baterai LiPo     | Tidak Termasuk | Termasuk   | Termasuk   |
+------------------+--------------+------------+------------+
| Kasing Cetak 3D  | Tidak Termasuk | Termasuk   | Termasuk   |
+------------------+--------------+------------+------------+
| Kabel USB        | Tidak Termasuk | Termasuk   | Termasuk   |
+------------------+--------------+------------+------------+

Playmate
**********

Playmate adalah papan ekspansi modular yang dirancang untuk meningkatkan fungsionalitas Neuro PlayGround (NPG) Lite. Add-on ini terintegrasi dengan mulus dengan sistem inti, memungkinkan pengguna memperluas kemampuan mereka untuk membuat aplikasi Human-Computer Interface (HCI) & Brain-Computer Interface (BCI).

.. figure:: media/npg-playmates-grouped.*
    :align: center
    :alt: Playmate Neuro PlayGround (NPG) Lite

    Playmate Neuro PlayGround (NPG) Lite

1. NPG Proto Playmate
======================

**Proto Playmate** menawarkan ruang prototyping fleksibel dengan area khusus untuk menambahkan komponen atau 
sirkuit Anda sendiri. Ini termasuk port QWIIC untuk integrasi sensor cepat, pin header elektroda 2.54 mm, 
saklar geser ON/OFF, dan antarmuka konektor untuk elektroda. Dengan menggabungkan elektroda dengan elektronik khusus, 
pengguna dapat dengan cepat membuat prototipe eksperimen yang didorong sinyal bio-potensial, membangun sirkuit add-on, atau menguji desain baru tanpa perlu breadboard terpisah.

2. NPG VibZ Playmate
=====================

**VibZ Playmate** memperkenalkan motor getar untuk umpan balik haptic, buzzer untuk umpan balik audio, port QWIIC untuk integrasi sensor I2C yang mudah, saklar geser ON/OFF, pin header elektroda 2.54 mm
dan opsi elektroda negatif umum. Dengan Playmate ini, pengguna dapat menyesuaikan setup mereka untuk aplikasi spesifik, baik dalam penelitian, pendidikan, atau 
eksperimen biofeedback interaktif. Pendekatan modular ini memastikan fleksibilitas, skalabilitas, dan pengalaman pengguna yang lebih baik.

3. NPG VibZ+ Playmate
======================

**VibZ+ Playmate** membangun di atas VibZ dengan menyertakan BioAmp 3-saluran tambahan, memungkinkan perekaman dan 
visualisasi hingga 6 saluran sinyal Bio-potensial secara simultan. Ini mempertahankan motor getar untuk umpan balik haptic, 
buzzer untuk isyarat audio, saklar geser ON/OFF, port QWIIC, dan antarmuka konektor elektroda. 
Ini membuat VibZ+ ideal untuk eksperimen yang memerlukan input resolusi lebih tinggi atau cakupan spasial yang lebih besar, 
seperti EEG multi-saluran, EMG, atau aplikasi biofeedback kompleks.

Panduan Penggunaan
************

Untuk membantu Anda memulai dengan cepat, kami telah menyiapkan tutorial video langkah demi langkah.  
Panduan ini memandu Anda melalui setup, koneksi, dan menjalankan eksperimen dengan Neuro PlayGround Lite.  

.. youtube:: hBrbw9vF-m4
    :align: center

.. admonition:: Pemecahan Masalah

   Mengalami masalah menghubungkan **Perangkat NPG** Anda dengan :ref:`Chords Web <chords>`?

   Jika Anda mencoba menghubungkan perangkat dan jendela popup untuk **Koneksi Bluetooth** tidak muncul, pastikan browser berbasis chromium Anda memiliki
   fitur berikut Diaktifkan:

   1. Buka tab baru dan buka ``chrome://flags``
   2. Cari dan aktifkan flag berikut:
    
   - **Web Bluetooth**
   - **Gunakan backend izin baru untuk Web Bluetooth**
   - **Dukungan konfirmasi pairing Web Bluetooth**
   - **Fitur Platform Web Eksperimental**
  
Perangkat Lunak Kompatibel
************************

NPG Lite Flasher
===================
  
- :ref:`NPG Lite Flasher <npg-lite-flasher>` adalah utilitas flashing lintas platform untuk papan Neuro PlayGround Lite, menyediakan pembaruan firmware yang mulus melalui serial atau DFU melalui CLI sederhana.

.. figure:: ../../../software/tools/npg-lite-flasher/media/npg-lite-flasher-launch-page.*
    :align: center
    :alt: Halaman Peluncuran NPG Lite Flasher

    Halaman Peluncuran NPG Lite Flasher

- Untuk mengetahui lebih lanjut tentang NPG Lite Flasher tonton video YouTube.

.. youtube:: NDk-P3nob_0
    :align: center

Chords Web
=============

- Kunjungi `Chords Web <https://chords.upsidedownlabs.tech/>`_ untuk visualisasi sinyal biopotensial real-time (EEG, EMG, ECG, EOG), dengan plotting lanjutan, snapshotting dan perekaman CSV.

.. figure:: ../../../software/chords/chords-web/media/chords_landing_page.*
    :align: center
    :alt: Halaman Peluncuran Chords Web 

    Halaman Peluncuran Chords Web

- Untuk mengetahui lebih lanjut tentang Chords Web :ref:`klik di sini<chords>` atau tonton video YouTube.

.. youtube:: Tqor4mo2Ji8
    :align: center

Chords Python
================

- :ref:`Chords Python<chords-pythons>` adalah tas alat open-source untuk merekam sinyal biopotensial seperti ECG, EMG, EEG, atau EOG, bersama dengan visualisasi menggunakan perangkat keras BioAmp. 

.. figure:: ../../../software/chords/chords-python/media/dark-interface.*
    :align: center
    :alt: Halaman Peluncuran Chords Python

    Halaman Peluncuran Chords Python 

- Untuk mengetahui lebih lanjut tentang Chords Python tonton video YouTube.

.. youtube:: TiDwSQEY2eY
    :align: center

Chords LSL Connector
=====================

- :ref:`Chords LSL Connector<chords-lsl-connector>` adalah jembatan berbasis Rust yang mengalirkan data dari perangkat yang menjalankan firmware Chords ke Lab Streaming Layer (LSL), memungkinkan akuisisi dan analisis yang disinkronkan dengan perangkat lunak BCI/EEG.

.. figure:: ../../../software/chords/chords-lsl-connector/media/chords-lsl-connector-landing-page.*
    :align: center
    :alt: Halaman Peluncuran Chords LSL Connector 

    Halaman Peluncuran Chords LSL Connector 

- Untuk mengetahui lebih lanjut tentang Chords LSL Connector tonton video YouTube.

.. youtube:: 94lPImB0eRo
    :align: center

Chords LSL Visualizer
=====================

- :ref:`Chords LSL Visualizer<chords-lsl-visualizer>` adalah program berbasis Rust untuk memvisualisasikan sinyal biopotensial dari aliran LSL apa pun.
  
.. figure:: ../../../software/chords/chords-lsl-visualizer/media/chords-lsl-visualizer-landing-page.*
    :align: center
    :alt: Halaman Peluncuran Chords LSL Visualizer 

    Halaman Peluncuran Chords LSL Visualizer 

.. _neuro-play-ground-lite-project-tutorials:

Tutorial Proyek
*****************

NPG Lite, dengan BioAmp multi-saluran, konektivitas nirkabel, operasi baterai, dan antarmuka ekspansi, memungkinkan
pengguna membuat aplikasi HCI dan BCI dengan mudah. Kami telah membuat proyek yang memanfaatkan sinyal ECG, EMG, EOG, dan EEG untuk 
menginspirasi Anda, tetapi kemungkinannya mencakup lebih banyak kasus penggunaan.

Setiap proyek ini berjalan pada ``firmware BLE``, yang dapat Anda flash menggunakan alat flasher berikut: 

- Kami merekomendasikan menggunakan :ref:`NPG Lite Flasher <npg-lite-flasher-uploading-firmware>` untuk flashing Firmware BLE.
- Atau, Anda dapat menggunakan `Arduino IDE <https://github.com/upsidedownlabs/Chords-Arduino-Firmware>`_ untuk mengunggah firmware secara manual.

.. card:: 1. Buat Musik Otot

    Ini adalah antarmuka manusia-komputer (HCI) yang menggunakan data EMG 3-saluran untuk mendeteksi sinyal otot dari 
    tangan kiri, tangan kanan, dan dada untuk mengontrol instrumen musik virtual. Saat otot berkontraksi, setiap saluran 
    memicu efek suara yang berbeda, mengubah tubuh Anda menjadi orkestra organik.

    .. youtube:: O36z_YhaDqg
        :align: center

    .. Note::

        - Untuk mempelajari proyek ini, kunjungi halaman Instructables kami untuk panduan detail: `Muscle Melody: Buat Musik Dengan Gerakan Otot Anda (EMG) <https://www.instructables.com/Muscle-Melody-Play-Music-With-Your-Muscle-Movement/>`_
        
        - Kunjungi `Antarmuka Web <https://amanmahe.github.io/Muscle_game/>`__ untuk memvisualisasikan secara real-time.

.. card:: 2. Lacak Ticker Anda

    Proyek ini berfokus pada penangkapan sinyal elektrokardiogram (ECG) untuk menghitung detak jantung menggunakan
    Neuro PlayGround Lite dan menampilkannya di browser berbasis Chrome di ponsel secara real-time
    melalui koneksi Bluetooth LE.

    .. youtube:: 2UDBqEsjJSI
        :align: center

    .. Note::

        - Untuk mempelajari proyek ini, kunjungi halaman Instructables kami untuk panduan detail: `Pantau ECG dan Detak Jantung di Ponsel Anda <https://www.instructables.com/Monitor-ECG-and-Heartrate-on-Your-Mobile-Phone/>`_

        - Kunjungi `Antarmuka Web <https://ciumsy.github.io/ECG_Monitor/>`__ untuk memvisualisasikan secara real-time.

.. card:: 3. Lompat dalam Sekejap Mata

    Alih-alih menggunakan keyboard, Anda dapat mengontrol permainan hanya dengan berkedip. Setup mendeteksi sinyal EOG dari mata, 
    mengirim data melalui Bluetooth LE ke PC, mendeteksi kedipan mata, dan kemudian mengambil kedipan mata sebagai pemicu untuk meniru penekanan 
    spasi. Anda dapat mengonfigurasi kode untuk menyimulasikan penekanan tombol lainnya juga.

    .. youtube:: ZJmUUtHJj08
        :align: center

    .. Note::

        - Untuk mempelajari proyek ini, kunjungi halaman Instructables kami untuk panduan detail: `Mengontrol Keyboard Dengan Kedipan Mata Menggunakan Neuro PlayGround Lite <https://www.instructables.com/Controlling-Keyboard-With-Eye-Blinks-Using-Neuro-P/>`_

.. card:: 4. Pop Gelembung Dengan Pikiran Anda

    Proyek ini menampilkan aplikasi antarmuka otak-komputer (BCI) yang menggunakan sinyal elektroensefalografi (EEG) 
    untuk mengoperasikan permainan pop gelembung interaktif di browser web. Sistem mengidentifikasi aktivitas gelombang beta (12–30 Hz), 
    yang menunjukkan tingkat konsentrasi dan perhatian. Gelembung muncul dan pop saat pengguna mempertahankan fokus, tetapi berhenti pop
    saat konsentrasi berkurang.
    
    .. youtube:: MGTNjFtikZE
        :align: center

    .. Note::

        - Untuk mempelajari proyek ini, kunjungi halaman Instructables kami untuk panduan detail: `Pop Gelembung Dengan Pikiran Anda (EEG) | Neuro PlayGround (NPG) Lite <https://www.instructables.com/Pop-Bubbles-With-Your-Mind-EEG-Neuro-PlayGround-NP/>`_
        
        - Kunjungi `Antarmuka Web <https://upsidedownlabs.github.io/Focion/>`__ untuk memvisualisasikan secara real-time.

.. card:: 5. CortEX

    CortEX adalah platform neurofeedback meditasi open-source yang menggabungkan sinyal EEG dan ECG
    untuk memberikan umpan balik real-time tentang keadaan mental dan emosional Anda. Dirancang untuk meningkatkan mindfulness, 
    ini memvisualisasikan aktivitas gelombang otak, detak jantung, dan keseimbangan belahan untuk membantu Anda bermeditasi lebih 
    efektif - semua dari browser Anda, menggunakan perangkat NPG Lite.
    
    .. youtube:: O3F-0UWxNfA
        :align: center

    .. Note::
        
        - Untuk mempelajari proyek ini, kunjungi halaman Instructables kami untuk panduan detail: `Perjalanan Neurofeedback Meditasi <https://www.instructables.com/A-Neurofeedback-Meditation-Journey/>`_

        - Kunjungi `Antarmuka Web <https://upsidedownlabs.github.io/CortEX/>`__  untuk memvisualisasikan secara real-time.
 
.. card:: 6. Mobil Terkontrol Otak: Kontrol Robotik EEG + EMG

    Mobil Terkontrol Otak mengubah gelombang otak (EEG) dan aktivitas otot (EMG) menjadi kontrol robotik real-time,
    memungkinkan Anda mengemudikan mobil tanpa remote tradisional - cukup fokuskan pikiran Anda untuk maju, 
    tekuk lengan kiri atau kanan Anda untuk belok, atau kedua lengan untuk mundur. Didukung oleh Neuro PlayGround Lite,
    perangkat biopotensial nirkabel, sistem menangkap sinyal Anda melalui elektroda dan mengirimkannya melalui BLE ke penerima berbasis ESP32 yang menggerakkan motor. 
    Proyek ini menawarkan pandangan langsung ke masa depan interaksi manusia-mesin, 
    di mana pikiran dan gerakan secara mulus memerintah mesin.

    .. youtube:: US_cDCRjV6c
        :align: center

    .. Note::
        
        - Untuk mempelajari proyek ini, kunjungi halaman Instructables kami untuk panduan detail: `Mobil Terkontrol Otak : Kontrol Robotik EEG + EMG <https://www.instructables.com/Brain-Controlled-Car-EEG-EMG-Robotic-Control/>`_
 
.. card:: 7. Bermain GTA V Dengan Fokus & Otot Anda

    Kontrol GTA V menggunakan pikiran Anda! Sistem Gaming Terkontrol Otak menggunakan 
    Neuro PlayGround Lite nirkabel untuk menerjemahkan gelombang otak (EEG) dan kontraksi otot (EMG) 
    Anda menjadi kontrol permainan. Fokus untuk mempercepat, dan tekuk lengan kiri atau kanan Anda untuk mengemudi. Proyek BCI ini 
    memberikan pandangan menakjubkan ke masa depan gaming, memungkinkan Anda memerintah mobil Anda dengan 
    sinyal tubuh Anda saja.

    .. youtube:: LhvBo8MP7iQ
        :align: center

.. card:: 8. Cuboid

    Cuboid adalah permainan bertenaga neurofeedback yang mengubah fokus Anda menjadi aksi. Menggunakan data gelombang otak
    real-time dari perangkat NPG Lite, permainan menantang Anda untuk memindahkan kuboid geometris ke atas dengan
    mempertahankan fokus mental. Dengan beberapa tingkat kesulitan, streaming EEG langsung, dan umpan balik visual, 
    Cuboid mengubah konsentrasi menjadi pengalaman terkontrol otak yang imersif.
    
    .. Note::
        
        - Kunjungi `Antarmuka Web <https://upsidedownlabs.github.io/Cuboid/>`__ untuk memvisualisasikan secara real-time.

.. card:: 9. Kekuatan Otot

    Permainan Kekuatan Otot mengubah upaya fisik Anda menjadi data yang bermakna. Cukup hubungkan 
    ke kelompok otot mana pun yang ingin Anda fokuskan, dan Anda akan langsung memvisualisasikan aktivitas listrik mentah 
    yang dihasilkan otot Anda. Tapi itu lebih dari data mentah; permainan juga memproses informasi ini 
    untuk menampilkan kekuatan otot real-time Anda. Ini memungkinkan Anda melacak kemajuan, mengidentifikasi area untuk perbaikan, dan terlibat dengan latihan Anda dengan cara yang benar-benar berbasis data. 
    Baik Anda atlet, memulihkan dari cedera, atau hanya penasaran tentang tubuh Anda, proyek ini 
    menawarkan jendela unik ke kemampuan otot Anda.


    .. Note::

        - Kunjungi `Antarmuka Web <https://chords.upsidedownlabs.tech/muscle-strength>`__  untuk memvisualisasikan secara real-time.

.. card:: 10. Pikiran-ke-Kata Menggunakan EEG

    Aplikasi Pikiran-ke-Kata (M2W) adalah alat Komunikasi Asistif inovatif yang memungkinkan pengguna 
    mengontrol antarmuka menu hanya melalui kedipan mata. Ini menggunakan artefak EOG yang ada di sinyal EEG saluran tunggal, 
    yang ditangkap oleh perangkat NPG Lite. Fungsi inti bergantung pada algoritma novel yang memisahkan dan mengenali sinyal kontrol yang berbeda: kedipan ganda digunakan untuk mengaktifkan atau beralih antara opsi, sementara kedipan tiga digunakan untuk mengonfirmasi dan membuat pilihan.

    .. youtube:: UyXsqCrVxh4
        :align: center

    .. Note::

        - Aplikasi Web M2W: `Antarmuka Web <https://upsidedownlabs.github.io/M2W/>`__ 


.. dropdown:: Neuro-PlayGround Lite C3 (Usang)

    .. rubric:: Ringkasan

    Neuro Playground (NPG) Lite adalah perangkat amplifikasi sinyal bio-potensial nirkabel multichannel 
    dirancang untuk merekam EMG, ECG, EOG, dan EEG. It datang dalam 
    form factor `Adafruit feather <https://learn.adafruit.com/adafruit-feather/overview>`_ kompak dan 
    menawarkan konektivitas WiFi/BLE. Dengan penambahan papan anak disebut Playmate, pengguna dapat 
    dengan mudah meningkatkan kemampuan perangkat, memungkinkan siswa/peneliti/hobi untuk membuat aplikasi HCI dan BCI yang luar biasa.


    .. figure:: media/npg-C3-hero-1.*
        :align: center
        :alt: Neuro PlayGround (NPG) Lite C3

        Neuro PlayGround (NPG) Lite C3

    .. rubric:: Fitur & Spesifikasi

    +------------------------+-----------------------------------------------------------------------+
    | Jumlah saluran         | 3                                                                     |
    +------------------------+-----------------------------------------------------------------------+
    | Opsi daya              | USB type C atau baterai LiPo                                          |
    +------------------------+-----------------------------------------------------------------------+
    | Mikrokontroler         | ESP32-C3 (RISC-V) dengan 4MB Flash                                    |
    +------------------------+-----------------------------------------------------------------------+
    | Pasokan daya           | LDO 600mA dengan penyaringan                                          |
    +------------------------+-----------------------------------------------------------------------+
    | Opsi konektivitas      | WiFi, Bluetooth, USB                                                  |
    +------------------------+-----------------------------------------------------------------------+
    | Opsi debugging         | JTAG, UART                                                            |
    +------------------------+-----------------------------------------------------------------------+
    | LED                    | LED Pengguna, LED pengisian, 6 LED RGB yang dapat dialamatkan         |
    +------------------------+-----------------------------------------------------------------------+
    | Tombol                 | Tombol reset & pengguna                                               |
    +------------------------+-----------------------------------------------------------------------+
    | BioPotensial           | EMG, ECG, EOG dan EEG                                                 |
    +------------------------+-----------------------------------------------------------------------+
    | Perangkat keras kompatibel | Playmate NPG & FeatherWing                                            |
    +------------------------+-----------------------------------------------------------------------+
    | Perlindungan           | Perlindungan ESD pasien & USB bawaan                                  |
    +------------------------+-----------------------------------------------------------------------+

    .. rubric:: Tata Letak Papan

    .. figure:: media/npg-C3-front-annotations.*
        :align: center
        :alt: Anotasi Neuro PlayGround (NPG) Lite C3

        Anotasi Neuro PlayGround (NPG) Lite C3

    .. rubric:: Playmate

    Playmate adalah papan ekspansi modular yang dirancang untuk meningkatkan fungsionalitas **Neuro Play Ground (NPG) Lite**. Add-on ini terintegrasi dengan mulus dengan sistem inti, memungkinkan pengguna memperluas kemampuan mereka untuk membuat aplikasi HCI & BCI yang luar biasa.

    **VibZ**

    Playmate pertama, **VibZ**, memperkenalkan umpan balik haptic, buzzer, port QWIIC untuk integrasi sensor yang mudah, saklar ON/OFF, dan pin header elektroda. Dengan Playmate ini, pengguna dapat menyesuaikan setup mereka untuk aplikasi spesifik, baik dalam penelitian, pendidikan, atau eksperimen biofeedback interaktif. Pendekatan modular ini memastikan fleksibilitas, skalabilitas, dan pengalaman pengguna yang lebih baik.

    .. figure:: media/npg-C3-playmate-annotations.*
        :align: center
        :alt: Playmate VibZ

        Playmate VibZ

    .. rubric:: Fitur & Spesifikasi

    +---------------------------------------------------+
    | Pin header Dupont 2.54mm untuk koneksi elektroda  |
    +---------------------------------------------------+
    | Motor getar untuk umpan balik haptic              |
    +---------------------------------------------------+
    | Buzzer untuk umpan balik audio                    |
    +---------------------------------------------------+
    | Port QWIIC / STEMMA QT I2C                        |
    +---------------------------------------------------+
    | Saklar ON/OFF                                     |
    +---------------------------------------------------+
