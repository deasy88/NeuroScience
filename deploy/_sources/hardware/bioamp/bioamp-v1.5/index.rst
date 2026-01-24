.. _bioamp-v1.5:

BioAmp v1.5
############

:bdg-danger:`Edisi 2023`

Ringkasan
*********

Ini adalah amplifier biopotensial portabel berukuran kecil dengan setup tanpa kode untuk merekam dan mendengarkan sinyal otot Anda (EMG) secara non invasif. Yang terbaik adalah bahwa itu tidak memerlukan mikrokontroler (seperti Arduino) untuk mengambil sampel sinyal. Anda hanya perlu mencolokkan baterai 9V ke papan, elektroda ke tubuh, dan jack audio ke ponsel/laptop, dan Anda siap merekam sinyal dari otot (EMG) menggunakan perangkat lunak seperti audacity atau aplikasi spike recorder Backyard Brain.

.. figure:: media/bioamp-v1.5.*
    :width: 800
    :align: center


Fitur & Spesifikasi
***************************

+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Tegangan Input Minimum| 7-9 V                                                                                                                                                            |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Impedansi Input       | 10^7 ohm                                                                                                                                                         |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Gain Tetap            | ~200x                                                                                                                                                            |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| BioPotensial          | EMG (Electromyography)                                                                                                                                           |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Jumlah saluran        | 1                                                                                                                                                                |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Elektroda             | 3 (Positif, Negatif, dan Referensi)                                                                                                                              |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Dimensi               | 5.0 x 3.0 cm                                                                                                                                                     |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Sumber Terbuka        | Perangkat Keras + Perangkat Lunak                                                                                                                                 |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+

Perangkat Keras
**********
Gambar di bawah menunjukkan gambaran cepat desain perangkat keras.

.. grid:: 1 1 2 2
    :margin: 4 4 0 0 
    :gutter: 2

    .. grid-item::
        
            .. card::

                **PCB Depan**
                ^^^^^
                .. figure:: media/front-pcb.*

    .. grid-item::
        
            .. card::

                **PCB Belakang**
                ^^^^^
                .. figure:: media/back-pcb.*            


.. figure:: media/Assembly/16.*
    :align: center
    :width: 70%

    BioAmp v1.5 Dirakit

Isi kit
********************

.. figure:: media/kit-contents.*

Persyaratan perangkat lunak
**********************

Sebelum Anda mulai menggunakan kit, unduh `Spike Recorder <https://backyardbrains.com/products/spikerecorder>`_ Backyard Brains atau `Audacity <https://www.audacityteam.org/download/>`_ sesuai dengan sistem operasi yang Anda gunakan (Windows, OSX, Linux).

.. .. figure:: ../../../kits/diy-neuroscience/basic/media/byb.*

..     **Backyard Brains Spike Recorder**

.. .. figure:: media/audacity.*

..     **Audacity (Editor dan perekam audio multi-track yang mudah digunakan)**

Merakit kit
********************

Anda dapat mendapatkan kantong bagian BioAmp v1.5 Anda sendiri dari `toko online kami <https://linktr.ee/Upside_Down_Labs_stores>`_ (pengiriman ke seluruh dunia) dan untuk merakit papan Anda dapat melihat panduan langkah demi langkah di bawah ini.

**Catatan:** Ikuti bentuk kuning yang disorot untuk merakit BioAmp v1.5 Anda!

.. grid:: 1 1 3 3
    :margin: 2 2 0 0 
    :gutter: 2

    .. grid-item::
        
        .. figure:: media/Assembly/1.*

            Langkah 1 - Papan Kosong

    .. grid-item::

        .. figure:: media/Assembly/2-100K-resistor.*
            
            Langkah 2 - Resistor 100K 

    .. grid-item::

        .. figure:: media/Assembly/3-2.2K-resistor.*

            Langkah 3 - Resistor 2.2K 

    .. grid-item::

        .. figure:: media/Assembly/4-1K-resistor.*

            Langkah 4 - Resistor 1K 

    .. grid-item::

        .. figure:: media/Assembly/5-220K-resistor.*

            Langkah 5 - Resistor 220K 

    .. grid-item::

        .. figure:: media/Assembly/6-10K-resistor.*

            Langkah 6 - Resistor 10K 

    .. grid-item::

        .. figure:: media/Assembly/7-100nF-capacitor.*

            Langkah 7 - Kapasitor 100nF 

    .. grid-item::

        .. figure:: media/Assembly/8-1nF-capacitor.*

            Langkah 8 - Kapasitor 1nF 

    .. grid-item::

        .. figure:: media/Assembly/9-connectors.*

            Langkah 9 - Konektor JST PH 

    .. grid-item::

        .. figure:: media/Assembly/10-socket.*

            Langkah 10 - Soket IC 

    .. grid-item::

        .. figure:: media/Assembly/11-IC.*

            Langkah 11 - IC 

    .. grid-item::

        .. figure:: media/Assembly/12-LED.*

            Langkah 12 - LED Daya 

    .. grid-item::

        .. figure:: media/Assembly/13-47uF-capacitor.*

            Langkah 13 - Kapasitor 47uF 

    .. grid-item::

        .. figure:: media/Assembly/14-switch.*

            Langkah 14 - Saklar 

    .. grid-item::

        .. figure:: media/Assembly/15-headphone-jack.*

            Langkah 15 - Jack Headphone 


Menggunakan kit
*****************

Gambar di bawah menunjukkan kemungkinan menggunakan BioAmp v1.5. Terlihat rumit? Jangan khawatir, kami akan menjelaskan setiap langkah secara detail. Jadi ikuti untuk membuat setup Anda sendiri.

.. only:: html

    .. figure:: media/bioamp-v1-5-connections.*
        :align: center

.. only:: latex

    .. figure:: media/bioamp-v1-5-connections.*
        :width: 80%
        :align: center


Langkah 1: Menghubungkan kabel
==================================

Hubungkan kabel BioAmp, kabel snap 9V dan kabel BioAmp AUX ke BioAmp v1.5 dengan memasukkan ujung kabel di konektor JST PH masing-masing seperti yang ditunjukkan di bawah.

.. figure:: media/board-with-cables.*
    :align: center

Langkah 2: Persiapan Kulit
==========================

Oleskan Gel Persiapan Kulit Nuprep pada permukaan kulit tempat elektroda akan ditempatkan untuk menghilangkan sel kulit mati dan membersihkan kulit dari kotoran. Setelah menggosok permukaan kulit secara menyeluruh, bersihkan dengan tisu alkohol atau tisu basah.

Untuk informasi lebih lanjut, silakan lihat langkah-langkah detail :ref:`skin-preparation`.

Langkah 3: Penempatan elektroda
===========================================

Kami memiliki 2 opsi untuk mengukur sinyal EMG, baik menggunakan elektroda gel atau menggunakan Band BioAmp Otot berbasis elektroda kering. Anda dapat mencoba keduanya satu per satu.

Menggunakan elektroda gel
-----------------------

1. Hubungkan kabel BioAmp ke elektroda gel.
2. Kupas backing plastik dari elektroda.
3. Tempatkan kabel IN+ dan IN- di lengan dekat saraf ulnar & REF (referensi) di bagian belakang tangan Anda seperti yang ditunjukkan di diagram koneksi.

.. figure:: media/bioamp-v1-5-emg.*
    :align: center

Menggunakan Band BioAmp Otot
----------------------------

1. Hubungkan kabel BioAmp ke Band BioAmp Otot dengan cara sehingga IN+ dan IN- ditempatkan di lengan dekat saraf ulnar & REF (referensi) di sisi jauh band.
2. Sekarang letakkan tetesan kecil gel elektroda antara kulit dan bagian logam kabel BioAmp untuk mendapatkan hasil terbaik.

.. note:: Koneksi kabel BioAmp ini ke elektroda gel/band khusus untuk versi BioAmp v1.5 ini saja. Koneksi untuk perangkat keras BioAmp lainnya dapat berbeda.

.. tip:: - Dalam demonstrasi ini kami merekam sinyal EMG dari saraf ulnar, tetapi Anda dapat merekam EMG dari area lain juga (bisep, trisep, kaki, rahang dll) sesuai kebutuhan proyek Anda. Pastikan untuk menempatkan elektroda IN+, IN- pada otot yang ditargetkan dan REF pada bagian tulang.
    
    - Anda dapat mengunjungi dokumentasi lengkap tentang cara :ref:`merakit dan menggunakan Band BioAmp <using-bioamp-bands>`.

Langkah 4: Menghubungkan baterai 9V
===============================

Hubungkan baterai 9V apa pun ke BioAmp v1.5 menggunakan kabel snap 9V. Sekarang aktifkan papan dengan menyalakan saklar daya, dan Anda akan melihat LED menyala, menunjukkan bahwa papan siap digunakan.

.. figure:: media/9v-battery.*
    :align: center

Langkah 5: Dengarkan sinyal otot Anda
======================================

Anda dapat mendengarkan sinyal otot (EMG) di speaker atau earphone/headphone berkabel. Mari coba keduanya.

Menggunakan speaker
-----------------------------

1. Hubungkan kabel BioAmp AUX di speaker bluetooth yang memiliki dukungan jack 3.5mm.
2. Nyalakan speaker dan putar volume ke maksimum.
3. Tekuk dan dengarkan otot Anda.

.. figure:: media/listening-emg-2.*
    :align: center

Menggunakan earphone/headphone berkabel
----------------------------------------------

1. Pasang earphone atau headphone berkabel Anda di jack 3.5mm BioAmp v1.5.
2. Pasang di telinga Anda.
3. Tekuk dan dengarkan otot Anda.

.. figure:: media/listening-emg-3.*
    :align: center
    :width: 80%

Langkah 6: Memvisualisasikan sinyal EMG di ponsel
===================================================

Hubungkan kabel BioAmp AUX ke ponsel/tablet Anda yang memiliki dukungan jack 3.5mm. Sekarang Anda dapat menggunakan berbagai aplikasi untuk memvisualisasikan sinyal.

Menggunakan aplikasi Phone Recorder
--------------------------

1. Buka aplikasi perekam audio apa pun di tablet ponsel Anda.
2. Tekuk otot Anda untuk dapat merekam sinyal otot.
3. Jika Anda ingin mengekstrak data tersebut maka itu akan disimpan secara default sebagai file .wav tetapi Anda dapat mengonversinya ke format lain sesuai kebutuhan proyek Anda.

.. figure:: media/emg-in-mobile-2.*
    :align: center
    :width: 80%

Menggunakan aplikasi Spike Recorder Backyard Brains
------------------------------------------------

1. Unduh `Aplikasi Spike Recorder <https://play.google.com/store/apps/details?id=com.backyardbrains&pli=1>`_ dari playstore.
2. Buka aplikasi, klik ikon pengaturan di sudut kanan atas dan atur jenis perekaman ke EMG.
3. Terapkan filter notch 50Hz atau 60Hz tergantung negara tempat Anda tinggal. Misalnya jika Anda di India maka arus AC berosilasi pada frekuensi 50Hz tetapi berosilasi pada frekuensi 60Hz di AS. Arus AC ini bertindak sebagai noise dalam sinyal sehingga kami harus menghilangkannya dengan menerapkan filter notch ini.

.. figure:: media/spike-recorder-mobile.*
    :width: 60%
    :align: center

4. Klik lagi ikon pengaturan untuk menutupnya dan Anda siap.
5. Tekuk otot Anda untuk dapat memvisualisasikan sinyal otot (EMG).
6. Anda dapat merekam data EMG sebagai file .wav dengan menekan tombol rekam di sudut kanan atas aplikasi dan kemudian mengonversinya ke format lain sesuai kebutuhan proyek Anda.

.. figure:: media/emg-in-mobile.*
    :width: 80%
    :align: center

Langkah 7: Memvisualisasikan sinyal EMG di laptop
============================================

Hubungkan kabel BioAmp AUX ke laptop Anda yang memiliki dukungan jack 3.5mm. Sekarang Anda dapat menginstal berbagai perangkat lunak di laptop Anda untuk memvisualisasikan sinyal.

Menggunakan Spike Recorder Backyard Brains
--------------------------------------------

1. Instal perangkat lunak spike recorder yang Anda unduh sebelumnya.
2. Buka perangkat lunak, klik ikon pengaturan di sudut kanan atas dan atur filter band pass rendah ke 72Hz dan filter band pass tinggi ke 720Hz.
3. Terapkan filter notch 50Hz atau 60Hz tergantung negara tempat Anda tinggal. Misalnya jika Anda di India maka arus AC berosilasi pada frekuensi 50Hz tetapi berosilasi pada frekuensi 60Hz di AS. Arus AC ini bertindak sebagai noise dalam sinyal sehingga kami harus menghilangkannya dengan menerapkan filter notch ini.

.. figure:: media/spike-recorder-laptop.*
    :align: center

4. Klik lagi ikon pengaturan untuk menutupnya dan Anda siap.
5. Tekuk otot Anda untuk dapat memvisualisasikan sinyal otot (EMG)
6. Anda dapat merekam data EMG sebagai file .wav dengan menekan tombol rekam di sudut kanan atas aplikasi dan kemudian mengonversinya ke format lain sesuai kebutuhan proyek Anda.

.. figure:: media/emg-in-laptop.*
    :align: center

Menggunakan Audacity
----------------

1. Instal perangkat lunak audacity yang Anda unduh sebelumnya.
2. Buka perangkat lunak dan atur perangkat perekaman ke mikrofon.
3. Tekuk otot Anda untuk dapat memvisualisasikan sinyal otot (EMG)
4. Secara default data EMG akan direkam sebagai file .wav tetapi Anda dapat mengonversinya ke format lain sesuai kebutuhan proyek Anda.

.. figure:: media/emg-in-audacity.*
    :align: center


