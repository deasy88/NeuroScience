.. _muscle-bioamp-shield:

Muscle BioAmp Shield
######################

:bdg-danger:`v0.3`

Ringkasan
**********

Muscle BioAmp Shield adalah perisai Arduino Uno Elektromiografi (EMG) all-in-one untuk belajar neurosains dengan mudah yang terinspirasi dari 
BackYard Brains (BYB) `Muscle Spiker shield <https://backyardbrains.com/products/muscleSpikerShield>`_ dan menyediakan fitur serupa seperti output servo hobi, tombol pengguna, LED Bar, output Audio, dan 
input baterai. Ini sempurna untuk pemula karena mereka dapat dengan mudah menumpuknya di atas Arduino Uno untuk merekam, memvisualisasikan dan mendengarkan sinyal otot mereka 
untuk membuat proyek luar biasa di domain Human-Computer Interface (HCI).

.. figure:: media/muscle-bioamp-shield.*
    :align: center

Fitur & Spesifikasi
****************************

Muscle BioAmp Shield dilengkapi dengan berbagai opsi plug-and-play sehingga Anda dapat menghubungkan ratusan papan ekstensi seperti layar OLED, 
layar karakter, akselerometer, dan pengontrol servo untuk beberapa nama saja menggunakan antarmuka STEMMA I2C. Anda juga mendapatkan port STEMMA 
digital dan STEMMA analog. Pada port STEMMA analog Anda dapat menghubungkan BioAmp EXG Pill tambahan atau sensor lain dengan output analog. Pada port STEMMA digital Anda dapat menghubungkan sensor digital atau aktuator apa pun pilihan Anda.

.. .. figure:: media/shield-pamphlet.*
..     :align: center

+---------------------+---------------------------------------+
| Tegangan Input      | 5V                                    |
+---------------------+---------------------------------------+
| Impedansi Input     | 10^11 ohm                             |
+---------------------+---------------------------------------+
| Gain Tetap          | x2420                                 |
+---------------------+---------------------------------------+
| Filter Bandpass     | 72 – 720 Hz                           |
+---------------------+---------------------------------------+
| Perangkat Keras Kompatibel | Arduino UNO                           |
+---------------------+---------------------------------------+
| BioPotensial        | EMG (Elektromiografi)                 |
+---------------------+---------------------------------------+
| Jumlah saluran      | 1                                     |
+---------------------+---------------------------------------+
| Elektroda           | 3 (Positif, Negatif, dan Referensi)   |
+---------------------+---------------------------------------+
| Dimensi             | 6.0 x 5.3 cm                          |
+---------------------+---------------------------------------+
| Open Source         | Perangkat Keras + Perangkat Lunak     |
+---------------------+---------------------------------------+

Perangkat Keras
*********

Gambar di bawah menunjukkan gambaran cepat desain perangkat keras.

.. only:: html

    .. grid:: 1 1 2 2
        :margin: 4 4 0 0 
        :gutter: 2

        .. grid-item::

            .. card::

                **PCB Depan**
                ^^^^^
                .. figure:: media/Muscle-BioAmp-Shield-Front.*

        .. grid-item::
            
            .. card::

                **PCB Belakang**
                ^^^^^
                .. figure:: media/Muscle-BioAmp-Shield-Back.*

.. only:: latex

    .. figure:: media/Muscle-BioAmp-Shield-Front.*
        :align: center
        :width: 30%

        `PCB Depan`

    .. figure:: media/Muscle-BioAmp-Shield-Back.*
        :align: center
        :width: 30%

        `PCB Belakang`

.. figure:: media/Assembly/24_Assembled.*
    :align: center
    :width: 80%

    `PCB Dirakit`

.. figure:: media/dimensions.*
    :align: center

    `Tata Letak PCB`

.. figure:: media/Schematic.*
    :align: center

    `Diagram Skematik`

Isi Kit
********************

Ada 2 varian tersedia untuk kit Muscle BioAmp Shield v0.3 - satu datang dengan perisai dirakit dan yang lainnya berisi PCB kosong sensor dan komponen secara terpisah yang dapat Anda rakit dengan cukup mudah.


.. figure:: media/kit-contents-assembled.*
    :align: center
    :width: 80%

    `Isi kit Muscle BioAmp Shield dirakit`

|

.. figure:: media/kit-contents-unassembled.*
    :align: center
    :width: 80%

    `Isi kit Muscle BioAmp Shield tidak dirakit`


Klik tautan di bawah untuk melihat unboxing kit:

.. youtube:: w8yw12SUe6Q
  :width: 100%
  :align: center

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
    :alt: Halaman Peluncuran Chords Web 

    Halaman Peluncuran Chords Web

**Memulai dengan Chords Web**

.. youtube:: IVIPnk9z75g
    :align: center
    :width: 100%

.. only:: html

    Merakit Kit
    ********************

    Anda dapat mendapatkan kantong bagian Muscle BioAmp Shield Anda sendiri dari `toko online kami <https://linktr.ee/Upside_Down_Labs_stores>`_ (pengiriman ke seluruh dunia) 
    dan untuk merakit perisai Anda dapat melihat `BOM interaktif ini <https://upsidedownlabs.github.io/DIY-Muscle-BioAmp-
    Shield/ibom.html>`_ atau panduan langkah demi langkah di bawah ini. 

    .. note:: Ikuti bentuk kuning yang disorot untuk merakit perisai Anda!

    .. grid:: 1 1 2 2
        :margin: 2 2 0 0 
        :gutter: 2

        .. grid-item::
            
            .. figure:: media/Assembly/01_Bare_Board.*

                **Langkah 1 - Papan Kosong**

        .. grid-item::

            .. figure:: media/Assembly/02_1M_Resistors.jpg
                
                **Langkah 2 - Resistor 1M** 

        .. grid-item::

            .. figure:: media/Assembly/03_330R_Resistors.jpg

                **Langkah 3 - Resistor 330R** 

        .. grid-item::

            .. figure:: media/Assembly/04_10K_Resistors.jpg

                **Langkah 4 - Resistor 10K** 

        .. grid-item::

            .. figure:: media/Assembly/05_22K_Resistors.jpg

                **Langkah 5 - Resistor 22K** 

        .. grid-item::

            .. figure:: media/Assembly/06_1K_Resistors.jpg

                **Langkah 6 - Resistor 1K** 

        .. grid-item::

            .. figure:: media/Assembly/07_220K_Resistors.jpg

                **Langkah 7 - Resistor 220K** 

        .. grid-item::

            .. figure:: media/Assembly/08_1nF_Capacitors.jpg

                **Langkah 8 - Kapasitor 1nF** 

        .. grid-item::

            .. figure:: media/Assembly/09_100nF_Capacitors.jpg

                **Langkah 9 - Kapasitor 100nF** 

        .. grid-item::

            .. figure:: media/Assembly/10_100pF_Capacitors.jpg

                **Langkah 10 - Kapasitor 100pF** 

        .. grid-item::

            .. figure:: media/Assembly/11_Angled_Header_Pins.jpg

                **Langkah 11 - Pin Header Miring** 

        .. grid-item::

            .. figure:: media/Assembly/12_5x5mm_Buttons.jpg

                **Langkah 12 - Tombol 5x5mm** 

        .. grid-item::

            .. figure:: media/Assembly/13_OptoIsolator.jpg

                **Langkah 13 - OptoIsolator** 

        .. grid-item::

            .. figure:: media/Assembly/14_JST_PH_Angled_Connectors.jpg

                **Langkah 14 - Konektor JST PH Miring** 

        .. grid-item::

            .. figure:: media/Assembly/15_JST_PH_Straight_Connectors.jpg

                **Langkah 15 - Konektor JST PH Lurus** 

        .. grid-item::

            .. figure:: media/Assembly/16_IC_Socket.jpg

                **Langkah 16 - Soket IC** 

        .. grid-item::

            .. figure:: media/Assembly/17_IC.jpg

                **Langkah 17 - IC** 

        .. grid-item::

            .. figure:: media/Assembly/18_LEDs.jpg

                **Langkah 18 - LED** 

        .. grid-item::

            .. figure:: media/Assembly/19_3.5mm_Headphone_Jack.jpg

                **Langkah 19 - Jack Headphone 3.5mm** 

        .. grid-item::

            .. figure:: media/Assembly/20_2.2uF_Capacitor.jpg

                **Langkah 20 - Kapasitor 2.2uF** 

        .. grid-item::

            .. figure:: media/Assembly/21_1uF_Capacitor.jpg

                **Langkah 21 - Kapasitor 1uF** 

        .. grid-item::

            .. figure:: media/Assembly/22_470uF_Capacitor.jpg

                **Langkah 22 - Kapasitor 470uF** 

        .. grid-item::

            .. figure:: media/Assembly/23_Header_Pins.jpg

                **Langkah 23 - Pin Header** 

        .. grid-item::

            .. figure:: media/Assembly/24_Assembled.jpg

                **Langkah 24 - Perisai Dirakit** 


    Masih tidak dapat memahami perakitan? Anda dapat mengikuti video yang disediakan di bawah untuk merakit Perisai Anda.

    .. youtube:: dcuCihh3yn4
        :width: 100%

Menggunakan Sensor
******************

Langkah 1: Tumpuk pada Arduino Uno
=================================

Tumpuk Muscle BioAmp Shield di atas Arduino Uno dengan benar.

.. only:: html

    .. figure:: media/gifs/shield-arduino-connection.*
        :align: center

.. only:: latex

    .. figure:: media/images/shield-arduino-connection.*
        :align: center

Langkah 2: Menghubungkan Kabel Elektroda
=======================================

Hubungkan Kabel BioAmp ke Muscle BioAmp Shield seperti yang ditunjukkan.

.. only:: html

    .. figure:: media/gifs/electrode-cable-connection.*
        :align: center

.. only:: latex

    .. figure:: media/images/electrode-cable-connection.*
        :align: center

Langkah 3: Persiapan Kulit
=============================

Oleskan Gel Persiapan Kulit Nuprep pada permukaan kulit tempat elektroda akan ditempatkan untuk menghilangkan sel kulit mati dan membersihkan kulit dari kotoran. Setelah menggosok permukaan kulit secara menyeluruh, bersihkan dengan tisu alkohol atau tisu basah.

Untuk informasi lebih lanjut, silakan lihat langkah-langkah detail :ref:`persiapan kulit`.

Langkah 4: Penempatan Elektroda
=================================

Kami memiliki 2 opsi untuk mengukur sinyal EMG, baik menggunakan elektroda gel atau menggunakan band BioAmp Otot berbasis elektroda kering. Anda dapat mencoba keduanya satu per satu.

Menggunakan elektroda gel
-----------------------

1. Hubungkan kabel BioAmp ke elektroda gel,
2. Kupas backing plastik dari elektroda
3. Tempatkan kabel IN+ dan IN- di lengan dekat saraf ulnar & REF (referensi) di bagian belakang tangan Anda seperti yang ditunjukkan di diagram koneksi.

.. only:: html

    .. figure:: media/gifs/electrode-placement.gif
        :align: center

.. only:: latex

    .. figure:: media/images/electrode-placement-1.*
        :align: center

        `Penempatan elektroda untuk kabel REF`

    .. figure:: media/images/electrode-placement-2.*
        :align: center

        `Penempatan elektroda untuk kabel IN+, IN-`

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

Langkah 5: Hubungkan Arduino UNO ke laptop Anda
=============================================

Hubungkan Arduino UNO R3 Anda ke laptop menggunakan kabel USB (Type A to Type B).

.. only:: html

    .. figure:: media/gifs/arduino-laptop-connection.gif
        :align: center
 
.. only:: latex

    .. figure:: media/images/arduino-laptop-connection-1.*
        :align: center
        :width: 50%

    .. figure:: media/images/arduino-laptop-connection-2.*
        :align: center 
        :width: 50%       

.. warning:: Pastikan laptop Anda tidak terhubung ke charger dan duduk 5m jauh dari peralatan AC apa pun untuk akuisisi sinyal terbaik.

Langkah 6: Visualisasikan sinyal EMG di laptop
==========================================

Salin tempel salah satu sketsa arduino yang diberikan di bawah di Arduino IDE v1.8.19 yang Anda unduh sebelumnya:
    
:fab:`github;pst-color-primary` `EMG Filter <https://github.com/upsidedownlabs/Muscle-BioAmp-Arduino-Firmware/blob/main/2_EMGFilter/2_EMGFilter.ino>`_

:fab:`github;pst-color-primary` `EMG Envelope <https://github.com/upsidedownlabs/Muscle-BioAmp-Arduino-Firmware/blob/main/3_EMGEnvelope/3_EMGEnvelope.ino>`_

Untuk memvisualisasikan sinyal EMG, gunakan `Chords Web <https://chords.upsidedownlabs.tech/>`__ untuk visualisasi sinyal bio-potensial real-time yang cepat dan tanpa masalah langsung dari browser Anda, tanpa menginstal perangkat lunak apa pun.

.. figure:: ../../../software/chords/chords-web/media/chords_emg_signal.*
    :align: center
    :alt: Memvisualisasikan sinyal EMG di Chords Web

    Memvisualisasikan sinyal EMG di Chords Web

Anda juga dapat menggunakan Serial Plotter Arduino IDE untuk memvisualisasikan sinyal:

Pergi ke ``tools`` dari menu bar, pilih opsi ``board`` lalu pilih Arduino UNO. Di menu yang sama, 
pilih port COM tempat Arduino Uno Anda terhubung. Untuk mengetahui port COM yang benar, 
putuskan sambungan papan Anda dan buka kembali menu. Entri yang menghilang harus 
port COM yang benar. Sekarang unggah kode, & buka serial plotter dari menu ``tools`` untuk memvisualisasikan 
sinyal EMG. 

Setelah membuka serial plotter pastikan untuk memilih baud rate ke 115200.

Sekarang tekuk lengan Anda untuk memvisualisasikan sinyal otot secara real-time di laptop Anda.

.. only:: html

    .. figure:: media/gifs/visualise-emg.gif
        :align: center

.. only:: latex
    
    .. figure:: media/images/visualise-emg.*
        :align: center

        `Visualisasikan sinyal EMG di laptop`

Langkah 7: Visualisasikan sinyal EMG di LED
==========================================

Salin tempel Sketsa Arduino yang diberikan di bawah di Arduino IDE:

:fab:`github;pst-color-primary` `LED Bar Graph <https://github.com/upsidedownlabs/BioAmp-EXG-Pill/blob/main/software/LEDBarGraph/LEDBarGraph.ino>`_

Pastikan Anda telah memilih papan dan port COM yang benar. Sekarang unggah kode, dan tekuk lengan Anda. Anda akan melihat bar LED naik. Kekuatan yang lebih Anda terapkan, bar LED lebih naik.

.. only:: html

    .. figure:: media/gifs/led-graph.gif
        :align: center

.. only:: latex

    .. figure:: media/images/led-graph.*
        :align: center

        `Visualisasikan sinyal EMG di LED`

Langkah 8: Dengarkan sinyal EMG Anda
====================================

Anda dapat mendengarkan sinyal otot (EMG) di speaker atau earphone/headphone berkabel. Mari coba keduanya.

Mendengarkan EMG di speaker
-----------------------------

1. Hubungkan kabel BioAmp AUX di speaker bluetooth yang memiliki dukungan jack 3.5mm.
2. Nyalakan speaker dan putar volume ke maksimum.
3. Tekuk dan dengarkan otot Anda.

.. only:: html

    .. figure:: media/gifs/listening-emg-speakers.gif
        :align: center

.. only:: latex

    .. figure:: media/images/listening-emg-speakers.*
        :align: center

        Mendengarkan EMG di speaker

Mendengarkan EMG di earphone/headphone berkabel
----------------------------------------------

1. Pasang earphone atau headphone berkabel Anda di jack 3.5mm BioAmp v1.5.
2. Pasang di telinga Anda.
3. Tekuk dan dengarkan otot Anda.

.. only:: html

    .. figure:: media/gifs/listening-emg-earphones.gif
        :align: center

.. only:: latex

     .. figure:: media/images/listening-emg-earphones.*
        :align: center

        `Mendengarkan EMG di earphone/headphone berkabel`

Langkah 9: Mengontrol motor servo
===================================

Hubungkan servo claw ke Muscle BioAmp Shield.

Salin tempel Sketsa Arduino yang diberikan di bawah di Arduino IDE:

:fab:`github;pst-color-primary` `Servo Controller <https://github.com/upsidedownlabs/Muscle-BioAmp-Arduino-Firmware/blob/main/5_ServoControl/5_ServoControl.ino>`_

Pastikan Anda telah memilih papan dan port COM yang benar. Sekarang unggah kode, dan tekuk lengan Anda untuk mengontrol servo claw secara real-time.

.. only:: html
    
    .. figure:: media/gifs/servo-control.gif
        :align: center

Langkah 10: Mengontrol servo claw
====================================

Hubungkan servo claw ke Muscle BioAmp Shield.

Salin tempel Sketsa Arduino yang diberikan di bawah di Arduino IDE:

:fab:`github;pst-color-primary` `Claw Controller <https://github.com/upsidedownlabs/Muscle-BioAmp-Arduino-Firmware/tree/main/4_ClawController>`_

Pastikan Anda telah memilih papan dan port COM yang benar. Sekarang unggah kode, dan tekuk lengan Anda untuk mengontrol servo claw secara real-time.

.. only:: html
    
    .. figure:: media/gifs/claw-control.gif
        :align: center

.. only:: latex

    .. figure:: media/images/claw-control.*
        :align: center

Langkah 11: Menghubungkan baterai 9V
====================================

Sampai sekarang, daya untuk sistem EMG berasal dari laptop melalui kabel USB Arduino Uno tetapi ada 2 cara di mana Anda dapat membuat sistem portabel:

- **Menggunakan baterai 9V:** Hubungkan baterai 9V langsung ke Muscle BioAmp Shield menggunakan kabel snap 9V.
- **Menggunakan Power Bank:** Alih-alih menghubungkan kabel USB Arduino Uno ke laptop, Anda dapat menghubungkannya langsung ke power bank.

.. only:: html

    .. figure:: media/gifs/9v-battery.gif
        :align: center

.. note:: Jangan gunakan baterai 9V saat mengontrol servo claw menggunakan Muscle BioAmp Shield. Sebaliknya hubungkan Arduino UNO ke power bank atau langsung ke laptop Anda.

Langkah 12: Fungsi lain yang dapat Anda jelajahi
====================================================

Menggunakan port I2C
-----------------

Ada 2 port I2C tersedia di Muscle BioAmp Shield dan Anda dapat menghubungkan ratusan perangkat yang memiliki kompatibilitas I2C menggunakan kabel STEMMA 4-pin JST PH 2.0 mm yang disediakan.

Beberapa contohnya adalah: ``layar OLED``, ``layar karakter``, ``sensor suhu``, ``akselerometer``, ``gyroscope``, ``sensor cahaya``, ``Perangkat Keras BioAmp``, dll.

Menggunakan port STEMMA Digital
---------------------------

Hubungkan pin I/O digital D6 Arduino Uno menggunakan konektor STEMMA digital.

Menggunakan port STEMMA Analog
--------------------------

Hubungkan pin input analog A2 Arduino Uno menggunakan konektor STEMMA analog.

Menggunakan tombol pengguna
---------------------

Program 2 tombol pengguna sesuai kebutuhan proyek Anda.