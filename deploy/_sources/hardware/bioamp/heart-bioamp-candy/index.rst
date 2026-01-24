.. _heart-bioamp-candy:

Heart BioAmp Candy
#####################

Ringkasan
*********

Heart BioAmp Candy adalah sensor berukuran permen untuk merekam sinyal ECG dengan mudah. Ini sempurna untuk siswa dan peneliti karena menawarkan rekaman ECG yang andal dan akurat, membuat pemantauan jantung dapat diakses dan nyaman untuk tujuan pendidikan dan penelitian.

.. figure:: media/candy-angled.*
    :width: 100%
    :align: center
    :alt: Heart BioAmp Candy

    Heart BioAmp Candy

Fitur & Spesifikasi
*****************************

+---------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Tegangan Input      | 2.7 V - 5 V                                                                                                                                                                                        |
+---------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Gain Tetap          | x2157                                                                                                                                                                                              |
+---------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Filter Bandpass     | 0.5 - 34 Hz                                                                                                                                                                                        |
+---------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Perangkat Keras Kompatibel | Papan pengembangan apa pun dengan ADC (Arduino UNO R3/R4, Arduino Nano, Adafruit QtPy, STM32 Blue Pill, BeagleBone Black, Raspberry Pi Pico, untuk beberapa nama) atau ADC mandiri pilihan Anda. |
+---------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| BioPotensial        | ECG                                                                                                                                                                                                |
+---------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Jumlah saluran      | 1                                                                                                                                                                                                  |
+---------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Elektroda           | 3 (Positif, Negatif, dan Referensi)                                                                                                                                                                |
+---------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Dimensi             | 3.5 x 1.5 cm                                                                                                                                                                                       |
+---------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Sumber Terbuka      | Perangkat Keras + Perangkat Lunak                                                                                                                                                                  |
+---------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

Perangkat Keras
*************


.. figure:: media/heart-bioamp-candy-front.*
    :width: 800
    :align: center
    :alt: Heart BioAmp Candy

    Render PCB Dirakit - Depan
    
.. figure:: media/candy-back.*
    :width: 800
    :align: center
    :alt: Heart BioAmp Candy

    Render PCB Dirakit - Belakang

.. figure:: media/candy-dimensions.*
    :width: 800
    :align: center
    :alt: Dimensi Heart BioAmp Candy

    Tata Letak PCB

.. figure:: media/candy-schematic.*
    :width: 800
    :align: center
    :alt: Skematik Heart BioAmp Candy

    Diagram Skematik

Isi kit
********************

+------------------------------+-----+
| Isi kit                      | Qty |
+==============================+=====+
| Heart BioAmp Candy           | 1   |
+------------------------------+-----+
| BioAmp Cable v3 (100cm)      | 1   |
+------------------------------+-----+
| Jumper cables (pack of 3)    | 1   |
+------------------------------+-----+
| Heart BioAmp Band (ECG Band) | 1   |
+------------------------------+-----+
| Gel electrodes               | 12  |
+------------------------------+-----+

.. figure:: media/candy-kit-contents.*
    :align: center
    :alt: isi kit

Persyaratan perangkat lunak
**********************

1. **Mengunggah kode:** Sebelum Anda mulai menggunakan kit, silakan unduh `Arduino IDE <https://www.arduino.cc/en/software>`_. Dengan menggunakan ini Anda akan dapat mengunggah `Chords Arduino Firmware <https://github.com/upsidedownlabs/Chords-Arduino-Firmware>`_ di papan pengembangan Anda.
2. **Memvisualisasikan sinyal:** Setelah mengunggah firmware, Anda dapat menggunakan `Chords <https://chords.upsidedownlabs.tech/>`_, aplikasi web sumber terbuka yang dikembangkan oleh kami untuk merekam dan memvisualisasikan sinyal biopotensial real-time (ECG, EMG, EEG, EOG).

Menggunakan kit
****************

Langkah 1: Koneksi dengan papan pengembangan
============================================

Hubungkan Heart BioAmp Candy Anda ke MCU/ADC Anda sesuai dengan tabel koneksi yang ditunjukkan di bawah:

.. table:: 

    +--------------------+-----------+
    | Heart BioAmp Candy | MCU/ADC   |
    +====================+===========+
    | VCC                | 5V        |
    +--------------------+-----------+
    | GND                | GND       |
    +--------------------+-----------+
    | OUT                | Input ADC |
    +--------------------+-----------+

Saat membuat koneksi dengan papan pengembangan, pastikan untuk menggunakan kabel jumper yang disediakan dalam kit.

.. figure:: media/development-board-connections.*
    :align: center
    :width: 100%
    :alt: Heart BioAmp Candy - Koneksi papan pengembangan
    
    Heart BioAmp Candy - Koneksi papan pengembangan

.. note:: Untuk tujuan demonstrasi kami menunjukkan koneksi sensor dengan Arduino UNO R3/R4 tetapi Anda dapat menggunakan papan pengembangan lain atau ADC mandiri pilihan Anda.

.. warning:: Berhati-hatilah saat menghubungkan ke daya, jika pin daya (GND & VCC) ditukar, sensor Anda akan terbakar dan menjadi tidak dapat digunakan (DIE).

Langkah 2: Menghubungkan kabel elektroda
========================================

Hubungkan kabel BioAmp ke Heart BioAmp Candy dengan memasukkan ujung kabel di konektor JST PH seperti yang ditunjukkan.

.. figure:: media/electrode-cable-connections.*
    :width: 100%
    :align: center
    :alt: Heart BioAmp Candy - Koneksi kabel elektroda
    
    Heart BioAmp Candy - Koneksi kabel elektroda
    
Langkah 3: Persiapan Kulit
===============================================

Oleskan Gel Persiapan Kulit Nuprep pada permukaan kulit tempat elektroda akan ditempatkan untuk menghilangkan sel kulit mati dan membersihkan kotoran dari kulit. Setelah menggosok permukaan kulit secara menyeluruh, bersihkan dengan tisu alkohol atau tisu basah.

Untuk informasi lebih lanjut, silakan lihat langkah-langkah detail :ref:`skin-preparation`.

Langkah 4: Mengukur ECG (Elektrokardiografi)
===============================================

Penempatan elektroda
-----------------------

Kami memiliki 2 opsi untuk mengukur sinyal ECG, baik menggunakan elektroda gel atau menggunakan Band BioAmp Jantung berbasis elektroda kering. Anda dapat mencoba keduanya satu per satu.

Menggunakan elektroda gel:
+++++++++++++++++++++++++++

1. Hubungkan kabel BioAmp ke elektroda gel,
2. Kupas backing plastik dari elektroda
3. Tempatkan IN+,IN- dan REF seperti yang ditunjukkan di diagram koneksi.

.. figure:: media/ecg-using-gel-electrodes.*
    :align: center
    :alt: Menggunakan Heart BioAmp Candy untuk mengukur ECG dengan elektroda gel
    
    Menggunakan Heart BioAmp Candy untuk mengukur ECG dengan elektroda gel

Menggunakan Heart BioAmp Band:
++++++++++++++++++++++++++

1. Pasangkan kabel IN- di sisi kiri, IN+ di tengah, dan REF di sisi jauh band.
2. Sekarang letakkan tetesan kecil gel elektroda antara kulit dan bagian logam kabel BioAmp untuk mendapatkan hasil terbaik.

.. figure:: media/ecg-using-band.*
    :align: center
    :alt: Menggunakan Heart BioAmp Candy untuk mengukur ECG dengan Heart BioAmp Band
    
    Menggunakan Heart BioAmp Candy untuk mengukur ECG dengan Heart BioAmp Band

.. tip:: Kunjungi dokumentasi lengkap tentang cara :ref:`merakit dan menggunakan Band BioAmp <using-bioamp-bands>` atau ikuti video youtube `tutorial <https://youtu.be/fr5iORsVyUM>`_.

Mengunggah firmware
------------------------

Hubungkan papan pengembangan ke laptop Anda menggunakan kabel USB yang kompatibel. Salin tempel :fab:`github;pst-color-primary` `Chords Arduino Firmware <https://github.com/upsidedownlabs/Chords-Arduino-Firmware>`_ di Arduino IDE.

.. figure:: media/chords-arduino-firmware.*
    :align: center
    :alt: Firmware Arduino Chords
    
    Firmware Arduino Chords

.. note:: Unggah firmware Arduino sesuai dengan papan pengembangan yang Anda gunakan. Jika Anda menggunakan Arduino UNO R3 maka Anda harus mengunggah firmware UNO-R3 tetapi jika Anda menggunakan Arduino UNO R4 maka pastikan untuk mengunggah firmware UNO-R4.


Sekarang pergi ke ``tools`` dari menu bar, pilih opsi ``board`` lalu pilih nama papan yang benar sesuai dengan papan pengembangan yang Anda gunakan. Di menu yang sama, pilih port COM tempat papan Anda terhubung. Untuk mengetahui port COM yang benar, putuskan sambungan papan Anda dan buka kembali menu. Entri yang menghilang haruslah port COM yang benar. Sekarang unggah kode.

.. warning:: Pastikan laptop Anda tidak terhubung ke charger dan duduk 5m jauh dari peralatan AC apa pun untuk akuisisi sinyal terbaik.

Memvisualisasikan sinyal ECG menggunakan Chords
------------------------------------------- 

1. Kunjungi situs web `aplikasi Chords <https://chords.upsidedownlabs.tech/>`_.
2. Klik pada ``visualize now``.
3. Klik pada ``connect``.
4. Pilih port COM yang benar di pop-window dan klik pada ``connect`` untuk menghubungkan papan pengembangan Anda ke Chords.
5. Anda akan dapat melihat sinyal ECG Anda di layar.
   
   .. figure:: media/ecg-signals-using-candy.*
      :align: center
      :alt: Sinyal ECG menggunakan Heart BioAmp Candy

.. note:: Untuk informasi lebih lanjut, kunjungi `dokumentasi lengkap <https://docs.upsidedownlabs.tech/software/chords/index.html>`_ aplikasi Chords.

