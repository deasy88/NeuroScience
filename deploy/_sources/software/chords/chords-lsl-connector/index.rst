.. _chords-lsl-connector:

Chords-LSL-Connector
######################

Ringkasan
********

**Chords-LSL-Connector** menghubungkan Neuro Playground Lite Anda (yang menjalankan Chords Firmware) ke ekosistem LSL, menyediakan:

- **Streaming data real-time** dengan latensi rendah.
- **Dukungan lintas platform** (Windows, macOS, Linux).  
- **Mode GUI** untuk alur kerja yang fleksibel.
- **Penemuan perangkat otomatis** dan iklan stream LSL.  

.. figure:: ./media/chords-lsl-connector-landing-page.*
    :align: center
    :alt: Chords-LSL-Connector Landing Page

    Chords-LSL-Connector

Fitur
--------

- Streaming sinyal bio-potensial multi-saluran melalui LSL.   
- Bekerja dengan build firmware yang kompatibel Chords apa pun.  
  
Apa itu Lab Streaming Layer (LSL)?
------------------------------------

Lab Streaming Layer (LSL) adalah protokol sumber terbuka dan kerangka kerja perangkat lunak untuk streaming data waktu-sinkron secara real-time, terutama dalam eksperimen neurosains dan biomedis.

LSL adalah ekosistem middleware jaringan sumber terbuka untuk streaming, menerima, menyinkronkan, dan merekam stream data neural, fisiologis, dan perilaku yang diperoleh dari perangkat keras sensor yang beragam.

Untuk mengetahui lebih lanjut tentang LSL `klik di sini <https://labstreaminglayer.org/#/>`_.


Persyaratan Sistem
*********************

- Sistem Operasi: Windows 10+ / macOS 10.15+ / Linux (glibc 2.27+)  


Persyaratan Perangkat Keras
*********************

- :ref:`Papan Neuro PlayGround Lite <neuro-play-ground-lite>`.
- Kabel USB type-C
- Atau repositori firmware Chords Arduino di `Chords Arduino Firmware GitHub <https://github.com/upsidedownlabs/Chords-Arduino-Firmware>`_.

Menyiapkan perangkat keras
***********************

Buat semua koneksi sesuai dengan perangkat keras yang Anda gunakan, termasuk koneksi sensor dengan papan pengembangan, koneksi tubuh dengan sensor, dan koneksi dari papan pengembangan ke laptop Anda.


Instalasi
******************

1. Unduh **installer** dari rilis terbaru: `Chords LSL Connector Release <https://github.com/upsidedownlabs/Chords-LSL-Connector/releases>`_

2. Pilih installer untuk OS Anda:  
   
   - Fedora → ``.rpm``  
   - Debian/Ubuntu → ``.deb``  
   - macOS → ``.dmg``  
   - Windows → ``.msi``  
   - Atau unduh **source bundle** untuk membangun sendiri  

3. Jalankan installer untuk **OS Anda**:

.. dropdown:: **Windows (.msi)** 
  :open: 

  1.  Klik ganda file `.msi` yang diunduh.  
  2.  Jika Anda melihat peringatan SmartScreen, klik **More Info** → **Run Anyway**.  
  3.  Lanjutkan melalui wizard installer: **Next** → pilih lokasi instal → **Install** → **Finish**.


.. dropdown:: **Fedora (.rpm)**  

    1. Buka terminal dan jalankan:  
    
    .. code:: 
      
      sudo dnf install chords-lsl-connector-0.3.0-1.x86_64.rpm  
    
    2. Masukkan kata sandi Anda dan konfirmasi instalasi saat diminta.  
    3. Setelah instalasi, luncurkan **Chords LSL Connector** dari menu Applications Anda.

.. dropdown:: **Debian/Ubuntu (.deb)**  

  1. Buka terminal dan jalankan:  
  
  .. code:: 
    
    sudo apt install ./chords-lsl-connector_<version>_amd64.deb
  
  2. Jika Anda menemukan dependensi yang hilang, jalankan:  
  
  .. code:: 
    
    sudo apt --fix-broken install  
  
  3. Luncurkan **Chords LSL Connector** dari launcher desktop Anda atau via:  
  
  .. code:: 
    
    chords-lsl-connector

.. dropdown:: **macOS (.dmg)**  

  1. Klik ganda file `chords-lsl-connector.dmg` yang diunduh.  
  2. Ketika Anda melihat peringatan macOS:
  3. "chords-lsl-connector.dmg" diunduh dari Internet.
      
  Apakah Anda yakin ingin membukanya?

  ``klik **Open**``

  3. Seret **Chords LSL Connector.app** ke folder **Applications** Anda.  
  4. Keluarkan image yang dipasang dan buka aplikasi dari **Applications**.


4. (Optional) Build from source 
   
.. code-block:: bash
  
  git clone https://github.com/upsidedownlabs/Chords-LSL-Connector.git
  cd Chords-LSL-Connector
  npm i
  cargo tauri build

.. _chords-lsl-connector-flashing-firmware:

Mem-flash Firmware
**********************

- Untuk mem-flash firmware: Kunjungi Halaman GitHub dengan mengklik ``Get Firmware``, dan kemudian unduh firmware sesuai dengan papan pengembangan Anda.

.. figure:: media/chords-lsl-connector-get-firmware.*
  :width: 600 px
  :alt: Chords LSL Connector Get Firmware Button    

- Anda juga dapat menggunakan NPG Lite Flasher untuk mem-flash firmware yang diinginkan, untuk mengetahui lebih lanjut kunjungi :ref:`dokumentasi NPG Lite Flasher <npg-lite-flasher>`.

Visualisasi LSL
************************

Setelah perangkat Anda terhubung, Anda dapat memilih dari beberapa opsi tergantung pada bagaimana 
Anda berencana menggunakan NPG Lite - termasuk Bluetooth Low Energy (BLE), Serial atau Wi-Fi.

.. tab-set:: 

  .. tab-item:: Using Bluetooth LE

    1. Luncurkan aplikasi Chords LSL Connector.
    2. Klik tab ``Bluetooth LE``.
  
    .. figure:: media/chords-lsl-connector-ble.*
      :width: 600 px
      :alt: Chords LSL Connector BLE Device

    3. Jika Anda tidak dapat menemukan perangkat, flash firmware BLE dari langkah :ref:`Mem-flash Firmware <chords-lsl-connector-flashing-firmware>` dan nyalakan papan Anda.

    4. Tunggu dialog Available Devices untuk mencantumkan perangkat NPG Anda (misalnya NPG-54:32:04:29:39:b6) dan klik ikon link-nya.

    .. figure:: media/chords-lsl-connector-ble-device-scan.*
      :width: 400 px
      :alt: Chords LSL Connector BLE Device Scan

    .. figure:: media/chords-lsl-connector-ble-device-connect.*
      :width: 400 px
      :alt: Chords LSL Connector BLE Device Connect

    5. Amati panel ``Connection Statistics`` yang menampilkan laju sampling dan total sampel.
  
    .. figure:: media/chords-lsl-connector-ble-visualise.*
      :width: 600 px
      :alt: Chords LSL Connector BLE Device Visualise

    6. Gunakan tombol built-in
    
    - `Chords LSL Visualizer <https://github.com/upsidedownlabs/Chords-LSL-Visualizer/>`_
    - `Brain Vision LSL Viewer <https://www.brainproducts.com/downloads/more-software/>`_
    - `Open EEG GUI <https://open-ephys.org/gui>`_
    - `LabRecorder <https://github.com/labstreaminglayer/App-LabRecorder>`_
    
    untuk memvisualisasikan atau merekam stream LSL langsung Anda.

    .. figure:: media/chords-lsl-connector-visualise.*
      :width: 600 px
      :alt: Chords LSL Connector Visualise Tab


  .. tab-item:: Using Serial

    1. Luncurkan aplikasi Chords LSL Connector.
    2. Klik tab ``Serial``.
  
    .. figure:: media/chords-lsl-connector-serial.*
      :width: 600 px
      :alt: Chords LSL Connector Serial Device

    3. Jika Anda tidak dapat menemukan perangkat, flash firmware Serial dari langkah :ref:`Mem-flash Firmware <chords-lsl-connector-flashing-firmware>` dan nyalakan papan Anda.

    4. Tunggu dialog Available Devices untuk mencantumkan perangkat NPG Anda, jika menggunakan beberapa perangkat maka klik ikon link-nya, untuk perangkat terhubung tunggal akan terdeteksi dan terhubung secara otomatis.

    .. figure:: media/chords-lsl-connector-serial-connect.*
      :width: 400 px
      :alt: Chords LSL Connector Serial Device Connect

    5. Amati panel ``Connection Statistics`` yang menampilkan laju sampling dan total sampel.
  
    .. figure:: media/chords-lsl-connector-serial-visualise.*
      :width: 600 px
      :alt: Chords LSL Connector Serial Device Visualise

    6. Gunakan tombol built-in
    
    - `Chords LSL Visualizer <https://github.com/upsidedownlabs/Chords-LSL-Visualizer/>`_
    - `Brain Vision LSL Viewer <https://www.brainproducts.com/downloads/more-software/>`_
    - `Open EEG GUI <https://open-ephys.org/gui>`_
    - `LabRecorder <https://github.com/labstreaminglayer/App-LabRecorder>`_
    
    untuk memvisualisasikan atau merekam stream LSL langsung Anda.

    .. figure:: media/chords-lsl-connector-visualise.*
      :width: 600 px
      :alt: Chords LSL Connector Visualise Tab
  
  .. tab-item:: Using WiFi

    1. Luncurkan aplikasi Chords LSL Connector.
    2. Buka pengaturan Wi-Fi komputer Anda, pilih jaringan perangkat NPG Lite (misalnya npg-lite-2) dari daftar, dan klik Connect - Anda akan melihat "Connecting" diikuti oleh "Connected" setelah link terjalin.
   
    .. figure:: media/chords-lsl-connector-wifi-connect.*
      :width: 300 px
      :alt: Chords LSL Connector WiFi Connect

    3. Jika Anda tidak dapat menemukan perangkat, flash firmware WiFi dari langkah :ref:`Mem-flash Firmware <chords-lsl-connector-flashing-firmware>` dan nyalakan papan Anda.

    4. Sekarang, Klik tab ``WiFi``.
  
    .. figure:: media/chords-lsl-connector-wifi.*
      :width: 600 px
      :alt: Chords LSL Connector WiFi Device

    5. Amati panel ``Connection Statistics`` yang menampilkan laju sampling dan total sampel.
  
    .. figure:: media/chords-lsl-connector-wifi-visualise.*
      :width: 600 px
      :alt: Chords LSL Connector WiFi Device Visualise

    6. Gunakan tombol built-in
    
    - `Chords LSL Visualizer <https://github.com/upsidedownlabs/Chords-LSL-Visualizer/>`_
    - `Brain Vision LSL Viewer <https://www.brainproducts.com/downloads/more-software/>`_
    - `Open EEG GUI <https://open-ephys.org/gui>`_
    - `LabRecorder <https://github.com/labstreaminglayer/App-LabRecorder>`_
    
    untuk memvisualisasikan atau merekam stream LSL langsung Anda.

    .. figure:: media/chords-lsl-connector-visualise.*
      :width: 600 px
      :alt: Chords LSL Connector Visualise Tab


Repositori GitHub
*******************

Untuk kode sumber lengkap, pelacakan masalah, dan panduan kontribusi, kunjungi repo GitHub Chords-LSL-Connector.

Anda akan menemukan panduan setup dan dapat melacak pengembangan berkelanjutan - termasuk perbaikan bug dan peningkatan fitur: `Chords LSL GitHub <https://github.com/upsidedownlabs/Chords-LSL-Connector>`_