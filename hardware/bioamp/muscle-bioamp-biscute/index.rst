.. _muscle-bioamp-biscute:

Muscle BioAmp Biscute
######################

Ringkasan
*********
Muscle BioAmp BisCute adalah sensor ElectroMyography (EMG) DIY termurah di dunia yang memungkinkan Anda membuat proyek Human-Computer Interface (HCI) dengan mudah. Dalam proses membangun BisCute Anda sendiri, Anda belajar apa yang diperlukan untuk membuat amplifier biopotensial yang fungsional yang dapat digunakan untuk memperkuat sinyal sub mV yang dihasilkan oleh otot di dalam tubuh Anda ke tingkat yang dapat dipahami oleh unit mikrocontroller (MCU).

.. figure:: media/Muscle_BioAmp_BisCute.*
    :width: 800
    :align: center


Fitur & Spesifikasi
***************************

+-----------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Tegangan Input Minimum| 3.3-30 V                                                                                                                                                                                              |
+-----------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Impedansi Input       | 10^11 ohm                                                                                                                                                                                             |
+-----------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Gain Tetap            | x2420                                                                                                                                                                                                 |
+-----------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Filter Bandpass       | 72 – 720 Hz                                                                                                                                                                                           |
+-----------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Perangkat Keras Kompatibel| Papan pengembangan apa pun dengan ADC (Arduino UNO & Nano, Adafruit QtPy, STM32 Blue Pill, BeagleBone Black, Raspberry Pi Pico, untuk menyebutkan beberapa) atau ADC mandiri pilihan Anda                  |
+-----------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| BioPotensial          | EMG (Electromyography)                                                                                                                                                                                |
+-----------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Jumlah saluran        | 1                                                                                                                                                                                                     |
+-----------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Elektroda             | 3 (Positif, Negatif, dan Referensi)                                                                                                                                                                 |
+-----------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Dimensi               | 3.0 x 4.5 cm                                                                                                                                                                                          |
+-----------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Sumber Terbuka        | Perangkat Keras + Perangkat Lunak                                                                                                                                                                                   |
+-----------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

Perangkat Keras
**********
Gambar di bawah menunjukkan gambaran cepat desain perangkat keras.

.. only:: html

    .. grid:: 1 1 2 2
        :margin: 4 4 0 0 
        :gutter: 2

        .. grid-item::    
            
            .. card::

                PCB Depan
                ^^^^^
                .. figure:: media/front.*

        .. grid-item::
            
            .. card::

                PCB Belakang
                ^^^^^
                .. figure:: media/back.*    

.. only:: latex

    .. figure:: media/front.*
        :width: 50%

    .. figure:: media/back.*
        :width: 50%    

.. figure:: media/assembled.*
    :align: center
    :width: 50%

    PCB yang Dirakit

.. figure:: media/dimensions.*
    :align: center
    :width: 100%

    Tata Letak PCB

.. figure:: media/schematic.*
    :align: center   
    :width: 90%

    Diagram Skematik

Isi kit
********************

.. figure:: media/kit-contents.*
    :align: center
    :width: 60%

Persyaratan perangkat lunak
**********************

- Sebelum Anda mulai menggunakan kit, silakan unduh `Arduino IDE v1.8.19 (legacy IDE) <https://www.arduino.cc/en/software>`_. Dengan ini Anda akan dapat mengunggah sketsa arduino di papan pengembangan Anda dan memvisualisasikan data di laptop Anda.
    
.. figure:: ../../../kits/diy-neuroscience/basic/media/arduino-ide.*
    :align: center
    :alt: Arduino IDE v1.8.19 (legacy IDE)

    Arduino IDE v1.8.19 (legacy IDE) 


Kunjungi Upside Down Labs `Chords Web <https://chords.upsidedownlabs.tech>`__ untuk memvisualisasikan sinyal bio-potensial Anda langsung di browser.

.. figure:: ../../../software/chords/chords-web/media/chords_landing_page.*
    :align: center
    :alt: Chords Web Landing Page 

    Chords Web Landing Page

**Memulai dengan Chords Web**

.. youtube:: IVIPnk9z75g
    :align: center
    :width: 100%

Merakit kit
********************

Anda dapat mendapatkan Muscle BioAmp BisCute dari `toko online kami <https://linktr.ee/Upside_Down_Labs_stores>`_ (pengiriman ke seluruh dunia) dan untuk merakit BisCute Anda dapat melihat `BOM interaktif ini <https://upsidedownlabs.github.io/Muscle-BioAmp-BisCute/>`_ atau panduan langkah demi langkah yang diberikan di bawah ini. 

**Catatan:** Ikuti bentuk kuning yang disorot untuk merakit Muscle BioAmp BisCute Anda!

.. only:: html

  .. grid:: 1 1 3 3
      :margin: 2 2 0 0 
      :gutter: 2

      .. grid-item::
          
          .. figure:: media/Assembly/001_Board.*

              **Langkah 1 - Papan Kosong**

      .. grid-item::

          .. figure:: media/Assembly/002_100K_Resistor.*
              
              **Langkah 2 - Resistor 100K** 

      .. grid-item::

          .. figure:: media/Assembly/003_10K_Resistors.*

              **Langkah 3 - Resistor 10K** 

      .. grid-item::

          .. figure:: media/Assembly/004_1M_Resistors.*

              **Langkah 4 - Resistor 1M** 

      .. grid-item::

          .. figure:: media/Assembly/005_330R_Resistors.*

              **Langkah 5 - Resistor 330R** 

      .. grid-item::

          .. figure:: media/Assembly/006_220K_Resistor.*

              **Langkah 6 - Resistor 220K** 

      .. grid-item::

          .. figure:: media/Assembly/007_4.7nF_Capacitor.*

              **Langkah 7 - Kapasitor 4.7nF** 

      .. grid-item::

          .. figure:: media/Assembly/008_2.2uF_Capacitor.*

              **Langkah 8 - Kapasitor 2.2uF** 

      .. grid-item::

          .. figure:: media/Assembly/009_470uF_Capacitor.*

              **Langkah 9 - Kapasitor 470uF** 

      .. grid-item::

          .. figure:: media/Assembly/010_100nF_Capacitors.*

              **Langkah 10 - Kapasitor 100nF** 

      .. grid-item::

          .. figure:: media/Assembly/011_1nF_Capacitors.*

              **Langkah 11 - Kapasitor 1nF** 

      .. grid-item::

          .. figure:: media/Assembly/012_1K_Resistor.*

              **Langkah 12 - Resistor 1K** 

      .. grid-item::

          .. figure:: media/Assembly/013_Connector.*

              **Langkah 13 - Konektor BioAmp** 

      .. grid-item::

          .. figure:: media/Assembly/014_HeaderPin.*

              **Langkah 14 - Pin Header** 

      .. grid-item::

          .. figure:: media/Assembly/015_IC.*

              **Langkah 15 - IC** 

.. only:: latex

    .. list-table::

      * - .. figure:: media/Assembly/001_Board.*

             PCB Kosong

        - .. figure:: media/Assembly/002_100K_Resistor.*

             Resistor 100K

        - .. figure:: media/Assembly/003_10K_Resistors.*

             Resistor 10K

        - .. figure:: media/Assembly/004_1M_Resistors.*

             Resistor 1M

    .. list-table:: 

      * - .. figure:: media/Assembly/005_330R_Resistors.*

             Resistor 330R

        - .. figure:: media/Assembly/006_220K_Resistor.*

             Resistor 220K

        - .. figure:: media/Assembly/007_4.7nF_Capacitor.*

             Kapasitor 4.7nF

        - .. figure:: media/Assembly/008_2.2uF_Capacitor.*

             Kapasitor 2.2uF

    .. list-table:: 

      * - .. figure:: media/Assembly/009_470uF_Capacitor.*

             Kapasitor 470uF

        - .. figure:: media/Assembly/010_100nF_Capacitors.*

             Kapasitor 100nF

        - .. figure:: media/Assembly/011_1nF_Capacitors.*

             Kapasitor 1nF

        - .. figure:: media/Assembly/012_1K_Resistor.*

             Resistor 1K

    .. list-table:: 

      * - .. figure:: media/Assembly/013_Connector.*

             Konektor BioAmp

        - .. figure:: media/Assembly/014_HeaderPin.*

             Pin Header

        - .. figure:: media/Assembly/015_IC.*

             IC          
        - 

Masih belum bisa memahami perakitan? Anda dapat menonton video di bawah ini untuk merakit Biscute Anda.

.. youtube:: 2dzW6pVT1L8
    :width: 100%
    :align: center

Menggunakan kit
****************

Langkah 1: Hubungkan Arduino UNO R3
=================================

.. figure:: media/arduino-biscute-connection.*
    :width: 80%

Hubungkan ``VCC`` ke ``5V`` atau ``3.3V``, ``GND`` ke ``GND``, dan ``OUT`` ke ``Analog pin A0`` dari Arduino UNO Anda melalui kabel jumper yang kami berikan. Jika Anda menghubungkan ``OUT`` ke pin analog lain, maka Anda harus mengubah INPUT PIN di sketsa arduino sesuai.

**Catatan:** Untuk tujuan demonstrasi kami menunjukkan koneksi sensor dengan Arduino UNO R3 tetapi Anda dapat menggunakan papan pengembangan lain atau ADC mandiri pilihan Anda.

.. warning:: Ambil tindakan pencegahan saat menghubungkan ke daya, jika pin daya (GND & VCC) ditukar, sensor Anda akan hangus dan menjadi tidak dapat digunakan (DIE).

Langkah 3: Menghubungkan kabel elektroda
========================================

.. figure:: media/biscute-cable-connection.*
    :width: 80%

Hubungkan kabel BioAmp ke Muscle BioAmp Biscute dengan memasukkan ujung kabel ke konektor JST PH seperti yang ditunjukkan di atas.

Langkah 4: Persiapan Kulit
===============================================

Oleskan Gel Persiapan Kulit Nuprep pada permukaan kulit di mana elektroda akan ditempatkan untuk menghilangkan sel kulit mati dan membersihkan kulit dari kotoran. Setelah menggosok permukaan kulit secara menyeluruh, bersihkan dengan tisu alkohol atau tisu basah.

Untuk informasi lebih lanjut, silakan lihat langkah-langkah detail :ref:`skin-preparation`.

Langkah 5: Mengukur EMG (ElectroMyoGraphy)
===============================================

Penempatan elektroda
---------------------

Kami memiliki 2 opsi untuk mengukur sinyal EMG, baik menggunakan elektroda gel atau menggunakan Muscle BioAmp Band berbasis elektroda kering. Anda dapat mencoba keduanya satu per satu.

- **Menggunakan elektroda gel:**

1. Hubungkan kabel BioAmp ke elektroda gel,
2. Kupas lapisan plastik dari elektroda
3. Tempatkan kabel IN+ dan IN- di lengan dekat saraf ulnar & REF (referensi) di belakang tangan Anda seperti yang ditunjukkan dalam diagram koneksi.

.. figure:: media/biscute-emg.*
    :align: center

- **Menggunakan Muscle BioAmp Band:**

1. Hubungkan kabel BioAmp ke Muscle BioAmp Band dengan cara sehingga IN+ dan IN- ditempatkan di lengan dekat saraf ulnar & REF (referensi) di sisi jauh band.
2. Sekarang letakkan tetesan kecil gel elektroda antara kulit dan bagian logam kabel BioAmp untuk mendapatkan hasil terbaik.

.. tip:: Kunjungi dokumentasi lengkap tentang cara :ref:`merakit dan menggunakan BioAmp Bands <using-bioamp-bands>` atau ikuti video youtube yang diberikan di bawah ini.

   **Tutorial tentang cara menggunakan band:**

   .. youtube:: xYZdw0aesa0
       :align: center
       :width: 100%

.. note:: Dalam demonstrasi ini kami merekam sinyal EMG dari saraf ulnar, tetapi Anda dapat merekam EMG dari area lain juga (bisep, trisep, kaki, rahang dll) sesuai kebutuhan proyek Anda. Pastikan untuk menempatkan elektroda IN+, IN- pada otot target dan REF pada bagian tulang.

Mengunggah kode
---------------------

Hubungkan Arduino UNO Anda ke laptop menggunakan kabel USB (Type A ke Type B). Salin tempel salah satu sketsa arduino yang diberikan di bawah ini di Arduino IDE v1.8.19 yang Anda unduh sebelumnya:
    
:fab:`github;pst-color-primary` `EMG Filter <https://github.com/upsidedownlabs/Muscle-BioAmp-Arduino-Firmware/blob/main/2_EMGFilter/2_EMGFilter.ino>`_

:fab:`github;pst-color-primary` `EMG Envelope <https://github.com/upsidedownlabs/Muscle-BioAmp-Arduino-Firmware/blob/main/3_EMGEnvelope/3_EMGEnvelope.ino>`_

Pergi ke ``tools`` dari bilah menu, pilih opsi ``board`` lalu pilih Arduino UNO. Di menu yang sama, 
pilih port COM di mana Arduino Uno Anda terhubung. Untuk mengetahui port COM yang benar, 
putuskan sambungan papan Anda dan buka kembali menu. Entri yang hilang haruslah 
port COM yang benar. Sekarang unggah kode, & buka serial plotter dari menu ``tools`` untuk memvisualisasikan 
sinyal EMG. 

Setelah membuka serial plotter pastikan untuk memilih baud rate ke 115200.

.. warning:: Pastikan laptop Anda tidak terhubung ke charger dan duduk 5m jauh dari peralatan AC untuk akuisisi sinyal terbaik.

Memvisualisasikan sinyal EMG
----------------------------

Untuk memvisualisasikan sinyal EMG, gunakan `Chords Web <https://chords.upsidedownlabs.tech/>`__ untuk visualisasi sinyal bio-potensial real-time yang cepat dan tanpa masalah langsung dari browser Anda, tanpa menginstal perangkat lunak apa pun.

.. figure:: ../../../software/chords/chords-web/media/chords_emg_signal.*
    :align: center
    :alt: Memvisualisasikan sinyal EMG di Chords Web

    Memvisualisasikan sinyal EMG di Chords Web

Sekarang tekuk lengan Anda untuk memvisualisasikan sinyal otot secara real-time di laptop Anda.

.. figure:: media/using-biscute.*
    :align: center
    :alt: Memvisualisasikan sinyal EMG di Arduino IDE v1.8.x

    Memvisualisasikan sinyal EMG di Arduino IDE v1.8.x
    
**Video tutorial:**

.. youtube:: ujFsAE0E0nk
    :align: center
    :width: 100%
