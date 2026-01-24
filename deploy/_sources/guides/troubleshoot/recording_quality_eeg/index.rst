.. _recording_quality_eeg:

Kualitas Perekaman EEG
######################

Panduan ini akan membantu Anda mengatur dan memverifikasi sinyal EEG Anda menggunakan Hardware BioAmp dan perangkat lunak Chords.

Langkah 1: Persiapan Kulit
========================

Persiapan kulit yang tepat sangat penting sebelum merekam sinyal biopoten sial apa pun, baik itu Elektrokardiografi (ECG), Elektromiografi (EMG), Elektroensefalografi (EEG), atau Elektrookulografi (EOG). Ini membantu untuk:

- Membersihkan permukaan kulit  
- Mengurangi impedansi elektroda-kulit
- Meningkatkan kualitas sinyal secara keseluruhan  

.. note::

    Butuh bantuan dengan persiapan kulit? Lihat panduan lengkap di sini: :ref:`Panduan Persiapan Kulit <skin-preparation>`

Langkah 2: Menghubungkan Kabel BioAmp ke Hardware
================================================

Hubungkan kabel BioAmp ke saluran input yang sesuai dari perangkat EEG Anda. Pastikan elektroda ground dan referensi terhubung dengan aman ke tubuh.

.. figure:: ../media/connections.*
    :align: center
    :alt: Koneksi hardware BioAmp

    Koneksi hardware BioAmp

Langkah 3: Menempelkan Elektroda Gel pada Area Target
=====================================================

Tempatkan elektroda berbasis gel dengan kuat pada daerah kulit kepala target—biasanya lobus frontal (misalnya, Fp1, Fp2) atau oksipital (misalnya, O1, O2)—tergantung pada sinyal minat Anda. Pastikan elektroda memiliki kontak kulit yang baik dan tidak longgar.

.. figure:: ../media/eeg_place.*
    :align: center
    :alt: Penempatan elektroda gel EEG

    Penempatan elektroda gel EEG

Langkah 4: Buka Perangkat Lunak Chords untuk Memvisualisasikan Sinyal
=====================================================================

1. Buka browser berbasis Chromium seperti **Google Chrome**, **Microsoft Edge**, **Opera**, atau **Brave**.
2. Kunjungi: `https://chords.upsidedownlabs.tech <https://chords.upsidedownlabs.tech>`_
3. Klik tombol **Visualize Now** di halaman utama dan kemudian klik tombol **Chords-Visualizer** di halaman berikutnya.
4. Hubungkan perangkat Anda melalui **Serial** dengan memilih port perangkat Anda.
5. Mulai visualisasi real-time sinyal EEG Anda.

Langkah 5: Cara Memeriksa Apakah Sinyal Benar
====================================================

Untuk memverifikasi penempatan elektroda yang benar dan kualitas sinyal yang baik, coba tindakan berikut dan amati respons EEG yang diharapkan.

- **Kedipan Mata**  

Kedipan menciptakan lonjakan tajam di sinyal EEG - ini adalah artefak EOG yang disebabkan oleh gerakan mata.

.. figure:: ../media/eye_blink.*
    :align: center
    :alt: Bentuk gelombang kedipan mata

    Bentuk gelombang kedipan mata

- **Rahang Mengatup**  

Rahang mengatup kuat menghasilkan artefak EMG di sinyal EEG - ini disebabkan oleh aktivitas otot wajah.

.. figure:: ../media/jaw_clench.*
    :align: center
    :alt: Bentuk gelombang rahang mengatup

    Bentuk gelombang rahang mengatup

- **Gelombang Alpha (Mata Tertutup)**  

.. note:: Ini mungkin atau mungkin tidak mudah diamati untuk semua pengguna.

Tutup mata Anda dan rileks. Kami merekam EEG dari korteks frontal untuk mengamati gelombang alpha (8–12 Hz), yang muncul lebih jelas saat Anda tenang.

.. figure:: ../media/alpha_waves.*
    :align: center
    :alt: Gelombang alpha EEG

    Gelombang alpha EEG

- **Tes Lilin Beta**  

.. note:: Ini mungkin atau mungkin tidak mudah diamati untuk semua pengguna.

Untuk mencoba ini:  
Buka **Perangkat Lunak Chords** → **Chords Visualizer** → **FFT Visualizer** → Hubungkan perangkat Anda (Serial/Bluetooth).  
Kemudian, aktifkan fitur **Beta Candle**. Fokus dalam pada lilin. Saat fokus Anda meningkat, kecerahan lilin dan nilai numerik harus meningkat. Saat Anda tidak fokus, nilai turun dan lilin redup atau padam.

.. figure:: ../media/beta_candle.*
    :align: center
    :alt: Tes lilin beta

    Tes lilin beta

Jika semua atau sebagian besar respons ini terlihat jelas, setup Anda benar, dan sinyal EEG Anda cukup stabil untuk analisis.