.. _muscle-bioamp-candy:

Muscle BioAmp Candy
#####################

Ringkasan
*********

Sensor Elektromiografi (EMG) saluran tunggal berukuran permen untuk perekaman sinyal otot
dengan biaya terjangkau. Ini adalah versi SMD dari :ref:`muscle-bioamp-biscute` yang dapat digunakan untuk membuat
proyek Human-Computer Interface (HCI) yang luar biasa.

.. figure:: media/Muscle-BioAmp-Candy-front.*
    :width: 800
    :align: center


Fitur & Spesifikasi
*****************************

+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Tegangan Input Minimum| 3.3-30 V                                                                                                                                                         |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Impedansi Input       | 10^11 ohm                                                                                                                                                        |
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
| Dimensi               | 3.5 x 1.5 cm                                                                                                                                                     |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Sumber Terbuka        | Perangkat Keras + Perangkat Lunak                                                                                                                                 |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+

Perangkat Keras
**********

Gambar di bawah menunjukkan gambaran cepat desain perangkat keras.

.. only:: html

    .. grid:: 1 1 2 2
        :margin: 4 4 0 0 
        :gutter: 2

        .. grid-item::
            
            .. card::

                **PCB Depan**
                ^^^^^
                .. figure:: media/PCBfront.*

        .. grid-item::
            
            .. card::

                **PCB Belakang**
                ^^^^^
                .. figure:: media/PCBback.*

.. only:: latex

    .. figure:: media/PCBfront.*
        :width: 60%

        PCB Depan

    .. figure:: media/PCBback.*
        :width: 60%

        PCB Belakang

.. figure:: media/muscle-bioamp-candy-front.*
    :align: center
    :width: 60%

    PCB Dirakit - Depan

.. figure:: media/muscle-bioamp-candy-back.*
    :align: center
    :width: 60%

    PCB Dirakit - Belakang
    
.. figure:: media/dimensions.*
    :align: center

    Tata Letak PCB

.. figure:: media/schematic.*
    :align: center

    Diagram Skematik

Isi kit
********************

+--------------------------+-----+
| Isi kit                  | Qty |
+==========================+=====+
| Muscle BioAmp Candy      | 1   |
+--------------------------+-----+
| BioAmp Cable v3          | 1   |
+--------------------------+-----+
| Jumper cables (set of 3) | 1   |
+--------------------------+-----+
| Muscle BioAmp Band       | 1   |
+--------------------------+-----+
| Boxy gel electrodes      | 3   |
+--------------------------+-----+

.. figure:: media/kit-contents.*
    :align: center

    Isi kit

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

Langkah 1: Hubungkan Arduino UNO R3
=================================

Hubungkan ``VCC`` ke ``5V`` atau ``3.3V``, ``GND`` ke ``GND``, dan ``OUT`` ke ``Analog pin A0`` Arduino UNO Anda melalui kabel jumper yang kami berikan. Jika Anda menghubungkan ``OUT`` ke pin analog lain, maka Anda harus mengubah `INPUT PIN` dalam sketsa arduino contoh sesuai.

.. figure:: media/arduino-candy-connection.*
    :align: center
    :width: 70%

.. note:: Untuk tujuan demonstrasi kami menunjukkan koneksi sensor dengan Arduino UNO R3 tetapi Anda dapat menggunakan papan pengembangan lain atau ADC mandiri pilihan Anda.

.. warning:: Berhati-hatilah saat menghubungkan ke daya, jika pin daya (GND & VCC) ditukar, sensor Anda akan terbakar dan menjadi tidak dapat digunakan (DIE).

Langkah 2: Menghubungkan kabel elektroda
========================================

Hubungkan kabel BioAmp ke Muscle BioAmp Candy dengan memasukkan ujung kabel di konektor JST PH seperti yang ditunjukkan.

.. figure:: media/candy-cable-connection.*
    :width: 70%
    :align: center

Langkah 3: Persiapan Kulit
===============================================

Oleskan Gel Persiapan Kulit Nuprep pada permukaan kulit tempat elektroda akan ditempatkan untuk menghilangkan sel kulit mati dan membersihkan kulit dari kotoran. Setelah menggosok permukaan kulit secara menyeluruh, bersihkan dengan tisu alkohol atau tisu basah.

Untuk informasi lebih lanjut, silakan lihat langkah-langkah detail :ref:`skin-preparation`.

Langkah 4: Mengukur EMG (Elektromiografi)
===============================================

Penempatan elektroda
-----------------------

Kami memiliki 2 opsi untuk mengukur sinyal EMG, baik menggunakan elektroda gel atau menggunakan Band BioAmp Otot berbasis elektroda kering. Anda dapat mencoba keduanya satu per satu.

- **Menggunakan elektroda gel:**

1. Hubungkan kabel BioAmp ke elektroda gel,
2. Kupas backing plastik dari elektroda
3. Tempatkan kabel IN+ dan IN- di lengan dekat saraf ulnar & REF (referensi) di bagian belakang tangan Anda seperti yang ditunjukkan di diagram koneksi.

.. figure:: media/candy-emg.*
    :align: center

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
----------------------

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

Memvisualisasikan sinyal EMG
------------------------------

Untuk memvisualisasikan sinyal EMG, gunakan `Chords Web <https://chords.upsidedownlabs.tech/>`__ untuk visualisasi sinyal bio-potensial real-time yang cepat dan tanpa masalah langsung dari browser Anda, tanpa menginstal perangkat lunak apa pun.

.. figure:: ../../../software/chords/chords-web/media/chords_emg_signal.*
    :align: center
    :alt: Memvisualisasikan sinyal EMG di Chords Web

    Memvisualisasikan sinyal EMG di Chords Web

Sekarang tekuk lengan Anda untuk memvisualisasikan sinyal otot secara real-time di laptop Anda.

.. figure:: media/using-candy.*
    :align: center
    :alt: Memvisualisasikan sinyal EMG di Arduino IDE v1.8.x

    Memvisualisasikan sinyal EMG di Arduino IDE v1.8.x

**Tutorial video:**

.. youtube:: lPX2TGBcHOA
    :align: center
    :width: 100%