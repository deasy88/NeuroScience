.. _muscle-bioamp-blip:

Muscle BioAmp Blip
###################

Ringkasan
*********

Muscle BioAmp Blip [#]_ adalah sensor Elektromiografi (EMG) saluran tunggal yang kompatibel dengan mikroBUS™ [#]_ untuk perekaman sinyal otot yang presisi.
Ini memungkinkan Anda untuk menambahkan fungsi EMG ke proyek Anda dengan mudah. Anda dapat menghubungkannya ke port mikroBUS™ apa pun atau bahkan
breadboard untuk memulai.

.. figure:: media/muscle-bioamp-blip.*
    :width: 800
    :align: center



Fitur & Spesifikasi
*****************************

+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Tegangan Input Minimum| 5 V                                                                                                                                                              |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Impedansi Input       | 10^12 ohm                                                                                                                                                        |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Gain Tetap            | x2420                                                                                                                                                            |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Filter Bandpass       | 72 – 720 Hz                                                                                                                                                      |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Perangkat Keras Kompatibel | Papan pengembangan apa pun dengan ADC (Arduino UNO & Nano, Adafruit QtPy, STM32 Blue Pill, BeagleBone Black, Raspberry Pi Pico, untuk beberapa nama)             |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| BioPotensial          | EMG (Electromyography)                                                                                                                                           |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Jumlah saluran        | 1                                                                                                                                                                |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Elektroda             | 3 (Positif, Negatif, dan Referensi)                                                                                                                              |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Dimensi               | 2.54 x 2.86 cm                                                                                                                                                   |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Sumber Terbuka        | Perangkat Keras + Perangkat Lunak                                                                                                                                 |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+

Perangkat Keras
**********

Gambar di bawah menunjukkan gambaran cepat desain perangkat keras.

.. .. only:: html

..     .. grid:: 1 1 2 2
..         :margin: 4 4 0 0 
..         :gutter: 2

..         .. grid-item::

..             .. card::

..                 **PCB Depan**
..                 ^^^^^
..                 .. figure:: media/muscle-bioamp-blip-front.*

..         .. grid-item::
            
..             .. card::

..                 **PCB Belakang**
..                 ^^^^^
..                 .. figure:: media/muscle-bioamp-blip-front.*

.. .. only:: latex

..     .. figure:: media/muscle-bioamp-blip-front.*
..         :align: center

.. figure:: media/muscle-bioamp-blip-assembled.*
    :align: center
    :width: 60%

    PCB Dirakit

Isi kit
********************

+---------------------+-----+
| Isi kit             | Qty |
+=====================+=====+
| Muscle BioAmp Blip  | 1   |
+---------------------+-----+
| BioAmp Cable v3     | 1   |
+---------------------+-----+
| Muscle BioAmp Band  | 1   |
+---------------------+-----+
| Boxy gel electrodes | 6   |
+---------------------+-----+

.. figure:: media/blip-kit-contents.*
    :align: center
    :width: 80%

Persyaratan perangkat lunak
**********************

Sebelum Anda mulai menggunakan kit, silakan unduh `Arduino IDE v1.8.19 (legacy IDE) <https://www.arduino.cc/en/software>`_. Dengan menggunakan ini Anda akan dapat mengunggah sketsa arduino di papan pengembangan Anda dan memvisualisasikan data di laptop Anda.

.. figure:: ../../../kits/diy-neuroscience/basic/media/arduino-ide.*
    :align: center
    :alt: Arduino IDE v1.8.19 (legacy IDE)

    Arduino IDE v1.8.19 (legacy IDE)


Kunjungi Upside Down Labs `Chords Web <https://chords.upsidedownlabs.tech>`__ untuk memvisualisasikan sinyal bio-potensial Anda langsung di browser.

.. figure:: ../../../software/chords/chords-web/media/chords_landing_page.*
    :align: center
    :alt: Halaman Arahan Chords Web

    Halaman Arahan Chords Web

**Memulai dengan Chords Web**

.. youtube:: IVIPnk9z75g
    :align: center
    :width: 100%


Menggunakan kit
****************

Langkah 1: Menyolder konektor & pin header
============================================

Solder pin header dan konektor JST Ph 2.0mm pada Muscle BioAmp Blip seperti yang ditunjukkan di bawah. Jika Anda memesan kit dirakit maka Anda dapat melewati langkah ini dan langsung ke langkah 2.

.. figure:: media/soldering-blip.*
    :width: 80%
    :align: center

Langkah 2: Koneksi dengan sensor
========================================

Ada berbagai cara menghubungkan Muscle BioAmp Blip. Beberapa opsi diberikan di bawah:

Menghubungkan kabel jumper langsung
-----------------------------------

Anda dapat langsung menghubungkan kabel jumper jantan ke betina pada pin header Muscle BioAmp Blip di ``5V``, ``GND``, ``AN``.

.. figure:: media/blip-with-jumper-cables.*
    :width: 80%
    :align: center

Menghubungkan pada breadboard
---------------------------

Jika Anda berpikir untuk menghubungkan lebih banyak komponen/sensor dan ingin mengintegrasikan Muscle BioAmp Blip dalam sirkuit lengkap maka akan lebih baik menggunakan breadboard. Pasangkan Muscle BioAmp Blip pada breadboard dan hubungkan kabel jumper (jantan ke jantan) di ``5V``, ``GND``, ``AN``.

.. figure:: media/blip-with-breadboard.*
    :width: 80%
    :align: center

Menghubungkan melalui port mikroBUS
-----------------------------

Anda juga dapat menghubungkan Muscle BioAmp Blip ke perangkat keras apa pun yang memiliki port mikroBUS™ seperti mikroBUS™ shuttle, mikroBUS™ Arduino UNO Click Shield untuk beberapa nama.

.. figure:: media/blip-with-shuttle.*
    :width: 80%
    :align: center

Langkah 3: Menghubungkan dengan Arduino UNO R3
=======================================

Hubungkan ``5V`` sensor ke ``5V`` Arduino UNO Anda, ``GND`` ke ``GND``, dan ``AN`` ke ``Analog pin A0`` melalui ujung lain kabel jumper. Jika Anda menghubungkan ``AN`` ke pin analog lain, maka Anda harus mengubah `INPUT PIN` dalam sketsa arduino contoh sesuai.

.. figure:: media/blip-arduino-connections.*
    :align: center

.. note:: Untuk tujuan demonstrasi kami menunjukkan koneksi sensor dengan Arduino UNO R3 tetapi Anda dapat menggunakan papan pengembangan lain atau ADC mandiri pilihan Anda.

Langkah 4: Menghubungkan kabel elektroda
========================================

Hubungkan kabel BioAmp ke Muscle BioAmp Blip dengan memasukkan ujung kabel di konektor JST PH seperti yang ditunjukkan.

.. figure:: media/blip-bioamp-cable.*
    :align: center

Langkah 5: Persiapan Kulit
===============================================

Oleskan Gel Persiapan Kulit Nuprep pada permukaan kulit tempat elektroda akan ditempatkan untuk menghilangkan sel kulit mati dan membersihkan kulit dari kotoran. Setelah menggosok permukaan kulit secara menyeluruh, bersihkan dengan tisu alkohol atau tisu basah.

Untuk informasi lebih lanjut, silakan lihat langkah-langkah detail :ref:`skin-preparation`.

Langkah 6: Penempatan elektroda
===============================================

Kami memiliki 2 opsi untuk mengukur sinyal EMG, baik menggunakan elektroda gel atau menggunakan Band BioAmp Otot berbasis elektroda kering. Anda dapat mencoba keduanya satu per satu.

Menggunakan elektroda gel
----------------------

1. Hubungkan kabel BioAmp ke elektroda gel,
2. Kupas backing plastik dari elektroda
3. Tempatkan kabel IN+ dan IN- di lengan dekat saraf ulnar & REF (referensi) di bagian belakang tangan Anda seperti yang ditunjukkan di diagram koneksi.

.. only:: latex

   .. figure:: media/emg-connections-1.*
       :align: center
       :width: 60%

       Muscle BioAmp Blip dengan breadboard

.. only:: html

   .. figure:: media/emg-connections-1.*
       :align: center

       Muscle BioAmp Blip dengan breadboard

Menggunakan Band BioAmp Otot
---------------------------

1. Hubungkan kabel BioAmp ke Band BioAmp Otot dengan cara sehingga IN+ dan IN- ditempatkan di lengan dekat saraf ulnar & REF (referensi) di sisi jauh band.
2. Sekarang letakkan tetesan kecil gel elektroda antara kulit dan bagian logam kabel BioAmp untuk mendapatkan hasil terbaik.

.. tip:: Kunjungi dokumentasi lengkap tentang cara :ref:`merakit dan menggunakan Band BioAmp <using-bioamp-bands>` atau ikuti video youtube yang diberikan di bawah.
   **Tutorial tentang cara menggunakan band:**

   .. youtube:: xYZdw0aesa0
       :align: center
       :width: 100%

.. note:: Dalam demonstrasi ini kami merekam sinyal EMG dari saraf ulnar, tetapi Anda dapat merekam EMG dari area lain juga (bisep, trisep, kaki, rahang dll) sesuai kebutuhan proyek Anda. Pastikan untuk menempatkan elektroda IN+, IN- pada otot yang ditargetkan dan REF pada bagian tulang.

Langkah 7: Mengunggah kode
=============================

Hubungkan Arduino UNO R3 Anda ke laptop menggunakan kabel USB (Tipe A ke Tipe B). Salin tempel salah satu sketsa arduino yang diberikan di bawah di Arduino IDE v1.8.19 yang Anda unduh sebelumnya:

:fab:`github;pst-color-primary` `EMG Filter <https://github.com/upsidedownlabs/Muscle-BioAmp-Arduino-Firmware/blob/main/2_EMGFilter/2_EMGFilter.ino>`_

:fab:`github;pst-color-primary` `EMG Envelope <https://github.com/upsidedownlabs/Muscle-BioAmp-Arduino-Firmware/blob/main/3_EMGEnvelope/3_EMGEnvelope.ino>`_

Pergi ke ``tools`` dari menu bar, pilih opsi ``board`` lalu pilih Arduino UNO. Di menu yang sama,
pilih port COM tempat Arduino Uno Anda terhubung. Untuk mengetahui port COM yang benar,
putuskan sambungan papan Anda dan buka kembali menu. Entri yang menghilang harus
port COM yang benar. Sekarang unggah kode, & buka serial plotter dari menu ``tools`` untuk memvisualisasikan
sinyal EMG.

Setelah membuka serial plotter pastikan untuk memilih baud rate ke 115200.

.. warning:: Pastikan laptop Anda tidak terhubung ke charger dan duduk 5m jauh dari peralatan AC apa pun untuk akuisisi sinyal terbaik.

Langkah 8: Memvisualisasikan sinyal EMG
=====================================

Untuk memvisualisasikan sinyal EMG, gunakan `Chords Web <https://chords.upsidedownlabs.tech/>`__ untuk visualisasi sinyal bio-potensial real-time yang cepat dan tanpa masalah langsung dari browser Anda, tanpa menginstal perangkat lunak apa pun.

.. figure:: ../../../software/chords/chords-web/media/chords_emg_signal.*
    :align: center
    :alt: Memvisualisasikan sinyal EMG di Chords Web

    Memvisualisasikan sinyal EMG di Chords Web

Sekarang tekuk lengan Anda untuk memvisualisasikan sinyal otot secara real-time di laptop Anda.

.. figure:: media/emg-recording.*
    :align: center
    :alt: Memvisualisasikan sinyal EMG di Arduino IDE v1.8.x

    Memvisualisasikan sinyal EMG di Arduino IDE v1.8.x

.. rubric:: Catatan Kaki

.. [#] Harap dicatat bahwa click board adalah merek dagang terdaftar MIKROE sehingga Anda mungkin melihat tanda putih pada PCB Muscle BioAmp Blip v0.1 (karena sensor dinamai sebagai Muscle BioAmp Click sebelumnya).
.. [#] mikroBUS™ adalah standar soket yang dikembangkan oleh MIKROE yang memungkinkan ratusan Click boards™ terhubung ke mikrokontroler atau mikroprosesor.
