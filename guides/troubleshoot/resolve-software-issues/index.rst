.. _resolve-software-issues:

Mengatasi masalah perangkat lunak
#################################

:bdg-info:`Arduino IDE`

- **Visualisasi sinyal yang lebih baik:** Banyak orang merasa sulit untuk memvisualisasikan sinyal biopoten sial di serial plotter bahkan jika semuanya benar karena serial plotter dari versi terbaru (v2.0) Arduino IDE memplot sangat sedikit titik data per frame dan ini adalah mengapa Anda mungkin menemukannya bergerak sangat cepat. Untuk mengatasi masalah ini, Anda dapat:

  - Gunakan `aplikasi Chords <chords.upsidedownlabs.tech>`_ untuk memvisualisasikan data. :bdg-success-line:`Direkomendasikan`
  - Unduh versi Arduino IDE 1.8.X (Legacy IDE) di mana serial plotter memplot lebih banyak titik data per frame sehingga bergerak relatif lambat dibandingkan dengan versi terbaru.

- **Pemilihan Port COM:** Pastikan Anda telah memilih port COM yang benar dari papan pengembangan yang terhubung ke laptop Anda. Jika Anda tidak dapat mendeteksi port COM, ikuti langkah-langkah di bawah ini:

  .. card::

    :fab:`windows;pst-color-primary` Untuk Windows

    ^^^^^^^^^^^^^^^^^^

    - Hubungkan papan pengembangan ke laptop Anda melalui USB.
    - Tekan Win + X dan pilih Device Manager.
    - Perluas bagian Ports (COM & LPT).
    - Cari entri seperti "USB Serial Device (COMx)" di mana "x" adalah nomor port COM.

  .. card::

    :fab:`linux;pst-color-primary` Untuk Linux

    ^^^^^^^^^^^^^^^^^^

    - Hubungkan papan pengembangan ke laptop Anda melalui USB.
    - Buka terminal.
    - Jalankan perintah berikut untuk membuat daftar perangkat yang terhubung:

      .. code-block::

        dmesg | grep tty

    - Cari baris yang menunjukkan sesuatu seperti ``/dev/ttyUSB0`` atau ``/dev/ttyACM0``, yang menunjukkan port COM.

  .. card:: Untuk macOS

    :fab:`apple;pst-color-primary` Untuk macOS

    ^^^^^^^^^^^^^^^^^^

    - Hubungkan papan pengembangan ke laptop Anda melalui USB.
    - Buka Terminal.
    - Jalankan perintah berikut:

      .. code-block::

        ls /dev/tty.*

    - Ini akan membuat daftar semua perangkat serial. Cari sesuatu seperti ``/dev/tty.usbserial-XXXX`` atau ``/dev/tty.usbmodemXXXX``.

- **Pemilihan papan pengembangan:** Pilih papan yang benar di Arduino IDE. Untuk memilih papan, buka tools dari menu bar, pilih opsi board dan kemudian pilih papan pengembangan yang Anda hubungkan ke laptop.

  .. note:: Saat menggunakan Cytron Technologies Maker Uno, pastikan Anda memilih papan sebagai Arduino Uno karena itu adalah papan kompatibel Arduino Uno.

- **Setel baudrate:** Pastikan Anda telah memilih baud rate yang benar (yaitu 115200) saat memvisualisasikan sinyal biopoten sial di serial plotter Arduino IDE.

