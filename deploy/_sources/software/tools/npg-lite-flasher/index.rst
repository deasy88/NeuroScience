.. _npg-lite-flasher:

NPG Lite Flasher
##################

.. youtube:: 2rH9ivyHv-s

Ringkasan
********

NPG Lite Flasher adalah aplikasi desktop open-source yang memungkinkan Anda untuk flash firmware ke Neuro PlayGround Lite, serta papan berbasis ESP32 lainnya menggunakan file biner.
GUI yang dipoles (dan CLI) untuk mengunggah bundel firmware baru ke perangkat NPG Lite Anda (atau papan ESP32).  

- **🖥️ UI Baru yang Elegan**  

  - Antarmuka yang didesain ulang untuk kejelasan  
  - Langkah-langkah built-in untuk mengambil firmware dari GitHub  
  - Dukungan unggahan firmware kustom  
  
- **🔄 Integrasi Satu-Klik**  

  - Luncurkan :ref:`Chords-Web<chords>` atau :ref:`Chords-Python<chords-pythons>` langsung untuk visualisasi real-time  
  
- **🧠 Manajemen Firmware yang Lebih Pintar**  

  - Auto-deteksi nama firmware duplikat  
  - Menampilkan status unduhan langsung dengan tanda centang hijau  
  - Auto-fill nama firmware dari metadata file 
   
- **⚡ Alur Kerja Flashing yang Ditingkatkan**  
  
  - "Add & Flash" sekarang mendukung unggahan kustom dalam satu langkah yang mulus


.. figure:: media/npg-lite-flasher-launch-page.*
    :align: center
    :alt: NPG Lite Flasher

    NPG Lite Flasher

Persyaratan Sistem
*********************

- Sistem Operasi: Windows 10+ / macOS 10.15+ / Linux (glibc 2.27+)  


Persyaratan Perangkat Keras
*********************

- :ref:`Neuro PlayGround Lite Board <neuro-play-ground-lite>`  atau papan ESP32 lainnya.
- USB type-C cable

Menyiapkan perangkat keras
***********************

Mari kita mulai dengan menyiapkan papan NPG Lite atau ESP32 development board Anda.

Instalasi
******************

1. Unduh **installer** dari rilis terbaru: `NPG Lite Flasher Release <https://github.com/upsidedownlabs/NPG-Lite-Flasher/releases/latest>`_

2. Pilih installer untuk OS Anda:  
   
   - Fedora → ``.rpm``  
   - Debian/Ubuntu → ``.deb``  
   - macOS → ``.dmg``  
   - Windows → ``.msi``  
   - Atau unduh **source bundle** untuk membangun sendiri  

3. Jalankan installer untuk **OS Anda**:

.. dropdown:: **Windows (.msi)** 
  :open: 

  1.  Klik dua kali file `.msi` yang diunduh.  
  2.  Jika Anda melihat peringatan SmartScreen, klik **More Info** → **Run Anyway**.  
  3.  Lanjutkan melalui wizard installer: **Next** → pilih lokasi instalasi → **Install** → **Finish**.


.. dropdown:: **Fedora (.rpm)**  

    1. Buka terminal dan jalankan:  
    
    .. code:: 
      
      sudo dnf install npg-lite-flasher-<version>.rpm  
    
    2. Masukkan kata sandi Anda dan konfirmasi instalasi saat diminta.  
    3. Setelah instalasi, luncurkan **NPG Lite Flasher** dari menu Applications Anda.

.. dropdown:: **Debian/Ubuntu (.deb)**  

  1. Buka terminal dan jalankan:  
  
  .. code:: 
    
    sudo apt install ./npg-lite-flasher_<version>_amd64.deb
  
  2. Jika Anda menemukan dependensi yang hilang, jalankan:  
  
  .. code:: 
    
    sudo apt --fix-broken install  
  
  3. Luncurkan **NPG Lite Flasher** dari launcher desktop Anda atau via:  
  
  .. code:: 
    
    npg-lite-flasher

.. dropdown:: **macOS (.dmg)**  

  1. Klik dua kali file `npg-lite-flasher.dmg` yang diunduh.  
  2. Ketika Anda melihat peringatan macOS:
  3. "npg-lite-flasher.dmg" diunduh dari Internet.
      
  ``Apakah Anda yakin ingin membukanya?``

  ``klik **Open**``

  3. Seret **NPG Lite Flasher.app** ke folder **Applications** Anda.  
  4. Keluarkan image yang dipasang dan buka aplikasi dari **Applications**.


4. (Opsional) Bangun dari source 
   
.. code-block:: bash
  
  git clone https://github.com/upsidedownlabs/NPG-Lite-Flasher.git
  cd NPG-Lite-Flasher
  npm i
  cargo tauri build

.. _npg-lite-flasher-uploading-firmware:

Mengunggah Firmware
************************

Anda dapat memilih dari beberapa opsi firmware tergantung pada bagaimana Anda berencana menggunakan NPG Lite - termasuk Bluetooth Low Energy (BLE), Serial, Wi-Fi, atau bahkan unggah firmware kustom Anda sendiri.

.. tab-set:: 

  .. tab-item:: Bluetooth LE

    1. Buka NPG Lite Flasher.
    2. Pilih tab ``Bluetooth LE``, di bagian atas jendela Anda akan melihat tab untuk setiap jenis firmware - klik pada Bluetooth LE untuk menampilkan antarmuka khusus BLE.

    .. figure:: media/npg-lite-flasher-ble-select.*
      :width: 600 px
      :alt: NPG Lite Flasher BLE Selection
    
    3. Bluetooth LE specific interface will appear.
   
    .. figure:: media/npg-lite-flasher-ble.*
      :width: 600 px
      :alt: NPG Lite Flasher BLE Interface

    4. Hubungkan perangkat NPG Lite Anda via USB-C. Flasher harus mendeteksi port COM serial baru. Dari dropdown Port, pilih port yang sesuai dengan NPG Lite Anda. 
   
    .. figure:: media/npg-lite-flasher-ble-select-com.*
      :width: 400 px
      :alt: NPG Lite Flasher BLE Select COM
    
    5. Klik ``Flash``, tombol Flash untuk mulai mengunggah firmware BLE. 
  
    .. figure:: media/npg-lite-flasher-ble-click-flash.*
      :width: 400 px
      :alt: NPG Lite Flasher BLE Click Flash
    
    6. Tunggu konfirmasi, Anda akan melihat pesan "Success". Ini menunjukkan bahwa firmware telah berhasil di-flash.
    
    .. figure:: media/npg-lite-flasher-ble-flash-wait.*
      :width: 400 px
      :alt: NPG Lite Flasher BLE Flashing
    
    .. figure:: media/npg-lite-flasher-ble-flash-comp.*
      :width: 400 px
      :alt: NPG Lite Flasher BLE Flash Complete
    
    7. Restart perangkat Anda, Cabut kabel USB, alihkan saklar power NPG Lite mati lalu nyala, dan papan Anda sekarang akan boot ke firmware Bluetooth LE baru.


  .. tab-item:: Serial

   1. Buka NPG Lite Flasher.
   2. Pilih tab ``Serial``, di bagian atas jendela Anda akan melihat tab untuk setiap jenis firmware - klik pada Serial untuk menampilkan antarmuka khusus Serial.

   .. figure:: media/npg-lite-flasher-serial-select.*
    :width: 600 px
    :alt: NPG Lite Flasher Serial Selection

   3. Antarmuka khusus Serial akan muncul.

   .. figure:: media/npg-lite-flasher-serial.*
    :width: 600 px
    :alt: NPG Lite Flasher Serial Interface

   4. Hubungkan perangkat NPG Lite Anda via USB-C. Flasher harus mendeteksi port COM serial baru. Dari dropdown Port, pilih port yang sesuai dengan NPG Lite Anda. 

   5. Klik ``Flash``, tombol Flash untuk mulai mengunggah firmware Serial. 

   .. figure:: media/npg-lite-flasher-serial-click-flash.*
    :width: 400 px
    :alt: NPG Lite Flasher Serial Click Flash

   6. Tunggu konfirmasi, Anda akan melihat pesan "Success". Ini menunjukkan bahwa firmware telah berhasil di-flash.

   .. figure:: media/npg-lite-flasher-serial-flash-wait.*
    :width: 400 px
    :alt: NPG Lite Flasher Serial Flashing

   .. figure:: media/npg-lite-flasher-serial-flash-comp.*
    :width: 400 px
    :alt: NPG Lite Flasher Serial Flash Complete

   7. Restart perangkat Anda, Cabut kabel USB, alihkan saklar power NPG Lite mati lalu nyala, dan papan Anda sekarang akan boot ke firmware Serial baru.


  .. tab-item:: WiFi

   1. Buka NPG Lite Flasher.
   2. Pilih tab ``WiFi``, di bagian atas jendela Anda akan melihat tab untuk setiap jenis firmware - klik pada WiFi untuk menampilkan antarmuka khusus WiFi.

   .. figure:: media/npg-lite-flasher-wifi-select.*
    :width: 600 px
    :alt: NPG Lite Flasher WiFi Selection

   3. Antarmuka khusus WiFi akan muncul.

   .. figure:: media/npg-lite-flasher-wifi.*
    :width: 600 px
    :alt: NPG Lite Flasher WiFi Interface

   4. Hubungkan perangkat NPG Lite Anda via USB-C. Flasher harus mendeteksi port COM serial baru. Dari dropdown Port, pilih port yang sesuai dengan NPG Lite Anda. 

   5. Klik ``Flash``, tombol Flash untuk mulai mengunggah firmware WiFi. 

   .. figure:: media/npg-lite-flasher-wifi-click-flash.*
    :width: 400 px
    :alt: NPG Lite Flasher WiFi Click Flash

   6. Tunggu konfirmasi, Anda akan melihat pesan "Success". Ini menunjukkan bahwa firmware telah berhasil di-flash.

   .. figure:: media/npg-lite-flasher-wifi-flash-wait.*
    :width: 400 px
    :alt: NPG Lite Flasher WiFi Flashing

   .. figure:: media/npg-lite-flasher-wifi-flash-comp.*
    :width: 400 px
    :alt: NPG Lite Flasher WiFi Flash Complete

   7. Restart perangkat Anda, Cabut kabel USB, alihkan saklar power NPG Lite mati lalu nyala, dan papan Anda sekarang akan boot ke firmware WiFi baru.
  
  .. tab-item:: + Add Custom

   1. Buka NPG Lite Flasher.
   2. Pilih tab ``+Add Custom``, di bagian atas jendela untuk beralih ke mode firmware-kustom.

   .. figure:: media/npg-lite-flasher-custom-select.*
    :width: 600 px
    :alt: NPG Lite Flasher Custom Selection

   3. Antarmuka khusus ``+ Add Custom`` akan muncul.

   .. figure:: media/npg-lite-flasher-custom.*
    :width: 600 px
    :alt: NPG Lite Flasher Custom Interface

   4. **Tambahkan file firmware Anda**: Klik tombol ``Choose File`` untuk menemukan firmware Anda dan pilih file .bin yang dikompilasi.
   5. Setelah diimpor Anda akan melihat nama file firmware Anda di Firmware Name.
   6. Hubungkan perangkat NPG Lite Anda via USB-C. Flasher harus mendeteksi port COM serial baru. Dari dropdown Port, pilih port yang sesuai dengan NPG Lite Anda. 
   
   .. figure:: media/npg-lite-flasher-custom-select-com-file.*
    :width: 400 px
    :alt: NPG Lite Flasher Custom Select Firmware

  
   7. Klik ``Flash``, tombol Flash untuk mulai mengunggah firmware Custom. 

   .. figure:: media/npg-lite-flasher-custom-click-flash.*
    :width: 400 px
    :alt: NPG Lite Flasher Custom Click Flash

   8. Tunggu konfirmasi, Anda akan melihat pesan "Success". Ini menunjukkan bahwa firmware telah berhasil di-flash.

   .. figure:: media/npg-lite-flasher-custom-flash-comp.*
    :width: 400 px
    :alt: NPG Lite Flasher Custom Flash Complete

   9. Restart perangkat Anda, Cabut kabel USB, alihkan saklar power NPG Lite mati lalu nyala, dan papan Anda sekarang akan boot ke firmware Custom baru.

   10. Klik ``Add``, ini akan menambahkan firmware di daftar +Add Custom untuk flash di masa depan - sehingga Anda dapat melewati langkah pemilihan file lain kali.

   .. figure:: media/npg-lite-flasher-custom-click-add.*
    :width: 400 px
    :alt: NPG Lite Flasher Custom Click Add
  
   .. figure:: media/npg-lite-flasher-custom-firmware-main-page.*
    :width: 600 px
    :alt: NPG Lite Flasher Custom Main Page

   .. figure:: media/npg-lite-flasher-custom-flash-direct.*
    :width: 400 px
    :alt: NPG Lite Flasher Custom Flash Directly
 
  
  .. tab-item:: Get from GitHub

   1. Buka NPG Lite Flasher.
   2. Pilih tab ``Get From GitHub``, di bagian atas jendela untuk memilih firmware yang dirancang oleh Upside Down Labs untuk perangkat NPG Lite dan ESP32.

   .. figure:: media/npg-lite-flasher-get-github-select.*
    :width: 600 px
    :alt: NPG Lite Flasher Get from GitHub

   3. Daftar firmware akan muncul. Anda dapat mengunduh beberapa firmware secara simultan, tetapi hanya satu yang dapat di-flash pada satu waktu.
   
   .. figure:: media/npg-lite-flasher-get-github-list-downloads.*
    :width: 700 px
    :alt: NPG Lite Flasher Get from GitHub List Downloads

   4. Setelah diunduh, layar ``Flash Custom Firmware`` akan muncul, klik ``Flash`` untuk flash firmware ke perangkat Anda. Pastikan perangkat NPG Lite Anda terhubung via USB-C. Flasher akan mendeteksi port COM serial secara otomatis. Anda juga dapat memilih port COM dari dropdown Port, sesuai dengan perangkat Anda. 
   
   .. figure:: media/npg-lite-flasher-get-github-click-flash.*
    :width: 400 px
    :alt: NPG Lite Flasher Get from GitHub Flash
  
   5. Tunggu konfirmasi, Anda akan melihat pesan "Success". Ini menunjukkan bahwa firmware telah berhasil di-flash.
 
   .. figure:: media/npg-lite-flasher-get-github-flash-comp.*
    :width: 400 px
    :alt: NPG Lite Flasher Get from GitHub Flash Completed

   6. Restart perangkat Anda, Cabut kabel USB, alihkan saklar power NPG Lite mati lalu nyala, dan papan Anda sekarang akan boot ke firmware baru.

   7. Periksa tab ``Custom Firmwares`` untuk flash di masa depan; ini menghemat Anda dari mengunduh file firmware yang sama lagi.
   
   .. figure:: media/npg-lite-flasher-get-github-custom-list-main.*
    :width: 600 px
    :alt: NPG Lite Flasher Custom Click Add
 

.. dropdown:: Pemecahan Masalah
  :icon: alert-fill

  Perangkat tidak ditemukan: 
  
  - Verifikasi kabel USB-C dan saklar power
  - Instal driver USB-serial yang sesuai

  Kesalahan izin (macOS/Linux):
  
  - Jalankan dengan sudo atau tambahkan pengguna Anda ke grup dialout

  Peringatan SmartScreen (Windows):
  
  - Gunakan More Info → Run Anyway seperti yang dijelaskan di atas


Visualisasi Real-Time
***************************

Setelah flashing, visualisasikan sinyal biopotensial Anda dengan Chords-Web atau Chords-Python:

1. Di flasher, klik Buka ``Chords-Web`` atau ``Chords-Python`` sesuai preferensi Anda (di bawah "Visualize").
   
.. figure:: media/npg-lite-flasher-visualise.*
  :width: 600 px
  :alt: NPG Lite Flasher Visualize options

2. Untuk ``Chords-Web`` tab browser terbuka ke ``Chords-Web``.
3. Klik ``Connect → pilih NPG Lite Anda → mulai streaming``.
4. Untuk ``Chords-Python`` ikuti :ref:`dokumentasi Chords Python<chords-pythons>` .

Gunakan UI untuk:
-------------------

- Pilih 1–3 channel untuk dilihat
- Play/Pause stream langsung
- Terapkan filter bandpass atau notch 50/60 Hz
- Rekam dan ekspor data ke CSV


Repositori GitHub
*******************

Untuk kode sumber lengkap, pelacakan masalah, dan panduan kontribusi, kunjungi repo GitHub NPG Lite Flasher.

Anda akan menemukan panduan setup dan dapat melacak pengembangan berkelanjutan - termasuk perbaikan bug dan peningkatan fitur: `NPG Lite Flasher GitHub <https://github.com/upsidedownlabs/NPG-Lite-Flasher>`_