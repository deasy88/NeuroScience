.. _diy-neuroscience-kit-pro:

Kit Neurosains DIY Pro
#########################

Ini adalah Kit Neurosains DIY lanjutan dengan Muscle BioAmp Shield - Shield EMG untuk Arduino UNO!
Shield ini menawarkan berbagai opsi plug-and-play, dan akuisisi data tambahan sementara BioAmp EXG Pill 
meningkatkan keserbagunaan dengan memungkinkan pengukuran berbagai sinyal biopotensial, termasuk EEG (otak), EOG (mata), 
EMG (otot), dan ECG (jantung). Mulai perjalanan penemuan Anda, saat Anda membangun proyek menarik, mengembangkan aplikasi HCI/BCI, 
dan mendapatkan wawasan berharga.

.. figure:: media/diy-neuroscience-kit-pro.*
    :align: center

    DIY Neuroscience Kit Pro

Isi Kit
********************

+-------------------------------------------------------------------------------------------------------------------------------------------------------------------+--------+
| Isi Kit                                                                                                                                                           | Qty    |
+===================================================================================================================================================================+========+
| BioAmp EXG Pill                                                                                                                                                   | 1      |
+-------------------------------------------------------------------------------------------------------------------------------------------------------------------+--------+
| Pita BioAmp                                                                                                                                                       | 3      |
+-------------------------------------------------------------------------------------------------------------------------------------------------------------------+--------+
| Kabel BioAmp                                                                                                                                                      | 1      |
+-------------------------------------------------------------------------------------------------------------------------------------------------------------------+--------+
| Kabel Jumper (set of 3)                                                                                                                                           | 1      |
+-------------------------------------------------------------------------------------------------------------------------------------------------------------------+--------+
| Kit Persiapan Kulit                                                                                                                                               | 1      |
+-------------------------------------------------------------------------------------------------------------------------------------------------------------------+--------+
| Gel Elektroda                                                                                                                                                     | 1      |
+-------------------------------------------------------------------------------------------------------------------------------------------------------------------+--------+
| Elektroda Gel                                                                                                                                                     | 24+100 |
+-------------------------------------------------------------------------------------------------------------------------------------------------------------------+--------+
| Elektroda gel repositionable (3 pc)                                                                                                                               | 1      |
+-------------------------------------------------------------------------------------------------------------------------------------------------------------------+--------+
| Arduino UNO R3/Arduino UNO R4 Minima                                                                                                                              | 1      |
+-------------------------------------------------------------------------------------------------------------------------------------------------------------------+--------+
| Servo Claw                                                                                                                                                        | 1      |
+-------------------------------------------------------------------------------------------------------------------------------------------------------------------+--------+
| Kit Muscle BioAmp Shield (Dengan 1 Kabel BioAmp, 6 Kabel STEMMA, kabel snap 9V, Kabel AUX BioAmp, Pita Muscle BioAmp, 24 elektroda gel, & Muscle BioAmp Shield)   | 1      |
+-------------------------------------------------------------------------------------------------------------------------------------------------------------------+--------+

Klik tautan di bawah untuk melihat pembukaan kotak kit:

.. youtube:: Sn389Q7Izy4
    :width: 100%
    :align: center

Persyaratan Perangkat Lunak
**********************

Untuk menggunakan Kit Neurosains DIY Pro Anda, Anda akan memerlukan perangkat lunak yang disebutkan di bawah ini. Instruksi tentang cara menggunakannya disediakan nanti di panduan.

- `Arduino IDE v1.8.19 (legacy IDE) <https://www.arduino.cc/en/software>`_ (Unduh ini untuk mengunggah firmware Chords arduino ke papan pengembangan Anda)

- `Chords Web <https://chords.upsidedownlabs.tech/>`_ (Gunakan aplikasi web open-source ini untuk memvisualisasikan sinyal biopotensial Anda)

- `Visual Studio Code <https://code.visualstudio.com/download>`_ (atau editor kode pilihan Anda lainnya)
  
- `Python <https://www.python.org/downloads/>`_ (Untuk menjalankan skrip Chords-Python)

- `Chords Python <https://github.com/upsidedownlabs/Chords-Python>`_ (Gunakan skrip python open-source ini yang dirancang untuk merekam dan memvisualisasikan sinyal biopotensial)

.. note::

    1. Firmware Chords Arduino identik untuk Chords Web dan Chords Python, jadi Anda hanya perlu mengunggah kode sekali, dan Anda siap.
    2. Anda dapat memilih Chords Web atau Chords Python untuk merekam dan memvisualisasikan sinyal biopotensial Anda berdasarkan kebutuhan Anda. Jika Anda penasaran, Anda dapat mencoba keduanya satu per satu.
  
Menggunakan Kit
**************

Kit Neurosains DIY Pro mencakup 2 sensor biopotensial:

1. BioAmp EXG Pill (Dirakit)
2. Muscle BioAmp Shield v0.3 (Dirakit)

Anda dapat menggunakan sensor ini secara terpisah atau menghubungkannya bersama untuk membuat sistem akuisisi EXG 2-channel di mana channel 1 dapat digunakan untuk merekam sinyal EMG dan channel 2 memungkinkan Anda merekam semua sinyal biopotensial dari tubuh Anda (EMG, ECG, EOG, EEG).

Langkah 1: Menggunakan BioAmp EXG Pill
================================

BioAmp EXG Pill adalah papan akuisisi sinyal biopotensial analog-front-end (AFE) kecil dan kuat yang dapat dipasangkan 
dengan unit mikrocontroller (MCU) atau komputer papan tunggal (SBC) apa pun dengan konverter analog-to-digital (ADC) seperti 
Arduino UNO & Nano, Adafruit QtPy, STM32 Blue Pill, BeagleBone Black, dan Raspberry Pi Pico, untuk menyebutkan 
beberapa. Ini juga bekerja dengan ADC khusus apa pun, seperti Texas Instruments ADS1115 dan ADS131M0x, di antara lainnya.

.. figure:: ../../../media/bioamp-exg-pill.*

.. note:: Lihat dokumentasi lengkap di :ref:`bioamp-exg-pill` yang mencakup cara menggunakan sensor, merekam berbagai sinyal biopotensial dari tubuh Anda (ECG, EMG, EOG, EEG) dan membuat proyek HCI/BCI yang berbeda menggunakan itu.

Langkah 2: Menggunakan Muscle BioAmp Shield
=======================================

Muscle BioAmp Shield adalah shield ElectroMyography (EMG) Arduino Uno all-in-one untuk belajar neurosains dengan mudah yang terinspirasi dari 
BackYard Brains (BYB) `Muscle Spiker Shield <https://backyardbrains.com/products/muscleSpikerShield>`_ dan menyediakan fitur serupa seperti output servo hobi, tombol pengguna, LED Bar, output Audio, dan 
input baterai. Ini sempurna untuk pemula karena mereka dapat dengan mudah menumpuknya di atas Arduino Uno untuk merekam, memvisualisasikan dan mendengarkan sinyal otot mereka 
untuk membuat proyek luar biasa di domain Human-Computer Interface (HCI).

.. figure:: ../../../media/muscle-bioamp-shield.*

.. note:: Lihat dokumentasi lengkap di :ref:`muscle-bioamp-shield` yang mencakup cara menggunakan sensor, merekam/memvisualisasikan/mendengarkan sinyal otot dan membuat proyek HCI yang berbeda menggunakan itu.

Langkah 3: Menggunakan sensor bersama
======================================

Kami percaya bahwa Anda telah melalui dokumentasi BioAmp EXG Pill & Muscle BioAmp Shield menggunakan tautan yang disediakan di langkah 1 dan 2 masing-masing.

Anda telah mencakup langkah-langkah dasar sampai sekarang termasuk koneksi dengan papan pengembangan, persiapan kulit, penempatan elektroda, dan merekam sinyal dari tubuh Anda.

Mari menjadi PRO dan buat sistem akuisisi EXG 2-channel.

a. Menghubungkan Muscle BioAmp Shield ke MCU/ADC
---------------------------------------------------

Tumpuk Muscle BioAmp Shield di atas Arduino Uno Anda dengan benar.

.. only:: latex

    .. figure:: ../../../hardware/bioamp/muscle-bioamp-shield/media/images/shield-arduino-connection.*
        :align: center

        Stacking Muscle BioAmp Shield on top of Arduino

.. only:: html

    .. figure:: ../../../hardware/bioamp/muscle-bioamp-shield/media/gifs/shield-arduino-connection.gif
        :align: center

b. Konfigurasi untuk ECG/EMG (opsional)
------------------------------------------

BioAmp EXG Pill secara default dikonfigurasi untuk merekam EEG atau EOG tetapi jika Anda ingin merekam ECG atau EMG berkualitas baik, maka disarankan untuk mengonfigurasinya dengan membuat sambungan solder seperti yang ditunjukkan pada gambar.

.. figure:: ../../../hardware/bioamp/bioamp-exg-pill/media/assembly-step2.*
    :align: center

    Konfigurasi BioAmp EXG Pill untuk EMG/ECG

.. note:: Bahkan tanpa membuat sambungan solder, BioAmp EXG Pill mampu merekam ECG atau EMG tetapi sinyal akan lebih akurat jika Anda mengonfigurasinya.

c. Menghubungkan sensor bersama
--------------------------------------

Hubungkan BioAmp EXG Pill ke port A2 Muscle BioAmp Shield melalui kabel STEMMA 3-pin yang memiliki konektor JST PH 2.0mm di satu ujung dan 3 jumper betina di ujung lainnya.

+----------------------+-----------------+
| Muscle BioAmp Shield | BioAmp EXG Pill |
+======================+=================+
| GND                  | GND             |
+----------------------+-----------------+
| VCC                  | 5V              |
+----------------------+-----------------+
| A2                   | OUT             |
+----------------------+-----------------+

.. only:: latex

    .. figure:: media/images/shield-pill-connection.*
        :align: center

        Inserting JST PH connector in A2 port of Muscle BioAmp Shield

    .. figure:: media/images/shield-pill-connection-2.*
        :align: center

        Muscle BioAmp Shield to BioAmp EXG Pill connections

.. only:: html

    .. figure:: media/gifs/shield-pill-connection.*
        :align: center

d. Menghubungkan kabel elektroda
--------------------------------

Hubungkan satu kabel BioAmp ke BioAmp EXG Pill dan kabel BioAmp lainnya ke Muscle BioAmp Shield dengan memasukkan ujung kabel ke konektor JST PH masing-masing seperti yang ditunjukkan di bawah:

.. only:: html

    .. figure:: media/gifs/bioamp-cables-connection.*
        :align: center

.. only:: latex

    .. figure:: media/images/bioamp-cables-connection.*
        :align: center

        Connecting BioAmp Cables to the sensors

e. Persiapan Kulit
---------------------------

Kami akan membuat sistem akuisisi EMG 2-channel dan untuk melakukannya, kami akan menggunakan kedua sensor untuk merekam sinyal EMG dari saraf ulnar kedua tangan, Jadi, siapkan kulit yang sesuai. 

Oleskan Gel Persiapan Kulit Nuprep pada permukaan kulit di mana elektroda akan ditempatkan untuk menghilangkan sel kulit mati dan membersihkan kulit dari kotoran. Setelah menggosok permukaan kulit secara menyeluruh, bersihkan dengan tisu alkohol atau tisu basah.

Untuk informasi lebih lanjut, silakan lihat langkah-langkah detail :ref:`skin-preparation`.

f. Penempatan Elektroda
-------------------------

Kami memiliki 2 opsi untuk mengukur sinyal EMG, baik menggunakan elektroda gel atau menggunakan Pita Muscle BioAmp berbasis elektroda kering. Anda dapat mencoba keduanya satu per satu.

Menggunakan elektroda gel
++++++++++++++++++++++

1. Snap kabel BioAmp yang terhubung ke BioAmp EXG Pill ke elektroda gel.
2. Kupas backing plastik dari elektroda.
3. Tempatkan kabel IN+ dan IN- pada lengan kiri dekat saraf ulnar & REF (referensi) di belakang tangan kiri Anda seperti yang ditunjukkan di bawah.

.. only:: html

    .. figure:: media/gifs/gel-electrodes-connection.*
        :align: center

4. Sekarang snap kabel BioAmp yang terhubung ke Muscle BioAmp Shield ke elektroda gel.
5. Kupas backing plastik dari elektroda.
6. Tempatkan kabel IN+ dan IN- pada lengan kanan dekat saraf ulnar & REF (referensi) di belakang tangan kanan Anda seperti yang ditunjukkan di bawah.

.. only:: html

    .. figure:: media/gifs/gel-electrodes-connection-2.*
        :align: center

.. only:: latex

    .. figure:: media/images/gel-electrodes-connection.*
        :align: center

        Gel electrodes placement

Menggunakan Pita Muscle BioAmp
+++++++++++++++++++++++++

1. Snap kabel BioAmp yang terhubung ke BioAmp EXG Pill pada Pita Muscle BioAmp sedemikian rupa sehingga IN+ dan IN- ditempatkan pada lengan kiri dekat saraf ulnar & REF (referensi) di sisi jauh pita.

.. only:: html

    .. figure:: media/gifs/bioamp-band-connection-2.*
        :align: center

2. Snap kabel BioAmp yang terhubung ke Muscle BioAmp Shield pada Pita Muscle BioAmp sedemikian rupa sehingga IN+ dan IN- ditempatkan pada lengan kanan dekat saraf ulnar & REF (referensi) di sisi jauh pita.

.. only:: html

    .. figure:: media/gifs/bioamp-band-connection.*
        :align: center

.. only:: latex

    .. figure:: media/images/bioamp-band-connection.*
        :align: center

        Muscle BioAmp Band placement

3. Sekarang letakkan setetes kecil gel elektroda antara kulit dan bagian logam kabel BioAmp untuk mendapatkan hasil terbaik.

.. tip:: Kunjungi dokumentasi lengkap tentang cara :ref:`merakit dan menggunakan Pita BioAmp <using-bioamp-bands>` atau ikuti video youtube yang diberikan di bawah.

   **Tutorial tentang cara menggunakan pita:**

   .. youtube:: xYZdw0aesa0
       :align: center
       :width: 100%

.. note:: Dalam demonstrasi ini kami merekam sinyal EMG dari saraf ulnar, tetapi Anda dapat merekam EMG dari area lain juga (bisep, trisep, kaki, rahang dll) sesuai kebutuhan proyek Anda. Pastikan untuk menempatkan elektroda IN+, IN- pada otot target dan REF pada bagian tulang.

g. Mengunggah kode
----------------------

Hubungkan Arduino Uno ke laptop Anda menggunakan kabel USB (Tipe A ke Tipe B). Unduh repositori github yang diberikan di bawah:

:fab:`github;pst-color-primary` `Muscle BioAmp Arduino Firmware <https://github.com/upsidedownlabs/Muscle-BioAmp-Arduino-Firmware/>`_

Pergi ke folder ``8_EMGScrolling``, buka sketch arduino ``8_EMGScrolling.ino`` di Arduino IDE.

Pergi ke ``tools`` dari menu bar, pilih opsi ``board`` lalu pilih Arduino UNO. Di menu yang sama, 
pilih port COM di mana Arduino Uno Anda terhubung. Untuk mengetahui port COM yang benar, 
putuskan sambungan papan Arduino Uno Anda dan buka kembali menu. Entri yang hilang harus 
port COM yang benar. Sekarang unggah kode.

.. important:: Pastikan laptop Anda tidak terhubung ke charger dan duduk 5m jauh dari peralatan AC apa pun untuk akuisisi sinyal terbaik.

h. Menguji koneksi
------------------------------

Pergi ke ``tools`` dari menu bar, klik pada ``serial monitor`` untuk membukanya atau klik ikon di sudut kanan atas. Coba tekuk kedua lengan Anda satu per satu. Nilai output harus 0 pada titik ini.

Tekan tombol ``SW1`` pada Muscle BioAmp Shield. Sekarang Anda akan melihat LED hijau menyala pada bar LED. Ketika Anda menekuk lengan kanan, Anda akan mendapatkan nilai output 1 pada monitor serial dan LED merah akan menyala. Demikian pula, ketika Anda menekuk lengan kiri, Anda akan mendapatkan nilai output 2 dan LED kuning akan menyala.

.. only:: html

    .. figure:: media/gifs/testing.*
        :align: center

.. only:: latex

    .. figure:: media/images/testing-1.*
        :align: center

        Press the SW1 button to start getting the output

    .. figure:: media/images/testing-2.*
        :align: center

        Flex the right arm, red LED glows

    .. figure:: media/images/testing-3.*
        :align: center

        Flex the left arm, yellow LED glows

    .. figure:: media/images/testing-4.*
        :align: center

        Flex the right arm, serial monitor shows output value 1

    .. figure:: media/images/testing-5.*
        :align: center

        Flex the left arm, serial monitor shows output value 2

i. Menjalankan skrip python
-------------------------

Buka Visual Studio Code, klik pada File > Open folder untuk membuka folder ``8_EMGScrolling``.

Buka terminal, dan pastikan path dikonfigurasi ke lokasi file ``requirement.txt``.

Untuk menginstal semua modul yang diperlukan untuk menjalankan skrip Python, tulis perintah yang diberikan di terminal:

.. code-block:: python3

    pip install -r requirements.txt

Buka ``EMG_Scroll.py`` dan ubah COM Port di kode (baris 14) sesuai COM Port yang Anda pilih di Arduino IDE. Simpan file dengan mengklik CTRL + S.

.. code-block:: python3
    :emphasize-lines: 2

    # Arduino serial port interface
    ser = serial.Serial('COM12', 115200, timeout=1)

Jalankan skrip Python ``EMG_Scroll.py`` dengan menulis perintah yang diberikan di terminal:

.. code-block:: python3

    python EMG_Scroll.py

j. Menggulir menggunakan sinyal EMG
---------------------------------

Tekan tombol ``SW1`` pada Muscle BioAmp Shield lagi.

Di terminal, Anda akan melihat prompt Move Now. Ketika Anda menekuk lengan kanan, Anda akan melihat UP di terminal. Demikian pula, ketika Anda menggerakkan lengan kiri, Anda akan melihat DOWN di terminal.

.. only:: html

    .. figure:: media/gifs/demo-1.*
        :align: center

.. only:: latex

    .. figure:: media/images/demo-1.*
        :align: center

Sekarang, buka youtube shorts di laptop Anda dan mulai gulir menggunakan sinyal otot Anda.

.. only:: html

    .. figure:: media/gifs/demo-2.*
        :align: center

.. note:: Apa yang terjadi di latar belakang? Setiap kali sinyal EMG terdeteksi, itu bertindak sebagai pemicu untuk meniru tombol UP atau DOWN pada keyboard.

k. Mengkalibrasi kode
-------------------------

**Perubahan di Arduino Sketch**

Modifikasi nilai threshold pada **baris 73 dan 74**. Threshold 1 untuk sinyal EMG yang direkam dari Muscle BioAmp Shield, dan threshold 2 untuk sinyal EMG yang direkam dari BioAmp EXG Pill.

Uncomment baris 71 di kode Arduino dan navigasi ke Tools > Serial Plotter. Anda akan melihat dua plot yang menunjukkan sinyal EMG kedua lengan Anda. Tekuk lengan kanan Anda dan amati nilai puncak pada sumbu y. Jika nilai puncak sekitar 240, Anda dapat mengatur threshold 1 di mana saja antara 150 hingga 200. Semakin rendah nilai threshold, semakin mudah memicu output sebagai UP atau DOWN, dan sebaliknya. Ulangi proses untuk menentukan nilai threshold 2 untuk lengan kiri Anda.

Setelah mengatur threshold, comment out baris 71.

**Perubahan di skrip Python**

Sesuaikan nilai latency pada **baris 51**. Nilai latency yang lebih tinggi akan membuat output kurang responsif, memerlukan Anda untuk menekuk dan menahan lebih lama untuk menggulir layar. Nilai latency yang lebih rendah akan membuat output lebih responsif, memungkinkan Anda menggulir layar dengan lebih mudah.

l. Kesimpulan
-----------------

Ini hanyalah demonstrasi untuk menunjukkan kepada Anda bagaimana kedua sensor (BioAmp EXG Pill & Muscle BioAmp Shield) dapat digunakan bersama untuk membuat sistem akuisisi EXG 2-channel.
Dalam proyek ini, kami menggunakan BioAmp EXG Pill untuk merekam sinyal EMG, tetapi itu juga dapat digunakan untuk merekam sinyal biopotensial lainnya seperti ECG, EOG, atau EEG.

Beberapa ide proyek
**********************

.. only:: html

    .. article-info::
      :avatar: ../basic/media/instructables.svg
      :avatar-link: https://www.instructables.com/member/Upside+Down+Labs/
      :avatar-outline: muted
      :author: *Upside Down Labs on Instructables:*
      :class-container: sd-p-2 sd-rounded-1

    1. Proyek yang dibuat menggunakan BioAmp EXG Pill
    =========================================

    .. grid:: 2 2 2 2
        :margin: 4 4 0 0 
        :gutter: 2

        .. grid-item-card:: Mengontrol video game menggunakan gelombang otak (EEG)
            :text-align: center
            :link: https://www.instructables.com/Controlling-Video-Game-Using-Brainwaves-EEG/

        .. grid-item-card:: Memvisualisasikan impuls listrik dari mata (EOG)
            :text-align: center
            :link: https://www.instructables.com/Visualizing-Electrical-Impulses-of-Eyes-EOG-Using-/

        .. grid-item-card:: Merekam EEG dari korteks visual
            :text-align: center
            :link: https://www.instructables.com/Recording-EEG-From-Visual-Cortex-of-Brain-Using-Bi/

        .. grid-item-card:: Merekam EEG dari korteks prefrontal
            :text-align: center
            :link: https://www.instructables.com/Recording-EEG-From-Pre-Frontal-Cortex-of-Brain-Usi/

        .. grid-item-card:: Deteksi kedipan mata
            :text-align: center
            :link: https://www.instructables.com/Eye-Blink-Detection-by-Recording-EOG-Using-BioAmp-/

        .. grid-item-card:: Membuat detektor kantuk
            :text-align: center
            :link: https://www.instructables.com/Drowsiness-Detector-by-Detecting-EOG-Signals-Using/

        .. grid-item-card:: Merekam ECG berkualitas publikasi
            :text-align: center
            :link: https://www.instructables.com/Record-Publication-Grade-ECG-at-Your-Home-Using-Bi/

        .. grid-item-card:: Mengukur detak jantung
            :text-align: center
            :link: https://www.instructables.com/Measuring-Heart-Rate-Using-BioAmp-EXG-Pill/

        .. grid-item-card:: Mendeteksi detak jantung
            :text-align: center
            :link: https://www.instructables.com/Detecting-Heart-Beats-Using-BioAmp-EXG-Pill/

        .. grid-item-card:: Merekam EMG berkualitas publikasi
            :text-align: center
            :link: https://www.instructables.com/Recording-Publication-Grade-Muscle-Signals-Using-B/

        .. grid-item-card:: Mendeteksi gerakan mata atas dan bawah
            :text-align: center
            :link: https://www.instructables.com/Tracking-UP-and-DOWN-Movements-of-Eyes-Using-EOG/

    1. Proyek yang dibuat menggunakan Muscle BioAmp Shield
    =============================================

    .. grid:: 2 2 2 2
        :margin: 4 4 0 0 
        :gutter: 2

        .. grid-item-card:: Merekam, memvisualisasikan, dan mendengarkan sinyal EMG
            :text-align: center
            :link: https://www.instructables.com/Record-Visualize-Listen-to-Muscle-Signals-Using-Mu/

        .. grid-item-card:: Mengontrol servo claw 3d-printed menggunakan EMG 
            :text-align: center
            :link: https://www.instructables.com/Controlling-a-Servo-Claw-With-Muscle-Signals-EMG-U/

        .. grid-item-card:: Kontrol tangan prostetik menggunakan EMG
            :text-align: center
            :link: https://www.instructables.com/Controlling-Prosthetic-Hand-cardboard-Version-Usin/

        .. grid-item-card:: Membangun game servo claw ultimate 
            :text-align: center
            :link: https://www.instructables.com/Servo-Claw-Game/

        .. grid-item-card:: Membangun game kekuatan otot
            :text-align: center
            :link: https://www.instructables.com/Making-a-Muscle-Strength-Game-Using-Muscle-BioAmp-/

    1. Proyek yang dibuat menggunakan sensor bersama
    ==============================================

    .. grid:: 2 2 2 2
        :margin: 4 4 0 0 
        :gutter: 2

        .. grid-item-card:: Kontrol game dino menggunakan kedipan mata
            :text-align: center
            :link: https://www.instructables.com/Control-Dino-Game-Using-Eye-Blinks-EOG/

        .. grid-item-card:: Kontrol servo claw menggunakan EOG
            :text-align: center
            :link: https://www.instructables.com/Control-a-Servo-Claw-Using-Your-Eye-Blinks-EOG/

        .. grid-item-card:: Kontrol video game menggunakan 2-ch EMG
            :text-align: center
            :link: https://www.instructables.com/Controlling-Video-Games-Using-Muscle-Signals-EMG/

        .. grid-item-card:: Memvisualisasikan 2-ch EMG pada LCD Display
            :text-align: center
            :link: https://www.instructables.com/Visualizing-2-Channel-EMG-on-LCD-Display-Module/

    Ini adalah beberapa ide proyek tetapi kemungkinannya tak terbatas. Jadi buat proyek Human Computer Interface (HCI) dan 
    Brain Computer Interface (BCI) Anda sendiri dan bagikan dengan kami di ``contact@upsidedownlabs.tech``.
 
.. only:: latex

    Anda dapat menemukan tutorial langkah demi langkah untuk berbagai proyek HCI/BCI di `Instructables <https://www.instructables.com/member/Upside+Down+Labs/>`_ kami.

    Proyek yang dibuat menggunakan BioAmp EXG Pill
    ====================================

    1. `Mengontrol video game menggunakan gelombang otak (EEG) <https://www.instructables.com/Controlling-Video-Game-Using-Brainwaves-EEG/>`_
    2. `Memvisualisasikan impuls listrik dari mata (EOG) <https://www.instructables.com/Visualizing-Electrical-Impulses-of-Eyes-EOG-Using-/>`_
    3. `Merekam EEG dari korteks visual otak <https://www.instructables.com/Recording-EEG-From-Visual-Cortex-of-Brain-Using-Bi/>`_
    4. `Merekam EEG dari korteks prefrontal otak <https://www.instructables.com/Recording-EEG-From-Pre-Frontal-Cortex-of-Brain-Usi/>`_
    5. `Deteksi kedipan mata <https://www.instructables.com/Eye-Blink-Detection-by-Recording-EOG-Using-BioAmp-/>`_
    6. `Membuat detektor kantuk <https://www.instructables.com/Drowsiness-Detector-by-Detecting-EOG-Signals-Using/>`_
    7. `Merekam ECG berkualitas publikasi <https://www.instructables.com/Record-Publication-Grade-ECG-at-Your-Home-Using-Bi/>`_
    8. `Mengukur detak jantung <https://www.instructables.com/Measuring-Heart-Rate-Using-BioAmp-EXG-Pill/>`_
    9. `Mendeteksi detak jantung <https://www.instructables.com/Detecting-Heart-Beats-Using-BioAmp-EXG-Pill/>`_
    10. `Merekam EMG berkualitas publikasi <https://www.instructables.com/Recording-Publication-Grade-Muscle-Signals-Using-B/>`_
    11. `Mendeteksi gerakan mata atas dan bawah <https://www.instructables.com/Tracking-UP-and-DOWN-Movements-of-Eyes-Using-EOG/>`_

    Proyek yang dibuat menggunakan Muscle BioAmp Shield
    ===========================================
    
    1. `Merekam, memvisualisasikan, dan mendengarkan sinyal EMG <https://www.instructables.com/Record-Visualize-Listen-to-Muscle-Signals-Using-Mu/>`_
    2. `Mengontrol servo claw 3d-printed menggunakan EMG <https://www.instructables.com/Controlling-a-Servo-Claw-With-Muscle-Signals-EMG-U/>`_
    3. `Mengontrol tangan prostetik menggunakan EMG <https://www.instructables.com/Controlling-Prosthetic-Hand-cardboard-Version-Usin/>`_
    4. `Membangun game servo claw ultimate <https://www.instructables.com/Servo-Claw-Game/>`_
    5. `Membangun game kekuatan otot <https://www.instructables.com/Making-a-Muscle-Strength-Game-Using-Muscle-BioAmp-/>`_

    Proyek yang dibuat menggunakan sensor bersama
    ============================================

    1. `Kontrol game dino menggunakan kedipan mata <https://www.instructables.com/Control-Dino-Game-Using-Eye-Blinks-EOG/>`_
    2. `Kontrol servo claw menggunakan EOG <https://www.instructables.com/Control-a-Servo-Claw-Using-Your-Eye-Blinks-EOG/>`_
    3. `Memvisualisasikan 2-ch EMG pada modul display LCD <https://www.instructables.com/Visualizing-2-Channel-EMG-on-LCD-Display-Module/>`_
    4. `Kontrol video game menggunakan 2-ch EMG <https://www.instructables.com/Controlling-Video-Games-Using-Muscle-Signals-EMG/>`_

    Ini adalah beberapa ide proyek tetapi kemungkinannya tak terbatas. Jadi buat proyek Human Computer Interface (HCI) dan 
    Brain Computer Interface (BCI) Anda sendiri dan bagikan dengan kami di ``contact@upsidedownlabs.tech``