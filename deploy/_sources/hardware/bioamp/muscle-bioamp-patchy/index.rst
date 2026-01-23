.. _muscle-bioamp-patchy:

Muscle BioAmp Patchy
#####################

:bdg-danger:`v0.2`

Ringkasan
**********

Muscle BioAmp Patchy adalah sensor ElectroMyoGraphy atau EMG yang dapat dipakai yang menempel langsung ke elektroda gel dan terhubung ke otot Anda seperti patch. Ini dilengkapi dengan proyeksi polaritas terbalik, indikator daya, konektor snap onboard, dan teknologi sensing BioAmp Upside Down Labs yang kuat untuk perekaman sinyal otot yang presisi. Ini memungkinkan Anda untuk dengan mudah mengintegrasikan sensor ini dalam antarmuka manusia-komputer berbasis EMG (HCI) Anda.

.. figure:: media/Patchy-All-Colors.*
    :align: center

Fitur & Spesifikasi
**************************

+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Tegangan Operasi      | 5 V                                                                                                                                                                                |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Impedansi Input       | 10^12 ohm                                                                                                                                                                          |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Gain Tetap            | x2420                                                                                                                                                                              |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Filter Bandpass       | 72 – 720 Hz                                                                                                                                                                        |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Dapat Dipakai         | Ya                                                                                                                                                                                 |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Perangkat Keras Kompatibel | Papan pengembangan apa pun dengan ADC (Arduino UNO & Nano, Adafruit QtPy, STM32 Blue Pill, BeagleBone Black, Raspberry Pi Pico, untuk beberapa nama) atau ADC mandiri pilihan Anda |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| BioPotensial          | EMG (Electromyography)                                                                                                                                                             |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Jumlah saluran        | 1                                                                                                                                                                                  |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Elektroda             | 3 (Positif, Negatif, dan Referensi)                                                                                                                                                |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Dimensi               | 4.7 x 1.4 cm                                                                                                                                                                       |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Sumber Terbuka        | Perangkat Keras + Perangkat Lunak                                                                                                                                                  |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

Perangkat Keras
*********

Gambar di bawah menunjukkan gambaran cepat desain perangkat keras.

.. figure:: media/PCB-Front.*
    :align: center
    :width: 60%

    PCB Depan

.. figure:: media/PCB-Back.*
    :align: center
    :width: 60%

    PCB Belakang

.. figure:: media/Muscle-BioAmp-Patchy-Assembled-Front.*
    :align: center
    :width: 60%

    PCB yang Dirakit

Isi kit
********************

.. figure:: media/kit-contents.*
    :align: center

Kami telah membuat video unboxing lengkap kit. Silakan temukan tautan di bawah ini:

.. youtube:: qRKU_HvapDE
    :align: center
    :width: 100%

Persyaratan perangkat lunak
**********************

Sebelum Anda mulai menggunakan kit, silakan unduh `Arduino IDE v1.8.19 (legacy IDE) <https://www.arduino.cc/en/software>`_. Dengan ini Anda akan dapat mengunggah sketsa arduino di papan pengembangan Anda dan memvisualisasikan data di laptop Anda.

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

Langkah 1: Hubungkan kabel referensi
=================================

Hubungkan kabel referensi ke Muscle BioAmp Patchy seperti yang ditunjukkan dalam diagram.

.. figure:: media/ref-cable-connection.*
    :align: center

Langkah 2: Menghubungkan sensor ke elektroda gel
================================================

Pasangkan Muscle BioAmp Patchy pada elektroda gel (Jangan kupas lapisan plastik dari elektroda pada saat ini).

.. figure:: media/patchy-electrode-connection.*
    :width: 80%
    :align: center

Langkah 3: Persiapan Kulit
=============================

Oleskan Gel Persiapan Kulit Nuprep pada permukaan kulit di mana elektroda akan ditempatkan untuk menghilangkan sel kulit mati dan membersihkan kulit dari kotoran. Setelah menggosok permukaan kulit secara menyeluruh, bersihkan dengan tisu alkohol atau tisu basah.

Untuk informasi lebih lanjut, silakan lihat langkah-langkah detail :ref:`skin-preparation`.

Langkah 4: Penempatan Elektroda
==============================

Sekarang kupas lapisan plastik dari elektroda gel dan tempatkan Muscle BioAmp Patchy pada otot yang ditargetkan dan referensi pada bagian tulang siku Anda seperti yang ditunjukkan dalam diagram.

.. figure:: media/patchy-on-hand.*
    :align: center

.. note:: Dalam demonstrasi ini kami merekam sinyal EMG dari saraf ulnar, tetapi Anda dapat merekam EMG dari area lain juga (bisep, trisep, kaki, rahang dll) sesuai dengan kebutuhan proyek Anda. Pastikan saja untuk menempatkan elektroda IN+, IN- pada otot yang ditargetkan dan REF pada bagian tulang.

Langkah 5: Hubungkan Arduino UNO R3
=================================

Hubungkan ``VCC`` ke ``5V``, ``GND`` ke ``GND``, dan ``OUT`` ke ``Analog pin A0`` Arduino UNO Anda melalui kabel jumper yang kami berikan. Jika Anda menghubungkan ``OUT`` ke pin analog lain, maka Anda harus mengubah PIN INPUT dalam sketsa arduino sesuai.

.. figure:: media/pathcy-arduino-connections.*
    :align: center

    Koneksi dengan Arduino UNO R3

.. note:: Untuk tujuan demonstrasi kami menunjukkan koneksi sensor dengan Arduino UNO R3 tetapi Anda dapat menggunakan papan pengembangan lain atau ADC mandiri pilihan Anda.

Langkah 6: Unggah kode
===========================

Hubungkan Arduino UNO Anda ke laptop menggunakan kabel USB (Tipe A ke Tipe B). Salin tempel salah satu sketsa arduino yang diberikan di bawah ini di Arduino IDE v1.8.19 yang Anda unduh sebelumnya:

:fab:`github;pst-color-primary` `EMG Filter <https://github.com/upsidedownlabs/Muscle-BioAmp-Arduino-Firmware/blob/main/2_EMGFilter/2_EMGFilter.ino>`_

:fab:`github;pst-color-primary` `EMG Envelope <https://github.com/upsidedownlabs/Muscle-BioAmp-Arduino-Firmware/blob/main/3_EMGEnvelope/3_EMGEnvelope.ino>`_

.. figure:: media/setup.*
    :align: center

Pergi ke ``tools`` dari bilah menu, pilih opsi ``board`` lalu pilih Arduino UNO. Di menu yang sama, pilih port COM di mana Arduino Uno Anda terhubung. Untuk mengetahui port COM yang benar, putuskan sambungan papan Anda dan buka kembali menu. Entri yang hilang haruslah port COM yang benar. Sekarang unggah kode, & buka plotter serial dari menu ``tools`` untuk memvisualisasikan sinyal EMG.

Setelah membuka plotter serial pastikan untuk memilih baud rate ke 115200.

.. warning:: Pastikan laptop Anda tidak terhubung ke charger dan duduk 5m jauh dari peralatan AC untuk akuisisi sinyal terbaik.

Langkah 7: Memvisualisasikan sinyal EMG
======================================

Untuk memvisualisasikan sinyal EMG, gunakan `Chords Web <https://chords.upsidedownlabs.tech/>`__ untuk visualisasi sinyal bio-potensial real-time yang cepat dan tanpa masalah langsung dari browser Anda, tanpa menginstal perangkat lunak apa pun.

.. figure:: ../../../software/chords/chords-web/media/chords_emg_signal.*
    :align: center
    :alt: Memvisualisasikan sinyal EMG di Chords Web

    Memvisualisasikan sinyal EMG di Chords Web

Sekarang tekuk lengan Anda untuk memvisualisasikan sinyal otot secara real-time di laptop Anda.

.. figure:: media/patchy-emg.*
    :align: center
    :alt: Memvisualisasikan sinyal EMG di Arduino IDE v1.8.x

    Memvisualisasikan sinyal EMG di Arduino IDE v1.8.x

**Tutorial video:**

.. youtube:: 4dnCX3U7LS8
    :align: center
    :width: 100%