document.addEventListener('DOMContentLoaded', () => {
    // Referencias a elementos del DOM
    const btnInfo = document.getElementById('btn-info');
    const btnQuiz = document.getElementById('btn-quiz');
    const infoSection = document.getElementById('info-section');
    const quizSection = document.getElementById('quiz-section');
    const quizForm = document.getElementById('quiz-form');
    const questionsContainer = document.getElementById('questions-container');
    const resultsContainer = document.getElementById('results-container');
    const btnNewQuiz = document.getElementById('btn-new-quiz'); // Botón nueva prueba

    // --- Base de Datos de Preguntas ---
    // Total: 135 preguntas (15 por tema)
    const allQuestions = [
        // === TEMA 1: Conceptos básicos de Conectividad y redes (15) ===
        {
            topic: 1, type: 'single',
            question: '¿Cuál es la función principal de un servidor DNS?',
            options: ['Asignar direcciones IP dinámicamente', 'Traducir nombres de dominio a direcciones IP', 'Filtrar contenido web malicioso', 'Almacenar archivos de sitios web'],
            correctAnswer: 'Traducir nombres de dominio a direcciones IP'
        },
        {
            topic: 1, type: 'single',
            question: '¿Qué protocolo garantiza la entrega ordenada y fiable de paquetes?',
            options: ['UDP', 'IP', 'TCP', 'HTTP'],
            correctAnswer: 'TCP'
        },
        {
            topic: 1, type: 'single',
            question: 'Una dirección IP como 192.168.1.1 pertenece típicamente a una red:',
            options: ['WAN', 'MAN', 'LAN', 'Internet Pública'],
            correctAnswer: 'LAN'
        },
        {
            topic: 1, type: 'single',
            question: '¿Qué dispositivo se utiliza para conectar múltiples dispositivos dentro de la misma red local de forma eficiente, enviando tráfico solo al puerto destino?',
            options: ['Hub', 'Router', 'Modem', 'Switch'],
            correctAnswer: 'Switch'
        },
        {
            topic: 1, type: 'single',
            question: 'La máscara de subred 255.255.255.0 indica que los primeros _______ octetos identifican la red.',
            options: ['Uno', 'Dos', 'Tres', 'Cuatro'],
            correctAnswer: 'Tres'
        },
        {
            topic: 1, type: 'multiple',
            question: 'Selecciona protocolos comúnmente usados para el correo electrónico:',
            options: ['HTTP', 'SMTP', 'FTP', 'POP3', 'IMAP', 'DNS'],
            correctAnswer: ['SMTP', 'POP3', 'IMAP']
        },
        {
            topic: 1, type: 'single',
            question: '¿Qué significa "WLAN"?',
            options: ['Wide Local Area Network', 'Wireless Local Area Network', 'Wired Local Area Network', 'Web Local Area Network'],
            correctAnswer: 'Wireless Local Area Network'
        },
        {
            topic: 1, type: 'single',
            question: '¿Qué función cumple la Puerta de Enlace (Gateway) en una red local?',
            options: ['Asignar direcciones IP', 'Traducir nombres de dominio', 'Permitir la comunicación con redes externas', 'Conectar dispositivos dentro de la LAN'],
            correctAnswer: 'Permitir la comunicación con redes externas'
        },
         {
            topic: 1, type: 'single',
            question: '¿Cuál es la principal diferencia entre IPv4 e IPv6?',
            options: ['Velocidad de transmisión', 'Seguridad integrada', 'Longitud de la dirección (cantidad de bits)', 'Protocolo de transporte utilizado'],
            correctAnswer: 'Longitud de la dirección (cantidad de bits)'
        },
        {
            topic: 1, type: 'single',
            question: '¿Qué protocolo es "sin conexión" y prioriza la velocidad sobre la fiabilidad?',
            options: ['TCP', 'HTTP', 'UDP', 'FTP'],
            correctAnswer: 'UDP'
        },
        {
            topic: 1, type: 'single',
            question: 'La topología de red más común en las LAN modernas, donde cada dispositivo se conecta a un punto central (como un switch), es la topología en:',
            options: ['Anillo', 'Bus', 'Malla', 'Estrella'],
            correctAnswer: 'Estrella'
        },
        {
            topic: 1, type: 'single',
            question: '¿Qué protocolo se usa para transferir archivos entre cliente y servidor?',
            options: ['HTTP', 'SMTP', 'FTP', 'DNS'],
            correctAnswer: 'FTP'
        },
        {
            topic: 1, type: 'single',
            question: '¿Qué identifica de forma única a un dispositivo en una red TCP/IP?',
            options: ['Dirección MAC', 'Dirección IP', 'Nombre de Host', 'Puerto'],
            correctAnswer: 'Dirección IP'
        },
         {
            topic: 1, type: 'multiple',
            question: '¿Cuáles de los siguientes son considerados tipos de redes según su alcance?',
            options: ['TCP', 'LAN', 'UDP', 'WAN', 'HTTP', 'MAN'],
            correctAnswer: ['LAN', 'WAN', 'MAN']
        },
        {
            topic: 1, type: 'single',
            question: '¿Qué añade HTTPS respecto a HTTP?',
            options: ['Mayor velocidad', 'Compresión de datos', 'Capa de seguridad (cifrado)', 'Soporte para video'],
            correctAnswer: 'Capa de seguridad (cifrado)'
        },

        // === TEMA 2: Reconocimiento y manejo de principales Sistemas Operativos (15) ===
        {
            topic: 2, type: 'single',
            question: '¿Cuál es la función principal de un Sistema Operativo?',
            options: ['Ejecutar aplicaciones de ofimática', 'Gestionar los recursos de hardware y software', 'Proteger contra virus', 'Navegar por internet'],
            correctAnswer: 'Gestionar los recursos de hardware y software'
        },
        {
            topic: 2, type: 'single',
            question: '¿Cuál de estos es un sistema operativo de código abierto basado en Linux?',
            options: ['Windows 11', 'macOS', 'Ubuntu', 'iOS'],
            correctAnswer: 'Ubuntu'
        },
        {
            topic: 2, type: 'single',
            question: 'El comando `cd` en Linux y macOS se utiliza para:',
            options: ['Copiar archivos', 'Crear directorios', 'Cambiar el directorio actual', 'Listar archivos'],
            correctAnswer: 'Cambiar el directorio actual'
        },
        {
            topic: 2, type: 'single',
            question: '¿Qué interfaz de usuario se basa en comandos de texto?',
            options: ['GUI (Graphical User Interface)', 'API (Application Programming Interface)', 'CLI (Command-Line Interface)', 'WUI (Web User Interface)'],
            correctAnswer: 'CLI (Command-Line Interface)'
        },
        {
            topic: 2, type: 'multiple',
            question: 'Selecciona sistemas operativos típicamente encontrados en dispositivos móviles:',
            options: ['Windows Server', 'Android', 'iOS', 'Linux Mint', 'macOS'],
            correctAnswer: ['Android', 'iOS']
        },
        {
            topic: 2, type: 'single',
            question: '¿Qué utilidad en Windows permite ver los procesos en ejecución y el uso de recursos?',
            options: ['Explorador de archivos', 'Panel de control', 'Administrador de tareas', 'Símbolo del sistema'],
            correctAnswer: 'Administrador de tareas'
        },
        {
            topic: 2, type: 'single',
            question: 'El sistema de archivos predominante en macOS moderno es:',
            options: ['NTFS', 'ext4', 'FAT32', 'APFS'],
            correctAnswer: 'APFS'
        },
        {
            topic: 2, type: 'single',
            question: '¿Qué significa que un SO gestione la memoria?',
            options: ['Controlar el espacio en disco duro', 'Asignar y liberar RAM a los procesos', 'Organizar los archivos en carpetas', 'Gestionar la conexión de red'],
            correctAnswer: 'Asignar y liberar RAM a los procesos'
        },
        {
            topic: 2, type: 'single',
            question: 'En Linux, el comando para obtener privilegios de superusuario (administrador) es a menudo:',
            options: ['admin', 'runas', 'sudo', 'exec'],
            correctAnswer: 'sudo'
        },
        {
            topic: 2, type: 'single',
            question: '¿Cuál de estas es una característica distintiva de Linux?',
            options: ['Interfaz gráfica única (Aqua)', 'Amplia variedad de distribuciones (distros)', 'Sistema de archivos NTFS por defecto', 'Integración exclusiva con hardware Apple'],
            correctAnswer: 'Amplia variedad de distribuciones (distros)'
        },
        {
            topic: 2, type: 'multiple',
            question: '¿Cuáles son funciones fundamentales de un Sistema Operativo?',
            options: ['Gestión de procesos', 'Edición de video', 'Gestión de memoria', 'Navegación web', 'Gestión de archivos', 'Gestión de E/S'],
            correctAnswer: ['Gestión de procesos', 'Gestión de memoria', 'Gestión de archivos', 'Gestión de E/S']
        },
         {
            topic: 2, type: 'single',
            question: 'El núcleo (kernel) de Android está basado en:',
            options: ['Windows NT', 'Linux', 'BSD (como macOS)', 'Un núcleo propio de Google'],
            correctAnswer: 'Linux'
        },
         {
            topic: 2, type: 'single',
            question: '¿Qué utilidad en macOS es similar al Administrador de Tareas de Windows?',
            options: ['Finder', 'Preferencias del Sistema', 'Terminal', 'Monitor de Actividad'],
            correctAnswer: 'Monitor de Actividad'
        },
        {
            topic: 2, type: 'single',
            question: '¿Qué significa GUI?',
            options: ['General User Input', 'Graphical User Interface', 'Global Unique Identifier', 'Group User Information'],
            correctAnswer: 'Graphical User Interface'
        },
        {
            topic: 2, type: 'single',
            question: 'El sistema de archivos ext4 es comúnmente asociado con:',
            options: ['Windows', 'macOS', 'Linux', 'iOS'],
            correctAnswer: 'Linux'
        },

        // === TEMA 3: Identificación de virus y fundamentos de malware (15) ===
        {
            topic: 3, type: 'single',
            question: '¿Qué tipo de malware se auto-replica y propaga a través de redes sin intervención del usuario?',
            options: ['Virus', 'Troyano', 'Gusano (Worm)', 'Rootkit'],
            correctAnswer: 'Gusano (Worm)'
        },
        {
            topic: 3, type: 'single',
            question: 'Malware que cifra los archivos del usuario y exige un pago para descifrarlos:',
            options: ['Spyware', 'Adware', 'Ransomware', 'Botnet'],
            correctAnswer: 'Ransomware'
        },
        {
            topic: 3, type: 'single',
            question: 'Software que se disfraza de legítimo pero contiene funcionalidades ocultas dañinas:',
            options: ['Virus', 'Gusano', 'Troyano', 'Ransomware'],
            correctAnswer: 'Troyano'
        },
        {
            topic: 3, type: 'single',
            question: '¿Cuál es el propósito principal del Spyware?',
            options: ['Mostrar publicidad no deseada', 'Recopilar información del usuario sin consentimiento', 'Bloquear el acceso al sistema', 'Ocultar otro malware'],
            correctAnswer: 'Recopilar información del usuario sin consentimiento'
        },
        {
            topic: 3, type: 'multiple',
            question: 'Selecciona vectores comunes de infección de malware:',
            options: ['Adjuntos de correo electrónico maliciosos', 'Actualizaciones oficiales del SO', 'Descargas de software de fuentes no confiables', 'Sitios web legítimos y seguros', 'Dispositivos USB infectados'],
            correctAnswer: ['Adjuntos de correo electrónico maliciosos', 'Descargas de software de fuentes no confiables', 'Dispositivos USB infectados']
        },
        {
            topic: 3, type: 'single',
            question: 'Un Keylogger es un tipo específico de:',
            options: ['Ransomware', 'Virus', 'Spyware', 'Gusano'],
            correctAnswer: 'Spyware'
        },
        {
            topic: 3, type: 'single',
            question: '¿Qué tipo de malware está diseñado específicamente para ocultar su presencia y la de otro software malicioso en el sistema?',
            options: ['Adware', 'Troyano', 'Rootkit', 'Virus'],
            correctAnswer: 'Rootkit'
        },
        {
            topic: 3, type: 'single',
            question: 'Una red de computadoras infectadas y controladas remotamente por un atacante se denomina:',
            options: ['LAN', 'VPN', 'Botnet', 'Honeypot'],
            correctAnswer: 'Botnet'
        },
        {
            topic: 3, type: 'single',
            question: '¿Cuál es la diferencia fundamental entre un Virus y un Gusano?',
            options: ['El virus cifra archivos, el gusano no', 'El gusano necesita intervención humana para propagarse, el virus no', 'El virus se adjunta a archivos/programas, el gusano se auto-propaga por la red', 'El gusano es siempre menos dañino que el virus'],
            correctAnswer: 'El virus se adjunta a archivos/programas, el gusano se auto-propaga por la red'
        },
        {
            topic: 3, type: 'multiple',
            question: '¿Qué medidas ayudan a prevenir infecciones de malware?',
            options: ['Mantener software actualizado (SO y apps)', 'Usar contraseñas débiles', 'Instalar software antivirus/antimalware', 'Hacer clic en todos los enlaces de correos', 'Ser cauteloso con descargas y adjuntos'],
            correctAnswer: ['Mantener software actualizado (SO y apps)', 'Instalar software antivirus/antimalware', 'Ser cauteloso con descargas y adjuntos']
        },
         {
            topic: 3, type: 'single',
            question: '¿Qué es Adware?',
            options: ['Software que roba contraseñas', 'Software que muestra publicidad no deseada', 'Software que cifra archivos', 'Software que controla el PC remotamente'],
            correctAnswer: 'Software que muestra publicidad no deseada'
        },
         {
            topic: 3, type: 'single',
            question: 'Un ataque "drive-by download" ocurre cuando:',
            options: ['El usuario descarga intencionalmente un archivo infectado', 'Se descarga malware automáticamente al visitar un sitio web comprometido', 'Se recibe malware a través de un mensaje SMS', 'Se instala malware desde un CD/DVD'],
            correctAnswer: 'Se descarga malware automáticamente al visitar un sitio web comprometido'
        },
        {
            topic: 3, type: 'single',
            question: 'El análisis de malware que ejecuta el código sospechoso en un entorno controlado y aislado se llama:',
            options: ['Análisis estático', 'Análisis heurístico', 'Análisis de firmas', 'Análisis dinámico (Sandboxing)'],
            correctAnswer: 'Análisis dinámico (Sandboxing)'
        },
         {
            topic: 3, type: 'single',
            question: '¿Por qué un troyano es llamado así?',
            options: ['Por su origen geográfico', 'Por su capacidad de replicarse rápidamente', 'Por disfrazarse de algo benigno para infiltrarse (como el Caballo de Troya)', 'Por atacar específicamente bases de datos'],
            correctAnswer: 'Por disfrazarse de algo benigno para infiltrarse (como el Caballo de Troya)'
        },
        {
            topic: 3, type: 'single',
            question: 'El objetivo principal de mantener actualizado el software antivirus es:',
            options: ['Mejorar el rendimiento del PC', 'Añadir nuevas funcionalidades', 'Actualizar la base de datos de firmas de malware conocido', 'Limpiar archivos temporales'],
            correctAnswer: 'Actualizar la base de datos de firmas de malware conocido'
        },


        // === TEMA 4: Interacción con software de ofimática (15) ===
        {
            topic: 4, type: 'single',
            question: '¿Qué aplicación de la suite Microsoft Office se utiliza principalmente para crear y editar documentos de texto?',
            options: ['Excel', 'PowerPoint', 'Word', 'Access'],
            correctAnswer: 'Word'
        },
        {
            topic: 4, type: 'single',
            question: 'En una hoja de cálculo (Excel, Calc, Sheets), ¿qué símbolo suele preceder a una fórmula?',
            options: ['# (Almohadilla)', '& (Ampersand)', '= (Igual)', '$ (Peso)'],
            correctAnswer: '= (Igual)'
        },
        {
            topic: 4, type: 'single',
            question: 'El formato de archivo .pptx corresponde a:',
            options: ['Documento de Word', 'Hoja de cálculo de Excel', 'Presentación de PowerPoint', 'Base de datos de Access'],
            correctAnswer: 'Presentación de PowerPoint'
        },
        {
            topic: 4, type: 'single',
            question: '¿Cuál es la alternativa de código abierto más conocida a Microsoft Office?',
            options: ['Google Workspace', 'iWork (Apple)', 'WPS Office', 'LibreOffice'],
            correctAnswer: 'LibreOffice'
        },
        {
            topic: 4, type: 'multiple',
            question: 'Selecciona aplicaciones que forman parte de Google Workspace (anteriormente G Suite):',
            options: ['Word', 'Docs', 'Excel', 'Sheets', 'PowerPoint', 'Slides', 'Outlook'],
            correctAnswer: ['Docs', 'Sheets', 'Slides']
        },
        {
            topic: 4, type: 'single',
            question: 'La función "Tabla Dinámica" en Excel/Calc se utiliza principalmente para:',
            options: ['Crear gráficos complejos', 'Resumir y analizar grandes cantidades de datos', 'Validar la ortografía del documento', 'Insertar imágenes prediseñadas'],
            correctAnswer: 'Resumir y analizar grandes cantidades de datos'
        },
        {
            topic: 4, type: 'single',
            question: '¿Qué aplicación de Microsoft Office se utiliza para gestionar correo electrónico, calendario y contactos?',
            options: ['OneNote', 'Teams', 'Outlook', 'Publisher'],
            correctAnswer: 'Outlook'
        },
        {
            topic: 4, type: 'single',
            question: 'El formato de archivo .odt es el formato nativo de:',
            options: ['Microsoft Word (.docx)', 'LibreOffice Writer', 'Google Docs', 'Apple Pages'],
            correctAnswer: 'LibreOffice Writer'
        },
        {
            topic: 4, type: 'single',
            question: '¿Qué son las macros en el software de ofimática?',
            options: ['Plantillas de diseño predefinidas', 'Secuencias de comandos para automatizar tareas repetitivas', 'Comentarios añadidos a un documento', 'Gráficos estadísticos avanzados'],
            correctAnswer: 'Secuencias de comandos para automatizar tareas repetitivas'
        },
        {
            topic: 4, type: 'multiple',
            question: '¿Qué funcionalidades suelen ofrecer las suites de ofimática para la colaboración?',
            options: ['Edición simultánea (coedición)', 'Control de cambios', 'Comentarios', 'Compilación de código fuente', 'Gestión de bases de datos NoSQL'],
            correctAnswer: ['Edición simultánea (coedición)', 'Control de cambios', 'Comentarios']
        },
        {
            topic: 4, type: 'single',
            question: '¿Qué formato de archivo es comúnmente utilizado para intercambiar datos tabulares simples entre diferentes aplicaciones?',
            options: ['.pdf', '.docx', '.csv', '.pptx'],
            correctAnswer: '.csv'
        },
         {
            topic: 4, type: 'single',
            question: 'En PowerPoint/Impress, ¿qué se utiliza para aplicar un diseño visual consistente a todas las diapositivas?',
            options: ['Animación', 'Transición', 'Patrón de diapositivas (Slide Master)', 'Nota del orador'],
            correctAnswer: 'Patrón de diapositivas (Slide Master)'
        },
         {
            topic: 4, type: 'single',
            question: 'La función `=SUMA(A1:A10)` en una hoja de cálculo realiza la siguiente operación:',
            options: ['Cuenta cuántas celdas tienen números en el rango A1 a A10', 'Calcula el promedio de los valores en el rango A1 a A10', 'Suma los valores de las celdas desde A1 hasta A10', 'Encuentra el valor máximo en el rango A1 a A10'],
            correctAnswer: 'Suma los valores de las celdas desde A1 hasta A10'
        },
        {
            topic: 4, type: 'single',
            question: '¿Qué suite ofimática funciona principalmente en línea (a través del navegador)?',
            options: ['Microsoft Office (versión de escritorio)', 'LibreOffice', 'Google Workspace', 'WPS Office (versión de escritorio)'],
            correctAnswer: 'Google Workspace'
        },
        {
            topic: 4, type: 'single',
            question: '¿Qué aplicación se usaría típicamente para crear una base de datos relacional de escritorio dentro de la suite LibreOffice?',
            options: ['Calc', 'Writer', 'Impress', 'Base'],
            correctAnswer: 'Base'
        },

        // === TEMA 5: Identificación de dispositivos computacionales, hardware y redes (15) ===
        {
            topic: 5, type: 'single',
            question: '¿Qué componente ejecuta las instrucciones de los programas y realiza los cálculos principales?',
            options: ['RAM', 'GPU', 'CPU', 'SSD'],
            correctAnswer: 'CPU'
        },
        {
            topic: 5, type: 'single',
            question: 'La memoria RAM se caracteriza por ser:',
            options: ['Permanente y lenta', 'Volátil y rápida', 'Permanente y rápida', 'Volátil y lenta'],
            correctAnswer: 'Volátil y rápida'
        },
        {
            topic: 5, type: 'single',
            question: '¿Cuál es la principal ventaja de un SSD sobre un HDD?',
            options: ['Mayor capacidad de almacenamiento por el mismo precio', 'Mayor durabilidad física ante golpes', 'Velocidad de lectura/escritura significativamente mayor', 'Menor consumo energético en reposo'],
            correctAnswer: 'Velocidad de lectura/escritura significativamente mayor'
        },
        {
            topic: 5, type: 'single',
            question: '¿Qué componente conecta físicamente todos los elementos internos principales del computador (CPU, RAM, etc.)?',
            options: ['Fuente de Poder (PSU)', 'Tarjeta Gráfica (GPU)', 'Placa Madre (Motherboard)', 'Disco Duro (HDD/SSD)'],
            correctAnswer: 'Placa Madre (Motherboard)'
        },
        {
            topic: 5, type: 'multiple',
            question: 'Selecciona ejemplos de periféricos de ENTRADA:',
            options: ['Monitor', 'Teclado', 'Impresora', 'Mouse', 'Altavoces', 'Escáner'],
            correctAnswer: ['Teclado', 'Mouse', 'Escáner']
        },
        {
            topic: 5, type: 'single',
            question: '¿Qué dispositivo de red permite conectar una red local (LAN) al proveedor de servicios de Internet (ISP)?',
            options: ['Switch', 'Router', 'Access Point', 'Modem'],
            correctAnswer: 'Modem'
        },
        {
            topic: 5, type: 'single',
            question: 'El firmware que inicializa el hardware al encender el PC antes de cargar el SO se llama:',
            options: ['Driver', 'BIOS/UEFI', 'Sistema Operativo', 'Bootloader'],
            correctAnswer: 'BIOS/UEFI'
        },
        {
            topic: 5, type: 'single',
            question: 'Una tarjeta de red (NIC) sirve para:',
            options: ['Procesar gráficos', 'Almacenar datos permanentemente', 'Conectar el computador a una red (Ethernet o Wi-Fi)', 'Proporcionar energía a los componentes'],
            correctAnswer: 'Conectar el computador a una red (Ethernet o Wi-Fi)'
        },
        {
            topic: 5, type: 'single',
            question: '¿Qué dispositivo es esencialmente obsoleto en redes modernas debido a su ineficiencia y generación de colisiones?',
            options: ['Switch', 'Router', 'Hub', 'Access Point'],
            correctAnswer: 'Hub'
        },
        {
            topic: 5, type: 'multiple',
            question: '¿Cuáles de estos son tipos de almacenamiento secundario (persistente)?',
            options: ['RAM', 'CPU Cache', 'SSD', 'HDD', 'Registro del CPU'],
            correctAnswer: ['SSD', 'HDD']
        },
         {
            topic: 5, type: 'single',
            question: '¿Qué función principal tiene una GPU (Tarjeta Gráfica)?',
            options: ['Gestionar la memoria RAM', 'Procesar y generar la salida de video', 'Conectar periféricos USB', 'Controlar el flujo de datos en la red'],
            correctAnswer: 'Procesar y generar la salida de video'
        },
        {
            topic: 5, type: 'single',
            question: 'Un Access Point (AP) se utiliza para:',
            options: ['Conectar dos redes diferentes', 'Proporcionar conexión inalámbrica (Wi-Fi) a una red cableada', 'Modular y demodular señales de internet', 'Filtrar tráfico de red por seguridad'],
            correctAnswer: 'Proporcionar conexión inalámbrica (Wi-Fi) a una red cableada'
        },
        {
            topic: 5, type: 'single',
            question: 'La Fuente de Poder (PSU) se mide principalmente en:',
            options: ['Gigabytes (GB)', 'Gigahertz (GHz)', 'Watts (W)', 'Megabits por segundo (Mbps)'],
            correctAnswer: 'Watts (W)'
        },
        {
            topic: 5, type: 'multiple',
            question: 'Selecciona ejemplos de periféricos de SALIDA:',
            options: ['Micrófono', 'Monitor', 'Webcam', 'Impresora', 'Teclado', 'Altavoces'],
            correctAnswer: ['Monitor', 'Impresora', 'Altavoces']
        },
        {
            topic: 5, type: 'single',
            question: '¿Qué componente es responsable de interconectar diferentes redes y enrutar paquetes entre ellas?',
            options: ['Modem', 'Switch', 'Router', 'Hub'],
            correctAnswer: 'Router'
        },

        // === TEMA 6: Conceptos básicos de Seguridad de la Información y Ciberseguridad (15) ===
        {
            topic: 6, type: 'single',
            question: 'La tríada CIA se refiere a Confidencialidad, Integridad y...',
            options: ['Autenticación', 'Autorización', 'Auditoría', 'Disponibilidad'],
            correctAnswer: 'Disponibilidad'
        },
        {
            topic: 6, type: 'single',
            question: 'Asegurar que la información no ha sido modificada sin autorización corresponde al principio de:',
            options: ['Confidencialidad', 'Integridad', 'Disponibilidad', 'No Repudio'],
            correctAnswer: 'Integridad'
        },
        {
            topic: 6, type: 'single',
            question: 'El proceso de verificar la identidad declarada de un usuario se llama:',
            options: ['Autorización', 'Autenticación', 'Auditoría', 'Cifrado'],
            correctAnswer: 'Autenticación'
        },
        {
            topic: 6, type: 'single',
            question: 'Usar una contraseña junto con un código recibido por SMS es un ejemplo de:',
            options: ['Cifrado Simétrico', 'Hashing', 'Autenticación de Dos Factores (2FA)', 'Firma Digital'],
            correctAnswer: 'Autenticación de Dos Factores (2FA)'
        },
        {
            topic: 6, type: 'multiple',
            question: 'Selecciona métodos de autenticación (factores):',
            options: ['Algo que sabes (contraseña)', 'Hashing SHA-256', 'Algo que tienes (token físico)', 'Cifrado AES', 'Algo que eres (biometría)'],
            correctAnswer: ['Algo que sabes (contraseña)', 'Algo que tienes (token físico)', 'Algo que eres (biometría)']
        },
        {
            topic: 6, type: 'single',
            question: '¿Qué técnica convierte texto plano en texto cifrado usando una clave?',
            options: ['Hashing', 'Compresión', 'Cifrado (Encriptación)', 'Esteganografía'],
            correctAnswer: 'Cifrado (Encriptación)'
        },
        {
            topic: 6, type: 'single',
            question: 'La principal diferencia entre cifrado simétrico y asimétrico radica en:',
            options: ['La longitud del texto cifrado', 'La velocidad del algoritmo', 'El número de claves utilizadas (una o dos)', 'El tipo de datos que pueden cifrar'],
            correctAnswer: 'El número de claves utilizadas (una o dos)'
        },
        {
            topic: 6, type: 'single',
            question: '¿Para qué se utiliza principalmente el Hashing en seguridad?',
            options: ['Para ocultar información (confidencialidad)', 'Para verificar la integridad de los datos', 'Para autenticar usuarios', 'Para garantizar la disponibilidad del servicio'],
            correctAnswer: 'Para verificar la integridad de los datos'
        },
        {
            topic: 6, type: 'single',
            question: 'Una Firma Digital utiliza _______ para garantizar autenticidad, integridad y no repudio.',
            options: ['Cifrado simétrico', 'Hashing únicamente', 'Cifrado asimétrico y hashing', 'Autenticación de dos factores'],
            correctAnswer: 'Cifrado asimétrico y hashing'
        },
        {
            topic: 6, type: 'single',
            question: 'Engañar a las personas para que revelen información confidencial o realicen acciones inseguras se conoce como:',
            options: ['Ataque de Denegación de Servicio (DoS)', 'Inyección SQL', 'Ingeniería Social', 'Cross-Site Scripting (XSS)'],
            correctAnswer: 'Ingeniería Social'
        },
         {
            topic: 6, type: 'single',
            question: '¿Qué es una vulnerabilidad en el contexto de ciberseguridad?',
            options: ['Un evento dañino potencial', 'El impacto negativo de un incidente', 'Una debilidad que puede ser explotada', 'El software utilizado para atacar'],
            correctAnswer: 'Una debilidad que puede ser explotada'
        },
        {
            topic: 6, type: 'single',
            question: 'El protocolo seguro utilizado por HTTPS es:',
            options: ['FTP', 'SSH', 'SSL/TLS', 'SMTP'],
            correctAnswer: 'SSL/TLS'
        },
        {
            topic: 6, type: 'single',
            question: 'El principio de "Mínimo Privilegio" en autorización significa:',
            options: ['Dar acceso completo a todos los administradores', 'Otorgar solo los permisos estrictamente necesarios para realizar una tarea', 'Usar la contraseña más corta posible', 'Auditar todos los accesos con el menor detalle'],
            correctAnswer: 'Otorgar solo los permisos estrictamente necesarios para realizar una tarea'
        },
        {
            topic: 6, type: 'multiple',
            question: '¿Qué elementos son cruciales para la seguridad de la información?',
            options: ['Copias de seguridad regulares', 'Uso de contraseñas fuertes', 'Ignorar actualizaciones de software', 'Concienciación y formación de usuarios', 'Firewalls'],
            correctAnswer: ['Copias de seguridad regulares', 'Uso de contraseñas fuertes', 'Concienciación y formación de usuarios', 'Firewalls']
        },
        {
            topic: 6, type: 'single',
            question: '¿Qué asegura el principio de No Repudio?',
            options: ['Que la información es secreta', 'Que la información no puede ser modificada', 'Que una parte no puede negar haber realizado una acción', 'Que el sistema está siempre disponible'],
            correctAnswer: 'Que una parte no puede negar haber realizado una acción'
        },


        // === TEMA 7: Relación y nociones de motores de bases de datos más conocidas (15) ===
        {
            topic: 7, type: 'single',
            question: '¿Qué tipo de base de datos organiza los datos en tablas con filas y columnas?',
            options: ['Documental', 'Clave-Valor', 'Relacional (SQL)', 'Grafo'],
            correctAnswer: 'Relacional (SQL)'
        },
        {
            topic: 7, type: 'single',
            question: 'SQL significa:',
            options: ['Standard Query Language', 'Structured Query Language', 'Simple Query Language', 'System Query Logic'],
            correctAnswer: 'Structured Query Language'
        },
        {
            topic: 7, type: 'single',
            question: '¿Cuál es el propósito de una Clave Primaria (Primary Key) en una tabla relacional?',
            options: ['Relacionar la tabla con otra tabla', 'Identificar unívocamente cada fila de la tabla', 'Indexar la tabla para búsquedas rápidas', 'Definir el tipo de datos de una columna'],
            correctAnswer: 'Identificar unívocamente cada fila de la tabla'
        },
        {
            topic: 7, type: 'multiple',
            question: 'Selecciona ejemplos de Sistemas Gestores de Bases de Datos (SGBD) Relacionales:',
            options: ['MongoDB', 'MySQL', 'Redis', 'PostgreSQL', 'Cassandra', 'Microsoft SQL Server'],
            correctAnswer: ['MySQL', 'PostgreSQL', 'Microsoft SQL Server']
        },
        {
            topic: 7, type: 'single',
            question: 'MongoDB es un ejemplo popular de base de datos:',
            options: ['Relacional', 'Clave-Valor', 'Columnar', 'Documental (NoSQL)'],
            correctAnswer: 'Documental (NoSQL)'
        },
        {
            topic: 7, type: 'single',
            question: '¿Qué comando SQL se utiliza para extraer datos de una base de datos?',
            options: ['INSERT', 'UPDATE', 'DELETE', 'SELECT'],
            correctAnswer: 'SELECT'
        },
        {
            topic: 7, type: 'single',
            question: 'Redis es un ejemplo de base de datos NoSQL del tipo:',
            options: ['Documental', 'Grafo', 'Clave-Valor', 'Columnar'],
            correctAnswer: 'Clave-Valor'
        },
        {
            topic: 7, type: 'single',
            question: 'Las propiedades ACID (Atomicidad, Consistencia, Aislamiento, Durabilidad) son características clave de:',
            options: ['Las bases de datos NoSQL en general', 'Las transacciones en bases de datos relacionales', 'Los índices de bases de datos', 'El lenguaje SQL'],
            correctAnswer: 'Las transacciones en bases de datos relacionales'
        },
         {
            topic: 7, type: 'single',
            question: '¿Qué comando SQL se utiliza para añadir nuevas filas a una tabla?',
            options: ['ADD', 'CREATE', 'INSERT', 'UPDATE'],
            correctAnswer: 'INSERT'
        },
        {
            topic: 7, type: 'single',
            question: 'El proceso de organizar las tablas en una base de datos relacional para reducir la redundancia y mejorar la integridad se llama:',
            options: ['Indexación', 'Normalización', 'Optimización', 'Replicación'],
            correctAnswer: 'Normalización'
        },
        {
            topic: 7, type: 'multiple',
            question: '¿Cuáles son ventajas comunes asociadas a las bases de datos NoSQL (en comparación con SQL)?',
            options: ['Esquema flexible', 'Soporte universal para transacciones ACID', 'Escalabilidad horizontal más sencilla', 'Modelo relacional estricto', 'Buen rendimiento con grandes volúmenes de datos no estructurados'],
            correctAnswer: ['Esquema flexible', 'Escalabilidad horizontal más sencilla', 'Buen rendimiento con grandes volúmenes de datos no estructurados']
        },
        {
            topic: 7, type: 'single',
            question: 'Una Clave Foránea (Foreign Key) se utiliza para:',
            options: ['Identificar unívocamente una fila', 'Establecer y reforzar un vínculo entre dos tablas', 'Acelerar las búsquedas SELECT', 'Definir un valor por defecto para una columna'],
            correctAnswer: 'Establecer y reforzar un vínculo entre dos tablas'
        },
        {
            topic: 7, type: 'single',
            question: '¿Qué parte de SQL se utiliza para definir la estructura de la base de datos (ej: CREATE TABLE)?',
            options: ['DML (Data Manipulation Language)', 'DCL (Data Control Language)', 'TCL (Transaction Control Language)', 'DDL (Data Definition Language)'],
            correctAnswer: 'DDL (Data Definition Language)'
        },
        {
            topic: 7, type: 'single',
            question: 'SQLite se diferencia de MySQL o PostgreSQL principalmente porque:',
            options: ['Es NoSQL', 'Es una base de datos embebida (basada en archivo, sin servidor)', 'Solo funciona en Linux', 'Es mucho más rápida para cualquier tipo de consulta'],
            correctAnswer: 'Es una base de datos embebida (basada en archivo, sin servidor)'
        },
         {
            topic: 7, type: 'single',
            question: '¿Para qué sirve un índice en una base de datos?',
            options: ['Para garantizar la atomicidad de las transacciones', 'Para mejorar la velocidad de las consultas (SELECT)', 'Para definir las relaciones entre tablas', 'Para almacenar grandes objetos binarios (BLOBs)'],
            correctAnswer: 'Para mejorar la velocidad de las consultas (SELECT)'
        },


        // === TEMA 8: Definiciones de principales técnicas de fraudes informáticos (15) ===
        {
            topic: 8, type: 'single',
            question: 'El envío masivo de correos electrónicos fraudulentos suplantando a una entidad legítima para robar credenciales se llama:',
            options: ['Skimming', 'Vishing', 'Phishing', 'Ransomware'],
            correctAnswer: 'Phishing'
        },
        {
            topic: 8, type: 'single',
            question: '¿Qué técnica de fraude implica el uso de dispositivos físicos en cajeros automáticos o puntos de venta para copiar datos de tarjetas?',
            options: ['Pharming', 'Keylogging', 'Skimming', 'Smishing'],
            correctAnswer: 'Skimming'
        },
        {
            topic: 8, type: 'single',
            question: 'Realizar una estafa a través de una llamada telefónica, haciéndose pasar por un banco o soporte técnico, es:',
            options: ['Phishing', 'Smishing', 'Vishing', 'Baiting'],
            correctAnswer: 'Vishing'
        },
        {
            topic: 8, type: 'single',
            question: 'El "Spear Phishing" se diferencia del phishing tradicional porque es:',
            options: ['Realizado por SMS', 'Más masivo y genérico', 'Dirigido y personalizado a un individuo u organización específica', 'Enviado a través de redes sociales'],
            correctAnswer: 'Dirigido y personalizado a un individuo u organización específica'
        },
        {
            topic: 8, type: 'multiple',
            question: 'Selecciona técnicas que son consideradas Ingeniería Social:',
            options: ['Instalar un Rootkit', 'Pretexting', 'Baiting', 'Ataque DDoS', 'Tailgating'],
            correctAnswer: ['Pretexting', 'Baiting', 'Tailgating']
        },
        {
            topic: 8, type: 'single',
            question: 'El fraude conocido como BEC (Business Email Compromise) generalmente implica:',
            options: ['Cifrar los archivos de la empresa y pedir rescate', 'Engañar a empleados para que realicen transferencias bancarias a cuentas fraudulentas', 'Robar datos de tarjetas de clientes en la web de la empresa', 'Instalar malware en los servidores de la empresa'],
            correctAnswer: 'Engañar a empleados para que realicen transferencias bancarias a cuentas fraudulentas'
        },
        {
            topic: 8, type: 'single',
            question: 'Un Keylogger es un tipo de malware cuyo objetivo principal es:',
            options: ['Mostrar anuncios', 'Cifrar archivos', 'Capturar las pulsaciones del teclado', 'Controlar el ordenador remotamente'],
            correctAnswer: 'Capturar las pulsaciones del teclado'
        },
        {
            topic: 8, type: 'single',
            question: 'Ofrecer algo atractivo (ej: una película gratis en un USB "perdido") para que la víctima introduzca malware en su sistema es un ejemplo de:',
            options: ['Phishing', 'Pretexting', 'Quid pro quo', 'Baiting (Cebo)'],
            correctAnswer: 'Baiting (Cebo)'
        },
         {
            topic: 8, type: 'single',
            question: 'Las estafas de "soporte técnico" fraudulentas a menudo intentan:',
            options: ['Reparar problemas reales del sistema de forma gratuita', 'Vender software antivirus legítimo a bajo costo', 'Convencer a la víctima de que su PC tiene problemas para venderle software inútil o instalar malware', 'Ayudar a la víctima a recuperar archivos borrados'],
            correctAnswer: 'Convencer a la víctima de que su PC tiene problemas para venderle software inútil o instalar malware'
        },
        {
            topic: 8, type: 'single',
            question: 'El uso de información personal robada (RUT, nombre, etc.) para cometer fraudes se denomina:',
            options: ['Skimming', 'Robo de Identidad', 'Phishing', 'Fraude de facturas'],
            correctAnswer: 'Robo de Identidad'
        },
        {
            topic: 8, type: 'multiple',
            question: '¿Qué tipos de malware son comúnmente utilizados en fraudes informáticos?',
            options: ['Troyanos Bancarios', 'Software de presentación (PowerPoint)', 'Keyloggers', 'Adware (solo muestra anuncios)', 'Ransomware (para extorsión)'],
            correctAnswer: ['Troyanos Bancarios', 'Keyloggers', 'Ransomware (para extorsión)']
        },
        {
            topic: 8, type: 'single',
            question: 'Un ataque Man-in-the-Middle (MitM) puede ser usado en fraudes para:',
            options: ['Bloquear el acceso a un sitio web', 'Interceptar y robar información sensible (credenciales, datos bancarios) durante una comunicación', 'Enviar spam masivo', 'Cifrar los datos del disco duro'],
            correctAnswer: 'Interceptar y robar información sensible (credenciales, datos bancarios) durante una comunicación'
        },
         {
            topic: 8, type: 'single',
            question: '¿Qué es Smishing?',
            options: ['Phishing a través de llamadas de voz', 'Phishing a través de correo electrónico', 'Phishing a través de mensajes SMS', 'Fraude usando skimmers'],
            correctAnswer: 'Phishing a través de mensajes SMS'
        },
         {
            topic: 8, type: 'single',
            question: 'Crear un escenario falso (ser un supuesto encuestador, técnico, etc.) para obtener información de la víctima es:',
            options: ['Baiting', 'Pretexting', 'Tailgating', 'Phishing'],
            correctAnswer: 'Pretexting'
        },
        {
            topic: 8, type: 'single',
            question: 'El "Whaling" es una forma de spear phishing dirigida específicamente a:',
            options: ['Usuarios de redes sociales', 'Clientes de un banco específico', 'Altos ejecutivos de una empresa', 'Nuevos empleados'],
            correctAnswer: 'Altos ejecutivos de una empresa'
        },


        // === TEMA 9: Conceptos en la Ley 21.459 de delitos informáticos (Chile) (15) ===
        {
            topic: 9, type: 'single',
            question: 'La Ley 21.459 sobre delitos informáticos en Chile, ¿a qué ley anterior derogó principalmente?',
            options: ['Ley 19.628 (Protección de datos personales)', 'Ley 19.223 (Figuras penales relativas a la informática)', 'Ley 20.393 (Responsabilidad penal de personas jurídicas)', 'Ley de Propiedad Intelectual'],
            correctAnswer: 'Ley 19.223 (Figuras penales relativas a la informática)'
        },
        {
            topic: 9, type: 'single',
            question: '¿Con qué tratado internacional se alinea la Ley 21.459?',
            options: ['Convenio de Viena', 'Acuerdo de París', 'Convenio de Budapest sobre Ciberdelincuencia', 'Tratado de Lisboa'],
            correctAnswer: 'Convenio de Budapest sobre Ciberdelincuencia'
        },
        {
            topic: 9, type: 'single',
            question: 'Según la Ley 21.459, acceder a un sistema informático sin autorización o excediendo la autorización se tipifica como:',
            options: ['Fraude informático (Art. 7)', 'Ataque a la integridad del sistema (Art. 1)', 'Acceso ilícito (Art. 2)', 'Interceptación ilícita (Art. 3)'],
            correctAnswer: 'Acceso ilícito (Art. 2)'
        },
        {
            topic: 9, type: 'single',
            question: 'El Artículo 1 de la Ley 21.459 (Ataque a la integridad de un sistema informático) sanciona conductas como:',
            options: ['Escuchar conversaciones privadas en línea', 'Obstaculizar o impedir el normal funcionamiento de un sistema (ej. DDoS)', 'Crear un documento digital falso', 'Vender contraseñas robadas'],
            correctAnswer: 'Obstaculizar o impedir el normal funcionamiento de un sistema (ej. DDoS)'
        },
        {
            topic: 9, type: 'multiple',
            question: 'El Artículo 8 (Abuso de dispositivos) de la Ley 21.459 sanciona la posesión, producción, venta, etc., de ¿cuáles de los siguientes elementos, si están destinados a cometer delitos de la ley?',
            options: ['Programas computacionales diseñados para hacking', 'Contraseñas o códigos de acceso obtenidos ilícitamente', 'Un computador personal estándar', 'Dispositivos para interceptar comunicaciones', 'Software antivirus'],
            correctAnswer: ['Programas computacionales diseñados para hacking', 'Contraseñas o códigos de acceso obtenidos ilícitamente', 'Dispositivos para interceptar comunicaciones']
        },
        {
            topic: 9, type: 'single',
            question: 'Interceptar transmisiones no públicas de datos informáticos sin autorización es el delito de:',
            options: ['Acceso ilícito (Art. 2)', 'Interceptación ilícita (Art. 3)', 'Ataque a la integridad de datos (Art. 4)', 'Falsificación informática (Art. 5)'],
            correctAnswer: 'Interceptación ilícita (Art. 3)'
        },
        {
            topic: 9, type: 'single',
            question: 'Alterar datos informáticos para que sean tomados como auténticos (ej: modificar un certificado digital) corresponde al delito de:',
            options: ['Fraude informático (Art. 7)', 'Ataque a la integridad de datos (Art. 4)', 'Falsificación informática (Art. 5)', 'Receptación de datos (Art. 6)'],
            correctAnswer: 'Falsificación informática (Art. 5)'
        },
        {
            topic: 9, type: 'single',
            question: 'El Artículo 7 (Fraude informático) requiere que la acción (manipulación de datos, interferencia) se realice con ánimo de lucro y cause un:',
            options: ['Daño moral a la víctima', 'Perjuicio patrimonial a otro', 'Acceso no autorizado', 'Bloqueo del sistema'],
            correctAnswer: 'Perjuicio patrimonial a otro'
        },
        {
            topic: 9, type: 'single',
            question: '¿Pueden las empresas (personas jurídicas) ser responsables penalmente por los delitos de la Ley 21.459?',
            options: ['No, la responsabilidad es siempre individual', 'Sí, si el delito se comete en su beneficio y por falta de supervisión (Art. 10)', 'Solo si el delito es fraude informático', 'Únicamente si son empresas de tecnología'],
            correctAnswer: 'Sí, si el delito se comete en su beneficio y por falta de supervisión (Art. 10)'
        },
        {
            topic: 9, type: 'single',
            question: 'La técnica especial de investigación que permite a la policía actuar online bajo identidad supuesta se llama:',
            options: ['Entrega vigilada electrónica', 'Interceptación de comunicaciones', 'Agente encubierto informático', 'Registro remoto de equipos'],
            correctAnswer: 'Agente encubierto informático'
        },
        {
            topic: 9, type: 'multiple',
            question: '¿Qué acciones sanciona el Artículo 4 (Ataque a la integridad de los datos informáticos)?',
            options: ['Acceder sin permiso', 'Destruir datos informáticos', 'Hacer inaccesibles datos informáticos', 'Interceptar datos en tránsito', 'Alterar datos informáticos sin autorización'],
            correctAnswer: ['Destruir datos informáticos', 'Hacer inaccesibles datos informáticos', 'Alterar datos informáticos sin autorización']
        },
        {
            topic: 9, type: 'single',
            question: 'Almacenar o distribuir datos sabiendo que provienen de un acceso ilícito o interceptación ilícita es el delito de:',
            options: ['Fraude informático (Art. 7)', 'Falsificación informática (Art. 5)', 'Abuso de dispositivos (Art. 8)', 'Receptación de datos informáticos (Art. 6)'],
            correctAnswer: 'Receptación de datos informáticos (Art. 6)'
        },
         {
            topic: 9, type: 'single',
            question: 'La Ley 21.459 establece la obligación para los proveedores de servicios de:',
            options: ['Monitorear todo el contenido de sus usuarios', 'Conservar ciertos datos de tráfico por un tiempo para investigaciones', 'Entregar las contraseñas de sus clientes a la policía sin orden judicial', 'Bloquear el acceso a redes sociales'],
            correctAnswer: 'Conservar ciertos datos de tráfico por un tiempo para investigaciones'
        },
        {
            topic: 9, type: 'single',
            question: '¿Qué permite la técnica de "registro remoto de equipos informáticos" bajo autorización judicial según la ley?',
            options: ['Instalar físicamente un dispositivo en el equipo', 'Acceder y examinar a distancia el contenido de un dispositivo informático', 'Borrar remotamente toda la información del equipo', 'Usar el equipo para enviar correos'],
            correctAnswer: 'Acceder y examinar a distancia el contenido de un dispositivo informático'
        },
        {
            topic: 9, type: 'single',
            question: 'Una agravante específica en la Ley 21.459 podría ser cometer el delito:',
            options: ['Usando una conexión Wi-Fi pública', 'Afectando servicios de utilidad pública o infraestructura crítica', 'Durante la noche', 'Siendo menor de edad'],
            correctAnswer: 'Afectando servicios de utilidad pública o infraestructura crítica'
        },

    ]; // Fin de allQuestions

    let currentQuestions = []; // Almacenará las 25 preguntas seleccionadas para la prueba actual

    // --- Funciones ---

    // Función para barajar un array (Algoritmo Fisher-Yates)
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; // Intercambio de elementos
        }
        return array;
    }

    // Función para cargar las preguntas en el formulario
    function loadQuiz() {
        questionsContainer.innerHTML = '<p>Cargando preguntas...</p>'; // Mensaje mientras carga
        resultsContainer.innerHTML = ''; // Limpiar resultados anteriores

        // Simular una pequeña demora para la carga (opcional)
        setTimeout(() => {
            questionsContainer.innerHTML = ''; // Limpiar mensaje de carga
            const shuffled = shuffleArray([...allQuestions]); // Copia y baraja todas las preguntas
            currentQuestions = shuffled.slice(0, 25); // Selecciona las primeras 25

            currentQuestions.forEach((q, index) => {
                const questionBlock = document.createElement('div');
                questionBlock.classList.add('question-block');
                questionBlock.setAttribute('data-question-index', index); // Para referencia futura

                let optionsHTML = '';
                // Barajar opciones para que no siempre aparezcan en el mismo orden
                const shuffledOptions = shuffleArray([...q.options]);

                shuffledOptions.forEach((option) => { // Iterar sobre las opciones barajadas
                    const inputId = `q${index}_opt${option.replace(/\s+/g, '_').replace(/[^\w]/gi, '')}`; // Crear un ID más robusto
                    if (q.type === 'single') {
                        optionsHTML += `
                            <div>
                                <input type="radio" id="${inputId}" name="q${index}" value="${option}" required>
                                <label for="${inputId}">${option}</label>
                            </div>
                        `;
                    } else if (q.type === 'multiple') {
                        optionsHTML += `
                            <div>
                                <input type="checkbox" id="${inputId}" name="q${index}" value="${option}">
                                <label for="${inputId}">${option}</label>
                            </div>
                        `;
                    }
                });

                questionBlock.innerHTML = `
                    <p>${index + 1}. ${q.question}</p>
                    <div class="options-container">${optionsHTML}</div>
                `;
                questionsContainer.appendChild(questionBlock);
            });
             // Configurar validación para checkboxes de selección múltiple
             setupMultipleChoiceValidation();
        }, 100); // 100ms de retraso simulado
    }

    // Función para asegurar que al menos un checkbox sea seleccionado en preguntas múltiples
    function setupMultipleChoiceValidation() {
        currentQuestions.forEach((q, index) => {
            if (q.type === 'multiple') {
                const checkboxes = questionsContainer.querySelectorAll(`input[name="q${index}"]`);
                const firstCheckbox = checkboxes[0]; // Usaremos el primero para el mensaje de validación

                if (!firstCheckbox) return; // Seguridad por si no hay opciones

                 // Establecer un mensaje de validación personalizado (opcional)
                 firstCheckbox.setCustomValidity('Por favor, selecciona al menos una opción.');

                 checkboxes.forEach(cb => {
                    cb.addEventListener('change', () => {
                        const groupCheckboxes = questionsContainer.querySelectorAll(`input[name="q${index}"]`);
                        const isAnyChecked = Array.from(groupCheckboxes).some(c => c.checked);

                        // Actualizar la validez del primer checkbox basado en si alguno está marcado
                        if (isAnyChecked) {
                             firstCheckbox.setCustomValidity(''); // Válido si al menos uno está marcado
                        } else {
                            firstCheckbox.setCustomValidity('Por favor, selecciona al menos una opción.'); // Inválido si ninguno está marcado
                        }
                    });
                });
            }
        });
    }


    // Función para manejar el envío del formulario
    function handleSubmit(event) {
        event.preventDefault(); // Evitar que la página se recargue

         // Forzar la validación del navegador (incluyendo la personalizada para checkboxes)
        if (!quizForm.checkValidity()) {
            quizForm.reportValidity(); // Muestra los mensajes de error del navegador
            return; // Detener si el formulario no es válido
        }


        resultsContainer.innerHTML = ''; // Limpiar resultados anteriores
        let score = 0;

        currentQuestions.forEach((q, index) => {
            const resultItem = document.createElement('div');
            resultItem.classList.add('result-item');
            const questionBlock = questionsContainer.querySelector(`.question-block[data-question-index="${index}"]`); // Encontrar el bloque de pregunta
            let userAnswer;
            let isCorrect = false;

            if (q.type === 'single') {
                const selectedOption = questionsContainer.querySelector(`input[name="q${index}"]:checked`);
                 // No necesitamos comprobar 'selectedOption' porque 'required' ya lo hizo
                 userAnswer = selectedOption.value;
                 isCorrect = userAnswer === q.correctAnswer;

            } else if (q.type === 'multiple') {
                const checkedOptions = Array.from(questionsContainer.querySelectorAll(`input[name="q${index}"]:checked`));
                userAnswer = checkedOptions.map(cb => cb.value).sort(); // Ordenar para comparación fácil
                const correctAnswerSorted = [...q.correctAnswer].sort(); // Ordenar respuesta correcta

                // Comparación exacta de arrays ordenados
                isCorrect = userAnswer.length === correctAnswerSorted.length &&
                            userAnswer.every((value, i) => value === correctAnswerSorted[i]);

                // Si no se marcó ninguna (aunque la validación previa debería evitarlo), marcamos como no respondida
                if(userAnswer.length === 0) userAnswer = ['No respondida'];

            }

            // Preparar mensaje de resultado
            let resultText = `<strong>Pregunta ${index + 1}: ${q.question}</strong>`;
            let correctAnswerText = Array.isArray(q.correctAnswer) ? q.correctAnswer.join(', ') : q.correctAnswer;
            let userAnswerText = Array.isArray(userAnswer) ? userAnswer.join(', ') : userAnswer;

             if (isCorrect) {
                score++;
                resultItem.classList.add('correct');
                resultText += `Tu respuesta: ${userAnswerText}.<br>¡Correcto!`;
                 // Quitar borde rojo si existía (por validación previa)
                 if (questionBlock) questionBlock.style.border = '';
            } else {
                 resultItem.classList.add('incorrect');
                 resultText += `Tu respuesta: ${userAnswerText}.<br>Incorrecto. La respuesta correcta es: ${correctAnswerText}.`;
                 // Marcar el bloque de pregunta como incorrecto (opcional)
                 if (questionBlock) questionBlock.style.border = '2px solid #dc3545'; // Borde rojo
            }

            resultItem.innerHTML = resultText;
            resultsContainer.appendChild(resultItem);
        });

        // Mostrar puntuación final al inicio del contenedor de resultados
        resultsContainer.insertAdjacentHTML('afterbegin', `<h2 id="score-title">Tu puntuación: ${score} de ${currentQuestions.length}</h2>`);

         // Desplazarse hasta los resultados
        const scoreTitle = document.getElementById('score-title');
        if (scoreTitle) {
            scoreTitle.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    // --- Event Listeners ---

    // Cambiar entre vistas (Información / Prueba)
    btnInfo.addEventListener('click', () => {
        infoSection.classList.remove('hidden');
        quizSection.classList.add('hidden');
        btnInfo.classList.add('active');
        btnQuiz.classList.remove('active');
    });

    btnQuiz.addEventListener('click', () => {
        infoSection.classList.add('hidden');
        quizSection.classList.remove('hidden');
        btnQuiz.classList.add('active');
        btnInfo.classList.remove('active');
        loadQuiz(); // Cargar nuevas preguntas cada vez que se entra a la sección de prueba
    });

    // Enviar el cuestionario
    quizForm.addEventListener('submit', handleSubmit);

     // Botón para cargar una nueva prueba
    btnNewQuiz.addEventListener('click', loadQuiz);


    // --- Inicialización ---
    // No cargamos el quiz al inicio, solo cuando se hace clic en el botón "Realizar Prueba"
    // loadQuiz(); // Comentado para no cargar al inicio
});

// Pequeños ajustes en CSS para mejor visualización (puedes añadir esto a tu style.css)
/*
.question-block {
    transition: border 0.3s ease-in-out; // Para suavizar el cambio de borde en la corrección
}

.options-container div { // Añadir un poco de espacio entre opciones de radio/checkbox
    margin-bottom: 5px;
}

label { // Alinear mejor el texto con el input
    display: inline-block;
    vertical-align: middle;
    margin-left: 5px;
}

input[type="radio"], input[type="checkbox"] {
    vertical-align: middle;
}
*/