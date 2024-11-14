CREATE DATABASE treevitality

USE treevitality

-- Tabla de usuarios
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
	email VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL,
    tipo_usuario ENUM('admin', 'usuario', 'empresa') DEFAULT 'usuario'
);

-- Tabla de reportes de actividades
CREATE TABLE reportes_actividades (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT,
    tipo_actividad ENUM('Siembra de árboles', 'Productos sostenibles', 'Ecoturismo', 'Agricultura sostenible', 'Conservación de hábitat', 'Conocimiento de leyes') NOT NULL,
    descripcion TEXT NOT NULL,
    ubicacion VARCHAR(255),
    fecha_reporte TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

-- Tabla de capacitaciones 
CREATE TABLE capacitaciones ( 
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(50) NOT NULL,
    descripcion TEXT NOT NULL,
    url_multimedia VARCHAR(255),
    fecha_publicacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de practicas sostenibles
CREATE TABLE practicas_sostenibles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(50) NOT NULL,
    descripcion TEXT NOT NULL,
    tipo_practica ENUM('Agricultura sostenible', 'Consumo responsable', 'Conservación de recursos', 'Uso de energías limpias') NOT NULL,
    fecha_publicacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de reportes ambientales 
CREATE TABLE reportes_ambientales (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT,
    nombre VARCHAR(70) NOT NULL,
    email_rep VARCHAR(100) NOT NULL,
    ubicacion VARCHAR(255),
    tipo_reporte ENUM('Tala ilegal', 'Tráfico de especies', 'Deforestacion Urbana', 'Deforestacion por agricultura no sostenible', 'Quema de tierras', 'Mineria ilegal', 'Contaminación', 'Incendio forestal','Ocupacion de areas protegidas', 'Otra actividad ilegal') NOT NULL,
    descripcion TEXT NOT NULL, 
    fecha_reporte TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE
);

-- Tabla contactenos
CREATE TABLE contactenos(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(70) NOT NULL,
    email_rep VARCHAR(100) NOT NULL,
    tema VARCHAR(255),
    mensaje VARCHAR(255)
);

-- Tabla de inscripciones en actividades
CREATE TABLE inscripciones_actividades (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT,
    tipo_actividad VARCHAR(100) NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(50) NOT NULL,
    telefono VARCHAR(15),
    fecha_inscripcion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE
);
