.. _diy-neuroscience-kit-basic:

Kit Dasar Neurosains DIY
###########################

Ringkasan
**********

Kit ini sempurna untuk ``siswa``, ``peneliti`` dan ``hobiis`` yang ingin mulai menjelajahi neurosains.
Baik itu mempelajari gelombang otak, memantau ritme jantung, menganalisis gerakan otot, atau melacak gerakan mata,
kit DIY ini menyediakan platform yang mudah diakses dan edukatif untuk memahami kompleksitas fisiologi manusia dan
mengembangkan aplikasi praktis di bidang interaksi manusia-komputer, dan seterusnya.

.. figure:: media/diy-neuroscience-kit-basic.*
    :align: center

Isi Kit
********************

Dari papan pengembangan (Maker UNO), BioAmp EXG Pill, kabel BioAmp v3, kabel jumper, elektroda gel,
pita BioAmp berbasis elektroda kering hingga kit persiapan kulit, ini mencakup semua yang Anda butuhkan untuk memulai proyek HCI/BCI yang luar biasa.

.. figure:: media/kit-contents.*
    :align: center

**Membuka kotak kit:**

.. youtube:: 7O9Bw8y5fQs
    :width: 100%
    :align: center

Persyaratan Perangkat Lunak
**********************

Untuk menggunakan Kit Dasar Neurosains DIY Anda, Anda akan memerlukan perangkat lunak yang disebutkan di bawah ini. Instruksi tentang cara menggunakannya disediakan nanti di panduan.

- `Arduino IDE <https://www.arduino.cc/en/software>`_ (Unduh ini untuk mengunggah firmware Chords arduino ke papan pengembangan Anda)

- `Chords Web <https://chords.upsidedownlabs.tech/>`_ (Gunakan aplikasi web open-source ini untuk memvisualisasikan sinyal biopotensial Anda)

- `Visual Studio Code <https://code.visualstudio.com/download>`_ (atau editor kode pilihan Anda lainnya)
  
- `Python <https://www.python.org/downloads/>`_ (Untuk menjalankan skrip Chords-Python)

- `Chords Python <https://github.com/upsidedownlabs/Chords-Python>`_ (Gunakan skrip python open-source ini yang dirancang untuk merekam dan memvisualisasikan sinyal biopotensial)

.. note::

    1. Firmware Chords Arduino identik untuk Chords Web dan Chords Python, jadi Anda hanya perlu mengunggah kode sekali, dan Anda siap.
    2. Anda dapat memilih Chords Web atau Chords Python untuk merekam dan memvisualisasikan sinyal biopotensial Anda berdasarkan kebutuhan Anda. Jika Anda penasaran, Anda dapat mencoba keduanya satu per satu.

Menggunakan Kit
**************

Kit ini dibuat sedemikian rupa sehingga bahkan pemula dapat menggunakannya dan memulai merekam sinyal biopotensial dari tubuh mereka untuk menjelajahi bidang neurosains dengan membuat proyek HCI/BCI.

Langkah 1 (opsional): Konfigurasi untuk EMG/ECG
=========================================

.. figure:: media/configuration-emg-ecg.*
    :align: center

BioAmp EXG Pill secara default dikonfigurasi untuk merekam EEG atau EOG, jadi jika Anda merekam salah satu dari dua sinyal tersebut
Anda dapat melewati langkah ini. Tetapi jika Anda ingin merekam ECG atau EMG berkualitas baik, maka disarankan untuk mengonfigurasinya
dengan membuat sambungan solder seperti yang ditunjukkan pada gambar di atas.

.. note:: Bahkan tanpa membuat sambungan solder, BioAmp EXG Pill mampu merekam ECG atau EMG juga tetapi sinyal akan lebih akurat jika Anda mengonfigurasinya.

Langkah 2: Hubungkan Maker UNO
==========================

.. figure:: media/connection-with-maker-uno.*
    :align: center

Hubungkan ``VCC`` ke ``5V``, ``GND`` ke ``GND``, dan ``OUT`` ke ``Analog pin A0`` dari Maker UNO Anda melalui kabel jumper yang kami berikan. Jika Anda menghubungkan OUT ke pin analog lainnya, maka Anda harus mengubah INPUT PIN di sketch arduino yang sesuai.

.. warning:: Berhati-hatilah saat menghubungkan ke daya, jika pin daya (GND & VCC) ditukar, BioAmp EXG Pill Anda akan hangus dan menjadi tidak dapat digunakan (DIE).

Langkah 3: Menghubungkan kabel elektroda
===================================

.. figure:: media/bioamp-cable.*
    :align: center

Hubungkan kabel BioAmp ke BioAmp EXG Pill dengan memasukkan ujung kabel ke konektor JST PH seperti yang ditunjukkan di atas.

Langkah 4: Persiapan Kulit
=========================

Oleskan Gel Persiapan Kulit Nuprep pada permukaan kulit di mana elektroda akan ditempatkan untuk menghilangkan sel kulit mati dan membersihkan kulit dari kotoran. Setelah menggosok permukaan kulit secara menyeluruh, bersihkan dengan tisu alkohol atau tisu basah.

Untuk informasi lebih lanjut, silakan lihat langkah-langkah detail :ref:`skin-preparation`.


Langkah 5: Penempatan Elektroda
===========================

Kami memiliki 2 opsi untuk mengukur sinyal, baik menggunakan elektroda gel atau menggunakan Pita BioAmp berbasis elektroda kering. Anda dapat mencoba keduanya satu per satu.

1. :ref:`Panduan menggunakan elektroda gel <steps-for-gel-electrodes>`
2. :ref:`Panduan merakit & menggunakan Pita BioAmp <using-bioamp-bands>`

Setelah Anda membuat koneksi, kembali ke sini untuk melanjutkan ke langkah berikutnya.

Langkah 6: Mengunggah kode
===========================

1. Hubungkan Maker Uno ke laptop Anda menggunakan kabel USB (Tipe A ke Tipe B). Pergi ke repositori github Chords Arduino Firmware, buka folder ``AVR-NANO-UNO-MEGA`` dan salin tempel sketch arduino di Arduino IDE yang Anda unduh sebelumnya.

    Tautan untuk sketch arduino: :fab:`github;pst-color-primary` `Chords Arduino Firmware for Maker Uno <https://github.com/upsidedownlabs/Chords-Arduino-Firmware/blob/main/AVR-NANO-UNO-MEGA/AVR-NANO-UNO-MEGA.ino>`_

2. Uncomment ``#define BOARD_MAKER_UNO`` di kode.

3. Pergi ke ``tools`` > ``board`` > ``Arduino AVR boards`` dan pilih Arduino UNO. Di menu yang sama, pilih port COM di mana Maker Uno Anda terhubung. Untuk mengetahui port COM yang benar, putuskan sambungan papan Maker UNO Anda dan buka kembali menu. Entri yang hilang harus port COM yang benar. Sekarang klik tombol upload.

.. warning:: Pastikan laptop Anda tidak terhubung ke charger dan duduk 5m jauh dari peralatan AC apa pun untuk akuisisi sinyal terbaik.

Langkah 7: Menyiapkan Chords Web
==============================

1. Kunjungi `chords.upsidedownlabs.tech <https://chords.upsidedownlabs.tech>`_.
2. Klik tombol "Visualize now".
3. Di bagian bawah, Anda dapat melihat tombol untuk mengakses berbagai aplikasi:
    a. :ref:`Chords Visualizer <chords-visualizer>`: Gunakan aplikasi ini untuk visualisasi data real-time, perekaman dan manajemen data, opsi filter, dan dukungan multi-channel.
    b. :ref:`FFT Visualizer <chords-web-fft-visualizer>`: Gunakan aplikasi ini untuk memvisualisasikan sinyal EEG yang difilter secara real-time, grafik FFT, band frekuensi EEG, dan lilin beta untuk menentukan fokus Anda.
    c. :ref:`Serial Wizard <chords-web-serial-wizard>`: Antarmuka ini menyediakan visualisasi data serial real-time menggunakan plotter serial dan monitor, rendering data yang dioptimalkan, pemilihan baud rate dan opsi untuk beralih antara mode.

4. Klik salah satu tombol sesuai kebutuhan Anda, pilih port COM dan klik OK. Anda akan dapat memvisualisasikan sinyal Anda di layar.

Langkah 8: Menyiapkan Chords Python
=================================

Karena Anda telah mengunggah firmware ke Maker UNO Anda, gunakan skrip python kami dan ikuti langkah-langkah yang diberikan di :ref:`dokumentasi Chords-Python <using-chords-python>` untuk streaming lsl, logging data CSV, output verbose dengan statistik detail dan pelaporan kesalahan. Tidak hanya itu, Anda mendapatkan antarmuka web lengkap untuk mengakses berbagai aplikasi (seperti ECG dengan detak jantung, EMG dengan envelope, GUI channel, plotter CSV, dll.) yang dapat Anda gunakan untuk menganalisis sinyal Anda lebih lanjut dan membuat proyek HCI/BCI.

Beberapa Ide Proyek
*********************

.. only:: html

    .. article-info::
        :avatar: media/instructables.svg
        :avatar-link: https://www.instructables.com/member/Upside+Down+Labs/
        :avatar-outline: muted
        :author: Upside Down Labs di Instructables:
        :class-container: sd-p-2 sd-rounded-1

    .. grid:: 2 2 2 2
        :margin: 4 4 0 0
        :gutter: 2

        .. grid-item-card:: Mengontrol video game menggunakan EEG
            :text-align: center
            :link: https://www.instructables.com/Controlling-Video-Game-Using-Brainwaves-EEG/

        .. grid-item-card:: Merekam EEG dari korteks visual
            :text-align: center
            :link: https://www.instructables.com/Recording-EEG-From-Visual-Cortex-of-Brain-Using-Bi/

        .. grid-item-card:: Merekam sinyal ECG berkualitas publikasi
            :text-align: center
            :link: https://www.instructables.com/Record-Publication-Grade-ECG-at-Your-Home-Using-Bi/

        .. grid-item-card:: Mengukur detak jantung
            :text-align: center
            :link: https://www.instructables.com/Measuring-Heart-Rate-Using-BioAmp-EXG-Pill/

        .. grid-item-card:: Mendeteksi detak jantung
            :text-align: center
            :link: https://www.instructables.com/Detecting-Heart-Beats-Using-BioAmp-EXG-Pill/

        .. grid-item-card:: Membuat detektor kantuk
            :text-align: center
            :link: https://www.instructables.com/Drowsiness-Detector-by-Detecting-EOG-Signals-Using/

        .. grid-item-card:: Mendeteksi kedipan mata
            :text-align: center
            :link: https://www.instructables.com/Eye-Blink-Detection-by-Recording-EOG-Using-BioAmp-/

        .. grid-item-card:: Mendeteksi gerakan mata atas dan bawah
            :text-align: center
            :link: https://www.instructables.com/Tracking-UP-and-DOWN-Movements-of-Eyes-Using-EOG/

        .. grid-item-card:: Merekam EMG berkualitas publikasi
            :text-align: center
            :link: https://www.instructables.com/Recording-Publication-Grade-Muscle-Signals-Using-B/

    Ini adalah beberapa ide proyek tetapi kemungkinannya tak terbatas. Jadi buat proyek Human Computer Interface (HCI) dan
    Brain Computer Interface (BCI) Anda sendiri dan bagikan dengan kami di contact@upsidedownlabs.tech.


.. only:: latex

    Anda dapat menemukan tutorial langkah demi langkah untuk berbagai proyek HCI/BCI di `Instructables <https://www.instructables.com/member/Upside+Down+Labs/>`_ kami.

    Berikut adalah beberapa ide proyek yang dapat Anda coba buat di rumah. Klik pada tautan di bawah untuk mendapatkan panduan langkah demi langkah untuk membangun proyek.

    1. `Mengontrol video game menggunakan sinyal EEG <https://www.instructables.com/Controlling-Video-Game-Using-Brainwaves-EEG/>`_
    2. `Merekam EEG dari korteks visual <https://www.instructables.com/Recording-EEG-From-Visual-Cortex-of-Brain-Using-Bi/>`_
    3. `Merekam sinyal ECG berkualitas publikasi <https://www.instructables.com/Record-Publication-Grade-ECG-at-Your-Home-Using-Bi/>`_
    4. `Mengukur detak jantung <https://www.instructables.com/Measuring-Heart-Rate-Using-BioAmp-EXG-Pill/>`_
    5. `Mendeteksi detak jantung <https://www.instructables.com/Detecting-Heart-Beats-Using-BioAmp-EXG-Pill/>`_
    6. `Membuat detektor kantuk <https://www.instructables.com/Drowsiness-Detector-by-Detecting-EOG-Signals-Using/>`_
    7. `Mendeteksi kedipan mata <https://www.instructables.com/Eye-Blink-Detection-by-Recording-EOG-Using-BioAmp-/>`_
    8. `Mendeteksi gerakan mata atas dan bawah <https://www.instructables.com/Tracking-UP-and-DOWN-Movements-of-Eyes-Using-EOG/>`_
    9. `Merekam sinyal EMG berkualitas publikasi <https://www.instructables.com/Recording-Publication-Grade-Muscle-Signals-Using-B/>`_

    Ini adalah beberapa ide proyek tetapi kemungkinannya tak terbatas. Jadi buat proyek Human Computer Interface (HCI) dan
    Brain Computer Interface (BCI) Anda sendiri dan bagikan dengan kami di contact@upsidedownlabs.tech
