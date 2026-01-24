.. _npg-lite-ninja:

NPG Lite - Ninja Pack
##################################

Ninja Pack dirancang untuk mereka yang menginginkan setup pra-rakit, siap pakai.  
Ini dilengkapi dengan VibZ Playmate untuk umpan balik haptic dan auditory, dikemas dalam casing cetak 3D kustom dengan baterai termasuk.  
Kit ini sempurna untuk pengguna yang menginginkan pengalaman plug-and-play yang lebih lancar tanpa mengorbankan fleksibilitas atau fungsionalitas.  

👉🏻 **Dapatkan milik Anda di CrowdSupply**: `Neuro PlayGround Lite <https://www.crowdsupply.com/upside-down-labs/neuro-playground-lite>`__

.. figure:: ./media/npg-lite-ninja-box.*
    :align: center
    :alt: Neuro PlayGround Lite Ninja Pack
    
    Neuro PlayGround Lite Ninja Pack

Isi kit
*******

.. figure:: ./media/npg-lite-ninja-pack.*
    :align: center
    :alt: Kit Content Ninja Pack
    
    Kit Contents of NPG Lite Ninja Pack

+-------------------+-----+
| Kit Contents      | Qty |
+===================+=====+
| NPG Lite Board    |  1  |
+-------------------+-----+
| VibZ Playmate     |  1  |
+-------------------+-----+
| Snap Cables       |  7  |
+-------------------+-----+
| Alligator Cables  |  5  |
+-------------------+-----+
| Gel Electrodes    | 24  |
+-------------------+-----+
| LiPo Battery      |  1  |
+-------------------+-----+
| Type-C Cable      |  1  |
+-------------------+-----+
| 3D-Printed Case   |  1  |
+-------------------+-----+

VibZ Playmate
*************

VibZ Playmate memperkenalkan motor vibrasi untuk umpan balik haptic, buzzer untuk umpan balik auditory, port QWIIC untuk integrasi sensor I2C yang mudah, saklar geser ON/OFF, pin header elektroda 2.54 mm dan opsi elektroda negatif umum. Dengan Playmate ini, pengguna dapat menyesuaikan setup mereka untuk aplikasi spesifik, baik dalam penelitian, pendidikan, atau eksperimen biofeedback interaktif. Pendekatan modular ini memastikan fleksibilitas, skalabilitas, dan pengalaman pengguna yang lebih baik.

Menggunakan Kit
***************

Kit ini ramah pemula dan Anda dapat dengan mudah mulai merekam sinyal biopotensial untuk membuat proyek HCI/BCI yang menarik dan menjelajahi bidang neurosains. 
VibZ Playmate dengan mudah terhubung ke papan NPG Lite, menyediakan umpan balik haptic dan auditory sederhana dan memperluas sistem untuk eksperimen interaktif tanpa wiring yang rumit.

Langkah 1: Persiapan Kulit
=========================

Oleskan Gel persiapan kulit Nuprep pada area target di mana
Elektroda akan ditempatkan → Gosok dalam gerakan melingkar → Bersihkan dengan alkohol swab atau tisu basah.

Untuk informasi lebih lanjut, silakan periksa langkah demi langkah detail :ref:`Panduan Persiapan Kulit <skin-preparation>`.

Langkah 2: Hubungkan Kabel BioAmp
==================================

Menggunakan VibZ Anda dapat merekam sinyal biopotensial 3-saluran, hubungkan kabel snap sesuai dengan jumlah saluran yang diperlukan:

.. figure:: ./media/npg-lite-vibz-back.*
    :align: center
    :width: 70%
    :alt: NPG Lite VibZ Playmate Back
    
    Belakang VibZ Playmate NPG Lite

.. figure:: ./media/npg-lite-vibz-connection.*
    :align: center
    :alt: NPG Lite VibZ Playmate Connection
    
    Koneksi VibZ Playmate NPG Lite

+---------------+---------+------------------------+
| Saluran       | Pin     | Koneksi Saluran        |
+===============+=========+========================+
| **Channel 0** | **A0P** | +ve of Channel 0       |
+---------------+---------+------------------------+
|               | **A0N** | -ve of Channel 0       |
+---------------+---------+------------------------+
| **Channel 1** | **A1P** | +ve of Channel 1       |
+---------------+---------+------------------------+
|               | **A1N** | -ve of Channel 1       |
+---------------+---------+------------------------+
| **Channel 2** | **A2P** | +ve of Channel 2       |
+---------------+---------+------------------------+
|               | **A2N** | -ve of Channel 2       |
+---------------+---------+------------------------+
|               | **REF** | Reference cable to REF |
+---------------+---------+------------------------+
|               | **CN**  | Common Negative        |
+---------------+---------+------------------------+

Menggunakan Common Negative (CN)
---------------------------------

Common Negative (CN) adalah fitur penting, terutama saat melakukan perekaman multi-saluran seperti EEG, karena menyederhanakan penempatan elektroda dan wiring.

Untuk mengkonfigurasi saluran agar menggunakan Common Negative, ikuti langkah-langkah berikut:

1. **Pilih Saluran Anda**: Tentukan saluran BioAmp mana (A0, A1, A2) yang ingin Anda bagikan elektroda negatif.
2. **Solder Bridge**: Cari bridge solder kecil yang diberi label 'CN' di sebelah pin negatif saluran (A0N, A1N, A2N).
3. **Buat Common**: Anda harus menyolder bridge ini tertutup. Ini secara fisik menghubungkan input negatif saluran itu ke garis Common Negative utama.
4. **Hubungkan Elektroda Bersama**: Hubungkan kabel snap elektroda negatif tunggal Anda ke pin CN khusus.
5. **Sederhanakan Wiring**: Untuk saluran apa pun yang dikonfigurasi dengan cara ini, Anda tidak lagi perlu menghubungkan elektroda ke pin input negatif yang sesuai (misalnya, A0N, A1N, atau A2N).

.. figure:: media/npg-lite-vibz-cn.*
    :align: center
    :alt: NPG Lite VibZ Playmate Common Negative

    Common Negative VibZ Playmate NPG Lite  

Langkah 3: Tempatkan Elektroda Gel
===============================

EMG (Electromyography)
-------------------------

- **1-CH Setup**: Tempatkan kabel +ve dan -ve dari Saluran 0 pada otot target dan kabel REF pada bagian tulang (belakang telapak tangan atau siku).

- **2-CH Setup**: Tempatkan kabel +ve, -ve dari Saluran 0 & 1 pada otot target dan 1 kabel REF pada bagian tulang.

- **3-CH Setup**: Tempatkan kabel +ve, -ve dari Saluran 0, 1 dan 2 pada otot target dan 1 kabel REF pada bagian tulang.

.. figure:: ../../../hardware/bioamp/neuro-play-ground-lite/media/npg-lite-EMG.*
    :align: center
    :alt: Connection for EMG
    
    Koneksi untuk EMG

ECG (Electrocardiography)
---------------------------

- **1-CH Setup**: Tempatkan kabel -ve dari Saluran 0 di sisi kiri dada, kabel +ve tepat di sebelah kanannya, dan kabel REF di sisi kanan dada.

.. figure:: ../../../hardware/bioamp/neuro-play-ground-lite/media/npg-lite-ECG.*
    :align: center
    :alt: Connection for ECG
    
    Koneksi untuk ECG

EOG (Electrooculography)
-------------------------

**Perekaman Gerakan Horizontal**

- **1-CH Setup**: Tempatkan kabel -ve dari Saluran 0 di sisi kanan mata kanan Anda, kabel +ve di sisi kiri mata kiri, dan kabel REF pada bagian tulang di belakang cuping telinga Anda.

.. figure:: ../../../hardware/bioamp/neuro-play-ground-lite/media/npg-lite-EOG-Horizontal.*
    :align: center
    :alt: Connection for EOG Horizontal
    
    Koneksi untuk EOG Horizontal

**Perekaman Gerakan Vertikal**

- **1-CH Setup**: Tempatkan kabel -ve dari Saluran 0 di atas salah satu mata Anda, elektroda +ve di bawah mata yang sama, dan kabel REF pada area tulang di belakang cuping telinga Anda.

- **2-CH Setup**: Untuk merekam gerakan mata horizontal & vertikal bersama-sama, ikuti penempatan elektroda yang disebutkan di atas untuk Saluran 0 dan 1. Pastikan menggunakan hanya 1 kabel REF.

.. figure:: ../../../hardware/bioamp/neuro-play-ground-lite/media/npg-lite-EOG-Vertical.*
    :align: center
    :alt: Connection for EOG Vertical
    
    Koneksi untuk EOG Vertikal

EEG (Electroencephalography)
-----------------------------

- **1-CH Setup**: Tempatkan kabel +ve dari Saluran 0 pada area target, kabel REF dan -ve pada bagian tulang di belakang setiap cuping telinga. (lihat `Sistem Internasional 10-20 untuk merekam EEG <https://en.wikipedia.org/wiki/10%E2%80%9320_system_(EEG)>`_)

- **2-CH Setup**: Tempatkan kabel +ve dari Saluran 0 dan 1 pada area target (lihat `Sistem Internasional 10-20 untuk merekam EEG <https://en.wikipedia.org/wiki/10%E2%80%9320_system_(EEG)>`_), 1 kabel REF dan 1 kabel CN (Common Negative) pada bagian tulang di belakang setiap cuping telinga.

- **3-CH Setup**: Tempatkan kabel +ve dari Saluran 0, 1, dan 2 pada area target (lihat `Sistem Internasional 10-20 untuk merekam EEG <https://en.wikipedia.org/wiki/10%E2%80%9320_system_(EEG)>`_), 1 kabel REF dan 1 kabel CN (Common Negative) pada bagian tulang di belakang setiap cuping telinga.

.. figure:: ../../../hardware/bioamp/neuro-play-ground-lite/media/npg-lite-EEG.*
    :align: center
    :alt: Connection for EEG
    
    Koneksi untuk EEG

Langkah 4: Unggah Firmware
========================

Ikuti langkah cepat di bawah ini untuk mengunggah firmware ke perangkat NPG Lite Anda:

Untuk panduan unggah firmware detail, kunjungi: :ref:`Cara Flash Firmware pada NPG Lite<npg-lite-flasher>`

- Nyalakan NPG Lite dengan memutar saklar on/off.
- Hubungkan ke Laptop/PC melalui kabel USB-C.
- Unduh :ref:`NPG Lite Flasher<npg-lite-flasher>` dan jalankan aplikasi.
- Pilih jenis firmware, pilih port Anda, dan flash pada NPG Lite Anda.
- Untuk koneksi WiFi atau BLE, lepaskan kabel USB-C dan aktifkan Bluetooth atau Wi-Fi pada laptop Anda berdasarkan Firmware yang diunggah.

Langkah 5: Memvisualisasikan sinyal
================================

Ikuti langkah di bawah ini untuk melihat data sinyal biopotensial real-time dari perangkat NPG Lite Anda:

- Pergi ke `Chords Web <https://chords.upsidedownlabs.tech/>`_
- Klik pada ``Visualize Now``, navigasi ke ``NPG-Lite``, tekan tombol ``Connect`` dan pilih perangkat Anda. 
- Anda dapat melihat sinyal biopotensial secara real-time. 

Untuk panduan detail, kunjungi: :ref:`Dokumentasi Chords Web<chords>`

Jelajahi fitur seperti play/pause data stream, terapkan filter,
tingkatkan jumlah saluran, aktifkan fitur untuk merekam dan
mengunduh data dalam format CSV.

Panduan Koneksi Baterai
*************************

.. important::
    
    Konektor baterai sensitif terhadap polaritas dan memerlukan koneksi yang benar untuk operasi yang aman. Koneksi yang salah akan merusak perangkat. Selalu verifikasi polaritas konektor sebelum menghubungkan.

Opsi 1: Baterai dengan Konektor 1.25mm PicoBlade
==================================================

Jika Anda membeli baterai dari Upside Down Labs, atau jika memiliki konektor ``1.25 mm PicoBlade`` yang sama, Anda dapat mencolokkannya langsung ke konektor baterai pada NPG Lite.

Saat menghubungkan baterai:

- Pastikan :bdg-danger:`Kabel Merah` terhubung ke terminal ``Positif (+)``.
- Pastikan :bdg-black:`Kabel Hitam` terhubung ke terminal ``Negatif (−)``.

Ini memastikan baterai terhubung dengan polaritas yang benar dan mencegah kerusakan pada perangkat.

.. figure:: ../../npg-lite-kits/media/npg-battery-guide-picoblade-connector.*
    :align: center
    :width: 60%
    :alt: Using Battery with 1.25mm PicoBlade Connector
    
    Menggunakan Baterai dengan Konektor 1.25mm PicoBlade

Opsi 2: Menggunakan Baterai dengan Konektor JST-PH 2.0 mm
=========================================================

Jika baterai Anda memiliki konektor ``JST-PH 2.0 mm``, Anda akan perlu menggunakan kabel adaptor yang disertakan dalam kit NPG Lite untuk menghubungkannya.

Ikuti langkah-langkah berikut:

1. Hubungkan baterai ke kabel adaptor dengan konektor JST: Cocokkan warna kabel - ``Merah ke Merah`` dan ``Hitam ke Hitam``.
2. Hubungkan kabel adaptor ke NPG Lite menggunakan konektor PicoBlade:

- Pastikan :bdg-danger:`Kabel Merah` sejajar dengan terminal ``Positif (+)``.
- Pastikan :bdg-black:`Kabel Hitam` sejajar dengan terminal ``Negatif (−)`` pada konektor NPG Lite.

Ini memastikan baterai terhubung dengan polaritas yang benar dan mencegah kerusakan pada perangkat.

.. figure:: ../../npg-lite-kits/media/npg-battery-guide-jst-connector.*
    :align: center
    :width: 60%
    :alt: Using Battery with JST-PH 2.0mm Connector
    
    Menggunakan Baterai dengan Konektor JST-PH 2.0mm

Memverifikasi Polaritas Baterai dengan Multimeter
=============================================

Jika Anda tidak yakin tentang polaritas baterai Anda, verifikasi sebelum koneksi:

- Atur multimeter Anda untuk mengukur Tegangan DC (V⎓) dan pilih rentang 20V atau lebih tinggi jika memiliki dial manual.

- Sentuh :bdg-danger:`probe merah` ke terminal logam konektor di mana :bdg-danger:`kabel merah` terpasang.

- Sentuh :bdg-black:`probe hitam` ke terminal logam di mana :bdg-black:`kabel hitam` terpasang.

Baca tampilan:

- Tegangan positif (misalnya, +3.6V hingga +4.2V): Polaritas benar. ✅
- Tegangan negatif (misalnya, -4.2V): Polaritas terbalik. ❌

.. danger:: 
    
    **Pengingat Keamanan:** Periksa ulang semua koneksi sebelum menyalakan perangkat. Koneksi baterai yang salah akan merusak perangkat.
