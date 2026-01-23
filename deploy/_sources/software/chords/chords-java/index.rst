.. _chords-java:

Chords-Java
############

.. youtube:: sQgg8CEn9PY

Ringkasan
********

**Chords Java** adalah proyek berbasis Java open-source untuk memperoleh, memvisualisasikan, dan streaming sinyal bio-potensial real-time seperti **ECG**, **EMG**, **EEG**, dan **EOG** dari perangkat keras BioAmp. Dibangun dengan JavaFX dan mendukung LSL (Lab Streaming Layer), ini menyediakan antarmuka yang andal dan low-latency untuk penelitian, prototyping, dan neuroscience pendidikan.

Fitur
********

+---------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Fitur                     | Deskripsi                                                                                                                                                        |
+===========================+==================================================================================================================================================================+
| Koneksi Serial USB        | Mendeteksi dan terhubung ke papan pengembangan yang kompatibel melalui USB menggunakan `jSerialComm`. Mendukung akuisisi data real-time tanpa kehilangan sampel. |
+---------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Visualisasi Real-Time     | Menampilkan data bio-potensial multi-channel dengan scrolling waveform yang halus menggunakan JavaFX LineCharts.                                               |
+---------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Deteksi Kehilangan Sampel | Secara otomatis mendeteksi dan memberitahu pada kehilangan paket atau sampel yang hilang menggunakan counter paket di firmware.                                 |
+---------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Streaming LSL             | Streaming sinyal multi-channel yang tersinkronisasi menggunakan Lab Streaming Layer (LSL), menjadikannya kompatibel dengan alat seperti Chords-LSL-Visualizer, OpenViBE, dan Open Ephys |
+---------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+


Persyaratan Perangkat Lunak
*********************

- `Java Development Kit (JDK 17+) <https://www.oracle.com/in/java/technologies/downloads/>`_ – Diperlukan untuk mengkompilasi dan menjalankan aplikasi  
- `VS Code <https://code.visualstudio.com/>`_ atau IDE yang kompatibel Java   
- `jSerialComm <https://fazecast.github.io/jSerialComm/>`_ (sudah dibundel di repo)  
- `Arduino IDE <https://support.arduino.cc/hc/en-us/articles/360019833020-Download-and-install-Arduino-IDE>`_ - Diperlukan untuk mengunggah firmware ke papan arduino
- `Chords-LSL-Visualizer <https://github.com/upsidedownlabs/Chords-LSL-Visualizer/releases/tag/v0.1.0>`_ - untuk streaming LSL langsung data

Persyaratan Perangkat Keras
*********************

Untuk menggunakan Chords-Java, Anda memerlukan:

- Papan pengembangan yang menjalankan `Chords Arduino Firmware <https://github.com/upsidedownlabs/Chords-Arduino-Firmware>`_  
- Kabel USB  
- :ref:`Perangkat Keras BioAmp<upsidedownlabs_hardware_home>` dan aksesori (seperti elektroda)  

Menyiapkan Perangkat Keras
***********************

Hubungkan rantai sinyal BioAmp Anda:

1. Hubungkan elektroda gel atau elektroda kering sesuai dengan jenis sinyal yang diukur, seperti ECG atau EMG. Untuk panduan penempatan detail :ref:`kunjungi<using-gel-electrodes>`.  
2. Pasang Perangkat Keras BioAmp ke papan pengembangan (mis., Arduino UNO R4, ESP32, dll.).  
3. Hubungkan papan ke laptop Anda melalui USB.  
4. Unggah firmware (dengan baud rate dan protokol yang benar) menggunakan Arduino IDE.

Mengunggah Firmware
**********************

- Pergi ke repo `Chords Arduino Firmware <https://github.com/upsidedownlabs/Chords-Arduino-Firmware>`_.  
- Temukan papan Anda di tabel papan yang didukung.  
- Salin dan tempel sketch ke Arduino IDE.  
- Pilih papan dan COM port yang benar di bawah **Tools**.  
- Unggah kode.

.. _using-chords-java:

Menggunakan Chords-Java
******************

Untuk meluncurkan dan menjalankan proyek Java:

1. **Unduh Repositori**:  

   - Kunjungi `Repositori GitHub Chords-Java <https://github.com/upsidedownlabs/Chords-Java>`_  
   - Atau gunakan Git Bash. 

   .. code-block:: console

      git clone https://github.com/upsidedownlabs/Chords-Java.git

2. **Navigasi ke folder proyek**:

   - Buka Windows Terminal dengan ``Win + X`` dan pilih **Windows Terminal** dari menu. Atau, tekan ``Win + S``, ketik *Windows Terminal*, dan tekan **Enter**.
   - Gunakan perintah ``cd`` (change directory) untuk pergi ke folder tempat proyek Anda berada. Sebagai contoh:

   .. code-block:: powershell

      cd "C:\Users\YourName\Downloads\Chords-Java"

   Ganti path contoh dengan path aktual ke direktori proyek Anda.

3. **Kompilasi dan Jalankan**:

   Untuk Kompilasi
   - Gunakan perintah berikut untuk mengkompilasi kode:

   .. code-block:: console

      javac -d bin -cp "lib/*" src/ChordsUSB.java examples/ChordsLSLStreamer.java      
   
   - Gunakan perintah berikut untuk menjalankan kode:
   
   .. code-block:: console

      java '-Djna.library.path=lib' -cp "bin;lib/*" ChordsLSLStreamer  


Streaming LSL
*************

Untuk streaming data ke alat seperti `Chords LSL Visualizer <https://github.com/upsidedownlabs/Chords-LSL-Visualizer>`_:

1. Unggah firmware dengan dukungan LSL.
2. Jalankan kelas ``ChordsLSLStreamer.java``.  
3. Pastikan PC Anda dapat mendeteksi perangkat USB.
4. Stream bernama ``Chords_USB_Stream`` akan muncul di alat LSL Anda ketika Anda klik ``Refresh``.
5. Mulai stream dan visualisasikan data langsung.

.. note::
   Streaming LSL penting untuk menjalankan aplikasi dan alat lintas platform.

Aplikasi
************

1. Elektrokardiografi (ECG) 
==============================

.. figure:: ./media/ECG_img.*
   :align: center
   :alt: Interface in Light Mode

- Menampilkan waveform ECG real-time   

2. Elektromiografi (EMG) 
==========================

.. figure:: ./media/EMG_img.*
   :align: center
   :alt: Interface in Light Mode

- Memvisualisasikan sinyal EMG yang difilter dan envelope yang halus  
- Mendeteksi aktivitas otot secara real-time  
- Mendukung penyesuaian halus jendela RMS dan parameter filtering