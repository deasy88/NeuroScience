.. _chords-pythons:

Chords-Python
##############

.. youtube:: bj7exKRsuZ8

Ringkasan
********

Chords-Python adalah sekumpulan alat sumber terbuka untuk merekam sinyal bio-potensial seperti **ECG**, **EMG**, **EEG**, atau **EOG**, bersama dengan visualisasi menggunakan perangkat keras BioAmp. Ini ideal untuk tujuan pendidikan karena mempromosikan Neurosains DIY dan membuat eksplorasi sinyal bio-potensial lebih mudah diakses untuk siswa dan peneliti.

Fitur
********

+---------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Fitur                     | Deskripsi                                                                                                                                                                          |
+===========================+===================================================================================================================================================================================+
| Koneksi                   | Mendukung koneksi wired dan wireless melalui Wi-Fi, Bluetooth, atau USB (Serial).                                                                                                |
+---------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Pembacaan Data            | Membaca paket data dari papan pengembangan secara real-time, memprosesnya secara efisien untuk mencegah kehilangan data dan memastikan representasi sinyal yang akurat untuk analisis dan visualisasi.|
+---------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Logging CSV               | Secara opsional mencatat data masuk ke file CSV dengan kolom untuk counter dan data saluran, memungkinkan penyimpanan, analisis, dan berbagi yang mudah.                         |
+---------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Streaming LSL             | Streaming data melalui Lab Streaming Layer (LSL), protokol untuk berbagi data waktu-sinkron. Memungkinkan analisis real-time, visualisasi, atau integrasi dengan alat seperti BrainVision. |
+---------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Aplikasi                  | Menyediakan antarmuka untuk menjalankan beberapa aplikasi secara simultan melalui stream LSL.                                                                                    |
+---------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Buat Aplikasi Kustom      | Memungkinkan pengguna untuk mengembangkan dan mengintegrasikan aplikasi mereka sendiri dengan sistem.                                                                            |
+---------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

Persyaratan Perangkat Lunak  
*********************

- `Arduino IDE <https://www.arduino.cc/en/software>`_ – Diperlukan untuk mengunggah firmware Chords Arduino ke papan pengembangan Anda.  
- `Python <https://www.python.org/downloads/>`_ – Pastikan Anda memiliki versi terbaru yang terinstal.  
- `VS Code <https://code.visualstudio.com/>`_ atau editor kode lainnya (Sebagai alternatif, Anda dapat menggunakan Command Prompt).  

Persyaratan Perangkat Keras
*********************

Untuk menggunakan Chords-Python, Anda memerlukan:

- Papan pengembangan (`Compatible Boards <https://github.com/upsidedownlabs/Chords-Arduino-Firmware/blob/main/README.md>`_)  
- Kabel USB (tipe tergantung pada papan)
- `BioAmp Hardware <https://docs.upsidedownlabs.tech/hardware/index.html>`_ dan aksesorinya

Menyiapkan perangkat keras
***********************

Buat semua koneksi sesuai dengan `perangkat keras yang Anda gunakan <https://docs.upsidedownlabs.tech/hardware/index.html>`_ , termasuk koneksi sensor dengan papan pengembangan, koneksi tubuh dengan sensor, dan koneksi dari papan pengembangan ke laptop Anda.

Mengunggah kode
******************

Setelah Anda semua siap, saatnya mengunggah kode ke papan pengembangan Anda. Pergi ke repositori GitHub `Chords Arduino Firmware <https://github.com/upsidedownlabs/Chords-Arduino-Firmware>`_ , gulir ke bawah ke tabel papan yang didukung, cari nama papan Anda, dan klik sketsa Arduino yang sesuai dengan baris tersebut.
Salin sketsa dan tempel ke Arduino IDE.
Pergi ke tools, pilih papan Anda, dan port COM yang benar. Sekarang, tekan tombol upload.

.. _using-chords-python:

Membuka Chords-Python
*********************

Ada dua cara untuk menggunakan Chords-Python:

**A. Menggunakan Paket Python `chordspy` (Direkomendasikan)**

**B. Menjalankan Script Secara Manual dari Repository**

A. Menggunakan paket chordspy
=============================

Ini adalah cara paling lancar untuk memulai. Ikuti langkah-langkah di bawah ini:

1. **Instal Python**  
   Pastikan versi terbaru Python terinstal.

2. **Buat dan Aktifkan Virtual Environment**:

   - **Pada Windows**:

      .. code-block:: console

         python -m venv .venv

      .. code-block:: console

         .venv\Scripts\activate

   - **Pada macOS/Linux**:

      .. code-block:: console

         python3 -m venv .venv

      .. code-block:: console

         source .venv/bin/activate

3. **Instal Paket**:

   .. code-block:: console

      pip install chordspy

4. **Luncurkan Antarmuka Web**:

   .. code-block:: console

      chordspy

Antarmuka web akan terbuka di mana Anda dapat menghubungkan perangkat dan mengakses aplikasi.

.. figure:: ./media/light-interface.*
   :align: center
   :alt: Interface in Light Mode
   
   Interface in Light Mode

.. figure:: ./media/dark-interface.*
   :align: center
   :alt: Interface in Dark Mode

   Interface in Dark Mode

B. Running Scripts Manually (Alternative)
=========================================

If you prefer running scripts directly (for development, debugging, or customization):

1. **Download the Repository**:

   - You can download the Chords-Python repository from GitHub by visiting the following link: `Chords-Python <https://github.com/upsidedownlabs/Chords-Python/>`_.

   - Or, you can clone the repository using Git by running the following command:

   .. code-block:: console

      git clone https://github.com/upsidedownlabs/Chords-Python.git

2. **Create and Activate a Virtual Environment** (if not already):

   - **On Windows**:

      .. code-block:: console

         python -m venv .venv

      .. code-block:: console

         .venv\Scripts\activate

   - **On macOS/Linux**:

      .. code-block:: console

         python3 -m venv .venv

      .. code-block:: console

         source .venv/bin/activate

3. **Install Requirements**:

   .. code-block:: console

      pip install -r requirements.txt

4. **Run the Application**:

   Navigate to the `chordspy` folder and run:

   .. code-block:: console

      python -m chordspy.app                          # To launch the web interface
      python -m chordspy.connection --protocol usb    # To start LSL stream via USB
      python -m chordspy.connection --protocol ble    # To start LSL stream via BLE
      python -m chordspy.connection --protocol wifi   # To start LSL stream via WiFi

   To run any application, open a new terminal:

   .. code-block:: console

      python chordspy.gui.py         # GUI Application
      python chordspy.ffteeg.py      # EEG with FFT Analysis

Koneksi
**********

Langkah pertama adalah membuat koneksi dengan perangkat Anda dan memulai stream.

Ada tiga opsi koneksi yang tersedia:

- Wi-Fi
- Bluetooth
- Serial (USB)

Wi-Fi
=====

1. Unggah firmware Wi-Fi melalui repositori ``Chords-Arduino-Firmware``
2. Nyalakan perangkat dan hubungkan ke access point yang dibuat oleh perangkat (misalnya, ``npg-lite-2``)
3. Di antarmuka web:

   - Klik tombol **Wi-Fi**
   - Klik tombol **Connect**

Notifikasi pop-up akan muncul yang menunjukkan koneksi berhasil.

Bluetooth
=========

1. Unggah firmware Bluetooth melalui repositori ``Chords-Arduino-Firmware``
2. Nyalakan perangkat dan aktifkan Bluetooth di komputer Anda
3. Di antarmuka web:

   - Klik tombol **Bluetooth**
   - Pilih perangkat Anda dari daftar perangkat yang tersedia
   - Tekan tombol **Connect**

Notifikasi pop-up akan muncul yang menunjukkan koneksi berhasil.

Serial (USB)
============

1. Unggah firmware Serial melalui repositori ``Chords-Arduino-Firmware``
2. Hubungkan perangkat ke komputer Anda menggunakan kabel USB
3. Di antarmuka web:

   - Klik tombol **Serial**
   - Klik tombol **Connect**

Notifikasi pop-up akan muncul yang menunjukkan koneksi berhasil.

.. note::
   Langkah koneksi penting karena memulai LSL Stream, yang diperlukan untuk menjalankan aplikasi.

CSV Logging
***********

Data mentah yang diterima dari perangkat dapat dicatat ke file CSV untuk analisis lebih lanjut atau penyimpanan. Fitur opsional ini dapat diaktifkan atau dinonaktifkan di antarmuka web.

Untuk menggunakan logging CSV:

1. Klik tombol **Start recording** untuk mulai mencatat
   - File dengan nama dibuat ``ChordsPy_{timestamp}.csv`` di folder yang sama.
   - File menyertakan kolom untuk counter dan data channel
2. Klik tombol **Stop recording** untuk mengakhiri pencatatan
   - File akan disimpan di folder yang sama

.. figure:: ./media/csv.*
   :align: center
   :alt: CSV Logging

   CSV Logging

Aplikasi
************

Ada banyak aplikasi yang tersedia yang streaming LSL dan dapat dijalankan untuk berbagai tujuan.

Daftar aplikasi yang tersedia:

1. `ECG with Heart Rate`
========================

.. youtube:: tZud2tc-TGI

Ringkasan
--------

**ECG with Heart Rate** adalah aplikasi real-time yang dirancang untuk memvisualisasikan dan menganalisis data Elektrokardiogram (ECG) menggunakan protokol Lab Streaming Layer (LSL). Dibangun dengan Python dan PyQt5, aplikasi ini menyediakan antarmuka grafis untuk memantau sinyal ECG, mendeteksi R-peaks (detak jantung), dan menghitung detak jantung secara real-time. Ini menerapkan teknik pemrosesan sinyal dan menggunakan pustaka `neurokit2` untuk memperkirakan deteksi R-peak dan detak jantung.

Fitur
--------

+-----------------------------------------------------------------------+-----------------------------------------------------------------------------------------------------------------+
| Fitur                                                                | Deskripsi                                                                                                       |
+=======================================================================+=================================================================================================================+
| 1. Visualisasi ECG Real-Time                                         | - Menampilkan sinyal ECG real-time dalam plot dinamis menggunakan `pyqtgraph`.                                 |
|                                                                       | - Mendukung penskalaan sumbu y yang dapat disesuaikan berdasarkan laju sampling (mis. 250 Hz atau 500 Hz).     |
+-----------------------------------------------------------------------+-----------------------------------------------------------------------------------------------------------------+
| 2. Deteksi R-Peak                                                    | - Menggunakan pustaka `neurokit2` untuk mendeteksi R-peaks dalam sinyal ECG.                                    |
|                                                                       | - Menyoroti R-peaks yang terdeteksi sebagai titik merah pada plot untuk visualisasi yang mudah.                |
+-----------------------------------------------------------------------+-----------------------------------------------------------------------------------------------------------------+
| 3. Perhitungan Detak Jantung                                         | - Menghitung detak jantung (dalam BPM) menggunakan interval waktu antara R-peaks berturut-turut.               |         
|                                                                       | - Menerapkan filter rata-rata bergerak untuk menghaluskan nilai detak jantung dan mengurangi noise.            |
+-----------------------------------------------------------------------+-----------------------------------------------------------------------------------------------------------------+
| 4. GUI Interaktif                                                    | - Dibangun dengan PyQt5, menyediakan antarmuka yang ramah pengguna dengan plot ECG real-time dan tampilan detak jantung. |         
|                                                                       | - Memungkinkan klik ganda untuk mereset tingkat zoom plot ke pengaturan default.                               |                                                                                           
+-----------------------------------------------------------------------+-----------------------------------------------------------------------------------------------------------------+
| 5. Pemfilteran Sinyal                                                | - Menerapkan filter Butterworth low-pass untuk menghilangkan noise frekuensi tinggi dari sinyal ECG.           |         
|                                                                       | - Membantu meningkatkan kejelasan sinyal, yang dapat membantu dalam mengidentifikasi R-peaks.                  |                                                                                           
+-----------------------------------------------------------------------+-----------------------------------------------------------------------------------------------------------------+

Jendela GUI akan muncul, menampilkan sinyal ECG real-time bersama dengan detak jantung yang dihitung.

.. figure:: ./media/heartbeat_ecg.*
   :align: center
   :alt: Heart Rate with ECG

   Heart Rate with ECG

2. `EMG with Envelope`
======================

.. youtube:: TiDwSQEY2eY

Ringkasan
--------

**EMG with Envelope** adalah aplikasi berbasis Python yang dirancang untuk memvisualisasikan dan menganalisis sinyal Elektromiografi (EMG) secara real-time. Ini terhubung ke stream data EMG menggunakan protokol Lab Streaming Layer (LSL), memproses sinyal untuk mengekstrak envelope EMG, dan menampilkan sinyal EMG yang difilter dan envelope-nya dalam antarmuka grafis yang ramah pengguna. Dibangun dengan `PyQt5` dan `pyqtgraph`, aplikasi ini menyediakan alat visualisasi responsif dan interaktif untuk siswa, peneliti, atau pengembang yang bekerja dengan data EMG.

Fitur
--------

+-----------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------+
| Fitur                                                                | Deskripsi                                                                                                                 |
+=======================================================================+===========================================================================================================================+
| 1. Visualisasi Sinyal EMG Real-Time                                  | - Terhubung ke stream LSL untuk memperoleh data EMG real-time.                                                           |
|                                                                       | - Menampilkan sinyal EMG setelah menerapkan filter high-pass (cutoff 70 Hz) untuk menghilangkan noise frekuensi rendah.   |
+-----------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------+
| 2. Ekstraksi Envelope EMG                                            | - Menghitung envelope Root Mean Square (RMS) dari sinyal EMG yang difilter menggunakan jendela bergerak.                 |
|                                                                       | - Menerapkan konvolusi dengan jendela seragam dan padding hasil untuk menyelaraskan dengan panjang sinyal asli.          |
+-----------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------+
| 3. GUI Interaktif dan Responsif                                      | - Dibangun menggunakan `PyQt5` untuk antarmuka pengguna modern dan intuitif.                                             |         
|                                                                       | - Fitur dua plot tersinkronisasi: satu untuk sinyal EMG yang difilter dan satu untuk envelope EMG.                       |
|                                                                       | - Menonaktifkan zoom dan pan untuk visualisasi sumbu tetap yang bersih.                                                  |
+-----------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------+
| 4. Pemrosesan Sinyal yang Dapat Disesuaikan                          | - Menerapkan filter Butterworth high-pass untuk menghilangkan drift baseline dan noise.                                  |         
|                                                                       | - Menyesuaikan ukuran jendela RMS secara dinamis berdasarkan laju sampling (mis., 25 sampel untuk 250 Hz, 50 sampel untuk 500 Hz).|                                                                                           
+-----------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------+
| 5. Pembaruan Plot Dinamis                                            | - Memperbarui plot secara real-time menggunakan buffer melingkar berukuran tetap untuk penanganan data yang efisien.    |         
|                                                                       | - Menyegarkan tampilan setiap 15 milidetik untuk visualisasi yang halus dan responsif.                                  |                                                                                           
+-----------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------+

Jendela GUI akan muncul, menampilkan sinyal EMG real-time bersama dengan Envelope EMG yang dihitung.

.. figure:: ./media/emgenvelope.*
   :align: center
   :alt: EMG with Envelope

   EMG with Envelope

3. `EOG with Blinks`
====================

**EOG with Blinks** adalah aplikasi berbasis Python yang dirancang untuk memvisualisasikan dan mendeteksi kedipan mata secara real-time menggunakan sinyal Elektrookulografi (EOG). Dibangun dengan framework PyQt5 dan PyQtGraph untuk plotting, aplikasi ini terhubung ke stream LSL (Lab Streaming Layer) untuk memperoleh data EOG, memproses sinyal menggunakan filter low-pass, dan mendeteksi kedipan berdasarkan threshold dinamis. Aplikasi ini menyediakan antarmuka dual-plot untuk menampilkan sinyal EOG yang difilter dan kedipan yang terdeteksi, menjadikannya alat yang berguna untuk pemantauan dan analisis data EOG secara real-time.

Fitur
=========

+-----------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------+
| Fitur                                                                | Deskripsi                                                                                                                 |
+=======================================================================+===========================================================================================================================+
| 1. Visualisasi Sinyal EOG Real-Time                                  | - Menampilkan sinyal EOG yang difilter secara real-time menggunakan filter low-pass (cutoff 10 Hz).                      |
|                                                                       | - Memperbarui plot secara dinamis dengan jendela rolling 5 detik untuk pemantauan berkelanjutan.                          |
+-----------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------+
| 2. Antarmuka Dual-Plot                                               | - Plot Sinyal EOG: Menampilkan sinyal EOG yang difilter dengan puncak yang terdeteksi ditandai merah.                    |
|                                                                       | - Plot Deteksi Kedipan: Menampilkan representasi biner dari kedipan yang terdeteksi (1 untuk kedipan, 0 untuk tidak).    |
+-----------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------+
| 3. Deteksi Kedipan                                                    | - Mendeteksi kedipan dengan mengidentifikasi puncak dalam sinyal EOG yang difilter.                                      |         
|                                                                       | - Menggunakan threshold dinamis berdasarkan mean dan standar deviasi sinyal untuk membedakan kedipan dari noise.        |
|                                                                       | - Menerapkan gap waktu minimum (0.1 detik) antara kedipan yang terdeteksi untuk menghindari false positive.              |
+-----------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------+
| 4. GUI Ramah Pengguna                                                | - Dibangun dengan PyQt5 untuk antarmuka responsif dan intuitif.                                                          |         
|                                                                       | - Termasuk fitur seperti garis grid, auto-scaling, dan penonaktifan zoom untuk kegunaan yang lebih baik.                |                                                                                           
+-----------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------+

Jendela GUI akan muncul, menampilkan sinyal EOG real-time bersama dengan Kedipan yang ditandai sebagai titik Merah.

.. figure:: ./media/eog.*
   :align: center
   :alt: EOG with Blinks

   EOG with Blinks

4. `EEG with FFT`
=================

.. youtube:: yVD9KmyZgxA

Ringkasan
--------

**EEG with FFT and Brainwave Power** adalah aplikasi berbasis Python yang dirancang untuk memvisualisasikan dan menganalisis sinyal Elektroensefalografi (EEG) secara real-time. Ini terhubung ke stream data EEG menggunakan protokol Lab Streaming Layer (LSL), memproses sinyal untuk menghilangkan noise, dan melakukan Fast Fourier Transform (FFT) untuk menghitung daya dari berbagai band frekuensi gelombang otak (Delta, Theta, Alpha, Beta, dan Gamma). Aplikasi ini menyediakan antarmuka pengguna grafis (GUI) yang dibangun dengan `PyQt5` dan `pyqtgraph` untuk visualisasi real-time sinyal EEG mentah, hasil FFT, dan distribusi daya gelombang otak.

Fitur
--------

+-----------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------+
| Fitur                                                                | Deskripsi                                                                                                                 |
+=======================================================================+===========================================================================================================================+
| 1. Visualisasi EEG Multi-Channel                                     | - Menampilkan sinyal EEG mentah dari semua channel yang tersedia secara real-time.                                       |
|                                                                       | - Setiap channel ditampilkan dalam plot scrolling dengan jendela bergerak 500 sampel.                                    |
+-----------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------+
| 2. Analisis FFT Multi-Channel                                        | - Menghitung dan menampilkan FFT untuk semua channel EEG secara simultan.                                                |
|                                                                       | - Memvisualisasikan hasil FFT dalam plot terpisah, fokus pada rentang 0-50 Hz.                                           |
+-----------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------+
| 3. Pemrosesan Sinyal                                                  | - Menerapkan filter notch untuk menghilangkan interferensi powerline 50 Hz.                                               |         
|                                                                       | - Menggunakan filter bandpass (0.5-48 Hz) untuk mengisolasi frekuensi EEG yang relevan.                                   |
|                                                                       | - Menerapkan jendela Hanning untuk komputasi FFT untuk mengurangi kebocoran spektral.                                     |
+-----------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------+
| 4. Analisis Daya Gelombang Otak Single-Channel                        | - Menghitung daya dari lima band frekuensi gelombang otak:                                                                |
|                                                                       |     - Delta (0.5-4 Hz)                                                                                                    |
|                                                                       |     - Theta (4-8 Hz)                                                                                                      |
|                                                                       |     - Alpha (8-13 Hz)                                                                                                     |
|                                                                       |     - Beta (13-30 Hz)                                                                                                     |
|                                                                       |     - Gamma (30-45 Hz)                                                                                                    |         
|                                                                       | - Menampilkan daya dari setiap band dalam bagan batang untuk perbandingan yang mudah.                                    |                                                                                           
+-----------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------+
| 5. GUI Ramah Pengguna                                                 | - Menyediakan antarmuka bersih dan intuitif dengan Tiga panel:                                                           |
|                                                                       |    - Kiri atas: Waveform EEG multi-channel                                                                                |
|                                                                       |    - Kanan atas: Hasil FFT multi-channel                                                                                  |
|                                                                       |    - Kanan bawah: Analisis daya gelombang otak single-channel                                                             |         
|                                                                       | - Memungkinkan pengguna untuk memantau data EEG multi-channel dan komponen frekuensinya secara simultan.                 |                                                                                           
+-----------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------+

Jendela GUI akan muncul, menampilkan sinyal EEG real-time bersama dengan FFT yang dihitung dan distribusi daya gelombang otak.

.. figure:: ./media/ffteeg.*
   :align: center
   :alt: EEG with FFT

   EEG with FFT

.. tip::

   Untuk memastikan Anda merekam sinyal berkualitas tinggi, lihat panduan detail di sini: :ref:`Troubleshooting EEG Signal Quality <recording_quality_eeg>`.

5. `EEG Tug of War Game`
========================

.. youtube:: XAhcYg1J_7k

Ringkasan
--------

**EEG Tug of War Game** adalah aplikasi berbasis Python yang memanfaatkan sinyal Elektroensefalografi (EEG) untuk membuat permainan interaktif dua pemain. Pemain mengontrol gerakan bola di layar dengan memodulasi aktivitas otak mereka, khususnya band frekuensi Alpha dan Beta. Permainan menggunakan protokol Lab Streaming Layer (LSL) untuk memperoleh data EEG real-time, memproses sinyal untuk menghitung daya relatif dalam band Alpha dan Beta, dan menerjemahkannya menjadi gaya yang menggerakkan bola. Pemain pertama bertujuan untuk mendorong bola ke sisi lawan untuk mencetak skor dan memenangkan permainan. Aplikasi dibangun menggunakan pustaka `pygame` untuk antarmuka grafis dan terintegrasi dengan `pylsl` untuk akuisisi data EEG.

Fitur
--------

+-----------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------+
| Fitur                                                                | Deskripsi                                                                                                                 |
+=======================================================================+===========================================================================================================================+
| 1. Visualisasi Sinyal EEG Real-Time                                  | - Terhubung ke stream LSL untuk memperoleh data EEG real-time.                                                           |
|                                                                       | - Menghitung densitas spektral daya (PSD) dari band frekuensi Alpha (8-13 Hz) dan Beta (13-30 Hz) menggunakan metode Welch. |
|                                                                       | - Menghitung rasio daya relatif (Beta/Alpha) untuk menentukan gaya pemain.                                               |
+-----------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------+
| 2. Gameplay Interaktif                                               | - Dua pemain bersaing untuk memindahkan bola ke sisi lawan menggunakan aktivitas otak mereka.                            |
|                                                                       | - Gerakan bola ditentukan oleh gaya bersih yang berasal dari sinyal EEG pemain.                                          |
+-----------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------+
| 3. Thresholding Dinamis                                              | - Menggunakan rata-rata bergerak dari 10 titik data terakhir untuk menghaluskan perhitungan gaya.                        |         
|                                                                       | - Menerapkan threshold untuk mencegah fluktuasi kecil mempengaruhi gerakan bola.                                         |                                                             
+-----------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------+
| 4. GUI Ramah Pengguna                                                | - Fitur antarmuka grafis layar penuh dengan bola tengah dan paddle dua pemain.                                           |         
|                                                                       | - Menampilkan pembaruan real-time dari posisi bola dan gaya yang diterapkan oleh setiap pemain.                          |  
|                                                                       | - Termasuk tombol untuk memulai, menjeda, melanjutkan, dan keluar dari permainan.                                        |                                                                                        
+-----------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------+
| 5. Kondisi Menang dan Feedback                                        | - Menyatakan pemenang ketika bola mencapai salah satu sisi layar.                                                        |         
|                                                                       | - Memainkan efek suara untuk merayakan pemenang.                                                                         | 
|                                                                       | - Secara otomatis menjeda permainan saat menang dan memungkinkan restart.                                               |                                                                                         
+-----------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------+

Jendela permainan akan terbuka, menampilkan tombol untuk **START/RESTART**, **PLAY/PAUSE**, dan **EXIT**. Tombol-tombol ini menawarkan kontrol intuitif, memungkinkan pemain untuk dengan mudah memulai, menjeda, melanjutkan, atau keluar dari permainan sesuai kebutuhan.

.. figure:: ./media/game.*
   :align: center
   :alt: EEG Tug of War

   EEG Tug of War

Untuk instruksi detail, lihat Instructable `EEG Tug of War Game <https://www.instructables.com/Play-Tug-of-War-Game-With-Your-Mind-Using-EEG-1/#ible-footer-portal>`_.

6. `EEG Beetle Game`
====================

Ringkasan
--------

**EEG Beetle Game** adalah aplikasi berbasis Python yang menggunakan sinyal Elektroensefalografi (EEG) untuk mengontrol gerakan kumbang dalam lingkungan permainan 2D. Permainan memanfaatkan protokol Lab Streaming Layer (LSL) untuk memperoleh data EEG real-time, memproses sinyal untuk mendeteksi tingkat fokus pengguna, dan menerjemahkannya menjadi gerakan ke atas atau ke bawah kumbang. Aplikasi dibangun menggunakan pustaka `pygame` untuk antarmuka permainan dan terintegrasi dengan teknik pemrosesan sinyal untuk menganalisis data EEG secara real-time.

Fitur
--------

+-----------------------------------------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------+
| Fitur                                                                | Deskripsi                                                                                                                                        |
+=======================================================================+=================================================================================================================================================+
| 1. Visualisasi Sinyal EEG Real-Time                                  | - Terhubung ke stream LSL untuk memperoleh data EEG real-time.                                                                                  |
|                                                                       | - Menerapkan filter notch untuk menghilangkan interferensi power line 50 Hz dan filter bandpass untuk mengisolasi band frekuensi EEG yang relevan (0.5–48 Hz). |
+-----------------------------------------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------+
| 2. Perhitungan Tingkat Fokus                                         | - Menghitung tingkat fokus pengguna dengan menganalisis densitas spektral daya dari sinyal EEG.                                                 |
|                                                                       | - Tingkat fokus dihitung menggunakan rasio daya frekuensi tinggi (beta dan gamma) terhadap frekuensi rendah (delta, theta, dan alpha).          |
+-----------------------------------------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------+
| 3. Sistem Kalibrasi                                                  | - Termasuk fase kalibrasi untuk menetapkan baseline tingkat fokus untuk pengguna.                                                               |         
|                                                                       | - Mengatur threshold fokus secara dinamis berdasarkan data EEG pengguna selama kalibrasi.                                                      |
+-----------------------------------------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------+
| 4. Kontrol Gerakan Kumbang                                           | - Memindahkan kumbang ke atas ketika tingkat fokus pengguna melebihi threshold.                                                                 |         
|                                                                       | - Memindahkan kumbang ke bawah ketika tingkat fokus di bawah threshold.                                                                         |
|                                                                       | - Menerapkan animasi halus dan batasan batas untuk memastikan kumbang tetap dalam jendela permainan.                                           |                                                                                       
+-----------------------------------------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------+
| 5. Antarmuka Permainan Interaktif                                    | - Fitur lingkungan permainan 2D dengan sprite kumbang yang merespons tingkat fokus pengguna.                                                    |         
|                                                                       | - Menampilkan feedback real-time pada posisi kumbang dan tingkat fokus.                                                                         |                                                                                           
+-----------------------------------------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------+
| 6. Animasi Dinamis                                                   | - Menggunakan urutan sprite kumbang untuk membuat animasi yang halus.                                                                           |
|                                                                       | - Menyesuaikan kecepatan animasi berdasarkan frame rate permainan.                                                                              |
+-----------------------------------------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------+

Jendela GUI akan muncul, menampilkan semua pesan kalibrasi, diikuti dengan permainan dimulai, dan akhirnya menampilkan permainan dengan kumbang.

.. figure:: ./media/beetle.*
   :align: center
   :alt: EEG Beetle Game

   EEG Beetle Game

7. `GUI`
========

.. youtube:: BseTIdoimws

Ringkasan
--------

Aplikasi **GUI** adalah alat berbasis Python yang dirancang untuk memvisualisasikan stream data real-time dari perangkat Arduino menggunakan protokol Lab Streaming Layer (LSL). Aplikasi terhubung ke stream LSL, mengambil data multi-channel, dan memplotnya secara real-time menggunakan pustaka `pyqtgraph`.

Fitur
--------

+-----------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------+
| Fitur                                                                | Deskripsi                                                                                                                 |
+=======================================================================+===========================================================================================================================+
| 1. Integrasi Stream LSL                                              | - Secara otomatis mencari dan terhubung ke stream LSL yang tersedia.                                                     |
|                                                                       | - Mendukung deteksi dinamis jumlah channel dalam stream.                                                                 |
|                                                                       | - Menampilkan status koneksi dan jumlah channel di GUI.                                                                  |
+-----------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------+
| 2. Visualisasi Data Real-Time                                        | - Memplot data real-time untuk setiap channel dalam grafik terpisah.                                                     |
|                                                                       | - Memperbarui plot pada frekuensi tinggi untuk visualisasi yang halus.                                                   |
+-----------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------+
| 3. GUI yang Dapat Disesuaikan                                        | - Dibangun menggunakan `PyQt` dan `pyqtgraph` untuk antarmuka responsif dan interaktif.                                  |
|                                                                       | - Fitur tata letak bersih dengan plot individu untuk setiap channel.                                                     |
|                                                                       | - Termasuk status bar untuk menampilkan detail koneksi LSL.                                                              |
+-----------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------+

Jendela GUI akan muncul yang menampilkan data secara real-time.

.. figure:: ./media/gui.*
   :align: center
   :alt: GUI

   GUI

8. `EOG Keystroke Emulator`
===========================

.. youtube:: ZJmUUtHJj08

Ringkasan
--------

**EOG Keystroke Emulator** adalah aplikasi berbasis Python yang dirancang untuk mendeteksi kedipan mata menggunakan sinyal Elektrookulografi (EOG) dan menerjemahkannya menjadi keystroke. Aplikasi memanfaatkan protokol Lab Streaming Layer (LSL) untuk memperoleh data EOG real-time, memproses sinyal untuk mendeteksi kedipan, dan mensimulasikan penekanan spacebar setiap kali kedipan terdeteksi. Aplikasi dibangun menggunakan pustaka `tkinter` untuk antarmuka pengguna grafis (GUI) dan terintegrasi dengan `pyautogui` untuk emulasi keystroke.

Fitur
--------

+-----------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------+
| Fitur                                                                | Deskripsi                                                                                                                 |
+=======================================================================+===========================================================================================================================+
| 1. Pemrosesan Sinyal EOG Real-Time                                   | - Terhubung ke stream LSL untuk memperoleh data EOG real-time.                                                           |
|                                                                       | - Menerapkan filter low-pass untuk menghaluskan sinyal EOG untuk deteksi kedipan yang akurat.                            |
+-----------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------+
| 2. Deteksi Kedipan                                                    | - Mendeteksi kedipan dengan mengidentifikasi puncak dalam sinyal EOG yang difilter.                                      |
|                                                                       | - Menggunakan threshold dinamis berdasarkan mean dan standar deviasi sinyal untuk membedakan kedipan dari noise.        |
|                                                                       | - Menggabungkan periode refraktori untuk mencegah deteksi ganda dari satu kedipan.                                       |
+-----------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------+
| 3. Emulasi Keystroke                                                  | - Mensimulasikan penekanan spacebar (`pyautogui.press('space')`) setiap kali kedipan terdeteksi.                         |
|                                                                       | - Menyediakan feedback visual dengan memperbarui warna tombol GUI saat deteksi kedipan.                                  |
+-----------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------+
| 4. GUI Ramah Pengguna                                                | - Fitur jendela popup kompak, dapat dipindahkan dengan antarmuka bersih dan intuitif.                                    |
|                                                                       | - Termasuk tombol untuk terhubung ke stream LSL, memulai/menghentikan deteksi kedipan, dan keluar dari aplikasi.         |
|                                                                       | - Menampilkan ikon mata untuk mewakili status deteksi kedipan.                                                           |
+-----------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------+

Jendela kecil muncul di sudut, menampilkan tombol *Connect*. Setelah terhubung, tombol *Start* menjadi terlihat. Menekan tombol *Start* memulai deteksi kedipan, dan setiap kedipan yang terdeteksi memicu penekanan tombol spacebar.

.. figure:: ./media/keystroke.*
   :align: center
   :alt: Keystroke Emulator

   Keystroke Emulator

9. `CSV Plotter`
================

.. youtube:: wMnCOprRpZo

Ringkasan
--------

**CSV Plotter** adalah aplikasi berbasis Python yang dirancang untuk memvisualisasikan data dari file CSV. Dibangun menggunakan pustaka `tkinter` untuk antarmuka pengguna grafis (GUI) dan `plotly` untuk visualisasi data, alat ini memungkinkan pengguna untuk memuat file CSV, memilih channel data tertentu, dan menghasilkan plot garis interaktif.

Fitur
--------

+-----------------------------------------------------------------------+----------------------------------------------------------------------------------------------------------------------------------+
| Fitur                                                                | Deskripsi                                                                                                                        |
+=======================================================================+==================================================================================================================================+
| 1. Memuat File CSV                                                   | - Pengguna dapat memuat file CSV yang berisi data dengan kolom `Counter` dan beberapa channel (mis., `Channel1`, `Channel2`, dll.). |
|                                                                       | - Aplikasi secara otomatis mendeteksi baris header dan melewati metadata di atasnya.                                             |
+-----------------------------------------------------------------------+----------------------------------------------------------------------------------------------------------------------------------+
| 2. Pemilihan Channel                                                 | - Menu dropdown secara dinamis diisi dengan channel yang tersedia (mis., `Channel1`, `Channel2`, dll.) dari file CSV yang dimuat. |
|                                                                       | - Pengguna dapat memilih channel tertentu untuk diplot.                                                                          |
+-----------------------------------------------------------------------+----------------------------------------------------------------------------------------------------------------------------------+
| 3. Visualisasi Data Interaktif                                       | - Menggunakan `plotly` untuk menghasilkan plot garis interaktif untuk channel yang dipilih.                                      |
|                                                                       | - Plot termasuk fitur canggih seperti:                                                                                           |
|                                                                       |     - *Zoom*: Zoom in untuk memeriksa rentang data tertentu.                                                                     |
|                                                                       |     - *Pan*: Bergerak di seluruh plot untuk menjelajahi bagian berbeda.                                                           |
|                                                                       |     - *Autoscale*: Secara otomatis menyesuaikan skala plot agar sesuai dengan data.                                              |
|                                                                       |     - *Download Plot as PNG*: Simpan plot yang dihasilkan sebagai gambar PNG berkualitas tinggi.                                 |
|                                                                       |     - *Hover-to-View Data Points*: Hover di atas plot untuk melihat nilai data yang tepat.                                        |
+-----------------------------------------------------------------------+----------------------------------------------------------------------------------------------------------------------------------+ 
| 4. Antarmuka Ramah Pengguna                                          | - GUI sederhana dan intuitif dengan tombol untuk memuat file dan memplot data.                                                   |
|                                                                       | - Menampilkan nama file CSV yang dimuat untuk referensi mudah.                                                                   |
+-----------------------------------------------------------------------+----------------------------------------------------------------------------------------------------------------------------------+

Pop-up kecil akan muncul, menyediakan opsi untuk memuat file, memilih channel, dan memplot data.

.. figure:: ./media/csvplotter.*
   :align: center
   :alt: CSV Plotter

   CSV Plotter

10. `EOG Morse Decoder`
=======================

Ringkasan
--------

**EOG Morse Decoder** adalah aplikasi berbasis Python yang memungkinkan pengguna untuk memasukkan kode Morse menggunakan gerakan mata yang terdeteksi melalui sinyal Elektrookulografi (EOG). Dengan menggerakkan mata ke kiri atau kanan, Anda dapat menghasilkan titik dan garis, dan dengan melakukan kedipan ganda atau triple, Anda dapat mengirim karakter atau backspace. Aplikasi ini ideal untuk komunikasi tanpa tangan dan penelitian aksesibilitas.

.. figure:: ./media/morse_decoder.png
   :align: center
   :alt: Morse Decoder

   Morse Decoder

Fitur
========

+-----------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------+
| Fitur                                                                | Deskripsi                                                                                                                 |
+=======================================================================+===========================================================================================================================+
| 1. Pemrosesan Sinyal EOG Real-Time                                   | - Terhubung ke stream LSL untuk memperoleh data EOG real-time.                                                           |
|                                                                       | - Menerapkan filter notch dan bandpass untuk menghilangkan noise dan mengisolasi sinyal gerakan mata.                    |
+-----------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------+
| 2. Deteksi Gerakan Mata                                               | - Mendeteksi gerakan mata kiri dan kanan dengan menganalisis deviasi dari baseline yang dihitung secara dinamis.        |
|                                                                       | - Menggunakan threshold yang dapat disesuaikan dengan slider GUI interaktif untuk penyesuaian sensitivitas real-time.     |
+-----------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------+
| 3. Input Kode Morse                                                   | - Gerakan mata kiri menghasilkan titik (.)                                                                               |
|                                                                       | - Gerakan mata kanan menghasilkan garis (-)                                                                              |
|                                                                       | - Kedipan ganda mengirim urutan Morse saat ini sebagai huruf.                                                            |
|                                                                       | - Kedipan triple bertindak sebagai backspace untuk menghapus karakter terakhir.                                          |
+-----------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------+
| 4. GUI Interaktif dengan Visualisasi Real-Time                       | - Menampilkan pesan yang didekode dalam font besar, jelas menggunakan GUI Tkinter.                                       |
|                                                                       | - Grafik batang real-time menampilkan envelope kedipan dan deviasi gerakan mata.                                         |
|                                                                       | - Penyesuaian threshold klik-dan-drag pada indikator visual.                                                              |
|                                                                       | - Menampilkan isi buffer saat ini dan status deteksi.                                                                     |
+-----------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------+
| 5. Parameter yang Dapat Disesuaikan                                  | - Penyesuaian threshold interaktif melalui marker yang dapat diklik/ditarik pada batang visualisasi.                     |
|                                                                       | - Threshold terpisah untuk deteksi kedipan dan deteksi gerakan mata.                                                     |
|                                                                       | - Waktu debounce yang dapat dikonfigurasi untuk mencegah deteksi false.                                                  |
+-----------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------+

Jendela GUI akan muncul yang memungkinkan Anda untuk memasukkan kode Morse menggunakan gerakan mata dan menampilkan teks yang didekode secara real-time.

Penempatan Elektroda
-------------------

Penempatan elektroda yang tepat sangat penting untuk deteksi sinyal EOG yang akurat. Tabel di bawah menunjukkan konfigurasi elektroda yang direkomendasikan:

+---------------+------------------------+-----------------------------------+
| Pin Elektroda | Deskripsi              | Penempatan                        |
+===============+========================+===================================+
| A0P           | Channel 1 Positif      | Di bawah mata                     |
+---------------+------------------------+-----------------------------------+
| A0N           | Channel 1 Negatif      | Di atas mata                      |
+---------------+------------------------+-----------------------------------+
| A1P           | Channel 2 Positif      | Di kiri mata kiri                 |
+---------------+------------------------+-----------------------------------+
| A1N           | Channel 2 Negatif      | Di kanan mata kanan               |
+---------------+------------------------+-----------------------------------+
| REF           | Referensi              | Bagian tulang di belakang telinga |
+---------------+------------------------+-----------------------------------+

.. note::
   - Channel 1 (A0P/A0N) mendeteksi gerakan mata vertikal untuk deteksi kedipan
   - Channel 2 (A1P/A1N) mendeteksi gerakan mata horizontal untuk deteksi kiri/kanan
   - Persiapan kulit dan kualitas kontak elektroda yang tepat sangat penting untuk performa optimal

.. figure:: ./media/morse-Code_electrode_placement.jpg
   :align: center
   :alt: Electrode Placement Diagram

   Electrode Placement Diagram

Cara Kerja
------------

- **Akuisisi Sinyal**: Aplikasi terhubung ke stream LSL dan terus membaca data EOG vertikal dan horizontal dari dua channel.
- **Filtering**: Filter notch (50Hz), filter high-pass (1Hz), dan filter low-pass (10Hz) diterapkan untuk menghilangkan interferensi powerline dan mengisolasi frekuensi yang relevan.
- **Pelacakan Baseline**: Baseline rolling dipertahankan untuk EOG horizontal untuk beradaptasi dengan karakteristik sinyal individu.
- **Deteksi Envelope**: Envelope sinyal EOG vertikal dihitung untuk deteksi kedipan yang andal.
- **Deteksi Gerakan**: Deviasi EOG horizontal dari baseline dianalisis untuk mengklasifikasikan gerakan mata kiri dan kanan.
- **Input Kode Morse**: 

  - Gerakan mata kiri → Titik (.)
  - Gerakan mata kanan → Garis (-)
  - Kedipan ganda → Mengirim urutan Morse saat ini sebagai huruf
  - Kedipan triple → Backspace (menghapus karakter terakhir)

- **Tampilan GUI**: Visualisasi real-time menampilkan threshold deteksi, level sinyal, isi buffer, dan pesan yang didekode.

Menyesuaikan Deteksi untuk Sinyal Neural Anda
-------------------------------------------

Aplikasi ini menyediakan GUI intuitif untuk menyesuaikan sensitivitas deteksi secara real-time:

**Penyesuaian Threshold Interaktif:**

- **Threshold Deteksi Kedipan**: Klik atau tarik marker orange pada batang deteksi kedipan untuk menyesuaikan threshold (rentang: 40-260). Nilai yang lebih tinggi memerlukan kedipan yang lebih kuat.
- **Threshold Gerakan Mata**: Klik atau tarik marker orange pada batang gerakan mata untuk menyesuaikan threshold (rentang: 40-260). Nilai yang lebih tinggi memerlukan gerakan mata yang lebih besar.

**Feedback Visual:**

- Batang deteksi kedipan menampilkan nilai envelope saat ini (hijau ketika di bawah threshold, merah ketika di atas)
- Batang gerakan mata menampilkan deviasi dari baseline (biru ketika di bawah threshold, ungu untuk gerakan kiri, merah untuk gerakan kanan)
- Marker threshold menampilkan nilai threshold saat ini dan dapat ditarik untuk penyesuaian

**Parameter Timing** (dapat disesuaikan dalam kode jika diperlukan):

- ``BLINK_DEBOUNCE_MS`` (default: 200ms): Waktu minimum antara deteksi kedipan terpisah
- ``DOUBLE_BLINK_MS`` (default: 1000ms): Jendela waktu untuk deteksi kedipan ganda
- ``TRIPLE_BLINK_MS`` (default: 1500ms): Jendela waktu untuk deteksi kedipan triple
- ``EYE_MOVEMENT_DEBOUNCE_MS`` (default: 750ms): Waktu minimum antara deteksi gerakan mata terpisah

**Tips untuk Performa Optimal:**

- Pastikan NPG Lite terisi daya dan tidak terhubung ke laptop pengisi daya atau perangkat bertenaga AC 
- Duduk jauh dari peralatan bertenaga AC
- Pastikan persiapan kulit dan kualitas kontak elektroda yang tepat. Baca :ref:`Panduan Persiapan Kulit <skin-preparation>` untuk instruksi detail.
- Mulai dengan nilai threshold default dan sesuaikan menggunakan slider GUI berdasarkan kekuatan sinyal Anda
- Pastikan penempatan elektroda yang tepat untuk sinyal EOG vertikal dan horizontal yang bersih
- Pertahankan posisi pandang netral selama perhitungan baseline awal saat startup
- Gunakan batang visualisasi real-time untuk memantau kualitas sinyal dan sesuaikan threshold sesuai


Pemecahan Masalah
---------------

- Jika gerakan tidak terdeteksi dengan andal, gunakan GUI untuk menyesuaikan threshold secara real-time dengan mengklik/menarik marker orange
- Pastikan elektroda ditempatkan dengan benar: EOG vertikal di atas/di bawah satu mata, EOG horizontal di sudut luar kedua mata
- Tetap rileks dan pertahankan posisi pandang netral selama perhitungan baseline awal
- Periksa batang visualisasi real-time untuk memastikan sinyal terdeteksi dengan benar
- Jika kedipan atau gerakan terlalu sensitif, tingkatkan threshold masing-masing menggunakan slider GUI
- Jika kedipan atau gerakan tidak cukup sensitif, turunkan threshold menggunakan slider GUI


Buat Aplikasi Kustom
**************************

Anda dapat membuat aplikasi kustom menggunakan framework yang disediakan dengan mengikuti langkah-langkah berikut:

1. Konfigurasi Metadata Aplikasi:

Edit file ``apps.yaml`` di folder ``config`` dengan detail aplikasi Anda:

.. code-block:: yaml

    - title: "Judul Aplikasi Anda"
      icon: "path/to/your/icon.png"
      color: "your_hex_color"
      script: "path/to/{app_name}.py"
      description: "Deskripsi singkat aplikasi Anda"
      category: "Kategori Anda"

Tambahkan ini sebagai entri baru dalam daftar YAML. Ganti semua placeholder dengan detail aktual Anda.

.. note::
   - Path ``icon`` harus relatif terhadap direktori root aplikasi
   - ``color`` harus dalam format HEX (mis., "#FF5733")
   - Path ``script`` harus menunjuk ke file Python Anda

2. Buat skrip aplikasi:

Buat skrip Python baru di direktori utama dengan nama aplikasi Anda. Skrip harus berisi:

- Penanganan koneksi stream LSL untuk menerima data perangkat
- Komponen antarmuka pengguna menggunakan PyQt5/PyQtGraph
- Logika pemrosesan data untuk sinyal yang masuk

.. tip::
   Gunakan aplikasi yang ada di repositori sebagai implementasi referensi untuk:
   - setup lsl dan akuisisi data
   - Tata letak UI canggih
   - Contoh pemrosesan sinyal
   - Optimasi performa